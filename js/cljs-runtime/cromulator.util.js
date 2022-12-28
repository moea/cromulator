goog.provide('cromulator.util');
cromulator.util.sin = Math.sin;
cromulator.util.cos = Math.cos;
cromulator.util.pow = Math.pow;
cromulator.util.sign = Math.sign;
cromulator.util.tan = Math.tan;
cromulator.util.acos = Math.acos;
cromulator.util.ceil = Math.ceil;
cromulator.util.hypot = Math.hypot;
cromulator.util.sqrt = Math.sqrt;
cromulator.util.atan = (function cromulator$util$atan(var_args){
var G__17739 = arguments.length;
switch (G__17739) {
case 1:
return cromulator.util.atan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cromulator.util.atan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cromulator.util.atan.cljs$core$IFn$_invoke$arity$1 = (function (n){
return Math.atan(n);
}));

(cromulator.util.atan.cljs$core$IFn$_invoke$arity$2 = (function (n,m){
return Math.atan2(n,m);
}));

(cromulator.util.atan.cljs$lang$maxFixedArity = 2);

cromulator.util.sq = (function cromulator$util$sq(n){
return (n * n);
});
cromulator.util.dub = (function cromulator$util$dub(n){
return (n * (2));
});
cromulator.util.half = (function cromulator$util$half(n){
return (n * 0.5);
});
cromulator.util.PI = Math.PI;
cromulator.util.TAU = cromulator.util.dub(cromulator.util.PI);
cromulator.util.E = Math.E;
cromulator.util.rad = (function cromulator$util$rad(x){
return (x * (cromulator.util.PI / (180)));
});
cromulator.util.deg = (function cromulator$util$deg(x){
return (x * ((180) / cromulator.util.PI));
});
cromulator.util.pointwise = (function cromulator$util$pointwise(var_args){
var G__17741 = arguments.length;
switch (G__17741) {
case 5:
return cromulator.util.pointwise.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return cromulator.util.pointwise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cromulator.util.pointwise.cljs$core$IFn$_invoke$arity$5 = (function (f,a,b,c,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,c) : f.call(null,a,c)),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(b,d) : f.call(null,b,d))], null);
}));

(cromulator.util.pointwise.cljs$core$IFn$_invoke$arity$3 = (function (f,p__17742,p__17743){
var vec__17744 = p__17742;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17744,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17744,(1),null);
var vec__17747 = p__17743;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17747,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17747,(1),null);
return cromulator.util.pointwise.cljs$core$IFn$_invoke$arity$5(f,a,b,c,d);
}));

(cromulator.util.pointwise.cljs$lang$maxFixedArity = 5);

cromulator.util.both = (function cromulator$util$both(var_args){
var G__17751 = arguments.length;
switch (G__17751) {
case 3:
return cromulator.util.both.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cromulator.util.both.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cromulator.util.both.cljs$core$IFn$_invoke$arity$3 = (function (f,x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y))], null);
}));

(cromulator.util.both.cljs$core$IFn$_invoke$arity$4 = (function (f,a,x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,x) : f.call(null,a,x)),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,y) : f.call(null,a,y))], null);
}));

(cromulator.util.both.cljs$lang$maxFixedArity = 4);

cromulator.util.make_partial = (function cromulator$util$make_partial(f){
return (function() { 
var cromulator$util$make_partial_$_part__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,f,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var cromulator$util$make_partial_$_part = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17771__i = 0, G__17771__a = new Array(arguments.length -  0);
while (G__17771__i < G__17771__a.length) {G__17771__a[G__17771__i] = arguments[G__17771__i + 0]; ++G__17771__i;}
  args = new cljs.core.IndexedSeq(G__17771__a,0,null);
} 
return cromulator$util$make_partial_$_part__delegate.call(this,args);};
cromulator$util$make_partial_$_part.cljs$lang$maxFixedArity = 0;
cromulator$util$make_partial_$_part.cljs$lang$applyTo = (function (arglist__17772){
var args = cljs.core.seq(arglist__17772);
return cromulator$util$make_partial_$_part__delegate(args);
});
cromulator$util$make_partial_$_part.cljs$core$IFn$_invoke$arity$variadic = cromulator$util$make_partial_$_part__delegate;
return cromulator$util$make_partial_$_part;
})()
;
});
cromulator.util._STAR_ = cromulator.util.make_partial(cljs.core._STAR_);
cromulator.util.polar__GT_cart = (function cromulator$util$polar__GT_cart(var_args){
var G__17753 = arguments.length;
switch (G__17753) {
case 4:
return cromulator.util.polar__GT_cart.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return cromulator.util.polar__GT_cart.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cromulator.util.polar__GT_cart.cljs$core$IFn$_invoke$arity$4 = (function (cx,cy,r,t){
var r_SINGLEQUOTE_ = cromulator.util.rad((t - (90)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (r * (cromulator.util.cos.cljs$core$IFn$_invoke$arity$1 ? cromulator.util.cos.cljs$core$IFn$_invoke$arity$1(r_SINGLEQUOTE_) : cromulator.util.cos.call(null,r_SINGLEQUOTE_)))),(cy + (r * (cromulator.util.sin.cljs$core$IFn$_invoke$arity$1 ? cromulator.util.sin.cljs$core$IFn$_invoke$arity$1(r_SINGLEQUOTE_) : cromulator.util.sin.call(null,r_SINGLEQUOTE_))))], null);
}));

(cromulator.util.polar__GT_cart.cljs$core$IFn$_invoke$arity$2 = (function (p__17754,t){
var map__17755 = p__17754;
var map__17755__$1 = cljs.core.__destructure_map(map__17755);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return cromulator.util.polar__GT_cart.cljs$core$IFn$_invoke$arity$4(cx,cy,r,t);
}));

(cromulator.util.polar__GT_cart.cljs$lang$maxFixedArity = 4);

cromulator.util.cart__GT_polar = (function cromulator$util$cart__GT_polar(var_args){
var G__17757 = arguments.length;
switch (G__17757) {
case 3:
return cromulator.util.cart__GT_polar.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cromulator.util.cart__GT_polar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cromulator.util.cart__GT_polar.cljs$core$IFn$_invoke$arity$3 = (function (cx,cy,p__17758){
var vec__17759 = p__17758;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759,(1),null);
return cljs.core.mod((cromulator.util.deg(cromulator.util.atan.cljs$core$IFn$_invoke$arity$2((y - cy),(x - cx))) + (450)),(360));
}));

(cromulator.util.cart__GT_polar.cljs$core$IFn$_invoke$arity$2 = (function (p__17762,p__17763){
var map__17764 = p__17762;
var map__17764__$1 = cljs.core.__destructure_map(map__17764);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17764__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17764__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var vec__17765 = p__17763;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765,(1),null);
return cromulator.util.cart__GT_polar.cljs$core$IFn$_invoke$arity$3(cx,cy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}));

(cromulator.util.cart__GT_polar.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cromulator.util.js.map
