(ns cromulator.util
  (:refer-clojure :exclude [*]))

(def sin   Math/sin)
(def cos   Math/cos)
(def pow   Math/pow)
(def sign  Math/sign)
(def tan   Math/tan)
(def acos  Math/acos)
(def ceil  Math/ceil)
(def hypot Math/hypot)

(def sqrt Math/sqrt)

(defn atan
  ([n]   (Math/atan n))
  ([n m] (Math/atan2 n m)))

(defn sq [n]
  (clojure.core/* n n))

(defn dub [n]
  (clojure.core/* n 2))

(defn half [n]
  (clojure.core/* n 0.5))

(def PI  Math/PI)
(def TAU (dub PI))
(def E   Math/E)

(defn rad [x]
  (clojure.core/* x (/ PI 180)))

(defn deg [x]
  (clojure.core/* x (/ 180 PI)))

(defn pointwise
  ([f  a b   c d]  [(f a c) (f b d)])
  ([f [a b] [c d]] (pointwise f a b c d)))

(defn both
  ([f  x y]    [(f x) (f y)])
  ([f a x y]   [(f a x) (f a y)]))

(defn- make-partial [f]
  (fn part [& args]
    (if (= 1 (count args))
      (apply partial f args)
      (apply f args))))

(def * (make-partial clojure.core/*))

(defn polar->cart
  ([cx cy r t]
   (let [r' (rad (- t 90))]
     [(+ cx (clojure.core/* r (cos r')))
      (+ cy (clojure.core/* r (sin r')))]))
  ([{cx :cx cy :cy r :r} t]
   (polar->cart cx cy r t)))

(defn cart->polar
  ([cx cy [x y]]
   (mod (+ (deg (atan (- y cy) (- x cx))) 450) 360))
  ([{cx :cx cy :cy} [x y]]
   (cart->polar cx cy [x y])))
