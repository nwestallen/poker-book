goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40485,p__40486){
var map__40487 = p__40485;
var map__40487__$1 = cljs.core.__destructure_map(map__40487);
var svc = map__40487__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40488 = p__40486;
var map__40488__$1 = cljs.core.__destructure_map(map__40488);
var msg = map__40488__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40488__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40493,p__40494){
var map__40495 = p__40493;
var map__40495__$1 = cljs.core.__destructure_map(map__40495);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40495__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40497 = p__40494;
var map__40497__$1 = cljs.core.__destructure_map(map__40497);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40497__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40507,p__40508){
var map__40509 = p__40507;
var map__40509__$1 = cljs.core.__destructure_map(map__40509);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40509__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40509__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40510 = p__40508;
var map__40510__$1 = cljs.core.__destructure_map(map__40510);
var msg = map__40510__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40510__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40514,tid){
var map__40515 = p__40514;
var map__40515__$1 = cljs.core.__destructure_map(map__40515);
var svc = map__40515__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40515__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40525 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40526 = null;
var count__40527 = (0);
var i__40528 = (0);
while(true){
if((i__40528 < count__40527)){
var vec__40540 = chunk__40526.cljs$core$IIndexed$_nth$arity$2(null, i__40528);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40569 = seq__40525;
var G__40570 = chunk__40526;
var G__40571 = count__40527;
var G__40572 = (i__40528 + (1));
seq__40525 = G__40569;
chunk__40526 = G__40570;
count__40527 = G__40571;
i__40528 = G__40572;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40525);
if(temp__5823__auto__){
var seq__40525__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40525__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40525__$1);
var G__40574 = cljs.core.chunk_rest(seq__40525__$1);
var G__40575 = c__5525__auto__;
var G__40576 = cljs.core.count(c__5525__auto__);
var G__40577 = (0);
seq__40525 = G__40574;
chunk__40526 = G__40575;
count__40527 = G__40576;
i__40528 = G__40577;
continue;
} else {
var vec__40545 = cljs.core.first(seq__40525__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40545,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40545,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40580 = cljs.core.next(seq__40525__$1);
var G__40581 = null;
var G__40582 = (0);
var G__40583 = (0);
seq__40525 = G__40580;
chunk__40526 = G__40581;
count__40527 = G__40582;
i__40528 = G__40583;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40521_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40521_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40522_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40522_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40523_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40523_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40524_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40524_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40549){
var map__40550 = p__40549;
var map__40550__$1 = cljs.core.__destructure_map(map__40550);
var svc = map__40550__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40550__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40550__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
