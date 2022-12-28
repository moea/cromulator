goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23191){
var map__23193 = p__23191;
var map__23193__$1 = cljs.core.__destructure_map(map__23193);
var m = map__23193__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23193__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23209_23830 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23211_23831 = null;
var count__23213_23832 = (0);
var i__23214_23833 = (0);
while(true){
if((i__23214_23833 < count__23213_23832)){
var f_23835 = chunk__23211_23831.cljs$core$IIndexed$_nth$arity$2(null,i__23214_23833);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23835], 0));


var G__23840 = seq__23209_23830;
var G__23841 = chunk__23211_23831;
var G__23842 = count__23213_23832;
var G__23843 = (i__23214_23833 + (1));
seq__23209_23830 = G__23840;
chunk__23211_23831 = G__23841;
count__23213_23832 = G__23842;
i__23214_23833 = G__23843;
continue;
} else {
var temp__5804__auto___23844 = cljs.core.seq(seq__23209_23830);
if(temp__5804__auto___23844){
var seq__23209_23845__$1 = temp__5804__auto___23844;
if(cljs.core.chunked_seq_QMARK_(seq__23209_23845__$1)){
var c__5568__auto___23846 = cljs.core.chunk_first(seq__23209_23845__$1);
var G__23847 = cljs.core.chunk_rest(seq__23209_23845__$1);
var G__23848 = c__5568__auto___23846;
var G__23849 = cljs.core.count(c__5568__auto___23846);
var G__23850 = (0);
seq__23209_23830 = G__23847;
chunk__23211_23831 = G__23848;
count__23213_23832 = G__23849;
i__23214_23833 = G__23850;
continue;
} else {
var f_23851 = cljs.core.first(seq__23209_23845__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23851], 0));


var G__23852 = cljs.core.next(seq__23209_23845__$1);
var G__23853 = null;
var G__23854 = (0);
var G__23855 = (0);
seq__23209_23830 = G__23852;
chunk__23211_23831 = G__23853;
count__23213_23832 = G__23854;
i__23214_23833 = G__23855;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23856 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23856], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23856)))?cljs.core.second(arglists_23856):arglists_23856)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23251_23860 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23252_23861 = null;
var count__23253_23862 = (0);
var i__23254_23863 = (0);
while(true){
if((i__23254_23863 < count__23253_23862)){
var vec__23284_23868 = chunk__23252_23861.cljs$core$IIndexed$_nth$arity$2(null,i__23254_23863);
var name_23869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23284_23868,(0),null);
var map__23287_23870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23284_23868,(1),null);
var map__23287_23871__$1 = cljs.core.__destructure_map(map__23287_23870);
var doc_23872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23287_23871__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23287_23871__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23869], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23873], 0));

if(cljs.core.truth_(doc_23872)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23872], 0));
} else {
}


var G__23874 = seq__23251_23860;
var G__23875 = chunk__23252_23861;
var G__23876 = count__23253_23862;
var G__23877 = (i__23254_23863 + (1));
seq__23251_23860 = G__23874;
chunk__23252_23861 = G__23875;
count__23253_23862 = G__23876;
i__23254_23863 = G__23877;
continue;
} else {
var temp__5804__auto___23878 = cljs.core.seq(seq__23251_23860);
if(temp__5804__auto___23878){
var seq__23251_23879__$1 = temp__5804__auto___23878;
if(cljs.core.chunked_seq_QMARK_(seq__23251_23879__$1)){
var c__5568__auto___23880 = cljs.core.chunk_first(seq__23251_23879__$1);
var G__23884 = cljs.core.chunk_rest(seq__23251_23879__$1);
var G__23885 = c__5568__auto___23880;
var G__23886 = cljs.core.count(c__5568__auto___23880);
var G__23887 = (0);
seq__23251_23860 = G__23884;
chunk__23252_23861 = G__23885;
count__23253_23862 = G__23886;
i__23254_23863 = G__23887;
continue;
} else {
var vec__23299_23889 = cljs.core.first(seq__23251_23879__$1);
var name_23890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299_23889,(0),null);
var map__23302_23891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299_23889,(1),null);
var map__23302_23892__$1 = cljs.core.__destructure_map(map__23302_23891);
var doc_23893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302_23892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302_23892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23890], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23894], 0));

if(cljs.core.truth_(doc_23893)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23893], 0));
} else {
}


var G__23896 = cljs.core.next(seq__23251_23879__$1);
var G__23897 = null;
var G__23898 = (0);
var G__23899 = (0);
seq__23251_23860 = G__23896;
chunk__23252_23861 = G__23897;
count__23253_23862 = G__23898;
i__23254_23863 = G__23899;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__23312 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23313 = null;
var count__23314 = (0);
var i__23315 = (0);
while(true){
if((i__23315 < count__23314)){
var role = chunk__23313.cljs$core$IIndexed$_nth$arity$2(null,i__23315);
var temp__5804__auto___23900__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23900__$1)){
var spec_23901 = temp__5804__auto___23900__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23901)], 0));
} else {
}


