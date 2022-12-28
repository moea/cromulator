goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__24289,res){
var map__24290 = p__24289;
var map__24290__$1 = cljs.core.__destructure_map(map__24290);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__24292 = res;
var G__24292__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24292,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__24292);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24292__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__24292__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__24299 = arguments.length;
switch (G__24299) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__24309,msg,handlers,timeout_after_ms){
var map__24313 = p__24309;
var map__24313__$1 = cljs.core.__destructure_map(map__24313);
var runtime = map__24313__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24446 = arguments.length;
var i__5770__auto___24447 = (0);
while(true){
if((i__5770__auto___24447 < len__5769__auto___24446)){
args__5775__auto__.push((arguments[i__5770__auto___24447]));

var G__24448 = (i__5770__auto___24447 + (1));
i__5770__auto___24447 = G__24448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__24331,ev,args){
var map__24335 = p__24331;
var map__24335__$1 = cljs.core.__destructure_map(map__24335);
var runtime = map__24335__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24335__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__24336 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__24339 = null;
var count__24340 = (0);
var i__24341 = (0);
while(true){
if((i__24341 < count__24340)){
var ext = chunk__24339.cljs$core$IIndexed$_nth$arity$2(null,i__24341);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__24455 = seq__24336;
var G__24456 = chunk__24339;
var G__24457 = count__24340;
var G__24458 = (i__24341 + (1));
seq__24336 = G__24455;
chunk__24339 = G__24456;
count__24340 = G__24457;
i__24341 = G__24458;
continue;
} else {
var G__24459 = seq__24336;
var G__24460 = chunk__24339;
var G__24461 = count__24340;
var G__24462 = (i__24341 + (1));
seq__24336 = G__24459;
chunk__24339 = G__24460;
count__24340 = G__24461;
i__24341 = G__24462;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24336);
if(temp__5804__auto__){
var seq__24336__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24336__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24336__$1);
var G__24463 = cljs.core.chunk_rest(seq__24336__$1);
var G__24464 = c__5568__auto__;
var G__24465 = cljs.core.count(c__5568__auto__);
var G__24466 = (0);
seq__24336 = G__24463;
chunk__24339 = G__24464;
count__24340 = G__24465;
i__24341 = G__24466;
continue;
} else {
var ext = cljs.core.first(seq__24336__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__24467 = cljs.core.next(seq__24336__$1);
var G__24468 = null;
var G__24469 = (0);
var G__24470 = (0);
seq__24336 = G__24467;
chunk__24339 = G__24468;
count__24340 = G__24469;
i__24341 = G__24470;
continue;
} else {
var G__24471 = cljs.core.next(seq__24336__$1);
var G__24472 = null;
var G__24473 = (0);
var G__24474 = (0);
seq__24336 = G__24471;
chunk__24339 = G__24472;
count__24340 = G__24473;
i__24341 = G__24474;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq24325){
var G__24326 = cljs.core.first(seq24325);
var seq24325__$1 = cljs.core.next(seq24325);
var G__24327 = cljs.core.first(seq24325__$1);
var seq24325__$2 = cljs.core.next(seq24325__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24326,G__24327,seq24325__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__24363,p__24364){
var map__24365 = p__24363;
var map__24365__$1 = cljs.core.__destructure_map(map__24365);
var runtime = map__24365__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__24367 = p__24364;
var map__24367__$1 = cljs.core.__destructure_map(map__24367);
var msg = map__24367__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24367__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__24369 = cljs.core.deref(state_ref);
var map__24369__$1 = cljs.core.__destructure_map(map__24369);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24369__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24369__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__24374){
var map__24376 = p__24374;
var map__24376__$1 = cljs.core.__destructure_map(map__24376);
var runtime = map__24376__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24376__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__24377,msg){
var map__24378 = p__24377;
var map__24378__$1 = cljs.core.__destructure_map(map__24378);
var runtime = map__24378__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24378__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__24379,key,p__24380){
var map__24381 = p__24379;
var map__24381__$1 = cljs.core.__destructure_map(map__24381);
var state = map__24381__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24381__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__24382 = p__24380;
var map__24382__$1 = cljs.core.__destructure_map(map__24382);
var spec = map__24382__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__24385,key,spec){
var map__24386 = p__24385;
var map__24386__$1 = cljs.core.__destructure_map(map__24386);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24386__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__24390_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__24390_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__24391_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__24391_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__24392_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__24392_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__24393_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__24393_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__24394_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__24394_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__24398,key){
var map__24399 = p__24398;
var map__24399__$1 = cljs.core.__destructure_map(map__24399);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24399__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__24403,msg){
var map__24404 = p__24403;
var map__24404__$1 = cljs.core.__destructure_map(map__24404);
var runtime = map__24404__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24404__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__24406,p__24407){
var map__24408 = p__24406;
var map__24408__$1 = cljs.core.__destructure_map(map__24408);
var runtime = map__24408__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__24409 = p__24407;
var map__24409__$1 = cljs.core.__destructure_map(map__24409);
var msg = map__24409__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24409__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24409__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__24413 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__24415 = null;
var count__24416 = (0);
var i__24417 = (0);
while(true){
if((i__24417 < count__24416)){
var map__24425 = chunk__24415.cljs$core$IIndexed$_nth$arity$2(null,i__24417);
var map__24425__$1 = cljs.core.__destructure_map(map__24425);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24425__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__24560 = seq__24413;
var G__24561 = chunk__24415;
var G__24562 = count__24416;
var G__24563 = (i__24417 + (1));
seq__24413 = G__24560;
chunk__24415 = G__24561;
count__24416 = G__24562;
i__24417 = G__24563;
continue;
} else {
var G__24564 = seq__24413;
var G__24565 = chunk__24415;
var G__24566 = count__24416;
var G__24567 = (i__24417 + (1));
seq__24413 = G__24564;
chunk__24415 = G__24565;
count__24416 = G__24566;
i__24417 = G__24567;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24413);
if(temp__5804__auto__){
var seq__24413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24413__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24413__$1);
var G__24568 = cljs.core.chunk_rest(seq__24413__$1);
var G__24569 = c__5568__auto__;
var G__24570 = cljs.core.count(c__5568__auto__);
var G__24571 = (0);
seq__24413 = G__24568;
chunk__24415 = G__24569;
count__24416 = G__24570;
i__24417 = G__24571;
continue;
} else {
var map__24428 = cljs.core.first(seq__24413__$1);
var map__24428__$1 = cljs.core.__destructure_map(map__24428);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__24576 = cljs.core.next(seq__24413__$1);
var G__24577 = null;
var G__24578 = (0);
var G__24579 = (0);
seq__24413 = G__24576;
chunk__24415 = G__24577;
count__24416 = G__24578;
i__24417 = G__24579;
continue;
} else {
var G__24580 = cljs.core.next(seq__24413__$1);
var G__24581 = null;
var G__24582 = (0);
var G__24583 = (0);
seq__24413 = G__24580;
chunk__24415 = G__24581;
count__24416 = G__24582;
i__24417 = G__24583;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
