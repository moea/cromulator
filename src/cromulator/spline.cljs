(ns cromulator.spline)

(defn pts->path [pts]
  (flatten
   (into [(into ["M"] (first pts))]
     (for [pt (rest pts)]
       (into ["L"] pt)))))

(let [v 6]
  (defn- cubic [[x0 y0] [x1 y1] [x2 y2] [x3 y3]]
    [(/ (+ (- x0)   (* v x1) x2)  v)
     (/ (+ (- y0)   (* v y1) y2)  v)
     (/ (+    x1 (- (* v x2) x3)) v)
     (/ (+    y1 (- (* v y2) y3)) v)
     x2
     y2]))

(defn catmull-rom-curves [pts]
  (let [plen (count pts)
        maxi (dec plen)
        butl (dec maxi)]
    (for [[i p] (map-indexed vector pts)]
      (cubic
       (nth pts (max (dec i) 0))
       p
       (nth pts (min (inc i) maxi))
       (nth pts (case i butl butl (min (+ i 2) maxi)))))))

(defn catmull-rom-points [pts]
  (map (partial take 2) (catmull-rom-curves pts)))

(defn catmull-rom-curved-path [[[x y] & pts]]
  (let [curves (catmull-rom-curves pts)]
    (into [["M" x y]]
      (for [pt curves]
        (into ["C"] pt)))))

(defn catmull-rom-curved-seg [pts]
  (drop 3 (catmull-rom-curved-path pts)))

(defn catmull-rom-path [pts]
  (pts->path (catmull-rom-points pts)))
