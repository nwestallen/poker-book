goog.provide('helix.hooks');
goog.scope(function(){
  helix.hooks.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
helix.hooks.raw_use_effect = module$node_modules$react$index.useEffect;

helix.hooks.raw_use_layout_effect = module$node_modules$react$index.useLayoutEffect;

helix.hooks.raw_use_memo = module$node_modules$react$index.useMemo;

helix.hooks.raw_use_callback = module$node_modules$react$index.useCallback;

helix.hooks.raw_use_imperative_handle = module$node_modules$react$index.useImperativeHandle;

/**
 * Protocol that marks a type as callable when passed to a use-state setter.
 * @interface
 */
helix.hooks.IStateUpdater = function(){};

(cljs.core.MultiFn.prototype.helix$hooks$IStateUpdater$ = cljs.core.PROTOCOL_SENTINEL);

(helix.hooks.IStateUpdater["function"] = true);
/**
 * Like `react/useState`, but the update function returned can be used similar
 *   to `swap!` if the first argument implements `IStateUpdater`.
 *   By default, this includes functions and multimethods.
 * 
 *   Example:
 *   ```
 *   (let [[state set-state] (use-state {:count 0})]
 * ;; ...
 * (set-state update :count inc))
 *   ```
 */
helix.hooks.use_state = (function helix$hooks$use_state(initial){
var vec__42052 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(1),null);
var updater = module$node_modules$react$index.useCallback((function() { 
var G__42119__delegate = function (x,xs){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.helix$hooks$IStateUpdater$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(helix.hooks.IStateUpdater,x):false)):cljs.core.native_satisfies_QMARK_(helix.hooks.IStateUpdater,x))){
var G__42058 = (function helix$hooks$use_state_$_spread_updater(y){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(x,y,xs);
});
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__42058) : u.call(null, G__42058));
} else {
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null, x));
}
};
var G__42119 = function (x,var_args){
var xs = null;
if (arguments.length > 1) {
var G__42121__i = 0, G__42121__a = new Array(arguments.length -  1);
while (G__42121__i < G__42121__a.length) {G__42121__a[G__42121__i] = arguments[G__42121__i + 1]; ++G__42121__i;}
  xs = new cljs.core.IndexedSeq(G__42121__a,0,null);
} 
return G__42119__delegate.call(this,x,xs);};
G__42119.cljs$lang$maxFixedArity = 1;
G__42119.cljs$lang$applyTo = (function (arglist__42122){
var x = cljs.core.first(arglist__42122);
var xs = cljs.core.rest(arglist__42122);
return G__42119__delegate(x,xs);
});
G__42119.cljs$core$IFn$_invoke$arity$variadic = G__42119__delegate;
return G__42119;
})()
,[]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
});
/**
 * Like react/useRef. Supports accessing the "current" property via
 *   dereference (@) and updating the "current" property via `reset!` and
 *   `swap!`
 */
helix.hooks.use_ref = (function helix$hooks$use_ref(x){
var ref = module$node_modules$react$index.useRef(null);
if((ref.current == null)){
(ref.current = (function (){var x42061 = ({"current": x});
(x42061.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x42061.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x42061.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x42061.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return helix.hooks.goog$module$goog$object.set(this$__$1,"current",v);
}));

(x42061.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x42061.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return helix.hooks.goog$module$goog$object.set(this$__$1,"current",(function (){var G__42062 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42062) : f.call(null, G__42062));
})());
}));

(x42061.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return helix.hooks.goog$module$goog$object.set(this$__$1,"current",(function (){var G__42063 = this$__$1.current;
var G__42064 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42063,G__42064) : f.call(null, G__42063,G__42064));
})());
}));

(x42061.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return helix.hooks.goog$module$goog$object.set(this$__$1,"current",(function (){var G__42065 = this$__$1.current;
var G__42066 = a;
var G__42067 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42065,G__42066,G__42067) : f.call(null, G__42065,G__42066,G__42067));
})());
}));

