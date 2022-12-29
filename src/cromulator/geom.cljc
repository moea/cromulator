(ns cromulator.geom
  (:require [cromulator.util
             :refer [pointwise both TAU cos sin pow]]))

(defn- sf-point [m1 m2 n1 n2 n3 a b phi]
  (let [xf (fn [f m exp] (-> m (* phi) (/ 4) f (/ a) abs (pow exp)))
        r  (pow (+ (xf cos m1 n2) (xf sin (or m2 m1) n3)) (/ 1 n1))]
    (if (zero? r)
      [0 0]
      (both * (/ 1 r) (cos phi) (sin phi)))))

(defn superformula-points [coords {m1 :m1 m2 :m2 n1 :n1 n2 :n2 n3 :n3 a :a b :b}
                           & [{res :resolution :or {res 1024}}]]
  (into []
    (comp
     (map (partial * (/ TAU res)))
     (map (partial sf-point m1 m2 n1 n2 n3 a b))
     (map (partial pointwise + coords)))
    (range (inc res))))
