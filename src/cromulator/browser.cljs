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
  (if (identical? v :m)
    (rand-nth (range 0 22 2))
    (max lo (.round js/Math (* (+ lo (- hi lo)) (rand))))))

(def bounds (into (sorted-map)
              {:a  [0.5   20]
               :b  [0.5   20]
               :m  [1     20]
               :n1 [1     80]
               :n2 [1     80]
               :n3 [1     80]}))

(defn- initial-inputs []
  (into {}
    (for [[k range'] bounds]
      [k (apply uniform k range')])))

(def state (r/atom {:inputs    [(initial-inputs) (initial-inputs)]
                    :range     bounds
                    :path-refs [nil nil]
                    :tweening? false
                    :iter      0}))

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

(defn- superformula-inputs []
  (into {}
    (for [[k range'] (:range @state)]
      [k (apply uniform k range')])))

(let [W 100
      H 100]
  (defn superformula-path [& [inputs]]
    (let [inputs (or inputs (superformula-inputs))]
      (let [pts   (geom/superformula-points [0 0] inputs)
        pth       (pc/roundPath (pc/normalizePath (clj->js (partition 3 (spline/pts->path pts)))) 8)
        {w :width
         h :height
         x :x
         y :y}     (js->clj (pc/getPathBBox pth) :keywordize-keys true)
        scale      (cond-> (min (/ W w) (/ H h)) (or (< W w) (< H h)) -)
        trans-x    (min 50 (abs (- (/ (- W w) 2) x)))
        trans-y    (min 50 (abs (- (/ (- H h) 2) y)))]
    (-> pth
        (pc/transformPath #js {:translate #js [trans-x trans-y]
                               :scale     scale})
        pc/pathToString)))))

(defn superformula-svg [{[id0 id1] :path-ids [a0 a1] :path-atoms [in0 in1] :inputs}]
  (let [p0 (superformula-path)]
    (fn []
      [:svg {:viewBox "0 0 100 100"}
       [:path {:ref (partial reset! a0)
               :id  id0
               :d   p0}]
       [:path {:style {:visibility "hidden"}
               :ref (partial reset! a1)
               :id  id1
               :d   (superformula-path @in1)}]])))

(defn tweener [n1 p0 n2 p1 t? cb]
  (when (and @p0 @p1 (not @t?))
    (r/with-let [tween (kute/to (str "#" n1)
                                #js {:path (str "#" n2)}
                                #js {:duration   1000
                                     :onComplete (fn []
                                                   (reset! t? false)
                                                   (cb))})]
      (reset! t? true)
      (.start tween)))
  [:<>])

(defn home-page []
  (r/with-let [iter (r/cursor state [:iter])
               p0   (r/cursor state [:path-refs 0])
               p1   (r/cursor state [:path-refs 1])
               in0  (r/cursor state [:inputs 0])
               in1  (r/cursor state [:inputs 1])
               t?   (r/cursor state [:tweening?])]

    [:div
     [sliders]
     [superformula-svg {:path-ids ["visible" "invisible"] :path-atoms [p0 p1] :inputs [in0 in1]}]
     [tweener "visible" p0 "invisible" p1 t? (fn []
                                               (let [v (swap! state update :iter inc)]
                                                 (when (pos? (mod (:iter v) 2))
                                                   (reset! in1 (superformula-inputs)))))]]))


(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
