(ns cromulator.util)

(def sin   Math/sin)
(def cos   Math/cos)
(def pow   Math/pow)
(def tan   Math/tan)

(def PI  Math/PI)
(def TAU (* 2 PI))

(defn pointwise
  ([f  a b   c d]  [(f a c) (f b d)])
  ([f [a b] [c d]] (pointwise f a b c d)))

(defn both
  ([f  x y]  [(f x) (f y)])
  ([f a x y] [(f a x) (f a y)]))
