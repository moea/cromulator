(ns cromulator.browser
  (:require [reagent.core    :as r]
            [reagent.ratom]
            [reagent.dom     :as d]
            [react           :as react]
            [cromulator.geom :as geom]
            ["svg-path-commander" :as pc]
            ["kute.js" :as kute]
            [cromulator.spline :as spline]
            [clojure.string  :as str]))

(defn- uniform [v lo hi]
  (max lo (.round js/Math (* (+ lo (- hi lo)) (rand)))))

(def bounds (into (sorted-map)
              {:a  [0.5   20]
               :b  [0.5   20]
               :m  [1     20]
               :n1 [1     80]
               :n2 [1     80]
               :n3 [1     80]}))

(def state (r/atom {:range     bounds
                    :path-refs [nil nil]}))

(defn- event-value [e]
  (-> e .-target .-value))

(defn sliders []
  (into [:div {:style {:position "absolute" :top 10 :left 10}}]
    (for [[v [lo hi]] bounds]
      [:div [:span {:style {:width "2em" :display "inline-block"}} (name v)]
       [:span {:style {:width "2em" :display "inline-block"}} ]
       (let [[lo-v hi-v] (-> @state :range v)]
         [:span {:display "inline-block"}
          [:span {:style {:width "2em" :display "inline-block"}} lo-v]
          [:input {:type "range"
                   :name (str v 0)
                   :min lo
                   :max hi
                   :value hi-v
                   :step lo
                   :on-change #(swap! state assoc-in [:range v 1] (event-value %))}]
          [:span {:style {:width "2em" :display "inline-block" :text-align "right"}} hi]])])))

(defn pt [x]
  (println x)
  x)

(defn- superformula-inputs []
  (into {}
    (for [[k range'] (:range @state)]
      [k (apply uniform k range')])))

(defn superformula-svg [{path-id :path-id path-atom :path-atom}]
  (let [values    (superformula-inputs)
        pts       (geom/superformula-points [0 0] values)
        pth       (pc/roundPath (pc/normalizePath (clj->js (partition 3 (spline/pts->path pts)))) 6)
        {w :width
         h :height
         x :x
         y :y}     (js->clj (pc/getPathBBox pth) :keywordize-keys true)
        scale      (cond-> (min (/ 100 w) (/ 100 h)) (or (< 100 w) (< 100 h)) -)]
    (fn []
      [:svg {:viewBox "0 0 100 100"}
       [:path {:ref (partial reset! path-atom)
               :transform (str "translate(" (min 50 (abs (- (/ (- 100 w) 2) x))) " " (min 50 (abs (- (/ (- 100 h) 2) y)))
                               ") scale(" scale ")")  :id path-id :d (pc/pathToString pth)}]])))

(defn tweener [n1 n2]
  (when (not-any? nil? (:path-refs @state))
    (r/with-let [tween (kute/to (str "#" n1) #js {:path (str "#" n2)} #js {:yoyo true})]
      (when-not (.-playing tween)
        (.start tween))
      [:<>])))

(defn home-page []
  [:div
   [sliders]
   [superformula-svg {:path-id "visible" :path-atom (r/cursor state [:path-refs 0])}]
   [:div {:style {:display "none"}}
    [superformula-svg {:path-id "invisible" :path-atom (r/cursor state [:path-refs 1])}]]
   [tweener "visible" "invisible"]
   ])


(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