var G__23902 = seq__23312;
var G__23903 = chunk__23313;
var G__23904 = count__23314;
var G__23905 = (i__23315 + (1));
seq__23312 = G__23902;
chunk__23313 = G__23903;
count__23314 = G__23904;
i__23315 = G__23905;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__23312);
if(temp__5804__auto____$1){
var seq__23312__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23312__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23312__$1);
var G__23915 = cljs.core.chunk_rest(seq__23312__$1);
var G__23916 = c__5568__auto__;
var G__23917 = cljs.core.count(c__5568__auto__);
var G__23918 = (0);
seq__23312 = G__23915;
chunk__23313 = G__23916;
count__23314 = G__23917;
i__23315 = G__23918;
continue;
} else {
var role = cljs.core.first(seq__23312__$1);
var temp__5804__auto___23919__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23919__$2)){
var spec_23921 = temp__5804__auto___23919__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23921)], 0));
} else {
}


var G__23922 = cljs.core.next(seq__23312__$1);
var G__23923 = null;
var G__23924 = (0);
var G__23925 = (0);
seq__23312 = G__23922;
chunk__23313 = G__23923;
count__23314 = G__23924;
i__23315 = G__23925;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23932 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23933 = cljs.core.ex_cause(t);
via = G__23932;
t = G__23933;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23515 = datafied_throwable;
var map__23515__$1 = cljs.core.__destructure_map(map__23515);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23515__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23515__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23515__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23516 = cljs.core.last(via);
var map__23516__$1 = cljs.core.__destructure_map(map__23516);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23517 = data;
var map__23517__$1 = cljs.core.__destructure_map(map__23517);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23518 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__23518__$1 = cljs.core.__destructure_map(map__23518);
var top_data = map__23518__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23524 = phase;
var G__23524__$1 = (((G__23524 instanceof cljs.core.Keyword))?G__23524.fqn:null);
switch (G__23524__$1) {
case "read-source":
var map__23526 = data;
var map__23526__$1 = cljs.core.__destructure_map(map__23526);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23526__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23526__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23527 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__23527__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23527,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23527);
var G__23527__$2 = (cljs.core.truth_((function (){var fexpr__23529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23529.cljs$core$IFn$_invoke$arity$1 ? fexpr__23529.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23529.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23527__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23527__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23527__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23527__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23531 = top_data;
var G__23531__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23531,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23531);
var G__23531__$2 = (cljs.core.truth_((function (){var fexpr__23535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23535.cljs$core$IFn$_invoke$arity$1 ? fexpr__23535.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23535.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23531__$1);
var G__23531__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23531__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23531__$2);
var G__23531__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23531__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23531__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23531__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23531__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23540 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23540,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23540,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23540,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23540,(3),null);
var G__23544 = top_data;
var G__23544__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23544,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23544);
var G__23544__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23544__$1);
var G__23544__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23544__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23544__$2);
var G__23544__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23544__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23544__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23544__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23544__$4;
}

break;
case "execution":
var vec__23559 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23559,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23559,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23559,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23559,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23506_SHARP_){
var or__5045__auto__ = (p1__23506_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__23574 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23574.cljs$core$IFn$_invoke$arity$1 ? fexpr__23574.cljs$core$IFn$_invoke$arity$1(p1__23506_SHARP_) : fexpr__23574.call(null,p1__23506_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__23587 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23587__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23587,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23587);
var G__23587__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23587__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23587__$1);
var G__23587__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23587__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23587__$2);
var G__23587__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23587__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23587__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23587__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23587__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23524__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23670){
var map__23671 = p__23670;
var map__23671__$1 = cljs.core.__destructure_map(map__23671);
var triage_data = map__23671__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23671__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23698 = phase;
var G__23698__$1 = (((G__23698 instanceof cljs.core.Keyword))?G__23698.fqn:null);
switch (G__23698__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23699 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23700 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23701 = loc;
var G__23702 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23705_24057 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23706_24058 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23707_24059 = true;
var _STAR_print_fn_STAR__temp_val__23708_24060 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23707_24059);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23708_24060);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23660_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23660_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23706_24058);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23705_24057);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23699,G__23700,G__23701,G__23702) : format.call(null,G__23699,G__23700,G__23701,G__23702));

break;
case "macroexpansion":
var G__23734 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23735 = cause_type;
var G__23736 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23737 = loc;
var G__23738 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23734,G__23735,G__23736,G__23737,G__23738) : format.call(null,G__23734,G__23735,G__23736,G__23737,G__23738));

break;
case "compile-syntax-check":
var G__23744 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23745 = cause_type;
var G__23746 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23747 = loc;
var G__23748 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23744,G__23745,G__23746,G__23747,G__23748) : format.call(null,G__23744,G__23745,G__23746,G__23747,G__23748));

break;
case "compilation":
var G__23766 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23767 = cause_type;
var G__23768 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23769 = loc;
var G__23770 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23766,G__23767,G__23768,G__23769,G__23770) : format.call(null,G__23766,G__23767,G__23768,G__23769,G__23770));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23781 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23782 = symbol;
var G__23783 = loc;
var G__23784 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23789_24134 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23790_24135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23791_24136 = true;
var _STAR_print_fn_STAR__temp_val__23792_24138 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23791_24136);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23792_24138);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23668_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23668_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23790_24135);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23789_24134);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23781,G__23782,G__23783,G__23784) : format.call(null,G__23781,G__23782,G__23783,G__23784));
} else {
var G__23802 = "Execution error%s at %s(%s).\n%s\n";
var G__23803 = cause_type;
var G__23804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23805 = loc;
var G__23806 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23802,G__23803,G__23804,G__23805,G__23806) : format.call(null,G__23802,G__23803,G__23804,G__23805,G__23806));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23698__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
