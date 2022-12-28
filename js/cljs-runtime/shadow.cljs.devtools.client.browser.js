goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26368 = arguments.length;
var i__5770__auto___26369 = (0);
while(true){
if((i__5770__auto___26369 < len__5769__auto___26368)){
args__5775__auto__.push((arguments[i__5770__auto___26369]));

var G__26370 = (i__5770__auto___26369 + (1));
i__5770__auto___26369 = G__26370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq25954){
var G__25955 = cljs.core.first(seq25954);
var seq25954__$1 = cljs.core.next(seq25954);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25955,seq25954__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__25958 = cljs.core.seq(sources);
var chunk__25959 = null;
var count__25960 = (0);
var i__25961 = (0);
while(true){
if((i__25961 < count__25960)){
var map__25973 = chunk__25959.cljs$core$IIndexed$_nth$arity$2(null,i__25961);
var map__25973__$1 = cljs.core.__destructure_map(map__25973);
var src = map__25973__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25974){var e_26371 = e25974;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26371);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26371.message)].join('')));
}

var G__26372 = seq__25958;
var G__26373 = chunk__25959;
var G__26374 = count__25960;
var G__26375 = (i__25961 + (1));
seq__25958 = G__26372;
chunk__25959 = G__26373;
count__25960 = G__26374;
i__25961 = G__26375;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25958);
if(temp__5804__auto__){
var seq__25958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25958__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25958__$1);
var G__26376 = cljs.core.chunk_rest(seq__25958__$1);
var G__26377 = c__5568__auto__;
var G__26378 = cljs.core.count(c__5568__auto__);
var G__26379 = (0);
seq__25958 = G__26376;
chunk__25959 = G__26377;
count__25960 = G__26378;
i__25961 = G__26379;
continue;
} else {
var map__25975 = cljs.core.first(seq__25958__$1);
var map__25975__$1 = cljs.core.__destructure_map(map__25975);
var src = map__25975__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25976){var e_26380 = e25976;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26380);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26380.message)].join('')));
}

var G__26381 = cljs.core.next(seq__25958__$1);
var G__26382 = null;
var G__26383 = (0);
var G__26384 = (0);
seq__25958 = G__26381;
chunk__25959 = G__26382;
count__25960 = G__26383;
i__25961 = G__26384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__25977 = cljs.core.seq(js_requires);
var chunk__25978 = null;
var count__25979 = (0);
var i__25980 = (0);
while(true){
if((i__25980 < count__25979)){
var js_ns = chunk__25978.cljs$core$IIndexed$_nth$arity$2(null,i__25980);
var require_str_26387 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26387);


var G__26388 = seq__25977;
var G__26389 = chunk__25978;
var G__26390 = count__25979;
var G__26391 = (i__25980 + (1));
seq__25977 = G__26388;
chunk__25978 = G__26389;
count__25979 = G__26390;
i__25980 = G__26391;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25977);
if(temp__5804__auto__){
var seq__25977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25977__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25977__$1);
var G__26392 = cljs.core.chunk_rest(seq__25977__$1);
var G__26393 = c__5568__auto__;
var G__26394 = cljs.core.count(c__5568__auto__);
var G__26395 = (0);
seq__25977 = G__26392;
chunk__25978 = G__26393;
count__25979 = G__26394;
i__25980 = G__26395;
continue;
} else {
var js_ns = cljs.core.first(seq__25977__$1);
var require_str_26396 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26396);


