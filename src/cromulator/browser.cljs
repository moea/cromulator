(ns cromulator.browser
  (:require [reagent.core    :as r]
            [reagent.dom     :as d]
            [react           :as react]
            [cromulator.geom :as geom]
            [cromulator.interop
             :refer [yoyo-animate
                     animate
                     event-value
                     checked?]]
            ["flubber"            :as flubber]
            ["svg-path-commander" :as pc]
            [clojure.string       :as str]))

(defn- generate-input [v lo hi incr clamped?]
  (let [input (if (or clamped? (nil? lo))
                lo
                (rand-nth (range lo (+ hi incr) incr)))]
    (cond-> input (= v :a) (max 0.1))))

(def bounds (into (sorted-map)
              {:a  [0 20 0.1 false]
               :b  [0 20 0.1 false]
               :m1 [0 20 1   false]
               :m2 [0 20 1   false]
               :n1 [0 80 1   false]
               :n2 [0 80 1   false]
               :n3 [0 80 1   false]}))

(def defaults
  (-> bounds
      (assoc-in [:m2 0] nil)
      (assoc
        :m1 [2 20 2 false]
        :n1 [2 80 2 false]
        :n2 [4 80 2 false]
        :n3 [4 80 2 false])))

(defn- pts->path [pts]
  (into [(into ["M"] (first pts))]
    (for [pt (rest pts)]
      (into ["L"] pt))))

(defn- superformula-inputs [& [state]]
  (into {}
    (for [[k bounds'] (:bounds (when state @state) defaults)]
      [k (apply generate-input k bounds')])))

(let [W 100
      H 100]
  (defn superformula-path* [& [inputs state]]
    (let [inputs     (or inputs (superformula-inputs state))
          pts        (geom/superformula-points [0 0] inputs)
          pth        (clj->js (pts->path pts))
          {w :width
           h :height
           x :x
           y :y}     (js->clj (pc/getPathBBox pth) :keywordize-keys true)
          scale      (min (/ W w) (/ H h))
          trans-x    (+ (* x scale -1) (/ (- W (* w scale)) 2))
          trans-y    (+ (* y scale -1) (/ (- H (* h scale)) 2))]
      (-> pth
          (pc/transformPath #js {:translate #js [trans-x trans-y]
                                 :scale     scale})
          pc/roundPath
          pc/pathToString))))

(defn superformula-path [& [inputs state]]
  (try
    ;; sometimes with constrained inputs we run into
    ;; unscalable paths etc.
    (superformula-path* inputs state)
    (catch :default _
      (superformula-path inputs state))))

(def state (r/atom {:bounds    defaults
                    :paths     [(superformula-path) (superformula-path)]
                    :tween     ""
                    :path-ref  nil
                    :tweening? false}))

(def assoc-state! (partial swap! state assoc-in))

(let [nums (into #{} (map str) (range 10))]
  (defn param [v]
    (let [v (name v)
          n (some nums v)]
      (cond-> [:span.param (first v)] n (conj [:sub n])))))

(defn f-range [lo hi incr & [{p :precision :or {p 1}}]]
  (into []
    (comp
     (map #(.toFixed % p))
     (map js/parseFloat))
    (range lo hi incr)))

(defn- select-input [k i range* cur-val disabled? k-bounds]
  [:select {:on-change #(swap! k-bounds assoc i (js/parseFloat (event-value %)))
            :key       i
            :disabled  disabled?}
   (for [n range*
         :let [attrs     {:value (str n) :key n}
               selected? (= n cur-val)]]
     [:option (cond-> attrs selected? (assoc :selected true)) n])])

(defn controls [{k-bounds :bounds k :key} & children]
  [:div
   (let [[lo   hi   incr]           (k bounds)
         [lo-v hi-v incr-v clamp-v] @k-bounds]
     [:span.ib
      [param k]
      (for [[i range* cur] [[0 (f-range lo hi incr-v)                       lo-v]
                            [1 (f-range (+ lo incr-v) (+ hi incr-v) incr-v) hi-v]
                            [2 [0.1 0.5 1 2]                                incr-v]]]
        (select-input k i range* cur (or (nil? lo-v) (and (pos? i) clamp-v)) k-bounds))
      [:input {:type      "checkbox"
               :checked   clamp-v
               :disabled  (nil? lo-v)
               :on-change #(swap! k-bounds assoc 3 (checked? %))}]])
   children])

(defn control-set [{bounds' :bounds}]
  (let [on-change #(swap! bounds' assoc-in [:m2 0] (if (checked? %) nil 0))]
    [:div.controls
     [:fieldset
      [:span.ib.labels
       [:span.ib.label "min"]
       [:span.ib.label "max"]
       [:span.ib.label "step"]
       [:span.ib.label "clamp"]]
      (for [k (keys bounds)]
        [controls {:bounds (r/cursor bounds' [k]) :key k}])
      [:span.ib.m2 [:input {:type      "checkbox"
                            :checked   (-> @bounds' :m2 (get 0) nil?)
                            :on-change on-change}]
       [:label "Disable m" [:sub 2]]]]]))

(defn superformula-svg [{a :path-ref p :path}]
  [:svg {:viewBox "0 0 100 100"}
   [:path {:ref (partial reset! a)
           :d   @p}]])

(defn path-interpolator [paths]
  (let [actual (apply flubber/interpolate paths)]
    (fn interpolator [v]
      (let [path (actual v)]
        (assoc-state! [:tween]   path)
        (assoc-state! [:paths 0] path)
        path))))

(defn tweener [{path-ref  :path-ref
                tweening? :tweening?
                paths     :paths}]
  (when (and @path-ref (not @tweening?))
    (reset! tweening? true)
    (let [interp!  (path-interpolator @paths)
          cleanup! #(swap! paths assoc 1 (superformula-path nil state))]
      (yoyo-animate
       (fn yoyo-animator
         ([i progress] (interp! (* progress (/ (+ i 0.2) 2))))
         ([]
          (cleanup!)
          (let [interp! (path-interpolator @paths)]
            (animate
             (fn next-animator
               ([progress] (interp! progress))
               ([]
                (cleanup!)
                (reset! tweening? false)))
             400))))
       1000
       4))))

(defn sf-container []
  (r/with-let [p (r/cursor state [:path-ref])]
    [:div
     [control-set {:bounds (r/cursor state [:bounds])}]
     [superformula-svg {:path-ref p
                        :path     (r/cursor state [:tween])}]
     [tweener {:path-ref  p
               :tweening? (r/cursor state [:tweening?])
               :paths     (r/cursor state [:paths])}]]))


(defn mount-root []
  (d/render [sf-container] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
