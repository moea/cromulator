goog.provide('cromulator.geom');
cromulator.geom.sf_point = (function cromulator$geom$sf_point(m,n1,n2,n3,a,b,phi){
var xf = (function (f,exp){
var G__33012 = cljs.core.abs(((function (){var G__33014 = ((m * phi) / (4));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33014) : f.call(null,G__33014));
})() / a));
var G__33013 = exp;
return (cromulator.util.pow.cljs$core$IFn$_invoke$arity$2 ? cromulator.util.pow.cljs$core$IFn$_invoke$arity$2(G__33012,G__33013) : cromulator.util.pow.call(null,G__33012,G__33013));
});
var r = (function (){var G__33015 = (xf(cromulator.util.cos,n2) + xf(cromulator.util.sin,n3));
var G__33016 = ((1) / n1);
return (cromulator.util.pow.cljs$core$IFn$_invoke$arity$2 ? cromulator.util.pow.cljs$core$IFn$_invoke$arity$2(G__33015,G__33016) : cromulator.util.pow.call(null,G__33015,G__33016));
})();
if((r === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cromulator.util.both.cljs$core$IFn$_invoke$arity$4(cljs.core._STAR_,((1) / r),(cromulator.util.cos.cljs$core$IFn$_invoke$arity$1 ? cromulator.util.cos.cljs$core$IFn$_invoke$arity$1(phi) : cromulator.util.cos.call(null,phi)),(cromulator.util.sin.cljs$core$IFn$_invoke$arity$1 ? cromulator.util.sin.cljs$core$IFn$_invoke$arity$1(phi) : cromulator.util.sin.call(null,phi)));
}
});
cromulator.geom.superformula_points = (function cromulator$geom$superformula_points(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33027 = arguments.length;
var i__5770__auto___33028 = (0);
while(true){
if((i__5770__auto___33028 < len__5769__auto___33027)){
args__5775__auto__.push((arguments[i__5770__auto___33028]));

var G__33029 = (i__5770__auto___33028 + (1));
i__5770__auto___33028 = G__33029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return cromulator.geom.superformula_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(cromulator.geom.superformula_points.cljs$core$IFn$_invoke$arity$variadic = (function (coords,p__33020,p__33021){
var map__33022 = p__33020;
var map__33022__$1 = cljs.core.__destructure_map(map__33022);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"n1","n1",-1687681187));
var n2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"n2","n2",1481890316));
var n3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"n3","n3",-1957751996));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var vec__33023 = p__33021;
var map__33026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(0),null);
var map__33026__$1 = cljs.core.__destructure_map(map__33026);
var res = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33026__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601),(720));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coords], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(cromulator.util.TAU / res))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cromulator.geom.sf_point,m,n1,n2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n3,a,b], 0))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cromulator.util.pointwise,cljs.core._PLUS_,coords))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((res + (1))));
}));

(cromulator.geom.superformula_points.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cromulator.geom.superformula_points.cljs$lang$applyTo = (function (seq33017){
var G__33018 = cljs.core.first(seq33017);
var seq33017__$1 = cljs.core.next(seq33017);
var G__33019 = cljs.core.first(seq33017__$1);
var seq33017__$2 = cljs.core.next(seq33017__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33018,G__33019,seq33017__$2);
}));


//# sourceMappingURL=cromulator.geom.js.map
