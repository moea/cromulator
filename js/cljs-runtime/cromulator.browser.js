goog.provide('cromulator.browser');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$svg_path_commander$dist$svg_path_commander_min=shadow.js.require("module$node_modules$svg_path_commander$dist$svg_path_commander_min", {});
var module$node_modules$kute_DOT_js$dist$kute_min=shadow.js.require("module$node_modules$kute_DOT_js$dist$kute_min", {});
cromulator.browser.uniform = (function cromulator$browser$uniform(v,lo,hi){
var x__5130__auto__ = lo;
var y__5131__auto__ = Math.round(((lo + (hi - lo)) * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
});
cromulator.browser.bounds = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(20)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(20)], null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(20)], null),new cljs.core.Keyword(null,"n1","n1",-1687681187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(80)], null),new cljs.core.Keyword(null,"n2","n2",1481890316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(80)], null),new cljs.core.Keyword(null,"n3","n3",-1957751996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(80)], null)], null));
cromulator.browser.initial_inputs = (function cromulator$browser$initial_inputs(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function cromulator$browser$initial_inputs_$_iter__33115(s__33116){
return (new cljs.core.LazySeq(null,(function (){
var s__33116__$1 = s__33116;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33116__$1);
if(temp__5804__auto__){
var s__33116__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33116__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33116__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33118 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33117 = (0);
while(true){
if((i__33117 < size__5522__auto__)){
var vec__33119 = cljs.core._nth(c__5521__auto__,i__33117);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(0),null);
var range_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(1),null);
cljs.core.chunk_append(b__33118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cromulator.browser.uniform,k,range_SINGLEQUOTE_)], null));

var G__33184 = (i__33117 + (1));
i__33117 = G__33184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33118),cromulator$browser$initial_inputs_$_iter__33115(cljs.core.chunk_rest(s__33116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33118),null);
}
} else {
var vec__33122 = cljs.core.first(s__33116__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33122,(0),null);
var range_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33122,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cromulator.browser.uniform,k,range_SINGLEQUOTE_)], null),cromulator$browser$initial_inputs_$_iter__33115(cljs.core.rest(s__33116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cromulator.browser.bounds);
})());
});
cromulator.browser.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cromulator.browser.initial_inputs(),cromulator.browser.initial_inputs()], null),new cljs.core.Keyword(null,"range","range",1639692286),cromulator.browser.bounds,new cljs.core.Keyword(null,"path-refs","path-refs",-1663025245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),new cljs.core.Keyword(null,"tweening?","tweening?",207097185),false,new cljs.core.Keyword(null,"iter","iter",1308240283),(0)], null));
cromulator.browser.event_value = (function cromulator$browser$event_value(e){
return e.target.value;
});
cromulator.browser.sliders = (function cromulator$browser$sliders(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"left","left",-399115937),(10)], null)], null)], null),(function (){var iter__5523__auto__ = (function cromulator$browser$sliders_$_iter__33126(s__33127){
return (new cljs.core.LazySeq(null,(function (){
var s__33127__$1 = s__33127;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33127__$1);
if(temp__5804__auto__){
var s__33127__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33127__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33127__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33129 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33128 = (0);
while(true){
if((i__33128 < size__5522__auto__)){
var vec__33130 = cljs.core._nth(c__5521__auto__,i__33128);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130,(0),null);
var vec__33133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130,(1),null);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133,(1),null);
cljs.core.chunk_append(b__33129,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),cljs.core.name(v)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null)], null),(function (){var vec__33136 = (function (){var G__33139 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cromulator.browser.state));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__33139) : v.call(null,G__33139));
})();
var lo_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(0),null);
var hi_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),lo_v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))].join(''),new cljs.core.Keyword(null,"min","min",444991522),lo,new cljs.core.Keyword(null,"max","max",61366548),hi,new cljs.core.Keyword(null,"value","value",305978217),hi_v,new cljs.core.Keyword(null,"step","step",1288888124),lo,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__33128,vec__33136,lo_v,hi_v,vec__33130,v,vec__33133,lo,hi,c__5521__auto__,size__5522__auto__,b__33129,s__33127__$2,temp__5804__auto__){
return (function (p1__33125_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cromulator.browser.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),v,(1)], null),cromulator.browser.event_value(p1__33125_SHARP_));
});})(i__33128,vec__33136,lo_v,hi_v,vec__33130,v,vec__33133,lo,hi,c__5521__auto__,size__5522__auto__,b__33129,s__33127__$2,temp__5804__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),hi], null)], null);
})()], null));

