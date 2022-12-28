goog.provide('cromulator.spline');
cromulator.spline.pts__GT_path = (function cromulator$spline$pts__GT_path(pts){
return cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M"], null),cljs.core.first(pts))], null),(function (){var iter__5523__auto__ = (function cromulator$spline$pts__GT_path_$_iter__26859(s__26860){
return (new cljs.core.LazySeq(null,(function (){
var s__26860__$1 = s__26860;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26860__$1);
if(temp__5804__auto__){
var s__26860__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26860__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26860__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26862 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26861 = (0);
while(true){
if((i__26861 < size__5522__auto__)){
var pt = cljs.core._nth(c__5521__auto__,i__26861);
cljs.core.chunk_append(b__26862,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L"], null),pt));

var G__26901 = (i__26861 + (1));
i__26861 = G__26901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26862),cromulator$spline$pts__GT_path_$_iter__26859(cljs.core.chunk_rest(s__26860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26862),null);
}
} else {
var pt = cljs.core.first(s__26860__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L"], null),pt),cromulator$spline$pts__GT_path_$_iter__26859(cljs.core.rest(s__26860__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.rest(pts));
})()));
});
var v_26902 = (6);
cromulator.spline.cubic = (function cromulator$spline$cubic(p__26863,p__26864,p__26865,p__26866){
var vec__26867 = p__26863;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(1),null);
var vec__26870 = p__26864;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26870,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26870,(1),null);
var vec__26873 = p__26865;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873,(1),null);
var vec__26876 = p__26866;
var x3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26876,(0),null);
var y3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26876,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((- x0) + (v_26902 * x1)) + x2) / v_26902),((((- y0) + (v_26902 * y1)) + y2) / v_26902),((x1 + ((v_26902 * x2) - x3)) / v_26902),((y1 + ((v_26902 * y2) - y3)) / v_26902),x2,y2], null);
});
cromulator.spline.catmull_rom_curves = (function cromulator$spline$catmull_rom_curves(pts){
var plen = cljs.core.count(pts);
var maxi = (plen - (1));
var butl = (maxi - (1));
var iter__5523__auto__ = (function cromulator$spline$catmull_rom_curves_$_iter__26879(s__26880){
return (new cljs.core.LazySeq(null,(function (){
var s__26880__$1 = s__26880;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26880__$1);
if(temp__5804__auto__){
var s__26880__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26880__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26880__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26882 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26881 = (0);
while(true){
if((i__26881 < size__5522__auto__)){
var vec__26883 = cljs.core._nth(c__5521__auto__,i__26881);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26883,(1),null);
cljs.core.chunk_append(b__26882,cromulator.spline.cubic(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,(function (){var x__5130__auto__ = (i - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()),p,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,(function (){var x__5133__auto__ = (i + (1));
var y__5134__auto__ = maxi;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,(function (){var G__26886 = i;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"butl","butl",994177190,null),G__26886)){
return butl;
} else {
var x__5133__auto__ = (i + (2));
var y__5134__auto__ = maxi;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);

}
})())));

var G__26903 = (i__26881 + (1));
i__26881 = G__26903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26882),cromulator$spline$catmull_rom_curves_$_iter__26879(cljs.core.chunk_rest(s__26880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26882),null);
}
} else {
var vec__26887 = cljs.core.first(s__26880__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(1),null);
return cljs.core.cons(cromulator.spline.cubic(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,(function (){var x__5130__auto__ = (i - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()),p,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,(function (){var x__5133__auto__ = (i + (1));
var y__5134__auto__ = maxi;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,(function (){var G__26890 = i;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"butl","butl",994177190,null),G__26890)){
return butl;
} else {
var x__5133__auto__ = (i + (2));
var y__5134__auto__ = maxi;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);

}
})())),cromulator$spline$catmull_rom_curves_$_iter__26879(cljs.core.rest(s__26880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,pts));
});
cromulator.spline.catmull_rom_points = (function cromulator$spline$catmull_rom_points(pts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2)),cromulator.spline.catmull_rom_curves(pts));
});
cromulator.spline.catmull_rom_curved_path = (function cromulator$spline$catmull_rom_curved_path(pts){
var vec__26891 = cromulator.spline.catmull_rom_curves(pts);
var vec__26894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26891,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26894,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26894,(1),null);
var curves = vec__26891;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",x,y], null)], null),(function (){var iter__5523__auto__ = (function cromulator$spline$catmull_rom_curved_path_$_iter__26897(s__26898){
return (new cljs.core.LazySeq(null,(function (){
var s__26898__$1 = s__26898;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26898__$1);
if(temp__5804__auto__){
var s__26898__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26898__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26898__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26900 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26899 = (0);
while(true){
if((i__26899 < size__5522__auto__)){
var pt = cljs.core._nth(c__5521__auto__,i__26899);
cljs.core.chunk_append(b__26900,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),pt));

var G__26904 = (i__26899 + (1));
i__26899 = G__26904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26900),cromulator$spline$catmull_rom_curved_path_$_iter__26897(cljs.core.chunk_rest(s__26898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26900),null);
}
} else {
var pt = cljs.core.first(s__26898__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),pt),cromulator$spline$catmull_rom_curved_path_$_iter__26897(cljs.core.rest(s__26898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(curves);
})());
});
cromulator.spline.catmull_rom_curved_seg = (function cromulator$spline$catmull_rom_curved_seg(pts){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),cromulator.spline.catmull_rom_curved_path(pts));
});
cromulator.spline.catmull_rom_path = (function cromulator$spline$catmull_rom_path(pts){
return cromulator.spline.pts__GT_path(cromulator.spline.catmull_rom_points(pts));
});

//# sourceMappingURL=cromulator.spline.js.map
