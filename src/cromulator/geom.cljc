(ns cromulator.geom
  (:require [cromulator.util
             :refer [pointwise both TAU cos sin pow rad]]))

(defn- sf-point [m n1 n2 n3 a b phi]
  (let [xf (fn [f exp] (-> m (* phi) (/ 4) f (/ a) abs (pow exp)))
        r  (pow (+ (xf cos n2) (xf sin n3)) (/ 1 n1))]
    (if (zero? r)
      [0 0]
      (both * (/ 1 r) (cos phi) (sin phi)))))

(defn superformula-points [coords {m :m n1 :n1 n2 :n2 n3 :n3 a :a b :b}
                           & [{res :resolution :or {res 720}}]]
  (into [coords]
    (comp
     (map (partial * (/ TAU res)))
     (map (partial sf-point m n1 n2 n3 a b))
     (map (partial pointwise + coords)))
    (range (inc res))))
