(ns cromulator.browser
  (:require [reagent.core    :as r]
            [reagent.ratom]
            [reagent.dom     :as d]
            [react           :as react]
            [cromulator.geom :as geom]
            [cromulator.interop
             :refer [yoyo-animate animate]]
            ["flubber"       :as flubber]
            ["svg-path-commander" :as pc]
            ["kute.js" :as kute]
            [cromulator.spline :as spline]
            [clojure.string  :as str]))

(defn- uniform [v lo hi]
  (if (identical? v :m)
    (rand-nth (range 0 22 2))
    (max lo (js/parseFloat (.toFixed (* (+ lo (- hi lo)) (rand)) 1)))))

(def bounds (into (sorted-map)
              {:a  [0.5   20]
               :b  [0.5   20]
               :m  [2     20]
               :n1 [2     80]
               :n2 [4     80]
               :n3 [4     80]}))


(defn- superformula-inputs [& [state]]
  (into {}
    (for [[k range'] (:range state bounds)]
      [k (apply uniform k range')])))

(let [W 100
      H 100]
  (defn superformula-path [& [inputs state]]
    (let [inputs      (or inputs (superformula-inputs state))]
      (let [pts       (geom/superformula-points [0 0] inputs)
            pth       (pc/roundPath (pc/normalizePath (clj->js (partition 3 (spline/pts->path pts)))) 6)
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

(let [[i1 i2] [(superformula-inputs) (superformula-inputs)]]
  (def state (r/atom {:inputs    [i1 i2]
                      :range     bounds
                      :paths     [(superformula-path i1) (superformula-path i2)]
                      :tween     ""
                      :path-ref  nil
                      :tweening? false
                      :iter      0})))

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

(defn superformula-svg [{id :path-id a :path-ref p :path}]
  [:svg {:viewBox "0 0 100 100"}
   [:path {:ref (partial reset! a)
           :id  id
           :d   @p}]])

(defn tweener [path-ref tweening? paths cb]
  (when (and @path-ref (not @tweening?))
    (let [interp (apply flubber/interpolate @paths)]
      (reset! tweening? true)
      (yoyo-animate
       (fn animator
         ([i progress]
          (let [p (interp (* progress (/ i 2)))]
            (swap! state assoc :tween p)
            (swap! state assoc-in [:paths 0] p)))
         ([]
          (swap! paths assoc 1 (superformula-path nil state))
          (let [interp (apply flubber/interpolate @paths)]
            (animate
             (fn animator
               ([progress]
                (let [p (interp progress)]
                  (swap! state assoc :tween p)
                  (swap! state assoc-in [:paths 0] p)))
               ([]
                (swap! paths assoc 1 (superformula-path nil state))
                (reset! tweening? false)
                (cb)))
             500))))
       1000
       4)))
  [:<>])

(defn home-page []
  (r/with-let [iter  (r/cursor state [:iter])
               p     (r/cursor state [:path-ref])
               pt0   (r/cursor state [:paths 0])
               pt1   (r/cursor state [:paths 1])
               t?    (r/cursor state [:tweening?])
               tween (r/cursor state [:tween])]

    [:div
     [sliders]
     [superformula-svg {:path-id "visible" :path-ref p :path tween}]
     [tweener p t? (r/cursor state [:paths]) (fn [])]]))


(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