var G__33185 = (i__33128 + (1));
i__33128 = G__33185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33129),cromulator$browser$sliders_$_iter__33126(cljs.core.chunk_rest(s__33127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33129),null);
}
} else {
var vec__33140 = cljs.core.first(s__33127__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(0),null);
var vec__33143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(1),null);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33143,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33143,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),cljs.core.name(v)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null)], null),(function (){var vec__33146 = (function (){var G__33149 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cromulator.browser.state));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__33149) : v.call(null,G__33149));
})();
var lo_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(0),null);
var hi_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),lo_v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))].join(''),new cljs.core.Keyword(null,"min","min",444991522),lo,new cljs.core.Keyword(null,"max","max",61366548),hi,new cljs.core.Keyword(null,"value","value",305978217),hi_v,new cljs.core.Keyword(null,"step","step",1288888124),lo,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__33146,lo_v,hi_v,vec__33140,v,vec__33143,lo,hi,s__33127__$2,temp__5804__auto__){
return (function (p1__33125_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cromulator.browser.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),v,(1)], null),cromulator.browser.event_value(p1__33125_SHARP_));
});})(vec__33146,lo_v,hi_v,vec__33140,v,vec__33143,lo,hi,s__33127__$2,temp__5804__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),hi], null)], null);
})()], null),cromulator$browser$sliders_$_iter__33126(cljs.core.rest(s__33127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cromulator.browser.bounds);
})());
});
cromulator.browser.superformula_inputs = (function cromulator$browser$superformula_inputs(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function cromulator$browser$superformula_inputs_$_iter__33150(s__33151){
return (new cljs.core.LazySeq(null,(function (){
var s__33151__$1 = s__33151;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33151__$1);
if(temp__5804__auto__){
var s__33151__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33151__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33151__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33153 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33152 = (0);
while(true){
if((i__33152 < size__5522__auto__)){
var vec__33154 = cljs.core._nth(c__5521__auto__,i__33152);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33154,(0),null);
var range_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33154,(1),null);
cljs.core.chunk_append(b__33153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cromulator.browser.uniform,k,range_SINGLEQUOTE_)], null));

var G__33186 = (i__33152 + (1));
i__33152 = G__33186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33153),cromulator$browser$superformula_inputs_$_iter__33150(cljs.core.chunk_rest(s__33151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33153),null);
}
} else {
var vec__33157 = cljs.core.first(s__33151__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(0),null);
var range_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cromulator.browser.uniform,k,range_SINGLEQUOTE_)], null),cromulator$browser$superformula_inputs_$_iter__33150(cljs.core.rest(s__33151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cromulator.browser.state)));
})());
});
var W_33187 = (100);
var H_33188 = (100);
cromulator.browser.superformula_path = (function cromulator$browser$superformula_path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33189 = arguments.length;
var i__5770__auto___33190 = (0);
while(true){
if((i__5770__auto___33190 < len__5769__auto___33189)){
args__5775__auto__.push((arguments[i__5770__auto___33190]));

var G__33191 = (i__5770__auto___33190 + (1));
i__5770__auto___33190 = G__33191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cromulator.browser.superformula_path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cromulator.browser.superformula_path.cljs$core$IFn$_invoke$arity$variadic = (function (p__33161){
var vec__33162 = p__33161;
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33162,(0),null);
var inputs__$1 = (function (){var or__5045__auto__ = inputs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cromulator.browser.superformula_inputs();
}
})();
var pts = cromulator.geom.superformula_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),inputs__$1);
var pth = module$node_modules$svg_path_commander$dist$svg_path_commander_min.roundPath(module$node_modules$svg_path_commander$dist$svg_path_commander_min.normalizePath(cljs.core.clj__GT_js(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cromulator.spline.pts__GT_path(pts)))),(6));
var map__33165 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$svg_path_commander$dist$svg_path_commander_min.getPathBBox(pth),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__33165__$1 = cljs.core.__destructure_map(map__33165);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = (function (){var G__33166 = (function (){var x__5133__auto__ = (W_33187 / w);
var y__5134__auto__ = (H_33188 / h);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
if((((W_33187 < w)) || ((H_33188 < h)))){
return (- G__33166);
} else {
return G__33166;
}
})();
var trans_x = (function (){var x__5133__auto__ = (50);
var y__5134__auto__ = cljs.core.abs((((W_33187 - w) / (2)) - x));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var trans_y = (function (){var x__5133__auto__ = (50);
var y__5134__auto__ = cljs.core.abs((((H_33188 - h) / (2)) - y));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return module$node_modules$svg_path_commander$dist$svg_path_commander_min.pathToString(module$node_modules$svg_path_commander$dist$svg_path_commander_min.transformPath(pth,({"translate": [trans_x,trans_y], "scale": scale})));
}));

(cromulator.browser.superformula_path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cromulator.browser.superformula_path.cljs$lang$applyTo = (function (seq33160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33160));
}));

cromulator.browser.superformula_svg = (function cromulator$browser$superformula_svg(p__33167){
var map__33168 = p__33167;
var map__33168__$1 = cljs.core.__destructure_map(map__33168);
var vec__33169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"path-ids","path-ids",-591186947));
var id0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(0),null);
var id1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(1),null);
var vec__33172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"path-atoms","path-atoms",-112825117));
var a0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(0),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(1),null);
var vec__33175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var in0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33175,(0),null);
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33175,(1),null);
var p0 = cromulator.browser.superformula_path();
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,a0),new cljs.core.Keyword(null,"id","id",-1388402092),id0,new cljs.core.Keyword(null,"d","d",1972142424),p0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,a1),new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"d","d",1972142424),cromulator.browser.superformula_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(in1)], 0))], null)], null)], null);
});
});
cromulator.browser.tweener = (function cromulator$browser$tweener(n1,p0,n2,p1,t_QMARK_,cb){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(p0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(p1);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not(cljs.core.deref(t_QMARK_));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var with_let33178_33192 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let33178","with-let33178",-1561664192));
var temp__5808__auto___33193 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___33193 == null)){
} else {
var c__15983__auto___33194 = temp__5808__auto___33193;
if((with_let33178_33192.generation === c__15983__auto___33194.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let33178_33192.generation = c__15983__auto___33194.ratomGeneration);
}

var init33179_33195 = (with_let33178_33192.length === (0));
var tween_33196 = ((((init33179_33195) || (cljs.core.not(with_let33178_33192.hasOwnProperty((0))))))?(with_let33178_33192[(0)] = module$node_modules$kute_DOT_js$dist$kute_min.to(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n1)].join(''),({"path": ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n2)].join('')}),({"duration": (1000), "easing": "easingCubicOut", "onComplete": (function (){
cljs.core.reset_BANG_(t_QMARK_,false);

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
})}))):(with_let33178_33192[(0)]));
var res33180_33197 = (function (){
cljs.core.reset_BANG_(t_QMARK_,true);

return tween_33196.start();
})()
;
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
cromulator.browser.home_page = (function cromulator$browser$home_page(){
var with_let33181 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let33181","with-let33181",-2099923222));
var temp__5808__auto___33198 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___33198 == null)){
} else {
var c__15983__auto___33199 = temp__5808__auto___33198;
if((with_let33181.generation === c__15983__auto___33199.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let33181.generation = c__15983__auto___33199.ratomGeneration);
}

var init33182 = (with_let33181.length === (0));
var iter = ((((init33182) || (cljs.core.not(with_let33181.hasOwnProperty((0))))))?(with_let33181[(0)] = reagent.core.cursor(cromulator.browser.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iter","iter",1308240283)], null))):(with_let33181[(0)]));
var p0 = ((((init33182) || (cljs.core.not(with_let33181.hasOwnProperty((1))))))?(with_let33181[(1)] = reagent.core.cursor(cromulator.browser.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-refs","path-refs",-1663025245),(0)], null))):(with_let33181[(1)]));
var p1 = ((((init33182) || (cljs.core.not(with_let33181.hasOwnProperty((2))))))?(with_let33181[(2)] = reagent.core.cursor(cromulator.browser.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-refs","path-refs",-1663025245),(1)], null))):(with_let33181[(2)]));
var in0 = ((((init33182) || (cljs.core.not(with_let33181.hasOwnProperty((3))))))?(with_let33181[(3)] = reagent.core.cursor(cromulator.browser.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0)], null))):(with_let33181[(3)]));
var in1 = ((((init33182) || (cljs.core.not(with_let33181.hasOwnProperty((4))))))?(with_let33181[(4)] = reagent.core.cursor(cromulator.browser.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(1)], null))):(with_let33181[(4)]));
var t_QMARK_ = ((((init33182) || (cljs.core.not(with_let33181.hasOwnProperty((5))))))?(with_let33181[(5)] = reagent.core.cursor(cromulator.browser.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweening?","tweening?",207097185)], null))):(with_let33181[(5)]));
var res33183 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cromulator.browser.sliders], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cromulator.browser.superformula_svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-ids","path-ids",-591186947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["visible","invisible"], null),new cljs.core.Keyword(null,"path-atoms","path-atoms",-112825117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p0,p1], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in0,in1], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cromulator.browser.tweener,"visible",p0,"invisible",p1,t_QMARK_,(function (){
var v = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cromulator.browser.state,cljs.core.update,new cljs.core.Keyword(null,"iter","iter",1308240283),cljs.core.inc);
if((cljs.core.mod(new cljs.core.Keyword(null,"iter","iter",1308240283).cljs$core$IFn$_invoke$arity$1(v),(2)) > (0))){
return cljs.core.reset_BANG_(in1,cromulator.browser.superformula_inputs());
} else {
return null;
}
})], null)], null);
return res33183;
});
cromulator.browser.mount_root = (function cromulator$browser$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cromulator.browser.home_page], null),document.getElementById("app"));
});
cromulator.browser.init_BANG_ = (function cromulator$browser$init_BANG_(){
return cromulator.browser.mount_root();
});
goog.exportSymbol('cromulator.browser.init_BANG_', cromulator.browser.init_BANG_);

//# sourceMappingURL=cromulator.browser.js.map
