goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25876__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25877__i = 0, G__25877__a = new Array(arguments.length -  0);
while (G__25877__i < G__25877__a.length) {G__25877__a[G__25877__i] = arguments[G__25877__i + 0]; ++G__25877__i;}
  args = new cljs.core.IndexedSeq(G__25877__a,0,null);
} 
return G__25876__delegate.call(this,args);};
G__25876.cljs$lang$maxFixedArity = 0;
G__25876.cljs$lang$applyTo = (function (arglist__25878){
var args = cljs.core.seq(arglist__25878);
return G__25876__delegate(args);
});
G__25876.cljs$core$IFn$_invoke$arity$variadic = G__25876__delegate;
return G__25876;
})()
);

(o.error = (function() { 
var G__25879__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25880__i = 0, G__25880__a = new Array(arguments.length -  0);
while (G__25880__i < G__25880__a.length) {G__25880__a[G__25880__i] = arguments[G__25880__i + 0]; ++G__25880__i;}
  args = new cljs.core.IndexedSeq(G__25880__a,0,null);
} 
return G__25879__delegate.call(this,args);};
G__25879.cljs$lang$maxFixedArity = 0;
G__25879.cljs$lang$applyTo = (function (arglist__25881){
var args = cljs.core.seq(arglist__25881);
return G__25879__delegate(args);
});
G__25879.cljs$core$IFn$_invoke$arity$variadic = G__25879__delegate;
return G__25879;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
