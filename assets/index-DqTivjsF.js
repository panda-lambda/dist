(function(){const L=document.createElement("link").relList;if(L&&L.supports&&L.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))X(T);new MutationObserver(T=>{for(const F of T)if(F.type==="childList")for(const A of F.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&X(A)}).observe(document,{childList:!0,subtree:!0});function f(T){const F={};return T.integrity&&(F.integrity=T.integrity),T.referrerPolicy&&(F.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?F.credentials="include":T.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function X(T){if(T.ep)return;T.ep=!0;const F=f(T);fetch(T.href,F)}})();var ys={exports:{}},St={},Es={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Ao(){if(Mu)return K;Mu=1;var D=Symbol.for("react.element"),L=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),A=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),me=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Y=Symbol.iterator;function Q(h){return h===null||typeof h!="object"?null:(h=Y&&h[Y]||h["@@iterator"],typeof h=="function"?h:null)}var Me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,V={};function j(h,p,P){this.props=h,this.context=p,this.refs=V,this.updater=P||Me}j.prototype.isReactComponent={},j.prototype.setState=function(h,p){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,p,"setState")},j.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function He(){}He.prototype=j.prototype;function we(h,p,P){this.props=h,this.context=p,this.refs=V,this.updater=P||Me}var Be=we.prototype=new He;Be.constructor=we,I(Be,j.prototype),Be.isPureReactComponent=!0;var ie=Array.isArray,Te=Object.prototype.hasOwnProperty,ye={current:null},Le={key:!0,ref:!0,__self:!0,__source:!0};function Ie(h,p,P){var C,Z={},J=null,te=null;if(p!=null)for(C in p.ref!==void 0&&(te=p.ref),p.key!==void 0&&(J=""+p.key),p)Te.call(p,C)&&!Le.hasOwnProperty(C)&&(Z[C]=p[C]);var q=arguments.length-2;if(q===1)Z.children=P;else if(1<q){for(var ue=Array(q),Je=0;Je<q;Je++)ue[Je]=arguments[Je+2];Z.children=ue}if(h&&h.defaultProps)for(C in q=h.defaultProps,q)Z[C]===void 0&&(Z[C]=q[C]);return{$$typeof:D,type:h,key:J,ref:te,props:Z,_owner:ye.current}}function dn(h,p){return{$$typeof:D,type:h.type,key:p,ref:h.ref,props:h.props,_owner:h._owner}}function un(h){return typeof h=="object"&&h!==null&&h.$$typeof===D}function wn(h){var p={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(P){return p[P]})}var en=/\/+/g;function Ae(h,p){return typeof h=="object"&&h!==null&&h.key!=null?wn(""+h.key):p.toString(36)}function Oe(h,p,P,C,Z){var J=typeof h;(J==="undefined"||J==="boolean")&&(h=null);var te=!1;if(h===null)te=!0;else switch(J){case"string":case"number":te=!0;break;case"object":switch(h.$$typeof){case D:case L:te=!0}}if(te)return te=h,Z=Z(te),h=C===""?"."+Ae(te,0):C,ie(Z)?(P="",h!=null&&(P=h.replace(en,"$&/")+"/"),Oe(Z,p,P,"",function(Je){return Je})):Z!=null&&(un(Z)&&(Z=dn(Z,P+(!Z.key||te&&te.key===Z.key?"":(""+Z.key).replace(en,"$&/")+"/")+h)),p.push(Z)),1;if(te=0,C=C===""?".":C+":",ie(h))for(var q=0;q<h.length;q++){J=h[q];var ue=C+Ae(J,q);te+=Oe(J,p,P,ue,Z)}else if(ue=Q(h),typeof ue=="function")for(h=ue.call(h),q=0;!(J=h.next()).done;)J=J.value,ue=C+Ae(J,q++),te+=Oe(J,p,P,ue,Z);else if(J==="object")throw p=String(h),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.");return te}function Ze(h,p,P){if(h==null)return h;var C=[],Z=0;return Oe(h,C,"","",function(J){return p.call(P,J,Z++)}),C}function R(h){if(h._status===-1){var p=h._result;p=p(),p.then(function(P){(h._status===0||h._status===-1)&&(h._status=1,h._result=P)},function(P){(h._status===0||h._status===-1)&&(h._status=2,h._result=P)}),h._status===-1&&(h._status=0,h._result=p)}if(h._status===1)return h._result.default;throw h._result}var B={current:null},k={transition:null},G={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:k,ReactCurrentOwner:ye};function E(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:Ze,forEach:function(h,p,P){Ze(h,function(){p.apply(this,arguments)},P)},count:function(h){var p=0;return Ze(h,function(){p++}),p},toArray:function(h){return Ze(h,function(p){return p})||[]},only:function(h){if(!un(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},K.Component=j,K.Fragment=f,K.Profiler=T,K.PureComponent=we,K.StrictMode=X,K.Suspense=_,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,K.act=E,K.cloneElement=function(h,p,P){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var C=I({},h.props),Z=h.key,J=h.ref,te=h._owner;if(p!=null){if(p.ref!==void 0&&(J=p.ref,te=ye.current),p.key!==void 0&&(Z=""+p.key),h.type&&h.type.defaultProps)var q=h.type.defaultProps;for(ue in p)Te.call(p,ue)&&!Le.hasOwnProperty(ue)&&(C[ue]=p[ue]===void 0&&q!==void 0?q[ue]:p[ue])}var ue=arguments.length-2;if(ue===1)C.children=P;else if(1<ue){q=Array(ue);for(var Je=0;Je<ue;Je++)q[Je]=arguments[Je+2];C.children=q}return{$$typeof:D,type:h.type,key:Z,ref:J,props:C,_owner:te}},K.createContext=function(h){return h={$$typeof:A,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:F,_context:h},h.Consumer=h},K.createElement=Ie,K.createFactory=function(h){var p=Ie.bind(null,h);return p.type=h,p},K.createRef=function(){return{current:null}},K.forwardRef=function(h){return{$$typeof:se,render:h}},K.isValidElement=un,K.lazy=function(h){return{$$typeof:ne,_payload:{_status:-1,_result:h},_init:R}},K.memo=function(h,p){return{$$typeof:me,type:h,compare:p===void 0?null:p}},K.startTransition=function(h){var p=k.transition;k.transition={};try{h()}finally{k.transition=p}},K.unstable_act=E,K.useCallback=function(h,p){return B.current.useCallback(h,p)},K.useContext=function(h){return B.current.useContext(h)},K.useDebugValue=function(){},K.useDeferredValue=function(h){return B.current.useDeferredValue(h)},K.useEffect=function(h,p){return B.current.useEffect(h,p)},K.useId=function(){return B.current.useId()},K.useImperativeHandle=function(h,p,P){return B.current.useImperativeHandle(h,p,P)},K.useInsertionEffect=function(h,p){return B.current.useInsertionEffect(h,p)},K.useLayoutEffect=function(h,p){return B.current.useLayoutEffect(h,p)},K.useMemo=function(h,p){return B.current.useMemo(h,p)},K.useReducer=function(h,p,P){return B.current.useReducer(h,p,P)},K.useRef=function(h){return B.current.useRef(h)},K.useState=function(h){return B.current.useState(h)},K.useSyncExternalStore=function(h,p,P){return B.current.useSyncExternalStore(h,p,P)},K.useTransition=function(){return B.current.useTransition()},K.version="18.3.1",K}var Hu;function Fs(){return Hu||(Hu=1,Es.exports=Ao()),Es.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function No(){if(Lu)return St;Lu=1;var D=Fs(),L=Symbol.for("react.element"),f=Symbol.for("react.fragment"),X=Object.prototype.hasOwnProperty,T=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function A(se,_,me){var ne,Y={},Q=null,Me=null;me!==void 0&&(Q=""+me),_.key!==void 0&&(Q=""+_.key),_.ref!==void 0&&(Me=_.ref);for(ne in _)X.call(_,ne)&&!F.hasOwnProperty(ne)&&(Y[ne]=_[ne]);if(se&&se.defaultProps)for(ne in _=se.defaultProps,_)Y[ne]===void 0&&(Y[ne]=_[ne]);return{$$typeof:L,type:se,key:Q,ref:Me,props:Y,_owner:T.current}}return St.Fragment=f,St.jsx=A,St.jsxs=A,St}var Fu;function Ro(){return Fu||(Fu=1,ys.exports=No()),ys.exports}var b=Ro(),le=Fs(),Fr={},Ws={exports:{}},Ve={},Ms={exports:{}},Hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu;function Bo(){return Gu||(Gu=1,function(D){function L(k,G){var E=k.length;k.push(G);e:for(;0<E;){var h=E-1>>>1,p=k[h];if(0<T(p,G))k[h]=G,k[E]=p,E=h;else break e}}function f(k){return k.length===0?null:k[0]}function X(k){if(k.length===0)return null;var G=k[0],E=k.pop();if(E!==G){k[0]=E;e:for(var h=0,p=k.length,P=p>>>1;h<P;){var C=2*(h+1)-1,Z=k[C],J=C+1,te=k[J];if(0>T(Z,E))J<p&&0>T(te,Z)?(k[h]=te,k[J]=E,h=J):(k[h]=Z,k[C]=E,h=C);else if(J<p&&0>T(te,E))k[h]=te,k[J]=E,h=J;else break e}}return G}function T(k,G){var E=k.sortIndex-G.sortIndex;return E!==0?E:k.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var F=performance;D.unstable_now=function(){return F.now()}}else{var A=Date,se=A.now();D.unstable_now=function(){return A.now()-se}}var _=[],me=[],ne=1,Y=null,Q=3,Me=!1,I=!1,V=!1,j=typeof setTimeout=="function"?setTimeout:null,He=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Be(k){for(var G=f(me);G!==null;){if(G.callback===null)X(me);else if(G.startTime<=k)X(me),G.sortIndex=G.expirationTime,L(_,G);else break;G=f(me)}}function ie(k){if(V=!1,Be(k),!I)if(f(_)!==null)I=!0,R(Te);else{var G=f(me);G!==null&&B(ie,G.startTime-k)}}function Te(k,G){I=!1,V&&(V=!1,He(Ie),Ie=-1),Me=!0;var E=Q;try{for(Be(G),Y=f(_);Y!==null&&(!(Y.expirationTime>G)||k&&!wn());){var h=Y.callback;if(typeof h=="function"){Y.callback=null,Q=Y.priorityLevel;var p=h(Y.expirationTime<=G);G=D.unstable_now(),typeof p=="function"?Y.callback=p:Y===f(_)&&X(_),Be(G)}else X(_);Y=f(_)}if(Y!==null)var P=!0;else{var C=f(me);C!==null&&B(ie,C.startTime-G),P=!1}return P}finally{Y=null,Q=E,Me=!1}}var ye=!1,Le=null,Ie=-1,dn=5,un=-1;function wn(){return!(D.unstable_now()-un<dn)}function en(){if(Le!==null){var k=D.unstable_now();un=k;var G=!0;try{G=Le(!0,k)}finally{G?Ae():(ye=!1,Le=null)}}else ye=!1}var Ae;if(typeof we=="function")Ae=function(){we(en)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ze=Oe.port2;Oe.port1.onmessage=en,Ae=function(){Ze.postMessage(null)}}else Ae=function(){j(en,0)};function R(k){Le=k,ye||(ye=!0,Ae())}function B(k,G){Ie=j(function(){k(D.unstable_now())},G)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(k){k.callback=null},D.unstable_continueExecution=function(){I||Me||(I=!0,R(Te))},D.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):dn=0<k?Math.floor(1e3/k):5},D.unstable_getCurrentPriorityLevel=function(){return Q},D.unstable_getFirstCallbackNode=function(){return f(_)},D.unstable_next=function(k){switch(Q){case 1:case 2:case 3:var G=3;break;default:G=Q}var E=Q;Q=G;try{return k()}finally{Q=E}},D.unstable_pauseExecution=function(){},D.unstable_requestPaint=function(){},D.unstable_runWithPriority=function(k,G){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var E=Q;Q=k;try{return G()}finally{Q=E}},D.unstable_scheduleCallback=function(k,G,E){var h=D.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?h+E:h):E=h,k){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=E+p,k={id:ne++,callback:G,priorityLevel:k,startTime:E,expirationTime:p,sortIndex:-1},E>h?(k.sortIndex=E,L(me,k),f(_)===null&&k===f(me)&&(V?(He(Ie),Ie=-1):V=!0,B(ie,E-h))):(k.sortIndex=p,L(_,k),I||Me||(I=!0,R(Te))),k},D.unstable_shouldYield=wn,D.unstable_wrapCallback=function(k){var G=Q;return function(){var E=Q;Q=G;try{return k.apply(this,arguments)}finally{Q=E}}}}(Hs)),Hs}var xu;function Io(){return xu||(xu=1,Ms.exports=Bo()),Ms.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function Po(){if(Uu)return Ve;Uu=1;var D=Fs(),L=Io();function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X=new Set,T={};function F(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(T[e]=n,e=0;e<n.length;e++)X.add(n[e])}var se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,me=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ne={},Y={};function Q(e){return _.call(Y,e)?!0:_.call(ne,e)?!1:me.test(e)?Y[e]=!0:(ne[e]=!0,!1)}function Me(e,n,i,t){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,n,i,t){if(n===null||typeof n>"u"||Me(e,n,i,t))return!0;if(t)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function V(e,n,i,t,r,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];j[n]=new V(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){j[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){j[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){j[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){j[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var He=/[\-:]([a-z])/g;function we(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(He,we);j[n]=new V(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(He,we);j[n]=new V(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(He,we);j[n]=new V(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){j[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),j.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){j[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function Be(e,n,i,t){var r=j.hasOwnProperty(n)?j[n]:null;(r!==null?r.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(I(n,i,r,t)&&(i=null),t||r===null?Q(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):r.mustUseProperty?e[r.propertyName]=i===null?r.type===3?!1:"":i:(n=r.attributeName,t=r.attributeNamespace,i===null?e.removeAttribute(n):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,t?e.setAttributeNS(t,n,i):e.setAttribute(n,i))))}var ie=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),ye=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),dn=Symbol.for("react.profiler"),un=Symbol.for("react.provider"),wn=Symbol.for("react.context"),en=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),k=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,h;function p(e){if(h===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);h=n&&n[1]||""}return`
`+h+e}var P=!1;function C(e,n){if(!e||P)return"";P=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(m){var t=m}Reflect.construct(e,[],n)}else{try{n.call()}catch(m){t=m}e.call(n.prototype)}else{try{throw Error()}catch(m){t=m}e()}}catch(m){if(m&&t&&typeof m.stack=="string"){for(var r=m.stack.split(`
`),l=t.stack.split(`
`),s=r.length-1,a=l.length-1;1<=s&&0<=a&&r[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==l[a]){var d=`
`+r[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=a);break}}}finally{P=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?p(e):""}function Z(e){switch(e.tag){case 5:return p(e.type);case 16:return p("Lazy");case 13:return p("Suspense");case 19:return p("SuspenseList");case 0:case 2:case 15:return e=C(e.type,!1),e;case 11:return e=C(e.type.render,!1),e;case 1:return e=C(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case ye:return"Portal";case dn:return"Profiler";case Ie:return"StrictMode";case Ae:return"Suspense";case Oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wn:return(e.displayName||"Context")+".Consumer";case un:return(e._context.displayName||"Context")+".Provider";case en:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return n=e.displayName||null,n!==null?n:J(e.type)||"Memo";case R:n=e._payload,e=e._init;try{return J(e(n))}catch{}}return null}function te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(n);case 8:return n===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=ue(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,l=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kt(e){e._valueTracker||(e._valueTracker=Je(e))}function Us(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),t="";return e&&(t=ue(e)?e.checked?"true":"false":e.value),e=t,e!==i?(n.setValue(e),!0):!1}function bt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gr(e,n){var i=n.checked;return E({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ts(e,n){var i=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;i=q(n.value!=null?n.value:i),e._wrapperState={initialChecked:t,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function As(e,n){n=n.checked,n!=null&&Be(e,"checked",n,!1)}function xr(e,n){As(e,n);var i=q(n.value),t=n.type;if(i!=null)t==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ur(e,n.type,i):n.hasOwnProperty("defaultValue")&&Ur(e,n.type,q(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ns(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ur(e,n,i){(n!=="number"||bt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ti=Array.isArray;function ui(e,n,i,t){if(e=e.options,n){n={};for(var r=0;r<i.length;r++)n["$"+i[r]]=!0;for(i=0;i<e.length;i++)r=n.hasOwnProperty("$"+e[i].value),e[i].selected!==r&&(e[i].selected=r),r&&t&&(e[i].defaultSelected=!0)}else{for(i=""+q(i),n=null,r=0;r<e.length;r++){if(e[r].value===i){e[r].selected=!0,t&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Tr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(f(91));return E({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(f(92));if(Ti(i)){if(1<i.length)throw Error(f(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:q(i)}}function Bs(e,n){var i=q(n.value),t=q(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),t!=null&&(e.defaultValue=""+t)}function Is(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ar(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ps(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zt,Ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,t,r){MSApp.execUnsafeLocalFunction(function(){return e(n,i,t,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(zt=zt||document.createElement("div"),zt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ai(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(e){Iu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ni[n]=Ni[e]})});function js(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ni.hasOwnProperty(e)&&Ni[e]?(""+n).trim():n+"px"}function Cs(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var t=i.indexOf("--")===0,r=js(i,n[i],t);i==="float"&&(i="cssFloat"),t?e.setProperty(i,r):e[i]=r}}var Pu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nr(e,n){if(n){if(Pu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(f(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(f(61))}if(n.style!=null&&typeof n.style!="object")throw Error(f(62))}}function Rr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Br=null;function Ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,hi=null,oi=null;function _s(e){if(e=rt(e)){if(typeof Pr!="function")throw Error(f(280));var n=e.stateNode;n&&(n=Vt(n),Pr(e.stateNode,e.type,n))}}function Vs(e){hi?oi?oi.push(e):oi=[e]:hi=e}function Os(){if(hi){var e=hi,n=oi;if(oi=hi=null,_s(e),n)for(e=0;e<n.length;e++)_s(n[e])}}function Zs(e,n){return e(n)}function Js(){}var Kr=!1;function $s(e,n,i){if(Kr)return e(n,i);Kr=!0;try{return Zs(e,n,i)}finally{Kr=!1,(hi!==null||oi!==null)&&(Js(),Os())}}function Ri(e,n){var i=e.stateNode;if(i===null)return null;var t=Vt(i);if(t===null)return null;i=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(f(231,n,typeof i));return i}var jr=!1;if(se)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){jr=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{jr=!1}function Ku(e,n,i,t,r,l,s,a,d){var m=Array.prototype.slice.call(arguments,3);try{n.apply(i,m)}catch(w){this.onError(w)}}var Ii=!1,Dt=null,yt=!1,Cr=null,ju={onError:function(e){Ii=!0,Dt=e}};function Cu(e,n,i,t,r,l,s,a,d){Ii=!1,Dt=null,Ku.apply(ju,arguments)}function _u(e,n,i,t,r,l,s,a,d){if(Cu.apply(this,arguments),Ii){if(Ii){var m=Dt;Ii=!1,Dt=null}else throw Error(f(198));yt||(yt=!0,Cr=m)}}function Qn(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Qs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Xs(e){if(Qn(e)!==e)throw Error(f(188))}function Vu(e){var n=e.alternate;if(!n){if(n=Qn(e),n===null)throw Error(f(188));return n!==e?null:e}for(var i=e,t=n;;){var r=i.return;if(r===null)break;var l=r.alternate;if(l===null){if(t=r.return,t!==null){i=t;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===i)return Xs(r),e;if(l===t)return Xs(r),n;l=l.sibling}throw Error(f(188))}if(i.return!==t.return)i=r,t=l;else{for(var s=!1,a=r.child;a;){if(a===i){s=!0,i=r,t=l;break}if(a===t){s=!0,t=r,i=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===i){s=!0,i=l,t=r;break}if(a===t){s=!0,t=l,i=r;break}a=a.sibling}if(!s)throw Error(f(189))}}if(i.alternate!==t)throw Error(f(190))}if(i.tag!==3)throw Error(f(188));return i.stateNode.current===i?e:n}function Ys(e){return e=Vu(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=qs(e);if(n!==null)return n;e=e.sibling}return null}var ea=L.unstable_scheduleCallback,na=L.unstable_cancelCallback,Ou=L.unstable_shouldYield,Zu=L.unstable_requestPaint,ge=L.unstable_now,Ju=L.unstable_getCurrentPriorityLevel,_r=L.unstable_ImmediatePriority,ia=L.unstable_UserBlockingPriority,Et=L.unstable_NormalPriority,$u=L.unstable_LowPriority,ta=L.unstable_IdlePriority,Wt=null,vn=null;function Qu(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Wt,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:qu,Xu=Math.log,Yu=Math.LN2;function qu(e){return e>>>=0,e===0?32:31-(Xu(e)/Yu|0)|0}var Mt=64,Ht=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lt(e,n){var i=e.pendingLanes;if(i===0)return 0;var t=0,r=e.suspendedLanes,l=e.pingedLanes,s=i&268435455;if(s!==0){var a=s&~r;a!==0?t=Pi(a):(l&=s,l!==0&&(t=Pi(l)))}else s=i&~r,s!==0?t=Pi(s):l!==0&&(t=Pi(l));if(t===0)return 0;if(n!==0&&n!==t&&!(n&r)&&(r=t&-t,l=n&-n,r>=l||r===16&&(l&4194240)!==0))return n;if(t&4&&(t|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)i=31-hn(n),r=1<<i,t|=e[i],n&=~r;return t}function eh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nh(e,n){for(var i=e.suspendedLanes,t=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-hn(l),a=1<<s,d=r[s];d===-1?(!(a&i)||a&t)&&(r[s]=eh(a,n)):d<=n&&(e.expiredLanes|=a),l&=~a}}function Vr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ra(){var e=Mt;return Mt<<=1,!(Mt&4194240)&&(Mt=64),e}function Or(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ki(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-hn(n),e[n]=i}function ih(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<i;){var r=31-hn(i),l=1<<r;n[r]=0,t[r]=-1,e[r]=-1,i&=~l}}function Zr(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var t=31-hn(i),r=1<<t;r&n|e[t]&n&&(e[t]|=n),i&=~r}}var ee=0;function la(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sa,Jr,aa,da,ua,$r=!1,Ft=[],Gn=null,xn=null,Un=null,ji=new Map,Ci=new Map,Tn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":ji.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(n.pointerId)}}function _i(e,n,i,t,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:i,eventSystemFlags:t,nativeEvent:l,targetContainers:[r]},n!==null&&(n=rt(n),n!==null&&Jr(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function rh(e,n,i,t,r){switch(n){case"focusin":return Gn=_i(Gn,e,n,i,t,r),!0;case"dragenter":return xn=_i(xn,e,n,i,t,r),!0;case"mouseover":return Un=_i(Un,e,n,i,t,r),!0;case"pointerover":var l=r.pointerId;return ji.set(l,_i(ji.get(l)||null,e,n,i,t,r)),!0;case"gotpointercapture":return l=r.pointerId,Ci.set(l,_i(Ci.get(l)||null,e,n,i,t,r)),!0}return!1}function oa(e){var n=Xn(e.target);if(n!==null){var i=Qn(n);if(i!==null){if(n=i.tag,n===13){if(n=Qs(i),n!==null){e.blockedOn=n,ua(e.priority,function(){aa(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Xr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var t=new i.constructor(i.type,i);Br=t,i.target.dispatchEvent(t),Br=null}else return n=rt(i),n!==null&&Jr(n),e.blockedOn=i,!1;n.shift()}return!0}function ca(e,n,i){Gt(e)&&i.delete(n)}function lh(){$r=!1,Gn!==null&&Gt(Gn)&&(Gn=null),xn!==null&&Gt(xn)&&(xn=null),Un!==null&&Gt(Un)&&(Un=null),ji.forEach(ca),Ci.forEach(ca)}function Vi(e,n){e.blockedOn===n&&(e.blockedOn=null,$r||($r=!0,L.unstable_scheduleCallback(L.unstable_NormalPriority,lh)))}function Oi(e){function n(r){return Vi(r,e)}if(0<Ft.length){Vi(Ft[0],e);for(var i=1;i<Ft.length;i++){var t=Ft[i];t.blockedOn===e&&(t.blockedOn=null)}}for(Gn!==null&&Vi(Gn,e),xn!==null&&Vi(xn,e),Un!==null&&Vi(Un,e),ji.forEach(n),Ci.forEach(n),i=0;i<Tn.length;i++)t=Tn[i],t.blockedOn===e&&(t.blockedOn=null);for(;0<Tn.length&&(i=Tn[0],i.blockedOn===null);)oa(i),i.blockedOn===null&&Tn.shift()}var ci=ie.ReactCurrentBatchConfig,xt=!0;function sh(e,n,i,t){var r=ee,l=ci.transition;ci.transition=null;try{ee=1,Qr(e,n,i,t)}finally{ee=r,ci.transition=l}}function ah(e,n,i,t){var r=ee,l=ci.transition;ci.transition=null;try{ee=4,Qr(e,n,i,t)}finally{ee=r,ci.transition=l}}function Qr(e,n,i,t){if(xt){var r=Xr(e,n,i,t);if(r===null)fl(e,n,t,Ut,i),ha(e,t);else if(rh(r,e,n,i,t))t.stopPropagation();else if(ha(e,t),n&4&&-1<th.indexOf(e)){for(;r!==null;){var l=rt(r);if(l!==null&&sa(l),l=Xr(e,n,i,t),l===null&&fl(e,n,t,Ut,i),l===r)break;r=l}r!==null&&t.stopPropagation()}else fl(e,n,t,null,i)}}var Ut=null;function Xr(e,n,i,t){if(Ut=null,e=Ir(t),e=Xn(e),e!==null)if(n=Qn(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Qs(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ut=e,null}function ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ju()){case _r:return 1;case ia:return 4;case Et:case $u:return 16;case ta:return 536870912;default:return 16}default:return 16}}var An=null,Yr=null,Tt=null;function fa(){if(Tt)return Tt;var e,n=Yr,i=n.length,t,r="value"in An?An.value:An.textContent,l=r.length;for(e=0;e<i&&n[e]===r[e];e++);var s=i-e;for(t=1;t<=s&&n[i-t]===r[l-t];t++);return Tt=r.slice(e,1<t?1-t:void 0)}function At(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nt(){return!0}function ga(){return!1}function $e(e){function n(i,t,r,l,s){this._reactName=i,this._targetInst=r,this.type=t,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(i=e[a],this[a]=i?i(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nt:ga,this.isPropagationStopped=ga,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Nt)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Nt)},persist:function(){},isPersistent:Nt}),n}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qr=$e(mi),Zi=E({},mi,{view:0,detail:0}),dh=$e(Zi),el,nl,Ji,Rt=E({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(el=e.screenX-Ji.screenX,nl=e.screenY-Ji.screenY):nl=el=0,Ji=e),el)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),pa=$e(Rt),uh=E({},Rt,{dataTransfer:0}),hh=$e(uh),oh=E({},Zi,{relatedTarget:0}),il=$e(oh),ch=E({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=$e(ch),fh=E({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=$e(fh),ph=E({},mi,{data:0}),wa=$e(ph),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sh[e])?!!n[e]:!1}function tl(){return kh}var bh=E({},Zi,{key:function(e){if(e.key){var n=wh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=At(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?At(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?At(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=$e(bh),Dh=E({},Rt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),va=$e(Dh),yh=E({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Eh=$e(yh),Wh=E({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mh=$e(Wh),Hh=E({},Rt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=$e(Hh),Fh=[9,13,27,32],rl=se&&"CompositionEvent"in window,$i=null;se&&"documentMode"in document&&($i=document.documentMode);var Gh=se&&"TextEvent"in window&&!$i,Sa=se&&(!rl||$i&&8<$i&&11>=$i),ka=" ",ba=!1;function za(e,n){switch(e){case"keyup":return Fh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function xh(e,n){switch(e){case"compositionend":return Da(n);case"keypress":return n.which!==32?null:(ba=!0,ka);case"textInput":return e=n.data,e===ka&&ba?null:e;default:return null}}function Uh(e,n){if(fi)return e==="compositionend"||!rl&&za(e,n)?(e=fa(),Tt=Yr=An=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sa&&n.locale!=="ko"?null:n.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ya(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Th[e.type]:n==="textarea"}function Ea(e,n,i,t){Vs(t),n=jt(n,"onChange"),0<n.length&&(i=new qr("onChange","change",null,i,t),e.push({event:i,listeners:n}))}var Qi=null,Xi=null;function Ah(e){Ca(e,0)}function Bt(e){var n=Si(e);if(Us(n))return e}function Nh(e,n){if(e==="change")return n}var Wa=!1;if(se){var ll;if(se){var sl="oninput"in document;if(!sl){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),sl=typeof Ma.oninput=="function"}ll=sl}else ll=!1;Wa=ll&&(!document.documentMode||9<document.documentMode)}function Ha(){Qi&&(Qi.detachEvent("onpropertychange",La),Xi=Qi=null)}function La(e){if(e.propertyName==="value"&&Bt(Xi)){var n=[];Ea(n,Xi,e,Ir(e)),$s(Ah,n)}}function Rh(e,n,i){e==="focusin"?(Ha(),Qi=n,Xi=i,Qi.attachEvent("onpropertychange",La)):e==="focusout"&&Ha()}function Bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bt(Xi)}function Ih(e,n){if(e==="click")return Bt(n)}function Ph(e,n){if(e==="input"||e==="change")return Bt(n)}function Kh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:Kh;function Yi(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),t=Object.keys(n);if(i.length!==t.length)return!1;for(t=0;t<i.length;t++){var r=i[t];if(!_.call(n,r)||!on(e[r],n[r]))return!1}return!0}function Fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ga(e,n){var i=Fa(e);e=0;for(var t;i;){if(i.nodeType===3){if(t=e+i.textContent.length,e<=n&&t>=n)return{node:i,offset:n-e};e=t}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Fa(i)}}function xa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ua(){for(var e=window,n=bt();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=bt(e.document)}return n}function al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jh(e){var n=Ua(),i=e.focusedElem,t=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&xa(i.ownerDocument.documentElement,i)){if(t!==null&&al(i)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=i.textContent.length,l=Math.min(t.start,r);t=t.end===void 0?l:Math.min(t.end,r),!e.extend&&l>t&&(r=t,t=l,l=r),r=Ga(i,l);var s=Ga(i,t);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),l>t?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=se&&"documentMode"in document&&11>=document.documentMode,gi=null,dl=null,qi=null,ul=!1;function Ta(e,n,i){var t=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ul||gi==null||gi!==bt(t)||(t=gi,"selectionStart"in t&&al(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),qi&&Yi(qi,t)||(qi=t,t=jt(dl,"onSelect"),0<t.length&&(n=new qr("onSelect","select",null,n,i),e.push({event:n,listeners:t}),n.target=gi)))}function It(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var pi={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionend:It("Transition","TransitionEnd")},hl={},Aa={};se&&(Aa=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Pt(e){if(hl[e])return hl[e];if(!pi[e])return e;var n=pi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Aa)return hl[e]=n[i];return e}var Na=Pt("animationend"),Ra=Pt("animationiteration"),Ba=Pt("animationstart"),Ia=Pt("transitionend"),Pa=new Map,Ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,n){Pa.set(e,n),F(n,[e])}for(var ol=0;ol<Ka.length;ol++){var cl=Ka[ol],_h=cl.toLowerCase(),Vh=cl[0].toUpperCase()+cl.slice(1);Nn(_h,"on"+Vh)}Nn(Na,"onAnimationEnd"),Nn(Ra,"onAnimationIteration"),Nn(Ba,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Ia,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),F("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),F("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),F("onBeforeInput",["compositionend","keypress","textInput","paste"]),F("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oh=new Set("cancel close invalid load scroll toggle".split(" ").concat(et));function ja(e,n,i){var t=e.type||"unknown-event";e.currentTarget=i,_u(t,n,void 0,e),e.currentTarget=null}function Ca(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var t=e[i],r=t.event;t=t.listeners;e:{var l=void 0;if(n)for(var s=t.length-1;0<=s;s--){var a=t[s],d=a.instance,m=a.currentTarget;if(a=a.listener,d!==l&&r.isPropagationStopped())break e;ja(r,a,m),l=d}else for(s=0;s<t.length;s++){if(a=t[s],d=a.instance,m=a.currentTarget,a=a.listener,d!==l&&r.isPropagationStopped())break e;ja(r,a,m),l=d}}}if(yt)throw e=Cr,yt=!1,Cr=null,e}function ae(e,n){var i=n[kl];i===void 0&&(i=n[kl]=new Set);var t=e+"__bubble";i.has(t)||(_a(n,e,2,!1),i.add(t))}function ml(e,n,i){var t=0;n&&(t|=4),_a(i,e,t,n)}var Kt="_reactListening"+Math.random().toString(36).slice(2);function nt(e){if(!e[Kt]){e[Kt]=!0,X.forEach(function(i){i!=="selectionchange"&&(Oh.has(i)||ml(i,!1,e),ml(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kt]||(n[Kt]=!0,ml("selectionchange",!1,n))}}function _a(e,n,i,t){switch(ma(n)){case 1:var r=sh;break;case 4:r=ah;break;default:r=Qr}i=r.bind(null,n,i,e),r=void 0,!jr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),t?r!==void 0?e.addEventListener(n,i,{capture:!0,passive:r}):e.addEventListener(n,i,!0):r!==void 0?e.addEventListener(n,i,{passive:r}):e.addEventListener(n,i,!1)}function fl(e,n,i,t,r){var l=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var a=t.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=t.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Xn(a),s===null)return;if(d=s.tag,d===5||d===6){t=l=s;continue e}a=a.parentNode}}t=t.return}$s(function(){var m=l,w=Ir(i),v=[];e:{var g=Pa.get(e);if(g!==void 0){var z=qr,W=e;switch(e){case"keypress":if(At(i)===0)break e;case"keydown":case"keyup":z=zh;break;case"focusin":W="focus",z=il;break;case"focusout":W="blur",z=il;break;case"beforeblur":case"afterblur":z=il;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Eh;break;case Na:case Ra:case Ba:z=mh;break;case Ia:z=Mh;break;case"scroll":z=dh;break;case"wheel":z=Lh;break;case"copy":case"cut":case"paste":z=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=va}var M=(n&4)!==0,pe=!M&&e==="scroll",o=M?g!==null?g+"Capture":null:g;M=[];for(var u=m,c;u!==null;){c=u;var S=c.stateNode;if(c.tag===5&&S!==null&&(c=S,o!==null&&(S=Ri(u,o),S!=null&&M.push(it(u,S,c)))),pe)break;u=u.return}0<M.length&&(g=new z(g,W,null,i,w),v.push({event:g,listeners:M}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",g&&i!==Br&&(W=i.relatedTarget||i.fromElement)&&(Xn(W)||W[Dn]))break e;if((z||g)&&(g=w.window===w?w:(g=w.ownerDocument)?g.defaultView||g.parentWindow:window,z?(W=i.relatedTarget||i.toElement,z=m,W=W?Xn(W):null,W!==null&&(pe=Qn(W),W!==pe||W.tag!==5&&W.tag!==6)&&(W=null)):(z=null,W=m),z!==W)){if(M=pa,S="onMouseLeave",o="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(M=va,S="onPointerLeave",o="onPointerEnter",u="pointer"),pe=z==null?g:Si(z),c=W==null?g:Si(W),g=new M(S,u+"leave",z,i,w),g.target=pe,g.relatedTarget=c,S=null,Xn(w)===m&&(M=new M(o,u+"enter",W,i,w),M.target=c,M.relatedTarget=pe,S=M),pe=S,z&&W)n:{for(M=z,o=W,u=0,c=M;c;c=wi(c))u++;for(c=0,S=o;S;S=wi(S))c++;for(;0<u-c;)M=wi(M),u--;for(;0<c-u;)o=wi(o),c--;for(;u--;){if(M===o||o!==null&&M===o.alternate)break n;M=wi(M),o=wi(o)}M=null}else M=null;z!==null&&Va(v,g,z,M,!1),W!==null&&pe!==null&&Va(v,pe,W,M,!0)}}e:{if(g=m?Si(m):window,z=g.nodeName&&g.nodeName.toLowerCase(),z==="select"||z==="input"&&g.type==="file")var H=Nh;else if(ya(g))if(Wa)H=Ph;else{H=Bh;var x=Rh}else(z=g.nodeName)&&z.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(H=Ih);if(H&&(H=H(e,m))){Ea(v,H,i,w);break e}x&&x(e,g,m),e==="focusout"&&(x=g._wrapperState)&&x.controlled&&g.type==="number"&&Ur(g,"number",g.value)}switch(x=m?Si(m):window,e){case"focusin":(ya(x)||x.contentEditable==="true")&&(gi=x,dl=m,qi=null);break;case"focusout":qi=dl=gi=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Ta(v,i,w);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Ta(v,i,w)}var U;if(rl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else fi?za(e,i)&&(N="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(N="onCompositionStart");N&&(Sa&&i.locale!=="ko"&&(fi||N!=="onCompositionStart"?N==="onCompositionEnd"&&fi&&(U=fa()):(An=w,Yr="value"in An?An.value:An.textContent,fi=!0)),x=jt(m,N),0<x.length&&(N=new wa(N,e,null,i,w),v.push({event:N,listeners:x}),U?N.data=U:(U=Da(i),U!==null&&(N.data=U)))),(U=Gh?xh(e,i):Uh(e,i))&&(m=jt(m,"onBeforeInput"),0<m.length&&(w=new wa("onBeforeInput","beforeinput",null,i,w),v.push({event:w,listeners:m}),w.data=U))}Ca(v,n)})}function it(e,n,i){return{instance:e,listener:n,currentTarget:i}}function jt(e,n){for(var i=n+"Capture",t=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=Ri(e,i),l!=null&&t.unshift(it(e,l,r)),l=Ri(e,n),l!=null&&t.push(it(e,l,r))),e=e.return}return t}function wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,n,i,t,r){for(var l=n._reactName,s=[];i!==null&&i!==t;){var a=i,d=a.alternate,m=a.stateNode;if(d!==null&&d===t)break;a.tag===5&&m!==null&&(a=m,r?(d=Ri(i,l),d!=null&&s.unshift(it(i,d,a))):r||(d=Ri(i,l),d!=null&&s.push(it(i,d,a)))),i=i.return}s.length!==0&&e.push({event:n,listeners:s})}var Zh=/\r\n?/g,Jh=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(Jh,"")}function Ct(e,n,i){if(n=Oa(n),Oa(e)!==n&&i)throw Error(f(425))}function _t(){}var gl=null,pl=null;function wl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,Za=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Za<"u"?function(e){return Za.resolve(null).then(e).catch(Xh)}:vl;function Xh(e){setTimeout(function(){throw e})}function Sl(e,n){var i=n,t=0;do{var r=i.nextSibling;if(e.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0){e.removeChild(r),Oi(n);return}t--}else i!=="$"&&i!=="$?"&&i!=="$!"||t++;i=r}while(i);Oi(n)}function Rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var vi=Math.random().toString(36).slice(2),Sn="__reactFiber$"+vi,tt="__reactProps$"+vi,Dn="__reactContainer$"+vi,kl="__reactEvents$"+vi,Yh="__reactListeners$"+vi,qh="__reactHandles$"+vi;function Xn(e){var n=e[Sn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Dn]||i[Sn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Ja(e);e!==null;){if(i=e[Sn])return i;e=Ja(e)}return n}e=i,i=e.parentNode}return null}function rt(e){return e=e[Sn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function Vt(e){return e[tt]||null}var bl=[],ki=-1;function Bn(e){return{current:e}}function de(e){0>ki||(e.current=bl[ki],bl[ki]=null,ki--)}function re(e,n){ki++,bl[ki]=e.current,e.current=n}var In={},Fe=Bn(In),Pe=Bn(!1),Yn=In;function bi(e,n){var i=e.type.contextTypes;if(!i)return In;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in i)r[l]=n[l];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ke(e){return e=e.childContextTypes,e!=null}function Ot(){de(Pe),de(Fe)}function $a(e,n,i){if(Fe.current!==In)throw Error(f(168));re(Fe,n),re(Pe,i)}function Qa(e,n,i){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return i;t=t.getChildContext();for(var r in t)if(!(r in n))throw Error(f(108,te(e)||"Unknown",r));return E({},i,t)}function Zt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Yn=Fe.current,re(Fe,e),re(Pe,Pe.current),!0}function Xa(e,n,i){var t=e.stateNode;if(!t)throw Error(f(169));i?(e=Qa(e,n,Yn),t.__reactInternalMemoizedMergedChildContext=e,de(Pe),de(Fe),re(Fe,e)):de(Pe),re(Pe,i)}var yn=null,Jt=!1,zl=!1;function Ya(e){yn===null?yn=[e]:yn.push(e)}function eo(e){Jt=!0,Ya(e)}function Pn(){if(!zl&&yn!==null){zl=!0;var e=0,n=ee;try{var i=yn;for(ee=1;e<i.length;e++){var t=i[e];do t=t(!0);while(t!==null)}yn=null,Jt=!1}catch(r){throw yn!==null&&(yn=yn.slice(e+1)),ea(_r,Pn),r}finally{ee=n,zl=!1}}return null}var zi=[],Di=0,$t=null,Qt=0,nn=[],tn=0,qn=null,En=1,Wn="";function ei(e,n){zi[Di++]=Qt,zi[Di++]=$t,$t=e,Qt=n}function qa(e,n,i){nn[tn++]=En,nn[tn++]=Wn,nn[tn++]=qn,qn=e;var t=En;e=Wn;var r=32-hn(t)-1;t&=~(1<<r),i+=1;var l=32-hn(n)+r;if(30<l){var s=r-r%5;l=(t&(1<<s)-1).toString(32),t>>=s,r-=s,En=1<<32-hn(n)+r|i<<r|t,Wn=l+e}else En=1<<l|i<<r|t,Wn=e}function Dl(e){e.return!==null&&(ei(e,1),qa(e,1,0))}function yl(e){for(;e===$t;)$t=zi[--Di],zi[Di]=null,Qt=zi[--Di],zi[Di]=null;for(;e===qn;)qn=nn[--tn],nn[tn]=null,Wn=nn[--tn],nn[tn]=null,En=nn[--tn],nn[tn]=null}var Qe=null,Xe=null,he=!1,cn=null;function ed(e,n){var i=an(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function nd(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,Xe=Rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,Xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=qn!==null?{id:En,overflow:Wn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=an(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Qe=e,Xe=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(he){var n=Xe;if(n){var i=n;if(!nd(e,n)){if(El(e))throw Error(f(418));n=Rn(i.nextSibling);var t=Qe;n&&nd(e,n)?ed(t,i):(e.flags=e.flags&-4097|2,he=!1,Qe=e)}}else{if(El(e))throw Error(f(418));e.flags=e.flags&-4097|2,he=!1,Qe=e}}}function id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Xt(e){if(e!==Qe)return!1;if(!he)return id(e),he=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!wl(e.type,e.memoizedProps)),n&&(n=Xe)){if(El(e))throw td(),Error(f(418));for(;n;)ed(e,n),n=Rn(n.nextSibling)}if(id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Xe=Rn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Xe=null}}else Xe=Qe?Rn(e.stateNode.nextSibling):null;return!0}function td(){for(var e=Xe;e;)e=Rn(e.nextSibling)}function yi(){Xe=Qe=null,he=!1}function Ml(e){cn===null?cn=[e]:cn.push(e)}var no=ie.ReactCurrentBatchConfig;function lt(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(f(309));var t=i.stateNode}if(!t)throw Error(f(147,e));var r=t,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var a=r.refs;s===null?delete a[l]:a[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(f(284));if(!i._owner)throw Error(f(290,e))}return e}function Yt(e,n){throw e=Object.prototype.toString.call(n),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function rd(e){var n=e._init;return n(e._payload)}function ld(e){function n(o,u){if(e){var c=o.deletions;c===null?(o.deletions=[u],o.flags|=16):c.push(u)}}function i(o,u){if(!e)return null;for(;u!==null;)n(o,u),u=u.sibling;return null}function t(o,u){for(o=new Map;u!==null;)u.key!==null?o.set(u.key,u):o.set(u.index,u),u=u.sibling;return o}function r(o,u){return o=Jn(o,u),o.index=0,o.sibling=null,o}function l(o,u,c){return o.index=c,e?(c=o.alternate,c!==null?(c=c.index,c<u?(o.flags|=2,u):c):(o.flags|=2,u)):(o.flags|=1048576,u)}function s(o){return e&&o.alternate===null&&(o.flags|=2),o}function a(o,u,c,S){return u===null||u.tag!==6?(u=vs(c,o.mode,S),u.return=o,u):(u=r(u,c),u.return=o,u)}function d(o,u,c,S){var H=c.type;return H===Le?w(o,u,c.props.children,S,c.key):u!==null&&(u.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===R&&rd(H)===u.type)?(S=r(u,c.props),S.ref=lt(o,u,c),S.return=o,S):(S=zr(c.type,c.key,c.props,null,o.mode,S),S.ref=lt(o,u,c),S.return=o,S)}function m(o,u,c,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=Ss(c,o.mode,S),u.return=o,u):(u=r(u,c.children||[]),u.return=o,u)}function w(o,u,c,S,H){return u===null||u.tag!==7?(u=di(c,o.mode,S,H),u.return=o,u):(u=r(u,c),u.return=o,u)}function v(o,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=vs(""+u,o.mode,c),u.return=o,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Te:return c=zr(u.type,u.key,u.props,null,o.mode,c),c.ref=lt(o,null,u),c.return=o,c;case ye:return u=Ss(u,o.mode,c),u.return=o,u;case R:var S=u._init;return v(o,S(u._payload),c)}if(Ti(u)||G(u))return u=di(u,o.mode,c,null),u.return=o,u;Yt(o,u)}return null}function g(o,u,c,S){var H=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return H!==null?null:a(o,u,""+c,S);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Te:return c.key===H?d(o,u,c,S):null;case ye:return c.key===H?m(o,u,c,S):null;case R:return H=c._init,g(o,u,H(c._payload),S)}if(Ti(c)||G(c))return H!==null?null:w(o,u,c,S,null);Yt(o,c)}return null}function z(o,u,c,S,H){if(typeof S=="string"&&S!==""||typeof S=="number")return o=o.get(c)||null,a(u,o,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Te:return o=o.get(S.key===null?c:S.key)||null,d(u,o,S,H);case ye:return o=o.get(S.key===null?c:S.key)||null,m(u,o,S,H);case R:var x=S._init;return z(o,u,c,x(S._payload),H)}if(Ti(S)||G(S))return o=o.get(c)||null,w(u,o,S,H,null);Yt(u,S)}return null}function W(o,u,c,S){for(var H=null,x=null,U=u,N=u=0,De=null;U!==null&&N<c.length;N++){U.index>N?(De=U,U=null):De=U.sibling;var $=g(o,U,c[N],S);if($===null){U===null&&(U=De);break}e&&U&&$.alternate===null&&n(o,U),u=l($,u,N),x===null?H=$:x.sibling=$,x=$,U=De}if(N===c.length)return i(o,U),he&&ei(o,N),H;if(U===null){for(;N<c.length;N++)U=v(o,c[N],S),U!==null&&(u=l(U,u,N),x===null?H=U:x.sibling=U,x=U);return he&&ei(o,N),H}for(U=t(o,U);N<c.length;N++)De=z(U,o,N,c[N],S),De!==null&&(e&&De.alternate!==null&&U.delete(De.key===null?N:De.key),u=l(De,u,N),x===null?H=De:x.sibling=De,x=De);return e&&U.forEach(function($n){return n(o,$n)}),he&&ei(o,N),H}function M(o,u,c,S){var H=G(c);if(typeof H!="function")throw Error(f(150));if(c=H.call(c),c==null)throw Error(f(151));for(var x=H=null,U=u,N=u=0,De=null,$=c.next();U!==null&&!$.done;N++,$=c.next()){U.index>N?(De=U,U=null):De=U.sibling;var $n=g(o,U,$.value,S);if($n===null){U===null&&(U=De);break}e&&U&&$n.alternate===null&&n(o,U),u=l($n,u,N),x===null?H=$n:x.sibling=$n,x=$n,U=De}if($.done)return i(o,U),he&&ei(o,N),H;if(U===null){for(;!$.done;N++,$=c.next())$=v(o,$.value,S),$!==null&&(u=l($,u,N),x===null?H=$:x.sibling=$,x=$);return he&&ei(o,N),H}for(U=t(o,U);!$.done;N++,$=c.next())$=z(U,o,N,$.value,S),$!==null&&(e&&$.alternate!==null&&U.delete($.key===null?N:$.key),u=l($,u,N),x===null?H=$:x.sibling=$,x=$);return e&&U.forEach(function(To){return n(o,To)}),he&&ei(o,N),H}function pe(o,u,c,S){if(typeof c=="object"&&c!==null&&c.type===Le&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Te:e:{for(var H=c.key,x=u;x!==null;){if(x.key===H){if(H=c.type,H===Le){if(x.tag===7){i(o,x.sibling),u=r(x,c.props.children),u.return=o,o=u;break e}}else if(x.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===R&&rd(H)===x.type){i(o,x.sibling),u=r(x,c.props),u.ref=lt(o,x,c),u.return=o,o=u;break e}i(o,x);break}else n(o,x);x=x.sibling}c.type===Le?(u=di(c.props.children,o.mode,S,c.key),u.return=o,o=u):(S=zr(c.type,c.key,c.props,null,o.mode,S),S.ref=lt(o,u,c),S.return=o,o=S)}return s(o);case ye:e:{for(x=c.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){i(o,u.sibling),u=r(u,c.children||[]),u.return=o,o=u;break e}else{i(o,u);break}else n(o,u);u=u.sibling}u=Ss(c,o.mode,S),u.return=o,o=u}return s(o);case R:return x=c._init,pe(o,u,x(c._payload),S)}if(Ti(c))return W(o,u,c,S);if(G(c))return M(o,u,c,S);Yt(o,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(i(o,u.sibling),u=r(u,c),u.return=o,o=u):(i(o,u),u=vs(c,o.mode,S),u.return=o,o=u),s(o)):i(o,u)}return pe}var Ei=ld(!0),sd=ld(!1),qt=Bn(null),er=null,Wi=null,Hl=null;function Ll(){Hl=Wi=er=null}function Fl(e){var n=qt.current;de(qt),e._currentValue=n}function Gl(e,n,i){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===i)break;e=e.return}}function Mi(e,n){er=e,Hl=Wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(je=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:n,next:null},Wi===null){if(er===null)throw Error(f(308));Wi=e,er.dependencies={lanes:0,firstContext:e}}else Wi=Wi.next=e;return n}var ni=null;function xl(e){ni===null?ni=[e]:ni.push(e)}function ad(e,n,i,t){var r=n.interleaved;return r===null?(i.next=i,xl(n)):(i.next=r.next,r.next=i),n.interleaved=i,Mn(e,t)}function Mn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Kn=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,i){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,O&2){var r=t.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n,Mn(e,i)}return r=t.interleaved,r===null?(n.next=n,xl(t)):(n.next=r.next,r.next=n),t.interleaved=n,Mn(e,i)}function nr(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,i|=t,n.lanes=i,Zr(e,i)}}function ud(e,n){var i=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,i===t)){var r=null,l=null;if(i=i.firstBaseUpdate,i!==null){do{var s={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};l===null?r=l=s:l=l.next=s,i=i.next}while(i!==null);l===null?r=l=n:l=l.next=n}else r=l=n;i={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:t.shared,effects:t.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function ir(e,n,i,t){var r=e.updateQueue;Kn=!1;var l=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,m=d.next;d.next=null,s===null?l=m:s.next=m,s=d;var w=e.alternate;w!==null&&(w=w.updateQueue,a=w.lastBaseUpdate,a!==s&&(a===null?w.firstBaseUpdate=m:a.next=m,w.lastBaseUpdate=d))}if(l!==null){var v=r.baseState;s=0,w=m=d=null,a=l;do{var g=a.lane,z=a.eventTime;if((t&g)===g){w!==null&&(w=w.next={eventTime:z,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var W=e,M=a;switch(g=n,z=i,M.tag){case 1:if(W=M.payload,typeof W=="function"){v=W.call(z,v,g);break e}v=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=M.payload,g=typeof W=="function"?W.call(z,v,g):W,g==null)break e;v=E({},v,g);break e;case 2:Kn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[a]:g.push(a))}else z={eventTime:z,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},w===null?(m=w=z,d=v):w=w.next=z,s|=g;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;g=a,a=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(w===null&&(d=v),r.baseState=d,r.firstBaseUpdate=m,r.lastBaseUpdate=w,n=r.shared.interleaved,n!==null){r=n;do s|=r.lane,r=r.next;while(r!==n)}else l===null&&(r.shared.lanes=0);ri|=s,e.lanes=s,e.memoizedState=v}}function hd(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],r=t.callback;if(r!==null){if(t.callback=null,t=i,typeof r!="function")throw Error(f(191,r));r.call(t)}}}var st={},kn=Bn(st),at=Bn(st),dt=Bn(st);function ii(e){if(e===st)throw Error(f(174));return e}function Tl(e,n){switch(re(dt,n),re(at,e),re(kn,st),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ar(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ar(n,e)}de(kn),re(kn,n)}function Hi(){de(kn),de(at),de(dt)}function od(e){ii(dt.current);var n=ii(kn.current),i=Ar(n,e.type);n!==i&&(re(at,e),re(kn,i))}function Al(e){at.current===e&&(de(kn),de(at))}var oe=Bn(0);function tr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Nl=[];function Rl(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var rr=ie.ReactCurrentDispatcher,Bl=ie.ReactCurrentBatchConfig,ti=0,ce=null,Se=null,be=null,lr=!1,ut=!1,ht=0,io=0;function Ge(){throw Error(f(321))}function Il(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!on(e[i],n[i]))return!1;return!0}function Pl(e,n,i,t,r,l){if(ti=l,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rr.current=e===null||e.memoizedState===null?so:ao,e=i(t,r),ut){l=0;do{if(ut=!1,ht=0,25<=l)throw Error(f(301));l+=1,be=Se=null,n.updateQueue=null,rr.current=uo,e=i(t,r)}while(ut)}if(rr.current=dr,n=Se!==null&&Se.next!==null,ti=0,be=Se=ce=null,lr=!1,n)throw Error(f(300));return e}function Kl(){var e=ht!==0;return ht=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function ln(){if(Se===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=be===null?ce.memoizedState:be.next;if(n!==null)be=n,Se=e;else{if(e===null)throw Error(f(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function ot(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=ln(),i=n.queue;if(i===null)throw Error(f(311));i.lastRenderedReducer=e;var t=Se,r=t.baseQueue,l=i.pending;if(l!==null){if(r!==null){var s=r.next;r.next=l.next,l.next=s}t.baseQueue=r=l,i.pending=null}if(r!==null){l=r.next,t=t.baseState;var a=s=null,d=null,m=l;do{var w=m.lane;if((ti&w)===w)d!==null&&(d=d.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),t=m.hasEagerState?m.eagerState:e(t,m.action);else{var v={lane:w,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};d===null?(a=d=v,s=t):d=d.next=v,ce.lanes|=w,ri|=w}m=m.next}while(m!==null&&m!==l);d===null?s=t:d.next=a,on(t,n.memoizedState)||(je=!0),n.memoizedState=t,n.baseState=s,n.baseQueue=d,i.lastRenderedState=t}if(e=i.interleaved,e!==null){r=e;do l=r.lane,ce.lanes|=l,ri|=l,r=r.next;while(r!==e)}else r===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Cl(e){var n=ln(),i=n.queue;if(i===null)throw Error(f(311));i.lastRenderedReducer=e;var t=i.dispatch,r=i.pending,l=n.memoizedState;if(r!==null){i.pending=null;var s=r=r.next;do l=e(l,s.action),s=s.next;while(s!==r);on(l,n.memoizedState)||(je=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),i.lastRenderedState=l}return[l,t]}function cd(){}function md(e,n){var i=ce,t=ln(),r=n(),l=!on(t.memoizedState,r);if(l&&(t.memoizedState=r,je=!0),t=t.queue,_l(pd.bind(null,i,t,e),[e]),t.getSnapshot!==n||l||be!==null&&be.memoizedState.tag&1){if(i.flags|=2048,ct(9,gd.bind(null,i,t,r,n),void 0,null),ze===null)throw Error(f(349));ti&30||fd(i,n,r)}return r}function fd(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function gd(e,n,i,t){n.value=i,n.getSnapshot=t,wd(n)&&vd(e)}function pd(e,n,i){return i(function(){wd(n)&&vd(e)})}function wd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!on(e,i)}catch{return!0}}function vd(e){var n=Mn(e,1);n!==null&&pn(n,e,1,-1)}function Sd(e){var n=bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ot,lastRenderedState:e},n.queue=e,e=e.dispatch=lo.bind(null,ce,e),[n.memoizedState,e]}function ct(e,n,i,t){return e={tag:e,create:n,destroy:i,deps:t,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(t=i.next,i.next=e,e.next=t,n.lastEffect=e)),e}function kd(){return ln().memoizedState}function sr(e,n,i,t){var r=bn();ce.flags|=e,r.memoizedState=ct(1|n,i,void 0,t===void 0?null:t)}function ar(e,n,i,t){var r=ln();t=t===void 0?null:t;var l=void 0;if(Se!==null){var s=Se.memoizedState;if(l=s.destroy,t!==null&&Il(t,s.deps)){r.memoizedState=ct(n,i,l,t);return}}ce.flags|=e,r.memoizedState=ct(1|n,i,l,t)}function bd(e,n){return sr(8390656,8,e,n)}function _l(e,n){return ar(2048,8,e,n)}function zd(e,n){return ar(4,2,e,n)}function Dd(e,n){return ar(4,4,e,n)}function yd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ed(e,n,i){return i=i!=null?i.concat([e]):null,ar(4,4,yd.bind(null,n,e),i)}function Vl(){}function Wd(e,n){var i=ln();n=n===void 0?null:n;var t=i.memoizedState;return t!==null&&n!==null&&Il(n,t[1])?t[0]:(i.memoizedState=[e,n],e)}function Md(e,n){var i=ln();n=n===void 0?null:n;var t=i.memoizedState;return t!==null&&n!==null&&Il(n,t[1])?t[0]:(e=e(),i.memoizedState=[e,n],e)}function Hd(e,n,i){return ti&21?(on(i,n)||(i=ra(),ce.lanes|=i,ri|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=i)}function to(e,n){var i=ee;ee=i!==0&&4>i?i:4,e(!0);var t=Bl.transition;Bl.transition={};try{e(!1),n()}finally{ee=i,Bl.transition=t}}function Ld(){return ln().memoizedState}function ro(e,n,i){var t=On(e);if(i={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null},Fd(e))Gd(n,i);else if(i=ad(e,n,i,t),i!==null){var r=Re();pn(i,e,t,r),xd(i,n,t)}}function lo(e,n,i){var t=On(e),r={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null};if(Fd(e))Gd(n,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,a=l(s,i);if(r.hasEagerState=!0,r.eagerState=a,on(a,s)){var d=n.interleaved;d===null?(r.next=r,xl(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}i=ad(e,n,r,t),i!==null&&(r=Re(),pn(i,e,t,r),xd(i,n,t))}}function Fd(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Gd(e,n){ut=lr=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function xd(e,n,i){if(i&4194240){var t=n.lanes;t&=e.pendingLanes,i|=t,n.lanes=i,Zr(e,i)}}var dr={readContext:rn,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},so={readContext:rn,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:bd,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,sr(4194308,4,yd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return sr(4,2,e,n)},useMemo:function(e,n){var i=bn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var t=bn();return n=i!==void 0?i(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=ro.bind(null,ce,e),[t.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:Sd,useDebugValue:Vl,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Sd(!1),n=e[0];return e=to.bind(null,e[1]),bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var t=ce,r=bn();if(he){if(i===void 0)throw Error(f(407));i=i()}else{if(i=n(),ze===null)throw Error(f(349));ti&30||fd(t,n,i)}r.memoizedState=i;var l={value:i,getSnapshot:n};return r.queue=l,bd(pd.bind(null,t,l,e),[e]),t.flags|=2048,ct(9,gd.bind(null,t,l,i,n),void 0,null),i},useId:function(){var e=bn(),n=ze.identifierPrefix;if(he){var i=Wn,t=En;i=(t&~(1<<32-hn(t)-1)).toString(32)+i,n=":"+n+"R"+i,i=ht++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=io++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ao={readContext:rn,useCallback:Wd,useContext:rn,useEffect:_l,useImperativeHandle:Ed,useInsertionEffect:zd,useLayoutEffect:Dd,useMemo:Md,useReducer:jl,useRef:kd,useState:function(){return jl(ot)},useDebugValue:Vl,useDeferredValue:function(e){var n=ln();return Hd(n,Se.memoizedState,e)},useTransition:function(){var e=jl(ot)[0],n=ln().memoizedState;return[e,n]},useMutableSource:cd,useSyncExternalStore:md,useId:Ld,unstable_isNewReconciler:!1},uo={readContext:rn,useCallback:Wd,useContext:rn,useEffect:_l,useImperativeHandle:Ed,useInsertionEffect:zd,useLayoutEffect:Dd,useMemo:Md,useReducer:Cl,useRef:kd,useState:function(){return Cl(ot)},useDebugValue:Vl,useDeferredValue:function(e){var n=ln();return Se===null?n.memoizedState=e:Hd(n,Se.memoizedState,e)},useTransition:function(){var e=Cl(ot)[0],n=ln().memoizedState;return[e,n]},useMutableSource:cd,useSyncExternalStore:md,useId:Ld,unstable_isNewReconciler:!1};function mn(e,n){if(e&&e.defaultProps){n=E({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Ol(e,n,i,t){n=e.memoizedState,i=i(t,n),i=i==null?n:E({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var ur={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var t=Re(),r=On(e),l=Hn(t,r);l.payload=n,i!=null&&(l.callback=i),n=jn(e,l,r),n!==null&&(pn(n,e,r,t),nr(n,e,r))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var t=Re(),r=On(e),l=Hn(t,r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=jn(e,l,r),n!==null&&(pn(n,e,r,t),nr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Re(),t=On(e),r=Hn(i,t);r.tag=2,n!=null&&(r.callback=n),n=jn(e,r,t),n!==null&&(pn(n,e,t,i),nr(n,e,t))}};function Ud(e,n,i,t,r,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,s):n.prototype&&n.prototype.isPureReactComponent?!Yi(i,t)||!Yi(r,l):!0}function Td(e,n,i){var t=!1,r=In,l=n.contextType;return typeof l=="object"&&l!==null?l=rn(l):(r=Ke(n)?Yn:Fe.current,t=n.contextTypes,l=(t=t!=null)?bi(e,r):In),n=new n(i,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ur,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ad(e,n,i,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,t),n.state!==e&&ur.enqueueReplaceState(n,n.state,null)}function Zl(e,n,i,t){var r=e.stateNode;r.props=i,r.state=e.memoizedState,r.refs={},Ul(e);var l=n.contextType;typeof l=="object"&&l!==null?r.context=rn(l):(l=Ke(n)?Yn:Fe.current,r.context=bi(e,l)),r.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ol(e,n,l,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ur.enqueueReplaceState(r,r.state,null),ir(e,i,r,t),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Li(e,n){try{var i="",t=n;do i+=Z(t),t=t.return;while(t);var r=i}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:r,digest:null}}function Jl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function $l(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var ho=typeof WeakMap=="function"?WeakMap:Map;function Nd(e,n,i){i=Hn(-1,i),i.tag=3,i.payload={element:null};var t=n.value;return i.callback=function(){pr||(pr=!0,hs=t),$l(e,n)},i}function Rd(e,n,i){i=Hn(-1,i),i.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var r=n.value;i.payload=function(){return t(r)},i.callback=function(){$l(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(i.callback=function(){$l(e,n),typeof t!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),i}function Bd(e,n,i){var t=e.pingCache;if(t===null){t=e.pingCache=new ho;var r=new Set;t.set(n,r)}else r=t.get(n),r===void 0&&(r=new Set,t.set(n,r));r.has(i)||(r.add(i),e=yo.bind(null,e,n,i),n.then(e,e))}function Id(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pd(e,n,i,t,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Hn(-1,1),n.tag=2,jn(i,n,1))),i.lanes|=1),e)}var oo=ie.ReactCurrentOwner,je=!1;function Ne(e,n,i,t){n.child=e===null?sd(n,null,i,t):Ei(n,e.child,i,t)}function Kd(e,n,i,t,r){i=i.render;var l=n.ref;return Mi(n,r),t=Pl(e,n,i,t,l,r),i=Kl(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Ln(e,n,r)):(he&&i&&Dl(n),n.flags|=1,Ne(e,n,t,r),n.child)}function jd(e,n,i,t,r){if(e===null){var l=i.type;return typeof l=="function"&&!ws(l)&&l.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=l,Cd(e,n,l,t,r)):(e=zr(i.type,null,t,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&r)){var s=l.memoizedProps;if(i=i.compare,i=i!==null?i:Yi,i(s,t)&&e.ref===n.ref)return Ln(e,n,r)}return n.flags|=1,e=Jn(l,t),e.ref=n.ref,e.return=n,n.child=e}function Cd(e,n,i,t,r){if(e!==null){var l=e.memoizedProps;if(Yi(l,t)&&e.ref===n.ref)if(je=!1,n.pendingProps=t=l,(e.lanes&r)!==0)e.flags&131072&&(je=!0);else return n.lanes=e.lanes,Ln(e,n,r)}return Ql(e,n,i,t,r)}function _d(e,n,i){var t=n.pendingProps,r=t.children,l=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Gi,Ye),Ye|=i;else{if(!(i&1073741824))return e=l!==null?l.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,re(Gi,Ye),Ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:i,re(Gi,Ye),Ye|=t}else l!==null?(t=l.baseLanes|i,n.memoizedState=null):t=i,re(Gi,Ye),Ye|=t;return Ne(e,n,r,i),n.child}function Vd(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Ql(e,n,i,t,r){var l=Ke(i)?Yn:Fe.current;return l=bi(n,l),Mi(n,r),i=Pl(e,n,i,t,l,r),t=Kl(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Ln(e,n,r)):(he&&t&&Dl(n),n.flags|=1,Ne(e,n,i,r),n.child)}function Od(e,n,i,t,r){if(Ke(i)){var l=!0;Zt(n)}else l=!1;if(Mi(n,r),n.stateNode===null)or(e,n),Td(n,i,t),Zl(n,i,t,r),t=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var d=s.context,m=i.contextType;typeof m=="object"&&m!==null?m=rn(m):(m=Ke(i)?Yn:Fe.current,m=bi(n,m));var w=i.getDerivedStateFromProps,v=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==t||d!==m)&&Ad(n,s,t,m),Kn=!1;var g=n.memoizedState;s.state=g,ir(n,t,s,r),d=n.memoizedState,a!==t||g!==d||Pe.current||Kn?(typeof w=="function"&&(Ol(n,i,w,t),d=n.memoizedState),(a=Kn||Ud(n,i,a,t,g,d,m))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=d),s.props=t,s.state=d,s.context=m,t=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{s=n.stateNode,dd(e,n),a=n.memoizedProps,m=n.type===n.elementType?a:mn(n.type,a),s.props=m,v=n.pendingProps,g=s.context,d=i.contextType,typeof d=="object"&&d!==null?d=rn(d):(d=Ke(i)?Yn:Fe.current,d=bi(n,d));var z=i.getDerivedStateFromProps;(w=typeof z=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==v||g!==d)&&Ad(n,s,t,d),Kn=!1,g=n.memoizedState,s.state=g,ir(n,t,s,r);var W=n.memoizedState;a!==v||g!==W||Pe.current||Kn?(typeof z=="function"&&(Ol(n,i,z,t),W=n.memoizedState),(m=Kn||Ud(n,i,m,t,g,W,d)||!1)?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,W,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,W,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=W),s.props=t,s.state=W,s.context=d,t=m):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),t=!1)}return Xl(e,n,i,t,l,r)}function Xl(e,n,i,t,r,l){Vd(e,n);var s=(n.flags&128)!==0;if(!t&&!s)return r&&Xa(n,i,!1),Ln(e,n,l);t=n.stateNode,oo.current=n;var a=s&&typeof i.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&s?(n.child=Ei(n,e.child,null,l),n.child=Ei(n,null,a,l)):Ne(e,n,a,l),n.memoizedState=t.state,r&&Xa(n,i,!0),n.child}function Zd(e){var n=e.stateNode;n.pendingContext?$a(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$a(e,n.context,!1),Tl(e,n.containerInfo)}function Jd(e,n,i,t,r){return yi(),Ml(r),n.flags|=256,Ne(e,n,i,t),n.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function $d(e,n,i){var t=n.pendingProps,r=oe.current,l=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),re(oe,r&1),e===null)return Wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=t.children,e=t.fallback,l?(t=n.mode,l=n.child,s={mode:"hidden",children:s},!(t&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Dr(s,t,0,null),e=di(e,t,i,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=ql(i),n.memoizedState=Yl,e):es(n,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return co(e,n,s,t,a,r,i);if(l){l=t.fallback,s=n.mode,r=e.child,a=r.sibling;var d={mode:"hidden",children:t.children};return!(s&1)&&n.child!==r?(t=n.child,t.childLanes=0,t.pendingProps=d,n.deletions=null):(t=Jn(r,d),t.subtreeFlags=r.subtreeFlags&14680064),a!==null?l=Jn(a,l):(l=di(l,s,i,null),l.flags|=2),l.return=n,t.return=n,t.sibling=l,n.child=t,t=l,l=n.child,s=e.child.memoizedState,s=s===null?ql(i):{baseLanes:s.baseLanes|i,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~i,n.memoizedState=Yl,t}return l=e.child,e=l.sibling,t=Jn(l,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=i),t.return=n,t.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=t,n.memoizedState=null,t}function es(e,n){return n=Dr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,i,t){return t!==null&&Ml(t),Ei(n,e.child,null,i),e=es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function co(e,n,i,t,r,l,s){if(i)return n.flags&256?(n.flags&=-257,t=Jl(Error(f(422))),hr(e,n,s,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=t.fallback,r=n.mode,t=Dr({mode:"visible",children:t.children},r,0,null),l=di(l,r,s,null),l.flags|=2,t.return=n,l.return=n,t.sibling=l,n.child=t,n.mode&1&&Ei(n,e.child,null,s),n.child.memoizedState=ql(s),n.memoizedState=Yl,l);if(!(n.mode&1))return hr(e,n,s,null);if(r.data==="$!"){if(t=r.nextSibling&&r.nextSibling.dataset,t)var a=t.dgst;return t=a,l=Error(f(419)),t=Jl(l,t,void 0),hr(e,n,s,t)}if(a=(s&e.childLanes)!==0,je||a){if(t=ze,t!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(t.suspendedLanes|s)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,Mn(e,r),pn(t,e,r,-1))}return ps(),t=Jl(Error(f(421))),hr(e,n,s,t)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Eo.bind(null,e),r._reactRetry=n,null):(e=l.treeContext,Xe=Rn(r.nextSibling),Qe=n,he=!0,cn=null,e!==null&&(nn[tn++]=En,nn[tn++]=Wn,nn[tn++]=qn,En=e.id,Wn=e.overflow,qn=n),n=es(n,t.children),n.flags|=4096,n)}function Qd(e,n,i){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Gl(e.return,n,i)}function ns(e,n,i,t,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:i,tailMode:r}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=i,l.tailMode=r)}function Xd(e,n,i){var t=n.pendingProps,r=t.revealOrder,l=t.tail;if(Ne(e,n,t.children,i),t=oe.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,i,n);else if(e.tag===19)Qd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(re(oe,t),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(i=n.child,r=null;i!==null;)e=i.alternate,e!==null&&tr(e)===null&&(r=i),i=i.sibling;i=r,i===null?(r=n.child,n.child=null):(r=i.sibling,i.sibling=null),ns(n,!1,r,i,l);break;case"backwards":for(i=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&tr(e)===null){n.child=r;break}e=r.sibling,r.sibling=i,i=r,r=e}ns(n,!0,i,null,l);break;case"together":ns(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ln(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),ri|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(f(153));if(n.child!==null){for(e=n.child,i=Jn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Jn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function mo(e,n,i){switch(n.tag){case 3:Zd(n),yi();break;case 5:od(n);break;case 1:Ke(n.type)&&Zt(n);break;case 4:Tl(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,r=n.memoizedProps.value;re(qt,t._currentValue),t._currentValue=r;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(re(oe,oe.current&1),n.flags|=128,null):i&n.child.childLanes?$d(e,n,i):(re(oe,oe.current&1),e=Ln(e,n,i),e!==null?e.sibling:null);re(oe,oe.current&1);break;case 19:if(t=(i&n.childLanes)!==0,e.flags&128){if(t)return Xd(e,n,i);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),re(oe,oe.current),t)break;return null;case 22:case 23:return n.lanes=0,_d(e,n,i)}return Ln(e,n,i)}var Yd,is,qd,eu;Yd=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},is=function(){},qd=function(e,n,i,t){var r=e.memoizedProps;if(r!==t){e=n.stateNode,ii(kn.current);var l=null;switch(i){case"input":r=Gr(e,r),t=Gr(e,t),l=[];break;case"select":r=E({},r,{value:void 0}),t=E({},t,{value:void 0}),l=[];break;case"textarea":r=Tr(e,r),t=Tr(e,t),l=[];break;default:typeof r.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=_t)}Nr(i,t);var s;i=null;for(m in r)if(!t.hasOwnProperty(m)&&r.hasOwnProperty(m)&&r[m]!=null)if(m==="style"){var a=r[m];for(s in a)a.hasOwnProperty(s)&&(i||(i={}),i[s]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(T.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in t){var d=t[m];if(a=r!=null?r[m]:void 0,t.hasOwnProperty(m)&&d!==a&&(d!=null||a!=null))if(m==="style")if(a){for(s in a)!a.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(i||(i={}),i[s]="");for(s in d)d.hasOwnProperty(s)&&a[s]!==d[s]&&(i||(i={}),i[s]=d[s])}else i||(l||(l=[]),l.push(m,i)),i=d;else m==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(l=l||[]).push(m,d)):m==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(m,""+d):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(T.hasOwnProperty(m)?(d!=null&&m==="onScroll"&&ae("scroll",e),l||a===d||(l=[])):(l=l||[]).push(m,d))}i&&(l=l||[]).push("style",i);var m=l;(n.updateQueue=m)&&(n.flags|=4)}},eu=function(e,n,i,t){i!==t&&(n.flags|=4)};function mt(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,t=0;if(n)for(var r=e.child;r!==null;)i|=r.lanes|r.childLanes,t|=r.subtreeFlags&14680064,t|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)i|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=t,e.childLanes=i,n}function fo(e,n,i){var t=n.pendingProps;switch(yl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(n),null;case 1:return Ke(n.type)&&Ot(),xe(n),null;case 3:return t=n.stateNode,Hi(),de(Pe),de(Fe),Rl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Xt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(ms(cn),cn=null))),is(e,n),xe(n),null;case 5:Al(n);var r=ii(dt.current);if(i=n.type,e!==null&&n.stateNode!=null)qd(e,n,i,t,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(f(166));return xe(n),null}if(e=ii(kn.current),Xt(n)){t=n.stateNode,i=n.type;var l=n.memoizedProps;switch(t[Sn]=n,t[tt]=l,e=(n.mode&1)!==0,i){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(r=0;r<et.length;r++)ae(et[r],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":Ts(t,l),ae("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},ae("invalid",t);break;case"textarea":Rs(t,l),ae("invalid",t)}Nr(i,l),r=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?t.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ct(t.textContent,a,e),r=["children",a]):typeof a=="number"&&t.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ct(t.textContent,a,e),r=["children",""+a]):T.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ae("scroll",t)}switch(i){case"input":kt(t),Ns(t,l,!0);break;case"textarea":kt(t),Is(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=_t)}t=r,n.updateQueue=t,t!==null&&(n.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ps(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=s.createElement(i,{is:t.is}):(e=s.createElement(i),i==="select"&&(s=e,t.multiple?s.multiple=!0:t.size&&(s.size=t.size))):e=s.createElementNS(e,i),e[Sn]=n,e[tt]=t,Yd(e,n,!1,!1),n.stateNode=e;e:{switch(s=Rr(i,t),i){case"dialog":ae("cancel",e),ae("close",e),r=t;break;case"iframe":case"object":case"embed":ae("load",e),r=t;break;case"video":case"audio":for(r=0;r<et.length;r++)ae(et[r],e);r=t;break;case"source":ae("error",e),r=t;break;case"img":case"image":case"link":ae("error",e),ae("load",e),r=t;break;case"details":ae("toggle",e),r=t;break;case"input":Ts(e,t),r=Gr(e,t),ae("invalid",e);break;case"option":r=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},r=E({},t,{value:void 0}),ae("invalid",e);break;case"textarea":Rs(e,t),r=Tr(e,t),ae("invalid",e);break;default:r=t}Nr(i,r),a=r;for(l in a)if(a.hasOwnProperty(l)){var d=a[l];l==="style"?Cs(e,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ks(e,d)):l==="children"?typeof d=="string"?(i!=="textarea"||d!=="")&&Ai(e,d):typeof d=="number"&&Ai(e,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(T.hasOwnProperty(l)?d!=null&&l==="onScroll"&&ae("scroll",e):d!=null&&Be(e,l,d,s))}switch(i){case"input":kt(e),Ns(e,t,!1);break;case"textarea":kt(e),Is(e);break;case"option":t.value!=null&&e.setAttribute("value",""+q(t.value));break;case"select":e.multiple=!!t.multiple,l=t.value,l!=null?ui(e,!!t.multiple,l,!1):t.defaultValue!=null&&ui(e,!!t.multiple,t.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=_t)}switch(i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return xe(n),null;case 6:if(e&&n.stateNode!=null)eu(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(f(166));if(i=ii(dt.current),ii(kn.current),Xt(n)){if(t=n.stateNode,i=n.memoizedProps,t[Sn]=n,(l=t.nodeValue!==i)&&(e=Qe,e!==null))switch(e.tag){case 3:Ct(t.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ct(t.nodeValue,i,(e.mode&1)!==0)}l&&(n.flags|=4)}else t=(i.nodeType===9?i:i.ownerDocument).createTextNode(t),t[Sn]=n,n.stateNode=t}return xe(n),null;case 13:if(de(oe),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Xe!==null&&n.mode&1&&!(n.flags&128))td(),yi(),n.flags|=98560,l=!1;else if(l=Xt(n),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(f(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[Sn]=n}else yi(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;xe(n),l=!1}else cn!==null&&(ms(cn),cn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?ke===0&&(ke=3):ps())),n.updateQueue!==null&&(n.flags|=4),xe(n),null);case 4:return Hi(),is(e,n),e===null&&nt(n.stateNode.containerInfo),xe(n),null;case 10:return Fl(n.type._context),xe(n),null;case 17:return Ke(n.type)&&Ot(),xe(n),null;case 19:if(de(oe),l=n.memoizedState,l===null)return xe(n),null;if(t=(n.flags&128)!==0,s=l.rendering,s===null)if(t)mt(l,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=tr(e),s!==null){for(n.flags|=128,mt(l,!1),t=s.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=i,i=n.child;i!==null;)l=i,e=t,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return re(oe,oe.current&1|2),n.child}e=e.sibling}l.tail!==null&&ge()>xi&&(n.flags|=128,t=!0,mt(l,!1),n.lanes=4194304)}else{if(!t)if(e=tr(s),e!==null){if(n.flags|=128,t=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),mt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!he)return xe(n),null}else 2*ge()-l.renderingStartTime>xi&&i!==1073741824&&(n.flags|=128,t=!0,mt(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(i=l.last,i!==null?i.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ge(),n.sibling=null,i=oe.current,re(oe,t?i&1|2:i&1),n):(xe(n),null);case 22:case 23:return gs(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?Ye&1073741824&&(xe(n),n.subtreeFlags&6&&(n.flags|=8192)):xe(n),null;case 24:return null;case 25:return null}throw Error(f(156,n.tag))}function go(e,n){switch(yl(n),n.tag){case 1:return Ke(n.type)&&Ot(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(),de(Pe),de(Fe),Rl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Al(n),null;case 13:if(de(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(f(340));yi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(oe),null;case 4:return Hi(),null;case 10:return Fl(n.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var cr=!1,Ue=!1,po=typeof WeakSet=="function"?WeakSet:Set,y=null;function Fi(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(t){fe(e,n,t)}else i.current=null}function ts(e,n,i){try{i()}catch(t){fe(e,n,t)}}var nu=!1;function wo(e,n){if(gl=xt,e=Ua(),al(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var t=i.getSelection&&i.getSelection();if(t&&t.rangeCount!==0){i=t.anchorNode;var r=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{i.nodeType,l.nodeType}catch{i=null;break e}var s=0,a=-1,d=-1,m=0,w=0,v=e,g=null;n:for(;;){for(var z;v!==i||r!==0&&v.nodeType!==3||(a=s+r),v!==l||t!==0&&v.nodeType!==3||(d=s+t),v.nodeType===3&&(s+=v.nodeValue.length),(z=v.firstChild)!==null;)g=v,v=z;for(;;){if(v===e)break n;if(g===i&&++m===r&&(a=s),g===l&&++w===t&&(d=s),(z=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=z}i=a===-1||d===-1?null:{start:a,end:d}}else i=null}i=i||{start:0,end:0}}else i=null;for(pl={focusedElem:e,selectionRange:i},xt=!1,y=n;y!==null;)if(n=y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,y=e;else for(;y!==null;){n=y;try{var W=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var M=W.memoizedProps,pe=W.memoizedState,o=n.stateNode,u=o.getSnapshotBeforeUpdate(n.elementType===n.type?M:mn(n.type,M),pe);o.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=n.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(S){fe(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,y=e;break}y=n.return}return W=nu,nu=!1,W}function ft(e,n,i){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&ts(n,i,l)}r=r.next}while(r!==t)}}function mr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var t=i.create;i.destroy=t()}i=i.next}while(i!==n)}}function rs(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function iu(e){var n=e.alternate;n!==null&&(e.alternate=null,iu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[tt],delete n[kl],delete n[Yh],delete n[qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ls(e,n,i){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=_t));else if(t!==4&&(e=e.child,e!==null))for(ls(e,n,i),e=e.sibling;e!==null;)ls(e,n,i),e=e.sibling}function ss(e,n,i){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(ss(e,n,i),e=e.sibling;e!==null;)ss(e,n,i),e=e.sibling}var Ee=null,fn=!1;function Cn(e,n,i){for(i=i.child;i!==null;)lu(e,n,i),i=i.sibling}function lu(e,n,i){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Wt,i)}catch{}switch(i.tag){case 5:Ue||Fi(i,n);case 6:var t=Ee,r=fn;Ee=null,Cn(e,n,i),Ee=t,fn=r,Ee!==null&&(fn?(e=Ee,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ee.removeChild(i.stateNode));break;case 18:Ee!==null&&(fn?(e=Ee,i=i.stateNode,e.nodeType===8?Sl(e.parentNode,i):e.nodeType===1&&Sl(e,i),Oi(e)):Sl(Ee,i.stateNode));break;case 4:t=Ee,r=fn,Ee=i.stateNode.containerInfo,fn=!0,Cn(e,n,i),Ee=t,fn=r;break;case 0:case 11:case 14:case 15:if(!Ue&&(t=i.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){r=t=t.next;do{var l=r,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&ts(i,n,s),r=r.next}while(r!==t)}Cn(e,n,i);break;case 1:if(!Ue&&(Fi(i,n),t=i.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=i.memoizedProps,t.state=i.memoizedState,t.componentWillUnmount()}catch(a){fe(i,n,a)}Cn(e,n,i);break;case 21:Cn(e,n,i);break;case 22:i.mode&1?(Ue=(t=Ue)||i.memoizedState!==null,Cn(e,n,i),Ue=t):Cn(e,n,i);break;default:Cn(e,n,i)}}function su(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new po),n.forEach(function(t){var r=Wo.bind(null,e,t);i.has(t)||(i.add(t),t.then(r,r))})}}function gn(e,n){var i=n.deletions;if(i!==null)for(var t=0;t<i.length;t++){var r=i[t];try{var l=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,fn=!1;break e;case 3:Ee=a.stateNode.containerInfo,fn=!0;break e;case 4:Ee=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(Ee===null)throw Error(f(160));lu(l,s,r),Ee=null,fn=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(m){fe(r,n,m)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)au(n,e),n=n.sibling}function au(e,n){var i=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(n,e),zn(e),t&4){try{ft(3,e,e.return),mr(3,e)}catch(M){fe(e,e.return,M)}try{ft(5,e,e.return)}catch(M){fe(e,e.return,M)}}break;case 1:gn(n,e),zn(e),t&512&&i!==null&&Fi(i,i.return);break;case 5:if(gn(n,e),zn(e),t&512&&i!==null&&Fi(i,i.return),e.flags&32){var r=e.stateNode;try{Ai(r,"")}catch(M){fe(e,e.return,M)}}if(t&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,s=i!==null?i.memoizedProps:l,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&As(r,l),Rr(a,s);var m=Rr(a,l);for(s=0;s<d.length;s+=2){var w=d[s],v=d[s+1];w==="style"?Cs(r,v):w==="dangerouslySetInnerHTML"?Ks(r,v):w==="children"?Ai(r,v):Be(r,w,v,m)}switch(a){case"input":xr(r,l);break;case"textarea":Bs(r,l);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var z=l.value;z!=null?ui(r,!!l.multiple,z,!1):g!==!!l.multiple&&(l.defaultValue!=null?ui(r,!!l.multiple,l.defaultValue,!0):ui(r,!!l.multiple,l.multiple?[]:"",!1))}r[tt]=l}catch(M){fe(e,e.return,M)}}break;case 6:if(gn(n,e),zn(e),t&4){if(e.stateNode===null)throw Error(f(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(M){fe(e,e.return,M)}}break;case 3:if(gn(n,e),zn(e),t&4&&i!==null&&i.memoizedState.isDehydrated)try{Oi(n.containerInfo)}catch(M){fe(e,e.return,M)}break;case 4:gn(n,e),zn(e);break;case 13:gn(n,e),zn(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(us=ge())),t&4&&su(e);break;case 22:if(w=i!==null&&i.memoizedState!==null,e.mode&1?(Ue=(m=Ue)||w,gn(n,e),Ue=m):gn(n,e),zn(e),t&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!w&&e.mode&1)for(y=e,w=e.child;w!==null;){for(v=y=w;y!==null;){switch(g=y,z=g.child,g.tag){case 0:case 11:case 14:case 15:ft(4,g,g.return);break;case 1:Fi(g,g.return);var W=g.stateNode;if(typeof W.componentWillUnmount=="function"){t=g,i=g.return;try{n=t,W.props=n.memoizedProps,W.state=n.memoizedState,W.componentWillUnmount()}catch(M){fe(t,i,M)}}break;case 5:Fi(g,g.return);break;case 22:if(g.memoizedState!==null){hu(v);continue}}z!==null?(z.return=g,y=z):hu(v)}w=w.sibling}e:for(w=null,v=e;;){if(v.tag===5){if(w===null){w=v;try{r=v.stateNode,m?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,d=v.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=js("display",s))}catch(M){fe(e,e.return,M)}}}else if(v.tag===6){if(w===null)try{v.stateNode.nodeValue=m?"":v.memoizedProps}catch(M){fe(e,e.return,M)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;w===v&&(w=null),v=v.return}w===v&&(w=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:gn(n,e),zn(e),t&4&&su(e);break;case 21:break;default:gn(n,e),zn(e)}}function zn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(tu(i)){var t=i;break e}i=i.return}throw Error(f(160))}switch(t.tag){case 5:var r=t.stateNode;t.flags&32&&(Ai(r,""),t.flags&=-33);var l=ru(e);ss(e,l,r);break;case 3:case 4:var s=t.stateNode.containerInfo,a=ru(e);ls(e,a,s);break;default:throw Error(f(161))}}catch(d){fe(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vo(e,n,i){y=e,du(e)}function du(e,n,i){for(var t=(e.mode&1)!==0;y!==null;){var r=y,l=r.child;if(r.tag===22&&t){var s=r.memoizedState!==null||cr;if(!s){var a=r.alternate,d=a!==null&&a.memoizedState!==null||Ue;a=cr;var m=Ue;if(cr=s,(Ue=d)&&!m)for(y=r;y!==null;)s=y,d=s.child,s.tag===22&&s.memoizedState!==null?ou(r):d!==null?(d.return=s,y=d):ou(r);for(;l!==null;)y=l,du(l),l=l.sibling;y=r,cr=a,Ue=m}uu(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,y=l):uu(e)}}function uu(e){for(;y!==null;){var n=y;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ue||mr(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!Ue)if(i===null)t.componentDidMount();else{var r=n.elementType===n.type?i.memoizedProps:mn(n.type,i.memoizedProps);t.componentDidUpdate(r,i.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&hd(n,l,t);break;case 3:var s=n.updateQueue;if(s!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}hd(n,s,i)}break;case 5:var a=n.stateNode;if(i===null&&n.flags&4){i=a;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&i.focus();break;case"img":d.src&&(i.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var m=n.alternate;if(m!==null){var w=m.memoizedState;if(w!==null){var v=w.dehydrated;v!==null&&Oi(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}Ue||n.flags&512&&rs(n)}catch(g){fe(n,n.return,g)}}if(n===e){y=null;break}if(i=n.sibling,i!==null){i.return=n.return,y=i;break}y=n.return}}function hu(e){for(;y!==null;){var n=y;if(n===e){y=null;break}var i=n.sibling;if(i!==null){i.return=n.return,y=i;break}y=n.return}}function ou(e){for(;y!==null;){var n=y;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{mr(4,n)}catch(d){fe(n,i,d)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var r=n.return;try{t.componentDidMount()}catch(d){fe(n,r,d)}}var l=n.return;try{rs(n)}catch(d){fe(n,l,d)}break;case 5:var s=n.return;try{rs(n)}catch(d){fe(n,s,d)}}}catch(d){fe(n,n.return,d)}if(n===e){y=null;break}var a=n.sibling;if(a!==null){a.return=n.return,y=a;break}y=n.return}}var So=Math.ceil,fr=ie.ReactCurrentDispatcher,as=ie.ReactCurrentOwner,sn=ie.ReactCurrentBatchConfig,O=0,ze=null,ve=null,We=0,Ye=0,Gi=Bn(0),ke=0,gt=null,ri=0,gr=0,ds=0,pt=null,Ce=null,us=0,xi=1/0,Fn=null,pr=!1,hs=null,_n=null,wr=!1,Vn=null,vr=0,wt=0,os=null,Sr=-1,kr=0;function Re(){return O&6?ge():Sr!==-1?Sr:Sr=ge()}function On(e){return e.mode&1?O&2&&We!==0?We&-We:no.transition!==null?(kr===0&&(kr=ra()),kr):(e=ee,e!==0||(e=window.event,e=e===void 0?16:ma(e.type)),e):1}function pn(e,n,i,t){if(50<wt)throw wt=0,os=null,Error(f(185));Ki(e,i,t),(!(O&2)||e!==ze)&&(e===ze&&(!(O&2)&&(gr|=i),ke===4&&Zn(e,We)),_e(e,t),i===1&&O===0&&!(n.mode&1)&&(xi=ge()+500,Jt&&Pn()))}function _e(e,n){var i=e.callbackNode;nh(e,n);var t=Lt(e,e===ze?We:0);if(t===0)i!==null&&na(i),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(i!=null&&na(i),n===1)e.tag===0?eo(mu.bind(null,e)):Ya(mu.bind(null,e)),Qh(function(){!(O&6)&&Pn()}),i=null;else{switch(la(t)){case 1:i=_r;break;case 4:i=ia;break;case 16:i=Et;break;case 536870912:i=ta;break;default:i=Et}i=bu(i,cu.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function cu(e,n){if(Sr=-1,kr=0,O&6)throw Error(f(327));var i=e.callbackNode;if(Ui()&&e.callbackNode!==i)return null;var t=Lt(e,e===ze?We:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=br(e,t);else{n=t;var r=O;O|=2;var l=gu();(ze!==e||We!==n)&&(Fn=null,xi=ge()+500,si(e,n));do try{zo();break}catch(a){fu(e,a)}while(!0);Ll(),fr.current=l,O=r,ve!==null?n=0:(ze=null,We=0,n=ke)}if(n!==0){if(n===2&&(r=Vr(e),r!==0&&(t=r,n=cs(e,r))),n===1)throw i=gt,si(e,0),Zn(e,t),_e(e,ge()),i;if(n===6)Zn(e,t);else{if(r=e.current.alternate,!(t&30)&&!ko(r)&&(n=br(e,t),n===2&&(l=Vr(e),l!==0&&(t=l,n=cs(e,l))),n===1))throw i=gt,si(e,0),Zn(e,t),_e(e,ge()),i;switch(e.finishedWork=r,e.finishedLanes=t,n){case 0:case 1:throw Error(f(345));case 2:ai(e,Ce,Fn);break;case 3:if(Zn(e,t),(t&130023424)===t&&(n=us+500-ge(),10<n)){if(Lt(e,0)!==0)break;if(r=e.suspendedLanes,(r&t)!==t){Re(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=vl(ai.bind(null,e,Ce,Fn),n);break}ai(e,Ce,Fn);break;case 4:if(Zn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,r=-1;0<t;){var s=31-hn(t);l=1<<s,s=n[s],s>r&&(r=s),t&=~l}if(t=r,t=ge()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*So(t/1960))-t,10<t){e.timeoutHandle=vl(ai.bind(null,e,Ce,Fn),t);break}ai(e,Ce,Fn);break;case 5:ai(e,Ce,Fn);break;default:throw Error(f(329))}}}return _e(e,ge()),e.callbackNode===i?cu.bind(null,e):null}function cs(e,n){var i=pt;return e.current.memoizedState.isDehydrated&&(si(e,n).flags|=256),e=br(e,n),e!==2&&(n=Ce,Ce=i,n!==null&&ms(n)),e}function ms(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function ko(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var t=0;t<i.length;t++){var r=i[t],l=r.getSnapshot;r=r.value;try{if(!on(l(),r))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~ds,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-hn(n),t=1<<i;e[i]=-1,n&=~t}}function mu(e){if(O&6)throw Error(f(327));Ui();var n=Lt(e,0);if(!(n&1))return _e(e,ge()),null;var i=br(e,n);if(e.tag!==0&&i===2){var t=Vr(e);t!==0&&(n=t,i=cs(e,t))}if(i===1)throw i=gt,si(e,0),Zn(e,n),_e(e,ge()),i;if(i===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ai(e,Ce,Fn),_e(e,ge()),null}function fs(e,n){var i=O;O|=1;try{return e(n)}finally{O=i,O===0&&(xi=ge()+500,Jt&&Pn())}}function li(e){Vn!==null&&Vn.tag===0&&!(O&6)&&Ui();var n=O;O|=1;var i=sn.transition,t=ee;try{if(sn.transition=null,ee=1,e)return e()}finally{ee=t,sn.transition=i,O=n,!(O&6)&&Pn()}}function gs(){Ye=Gi.current,de(Gi)}function si(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,$h(i)),ve!==null)for(i=ve.return;i!==null;){var t=i;switch(yl(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Ot();break;case 3:Hi(),de(Pe),de(Fe),Rl();break;case 5:Al(t);break;case 4:Hi();break;case 13:de(oe);break;case 19:de(oe);break;case 10:Fl(t.type._context);break;case 22:case 23:gs()}i=i.return}if(ze=e,ve=e=Jn(e.current,null),We=Ye=n,ke=0,gt=null,ds=gr=ri=0,Ce=pt=null,ni!==null){for(n=0;n<ni.length;n++)if(i=ni[n],t=i.interleaved,t!==null){i.interleaved=null;var r=t.next,l=i.pending;if(l!==null){var s=l.next;l.next=r,t.next=s}i.pending=t}ni=null}return e}function fu(e,n){do{var i=ve;try{if(Ll(),rr.current=dr,lr){for(var t=ce.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}lr=!1}if(ti=0,be=Se=ce=null,ut=!1,ht=0,as.current=null,i===null||i.return===null){ke=1,gt=n,ve=null;break}e:{var l=e,s=i.return,a=i,d=n;if(n=We,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var m=d,w=a,v=w.tag;if(!(w.mode&1)&&(v===0||v===11||v===15)){var g=w.alternate;g?(w.updateQueue=g.updateQueue,w.memoizedState=g.memoizedState,w.lanes=g.lanes):(w.updateQueue=null,w.memoizedState=null)}var z=Id(s);if(z!==null){z.flags&=-257,Pd(z,s,a,l,n),z.mode&1&&Bd(l,m,n),n=z,d=m;var W=n.updateQueue;if(W===null){var M=new Set;M.add(d),n.updateQueue=M}else W.add(d);break e}else{if(!(n&1)){Bd(l,m,n),ps();break e}d=Error(f(426))}}else if(he&&a.mode&1){var pe=Id(s);if(pe!==null){!(pe.flags&65536)&&(pe.flags|=256),Pd(pe,s,a,l,n),Ml(Li(d,a));break e}}l=d=Li(d,a),ke!==4&&(ke=2),pt===null?pt=[l]:pt.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var o=Nd(l,d,n);ud(l,o);break e;case 1:a=d;var u=l.type,c=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(_n===null||!_n.has(c)))){l.flags|=65536,n&=-n,l.lanes|=n;var S=Rd(l,a,n);ud(l,S);break e}}l=l.return}while(l!==null)}wu(i)}catch(H){n=H,ve===i&&i!==null&&(ve=i=i.return);continue}break}while(!0)}function gu(){var e=fr.current;return fr.current=dr,e===null?dr:e}function ps(){(ke===0||ke===3||ke===2)&&(ke=4),ze===null||!(ri&268435455)&&!(gr&268435455)||Zn(ze,We)}function br(e,n){var i=O;O|=2;var t=gu();(ze!==e||We!==n)&&(Fn=null,si(e,n));do try{bo();break}catch(r){fu(e,r)}while(!0);if(Ll(),O=i,fr.current=t,ve!==null)throw Error(f(261));return ze=null,We=0,ke}function bo(){for(;ve!==null;)pu(ve)}function zo(){for(;ve!==null&&!Ou();)pu(ve)}function pu(e){var n=ku(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,n===null?wu(e):ve=n,as.current=null}function wu(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=go(i,n),i!==null){i.flags&=32767,ve=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,ve=null;return}}else if(i=fo(i,n,Ye),i!==null){ve=i;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);ke===0&&(ke=5)}function ai(e,n,i){var t=ee,r=sn.transition;try{sn.transition=null,ee=1,Do(e,n,i,t)}finally{sn.transition=r,ee=t}return null}function Do(e,n,i,t){do Ui();while(Vn!==null);if(O&6)throw Error(f(327));i=e.finishedWork;var r=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var l=i.lanes|i.childLanes;if(ih(e,l),e===ze&&(ve=ze=null,We=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||wr||(wr=!0,bu(Et,function(){return Ui(),null})),l=(i.flags&15990)!==0,i.subtreeFlags&15990||l){l=sn.transition,sn.transition=null;var s=ee;ee=1;var a=O;O|=4,as.current=null,wo(e,i),au(i,e),jh(pl),xt=!!gl,pl=gl=null,e.current=i,vo(i),Zu(),O=a,ee=s,sn.transition=l}else e.current=i;if(wr&&(wr=!1,Vn=e,vr=r),l=e.pendingLanes,l===0&&(_n=null),Qu(i.stateNode),_e(e,ge()),n!==null)for(t=e.onRecoverableError,i=0;i<n.length;i++)r=n[i],t(r.value,{componentStack:r.stack,digest:r.digest});if(pr)throw pr=!1,e=hs,hs=null,e;return vr&1&&e.tag!==0&&Ui(),l=e.pendingLanes,l&1?e===os?wt++:(wt=0,os=e):wt=0,Pn(),null}function Ui(){if(Vn!==null){var e=la(vr),n=sn.transition,i=ee;try{if(sn.transition=null,ee=16>e?16:e,Vn===null)var t=!1;else{if(e=Vn,Vn=null,vr=0,O&6)throw Error(f(331));var r=O;for(O|=4,y=e.current;y!==null;){var l=y,s=l.child;if(y.flags&16){var a=l.deletions;if(a!==null){for(var d=0;d<a.length;d++){var m=a[d];for(y=m;y!==null;){var w=y;switch(w.tag){case 0:case 11:case 15:ft(8,w,l)}var v=w.child;if(v!==null)v.return=w,y=v;else for(;y!==null;){w=y;var g=w.sibling,z=w.return;if(iu(w),w===m){y=null;break}if(g!==null){g.return=z,y=g;break}y=z}}}var W=l.alternate;if(W!==null){var M=W.child;if(M!==null){W.child=null;do{var pe=M.sibling;M.sibling=null,M=pe}while(M!==null)}}y=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,y=s;else e:for(;y!==null;){if(l=y,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ft(9,l,l.return)}var o=l.sibling;if(o!==null){o.return=l.return,y=o;break e}y=l.return}}var u=e.current;for(y=u;y!==null;){s=y;var c=s.child;if(s.subtreeFlags&2064&&c!==null)c.return=s,y=c;else e:for(s=u;y!==null;){if(a=y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mr(9,a)}}catch(H){fe(a,a.return,H)}if(a===s){y=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,y=S;break e}y=a.return}}if(O=r,Pn(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Wt,e)}catch{}t=!0}return t}finally{ee=i,sn.transition=n}}return!1}function vu(e,n,i){n=Li(i,n),n=Nd(e,n,1),e=jn(e,n,1),n=Re(),e!==null&&(Ki(e,1,n),_e(e,n))}function fe(e,n,i){if(e.tag===3)vu(e,e,i);else for(;n!==null;){if(n.tag===3){vu(n,e,i);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(_n===null||!_n.has(t))){e=Li(i,e),e=Rd(n,e,1),n=jn(n,e,1),e=Re(),n!==null&&(Ki(n,1,e),_e(n,e));break}}n=n.return}}function yo(e,n,i){var t=e.pingCache;t!==null&&t.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&i,ze===e&&(We&i)===i&&(ke===4||ke===3&&(We&130023424)===We&&500>ge()-us?si(e,0):ds|=i),_e(e,n)}function Su(e,n){n===0&&(e.mode&1?(n=Ht,Ht<<=1,!(Ht&130023424)&&(Ht=4194304)):n=1);var i=Re();e=Mn(e,n),e!==null&&(Ki(e,n,i),_e(e,i))}function Eo(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Su(e,i)}function Wo(e,n){var i=0;switch(e.tag){case 13:var t=e.stateNode,r=e.memoizedState;r!==null&&(i=r.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(f(314))}t!==null&&t.delete(n),Su(e,i)}var ku;ku=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Pe.current)je=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return je=!1,mo(e,n,i);je=!!(e.flags&131072)}else je=!1,he&&n.flags&1048576&&qa(n,Qt,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;or(e,n),e=n.pendingProps;var r=bi(n,Fe.current);Mi(n,i),r=Pl(null,n,t,e,r,i);var l=Kl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ke(t)?(l=!0,Zt(n)):l=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ul(n),r.updater=ur,n.stateNode=r,r._reactInternals=n,Zl(n,t,e,i),n=Xl(null,n,t,!0,l,i)):(n.tag=0,he&&l&&Dl(n),Ne(null,n,r,i),n=n.child),n;case 16:t=n.elementType;e:{switch(or(e,n),e=n.pendingProps,r=t._init,t=r(t._payload),n.type=t,r=n.tag=Ho(t),e=mn(t,e),r){case 0:n=Ql(null,n,t,e,i);break e;case 1:n=Od(null,n,t,e,i);break e;case 11:n=Kd(null,n,t,e,i);break e;case 14:n=jd(null,n,t,mn(t.type,e),i);break e}throw Error(f(306,t,""))}return n;case 0:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:mn(t,r),Ql(e,n,t,r,i);case 1:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:mn(t,r),Od(e,n,t,r,i);case 3:e:{if(Zd(n),e===null)throw Error(f(387));t=n.pendingProps,l=n.memoizedState,r=l.element,dd(e,n),ir(n,t,null,i);var s=n.memoizedState;if(t=s.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){r=Li(Error(f(423)),n),n=Jd(e,n,t,i,r);break e}else if(t!==r){r=Li(Error(f(424)),n),n=Jd(e,n,t,i,r);break e}else for(Xe=Rn(n.stateNode.containerInfo.firstChild),Qe=n,he=!0,cn=null,i=sd(n,null,t,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(yi(),t===r){n=Ln(e,n,i);break e}Ne(e,n,t,i)}n=n.child}return n;case 5:return od(n),e===null&&Wl(n),t=n.type,r=n.pendingProps,l=e!==null?e.memoizedProps:null,s=r.children,wl(t,r)?s=null:l!==null&&wl(t,l)&&(n.flags|=32),Vd(e,n),Ne(e,n,s,i),n.child;case 6:return e===null&&Wl(n),null;case 13:return $d(e,n,i);case 4:return Tl(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Ei(n,null,t,i):Ne(e,n,t,i),n.child;case 11:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:mn(t,r),Kd(e,n,t,r,i);case 7:return Ne(e,n,n.pendingProps,i),n.child;case 8:return Ne(e,n,n.pendingProps.children,i),n.child;case 12:return Ne(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(t=n.type._context,r=n.pendingProps,l=n.memoizedProps,s=r.value,re(qt,t._currentValue),t._currentValue=s,l!==null)if(on(l.value,s)){if(l.children===r.children&&!Pe.current){n=Ln(e,n,i);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var d=a.firstContext;d!==null;){if(d.context===t){if(l.tag===1){d=Hn(-1,i&-i),d.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var w=m.pending;w===null?d.next=d:(d.next=w.next,w.next=d),m.pending=d}}l.lanes|=i,d=l.alternate,d!==null&&(d.lanes|=i),Gl(l.return,i,n),a.lanes|=i;break}d=d.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(f(341));s.lanes|=i,a=s.alternate,a!==null&&(a.lanes|=i),Gl(s,i,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Ne(e,n,r.children,i),n=n.child}return n;case 9:return r=n.type,t=n.pendingProps.children,Mi(n,i),r=rn(r),t=t(r),n.flags|=1,Ne(e,n,t,i),n.child;case 14:return t=n.type,r=mn(t,n.pendingProps),r=mn(t.type,r),jd(e,n,t,r,i);case 15:return Cd(e,n,n.type,n.pendingProps,i);case 17:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:mn(t,r),or(e,n),n.tag=1,Ke(t)?(e=!0,Zt(n)):e=!1,Mi(n,i),Td(n,t,r),Zl(n,t,r,i),Xl(null,n,t,!0,e,i);case 19:return Xd(e,n,i);case 22:return _d(e,n,i)}throw Error(f(156,n.tag))};function bu(e,n){return ea(e,n)}function Mo(e,n,i,t){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,i,t){return new Mo(e,n,i,t)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ho(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===en)return 11;if(e===Ze)return 14}return 2}function Jn(e,n){var i=e.alternate;return i===null?(i=an(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function zr(e,n,i,t,r,l){var s=2;if(t=e,typeof e=="function")ws(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Le:return di(i.children,r,l,n);case Ie:s=8,r|=8;break;case dn:return e=an(12,i,n,r|2),e.elementType=dn,e.lanes=l,e;case Ae:return e=an(13,i,n,r),e.elementType=Ae,e.lanes=l,e;case Oe:return e=an(19,i,n,r),e.elementType=Oe,e.lanes=l,e;case B:return Dr(i,r,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case un:s=10;break e;case wn:s=9;break e;case en:s=11;break e;case Ze:s=14;break e;case R:s=16,t=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return n=an(s,i,n,r),n.elementType=e,n.type=t,n.lanes=l,n}function di(e,n,i,t){return e=an(7,e,t,n),e.lanes=i,e}function Dr(e,n,i,t){return e=an(22,e,t,n),e.elementType=B,e.lanes=i,e.stateNode={isHidden:!1},e}function vs(e,n,i){return e=an(6,e,null,n),e.lanes=i,e}function Ss(e,n,i){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Lo(e,n,i,t,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Or(0),this.expirationTimes=Or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.identifierPrefix=t,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ks(e,n,i,t,r,l,s,a,d){return e=new Lo(e,n,i,a,d),n===1?(n=1,l===!0&&(n|=8)):n=0,l=an(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:t,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(l),e}function Fo(e,n,i){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:t==null?null:""+t,children:e,containerInfo:n,implementation:i}}function zu(e){if(!e)return In;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(f(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(f(171))}if(e.tag===1){var i=e.type;if(Ke(i))return Qa(e,i,n)}return n}function Du(e,n,i,t,r,l,s,a,d){return e=ks(i,t,!0,e,r,l,s,a,d),e.context=zu(null),i=e.current,t=Re(),r=On(i),l=Hn(t,r),l.callback=n??null,jn(i,l,r),e.current.lanes=r,Ki(e,r,t),_e(e,t),e}function yr(e,n,i,t){var r=n.current,l=Re(),s=On(r);return i=zu(i),n.context===null?n.context=i:n.pendingContext=i,n=Hn(l,s),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=jn(r,n,s),e!==null&&(pn(e,r,s,l),nr(e,r,s)),s}function Er(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function bs(e,n){yu(e,n),(e=e.alternate)&&yu(e,n)}var Eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Wr.prototype.render=zs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(f(409));yr(e,n,null,null)},Wr.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;li(function(){yr(null,e,null,null)}),n[Dn]=null}};function Wr(e){this._internalRoot=e}Wr.prototype.unstable_scheduleHydration=function(e){if(e){var n=da();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Tn.length&&n!==0&&n<Tn[i].priority;i++);Tn.splice(i,0,e),i===0&&oa(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Go(e,n,i,t,r){if(r){if(typeof t=="function"){var l=t;t=function(){var m=Er(s);l.call(m)}}var s=Du(n,t,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Dn]=s.current,nt(e.nodeType===8?e.parentNode:e),li(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof t=="function"){var a=t;t=function(){var m=Er(d);a.call(m)}}var d=ks(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=d,e[Dn]=d.current,nt(e.nodeType===8?e.parentNode:e),li(function(){yr(n,d,i,t)}),d}function Hr(e,n,i,t,r){var l=i._reactRootContainer;if(l){var s=l;if(typeof r=="function"){var a=r;r=function(){var d=Er(s);a.call(d)}}yr(n,s,e,r)}else s=Go(i,n,e,r,t);return Er(s)}sa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Pi(n.pendingLanes);i!==0&&(Zr(n,i|1),_e(n,ge()),!(O&6)&&(xi=ge()+500,Pn()))}break;case 13:li(function(){var t=Mn(e,1);if(t!==null){var r=Re();pn(t,e,1,r)}}),bs(e,1)}},Jr=function(e){if(e.tag===13){var n=Mn(e,134217728);if(n!==null){var i=Re();pn(n,e,134217728,i)}bs(e,134217728)}},aa=function(e){if(e.tag===13){var n=On(e),i=Mn(e,n);if(i!==null){var t=Re();pn(i,e,n,t)}bs(e,n)}},da=function(){return ee},ua=function(e,n){var i=ee;try{return ee=e,n()}finally{ee=i}},Pr=function(e,n,i){switch(n){case"input":if(xr(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var t=i[n];if(t!==e&&t.form===e.form){var r=Vt(t);if(!r)throw Error(f(90));Us(t),xr(t,r)}}}break;case"textarea":Bs(e,i);break;case"select":n=i.value,n!=null&&ui(e,!!i.multiple,n,!1)}},Zs=fs,Js=li;var xo={usingClientEntryPoint:!1,Events:[rt,Si,Vt,Vs,Os,fs]},vt={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uo={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{Wt=Lr.inject(Uo),vn=Lr}catch{}}return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xo,Ve.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(n))throw Error(f(200));return Fo(e,n,null,i)},Ve.createRoot=function(e,n){if(!Ds(e))throw Error(f(299));var i=!1,t="",r=Eu;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ks(e,1,!1,null,null,i,!1,t,r),e[Dn]=n.current,nt(e.nodeType===8?e.parentNode:e),new zs(n)},Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=Ys(n),e=e===null?null:e.stateNode,e},Ve.flushSync=function(e){return li(e)},Ve.hydrate=function(e,n,i){if(!Mr(n))throw Error(f(200));return Hr(null,e,n,!0,i)},Ve.hydrateRoot=function(e,n,i){if(!Ds(e))throw Error(f(405));var t=i!=null&&i.hydratedSources||null,r=!1,l="",s=Eu;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),n=Du(n,null,e,1,i??null,r,!1,l,s),e[Dn]=n.current,nt(e),t)for(e=0;e<t.length;e++)i=t[e],r=i._getVersion,r=r(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,r]:n.mutableSourceEagerHydrationData.push(i,r);return new Wr(n)},Ve.render=function(e,n,i){if(!Mr(n))throw Error(f(200));return Hr(null,e,n,!1,i)},Ve.unmountComponentAtNode=function(e){if(!Mr(e))throw Error(f(40));return e._reactRootContainer?(li(function(){Hr(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1},Ve.unstable_batchedUpdates=fs,Ve.unstable_renderSubtreeIntoContainer=function(e,n,i,t){if(!Mr(i))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Hr(e,n,i,!1,t)},Ve.version="18.3.1-next-f1338f8080-20240426",Ve}var Tu;function Ko(){if(Tu)return Ws.exports;Tu=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(L){console.error(L)}}return D(),Ws.exports=Po(),Ws.exports}var Au;function jo(){if(Au)return Fr;Au=1;var D=Ko();return Fr.createRoot=D.createRoot,Fr.hydrateRoot=D.hydrateRoot,Fr}var Co=jo();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=D=>D.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nu=(...D)=>D.filter((L,f,X)=>!!L&&L.trim()!==""&&X.indexOf(L)===f).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=le.forwardRef(({color:D="currentColor",size:L=24,strokeWidth:f=2,absoluteStrokeWidth:X,className:T="",children:F,iconNode:A,...se},_)=>le.createElement("svg",{ref:_,...Vo,width:L,height:L,stroke:D,strokeWidth:X?Number(f)*24/Number(L):f,className:Nu("lucide",T),...se},[...A.map(([me,ne])=>le.createElement(me,ne)),...Array.isArray(F)?F:[F]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(D,L)=>{const f=le.forwardRef(({className:X,...T},F)=>le.createElement(Oo,{ref:F,iconNode:L,className:Nu(`lucide-${_o(D)}`,X),...T}));return f.displayName=`${D}`,f};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=qe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=qe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=qe("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=qe("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=qe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=qe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=qe("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=qe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=qe("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=qe("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=qe("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=qe("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Gs=({className:D,children:L})=>b.jsx("div",{className:`rounded-xl border bg-card text-card-foreground shadow ${D}`,children:L}),xs=({className:D,children:L})=>b.jsx("div",{className:`p-6 pt-0 ${D}`,children:L}),lc=({poemsData:D,currentPoemId:L,onPoemChange:f,onFontSizeChange:X,likedPoems:T,onToggleLike:F})=>{const[A,se]=le.useState(!1),[_,me]=le.useState(0),[ne,Y]=le.useState(0),[Q,Me]=le.useState(.7),[I,V]=le.useState(!1),[j,He]=le.useState(!0),we=le.useRef(null),Be=le.useRef(null),ie=Object.keys(D),Te=D[L];le.useEffect(()=>{He(!0),me(0),Y(0)},[L]),le.useEffect(()=>{const R=we.current,B=()=>{He(!1),A&&R.play().catch(console.error)},k=()=>{He(!0)},G=()=>{He(!1),A&&R.play().catch(console.error)};return R.addEventListener("loadstart",k),R.addEventListener("canplay",B),R.addEventListener("loadeddata",G),()=>{R.removeEventListener("loadstart",k),R.removeEventListener("canplay",B),R.removeEventListener("loadeddata",G)}},[A]);const ye=()=>{j||(A?we.current.pause():we.current.play().catch(console.error),se(!A))},Le=()=>{me(we.current.currentTime)},Ie=()=>{Y(we.current.duration),He(!1)},dn=R=>{if(j)return;const B=Be.current.getBoundingClientRect(),G=(R.touches[0].clientX-B.left)/B.width;we.current.currentTime=G*ne},un=R=>{const B=parseFloat(R.target.value);Me(B),we.current&&(we.current.volume=B)},wn=()=>{if(I){const R=ie.filter(k=>k!==L),B=Math.floor(Math.random()*R.length);f(R[B])}else{const B=(ie.indexOf(L)+1)%ie.length;f(ie[B])}},en=()=>{const B=(ie.indexOf(L)-1+ie.length)%ie.length;f(ie[B])},Ae=()=>{if(V(!I),!I){const R=ie.filter(k=>k!==L),B=Math.floor(Math.random()*R.length);f(R[B]),se(!0)}},Oe=()=>{F(L)},Ze=R=>{const B=Math.floor(R/60),k=Math.floor(R%60);return`${B}:${k.toString().padStart(2,"0")}`};return b.jsx(Gs,{className:"bg-gray-100",children:b.jsxs(xs,{className:"p-3",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("h3",{className:"text-lg font-semibold",children:Te.title}),b.jsx("p",{className:"text-sm text-gray-600",children:Te.author})]}),b.jsx("audio",{ref:we,src:Te.audioFile,onTimeUpdate:Le,onLoadedMetadata:Ie,onEnded:wn,onError:R=>{console.error("Audio error:",{error:R.target.error,src:R.target.src,readyState:R.target.readyState,networkState:R.target.networkState}),He(!1)},playsInline:!0}),b.jsx("div",{ref:Be,className:"w-full h-3 bg-gray-300 rounded-full mb-2 touch-none cursor-pointer",onTouchStart:dn,onTouchMove:dn,children:b.jsx("div",{className:"h-full bg-blue-500 rounded-full",style:{width:`${_/ne*100}%`}})}),b.jsxs("div",{className:"flex justify-between text-sm mb-3",children:[b.jsx("span",{children:Ze(_)}),b.jsx("span",{children:Ze(ne)})]}),b.jsxs("div",{className:"flex items-center justify-between gap-4",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(tc,{size:18}),b.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:Q,onChange:un,className:"w-24 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer",style:{WebkitAppearance:"none",background:`linear-gradient(to right, #3b82f6 ${Q*100}%, #d1d5db ${Q*100}%)`}})]}),b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("button",{onClick:Ae,className:`p-2 hover:bg-gray-200 rounded-full transition-colors ${I?"bg-blue-100 text-blue-600":""}`,disabled:j,children:b.jsx(ec,{size:20})}),b.jsx("button",{onClick:en,className:"p-2 hover:bg-gray-200 rounded-full",disabled:j,children:b.jsx(nc,{size:20})}),b.jsx("button",{onClick:ye,className:`p-4 ${j?"bg-gray-400":"bg-blue-500 hover:bg-blue-600"} rounded-full text-white`,disabled:j,children:A?b.jsx(Yo,{size:24}):b.jsx(qo,{size:24})}),b.jsx("button",{onClick:wn,className:"p-2 hover:bg-gray-200 rounded-full",disabled:j,children:b.jsx(ic,{size:20})}),b.jsx("button",{onClick:Oe,className:"p-2 hover:bg-gray-200 rounded-full",children:b.jsx(Ru,{size:20,fill:T.includes(L)?"#ef4444":"none"})})]}),b.jsxs("div",{className:"flex items-center gap-2",children:["Schrift",b.jsx("button",{onClick:()=>X("decrease"),className:"p-2 hover:bg-gray-200 rounded-full text-gray-600 transition-colors touch-manipulation",children:b.jsx($o,{size:20})}),b.jsx("button",{onClick:()=>X("increase"),className:"p-2 hover:bg-gray-200 rounded-full text-gray-600 transition-colors touch-manipulation",children:b.jsx(Qo,{size:20})})]})]})]})})},Ls={"002":{id:"002",title:"Für wen ich singe",audioFile:"./audio/002.mp3",author:"Gotthold Ephraim Lessing",text:`Ich singe nicht für kleine Knaben,
Die voller Stolz zur Schule gehn,
Und den Ovid in Händen haben,
Den ihre Lehrer nicht verstehn.

Ich singe nicht für euch, ihr Richter,
Die ihr voll spitz′ger Gründlichkeit
Ein unerträglich Joch dem Dichter,
Und euch die Muster selber seid.

Ich singe nicht den kühnen Geistern,
Die nur Homer und Milton reizt;
Weil man den unerschöpften Meistern
Die Lorbeern nur umsonst begeizt.

Ich singe nicht, durch Stolz gedrungen,
Für dich, mein deutsches Vaterland.
Ich fürchte jene Lästerzungen,
Die dich bis an den Pol verbannt.

Ich singe nicht für fremde Reiche.
Wie käm′ mir solch ein Ehrgeiz ein?
Das sind verwegne Autorstreiche.
Ich mag nicht übersetzet sein.

Ich singe nicht für fromme Schwestern,
Die nie der Liebe Reiz gewinnt,
Die, wenn wir munter singen, lästern,
Daß wir nicht alle Schmolcken sind.

Ich singe nur für euch, ihr Brüder,
Die ihr den Wein erhebt, wie ich.
Für euch, für euch sind meine Lieder.
Singt ihr sie nach: o Glück für mich!

Ich singe nur für meine Schöne,
O muntre Phyllis, nur für dich.
Für dich, für dich sind meine Töne.
Stehn sie dir an, so küsse mich.

`},"003":{id:"003",title:"Ich",audioFile:"./audio/003.mp3",author:"Gotthold Ephraim Lessing",text:`Die Ehre hat mich nie gesucht;
Sie hätte mich auch nie gefunden.
Wählt man, in zugezählten Stunden,
Ein prächtig Feierkleid zur Flucht?

Auch Schätze hab ich nie begehrt.
Was hilft es sie auf kurzen Wegen
Für Diebe mehr als sich zu hegen,
Wo man das wenigste verzehrt?

Wie lange währts, so bin ich hin,
Und einer Nachwelt untern Füßen?
Was braucht sie wen sie tritt zu wissen?
Weiß ich nur, wer ich bin.
`},"004":{id:"004",title:"Das Heideröslein",audioFile:"./audio/004.mp3",author:"Johann Wolfgang von Goethe",text:`Sah ein Knab ein Röslein stehn,
Röslein auf der Heiden,
War so jung und morgenschön,
Lief er schnell es nah zu sehn,
Sahs mit vielen Freuden.
Röslein, Röslein, Röslein rot,
Röslein auf der Heiden.

Knabe sprach: ich breche dich,
Röslein auf der Heiden!
Röslein sprach: ich steche dich,
Daß du ewig denkst an mich,
Und ich wills nicht leiden.
Röslein, Röslein, Röslein rot,
Röslein auf der Heiden.

Und der wilde Knabe brach
's Röslein auf der Heiden;
Röslein wehrte sich und stach,
Half ihm doch kein Weh und Ach,
Mußt es eben leiden.
Röslein, Röslein, Röslein rot,
Röslein auf der Heiden.
`},"005":{id:"005",title:"Mailied",audioFile:"./audio/005.mp3",author:"Johann Wolfgang von Goethe",text:`Wie herrlich leuchtet
Mir die Natur!
Wie glänzt die Sonne!
Wie lacht die Flur!

Es dringen Blüten
Aus jedem Zweig
Und tausend Stimmen
Aus dem Gesträuch

Und Freud' und Wonne
Aus jeder Brust.
O Erd', o Sonne!
O Glück, o Lust!

O Lieb', o Liebe!
So golden schön,
Wie Morgenwolken
Auf jenen Höhn!

Du segnest herrlich
Das frische Feld,
Im Blütendampfe
Die volle Welt.

O Mädchen, Mädchen,
Wie lieb' ich dich!
Wie blickt dein Auge!
Wie liebst du mich!

So liebt die Lerche
Gesang und Luft,
Und Morgenblumen
Den Himmelsduft,

Wie ich dich liebe
Mit warmem Blut,
Die du mir Jugend
Und Freud' und Mut

Zu neuen Liedern
Und Tänzen gibst.
Sei ewig glücklich,
Wie du mich liebst!

`},"006":{id:"006",title:"Willkommen und Abschied",audioFile:"./audio/006.mp3",author:"Johann Wolfgang von Goethe",text:`Es schlug mein Herz, geschwind, zu Pferde!
Es war getan fast eh gedacht.
Der Abend wiegte schon die Erde,
Und an den Bergen hing die Nacht;
Schon stand im Nebelkleid die Eiche
Ein aufgetürmter Riese, da,
Wo Finsternis aus dem Gesträuche
Mit hundert schwarzen Augen sah.

Der Mond von einem Wolkenhügel
Sah kläglich aus dem Duft hervor,
Die Winde schwangen leise Flügel,
Umsausten schauerlich mein Ohr;
Die Nacht schuf tausend Ungeheuer,
Doch frisch und fröhlich war mein Mut:
In meinen Adern welches Feuer!
In meinem Herzen welche Glut!

Dich sah ich, und die milde Freude
Floß von dem süßen Blick auf mich;
Ganz war mein Herz an deiner Seite
Und jeder Atemzug für dich.
Ein rosenfarbnes Frühlingswetter
Umgab das liebliche Gesicht,
Und Zärtlichkeit für mich - ihr Götter!
Ich hofft es, ich verdient es nicht!

Doch ach, schon mit der Morgensonne
Verengt der Abschied mir das Herz:
In deinen Küssen welche Wonne!
In deinem Auge welcher Schmerz!
Ich ging, du standst und sahst zur Erden
Und sahst mir nach mit nassem Blick:
Und doch, welch Glück, geliebt zu werden!
Und lieben, Götter, welch ein Glück!
`},"007":{id:"007",title:"Kleine Blumen, kleine Blätter",audioFile:"./audio/007.mp3",author:"Johann Wolfgang von Goethe",text:`Kleine Blumen, kleine Blätter
Streuen mir mit leichter Hand
Gute junge Frühlingsgötter
Tandlend auf ein luftig Band.

Zephyr, nimm's auf deine Flügel,
Schling's um meiner Liebsten Kleid;
Und dann tritt sie für den Spiegel
Mit zufriedener Munterkeit.

Sieht mit Rosen sich umgeben,
Sie wie eine Rose jung.
Einen Kuß, geliebtes Leben!
Und ich bin belohnt genu(n)g.

Schicksal, segne diese Trieben,
Laß mich ihr und laß sie mein,
Laß das Leben unsrer Liebe
Doch kein Rosenleben sein!

Mädchen, das wie ich empfindet,
Reich mir deine liebe Hand!
Und das Band, das uns verbindet,
Sei kein schwaches Rosenband!
`},"008":{id:"008",title:"Ein grauer trüber Morgen",audioFile:"./audio/008.mp3",author:"Johann Wolfgang von Goethe",text:`Ein grauer, trüber Morgen
Bedeckt mein liebes Feld;
Im Nebel tief verborgen
Liegt um mich her die Welt.
0 liebliche Friedrike,
Dürft‘ ich nach dir zurück!
In einem deiner Blicke
Liegt Sonnenschein und Glück.
    
Der Baum, in dessen Rinde
Mein Nam‘ bei deinem steht,
Wird bleich vom rauhen Winde,
Der jede Lust verweht.
      
Der Wiesen grüner Schimmer
Wird trüb wie mein Gesicht:
Sie sehn die Sonne nimmer
Und ich Friedriken nicht.
      
Bald geh‘ ich in die Reben
Und herbste Trauben ein;
Umher ist alles Leben,
Es strudelt neuer Wein.
Doch in der öden Laube,
Ach, denk‘ ich, wär‘ sie hier!
Ich brächt‘ ihr diese Traube,
Und sie, - was gäb‘ sie mir?

`},"009":{id:"009",title:"Legende",audioFile:"./audio/009.mp3",author:"Johann Wolfgang von Goethe",text:`Als noch, verkannt und sehr gering,
Unser Herr auf der Erde ging,
Und viele Jünger sich zu ihm fanden,
Die sehr selten sein Wort verstanden,
Liebt er sich gar über die Masen
Seinen Hof zu halten auf der Straßen,
Weil unter des Himmels Angesicht
Man immer besser und freyer spricht;
Er ließ sie da die höchsten Lehren
Aus seinem heilgen Munde hören;
Besonders durch Gleichniß und Exempel
Macht er einen jeden Markt zum Tempel.

     So schlendert’ er, in Geistes Ruh,
Mit ihnen einst einem Städtchen zu,
Sah etwas blinken auf der Straß,
Das ein zerbrochen Hufeisen was.
Er sagte zu St. Peter drauf:
Heb doch einmal das Eisen auf!
Sanct Peter war nicht aufgeräumt,
Er hatte so eben im Gehen geträumt,
So was vom Regiment der Welt,
Was einem jeden wohlgefällt,
Denn im Kopf hat das keine Schranken,
Das waren seine liebsten Gedanken.
Nun war der Fund ihm viel zu klein,
ätte müssen Kron und Zepter seyn,
Aber wie sollt er seinen Rücken
Nach einem halben Hufeisen bücken?
Er also sich zur Seite kehrt
Und thut als hätt’ ers nicht gehört.


     Der Herr, nach seiner Langmuth, drauf
Hebt selber das Hufeisen auf
Und thut auch weiter nicht dergleichen.
Als sie nun bald die Stadt erreichen,
Geht er vor eines Schmiedes Thür,
Nimmt von dem Mann drey Pfennig dafür.
Und als sie über den Markt nun gehen
Sieht er daselbst schöne Kirschen stehen,
Kauft ihrer, so wenig oder so viel,
Als man für einen Dreyer geben will,

Die er sodann nach seiner Art,
Ruhig im Ermel aufbewahrt.

     Nun gings zum andern Thor hinaus,
Durch Wies’ und Felder ohne Haus,
Auch war der Weg von Bäumen blos,
Die Sonne schien, die Hitz war groß,
So daß man viel an solcher Stätt’,
Für einen Trunk Wasser gegeben hätt’.
Der Herr geht immer voraus vor allen,
Läßt unversehens eine Kirsche fallen.
Sanct Peter war gleich dahinter her,
Als wenn es ein goldner Apfel wär,
Das Beerlein schmeckte seinem Gaum.
Der Herr, nach einem kleinen Raum,
Ein ander Kirschlein zur Erde schickt,
Wornach Sanct Peter schnell sich bückt,
So läßt der Herr ihn seinen Rücken
Gar vielmal nach den Kirschen bücken.
Das dauert eine ganze Zeit.
Dann sprach der Herr mit Heiterkeit:
Thätst du zur rechten Zeit dich regen,
So hättst du’s bequemer haben mögen.
Wer geringe Ding wenig acht’t
Sich um geringere Mühe macht.

`},"010":{id:"010",title:"Zueignung Faust",audioFile:"./audio/010.mp3",author:"Johann Wolfgang von Goethe",text:`Ihr naht euch wieder, schwankende Gestalten,
Die früh sich einst dem trüben Blick gezeigt.
Versuch ich wohl, euch diesmal festzuhalten?
Fühl ich mein Herz noch jenem Wahn geneigt?
Ihr drängt euch zu! nun gut, so mögt ihr walten,
Wie ihr aus Dunst und Nebel um mich steigt;
Mein Busen fühlt sich jugendlich erschüttert
Vom Zauberhauch, der euren Zug umwittert.

Ihr bringt mit euch die Bilder froher Tage,
Und manche liebe Schatten steigen auf;
Gleich einer alten, halbverklungnen Sage
Kommt erste Lieb und Freundschaft mit herauf;
Der Schmerz wird neu, es wiederholt die Klage
Des Lebens labyrinthisch irren Lauf,
Und nennt die Guten, die, um schöne Stunden
Vom Glück getäuscht, vor mir hinweggeschwunden.

Sie hören nicht die folgenden Gesänge,
Die Seelen, denen ich die ersten sang;
Zerstoben ist das freundliche Gedränge,
Verklungen, ach! der erste Widerklang.
Mein Lied ertönt der unbekannten Menge,
Ihr Beifall selbst macht meinem Herzen bang,
Und was sich sonst an meinem Lied erfreuet,
Wenn es noch lebt, irrt in der Welt zerstreuet.

Und mich ergreift ein längst entwöhntes Sehnen
Nach jenem stillen, ernsten Geisterreich,
Es schwebet nun in unbestimmten Tönen
Mein lispelnd Lied, der Äolsharfe gleich,
Ein Schauer faßt mich, Träne folgt den Tränen,
Das strenge Herz, es fühlt sich mild und weich;
Was ich besitze, seh ich wie im Weiten,
Und was verschwand, wird mir zu Wirklichkeiten.

`},"011":{id:"011",title:"Die Kraniche des Ibykus (Teil 1)",audioFile:"./audio/011.mp3",author:"Friedrich Schiller",text:`
Zum Kampf der Wagen und Gesänge,
Der auf Korinthus' Landesenge
Der Griechen Stämme froh vereint,
Zog Ibykus, der Götterfreund.
Ihm schenkte des Gesanges Gabe,
Der Lieder süßen Mund Apoll,
So wandert' er, an leichtem Stabe,
Aus Rhegium, des Gottes voll.

Schon winkt auf hohem Bergesrücken
Akrokorinth des Wandrers Blicken,
Und in Poseidons Fichtenhain
Tritt er mit frommem Schauder ein.
Nichts regt sich um ihn her, nur Schwärme
Von Kranichen begleiten ihn,
Die fernhin nach des Südens Wärme
In graulichtem Geschwader ziehn.

"Seid mir gegrüßt, befreundte Scharen!
Die mir zur See Begleiter waren,
Zum guten Zeichen nehm ich euch,
Mein Los, es ist dem euren gleich. 
Von fernher kommen wir gezogen
Und flehen um ein wirtlich Dach.
Sei uns der Gastliche gewogen,
Der von dem Fremdling wehrt die Schmach!"

Und munter fördert er die Schritte
Und sieht sich in des Waldes Mitte,
Da sperren, auf gedrangem Steg,
Zwei Mörder plötzlich seinen Weg.
Zum Kampfe muss er sich bereiten,
Doch bald ermattet sinkt die Hand,
Sie hat der Leier zarte Saiten,
Doch nie des Bogens Kraft gespannt.

Er ruft die Menschen an, die Götter,
Sein Flehen dringt zu keinem Retter,
Wie weit er auch die Stimme schickt,
Nicht Lebendes wird hier erblickt.
"So muss ich hier verlassen sterben,
Auf fremdem Boden, unbeweint,
Durch böser Buben Hand verderben,
Wo auch kein Rächer mir erscheint!"

Und schwer getroffen sinkt er nieder,
Da rauscht der Kraniche Gefieder,
Er hört, schon kann er nichts mehr sehn,
Die nahen Stimmen furchtbar krähn.
"Von euch, ihr Kraniche dort oben,
Wenn keine andre Stimme spricht,
Sei meines Mordes Klag erhoben!"
Er ruft es, und sein Auge bricht.
Der nackte Leichnam wird gefunden,
Und bald, obgleich entstellt von Wunden,
Erkennt der Gastfreund in Korinth
Die Züge, die ihm teuer sind.
"Und muss ich dich so wiederfinden,
Und hoffte mit der Fichte Kranz
Des Sängers Schläfe zu umwinden,
Bestrahlt von seines Ruhmes Glanz!"

Und jammernd hören's alle Gäste,
Versammelt bei Poseidons Feste,
Ganz Griechenland ergreift der Schmerz,
Verloren hat ihn jedes Herz.
Und stürmend drängt sich zum Prytanen
Das Volk, es fordert seine Wut,
Zu rächen des Erschlagnen Manen,
Zu sühnen mit des Mörders Blut.

Doch wo die Spur, die aus der Menge,
Der Völker flutendem Gedränge,
Gelocket von der Spiele Pracht,
Den schwarzen Täter kenntlich macht?
Sind's Räuber, die ihn feig erschlagen?
Tat's neidisch ein verborgner Feind?
Nur Helios vermag's zu sagen,
Der alles Irdische bescheint.

Er geht vielleicht mit frechem Schritte
Jetzt eben durch der Griechen Mitte,
Und während ihn die Rache sucht,
Genießt er seines Frevels Frucht.
Auf ihres eignen Tempels Schwelle
Trotzt er vielleicht den Göttern, mengt
Sich dreist in jene Menschenwelle,
Die dort sich zum Theater drängt.

Denn Bank an Bank gedränget sitzen,
Es brechen fast der Bühne Stützen,
Herbeigeströmt von fern und nah,
Der Griechen Völker wartend da,
Dumpf brausend wie des Meeres Wogen;
Von Menschen wimmelnd, wächst der Bau
In weiter stets geschweiftem Bogen
Hinauf bis in des Himmels Blau.

Wer zählt die Völker, nennt die Namen,
Die gastlich hier zusammenkamen?
Von Theseus' Stadt, von Aulis' Strand,
Von Phokis, vom Spartanerland,
Von Asiens entlegener Küste,
Von allen Inseln kamen sie
Und horchen von dem Schaugerüste
Des Chores grauser Melodie,
Der streng und ernst, nach alter Sitte,
Mit langsam abgemessnem Schritte,
Hervortritt aus dem Hintergrund,
Umwandelnd des Theaters Rund.

So schreiten keine irdschen Weiber,
Die zeugete kein sterblich Haus!
Es steigt das Riesenmaß der Leiber
Hoch über menschliches hinaus.

Ein schwarzer Mantel schlägt die Lenden,
Sie schwingen in entfleischten Händen
Der Fackel düsterrote Glut,
In ihren Wangen fließt kein Blut.
Und wo die Haare lieblich flattern,
Um Menschenstirnen freundlich wehn,
Da sieht man Schlangen hier und Nattern
Die giftgeschwollenen Bäuche blähn.

Und schauerlich gedreht im Kreise
Beginnen sie des Hymnus Weise,
Der durch das Herz zerreißend dringt,
Die Bande um den Sünder schlingt.
Besinnungsraubend, herzbetörend
Schallt der Errinyen Gesang,
Er schallt, des Hörers Mark verzehrend,
Und duldet nicht der Leier Klang:

"Wohl dem, der frei von Schuld und Fehle
Bewahrt die kindlich reine Seele!
Ihm dürfen wir nicht rächend nah’n,
Er wandelt frei des Lebens Bahn.
Doch wehe, wehe, wer verstohlen
Des Mordes schwere Tat vollbracht,
Wir heften uns an seine Sohlen,
Das furchtbare Geschlecht der Nacht!

"Und glaubt er fliehend zu entspringen,
Geflügelt sind wir da, die Schlingen
Ihm werfend um den flücht’gen Fuß,
Daß er zu Boden fallen muss.
So jagen wir ihn, ohn' Ermatten,
Versöhnen kann uns keine Reu,
Ihn fort und fort bis zu den Schatten
Und geben ihn auch dort nicht frei."

So singend, tanzen sie den Reigen,
Und Stille wie des Todes Schweigen
Liegt überm ganzen Hause schwer,
Als ob die Gottheit nahe wär.
Und feierlich, nach alter Sitte
Umwandelnd des Theaters Rund

Mit langsam abgemessnem Schritte,
Verschwinden sie im Hintergrund.

Und zwischen Trug und Wahrheit schwebet
Noch zweifelnd jede Brust und bebet
Und huldigt der furchtbarn Macht,
Die richtend im Verborgnen wacht,
Die unerforschlich, unergründet
Des Schicksals dunklen Knäuel flicht,
Dem tiefen Herzen sich verkündet,
Doch fliehet vor dem Sonnenlicht.

Da hört man auf den höchsten Stufen
Auf einmal eine Stimme rufen:
"Sieh da! Sieh da, Timotheus,
Die Kraniche des Ibykus!" -
Und finster plötzlich wird der Himmel,
Und über dem Theater hin
Sieht man in schwärzlichtem Gewimmel
Ein Kranichheer vorüberziehn.

"Des Ibykus!" - Der teure Name
Rührt jede Brust mit neuem Grame,
Und, wie im Meere Well auf Well,
So läuft's von Mund zu Munde schnell:
"Des Ibykus, den wir beweinen,
Den eine Mörderhand erschlug!
Was ist's mit dem? Was kann er meinen?
Was ist's mit diesem Kranichzug?" –

Und lauter immer wird die Frage,
Und ahnend fliegt's mit Blitzesschlage
Durch alle Herzen. "Gebet acht!
Das ist der Eumeniden Macht!
Der fromme Dichter wird gerochen,
Der Mörder bietet selbst sich dar!
Ergreift ihn, der das Wort gesprochen,
Und ihn, an den's gerichtet war."

Doch dem war kaum das Wort entfahren,
Möcht er's im Busen gern bewahren;
Umsonst, der schreckenbleiche Mund
Macht schnell die Schuldbewussten kund.
Man reißt und schleppt sie vor den Richter,
Die Szene wird zum Tribunal,
Und es gestehn die Bösewichter,
Getroffen von der Rache Strahl.

`},"012":{id:"012",title:"Die Kraniche des Ibykus (Teil 2)",audioFile:"./audio/012.mp3",author:"Friedrich Schiller",text:`Er geht vielleicht mit frechem Schritte
Jetzt eben durch der Griechen Mitte,
Und während ihn die Rache sucht,
Genießt er seines Frevels Frucht.
Auf ihres eignen Tempels Schwelle
Trotzt er vielleicht den Göttern, mengt
Sich dreist in jene Menschenwelle,
Die dort sich zum Theater drängt.

Denn Bank an Bank gedränget sitzen,
Es brechen fast der Bühne Stützen,
Herbeigeströmt von fern und nah,
Der Griechen Völker wartend da,
Dumpf brausend wie des Meeres Wogen;
Von Menschen wimmelnd, wächst der Bau
In weiter stets geschweiftem Bogen
Hinauf bis in des Himmels Blau.

Wer zählt die Völker, nennt die Namen,
Die gastlich hier zusammenkamen?
Von Theseus' Stadt, von Aulis' Strand,
Von Phokis, vom Spartanerland,
Von Asiens entlegener Küste,
Von allen Inseln kamen sie
Und horchen von dem Schaugerüste
Des Chores grauser Melodie,
Der streng und ernst, nach alter Sitte,
Mit langsam abgemessnem Schritte,
Hervortritt aus dem Hintergrund,
Umwandelnd des Theaters Rund.

So schreiten keine irdschen Weiber,
Die zeugete kein sterblich Haus!
Es steigt das Riesenmaß der Leiber
Hoch über menschliches hinaus.

Ein schwarzer Mantel schlägt die Lenden,
Sie schwingen in entfleischten Händen
Der Fackel düsterrote Glut,
In ihren Wangen fließt kein Blut.
Und wo die Haare lieblich flattern,
Um Menschenstirnen freundlich wehn,
Da sieht man Schlangen hier und Nattern
Die giftgeschwollenen Bäuche blähn.

Und schauerlich gedreht im Kreise
Beginnen sie des Hymnus Weise,
Der durch das Herz zerreißend dringt,
Die Bande um den Sünder schlingt.
Besinnungsraubend, herzbetörend
Schallt der Errinyen Gesang,
Er schallt, des Hörers Mark verzehrend,
Und duldet nicht der Leier Klang:

"Wohl dem, der frei von Schuld und Fehle
Bewahrt die kindlich reine Seele!
Ihm dürfen wir nicht rächend nah’n,
Er wandelt frei des Lebens Bahn.
Doch wehe, wehe, wer verstohlen
Des Mordes schwere Tat vollbracht,
Wir heften uns an seine Sohlen,
Das furchtbare Geschlecht der Nacht!

"Und glaubt er fliehend zu entspringen,
Geflügelt sind wir da, die Schlingen
Ihm werfend um den flücht’gen Fuß,
Daß er zu Boden fallen muss.
So jagen wir ihn, ohn' Ermatten,
Versöhnen kann uns keine Reu,
Ihn fort und fort bis zu den Schatten
Und geben ihn auch dort nicht frei."
`},"013":{id:"013",title:"Die Kraniche des Ibykus (Teil 3)",audioFile:"./audio/013.mp3",author:"Friedrich Schiller",text:`So singend, tanzen sie den Reigen,
Und Stille wie des Todes Schweigen
Liegt überm ganzen Hause schwer,
Als ob die Gottheit nahe wär.
Und feierlich, nach alter Sitte
Umwandelnd des Theaters Rund

Mit langsam abgemessnem Schritte,
Verschwinden sie im Hintergrund.

Und zwischen Trug und Wahrheit schwebet
Noch zweifelnd jede Brust und bebet
Und huldigt der furchtbarn Macht,
Die richtend im Verborgnen wacht,
Die unerforschlich, unergründet
Des Schicksals dunklen Knäuel flicht,
Dem tiefen Herzen sich verkündet,
Doch fliehet vor dem Sonnenlicht.

Da hört man auf den höchsten Stufen
Auf einmal eine Stimme rufen:
"Sieh da! Sieh da, Timotheus,
Die Kraniche des Ibykus!" -
Und finster plötzlich wird der Himmel,
Und über dem Theater hin
Sieht man in schwärzlichtem Gewimmel
Ein Kranichheer vorüberziehn.

"Des Ibykus!" - Der teure Name
Rührt jede Brust mit neuem Grame,
Und, wie im Meere Well auf Well,
So läuft's von Mund zu Munde schnell:
"Des Ibykus, den wir beweinen,
Den eine Mörderhand erschlug!
Was ist's mit dem? Was kann er meinen?
Was ist's mit diesem Kranichzug?" –

Und lauter immer wird die Frage,
Und ahnend fliegt's mit Blitzesschlage
Durch alle Herzen. "Gebet acht!
Das ist der Eumeniden Macht!
Der fromme Dichter wird gerochen,
Der Mörder bietet selbst sich dar!
Ergreift ihn, der das Wort gesprochen,
Und ihn, an den's gerichtet war."

Doch dem war kaum das Wort entfahren,
Möcht er's im Busen gern bewahren;
Umsonst, der schreckenbleiche Mund
Macht schnell die Schuldbewussten kund.
Man reißt und schleppt sie vor den Richter,
Die Szene wird zum Tribunal,
Und es gestehn die Bösewichter,
Getroffen von der Rache Strahl.
`},"014":{id:"014",title:"Das Glück",audioFile:"./audio/014.mp3",author:"Friedrich Schiller",text:`Selig, welchen die Götter, die gnädigen, vor der Geburt schon
Liebten, welchen als Kind Venus im Arme gewiegt,

Welchem Phöbus die Augen, die Lippen Hermes gelöset,
Und das Siegel der Macht Zeus auf die Stirne gedrückt!

Ein erhabenes Los, ein göttliches, ist ihm gefallen,
Schon vor des Kampfes Beginn sind ihm die Schläfe bekränzt.

Ihm ist, eh er es lebte, das volle Leben gerechnet,
Eh er die Mühe bestand, hat er die Charis erlangt.

Groß zwar nenn ich den Mann, der, sein eigner Bildner und Schöpfer,
Durch der Tugend Gewalt selber die Parze bezwingt,

Aber nicht erzwingt er das Glück, und was ihm die Charis
Neidisch geweigert, erringt nimmer der strebende Mut.

Vor Unwürdigem kann dich der Wille, der ernste, bewahren,
Alles Höchste, es kommt frei von den Göttern herab.

Wie die Geliebte dich liebt, so kommen die himmlischen Gaben,
Oben in Jupiters Reich herrscht wie in Amors die Gunst.

Neigungen haben die Götter, sie lieben der grünenden Jugend
Lockigte Scheitel, es zieht Freude die Fröhlichen an.

Nicht der Sehende wird von ihrer Erscheinung beseligt,
Ihrer Herrlichkeit Glanz hat nur der Blinde geschaut;

Gern erwählen sie sich der Einfalt kindliche Seele,
In das bescheidne Gefäß schließen sie Göttliches ein.

Ungehofft sind sie da und täuschen die stolze Erwartung,
Keines Bannes Gewalt zwinget die Freien herab.

Wem er geneigt, dem sendet der Vater der Menschen und Götter
Seinen Adler herab, trägt ihn zu himmlischen Höhn,

Unter die Menge greift er mit Eigenwillen, und welches
Haupt ihm gefället, um das flicht er mit liebender Hand

Jetzt den Lorbeer und jetzt die herrschaftgebende Binde;
Krönte doch selber den Gott nur das gewogene Glück.

Vor dem Glücklichen her tritt Phöbus, der pythische Sieger,
Und der die Herzen bezwingt, Amor, der lächelnde Gott.

Vor ihm ebnet Poseidon das Meer, sanft gleitet des Schiffes
Kiel, das den Cäsar führt und sein allmächtiges Glück.

Ihm zu Füßen legt sich der Leu, das brausende Delphin
Steigt aus den Tiefen, und fromm beut es den Rücken ihm an.

Zürne dem Glücklichen nicht, dass den leichten Sieg ihm die Götter
Schenken, dass aus der Schlacht Venus den Liebling entrückt.

Ihn, den die lächelnde rettet, den Göttergeliebten beneid ich,
Jenen nicht, dem sie mit Nacht deckt den verdunkelten Blick.

War er weniger herrlich, Achilles, weil ihm Hephästos
Selbst geschmiedet den Schild und das verderbliche Schwert,

Weil um den sterblichen Mann der große Olymp sich beweget?
Das verherrlichet ihn, dass ihn die Götter geliebt,

Dass sie sein Zürnen geehrt und, Ruhm dem Liebling zu geben,
Hellas' bestes Geschlecht stürzten zum Orkus hinab.

Zürne der Schönheit nicht, dass sie schön ist, dass sie verdienstlos
Wie der Lilie Kelch prangt durch der Venus Geschenk,

Lass sie die Glückliche sein, du schaust sie, du bist der Beglückte,
Wie sie ohne Verdienst glänzt, so entzücket sie dich.

Freue dich, dass die Gabe des Lieds vom Himmel herabkommt,
Dass der Sänger dir singt, was ihn die Muse gelehrt,

Weil der Gott ihn beseelt, so wird er dem Hörer zum Gotte,
Weil er der Glückliche ist, kannst du der Selige sein.

Auf dem geschäftigen Markt, da führe Themis die Wage,
Und es messe der Lohn streng an der Mühe sich ab;

Aber die Freude ruft nur ein Gott auf sterbliche Wangen,
Wo kein Wunder geschieht, ist kein Beglückter zu sehn.

Alles Menschliche muss erst werden und wachsen und reifen,
Und von Gestalt zu Gestalt führt es die bildende Zeit,

Aber das Glückliche siehest du nicht, das Schöne nicht werden,
Fertig von Ewigkeit her steht es vollendet vor dir.

Jede irdische Venus ersteht wie die erste des Himmels,
Eine dunkle Geburt aus dem unendlichen Meer;

Wie die erste Minerva, so tritt mit der Ägis gerüstet
Aus des Donnerers Haupt jeder Gedanke des Lichts.
`},"015":{id:"015",title:"Nänie",audioFile:"./audio/015.mp3",author:"Friedrich Schiller",text:`
Auch das Schöne muß sterben! Das Menschen und Götter bezwinget, 
Nicht die eherne Brust rührt es des stygischen Zeus. 
Einmal nur erweichte die Liebe den Schattenbeherrscher, 
Und an der Schwelle noch, streng, rief er zurück sein Geschenk.

Nicht stillt Aphrodite dem schönen Knaben die Wunde, 
Die in den zierlichen Leib grausam der Eber geritzt. 
Nicht errettet den göttlichen Held die unsterbliche Mutter, 
Wann er, am skäischen Tor fallend, sein Schicksal erfüllt.

Aber sie steigt aus dem Meer mit allen Töchtern des Nereus, 
Und die Klage hebt an um den verherrlichten Sohn. 
Siehe! Da weinen die Götter, es weinen die Göttinnen alle,

Daß das Schöne vergeht, daß das Vollkommene stirbt. 
Auch ein Klaglied zu sein im Mund der Geliebten, ist herrlich, 
Denn das Gemeine geht klanglos zum Orkus hinab.

`},"016":{id:"016",title:"An die Freunde",audioFile:"./audio/016.mp3",author:"Friedrich Schiller",text:`Lieben Freunde! Es gab schönre Zeiten
Als die unsern - das ist nicht zu streiten!
Und ein edler Volk hat einst gelebt.
Könnte die Geschichte davon schweigen,
Tausend Steine würden redend zeugen,
Die man aus dem Schoß der Erde gräbt.
      Doch es ist dahin, es ist verschwunden,
      Dieses hochbegünstigte Geschlecht.
      Wir, wir leben! Unser sind die Stunden,
      Und der Lebende hat recht.
 
Freunde! Es gibt glücklichere Zonen
Als das Land, worin wir leidlich wohnen,
Wie der weitgereiste Wandrer spricht.
Aber hat Natur uns viel entzogen,
War die Kunst uns freundlich doch gewogen,
Unser Herz erwarmt an ihrem Licht.
      Will der Lorbeer hier sich nicht gewöhnen,
      Wird die Myrte unsers Winters Raub,
      Grünet doch, die Schläfe zu bekrönen,
      Uns der Rebe muntres Laub.
 
Wohl von größerm Leben mag es rauschen,
Wo vier Welten ihre Schätze tauschen,
An der Themse, auf dem Markt der Welt.
Tausend Schiffe landen an und gehen,
Da ist jedes Köstliche zu sehen,
Und es herrscht der Erde Gott, das Geld.
      Aber nicht im trüben Schlamm der Bäche,
      Der von wilden Regengüssen schwillt,
      Auf des stillen Baches ebner Fläche
      Spiegelt sich das Sonnenbild.
 
Prächtiger als wir in unserm Norden
Wohnt der Bettler an der Engelspforten,
Denn er sieht das ewig einzge Rom!
Ihn umgibt der Schönheit Glanzgewimmel,
Und ein zweiter Himmel in den Himmel
Steigt Sankt Peters wunderbarer Dom.
      Aber Rom in allem seinem Glanze
      Ist ein Grab nur der Vergangenheit,
      Leben duftet nur die frische Pflanze,
      Die die grüne Stunde streut.
 
Größres mag sich anderswo begeben,
Als bei uns in unserm kleinen Leben,
Neues - hat die Sonne nie gesehn.
Sehn wir doch das Große aller Zeiten
Auf den Brettern, die die Welt bedeuten,
Sinnvoll, still an uns vorübergehn.
      Alles wiederholt sich nur im Leben,
      Ewig jung ist nur die Phantasie,
      Was sich nie und nirgends hat begeben,
      Das allein veraltet nie!
`},"017":{id:"017",title:"Die Ideale",audioFile:"./audio/017.mp3",author:"Friedrich Schiller",text:`So willst du treulos von mir scheiden
Mit deinen holden Phantasien,
Mit deinen Schmerzen, deinen Freuden,
Mit allen unerbittlich fliehn?
Kann nichts dich, Fliehende, verweilen,
O! meines Lebens goldne Zeit?
Vergebens, deine Wellen eilen
Hinab ins Meer der Ewigkeit.

Erloschen sind die heitern Sonnen,
Die meiner Jugend Pfad erhellt,
Die Ideale sind zerronnen,
Die einst das trunkne Herz geschwellt,
Er ist dahin, der süße Glaube
An Wesen, die mein Traum gebar,
Der rauhen Wirklichkeit zum Raube,
Was einst so schön, so göttlich war.

Wie einst mit flehendem Verlangen
Pygmalion den Stein umschloß,
Bis in des Marmors kalte Wangen
Empfindung glühend sich ergoß,
So schlang ich mich mit Liebesarmen
Um die Natur, mit Jugendlust,
Bis sie zu atmen, zu erwarmen
Begann an meiner Dichterbrust,

Und, teilend meine Flammentriebe,
Die Stumme eine Sprache fand,
Mir wiedergab den Kuß der Liebe
Und meines Herzens Klang verstand;
Da lebte mir der Baum, die Rose,
Mir sang der Quellen Silberfall,
Es fühlte selbst das Seelenlose
Von meines Lebens Widerhall.

Es dehnte mit allmächtgem Streben
Die enge Brust ein kreisend All,
Herauszutreten in das Leben
In Tat und Wort, in Bild und Schall.
Wie groß war diese Welt gestaltet,
Solang die Knospe sie noch barg,
Wie wenig, ach! hat sich entfaltet,
Dies wenige, wie klein und karg!

Wie sprang, von kühnem Mut beflügelt,
Beglückt in seines Traumes Wahn,
Von keiner Sorge noch gezügelt,
Der Jüngling in des Lebens Bahn.
Bis an des Äthers bleichste Sterne
Erhob ihn der Entwürfe Flug,
Nichts war so hoch und nichts so ferne,
Wohin ihr Flügel ihn nicht trug.

Wie leicht ward er dahingetragen,
Was war dem Glücklichen zu schwer!
Wie tanzte vor des Lebens Wagen
Die luftige Begleitung her!
Die Liebe mit dem süßen Lohne,
Das Glück mit seinem goldnen Kranz,
Der Ruhm mit seiner Sternenkrone,
Die Wahrheit in der Sonne Glanz!

Doch, ach! schon auf des Weges Mitte
Verloren die Begleiter sich,
Sie wandten treulos ihre Schritte,
Und einer nach dem andern wich.
Leichtfüßig war das Glück entflogen,
Des Wissens Durst blieb ungestillt,
Des Zweifels finstre Wetter zogen
Sich um der Wahrheit Sonnenbild.

Ich sah des Ruhmes heilge Kränze
Auf der gemeinen Stirn entweiht.
Ach, allzuschnell nach kurzem Lenze,
Entfloh die schöne Liebeszeit.
Und immer stiller wards und immer
Verlaßner auf dem rauhen Steg,
Kaum warf noch einen bleichen Schimmer
Die Hoffnung auf den finstern Weg.

Von all dem rauschenden Geleite,
Wer harrte liebend bei mir aus?
Wer steht mir tröstend noch zur Seite
Und folgt mir bis zum finstern Haus?
Du, die du alle Wunden heilest,
Der Freundschaft leise, zarte Hand,
Des Lebens Bürden liebend teilest,
Du, die ich frühe sucht′ und fand,

Und du, die gern sich mit ihr gattet,
Wie sie der Seele Sturm beschwört,
Beschäftigung, die nie ermattet,
Die langsam schafft, doch nie zerstört,
Die zu dem Bau der Ewigkeiten
Zwar Sandkorn nur für Sandkorn reicht,
Doch von der großen Schuld der Zeiten
Minuten, Tage, Jahre streicht.
`},"018":{id:"018",title:"Der Führer des Lebens",audioFile:"./audio/018.mp3",author:"Friedrich Schiller",text:`
Zweierlei Genien sind′s, die dich durchs Leben geleiten;
Wohl dir, wenn sie vereint helfend zur Seite dir stehn!
Mit erheiterndem Spiel verkürzt dir der eine die Reise,
Leichter an seinem Arm werden dir Schicksal und Pflicht.
Unter Scherz und Gespräch begleitet er bis an die Kluft dich,
Wo an der Ewigkeit Meer schaudernd der Sterbliche steht.
Hier empfängt dich entschlossen und ernst und schweigend der andre,
Trägt mit gigantischem Arm über die Tiefe dich hin.
Nimmer widme dich einem allein! Vertraue dem erstern
Deine Würde nicht an, nimmer dem andern dein Glück!
`},"019":{id:"019",title:"Menschliches Wissen",audioFile:"./audio/019.mp3",author:"Friedrich Schiller",text:`
Weil du liesest in ihr, was du selber in sie geschrieben,
Weil du in Gruppen fürs Aug′ ihre Erscheinungen reihst,
Deine Schnüre gezogen auf ihrem unendlichen Felde,
Wähnst du, es fasse dein Geist ahnend die große Natur.
So beschreibt mit Figuren der Astronome den Himmel,
Dass in dem ewigen Raum leichter sich finde der Blick,
Knüpft entlegene Sonnen, durch Siriusfernen geschieden,
Aneinander im Schwan und in den Hörnern des Stiers.
Aber versteht er darum der Sphären mystische Tänze,
Weil ihm das Sternengewölb sein Planiglobium zeigt?

`},"020":{id:"020",title:"Da ich ein Knabe war",audioFile:"./audio/020.mp3",author:"Friedrich Hölderlin",text:`Da ich ein Knabe war,
Rettet' ein Gott mich oft
Vom Geschrei und der Rute der Menschen,
Da spielt' ich sicher und gut
Mit den Blumen des Hains,
Und die Lüftchen des Himmels
Spielten mit mir.

Und wie du das Herz
Der Pflanzen erfreust,
Wenn sie entgegen dir
Die zarten Arme strecken,

So hast du mein Herz erfreut
Vater Helios! und, wie Endymion,
War ich dein Liebling,
Heilige Luna!

Oh all ihr treuen
Freundlichen Götter!
Daß ihr wüßtet,
Wie euch meine Seele geliebt!

Zwar damals rief ich noch nicht
Euch mit Namen, auch ihr
Nanntet mich nie, wie die Menschen sich nennen
Als kennten sie sich.

Doch kannt' ich euch besser,
Als ich je die Menschen gekannt,
Ich verstand die Stille des Äthers
Der Menschen Worte verstand ich nie.

Mich erzog der Wohllaut
Des säuselnden Hains
Und lieben lernt' ich
Unter den Blumen.

Im Arme der Götter wuchs ich groß.
`},"021":{id:"021",title:"Geh unter, schöne Sonne",audioFile:"./audio/021.mp3",author:"Friedrich Hölderlin",text:`Geh unter, schöne Sonne, sie achteten
Nur wenig dein, sie kannten dich, Heilge, nicht,
Denn mühelos und stille bist du
Über den Mühsamen aufgegangen.
 
Mir gehst du freundlich unter und auf, o Licht!
Und wohl erkennt mein Auge dich, Herrliches!
Denn göttlich stille ehren lernt ich,
Da Diotima den Sinn mir heilte.
 
O du des Himmels Botin! wie lauscht ich dir!
Dir, Diotima! Liebe! wie sah von dir
Zum goldnen Tage dieses Auge
Glänzend und dankend empor. Da rauschten
 
Lebendiger die Quellen, es atmeten
Der dunkeln Erde Blüten mich liebend an,
Und lächelnd über Silberwolken
Neigte sich segnend herab der Aether.
`},"022":{id:"022",title:"Diotima",audioFile:"./audio/022.mp3",author:"Friedrich Hölderlin",text:`Lange tot und tiefverschlossen,
Grüßt mein Herz die schöne Welt;
Seine Zweige blühn und sprossen,
Neu von Lebenskraft geschwellt;
O! ich kehre noch ins Leben,
Wie heraus in Luft und Licht
Meiner Blumen selig Streben
Aus der dürren Hülse bricht.

Wie so anders ists geworden!
Alles, was ich haßt und mied,
Stimmt in freundlichen Akkorden
Nun in meines Lebens Lied,
Und mit jedem Stundenschlage
Werd ich wunderbar gemahnt
An der Kindheit goldne Tage,
Seit ich dieses Eine fand.

Diotima! selig Wesen!
Herrliche, durch die mein Geist,
Von des Lebens Angst genesen,
Götterjugend sich verheißt!
Unser Himmel wird bestehen,
Unergründlich sich verwandt,
Hat sich, eh wir uns gesehen,
Unser Innerstes gekannt.

Da ich noch in Kinderträumen,
Friedlich, wie der blaue Tag,
Unter meines Gartens Bäumen
Auf der warmen Erde lag,
Und in leiser Lust und Schöne
Meines Herzens Mai begann,
Säuselte, wie Zephirstöne,
Diotimas Geist mich an.

Ach! und da, wie eine Sage,
Mir des Lebens Schöne schwand,
Da ich vor des Himmels Tage
Darbend, wie ein Blinder, stand,
Da die Last der Zeit mich beugte,
Und mein Leben, kalt und bleich,
Sehnend schon hinab sich neigte
In der Schatten stummes Reich;

Da, da kam vom Ideale,
Wie vom Himmel, Mut und Macht,
Du erscheinst mit deinem Strahle,
Götterbild! in meiner Nacht;
Dich zu finden, warf ich wieder,
Warf ich den entschlafnen Kahn
Von dem toten Porte nieder
In den blauen Ozean. –

Nun! ich habe dich gefunden,
Schöner, als ich ahndend sah
In der Liebe Feierstunden,
Hohe! Gute! bist du da;[223] 
O der armen Phantasien!
Dieses Eine bildest nur
Du, in ewgen Harmonien
Frohvollendete Natur!

Wie die Seligen dort oben,
Wo hinauf die Freude flieht,
Wo, des Daseins überhoben,
Wandellose Schöne blüht,
Wie melodisch bei des alten
Chaos Zwist Urania,
Steht sie, göttlich rein erhalten,
Im Ruin der Zeiten da.

Unter tausend Huldigungen
Hat mein Geist, beschämt, besiegt,
Sie zu fassen schon gerungen,
Die sein Kühnstes überfliegt.
Sonnenglut und Frühlingsmilde,
Streit und Frieden wechselt hier
Vor dem schönen Engelsbilde
In des Busens Tiefe mir.

Viel der heilgen Herzenstränen
Hab ich schon vor ihr geweint,
Hab in allen Lebenstönen
Mit der Holden mich vereint,
Hab, ins tiefste Herz getroffen,
Oft um Schonung sie gefleht,
Wenn so klar und heilig offen
Mir ihr eigner Himmel steht;

Habe, wenn in reicher Stille,
Wenn in einem Blick und Laut
Seine Ruhe, seine Fülle
Mir ihr Genius vertraut,
Wenn der Gott, der mich begeistert,
Mir an ihrer Stirne tagt,
Von Bewundrung übermeistert,
Zürnend ihr mein Nichts geklagt;

Dann umfängt ihr himmlisch Wesen
Süß im Kinderspiele mich,
Und in ihrem Zauber lösen
Freudig meine Bande sich;
Hin ist dann mein dürftig Streben,
Hin des Kampfes letzte Spur,
Und ins volle Götterleben
Tritt die sterbliche Natur.

Ha! wo keine Macht auf Erden,
Keines Gottes Wink uns trennt,
Wo wir Eins und Alles werden,
Das ist nur mein Element;
Wo wir Not und Zeit vergessen,
Und den kärglichen Gewinn
Nimmer mit der Spanne messen,
Da, da sag ich, daß ich bin.

Wie der Stern der Tyndariden,
Der in leichter Majestät
Seine Bahn, wie wir, zufrieden
Dort in dunkler Höhe geht,
Nun in heitre Meereswogen,
Wo die schöne Ruhe winkt,
Von des Himmels steilem Bogen
Klar und groß hinuntersinkt:

O Begeisterung! so finden
Wir in dir ein selig Grab,
Tief in deine Woge schwinden,
Stillfrohlockend wir hinab,
Bis der Hore Ruf wir hören,
Und mit neuem Stolz erwacht,
Wie die Sterne, wiederkehren
In des Lebens kurze Nacht.
`},"023":{id:"023",title:"An die Parzen",audioFile:"./audio/023.mp3",author:"Friedrich Hölderlin",text:`Nur Einen Sommer gönnt, ihr Gewaltigen!
Und Einen Herbst zu reifem Gesange mir,
Daß williger mein Herz, vom süßen
Spiele gesättiget, dann mir sterbe.

Die Seele, der im Leben ihr göttlich Recht
Nicht ward, sie ruht auch drunten im Orkus nicht;
Doch ist mir einst das Heil´ge, das am
Herzen mir liegt, das Gedicht, gelungen,

Willkommen dann, o Stille der Schattenwelt!
Zufrieden bin ich, wenn auch mein Saitenspiel
Mich nicht hinabgeleitet; Einmal
Lebt ich, wie Götter, und mehr bedarf´s nicht.
`},"024":{id:"024",title:"Empedokles",audioFile:"./audio/024.mp3",author:"Friedrich Hölderlin",text:`Das Leben suchst du, suchst, und es quillt und glänzt
    Ein göttlich Feuer tief aus der Erde dir,
        Und du in schauderndem Verlangen
            Wirfst dich hinab, in des Aetna Flammen.
 
So schmelzt' im Weine Perlen der Übermut
    Der Königin; und mochte sie doch! hättest du
        Nur deinen Reichtum nicht, o Dichter,
            Hin in den gärenden Kelch geopfert!

Doch heilig bist du mir, wie der Erde Macht,
    Die dich hinwegnahm, kühner Getöteter!
        Und folgend möcht ich in die Tiefe,
            Hielte die Liebe mich nicht, dem Helden.
`},"025":{id:"025",title:"An den Aether",audioFile:"./audio/025.mp3",author:"Friedrich Hölderlin",text:`Treu und freundlich, wie du, erzog der Götter und Menschen
Keiner, o Vater Aether! mich auf; noch ehe die Mutter
In die Arme mich nahm und ihre Brüste mich tränkten,
Faßtest du zärtlich mich an und gossest himmlischen Trank mir,
Mir den heiligen Othem zuerst in den keimenden Busen.

Nicht von irdischer Kost gedeihen einzig die Wesen,
Aber du nährst sie all' mit deinem Nektar, o Vater!
Und es drängt sich und rinnt aus deiner ewigen Fülle
Die beseelende Luft durch alle Röhren des Lebens.
Darum lieben die Wesen dich auch und ringen und streben
Unaufhörlich hinauf nach dir in freudigem Wachstum.

Himmlischer! sucht nicht dich mit ihren Augen die Pflanze,
Streckt nach dir die schüchternen Arme der niedrige Strauch nicht?
Daß er dich finde, zerbricht der gefangene Same die Hülse,
Daß er belebt von dir in deiner Welle sich bade,
Schüttelt der Wald den Schnee wie ein überlästig Gewand ab.
Auch die Fische kommen herauf und hüpfen verlangend
Über die glänzende Fläche des Stroms, als begehrten auch diese
Aus der Wiege zu dir; auch den edeln Tieren der Erde
Wird zum Fluge der Schritt, wenn oft das gewaltige Sehnen,
Die geheime Liebe zu dir, sie ergreift, sie hinaufzieht.

Stolz verachtet den Boden das Roß, wie gebogener Stahl strebt
In die Höhe sein Hals, mit der Hufe berührt es den Sand kaum.
Wie zum Scherze, berührt der Fuß der Hirsche den Grashalm,
Hüpft, wie ein Zephyr, über den Bach, der reißend hinabschäumt,
Hin und wieder und schweift kaum sichtbar durch die Gebüsche.

Aber des Aethers Lieblinge, sie, die glücklichen Vögel,
Wohnen und spielen vergnügt in der ewigen Halle des Vaters!
Raums genug ist für alle. Der Pfad ist keinem bezeichnet,
Und es regen sich frei im Hause die Großen und Kleinen.
Über dem Haupte frohlocken sie mir und es sehnt sich auch mein Herz
Wunderbar zu ihnen hinauf; wie die freundliche Heimat
Winkt es von oben herab und auf die Gipfel der Alpen
Möcht' ich wandern und rufen von da dem eilenden Adler,
Daß er, wie einst in die Arme des Zeus den seligen Knaben,
Aus der Gefangenschaft in des Aethers Halle mich trage.

Töricht treiben wir uns umher; wie die irrende Rebe,
Wenn ihr der Stab gebricht, woran zum Himmel sie aufwächst,
Breiten wir über dem Boden uns aus und suchen und wandern
Durch die Zonen der Erd', o Vater Aether! vergebens,
Denn es treibt uns die Lust, in deinen Gärten zu wohnen.
In die Meersflut werfen wir uns, in den freieren Ebnen
Uns zu sättigen, und es umspielt die unendliche Woge
Unsern Kiel, es freut sich das Herz an den Kräften des Meergotts.
Dennoch genügt ihm nicht; denn der tiefere Ozean reizt uns,
Wo die leichtere Welle sich regt — o wer dort an jene
Goldnen Küsten das wandernde Schiff zu treiben vermöchte!

Aber indes ich hinauf in die dämmernde Ferne mich sehne,
Wo du fremde Gestad' umfängst mit der bläulichen Woge,
Kömmst du säuselnd herab von des Fruchtbaums blühenden Wipfeln,
Vater Aether! und sänftigest selbst das strebende Herz mir,
Und ich lebe nun gern, wie zuvor, mit den Blumen der Erde.
`},"026":{id:"026",title:"Gesang des Deutschen",audioFile:"./audio/026.mp3",author:"Friedrich Hölderlin",text:`O heilig Herz der Völker, o Vaterland!
Allduldend, gleich der schweigenden Mutter Erd,
Und allverkannt, wenn schon aus deiner
Tiefe die Fremden ihr Bestes haben!

Sie ernten den Gedanken, den Geist von dir,
Sie pflücken gern die Traube, doch höhnen sie
Dich, ungestalte Rebe! daß du
Schwankend den Boden und wild umirrest.

Du Land des hohen ernsteren Genius!
Du Land der Liebe! bin ich der deine schon,
Oft zürnt ich weinend, daß du immer
Blöde die eigene Seele leugnest.

Doch magst du manches Schöne nicht bergen mir;
Oft stand ich überschauend das holde Grün,
Den weiten Garten hoch in deinen
Lüften auf hellem Gebirg und sah dich.

An deinen Strömen ging ich und dachte dich,
Indes die Töne schüchtern die Nachtigall
Auf schwanker Weide sang, und still auf
Dämmerndem Grunde die Welle weilte.

Und an den Ufern sah ich die Städte blühn,
Die Edlen, wo der Fleiß in der Werkstatt schweigt, 
Die Wissenschaft, wo deine Sonne
Milde dem Künstler zum Ernste leuchtet.

Kennst du Minervas Kinder? sie wählten sich
Den Ölbaum früh zum Lieblinge; kennst du sie?
Noch lebt, noch waltet der Athener
Seele, die sinnende, still bei Menschen,

Wenn Platons frommer Garten auch schon nicht mehr
Am alten Strome grünt und der dürftge Mann
Die Heldenasche pflügt, und scheu der
Vogel der Nacht auf der Säule trauert.

O heilger Wald! o Attika! traf Er doch
Mit seinem furchtbarn Strahle dich auch, so bald,
Und eilten sie, die dich belebt, die
Flammen entbunden zum Aether über?

Doch, wie der Frühling, wandelt der Genius
Von Land zu Land. Und wir? ist denn Einer auch
Von unsern Jünglingen, der nicht ein
Ahnden, ein Rätsel der Brust, verschwiege?

Den deutschen Frauen danket! sie haben uns
Der Götterbilder freundlichen Geist bewahrt,
Und täglich sühnt der holde klare
Friede das böse Gewirre wieder.

Wo sind jetzt Dichter, denen der Gott es gab,
Wie unsern Alten, freudig und fromm zu sein,
Wo Weise, wie die unsre sind? die
Kalten und Kühnen, die Unbestechbarn!

Nun! sei gegrüßt in deinem Adel, mein Vaterland,
Mit neuem Namen, reifeste Frucht der Zeit!
Du letzte und du erste aller
Musen, Urania, sei gegrüßt mir!

Noch säumst und schweigst du, sinnest ein freudig Werk,
Das von dir zeuge, sinnest ein neu Gebild,
Das einzig, wie du selber, das aus
Liebe geboren und gut, wie du, sei –

Wo ist dein Delos, wo dein Olympia,
Daß wir uns alle finden am höchsten Fest? –
Doch wie errät der Sohn, was du den
Deinen, Unsterbliche, längst bereitest?
`},"027":{id:"027",title:"Mein Eigentum",audioFile:"./audio/027.mp3",author:"Friedrich Hölderlin",text:`In seiner Fülle ruhet der Herbsttag nun,
    Geläutert ist die Traub und der Hain ist rot
          Vom Obst, wenn schon der holden Blüten
                Manche der Erde zum Danke fielen.

Und rings im Felde, wo ich den Pfad hinaus,
    Den stillen, wandle, ist den Zufriedenen
          Ihr Gut gereift und viel der frohen
                Mühe gewähret der Reichtum ihnen.

Vom Himmel blicket zu den Geschäftigen
    Durch ihre Bäume milde das Licht herab,
          Die Freude teilend, denn es wuchs durch
                Hände der Menschen allein die Frucht nicht.

Und leuchtest du, o Goldnes, auch mir, und wehst
    Auch du mir wieder, Lüftchen, als segnetest
          Du eine Freude mir, wie einst, und
                Irrst, wie um Glückliche, mir am Busen?

Einst war ichs, doch wie Rosen, vergänglich war
    Das fromme Leben, ach! und es mahnen noch,
          Die blühend mir geblieben sind, die
                Holden Gestirne zu oft mich dessen.

Beglückt, wer, ruhig liebend ein frommes Weib,
    Am eignen Herd in rühmlicher Heimat lebt,
          Es leuchtet über festem Boden
                Schöner dem sicheren Mann sein Himmel.

Denn, wie die Pflanze, wurzelt auf eignem Grund
    Sie nicht, verglüht die Seele des Sterblichen,
          Der mit dem Tageslichte nur, ein
                Armer, auf heiliger Erde wandelt.

Zu mächtig, ach! ihr himmlischen Höhen, zieht
    Ihr mich empor, bei Stürmen, am heitern Tag
          Fühl ich verzehrend euch im Busen
                Wechseln, ihr wandelnden Götterkräfte.

Doch heute laß mich stille den trauten Pfad
    Zum Haine gehn, dem golden die Wipfel schmückt
          Sein sterbend Laub, und kränzt auch mir die
                Stirne, ihr holden Erinnerungen!

Und daß mir auch, zu retten mein sterblich Herz,
    Wie andern eine bleibende Stätte sei,
          Und heimatlos die Seele mir nicht
                Über das Leben hinweg sich sehne,

Sei du, Gesang, mein freundlich Asyl! sei du,
    Beglückender! mit sorgender Liebe mir
          Gepflegt, der Garten, wo ich, wandelnd
                Unter den Blüten, den immerjungen,

In sichrer Einfalt wohne, wenn draußen mir
    Mit ihren Wellen allen die mächtge Zeit,
          Die Wandelbare, fern rauscht und die
                Stillere Sonne mein Wirken fördert.

Ihr segnet gütig über den Sterblichen,
    Ihr Himmelskräfte! jedem sein Eigentum,
          O segnet meines auch, und daß zu
                Frühe die Parze den Traum nicht ende.
`},"028":{id:"028",title:"Der Abschied",audioFile:"./audio/028.mp3",author:"Friedrich Hölderlin",text:`Trennen wollten wir uns? wähnten es gut und klug?
    Da wirs taten, warum schröckte, wie Mord, die Tat?
          Ach! wir kennen uns wenig,
                Denn es waltet ein Gott in uns.

Den verraten? ach ihn, welcher uns alles erst,
    Sinn und Leben erschuf, ihn, den beseelenden
          Schutzgott unserer Liebe,
                Dies, dies Eine vermag ich nicht.

Aber anderen Fehl denket der Menschen Sinn,
    Andern ehernen Dienst übt er und anders Recht,
          Und es fodert die Seele
                Tag für Tag der Gebrauch uns ab.

Wohl! ich wußt' es zuvor. Seit der gewurzelte
    Allentzweiende Haß Götter und Menschen trennt,
          Muß, mit Blut sie zu sühnen,
                Muß der Liebenden Herz vergehn.

Laß mich schweigen! o laß nimmer von nun an mich
    Dieses Tödliche sehn, daß ich im Frieden doch
          Hin ins Einsame ziehe,
                Und noch unser der Abschied sei!

Reich die Schale mir selbst, daß ich des rettenden
    Heilgen Giftes genug, daß ich des Lethetranks
          Mit dir trinke, daß alles,
                Haß und Liebe, vergessen sei!

Hingehn will ich. Vielleicht seh' ich in langer Zeit
    Diotima! dich hier. Aber verblutet ist
          Dann das Wünschen und friedlich
                Gleich den Seligen, fremd sind wir,

Und ein ruhig Gespräch führet uns auf und ab,
    Sinnend, zögernd, doch itzt faßt die Vergessenen
          Hier die Stelle des Abschieds,
                Es erwarmet ein Herz in uns,

Staunend seh' ich dich an, Stimmen und süßen Sang,
    Wie aus voriger Zeit, hör' ich und Saitenspiel,
          Und befreiet, in Lüfte
                Fliegt in Flammen der Geist uns auf.
`},"029":{id:"029",title:"Hälfte des Lebens",audioFile:"./audio/029.mp3",author:"Friedrich Hölderlin",text:`Mit gelben Birnen hänget
Und voll mit wilden Rosen
Das Land in den See,
Ihr holden Schwäne,
Und trunken von Küssen
Tunkt ihr das Haupt
Ins heilignüchterne Wasser.

Weh mir, wo nehm’ ich, wenn
Es Winter ist, die Blumen, und wo
Den Sonnenschein,
Und Schatten der Erde?
Die Mauern stehn
Sprachlos und kalt, im Winde
Klirren die Fahnen.
`},"030":{id:"030",title:"Hyperions Schicksalslied",audioFile:"./audio/030.mp3",author:"Friedrich Hölderlin",text:`Ihr wandelt droben im Licht
Auf weichem Boden, selige Genien!
Glänzende Götterlüfte
Rühren euch leicht,
Wie die Finger der Künstlerin
Heilige Saiten.

Schicksallos, wie der schlafende
Säugling, atmen die Himmlischen;
Keusch bewahrt
In bescheidener Knospe,
Blühet ewig
Ihnen der Geist,
Und die seligen Augen
Blicken in stiller
Ewiger Klarheit.

Doch uns ist gegeben,
Auf keiner Stätte zu ruhn,
Es schwinden, es fallen
Die leidenden Menschen
Blindlings von einer
Stunde zur andern,
Wie Wasser von Klippe
Zu Klippe geworfen,
Jahr lang ins Ungewisse hinab.

`},"031":{id:"031",title:"Abendphantasie",audioFile:"./audio/031.mp3",author:"Friedrich Hölderlin",text:`
Vor seiner Hütte ruhig im Schatten sizt
Der Pflüger, dem Genügsamen raucht sein Herd.
Gastfreundlich tönt dem Wanderer im
Friedlichen Dorfe die Abendglocke.

Wohl kehren izt die Schiffer zum Hafen auch,
In fernen Städten, fröhlich verrauscht des Markts
Geschäft'ger Lärm; in stiller Laube
Glänzt das gesellige Mahl den Freunden.

Wohin denn ich? Es leben die Sterblichen
Von Lohn und Arbeit; wechselnd in Müh' und Ruh
Ist alles freudig; warum schläft denn
Nimmer nur mir in der Brust der Stachel?

Am Abendhimmel blühet ein Frühling auf;
Unzählig blühn die Rosen und ruhig scheint
Die goldne Welt; o dorthin nimmt mich,
Purpurne Wolken! und möge droben

In Licht und Luft zerrinnen mir Lieb' und Leid! -
Doch, wie verscheucht von thöriger Bitte, flieht
Der Zauber; dunkel wirds und einsam
Unter dem Himmel, wie immer, bin ich -

Komm du nun, sanfter Schlummer! zu viel begehrt
Das Herz; doch endlich, Jugend! verglühst du ja,
Du ruhelose, träumerische!
Friedlich und heiter ist dann das Alter.



`},"032":{id:"032",title:"Der Morgen",audioFile:"./audio/032.mp3",author:"Joseph von Eichendorff",text:`Fliegt der erste Morgenstrahl
Durch das stille Nebeltal,
Rauscht erwachend Wald und Hügel:
Wer da fliegen kann, nimmt Flügel!

Und sein Hütlein in die Luft
Wirft der Mensch vor Lust und ruft:
Hat Gesang doch auch noch Schwingen,
Nun, so will ich fröhlich singen!

Hinaus, o Mensch, weit in die Welt,
Bangt dir das Herz in krankem Mut;
Nichts ist so trüb in Nacht gestellt,
Der Morgen leicht machts wieder gut.`},"033":{id:"033",title:"Sängerfahrt",audioFile:"./audio/033.mp3",author:"Joseph von Eichendorff",text:`Kühlrauschend unterm hellen
Tiefblauen Himmelsdom
Treibt seine klaren Wellen
Der ewgen Jugend Strom.

Viel rüstige Gesellen,
Den Argonauten gleich,
Sie fahren auf den Wellen
Ins duftge Frühlingsreich.

Ich aber faß den Becher,
Daß es durchs Schiff erklingt,
Am Mast steh ich als Sprecher,
Der für euch alle singt.

Wie stehn wir hier so helle!
Wird mancher bald schlafen gehn,
O Leben, wie bist du schnelle,
O Leben, wie bist du schön!

Gegrüßt, du weite Runde,
Burg auf der Felsenwand,
Du Land voll großer Kunde,
Mein grünes Vaterland!

Euch möcht ich alles geben,
Und ich bin fürstlich reich,
Mein Herzblut und mein Leben,
Ihr Brüder, alles für euch!

So fahrt im Morgenschimmer!
Seis Donau oder Rhein,
Ein rechter Strom bricht immer
Ins ewge Meer hinein.`},"034":{id:"034",title:"Schöne Fremde",audioFile:"./audio/034.mp3",author:"Joseph von Eichendorff",text:`Kühlrauschend unterm hellen
Tiefblauen Himmelsdom
Treibt seine klaren Wellen
Der ewgen Jugend Strom.

Viel rüstige Gesellen,
Den Argonauten gleich,
Sie fahren auf den Wellen
Ins duftge Frühlingsreich.

Ich aber faß den Becher,
Daß es durchs Schiff erklingt,
Am Mast steh ich als Sprecher,
Der für euch alle singt.

Wie stehn wir hier so helle!
Wird mancher bald schlafen gehn,
O Leben, wie bist du schnelle,
O Leben, wie bist du schön!

Gegrüßt, du weite Runde,
Burg auf der Felsenwand,
Du Land voll großer Kunde,
Mein grünes Vaterland!

Euch möcht ich alles geben,
Und ich bin fürstlich reich,
Mein Herzblut und mein Leben,
Ihr Brüder, alles für euch!

So fahrt im Morgenschimmer!
Seis Donau oder Rhein,
Ein rechter Strom bricht immer
Ins ewge Meer hinein.`},"035":{id:"035",title:"Der frohe Wandersmann",audioFile:"./audio/035.mp3",author:"Joseph von Eichendorff",text:` 	Wem Gott will rechte Gunst erweisen,
Den schickt er in die weite Welt;
Dem will er seine Wunder weisen
In Berg und Wald und Strom und Feld.

Die Trägen, die zu Hause liegen,
Erquicket nicht das Morgenrot,
Sie wissen nur von Kinderwiegen,
Von Sorgen, Last und Not um Brot.

Die Bächlein von den Bergen springen,
Die Lerchen schwirren hoch vor Lust,
Was sollt ich nicht mit ihnen singen
Aus voller Kehl und frischer Brust?

Den lieben Gott lass ich nur walten;
Der Bächlein, Lerchen, Wald und Feld
Und Erd und Himmel will erhalten,
Hat auch mein Sach aufs best bestellt!`},"036":{id:"036",title:"Sehnsucht",audioFile:"./audio/036.mp3",author:"Joseph von Eichendorff",text:`Es schienen so golden die Sterne,
Am Fenster ich einsam stand
Und hörte aus weiter Ferne
Ein Posthorn im stillen Land.
Das Herz mir im Leib entbrennte,
Da hab ich mir heimlich gedacht:
Ach, wer da mitreisen könnte
In der prächtigen Sommernacht!

Zwei junge Gesellen gingen
Vorüber am Bergeshang,
Ich hörte im Wandern sie singen
Die stille Gegend entlang:
Von schwindelnden Felsenschlüften,
Wo die Wälder rauschen so sacht,
Von Quellen, die von den Klüften
Sich stürzen in die Waldesnacht.

Sie sangen von Marmorbildern,
Von Gärten, die überm Gestein
In dämmernden Lauben verwildern,
Palästen im Mondenschein,
Wo die Mädchen am Fenster lauschen,
Wann der Lauten Klang erwacht
Und die Brunnen verschlafen rauschen
In der prächtigen Sommernacht.
`},"037":{id:"037",title:"Das zerbrochene Ringlein",audioFile:"./audio/037.mp3",author:"Joseph von Eichendorff",text:`
Es schienen so golden die Sterne,
Am Fenster ich einsam stand
Und hörte aus weiter Ferne
Ein Posthorn im stillen Land.
Das Herz mir im Leib entbrennte,
Da hab ich mir heimlich gedacht:
Ach, wer da mitreisen könnte
In der prächtigen Sommernacht!

Zwei junge Gesellen gingen
Vorüber am Bergeshang,
Ich hörte im Wandern sie singen
Die stille Gegend entlang:
Von schwindelnden Felsenschlüften,
Wo die Wälder rauschen so sacht,
Von Quellen, die von den Klüften
Sich stürzen in die Waldesnacht.

Sie sangen von Marmorbildern,
Von Gärten, die überm Gestein
In dämmernden Lauben verwildern,
Palästen im Mondenschein,
Wo die Mädchen am Fenster lauschen,
Wann der Lauten Klang erwacht
Und die Brunnen verschlafen rauschen
In der prächtigen Sommernacht.
`},"038":{id:"038",title:"Die zwei Gesellen",audioFile:"./audio/038.mp3",author:"Joseph von Eichendorff",text:`Es zogen zwei rüst’ge Gesellen
Zum erstenmal von Haus,
So jubelnd recht in die hellen,
Klingenden, singenden Wellen
Des vollen Frühlings hinaus.

Die strebten nach hohen Dingen,
Die wollten, trotz Lust und Schmerz,
Was Rechts in der Welt vollbringen,
Und wem sie vorübergingen,
Dem lachten Sinnen und Herz. –

Der erste, der fand ein Liebchen,
Die Schwieger¹ kauft’ Hof und Haus;
Der wiegte gar bald ein Bübchen,
Und sah aus heimlichem Stübchen
Behaglich ins Feld hinaus.

Dem zweiten sangen und logen
Die tausend Stimmen im Grund²,
Verlockend’ Sirenen, und zogen
Ihn in der buhlenden Wogen
Farbig klingenden Schlund.

Und wie er auftaucht’ vom Schlunde,
Da war er müde und alt,
Sein Schifflein das lag im Grunde,
So still war’s rings in die Runde,
Und über die Wasser weht’s kalt.

Es singen und klingen die Wellen
Des Frühlings wohl über mir;
Und seh ich so kecke Gesellen,
Die Tränen im Auge mir schwellen –
Ach Gott, führ uns liebreich zu dir!`},"039":{id:"039",title:"In der Fremde",audioFile:"./audio/039.mp3",author:"Joseph von Eichendorff",text:`Ich hör die Bächlein rauschen
	Im Walde her und hin,
	Im Walde in dem Rauschen
	Ich weiß nicht, wo ich bin.
	
		Die Nachtigallen schlagen
	Hier in der Einsamkeit,
	Als wollten sie was sagen
	Von der alten, schönen Zeit.
	
		Die Mondesschimmer fliegen,
	Als säh ich unter mir
	Das Schloß im Tale liegen,
	Und ist doch so weit von hier!
	
		Als müßte in dem Garten,
	Voll Rosen weiß und rot,
	Meine Liebste auf mich warten,
	Und ist doch lange tot.`},"040":{id:"040",title:"Vesper",audioFile:"./audio/040.mp3",author:"Joseph von Eichendorff",text:`Die Abendglocken klangen
Schon durch das stille Tal,
Da saßen wir zusammen
Da droben wohl hundertmal.

Und unten war's so stille
Im Lande weit und breit,
Nur über uns die Linde
Rauscht' durch die Einsamkeit.

Was gehn die Glocken heute
Als ob ich weinen müßt?
Die Glocken, die bedeuten,
Daß meine Lieb gestorben ist!

Ich wollt, ich läg begraben,
Und über mir rauschte weit
Die Linde jeden Abend
Von der alten, schönen Zeit!`},"041":{id:"041",title:"Abschied",audioFile:"./audio/041.mp3",author:"Joseph von Eichendorff",text:`Die Abendglocken klangen
Schon durch das stille Tal,
Da saßen wir zusammen
Da droben wohl hundertmal.

Und unten war's so stille
Im Lande weit und breit,
Nur über uns die Linde
Rauscht' durch die Einsamkeit.

Was gehn die Glocken heute
Als ob ich weinen müßt?
Die Glocken, die bedeuten,
Daß meine Lieb gestorben ist!

Ich wollt, ich läg begraben,
Und über mir rauschte weit
Die Linde jeden Abend
Von der alten, schönen Zeit!`},"042":{id:"042",title:"Der Abend",audioFile:"./audio/042.mp3",author:"Joseph von Eichendorff",text:`Schweigt der Menschen laute Lust:
Rauscht die Erde wie in Träumen
wunderbar mit allen Bäumen,
was dem Herzen kaum bewußt,
alte Zeiten, linde Trauer,
und es schweifen leise Schauer
wetterleuchtend durch die Brust.`},"043":{id:"043",title:"Der alte Garten",audioFile:"./audio/043.mp3",author:"Joseph von Eichendorff",text:`Kaiserkron und Päonien rot,
die müssen verzaubert sein,
denn Vater und Mutter sind lange tot,
was blühn sie hier so allein?

Der Springbrunnen plaudert noch immerfort
von der alten schönen Zeit,
eine Frau sitzt eingeschlafen dort,
ihre Locken bedecken ihr Kleid.

Sie hat eine Laute in der Hand,
als ob sie im Schlafe spricht,
mir ist, als hätt ich sie sonst gekannt -
still geh vorbei und weck sie nicht!

Und wenn es dunkelt das Tal entlang,
streift sie die Saiten sacht,
da gibt′ s einen wunderbaren Klang
durch den Garten die ganze Nacht.`},"044":{id:"044",title:"Zwielicht",audioFile:"./audio/044.mp3",author:"Joseph von Eichendorff",text:`Dämmrung will die Flügel spreiten,
Schaurig rühren sich die Bäume,
Wolken zieh’n wie schwere Träume –
Was will dieses Grau’n bedeuten?

Hast ein Reh du lieb vor andern,
Laß es nicht alleine grasen,
Jäger zieh’n im Wald’ und blasen,
Stimmen hin und wider wandern.

Hast du einen Freund hienieden,
Trau ihm nicht zu dieser Stunde,
Freundlich wohl mit Aug’ und Munde,
Sinnt er Krieg im tück’schen Frieden.

Was heut müde gehet unter,
Hebt sich morgen neu geboren.
Manches bleibt in Nacht verloren –
Hüte dich, bleib’ wach und munter!`},"045":{id:"045",title:"Mondnacht",audioFile:"./audio/045.mp3",author:"Joseph von Eichendorff",text:`Es war, als hätt’ der Himmel
Die Erde still geküßt,
Daß sie im Blütenschimmer
Von ihm nun träumen müßt’.

Die Luft ging durch die Felder,
Die Ähren wogten sacht,
Es rauschten leis’ die Wälder,
So sternklar war die Nacht.

Und meine Seele spannte
Weit ihre Flügel aus,
Flog durch die stillen Lande,
Als flöge sie nach Haus.
 `},"046":{id:"046",title:"Der verspätete Wanderer",audioFile:"./audio/046.mp3",author:"Joseph von Eichendorff",text:`Wo aber werd ich sein im künftgen Lenze?
So frug ich sonst wohl, wenn beim Hüteschwingen
Ins Tal wir ließen unser Lied erklingen,
Denn jeder Wipfel bot mir frische Kränze.

Ich wußte nur, daß rings der Frühling glänze,
Daß nach dem Meer die Ströme leuchtend gingen,
Vom fernen Wunderland die Vögel singen,
Da hatt das Morgenrot noch keine Grenze.

Jetzt aber wirds schon Abend, alle Lieben
Sind wandermüde längst zurückgeblieben,
Die Nachtluft rauscht durch meine welken Kränze,

Und heimwärts rufen mich die Abendglocken,
Und in der Einsamkeit frag ich erschrocken:
Wo werde ich wohl sein im künftgen Lenze?`},"047":{id:"047",title:"Ergebung",audioFile:"./audio/047.mp3",author:"Joseph von Eichendorff",text:`Es wandelt, was wir schauen,
Tag sinkt ins Abendrot,
Die Lust hat eignes Grauen,
Und alles hat den Tod.

Ins Leben schleicht das Leiden
Sich heimlich wie ein Dieb,
Wir alle müssen scheiden
Von allem, was uns lieb.

Was gäb es doch auf Erden,
Wer hielt' den Jammer aus,
Wer möcht geboren werden,
Hieltst du nicht droben haus!

Du bist's, der, was wir bauen,
Mild über uns zerbricht,
Dass wir den Himmel schauen -
Darum so klag ich nicht.`},"048":{id:"048",title:"Der Einsiedler",audioFile:"./audio/048.mp3",author:"Joseph von Eichendorff",text:`Komm, Trost der Welt, du stille Nacht!
	Wie steigst Du von den Bergen sacht,
	Die Lüfte alle schlafen,
	Ein Schiffer nur noch, wandermüd,
	Singt übers Meer sein Abendlied
	Zu Gottes Lob im Hafen.
	
		Die Jahre wie die Wolken gehn
	Und lassen mich hier einsam stehn,
	Die Welt hat mich vergessen,
	Da tratst Du wunderbar zu mir,
	Wenn ich beim Waldesrauschen hier
	Gedankenvoll gesessen.
	
		O Trost der Welt, Du stille Nacht!
	Der Tag hat mich so müd gemacht,
	Das weite Meer schon dunkelt,
	Lass ausruhn mich von Lust und Not,
	Bis dass das ew’ge Morgenrot
	Den stillen Wald durchfunkelt.`},"049":{id:"049",title:"Schläft ein Lied",audioFile:"./audio/049.mp3",author:"Joseph von Eichendorff",text:`Schläft ein Lied in allen Dingen
die da träumen fort und fort,
und die Welt hebt an zu singen,
triffst du nur das Zauberwort.`},"050":{id:"050",title:"Lorelei",audioFile:"./audio/050.mp3",author:"Heinrich Heine",text:`Ich weiß nicht, was soll es bedeuten,
Daß ich so traurig bin;
Ein Märchen ans alten Zeiten,
Das kommt mir nicht aus dem Sinn.

Die Luft ist kühl und es dunkelt,
Und ruhig fließt der Rhein;
Der Gipfel des Berges funkelt
Im Abendsonnenschein.

Die schönste Jungfrau sitzet
Dort oben wunderbar,
Ihr goldnes Geschmeide blitzet,
Sie kämmt ihr goldenes Haar.

Sie kämmt es mit goldenem Kamme,
Und singt ein Lied dabei;
Das hat eine wundersame,
Gewaltige Melodei.

Den Schiffer im kleinen Schiffe
Ergreift es mit wildem Weh;
Er schaut nicht die Felsenriffe,
Er schaut nur hinauf in die Höh’.

Ich glaube, die Wellen verschlingen
Am Ende Schiffer und Kahn;
Und das hat mit ihrem Singen
Die Lorelei getan`},"051":{id:"051",title:"Still ist die Nacht",audioFile:"./audio/051.mp3",author:"Heinrich Heine",text:`Still ist die Nacht, es ruhen die Gassen,
In diesem Hause wohnte mein Schatz;
Sie hat schon längst die Stadt verlassen,
Doch steht noch das Haus auf demselben Platz.

Da steht auch ein Mensch und starrt in die Höhe,
Und ringt die Hände, vor Schmerzensgewalt;
Mir graust es, wenn ich sein Antlitz sehe -
Der Mond zeigt mir meine eigne Gestalt.

Du Doppelgänger! du bleicher Geselle!
Was äffst du nach mein Liebesleid,
Das mich gequält auf dieser Stelle,
So manche Nacht, in alter Zeit? `},"052":{id:"052",title:"Aus meinen großen Schmerzen",audioFile:"./audio/052.mp3",author:"Heinrich Heine",text:`Aus meinen großen Schmerzen
Mach' ich die kleinen Lieder;
Die heben ihr klingend Gefieder
Und flattern nach ihrem Herzen.

Sie fanden den Weg zur Trauten,
Doch kommen sie wieder und klagen,
Und klagen, und wollen nicht sagen,
Was sie im Herzen schauten. `},"053":{id:"053",title:"Du bist wie eine Blume",audioFile:"./audio/053.mp3",author:"Heinrich Heine",text:`Du bist wie eine Blume,
So hold und schön und rein;
Ich schau’ dich an, und Wehmuth
Schleicht mir in’s Herz hinein.

Mir ist, als ob ich die Hände
Auf’s Haupt dir legen sollt’,
Betend, daß Gott dich erhalte
So rein und schön und hold. `},"054":{id:"054",title:"Ein Jüngling liebt",audioFile:"./audio/054.mp3",author:"Heinrich Heine",text:`Ein Jüngling liebt ein Mädchen,
Die hat einen andern erwählt;
Der andre liebt eine andre,
Und hat sich mit dieser vermählt.

Das Mädchen heiratet aus Ärger
Den ersten besten Mann,
Der ihr in den Weg gelaufen;
Der Jüngling ist übel dran.

Es ist eine alte Geschichte,
Doch bleibt sie immer neu;
Und wem sie just passieret,
Dem bricht das Herz entzwei. `},"055":{id:"055",title:"Im traurigen Monat November",audioFile:"./audio/055.mp3",author:"Heinrich Heine",text:`Im traurigen Monat November war’s,
Die Tage wurden trüber,
Der Wind riß von den Bäumen das Laub,
Da reist’ ich nach Deutschland hinüber.

Und als ich an die Grenze kam,
Da fühlt ich ein stärkeres Klopfen
In meiner Brust, ich glaube sogar
Die Augen begunnen zu tropfen.

Und als ich die deutsche Sprache vernahm,
Da ward mir seltsam zu Muthe;
Ich meinte nicht anders, als ob das Herz
Recht angenehm verblute.`},"056":{id:"056",title:"Wenn ich beseligt",audioFile:"./audio/056.mp3",author:"Heinrich Heine",text:`Wenn ich, beseligt von schönen Küssen,
In deinen Armen mich wohl befinde,
Dann mußt du mir nie von Deutschland reden, –
Ich kanns nicht vertragen – es hat seine Gründe.

Ich bitte dich, laß mich mit Deutschland in Frieden!
Du mußt mich nicht plagen mit ewigen Fragen
Nach Heimat, Sippschaft und Lebensverhältnis; –
Es hat seine Gründe, ich kanns nicht vertragen.

Die Eichen sind grün, und blau sind die Augen
Der deutschen Frauen; sie schmachten gelinde
Und seufzen von Liebe, Hoffnung und Gauben; –
Ich kanns nicht vertragen – es hat seine Gründe.`},"057":{id:"057",title:"Leise zieht durch mein Gemüt",audioFile:"./audio/057.mp3",author:"Heinrich Heine",text:`Leise zieht durch mein Gemüt
liebliches Geläute.
Klinge, kleines Frühlingslied,
kling hinaus ins Weite.

Kling hinaus, bis an das Haus,
wo die Blumen sprießen.
Wenn du eine Rose schaust,
sag, ich lass sie grüßen.
`},"058":{id:"058",title:"Im wunderschönen Monat",audioFile:"./audio/058.mp3",author:"Heinrich Heine",text:`Im wunderschönen Monat Mai,
Als alle Knospen sprangen,
Da ist in meinem Herzen
Die Liebe aufgegangen.

Im wunderschönen Monat Mai,
Als alle Vögel sangen,
Da hab ich ihr gestanden
Mein Sehnen und Verlangen. `},"059":{id:"059",title:"Wenn ich in deine Augen",audioFile:"./audio/059.mp3",author:"Heinrich Heine",text:`Wenn ich in deine Augen seh’,
So schwindet all mein Leid und Weh;
Doch wenn ich küsse deinen Mund,
So werd’ ich ganz und gar gesund.

Wenn ich mich lehn’ an deine Brust,
Kommt’s über mich wie Himmelslust;
Doch wenn du sprichst: ich liebe dich!
So muß ich weinen bitterlich. `},"060":{id:"060",title:"Ich hab im Traum",audioFile:"./audio/060.mp3",author:"Heinrich Heine",text:`Ich hab im Traum geweinet,
Mir träumte, du lägest im Grab.
Ich wachte auf, und die Träne
Floß noch von der Wange herab.

Ich hab im Traum geweinet,
Mir träumt', du verließest mich.
Ich wachte auf, und ich weinte
Noch lange bitterlich.

Ich hab im Traum geweinet,
Mir träumte, du bliebest mir gut.
Ich wachte auf, und noch immer
Strömt meine Tränenflut.
`},"061":{id:"061",title:"Nun ist es Zeit",audioFile:"./audio/061.mp3",author:"Heinrich Heine",text:`Nun ist es Zeit, daß ich mit Verstand
Mich aller Thorheit entled'ge;
Ich hab' so lang als ein Komödiant
Mit Dir gespielt die Komödie.

Die prächt'gen Coulissen, sie waren bemalt
Im hochromantischen Style;
Mein Rittermantel hat goldig gestralt,
Ich fühlte die feinsten Gefühle.

Und nun ich mich gar säuberlich
Des tollen Tands entled'ge,
Noch immer elend fühl' ich mich,
Als spielt ich noch immer Komödie.

Ach Gott, ich hab' ja unbewußt
Gesprochen was ich gefühlet;
Ich hab' mit dem Tod in der eignen Brust
Den sterbenden Fechter gespielet. `},"062":{id:"062",title:"Sie erlischt",audioFile:"./audio/062.mp3",author:"Heinrich Heine",text:`Der Vorhang fällt, das Stück ist aus,
    Und Herrn und Damen gehn nach Haus.
    Ob ihnen auch das Stück gefallen?
    Ich glaub’, ich hörte Beifall schallen.
    Ein hochverehrtes Publikum
    Beklatschte dankbar seinen Dichter.
    Jetzt aber ist das Haus so stumm,
    Und sind verschwunden Lust und Lichter.
    
    Doch horch! ein schollernd schnöder Klang
    Ertönt unfern der öden Bühne; —
    Vielleicht, daß eine Saite sprang
    An einer alten Violine.
    Verdrießlich rascheln im Parterr’
    Etwelche Ratten hin und her,
    Und alles riecht nach ranz’gem Öle.
    Die letzte Lampe ächzt und zischt
    Verzweiflungsvoll, und sie erlischt.
    Das arme Licht war meine Seele.`},"063":{id:"063",title:"Belsazar",audioFile:"./audio/063.mp3",author:"Heinrich Heine",text:`Die Mitternacht zog näher schon;
In stummer Ruh lag Babylon.

Nur oben in des Königs Schloss,
Da flackert's, da lärmt des Königs Tross.

Dort oben in dem Königssaal
Belsazar hielt sein Königsmahl.

Die Knechte sassen in schimmernden Reihn
Und leerten die Becher mit funkelndem Wein.

Es klirrten die Becher, es jauchzten die Knecht;
So klang es dem störrigen Könige recht.

Des Königs Wangen leuchten Glut;
Im Wein erwuchs ihm kecker Mut.

Und blindlings reisst der Mut ihn fort;
Und er lästert die Gottheit mit sündigem Wort.

Und er brüstet sich frech und lästert wild;
Die Knechtenschar ihm Beifall brüllt.

Der König rief mit stolzem Blick;
Der Diener eilt und kehrt zurück.

Er trug viel gülden Gerät auf dem Haupt;
Das war aus dem Tempel Jehovahs geraubt.

Und der König ergriff mit frevler Hand
Einen heiligen Becher, gefüllt bis am Rand.

Und er leert ihn hastig bis auf den Grund
Und ruft laut mit schäumendem Mund:

"Jehovah! dir künd ich auf ewig Hohn -
Ich bin der König von Babylon!"

Doch kaum das grause Wort verklang,
Dem König ward's heimlich im Busen bang.

Das gellende Lachen verstummte zumal;
Es wurde leichenstill im Saal.

Und sieh! und sieh! an weisser Wand
Das kam's hervor, wie Menschenhand;

Und schrieb, und schrieb an weisser Wand
Buchstaben von Feuer und schrieb und schwand.

Der König stieren Blicks da sass,
Mit schlotternden Knien und totenblass.

Die Knechtschar sass kalt durchgraut,
Und sass gar still, gab keinen Laut.

Die Magier kamen, doch keiner verstand
Zu deuten die Flammenschrift an der Wand.

Belsazar ward aber in selbiger Nacht
Von seinen Knechten umgebracht.`},"064":{id:"064",title:"Auf eine Lampe",audioFile:"./audio/064.mp3",author:"Eduard Mörike",text:`Noch unverrückt, o schöne Lampe, schmückest du,
    An leichten Ketten zierlich aufgehangen hier,
    Die Decke des nun fast vergessnen Lustgemachs.
    Auf deiner weissen Marmorschale, deren Rand
    Der Efeukranz von goldengrünem Erz umflicht,
    Schlingt fröhlich eine Kinderschar den Ringelreihn.
    Wie reizend alles! lachend, und ein sanfter Geist
    Des Ernstes doch ergossen um die ganze Form -
    Ein Kunstgebild der echten Art. Wer achtet sein?
    Was aber schön ist, selig scheint es in ihm selbst.`},"065":{id:"065",title:"Verborgenheit",audioFile:"./audio/065.mp3",author:"Eduard Mörike",text:`Laß, o Welt, o laß mich sein!
Locket nicht mit Liebesgaben,
Laßt dies Herz alleine haben
Seine Wonne, seine Pein!

Was ich traure weiß ich nicht,
Es ein unbekanntes Wehe;
Immerdar durch Tränen sehe
Ich der Sonne liebes Licht.

Oft bin ich mir kaum bewußt,
Und die helle Freude zücket
Durch die Schwere, so mich drücket
Wonniglich in meiner Brust.

Laß, o Welt, o laß mich sein!
Locket nicht mit Liebesgaben,
Laßt dies Herz alleine haben
Seine Wonne, seine Pein!`},"066":{id:"066",title:"Schön Rohtraut",audioFile:"./audio/066.mp3",author:"Eduard Mörike",text:`    Wie heißt König Ringangs Töchterlein?
    Rohtraut, Schön-Rohtraut.
    Was tut sie denn den ganzen Tag,
    Da sie wohl nicht spinnen und nähen mag?
    Tut fischen und jagen.
    O daß ich doch ihr Jäger wär!
    Fischen und jagen freute mich sehr.
    -Schweig stille, mein Herze!

    Und über eine kleine Weil,
    Rohtraut, Schön-Rohtraut,
    So dient der Knab auf Ringangs Schloß
    In Jägertracht und hat ein Roß,
    Mit Rohtraut zu jagen.
    O daß ich doch ein Königssohn wär!
    Rohtraut, Schön-Rohtraut lieb ich so sehr.
    -Schweig stille, mein Herze! 

    Einstmals sie ruhten am Eichenbaum,
    Da lacht Schön-Rohtraut:
    >>Was siehst mich an so wunniglich?
    Wenn du das Herz hast, küsse mich!<<
    Ach! erschrak der Knabe!
    Doch denket er: mir ist´s vergunnt,
    Und küsset Schön-Rohtraut auf den Mund.
    -Schweig stille, mein Herze!

    Darauf sie ritten schweigend heim,
    Rohtraut, Schön-Rohtraut;
    Es jauchzt der Knab in seinem Sinn:
    Und würdest du heute Kaiserin,
    Mich sollt´s nicht kränken!
    Ihr tausend Blätter im Walde wißt,
    Ich hab Schön-Rohtrauts Mund geküßt!
    -Schweig stille, mein Herze! `},"067":{id:"067",title:"An eine Äolsharfe",audioFile:"./audio/067.mp3",author:"Eduard Mörike",text:`Angelehnt an die Efeuwand
Dieser alten Terrasse,
Du, einer luftgebornen Muse
Geheimnisvolles Saitenspiel,
Fang an,
Fange wieder an
Deine melodische Klage!

Ihr kommet, Winde, fern herüber,
Ach, von des Knaben,
Der mir so lieb war,
Frisch grünendem Hügel.
Und Frühlingsblüten unterweges streifend,
Übersättigt mit Wohlgerüchen,
Wie süß bedrängt ihr dies Herz!
Und säuselt her in die Saiten,
Angezogen von wohllautender Wehmut,
Wachsend im Zug meiner Sehnsucht,
Und hinsterbend wieder.

Aber auf einmal,
Wie der Wind heftiger herstößt,
Ein holder Schrei der Harfe
Wiederholt, mir zu süßem Erschrecken,
Meiner Seele plötzliche Regung;
Und hier – die volle Rose streut, geschüttelt,
All ihre Blätter vor meine Füße!`},"068":{id:"068",title:"Heimweh",audioFile:"./audio/068.mp3",author:"Eduard Mörike",text:`Anders wird die Welt mit jedem Schritt,
Den ich weiter von der Liebsten mache;
Mein Herz, das will nicht weiter mit.
Hier scheint die Sonne kalt ins Land,
Hier deucht mir alles unbekannt,
Sogar die Blumen am Bache!
Hat jede Sache
So fremd eine Miene, so falsch ein Gesicht.
Das Bächlein murmelt wohl und spricht:
„Armer Knabe, komm bei mir vorüber,
Siehst auch hier Vergißmeinnicht!“
– Ja, die sind schön an jedem Ort,
Aber nicht wie dort.
Fort, nur fort!
Die Augen gehn mir über!`},"069":{id:"069",title:"Der Feuerreiter",audioFile:"./audio/069.mp3",author:"Eduard Mörike",text:`Sehet ihr am Fensterlein
Dort die rote Mütze wieder?
Nicht geheuer muß es sein
Denn er geht schon auf und nieder.
Und auf einmal welch Gewühle
Bei der Brücke, nach dem Feld!
Horch! das Feuerglöcklein gellt:
Hinterm Berg, Hinterm Berg,
Brennt es in der Mühle!

Schaut! da sprengt er wütend schier
Durch das Tor, der Feuerreiter,
Auf dem rippendürren Tier,
Als auf einer Feuerleiter!
Querfeldein! Durch Qualm und Schwüle
Rennt er schon und ist am Ort!
Drüben schallt es fort und fort:
Hinterm Berg, Hinterm Berg
Brennt es in der Mühle!

Der so oft den roten Hahn
Meilenweit von fern gerochen,
Mit des heilgen Kreuzes Span
Freventlich die Glut besprochen –
Weh! dir grinst vom Dachgestühle
Dort der Feind im Höllenschein.
Gnade Gott der Seele dein!
Hinterm Berg, Hinterm Berg
Rast er in der Mühle!

Keine Stunde hielt es an,
Bis die Mühle borst in Trümmer;
Doch den kecken Reitersmann
sah man von der Stunde nimmer.
Volk und Wagen im Gewühle
Kehren heim von all dem Graus;
Auch das Glöcklein klinget aus:
Hinterm Berg,
Hinterm Berg Brennts! -

Nach der Zeit ein Müller fand
Ein Gerippe samt der Mützen
Aufrecht an der Kellerwand
Auf der beinern Mähre sitzen:
Feuerreiter, wie so kühle
Reitest du in deinem Grab!
Husch! da fällts in Asche ab. Ruhe wohl, Ruhe wohl
Drunten in der Mühle!`},"070":{id:"070",title:"Die Geister vom Mummelsee",audioFile:"./audio/070.mp3",author:"Eduard Mörike",text:`Vom Berge was kommt dort um Mitternacht spät
mit Fackeln so prächtig herunter?
Ob das wohl zum Tanze, zum Feste noch geht?
Mir klingen die Lieder so munter.
O nein!
So sage, was mag es wohl sein?

Das, was du da siehest, ist Totengeleit,
und was du da hörest, sind Klagen.
Dem König, dem Zauberer, gilt es zuleid,
sie bringen ihn wieder getragen.
O weh!
So sind es die Geister vom See!

Sie schweben herunter ins Mummelseetal –
sie haben den See schon betreten –
sie rühren und netzen den Fuß nicht einmal –
sie schwirren in leisen Gebeten –
o schau
am Sarge die glänzende Frau!

Jetzt öffnet der See das grünspiegelnde Tor;
gib acht, nun tauchen die nieder!
Es schwankt eine lebende Treppe hervor,
und – drunten schon summen die Lieder
hörst du?
Sie singen ihn unten zur Ruh.

Die Wasser, wie lieblich sie brennen und glüh'n!
Sie spielen in grünendem Feuer;
es geisten die Nebel am Ufer dahin,
zum Meere verzieht sich der Weiher. –
Nur still!
Ob dort sich nichts rühren will?

Es zuckt in der Mitten – o Himmel! ach hilf!
Nun kommen sie wieder, sie kommen!
Es orgelt im Rohr, und es klirret im Schilf;
nur hurtig, die Flucht nur genommen!
Davon!
Sie wittern, sie haschen mich schon! `},"071":{id:"071",title:"Ihr meine sehenden Augen",audioFile:"./audio/071.mp3",author:"Eduard Mörike",text:`Ihr, meine sehenden Augen saht ihr dies:
Mir deucht, ich lag in dem kristallnen Sarg;
Mein Weib, die göttliche Gestalt, mit Lächeln
Bog sie sich über mich; gar wohl erkannt' ich
Sie wieder und ihr süßes Angesicht. --
Ha! welch ein wohlgesinnter Gott ließ mich
Im Schattenbilde sehen mein nahend Ende?

Vor Freude stürmt mein Geist
Und schwärmt schon taumelnd um das Seegestade
Wo endlich mir die dunkle Blume duftet.
Oh Götter, eilet jezt mit mir! Laßt bald
Mich euren Kuß empfangen! sei es nun
Im Wetterstrahl, der schlängelnd mich verzehre,
Sei es im Windhauch, der die stillen Gräser
Vorüberwandelnd neigt und weht die Seele
Ulmons dahin.`},"072":{id:"072",title:"Elfenlied",audioFile:"./audio/072.mp3",author:"Eduard Mörike",text:` Bei Nacht im Dorf der Wächter rief: Elfe!
Ein ganz kleines Elfchen im Walde schlief

Wohl um die Elfe! -
Und meint, es rief ihm aus dem Tal
Bei seinem Namen die Nachtigall,
Oder Silpelit hätt ihm gerufen.
Reibt sich der Elf die Augen aus,
Begibt sich vor sein Schneckenhaus,
Und ist als wie ein trunken Mann,
Sein Schläflein war nicht voll getan,
Und humpelt also tippe tapp
Durchs Haselholz ins Tal hinab
Schlupft an der Mauer hin so dicht,
Da sitzt der Glühwurm, Licht an Licht.
"Was sind das helle Fensterlein?
Da drin wird eine Hochzeit sein:
Die Kleinen sitzen beim Mahle,
Und treiben's in dem Saale.
Da guck ich wohl ein wenig 'nein!"
- Pfui, stößt den Kopf an harten Stein!
Elfe, gelt, du hast genug?
Gukuk! Gukuk!`},"073":{id:"073",title:"Das verlassene Mägdlein",audioFile:"./audio/073.mp3",author:"Eduard Mörike",text:`Früh, wann die Hähne krähn,
Eh die Sternlein verschwinden,
Muss ich am Herde stehn,
Muss Feuer zünden.

Schön ist der Flammen Schein,
Es springen die Funken;
Ich schaue so drein,
In Leid versunken.

Plötzlich, da kommt es mir,
Treuloser Knabe,
Dass ich die Nacht von dir
Geträumet habe.

Träne auf Träne dann
Stürzet hernieder;
So kommt der Tag heran -
O ging er wieder!`},"074":{id:"074",title:"Er ists",audioFile:"./audio/074.mp3",author:"Eduard Mörike",text:`Frühling lässt sein blaues Band
Wieder flattern durch die Lüfte;
Süße, wohlbekannte Düfte
Streifen ahnungsvoll das Land.
Veilchen träumen schon,
Wollen balde kommen.
– Horch, von fern ein leiser Harfenton!
Frühling, ja du bist's!
Dich hab ich vernommen!`},"075":{id:"075",title:"Im Frühling",audioFile:"./audio/075.mp3",author:"Eduard Mörike",text:`Hier lieg′ ich auf dem Frühlingshügel:
Die Wolke wird mein Flügel,
Ein Vogel fliegt mir voraus.
Ach, ag′ mir, alleinzige Liebe,
Wo du bleibst, daß ici bei dir bliebe!
Doch du und die Lüfte, ihr habt kein Haus.

Der Sonnenblume gleich steht mein Gemüte offen,
Sehnend,
Sich dehnend
In Lieben und Hoffen.
Frühling, was bist du gewillt?
Wann werd′ ich gestillt?

Die Wolke seh′ ich wandeln und den Fluß,
Es dringt der Sonne goldner Kuß
Mir tief bis ins Geblüt hinein;
Die Augen, wunderbar berauschet,
Tun, als schliefen sie ein,
Nur noch das Ohr dem Ton der Biene lauschet.

Ich denke dies und denke das,
Ich sehne mich und weiß nicht recht, nach was:
Halb ist es Lust, halb ist es Klage;
Mein Herz, o sage,
Was webst du für Erinnerung
In golden grüner Zweige Dämmerung! -
Alte unnennbare Tage!`},"076":{id:"076",title:"Agnes",audioFile:"./audio/076.mp3",author:"Eduard Mörike",text:`Rosenzeit! Wie schnell vorbei,
Schnell vorbei
Bist du doch gegangen!
Wär mein Lieb nur blieben treu,
Blieben treu,
Sollte mir nicht bangen.

Um die Ernte wohlgemut,
Wohlgemut,
Schnitterinnen singen.
Aber ach! mir kranken Blut,
Mir kranken Blut
Will nichts mehr gelingen.

Schleiche so durchs Wiesental,
So durchs Tal,
Als im Traum verloren,
Nach dem Berg, da tausendmal,
Tausendmal
Er mir Treu geschworen.

Oben auf des Hügels Rand,
Abgewandt,
Wein ich bei der Linde;
An dem Hut mein Rosenband,
Von seiner Hand,
Spielet in dem Winde. `},"077":{id:"077",title:"An einem Wintermorgen",audioFile:"./audio/077.mp3",author:"Eduard Mörike",text:`O flaumenleichte Zeit der dunkeln Frühe!
Welch neue Welt bewegest du in mir?
Was ist′ s, daß ich auf einmal nun in dir
Von sanfter Wollust meines Daseins glühe?

Einem Kristall gleicht meine Seele nun,
Den noch kein falscher Strahl des Lichts getroffen;
Zu fluten scheint mein Geist, er scheint zu ruhn,
Dem Eindruck naher Wunderkräfte offen,
Die aus dem klaren Gürtel blauer Luft
Zuletzt ein Zauberwort vor meine Sinne ruft.

Bei hellen Augen glaub ich doch zu schwanken;
Ich schließe sie, daß nicht der Traum entweiche.
Seh ich hinab in lichte Feenreiche?
Wer hat den bunten Schwarm von Bildern und Gedanken
Zur Pforte meines Herzens hergeladen,
Die glänzend sich in diesem Busen baden,
Goldfarbgen Fischlein gleich im Gartenteiche?

Ich höre bald der Hirtenflöten Klänge,
Wie um die Krippe jener Wundernacht,
Bald weinbekränzter Jugend Lustgesänge;
Wer hat das friedenselige Gedränge
In meine traurigen Wände hergebracht?

Und welch Gefühl entzückter Stärke,
Indem mein Sinn sich frisch zur Ferne lenkt!
Vom ersten Mark des heutgen Tags getränkt,
Fühl ich mir Mut zu jedem frommen Werke.

Die Seele fliegt, so weit der Himmel reicht,
Der Genius jauchzt in mir! Doch sage,
Warum wird jetzt der Blick von Wehmut feucht?
Ist's ein verloren Glück, was mich erweicht?
Ist es ein werdendes, was ich im Herzen trage?
– Hinweg, mein Geist! hier gilt kein Stillestehn:
Es ist ein Augenblick, und alles wird verwehn!

Dort, sieh, am Horizont lüpft sich der Vorhang schon!
Es träumt der Tag, nun sei die Nacht entflohn;
Die Purpurlippe, die geschlossen lag,
Haucht, halbgeöffnet, süße Atemzüge:
Auf einmal blitzt das Aug, und, wie ein Gott, der Tag
Beginnt im Sprung die königlichen Flüge!`},"078":{id:"078",title:"Gesang zu zweien in der Nacht",audioFile:"./audio/078.mp3",author:"Eduard Mörike",text:`Sie:
Wie süß der Nachtwind nun die Wiese streift,
Und klingend jetzt den jungen Hain durchläuft!
Da noch der freche Tag verstummt,
Hört man der Erdenkräfte flüsterndes Gedränge,
Das aufwärts in die zärtlichen Gesänge
Der reingestimmten Lüfte summt.
 
Er:
Vernehm ich doch die wunderbarsten Stimmen,
Vom lauen Wind wollüstig hingeschleift,
Indes, mit ungewissem Licht gestreift,
Der Himmel selber scheinet hinzuschwimmen.
 
Sie:
Wie ein Gewebe zuckt die Luft manchmal,
Durchsichtiger und heller aufzuwehen;
Dazwischen hört man weiche Töne gehen
Von sel'gen Feen, die im blauen Saal
Zum Sphärenklang,
Und fleißig mit Gesang,
Silberne Spindeln hin und wider drehen.
 
Er:
O holde Nacht, du gehst mit leisem Tritt
Auf schwarzem Samt, der nur am Tage grünet,
Und luftig schwirrender Musik bedienet
Sich nun dein Fuß zum leichten Schritt,
Womit du Stund um Stunde missest,
Dich lieblich in dir selbst vergissest –
Du schwärmst, es schwärmt der Schöpfung Seele mit!`},"079":{id:"079",title:"Denk es, o Seele",audioFile:"./audio/079.mp3",author:"Eduard Mörike",text:`

Ein Tännlein grünet, wo,
Wer weiß! im Walde,
Ein Rosenstrauch, wer sagt,
In welchem Garten?
Sie sind erlesen schon,
Denk′ es, o Seele,
Auf deinem Grab zu wurzeln
Und zu wachsen.

Zwei schwarze Rößlein weiden
Auf der Wiese,
Sie kehren heim zur Stadt
In muntren Sprüngen.
Sie werden schrittweis gehn
Mit deiner Leiche;
Vielleicht, vielleicht noch eh′
An ihren Hufen
Das Eisen los wird,
Das ich blitzen sehe`},"080":{id:"080",title:"Das Fegefeuer des westfälischen Adels",audioFile:"./audio/080.mp3",author:"Annette von Droste-Hülshoff",text:`Wo der selige Himmel, das wissen wir nicht,
Und nicht, wo der gräuliche Höllenschlund,
Ob auch die Wolke zittert im Licht,
Ob siedet und qualmet Vulkanes Mund;
Doch wo die westphälischen Edeln müssen
Sich sauber brennen ihr rostig Gewissen,
Das wissen wir alle, das ward uns kund.

Grau war die Nacht, nicht öde und schwer,
Ein Aschenschleier hing in der Luft;
Der Wanderbursche schritt flink einher,
Mit Wollust saugend den Heimatduft;
O bald, bald wird er schauen sein Eigen,
Schon sieht am Lutterberge er steigen
Sich leise schattend die schwarze Kluft.

Er richtet sich, wie Trompetenstoß
Ein Hollah ho! seiner Brust entsteigt -
Was ihm im Nacken? ein schnaubend Roß,
An seiner Schulter es rasselt, keucht,
Ein Rappe - grünliche Funken irren
Ueber die Flanken, die knistern und knirren,
Wie wenn man den murrenden Kater streicht.

"Jesus Maria!" - er setzt seitab,
Da langt vom Sattel es überzwerg -
Ein eherner Griff, und in wüstem Trab
Wie Wind und Wirbel zum Lutterberg!
An seinem Ohre hört er es raunen
Dumpf und hohl, wie gedämpfte Posaunen,
So an ihm raunt der gespenstige Scherg':

"Johannes Deweth! ich kenne dich!
Johann! du bist uns verfallen heut!
Bei deinem Heile, nicht lach' noch sprich,
Und rühre nicht an was man dir beut;
Vom Brode nur magst du brechen in Frieden,
Ewiges Heil ward dem Brode beschieden,
Als Christus in froner Nacht es geweiht!" -

Ob mehr gesprochen, man weiß es nicht,
Da seine Sinne der Bursche verlor,
Und spät erst hebt er sein bleiches Gesicht
Vom Estrich einer Halle empor;
Um ihn Gesumme, Geschwirr, Gemunkel,
Von tausend Flämmchen ein mattes Gefunkel,
Und drüber schwimmend ein Nebelflor.

Er reibt die Augen, er schwankt voran,
An hundert Tischen, die Halle entlang,
All edle Geschlechter, so Mann an Mann;
Es rühren die Gläser sich sonder Klang,
Es regen die Messer sich sonder Klirren,
Wechselnde Reden summen und schwirren,
Wie Glockengeläut, ein wirrer Gesang.

Ob jedem Haupte des Wappens Glast,
Das langsam schwellende Tropfen speit,
Und wenn sie fallen, dann zuckt der Gast,
Und drängt sich einen Moment zur Seit';
Und lauter, lauter dann wird das Rauschen,
Wie Stürme die zornigen Seufzer tauschen,
Und wirrer summet das Glockengeläut.

Strack steht Johann wie ein Lanzenknecht,
Nicht möchte der gleißenden Wand er trau'n,
Noch wäre der flimmernde Sitz ihm recht,
Wo rutschen die Knappen mit zuckenden Brau'n.
Da muß, o Himmel, wer sollt' es denken!
Den frommen Herrn, den Friedrich von Brenken,
Den alten stattlichen Ritter er schaun.

"Mein Heiland, mach ihn der Sünden baar!"
Der Jüngling seufzet in schwerem Leid;
Er hat ihm gedienet ein ganzes Jahr;
Doch ungern kredenzt er den Becher ihm heut!
Bei jedem Schlucke sieht er ihn schüttern,
Ein blaues Wölkchen dem Schlund entzittern,
Wie wenn auf Kohlen man Weihrauch streut.

O manche Gestalt noch dämmert ihm auf,
Dort sitzt sein Pathe, der Metternich,
Und eben durch den wimmelnden Hauf
Johann von Spiegel, der Schenke, strich;
Prälaten auch, je viere und viere,
Sie blättern und rispeln im grauen Breviere,
Und zuckend krümmen die Finger sich.

Und unten im Saale, da knöcheln frisch
Schaumburger Grafen um Leut' und Land,
Graf Simon schüttelt den Becher risch,
Und reibt mitunter die knisternde Hand;
Ein Knappe nahet, er surret leise -
Ha, welches Gesumse im weiten Kreise,
Wie hundert Schwärme an Klippenrand!

"Geschwind den Sessel, den Humpen werth,
Den schleichenden Wolf* geschwinde herbei!"
Horch, wie es draußen rasselt und fährt!
Baarhaupt stehet die Massoney,
Hundert Lanzen drängen nach binnen,
Hundert Lanzen und mitten darinnen
Der Asseburger, der blutige Weih!

Und als ihm alles entgegen zieht,
Da spricht Johannes ein Stoßgebet:
Dann risch hinein! sein Ermel sprüht,
Ein Funken über die Finger ihm geht.
Voran - da "sieben" schwirren die Lüfte
"Sieben, sieben, sieben", die Klüfte,
"In sieben Wochen, Johann Deweth!"

Der sinkt auf schwellenden Rasen hin,
Und schüttelt gegen den Mond die Hand,
Drei Finger die bröckeln und stäuben hin,
Zu Asch' und Knöchelchen abgebrannt.
Er rafft sich auf, er rennt, er schießet,
Und ach, die Vaterklause begrüßet
Ein grauer Mann, von Keinem gekannt,

Der nimmer lächelt, nur des Gebets
Mag pflegen drüben im Klosterchor,
Denn "sieben, sieben", flüstert es stets,
Und "sieben Wochen" ihm in das Ohr.
Und als die siebente Woche verronnen,
Da ist er versiegt wie ein dürrer Bronnen,
Gott hebe die arme Seele empor!`},"081":{id:"081",title:"Der Knabe im Moor",audioFile:"./audio/081.mp3",author:"Annette von Droste-Hülshoff",text:`O schaurig ist’s über’s Moor zu gehn,
Wenn es wimmelt vom Heiderauche,
Sich wie Phantome die Dünste drehn
Und die Ranke häkelt am Strauche,
Unter jedem Tritte ein Quellchen springt,
Wenn aus der Spalte es zischt und singt,
O schaurig ist’s über’s Moor zu gehn,
Wenn das Röhricht knistert im Hauche!

Fest hält die Fibel das zitternde Kind
Und rennt als ob man es jage;
Hohl über die Fläche sauset der Wind –
Was raschelt drüben am Hage?
Das ist der gespenstige Gräberknecht,
Der dem Meister die besten Torfe verzecht;
Hu, hu, es bricht wie ein irres Rind!
Hinducket das Knäblein zage

Vom Ufer starret Gestumpf hervor,
Unheimlich nickt die Föhre,
Der Knabe rennt, gespannt das Ohr,
Durch Riesenhalme wie Speere;
Und wie es rieselt und knittert darin!
Das ist die unselige Spinnerin,
Das ist die gebannte Spinnlenor’,
Die den Haspel dreht im Geröhre!

Voran, voran, nur immer im Lauf,
Voran als woll’ es ihn holen;
Vor seinem Fuße brodelt es auf,
Es pfeift ihm unter den Sohlen
Wie eine gespenstige Melodei;
Das ist der Geigermann ungetreu,
Das ist der diebische Fiedler Knauf,
Der den Hochzeitheller gestohlen!

Da birst das Moor, ein Seufzer geht
Hervoraus der klaffenden Höhle;
Weh, weh, da ruft die verdammte Margreth;
,,Ho, ho, meine arme Seele!’’
Der Knabe springt wie ein wundes Reh,
Wär’ nicht Schutzengel in der Näh’,
Seine bleichenden Knöchelchen fände spät
Ein Gräber im Moorgeschwele.

Da mählich gründet der Boden sich,
Und drüben, neben der Weide,
Die Lampe flimmert so heimatlich,
Der Knabe steht an der Scheide.
Tief atmet er auf, zum Moor zurück
Noch immer wirft er den scheuen Blick;
Ja, im Geröhre war’s fürchterlich,
O schaurig wars in der Heide!`},"082":{id:"082",title:"Abseits",audioFile:"./audio/082.mp3",author:"Theodor Storm",text:`Es ist so still; die Heide liegt
Im warmen Mittagssonnenstrahle,
Ein rosenroter Schimmer fliegt
Um ihre alten Gräbermale;
Die Kräuter blühn; der Heideduft
Steigt in die blaue Sommerluft.

Laufkäfer hasten durch's Gesträuch
In ihren goldnen Panzerröckchen,
Die Bienen hängen Zweig um Zweig
Sich an der Edelheide Glöckchen;
Die Vögel schwirren aus dem Kraut -
Die Luft ist voller Lerchenlaut.

Ein halbverfallen' niedrig' Haus
Steht einsam hier und sennbeschienen
Der Kätner lehnt zur Tür hinaus,
Behaglich blinzelnd nach den Bienen;
Sein Junge auf dem Stein davor
Schnitzt Pfeifen sich aus Kälberrohr.

Kaum zittert durch die Mittagsruh
Ein Schlag der Dorfuhr, der entfernten
Dem Alten fällt die Wimper zu,
Er träumt von seinen Honigernten.
— Kein Klang der aufgeregten Zeit
Drang noch in diese Einsamkeit. `},"083":{id:"083",title:"Die Stadt",audioFile:"./audio/083.mp3",author:"Theodor Storm",text:`Am grauen Strand, am grauen Meer
    Und seitab liegt die Stadt;
    Der Nebel drückt die Dächer schwer,
    Und durch die Stille braust das Meer
    Eintönig um die Stadt.

    Es rauscht kein Wald, es schlägt im Mai
    Kein Vogel ohn' Unterlass;
    Die Wandergans mit hartem Schrei
    Nur fliegt in Herbstesnacht vorbei,
    Am Strande weht das Gras.

    Doch hängt mein ganzes Herz an dir,
    Du graue Stadt am Meer;
    Der Jugend Zauber für und für
    Ruht lächelnd doch auf dir, auf dir,
    Du graue Stadt am Meer. `},"084":{id:"084",title:"Meeresstrand",audioFile:"./audio/084.mp3",author:"Theodor Storm",text:`Ans Haff nun fliegt die Möwe,
Und Dämm’rung bricht herein;
Über die feuchten Watten
Spiegelt der Abendschein.

Graues Geflügel huschet
Neben dem Wasser her;
Wie Träume liegen die Inseln
Im Nebel auf dem Meer.

Ich höre des gärenden Schlammes
Geheimnisvollen Ton,
Einsames Vogelrufen -
So war es immer schon.

Noch einmal schauert leise
Und schweiget dann der Wind;
Vernehmlich werden die Stimmen,
Die über der Tiefe sind.`},"085":{id:"085",title:"Im Walde",audioFile:"./audio/085.mp3",author:"Theodor Storm",text:`Hier an der Bergeshalde
Verstummet ganz der Wind;
Die Zweige hängen nieder,
Darunter sitzt das Kind.

Sie sitzt in Thymiane,
Sie sitzt in lauter Duft;
Die blauen Fliegen summen
Und blitzen durch die Luft.

Es steht der Wald so schweigend,
Sie schaut so klug darein;
Um ihre braunen Locken
Hinfließt der Sonnenschein.

Der Kuckuck lacht von ferne,
Es geht mir durch den Sinn:
Sie hat die goldnen Augen
Der Waldeskönigin.`},"086":{id:"086",title:"Weiße Rosen",audioFile:"./audio/086.mp3",author:"Theodor Storm",text:`So dunkel sind die Straßen,
So herbstlich geht der Wind;
Leb wohl, meine weiße Rose,
Mein Herz, mein Weib, mein Kind!

So schweigend steht der Garten,
Ich wandre weit hinaus;
Er wird dir nicht verraten,
Daß ich nimmer kehr nach Haus.

Der Weg ist gar so einsam,
Es reist ja niemand mit;
Die Wolken nur am Himmel
Halten gleichen Schritt.

Ich bin so müd zum Sterben;
Drum blieb' ich gern zu Haus
Und schliefe gern das Leben
Und Lust und Leiden aus.`},"087":{id:"087",title:"Noch einmal!",audioFile:"./audio/087.mp3",author:"Theodor Storm",text:`Noch einmal fällt in meinen Schoß
Die rote Rose Leidenschaft;
Noch einmal hab ich schwärmerisch
In Mädchenaugen mich vergafft;
Noch einmal legt ein junges Herz
An meines seinen starken Schlag;
Noch einmal weht an meine Stirn
Ein juniheißer Sommertag.`},"088":{id:"088",title:"Die Stunde schlug",audioFile:"./audio/088.mp3",author:"Theodor Storm",text:`Die Stunde ſchlug, und deine Hand
Liegt zitternd in der meinen;
An meine Lippen ſtreiften ſchon
Mit ſcheuem Druck die deinen;
Es zuckten aus dem vollen Kelch
Electriſch ſchon die Funken —
O faſſe Muth, und fliehe nicht,
Bevor wir ganz getrunken!

Die Lippen, die mich ſo berührt,
Sind nicht mehr deine eignen,
Sie können doch, ſo lang' du lebſt,
Die meinen nicht verleugnen;
Die Lippen, die ſich ſo berührt,
Sind rettungslos gefangen;
Spät oder früh, ſie müſſen doch
Sich tödtlich heimverlangen.`},"089":{id:"089",title:"Die Nachtigall",audioFile:"./audio/089.mp3",author:"Theodor Storm",text:`Das macht, es hat die Nachtigall
Die ganze Nacht gesungen;
Da sind von ihrem süßen Schall,
Da sind in Hall und Widerhall
Die Rosen aufgesprungen.

Sie war doch sonst ein wildes Blut;
Nun geht sie tief in Sinnen,
Trägt in der Hand den Sommerhut
Und duldet still der Sonne Glut
Und weiß nicht, was beginnen.

Das macht, es hat die Nachtigall
Die ganze Nacht gesungen;
Da sind von ihrem süßen Schall,
Da sind in Hall und Widerhall
Die Rosen aufgesprungen.`},"090":{id:"090",title:"In Bulemanns Haus",audioFile:"./audio/090.mp3",author:"Theodor Storm",text:`Es klippt auf den Gassen im Mondenschein;
    Das ist die zierliche Kleine,
    Die geht auf ihren Pantöffelein
    Behend und mutterseelenallein
    Durch die Gassen im Mondenscheine.

    Sie geht in ein alt verfallenes Haus;
    Im Flur ist die Tafel gedecket,
    Da tanzt vor dem Monde die Maus mit der Maus,
    Da setzt sich das Kind mit den Mäusen zu Schmaus,
    Die Tellerlein werden gelecket.

    Und leer sind die Schüsseln; die Mäuslein im Nu
    Verrascheln in Mauer und Holze;
    Nun läßt es dem Mägdlein auch länger nicht Ruh,
    Sie schüttelt ihr Kleidchen, sie schnürt sich die Schuh,
    Dann tritt sie einher mit Stolze.

    Es leuchtet ein Spiegel aus goldnem Gestell,
    Da schaut sie hinein mit Lachen;
    Gleich schaut auch heraus ein Mägdelein hell,
    Das ist ihr einziger Spielgesell;
    Nun wolln sie sich lustig machen.

    Sie nickt voll Huld, ihr gehört ja das Reich;
    Da neigt sich das Spiegelkindlein,
    Da neigt sich das Kind vor dem Spiegel zugleich,
    Da neigen sich beide gar anmutreich,
    Da lächeln die rosigen Mündlein.

    Und wie sie lächeln, so hebt sich der Fuß,
    Es rauschen die seidenen Röcklein,
    Die Händchen werfen sich Kuß um Kuß,
    Das Kind mit dem Kinde nun tanzen muß,
    Es tanzen im Nacken die Löcklein.

    Der Mond scheint voller und voller herein,
    Auf dem Estrich gaukeln die Flimmer:
    Im Takte schweben die Mägdelein,
    Bald tauchen sie tief in die Schatten hinein,
    Bald stehn sie in bläulichem Schimmer.

    Nun sinken die Glieder, nun halten sie an
    Und atmen aus Herzensgrunde;
    Sie nahen sich schüchtern und beugen sich dann
    Und knien voreinander und rühren sich an
    Mit dem zarten unschuldigen Munde.

    Doch müde werden die beiden allein
    Von all der heimlichen Wonne;
    Sehnsüchtig flüstert das Mägdelein:
    »Ich mag nicht mehr tanzen im Mondenschein,
    Ach, käme doch endlich die Sonne!«

    Sie klettert hinunter ein Trepplein schief
    Und schleicht hinab in den Garten.
    Die Sonne schlief, und die Grille schlief.
    »Hier will ich sitzen im Grase tief,
    Und der Sonne will ich warten.«

    Doch als nun morgens um Busch und Gestein
    Verhuschet das Dämmergemunkel,
    Da werden dem Kinde die Äugelein klein;
    Sie tanzte zu lange bei Mondenschein,
    Nun schläft sie bei Sonnengefunkel.

    Nun liegt sie zwischen den Blumen dicht
    Auf grünem, blitzendem Rasen;
    Und es schauen ihr in das süße Gesicht
    Die Nachtigall und das Sonnenlicht
    Und die kleinen neugierigen Hasen.
`},"091":{id:"091",title:"Du willst es nicht in Worten sagen",audioFile:"./audio/091.mp3",author:"Theodor Storm",text:` Du willſt es nicht in Worten ſagen;
Doch legſt du's brennend Mund auf Mund,
Und deiner Pulſe tiefes Schlagen
Thut liebliches Geheimniß kund.
Du fliehſt vor mir, du ſcheue Taube,
Und drückſt dich feſt an meine Bruſt;
Du biſt der Liebe ſchon zum Raube,
Und biſt dir kaum des Worts bewußt.
Du biegſt den ſchlanken Leib mir ferne,
Indeß dein rother Mund mich küßt;
Behalten möchteſt du dich gerne,
Da du doch ganz verloren biſt.`},"092":{id:"092",title:"Wohl rief ich sanft dich an mein Herz",audioFile:"./audio/092.mp3",author:"Theodor Storm",text:`Wohl rief ich sanft dich an mein Herz,
Doch blieben meine Arme leer;
Der Stimme Zauber, der du sonst
Nie widerstandest, galt nicht mehr.

Was jetzt dein Leben füllen wird,
Wohin du gehst, wohin du irrst,
Ich weiß es nicht; ich weiß allein,
Daß du mir nie mehr lächeln wirst.

Doch kommt erst jene stille Zeit,
Wo uns das Leben läßt allein,
Dann wird, wie in der Jugend einst,
Nur meine Liebe bei dir sein.

Dann wird, was jetzt geschehen mag,
Wie Schatten dir vorübergehn,
Und nur die Zeit, die nun dahin,
Die uns gehörte, wird bestehn.

Und wenn dein letztes Kissen einst
Beglänzt ein Abendsonnenstrahl,
Es ist die Sonne jenes Tags,
Da ich dich küßte zum erstenmal. `},"093":{id:"093",title:"Beginn des Endes",audioFile:"./audio/093.mp3",author:"Theodor Storm",text:`Ein Punkt nur ist es, kaum ein Schmerz,
Nur ein Gefühl, empfunden eben;
Und dennoch spricht es stets darein,
Und dennoch stört es dich zu leben.

Wenn du es andern klagen willst,
So kannst du's nicht in Worte fassen.
Du sagst dir selber: »Es ist nichts!«
Und dennoch will es dich nicht lassen.

So seltsam fremd wird dir die Welt,
Und leis verläßt dich alles Hoffen,
Bis du es endlich, endlich weißt,
Daß dich des Todes Pfeil getroffen.`},"094":{id:"094",title:"Märkische Reime: 1. Gruß/2. Vom Fehrbelliner Schlachtfeld",audioFile:"./audio/094.mp3",author:"Theodor Fontane",text:`1.
Gruß.

Blaue Havel, Grunewald,
Grüß’ mir alle beide,
Grüß’ und sag’ ich käme bald,
Und die Tegler Haide.


2.
Vom Fehrbelliner Schlachtfeld.

Blumen, o Freundin, Dir mitzubringen
Von diesem Feld, es wollt’ nicht gelingen.

Hafer nur, soweit ich sah,
Hafer, Hafer nur war da.

Märkische Rosse gewannen die Schlacht,
Haben das Feld berühmt gemacht.

Und das Feld, es zahlt mit Glück
Alte Schulden in Hafer zurück.
`},"095":{id:"095",title:"Meine Gräber",audioFile:"./audio/095.mp3",author:"Theodor Fontane",text:`Kein Erbbegräbnis mich stolz erfreut,
Meine Gräber liegen weit zerstreut,
Weit zerstreut über Stadt und Land,
Aber all in märkischem Sand.

Verfallene Hügel, die Schwalben ziehn,
Vorüber schlängelt sich der Rhin,
Über weiße Steine, zerbröckelt all,
Blickt der alte Ruppiner Wall,
Die Buchen stehn, die Eichen rauschen,
Die Gräberbüsche Zwiesprach tauschen,
Und Haferfelder weit auf und ab -
Da ist meiner Mutter Grab.

Und ein andrer Platz, dem verbunden ich bin:
Berglehnen, die Oder fließt dran hin,
Zieht vorüber in trägem Lauf,
Gelbe Mummeln schwimmen darauf.
Am Ufer Werft und Schilf und Rohr,
Und am Abhange schimmern Kreuze hervor,
Auf eines fällt heller Sonnenschein -
Da hat mein Vater seinen Stein.

Der Dritte, seines Todes froh,
Liegt auf dem weiten Teltow-Plateau,
Dächer von Ziegel, Dächer von Schiefer,
Dann und wann eine Krüppelkiefer,
Ein stiller Graben die Wasserscheide,
Birken hier, und da eine Weide,
Zuletzt eine Pappel am Horizont,
Im Abendstrahle sie sich sonnt.
Auf den Gräbern Blumen und Aschenkrüge,
Vorüber in Ferne rasseln die Züge,
Still bleibt das Grab und der Schläfer drin -
Der Wind, der Wind geht drüber hin.`},"096":{id:"096",title:"Prinz Louis Ferdinand",audioFile:"./audio/096.mp3",author:"Theodor Fontane",text:`Sechs Fuß hoch aufgeschossen,
Ein Kriegsgott anzuschaun,
Der Liebling der Genossen,
Der Abgott schöner Fraun,
Blauäugig, blond, verwegen
Und in der jungen Hand
Den alten Preußendegen -
Prinz Louis Ferdinand.

Die Generalitäten
Kopfschütteln früh und spät,
Sie räuspern sich und treten
Vor Seine Majestät,
Sie sprechen: »Nicht zu dulden
Ist dieser Lebenslauf,
Die Mädchen und die Schulden
Zehren den Prinzen auf.«

Der König drauf mit Lachen:
»Dank' schön, ich wußt' es schon;
Es gilt ihn kirr zu machen,
Drum: Festungsgarnison;
Er muß in die Provinzen
Und nicht länger hier verziehn,
Nach Magdeburg mit dem Prinzen -
Und nie Urlaub nach Berlin.«

Der Prinz vernimmt die Märe,
Saß eben bei seinem Schatz:
»Nach Magdeburg, auf Ehre,
Das ist ein schlimmer Platz!«
Er meldet sich am Orte,
Und es spricht der General:
»Täglich elf Uhr zum Rapporte
Ein für allemal!«

O Prinz, das will nicht munden,
Doch denkt er: ›Sei gescheit,
Volle vierundzwanzig Stunden
Sind eine hübsche Zeit.
Relais, viermal verschnaufen,
Auf dem Sattel Nachtquartier,
Und kann's ein Pferd nicht laufen,
So laufen's ihrer vier.‹

Hin fliegt er wie die Schwalben,
Fünf Meilen ist Station,
Vom Braunen auf den Falben,
Das ist die Havel schon,
Vom Rappen auf den Schimmel,
Nun faßt die Sehnsucht ihn,
Drei Meilen noch - hilf Himmel,
Prinz Louis in Berlin.

Gegeben und genommen
Wird einer Stunde Glück,
Dann, flugs wie er gekommen,
Im Fluge geht's zurück,
Elf Uhr am andern Tage
Hält er am alten Ort,
Und mit dem Glockenschlage
Da steht er zum Rapport. -

Das war nur bloßes Reiten,
Doch wer so reiten kann,
Der ist in rechten Zeiten
Auch wohl der rechte Mann;
Schon über Tal und Hügel
Stürmt ostwärts der Koloß -
Prinz Louis sitzt am Flügel
Im Rudolstädter Schloß.

Es blitzt der Saal von Kerzen,
Zwölf Lichter um ihn stehn,
Nacht ist's in seinem Herzen,
Und Nacht nur kann er sehn,
Die Töne schwellen, rauschen,
Es klingt wie Lieb' und Haß,
Die Damen stehn und lauschen,
Und was er spielt, ist das :

›Zu spät zu Kampf und Beten,
Der Feinde Rosses-Huf
Wird über Nacht zertreten,
Was ein Jahrhundert schuf,
Ich seh' es fallen, enden,
Und wie alles zusammenbricht -
Ich kann den Tag nicht wenden,
Aber leben will ich ihn nicht!‹

Und als das Wort verklungen,
Rollt Donner schon der Schlacht,
Er hat sich aufgeschwungen,
Und sein Herze noch einmal lacht,
Vorauf den andern allen
Er stolz zusammenbrach,
Prinz Louis war gefallen,
Und Preußen fiel - ihm nach.`},"097":{id:"097",title:"Der 6. November 1632",audioFile:"./audio/097.mp3",author:"Theodor Fontane",text:`   Schwedische Haide, Novembertag,
Der Nebel grau am Boden lag,
Hin über das Steinfeld von Dalarn
Holpert, stolpert ein Räderkarrn.

Ein Räderkarrn, beladen mit Korn;
Lorns Atterdag zieht an der Deichsel vorn,
Niels Rudbeck schiebt. Sie zwingen’s nicht,
Das Gestrüpp wird dichter, Niels aber spricht:

     „Busch-Ginster wächst hier über den Steg,
Wir gehn in die Irr’, wir missen den Weg,
Wir haben links und rechts vertauscht, –
Hörst Du wie der Dal-Elf rauscht?“

     „Das ist nicht der Dal-Elf, der Dal-Elf ist weit,
Es rauscht nicht vor uns und nicht zur Seit’,
Es lärmt in Lüften, es klingt wie Trab,
Wie Reiter wogt es auf und ab.

     „Es ist wie Schlacht, die herwärts dringt,
Wie Kirchenlied es dazwischen klingt,
Ich hör’ in der Rosse wieherndem Trott:
Eine feste Burg ist unser Gott!“

Und kaum gesprochen, da Lärmen und Schrein,
In tiefen Geschwadern bricht es herein,
Es brausen und dröhnen Luft und Erd’,
Voraus ein Reiter auf weißem Pferd.

Signale, Schüsse, Rossegestampf,
Der Nebel wird schwarz wie Pulverdampf,
Wie wilde Jagd so fliegt es vorbei; –
Zitternd ducken sich die Zwei.

Nun ist es vorüber … da wieder mit Macht
Rückwärts wogt die Reiterschlacht,
Und wieder dröhnt und donnert die Erd’
Und wieder voraus das weiße Pferd.

Wie ein Lichtstreif durch den Nebel es blitzt,
Kein Reiter mehr im Sattel sitzt,
Das fliehende Thier es dampft und raucht,
Sein Weiß ist tief in Roth getaucht.

Der Sattel blutig, blutig die Mähn’,
Ganz Schweden hat das Roß gesehn; –
Auf dem Felde von Lützen am selben Tag
Gustav Adolf in seinem Blute lag. `},"098":{id:"098",title:"'Die Brück' am Tay",audioFile:"./audio/098.mp3",author:"Theodor Fontane",text:`"Wann treffen wir drei wieder zusamm′?"
"Um die siebente Stund′, am Brückendamm."
"Am Mittelpfeiler."
"Ich lösche die Flamm′."
"Ich mit."
"Ich komme vom Norden her."
"Und ich von Süden."
"Und ich vom Meer."
"Hei, das gibt ein Ringelreihn,
Und die Brücke muss in den Grund hinein."
"Und der Zug, der in die Brücke tritt
Um die siebente Stund′?"
"Ei der muß mit."
"Muß mit."
"Tand, Tand,
Ist das Gebilde von Menschenhand."

Auf der Norderseite, das Brückenhaus -
Alle Fenster sehen nach Süden aus,
Und die Brücknersleut′, ohne Rast und Ruh
Und in Bangen sehen nach Süden zu,
Sehen und warten, ob nicht ein Licht
Übers Wasser hin "ich komme" spricht,
"Ich komme, trotz Nacht und Sturmesflug,
Ich, der Edinburger Zug."

Und der Brückner jetzt: "Ich seh einen Schein
Am anderen Ufer. Das muß er sein.
Nun Mutter, weg mit dem bangen Traum,
Unser Johnie kommt und will seinen Baum,
Und was noch am Baume von Lichtern ist,
Zünd′ alles an wie zum heiligen Christ,
Der will heuer zweimal mit uns sein, -
Und in elf Minuten ist er herein."

Und es war der Zug. Am Süderturm
Keucht er vorbei jetzt gegen den Sturm,
Und Johnie spricht: "Die Brücke noch!
Aber was tut es, wir zwingen es doch.
Ein fester Kessel, ein doppelter Dampf,
Die bleiben Sieger in solchem Kampf,
Und wie′s auch rast und ringt und rennt,
Wir kriegen es unter: das Element."

"Und unser Stolz ist unsre Brück′;
Ich lache, denk ich an früher zurück,
An all den Jammer und all die Not
Mit dem elend alten Schifferboot;
Wie manche liebe Christfestnacht
Hab ich im Fährhaus zugebracht,
Und sah unsrer Fenster lichten Schein,
Und zählte, und konnte nicht drüben sein."

Auf der Norderseite, das Brückenhaus -
Alle Fenster sehen nach Süden aus,
Und die Brücknersleut′ ohne Rast und Ruh
Und in Bangen sehen nach Süden zu;
Denn wütender wurde der Winde Spiel,
Und jetzt, als ob Feuer vom Himmel fiel′,
Erglüht es in niederschießender Pracht
Überm Wasser unten … Und wieder ist Nacht.

"Wann treffen wir drei wieder zusamm′?"
"Um Mitternacht, am Bergeskamm."
"Auf dem hohen Moor, am Erlenstamm."
"Ich komme."
"Ich mit."
"Ich nenn euch die Zahl."
"Und ich die Namen."
"Und ich die Qual."
"Hei!
Wie Splitter brach das Gebälk entzwei."
"Tand, Tand,
Ist das Gebilde von Menschenhand."`},"099":{id:"099",title:"Gorm Grymme",audioFile:"./audio/099.mp3",author:"Theodor Fontane",text:`König Gorm herrscht über Dänemark,
    Er herrscht die dreißig Jahr.
    Sein Sinn ist fest, seine Hand ist stark,
    Weiß worden ist nur sein Haar.
    Weiß worden sind nur seine buschigen Brau’n,
    Die machten manchen stumm.
    In Grimme liebt er dreinzuschaun, -
    Gorm Grymme heißt er drum.

    Und die Jarls kamen zum Feste des Jul,
    Gorm Grymme sitzt im Saal,
    Und neben ihm sitzt, auf beinernem Stuhl,
    Thyra Danebod, sein Gemahl.
    Sie reichen einander still die Hand
    Und blicken sich an zugleich.
    Ein Lächeln in beiderAugen stand –
    Gorm Grymme, was macht dich so weich?

    Den Saal hinunter, in offner Hall’,
    Da fliegt es wie Locken im Wind.
    Jung-Harald spielt mit dem Federball,
    Jung-Harald, ihr einziges Kind.
    Sein Wuchs ist schlank, blond ist sein Haar,
    Blau-golden ist sein Kleid.
    Jung-Harald ist heut fünfzehn Jahr,
    Und sie lieben ihn allbeid.

    Sie lieben ihn beid’; eine Ahnung bang
    Kommt über die Königin,
    Gorm Grymme aber den Saal entlang
    Auf Jung-Harald deutet er hin,
    Und er hebt sich zum Sprechen – sein Mantel ist rot,
    Gleitet nieder auf den Grund:
    „Wer je mir spräche ‚Er ist tot’,
    Der müsste sterben zur Stund’!“

    Und Monde gehn. Es schmolz der Schnee.
    Der Sommer kam zu Gast.
    Dreihundert Schiffe fahren in See.
    Jung-Harald steht am Mast.
    Er steht am Mast, er singt ein Lied,
    Bis sich’s im Winde brach.
    Das letzte Segel, es schwand, es schied –
    Gorm Grymme schaut ihm nach.

    Und wieder Monde. Grau-Herbstestag
    Liegt über Sund und Meer.
    Drei Schiffe mit mattem Ruderschlag
    Rudern heimwärts drüber her.
    Schwarz hängen die Wimpel; auf Brömsebro-Moor
    Jung-Harald liegt im Blut –
    Wer bringt die Kunde vor Königs Ohr?
    Keiner hat den Mut.

    Thyra Danebod schreitet hinab an den Strand.
    Sie hatte die Segel gesehn.
    Sie spricht: „Und bangt sich euer Mund,
    Ich meld ihm, was geschehn.“
    Ab legt sie ihr rotes Korallengeschmeid
    Und die Gemme von Opal.

    Sie kleidet sich in ein schwarzes Kleid
    Und tritt in Hall’ und Saal.

    In Hall’ und Saal. An Pfeiler und Wand
    Goldteppiche ziehen sich hin.
    Schwarze Teppiche nun mit eigener Hand
    Hängt drüber die Königin.
    Und sie zündet zwölf Kerzen. Ihr flackerndes Licht –
    Es gab einen trüben Schein.
    Und sie legt ein Gewebe, schwarz und dicht,
    Auf den Stuhl von Elfenbein.

    Ein tritt Gorm Grymme. Es zittert sein Gang.
    Er schreitet wie im Traum.
    Er starrt die schwarze Hall’ entlang.
    Die Lichter, die sieht er kaum.
    Er spricht: „Es weht wie Schwüle hier.
    Ich will an Meer und Strand.
    Reich meinen rot-goldenen Mantel mir
    Und reiche mir deine Hand.“

    Sie gab ihm um einen Mantel dicht,
    Der war nicht golden, nicht rot.
    Gorm Grymme sprach: „Was niemand spricht,
    Ich sprech es: er ist tot.“
    Er setzte sich nieder, wo er stand.
    Ein Windstoß fuhr durchs Haus.
    Die Königin hielt des Königs Hand,
    Die Lichter loschen aus.`},100:{id:"100",title:"Herr von Ribbeck auf Ribbeck im Havelland",audioFile:"./audio/100.mp3",author:"Theodor Fontane",text:`Herr von Ribbeck auf Ribbeck im Havelland,
Ein Birnbaum in seinem Garten stand,
Und kam die goldene Herbsteszeit

Und die Birnen leuchteten weit und breit,
Da stopfte, wenn's Mittag vom Turme scholl,
Der von Ribbeck sich beide Taschen voll,
Und kam in Pantinen ein Junge daher,
So rief er: »Junge, wiste 'ne Beer?«
Und kam ein Mädel, so rief er: »Lütt Dirn,
Kumm man röwer, ick hebb 'ne Birn.«

So ging es viel Jahre, bis lobesam
Der von Ribbeck auf Ribbeck zu sterben kam.

Er fühlte sein Ende. 's war Herbsteszeit,
Wieder lachten die Birnen weit und breit;
Da sagte von Ribbeck: »Ich scheide nun ab.
Legt mir eine Birne mit ins Grab.«
Und drei Tage drauf, aus dem Doppeldachhaus,
Trugen von Ribbeck sie hinaus,
Alle Bauern und Büdner mit Feiergesicht
Sangen »Jesus meine Zuversicht«,
Und die Kinder klagten, das Herze schwer:
»He is dod nu. Wer giwt uns nu 'ne Beer?«

So klagten die Kinder. Das war nicht recht -
Ach, sie kannten den alten Ribbeck schlecht;
Der neue freilich, der knausert und spart,
Hält Park und Birnbaum strenge verwahrt.
Aber der alte, vorahnend schon
Und voll Mißtraun gegen den eigenen Sohn,
Der wußte genau, was damals er tat,
Als um eine Birn' ins Grab er bat,
Und im dritten Jahr aus dem stillen Haus
Ein Birnbaumsprößling sproßt heraus.

Und die Jahre gingen wohl auf und ab,
Längst wölbt sich ein Birnbaum über dem Grab,
Und in der goldenen Herbsteszeit
Leuchtet's wieder weit und breit.
Und kommt ein Jung' übern Kirchhof her,
So flüstert's im Baume: »Wiste 'ne Beer?«
Und kommt ein Mädel, so flüstert's: »Lütt Dirn,
Kumm man röwer, ick gew' di 'ne Birn.«

So spendet Segen noch immer die Hand
Des von Ribbeck auf Ribbeck im Havelland.`},101:{id:"101",title:"Auf der Treppe von Sanssouci",audioFile:"./audio/101.mp3",author:"Theodor Fontane",text:`Von Marly kommend und der Friedenskirche,
Hin am Bassin (es plätscherte kein Springstrahl)
Stieg ich treppan; die Sterne blinkten, blitzten,
Und auf den Stufenaufbau der Terrasse
Warf Baum und Strauchwerk seine dünnen Schatten,
Durchsichtige, wie Schatten nur von Schatten.
Rings tiefe Stille, selbst der Wache Schritt
Blieb lautlos auf dem überreiften Boden,
Und nur von rechts her, von der Stadt herüber,
Erscholl das Glockenspiel.
Nun schwieg auch das,
Und als mein Auge, das auf kurze Weile
Dem Ohr gefolgt war, wieder vorwärts blickte,
Trat aus dem Buschwerk, und ich schrak zusammen
Er selbst, im Frackrock, hinter ihm das Windspiel
(Biche, wenn nicht alles täuschte), dazu Krückstock
Und Hut und Stern. Bei Gott, es war der König.
Was tun? Ich dacht´ an Umkehr; doch sein Auge,
Das Fritzen-Auge bannte mich zur Stelle;
So hielt ich denn und machte Front.
»Wie heißt Er?«
Ich stotterte was hin.
»Und sein Metier?«
»Schriftsteller, Majestät. Ich mache Verse!«

Der König lächelte: »Nun hör´ Er, Herr,
Ich will´s Ihm glauben; keiner ist der Tor,
Sich dieses Zeichens ohne Not zu rühmen,
Dergleichen sagt nur, wer es sagen muß,
Der Spott ist sicher, zweifelhaft das andre.
Poète allemand! Ja, ja, Berlin wird Weltstadt.
Nun aber sag´ Er mir, ich les´ da täglich
(Verzeih´ Er, aber Federvieh und Borste
Wohnt auf demselben Hof und hält Gemeinschaft),
Ich les´ da täglich jetzt in den Gazetten
Von Menzelfest und siebzigstem Geburtstag,
Ausstellung von Tableaux und von Peintüren
Und ähnlichem. Ein großer Lärm. Eh bien, Herr,
Was soll das? Kennt Er Menzel? Wer ist Menzel?«

Und dabei flog ein Zug um seinen Mund,
Als wiss´ er selber Antwort auf die Frage.

»Zu Gnaden Majestät«, begann ich zögernd,
»Die Frag´ ist schwer, das ist ein Doktorthema;
Mein Wissen reicht bis Pierer nur und Brockhaus.
Ja, wer ist Menzel? Menzel ist sehr vieles,

Um nicht zu sagen alles; mind´stens ist er
Die ganze Arche Noäh, Tier und Menschen:
Putthühner, Gänse, Papagei´n und Enten,
Schwerin und Seydlitz, Leopold von Dessau,
Der alte Zieten, Ammen, Schlosserjungen,
Kathol´sche Kirchen, italien´sche Plätze,
Schuhschnallen, Bronzen, Walz- und Eisenwerke,
Stadträte mit und ohne goldne Kette,
Minister, mißgestimmt in Kaschmirhosen,
Straußfedern, Hofhall, Hummermayonnaise,
Der Kaiser, Moltke, Gräfin Hacke, Bismarck -«
»Outrier´ Er nicht.«
»Ich spreche nur die Wahrheit.
Bescheidne Wahrheit nur. Er durchstudierte
Die groß´ und kleine Welt; was kreucht und fleucht,
Er gibt es uns im Spiegelbilde wieder.
Am liebsten aber (und mir schwoll der Kamm,
Ich war im Gang, ?jetzt oder niemals? dacht´ ich),
Am liebsten aber gibt die Welt er wieder,
Die Fritzen-Welt, auf der wir just hier stehn:
Im Rundsaal, vom Plafond her, strahlt der Lustre,
Siebartig golden blinkt der Stühle Flechtwerk,
Biche (?komm, mein Bichechen?) streift die Tischtuchecke
Champagner perlt, und auf der Meißner Schale
Liegt, schon zerpflückt, die Pontac-Apfelsine...«

»Nun lass´ Er nur. Ich weiß schon.«
Und er lüpfte
Den Hut und ging. Doch sieh, nur wenig Schritte,
So hielt er wieder, wandte sich und winkte
Mich an die Seit´ ihm. »Hör Er, Herr; ein Wort noch:
Er hat bestanden; so lala. Denn wiss´ Er,
Ich kenne Menzel wie mich selbst und wär´ ihm
Erkenntlich gern. Emaille-Uhr? Tabatière?
Vielleicht ein Solitaire? Was macht ihm Spaß wohl?«

»Ach, Majestät, was soll ihm Freude machen?
Er hat vollauf von Gütern dieser Erde,
Hat Ansehn, Ehre, Titel, Ordenskreuze
(Pour le merite, natürlich Friedensklasse),
Hat Freunde, Mut und Glück, und was die Hauptsach´,
Hat seine Kunst...«
»Und fehlt ihm nichts?«
»Rein gar nichts.«
»Na, das ist brav. Comme philosophe! Das lob´ ich
Und will nicht stören. Aber eines sagt ihm:
Ich lüd´ ihn ein (er mag die Zeit bestimmen,
Ein Jahrer zehne will ich gern noch warten),
Ich lüd´ ihn ein nach Sanssouci; sie nennen´s
Elysium droben, doch es ist dasselbe.
Dort find´t er alte Freunde: Gen´ral Stille,
Graf Rotenburg, die ganze Tafelrunde,

Nur Herr von Voltaire fehlt seit Anno 70;
Franzose, rapplig. Dieser Platz ist frei.
Den reservier´ ich ihm. Bestell´ Er´s. Hört Er?
Ich bin Sein gnäd´ger König. Serviteu`},102:{id:"102",title:"Herbstmorgen",audioFile:"./audio/102.mp3",author:"Theodor Fontane",text:`Die Wolken ziehn, wie Trauergäste,
Den Mond still - abwärts zu geleiten;
Der Wind durchfegt die starren Äste,
Und sucht ein Blatt aus beßren Zeiten.

Schon flattern in der Luft die Raben,
Des Winters unheilvolle Boten;
Bald wird er tief in Schnee begraben
Die Erde, seinen großen Toten.

Ein Bach läuft hastig mir zur Seite,
Es bangt ihn vor des Eises Ketten;
Drum stürzt er fort und sucht das Weite,
Als könnt' ihm Flucht das Leben retten.

Da mocht' ich länger nicht inmitten
So todesnaher Öde weilen;
Es trieb mich fort, mit hast'gen Schritten
Dem flücht'gen Bache nachzueilen.`},103:{id:"103",title:"Der Kranich",audioFile:"./audio/103.mp3",author:"Theodor Fontane",text:`Rau ging der Wind, der Regen troff,
Schon war ich nass und kalt;
Ich macht' auf einem Bauernhof
Im Schutz des Zaunes halt.

Mit abgestutzten Flügeln schritt
Ein Kranich drin umher.
Nur seine Sehnsucht trug ihn mit
Den Brüdern über's Meer;

Mit seinen Brüdern, deren Zug
Jetzt hoch in Lüften stockt,
Und deren Schrei auch ihn zum Flug
Gen Süden ruft und lockt.

Und sieh, er hat sich aufgerafft,
Es gilt ja Lenz und Glück;
Umsonst, der Schwinge fehlt die Kraft,
Und ach, er sinkt zurück.

Nur Hahn und Huhn zum Schabernack
Umkrähn ihn jetzt voll Freud. -
Es jubelt stets das Hühnerpack
Bei eines Kranichs Leid. `},104:{id:"104",title:"Im Garten",audioFile:"./audio/104.mp3",author:"Theodor Fontane",text:`
Die hohen Himbeerwände
Trennten dich und mich,
Doch im Laubwerk unsre Hände
Fanden von selber sich.

Die Hecke konnt' es nicht wehren,
Wie hoch sie immer stund.
Ich reichte dir die Beeren
Und du reichtest mir deinen Mund.

Ach, schrittest du durch den Garten
Noch einmal im raschen Gang,
Wie gerne wollt' ich warten,
Warten stundenlang.`},105:{id:"105",title:"O trübe diese Tage nicht",audioFile:"./audio/105.mp3",author:"Theodor Fontane",text:`O trübe diese Tage nicht,
Sie sind der letzte Sonnenschein,
Wie lange, und es lischt das Licht
Und unser Winter bricht herein.

Dies ist die Zeit, wo jeder Tag
Viel Tage gilt in seinem Wert,
Weil man's nicht mehr erhoffen mag,
Dass so die Stunde wiederkehrt.

Die Flut des Lebens ist dahin,
Es ebbt in seinem Stolz und Reiz,
Und sieh, es schleicht in unsern Sinn
Ein banger, nie gekannter Geiz.

Ein süßer Geiz, der Stunden zählt
Und jede prüft auf ihren Glanz,
O sorge, dass uns keine fehlt
Und gönn' uns jede Stunde ganz.`},106:{id:"106",title:"Man hat es oder hat es nicht",audioFile:"./audio/106.mp3",author:"Theodor Fontane",text:`Nur als Furioso nichts erstreben
Und fechten, bis der Säbel bricht,
Es muß sich dir von selber geben -
Man hat es oder hat es nicht.

Der Weg zu jedem höchsten Glücke,
Wär' das Gedräng auch noch so dicht,
Ist keine Beresina-Brücke -
Man hat es oder hat es nicht.

Glaub nicht, du könnt'st es doch erklimmen
Und Woll'n sei höchste Kraft und Pflicht,
Was ist , ist durch Vorherbestimmen -
Man hat es oder hat es nicht.`},107:{id:"107",title:"Überlass es der Zeit",audioFile:"./audio/107.mp3",author:"Theodor Fontane",text:` Erscheint dir etwas unerhört,
Bist du tiefsten Herzens empört,
Bäume nicht auf, versuch's nicht mit Streit,
Berühr es nicht, überlass es der Zeit.

Am ersten Tage wirst du feige dich schelten,
Am zweiten lässt du dein Schweigen schon gelten,

Am dritten hast du's überwunden,
Alles ist wichtig nur auf Stunden,

Ärger ist Zehrer und Lebensvergifter,
Zeit ist Balsam und Friedensstifter.
`},108:{id:"108",title:"'Würd' es mir fehlen, würd' ich's vermissen?",audioFile:"./audio/108.mp3",author:"Theodor Fontane",text:`Heut’ früh, nach gut durchschlafener Nacht,
Bin ich wieder aufgewacht.
Ich setzte mich an den Frühstückstisch,
Der Kaffee war warm, die Semmel war frisch,

Ich habe die Morgenzeitung gelesen
(Es sind wieder Avancements gewesen).
Ich trat ans Fenster, ich sah hinunter,
Es trabte wieder, es klingelte munter,
Eine Schürze (beim Schlächter) hing über dem Stuhle,

Kleine Mädchen gingen nach der Schule —
Alles war freundlich, alles war nett,
Aber wenn ich weiter geschlafen hätt’
Und tät’ von alledem nichts wissen,
Würd’ es mir fehlen, würd’ ich’s vermissen?
`},109:{id:"109",title:"Ja, das möcht ich noch erleben",audioFile:"./audio/109.mp3",author:"Theodor Fontane",text:`Eigentlich ist mir alles gleich,
Der eine wird arm, der andre wird reich,
Aber mit Bismarck – was wird das noch geben?
Das mit Bismarck, das möcht‘ ich noch erleben.

Eigentlich ist alles soso,
Heute traurig, morgen froh,
Frühling, Sommer, Herbst und Winter,
Ach, es ist nicht viel dahinter.

Aber mein Enkel, so viel ist richtig,
Wird mit nächstem vorschulpflichtig,
Und in etwa vierzehn Tagen
Wird er eine Mappe tragen,
Löschblätter will ich ins Heft ihm kleben –
Ja, das möcht‘ ich noch erleben.

Eigentlich ist alles nichts,
Heute hält’s, und morgen bricht’s,
Hin stirbt alles, ganz geringe
Wird der Wert der ird’schen Dinge;

Doch wie tief herabgestimmt
Auch das Wünschen Abschied nimmt,
Immer klingt es noch daneben:
Ja, das möcht‘ ich noch erleben.`},110:{id:"110",title:"So und nicht anders",audioFile:"./audio/110.mp3",author:"Theodor Fontane",text:`Die Menschen kümmerten mich nicht viel,
Eigen war mein Weg und Ziel.

Ich mied den Markt, ich mied den Schwarm,
Andre sind reich, ich bin arm.

Andre regierten (regieren noch),
Ich stand unten und ging durchs Joch.

Entsagen und lächeln bei Demütigungen,
Das ist die Kunst, die mir gelungen.

Und doch, wär's in die Wahl mir gegeben,
Ich führte noch einmal dasselbe Leben.

Und sollt' ich noch einmal die Tage beginnen,
Ich würde denselben Faden spinnen.`},111:{id:"111",title:"Leben",audioFile:"./audio/111.mp3",author:"Theodor Fontane",text:`Leben, wohl dem, dem es spendet
Freude, Kinder, täglich Brot
Doch das Beste, was es sendet,
Ist das Wissen, dass es endet,
Ist der Ausgang, ist der Tod.`},112:{id:"112",title:"Das Stundenbuch. Ich lebe grad, da das Jahrhundert geht ...",audioFile:"./audio/112.mp3",author:"Rainer Maria Rilke",text:`Ich lebe grad, da das Jahrhundert geht.
Man fühlt den Wind von einem großen Blatt,
das Gott und du und ich beschrieben hat
und das sich hoch in fremden Händen dreht.

Man fühlt den Glanz von einer neuen Seite,
auf der noch Alles werden kann.

Die stillen Kräfte prüfen ihre Breite
und sehn einander dunkel an.
`},113:{id:"113",title:"Das Stundenbuch. Ich lese es heraus aus deinem Wort ...",audioFile:"./audio/113.mp3",author:"Rainer Maria Rilke",text:`Ich lese es heraus aus deinem Wort,
aus der Geschichte der Gebärden,
mit welchen deine Hände um das Werden

sich ründeten, begrenzend, warm und weise.
Du sagtest leben laut und sterben leise
und wiederholtest immer wieder: Sein.
Doch vor dem ersten Tode kam der Mord.
Da ging ein Riss durch deine reifen Kreise
und ging ein Schrein
und riss die Stimmen fort,
die eben erst sich sammelten
um dich zu sagen,
um dich zu tragen
alles Abgrunds Brücke -

Und was sie seither stammelten,
sind Stücke
deines alten Namens. `},114:{id:"114",title:"Kindheit",audioFile:"./audio/114.mp3",author:"Rainer Maria Rilke",text:`Rainer Maria Rilke: Kindheit
Da rinnt der Schule lange Angst und Zeit
mit Warten hin, mit lauter dumpfen Dingen.
O Einsamkeit, o schweres Zeitverbringen...
Und dann hinaus: die Straßen sprühn und klingen
und auf den Plätzen die Fontänen springen
und in den Gärten wird die Welt so weit –.
Und durch das alles gehn im kleinen Kleid,
ganz anders als die andern gehn und gingen –:
O wunderliche Zeit, o Zeitverbringen,
o Einsamkeit.

Und in das alles fern hinauszuschauen:
Männer und Frauen; Männer, Männer, Frauen
und Kinder, welche anders sind und bunt;
und da ein Haus und dann und wann ein Hund
und Schrecken lautlos wechselnd mit Vertrauen –:
O Trauer ohne Sinn, o Traum, o Grauen,
o Tiefe ohne Grund.

Und so zu spielen: Ball und Ring und Reifen
in einem Garten, welcher sanft verblasst,
und manchmal die Erwachsenen zu streifen,
blind und verwildert in des Haschens Hast,
aber am Abend still, mit kleinen steifen
Schritten nachhaus zu gehn, fest angefasst –:
O immer mehr entweichendes Begreifen,
o Angst, o Last.

Und stundenlang am großen grauen Teiche
mit einem kleinen Segelschiff zu knien;
es zu vergessen, weil noch andre, gleiche
und schönere Segel durch die Ringe ziehn,
und denken müssen an das kleine bleiche
Gesicht, das sinkend aus dem Teiche schien –:
O Kindheit, o entgleitende Vergleiche.
Wohin? Wohin?`},115:{id:"115",title:"Der Abend",audioFile:"./audio/115.mp3",author:"Rainer Maria Rilke",text:`Der Abend wechselt langsam die Gewänder,
die ihm ein Rand von alten Bäumen hält;
du schaust: und von dir scheiden sich die Länder,
ein himmelfahrendes und eins, das fällt;

und lassen dich, zu keinem ganz gehörend,
nicht ganz so dunkel wie das Haus, das schweigt,
nicht ganz so sicher Ewiges beschwörend
wie das, was Stern wird jede Nacht und steigt -

und lassen dir (unsäglich zu entwirrn)
dein Leben bang und riesenhaft und reifend,
so daß es, bald begrenzt und bald begreifend,
abwechselnd Stein in dir wird und Gestirn. `},116:{id:"116",title:"Letzter Abend",audioFile:"./audio/116.mp3",author:"Rainer Maria Rilke",text:`Und Nacht und fernes Fahren; denn der Train
des ganzen Heeres zog am Park vorüber.
Er aber hob den Blick vom Clavecin
und spielte noch und sah zu ihr hinüber

und beinah wie man in einen Spiegel schaut:
so sehr erfüllt von seinen jungen Zügen
und wissend, wie sie seine Trauer trügen,
schön und verführender bei jedem Laut.

Doch plötzlich wars, als ob sich das verwische:
sie stand wie mühsam in der Fensternische
und hielt des Herzens drängendes Geklopf.

Sein Spiel gab nach. Von draußen wehte Frische.
Und seltsam fremd stand auf dem Spiegeltische
der schwarze Tschako mit dem Totenkopf.
`},117:{id:"117",title:"Abschied",audioFile:"./audio/117.mp3",author:"Rainer Maria Rilke",text:`Wie hab ich das gefühlt was Abschied heißt.
Wie weiß ichs noch: ein dunkles unverwundnes
grausames Etwas, das ein Schönverbundnes
noch einmal zeigt und hinhält und zerreißt.

Wie war ich ohne Wehr, dem zuzuschauen,
das, da es mich, mich rufend, gehen ließ,
zurückblieb, so als wärens alle Frauen
und dennoch klein und weiß und nichts als dies:

Ein Winken, schon nicht mehr auf mich bezogen,
ein leise Weiterwinkendes - , schon kaum
erklärbar mehr: vielleicht ein Pflaumenbaum,
von dem ein Kuckuck hastig abgeflogen. `},118:{id:"118",title:"Todes-Erfahrung",audioFile:"./audio/118.mp3",author:"Rainer Maria Rilke",text:`Wir wissen nichts von diesem Hingehn, das
nicht mit uns teilt. Wir haben keinen Grund,
Bewunderung und Liebe oder Hass
dem Tod zu zeigen, den ein Maskenmund

tragischer Klage wunderlich entstellt.
Noch ist die Welt voll Rollen, die wir spielen.
Solang wir sorgen, ob wir auch gefielen,
spielt auch der Tod, obwohl er nicht gefällt.

Doch als du gingst, da brach in diese Bühne
ein Streifen Wirklichkeit durch jenen Spalt
durch den du hingingst: Grün wirklicher Grüne,
wirklicher Sonnenschein, wirklicher Wald.

Wir spielen weiter. Bang und schwer Erlerntes
hersagend und Gebärden dann und wann
aufhebend; aber dein von uns entferntes,
aus unserm Stück entrücktes Dasein kann

uns manchmal überkommen, wie ein Wissen
von jener Wirklichkeit sich niedersenkend,
so dass wir eine Weile hingerissen
das Leben spielen, nicht an Beifall denkend.`},119:{id:"119",title:"Archaischer Torso Apollos",audioFile:"./audio/119.mp3",author:"Rainer Maria Rilke",text:`Wir kannten nicht sein unerhörtes Haupt,
darin die Augenäpfel reiften. Aber
sein Torso glüht noch wie ein Kandelaber,
in dem sein Schauen, nur zurückgeschraubt,

sich hält und glänzt. Sonst könnte nicht der Bug
der Brust dich blenden, und im leisen Drehen
der Lenden könnte nicht ein Lächeln gehen
zu jener Mitte, die die Zeugung trug.

Sonst stünde dieser Stein entstellt und kurz
unter der Schultern durchsichtigem Sturz
und flimmerte nicht so wie Raubtierfelle;

und bräche nicht aus allen seinen Rändern
aus wie ein Stern: denn da ist keine Stelle,
die dich nicht sieht. Du mußt dein Leben ändern.`},120:{id:"120",title:"Der Ölbaum-Garten",audioFile:"./audio/120.mp3",author:"Rainer Maria Rilke",text:`Er ging hinauf unter dem grauen Laub
ganz grau und aufgelöst im Ölgelände
und legte seine Stirne voller Staub
tief in das Staubigsein der heißen Hände.

Nach allem dies. Und dieses war der Schluß.
Jetzt soll ich gehen, während ich erblinde,
und warum willst Du, daß ich sagen muß
Du seist, wenn ich Dich selber nicht mehr finde.

Ich finde Dich nicht mehr. Nicht in mir, nein.
Nicht in den andern. Nicht in diesem Stein.
Ich finde Dich nicht mehr. Ich bin allein.

Ich bin allein mit aller Menschen Gram,
den ich durch Dich zu lindern unternahm,
der Du nicht bist. O namenlose Scham...

Später erzählte man: ein Engel kam -.

Warum ein Engel? Ach es kam `},121:{id:"121",title:"Der Tod der Geliebten",audioFile:"./audio/121.mp3",author:"Rainer Maria Rilke",text:`Er wußte nur vom Tod was alle wissen:
daß er uns nimmt und in das Stumme stößt.
Als aber sie, nicht von ihm fortgerissen,
nein, leis aus seinen Augen ausgelöst,

hinüberglitt zu unbekannten Schatten,
und als er fühlte, daß sie drüben nun
wie einen Mond ihr Mädchenlächeln hatten
und ihre Weise wohlzutun:

da wurden ihm die Toten so bekannt,
als wäre er durch sie mit einem jeden
ganz nah verwandt; er ließ die andern reden

und glaubte nicht und nannte jenes Land
das gutgelegene, das immersüße -.
Und tastete es ab für ihre Füße.
`},122:{id:"122",title:"Die Flamingos",audioFile:"./audio/122.mp3",author:"Rainer Maria Rilke",text:`In Spiegelbildern wie von Fragonard
ist doch von ihrem Weiß und ihrer Röte
nicht mehr gegeben, als dir einer böte,
wenn er von seiner Freundin sagt: sie war

noch sanft von Schlaf. Denn steigen sie ins Grüne
und stehn, auf rosa Stielen leicht gedreht,
beisammen, blühend, wie in einem Beet,
verführen sie verführender als Phryne

sich selber; bis sie ihres Auges Bleiche
hinhalsend bergen in der eignen Weiche,
in welcher Schwarz und Fruchtrot sich versteckt.

Auf einmal kreischt ein Neid durch die Volière;
sie aber haben sich erstaunt gestreckt
und schreiten einzeln ins Imaginäre.

`},123:{id:"123",title:"Der Panther",audioFile:"./audio/123.mp3",author:"Rainer Maria Rilke",text:`Sein Blick ist vom Vorübergehn der Stäbe
so müd geworden, daß er nichts mehr hält.
Ihm ist, als ob es tausend Stäbe gäbe
und hinter tausend Stäben keine Welt.

Der weiche Gang geschmeidig starker Schritte,
der sich im allerkleinsten Kreise dreht,
ist wie ein Tanz von Kraft um eine Mitte,
in der betäubt ein großer Wille steht.

Nur manchmal schiebt der Vorhang der Pupille
sich lautlos auf –. Dann geht ein Bild hinein,
geht durch der Glieder angespannte Stille –
und hört im Herzen auf zu sein.`},124:{id:"124",title:"Orpheus. Eurydike. Hermes",audioFile:"./audio/124.mp3",author:"Rainer Maria Rilke",text:`Das war der Seelen wunderliches Bergwerk.
Wie stille Silbererze gingen sie
als Adern durch sein Dunkel. Zwischen Wurzeln
entsprang das Blut, das fortgeht zu den Menschen,
und schwer wie Porphyr sah es aus im Dunkel.
Sonst war nichts Rotes.

Felsen waren da
und wesenlose Wälder. Brücken über Leeres
und jener große graue blinde Teich,
der über seinem fernen Grunde hing
wie Regenhimmel über einer Landschaft.
Und zwischen Wiesen, sanft und voller Langmut,
erschien des einen Weges blasser Streifen,
wie eine lange Bleiche hingelegt.

Und dieses einen Weges kamen sie.

Voran der schlanke Mann im blauen Mantel,
der stumm und ungeduldig vor sich aussah.
Ohne zu kauen fraß sein Schritt den Weg
in großen Bissen; seine Hände hingen
schwer und verschlossen aus dem Fall der Falten
und wußten nicht mehr von der leichten Leier,
die in die Linke eingewachsen war
wie Rosenranken in den Ast des Ölbaums.
Und seine Sinne waren wie entzweit:
indes der Blick ihm wie ein Hund vorauslief,
umkehrte, kam und immer wieder weit
und wartend an der nächsten Wendung stand, -
blieb sein Gehör wie ein Geruch zurück.
Manchmal erschien es ihm als reichte es
bis an das Gehen jener beiden andern,
die folgen sollten diesen ganzen Aufstieg.
Dann wieder wars nur seines Steigens Nachklang
und seines Mantels Wind was hinter ihm war.
Er aber sagte sich, sie kämen doch;
sagte es laut und hörte sich verhallen.
Sie kämen doch, nur wärens zwei
die furchtbar leise gingen. Dürfte er
sich einmal wenden (wäre das Zurückschaun
nicht die Zersetzung dieses ganzen Werkes,
das erst vollbracht wird), müßte er sie sehen,
die beiden Leisen, die ihm schweigend nachgehn:

Den Gott des Ganges und der weiten Botschaft,
die Reisehaube über hellen Augen,
den schlanken Stab hertragend vor dem Leibe
und flügelschlagend an den Fußgelenken;
und seiner linken Hand gegeben: sie.

Die So-geliebte, daß aus einer Leier
mehr Klage kam als je aus Klagefrauen;
daß eine Welt aus Klage ward, in der
alles noch einmal da war: Wald und Tal
und Weg und Ortschaft, Feld und Fluß und Tier;
und daß um diese Klage-Welt, ganz so
wie um die andre Erde, eine Sonne
und ein gestirnter stiller Himmel ging,
ein Klage-Himmel mit entstellten Sternen - :
Diese So-geliebte.

Sie aber ging an jenes Gottes Hand,
den Schrittbeschränkt von langen Leichenbändern,
unsicher, sanft und ohne Ungeduld.
Sie war in sich, wie Eine hoher Hoffnung,
und dachte nicht des Mannes, der voranging,
und nicht des Weges, der ins Leben aufstieg.
Sie war in sich. Und ihr Gestorbensein
erfüllte sie wie Fülle.
Wie eine Frucht von Süßigkeit und Dunkel,
so war sie voll von ihrem großen Tode,
der also neu war, daß sie nichts begriff.

Sie war in einem neuen Mädchentum
und unberührbar; ihr Geschlecht war zu
wie eine junge Blume gegen Abend,
und ihre Hände waren der Vermählung
so sehr entwöhnt, daß selbst des leichten Gottes
unendlich leise, leitende Berührung
sie kränkte wie zu sehr Vertraulichkeit.

Sie war schon nicht mehr diese blonde Frau,
die in des Dichters Liedern manchmal anklang,
nicht mehr des breiten Bettes Duft und Eiland
und jenes Mannes Eigentum nicht mehr.

Sie war schon aufgelöst wie langes Haar
und hingegeben wie gefallner Regen
und ausgeteilt wie hundertfacher Vorrat.

Sie war schon Wurzel.

Und als plötzlich jäh
der Gott sie anhielt und mit Schmerz im Ausruf
die Worte sprach: Er hat sich umgewendet -,
begriff sie nichts und sagte leise: Wer?

Fern aber, dunkel vor dem klaren Ausgang,
stand irgend jemand, dessen Angesicht
nicht zu erkennen war. Er stand und sah,
wie auf dem Streifen eines Wiesenpfades
mit trauervollem Blick der Gott der Botschaft
sich schweigend wandte, der Gestalt zu folgen,
die schon zurückging dieses selben Weges,
den Schritt beschränkt von langen Leichenbändern,
unsicher, sanft und ohne Ungeduld. `},125:{id:"125",title:"Die Sonette an Orpheus: I. Sonett",audioFile:"./audio/125.mp3",author:"Rainer Maria Rilke",text:`Da stieg ein Baum. O reine ÜbersteigÜng!
O Orpheus singt! O hoher Baum im Ohr!
Und alles schwieg. Doch selbst in der Verschweigung
ging neuer Anfang, Wink und Wandlung vor.

Tiere aus Stille drangen aus dem klaren
gelösten Wald von Lager und Genist;
und da ergab sich, dass sie nicht aus List
und nicht aus Angst in sich so leise waren,

sondern aus Hören. BrÜllen, Schrei, Geröhr
schien klein in ihren Herzen. Und wo eben
kaum eine HÜtte war, dies zu empfangen,

ein Unterschlupf aus dunkelstem Verlangen
mit einem Zugang, dessen Pfosten beben,—
da schufst du ihnen Tempel im Gehör.`},126:{id:"126",title:"Die Sonette an Orpheus: IX. Sonett",audioFile:"./audio/126.mp3",author:"Rainer Maria Rilke",text:`Nur wer die Leier schon hob
auch unter Schatten,
darf das unendliche Lob
ahnend erstatten.

Nur wer mit Toten vom Mohn
ass, von dem ihren,
wird nicht den leisesten Ton
wieder verlieren.

Mag auch die Spieglung im Teich
oft uns verschwimmen:
Wisse das Bild.

Erst in dem Doppelbereich
werden die Stimmen
ewig und mild.`},127:{id:"127",title:"Die Sonette an Orpheus: XIX. Sonett",audioFile:"./audio/127.mp3",author:"Rainer Maria Rilke",text:`Wandelt sich rasch auch die Welt
wie Wolkengestalten,
alles Vollendete fällt
heim zum Uralten.

Über dem Wandel und Gang,
weiter und freier,
währt noch dein Vor-Gesang,
Gott mit der Leier.

Nicht sind die Leiden erkannt,
nicht ist die Liebe gelernt,
und was im Tod uns entfernt,

ist nicht entschleiert.
Einzig das Lied Überm land
heiligt und feiert.`},128:{id:"128",title:"Musik",audioFile:"./audio/128.mp3",author:"Rainer Maria Rilke",text:`Musik: Atem der Statuen.       Vielleicht:
Stille der Bilder.       Du Sprache wo Sprachen
enden.       Du Zeit,
die senkrecht steht auf der Richtung vergehender Herzen.

Gefühle zu wem? O du der Gefühle
Wandlung in was? -: in hörbare Landschaft.
Du Fremde: Musik. Du uns entwachsener
Herzraum. Innigstes unser,
das, uns übersteigend, hinausdrängt, -
heiliger Abschied:
da uns das Innre umsteht
als geübteste Ferne, als andre
Seite der Luft:
rein,
riesig,
nicht mehr bewohnbar.
`},129:{id:"129",title:"Duineser Elegien: Die erste Elegie",audioFile:"./audio/129.mp3",author:"Rainer Maria Rilke",text:`Wer, wenn ich schriee, hörte mich denn aus der Engel
Ordnungen? und gesetzt selbst, es nähme
einer mich plötzlich ans Herz: ich verginge von seinem
stärkeren Dasein. Denn das Schöne ist nichts
als des Schrecklichen Anfang, den wir noch grade ertragen,
und wir bewundern es so, weil es gelassen verschmäht,
uns zu zerstören. Ein jeder Engel ist schrecklich.
Und so verhalt ich mich denn und verschlucke den Lockruf
dunkelen Schluchzens. Ach, wen vermögen
wir denn zu brauchen? Engel nicht, Menschen nicht,
und die findigen Tiere merken es schon,
daß wir nicht sehr verläßlich zu Haus sind
in der gedeuteten Welt. Es bleibt uns vielleicht
irgend ein Baum an dem Abhang, daß wir ihn täglich
wiedersähen; es bleibt uns die Straße von gestern
und das verzogene Treusein einer Gewohnheit,
der es bei uns gefiel, und so blieb sie und ging nicht.
O und die Nacht, die Nacht, wenn der Wind voller Weltraum
uns am Angesicht zehrt -, wem bliebe sie nicht, die ersehnte,
sanft enttäuschende, welche dem einzelnen Herzen
mühsam bevorsteht. Ist sie den Liebenden leichter?
Ach, sie verdecken sich nur mit einander ihr Los.
Weißt du's noch nicht? Wirf aus den Armen die Leere
zu den Räumen hinzu, die wir atmen; vielleicht daß die Vögel
die erweiterte Luft fühlen mit innigerm Flug.


Ja, die Frühlinge brauchten dich wohl. Es muteten manche
Sterne dir zu, daß du sie spürtest. Es hob
sich eine Woge heran im Vergangenen, oder
da du vorüberkamst am geöffneten Fenster,
gab eine Geige sich hin. Das alles war Auftrag.
Aber bewältigtest du's? Warst du nicht immer
noch von Erwartung zerstreut, als kündigte alles
eine Geliebte dir an? (Wo willst du sie bergen,
da doch die großen fremden Gedanken bei dir
aus und ein gehn und öfters bleiben bei Nacht.)
Sehnt es dich aber, so singe die Liebenden; lange
noch nicht unsterblich genug ist ihr berühmtes Gefühl.
Jene, du neidest sie fast, Verlassenen, die du
so viel liebender fandst als die Gestillten. Beginn
immer von neuem die nie zu erreichende Preisung;
denk: es erhält sich der Held, selbst der Untergang war ihm
nur ein Vorwand, zu sein: seine letzte Geburt.
Aber die Liebenden nimmt die erschöpfte Natur
in sich zurück, als wären nicht zweimal die Kräfte,
dieses zu leisten. Hast du der Gaspara Stampa
denn genügend gedacht, daß irgend ein Mädchen,
dem der Geliebte entging, am gesteigerten Beispiel
dieser Liebenden fühlt: daß ich würde wie sie?
Sollen nicht endlich uns diese ältesten Schmerzen
fruchtbarer werden? Ist es nicht Zeit, daß wir liebend
uns vom Geliebten befrein und es bebend bestehn:
wie der Pfeil die Sehne besteht, um gesammelt im Absprung
mehr zu sein als er selbst. Denn Bleiben ist nirgends.


Stimmen, Stimmen. Höre, mein Herz, wie sonst nur
Heilige hörten: daß sie der riesige Ruf
aufhob vom Boden; sie aber knieten,
Unmögliche, weiter und achtetens nicht:
So waren sie hörend. Nicht, daß du Gottes ertrügest
die Stimme, bei weitem. Aber das Wehende höre,
die ununterbrochene Nachricht, die aus Stille sich bildet.
Es rauscht jetzt von jenen jungen Toten zu dir.
Wo immer du eintratst, redete nicht in Kirchen
zu Rom und Neapel ruhig ihr Schicksal dich an?
Oder es trug eine Inschrift sich erhaben dir auf,
wie neulich die Tafel in Santa Maria Formosa.
Was sie mir wollen? leise soll ich des Unrechts
Anschein abtun, der ihrer Geister
reine Bewegung manchmal ein wenig behindert.


Freilich ist es seltsam, die Erde nicht mehr zu bewohnen,
kaum erlernte Gebräuche nicht mehr zu üben,
Rosen, und andern eigens versprechenden Dingen
nicht die Bedeutung menschlicher Zukunft zu geben;
das, was man war in unendlich ängstlichen Händen,
nicht mehr zu sein, und selbst den eigenen Namen
wegzulassen wie ein zerbrochenes Spielzeug.
Seltsam, die Wünsche nicht weiter zu wünschen. Seltsam,
alles, was sich bezog, so lose im Raume
flattern zu sehen. Und das Totsein ist mühsam
und voller Nachholn, daß man allmählich ein wenig
Ewigkeit spürt. - Aber Lebendige machen
alle den Fehler, daß sie zu stark unterscheiden.
Engel (sagt man) wüßten oft nicht, ob sie unter
Lebenden gehn oder Toten. Die ewige Strömung
reißt durch beide Bereiche alle Alter
immer mit sich und übertönt sie in beiden.


Schließlich brauchen sie uns nicht mehr, die Früheentrückten,
man entwöhnt sich des Irdischen sanft, wie man den Brüsten
milde der Mutter entwächst. Aber wir, die so große
Geheimnisse brauchen, denen aus Trauer so oft
seliger Fortschritt entspringt -: könnten wir sein ohne sie?
Ist die Sage umsonst, daß einst in der Klage um Linos
wagende erste Musik dürre Erstarrung durchdrang;
daß erst im erschrockenen Raum, dem ein beinah göttlicher Jüngling
plötzlich für immer enttrat, das Leere in jene
Schwingung geriet, die uns jetzt hinreißt und tröstet und hilft. `},130:{id:"130",title:"Duineser Elegien: Die zweite Elegie",audioFile:"./audio/130.mp3",author:"Rainer Maria Rilke",text:`Jeder Engel ist schrecklich. Und dennoch, weh mir,
ansing ich euch, fast tödliche Vögel der Seele,
wissend um euch. Wohin sind die Tage Tobiae,
da der Strahlendsten einer stand an der einfachen Haustür
zur Reise ein wenig verkleidet und schon nicht mehr furchtbar;
(Jüngling dem Jüngling, wie er neugierig hinaussah).
Träte der Erzengel jetzt, der gefährliche, hinter den Sternen
eines Schrittes nur nieder und herwärts: hochauf-
schlagend erschlüg uns das eigene Herz. Wer seid ihr?

Frühe Geglückte, ihr Verwöhnten der Schöpfung,
Höhenzüge, morgenrötliche Grate
aller Erschaffung, - Pollen der blühenden Gottheit,
Gelenke des Lichts, Gänge, Treppen, Throne,
Räume aus Wesen, Schilde aus Wonne, Tumulte
stürmisch entzückten Gefühls und plötzlich, einzeln,
Spiegel: die die entströmende eigene Schönheit
wiederschöpfen zurück in das eigene Antlitz.

Denn wir, wo wir fühlen, verflüchtigen; ach wir
atmen uns aus und dahin; von Holzglut zu Holzglut
geben wir schwächern Geruch. Da sagt uns wohl einer:
ja, du gehst mir ins Blut, dieses Zimmer, der Frühling
füllt sich mit dir… Was hilfts, er kann uns nicht halten,
wir schwinden in ihm und um ihn. Und jene, die schön sind,
o wer hält sie zurück? Unaufhörlich steht Anschein
auf in ihrem Gesicht und geht fort. Wie Tau von dem Frühgras
hebt sich das Unsre von uns, wie die Hitze von einem
heißen Gericht. O Lächeln, wohin? O Aufschaun:
neue, warme, entgehende Welle des Herzens - ;
weh mir: wir sinds doch. Schmeckt denn der Weltraum,
in den wir uns lösen, nach uns? Fangen die Engel
wirklich nur Ihriges auf, ihnen Entströmtes,
oder ist manchmal, wie aus Versehen, ein wenig
unseres Wesens dabei? Sind wir in ihre
Züge soviel nur gemischt wie das Vage in die Gesichter
schwangerer Frauen? Sie merken es nicht in dem Wirbel
ihrer Rückkehr zu sich. (Wie sollten sie´s merken.)

Liebende könnten, verstünden sie´s, in der Nachtluft
wunderlich reden. Denn es scheint, daß uns alles
verheimlicht. Siehe, die Bäume sind; die Häuser,
die wir bewohnen, bestehn noch. Wir nur
ziehen allem vorbei wie ein luftiger Austausch.
Und alles ist einig, uns zu verschweigen, halb als
Schande vielleicht und halb als unsägliche Hoffnung.

Liebende, euch, ihr in einander Genügten,
frag ich nach uns. Ihr greift euch. Habt ihr Beweise?
Seht, mir geschiehts, daß meine Hände einander
inne werden oder daß mein gebrauchtes
Gesicht in ihnen sich schont. Das giebt mir ein wenig
Empfindung. Doch wer wagte darum schon zu sein?
Ihr aber, die ihr im Entzücken des andern
zunehmt, bis er euch überwältigt
anfleht: nicht mehr - ; die ihr unter den Händen
euch reichlicher werdet wie Traubenjahre;
die ihr manchmal vergeht, nur weil der andre
ganz überhand nimmt: euch frag ich nach uns. Ich weiß,
ihr berührt euch so selig, weil die Liebkosung verhält,
weil die Stelle nicht schwindet, die ihr, Zärtliche
zudeckt; weil ihr darunter das reine
Dauern verspürt. So versprecht ihr euch Ewigkeit fast
von der Umarmung. Und doch, wenn ihr der ersten
Blicke Schrecken besteht und die Sehnsucht am Fenster,
und den ersten gemeinsamen Gang, ein Mal durch den Garten:
Liebende, seid ihrs dann noch? Wenn ihr einer dem andern
euch an den Mund hebt und ansetzt - : Getränk an Getränk:
o wie entgeht dann der Trinkende seltsam der Handlung.

Erstaunte euch nicht auf attischen Stelen die Vorsicht
menschlicher Geste? war nicht Liebe und Abschied
so leicht auf die Schultern gelegt, als wär es aus anderm
Stoffe gemacht als bei uns? Gedenkt euch der Hände,
wie sie drucklos beruhen, obwohl in den Torsen die Kraft steht.
Diese Beherrschten wußten damit: so weit sind wirs,
dieses ist unser, uns so zu berühren; stärker
stemmen die Götter uns an. Doch dies ist Sache der Götter.

Fänden auch wir ein reines verhaltenes, schmales
Menschliches, einen unseren Streifen Fruchtlands
zwischen Strom und Gestein. Denn das eigene Herz übersteigt uns
noch immer wie jene. Und wir können ihm nicht mehr
nachschaun in Bilder, die es besänftigen, noch in
göttliche Körper, in denen es größer sich mäßigt.`},131:{id:"131",title:"Duineser Elegien: Die vierte Elegie",audioFile:"./audio/131.mp3",author:"Rainer Maria Rilke",text:`O Bäume Lebens, o wann winterlich?
Wir sind nicht einig. Sind nicht wie die Zug-
vögel verständigt. Überholt und spät,
so drängen wir uns plötzlich Winden auf
und fallen ein auf teilnahmslosen Teich.
Blühn und verdorrn ist uns zugleich bewußt.
Und irgendwo gehen Löwen noch und wissen,
solang sie herrlich sind, von keiner Ohnmacht.

Uns aber, wo wir Eines meinen, ganz,
ist schon des andern Aufwand fühlbar. Feindschaft
ist uns das Nächste. Treten Liebende
nicht immerfort an Ränder, eins im andern,
die sich versprachen Weite, Jagd und Heimat.
Da wird für eines Augenblickes Zeichnung
ein Grund von Gegenteil bereitet, mühsam,
daß wir sie sähen; denn man ist sehr deutlich
mit uns. Wir kennen den Kontur
des Fühlens nicht: nur, was ihn formt von außen.
Wer saß nicht bang vor seines Herzens Vorhang?
Der schlug sich auf: die Szenerie war Abschied.
Leicht zu verstehen. Der bekannte Garten,
und schwankte leise: dann erst kam der Tänzer.
Nicht der. Genug! Und wenn er auch so leicht tut,
er ist verkleidet und er wird ein Bürger
und geht durch seine Küche in die Wohnung.
Ich will nicht diese halbgefüllten Masken,
lieber die Puppe. Die ist voll. Ich will
den Balg aushalten und den Draht und ihr
Gesicht aus Aussehn. Hier. Ich bin davor.
Wenn auch die Lampen ausgehn, wenn mir auch
gesagt wird: Nichts mehr -, wenn auch von der Bühne
das Leere herkommt mit dem grauen Luftzug,
wenn auch von meinen stillen Vorfahrn keiner
mehr mit mir dasitzt, keine Frau, sogar
der Knabe nicht mehr mit dem braunen Schielaug:
Ich bleibe dennoch. Es giebt immer Zuschaun.

Hab ich nicht recht? Du, der um mich so bitter
das Leben schmeckte, meines kostend, Vater,
den ersten trüben Aufguß meines Müssens,
da ich heranwuchs, immer wieder kostend
und, mit dem Nachgeschmack so fremder Zukunft
beschäftigt, prüftest mein beschlagnes Aufschaun, -
der du, mein Vater, seit du tot bist, oft
in meiner Hoffnung, innen in mir, Angst hast,
und Gleichmut, wie ihn Tote haben, Reiche
von Gleichmut, aufgiebst für mein bißchen Schicksal,
hab ich nicht recht? Und ihr, hab ich nicht recht,
die ihr mich liebtet für den kleinen Anfang
Liebe zu euch, von dem ich immer abkam,
weil mir der Raum in eurem Angesicht,
da ich ihn liebte, überging in Weltraum,
in dem ihr nicht mehr wart …: wenn mir zumut ist,
zu warten vor der Puppenbühne, nein,
so völlig hinzuschaun, daß, um mein Schauen
am Ende aufzuwiegen, dort als Spieler
ein Engel hinmuß, der die Bälge hochreißt.
Engel und Puppe: dann ist endlich Schauspiel.
Dann kommt zusammen, was wir immerfort
entzweien, indem wir da sind. Dann entsteht
aus unsern Jahreszeiten erst der Umkreis
des ganzen Wandelns. Über uns hinüber
spielt dann der Engel. Sieh, die Sterbenden,
sollten sie nicht vermuten, wie voll Vorwand
das alles ist, was wir hier leisten. Alles
ist nicht es selbst. O Stunden der Kindheit,
da hinter den Figuren mehr als nur
Vergangenes war und vor uns nicht die Zukunft.
Wir wuchsen freilich und wir drängten manchmal,
bald groß zu werden, denen halb zulieb,
die andres nicht mehr hatten, als das Großsein.
Und waren doch, in unserem Alleingehn,
mit Dauerndem vergnügt und standen da
im Zwischenraume zwischen Welt und Spielzeug,
an einer Stelle, die seit Angebinn
gegründet war für einen reinen Vorgang.

Wer zeigt ein Kind, so wie es steht? Wer stellt
es ins Gestirn und giebt das Maß des Abstands
ihm in die Hand? Wer macht den Kindertod
aus grauem Brot, das hart wird, - oder läßt
ihn drin im runden Mund, so wie den Gröps
von einem schönen Apfel?.......Mörder sind
leicht einzusehen. Aber dies: den Tod,
den ganzen Tod, noch vor dem Leben so
sanft zu enthalten und nicht bös zu sein,
ist unbeschreiblich.`},132:{id:"132",title:"Duineser Elegien: Die sechste Elegie",audioFile:"./audio/132.mp3",author:"Rainer Maria Rilke",text:`Feigenbaum, seit wie lange schon ists mir bedeutend,
wie du die Blüte beinah ganz überschlägst
und hinein in die zeitig entschlossene Frucht,
ungerühmt, drängst dein reines Geheimnis.
Wie der Fontäne Rohr treibt dein gebognes Gezweig
abwärts den Saft und hinan: und er springt aus dem Schlaf,
fast nicht erwachend, ins Glück seiner süßesten Leistung.
Sieh, wie der Gott in den Schwan….Wir aber verweilen,
ach, uns rühmt es zu blühn, und ins verspätete Innre
unserer endlichen Frucht gehn wir verraten hinein.
Wenigen steigt so stark der Andrang des Handelns.
daß sie schon anstehn und glühn in der Fülle des Herzens,
wenn die Verführung zum Blühn wie gelinderte Nachtluft
ihnen die Jugend des Munds, ihnen die Lider berührt:
Helden vielleicht und den frühe Hinüberbestimmten,
denen der gärtnernde Tod anders die Adern verbiegt.
Diese stürzen dahin: dem eigenen Lächeln
sind sie voran, wie das Rossegespann in den milden
muldigen Bildern von Karnak dem siegenden König.

Wunderlich nah ist der Held doch den jugendlich Toten. Dauern
ficht ihn nicht an. Sein Aufgang ist Dasein; beständig
nimmt er sich fort und tritt ins veränderte Sternbild
seiner steten Gefahr. Dort fänden ihn wenige. Aber,
das uns finster verschweigt, das plötzlich begeisterte Schicksal
singt ihn hinein in den Sturm seiner aufrauschenden Welt.
Hör ich doch keinen wie ihn. Auf einmal durchgeht mich
mit der strömenden Luft sein verdunkelter Ton.
Dann, wie verbärg ich mich gern vor der Sehnsucht: O wär ich,
wär ich ein Knabe und dürft es noch werden und säße
in die künftigen Arme gestützt und läse von Simson,
wie seine Mutter erst nichts und dann alles gebar.

War er nicht Held schon in dir, o Mutter, begann nicht
dort schon, in dir, seine herrische Auswahl?
Tausende brauten im Schooß und wollten er sein, aber sieh: er ergriff und ließ aus - , wählte und konnte.
Und wenn er Säulen zerstieß, so wars, da er ausbrach
aus der Welt deines Leibs in die engere Welt, wo er weiter
wählte und konnte. O Mütter der Helden, o Ursprung
reißender Ströme! Ihr Schluchten, in die sich
hoch von dem Herzrand, klagend,
schon die Mädchen gestürzt, künftig die Opfer dem Sohn.

Denn hinstürmte der Held durch Aufenthalte der Liebe,
jeder hob ihn hinaus, jeder ihn meinende Herzschlag,
abgewendet schon, stand er am Ende der Lächeln, - anders.`},133:{id:"133",title:"Duineser Elegien: Die siebente Elegie",audioFile:"./audio/133.mp3",author:"Rainer Maria Rilke",text:`Werbung nicht mehr, nicht Werbung, entwachsene Stimme,
sei deines Schreies Natur; zwar schriest du rein wie der Vogel,
wenn ihn die Jahreszeit aufhebt, die steigende, beinah vergessend,
daß er ein kümmerndes Tier und nicht nur ein einzelnes Herz sei,
das sie ins Heitere wirft, in die innigen Himmel. Wie er, so
würbest du wohl, nicht minder -, daß, noch unsichtbar,
dich die Freundin erführ, die stille, in der eine Antwort
langsam erwacht und über dem Hören sich anwärmt, -
deinem erkühnten Gefühl die erglühte Gefühlin.

O und der Frühling begriffe -, da ist keine Stelle,
die nicht trüge den Ton der Verkündigung. Erst jenen kleinen
fragenden Auflaut, den, mit steigernder Stille,
weihin umschweigt ein reiner bejahender Tag.
Dann die Stufen hinan, Ruf-Stufen hinan, zum geträumten
Tempel der Zukunft ; dann den Triller, Fontäne,
die zu dem drängenden Strahl schon das Fallen zuvornimmt
im versprechlichen Spiel… Und vor sich, den Sommer.

Nicht nur die Morgen alle des Sommers -, nicht nur
wie sie sich wandeln in Tag und strahlen vor Anfang.
Nicht nur die Tage, die zart sind um Blumen, und oben,
um die gestalteten Bäume, stark und gewaltig.
Nicht nur die Andacht dieser entfalteten Kräfte,
nicht nur die Wege, nicht nur die Wiesen im Abend,
nicht nur, nach spätem Gewitter, das atmende Klarsein,
nicht nur der nahende Schlaf und ein Ahnen, abends …
sondern die Nächte! Sondern die hohen, des Sommers,
Nächte, sondern die Sterne, die Sterne der Erde.
O einst tot sein und sie wissen unendlich,
alle die Sterne: denn wie, wie, wie sie vergessen!

Siehe, da rief ich die Liebende. Aber nicht sie nur
käme… Es kämen aus schwächlichen Gräbern
Mädchen und ständen … Denn, wie beschränk ich,
wie, den gerufenen Ruf? Die Versunkenen suchen
immer noch Erde.- Ihr Kinder, ein hiesig
einmal ergriffenes Ding gälte für viele.
Glaubt nicht, Schicksal sei mehr, als das Dichte der Kindheit;
wie überholtet ihr oft den Geliebten, atmend,
atmend nach seligem Lauf, auf nichts zu, ins Freie.

Hiersein ist herrlich. Ihr wußtet es, Mädchen, ihr auch,
die ihr scheinbar entbehrtet, versankt -, ihr, in den ärgsten
Gassen der Städte, Schwärende, oder dem Abfall
Offene. Denn eine Stunde war jeder, vielleicht nicht
ganz eine Stunde, ein mit den Maßen der Zeit kaum
Meßliches zwischen zwei Weilen -, da sie ein Dasein
hatte. Alles. Die Adern voll Dasein.
Nur, wir vergessen es leicht, was der lachende Nachbar
uns nicht bestätigt oder beneidet. Sichtbar
wollen wirs heben, wo doch das sichtbarste Glück uns
erst zu erkennen sich giebt, wenn wir es innen verwandeln.

Nirgends, Geliebte, wird Welt sein, als innen. Unser
Leben geht hin mit Verwandlung. Und immer geringer
schwindet das Außen. Wo einmal ein dauerndes Haus war,
schlägt sich erdachtes Gebild vor, quer, zu Erdenklichem
völlig gehörig, als ständ es noch ganz im Gehirne.
Weite Speicher der Kraft schafft sich der Zeitgeist, gestaltlos
wie der spannende Drang, den er aus allem gewinnt.
Tempel kennt er nicht mehr. Diese, des Herzens Verschwendung
sparen wir heimlicher ein. Ja, wo noch eins übersteht,
ein einst gebetetes Ding, ein gedientes, geknietes -,
hält es sich, so wie es ist, schon ins Unsichtbare hin.
Viele gewahrens nicht mehr, doch ohne den Vorteil,
daß sie´s nun innerlich baun, mit Pfeilern und Statuen, größer!

Jede dumpfe Umkehr der Welt hat solche Enterbte,
denen das Frühere nicht und noch nicht das Nächste gehört.
Denn auch das Nächste ist weit für die Menschen. Uns soll
dies nicht verwirren; es stärke in uns die Bewahrung
der noch erkannten Gestalt. - Dies stand einmal unter Menschen,
mitten im Schicksal stands, im vernichtenden, mitten
im Nichtwissen-Wohin stand es, wie seiend, und bog
Sterne zu sich aus gesicherten Himmeln. Engel,
dir noch zeig ich es, da! in deinem Anschaun
steh es gerettet zuletzt, nun endlich aufrecht.
Säulen, Pylone, der Sphinx, das strebende Stemmen,
grau aus vergehender Stadt oder aus fremder, des Doms.

War es nicht Wunder? O staune, Engel, denn wir sinds,
wir, o du Großer, erzähls, daß wir solches vermochten, mein Atem
reicht für die Rühmung nicht aus. So haben wir dennoch
nicht die Räume versäumt, diese gewährenden, diese
unseren Räume. (Was müssen sie fürchterlich groß sein,
da sie Jahrtausende nicht unseres Fühlns überfülln.)
Aber ein Turm war groß, nicht wahr? O Engel, er war es, -
groß, auch neben dir? Chartres war groß - , und Musik
reichte noch weiter hinan und überstieg uns. Doch selbst nur
eine Liebende -, oh, allein am nächtlichen Fenster …
reichte sie dir nicht ans Knie - ? Glaub nicht, dass ich werbe.
Engel, und würb ich dich auch! Du kommst nicht. Denn mein Anruf
ist immer voll Hinweg; wider so starke
Strömung kannst du nicht schreiten. Wie ein gestreckter
Arm ist mein Rufen. Und seine zum Greifen
oben offene Hand bleibt vor dir
offen, wie Abwehr und Wanung,
Unfaßlicher, weitauf.`},134:{id:"134",title:"Duineser Elegien: Die neunte Elegie",audioFile:"./audio/134.mp3",author:"Rainer Maria Rilke",text:`Warum, wenn es angeht, also die Frist des Daseins
hinzubringen, als Lorbeer, ein wenig dunkler als alles
andere Grün, mit kleinen Wellen an jedem
Blattrand (wie eines Windes Lächeln) -; warum dann
Menschliches müssen - und, Schicksal vermeidend,
sich sehnen nach Schicksal?...

Oh, nicht, weil Glück ist,
dieser voreilige Vorteil eines nahen Verlusts.
Nicht aus Neugier, oder zur Übung des Herzens,
das auch im Lorbeer wäre …..

Aber weil Hiersein viel ist, und weil uns scheinbar
alles das Hiesige braucht, dieses Schwindende, das
seltsam uns angeht. Uns, die Schwindendsten. Ein Mal
jedes, nur ein Mal. Ein Mal und nichtmehr. Und wir auch
ein Mal. Nie wieder. Aber dieses
ein Mal gewesen zu sein, wenn auch nur ein Mal:
irdisch gewesen zu sein, scheint nicht widerrufbar.

Und so drängen wir uns und wollen es leisten,
wollens enthalten in unsern einfachen Händen,
im überfüllten Blick und im sprachlosen Herzen.
Wollen es werden.- Wem es geben? Am liebsten
alles behalten für immer … Ach, in den andern Bezug,
wehe, was nimmt man hinüber? Nicht das Anschaun, das hier
langsam erlernte, und kein hier Ereignetes. Keins.
Also die Schmerzen. Also vor allem das Schwersein,
also der Liebe lange Erfahrung, - also
lauter Unsägliches. Aber später,
unter den Sternen, was solls: die sind besser unsäglich.
Bringt doch der Wanderer auch vom Hange des Bergrands
nicht eine Hand voll Erde ins Tal, die Allen unsägliche, sondern
ein erworbenes Wort, reines, den gelben und blaun
Enzian. Sind wir vielleicht hier, um zu sagen: Haus,
Brücke, Brunnen, Tor, Krug, Obstbaum, Fenster, -
höchstens: Säule, Turm… Aber zu sagen, verstehs,
oh zu sagen so, wie selber die Dinge niemals
innig meinten zu sein. Ist nicht die heimliche List
dieser verschwiegenen Erde, wenn sie die Liebenden drängt,
daß sich in ihrem Gefühl jedes und jedes entzückt?
Schwelle, was ists für zwei
Liebende, daß sie die eigne ältere Schwelle der Tür
ein wenig verbrauchen, auch sie, nach den vielen vorher
und vor den Künftigen… , leicht.

Hier ist des Säglichen Zeit, hier seine Heimat.
Sprich und bekenn. Mehr als je
fallen die Dinge dahin, die erlebbaren, denn,
was sie verdrängend ersetzt, ist ein Tun ohne Bild.
Tun unter Krusten, die willig zerspringen, sobald
innen das Handeln entwächst und sich anders begrenzt.
Zwischen den Hämmern besteht
unser Herz, wie die Zunge
zwischen den Zähnen, die doch,
dennoch, die preisende bleibt.

Preise dem Engel die Welt, nicht die unsägliche,
ihm kannst du nicht großtun mit herrlich Erfühltem;
im Weltall, wo er fühlender fühlt, bist du ein Neuling.
Drum zeig ihm das Einfache, das, von Geschlecht zu Geschlecht gestaltet, als ein Unsriges lebt, neben der Hand und im Blick. 
Sag ihm die Dinge. Er wird staunender stehn;
wie du standest
bei dem Seiler in Rom, oder beim Töpfer am Nil.
Zeig ihm, wie glücklich ein Ding sein kann,
wie schuldlos und unser,
wie selbst das klagende Leid rein zur Gestalt sich entschließt,
dient als ein Ding, oder stirbt in ein Ding - , und jenseits
selig der Geige entgeht.- Und diese, von Hingang
lebenden Dinge verstehn, daß du sie rühmst; vergänglich,
traun sie ein Rettendes uns, den Vergänglichsten, zu.
Wollen, wir sollen sie ganz im unsichtbarn Herzen verwandeln
in - o unendlich - in uns! Wer wir am Ende auch seien.

Erde, ist es nicht dies, was du willst: unsichtbar
in uns erstehn? - Ist es dein Traum nicht,
einmal unsichtbar zu sein? - Erde! unsichtbar!
Was, wenn Verwandlung nicht, ist dein drängender Auftrag?
Erde, du liebe, ich will. Oh glaub, es bedürfte
nicht deiner Frühlinge mehr, mich dir zu gewinnen -, einer,
ach, ein einziger ist schon dem Blute zu viel.
Namenlos bin ich zu dir entschlossen, von weit her.
Immer warst du im Recht, und dein heiliger Einfall
ist der vertrauliche Tod.

Siehe, ich lebe. Woraus? Weder Kindheit noch Zukunft
werden weniger… Überzähliges Dasein
entspringt mir im Herzen.`},135:{id:"135",title:"Duineser Elegien: Die zehnte Elegie",audioFile:"./audio/135.mp3",author:"Rainer Maria Rilke",text:`Daß ich dereinst, an dem Ausgang der grimmigen Einsicht,
Jubel und Ruhm aufsinge zustimmenden Engeln.
Daß von den klar geschlagenen Hämmern des Herzens
keiner versage an weichen, zweifelnden oder
reißenden Saiten. Daß mich mein strömendes Antlitz
glänzender mache; daß das unscheinbare Weinen
blühe. O wie werdet ihr dann, Nächte, mir lieb sein,
gehärmte. Daß ich euch knieender nicht, untröstliche Schwestern,
hinnahm, nicht in euer gelöstes
Haar mich gelöster ergab. Wir, Vergeuder der Schmerzen.
Wie wir sie absehn voraus, in die traurige Dauer,
ob sie nicht enden vielleicht. Sie aber sind ja
unser winterwähriges Laub, unser dunkeles Sinngrün,
eine der Zeiten des heimlichen Jahres - , nicht nur
Zeit -, sind Stelle, Siedlung, Lager, Boden, Wohnort.

Freilich, wehe, wie fremd sind die Gassen der Leid-Stadt,
wo in der falschen, aus Übertönung gemachten
Stille, stark, aus der Gußform des Leeren der Ausguß
prahlt: der vergoldete Lärm, das platzende Denkmal.
O wie spurlos zerträte ein Engel ihnen den Trostmarkt,
den die Kirche begrenzt, ihre fertig gekaufte:
reinlich und zu und enttäuscht wie ein Postamt am Sonntag.
Draußen aber kräuseln sich immer die Ränder von Jahrmarkt.
Schaukeln der Freiheit! Taucher und Gaukler des Eifers!
Und des behübschten Glücks figürliche Schießstatt,
wo es zappelt von Ziel und sich blechern benimmt,
wenn ein Geschickterer trifft. Von Beifall zu Beifall
taumelt er weiter; denn Buden jeglicher Neugier
werben, trommeln und plärrn. Für Erwachsene aber
ist noch besonders zu sehn, wie das Geld sich vermehrt, anatomisch,
nicht zur Belustigung nur: der Geschlechtsteil des Gelds,
alles, das Ganze, der Vorgang -, das unterrichtet und macht fruchtbar… 
…Oh aber gleich darüber hinaus, 
hinter der letzten Planke, beklebt mit Plakaten des "Todlos",
jenes bitteren Biers, das den Trinkenden süß scheint,
wenn sie immer dazu frische Zerstreuungen kaun…
gleich im Rücken der Planke, gleich dahinter, ists wirklich.
Kinder spielen, und Liebende halten einander, - abseits,
ernst, im ärmlichen Gras, und Hunde haben Natur.
Weiter noch zieht es den Jüngling, vielleicht, daß er
eine junge Klage liebt… Hinter ihr her kommt er in Wiesen. Sie sagt:
- Weit. Wir wohnen dort draußen…Wo? Und der Jüngling
folgt. Ihn rührt ihre Haltung. Die Schulter, der Hals -, vielleicht
ist sie von herrlicher Herkunft. Aber er läßt sie, kehrt um,
wendet sich, winkt … Was solls? Sie ist eine Klage.

Nur die jungen Toten, im ersten Zustand
zeitlosen Gleichmuts, dem der Entwöhnung,
folgen ihr liebend. Mädchen
wartet sie ab und befreundet sie. Zeigt ihnen leise,
was sie an sich hat. Perlen des Leids und die feinen
Schleier der Duldung. - Mit Jünglingen geht sie
schweigend.

Aber dort, wo sie wohnen, im Tal, der Älteren eine, der Klagen,
nimmt sich des Jünglings an, wenn er fragt: - Wir waren,
sagt sie, ein Großes Geschlecht, einmal, wir Klagen. Die Väter
trieben den Bergbau dort in dem großen Gebirg; bei Menschen
findest du manchmal ein Stück geschliffenes Ur-Leid
oder, aus altem Vulkan, schlackig versteinerter Zorn.
Ja, das stammte von dort. Einst waren wir reich.

Und sie leitet ihn leicht durch die weite Landschaft der Klagen,
zeigt ihm die Säulen der Tempel oder die Trümmer
jener Burgen, von wo Klage-Fürsten das Land
einstens weise beherrscht. Zeigt ihm die hohen
Tränenbäume und Felder blühender Wehmut,
(Lebendige kennen sie nur als sanftes Blattwerk);
zeigt ihm die Tiere der Trauer, weidend, - und manchmal
schreckt ein Vogel und zieht, flach ihnen fliegend durchs Aufschaun,
weithin das schriftliche Bild seines vereinsamten Schreis.
Abends führt sie ihn hin zu den Gräbern der Alten
aus dem Klage-Geschlecht, den Sibyllen und Warn-Herrn.
Naht aber Nacht, so wandeln sie leiser, und bald
mondets empor, das über Alles
wachende Grab-Mal. Brüderlich jenem am Nil,
der erhabenen Sphinx ; der verschwiegenen Kammer Antlitz.
Und sie staunen dem krönlichen Haupt, das für immer,
schweigend, der Menschen Gesicht
auf die Waage der Sterne gelegt.

Nicht erfaßt es sein Blick, im Frühtod
schwindelnd. Aber ihr Schaun,
hinter dem Pschent-Rand hervor, scheucht es die Eule. Und sie,
streifend im langsamen Abstrich die Wange entlang,
jene der reifesten Rundung,
zeichnet weich in das neue
Totengehör, über ein doppelt
aufgeschlagenes Blatt, den unbeschreiblichen Umriß.

Und höher, die Sterne. Neue. Die Sterne des Leidlands.
Langsam nennt sie die Klage: - Hier,
siehe, den Reiter, den Stab, und das vollere Sternbild
nennen sie: Fruchtkranz. Dann, weiter, dem Pol zu:
Wiege; Weg; Das brennende Buch; Puppe; Fenster.
Aber im südlichen Himmel, rein wie im Innern
einer gesegneten Hand, das klar erglänzende "M",
das die Mütter bedeutet … .

Doch der Tote muss fort, und schweigend bringt ihn die ältere
Klage bis an die Talschlucht,
wo es schimmert im Mondschein:
die Quelle der Freude. In Ehrfurcht
nennt sie sie, sagt: - Bei den Menschen
ist sie ein tragender Strom. -

Stehn am Fuß des Gebirgs.
Und da umarmt sie ihn, weinend.

Einsam steigt er dahin, in die Berge des Ur-Leids.
Und nicht einmal sein Schritt klingt aus dem tonlosen Los.

Aber erweckten sie uns, die unendlich Toten, ein Gleichnis,
siehe, sie zeigten vielleicht auf die Kätzchen der leeren
Hasel, die hängenden, oder
meinten den Regen, der fällt auf dunkles Erdreich im Frühjahr. -

Und wir, die an steigendes Glück
denken, empfänden die Rührung,
die uns beinah bestürzt,
wenn ein Glückliches fällt.`}},Bu=[{id:"2",name:"Gotthold Ephraim Lessing",poems:[{id:"002",title:"Für wen ich singe"},{id:"003",title:"Ich"}]},{id:"3",name:"Johann Wolfgang von Goethe",poems:[{id:"004",title:"Das Heideröslein"},{id:"005",title:"Mailied"},{id:"006",title:"Willkommen und Abschied"},{id:"007",title:"Kleine Blumen, kleine Blätter"},{id:"008",title:"Ein grauer trüber Morgen"},{id:"009",title:"Legende"},{id:"010",title:"Zueignung Faust"}]},{id:"4",name:"Friedrich Schiller",poems:[{id:"011",title:"Die Kraniche des Ibykus (Teil 1)"},{id:"012",title:"Die Kraniche des Ibykus (Teil 2)"},{id:"013",title:"Die Kraniche des Ibykus (Teil 3)"},{id:"014",title:"Das Glück"},{id:"015",title:"Nänie"},{id:"016",title:"An die Freunde"},{id:"017",title:"Die Ideale"},{id:"018",title:"Der Führer des Lebens"},{id:"019",title:"Menschliches Wissen"}]},{id:"5",name:"Friedrich Hölderlin",poems:[{id:"020",title:"Da ich ein Knabe war"},{id:"021",title:"Geh unter, schöne Sonne"},{id:"022",title:"Diotima"},{id:"023",title:"An die Parzen"},{id:"024",title:"Empedokles"},{id:"025",title:"An den Aether"},{id:"026",title:"Gesang des Deutschen"},{id:"027",title:"Mein Eigentum"},{id:"028",title:"Der Abschied"},{id:"029",title:"Hälfte des Lebens"},{id:"030",title:"Hyperions Schicksalslied"},{id:"031",title:"Abendphantasie"}]},{id:"6",name:"Joseph von Eichendorff",poems:[{id:"032",title:"Der Morgen"},{id:"033",title:"Sängerfahrt"},{id:"034",title:"Schöne Fremde"},{id:"035",title:"Der frohe Wandersmann"},{id:"036",title:"Sehnsucht"},{id:"037",title:"Das zerbrochene Ringlein"},{id:"038",title:"Die zwei Gesellen"},{id:"039",title:"In der Fremde"},{id:"040",title:"Vesper"},{id:"041",title:"Abschied"},{id:"042",title:"Der Abend"},{id:"043",title:"Der alte Garten"},{id:"044",title:"Zwielicht"},{id:"045",title:"Mondnacht"},{id:"046",title:"Der verspätete Wanderer"},{id:"047",title:"Ergebung"},{id:"048",title:"Der Einsiedler"},{id:"049",title:"Schläft ein Lied"}]},{id:"7",name:"Heinrich Heine",poems:[{id:"050",title:"Lorelei"},{id:"051",title:"Still ist die Nacht"},{id:"052",title:"Aus meinen großen Schmerzen"},{id:"053",title:"Du bist wie eine Blume"},{id:"054",title:"Ein Jüngling liebt"},{id:"055",title:"Im traurigen Monat November"},{id:"056",title:"Wenn ich beseligt"},{id:"057",title:"Leise zieht durch mein Gemüt"},{id:"058",title:"Im wunderschönen Monat"},{id:"059",title:"Wenn ich in deine Augen"},{id:"060",title:"Ich hab im Traum"},{id:"061",title:"Nun ist es Zeit"},{id:"062",title:"Sie erlischt"},{id:"063",title:"Belsazar"}]},{id:"8",name:"Eduard Mörike",poems:[{id:"064",title:"Auf eine Lampe"},{id:"065",title:"Verborgenheit"},{id:"066",title:"Schön Rohtraut"},{id:"067",title:"An eine Äolsharfe"},{id:"068",title:"Heimweh"},{id:"069",title:"Der Feuerreiter"},{id:"070",title:"Die Geister vom Mummelsee"},{id:"071",title:"Ihr meine sehenden Augen"},{id:"072",title:"Elfenlied"},{id:"073",title:"Das verlassene Mägdlein"},{id:"074",title:"Er ists"},{id:"075",title:"Im Frühling"},{id:"076",title:"Agnes"},{id:"077",title:"An einem Wintermorgen"},{id:"078",title:"Gesang zu zweien in der Nacht"},{id:"079",title:"Denk es, o Seele"}]},{id:"9",name:"Annette von Droste-Hülshoff",poems:[{id:"080",title:"Das Fegefeuer des westfälischen Adels"},{id:"081",title:"Der Knabe im Moor"}]},{id:"10",name:"Theodor Storm",poems:[{id:"082",title:"Abseits"},{id:"083",title:"Die Stadt"},{id:"084",title:"Meeresstrand"},{id:"085",title:"Im Walde"},{id:"086",title:"Weiße Rosen"},{id:"087",title:"Noch einmal!"},{id:"088",title:"Die Stunde schlug"},{id:"089",title:"Die Nachtigall"},{id:"090",title:"In Bulemanns Haus"},{id:"091",title:"Du willst es nicht in Worten sagen"},{id:"092",title:"Wohl rief ich sanft dich an mein Herz"},{id:"093",title:"Beginn des Endes"}]},{id:"11",name:"Theodor Fontane",poems:[{id:"094",title:"Märkische Reime: 1. Gruß/2. Vom Fehrbelliner Schlachtfeld"},{id:"095",title:"Meine Gräber"},{id:"096",title:"Prinz Louis Ferdinand"},{id:"097",title:"Der 6. November 1632"},{id:"098",title:"Die Brück' am Tay"},{id:"099",title:"Gorm Grymme"},{id:"100",title:"Herr von Ribbeck auf Ribbeck im Havelland"},{id:"101",title:"Auf der Treppe von Sanssouci"},{id:"102",title:"Herbstmorgen"},{id:"103",title:"Der Kranich"},{id:"104",title:"Im Garten"},{id:"105",title:"O trübe diese Tage nicht"},{id:"106",title:"Man hat es oder hat es nicht"},{id:"107",title:"Überlass es der Zeit"},{id:"108",title:"Würd' es mir fehlen, würd' ich's vermissen?"},{id:"109",title:"Ja, das möcht ich noch erleben"},{id:"110",title:"So und nicht anders"},{id:"111",title:"Leben"}]},{id:"12",name:"Rainer Maria Rilke",poems:[{id:"112",title:"Das Stundenbuch. Ich lebe grad, da das Jahrhundert geht ..."},{id:"113",title:"Das Stundenbuch. Ich lese es heraus aus deinem Wort ..."},{id:"114",title:"Kindheit"},{id:"115",title:"Der Abend"},{id:"116",title:"Letzter Abend"},{id:"117",title:"Abschied"},{id:"118",title:"Todes-Erfahrung"},{id:"119",title:"Archaischer Torso Apollos"},{id:"120",title:"Der Ölbaum-Garten"},{id:"121",title:"Der Tod der Geliebten"},{id:"122",title:"Die Flamingos"},{id:"123",title:"Der Panther"},{id:"124",title:"Orpheus. Eurydike. Hermes"},{id:"125",title:"Die Sonette an Orpheus: I. Sonett"},{id:"126",title:"Die Sonette an Orpheus: IX. Sonett"},{id:"127",title:"Die Sonette an Orpheus: XIX. Sonett"},{id:"128",title:"Musik"},{id:"129",title:"Duineser Elegien: Die erste Elegie"},{id:"130",title:"Duineser Elegien: Die zweite Elegie"},{id:"131",title:"Duineser Elegien: Die vierte Elegie"},{id:"132",title:"Duineser Elegien: Die sechste Elegie"},{id:"133",title:"Duineser Elegien: Die siebente Elegie"},{id:"134",title:"Duineser Elegien: Die neunte Elegie"},{id:"135",title:"Duineser Elegien: Die zehnte Elegie"}]}],sc=({onPoemSelect:D,selectedPoemId:L})=>{const[f,X]=le.useState(new Set(["1"])),T=F=>{const A=new Set(f);A.has(F)?A.delete(F):A.add(F),X(A)};return b.jsx(Gs,{className:"w-full h-full overflow-hidden",children:b.jsx("div",{className:"pt-16",children:b.jsx(xs,{className:"overflow-y-auto max-h-[calc(100vh-4rem)]",children:b.jsx("div",{className:"space-y-2",children:Bu.map(F=>b.jsxs("div",{className:"select-none",children:[b.jsxs("button",{onClick:()=>T(F.id),className:"w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-colors",children:[b.jsx("span",{className:"font-medium",children:F.name}),f.has(F.id)?b.jsx(Zo,{size:20}):b.jsx(Jo,{size:20})]}),f.has(F.id)&&b.jsx("div",{className:"ml-4 mt-1 space-y-1",children:F.poems.map(A=>b.jsx("button",{className:`w-full text-left p-2 rounded-lg transition-colors ${L===A.id?"bg-blue-100 text-blue-800":"text-gray-600 hover:bg-gray-100"}`,onClick:()=>D(A.id),children:A.title},A.id))})]},F.id))})})})})},ac=({likedPoems:D,onClose:L,onPoemSelect:f,poemsData:X})=>{const T=Bu.map(F=>({...F,poems:F.poems.filter(A=>D.includes(A.id))})).filter(F=>F.poems.length>0);return b.jsxs(Gs,{className:"w-80 h-full overflow-hidden",children:[b.jsxs("div",{className:"p-4 flex justify-between items-center border-b",children:[b.jsx("h2",{className:"text-xl font-semibold",children:"Favoriten"}),b.jsx("button",{onClick:L,className:"p-2 hover:bg-gray-100 rounded-full",children:b.jsx(rc,{size:20})})]}),b.jsx(xs,{className:"overflow-y-auto max-h-[calc(100vh-8rem)]",children:T.length===0?b.jsx("p",{className:"text-gray-500 text-center mt-4",children:"Bisher keine Favoriten"}):b.jsx("div",{className:"space-y-4",children:T.map(F=>b.jsxs("div",{className:"space-y-2",children:[b.jsx("h3",{className:"font-medium",children:F.name}),b.jsx("div",{className:"ml-4 space-y-1",children:F.poems.map(A=>b.jsx("button",{className:"w-full text-left p-2 rounded-lg text-gray-600 hover:bg-gray-100",onClick:()=>{f(A.id),L()},children:A.title},A.id))})]},F.id))})})]})};function dc(){const[D,L]=le.useState(()=>localStorage.getItem("selectedPoemId")||"002"),[f,X]=le.useState(!1),[T,F]=le.useState(()=>{const I=localStorage.getItem("showMainSidebar");return I?JSON.parse(I):!0}),[A,se]=le.useState(()=>{const I=localStorage.getItem("likedPoems");return I?JSON.parse(I):[]}),[_,me]=le.useState(()=>{const I=localStorage.getItem("fontSize");return I?parseFloat(I):2});le.useEffect(()=>{localStorage.setItem("selectedPoemId",D)},[D]),le.useEffect(()=>{localStorage.setItem("likedPoems",JSON.stringify(A))},[A]),le.useEffect(()=>{localStorage.setItem("fontSize",_.toString())},[_]),le.useEffect(()=>{localStorage.setItem("showMainSidebar",JSON.stringify(T))},[T]);const ne=Ls[D],Y=I=>{L(I)},Q=I=>{me(V=>I==="increase"&&V<4?V+.25:I==="decrease"&&V>1?V-.25:V)},Me=I=>{se(V=>V.includes(I)?V.filter(j=>j!==I):[...V,I])};return b.jsxs("div",{className:"min-h-screen bg-gray-50",children:[b.jsx("div",{className:`fixed top-4 z-10 transition-all duration-300 ${T?"left-64":"left-4"}`,children:b.jsx("button",{onClick:()=>F(I=>!I),className:"p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors",children:b.jsx(Xo,{size:24,className:`text-gray-700 transition-colors ${T?"text-blue-500":""}`})})}),b.jsx("div",{className:`fixed top-0 left-0 h-screen w-80 transform transition-transform duration-300 ease-in-out ${T?"translate-x-0":"-translate-x-80"}`,children:b.jsx(sc,{onPoemSelect:Y,selectedPoemId:D})}),b.jsx("div",{className:"fixed top-4 right-4 z-10",children:b.jsx("button",{onClick:()=>X(I=>!I),className:"p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors",children:b.jsx(Ru,{size:24,className:"text-gray-700",fill:f?"#ef4444":"none"})})}),f&&b.jsx("div",{className:"fixed top-0 right-0 h-screen",children:b.jsx(ac,{likedPoems:A,onClose:()=>X(!1),onPoemSelect:Y,poemsData:Ls})}),b.jsx("div",{className:`transition-all duration-300 ${T?"ml-80":"ml-0"} ${f?"mr-80":"mr-0"}`,children:b.jsx("div",{className:"p-4",children:b.jsx("div",{className:"min-h-screen bg-white rounded-lg shadow p-6 pb-72",children:b.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[b.jsx("h2",{className:"text-4xl font-bold mb-4",style:{fontFamily:"'Trajan Pro', serif"},children:ne.title}),b.jsx("h3",{className:"text-2xl text-gray-600 mb-8",style:{fontFamily:"'Trajan Pro', serif"},children:ne.author}),b.jsx("pre",{className:"text-2xl leading-relaxed font-normal",style:{fontFamily:"'Palatino', 'Palatino Linotype', serif",whiteSpace:"pre-wrap",wordWrap:"break-word",fontSize:`${_}rem`},children:ne.text})]})})})}),b.jsx("div",{className:`fixed bottom-0 right-0 transition-all duration-300 ${T?"left-80":"left-0"}`,children:b.jsx("div",{className:"mx-4 mb-4",children:b.jsx(lc,{poemsData:Ls,currentPoemId:D,onPoemChange:L,onFontSizeChange:Q,likedPoems:A,onToggleLike:Me})})})]})}Co.createRoot(document.getElementById("root")).render(b.jsx(le.StrictMode,{children:b.jsx(dc,{})}));
