goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18746 = arguments.length;
switch (G__18746) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18751 = (function (f,blockable,meta18752){
this.f = f;
this.blockable = blockable;
this.meta18752 = meta18752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18753,meta18752__$1){
var self__ = this;
var _18753__$1 = this;
return (new cljs.core.async.t_cljs$core$async18751(self__.f,self__.blockable,meta18752__$1));
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18753){
var self__ = this;
var _18753__$1 = this;
return self__.meta18752;
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18752","meta18752",1003682893,null)], null);
}));

(cljs.core.async.t_cljs$core$async18751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18751");

(cljs.core.async.t_cljs$core$async18751.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18751.
 */
cljs.core.async.__GT_t_cljs$core$async18751 = (function cljs$core$async$__GT_t_cljs$core$async18751(f__$1,blockable__$1,meta18752){
return (new cljs.core.async.t_cljs$core$async18751(f__$1,blockable__$1,meta18752));
});

}

return (new cljs.core.async.t_cljs$core$async18751(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18773 = arguments.length;
switch (G__18773) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18780 = arguments.length;
switch (G__18780) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18787 = arguments.length;
switch (G__18787) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21857 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21857) : fn1.call(null,val_21857));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21857) : fn1.call(null,val_21857));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18798 = arguments.length;
switch (G__18798) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___21878 = n;
var x_21880 = (0);
while(true){
if((x_21880 < n__5636__auto___21878)){
(a[x_21880] = x_21880);

var G__21883 = (x_21880 + (1));
x_21880 = G__21883;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18803 = (function (flag,meta18804){
this.flag = flag;
this.meta18804 = meta18804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18805,meta18804__$1){
var self__ = this;
var _18805__$1 = this;
return (new cljs.core.async.t_cljs$core$async18803(self__.flag,meta18804__$1));
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18805){
var self__ = this;
var _18805__$1 = this;
return self__.meta18804;
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18804","meta18804",1887067215,null)], null);
}));

(cljs.core.async.t_cljs$core$async18803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18803");

(cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18803.
 */
cljs.core.async.__GT_t_cljs$core$async18803 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18803(flag__$1,meta18804){
return (new cljs.core.async.t_cljs$core$async18803(flag__$1,meta18804));
});

}

return (new cljs.core.async.t_cljs$core$async18803(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18836 = (function (flag,cb,meta18837){
this.flag = flag;
this.cb = cb;
this.meta18837 = meta18837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18838,meta18837__$1){
var self__ = this;
var _18838__$1 = this;
return (new cljs.core.async.t_cljs$core$async18836(self__.flag,self__.cb,meta18837__$1));
}));

(cljs.core.async.t_cljs$core$async18836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18838){
var self__ = this;
var _18838__$1 = this;
return self__.meta18837;
}));

(cljs.core.async.t_cljs$core$async18836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18837","meta18837",-357401458,null)], null);
}));

(cljs.core.async.t_cljs$core$async18836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18836");

(cljs.core.async.t_cljs$core$async18836.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18836.
 */
cljs.core.async.__GT_t_cljs$core$async18836 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18836(flag__$1,cb__$1,meta18837){
return (new cljs.core.async.t_cljs$core$async18836(flag__$1,cb__$1,meta18837));
});

}