var G__26397 = cljs.core.next(seq__25977__$1);
var G__26398 = null;
var G__26399 = (0);
var G__26400 = (0);
seq__25977 = G__26397;
chunk__25978 = G__26398;
count__25979 = G__26399;
i__25980 = G__26400;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__25987){
var map__25988 = p__25987;
var map__25988__$1 = cljs.core.__destructure_map(map__25988);
var msg = map__25988__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25988__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25988__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25989(s__25990){
return (new cljs.core.LazySeq(null,(function (){
var s__25990__$1 = s__25990;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25990__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__25995 = cljs.core.first(xs__6360__auto__);
var map__25995__$1 = cljs.core.__destructure_map(map__25995);
var src = map__25995__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25995__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25995__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__25990__$1,map__25995,map__25995__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25988,map__25988__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25989_$_iter__25991(s__25992){
return (new cljs.core.LazySeq(null,((function (s__25990__$1,map__25995,map__25995__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25988,map__25988__$1,msg,info,reload_info){
return (function (){
var s__25992__$1 = s__25992;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__25992__$1);
if(temp__5804__auto____$1){
var s__25992__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25992__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25992__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25994 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25993 = (0);
while(true){
if((i__25993 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__25993);
cljs.core.chunk_append(b__25994,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26405 = (i__25993 + (1));
i__25993 = G__26405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25994),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25989_$_iter__25991(cljs.core.chunk_rest(s__25992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25994),null);
}
} else {
var warning = cljs.core.first(s__25992__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25989_$_iter__25991(cljs.core.rest(s__25992__$2)));
}
} else {
return null;
}
break;
}
});})(s__25990__$1,map__25995,map__25995__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25988,map__25988__$1,msg,info,reload_info))
,null,null));
});})(s__25990__$1,map__25995,map__25995__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25988,map__25988__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25989(cljs.core.rest(s__25990__$1)));
} else {
var G__26406 = cljs.core.rest(s__25990__$1);
s__25990__$1 = G__26406;
continue;
}
} else {
var G__26407 = cljs.core.rest(s__25990__$1);
s__25990__$1 = G__26407;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__25998_26408 = cljs.core.seq(warnings);
var chunk__25999_26409 = null;
var count__26000_26410 = (0);
var i__26001_26411 = (0);
while(true){
if((i__26001_26411 < count__26000_26410)){
var map__26004_26412 = chunk__25999_26409.cljs$core$IIndexed$_nth$arity$2(null,i__26001_26411);
var map__26004_26413__$1 = cljs.core.__destructure_map(map__26004_26412);
var w_26414 = map__26004_26413__$1;
var msg_26415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004_26413__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004_26413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004_26413__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004_26413__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26418)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26416),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26417),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26415__$1)].join(''));


var G__26419 = seq__25998_26408;
var G__26420 = chunk__25999_26409;
var G__26421 = count__26000_26410;
var G__26422 = (i__26001_26411 + (1));
seq__25998_26408 = G__26419;
chunk__25999_26409 = G__26420;
count__26000_26410 = G__26421;
i__26001_26411 = G__26422;
continue;
} else {
var temp__5804__auto___26423 = cljs.core.seq(seq__25998_26408);
if(temp__5804__auto___26423){
var seq__25998_26424__$1 = temp__5804__auto___26423;
if(cljs.core.chunked_seq_QMARK_(seq__25998_26424__$1)){
var c__5568__auto___26425 = cljs.core.chunk_first(seq__25998_26424__$1);
var G__26426 = cljs.core.chunk_rest(seq__25998_26424__$1);
var G__26427 = c__5568__auto___26425;
var G__26428 = cljs.core.count(c__5568__auto___26425);
var G__26429 = (0);
seq__25998_26408 = G__26426;
chunk__25999_26409 = G__26427;
count__26000_26410 = G__26428;
i__26001_26411 = G__26429;
continue;
} else {
var map__26006_26430 = cljs.core.first(seq__25998_26424__$1);
var map__26006_26431__$1 = cljs.core.__destructure_map(map__26006_26430);
var w_26432 = map__26006_26431__$1;
var msg_26433__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26431__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26431__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26431__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26431__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26436)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26434),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26435),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26433__$1)].join(''));


