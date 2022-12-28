goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__25113,p__25114){
var map__25116 = p__25113;
var map__25116__$1 = cljs.core.__destructure_map(map__25116);
var svc = map__25116__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25117 = p__25114;
var map__25117__$1 = cljs.core.__destructure_map(map__25117);
var msg = map__25117__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25117__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25117__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25117__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25117__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__25129,p__25130){
var map__25131 = p__25129;
var map__25131__$1 = cljs.core.__destructure_map(map__25131);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25131__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__25132 = p__25130;
var map__25132__$1 = cljs.core.__destructure_map(map__25132);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25132__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__25141,p__25142){
var map__25143 = p__25141;
var map__25143__$1 = cljs.core.__destructure_map(map__25143);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25143__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25143__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25144 = p__25142;
var map__25144__$1 = cljs.core.__destructure_map(map__25144);
var msg = map__25144__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25144__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__25164,tid){
var map__25171 = p__25164;
var map__25171__$1 = cljs.core.__destructure_map(map__25171);
var svc = map__25171__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25171__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__25215 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__25216 = null;
var count__25217 = (0);
var i__25218 = (0);
while(true){
if((i__25218 < count__25217)){
var vec__25238 = chunk__25216.cljs$core$IIndexed$_nth$arity$2(null,i__25218);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25344 = seq__25215;
var G__25345 = chunk__25216;
var G__25346 = count__25217;
var G__25347 = (i__25218 + (1));
seq__25215 = G__25344;
chunk__25216 = G__25345;
count__25217 = G__25346;
i__25218 = G__25347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25215);
if(temp__5804__auto__){
var seq__25215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25215__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25215__$1);
var G__25355 = cljs.core.chunk_rest(seq__25215__$1);
var G__25356 = c__5568__auto__;
var G__25357 = cljs.core.count(c__5568__auto__);
var G__25358 = (0);
seq__25215 = G__25355;
chunk__25216 = G__25356;
count__25217 = G__25357;
i__25218 = G__25358;
continue;
} else {
var vec__25245 = cljs.core.first(seq__25215__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25245,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25245,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25367 = cljs.core.next(seq__25215__$1);
var G__25368 = null;
var G__25369 = (0);
var G__25370 = (0);
seq__25215 = G__25367;
chunk__25216 = G__25368;
count__25217 = G__25369;
i__25218 = G__25370;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__25178_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__25178_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__25179_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__25179_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__25184_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__25184_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__25185_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__25185_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__25265){
var map__25268 = p__25265;
var map__25268__$1 = cljs.core.__destructure_map(map__25268);
var svc = map__25268__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25268__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25268__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
