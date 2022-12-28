goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_23263 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_23263(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_23274 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_23274(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__21902 = coll;
var G__21903 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__21902,G__21903) : shadow.dom.lazy_native_coll_seq.call(null,G__21902,G__21903));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__21923 = arguments.length;
switch (G__21923) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__21937 = arguments.length;
switch (G__21937) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__21954 = arguments.length;
switch (G__21954) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__21960 = arguments.length;
switch (G__21960) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__21972 = arguments.length;
switch (G__21972) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__21990 = arguments.length;
switch (G__21990) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e22021){if((e22021 instanceof Object)){
var e = e22021;
return console.log("didnt support attachEvent",el,e);
} else {
throw e22021;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__22052 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__22053 = null;
var count__22054 = (0);
var i__22055 = (0);
while(true){
if((i__22055 < count__22054)){
var el = chunk__22053.cljs$core$IIndexed$_nth$arity$2(null,i__22055);
var handler_23372__$1 = ((function (seq__22052,chunk__22053,count__22054,i__22055,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__22052,chunk__22053,count__22054,i__22055,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23372__$1);


var G__23378 = seq__22052;
var G__23379 = chunk__22053;
var G__23380 = count__22054;
var G__23381 = (i__22055 + (1));
seq__22052 = G__23378;
chunk__22053 = G__23379;
count__22054 = G__23380;
i__22055 = G__23381;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22052);
if(temp__5804__auto__){
var seq__22052__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22052__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22052__$1);
var G__23389 = cljs.core.chunk_rest(seq__22052__$1);
var G__23390 = c__5568__auto__;
var G__23391 = cljs.core.count(c__5568__auto__);
var G__23392 = (0);
seq__22052 = G__23389;
chunk__22053 = G__23390;
count__22054 = G__23391;
i__22055 = G__23392;
continue;
} else {
var el = cljs.core.first(seq__22052__$1);
var handler_23399__$1 = ((function (seq__22052,chunk__22053,count__22054,i__22055,el,seq__22052__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__22052,chunk__22053,count__22054,i__22055,el,seq__22052__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23399__$1);


var G__23410 = cljs.core.next(seq__22052__$1);
var G__23411 = null;
var G__23412 = (0);
var G__23413 = (0);
seq__22052 = G__23410;
chunk__22053 = G__23411;
count__22054 = G__23412;
i__22055 = G__23413;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__22088 = arguments.length;
switch (G__22088) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__22099 = cljs.core.seq(events);
var chunk__22100 = null;
var count__22101 = (0);
var i__22102 = (0);
while(true){
if((i__22102 < count__22101)){
var vec__22121 = chunk__22100.cljs$core$IIndexed$_nth$arity$2(null,i__22102);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23434 = seq__22099;
var G__23436 = chunk__22100;
var G__23438 = count__22101;
var G__23440 = (i__22102 + (1));
seq__22099 = G__23434;
chunk__22100 = G__23436;
count__22101 = G__23438;
i__22102 = G__23440;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22099);
if(temp__5804__auto__){
var seq__22099__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22099__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22099__$1);
var G__23450 = cljs.core.chunk_rest(seq__22099__$1);
var G__23451 = c__5568__auto__;
var G__23453 = cljs.core.count(c__5568__auto__);
var G__23455 = (0);
seq__22099 = G__23450;
chunk__22100 = G__23451;
count__22101 = G__23453;
i__22102 = G__23455;
continue;
} else {
var vec__22126 = cljs.core.first(seq__22099__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22126,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23464 = cljs.core.next(seq__22099__$1);
var G__23465 = null;
var G__23466 = (0);
var G__23467 = (0);
seq__22099 = G__23464;
chunk__22100 = G__23465;
count__22101 = G__23466;
i__22102 = G__23467;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__22134 = cljs.core.seq(styles);
var chunk__22135 = null;
var count__22136 = (0);
var i__22137 = (0);
while(true){
if((i__22137 < count__22136)){
var vec__22162 = chunk__22135.cljs$core$IIndexed$_nth$arity$2(null,i__22137);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23476 = seq__22134;
var G__23477 = chunk__22135;
var G__23478 = count__22136;
var G__23479 = (i__22137 + (1));
seq__22134 = G__23476;
chunk__22135 = G__23477;
count__22136 = G__23478;
i__22137 = G__23479;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22134);
if(temp__5804__auto__){
var seq__22134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22134__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22134__$1);
var G__23481 = cljs.core.chunk_rest(seq__22134__$1);
var G__23482 = c__5568__auto__;
var G__23483 = cljs.core.count(c__5568__auto__);
var G__23484 = (0);
seq__22134 = G__23481;
chunk__22135 = G__23482;
count__22136 = G__23483;
i__22137 = G__23484;
continue;
} else {
var vec__22174 = cljs.core.first(seq__22134__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22174,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23489 = cljs.core.next(seq__22134__$1);
var G__23490 = null;
var G__23491 = (0);
var G__23492 = (0);
seq__22134 = G__23489;
chunk__22135 = G__23490;
count__22136 = G__23491;
i__22137 = G__23492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__22183_23496 = key;
var G__22183_23497__$1 = (((G__22183_23496 instanceof cljs.core.Keyword))?G__22183_23496.fqn:null);
switch (G__22183_23497__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_23519 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_23519,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_23519,"aria-");
}
})())){
el.setAttribute(ks_23519,value);
} else {
(el[ks_23519] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__22220){
var map__22222 = p__22220;
var map__22222__$1 = cljs.core.__destructure_map(map__22222);
var props = map__22222__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__22227 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__22234 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__22234,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__22234;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__22239 = arguments.length;
switch (G__22239) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__22270){
var vec__22273 = p__22270;
var seq__22274 = cljs.core.seq(vec__22273);
var first__22275 = cljs.core.first(seq__22274);
var seq__22274__$1 = cljs.core.next(seq__22274);
var nn = first__22275;
var first__22275__$1 = cljs.core.first(seq__22274__$1);
var seq__22274__$2 = cljs.core.next(seq__22274__$1);
var np = first__22275__$1;
var nc = seq__22274__$2;
var node = vec__22273;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22277 = nn;
var G__22278 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22277,G__22278) : create_fn.call(null,G__22277,G__22278));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22279 = nn;
var G__22280 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22279,G__22280) : create_fn.call(null,G__22279,G__22280));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__22284 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22284,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22284,(1),null);
var seq__22287_23562 = cljs.core.seq(node_children);
var chunk__22289_23563 = null;
var count__22290_23564 = (0);
var i__22291_23565 = (0);
while(true){
if((i__22291_23565 < count__22290_23564)){
var child_struct_23566 = chunk__22289_23563.cljs$core$IIndexed$_nth$arity$2(null,i__22291_23565);
var children_23569 = shadow.dom.dom_node(child_struct_23566);
if(cljs.core.seq_QMARK_(children_23569)){
var seq__22347_23570 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23569));
var chunk__22349_23571 = null;
var count__22350_23572 = (0);
var i__22351_23573 = (0);
while(true){
if((i__22351_23573 < count__22350_23572)){
var child_23576 = chunk__22349_23571.cljs$core$IIndexed$_nth$arity$2(null,i__22351_23573);
if(cljs.core.truth_(child_23576)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23576);


var G__23577 = seq__22347_23570;
var G__23578 = chunk__22349_23571;
var G__23579 = count__22350_23572;
var G__23580 = (i__22351_23573 + (1));
seq__22347_23570 = G__23577;
chunk__22349_23571 = G__23578;
count__22350_23572 = G__23579;
i__22351_23573 = G__23580;
continue;
} else {
var G__23581 = seq__22347_23570;
var G__23583 = chunk__22349_23571;
var G__23584 = count__22350_23572;
var G__23585 = (i__22351_23573 + (1));
seq__22347_23570 = G__23581;
chunk__22349_23571 = G__23583;
count__22350_23572 = G__23584;
i__22351_23573 = G__23585;
continue;
}
} else {
var temp__5804__auto___23586 = cljs.core.seq(seq__22347_23570);
if(temp__5804__auto___23586){
var seq__22347_23588__$1 = temp__5804__auto___23586;
if(cljs.core.chunked_seq_QMARK_(seq__22347_23588__$1)){
var c__5568__auto___23593 = cljs.core.chunk_first(seq__22347_23588__$1);
var G__23594 = cljs.core.chunk_rest(seq__22347_23588__$1);
var G__23595 = c__5568__auto___23593;
var G__23596 = cljs.core.count(c__5568__auto___23593);
var G__23597 = (0);
seq__22347_23570 = G__23594;
chunk__22349_23571 = G__23595;
count__22350_23572 = G__23596;
i__22351_23573 = G__23597;
continue;
} else {
var child_23600 = cljs.core.first(seq__22347_23588__$1);
if(cljs.core.truth_(child_23600)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23600);


var G__23601 = cljs.core.next(seq__22347_23588__$1);
var G__23602 = null;
var G__23603 = (0);
var G__23604 = (0);
seq__22347_23570 = G__23601;
chunk__22349_23571 = G__23602;
count__22350_23572 = G__23603;
i__22351_23573 = G__23604;
continue;
} else {
var G__23605 = cljs.core.next(seq__22347_23588__$1);
var G__23606 = null;
var G__23607 = (0);
var G__23608 = (0);
seq__22347_23570 = G__23605;
chunk__22349_23571 = G__23606;
count__22350_23572 = G__23607;
i__22351_23573 = G__23608;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23569);
}


var G__23611 = seq__22287_23562;
var G__23612 = chunk__22289_23563;
var G__23613 = count__22290_23564;
var G__23614 = (i__22291_23565 + (1));
seq__22287_23562 = G__23611;
chunk__22289_23563 = G__23612;
count__22290_23564 = G__23613;
i__22291_23565 = G__23614;
continue;
} else {
var temp__5804__auto___23615 = cljs.core.seq(seq__22287_23562);
if(temp__5804__auto___23615){
var seq__22287_23617__$1 = temp__5804__auto___23615;
if(cljs.core.chunked_seq_QMARK_(seq__22287_23617__$1)){
var c__5568__auto___23618 = cljs.core.chunk_first(seq__22287_23617__$1);
var G__23619 = cljs.core.chunk_rest(seq__22287_23617__$1);
var G__23620 = c__5568__auto___23618;
var G__23621 = cljs.core.count(c__5568__auto___23618);
var G__23622 = (0);
seq__22287_23562 = G__23619;
chunk__22289_23563 = G__23620;
count__22290_23564 = G__23621;
i__22291_23565 = G__23622;
continue;
} else {
var child_struct_23624 = cljs.core.first(seq__22287_23617__$1);
var children_23625 = shadow.dom.dom_node(child_struct_23624);
if(cljs.core.seq_QMARK_(children_23625)){
var seq__22393_23626 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23625));
var chunk__22395_23627 = null;
var count__22396_23628 = (0);
var i__22397_23629 = (0);
while(true){
if((i__22397_23629 < count__22396_23628)){
var child_23632 = chunk__22395_23627.cljs$core$IIndexed$_nth$arity$2(null,i__22397_23629);
if(cljs.core.truth_(child_23632)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23632);


var G__23634 = seq__22393_23626;
var G__23635 = chunk__22395_23627;
var G__23636 = count__22396_23628;
var G__23637 = (i__22397_23629 + (1));
seq__22393_23626 = G__23634;
chunk__22395_23627 = G__23635;
count__22396_23628 = G__23636;
i__22397_23629 = G__23637;
continue;
} else {
var G__23638 = seq__22393_23626;
var G__23639 = chunk__22395_23627;
var G__23640 = count__22396_23628;
var G__23641 = (i__22397_23629 + (1));
seq__22393_23626 = G__23638;
chunk__22395_23627 = G__23639;
count__22396_23628 = G__23640;
i__22397_23629 = G__23641;
continue;
}
} else {
var temp__5804__auto___23642__$1 = cljs.core.seq(seq__22393_23626);
if(temp__5804__auto___23642__$1){
var seq__22393_23644__$1 = temp__5804__auto___23642__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22393_23644__$1)){
var c__5568__auto___23645 = cljs.core.chunk_first(seq__22393_23644__$1);
var G__23646 = cljs.core.chunk_rest(seq__22393_23644__$1);
var G__23647 = c__5568__auto___23645;
var G__23648 = cljs.core.count(c__5568__auto___23645);
var G__23649 = (0);
seq__22393_23626 = G__23646;
chunk__22395_23627 = G__23647;
count__22396_23628 = G__23648;
i__22397_23629 = G__23649;
continue;
} else {
var child_23650 = cljs.core.first(seq__22393_23644__$1);
if(cljs.core.truth_(child_23650)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23650);


var G__23651 = cljs.core.next(seq__22393_23644__$1);
var G__23652 = null;
var G__23653 = (0);
var G__23654 = (0);
seq__22393_23626 = G__23651;
chunk__22395_23627 = G__23652;
count__22396_23628 = G__23653;
i__22397_23629 = G__23654;
continue;
} else {
var G__23656 = cljs.core.next(seq__22393_23644__$1);
var G__23657 = null;
var G__23658 = (0);
var G__23659 = (0);
seq__22393_23626 = G__23656;
chunk__22395_23627 = G__23657;
count__22396_23628 = G__23658;
i__22397_23629 = G__23659;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23625);
}


var G__23661 = cljs.core.next(seq__22287_23617__$1);
var G__23662 = null;
var G__23663 = (0);
var G__23664 = (0);
seq__22287_23562 = G__23661;
chunk__22289_23563 = G__23662;
count__22290_23564 = G__23663;
i__22291_23565 = G__23664;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__22430 = cljs.core.seq(node);
var chunk__22431 = null;
var count__22432 = (0);
var i__22433 = (0);
while(true){
if((i__22433 < count__22432)){
var n = chunk__22431.cljs$core$IIndexed$_nth$arity$2(null,i__22433);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23672 = seq__22430;
var G__23673 = chunk__22431;
var G__23674 = count__22432;
var G__23675 = (i__22433 + (1));
seq__22430 = G__23672;
chunk__22431 = G__23673;
count__22432 = G__23674;
i__22433 = G__23675;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22430);
if(temp__5804__auto__){
var seq__22430__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22430__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22430__$1);
var G__23676 = cljs.core.chunk_rest(seq__22430__$1);
var G__23677 = c__5568__auto__;
var G__23678 = cljs.core.count(c__5568__auto__);
var G__23679 = (0);
seq__22430 = G__23676;
chunk__22431 = G__23677;
count__22432 = G__23678;
i__22433 = G__23679;
continue;
} else {
var n = cljs.core.first(seq__22430__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23680 = cljs.core.next(seq__22430__$1);
var G__23681 = null;
var G__23682 = (0);
var G__23683 = (0);
seq__22430 = G__23680;
chunk__22431 = G__23681;
count__22432 = G__23682;
i__22433 = G__23683;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__22457 = arguments.length;
switch (G__22457) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__22470 = arguments.length;
switch (G__22470) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__22494 = arguments.length;
switch (G__22494) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23703 = arguments.length;
var i__5770__auto___23704 = (0);
while(true){
if((i__5770__auto___23704 < len__5769__auto___23703)){
args__5775__auto__.push((arguments[i__5770__auto___23704]));

var G__23709 = (i__5770__auto___23704 + (1));
i__5770__auto___23704 = G__23709;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__22516_23711 = cljs.core.seq(nodes);
var chunk__22517_23712 = null;
var count__22518_23713 = (0);
var i__22519_23714 = (0);
while(true){
if((i__22519_23714 < count__22518_23713)){
var node_23716 = chunk__22517_23712.cljs$core$IIndexed$_nth$arity$2(null,i__22519_23714);
fragment.appendChild(shadow.dom._to_dom(node_23716));


var G__23717 = seq__22516_23711;
var G__23718 = chunk__22517_23712;
var G__23719 = count__22518_23713;
var G__23720 = (i__22519_23714 + (1));
seq__22516_23711 = G__23717;
chunk__22517_23712 = G__23718;
count__22518_23713 = G__23719;
i__22519_23714 = G__23720;
continue;
} else {
var temp__5804__auto___23721 = cljs.core.seq(seq__22516_23711);
if(temp__5804__auto___23721){
var seq__22516_23722__$1 = temp__5804__auto___23721;
if(cljs.core.chunked_seq_QMARK_(seq__22516_23722__$1)){
var c__5568__auto___23723 = cljs.core.chunk_first(seq__22516_23722__$1);
var G__23724 = cljs.core.chunk_rest(seq__22516_23722__$1);
var G__23725 = c__5568__auto___23723;
var G__23726 = cljs.core.count(c__5568__auto___23723);
var G__23727 = (0);
seq__22516_23711 = G__23724;
chunk__22517_23712 = G__23725;
count__22518_23713 = G__23726;
i__22519_23714 = G__23727;
continue;
} else {
var node_23728 = cljs.core.first(seq__22516_23722__$1);
fragment.appendChild(shadow.dom._to_dom(node_23728));


var G__23730 = cljs.core.next(seq__22516_23722__$1);
var G__23731 = null;
var G__23732 = (0);
var G__23733 = (0);
seq__22516_23711 = G__23730;
chunk__22517_23712 = G__23731;
count__22518_23713 = G__23732;
i__22519_23714 = G__23733;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq22510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22510));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__22546_23739 = cljs.core.seq(scripts);
var chunk__22547_23740 = null;
var count__22548_23741 = (0);
var i__22549_23742 = (0);
while(true){
if((i__22549_23742 < count__22548_23741)){
var vec__22569_23749 = chunk__22547_23740.cljs$core$IIndexed$_nth$arity$2(null,i__22549_23742);
var script_tag_23750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22569_23749,(0),null);
var script_body_23751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22569_23749,(1),null);
eval(script_body_23751);


var G__23762 = seq__22546_23739;
var G__23763 = chunk__22547_23740;
var G__23764 = count__22548_23741;
var G__23765 = (i__22549_23742 + (1));
seq__22546_23739 = G__23762;
chunk__22547_23740 = G__23763;
count__22548_23741 = G__23764;
i__22549_23742 = G__23765;
continue;
} else {
var temp__5804__auto___23771 = cljs.core.seq(seq__22546_23739);
if(temp__5804__auto___23771){
var seq__22546_23772__$1 = temp__5804__auto___23771;
if(cljs.core.chunked_seq_QMARK_(seq__22546_23772__$1)){
var c__5568__auto___23773 = cljs.core.chunk_first(seq__22546_23772__$1);
var G__23774 = cljs.core.chunk_rest(seq__22546_23772__$1);
var G__23775 = c__5568__auto___23773;
var G__23776 = cljs.core.count(c__5568__auto___23773);
var G__23777 = (0);
seq__22546_23739 = G__23774;
chunk__22547_23740 = G__23775;
count__22548_23741 = G__23776;
i__22549_23742 = G__23777;
continue;
} else {
var vec__22579_23778 = cljs.core.first(seq__22546_23772__$1);
var script_tag_23779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22579_23778,(0),null);
var script_body_23780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22579_23778,(1),null);
eval(script_body_23780);


var G__23785 = cljs.core.next(seq__22546_23772__$1);
var G__23786 = null;
var G__23787 = (0);
var G__23788 = (0);
seq__22546_23739 = G__23785;
chunk__22547_23740 = G__23786;
count__22548_23741 = G__23787;
i__22549_23742 = G__23788;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__22584){
var vec__22585 = p__22584;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__22610 = arguments.length;
switch (G__22610) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__22670 = cljs.core.seq(style_keys);
var chunk__22671 = null;
var count__22672 = (0);
var i__22673 = (0);
while(true){
if((i__22673 < count__22672)){
var it = chunk__22671.cljs$core$IIndexed$_nth$arity$2(null,i__22673);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23811 = seq__22670;
var G__23812 = chunk__22671;
var G__23813 = count__22672;
var G__23814 = (i__22673 + (1));
seq__22670 = G__23811;
chunk__22671 = G__23812;
count__22672 = G__23813;
i__22673 = G__23814;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22670);
if(temp__5804__auto__){
var seq__22670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22670__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22670__$1);
var G__23815 = cljs.core.chunk_rest(seq__22670__$1);
var G__23816 = c__5568__auto__;
var G__23817 = cljs.core.count(c__5568__auto__);
var G__23818 = (0);
seq__22670 = G__23815;
chunk__22671 = G__23816;
count__22672 = G__23817;
i__22673 = G__23818;
continue;
} else {
var it = cljs.core.first(seq__22670__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23819 = cljs.core.next(seq__22670__$1);
var G__23820 = null;
var G__23821 = (0);
var G__23822 = (0);
seq__22670 = G__23819;
chunk__22671 = G__23820;
count__22672 = G__23821;
i__22673 = G__23822;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22679,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22694 = k22679;
var G__22694__$1 = (((G__22694 instanceof cljs.core.Keyword))?G__22694.fqn:null);
switch (G__22694__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22679,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22695){
var vec__22697 = p__22695;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22697,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22697,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22678){
var self__ = this;
var G__22678__$1 = this;
return (new cljs.core.RecordIter((0),G__22678__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22680,other22681){
var self__ = this;
var this22680__$1 = this;
return (((!((other22681 == null)))) && ((((this22680__$1.constructor === other22681.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22680__$1.x,other22681.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22680__$1.y,other22681.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22680__$1.__extmap,other22681.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22679){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22723 = k22679;
var G__22723__$1 = (((G__22723 instanceof cljs.core.Keyword))?G__22723.fqn:null);
switch (G__22723__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22679);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22678){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22725 = cljs.core.keyword_identical_QMARK_;
var expr__22726 = k__5352__auto__;
if(cljs.core.truth_((pred__22725.cljs$core$IFn$_invoke$arity$2 ? pred__22725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__22726) : pred__22725.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22726)))){
return (new shadow.dom.Coordinate(G__22678,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22725.cljs$core$IFn$_invoke$arity$2 ? pred__22725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__22726) : pred__22725.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22726)))){
return (new shadow.dom.Coordinate(self__.x,G__22678,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22678),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22678){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__22678,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__22682){
var extmap__5385__auto__ = (function (){var G__22737 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22682,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__22682)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22737);
} else {
return G__22737;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22682),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22682),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22749,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22767 = k22749;
var G__22767__$1 = (((G__22767 instanceof cljs.core.Keyword))?G__22767.fqn:null);
switch (G__22767__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22749,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22772){
var vec__22773 = p__22772;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22773,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22773,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22748){
var self__ = this;
var G__22748__$1 = this;
return (new cljs.core.RecordIter((0),G__22748__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22750,other22751){
var self__ = this;
var this22750__$1 = this;
return (((!((other22751 == null)))) && ((((this22750__$1.constructor === other22751.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22750__$1.w,other22751.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22750__$1.h,other22751.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22750__$1.__extmap,other22751.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22749){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22800 = k22749;
var G__22800__$1 = (((G__22800 instanceof cljs.core.Keyword))?G__22800.fqn:null);
switch (G__22800__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22749);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22748){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22806 = cljs.core.keyword_identical_QMARK_;
var expr__22807 = k__5352__auto__;
if(cljs.core.truth_((pred__22806.cljs$core$IFn$_invoke$arity$2 ? pred__22806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__22807) : pred__22806.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22807)))){
return (new shadow.dom.Size(G__22748,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22806.cljs$core$IFn$_invoke$arity$2 ? pred__22806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__22807) : pred__22806.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22807)))){
return (new shadow.dom.Size(self__.w,G__22748,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22748),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22748){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__22748,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__22756){
var extmap__5385__auto__ = (function (){var G__22838 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22756,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__22756)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22838);
} else {
return G__22838;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22756),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22756),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__23960 = (i + (1));
var G__23961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23960;
ret = G__23961;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22884){
var vec__22885 = p__22884;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22885,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__22894 = arguments.length;
switch (G__22894) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23975 = ps;
var G__23976 = (i + (1));
el__$1 = G__23975;
i = G__23976;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__22976 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__22982_23982 = cljs.core.seq(props);
var chunk__22983_23983 = null;
var count__22984_23984 = (0);
var i__22985_23985 = (0);
while(true){
if((i__22985_23985 < count__22984_23984)){
var vec__23006_23986 = chunk__22983_23983.cljs$core$IIndexed$_nth$arity$2(null,i__22985_23985);
var k_23987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006_23986,(0),null);
var v_23988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006_23986,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_23987);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23987),v_23988);


var G__23996 = seq__22982_23982;
var G__23997 = chunk__22983_23983;
var G__23998 = count__22984_23984;
var G__23999 = (i__22985_23985 + (1));
seq__22982_23982 = G__23996;
chunk__22983_23983 = G__23997;
count__22984_23984 = G__23998;
i__22985_23985 = G__23999;
continue;
} else {
var temp__5804__auto___24004 = cljs.core.seq(seq__22982_23982);
if(temp__5804__auto___24004){
var seq__22982_24005__$1 = temp__5804__auto___24004;
if(cljs.core.chunked_seq_QMARK_(seq__22982_24005__$1)){
var c__5568__auto___24006 = cljs.core.chunk_first(seq__22982_24005__$1);
var G__24007 = cljs.core.chunk_rest(seq__22982_24005__$1);
var G__24008 = c__5568__auto___24006;
var G__24009 = cljs.core.count(c__5568__auto___24006);
var G__24010 = (0);
seq__22982_23982 = G__24007;
chunk__22983_23983 = G__24008;
count__22984_23984 = G__24009;
i__22985_23985 = G__24010;
continue;
} else {
var vec__23010_24012 = cljs.core.first(seq__22982_24005__$1);
var k_24013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010_24012,(0),null);
var v_24014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010_24012,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_24013);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24013),v_24014);


var G__24015 = cljs.core.next(seq__22982_24005__$1);
var G__24016 = null;
var G__24017 = (0);
var G__24018 = (0);
seq__22982_23982 = G__24015;
chunk__22983_23983 = G__24016;
count__22984_23984 = G__24017;
i__22985_23985 = G__24018;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__23023 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23023,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23023,(1),null);
var seq__23027_24020 = cljs.core.seq(node_children);
var chunk__23029_24021 = null;
var count__23030_24022 = (0);
var i__23031_24023 = (0);
while(true){
if((i__23031_24023 < count__23030_24022)){
var child_struct_24029 = chunk__23029_24021.cljs$core$IIndexed$_nth$arity$2(null,i__23031_24023);
if((!((child_struct_24029 == null)))){
if(typeof child_struct_24029 === 'string'){
var text_24031 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24031),child_struct_24029].join(''));
} else {
var children_24032 = shadow.dom.svg_node(child_struct_24029);
if(cljs.core.seq_QMARK_(children_24032)){
var seq__23105_24035 = cljs.core.seq(children_24032);
var chunk__23107_24036 = null;
var count__23108_24037 = (0);
var i__23109_24038 = (0);
while(true){
if((i__23109_24038 < count__23108_24037)){
var child_24039 = chunk__23107_24036.cljs$core$IIndexed$_nth$arity$2(null,i__23109_24038);
if(cljs.core.truth_(child_24039)){
node.appendChild(child_24039);


var G__24040 = seq__23105_24035;
var G__24041 = chunk__23107_24036;
var G__24042 = count__23108_24037;
var G__24043 = (i__23109_24038 + (1));
seq__23105_24035 = G__24040;
chunk__23107_24036 = G__24041;
count__23108_24037 = G__24042;
i__23109_24038 = G__24043;
continue;
} else {
var G__24045 = seq__23105_24035;
var G__24046 = chunk__23107_24036;
var G__24047 = count__23108_24037;
var G__24048 = (i__23109_24038 + (1));
seq__23105_24035 = G__24045;
chunk__23107_24036 = G__24046;
count__23108_24037 = G__24047;
i__23109_24038 = G__24048;
continue;
}
} else {
var temp__5804__auto___24050 = cljs.core.seq(seq__23105_24035);
if(temp__5804__auto___24050){
var seq__23105_24051__$1 = temp__5804__auto___24050;
if(cljs.core.chunked_seq_QMARK_(seq__23105_24051__$1)){
var c__5568__auto___24052 = cljs.core.chunk_first(seq__23105_24051__$1);
var G__24053 = cljs.core.chunk_rest(seq__23105_24051__$1);
var G__24054 = c__5568__auto___24052;
var G__24055 = cljs.core.count(c__5568__auto___24052);
var G__24056 = (0);
seq__23105_24035 = G__24053;
chunk__23107_24036 = G__24054;
count__23108_24037 = G__24055;
i__23109_24038 = G__24056;
continue;
} else {
var child_24061 = cljs.core.first(seq__23105_24051__$1);
if(cljs.core.truth_(child_24061)){
node.appendChild(child_24061);


var G__24062 = cljs.core.next(seq__23105_24051__$1);
var G__24063 = null;
var G__24064 = (0);
var G__24065 = (0);
seq__23105_24035 = G__24062;
chunk__23107_24036 = G__24063;
count__23108_24037 = G__24064;
i__23109_24038 = G__24065;
continue;
} else {
var G__24067 = cljs.core.next(seq__23105_24051__$1);
var G__24068 = null;
var G__24069 = (0);
var G__24070 = (0);
seq__23105_24035 = G__24067;
chunk__23107_24036 = G__24068;
count__23108_24037 = G__24069;
i__23109_24038 = G__24070;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24032);
}
}


var G__24073 = seq__23027_24020;
var G__24074 = chunk__23029_24021;
var G__24075 = count__23030_24022;
var G__24076 = (i__23031_24023 + (1));
seq__23027_24020 = G__24073;
chunk__23029_24021 = G__24074;
count__23030_24022 = G__24075;
i__23031_24023 = G__24076;
continue;
} else {
var G__24077 = seq__23027_24020;
var G__24078 = chunk__23029_24021;
var G__24079 = count__23030_24022;
var G__24080 = (i__23031_24023 + (1));
seq__23027_24020 = G__24077;
chunk__23029_24021 = G__24078;
count__23030_24022 = G__24079;
i__23031_24023 = G__24080;
continue;
}
} else {
var temp__5804__auto___24082 = cljs.core.seq(seq__23027_24020);
if(temp__5804__auto___24082){
var seq__23027_24083__$1 = temp__5804__auto___24082;
if(cljs.core.chunked_seq_QMARK_(seq__23027_24083__$1)){
var c__5568__auto___24084 = cljs.core.chunk_first(seq__23027_24083__$1);
var G__24085 = cljs.core.chunk_rest(seq__23027_24083__$1);
var G__24086 = c__5568__auto___24084;
var G__24087 = cljs.core.count(c__5568__auto___24084);
var G__24088 = (0);
seq__23027_24020 = G__24085;
chunk__23029_24021 = G__24086;
count__23030_24022 = G__24087;
i__23031_24023 = G__24088;
continue;
} else {
var child_struct_24091 = cljs.core.first(seq__23027_24083__$1);
if((!((child_struct_24091 == null)))){
if(typeof child_struct_24091 === 'string'){
var text_24093 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24093),child_struct_24091].join(''));
} else {
var children_24096 = shadow.dom.svg_node(child_struct_24091);
if(cljs.core.seq_QMARK_(children_24096)){
var seq__23132_24097 = cljs.core.seq(children_24096);
var chunk__23134_24098 = null;
var count__23135_24099 = (0);
var i__23136_24100 = (0);
while(true){
if((i__23136_24100 < count__23135_24099)){
var child_24101 = chunk__23134_24098.cljs$core$IIndexed$_nth$arity$2(null,i__23136_24100);
if(cljs.core.truth_(child_24101)){
node.appendChild(child_24101);


var G__24102 = seq__23132_24097;
var G__24103 = chunk__23134_24098;
var G__24104 = count__23135_24099;
var G__24105 = (i__23136_24100 + (1));
seq__23132_24097 = G__24102;
chunk__23134_24098 = G__24103;
count__23135_24099 = G__24104;
i__23136_24100 = G__24105;
continue;
} else {
var G__24109 = seq__23132_24097;
var G__24110 = chunk__23134_24098;
var G__24111 = count__23135_24099;
var G__24112 = (i__23136_24100 + (1));
seq__23132_24097 = G__24109;
chunk__23134_24098 = G__24110;
count__23135_24099 = G__24111;
i__23136_24100 = G__24112;
continue;
}
} else {
var temp__5804__auto___24113__$1 = cljs.core.seq(seq__23132_24097);
if(temp__5804__auto___24113__$1){
var seq__23132_24114__$1 = temp__5804__auto___24113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23132_24114__$1)){
var c__5568__auto___24116 = cljs.core.chunk_first(seq__23132_24114__$1);
var G__24117 = cljs.core.chunk_rest(seq__23132_24114__$1);
var G__24118 = c__5568__auto___24116;
var G__24119 = cljs.core.count(c__5568__auto___24116);
var G__24120 = (0);
seq__23132_24097 = G__24117;
chunk__23134_24098 = G__24118;
count__23135_24099 = G__24119;
i__23136_24100 = G__24120;
continue;
} else {
var child_24121 = cljs.core.first(seq__23132_24114__$1);
if(cljs.core.truth_(child_24121)){
node.appendChild(child_24121);


var G__24122 = cljs.core.next(seq__23132_24114__$1);
var G__24123 = null;
var G__24124 = (0);
var G__24125 = (0);
seq__23132_24097 = G__24122;
chunk__23134_24098 = G__24123;
count__23135_24099 = G__24124;
i__23136_24100 = G__24125;
continue;
} else {
var G__24126 = cljs.core.next(seq__23132_24114__$1);
var G__24127 = null;
var G__24128 = (0);
var G__24129 = (0);
seq__23132_24097 = G__24126;
chunk__23134_24098 = G__24127;
count__23135_24099 = G__24128;
i__23136_24100 = G__24129;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24096);
}
}


var G__24130 = cljs.core.next(seq__23027_24083__$1);
var G__24131 = null;
var G__24132 = (0);
var G__24133 = (0);
seq__23027_24020 = G__24130;
chunk__23029_24021 = G__24131;
count__23030_24022 = G__24132;
i__23031_24023 = G__24133;
continue;
} else {
var G__24139 = cljs.core.next(seq__23027_24083__$1);
var G__24140 = null;
var G__24141 = (0);
var G__24142 = (0);
seq__23027_24020 = G__24139;
chunk__23029_24021 = G__24140;
count__23030_24022 = G__24141;
i__23031_24023 = G__24142;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24149 = arguments.length;
var i__5770__auto___24150 = (0);
while(true){
if((i__5770__auto___24150 < len__5769__auto___24149)){
args__5775__auto__.push((arguments[i__5770__auto___24150]));

var G__24151 = (i__5770__auto___24150 + (1));
i__5770__auto___24150 = G__24151;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq23164){
var G__23165 = cljs.core.first(seq23164);
var seq23164__$1 = cljs.core.next(seq23164);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23165,seq23164__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__23181 = arguments.length;
switch (G__23181) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__18623__auto___24161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_23208){
var state_val_23210 = (state_23208[(1)]);
if((state_val_23210 === (1))){
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23208__$1,(2),once_or_cleanup);
} else {
if((state_val_23210 === (2))){
var inst_23205 = (state_23208[(2)]);
var inst_23206 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_23208__$1 = (function (){var statearr_23222 = state_23208;
(statearr_23222[(7)] = inst_23205);

return statearr_23222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23208__$1,inst_23206);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__18412__auto__ = null;
var shadow$dom$state_machine__18412__auto____0 = (function (){
var statearr_23223 = [null,null,null,null,null,null,null,null];
(statearr_23223[(0)] = shadow$dom$state_machine__18412__auto__);

(statearr_23223[(1)] = (1));

return statearr_23223;
});
var shadow$dom$state_machine__18412__auto____1 = (function (state_23208){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_23208);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e23225){var ex__18415__auto__ = e23225;
var statearr_23226_24165 = state_23208;
(statearr_23226_24165[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_23208[(4)]))){
var statearr_23229_24166 = state_23208;
(statearr_23229_24166[(1)] = cljs.core.first((state_23208[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24167 = state_23208;
state_23208 = G__24167;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
shadow$dom$state_machine__18412__auto__ = function(state_23208){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__18412__auto____0.call(this);
case 1:
return shadow$dom$state_machine__18412__auto____1.call(this,state_23208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__18412__auto____0;
shadow$dom$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__18412__auto____1;
return shadow$dom$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_23237 = f__18624__auto__();
(statearr_23237[(6)] = c__18623__auto___24161);

return statearr_23237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
