(ns cromulator.interop
  (:require ["kute.js" :refer [default] :rename {default kute}]))

(defn animate [f dur]
  (let [start    (atom js/Infinity)
        on-frame (fn on-frame [ts]
                   (swap! start min ts)
                   (let [v (/ (- ts @start) dur)]
                     (if (< v 1)
                       (do
                         (f v)
                         (js/requestAnimationFrame on-frame))
                       (f))))]
    (js/requestAnimationFrame on-frame)))

(defn yoyo-animate [f dur repeats & [i]]
  (let [i (or i 0)]
    (if (= i repeats)
      (f)
      (animate
       (fn wrapper
         ([ts] (f i ts))
         ([]   (animate
                (fn wrapper
                  ([ts] (f i (- 1 ts)))
                  ([] (yoyo-animate f dur repeats (inc i))))
                dur)))
       dur))))

(defn event-value [e]
  (-> e .-target .-value))

(defn checked? [e]
  (-> e .-target .-checked))