var G__26437 = cljs.core.next(seq__25998_26424__$1);
var G__26438 = null;
var G__26439 = (0);
var G__26440 = (0);
seq__25998_26408 = G__26437;
chunk__25999_26409 = G__26438;
count__26000_26410 = G__26439;
i__26001_26411 = G__26440;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__25986_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__25986_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__26010){
var map__26011 = p__26010;
var map__26011__$1 = cljs.core.__destructure_map(map__26011);
var msg = map__26011__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26011__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26011__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26013 = cljs.core.seq(updates);
var chunk__26015 = null;
var count__26016 = (0);
var i__26017 = (0);
while(true){
if((i__26017 < count__26016)){
var path = chunk__26015.cljs$core$IIndexed$_nth$arity$2(null,i__26017);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26199_26445 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26203_26446 = null;
var count__26204_26447 = (0);
var i__26205_26448 = (0);
while(true){
if((i__26205_26448 < count__26204_26447)){
var node_26449 = chunk__26203_26446.cljs$core$IIndexed$_nth$arity$2(null,i__26205_26448);
if(cljs.core.not(node_26449.shadow$old)){
var path_match_26450 = shadow.cljs.devtools.client.browser.match_paths(node_26449.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26450)){
var new_link_26451 = (function (){var G__26239 = node_26449.cloneNode(true);
G__26239.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26450),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26239;
})();
(node_26449.shadow$old = true);

(new_link_26451.onload = ((function (seq__26199_26445,chunk__26203_26446,count__26204_26447,i__26205_26448,seq__26013,chunk__26015,count__26016,i__26017,new_link_26451,path_match_26450,node_26449,path,map__26011,map__26011__$1,msg,updates,reload_info){
return (function (e){
var seq__26240_26452 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26242_26453 = null;
var count__26243_26454 = (0);
var i__26244_26455 = (0);
while(true){
if((i__26244_26455 < count__26243_26454)){
var map__26252_26456 = chunk__26242_26453.cljs$core$IIndexed$_nth$arity$2(null,i__26244_26455);
var map__26252_26457__$1 = cljs.core.__destructure_map(map__26252_26456);
var task_26458 = map__26252_26457__$1;
var fn_str_26459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26252_26457__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26252_26457__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26461 = goog.getObjectByName(fn_str_26459,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26460)].join(''));

(fn_obj_26461.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26461.cljs$core$IFn$_invoke$arity$2(path,new_link_26451) : fn_obj_26461.call(null,path,new_link_26451));


var G__26462 = seq__26240_26452;
var G__26463 = chunk__26242_26453;
var G__26464 = count__26243_26454;
var G__26465 = (i__26244_26455 + (1));
seq__26240_26452 = G__26462;
chunk__26242_26453 = G__26463;
count__26243_26454 = G__26464;
i__26244_26455 = G__26465;
continue;
} else {
var temp__5804__auto___26467 = cljs.core.seq(seq__26240_26452);
if(temp__5804__auto___26467){
var seq__26240_26468__$1 = temp__5804__auto___26467;
if(cljs.core.chunked_seq_QMARK_(seq__26240_26468__$1)){
var c__5568__auto___26469 = cljs.core.chunk_first(seq__26240_26468__$1);
var G__26470 = cljs.core.chunk_rest(seq__26240_26468__$1);
var G__26471 = c__5568__auto___26469;
var G__26472 = cljs.core.count(c__5568__auto___26469);
var G__26473 = (0);
seq__26240_26452 = G__26470;
chunk__26242_26453 = G__26471;
count__26243_26454 = G__26472;
i__26244_26455 = G__26473;
continue;
} else {
var map__26253_26474 = cljs.core.first(seq__26240_26468__$1);
var map__26253_26475__$1 = cljs.core.__destructure_map(map__26253_26474);
var task_26476 = map__26253_26475__$1;
var fn_str_26477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26253_26475__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26253_26475__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26479 = goog.getObjectByName(fn_str_26477,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26478)].join(''));

(fn_obj_26479.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26479.cljs$core$IFn$_invoke$arity$2(path,new_link_26451) : fn_obj_26479.call(null,path,new_link_26451));


var G__26480 = cljs.core.next(seq__26240_26468__$1);
var G__26481 = null;
var G__26482 = (0);
var G__26483 = (0);
seq__26240_26452 = G__26480;
chunk__26242_26453 = G__26481;
count__26243_26454 = G__26482;
i__26244_26455 = G__26483;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26449);
});})(seq__26199_26445,chunk__26203_26446,count__26204_26447,i__26205_26448,seq__26013,chunk__26015,count__26016,i__26017,new_link_26451,path_match_26450,node_26449,path,map__26011,map__26011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26450], 0));

goog.dom.insertSiblingAfter(new_link_26451,node_26449);


var G__26484 = seq__26199_26445;
var G__26485 = chunk__26203_26446;
var G__26486 = count__26204_26447;
var G__26487 = (i__26205_26448 + (1));
seq__26199_26445 = G__26484;
chunk__26203_26446 = G__26485;
count__26204_26447 = G__26486;
i__26205_26448 = G__26487;
continue;
} else {
var G__26488 = seq__26199_26445;
var G__26489 = chunk__26203_26446;
var G__26490 = count__26204_26447;
var G__26491 = (i__26205_26448 + (1));
seq__26199_26445 = G__26488;
chunk__26203_26446 = G__26489;
count__26204_26447 = G__26490;
i__26205_26448 = G__26491;
continue;
}
} else {
var G__26492 = seq__26199_26445;
var G__26493 = chunk__26203_26446;
var G__26494 = count__26204_26447;
var G__26495 = (i__26205_26448 + (1));
seq__26199_26445 = G__26492;
chunk__26203_26446 = G__26493;
count__26204_26447 = G__26494;
i__26205_26448 = G__26495;
continue;
}
} else {
var temp__5804__auto___26496 = cljs.core.seq(seq__26199_26445);
if(temp__5804__auto___26496){
var seq__26199_26498__$1 = temp__5804__auto___26496;
if(cljs.core.chunked_seq_QMARK_(seq__26199_26498__$1)){
var c__5568__auto___26500 = cljs.core.chunk_first(seq__26199_26498__$1);
var G__26501 = cljs.core.chunk_rest(seq__26199_26498__$1);
var G__26502 = c__5568__auto___26500;
var G__26503 = cljs.core.count(c__5568__auto___26500);
var G__26504 = (0);
seq__26199_26445 = G__26501;
chunk__26203_26446 = G__26502;
count__26204_26447 = G__26503;
i__26205_26448 = G__26504;
continue;
} else {
var node_26505 = cljs.core.first(seq__26199_26498__$1);
if(cljs.core.not(node_26505.shadow$old)){
var path_match_26506 = shadow.cljs.devtools.client.browser.match_paths(node_26505.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26506)){
var new_link_26507 = (function (){var G__26256 = node_26505.cloneNode(true);
G__26256.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26506),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26256;
})();
(node_26505.shadow$old = true);

(new_link_26507.onload = ((function (seq__26199_26445,chunk__26203_26446,count__26204_26447,i__26205_26448,seq__26013,chunk__26015,count__26016,i__26017,new_link_26507,path_match_26506,node_26505,seq__26199_26498__$1,temp__5804__auto___26496,path,map__26011,map__26011__$1,msg,updates,reload_info){
return (function (e){
var seq__26257_26508 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26259_26509 = null;
var count__26260_26510 = (0);
var i__26261_26511 = (0);
while(true){
if((i__26261_26511 < count__26260_26510)){
var map__26265_26512 = chunk__26259_26509.cljs$core$IIndexed$_nth$arity$2(null,i__26261_26511);
var map__26265_26513__$1 = cljs.core.__destructure_map(map__26265_26512);
var task_26514 = map__26265_26513__$1;
var fn_str_26515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26265_26513__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26265_26513__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26517 = goog.getObjectByName(fn_str_26515,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26516)].join(''));

(fn_obj_26517.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26517.cljs$core$IFn$_invoke$arity$2(path,new_link_26507) : fn_obj_26517.call(null,path,new_link_26507));


var G__26518 = seq__26257_26508;
var G__26519 = chunk__26259_26509;
var G__26520 = count__26260_26510;
var G__26521 = (i__26261_26511 + (1));
seq__26257_26508 = G__26518;
chunk__26259_26509 = G__26519;
count__26260_26510 = G__26520;
i__26261_26511 = G__26521;
continue;
} else {
var temp__5804__auto___26522__$1 = cljs.core.seq(seq__26257_26508);
if(temp__5804__auto___26522__$1){
var seq__26257_26523__$1 = temp__5804__auto___26522__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26257_26523__$1)){
var c__5568__auto___26524 = cljs.core.chunk_first(seq__26257_26523__$1);
var G__26525 = cljs.core.chunk_rest(seq__26257_26523__$1);
var G__26526 = c__5568__auto___26524;
var G__26527 = cljs.core.count(c__5568__auto___26524);
var G__26528 = (0);
seq__26257_26508 = G__26525;
chunk__26259_26509 = G__26526;
count__26260_26510 = G__26527;
i__26261_26511 = G__26528;
continue;
} else {
var map__26266_26529 = cljs.core.first(seq__26257_26523__$1);
var map__26266_26530__$1 = cljs.core.__destructure_map(map__26266_26529);
var task_26531 = map__26266_26530__$1;
var fn_str_26532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26266_26530__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26266_26530__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26534 = goog.getObjectByName(fn_str_26532,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26533)].join(''));

(fn_obj_26534.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26534.cljs$core$IFn$_invoke$arity$2(path,new_link_26507) : fn_obj_26534.call(null,path,new_link_26507));


var G__26535 = cljs.core.next(seq__26257_26523__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26257_26508 = G__26535;
chunk__26259_26509 = G__26536;
count__26260_26510 = G__26537;
i__26261_26511 = G__26538;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26505);
});})(seq__26199_26445,chunk__26203_26446,count__26204_26447,i__26205_26448,seq__26013,chunk__26015,count__26016,i__26017,new_link_26507,path_match_26506,node_26505,seq__26199_26498__$1,temp__5804__auto___26496,path,map__26011,map__26011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26506], 0));

goog.dom.insertSiblingAfter(new_link_26507,node_26505);


var G__26539 = cljs.core.next(seq__26199_26498__$1);
var G__26540 = null;
var G__26541 = (0);
var G__26542 = (0);
seq__26199_26445 = G__26539;
chunk__26203_26446 = G__26540;
count__26204_26447 = G__26541;
i__26205_26448 = G__26542;
continue;
} else {
var G__26543 = cljs.core.next(seq__26199_26498__$1);
var G__26544 = null;
var G__26545 = (0);
var G__26546 = (0);
seq__26199_26445 = G__26543;
chunk__26203_26446 = G__26544;
count__26204_26447 = G__26545;
i__26205_26448 = G__26546;
continue;
}
} else {
var G__26547 = cljs.core.next(seq__26199_26498__$1);
var G__26548 = null;
var G__26549 = (0);
var G__26550 = (0);
seq__26199_26445 = G__26547;
chunk__26203_26446 = G__26548;
count__26204_26447 = G__26549;
i__26205_26448 = G__26550;
continue;
}
}
} else {
}
}
break;
}


