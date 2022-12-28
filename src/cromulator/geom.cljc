(ns cromulator.geom
  (:require [cromulator.util
             :refer [pointwise both TAU cos sin pow rad]]))

(defn- sf-point [m n1 n2 n3 a b phi]
  (let [t1 (-> m (* phi) (/ 4) cos (/ a) abs (pow n2))
        t2 (-> m (* phi) (/ 4) sin (/ b) abs (pow n3))
        r  (pow (+ t1 t2) (/ 1 n1))]
    (if (zero? r)
      [0 0]
      (both * (/ 1 r) (cos phi) (sin phi)))))

(defn superformula-points
  ([coords m n1 n2 n3 a b & [{res :resolution :or {res 256}}]]
   (into [coords]
     (comp
      (map (partial * (/ TAU res)))
      (map (partial sf-point m n1 n2 n3 a b))
      (map (partial pointwise + coords)))
     (range (inc res))))
  ([coords m n1 n2 n3]
   (superformula-points coords m n1 n2 n3 1 1))
  ([coords {m :m n1 :n1 n2 :n2 n3 :n3 a :a b :b}]
   (superformula-points coords m n1 n2 n3 a b)))