return (new cljs.core.async.t_cljs$core$async18836(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18847_SHARP_){
var G__18849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18847_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18849) : fret.call(null,G__18849));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18848_SHARP_){
var G__18850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18848_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18850) : fret.call(null,G__18850));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21911 = (i + (1));
i = G__21911;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21913 = arguments.length;
var i__5770__auto___21914 = (0);
while(true){
if((i__5770__auto___21914 < len__5769__auto___21913)){
args__5775__auto__.push((arguments[i__5770__auto___21914]));

var G__21915 = (i__5770__auto___21914 + (1));
i__5770__auto___21914 = G__21915;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18857){
var map__18858 = p__18857;
var map__18858__$1 = cljs.core.__destructure_map(map__18858);
var opts = map__18858__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18851){
var G__18852 = cljs.core.first(seq18851);
var seq18851__$1 = cljs.core.next(seq18851);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18852,seq18851__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18875 = arguments.length;
switch (G__18875) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18623__auto___21926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_18948){
var state_val_18949 = (state_18948[(1)]);
if((state_val_18949 === (7))){
var inst_18940 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_18990_21928 = state_18948__$1;
(statearr_18990_21928[(2)] = inst_18940);

(statearr_18990_21928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (1))){
var state_18948__$1 = state_18948;
var statearr_18996_21929 = state_18948__$1;
(statearr_18996_21929[(2)] = null);

(statearr_18996_21929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (4))){
var inst_18913 = (state_18948[(7)]);
var inst_18913__$1 = (state_18948[(2)]);
var inst_18920 = (inst_18913__$1 == null);
var state_18948__$1 = (function (){var statearr_19001 = state_18948;
(statearr_19001[(7)] = inst_18913__$1);

return statearr_19001;
})();
if(cljs.core.truth_(inst_18920)){
var statearr_19004_21930 = state_18948__$1;
(statearr_19004_21930[(1)] = (5));

} else {
var statearr_19006_21931 = state_18948__$1;
(statearr_19006_21931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (13))){
var state_18948__$1 = state_18948;
var statearr_19010_21932 = state_18948__$1;
(statearr_19010_21932[(2)] = null);

(statearr_19010_21932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (6))){
var inst_18913 = (state_18948[(7)]);
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18948__$1,(11),to,inst_18913);
} else {
if((state_val_18949 === (3))){
var inst_18943 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18948__$1,inst_18943);
} else {
if((state_val_18949 === (12))){
var state_18948__$1 = state_18948;
var statearr_19018_21939 = state_18948__$1;
(statearr_19018_21939[(2)] = null);

(statearr_19018_21939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (2))){
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18948__$1,(4),from);
} else {
if((state_val_18949 === (11))){
var inst_18933 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
if(cljs.core.truth_(inst_18933)){
var statearr_19019_21940 = state_18948__$1;
(statearr_19019_21940[(1)] = (12));

} else {
var statearr_19020_21941 = state_18948__$1;
(statearr_19020_21941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (9))){
var state_18948__$1 = state_18948;
var statearr_19026_21942 = state_18948__$1;
(statearr_19026_21942[(2)] = null);

(statearr_19026_21942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (5))){
var state_18948__$1 = state_18948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19030_21949 = state_18948__$1;
(statearr_19030_21949[(1)] = (8));

} else {
var statearr_19031_21950 = state_18948__$1;
(statearr_19031_21950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (14))){
var inst_18938 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_19034_21951 = state_18948__$1;
(statearr_19034_21951[(2)] = inst_18938);

(statearr_19034_21951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (10))){
var inst_18930 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_19037_21953 = state_18948__$1;
(statearr_19037_21953[(2)] = inst_18930);

(statearr_19037_21953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (8))){
var inst_18927 = cljs.core.async.close_BANG_(to);
var state_18948__$1 = state_18948;
var statearr_19040_21955 = state_18948__$1;
(statearr_19040_21955[(2)] = inst_18927);

(statearr_19040_21955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_19051 = [null,null,null,null,null,null,null,null];
(statearr_19051[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_19051[(1)] = (1));

return statearr_19051;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_18948){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_18948);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19060){var ex__18415__auto__ = e19060;
var statearr_19062_21956 = state_18948;
(statearr_19062_21956[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_18948[(4)]))){
var statearr_19071_21957 = state_18948;
(statearr_19071_21957[(1)] = cljs.core.first((state_18948[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21958 = state_18948;
state_18948 = G__21958;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_18948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_18948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19087 = f__18624__auto__();
(statearr_19087[(6)] = c__18623__auto___21926);

return statearr_19087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__19108){
var vec__19111 = p__19108;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111,(1),null);
var job = vec__19111;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18623__auto___21970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19127){
var state_val_19128 = (state_19127[(1)]);
if((state_val_19128 === (1))){
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19127__$1,(2),res,v);
} else {
if((state_val_19128 === (2))){
var inst_19123 = (state_19127[(2)]);
var inst_19125 = cljs.core.async.close_BANG_(res);
var state_19127__$1 = (function (){var statearr_19137 = state_19127;
(statearr_19137[(7)] = inst_19123);

return statearr_19137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19127__$1,inst_19125);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0 = (function (){
var statearr_19139 = [null,null,null,null,null,null,null,null];
(statearr_19139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__);

(statearr_19139[(1)] = (1));

return statearr_19139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1 = (function (state_19127){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19127);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19143){var ex__18415__auto__ = e19143;
var statearr_19145_21973 = state_19127;
(statearr_19145_21973[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19127[(4)]))){
var statearr_19146_21974 = state_19127;
(statearr_19146_21974[(1)] = cljs.core.first((state_19127[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21975 = state_19127;
state_19127 = G__21975;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = function(state_19127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1.call(this,state_19127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19152 = f__18624__auto__();
(statearr_19152[(6)] = c__18623__auto___21970);

return statearr_19152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__19154){
var vec__19157 = p__19154;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19157,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19157,(1),null);
var job = vec__19157;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___21979 = n;
var __21980 = (0);
while(true){
if((__21980 < n__5636__auto___21979)){
var G__19162_21981 = type;
var G__19162_21982__$1 = (((G__19162_21981 instanceof cljs.core.Keyword))?G__19162_21981.fqn:null);
switch (G__19162_21982__$1) {
case "compute":
var c__18623__auto___21984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21980,c__18623__auto___21984,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async){
return (function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = ((function (__21980,c__18623__auto___21984,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async){
return (function (state_19177){
var state_val_19178 = (state_19177[(1)]);
if((state_val_19178 === (1))){
var state_19177__$1 = state_19177;
var statearr_19180_21989 = state_19177__$1;
(statearr_19180_21989[(2)] = null);

(statearr_19180_21989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (2))){
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19177__$1,(4),jobs);
} else {
if((state_val_19178 === (3))){
var inst_19174 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19177__$1,inst_19174);
} else {
if((state_val_19178 === (4))){
var inst_19165 = (state_19177[(2)]);
var inst_19167 = process__$1(inst_19165);
var state_19177__$1 = state_19177;
if(cljs.core.truth_(inst_19167)){
var statearr_19182_21998 = state_19177__$1;
(statearr_19182_21998[(1)] = (5));

} else {
var statearr_19183_22004 = state_19177__$1;
(statearr_19183_22004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (5))){
var state_19177__$1 = state_19177;
var statearr_19184_22007 = state_19177__$1;
(statearr_19184_22007[(2)] = null);

(statearr_19184_22007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (6))){
var state_19177__$1 = state_19177;
var statearr_19186_22014 = state_19177__$1;
(statearr_19186_22014[(2)] = null);

(statearr_19186_22014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (7))){
var inst_19172 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19187_22017 = state_19177__$1;
(statearr_19187_22017[(2)] = inst_19172);

(statearr_19187_22017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21980,c__18623__auto___21984,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async))
;
return ((function (__21980,switch__18411__auto__,c__18623__auto___21984,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0 = (function (){
var statearr_19189 = [null,null,null,null,null,null,null];
(statearr_19189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__);

(statearr_19189[(1)] = (1));

return statearr_19189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1 = (function (state_19177){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19177);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19190){var ex__18415__auto__ = e19190;
var statearr_19191_22026 = state_19177;
(statearr_19191_22026[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19177[(4)]))){
var statearr_19192_22030 = state_19177;
(statearr_19192_22030[(1)] = cljs.core.first((state_19177[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22031 = state_19177;
state_19177 = G__22031;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = function(state_19177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1.call(this,state_19177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__;
})()
;})(__21980,switch__18411__auto__,c__18623__auto___21984,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async))
})();
var state__18625__auto__ = (function (){var statearr_19200 = f__18624__auto__();
(statearr_19200[(6)] = c__18623__auto___21984);

return statearr_19200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
});})(__21980,c__18623__auto___21984,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async))
);


break;
case "async":
var c__18623__auto___22035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21980,c__18623__auto___22035,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async){
return (function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = ((function (__21980,c__18623__auto___22035,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async){
return (function (state_19223){
var state_val_19224 = (state_19223[(1)]);
if((state_val_19224 === (1))){
var state_19223__$1 = state_19223;
var statearr_19228_22036 = state_19223__$1;
(statearr_19228_22036[(2)] = null);

(statearr_19228_22036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (2))){
var state_19223__$1 = state_19223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19223__$1,(4),jobs);
} else {
if((state_val_19224 === (3))){
var inst_19221 = (state_19223[(2)]);
var state_19223__$1 = state_19223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19223__$1,inst_19221);
} else {
if((state_val_19224 === (4))){
var inst_19209 = (state_19223[(2)]);
var inst_19212 = async(inst_19209);
var state_19223__$1 = state_19223;
if(cljs.core.truth_(inst_19212)){
var statearr_19232_22037 = state_19223__$1;
(statearr_19232_22037[(1)] = (5));

} else {
var statearr_19233_22041 = state_19223__$1;
(statearr_19233_22041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (5))){
var state_19223__$1 = state_19223;
var statearr_19234_22042 = state_19223__$1;
(statearr_19234_22042[(2)] = null);

(statearr_19234_22042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (6))){
var state_19223__$1 = state_19223;
var statearr_19236_22057 = state_19223__$1;
(statearr_19236_22057[(2)] = null);

(statearr_19236_22057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (7))){
var inst_19217 = (state_19223[(2)]);
var state_19223__$1 = state_19223;
var statearr_19238_22065 = state_19223__$1;
(statearr_19238_22065[(2)] = inst_19217);

(statearr_19238_22065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21980,c__18623__auto___22035,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async))
;
return ((function (__21980,switch__18411__auto__,c__18623__auto___22035,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0 = (function (){
var statearr_19241 = [null,null,null,null,null,null,null];
(statearr_19241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__);

(statearr_19241[(1)] = (1));

return statearr_19241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1 = (function (state_19223){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19223);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19242){var ex__18415__auto__ = e19242;
var statearr_19243_22071 = state_19223;
(statearr_19243_22071[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19223[(4)]))){
var statearr_19244_22076 = state_19223;
(statearr_19244_22076[(1)] = cljs.core.first((state_19223[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22077 = state_19223;
state_19223 = G__22077;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = function(state_19223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1.call(this,state_19223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__;
})()
;})(__21980,switch__18411__auto__,c__18623__auto___22035,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async))
})();
var state__18625__auto__ = (function (){var statearr_19247 = f__18624__auto__();
(statearr_19247[(6)] = c__18623__auto___22035);

return statearr_19247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
});})(__21980,c__18623__auto___22035,G__19162_21981,G__19162_21982__$1,n__5636__auto___21979,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19162_21982__$1)].join('')));

}

var G__22078 = (__21980 + (1));
__21980 = G__22078;
continue;
} else {
}
break;
}

var c__18623__auto___22079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19269){
var state_val_19270 = (state_19269[(1)]);
if((state_val_19270 === (7))){
var inst_19265 = (state_19269[(2)]);
var state_19269__$1 = state_19269;
var statearr_19274_22080 = state_19269__$1;
(statearr_19274_22080[(2)] = inst_19265);

(statearr_19274_22080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19270 === (1))){
var state_19269__$1 = state_19269;
var statearr_19278_22081 = state_19269__$1;
(statearr_19278_22081[(2)] = null);

(statearr_19278_22081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19270 === (4))){
var inst_19250 = (state_19269[(7)]);
var inst_19250__$1 = (state_19269[(2)]);
var inst_19251 = (inst_19250__$1 == null);
var state_19269__$1 = (function (){var statearr_19279 = state_19269;
(statearr_19279[(7)] = inst_19250__$1);

return statearr_19279;
})();
if(cljs.core.truth_(inst_19251)){
var statearr_19280_22084 = state_19269__$1;
(statearr_19280_22084[(1)] = (5));

} else {
var statearr_19284_22085 = state_19269__$1;
(statearr_19284_22085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19270 === (6))){
var inst_19250 = (state_19269[(7)]);
var inst_19255 = (state_19269[(8)]);
var inst_19255__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19257 = [inst_19250,inst_19255__$1];
var inst_19258 = (new cljs.core.PersistentVector(null,2,(5),inst_19256,inst_19257,null));
var state_19269__$1 = (function (){var statearr_19288 = state_19269;
(statearr_19288[(8)] = inst_19255__$1);

return statearr_19288;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19269__$1,(8),jobs,inst_19258);
} else {
if((state_val_19270 === (3))){
var inst_19267 = (state_19269[(2)]);
var state_19269__$1 = state_19269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19269__$1,inst_19267);
} else {
if((state_val_19270 === (2))){
var state_19269__$1 = state_19269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19269__$1,(4),from);
} else {
if((state_val_19270 === (9))){
var inst_19262 = (state_19269[(2)]);
var state_19269__$1 = (function (){var statearr_19290 = state_19269;
(statearr_19290[(9)] = inst_19262);

return statearr_19290;
})();
var statearr_19294_22087 = state_19269__$1;
(statearr_19294_22087[(2)] = null);

(statearr_19294_22087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19270 === (5))){
var inst_19253 = cljs.core.async.close_BANG_(jobs);
var state_19269__$1 = state_19269;
var statearr_19295_22089 = state_19269__$1;
(statearr_19295_22089[(2)] = inst_19253);

(statearr_19295_22089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19270 === (8))){
var inst_19255 = (state_19269[(8)]);
var inst_19260 = (state_19269[(2)]);
var state_19269__$1 = (function (){var statearr_19299 = state_19269;
(statearr_19299[(10)] = inst_19260);

return statearr_19299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19269__$1,(9),results,inst_19255);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0 = (function (){
var statearr_19300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__);

(statearr_19300[(1)] = (1));

return statearr_19300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1 = (function (state_19269){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19269);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19301){var ex__18415__auto__ = e19301;
var statearr_19302_22090 = state_19269;
(statearr_19302_22090[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19269[(4)]))){
var statearr_19307_22097 = state_19269;
(statearr_19307_22097[(1)] = cljs.core.first((state_19269[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22098 = state_19269;
state_19269 = G__22098;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = function(state_19269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1.call(this,state_19269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19308 = f__18624__auto__();
(statearr_19308[(6)] = c__18623__auto___22079);

return statearr_19308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


var c__18623__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19358){
var state_val_19359 = (state_19358[(1)]);
if((state_val_19359 === (7))){
var inst_19354 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19368_22103 = state_19358__$1;
(statearr_19368_22103[(2)] = inst_19354);

(statearr_19368_22103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (20))){
var state_19358__$1 = state_19358;
var statearr_19374_22107 = state_19358__$1;
(statearr_19374_22107[(2)] = null);

(statearr_19374_22107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (1))){
var state_19358__$1 = state_19358;
var statearr_19379_22108 = state_19358__$1;
(statearr_19379_22108[(2)] = null);

(statearr_19379_22108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (4))){
var inst_19317 = (state_19358[(7)]);
var inst_19317__$1 = (state_19358[(2)]);
var inst_19318 = (inst_19317__$1 == null);
var state_19358__$1 = (function (){var statearr_19387 = state_19358;
(statearr_19387[(7)] = inst_19317__$1);

return statearr_19387;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19388_22115 = state_19358__$1;
(statearr_19388_22115[(1)] = (5));

} else {
var statearr_19389_22118 = state_19358__$1;
(statearr_19389_22118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (15))){
var inst_19330 = (state_19358[(8)]);
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19358__$1,(18),to,inst_19330);
} else {
if((state_val_19359 === (21))){
var inst_19349 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19390_22120 = state_19358__$1;
(statearr_19390_22120[(2)] = inst_19349);

(statearr_19390_22120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (13))){
var inst_19351 = (state_19358[(2)]);
var state_19358__$1 = (function (){var statearr_19395 = state_19358;
(statearr_19395[(9)] = inst_19351);

return statearr_19395;
})();
var statearr_19396_22124 = state_19358__$1;
(statearr_19396_22124[(2)] = null);

(statearr_19396_22124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (6))){
var inst_19317 = (state_19358[(7)]);
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19358__$1,(11),inst_19317);
} else {
if((state_val_19359 === (17))){
var inst_19344 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
if(cljs.core.truth_(inst_19344)){
var statearr_19399_22125 = state_19358__$1;
(statearr_19399_22125[(1)] = (19));

} else {
var statearr_19403_22129 = state_19358__$1;
(statearr_19403_22129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (3))){
var inst_19356 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19358__$1,inst_19356);
} else {
if((state_val_19359 === (12))){
var inst_19327 = (state_19358[(10)]);
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19358__$1,(14),inst_19327);
} else {
if((state_val_19359 === (2))){
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19358__$1,(4),results);
} else {
if((state_val_19359 === (19))){
var state_19358__$1 = state_19358;
var statearr_19411_22130 = state_19358__$1;
(statearr_19411_22130[(2)] = null);

(statearr_19411_22130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (11))){
var inst_19327 = (state_19358[(2)]);
var state_19358__$1 = (function (){var statearr_19412 = state_19358;
(statearr_19412[(10)] = inst_19327);

return statearr_19412;
})();
var statearr_19413_22139 = state_19358__$1;
(statearr_19413_22139[(2)] = null);

(statearr_19413_22139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (9))){
var state_19358__$1 = state_19358;
var statearr_19418_22144 = state_19358__$1;
(statearr_19418_22144[(2)] = null);

(statearr_19418_22144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (5))){
var state_19358__$1 = state_19358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19420_22145 = state_19358__$1;
(statearr_19420_22145[(1)] = (8));

} else {
var statearr_19421_22146 = state_19358__$1;
(statearr_19421_22146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (14))){
var inst_19338 = (state_19358[(11)]);
var inst_19330 = (state_19358[(8)]);
var inst_19330__$1 = (state_19358[(2)]);
var inst_19337 = (inst_19330__$1 == null);
var inst_19338__$1 = cljs.core.not(inst_19337);
var state_19358__$1 = (function (){var statearr_19422 = state_19358;
(statearr_19422[(11)] = inst_19338__$1);

(statearr_19422[(8)] = inst_19330__$1);

return statearr_19422;
})();
if(inst_19338__$1){
var statearr_19423_22154 = state_19358__$1;
(statearr_19423_22154[(1)] = (15));

} else {
var statearr_19425_22155 = state_19358__$1;
(statearr_19425_22155[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (16))){
var inst_19338 = (state_19358[(11)]);
var state_19358__$1 = state_19358;
var statearr_19426_22157 = state_19358__$1;
(statearr_19426_22157[(2)] = inst_19338);

(statearr_19426_22157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (10))){
var inst_19324 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19427_22171 = state_19358__$1;
(statearr_19427_22171[(2)] = inst_19324);

(statearr_19427_22171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (18))){
var inst_19341 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19428_22172 = state_19358__$1;
(statearr_19428_22172[(2)] = inst_19341);

(statearr_19428_22172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (8))){
var inst_19321 = cljs.core.async.close_BANG_(to);
var state_19358__$1 = state_19358;
var statearr_19429_22173 = state_19358__$1;
(statearr_19429_22173[(2)] = inst_19321);

(statearr_19429_22173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0 = (function (){
var statearr_19430 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__);

(statearr_19430[(1)] = (1));

return statearr_19430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1 = (function (state_19358){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19358);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19431){var ex__18415__auto__ = e19431;
var statearr_19432_22177 = state_19358;
(statearr_19432_22177[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19358[(4)]))){
var statearr_19434_22178 = state_19358;
(statearr_19434_22178[(1)] = cljs.core.first((state_19358[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22179 = state_19358;
state_19358 = G__22179;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__ = function(state_19358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1.call(this,state_19358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19435 = f__18624__auto__();
(statearr_19435[(6)] = c__18623__auto__);

return statearr_19435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

return c__18623__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19438 = arguments.length;
switch (G__19438) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19442 = arguments.length;
switch (G__19442) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19448 = arguments.length;
switch (G__19448) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18623__auto___22193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19477){
var state_val_19478 = (state_19477[(1)]);
if((state_val_19478 === (7))){
var inst_19473 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19488_22197 = state_19477__$1;
(statearr_19488_22197[(2)] = inst_19473);

(statearr_19488_22197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (1))){
var state_19477__$1 = state_19477;
var statearr_19489_22198 = state_19477__$1;
(statearr_19489_22198[(2)] = null);

(statearr_19489_22198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (4))){
var inst_19453 = (state_19477[(7)]);
var inst_19453__$1 = (state_19477[(2)]);
var inst_19454 = (inst_19453__$1 == null);
var state_19477__$1 = (function (){var statearr_19490 = state_19477;
(statearr_19490[(7)] = inst_19453__$1);

return statearr_19490;
})();
if(cljs.core.truth_(inst_19454)){
var statearr_19499_22199 = state_19477__$1;
(statearr_19499_22199[(1)] = (5));

} else {
var statearr_19501_22200 = state_19477__$1;
(statearr_19501_22200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (13))){
var state_19477__$1 = state_19477;
var statearr_19502_22201 = state_19477__$1;
(statearr_19502_22201[(2)] = null);

(statearr_19502_22201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (6))){
var inst_19453 = (state_19477[(7)]);
var inst_19459 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19453) : p.call(null,inst_19453));
var state_19477__$1 = state_19477;
if(cljs.core.truth_(inst_19459)){
var statearr_19509_22202 = state_19477__$1;
(statearr_19509_22202[(1)] = (9));

} else {
var statearr_19510_22203 = state_19477__$1;
(statearr_19510_22203[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (3))){
var inst_19475 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19477__$1,inst_19475);
} else {
if((state_val_19478 === (12))){
var state_19477__$1 = state_19477;
var statearr_19515_22204 = state_19477__$1;
(statearr_19515_22204[(2)] = null);

(statearr_19515_22204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (2))){
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19477__$1,(4),ch);
} else {
if((state_val_19478 === (11))){
var inst_19453 = (state_19477[(7)]);
var inst_19464 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19477__$1,(8),inst_19464,inst_19453);
} else {
if((state_val_19478 === (9))){
var state_19477__$1 = state_19477;
var statearr_19522_22205 = state_19477__$1;
(statearr_19522_22205[(2)] = tc);

(statearr_19522_22205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (5))){
var inst_19456 = cljs.core.async.close_BANG_(tc);
var inst_19457 = cljs.core.async.close_BANG_(fc);
var state_19477__$1 = (function (){var statearr_19524 = state_19477;
(statearr_19524[(8)] = inst_19456);

return statearr_19524;
})();
var statearr_19525_22206 = state_19477__$1;
(statearr_19525_22206[(2)] = inst_19457);

(statearr_19525_22206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (14))){
var inst_19471 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19531_22207 = state_19477__$1;
(statearr_19531_22207[(2)] = inst_19471);

(statearr_19531_22207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (10))){
var state_19477__$1 = state_19477;
var statearr_19532_22209 = state_19477__$1;
(statearr_19532_22209[(2)] = fc);

(statearr_19532_22209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (8))){
var inst_19466 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
if(cljs.core.truth_(inst_19466)){
var statearr_19535_22212 = state_19477__$1;
(statearr_19535_22212[(1)] = (12));

} else {
var statearr_19536_22215 = state_19477__$1;
(statearr_19536_22215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_19540 = [null,null,null,null,null,null,null,null,null];
(statearr_19540[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_19540[(1)] = (1));

return statearr_19540;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_19477){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19477);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19543){var ex__18415__auto__ = e19543;
var statearr_19544_22218 = state_19477;
(statearr_19544_22218[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19477[(4)]))){
var statearr_19549_22219 = state_19477;
(statearr_19549_22219[(1)] = cljs.core.first((state_19477[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22221 = state_19477;
state_19477 = G__22221;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_19477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_19477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19550 = f__18624__auto__();
(statearr_19550[(6)] = c__18623__auto___22193);

return statearr_19550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18623__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19575){
var state_val_19576 = (state_19575[(1)]);
if((state_val_19576 === (7))){
var inst_19571 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19581_22233 = state_19575__$1;
(statearr_19581_22233[(2)] = inst_19571);

(statearr_19581_22233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (1))){
var inst_19553 = init;
var inst_19554 = inst_19553;
var state_19575__$1 = (function (){var statearr_19582 = state_19575;
(statearr_19582[(7)] = inst_19554);

return statearr_19582;
})();
var statearr_19584_22235 = state_19575__$1;
(statearr_19584_22235[(2)] = null);

(statearr_19584_22235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (4))){
var inst_19557 = (state_19575[(8)]);
var inst_19557__$1 = (state_19575[(2)]);
var inst_19558 = (inst_19557__$1 == null);
var state_19575__$1 = (function (){var statearr_19585 = state_19575;
(statearr_19585[(8)] = inst_19557__$1);

return statearr_19585;
})();
if(cljs.core.truth_(inst_19558)){
var statearr_19586_22236 = state_19575__$1;
(statearr_19586_22236[(1)] = (5));

} else {
var statearr_19591_22237 = state_19575__$1;
(statearr_19591_22237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (6))){
var inst_19561 = (state_19575[(9)]);
var inst_19554 = (state_19575[(7)]);
var inst_19557 = (state_19575[(8)]);
var inst_19561__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19554,inst_19557) : f.call(null,inst_19554,inst_19557));
var inst_19563 = cljs.core.reduced_QMARK_(inst_19561__$1);
var state_19575__$1 = (function (){var statearr_19593 = state_19575;
(statearr_19593[(9)] = inst_19561__$1);

return statearr_19593;
})();
if(inst_19563){
var statearr_19594_22240 = state_19575__$1;
(statearr_19594_22240[(1)] = (8));

} else {
var statearr_19597_22241 = state_19575__$1;
(statearr_19597_22241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (3))){
var inst_19573 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19575__$1,inst_19573);
} else {
if((state_val_19576 === (2))){
var state_19575__$1 = state_19575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19575__$1,(4),ch);
} else {
if((state_val_19576 === (9))){
var inst_19561 = (state_19575[(9)]);
var inst_19554 = inst_19561;
var state_19575__$1 = (function (){var statearr_19599 = state_19575;
(statearr_19599[(7)] = inst_19554);

return statearr_19599;
})();
var statearr_19603_22249 = state_19575__$1;
(statearr_19603_22249[(2)] = null);

(statearr_19603_22249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (5))){
var inst_19554 = (state_19575[(7)]);
var state_19575__$1 = state_19575;
var statearr_19605_22254 = state_19575__$1;
(statearr_19605_22254[(2)] = inst_19554);

(statearr_19605_22254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (10))){
var inst_19569 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19607_22255 = state_19575__$1;
(statearr_19607_22255[(2)] = inst_19569);

(statearr_19607_22255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (8))){
var inst_19561 = (state_19575[(9)]);
var inst_19565 = cljs.core.deref(inst_19561);
var state_19575__$1 = state_19575;
var statearr_19611_22256 = state_19575__$1;
(statearr_19611_22256[(2)] = inst_19565);

(statearr_19611_22256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18412__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18412__auto____0 = (function (){
var statearr_19612 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19612[(0)] = cljs$core$async$reduce_$_state_machine__18412__auto__);

(statearr_19612[(1)] = (1));

return statearr_19612;
});
var cljs$core$async$reduce_$_state_machine__18412__auto____1 = (function (state_19575){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19575);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19617){var ex__18415__auto__ = e19617;
var statearr_19618_22269 = state_19575;
(statearr_19618_22269[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19575[(4)]))){
var statearr_19619_22271 = state_19575;
(statearr_19619_22271[(1)] = cljs.core.first((state_19575[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22276 = state_19575;
state_19575 = G__22276;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18412__auto__ = function(state_19575){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18412__auto____1.call(this,state_19575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18412__auto____0;
cljs$core$async$reduce_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18412__auto____1;
return cljs$core$async$reduce_$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19625 = f__18624__auto__();
(statearr_19625[(6)] = c__18623__auto__);

return statearr_19625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

return c__18623__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18623__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19634){
var state_val_19635 = (state_19634[(1)]);
if((state_val_19635 === (1))){
var inst_19629 = cljs.core.async.reduce(f__$1,init,ch);
var state_19634__$1 = state_19634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19634__$1,(2),inst_19629);
} else {
if((state_val_19635 === (2))){
var inst_19631 = (state_19634[(2)]);
var inst_19632 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19631) : f__$1.call(null,inst_19631));
var state_19634__$1 = state_19634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19634__$1,inst_19632);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18412__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18412__auto____0 = (function (){
var statearr_19643 = [null,null,null,null,null,null,null];
(statearr_19643[(0)] = cljs$core$async$transduce_$_state_machine__18412__auto__);

(statearr_19643[(1)] = (1));

return statearr_19643;
});
var cljs$core$async$transduce_$_state_machine__18412__auto____1 = (function (state_19634){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19634);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19644){var ex__18415__auto__ = e19644;
var statearr_19646_22281 = state_19634;
(statearr_19646_22281[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19634[(4)]))){
var statearr_19647_22282 = state_19634;
(statearr_19647_22282[(1)] = cljs.core.first((state_19634[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22283 = state_19634;
state_19634 = G__22283;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18412__auto__ = function(state_19634){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18412__auto____1.call(this,state_19634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18412__auto____0;
cljs$core$async$transduce_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18412__auto____1;
return cljs$core$async$transduce_$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19648 = f__18624__auto__();
(statearr_19648[(6)] = c__18623__auto__);

return statearr_19648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

return c__18623__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__19654 = arguments.length;
switch (G__19654) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18623__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19680){
var state_val_19681 = (state_19680[(1)]);
if((state_val_19681 === (7))){
var inst_19662 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19682_22299 = state_19680__$1;
(statearr_19682_22299[(2)] = inst_19662);

(statearr_19682_22299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (1))){
var inst_19656 = cljs.core.seq(coll);
var inst_19657 = inst_19656;
var state_19680__$1 = (function (){var statearr_19683 = state_19680;
(statearr_19683[(7)] = inst_19657);

return statearr_19683;
})();
var statearr_19684_22300 = state_19680__$1;
(statearr_19684_22300[(2)] = null);

(statearr_19684_22300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (4))){
var inst_19657 = (state_19680[(7)]);
var inst_19660 = cljs.core.first(inst_19657);
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19680__$1,(7),ch,inst_19660);
} else {
if((state_val_19681 === (13))){
var inst_19674 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19686_22303 = state_19680__$1;
(statearr_19686_22303[(2)] = inst_19674);

(statearr_19686_22303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (6))){
var inst_19665 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
if(cljs.core.truth_(inst_19665)){
var statearr_19687_22304 = state_19680__$1;
(statearr_19687_22304[(1)] = (8));

} else {
var statearr_19688_22305 = state_19680__$1;
(statearr_19688_22305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (3))){
var inst_19678 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19680__$1,inst_19678);
} else {
if((state_val_19681 === (12))){
var state_19680__$1 = state_19680;
var statearr_19690_22307 = state_19680__$1;
(statearr_19690_22307[(2)] = null);

(statearr_19690_22307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (2))){
var inst_19657 = (state_19680[(7)]);
var state_19680__$1 = state_19680;
if(cljs.core.truth_(inst_19657)){
var statearr_19691_22311 = state_19680__$1;
(statearr_19691_22311[(1)] = (4));

} else {
var statearr_19692_22312 = state_19680__$1;
(statearr_19692_22312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (11))){
var inst_19671 = cljs.core.async.close_BANG_(ch);
var state_19680__$1 = state_19680;
var statearr_19693_22313 = state_19680__$1;
(statearr_19693_22313[(2)] = inst_19671);

(statearr_19693_22313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (9))){
var state_19680__$1 = state_19680;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19694_22314 = state_19680__$1;
(statearr_19694_22314[(1)] = (11));

} else {
var statearr_19696_22315 = state_19680__$1;
(statearr_19696_22315[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (5))){
var inst_19657 = (state_19680[(7)]);
var state_19680__$1 = state_19680;
var statearr_19697_22316 = state_19680__$1;
(statearr_19697_22316[(2)] = inst_19657);

(statearr_19697_22316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (10))){
var inst_19676 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19698_22317 = state_19680__$1;
(statearr_19698_22317[(2)] = inst_19676);

(statearr_19698_22317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (8))){
var inst_19657 = (state_19680[(7)]);
var inst_19667 = cljs.core.next(inst_19657);
var inst_19657__$1 = inst_19667;
var state_19680__$1 = (function (){var statearr_19699 = state_19680;
(statearr_19699[(7)] = inst_19657__$1);

return statearr_19699;
})();
var statearr_19700_22319 = state_19680__$1;
(statearr_19700_22319[(2)] = null);

(statearr_19700_22319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_19701 = [null,null,null,null,null,null,null,null];
(statearr_19701[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_19701[(1)] = (1));

return statearr_19701;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_19680){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19680);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e19702){var ex__18415__auto__ = e19702;
var statearr_19703_22321 = state_19680;
(statearr_19703_22321[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19680[(4)]))){
var statearr_19708_22322 = state_19680;
(statearr_19708_22322[(1)] = cljs.core.first((state_19680[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22329 = state_19680;
state_19680 = G__22329;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_19680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_19680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_19712 = f__18624__auto__();
(statearr_19712[(6)] = c__18623__auto__);

return statearr_19712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

return c__18623__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19715 = arguments.length;
switch (G__19715) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_22332 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_22332(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22338 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_22338(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22346 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_22346(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22357 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_22357(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19728 = (function (ch,cs,meta19729){
this.ch = ch;
this.cs = cs;
this.meta19729 = meta19729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19730,meta19729__$1){
var self__ = this;
var _19730__$1 = this;
return (new cljs.core.async.t_cljs$core$async19728(self__.ch,self__.cs,meta19729__$1));
}));

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19730){
var self__ = this;
var _19730__$1 = this;
return self__.meta19729;
}));

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19728.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19729","meta19729",963462890,null)], null);
}));

(cljs.core.async.t_cljs$core$async19728.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19728");

(cljs.core.async.t_cljs$core$async19728.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19728");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19728.
 */
cljs.core.async.__GT_t_cljs$core$async19728 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19728(ch__$1,cs__$1,meta19729){
return (new cljs.core.async.t_cljs$core$async19728(ch__$1,cs__$1,meta19729));
});

}

return (new cljs.core.async.t_cljs$core$async19728(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18623__auto___22403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_19888){
var state_val_19889 = (state_19888[(1)]);
if((state_val_19889 === (7))){
var inst_19884 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19890_22404 = state_19888__$1;
(statearr_19890_22404[(2)] = inst_19884);

(statearr_19890_22404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (20))){
var inst_19779 = (state_19888[(7)]);
var inst_19791 = cljs.core.first(inst_19779);
var inst_19792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19791,(0),null);
var inst_19793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19791,(1),null);
var state_19888__$1 = (function (){var statearr_19891 = state_19888;
(statearr_19891[(8)] = inst_19792);

return statearr_19891;
})();
if(cljs.core.truth_(inst_19793)){
var statearr_19892_22410 = state_19888__$1;
(statearr_19892_22410[(1)] = (22));

} else {
var statearr_19893_22411 = state_19888__$1;
(statearr_19893_22411[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (27))){
var inst_19822 = (state_19888[(9)]);
var inst_19829 = (state_19888[(10)]);
var inst_19824 = (state_19888[(11)]);
var inst_19746 = (state_19888[(12)]);
var inst_19829__$1 = cljs.core._nth(inst_19822,inst_19824);
var inst_19830 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19829__$1,inst_19746,done);
var state_19888__$1 = (function (){var statearr_19898 = state_19888;
(statearr_19898[(10)] = inst_19829__$1);

return statearr_19898;
})();
if(cljs.core.truth_(inst_19830)){
var statearr_19900_22414 = state_19888__$1;
(statearr_19900_22414[(1)] = (30));

} else {
var statearr_19901_22415 = state_19888__$1;
(statearr_19901_22415[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (1))){
var state_19888__$1 = state_19888;
var statearr_19902_22416 = state_19888__$1;
(statearr_19902_22416[(2)] = null);

(statearr_19902_22416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (24))){
var inst_19779 = (state_19888[(7)]);
var inst_19798 = (state_19888[(2)]);
var inst_19799 = cljs.core.next(inst_19779);
var inst_19755 = inst_19799;
var inst_19756 = null;
var inst_19757 = (0);
var inst_19758 = (0);
var state_19888__$1 = (function (){var statearr_19903 = state_19888;
(statearr_19903[(13)] = inst_19755);

(statearr_19903[(14)] = inst_19757);

(statearr_19903[(15)] = inst_19758);

(statearr_19903[(16)] = inst_19756);

(statearr_19903[(17)] = inst_19798);

return statearr_19903;
})();
var statearr_19904_22418 = state_19888__$1;
(statearr_19904_22418[(2)] = null);

(statearr_19904_22418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (39))){
var state_19888__$1 = state_19888;
var statearr_19908_22422 = state_19888__$1;
(statearr_19908_22422[(2)] = null);

(statearr_19908_22422[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (4))){
var inst_19746 = (state_19888[(12)]);
var inst_19746__$1 = (state_19888[(2)]);
var inst_19747 = (inst_19746__$1 == null);
var state_19888__$1 = (function (){var statearr_19909 = state_19888;
(statearr_19909[(12)] = inst_19746__$1);

return statearr_19909;
})();
if(cljs.core.truth_(inst_19747)){
var statearr_19911_22424 = state_19888__$1;
(statearr_19911_22424[(1)] = (5));

} else {
var statearr_19913_22425 = state_19888__$1;
(statearr_19913_22425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (15))){
var inst_19755 = (state_19888[(13)]);
var inst_19757 = (state_19888[(14)]);
var inst_19758 = (state_19888[(15)]);
var inst_19756 = (state_19888[(16)]);
var inst_19774 = (state_19888[(2)]);
var inst_19776 = (inst_19758 + (1));
var tmp19905 = inst_19755;
var tmp19906 = inst_19757;
var tmp19907 = inst_19756;
var inst_19755__$1 = tmp19905;
var inst_19756__$1 = tmp19907;
var inst_19757__$1 = tmp19906;
var inst_19758__$1 = inst_19776;
var state_19888__$1 = (function (){var statearr_19917 = state_19888;
(statearr_19917[(13)] = inst_19755__$1);

(statearr_19917[(14)] = inst_19757__$1);

(statearr_19917[(15)] = inst_19758__$1);

(statearr_19917[(16)] = inst_19756__$1);

(statearr_19917[(18)] = inst_19774);

return statearr_19917;
})();
var statearr_19918_22434 = state_19888__$1;
(statearr_19918_22434[(2)] = null);

(statearr_19918_22434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (21))){
var inst_19802 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19922_22435 = state_19888__$1;
(statearr_19922_22435[(2)] = inst_19802);

(statearr_19922_22435[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (31))){
var inst_19829 = (state_19888[(10)]);
var inst_19833 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19829);
var state_19888__$1 = state_19888;
var statearr_19923_22438 = state_19888__$1;
(statearr_19923_22438[(2)] = inst_19833);

(statearr_19923_22438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (32))){
var inst_19822 = (state_19888[(9)]);
var inst_19821 = (state_19888[(19)]);
var inst_19824 = (state_19888[(11)]);
var inst_19823 = (state_19888[(20)]);
var inst_19836 = (state_19888[(2)]);
var inst_19838 = (inst_19824 + (1));
var tmp19919 = inst_19822;
var tmp19920 = inst_19821;
var tmp19921 = inst_19823;
var inst_19821__$1 = tmp19920;
var inst_19822__$1 = tmp19919;
var inst_19823__$1 = tmp19921;
var inst_19824__$1 = inst_19838;
var state_19888__$1 = (function (){var statearr_19925 = state_19888;
(statearr_19925[(9)] = inst_19822__$1);

(statearr_19925[(19)] = inst_19821__$1);

(statearr_19925[(21)] = inst_19836);

(statearr_19925[(11)] = inst_19824__$1);

(statearr_19925[(20)] = inst_19823__$1);

return statearr_19925;
})();
var statearr_19926_22451 = state_19888__$1;
(statearr_19926_22451[(2)] = null);

(statearr_19926_22451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (40))){
var inst_19855 = (state_19888[(22)]);
var inst_19860 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19855);
var state_19888__$1 = state_19888;
var statearr_19927_22452 = state_19888__$1;
(statearr_19927_22452[(2)] = inst_19860);

(statearr_19927_22452[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (33))){
var inst_19844 = (state_19888[(23)]);
var inst_19846 = cljs.core.chunked_seq_QMARK_(inst_19844);
var state_19888__$1 = state_19888;
if(inst_19846){
var statearr_19928_22453 = state_19888__$1;
(statearr_19928_22453[(1)] = (36));

} else {
var statearr_19929_22454 = state_19888__$1;
(statearr_19929_22454[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (13))){
var inst_19768 = (state_19888[(24)]);
var inst_19771 = cljs.core.async.close_BANG_(inst_19768);
var state_19888__$1 = state_19888;
var statearr_19930_22458 = state_19888__$1;
(statearr_19930_22458[(2)] = inst_19771);

(statearr_19930_22458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (22))){
var inst_19792 = (state_19888[(8)]);
var inst_19795 = cljs.core.async.close_BANG_(inst_19792);
var state_19888__$1 = state_19888;
var statearr_19933_22461 = state_19888__$1;
(statearr_19933_22461[(2)] = inst_19795);

(statearr_19933_22461[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (36))){
var inst_19844 = (state_19888[(23)]);
var inst_19848 = cljs.core.chunk_first(inst_19844);
var inst_19849 = cljs.core.chunk_rest(inst_19844);
var inst_19850 = cljs.core.count(inst_19848);
var inst_19821 = inst_19849;
var inst_19822 = inst_19848;
var inst_19823 = inst_19850;
var inst_19824 = (0);
var state_19888__$1 = (function (){var statearr_19934 = state_19888;
(statearr_19934[(9)] = inst_19822);

(statearr_19934[(19)] = inst_19821);

(statearr_19934[(11)] = inst_19824);

(statearr_19934[(20)] = inst_19823);

return statearr_19934;
})();
var statearr_19935_22468 = state_19888__$1;
(statearr_19935_22468[(2)] = null);

(statearr_19935_22468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (41))){
var inst_19844 = (state_19888[(23)]);
var inst_19862 = (state_19888[(2)]);
var inst_19863 = cljs.core.next(inst_19844);
var inst_19821 = inst_19863;
var inst_19822 = null;
var inst_19823 = (0);
var inst_19824 = (0);
var state_19888__$1 = (function (){var statearr_19936 = state_19888;
(statearr_19936[(9)] = inst_19822);

(statearr_19936[(19)] = inst_19821);

(statearr_19936[(11)] = inst_19824);

(statearr_19936[(20)] = inst_19823);

(statearr_19936[(25)] = inst_19862);

return statearr_19936;
})();
var statearr_19941_22474 = state_19888__$1;
(statearr_19941_22474[(2)] = null);

(statearr_19941_22474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (43))){
var state_19888__$1 = state_19888;
var statearr_19942_22475 = state_19888__$1;
(statearr_19942_22475[(2)] = null);

(statearr_19942_22475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (29))){
var inst_19872 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19945_22478 = state_19888__$1;
(statearr_19945_22478[(2)] = inst_19872);

(statearr_19945_22478[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (44))){
var inst_19881 = (state_19888[(2)]);
var state_19888__$1 = (function (){var statearr_19946 = state_19888;
(statearr_19946[(26)] = inst_19881);

return statearr_19946;
})();
var statearr_19947_22481 = state_19888__$1;
(statearr_19947_22481[(2)] = null);

(statearr_19947_22481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (6))){
var inst_19813 = (state_19888[(27)]);
var inst_19812 = cljs.core.deref(cs);
var inst_19813__$1 = cljs.core.keys(inst_19812);
var inst_19814 = cljs.core.count(inst_19813__$1);
var inst_19815 = cljs.core.reset_BANG_(dctr,inst_19814);
var inst_19820 = cljs.core.seq(inst_19813__$1);
var inst_19821 = inst_19820;
var inst_19822 = null;
var inst_19823 = (0);
var inst_19824 = (0);
var state_19888__$1 = (function (){var statearr_19949 = state_19888;
(statearr_19949[(9)] = inst_19822);

(statearr_19949[(28)] = inst_19815);

(statearr_19949[(19)] = inst_19821);

(statearr_19949[(11)] = inst_19824);

(statearr_19949[(20)] = inst_19823);

(statearr_19949[(27)] = inst_19813__$1);

return statearr_19949;
})();
var statearr_19951_22485 = state_19888__$1;
(statearr_19951_22485[(2)] = null);

(statearr_19951_22485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (28))){
var inst_19844 = (state_19888[(23)]);
var inst_19821 = (state_19888[(19)]);
var inst_19844__$1 = cljs.core.seq(inst_19821);
var state_19888__$1 = (function (){var statearr_19960 = state_19888;
(statearr_19960[(23)] = inst_19844__$1);

return statearr_19960;
})();
if(inst_19844__$1){
var statearr_19961_22487 = state_19888__$1;
(statearr_19961_22487[(1)] = (33));

} else {
var statearr_19962_22488 = state_19888__$1;
(statearr_19962_22488[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (25))){
var inst_19824 = (state_19888[(11)]);
var inst_19823 = (state_19888[(20)]);
var inst_19826 = (inst_19824 < inst_19823);
var inst_19827 = inst_19826;
var state_19888__$1 = state_19888;
if(cljs.core.truth_(inst_19827)){
var statearr_19964_22489 = state_19888__$1;
(statearr_19964_22489[(1)] = (27));

} else {
var statearr_19965_22490 = state_19888__$1;
(statearr_19965_22490[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (34))){
var state_19888__$1 = state_19888;
var statearr_19966_22493 = state_19888__$1;
(statearr_19966_22493[(2)] = null);

(statearr_19966_22493[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (17))){
var state_19888__$1 = state_19888;
var statearr_19967_22495 = state_19888__$1;
(statearr_19967_22495[(2)] = null);

(statearr_19967_22495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (3))){
var inst_19886 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19888__$1,inst_19886);
} else {
if((state_val_19889 === (12))){
var inst_19807 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19968_22496 = state_19888__$1;
(statearr_19968_22496[(2)] = inst_19807);

(statearr_19968_22496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (2))){
var state_19888__$1 = state_19888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19888__$1,(4),ch);
} else {
if((state_val_19889 === (23))){
var state_19888__$1 = state_19888;
var statearr_19970_22497 = state_19888__$1;
(statearr_19970_22497[(2)] = null);

(statearr_19970_22497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (35))){
var inst_19870 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19971_22498 = state_19888__$1;
(statearr_19971_22498[(2)] = inst_19870);

(statearr_19971_22498[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (19))){
var inst_19779 = (state_19888[(7)]);
var inst_19783 = cljs.core.chunk_first(inst_19779);
var inst_19784 = cljs.core.chunk_rest(inst_19779);
var inst_19785 = cljs.core.count(inst_19783);
var inst_19755 = inst_19784;
var inst_19756 = inst_19783;
var inst_19757 = inst_19785;
var inst_19758 = (0);
var state_19888__$1 = (function (){var statearr_19972 = state_19888;
(statearr_19972[(13)] = inst_19755);

(statearr_19972[(14)] = inst_19757);

(statearr_19972[(15)] = inst_19758);

(statearr_19972[(16)] = inst_19756);

return statearr_19972;
})();
var statearr_19973_22500 = state_19888__$1;
(statearr_19973_22500[(2)] = null);

(statearr_19973_22500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (11))){
var inst_19755 = (state_19888[(13)]);
var inst_19779 = (state_19888[(7)]);
var inst_19779__$1 = cljs.core.seq(inst_19755);
var state_19888__$1 = (function (){var statearr_19975 = state_19888;
(statearr_19975[(7)] = inst_19779__$1);

return statearr_19975;
})();
if(inst_19779__$1){
var statearr_19977_22503 = state_19888__$1;
(statearr_19977_22503[(1)] = (16));

} else {
var statearr_19978_22504 = state_19888__$1;
(statearr_19978_22504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (9))){
var inst_19810 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19979_22505 = state_19888__$1;
(statearr_19979_22505[(2)] = inst_19810);

(statearr_19979_22505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (5))){
var inst_19753 = cljs.core.deref(cs);
var inst_19754 = cljs.core.seq(inst_19753);
var inst_19755 = inst_19754;
var inst_19756 = null;
var inst_19757 = (0);
var inst_19758 = (0);
var state_19888__$1 = (function (){var statearr_19980 = state_19888;
(statearr_19980[(13)] = inst_19755);

(statearr_19980[(14)] = inst_19757);

(statearr_19980[(15)] = inst_19758);

(statearr_19980[(16)] = inst_19756);

return statearr_19980;
})();
var statearr_19981_22511 = state_19888__$1;
(statearr_19981_22511[(2)] = null);

(statearr_19981_22511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (14))){
var state_19888__$1 = state_19888;
var statearr_19983_22513 = state_19888__$1;
(statearr_19983_22513[(2)] = null);

(statearr_19983_22513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (45))){
var inst_19878 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19986_22514 = state_19888__$1;
(statearr_19986_22514[(2)] = inst_19878);

(statearr_19986_22514[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (26))){
var inst_19813 = (state_19888[(27)]);
var inst_19874 = (state_19888[(2)]);
var inst_19875 = cljs.core.seq(inst_19813);
var state_19888__$1 = (function (){var statearr_19990 = state_19888;
(statearr_19990[(29)] = inst_19874);

return statearr_19990;
})();
if(inst_19875){
var statearr_19991_22521 = state_19888__$1;
(statearr_19991_22521[(1)] = (42));

} else {
var statearr_19992_22523 = state_19888__$1;
(statearr_19992_22523[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (16))){
var inst_19779 = (state_19888[(7)]);
var inst_19781 = cljs.core.chunked_seq_QMARK_(inst_19779);
var state_19888__$1 = state_19888;
if(inst_19781){
var statearr_19996_22524 = state_19888__$1;
(statearr_19996_22524[(1)] = (19));

} else {
var statearr_19997_22531 = state_19888__$1;
(statearr_19997_22531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (38))){
var inst_19867 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_19998_22533 = state_19888__$1;
(statearr_19998_22533[(2)] = inst_19867);

(statearr_19998_22533[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (30))){
var state_19888__$1 = state_19888;
var statearr_20001_22537 = state_19888__$1;
(statearr_20001_22537[(2)] = null);

(statearr_20001_22537[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (10))){
var inst_19758 = (state_19888[(15)]);
var inst_19756 = (state_19888[(16)]);
var inst_19767 = cljs.core._nth(inst_19756,inst_19758);
var inst_19768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19767,(0),null);
var inst_19769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19767,(1),null);
var state_19888__$1 = (function (){var statearr_20005 = state_19888;
(statearr_20005[(24)] = inst_19768);

return statearr_20005;
})();
if(cljs.core.truth_(inst_19769)){
var statearr_20007_22543 = state_19888__$1;
(statearr_20007_22543[(1)] = (13));

} else {
var statearr_20008_22544 = state_19888__$1;
(statearr_20008_22544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (18))){
var inst_19805 = (state_19888[(2)]);
var state_19888__$1 = state_19888;
var statearr_20012_22545 = state_19888__$1;
(statearr_20012_22545[(2)] = inst_19805);

(statearr_20012_22545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (42))){
var state_19888__$1 = state_19888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19888__$1,(45),dchan);
} else {
if((state_val_19889 === (37))){
var inst_19844 = (state_19888[(23)]);
var inst_19855 = (state_19888[(22)]);
var inst_19746 = (state_19888[(12)]);
var inst_19855__$1 = cljs.core.first(inst_19844);
var inst_19856 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19855__$1,inst_19746,done);
var state_19888__$1 = (function (){var statearr_20016 = state_19888;
(statearr_20016[(22)] = inst_19855__$1);

return statearr_20016;
})();
if(cljs.core.truth_(inst_19856)){
var statearr_20021_22553 = state_19888__$1;
(statearr_20021_22553[(1)] = (39));

} else {
var statearr_20023_22554 = state_19888__$1;
(statearr_20023_22554[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19889 === (8))){
var inst_19757 = (state_19888[(14)]);
var inst_19758 = (state_19888[(15)]);
var inst_19760 = (inst_19758 < inst_19757);
var inst_19761 = inst_19760;
var state_19888__$1 = state_19888;
if(cljs.core.truth_(inst_19761)){
var statearr_20027_22561 = state_19888__$1;
(statearr_20027_22561[(1)] = (10));

} else {
var statearr_20028_22562 = state_19888__$1;
(statearr_20028_22562[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__18412__auto__ = null;
var cljs$core$async$mult_$_state_machine__18412__auto____0 = (function (){
var statearr_20039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20039[(0)] = cljs$core$async$mult_$_state_machine__18412__auto__);

(statearr_20039[(1)] = (1));

return statearr_20039;
});
var cljs$core$async$mult_$_state_machine__18412__auto____1 = (function (state_19888){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_19888);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e20043){var ex__18415__auto__ = e20043;
var statearr_20044_22578 = state_19888;
(statearr_20044_22578[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_19888[(4)]))){
var statearr_20045_22582 = state_19888;
(statearr_20045_22582[(1)] = cljs.core.first((state_19888[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22583 = state_19888;
state_19888 = G__22583;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18412__auto__ = function(state_19888){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18412__auto____1.call(this,state_19888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18412__auto____0;
cljs$core$async$mult_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18412__auto____1;
return cljs$core$async$mult_$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_20047 = f__18624__auto__();
(statearr_20047[(6)] = c__18623__auto___22403);

return statearr_20047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__20059 = arguments.length;
switch (G__20059) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_22595 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_22595(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22596 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_22596(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22642 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22642(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22652 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_22652(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22655 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22655(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22661 = arguments.length;
var i__5770__auto___22663 = (0);
while(true){
if((i__5770__auto___22663 < len__5769__auto___22661)){
args__5775__auto__.push((arguments[i__5770__auto___22663]));

var G__22664 = (i__5770__auto___22663 + (1));
i__5770__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20121){
var map__20124 = p__20121;
var map__20124__$1 = cljs.core.__destructure_map(map__20124);
var opts = map__20124__$1;
var statearr_20129_22666 = state;
(statearr_20129_22666[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_20131_22668 = state;
(statearr_20131_22668[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_20134_22669 = state;
(statearr_20134_22669[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20113){
var G__20114 = cljs.core.first(seq20113);
var seq20113__$1 = cljs.core.next(seq20113);
var G__20115 = cljs.core.first(seq20113__$1);
var seq20113__$2 = cljs.core.next(seq20113__$1);
var G__20116 = cljs.core.first(seq20113__$2);
var seq20113__$3 = cljs.core.next(seq20113__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20114,G__20115,G__20116,seq20113__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20151 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20152){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20152 = meta20152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20153,meta20152__$1){
var self__ = this;
var _20153__$1 = this;
return (new cljs.core.async.t_cljs$core$async20151(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20152__$1));
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20153){
var self__ = this;
var _20153__$1 = this;
return self__.meta20152;
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20152","meta20152",-2007033120,null)], null);
}));

(cljs.core.async.t_cljs$core$async20151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20151");

(cljs.core.async.t_cljs$core$async20151.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20151.
 */
cljs.core.async.__GT_t_cljs$core$async20151 = (function cljs$core$async$mix_$___GT_t_cljs$core$async20151(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20152){
return (new cljs.core.async.t_cljs$core$async20151(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20152));
});

}

return (new cljs.core.async.t_cljs$core$async20151(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18623__auto___22696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_20249){
var state_val_20250 = (state_20249[(1)]);
if((state_val_20250 === (7))){
var inst_20205 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
if(cljs.core.truth_(inst_20205)){
var statearr_20251_22701 = state_20249__$1;
(statearr_20251_22701[(1)] = (8));

} else {
var statearr_20252_22702 = state_20249__$1;
(statearr_20252_22702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (20))){
var inst_20198 = (state_20249[(7)]);
var state_20249__$1 = state_20249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20249__$1,(23),out,inst_20198);
} else {
if((state_val_20250 === (1))){
var inst_20181 = calc_state();
var inst_20182 = cljs.core.__destructure_map(inst_20181);
var inst_20183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20182,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20182,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20182,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20186 = inst_20181;
var state_20249__$1 = (function (){var statearr_20256 = state_20249;
(statearr_20256[(8)] = inst_20186);

(statearr_20256[(9)] = inst_20183);

(statearr_20256[(10)] = inst_20184);

(statearr_20256[(11)] = inst_20185);

return statearr_20256;
})();
var statearr_20258_22704 = state_20249__$1;
(statearr_20258_22704[(2)] = null);

(statearr_20258_22704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (24))){
var inst_20189 = (state_20249[(12)]);
var inst_20186 = inst_20189;
var state_20249__$1 = (function (){var statearr_20262 = state_20249;
(statearr_20262[(8)] = inst_20186);

return statearr_20262;
})();
var statearr_20263_22706 = state_20249__$1;
(statearr_20263_22706[(2)] = null);

(statearr_20263_22706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (4))){
var inst_20198 = (state_20249[(7)]);
var inst_20200 = (state_20249[(13)]);
var inst_20197 = (state_20249[(2)]);
var inst_20198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20197,(0),null);
var inst_20199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20197,(1),null);
var inst_20200__$1 = (inst_20198__$1 == null);
var state_20249__$1 = (function (){var statearr_20264 = state_20249;
(statearr_20264[(7)] = inst_20198__$1);

(statearr_20264[(14)] = inst_20199);

(statearr_20264[(13)] = inst_20200__$1);

return statearr_20264;
})();
if(cljs.core.truth_(inst_20200__$1)){
var statearr_20265_22710 = state_20249__$1;
(statearr_20265_22710[(1)] = (5));

} else {
var statearr_20266_22711 = state_20249__$1;
(statearr_20266_22711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (15))){
var inst_20220 = (state_20249[(15)]);
var inst_20190 = (state_20249[(16)]);
var inst_20220__$1 = cljs.core.empty_QMARK_(inst_20190);
var state_20249__$1 = (function (){var statearr_20269 = state_20249;
(statearr_20269[(15)] = inst_20220__$1);

return statearr_20269;
})();
if(inst_20220__$1){
var statearr_20270_22712 = state_20249__$1;
(statearr_20270_22712[(1)] = (17));

} else {
var statearr_20271_22713 = state_20249__$1;
(statearr_20271_22713[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (21))){
var inst_20189 = (state_20249[(12)]);
var inst_20186 = inst_20189;
var state_20249__$1 = (function (){var statearr_20273 = state_20249;
(statearr_20273[(8)] = inst_20186);

return statearr_20273;
})();
var statearr_20274_22717 = state_20249__$1;
(statearr_20274_22717[(2)] = null);

(statearr_20274_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (13))){
var inst_20213 = (state_20249[(2)]);
var inst_20214 = calc_state();
var inst_20186 = inst_20214;
var state_20249__$1 = (function (){var statearr_20275 = state_20249;
(statearr_20275[(8)] = inst_20186);

(statearr_20275[(17)] = inst_20213);

return statearr_20275;
})();
var statearr_20276_22718 = state_20249__$1;
(statearr_20276_22718[(2)] = null);

(statearr_20276_22718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (22))){
var inst_20243 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20277_22719 = state_20249__$1;
(statearr_20277_22719[(2)] = inst_20243);

(statearr_20277_22719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (6))){
var inst_20199 = (state_20249[(14)]);
var inst_20203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20199,change);
var state_20249__$1 = state_20249;
var statearr_20278_22720 = state_20249__$1;
(statearr_20278_22720[(2)] = inst_20203);

(statearr_20278_22720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (25))){
var state_20249__$1 = state_20249;
var statearr_20282_22721 = state_20249__$1;
(statearr_20282_22721[(2)] = null);

(statearr_20282_22721[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (17))){
var inst_20199 = (state_20249[(14)]);
var inst_20191 = (state_20249[(18)]);
var inst_20224 = (inst_20191.cljs$core$IFn$_invoke$arity$1 ? inst_20191.cljs$core$IFn$_invoke$arity$1(inst_20199) : inst_20191.call(null,inst_20199));
var inst_20225 = cljs.core.not(inst_20224);
var state_20249__$1 = state_20249;
var statearr_20283_22722 = state_20249__$1;
(statearr_20283_22722[(2)] = inst_20225);

(statearr_20283_22722[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (3))){
var inst_20247 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20249__$1,inst_20247);
} else {
if((state_val_20250 === (12))){
var state_20249__$1 = state_20249;
var statearr_20285_22724 = state_20249__$1;
(statearr_20285_22724[(2)] = null);

(statearr_20285_22724[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (2))){
var inst_20186 = (state_20249[(8)]);
var inst_20189 = (state_20249[(12)]);
var inst_20189__$1 = cljs.core.__destructure_map(inst_20186);
var inst_20190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20249__$1 = (function (){var statearr_20290 = state_20249;
(statearr_20290[(18)] = inst_20191);

(statearr_20290[(12)] = inst_20189__$1);

(statearr_20290[(16)] = inst_20190);

return statearr_20290;
})();
return cljs.core.async.ioc_alts_BANG_(state_20249__$1,(4),inst_20192);
} else {
if((state_val_20250 === (23))){
var inst_20234 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
if(cljs.core.truth_(inst_20234)){
var statearr_20291_22728 = state_20249__$1;
(statearr_20291_22728[(1)] = (24));

} else {
var statearr_20298_22729 = state_20249__$1;
(statearr_20298_22729[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (19))){
var inst_20228 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20301_22730 = state_20249__$1;
(statearr_20301_22730[(2)] = inst_20228);

(statearr_20301_22730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (11))){
var inst_20199 = (state_20249[(14)]);
var inst_20210 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20199);
var state_20249__$1 = state_20249;
var statearr_20303_22731 = state_20249__$1;
(statearr_20303_22731[(2)] = inst_20210);

(statearr_20303_22731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (9))){
var inst_20199 = (state_20249[(14)]);
var inst_20190 = (state_20249[(16)]);
var inst_20217 = (state_20249[(19)]);
var inst_20217__$1 = (inst_20190.cljs$core$IFn$_invoke$arity$1 ? inst_20190.cljs$core$IFn$_invoke$arity$1(inst_20199) : inst_20190.call(null,inst_20199));
var state_20249__$1 = (function (){var statearr_20305 = state_20249;
(statearr_20305[(19)] = inst_20217__$1);

return statearr_20305;
})();
if(cljs.core.truth_(inst_20217__$1)){
var statearr_20306_22732 = state_20249__$1;
(statearr_20306_22732[(1)] = (14));

} else {
var statearr_20307_22733 = state_20249__$1;
(statearr_20307_22733[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (5))){
var inst_20200 = (state_20249[(13)]);
var state_20249__$1 = state_20249;
var statearr_20308_22734 = state_20249__$1;
(statearr_20308_22734[(2)] = inst_20200);

(statearr_20308_22734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (14))){
var inst_20217 = (state_20249[(19)]);
var state_20249__$1 = state_20249;
var statearr_20310_22735 = state_20249__$1;
(statearr_20310_22735[(2)] = inst_20217);

(statearr_20310_22735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (26))){
var inst_20239 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20315_22736 = state_20249__$1;
(statearr_20315_22736[(2)] = inst_20239);

(statearr_20315_22736[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (16))){
var inst_20230 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
if(cljs.core.truth_(inst_20230)){
var statearr_20319_22738 = state_20249__$1;
(statearr_20319_22738[(1)] = (20));

} else {
var statearr_20320_22739 = state_20249__$1;
(statearr_20320_22739[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (10))){
var inst_20245 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20322_22740 = state_20249__$1;
(statearr_20322_22740[(2)] = inst_20245);

(statearr_20322_22740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (18))){
var inst_20220 = (state_20249[(15)]);
var state_20249__$1 = state_20249;
var statearr_20324_22741 = state_20249__$1;
(statearr_20324_22741[(2)] = inst_20220);

(statearr_20324_22741[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (8))){
var inst_20198 = (state_20249[(7)]);
var inst_20208 = (inst_20198 == null);
var state_20249__$1 = state_20249;
if(cljs.core.truth_(inst_20208)){
var statearr_20330_22743 = state_20249__$1;
(statearr_20330_22743[(1)] = (11));

} else {
var statearr_20333_22744 = state_20249__$1;
(statearr_20333_22744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__18412__auto__ = null;
var cljs$core$async$mix_$_state_machine__18412__auto____0 = (function (){
var statearr_20341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20341[(0)] = cljs$core$async$mix_$_state_machine__18412__auto__);

(statearr_20341[(1)] = (1));

return statearr_20341;
});
var cljs$core$async$mix_$_state_machine__18412__auto____1 = (function (state_20249){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_20249);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e20343){var ex__18415__auto__ = e20343;
var statearr_20344_22745 = state_20249;
(statearr_20344_22745[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_20249[(4)]))){
var statearr_20346_22747 = state_20249;
(statearr_20346_22747[(1)] = cljs.core.first((state_20249[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22752 = state_20249;
state_20249 = G__22752;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18412__auto__ = function(state_20249){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18412__auto____1.call(this,state_20249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18412__auto____0;
cljs$core$async$mix_$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18412__auto____1;
return cljs$core$async$mix_$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_20351 = f__18624__auto__();
(statearr_20351[(6)] = c__18623__auto___22696);

return statearr_20351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_22766 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_22766(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22768 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_22768(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22776 = (function() {
var G__22777 = null;
var G__22777__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__22777__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__22777 = function(p,v){
switch(arguments.length){
case 1:
return G__22777__1.call(this,p);
case 2:
return G__22777__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22777.cljs$core$IFn$_invoke$arity$1 = G__22777__1;
G__22777.cljs$core$IFn$_invoke$arity$2 = G__22777__2;
return G__22777;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20379 = arguments.length;
switch (G__20379) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22776(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22776(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__20399 = arguments.length;
switch (G__20399) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__20391_SHARP_){
if(cljs.core.truth_((p1__20391_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20391_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20391_SHARP_.call(null,topic)))){
return p1__20391_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20391_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20408 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20409){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20409 = meta20409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20410,meta20409__$1){
var self__ = this;
var _20410__$1 = this;
return (new cljs.core.async.t_cljs$core$async20408(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20409__$1));
}));

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20410){
var self__ = this;
var _20410__$1 = this;
return self__.meta20409;
}));

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20409","meta20409",139238109,null)], null);
}));

(cljs.core.async.t_cljs$core$async20408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20408");

(cljs.core.async.t_cljs$core$async20408.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20408.
 */
cljs.core.async.__GT_t_cljs$core$async20408 = (function cljs$core$async$__GT_t_cljs$core$async20408(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20409){
return (new cljs.core.async.t_cljs$core$async20408(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20409));
});

}

return (new cljs.core.async.t_cljs$core$async20408(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18623__auto___22799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_20520){
var state_val_20521 = (state_20520[(1)]);
if((state_val_20521 === (7))){
var inst_20514 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20527_22801 = state_20520__$1;
(statearr_20527_22801[(2)] = inst_20514);

(statearr_20527_22801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (20))){
var state_20520__$1 = state_20520;
var statearr_20536_22802 = state_20520__$1;
(statearr_20536_22802[(2)] = null);

(statearr_20536_22802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (1))){
var state_20520__$1 = state_20520;
var statearr_20539_22803 = state_20520__$1;
(statearr_20539_22803[(2)] = null);

(statearr_20539_22803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (24))){
var inst_20495 = (state_20520[(7)]);
var inst_20505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20495);
var state_20520__$1 = state_20520;
var statearr_20541_22809 = state_20520__$1;
(statearr_20541_22809[(2)] = inst_20505);

(statearr_20541_22809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (4))){
var inst_20441 = (state_20520[(8)]);
var inst_20441__$1 = (state_20520[(2)]);
var inst_20442 = (inst_20441__$1 == null);
var state_20520__$1 = (function (){var statearr_20543 = state_20520;
(statearr_20543[(8)] = inst_20441__$1);

return statearr_20543;
})();
if(cljs.core.truth_(inst_20442)){
var statearr_20545_22810 = state_20520__$1;
(statearr_20545_22810[(1)] = (5));

} else {
var statearr_20547_22811 = state_20520__$1;
(statearr_20547_22811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (15))){
var inst_20489 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20551_22812 = state_20520__$1;
(statearr_20551_22812[(2)] = inst_20489);

(statearr_20551_22812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (21))){
var inst_20510 = (state_20520[(2)]);
var state_20520__$1 = (function (){var statearr_20555 = state_20520;
(statearr_20555[(9)] = inst_20510);

return statearr_20555;
})();
var statearr_20556_22817 = state_20520__$1;
(statearr_20556_22817[(2)] = null);

(statearr_20556_22817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (13))){
var inst_20470 = (state_20520[(10)]);
var inst_20472 = cljs.core.chunked_seq_QMARK_(inst_20470);
var state_20520__$1 = state_20520;
if(inst_20472){
var statearr_20561_22818 = state_20520__$1;
(statearr_20561_22818[(1)] = (16));

} else {
var statearr_20563_22819 = state_20520__$1;
(statearr_20563_22819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (22))){
var inst_20502 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
if(cljs.core.truth_(inst_20502)){
var statearr_20565_22820 = state_20520__$1;
(statearr_20565_22820[(1)] = (23));

} else {
var statearr_20566_22821 = state_20520__$1;
(statearr_20566_22821[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (6))){
var inst_20497 = (state_20520[(11)]);
var inst_20495 = (state_20520[(7)]);
var inst_20441 = (state_20520[(8)]);
var inst_20495__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20441) : topic_fn.call(null,inst_20441));
var inst_20496 = cljs.core.deref(mults);
var inst_20497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20496,inst_20495__$1);
var state_20520__$1 = (function (){var statearr_20570 = state_20520;
(statearr_20570[(11)] = inst_20497__$1);

(statearr_20570[(7)] = inst_20495__$1);

return statearr_20570;
})();
if(cljs.core.truth_(inst_20497__$1)){
var statearr_20572_22827 = state_20520__$1;
(statearr_20572_22827[(1)] = (19));

} else {
var statearr_20574_22831 = state_20520__$1;
(statearr_20574_22831[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (25))){
var inst_20507 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20577_22832 = state_20520__$1;
(statearr_20577_22832[(2)] = inst_20507);

(statearr_20577_22832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (17))){
var inst_20470 = (state_20520[(10)]);
var inst_20479 = cljs.core.first(inst_20470);
var inst_20480 = cljs.core.async.muxch_STAR_(inst_20479);
var inst_20481 = cljs.core.async.close_BANG_(inst_20480);
var inst_20482 = cljs.core.next(inst_20470);
var inst_20453 = inst_20482;
var inst_20454 = null;
var inst_20455 = (0);
var inst_20456 = (0);
var state_20520__$1 = (function (){var statearr_20579 = state_20520;
(statearr_20579[(12)] = inst_20453);

(statearr_20579[(13)] = inst_20481);

(statearr_20579[(14)] = inst_20456);

(statearr_20579[(15)] = inst_20455);

(statearr_20579[(16)] = inst_20454);

return statearr_20579;
})();
var statearr_20582_22833 = state_20520__$1;
(statearr_20582_22833[(2)] = null);

(statearr_20582_22833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (3))){
var inst_20516 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20520__$1,inst_20516);
} else {
if((state_val_20521 === (12))){
var inst_20491 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20586_22834 = state_20520__$1;
(statearr_20586_22834[(2)] = inst_20491);

(statearr_20586_22834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (2))){
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20520__$1,(4),ch);
} else {
if((state_val_20521 === (23))){
var state_20520__$1 = state_20520;
var statearr_20591_22835 = state_20520__$1;
(statearr_20591_22835[(2)] = null);

(statearr_20591_22835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (19))){
var inst_20497 = (state_20520[(11)]);
var inst_20441 = (state_20520[(8)]);
var inst_20500 = cljs.core.async.muxch_STAR_(inst_20497);
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20520__$1,(22),inst_20500,inst_20441);
} else {
if((state_val_20521 === (11))){
var inst_20453 = (state_20520[(12)]);
var inst_20470 = (state_20520[(10)]);
var inst_20470__$1 = cljs.core.seq(inst_20453);
var state_20520__$1 = (function (){var statearr_20595 = state_20520;
(statearr_20595[(10)] = inst_20470__$1);

return statearr_20595;
})();
if(inst_20470__$1){
var statearr_20597_22840 = state_20520__$1;
(statearr_20597_22840[(1)] = (13));

} else {
var statearr_20600_22841 = state_20520__$1;
(statearr_20600_22841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (9))){
var inst_20493 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20602_22843 = state_20520__$1;
(statearr_20602_22843[(2)] = inst_20493);

(statearr_20602_22843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (5))){
var inst_20450 = cljs.core.deref(mults);
var inst_20451 = cljs.core.vals(inst_20450);
var inst_20452 = cljs.core.seq(inst_20451);
var inst_20453 = inst_20452;
var inst_20454 = null;
var inst_20455 = (0);
var inst_20456 = (0);
var state_20520__$1 = (function (){var statearr_20607 = state_20520;
(statearr_20607[(12)] = inst_20453);

(statearr_20607[(14)] = inst_20456);

(statearr_20607[(15)] = inst_20455);

(statearr_20607[(16)] = inst_20454);

return statearr_20607;
})();
var statearr_20609_22848 = state_20520__$1;
(statearr_20609_22848[(2)] = null);

(statearr_20609_22848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (14))){
var state_20520__$1 = state_20520;
var statearr_20613_22850 = state_20520__$1;
(statearr_20613_22850[(2)] = null);

(statearr_20613_22850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (16))){
var inst_20470 = (state_20520[(10)]);
var inst_20474 = cljs.core.chunk_first(inst_20470);
var inst_20475 = cljs.core.chunk_rest(inst_20470);
var inst_20476 = cljs.core.count(inst_20474);
var inst_20453 = inst_20475;
var inst_20454 = inst_20474;
var inst_20455 = inst_20476;
var inst_20456 = (0);
var state_20520__$1 = (function (){var statearr_20617 = state_20520;
(statearr_20617[(12)] = inst_20453);

(statearr_20617[(14)] = inst_20456);

(statearr_20617[(15)] = inst_20455);

(statearr_20617[(16)] = inst_20454);

return statearr_20617;
})();
var statearr_20618_22859 = state_20520__$1;
(statearr_20618_22859[(2)] = null);

(statearr_20618_22859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (10))){
var inst_20453 = (state_20520[(12)]);
var inst_20456 = (state_20520[(14)]);
var inst_20455 = (state_20520[(15)]);
var inst_20454 = (state_20520[(16)]);
var inst_20463 = cljs.core._nth(inst_20454,inst_20456);
var inst_20464 = cljs.core.async.muxch_STAR_(inst_20463);
var inst_20465 = cljs.core.async.close_BANG_(inst_20464);
var inst_20467 = (inst_20456 + (1));
var tmp20610 = inst_20453;
var tmp20611 = inst_20455;
var tmp20612 = inst_20454;
var inst_20453__$1 = tmp20610;
var inst_20454__$1 = tmp20612;
var inst_20455__$1 = tmp20611;
var inst_20456__$1 = inst_20467;
var state_20520__$1 = (function (){var statearr_20622 = state_20520;
(statearr_20622[(12)] = inst_20453__$1);

(statearr_20622[(17)] = inst_20465);

(statearr_20622[(14)] = inst_20456__$1);

(statearr_20622[(15)] = inst_20455__$1);

(statearr_20622[(16)] = inst_20454__$1);

return statearr_20622;
})();
var statearr_20624_22860 = state_20520__$1;
(statearr_20624_22860[(2)] = null);

(statearr_20624_22860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (18))){
var inst_20486 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20629_22864 = state_20520__$1;
(statearr_20629_22864[(2)] = inst_20486);

(statearr_20629_22864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (8))){
var inst_20456 = (state_20520[(14)]);
var inst_20455 = (state_20520[(15)]);
var inst_20458 = (inst_20456 < inst_20455);
var inst_20460 = inst_20458;
var state_20520__$1 = state_20520;
if(cljs.core.truth_(inst_20460)){
var statearr_20634_22869 = state_20520__$1;
(statearr_20634_22869[(1)] = (10));

} else {
var statearr_20635_22870 = state_20520__$1;
(statearr_20635_22870[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_20637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20637[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_20637[(1)] = (1));

return statearr_20637;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_20520){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_20520);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e20645){var ex__18415__auto__ = e20645;
var statearr_20646_22873 = state_20520;
(statearr_20646_22873[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_20520[(4)]))){
var statearr_20648_22876 = state_20520;
(statearr_20648_22876[(1)] = cljs.core.first((state_20520[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22882 = state_20520;
state_20520 = G__22882;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_20520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_20520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_20658 = f__18624__auto__();
(statearr_20658[(6)] = c__18623__auto___22799);

return statearr_20658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20664 = arguments.length;
switch (G__20664) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20685 = arguments.length;
switch (G__20685) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20714 = arguments.length;
switch (G__20714) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18623__auto___22906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_20787){
var state_val_20788 = (state_20787[(1)]);
if((state_val_20788 === (7))){
var state_20787__$1 = state_20787;
var statearr_20797_22914 = state_20787__$1;
(statearr_20797_22914[(2)] = null);

(statearr_20797_22914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (1))){
var state_20787__$1 = state_20787;
var statearr_20799_22915 = state_20787__$1;
(statearr_20799_22915[(2)] = null);

(statearr_20799_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (4))){
var inst_20734 = (state_20787[(7)]);
var inst_20735 = (state_20787[(8)]);
var inst_20737 = (inst_20735 < inst_20734);
var state_20787__$1 = state_20787;
if(cljs.core.truth_(inst_20737)){
var statearr_20808_22918 = state_20787__$1;
(statearr_20808_22918[(1)] = (6));

} else {
var statearr_20809_22919 = state_20787__$1;
(statearr_20809_22919[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (15))){
var inst_20771 = (state_20787[(9)]);
var inst_20776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20771);
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20787__$1,(17),out,inst_20776);
} else {
if((state_val_20788 === (13))){
var inst_20771 = (state_20787[(9)]);
var inst_20771__$1 = (state_20787[(2)]);
var inst_20772 = cljs.core.some(cljs.core.nil_QMARK_,inst_20771__$1);
var state_20787__$1 = (function (){var statearr_20814 = state_20787;
(statearr_20814[(9)] = inst_20771__$1);

return statearr_20814;
})();
if(cljs.core.truth_(inst_20772)){
var statearr_20818_22921 = state_20787__$1;
(statearr_20818_22921[(1)] = (14));

} else {
var statearr_20819_22922 = state_20787__$1;
(statearr_20819_22922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (6))){
var state_20787__$1 = state_20787;
var statearr_20821_22926 = state_20787__$1;
(statearr_20821_22926[(2)] = null);

(statearr_20821_22926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (17))){
var inst_20778 = (state_20787[(2)]);
var state_20787__$1 = (function (){var statearr_20836 = state_20787;
(statearr_20836[(10)] = inst_20778);

return statearr_20836;
})();
var statearr_20842_22928 = state_20787__$1;
(statearr_20842_22928[(2)] = null);

(statearr_20842_22928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (3))){
var inst_20783 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20787__$1,inst_20783);
} else {
if((state_val_20788 === (12))){
var _ = (function (){var statearr_20845 = state_20787;
(statearr_20845[(4)] = cljs.core.rest((state_20787[(4)])));

return statearr_20845;
})();
var state_20787__$1 = state_20787;
var ex20831 = (state_20787__$1[(2)]);
var statearr_20855_22933 = state_20787__$1;
(statearr_20855_22933[(5)] = ex20831);


if((ex20831 instanceof Object)){
var statearr_20857_22934 = state_20787__$1;
(statearr_20857_22934[(1)] = (11));

(statearr_20857_22934[(5)] = null);

} else {
throw ex20831;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (2))){
var inst_20733 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20734 = cnt;
var inst_20735 = (0);
var state_20787__$1 = (function (){var statearr_20870 = state_20787;
(statearr_20870[(7)] = inst_20734);

(statearr_20870[(8)] = inst_20735);

(statearr_20870[(11)] = inst_20733);

return statearr_20870;
})();
var statearr_20872_22935 = state_20787__$1;
(statearr_20872_22935[(2)] = null);

(statearr_20872_22935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (11))){
var inst_20740 = (state_20787[(2)]);
var inst_20742 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20787__$1 = (function (){var statearr_20875 = state_20787;
(statearr_20875[(12)] = inst_20740);

return statearr_20875;
})();
var statearr_20876_22942 = state_20787__$1;
(statearr_20876_22942[(2)] = inst_20742);

(statearr_20876_22942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (9))){
var inst_20735 = (state_20787[(8)]);
var _ = (function (){var statearr_20881 = state_20787;
(statearr_20881[(4)] = cljs.core.cons((12),(state_20787[(4)])));

return statearr_20881;
})();
var inst_20753 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20735) : chs__$1.call(null,inst_20735));
var inst_20754 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20735) : done.call(null,inst_20735));
var inst_20755 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20753,inst_20754);
var ___$1 = (function (){var statearr_20883 = state_20787;
(statearr_20883[(4)] = cljs.core.rest((state_20787[(4)])));

return statearr_20883;
})();
var state_20787__$1 = state_20787;
var statearr_20884_22943 = state_20787__$1;
(statearr_20884_22943[(2)] = inst_20755);

(statearr_20884_22943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (5))){
var inst_20766 = (state_20787[(2)]);
var state_20787__$1 = (function (){var statearr_20886 = state_20787;
(statearr_20886[(13)] = inst_20766);

return statearr_20886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20787__$1,(13),dchan);
} else {
if((state_val_20788 === (14))){
var inst_20774 = cljs.core.async.close_BANG_(out);
var state_20787__$1 = state_20787;
var statearr_20890_22950 = state_20787__$1;
(statearr_20890_22950[(2)] = inst_20774);

(statearr_20890_22950[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (16))){
var inst_20781 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20893_22951 = state_20787__$1;
(statearr_20893_22951[(2)] = inst_20781);

(statearr_20893_22951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (10))){
var inst_20735 = (state_20787[(8)]);
var inst_20758 = (state_20787[(2)]);
var inst_20760 = (inst_20735 + (1));
var inst_20735__$1 = inst_20760;
var state_20787__$1 = (function (){var statearr_20894 = state_20787;
(statearr_20894[(8)] = inst_20735__$1);

(statearr_20894[(14)] = inst_20758);

return statearr_20894;
})();
var statearr_20895_22952 = state_20787__$1;
(statearr_20895_22952[(2)] = null);

(statearr_20895_22952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (8))){
var inst_20764 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20902_22954 = state_20787__$1;
(statearr_20902_22954[(2)] = inst_20764);

(statearr_20902_22954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_20907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20907[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_20907[(1)] = (1));

return statearr_20907;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_20787){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_20787);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e20908){var ex__18415__auto__ = e20908;
var statearr_20909_22956 = state_20787;
(statearr_20909_22956[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_20787[(4)]))){
var statearr_20910_22958 = state_20787;
(statearr_20910_22958[(1)] = cljs.core.first((state_20787[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22959 = state_20787;
state_20787 = G__22959;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_20787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_20787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_20914 = f__18624__auto__();
(statearr_20914[(6)] = c__18623__auto___22906);

return statearr_20914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20927 = arguments.length;
switch (G__20927) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18623__auto___22973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_20990){
var state_val_20991 = (state_20990[(1)]);
if((state_val_20991 === (7))){
var inst_20966 = (state_20990[(7)]);
var inst_20967 = (state_20990[(8)]);
var inst_20966__$1 = (state_20990[(2)]);
var inst_20967__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20966__$1,(0),null);
var inst_20968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20966__$1,(1),null);
var inst_20969 = (inst_20967__$1 == null);
var state_20990__$1 = (function (){var statearr_20992 = state_20990;
(statearr_20992[(7)] = inst_20966__$1);

(statearr_20992[(9)] = inst_20968);

(statearr_20992[(8)] = inst_20967__$1);

return statearr_20992;
})();
if(cljs.core.truth_(inst_20969)){
var statearr_20993_22974 = state_20990__$1;
(statearr_20993_22974[(1)] = (8));

} else {
var statearr_20994_22975 = state_20990__$1;
(statearr_20994_22975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (1))){
var inst_20929 = cljs.core.vec(chs);
var inst_20930 = inst_20929;
var state_20990__$1 = (function (){var statearr_20995 = state_20990;
(statearr_20995[(10)] = inst_20930);

return statearr_20995;
})();
var statearr_20998_22979 = state_20990__$1;
(statearr_20998_22979[(2)] = null);

(statearr_20998_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (4))){
var inst_20930 = (state_20990[(10)]);
var state_20990__$1 = state_20990;
return cljs.core.async.ioc_alts_BANG_(state_20990__$1,(7),inst_20930);
} else {
if((state_val_20991 === (6))){
var inst_20985 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_21009_22981 = state_20990__$1;
(statearr_21009_22981[(2)] = inst_20985);

(statearr_21009_22981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (3))){
var inst_20987 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20990__$1,inst_20987);
} else {
if((state_val_20991 === (2))){
var inst_20930 = (state_20990[(10)]);
var inst_20956 = cljs.core.count(inst_20930);
var inst_20957 = (inst_20956 > (0));
var state_20990__$1 = state_20990;
if(cljs.core.truth_(inst_20957)){
var statearr_21014_22992 = state_20990__$1;
(statearr_21014_22992[(1)] = (4));

} else {
var statearr_21015_22993 = state_20990__$1;
(statearr_21015_22993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (11))){
var inst_20930 = (state_20990[(10)]);
var inst_20978 = (state_20990[(2)]);
var tmp21010 = inst_20930;
var inst_20930__$1 = tmp21010;
var state_20990__$1 = (function (){var statearr_21016 = state_20990;
(statearr_21016[(10)] = inst_20930__$1);

(statearr_21016[(11)] = inst_20978);

return statearr_21016;
})();
var statearr_21017_22994 = state_20990__$1;
(statearr_21017_22994[(2)] = null);

(statearr_21017_22994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (9))){
var inst_20967 = (state_20990[(8)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20990__$1,(11),out,inst_20967);
} else {
if((state_val_20991 === (5))){
var inst_20983 = cljs.core.async.close_BANG_(out);
var state_20990__$1 = state_20990;
var statearr_21026_22998 = state_20990__$1;
(statearr_21026_22998[(2)] = inst_20983);

(statearr_21026_22998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (10))){
var inst_20981 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_21028_23002 = state_20990__$1;
(statearr_21028_23002[(2)] = inst_20981);

(statearr_21028_23002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (8))){
var inst_20930 = (state_20990[(10)]);
var inst_20966 = (state_20990[(7)]);
var inst_20968 = (state_20990[(9)]);
var inst_20967 = (state_20990[(8)]);
var inst_20972 = (function (){var cs = inst_20930;
var vec__20959 = inst_20966;
var v = inst_20967;
var c = inst_20968;
return (function (p1__20917_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20917_SHARP_);
});
})();
var inst_20974 = cljs.core.filterv(inst_20972,inst_20930);
var inst_20930__$1 = inst_20974;
var state_20990__$1 = (function (){var statearr_21035 = state_20990;
(statearr_21035[(10)] = inst_20930__$1);

return statearr_21035;
})();
var statearr_21036_23009 = state_20990__$1;
(statearr_21036_23009[(2)] = null);

(statearr_21036_23009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_21037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21037[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_21037[(1)] = (1));

return statearr_21037;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_20990){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_20990);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21039){var ex__18415__auto__ = e21039;
var statearr_21040_23018 = state_20990;
(statearr_21040_23018[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_20990[(4)]))){
var statearr_21042_23019 = state_20990;
(statearr_21042_23019[(1)] = cljs.core.first((state_20990[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23020 = state_20990;
state_20990 = G__23020;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_20990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_20990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21046 = f__18624__auto__();
(statearr_21046[(6)] = c__18623__auto___22973);

return statearr_21046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__21048 = arguments.length;
switch (G__21048) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18623__auto___23026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_21074){
var state_val_21076 = (state_21074[(1)]);
if((state_val_21076 === (7))){
var inst_21055 = (state_21074[(7)]);
var inst_21055__$1 = (state_21074[(2)]);
var inst_21056 = (inst_21055__$1 == null);
var inst_21057 = cljs.core.not(inst_21056);
var state_21074__$1 = (function (){var statearr_21082 = state_21074;
(statearr_21082[(7)] = inst_21055__$1);

return statearr_21082;
})();
if(inst_21057){
var statearr_21084_23037 = state_21074__$1;
(statearr_21084_23037[(1)] = (8));

} else {
var statearr_21085_23038 = state_21074__$1;
(statearr_21085_23038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (1))){
var inst_21050 = (0);
var state_21074__$1 = (function (){var statearr_21086 = state_21074;
(statearr_21086[(8)] = inst_21050);

return statearr_21086;
})();
var statearr_21089_23049 = state_21074__$1;
(statearr_21089_23049[(2)] = null);

(statearr_21089_23049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (4))){
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21074__$1,(7),ch);
} else {
if((state_val_21076 === (6))){
var inst_21069 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21091_23059 = state_21074__$1;
(statearr_21091_23059[(2)] = inst_21069);

(statearr_21091_23059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (3))){
var inst_21071 = (state_21074[(2)]);
var inst_21072 = cljs.core.async.close_BANG_(out);
var state_21074__$1 = (function (){var statearr_21092 = state_21074;
(statearr_21092[(9)] = inst_21071);

return statearr_21092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21074__$1,inst_21072);
} else {
if((state_val_21076 === (2))){
var inst_21050 = (state_21074[(8)]);
var inst_21052 = (inst_21050 < n);
var state_21074__$1 = state_21074;
if(cljs.core.truth_(inst_21052)){
var statearr_21093_23068 = state_21074__$1;
(statearr_21093_23068[(1)] = (4));

} else {
var statearr_21094_23069 = state_21074__$1;
(statearr_21094_23069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (11))){
var inst_21050 = (state_21074[(8)]);
var inst_21061 = (state_21074[(2)]);
var inst_21062 = (inst_21050 + (1));
var inst_21050__$1 = inst_21062;
var state_21074__$1 = (function (){var statearr_21101 = state_21074;
(statearr_21101[(10)] = inst_21061);

(statearr_21101[(8)] = inst_21050__$1);

return statearr_21101;
})();
var statearr_21102_23070 = state_21074__$1;
(statearr_21102_23070[(2)] = null);

(statearr_21102_23070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (9))){
var state_21074__$1 = state_21074;
var statearr_21104_23071 = state_21074__$1;
(statearr_21104_23071[(2)] = null);

(statearr_21104_23071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (5))){
var state_21074__$1 = state_21074;
var statearr_21105_23072 = state_21074__$1;
(statearr_21105_23072[(2)] = null);

(statearr_21105_23072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (10))){
var inst_21066 = (state_21074[(2)]);
var state_21074__$1 = state_21074;
var statearr_21106_23073 = state_21074__$1;
(statearr_21106_23073[(2)] = inst_21066);

(statearr_21106_23073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (8))){
var inst_21055 = (state_21074[(7)]);
var state_21074__$1 = state_21074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21074__$1,(11),out,inst_21055);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_21108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21108[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_21108[(1)] = (1));

return statearr_21108;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_21074){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_21074);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21109){var ex__18415__auto__ = e21109;
var statearr_21110_23074 = state_21074;
(statearr_21110_23074[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_21074[(4)]))){
var statearr_21111_23075 = state_21074;
(statearr_21111_23075[(1)] = cljs.core.first((state_21074[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23076 = state_21074;
state_21074 = G__23076;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_21074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_21074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21119 = f__18624__auto__();
(statearr_21119[(6)] = c__18623__auto___23026);

return statearr_21119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21124 = (function (f,ch,meta21125){
this.f = f;
this.ch = ch;
this.meta21125 = meta21125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21126,meta21125__$1){
var self__ = this;
var _21126__$1 = this;
return (new cljs.core.async.t_cljs$core$async21124(self__.f,self__.ch,meta21125__$1));
}));

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21126){
var self__ = this;
var _21126__$1 = this;
return self__.meta21125;
}));

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21129 = (function (f,ch,meta21125,_,fn1,meta21130){
this.f = f;
this.ch = ch;
this.meta21125 = meta21125;
this._ = _;
this.fn1 = fn1;
this.meta21130 = meta21130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21131,meta21130__$1){
var self__ = this;
var _21131__$1 = this;
return (new cljs.core.async.t_cljs$core$async21129(self__.f,self__.ch,self__.meta21125,self__._,self__.fn1,meta21130__$1));
}));

(cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21131){
var self__ = this;
var _21131__$1 = this;
return self__.meta21130;
}));

(cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__21123_SHARP_){
var G__21134 = (((p1__21123_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21123_SHARP_) : self__.f.call(null,p1__21123_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21134) : f1.call(null,G__21134));
});
}));

(cljs.core.async.t_cljs$core$async21129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21125","meta21125",-1093625186,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21124","cljs.core.async/t_cljs$core$async21124",1532510237,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21130","meta21130",2096892009,null)], null);
}));

(cljs.core.async.t_cljs$core$async21129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21129");

(cljs.core.async.t_cljs$core$async21129.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21129.
 */
cljs.core.async.__GT_t_cljs$core$async21129 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21129(f__$1,ch__$1,meta21125__$1,___$2,fn1__$1,meta21130){
return (new cljs.core.async.t_cljs$core$async21129(f__$1,ch__$1,meta21125__$1,___$2,fn1__$1,meta21130));
});

}

return (new cljs.core.async.t_cljs$core$async21129(self__.f,self__.ch,self__.meta21125,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21143 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21143) : self__.f.call(null,G__21143));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async21124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21125","meta21125",-1093625186,null)], null);
}));

(cljs.core.async.t_cljs$core$async21124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21124");

(cljs.core.async.t_cljs$core$async21124.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21124.
 */
cljs.core.async.__GT_t_cljs$core$async21124 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21124(f__$1,ch__$1,meta21125){
return (new cljs.core.async.t_cljs$core$async21124(f__$1,ch__$1,meta21125));
});

}

return (new cljs.core.async.t_cljs$core$async21124(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21146 = (function (f,ch,meta21147){
this.f = f;
this.ch = ch;
this.meta21147 = meta21147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21148,meta21147__$1){
var self__ = this;
var _21148__$1 = this;
return (new cljs.core.async.t_cljs$core$async21146(self__.f,self__.ch,meta21147__$1));
}));

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21148){
var self__ = this;
var _21148__$1 = this;
return self__.meta21147;
}));

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async21146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21147","meta21147",17141824,null)], null);
}));

(cljs.core.async.t_cljs$core$async21146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21146");

(cljs.core.async.t_cljs$core$async21146.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21146.
 */
cljs.core.async.__GT_t_cljs$core$async21146 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21146(f__$1,ch__$1,meta21147){
return (new cljs.core.async.t_cljs$core$async21146(f__$1,ch__$1,meta21147));
});

}

return (new cljs.core.async.t_cljs$core$async21146(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21165 = (function (p,ch,meta21166){
this.p = p;
this.ch = ch;
this.meta21166 = meta21166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21167,meta21166__$1){
var self__ = this;
var _21167__$1 = this;
return (new cljs.core.async.t_cljs$core$async21165(self__.p,self__.ch,meta21166__$1));
}));

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21167){
var self__ = this;
var _21167__$1 = this;
return self__.meta21166;
}));

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async21165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21166","meta21166",-1780039876,null)], null);
}));

(cljs.core.async.t_cljs$core$async21165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21165");

(cljs.core.async.t_cljs$core$async21165.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21165.
 */
cljs.core.async.__GT_t_cljs$core$async21165 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21165(p__$1,ch__$1,meta21166){
return (new cljs.core.async.t_cljs$core$async21165(p__$1,ch__$1,meta21166));
});

}

return (new cljs.core.async.t_cljs$core$async21165(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__21187 = arguments.length;
switch (G__21187) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18623__auto___23138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_21225){
var state_val_21228 = (state_21225[(1)]);
if((state_val_21228 === (7))){
var inst_21215 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21237_23139 = state_21225__$1;
(statearr_21237_23139[(2)] = inst_21215);

(statearr_21237_23139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (1))){
var state_21225__$1 = state_21225;
var statearr_21238_23146 = state_21225__$1;
(statearr_21238_23146[(2)] = null);

(statearr_21238_23146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (4))){
var inst_21194 = (state_21225[(7)]);
var inst_21194__$1 = (state_21225[(2)]);
var inst_21195 = (inst_21194__$1 == null);
var state_21225__$1 = (function (){var statearr_21239 = state_21225;
(statearr_21239[(7)] = inst_21194__$1);

return statearr_21239;
})();
if(cljs.core.truth_(inst_21195)){
var statearr_21242_23147 = state_21225__$1;
(statearr_21242_23147[(1)] = (5));

} else {
var statearr_21244_23148 = state_21225__$1;
(statearr_21244_23148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (6))){
var inst_21194 = (state_21225[(7)]);
var inst_21202 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21194) : p.call(null,inst_21194));
var state_21225__$1 = state_21225;
if(cljs.core.truth_(inst_21202)){
var statearr_21245_23149 = state_21225__$1;
(statearr_21245_23149[(1)] = (8));

} else {
var statearr_21246_23150 = state_21225__$1;
(statearr_21246_23150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (3))){
var inst_21217 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21225__$1,inst_21217);
} else {
if((state_val_21228 === (2))){
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21225__$1,(4),ch);
} else {
if((state_val_21228 === (11))){
var inst_21209 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21258_23152 = state_21225__$1;
(statearr_21258_23152[(2)] = inst_21209);

(statearr_21258_23152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (9))){
var state_21225__$1 = state_21225;
var statearr_21259_23153 = state_21225__$1;
(statearr_21259_23153[(2)] = null);

(statearr_21259_23153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (5))){
var inst_21197 = cljs.core.async.close_BANG_(out);
var state_21225__$1 = state_21225;
var statearr_21260_23156 = state_21225__$1;
(statearr_21260_23156[(2)] = inst_21197);

(statearr_21260_23156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (10))){
var inst_21212 = (state_21225[(2)]);
var state_21225__$1 = (function (){var statearr_21261 = state_21225;
(statearr_21261[(8)] = inst_21212);

return statearr_21261;
})();
var statearr_21262_23157 = state_21225__$1;
(statearr_21262_23157[(2)] = null);

(statearr_21262_23157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (8))){
var inst_21194 = (state_21225[(7)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21225__$1,(11),out,inst_21194);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_21266 = [null,null,null,null,null,null,null,null,null];
(statearr_21266[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_21266[(1)] = (1));

return statearr_21266;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_21225){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_21225);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21270){var ex__18415__auto__ = e21270;
var statearr_21271_23166 = state_21225;
(statearr_21271_23166[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_21225[(4)]))){
var statearr_21272_23168 = state_21225;
(statearr_21272_23168[(1)] = cljs.core.first((state_21225[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23169 = state_21225;
state_21225 = G__23169;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_21225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_21225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21279 = f__18624__auto__();
(statearr_21279[(6)] = c__18623__auto___23138);

return statearr_21279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21286 = arguments.length;
switch (G__21286) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18623__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_21354){
var state_val_21355 = (state_21354[(1)]);
if((state_val_21355 === (7))){
var inst_21350 = (state_21354[(2)]);
var state_21354__$1 = state_21354;
var statearr_21365_23176 = state_21354__$1;
(statearr_21365_23176[(2)] = inst_21350);

(statearr_21365_23176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (20))){
var inst_21316 = (state_21354[(7)]);
var inst_21331 = (state_21354[(2)]);
var inst_21332 = cljs.core.next(inst_21316);
var inst_21301 = inst_21332;
var inst_21302 = null;
var inst_21303 = (0);
var inst_21304 = (0);
var state_21354__$1 = (function (){var statearr_21371 = state_21354;
(statearr_21371[(8)] = inst_21301);

(statearr_21371[(9)] = inst_21302);

(statearr_21371[(10)] = inst_21303);

(statearr_21371[(11)] = inst_21304);

(statearr_21371[(12)] = inst_21331);

return statearr_21371;
})();
var statearr_21372_23189 = state_21354__$1;
(statearr_21372_23189[(2)] = null);

(statearr_21372_23189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (1))){
var state_21354__$1 = state_21354;
var statearr_21374_23192 = state_21354__$1;
(statearr_21374_23192[(2)] = null);

(statearr_21374_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (4))){
var inst_21290 = (state_21354[(13)]);
var inst_21290__$1 = (state_21354[(2)]);
var inst_21291 = (inst_21290__$1 == null);
var state_21354__$1 = (function (){var statearr_21378 = state_21354;
(statearr_21378[(13)] = inst_21290__$1);

return statearr_21378;
})();
if(cljs.core.truth_(inst_21291)){
var statearr_21379_23195 = state_21354__$1;
(statearr_21379_23195[(1)] = (5));

} else {
var statearr_21380_23198 = state_21354__$1;
(statearr_21380_23198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (15))){
var state_21354__$1 = state_21354;
var statearr_21384_23200 = state_21354__$1;
(statearr_21384_23200[(2)] = null);

(statearr_21384_23200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (21))){
var state_21354__$1 = state_21354;
var statearr_21386_23201 = state_21354__$1;
(statearr_21386_23201[(2)] = null);

(statearr_21386_23201[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (13))){
var inst_21301 = (state_21354[(8)]);
var inst_21302 = (state_21354[(9)]);
var inst_21303 = (state_21354[(10)]);
var inst_21304 = (state_21354[(11)]);
var inst_21311 = (state_21354[(2)]);
var inst_21313 = (inst_21304 + (1));
var tmp21381 = inst_21301;
var tmp21382 = inst_21302;
var tmp21383 = inst_21303;
var inst_21301__$1 = tmp21381;
var inst_21302__$1 = tmp21382;
var inst_21303__$1 = tmp21383;
var inst_21304__$1 = inst_21313;
var state_21354__$1 = (function (){var statearr_21388 = state_21354;
(statearr_21388[(8)] = inst_21301__$1);

(statearr_21388[(9)] = inst_21302__$1);

(statearr_21388[(10)] = inst_21303__$1);

(statearr_21388[(11)] = inst_21304__$1);

(statearr_21388[(14)] = inst_21311);

return statearr_21388;
})();
var statearr_21389_23218 = state_21354__$1;
(statearr_21389_23218[(2)] = null);

(statearr_21389_23218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (22))){
var state_21354__$1 = state_21354;
var statearr_21390_23219 = state_21354__$1;
(statearr_21390_23219[(2)] = null);

(statearr_21390_23219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (6))){
var inst_21290 = (state_21354[(13)]);
var inst_21299 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21290) : f.call(null,inst_21290));
var inst_21300 = cljs.core.seq(inst_21299);
var inst_21301 = inst_21300;
var inst_21302 = null;
var inst_21303 = (0);
var inst_21304 = (0);
var state_21354__$1 = (function (){var statearr_21394 = state_21354;
(statearr_21394[(8)] = inst_21301);

(statearr_21394[(9)] = inst_21302);

(statearr_21394[(10)] = inst_21303);

(statearr_21394[(11)] = inst_21304);

return statearr_21394;
})();
var statearr_21395_23224 = state_21354__$1;
(statearr_21395_23224[(2)] = null);

(statearr_21395_23224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (17))){
var inst_21316 = (state_21354[(7)]);
var inst_21321 = cljs.core.chunk_first(inst_21316);
var inst_21322 = cljs.core.chunk_rest(inst_21316);
var inst_21323 = cljs.core.count(inst_21321);
var inst_21301 = inst_21322;
var inst_21302 = inst_21321;
var inst_21303 = inst_21323;
var inst_21304 = (0);
var state_21354__$1 = (function (){var statearr_21396 = state_21354;
(statearr_21396[(8)] = inst_21301);

(statearr_21396[(9)] = inst_21302);

(statearr_21396[(10)] = inst_21303);

(statearr_21396[(11)] = inst_21304);

return statearr_21396;
})();
var statearr_21401_23234 = state_21354__$1;
(statearr_21401_23234[(2)] = null);

(statearr_21401_23234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (3))){
var inst_21352 = (state_21354[(2)]);
var state_21354__$1 = state_21354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21354__$1,inst_21352);
} else {
if((state_val_21355 === (12))){
var inst_21340 = (state_21354[(2)]);
var state_21354__$1 = state_21354;
var statearr_21403_23239 = state_21354__$1;
(statearr_21403_23239[(2)] = inst_21340);

(statearr_21403_23239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (2))){
var state_21354__$1 = state_21354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21354__$1,(4),in$);
} else {
if((state_val_21355 === (23))){
var inst_21348 = (state_21354[(2)]);
var state_21354__$1 = state_21354;
var statearr_21404_23240 = state_21354__$1;
(statearr_21404_23240[(2)] = inst_21348);

(statearr_21404_23240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (19))){
var inst_21335 = (state_21354[(2)]);
var state_21354__$1 = state_21354;
var statearr_21405_23246 = state_21354__$1;
(statearr_21405_23246[(2)] = inst_21335);

(statearr_21405_23246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (11))){
var inst_21301 = (state_21354[(8)]);
var inst_21316 = (state_21354[(7)]);
var inst_21316__$1 = cljs.core.seq(inst_21301);
var state_21354__$1 = (function (){var statearr_21406 = state_21354;
(statearr_21406[(7)] = inst_21316__$1);

return statearr_21406;
})();
if(inst_21316__$1){
var statearr_21408_23249 = state_21354__$1;
(statearr_21408_23249[(1)] = (14));

} else {
var statearr_21410_23250 = state_21354__$1;
(statearr_21410_23250[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (9))){
var inst_21342 = (state_21354[(2)]);
var inst_21343 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_21354__$1 = (function (){var statearr_21412 = state_21354;
(statearr_21412[(15)] = inst_21342);

return statearr_21412;
})();
if(cljs.core.truth_(inst_21343)){
var statearr_21416_23257 = state_21354__$1;
(statearr_21416_23257[(1)] = (21));

} else {
var statearr_21417_23262 = state_21354__$1;
(statearr_21417_23262[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (5))){
var inst_21293 = cljs.core.async.close_BANG_(out);
var state_21354__$1 = state_21354;
var statearr_21419_23264 = state_21354__$1;
(statearr_21419_23264[(2)] = inst_21293);

(statearr_21419_23264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (14))){
var inst_21316 = (state_21354[(7)]);
var inst_21318 = cljs.core.chunked_seq_QMARK_(inst_21316);
var state_21354__$1 = state_21354;
if(inst_21318){
var statearr_21420_23268 = state_21354__$1;
(statearr_21420_23268[(1)] = (17));

} else {
var statearr_21421_23269 = state_21354__$1;
(statearr_21421_23269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (16))){
var inst_21338 = (state_21354[(2)]);
var state_21354__$1 = state_21354;
var statearr_21422_23271 = state_21354__$1;
(statearr_21422_23271[(2)] = inst_21338);

(statearr_21422_23271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21355 === (10))){
var inst_21302 = (state_21354[(9)]);
var inst_21304 = (state_21354[(11)]);
var inst_21309 = cljs.core._nth(inst_21302,inst_21304);
var state_21354__$1 = state_21354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21354__$1,(13),out,inst_21309);
} else {
if((state_val_21355 === (18))){
var inst_21316 = (state_21354[(7)]);
var inst_21329 = cljs.core.first(inst_21316);
var state_21354__$1 = state_21354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21354__$1,(20),out,inst_21329);
} else {
if((state_val_21355 === (8))){
var inst_21303 = (state_21354[(10)]);
var inst_21304 = (state_21354[(11)]);
var inst_21306 = (inst_21304 < inst_21303);
var inst_21307 = inst_21306;
var state_21354__$1 = state_21354;
if(cljs.core.truth_(inst_21307)){
var statearr_21423_23281 = state_21354__$1;
(statearr_21423_23281[(1)] = (10));

} else {
var statearr_21425_23282 = state_21354__$1;
(statearr_21425_23282[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18412__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18412__auto____0 = (function (){
var statearr_21426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21426[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18412__auto__);

(statearr_21426[(1)] = (1));

return statearr_21426;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18412__auto____1 = (function (state_21354){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_21354);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21428){var ex__18415__auto__ = e21428;
var statearr_21429_23288 = state_21354;
(statearr_21429_23288[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_21354[(4)]))){
var statearr_21430_23289 = state_21354;
(statearr_21430_23289[(1)] = cljs.core.first((state_21354[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23290 = state_21354;
state_21354 = G__23290;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18412__auto__ = function(state_21354){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18412__auto____1.call(this,state_21354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18412__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18412__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21439 = f__18624__auto__();
(statearr_21439[(6)] = c__18623__auto__);

return statearr_21439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));

return c__18623__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21442 = arguments.length;
switch (G__21442) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__21446 = arguments.length;
switch (G__21446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__21461 = arguments.length;
switch (G__21461) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18623__auto___23309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_21490){
var state_val_21491 = (state_21490[(1)]);
if((state_val_21491 === (7))){
var inst_21485 = (state_21490[(2)]);
var state_21490__$1 = state_21490;
var statearr_21496_23311 = state_21490__$1;
(statearr_21496_23311[(2)] = inst_21485);

(statearr_21496_23311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (1))){
var inst_21463 = null;
var state_21490__$1 = (function (){var statearr_21498 = state_21490;
(statearr_21498[(7)] = inst_21463);

return statearr_21498;
})();
var statearr_21499_23317 = state_21490__$1;
(statearr_21499_23317[(2)] = null);

(statearr_21499_23317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (4))){
var inst_21469 = (state_21490[(8)]);
var inst_21469__$1 = (state_21490[(2)]);
var inst_21471 = (inst_21469__$1 == null);
var inst_21472 = cljs.core.not(inst_21471);
var state_21490__$1 = (function (){var statearr_21500 = state_21490;
(statearr_21500[(8)] = inst_21469__$1);

return statearr_21500;
})();
if(inst_21472){
var statearr_21501_23327 = state_21490__$1;
(statearr_21501_23327[(1)] = (5));

} else {
var statearr_21502_23330 = state_21490__$1;
(statearr_21502_23330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (6))){
var state_21490__$1 = state_21490;
var statearr_21503_23338 = state_21490__$1;
(statearr_21503_23338[(2)] = null);

(statearr_21503_23338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (3))){
var inst_21487 = (state_21490[(2)]);
var inst_21488 = cljs.core.async.close_BANG_(out);
var state_21490__$1 = (function (){var statearr_21504 = state_21490;
(statearr_21504[(9)] = inst_21487);

return statearr_21504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21490__$1,inst_21488);
} else {
if((state_val_21491 === (2))){
var state_21490__$1 = state_21490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21490__$1,(4),ch);
} else {
if((state_val_21491 === (11))){
var inst_21469 = (state_21490[(8)]);
var inst_21479 = (state_21490[(2)]);
var inst_21463 = inst_21469;
var state_21490__$1 = (function (){var statearr_21508 = state_21490;
(statearr_21508[(10)] = inst_21479);

(statearr_21508[(7)] = inst_21463);

return statearr_21508;
})();
var statearr_21509_23341 = state_21490__$1;
(statearr_21509_23341[(2)] = null);

(statearr_21509_23341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (9))){
var inst_21469 = (state_21490[(8)]);
var state_21490__$1 = state_21490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21490__$1,(11),out,inst_21469);
} else {
if((state_val_21491 === (5))){
var inst_21469 = (state_21490[(8)]);
var inst_21463 = (state_21490[(7)]);
var inst_21474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21469,inst_21463);
var state_21490__$1 = state_21490;
if(inst_21474){
var statearr_21512_23351 = state_21490__$1;
(statearr_21512_23351[(1)] = (8));

} else {
var statearr_21514_23352 = state_21490__$1;
(statearr_21514_23352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (10))){
var inst_21482 = (state_21490[(2)]);
var state_21490__$1 = state_21490;
var statearr_21516_23353 = state_21490__$1;
(statearr_21516_23353[(2)] = inst_21482);

(statearr_21516_23353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21491 === (8))){
var inst_21463 = (state_21490[(7)]);
var tmp21510 = inst_21463;
var inst_21463__$1 = tmp21510;
var state_21490__$1 = (function (){var statearr_21518 = state_21490;
(statearr_21518[(7)] = inst_21463__$1);

return statearr_21518;
})();
var statearr_21519_23355 = state_21490__$1;
(statearr_21519_23355[(2)] = null);

(statearr_21519_23355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_21520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21520[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_21520[(1)] = (1));

return statearr_21520;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_21490){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_21490);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21521){var ex__18415__auto__ = e21521;
var statearr_21525_23370 = state_21490;
(statearr_21525_23370[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_21490[(4)]))){
var statearr_21526_23371 = state_21490;
(statearr_21526_23371[(1)] = cljs.core.first((state_21490[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23373 = state_21490;
state_21490 = G__23373;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_21490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_21490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21527 = f__18624__auto__();
(statearr_21527[(6)] = c__18623__auto___23309);

return statearr_21527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21529 = arguments.length;
switch (G__21529) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18623__auto___23414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_21572){
var state_val_21574 = (state_21572[(1)]);
if((state_val_21574 === (7))){
var inst_21567 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
var statearr_21578_23416 = state_21572__$1;
(statearr_21578_23416[(2)] = inst_21567);

(statearr_21578_23416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (1))){
var inst_21531 = (new Array(n));
var inst_21532 = inst_21531;
var inst_21533 = (0);
var state_21572__$1 = (function (){var statearr_21579 = state_21572;
(statearr_21579[(7)] = inst_21532);

(statearr_21579[(8)] = inst_21533);

return statearr_21579;
})();
var statearr_21580_23421 = state_21572__$1;
(statearr_21580_23421[(2)] = null);

(statearr_21580_23421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (4))){
var inst_21536 = (state_21572[(9)]);
var inst_21536__$1 = (state_21572[(2)]);
var inst_21537 = (inst_21536__$1 == null);
var inst_21538 = cljs.core.not(inst_21537);
var state_21572__$1 = (function (){var statearr_21583 = state_21572;
(statearr_21583[(9)] = inst_21536__$1);

return statearr_21583;
})();
if(inst_21538){
var statearr_21584_23431 = state_21572__$1;
(statearr_21584_23431[(1)] = (5));

} else {
var statearr_21585_23432 = state_21572__$1;
(statearr_21585_23432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (15))){
var inst_21560 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
var statearr_21586_23433 = state_21572__$1;
(statearr_21586_23433[(2)] = inst_21560);

(statearr_21586_23433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (13))){
var state_21572__$1 = state_21572;
var statearr_21587_23443 = state_21572__$1;
(statearr_21587_23443[(2)] = null);

(statearr_21587_23443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (6))){
var inst_21533 = (state_21572[(8)]);
var inst_21556 = (inst_21533 > (0));
var state_21572__$1 = state_21572;
if(cljs.core.truth_(inst_21556)){
var statearr_21588_23458 = state_21572__$1;
(statearr_21588_23458[(1)] = (12));

} else {
var statearr_21589_23462 = state_21572__$1;
(statearr_21589_23462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (3))){
var inst_21569 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21572__$1,inst_21569);
} else {
if((state_val_21574 === (12))){
var inst_21532 = (state_21572[(7)]);
var inst_21558 = cljs.core.vec(inst_21532);
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21572__$1,(15),out,inst_21558);
} else {
if((state_val_21574 === (2))){
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21572__$1,(4),ch);
} else {
if((state_val_21574 === (11))){
var inst_21550 = (state_21572[(2)]);
var inst_21551 = (new Array(n));
var inst_21532 = inst_21551;
var inst_21533 = (0);
var state_21572__$1 = (function (){var statearr_21590 = state_21572;
(statearr_21590[(7)] = inst_21532);

(statearr_21590[(8)] = inst_21533);

(statearr_21590[(10)] = inst_21550);

return statearr_21590;
})();
var statearr_21591_23480 = state_21572__$1;
(statearr_21591_23480[(2)] = null);

(statearr_21591_23480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (9))){
var inst_21532 = (state_21572[(7)]);
var inst_21548 = cljs.core.vec(inst_21532);
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21572__$1,(11),out,inst_21548);
} else {
if((state_val_21574 === (5))){
var inst_21532 = (state_21572[(7)]);
var inst_21543 = (state_21572[(11)]);
var inst_21533 = (state_21572[(8)]);
var inst_21536 = (state_21572[(9)]);
var inst_21540 = (inst_21532[inst_21533] = inst_21536);
var inst_21543__$1 = (inst_21533 + (1));
var inst_21544 = (inst_21543__$1 < n);
var state_21572__$1 = (function (){var statearr_21593 = state_21572;
(statearr_21593[(11)] = inst_21543__$1);

(statearr_21593[(12)] = inst_21540);

return statearr_21593;
})();
if(cljs.core.truth_(inst_21544)){
var statearr_21594_23498 = state_21572__$1;
(statearr_21594_23498[(1)] = (8));

} else {
var statearr_21595_23500 = state_21572__$1;
(statearr_21595_23500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (14))){
var inst_21564 = (state_21572[(2)]);
var inst_21565 = cljs.core.async.close_BANG_(out);
var state_21572__$1 = (function (){var statearr_21600 = state_21572;
(statearr_21600[(13)] = inst_21564);

return statearr_21600;
})();
var statearr_21601_23507 = state_21572__$1;
(statearr_21601_23507[(2)] = inst_21565);

(statearr_21601_23507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (10))){
var inst_21554 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
var statearr_21602_23509 = state_21572__$1;
(statearr_21602_23509[(2)] = inst_21554);

(statearr_21602_23509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (8))){
var inst_21532 = (state_21572[(7)]);
var inst_21543 = (state_21572[(11)]);
var tmp21596 = inst_21532;
var inst_21532__$1 = tmp21596;
var inst_21533 = inst_21543;
var state_21572__$1 = (function (){var statearr_21603 = state_21572;
(statearr_21603[(7)] = inst_21532__$1);

(statearr_21603[(8)] = inst_21533);

return statearr_21603;
})();
var statearr_21604_23514 = state_21572__$1;
(statearr_21604_23514[(2)] = null);

(statearr_21604_23514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_21605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21605[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_21605[(1)] = (1));

return statearr_21605;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_21572){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_21572);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21606){var ex__18415__auto__ = e21606;
var statearr_21607_23520 = state_21572;
(statearr_21607_23520[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_21572[(4)]))){
var statearr_21609_23522 = state_21572;
(statearr_21609_23522[(1)] = cljs.core.first((state_21572[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23523 = state_21572;
state_21572 = G__23523;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_21572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_21572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21610 = f__18624__auto__();
(statearr_21610[(6)] = c__18623__auto___23414);

return statearr_21610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21614 = arguments.length;
switch (G__21614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18623__auto___23528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18624__auto__ = (function (){var switch__18411__auto__ = (function (state_21681){
var state_val_21685 = (state_21681[(1)]);
if((state_val_21685 === (7))){
var inst_21674 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21692_23530 = state_21681__$1;
(statearr_21692_23530[(2)] = inst_21674);

(statearr_21692_23530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (1))){
var inst_21625 = [];
var inst_21626 = inst_21625;
var inst_21627 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21681__$1 = (function (){var statearr_21693 = state_21681;
(statearr_21693[(7)] = inst_21627);

(statearr_21693[(8)] = inst_21626);

return statearr_21693;
})();
var statearr_21694_23533 = state_21681__$1;
(statearr_21694_23533[(2)] = null);

(statearr_21694_23533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (4))){
var inst_21631 = (state_21681[(9)]);
var inst_21631__$1 = (state_21681[(2)]);
var inst_21632 = (inst_21631__$1 == null);
var inst_21633 = cljs.core.not(inst_21632);
var state_21681__$1 = (function (){var statearr_21695 = state_21681;
(statearr_21695[(9)] = inst_21631__$1);

return statearr_21695;
})();
if(inst_21633){
var statearr_21696_23538 = state_21681__$1;
(statearr_21696_23538[(1)] = (5));

} else {
var statearr_21697_23539 = state_21681__$1;
(statearr_21697_23539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (15))){
var inst_21626 = (state_21681[(8)]);
var inst_21666 = cljs.core.vec(inst_21626);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21681__$1,(18),out,inst_21666);
} else {
if((state_val_21685 === (13))){
var inst_21657 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21704_23543 = state_21681__$1;
(statearr_21704_23543[(2)] = inst_21657);

(statearr_21704_23543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (6))){
var inst_21626 = (state_21681[(8)]);
var inst_21663 = inst_21626.length;
var inst_21664 = (inst_21663 > (0));
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21664)){
var statearr_21705_23545 = state_21681__$1;
(statearr_21705_23545[(1)] = (15));

} else {
var statearr_21706_23547 = state_21681__$1;
(statearr_21706_23547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (17))){
var inst_21671 = (state_21681[(2)]);
var inst_21672 = cljs.core.async.close_BANG_(out);
var state_21681__$1 = (function (){var statearr_21708 = state_21681;
(statearr_21708[(10)] = inst_21671);

return statearr_21708;
})();
var statearr_21709_23548 = state_21681__$1;
(statearr_21709_23548[(2)] = inst_21672);

(statearr_21709_23548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (3))){
var inst_21676 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21681__$1,inst_21676);
} else {
if((state_val_21685 === (12))){
var inst_21626 = (state_21681[(8)]);
var inst_21646 = cljs.core.vec(inst_21626);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21681__$1,(14),out,inst_21646);
} else {
if((state_val_21685 === (2))){
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21681__$1,(4),ch);
} else {
if((state_val_21685 === (11))){
var inst_21635 = (state_21681[(11)]);
var inst_21631 = (state_21681[(9)]);
var inst_21626 = (state_21681[(8)]);
var inst_21643 = inst_21626.push(inst_21631);
var tmp21710 = inst_21626;
var inst_21626__$1 = tmp21710;
var inst_21627 = inst_21635;
var state_21681__$1 = (function (){var statearr_21720 = state_21681;
(statearr_21720[(12)] = inst_21643);

(statearr_21720[(7)] = inst_21627);

(statearr_21720[(8)] = inst_21626__$1);

return statearr_21720;
})();
var statearr_21727_23567 = state_21681__$1;
(statearr_21727_23567[(2)] = null);

(statearr_21727_23567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (9))){
var inst_21627 = (state_21681[(7)]);
var inst_21639 = cljs.core.keyword_identical_QMARK_(inst_21627,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_21681__$1 = state_21681;
var statearr_21732_23575 = state_21681__$1;
(statearr_21732_23575[(2)] = inst_21639);

(statearr_21732_23575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (5))){
var inst_21636 = (state_21681[(13)]);
var inst_21635 = (state_21681[(11)]);
var inst_21631 = (state_21681[(9)]);
var inst_21627 = (state_21681[(7)]);
var inst_21635__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21631) : f.call(null,inst_21631));
var inst_21636__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21635__$1,inst_21627);
var state_21681__$1 = (function (){var statearr_21736 = state_21681;
(statearr_21736[(13)] = inst_21636__$1);

(statearr_21736[(11)] = inst_21635__$1);

return statearr_21736;
})();
if(inst_21636__$1){
var statearr_21740_23598 = state_21681__$1;
(statearr_21740_23598[(1)] = (8));

} else {
var statearr_21741_23599 = state_21681__$1;
(statearr_21741_23599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (14))){
var inst_21635 = (state_21681[(11)]);
var inst_21631 = (state_21681[(9)]);
var inst_21648 = (state_21681[(2)]);
var inst_21653 = [];
var inst_21654 = inst_21653.push(inst_21631);
var inst_21626 = inst_21653;
var inst_21627 = inst_21635;
var state_21681__$1 = (function (){var statearr_21742 = state_21681;
(statearr_21742[(14)] = inst_21654);

(statearr_21742[(7)] = inst_21627);

(statearr_21742[(15)] = inst_21648);

(statearr_21742[(8)] = inst_21626);

return statearr_21742;
})();
var statearr_21746_23616 = state_21681__$1;
(statearr_21746_23616[(2)] = null);

(statearr_21746_23616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (16))){
var state_21681__$1 = state_21681;
var statearr_21758_23623 = state_21681__$1;
(statearr_21758_23623[(2)] = null);

(statearr_21758_23623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (10))){
var inst_21641 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21641)){
var statearr_21759_23630 = state_21681__$1;
(statearr_21759_23630[(1)] = (11));

} else {
var statearr_21760_23631 = state_21681__$1;
(statearr_21760_23631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (18))){
var inst_21668 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21767_23633 = state_21681__$1;
(statearr_21767_23633[(2)] = inst_21668);

(statearr_21767_23633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (8))){
var inst_21636 = (state_21681[(13)]);
var state_21681__$1 = state_21681;
var statearr_21768_23643 = state_21681__$1;
(statearr_21768_23643[(2)] = inst_21636);

(statearr_21768_23643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18412__auto__ = null;
var cljs$core$async$state_machine__18412__auto____0 = (function (){
var statearr_21769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21769[(0)] = cljs$core$async$state_machine__18412__auto__);

(statearr_21769[(1)] = (1));

return statearr_21769;
});
var cljs$core$async$state_machine__18412__auto____1 = (function (state_21681){
while(true){
var ret_value__18413__auto__ = (function (){try{while(true){
var result__18414__auto__ = switch__18411__auto__(state_21681);
if(cljs.core.keyword_identical_QMARK_(result__18414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18414__auto__;
}
break;
}
}catch (e21770){var ex__18415__auto__ = e21770;
var statearr_21771_23665 = state_21681;
(statearr_21771_23665[(2)] = ex__18415__auto__);


if(cljs.core.seq((state_21681[(4)]))){
var statearr_21772_23666 = state_21681;
(statearr_21772_23666[(1)] = cljs.core.first((state_21681[(4)])));

} else {
throw ex__18415__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23667 = state_21681;
state_21681 = G__23667;
continue;
} else {
return ret_value__18413__auto__;
}
break;
}
});
cljs$core$async$state_machine__18412__auto__ = function(state_21681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18412__auto____1.call(this,state_21681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18412__auto____0;
cljs$core$async$state_machine__18412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18412__auto____1;
return cljs$core$async$state_machine__18412__auto__;
})()
})();
var state__18625__auto__ = (function (){var statearr_21773 = f__18624__auto__();
(statearr_21773[(6)] = c__18623__auto___23528);

return statearr_21773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18625__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