var G__26551 = seq__26013;
var G__26552 = chunk__26015;
var G__26553 = count__26016;
var G__26554 = (i__26017 + (1));
seq__26013 = G__26551;
chunk__26015 = G__26552;
count__26016 = G__26553;
i__26017 = G__26554;
continue;
} else {
var G__26555 = seq__26013;
var G__26556 = chunk__26015;
var G__26557 = count__26016;
var G__26558 = (i__26017 + (1));
seq__26013 = G__26555;
chunk__26015 = G__26556;
count__26016 = G__26557;
i__26017 = G__26558;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26013);
if(temp__5804__auto__){
var seq__26013__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26013__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26013__$1);
var G__26563 = cljs.core.chunk_rest(seq__26013__$1);
var G__26564 = c__5568__auto__;
var G__26565 = cljs.core.count(c__5568__auto__);
var G__26566 = (0);
seq__26013 = G__26563;
chunk__26015 = G__26564;
count__26016 = G__26565;
i__26017 = G__26566;
continue;
} else {
var path = cljs.core.first(seq__26013__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26267_26567 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26271_26568 = null;
var count__26272_26569 = (0);
var i__26273_26570 = (0);
while(true){
if((i__26273_26570 < count__26272_26569)){
var node_26571 = chunk__26271_26568.cljs$core$IIndexed$_nth$arity$2(null,i__26273_26570);
if(cljs.core.not(node_26571.shadow$old)){
var path_match_26572 = shadow.cljs.devtools.client.browser.match_paths(node_26571.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26572)){
var new_link_26573 = (function (){var G__26308 = node_26571.cloneNode(true);
G__26308.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26572),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26308;
})();
(node_26571.shadow$old = true);

(new_link_26573.onload = ((function (seq__26267_26567,chunk__26271_26568,count__26272_26569,i__26273_26570,seq__26013,chunk__26015,count__26016,i__26017,new_link_26573,path_match_26572,node_26571,path,seq__26013__$1,temp__5804__auto__,map__26011,map__26011__$1,msg,updates,reload_info){
return (function (e){
var seq__26309_26574 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26311_26575 = null;
var count__26312_26576 = (0);
var i__26313_26577 = (0);
while(true){
if((i__26313_26577 < count__26312_26576)){
var map__26317_26578 = chunk__26311_26575.cljs$core$IIndexed$_nth$arity$2(null,i__26313_26577);
var map__26317_26579__$1 = cljs.core.__destructure_map(map__26317_26578);
var task_26580 = map__26317_26579__$1;
var fn_str_26581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26317_26579__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26317_26579__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26583 = goog.getObjectByName(fn_str_26581,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26582)].join(''));

(fn_obj_26583.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26583.cljs$core$IFn$_invoke$arity$2(path,new_link_26573) : fn_obj_26583.call(null,path,new_link_26573));


var G__26584 = seq__26309_26574;
var G__26585 = chunk__26311_26575;
var G__26586 = count__26312_26576;
var G__26587 = (i__26313_26577 + (1));
seq__26309_26574 = G__26584;
chunk__26311_26575 = G__26585;
count__26312_26576 = G__26586;
i__26313_26577 = G__26587;
continue;
} else {
var temp__5804__auto___26588__$1 = cljs.core.seq(seq__26309_26574);
if(temp__5804__auto___26588__$1){
var seq__26309_26589__$1 = temp__5804__auto___26588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26309_26589__$1)){
var c__5568__auto___26590 = cljs.core.chunk_first(seq__26309_26589__$1);
var G__26591 = cljs.core.chunk_rest(seq__26309_26589__$1);
var G__26592 = c__5568__auto___26590;
var G__26593 = cljs.core.count(c__5568__auto___26590);
var G__26594 = (0);
seq__26309_26574 = G__26591;
chunk__26311_26575 = G__26592;
count__26312_26576 = G__26593;
i__26313_26577 = G__26594;
continue;
} else {
var map__26321_26595 = cljs.core.first(seq__26309_26589__$1);
var map__26321_26596__$1 = cljs.core.__destructure_map(map__26321_26595);
var task_26597 = map__26321_26596__$1;
var fn_str_26598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26321_26596__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26321_26596__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26600 = goog.getObjectByName(fn_str_26598,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26599)].join(''));

(fn_obj_26600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26600.cljs$core$IFn$_invoke$arity$2(path,new_link_26573) : fn_obj_26600.call(null,path,new_link_26573));


var G__26601 = cljs.core.next(seq__26309_26589__$1);
var G__26602 = null;
var G__26603 = (0);
var G__26604 = (0);
seq__26309_26574 = G__26601;
chunk__26311_26575 = G__26602;
count__26312_26576 = G__26603;
i__26313_26577 = G__26604;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26571);
});})(seq__26267_26567,chunk__26271_26568,count__26272_26569,i__26273_26570,seq__26013,chunk__26015,count__26016,i__26017,new_link_26573,path_match_26572,node_26571,path,seq__26013__$1,temp__5804__auto__,map__26011,map__26011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26572], 0));

goog.dom.insertSiblingAfter(new_link_26573,node_26571);


var G__26605 = seq__26267_26567;
var G__26606 = chunk__26271_26568;
var G__26607 = count__26272_26569;
var G__26608 = (i__26273_26570 + (1));
seq__26267_26567 = G__26605;
chunk__26271_26568 = G__26606;
count__26272_26569 = G__26607;
i__26273_26570 = G__26608;
continue;
} else {
var G__26609 = seq__26267_26567;
var G__26610 = chunk__26271_26568;
var G__26611 = count__26272_26569;
var G__26612 = (i__26273_26570 + (1));
seq__26267_26567 = G__26609;
chunk__26271_26568 = G__26610;
count__26272_26569 = G__26611;
i__26273_26570 = G__26612;
continue;
}
} else {
var G__26613 = seq__26267_26567;
var G__26614 = chunk__26271_26568;
var G__26615 = count__26272_26569;
var G__26616 = (i__26273_26570 + (1));
seq__26267_26567 = G__26613;
chunk__26271_26568 = G__26614;
count__26272_26569 = G__26615;
i__26273_26570 = G__26616;
continue;
}
} else {
var temp__5804__auto___26617__$1 = cljs.core.seq(seq__26267_26567);
if(temp__5804__auto___26617__$1){
var seq__26267_26618__$1 = temp__5804__auto___26617__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26267_26618__$1)){
var c__5568__auto___26619 = cljs.core.chunk_first(seq__26267_26618__$1);
var G__26620 = cljs.core.chunk_rest(seq__26267_26618__$1);
var G__26621 = c__5568__auto___26619;
var G__26622 = cljs.core.count(c__5568__auto___26619);
var G__26623 = (0);
seq__26267_26567 = G__26620;
chunk__26271_26568 = G__26621;
count__26272_26569 = G__26622;
i__26273_26570 = G__26623;
continue;
} else {
var node_26624 = cljs.core.first(seq__26267_26618__$1);
if(cljs.core.not(node_26624.shadow$old)){
var path_match_26625 = shadow.cljs.devtools.client.browser.match_paths(node_26624.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26625)){
var new_link_26626 = (function (){var G__26324 = node_26624.cloneNode(true);
G__26324.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26625),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26324;
})();
(node_26624.shadow$old = true);

(new_link_26626.onload = ((function (seq__26267_26567,chunk__26271_26568,count__26272_26569,i__26273_26570,seq__26013,chunk__26015,count__26016,i__26017,new_link_26626,path_match_26625,node_26624,seq__26267_26618__$1,temp__5804__auto___26617__$1,path,seq__26013__$1,temp__5804__auto__,map__26011,map__26011__$1,msg,updates,reload_info){
return (function (e){
var seq__26325_26628 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26327_26629 = null;
var count__26328_26630 = (0);
var i__26329_26631 = (0);
while(true){
if((i__26329_26631 < count__26328_26630)){
var map__26335_26632 = chunk__26327_26629.cljs$core$IIndexed$_nth$arity$2(null,i__26329_26631);
var map__26335_26633__$1 = cljs.core.__destructure_map(map__26335_26632);
var task_26634 = map__26335_26633__$1;
var fn_str_26635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26335_26633__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26335_26633__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26637 = goog.getObjectByName(fn_str_26635,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26636)].join(''));

(fn_obj_26637.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26637.cljs$core$IFn$_invoke$arity$2(path,new_link_26626) : fn_obj_26637.call(null,path,new_link_26626));


var G__26638 = seq__26325_26628;
var G__26639 = chunk__26327_26629;
var G__26640 = count__26328_26630;
var G__26641 = (i__26329_26631 + (1));
seq__26325_26628 = G__26638;
chunk__26327_26629 = G__26639;
count__26328_26630 = G__26640;
i__26329_26631 = G__26641;
continue;
} else {
var temp__5804__auto___26642__$2 = cljs.core.seq(seq__26325_26628);
if(temp__5804__auto___26642__$2){
var seq__26325_26643__$1 = temp__5804__auto___26642__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26325_26643__$1)){
var c__5568__auto___26644 = cljs.core.chunk_first(seq__26325_26643__$1);
var G__26645 = cljs.core.chunk_rest(seq__26325_26643__$1);
var G__26646 = c__5568__auto___26644;
var G__26647 = cljs.core.count(c__5568__auto___26644);
var G__26648 = (0);
seq__26325_26628 = G__26645;
chunk__26327_26629 = G__26646;
count__26328_26630 = G__26647;
i__26329_26631 = G__26648;
continue;
} else {
var map__26336_26649 = cljs.core.first(seq__26325_26643__$1);
var map__26336_26650__$1 = cljs.core.__destructure_map(map__26336_26649);
var task_26651 = map__26336_26650__$1;
var fn_str_26652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26336_26650__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26336_26650__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26654 = goog.getObjectByName(fn_str_26652,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26653)].join(''));

(fn_obj_26654.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26654.cljs$core$IFn$_invoke$arity$2(path,new_link_26626) : fn_obj_26654.call(null,path,new_link_26626));


var G__26655 = cljs.core.next(seq__26325_26643__$1);
var G__26656 = null;
var G__26657 = (0);
var G__26658 = (0);
seq__26325_26628 = G__26655;
chunk__26327_26629 = G__26656;
count__26328_26630 = G__26657;
i__26329_26631 = G__26658;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26624);
});})(seq__26267_26567,chunk__26271_26568,count__26272_26569,i__26273_26570,seq__26013,chunk__26015,count__26016,i__26017,new_link_26626,path_match_26625,node_26624,seq__26267_26618__$1,temp__5804__auto___26617__$1,path,seq__26013__$1,temp__5804__auto__,map__26011,map__26011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26625], 0));