(x42061.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return helix.hooks.goog$module$goog$object.set(this$__$1,"current",cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs));
}));

return x42061;
})());
} else {
}

return ref.current;
});
/**
 * Just react/useReducer.
 */
helix.hooks.use_reducer = (function helix$hooks$use_reducer(var_args){
var G__42072 = arguments.length;
switch (G__42072) {
case 2:
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,init_state){
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3(reducer,init_state,undefined);
}));

(helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,init_state,init){
return module$node_modules$react$index.useReducer(module$node_modules$react$index.useMemo((function (){
if((((!(cljs.core.fn_QMARK_(reducer)))) && (cljs.core.ifn_QMARK_(reducer)))){
return (function helix$hooks$wrap_ifn(state,action){
return (reducer.cljs$core$IFn$_invoke$arity$2 ? reducer.cljs$core$IFn$_invoke$arity$2(state,action) : reducer.call(null, state,action));
});
} else {
return reducer;
}
}),[reducer]),init_state,init);
}));

(helix.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useContext
 */
helix.hooks.use_context = module$node_modules$react$index.useContext;
helix.hooks.wrap_fx = (function helix$hooks$wrap_fx(f){
return (function helix$hooks$wrap_fx_$_wrap_fx_return(){
var x = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
return undefined;
}
});
});
helix.hooks.simple_body_QMARK_ = (function helix$hooks$simple_body_QMARK_(body){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(body),(1))) && ((cljs.core.first(body) instanceof cljs.core.Symbol)));
});
helix.hooks.determine_deps = (function helix$hooks$determine_deps(deps){
var G__42075 = deps;
var G__42075__$1 = (((G__42075 instanceof cljs.core.Keyword))?G__42075.fqn:null);
switch (G__42075__$1) {
case "once":
return [];

break;
case "always":
return undefined;

break;
case "auto-deps":
throw (new Error("Cannot use :auto-deps outside of macro."));

break;
default:
return cljs.core.to_array(deps);

}
});
/**
 * Like react/useEffect.  See `use-effect` for details on what `f`'s return values.  See namespace doc for `deps`.
 */
helix.hooks.use_effect_STAR_ = (function helix$hooks$use_effect_STAR_(var_args){
var G__42079 = arguments.length;
switch (G__42079) {
case 1:
return helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(helix.hooks.wrap_fx(f));
}));

(helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-effect*`; use `use-effect` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useEffect(helix.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(helix.hooks.use_effect_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Like `use-effect*` but instead calls react/useLayoutEffect.
 */
helix.hooks.use_layout_effect_STAR_ = (function helix$hooks$use_layout_effect_STAR_(var_args){
var G__42083 = arguments.length;
switch (G__42083) {
case 1:
return helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(helix.hooks.wrap_fx(f));
}));

(helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-layout-effect*`; use `use-layout-effect` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useLayoutEffect(helix.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(helix.hooks.use_layout_effect_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Like react/useMemo.  `f` is unchanged in meaning.  See namespace doc for
 *   `deps`.
 */
helix.hooks.use_memo_STAR_ = (function helix$hooks$use_memo_STAR_(var_args){
var G__42087 = arguments.length;
switch (G__42087) {
case 1:
return helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useMemo(f);
}));

(helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-memo*`; use `use-memo` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useMemo(f,cljs.core.to_array(deps));
}));

(helix.hooks.use_memo_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * `f` is a function which will be passed to react/useCallback.  See
 *   namespace doc for `deps`.
 */
helix.hooks.use_callback_STAR_ = (function helix$hooks$use_callback_STAR_(var_args){
var G__42091 = arguments.length;
switch (G__42091) {
case 1:
return helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useCallback(f);
}));

(helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-callback*`; use `use-callback` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useCallback(f,cljs.core.to_array(deps));
}));

(helix.hooks.use_callback_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Like react/useImperativeHandle.  `ref` and `f` are unchanged in meaning.
 *   See namespace doc for `deps`
 */
helix.hooks.use_imperative_handle_STAR_ = (function helix$hooks$use_imperative_handle_STAR_(var_args){
var G__42096 = arguments.length;
switch (G__42096) {
case 2:
return helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return module$node_modules$react$index.useImperativeHandle(ref,f);
}));

(helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ref,f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-imperative-handle*`; use `use-imperative-handle` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useImperativeHandle(ref,f,cljs.core.to_array(deps));
}));

(helix.hooks.use_imperative_handle_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useDebugValue
 */
helix.hooks.use_debug_value = module$node_modules$react$index.useDebugValue;
/**
 * Hook used for safely managing subscriptions, respecting Clojure equality.
 * 
 *   In order to avoid removing and re-adding subscriptions each time this hook is
 *   called, the parameters passed to this hook should be memoized in some way–
 *   either by wrapping the entire params object with `use-memo` or by wrapping the
 *   individual callbacks with `use-callback`.
 */
helix.hooks.use_subscription = (function helix$hooks$use_subscription(p__42105){
var map__42106 = p__42105;
var map__42106__$1 = cljs.core.__destructure_map(map__42106);
var get_current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42106__$1,new cljs.core.Keyword(null,"get-current-value","get-current-value",-1706578691));
var subscribe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42106__$1,new cljs.core.Keyword(null,"subscribe","subscribe",416253756));
var vec__42107 = module$node_modules$react$index.useState((function (){
return ({"get-current-value": get_current_value, "subscribe": subscribe, "value": (get_current_value.cljs$core$IFn$_invoke$arity$0 ? get_current_value.cljs$core$IFn$_invoke$arity$0() : get_current_value.call(null, ))});
}));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42107,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42107,(1),null);
module$node_modules$react$index.useEffect((function (){
var did_unsubscribe = ({"value": false});
var check_for_updates = (function helix$hooks$use_subscription_$_check_for_updates(){
if(cljs.core.not(helix.hooks.goog$module$goog$object.get(did_unsubscribe,"value"))){
var value = (get_current_value.cljs$core$IFn$_invoke$arity$0 ? get_current_value.cljs$core$IFn$_invoke$arity$0() : get_current_value.call(null, ));
var G__42113 = (function (prev){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(get_current_value,helix.hooks.goog$module$goog$object.get(prev,"get-current-value"))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscribe,helix.hooks.goog$module$goog$object.get(prev,"subscribe"))))){
return prev;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,helix.hooks.goog$module$goog$object.get(prev,"value"))){
return prev;
} else {
return ({"get-current-value": helix.hooks.goog$module$goog$object.get(prev,"get-current-value"), "subscribe": helix.hooks.goog$module$goog$object.get(prev,"subscribe"), "value": value});

}
}
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__42113) : set_state.call(null, G__42113));
} else {
return null;
}
});
var unsubscribe = (subscribe.cljs$core$IFn$_invoke$arity$1 ? subscribe.cljs$core$IFn$_invoke$arity$1(check_for_updates) : subscribe.call(null, check_for_updates));
check_for_updates();

return (function (){
helix.hooks.goog$module$goog$object.set(did_unsubscribe,"value",true);

return (unsubscribe.cljs$core$IFn$_invoke$arity$0 ? unsubscribe.cljs$core$IFn$_invoke$arity$0() : unsubscribe.call(null, ));
});
}),[get_current_value,subscribe]);

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(get_current_value,helix.hooks.goog$module$goog$object.get(state,"get-current-value"))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscribe,helix.hooks.goog$module$goog$object.get(state,"subscribe"))))){
var value = (get_current_value.cljs$core$IFn$_invoke$arity$0 ? get_current_value.cljs$core$IFn$_invoke$arity$0() : get_current_value.call(null, ));
var G__42116_42152 = ({"get-current-value": get_current_value, "subscribe": subscribe, "value": value});
(set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__42116_42152) : set_state.call(null, G__42116_42152));

return value;
} else {
return helix.hooks.goog$module$goog$object.get(state,"value");
}
});

//# sourceMappingURL=helix.hooks.js.map