goog.dom.insertSiblingAfter(new_link_26626,node_26624);


var G__26659 = cljs.core.next(seq__26267_26618__$1);
var G__26660 = null;
var G__26661 = (0);
var G__26662 = (0);
seq__26267_26567 = G__26659;
chunk__26271_26568 = G__26660;
count__26272_26569 = G__26661;
i__26273_26570 = G__26662;
continue;
} else {
var G__26663 = cljs.core.next(seq__26267_26618__$1);
var G__26664 = null;
var G__26665 = (0);
var G__26666 = (0);
seq__26267_26567 = G__26663;
chunk__26271_26568 = G__26664;
count__26272_26569 = G__26665;
i__26273_26570 = G__26666;
continue;
}
} else {
var G__26667 = cljs.core.next(seq__26267_26618__$1);
var G__26668 = null;
var G__26669 = (0);
var G__26670 = (0);
seq__26267_26567 = G__26667;
chunk__26271_26568 = G__26668;
count__26272_26569 = G__26669;
i__26273_26570 = G__26670;
continue;
}
}
} else {
}
}
break;
}


var G__26671 = cljs.core.next(seq__26013__$1);
var G__26672 = null;
var G__26673 = (0);
var G__26674 = (0);
seq__26013 = G__26671;
chunk__26015 = G__26672;
count__26016 = G__26673;
i__26017 = G__26674;
continue;
} else {
var G__26675 = cljs.core.next(seq__26013__$1);
var G__26676 = null;
var G__26677 = (0);
var G__26678 = (0);
seq__26013 = G__26675;
chunk__26015 = G__26676;
count__26016 = G__26677;
i__26017 = G__26678;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__26339){
var map__26340 = p__26339;
var map__26340__$1 = cljs.core.__destructure_map(map__26340);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26340__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__26349){
var map__26350 = p__26349;
var map__26350__$1 = cljs.core.__destructure_map(map__26350);
var _ = map__26350__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26351,done,error){
var map__26352 = p__26351;
var map__26352__$1 = cljs.core.__destructure_map(map__26352);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26352__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26354,done,error){
var map__26355 = p__26354;
var map__26355__$1 = cljs.core.__destructure_map(map__26355);
var msg = map__26355__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26355__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26355__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26355__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26356){
var map__26357 = p__26356;
var map__26357__$1 = cljs.core.__destructure_map(map__26357);
var src = map__26357__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26357__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26358 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26358) : done.call(null,G__26358));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26359){
var map__26360 = p__26359;
var map__26360__$1 = cljs.core.__destructure_map(map__26360);
var msg__$1 = map__26360__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26360__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26361){var ex = e26361;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26362){
var map__26363 = p__26362;
var map__26363__$1 = cljs.core.__destructure_map(map__26363);
var env = map__26363__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26363__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26364){
var map__26365 = p__26364;
var map__26365__$1 = cljs.core.__destructure_map(map__26365);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26365__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26365__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__26366){
var map__26367 = p__26366;
var map__26367__$1 = cljs.core.__destructure_map(map__26367);
var svc = map__26367__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26367__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
