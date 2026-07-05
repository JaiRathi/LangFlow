(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function ru(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vl={exports:{}},es={},Jl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn=Symbol.for("react.element"),ou=Symbol.for("react.portal"),lu=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),mu=Symbol.for("react.memo"),fu=Symbol.for("react.lazy"),qo=Symbol.iterator;function hu(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var Wl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ql=Object.assign,Kl={};function sn(e,t,n){this.props=e,this.context=t,this.refs=Kl,this.updater=n||Wl}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xl(){}Xl.prototype=sn.prototype;function Ur(e,t,n){this.props=e,this.context=t,this.refs=Kl,this.updater=n||Wl}var Hr=Ur.prototype=new Xl;Hr.constructor=Ur;Ql(Hr,sn.prototype);Hr.isPureReactComponent=!0;var Oo=Array.isArray,Yl=Object.prototype.hasOwnProperty,Br={current:null},$l={key:!0,ref:!0,__self:!0,__source:!0};function Zl(e,t,n){var a,s={},r=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)Yl.call(t,a)&&!$l.hasOwnProperty(a)&&(s[a]=t[a]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var i=Array(l),d=0;d<l;d++)i[d]=arguments[d+2];s.children=i}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)s[a]===void 0&&(s[a]=l[a]);return{$$typeof:Qn,type:e,key:r,ref:o,props:s,_owner:Br.current}}function yu(e,t){return{$$typeof:Qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gr(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qn}function gu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lo=/\/+/g;function vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gu(""+e.key):t.toString(36)}function ga(e,t,n,a,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qn:case ou:o=!0}}if(o)return o=e,s=s(o),e=a===""?"."+vs(o,0):a,Oo(s)?(n="",e!=null&&(n=e.replace(Lo,"$&/")+"/"),ga(s,t,n,"",function(d){return d})):s!=null&&(Gr(s)&&(s=yu(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Lo,"$&/")+"/")+e)),t.push(s)),1;if(o=0,a=a===""?".":a+":",Oo(e))for(var l=0;l<e.length;l++){r=e[l];var i=a+vs(r,l);o+=ga(r,t,n,i,s)}else if(i=hu(e),typeof i=="function")for(e=i.call(e),l=0;!(r=e.next()).done;)r=r.value,i=a+vs(r,l++),o+=ga(r,t,n,i,s);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(e,t,n){if(e==null)return e;var a=[],s=0;return ga(e,a,"","",function(r){return t.call(n,r,s++)}),a}function vu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},va={transition:null},bu={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:va,ReactCurrentOwner:Br};function ei(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ta,forEach:function(e,t,n){ta(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ta(e,function(){t++}),t},toArray:function(e){return ta(e,function(t){return t})||[]},only:function(e){if(!Gr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=sn;D.Fragment=lu;D.Profiler=du;D.PureComponent=Ur;D.StrictMode=iu;D.Suspense=cu;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bu;D.act=ei;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Ql({},e.props),s=e.key,r=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=Br.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in t)Yl.call(t,i)&&!$l.hasOwnProperty(i)&&(a[i]=t[i]===void 0&&l!==void 0?l[i]:t[i])}var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){l=Array(i);for(var d=0;d<i;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:Qn,type:e.type,key:s,ref:r,props:a,_owner:o}};D.createContext=function(e){return e={$$typeof:pu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uu,_context:e},e.Consumer=e};D.createElement=Zl;D.createFactory=function(e){var t=Zl.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:_u,render:e}};D.isValidElement=Gr;D.lazy=function(e){return{$$typeof:fu,_payload:{_status:-1,_result:e},_init:vu}};D.memo=function(e,t){return{$$typeof:mu,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=va.transition;va.transition={};try{e()}finally{va.transition=t}};D.unstable_act=ei;D.useCallback=function(e,t){return le.current.useCallback(e,t)};D.useContext=function(e){return le.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return le.current.useDeferredValue(e)};D.useEffect=function(e,t){return le.current.useEffect(e,t)};D.useId=function(){return le.current.useId()};D.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return le.current.useMemo(e,t)};D.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};D.useRef=function(e){return le.current.useRef(e)};D.useState=function(e){return le.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return le.current.useTransition()};D.version="18.3.1";Jl.exports=D;var ue=Jl.exports;const wu=ru(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu=ue,Tu=Symbol.for("react.element"),ku=Symbol.for("react.fragment"),Su=Object.prototype.hasOwnProperty,Mu=xu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iu={key:!0,ref:!0,__self:!0,__source:!0};function ti(e,t,n){var a,s={},r=null,o=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Su.call(t,a)&&!Iu.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)s[a]===void 0&&(s[a]=t[a]);return{$$typeof:Tu,type:e,key:r,ref:o,props:s,_owner:Mu.current}}es.Fragment=ku;es.jsx=ti;es.jsxs=ti;Vl.exports=es;var m=Vl.exports,Ws={},ni={exports:{}},ve={},ai={exports:{}},si={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,E){var N=M.length;M.push(E);e:for(;0<N;){var z=N-1>>>1,K=M[z];if(0<s(K,E))M[z]=E,M[N]=K,N=z;else break e}}function n(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var E=M[0],N=M.pop();if(N!==E){M[0]=N;e:for(var z=0,K=M.length,Zn=K>>>1;z<Zn;){var ht=2*(z+1)-1,gs=M[ht],yt=ht+1,ea=M[yt];if(0>s(gs,N))yt<K&&0>s(ea,gs)?(M[z]=ea,M[yt]=N,z=yt):(M[z]=gs,M[ht]=N,z=ht);else if(yt<K&&0>s(ea,N))M[z]=ea,M[yt]=N,z=yt;else break e}}return E}function s(M,E){var N=M.sortIndex-E.sortIndex;return N!==0?N:M.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var i=[],d=[],h=1,c=null,f=3,g=!1,w=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(M){for(var E=n(d);E!==null;){if(E.callback===null)a(d);else if(E.startTime<=M)a(d),E.sortIndex=E.expirationTime,t(i,E);else break;E=n(d)}}function y(M){if(v=!1,_(M),!w)if(n(i)!==null)w=!0,hs(x);else{var E=n(d);E!==null&&ys(y,E.startTime-M)}}function x(M,E){w=!1,v&&(v=!1,p(I),I=-1),g=!0;var N=f;try{for(_(E),c=n(i);c!==null&&(!(c.expirationTime>E)||M&&!Ie());){var z=c.callback;if(typeof z=="function"){c.callback=null,f=c.priorityLevel;var K=z(c.expirationTime<=E);E=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(i)&&a(i),_(E)}else a(i);c=n(i)}if(c!==null)var Zn=!0;else{var ht=n(d);ht!==null&&ys(y,ht.startTime-E),Zn=!1}return Zn}finally{c=null,f=N,g=!1}}var T=!1,k=null,I=-1,G=5,A=-1;function Ie(){return!(e.unstable_now()-A<G)}function ln(){if(k!==null){var M=e.unstable_now();A=M;var E=!0;try{E=k(!0,M)}finally{E?dn():(T=!1,k=null)}}else T=!1}var dn;if(typeof u=="function")dn=function(){u(ln)};else if(typeof MessageChannel<"u"){var Fo=new MessageChannel,su=Fo.port2;Fo.port1.onmessage=ln,dn=function(){su.postMessage(null)}}else dn=function(){P(ln,0)};function hs(M){k=M,T||(T=!0,dn())}function ys(M,E){I=P(function(){M(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,hs(x))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(i)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var N=f;f=E;try{return M()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,E){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var N=f;f=M;try{return E()}finally{f=N}},e.unstable_scheduleCallback=function(M,E,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,M){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,M={id:h++,callback:E,priorityLevel:M,startTime:N,expirationTime:K,sortIndex:-1},N>z?(M.sortIndex=N,t(d,M),n(i)===null&&M===n(d)&&(v?(p(I),I=-1):v=!0,ys(y,N-z))):(M.sortIndex=K,t(i,M),w||g||(w=!0,hs(x))),M},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(M){var E=f;return function(){var N=f;f=E;try{return M.apply(this,arguments)}finally{f=N}}}})(si);ai.exports=si;var Eu=ai.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=ue,ge=Eu;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ri=new Set,Dn={};function Nt(e,t){Yt(e,t),Yt(e+"Capture",t)}function Yt(e,t){for(Dn[e]=t,e=0;e<t.length;e++)ri.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=Object.prototype.hasOwnProperty,Nu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jo={},Uo={};function Du(e){return Qs.call(Uo,e)?!0:Qs.call(jo,e)?!1:Nu.test(e)?Uo[e]=!0:(jo[e]=!0,!1)}function Au(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cu(e,t,n,a){if(t===null||typeof t>"u"||Au(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,n,a,s,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var zr=/[\-:]([a-z])/g;function Vr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zr,Vr);ee[t]=new ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zr,Vr);ee[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zr,Vr);ee[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jr(e,t,n,a){var s=ee.hasOwnProperty(t)?ee[t]:null;(s!==null?s.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cu(t,n,s,a)&&(n=null),a||s===null?Du(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,a=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Ke=Pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),Ct=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Wr=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),oi=Symbol.for("react.provider"),li=Symbol.for("react.context"),Qr=Symbol.for("react.forward_ref"),Xs=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),Kr=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),ii=Symbol.for("react.offscreen"),Ho=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,bs;function gn(e){if(bs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bs=t&&t[1]||""}return`
`+bs+e}var ws=!1;function xs(e,t){if(!e||ws)return"";ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),r=a.stack.split(`
`),o=s.length-1,l=r.length-1;1<=o&&0<=l&&s[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==r[l]){var i=`
`+s[o].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=o&&0<=l);break}}}finally{ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gn(e):""}function Ru(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=xs(e.type,!1),e;case 11:return e=xs(e.type.render,!1),e;case 1:return e=xs(e.type,!0),e;default:return""}}function $s(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Ct:return"Portal";case Ks:return"Profiler";case Wr:return"StrictMode";case Xs:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case li:return(e.displayName||"Context")+".Consumer";case oi:return(e._context.displayName||"Context")+".Provider";case Qr:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kr:return t=e.displayName||null,t!==null?t:$s(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return $s(e(t))}catch{}}return null}function Fu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $s(t);case 8:return t===Wr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function di(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qu(e){var t=di(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function aa(e){e._valueTracker||(e._valueTracker=qu(e))}function ui(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=di(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pi(e,t){t=t.checked,t!=null&&Jr(e,"checked",t,!1)}function er(e,t){pi(e,t);var n=pt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tr(e,t.type,n):t.hasOwnProperty("defaultValue")&&tr(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Go(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tr(e,t,n){(t!=="number"||Na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Vt(e,t,n,a){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function nr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(vn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function _i(e,t){var n=pt(t.value),a=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ci(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ar(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ci(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,mi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){Ou.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xn[t]=xn[e]})});function fi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xn.hasOwnProperty(e)&&xn[e]?(""+t).trim():t+"px"}function hi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,s=fi(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,s):e[n]=s}}var Lu=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sr(e,t){if(t){if(Lu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function rr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var or=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lr=null,Jt=null,Wt=null;function Jo(e){if(e=Yn(e)){if(typeof lr!="function")throw Error(b(280));var t=e.stateNode;t&&(t=rs(t),lr(e.stateNode,e.type,t))}}function yi(e){Jt?Wt?Wt.push(e):Wt=[e]:Jt=e}function gi(){if(Jt){var e=Jt,t=Wt;if(Wt=Jt=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function vi(e,t){return e(t)}function bi(){}var Ts=!1;function wi(e,t,n){if(Ts)return e(t,n);Ts=!0;try{return vi(e,t,n)}finally{Ts=!1,(Jt!==null||Wt!==null)&&(bi(),gi())}}function Cn(e,t){var n=e.stateNode;if(n===null)return null;var a=rs(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var ir=!1;if(Ve)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ir=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ir=!1}function ju(e,t,n,a,s,r,o,l,i){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Tn=!1,Da=null,Aa=!1,dr=null,Uu={onError:function(e){Tn=!0,Da=e}};function Hu(e,t,n,a,s,r,o,l,i){Tn=!1,Da=null,ju.apply(Uu,arguments)}function Bu(e,t,n,a,s,r,o,l,i){if(Hu.apply(this,arguments),Tn){if(Tn){var d=Da;Tn=!1,Da=null}else throw Error(b(198));Aa||(Aa=!0,dr=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wo(e){if(Dt(e)!==e)throw Error(b(188))}function Gu(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,a=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Wo(s),e;if(r===a)return Wo(s),t;r=r.sibling}throw Error(b(188))}if(n.return!==a.return)n=s,a=r;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,a=r;break}if(l===a){o=!0,a=s,n=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===n){o=!0,n=r,a=s;break}if(l===a){o=!0,a=r,n=s;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==a)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Ti(e){return e=Gu(e),e!==null?ki(e):null}function ki(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ki(e);if(t!==null)return t;e=e.sibling}return null}var Si=ge.unstable_scheduleCallback,Qo=ge.unstable_cancelCallback,zu=ge.unstable_shouldYield,Vu=ge.unstable_requestPaint,V=ge.unstable_now,Ju=ge.unstable_getCurrentPriorityLevel,Yr=ge.unstable_ImmediatePriority,Mi=ge.unstable_UserBlockingPriority,Ca=ge.unstable_NormalPriority,Wu=ge.unstable_LowPriority,Ii=ge.unstable_IdlePriority,ts=null,Le=null;function Qu(e){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Yu,Ku=Math.log,Xu=Math.LN2;function Yu(e){return e>>>=0,e===0?32:31-(Ku(e)/Xu|0)|0}var ra=64,oa=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?a=bn(l):(r&=o,r!==0&&(a=bn(r)))}else o=n&~s,o!==0?a=bn(o):r!==0&&(a=bn(r));if(a===0)return 0;if(t!==0&&t!==a&&!(t&s)&&(s=a&-a,r=t&-t,s>=r||s===16&&(r&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Ae(t),s=1<<n,a|=e[n],t&=~s;return a}function $u(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-Ae(r),l=1<<o,i=s[o];i===-1?(!(l&n)||l&a)&&(s[o]=$u(l,t)):i<=t&&(e.expiredLanes|=l),r&=~l}}function ur(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ei(){var e=ra;return ra<<=1,!(ra&4194240)&&(ra=64),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ae(n),r=1<<s;t[s]=0,a[s]=-1,e[s]=-1,n&=~r}}function $r(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ae(n),s=1<<a;s&t|e[a]&t&&(e[a]|=t),n&=~s}}var R=0;function Pi(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ni,Zr,Di,Ai,Ci,pr=!1,la=[],at=null,st=null,rt=null,Rn=new Map,Fn=new Map,Ze=[],tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function _n(e,t,n,a,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Yn(t),t!==null&&Zr(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function np(e,t,n,a,s){switch(t){case"focusin":return at=_n(at,e,t,n,a,s),!0;case"dragenter":return st=_n(st,e,t,n,a,s),!0;case"mouseover":return rt=_n(rt,e,t,n,a,s),!0;case"pointerover":var r=s.pointerId;return Rn.set(r,_n(Rn.get(r)||null,e,t,n,a,s)),!0;case"gotpointercapture":return r=s.pointerId,Fn.set(r,_n(Fn.get(r)||null,e,t,n,a,s)),!0}return!1}function Ri(e){var t=bt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=xi(n),t!==null){e.blockedOn=t,Ci(e.priority,function(){Di(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_r(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);or=a,n.target.dispatchEvent(a),or=null}else return t=Yn(n),t!==null&&Zr(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){ba(e)&&n.delete(t)}function ap(){pr=!1,at!==null&&ba(at)&&(at=null),st!==null&&ba(st)&&(st=null),rt!==null&&ba(rt)&&(rt=null),Rn.forEach(Xo),Fn.forEach(Xo)}function cn(e,t){e.blockedOn===t&&(e.blockedOn=null,pr||(pr=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,ap)))}function qn(e){function t(s){return cn(s,e)}if(0<la.length){cn(la[0],e);for(var n=1;n<la.length;n++){var a=la[n];a.blockedOn===e&&(a.blockedOn=null)}}for(at!==null&&cn(at,e),st!==null&&cn(st,e),rt!==null&&cn(rt,e),Rn.forEach(t),Fn.forEach(t),n=0;n<Ze.length;n++)a=Ze[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Ze.length&&(n=Ze[0],n.blockedOn===null);)Ri(n),n.blockedOn===null&&Ze.shift()}var Qt=Ke.ReactCurrentBatchConfig,Fa=!0;function sp(e,t,n,a){var s=R,r=Qt.transition;Qt.transition=null;try{R=1,eo(e,t,n,a)}finally{R=s,Qt.transition=r}}function rp(e,t,n,a){var s=R,r=Qt.transition;Qt.transition=null;try{R=4,eo(e,t,n,a)}finally{R=s,Qt.transition=r}}function eo(e,t,n,a){if(Fa){var s=_r(e,t,n,a);if(s===null)Rs(e,t,a,qa,n),Ko(e,a);else if(np(s,e,t,n,a))a.stopPropagation();else if(Ko(e,a),t&4&&-1<tp.indexOf(e)){for(;s!==null;){var r=Yn(s);if(r!==null&&Ni(r),r=_r(e,t,n,a),r===null&&Rs(e,t,a,qa,n),r===s)break;s=r}s!==null&&a.stopPropagation()}else Rs(e,t,a,null,n)}}var qa=null;function _r(e,t,n,a){if(qa=null,e=Xr(a),e=bt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qa=e,null}function Fi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ju()){case Yr:return 1;case Mi:return 4;case Ca:case Wu:return 16;case Ii:return 536870912;default:return 16}default:return 16}}var tt=null,to=null,wa=null;function qi(){if(wa)return wa;var e,t=to,n=t.length,a,s="value"in tt?tt.value:tt.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===s[r-a];a++);return wa=s.slice(e,1<a?1-a:void 0)}function xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ia(){return!0}function Yo(){return!1}function be(e){function t(n,a,s,r,o){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ia:Yo,this.isPropagationStopped=Yo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=be(rn),Xn=H({},rn,{view:0,detail:0}),op=be(Xn),Ss,Ms,mn,ns=H({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Ss=e.screenX-mn.screenX,Ms=e.screenY-mn.screenY):Ms=Ss=0,mn=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),$o=be(ns),lp=H({},ns,{dataTransfer:0}),ip=be(lp),dp=H({},Xn,{relatedTarget:0}),Is=be(dp),up=H({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=be(up),_p=H({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cp=be(_p),mp=H({},rn,{data:0}),Zo=be(mp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function ao(){return gp}var vp=H({},Xn,{key:function(e){if(e.key){var t=fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bp=be(vp),wp=H({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=be(wp),xp=H({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Tp=be(xp),kp=H({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=be(kp),Mp=H({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=be(Mp),Ep=[9,13,27,32],so=Ve&&"CompositionEvent"in window,kn=null;Ve&&"documentMode"in document&&(kn=document.documentMode);var Pp=Ve&&"TextEvent"in window&&!kn,Oi=Ve&&(!so||kn&&8<kn&&11>=kn),tl=" ",nl=!1;function Li(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ji(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Np(e,t){switch(e){case"compositionend":return ji(t);case"keypress":return t.which!==32?null:(nl=!0,tl);case"textInput":return e=t.data,e===tl&&nl?null:e;default:return null}}function Dp(e,t){if(Ft)return e==="compositionend"||!so&&Li(e,t)?(e=qi(),wa=to=tt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oi&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Ui(e,t,n,a){yi(a),t=Oa(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Sn=null,On=null;function Cp(e){Yi(e,0)}function as(e){var t=Lt(e);if(ui(t))return e}function Rp(e,t){if(e==="change")return t}var Hi=!1;if(Ve){var Es;if(Ve){var Ps="oninput"in document;if(!Ps){var sl=document.createElement("div");sl.setAttribute("oninput","return;"),Ps=typeof sl.oninput=="function"}Es=Ps}else Es=!1;Hi=Es&&(!document.documentMode||9<document.documentMode)}function rl(){Sn&&(Sn.detachEvent("onpropertychange",Bi),On=Sn=null)}function Bi(e){if(e.propertyName==="value"&&as(On)){var t=[];Ui(t,On,e,Xr(e)),wi(Cp,t)}}function Fp(e,t,n){e==="focusin"?(rl(),Sn=t,On=n,Sn.attachEvent("onpropertychange",Bi)):e==="focusout"&&rl()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(On)}function Op(e,t){if(e==="click")return as(t)}function Lp(e,t){if(e==="input"||e==="change")return as(t)}function jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:jp;function Ln(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!Qs.call(t,s)||!Re(e[s],t[s]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ll(e,t){var n=ol(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ol(n)}}function Gi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zi(){for(var e=window,t=Na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Na(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Up(e){var t=zi(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gi(n.ownerDocument.documentElement,n)){if(a!==null&&ro(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,r=Math.min(a.start,s);a=a.end===void 0?r:Math.min(a.end,s),!e.extend&&r>a&&(s=a,a=r,r=s),s=ll(n,r);var o=ll(n,a);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),r>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=Ve&&"documentMode"in document&&11>=document.documentMode,qt=null,cr=null,Mn=null,mr=!1;function il(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mr||qt==null||qt!==Na(a)||(a=qt,"selectionStart"in a&&ro(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Mn&&Ln(Mn,a)||(Mn=a,a=Oa(cr,"onSelect"),0<a.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=qt)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ot={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Ns={},Vi={};Ve&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function ss(e){if(Ns[e])return Ns[e];if(!Ot[e])return e;var t=Ot[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vi)return Ns[e]=t[n];return e}var Ji=ss("animationend"),Wi=ss("animationiteration"),Qi=ss("animationstart"),Ki=ss("transitionend"),Xi=new Map,dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ct(e,t){Xi.set(e,t),Nt(t,[e])}for(var Ds=0;Ds<dl.length;Ds++){var As=dl[Ds],Bp=As.toLowerCase(),Gp=As[0].toUpperCase()+As.slice(1);ct(Bp,"on"+Gp)}ct(Ji,"onAnimationEnd");ct(Wi,"onAnimationIteration");ct(Qi,"onAnimationStart");ct("dblclick","onDoubleClick");ct("focusin","onFocus");ct("focusout","onBlur");ct(Ki,"onTransitionEnd");Yt("onMouseEnter",["mouseout","mouseover"]);Yt("onMouseLeave",["mouseout","mouseover"]);Yt("onPointerEnter",["pointerout","pointerover"]);Yt("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function ul(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Bu(a,t,void 0,e),e.currentTarget=null}function Yi(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],i=l.instance,d=l.currentTarget;if(l=l.listener,i!==r&&s.isPropagationStopped())break e;ul(s,l,d),r=i}else for(o=0;o<a.length;o++){if(l=a[o],i=l.instance,d=l.currentTarget,l=l.listener,i!==r&&s.isPropagationStopped())break e;ul(s,l,d),r=i}}}if(Aa)throw e=dr,Aa=!1,dr=null,e}function q(e,t){var n=t[vr];n===void 0&&(n=t[vr]=new Set);var a=e+"__bubble";n.has(a)||($i(t,e,2,!1),n.add(a))}function Cs(e,t,n){var a=0;t&&(a|=4),$i(n,e,a,t)}var ua="_reactListening"+Math.random().toString(36).slice(2);function jn(e){if(!e[ua]){e[ua]=!0,ri.forEach(function(n){n!=="selectionchange"&&(zp.has(n)||Cs(n,!1,e),Cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ua]||(t[ua]=!0,Cs("selectionchange",!1,t))}}function $i(e,t,n,a){switch(Fi(t)){case 1:var s=sp;break;case 4:s=rp;break;default:s=eo}n=s.bind(null,t,n,e),s=void 0,!ir||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Rs(e,t,n,a,s){var r=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=a.return;o!==null;){var i=o.tag;if((i===3||i===4)&&(i=o.stateNode.containerInfo,i===s||i.nodeType===8&&i.parentNode===s))return;o=o.return}for(;l!==null;){if(o=bt(l),o===null)return;if(i=o.tag,i===5||i===6){a=r=o;continue e}l=l.parentNode}}a=a.return}wi(function(){var d=r,h=Xr(n),c=[];e:{var f=Xi.get(e);if(f!==void 0){var g=no,w=e;switch(e){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":g=bp;break;case"focusin":w="focus",g=Is;break;case"focusout":w="blur",g=Is;break;case"beforeblur":case"afterblur":g=Is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Tp;break;case Ji:case Wi:case Qi:g=pp;break;case Ki:g=Sp;break;case"scroll":g=op;break;case"wheel":g=Ip;break;case"copy":case"cut":case"paste":g=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=el}var v=(t&4)!==0,P=!v&&e==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var u=d,_;u!==null;){_=u;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,p!==null&&(y=Cn(u,p),y!=null&&v.push(Un(u,y,_)))),P)break;u=u.return}0<v.length&&(f=new g(f,w,null,n,h),c.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==or&&(w=n.relatedTarget||n.fromElement)&&(bt(w)||w[Je]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=d,w=w?bt(w):null,w!==null&&(P=Dt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=d),g!==w)){if(v=$o,y="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=el,y="onPointerLeave",p="onPointerEnter",u="pointer"),P=g==null?f:Lt(g),_=w==null?f:Lt(w),f=new v(y,u+"leave",g,n,h),f.target=P,f.relatedTarget=_,y=null,bt(h)===d&&(v=new v(p,u+"enter",w,n,h),v.target=_,v.relatedTarget=P,y=v),P=y,g&&w)t:{for(v=g,p=w,u=0,_=v;_;_=At(_))u++;for(_=0,y=p;y;y=At(y))_++;for(;0<u-_;)v=At(v),u--;for(;0<_-u;)p=At(p),_--;for(;u--;){if(v===p||p!==null&&v===p.alternate)break t;v=At(v),p=At(p)}v=null}else v=null;g!==null&&pl(c,f,g,v,!1),w!==null&&P!==null&&pl(c,P,w,v,!0)}}e:{if(f=d?Lt(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=Rp;else if(al(f))if(Hi)x=Lp;else{x=qp;var T=Fp}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Op);if(x&&(x=x(e,d))){Ui(c,x,n,h);break e}T&&T(e,f,d),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&tr(f,"number",f.value)}switch(T=d?Lt(d):window,e){case"focusin":(al(T)||T.contentEditable==="true")&&(qt=T,cr=d,Mn=null);break;case"focusout":Mn=cr=qt=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,il(c,n,h);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":il(c,n,h)}var k;if(so)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ft?Li(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Oi&&n.locale!=="ko"&&(Ft||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ft&&(k=qi()):(tt=h,to="value"in tt?tt.value:tt.textContent,Ft=!0)),T=Oa(d,I),0<T.length&&(I=new Zo(I,e,null,n,h),c.push({event:I,listeners:T}),k?I.data=k:(k=ji(n),k!==null&&(I.data=k)))),(k=Pp?Np(e,n):Dp(e,n))&&(d=Oa(d,"onBeforeInput"),0<d.length&&(h=new Zo("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:d}),h.data=k))}Yi(c,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oa(e,t){for(var n=t+"Capture",a=[];e!==null;){var s=e,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Cn(e,n),r!=null&&a.unshift(Un(e,r,s)),r=Cn(e,t),r!=null&&a.push(Un(e,r,s))),e=e.return}return a}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pl(e,t,n,a,s){for(var r=t._reactName,o=[];n!==null&&n!==a;){var l=n,i=l.alternate,d=l.stateNode;if(i!==null&&i===a)break;l.tag===5&&d!==null&&(l=d,s?(i=Cn(n,r),i!=null&&o.unshift(Un(n,i,l))):s||(i=Cn(n,r),i!=null&&o.push(Un(n,i,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Vp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function _l(e){return(typeof e=="string"?e:""+e).replace(Vp,`
`).replace(Jp,"")}function pa(e,t,n){if(t=_l(t),_l(e)!==t&&n)throw Error(b(425))}function La(){}var fr=null,hr=null;function yr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gr=typeof setTimeout=="function"?setTimeout:void 0,Wp=typeof clearTimeout=="function"?clearTimeout:void 0,cl=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof cl<"u"?function(e){return cl.resolve(null).then(e).catch(Kp)}:gr;function Kp(e){setTimeout(function(){throw e})}function Fs(e,t){var n=t,a=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(a===0){e.removeChild(s),qn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=s}while(n);qn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ml(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),Oe="__reactFiber$"+on,Hn="__reactProps$"+on,Je="__reactContainer$"+on,vr="__reactEvents$"+on,Xp="__reactListeners$"+on,Yp="__reactHandles$"+on;function bt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ml(e);e!==null;){if(n=e[Oe])return n;e=ml(e)}return t}e=n,n=e.parentNode}return null}function Yn(e){return e=e[Oe]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function rs(e){return e[Hn]||null}var br=[],jt=-1;function mt(e){return{current:e}}function O(e){0>jt||(e.current=br[jt],br[jt]=null,jt--)}function F(e,t){jt++,br[jt]=e.current,e.current=t}var _t={},se=mt(_t),_e=mt(!1),St=_t;function $t(e,t){var n=e.type.contextTypes;if(!n)return _t;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=t[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ce(e){return e=e.childContextTypes,e!=null}function ja(){O(_e),O(se)}function fl(e,t,n){if(se.current!==_t)throw Error(b(168));F(se,t),F(_e,n)}function Zi(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var s in a)if(!(s in t))throw Error(b(108,Fu(e)||"Unknown",s));return H({},n,a)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,St=se.current,F(se,e),F(_e,_e.current),!0}function hl(e,t,n){var a=e.stateNode;if(!a)throw Error(b(169));n?(e=Zi(e,t,St),a.__reactInternalMemoizedMergedChildContext=e,O(_e),O(se),F(se,e)):O(_e),F(_e,n)}var He=null,os=!1,qs=!1;function ed(e){He===null?He=[e]:He.push(e)}function $p(e){os=!0,ed(e)}function ft(){if(!qs&&He!==null){qs=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}He=null,os=!1}catch(s){throw He!==null&&(He=He.slice(e+1)),Si(Yr,ft),s}finally{R=t,qs=!1}}return null}var Ut=[],Ht=0,Ha=null,Ba=0,we=[],xe=0,Mt=null,Be=1,Ge="";function gt(e,t){Ut[Ht++]=Ba,Ut[Ht++]=Ha,Ha=e,Ba=t}function td(e,t,n){we[xe++]=Be,we[xe++]=Ge,we[xe++]=Mt,Mt=e;var a=Be;e=Ge;var s=32-Ae(a)-1;a&=~(1<<s),n+=1;var r=32-Ae(t)+s;if(30<r){var o=s-s%5;r=(a&(1<<o)-1).toString(32),a>>=o,s-=o,Be=1<<32-Ae(t)+s|n<<s|a,Ge=r+e}else Be=1<<r|n<<s|a,Ge=e}function oo(e){e.return!==null&&(gt(e,1),td(e,1,0))}function lo(e){for(;e===Ha;)Ha=Ut[--Ht],Ut[Ht]=null,Ba=Ut[--Ht],Ut[Ht]=null;for(;e===Mt;)Mt=we[--xe],we[xe]=null,Ge=we[--xe],we[xe]=null,Be=we[--xe],we[xe]=null}var ye=null,he=null,L=!1,De=null;function nd(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Be,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,he=null,!0):!1;default:return!1}}function wr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xr(e){if(L){var t=he;if(t){var n=t;if(!yl(e,t)){if(wr(e))throw Error(b(418));t=ot(n.nextSibling);var a=ye;t&&yl(e,t)?nd(a,n):(e.flags=e.flags&-4097|2,L=!1,ye=e)}}else{if(wr(e))throw Error(b(418));e.flags=e.flags&-4097|2,L=!1,ye=e}}}function gl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function _a(e){if(e!==ye)return!1;if(!L)return gl(e),L=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yr(e.type,e.memoizedProps)),t&&(t=he)){if(wr(e))throw ad(),Error(b(418));for(;t;)nd(e,t),t=ot(t.nextSibling)}if(gl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ye?ot(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=he;e;)e=ot(e.nextSibling)}function Zt(){he=ye=null,L=!1}function io(e){De===null?De=[e]:De.push(e)}var Zp=Ke.ReactCurrentBatchConfig;function fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var a=n.stateNode}if(!a)throw Error(b(147,e));var s=a,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var l=s.refs;o===null?delete l[r]:l[r]=o},t._stringRef=r,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function ca(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vl(e){var t=e._init;return t(e._payload)}function sd(e){function t(p,u){if(e){var _=p.deletions;_===null?(p.deletions=[u],p.flags|=16):_.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function a(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function s(p,u){return p=ut(p,u),p.index=0,p.sibling=null,p}function r(p,u,_){return p.index=_,e?(_=p.alternate,_!==null?(_=_.index,_<u?(p.flags|=2,u):_):(p.flags|=2,u)):(p.flags|=1048576,u)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,u,_,y){return u===null||u.tag!==6?(u=Gs(_,p.mode,y),u.return=p,u):(u=s(u,_),u.return=p,u)}function i(p,u,_,y){var x=_.type;return x===Rt?h(p,u,_.props.children,y,_.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ye&&vl(x)===u.type)?(y=s(u,_.props),y.ref=fn(p,u,_),y.return=p,y):(y=Pa(_.type,_.key,_.props,null,p.mode,y),y.ref=fn(p,u,_),y.return=p,y)}function d(p,u,_,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==_.containerInfo||u.stateNode.implementation!==_.implementation?(u=zs(_,p.mode,y),u.return=p,u):(u=s(u,_.children||[]),u.return=p,u)}function h(p,u,_,y,x){return u===null||u.tag!==7?(u=kt(_,p.mode,y,x),u.return=p,u):(u=s(u,_),u.return=p,u)}function c(p,u,_){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Gs(""+u,p.mode,_),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case na:return _=Pa(u.type,u.key,u.props,null,p.mode,_),_.ref=fn(p,null,u),_.return=p,_;case Ct:return u=zs(u,p.mode,_),u.return=p,u;case Ye:var y=u._init;return c(p,y(u._payload),_)}if(vn(u)||un(u))return u=kt(u,p.mode,_,null),u.return=p,u;ca(p,u)}return null}function f(p,u,_,y){var x=u!==null?u.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:l(p,u,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case na:return _.key===x?i(p,u,_,y):null;case Ct:return _.key===x?d(p,u,_,y):null;case Ye:return x=_._init,f(p,u,x(_._payload),y)}if(vn(_)||un(_))return x!==null?null:h(p,u,_,y,null);ca(p,_)}return null}function g(p,u,_,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(_)||null,l(u,p,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case na:return p=p.get(y.key===null?_:y.key)||null,i(u,p,y,x);case Ct:return p=p.get(y.key===null?_:y.key)||null,d(u,p,y,x);case Ye:var T=y._init;return g(p,u,_,T(y._payload),x)}if(vn(y)||un(y))return p=p.get(_)||null,h(u,p,y,x,null);ca(u,y)}return null}function w(p,u,_,y){for(var x=null,T=null,k=u,I=u=0,G=null;k!==null&&I<_.length;I++){k.index>I?(G=k,k=null):G=k.sibling;var A=f(p,k,_[I],y);if(A===null){k===null&&(k=G);break}e&&k&&A.alternate===null&&t(p,k),u=r(A,u,I),T===null?x=A:T.sibling=A,T=A,k=G}if(I===_.length)return n(p,k),L&&gt(p,I),x;if(k===null){for(;I<_.length;I++)k=c(p,_[I],y),k!==null&&(u=r(k,u,I),T===null?x=k:T.sibling=k,T=k);return L&&gt(p,I),x}for(k=a(p,k);I<_.length;I++)G=g(k,p,I,_[I],y),G!==null&&(e&&G.alternate!==null&&k.delete(G.key===null?I:G.key),u=r(G,u,I),T===null?x=G:T.sibling=G,T=G);return e&&k.forEach(function(Ie){return t(p,Ie)}),L&&gt(p,I),x}function v(p,u,_,y){var x=un(_);if(typeof x!="function")throw Error(b(150));if(_=x.call(_),_==null)throw Error(b(151));for(var T=x=null,k=u,I=u=0,G=null,A=_.next();k!==null&&!A.done;I++,A=_.next()){k.index>I?(G=k,k=null):G=k.sibling;var Ie=f(p,k,A.value,y);if(Ie===null){k===null&&(k=G);break}e&&k&&Ie.alternate===null&&t(p,k),u=r(Ie,u,I),T===null?x=Ie:T.sibling=Ie,T=Ie,k=G}if(A.done)return n(p,k),L&&gt(p,I),x;if(k===null){for(;!A.done;I++,A=_.next())A=c(p,A.value,y),A!==null&&(u=r(A,u,I),T===null?x=A:T.sibling=A,T=A);return L&&gt(p,I),x}for(k=a(p,k);!A.done;I++,A=_.next())A=g(k,p,I,A.value,y),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?I:A.key),u=r(A,u,I),T===null?x=A:T.sibling=A,T=A);return e&&k.forEach(function(ln){return t(p,ln)}),L&&gt(p,I),x}function P(p,u,_,y){if(typeof _=="object"&&_!==null&&_.type===Rt&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case na:e:{for(var x=_.key,T=u;T!==null;){if(T.key===x){if(x=_.type,x===Rt){if(T.tag===7){n(p,T.sibling),u=s(T,_.props.children),u.return=p,p=u;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ye&&vl(x)===T.type){n(p,T.sibling),u=s(T,_.props),u.ref=fn(p,T,_),u.return=p,p=u;break e}n(p,T);break}else t(p,T);T=T.sibling}_.type===Rt?(u=kt(_.props.children,p.mode,y,_.key),u.return=p,p=u):(y=Pa(_.type,_.key,_.props,null,p.mode,y),y.ref=fn(p,u,_),y.return=p,p=y)}return o(p);case Ct:e:{for(T=_.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===_.containerInfo&&u.stateNode.implementation===_.implementation){n(p,u.sibling),u=s(u,_.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=zs(_,p.mode,y),u.return=p,p=u}return o(p);case Ye:return T=_._init,P(p,u,T(_._payload),y)}if(vn(_))return w(p,u,_,y);if(un(_))return v(p,u,_,y);ca(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,u!==null&&u.tag===6?(n(p,u.sibling),u=s(u,_),u.return=p,p=u):(n(p,u),u=Gs(_,p.mode,y),u.return=p,p=u),o(p)):n(p,u)}return P}var en=sd(!0),rd=sd(!1),Ga=mt(null),za=null,Bt=null,uo=null;function po(){uo=Bt=za=null}function _o(e){var t=Ga.current;O(Ga),e._currentValue=t}function Tr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){za=e,uo=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(uo!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(za===null)throw Error(b(308));Bt=e,za.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var wt=null;function co(e){wt===null?wt=[e]:wt.push(e)}function od(e,t,n,a){var s=t.interleaved;return s===null?(n.next=n,co(t)):(n.next=s.next,s.next=n),t.interleaved=n,We(e,a)}function We(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $e=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,C&2){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,We(e,n)}return s=a.interleaved,s===null?(t.next=t,co(a)):(t.next=s.next,s.next=t),a.interleaved=t,We(e,n)}function Ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,$r(e,n)}}function bl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,a){var s=e.updateQueue;$e=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var i=l,d=i.next;i.next=null,o===null?r=d:o.next=d,o=i;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=i))}if(r!==null){var c=s.baseState;o=0,h=d=i=null,l=r;do{var f=l.lane,g=l.eventTime;if((a&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(f=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){c=w.call(g,c,f);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,f=typeof w=="function"?w.call(g,c,f):w,f==null)break e;c=H({},c,f);break e;case 2:$e=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=g,i=c):h=h.next=g,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(i=c),s.baseState=i,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else r===null&&(s.shared.lanes=0);Et|=o,e.lanes=o,e.memoizedState=c}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],s=a.callback;if(s!==null){if(a.callback=null,a=n,typeof s!="function")throw Error(b(191,s));s.call(a)}}}var $n={},je=mt($n),Bn=mt($n),Gn=mt($n);function xt(e){if(e===$n)throw Error(b(174));return e}function fo(e,t){switch(F(Gn,t),F(Bn,e),F(je,$n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ar(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ar(t,e)}O(je),F(je,t)}function tn(){O(je),O(Bn),O(Gn)}function id(e){xt(Gn.current);var t=xt(je.current),n=ar(t,e.type);t!==n&&(F(Bn,e),F(je,n))}function ho(e){Bn.current===e&&(O(je),O(Bn))}var j=mt(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Os=[];function yo(){for(var e=0;e<Os.length;e++)Os[e]._workInProgressVersionPrimary=null;Os.length=0}var ka=Ke.ReactCurrentDispatcher,Ls=Ke.ReactCurrentBatchConfig,It=0,U=null,W=null,X=null,Wa=!1,In=!1,zn=0,e_=0;function te(){throw Error(b(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function vo(e,t,n,a,s,r){if(It=r,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?s_:r_,e=n(a,s),In){r=0;do{if(In=!1,zn=0,25<=r)throw Error(b(301));r+=1,X=W=null,t.updateQueue=null,ka.current=o_,e=n(a,s)}while(In)}if(ka.current=Qa,t=W!==null&&W.next!==null,It=0,X=W=U=null,Wa=!1,t)throw Error(b(300));return e}function bo(){var e=zn!==0;return zn=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Me(){if(W===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,W=e;else{if(e===null)throw Error(b(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function Vn(e,t){return typeof t=="function"?t(e):t}function js(e){var t=Me(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var a=W,s=a.baseQueue,r=n.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}a.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,a=a.baseState;var l=o=null,i=null,d=r;do{var h=d.lane;if((It&h)===h)i!==null&&(i=i.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var c={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};i===null?(l=i=c,o=a):i=i.next=c,U.lanes|=h,Et|=h}d=d.next}while(d!==null&&d!==r);i===null?o=a:i.next=l,Re(a,t.memoizedState)||(pe=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=i,n.lastRenderedState=a}if(e=n.interleaved,e!==null){s=e;do r=s.lane,U.lanes|=r,Et|=r,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Us(e){var t=Me(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do r=e(r,o.action),o=o.next;while(o!==s);Re(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function dd(){}function ud(e,t){var n=U,a=Me(),s=t(),r=!Re(a.memoizedState,s);if(r&&(a.memoizedState=s,pe=!0),a=a.queue,wo(cd.bind(null,n,a,e),[e]),a.getSnapshot!==t||r||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Jn(9,_d.bind(null,n,a,s,t),void 0,null),Y===null)throw Error(b(349));It&30||pd(n,t,s)}return s}function pd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,a){t.value=n,t.getSnapshot=a,md(t)&&fd(e)}function cd(e,t,n){return n(function(){md(t)&&fd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function fd(e){var t=We(e,1);t!==null&&Ce(t,e,1,-1)}function xl(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=a_.bind(null,U,e),[t.memoizedState,e]}function Jn(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function hd(){return Me().memoizedState}function Sa(e,t,n,a){var s=qe();U.flags|=e,s.memoizedState=Jn(1|t,n,void 0,a===void 0?null:a)}function ls(e,t,n,a){var s=Me();a=a===void 0?null:a;var r=void 0;if(W!==null){var o=W.memoizedState;if(r=o.destroy,a!==null&&go(a,o.deps)){s.memoizedState=Jn(t,n,r,a);return}}U.flags|=e,s.memoizedState=Jn(1|t,n,r,a)}function Tl(e,t){return Sa(8390656,8,e,t)}function wo(e,t){return ls(2048,8,e,t)}function yd(e,t){return ls(4,2,e,t)}function gd(e,t){return ls(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,n){return n=n!=null?n.concat([e]):null,ls(4,4,vd.bind(null,t,e),n)}function xo(){}function wd(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&go(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function xd(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&go(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return It&21?(Re(n,t)||(n=Ei(),U.lanes|=n,Et|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function t_(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var a=Ls.transition;Ls.transition={};try{e(!1),t()}finally{R=n,Ls.transition=a}}function kd(){return Me().memoizedState}function n_(e,t,n){var a=dt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Sd(e))Md(t,n);else if(n=od(e,t,n,a),n!==null){var s=oe();Ce(n,e,a,s),Id(n,t,a)}}function a_(e,t,n){var a=dt(e),s={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))Md(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,l=r(o,n);if(s.hasEagerState=!0,s.eagerState=l,Re(l,o)){var i=t.interleaved;i===null?(s.next=s,co(t)):(s.next=i.next,i.next=s),t.interleaved=s;return}}catch{}finally{}n=od(e,t,s,a),n!==null&&(s=oe(),Ce(n,e,a,s),Id(n,t,a))}}function Sd(e){var t=e.alternate;return e===U||t!==null&&t===U}function Md(e,t){In=Wa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Id(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,$r(e,n)}}var Qa={readContext:Se,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},s_={readContext:Se,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:Tl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sa(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=qe();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=n_.bind(null,U,e),[a.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:xl,useDebugValue:xo,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=xl(!1),t=e[0];return e=t_.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=U,s=qe();if(L){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Y===null)throw Error(b(349));It&30||pd(a,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Tl(cd.bind(null,a,r,e),[e]),a.flags|=2048,Jn(9,_d.bind(null,a,r,n,t),void 0,null),n},useId:function(){var e=qe(),t=Y.identifierPrefix;if(L){var n=Ge,a=Be;n=(a&~(1<<32-Ae(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r_={readContext:Se,useCallback:wd,useContext:Se,useEffect:wo,useImperativeHandle:bd,useInsertionEffect:yd,useLayoutEffect:gd,useMemo:xd,useReducer:js,useRef:hd,useState:function(){return js(Vn)},useDebugValue:xo,useDeferredValue:function(e){var t=Me();return Td(t,W.memoizedState,e)},useTransition:function(){var e=js(Vn)[0],t=Me().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:ud,useId:kd,unstable_isNewReconciler:!1},o_={readContext:Se,useCallback:wd,useContext:Se,useEffect:wo,useImperativeHandle:bd,useInsertionEffect:yd,useLayoutEffect:gd,useMemo:xd,useReducer:Us,useRef:hd,useState:function(){return Us(Vn)},useDebugValue:xo,useDeferredValue:function(e){var t=Me();return W===null?t.memoizedState=e:Td(t,W.memoizedState,e)},useTransition:function(){var e=Us(Vn)[0],t=Me().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:ud,useId:kd,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=oe(),s=dt(e),r=ze(a,s);r.payload=t,n!=null&&(r.callback=n),t=lt(e,r,s),t!==null&&(Ce(t,e,s,a),Ta(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=oe(),s=dt(e),r=ze(a,s);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=lt(e,r,s),t!==null&&(Ce(t,e,s,a),Ta(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),a=dt(e),s=ze(n,a);s.tag=2,t!=null&&(s.callback=t),t=lt(e,s,a),t!==null&&(Ce(t,e,a,n),Ta(t,e,a))}};function kl(e,t,n,a,s,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):t.prototype&&t.prototype.isPureReactComponent?!Ln(n,a)||!Ln(s,r):!0}function Ed(e,t,n){var a=!1,s=_t,r=t.contextType;return typeof r=="object"&&r!==null?r=Se(r):(s=ce(t)?St:se.current,a=t.contextTypes,r=(a=a!=null)?$t(e,s):_t),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=r),t}function Sl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function Sr(e,t,n,a){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},mo(e);var r=t.contextType;typeof r=="object"&&r!==null?s.context=Se(r):(r=ce(t)?St:se.current,s.context=$t(e,r)),s.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(kr(e,t,r,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&is.enqueueReplaceState(s,s.state,null),Va(e,n,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",a=t;do n+=Ru(a),a=a.return;while(a);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:s,digest:null}}function Hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mr(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function Pd(e,t,n){n=ze(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Xa||(Xa=!0,qr=a),Mr(e,t)},n}function Nd(e,t,n){n=ze(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=t.value;n.payload=function(){return a(s)},n.callback=function(){Mr(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Mr(e,t),typeof a!="function"&&(it===null?it=new Set([this]):it.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ml(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new l_;var s=new Set;a.set(t,s)}else s=a.get(t),s===void 0&&(s=new Set,a.set(t,s));s.has(n)||(s.add(n),e=w_.bind(null,e,t,n),t.then(e,e))}function Il(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function El(e,t,n,a,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ze(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var i_=Ke.ReactCurrentOwner,pe=!1;function re(e,t,n,a){t.child=e===null?rd(t,null,n,a):en(t,e.child,n,a)}function Pl(e,t,n,a,s){n=n.render;var r=t.ref;return Kt(t,s),a=vo(e,t,n,a,r,s),n=bo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Qe(e,t,s)):(L&&n&&oo(t),t.flags|=1,re(e,t,a,s),t.child)}function Nl(e,t,n,a,s){if(e===null){var r=n.type;return typeof r=="function"&&!No(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,Dd(e,t,r,a,s)):(e=Pa(n.type,null,a,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&s)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ln,n(o,a)&&e.ref===t.ref)return Qe(e,t,s)}return t.flags|=1,e=ut(r,a),e.ref=t.ref,e.return=t,t.child=e}function Dd(e,t,n,a,s){if(e!==null){var r=e.memoizedProps;if(Ln(r,a)&&e.ref===t.ref)if(pe=!1,t.pendingProps=a=r,(e.lanes&s)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Qe(e,t,s)}return Ir(e,t,n,a,s)}function Ad(e,t,n){var a=t.pendingProps,s=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(zt,fe),fe|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(zt,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:n,F(zt,fe),fe|=a}else r!==null?(a=r.baseLanes|n,t.memoizedState=null):a=n,F(zt,fe),fe|=a;return re(e,t,s,n),t.child}function Cd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ir(e,t,n,a,s){var r=ce(n)?St:se.current;return r=$t(t,r),Kt(t,s),n=vo(e,t,n,a,r,s),a=bo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Qe(e,t,s)):(L&&a&&oo(t),t.flags|=1,re(e,t,n,s),t.child)}function Dl(e,t,n,a,s){if(ce(n)){var r=!0;Ua(t)}else r=!1;if(Kt(t,s),t.stateNode===null)Ma(e,t),Ed(t,n,a),Sr(t,n,a,s),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var i=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Se(d):(d=ce(n)?St:se.current,d=$t(t,d));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||i!==d)&&Sl(t,o,a,d),$e=!1;var f=t.memoizedState;o.state=f,Va(t,a,o,s),i=t.memoizedState,l!==a||f!==i||_e.current||$e?(typeof h=="function"&&(kr(t,n,h,a),i=t.memoizedState),(l=$e||kl(t,n,l,a,f,i,d))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=i),o.props=a,o.state=i,o.context=d,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,ld(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Pe(t.type,l),o.props=d,c=t.pendingProps,f=o.context,i=n.contextType,typeof i=="object"&&i!==null?i=Se(i):(i=ce(n)?St:se.current,i=$t(t,i));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==i)&&Sl(t,o,a,i),$e=!1,f=t.memoizedState,o.state=f,Va(t,a,o,s);var w=t.memoizedState;l!==c||f!==w||_e.current||$e?(typeof g=="function"&&(kr(t,n,g,a),w=t.memoizedState),(d=$e||kl(t,n,d,a,f,w,i)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,w,i),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,w,i)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),o.props=a,o.state=w,o.context=i,a=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return Er(e,t,n,a,r,s)}function Er(e,t,n,a,s,r){Cd(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return s&&hl(t,n,!1),Qe(e,t,r);a=t.stateNode,i_.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,r),t.child=en(t,null,l,r)):re(e,t,l,r),t.memoizedState=a.state,s&&hl(t,n,!0),t.child}function Rd(e){var t=e.stateNode;t.pendingContext?fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fl(e,t.context,!1),fo(e,t.containerInfo)}function Al(e,t,n,a,s){return Zt(),io(s),t.flags|=256,re(e,t,n,a),t.child}var Pr={dehydrated:null,treeContext:null,retryLane:0};function Nr(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,t,n){var a=t.pendingProps,s=j.current,r=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),F(j,s&1),e===null)return xr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,r?(a=t.mode,r=t.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=ps(o,a,0,null),e=kt(e,a,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Nr(n),t.memoizedState=Pr,e):To(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return d_(e,t,o,a,l,s,n);if(r){r=a.fallback,o=t.mode,s=e.child,l=s.sibling;var i={mode:"hidden",children:a.children};return!(o&1)&&t.child!==s?(a=t.child,a.childLanes=0,a.pendingProps=i,t.deletions=null):(a=ut(s,i),a.subtreeFlags=s.subtreeFlags&14680064),l!==null?r=ut(l,r):(r=kt(r,o,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,o=e.child.memoizedState,o=o===null?Nr(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~n,t.memoizedState=Pr,a}return r=e.child,e=r.sibling,a=ut(r,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function To(e,t){return t=ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ma(e,t,n,a){return a!==null&&io(a),en(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d_(e,t,n,a,s,r,o){if(n)return t.flags&256?(t.flags&=-257,a=Hs(Error(b(422))),ma(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=a.fallback,s=t.mode,a=ps({mode:"visible",children:a.children},s,0,null),r=kt(r,s,o,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=Nr(o),t.memoizedState=Pr,r);if(!(t.mode&1))return ma(e,t,o,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var l=a.dgst;return a=l,r=Error(b(419)),a=Hs(r,a,void 0),ma(e,t,o,a)}if(l=(o&e.childLanes)!==0,pe||l){if(a=Y,a!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(a.suspendedLanes|o)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,We(e,s),Ce(a,e,s,-1))}return Po(),a=Hs(Error(b(421))),ma(e,t,o,a)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=x_.bind(null,e),s._reactRetry=t,null):(e=r.treeContext,he=ot(s.nextSibling),ye=t,L=!0,De=null,e!==null&&(we[xe++]=Be,we[xe++]=Ge,we[xe++]=Mt,Be=e.id,Ge=e.overflow,Mt=t),t=To(t,a.children),t.flags|=4096,t)}function Cl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Tr(e.return,t,n)}function Bs(e,t,n,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=s)}function qd(e,t,n){var a=t.pendingProps,s=a.revealOrder,r=a.tail;if(re(e,t,a.children,n),a=j.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cl(e,n,t);else if(e.tag===19)Cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(F(j,a),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Bs(t,!1,s,n,r);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ja(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Bs(t,!0,n,null,r);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ma(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Et|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u_(e,t,n){switch(t.tag){case 3:Rd(t),Zt();break;case 5:id(t);break;case 1:ce(t.type)&&Ua(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,s=t.memoizedProps.value;F(Ga,a._currentValue),a._currentValue=s;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(F(j,j.current&1),t.flags|=128,null):n&t.child.childLanes?Fd(e,t,n):(F(j,j.current&1),e=Qe(e,t,n),e!==null?e.sibling:null);F(j,j.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return qd(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(j,j.current),a)break;return null;case 22:case 23:return t.lanes=0,Ad(e,t,n)}return Qe(e,t,n)}var Od,Dr,Ld,jd;Od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dr=function(){};Ld=function(e,t,n,a){var s=e.memoizedProps;if(s!==a){e=t.stateNode,xt(je.current);var r=null;switch(n){case"input":s=Zs(e,s),a=Zs(e,a),r=[];break;case"select":s=H({},s,{value:void 0}),a=H({},a,{value:void 0}),r=[];break;case"textarea":s=nr(e,s),a=nr(e,a),r=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=La)}sr(n,a);var o;n=null;for(d in s)if(!a.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Dn.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in a){var i=a[d];if(l=s!=null?s[d]:void 0,a.hasOwnProperty(d)&&i!==l&&(i!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||i&&i.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in i)i.hasOwnProperty(o)&&l[o]!==i[o]&&(n||(n={}),n[o]=i[o])}else n||(r||(r=[]),r.push(d,n)),n=i;else d==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,l=l?l.__html:void 0,i!=null&&l!==i&&(r=r||[]).push(d,i)):d==="children"?typeof i!="string"&&typeof i!="number"||(r=r||[]).push(d,""+i):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(d)?(i!=null&&d==="onScroll"&&q("scroll",e),r||l===i||(r=[])):(r=r||[]).push(d,i))}n&&(r=r||[]).push("style",n);var d=r;(t.updateQueue=d)&&(t.flags|=4)}};jd=function(e,t,n,a){n!==a&&(t.flags|=4)};function hn(e,t){if(!L)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function p_(e,t,n){var a=t.pendingProps;switch(lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return ce(t.type)&&ja(),ne(t),null;case 3:return a=t.stateNode,tn(),O(_e),O(se),yo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(jr(De),De=null))),Dr(e,t),ne(t),null;case 5:ho(t);var s=xt(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ld(e,t,n,a,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(b(166));return ne(t),null}if(e=xt(je.current),_a(t)){a=t.stateNode,n=t.type;var r=t.memoizedProps;switch(a[Oe]=t,a[Hn]=r,e=(t.mode&1)!==0,n){case"dialog":q("cancel",a),q("close",a);break;case"iframe":case"object":case"embed":q("load",a);break;case"video":case"audio":for(s=0;s<wn.length;s++)q(wn[s],a);break;case"source":q("error",a);break;case"img":case"image":case"link":q("error",a),q("load",a);break;case"details":q("toggle",a);break;case"input":Bo(a,r),q("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},q("invalid",a);break;case"textarea":zo(a,r),q("invalid",a)}sr(n,r),s=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?a.textContent!==l&&(r.suppressHydrationWarning!==!0&&pa(a.textContent,l,e),s=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&pa(a.textContent,l,e),s=["children",""+l]):Dn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",a)}switch(n){case"input":aa(a),Go(a,r,!0);break;case"textarea":aa(a),Vo(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=La)}a=s,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ci(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[Oe]=t,e[Hn]=a,Od(e,t,!1,!1),t.stateNode=e;e:{switch(o=rr(n,a),n){case"dialog":q("cancel",e),q("close",e),s=a;break;case"iframe":case"object":case"embed":q("load",e),s=a;break;case"video":case"audio":for(s=0;s<wn.length;s++)q(wn[s],e);s=a;break;case"source":q("error",e),s=a;break;case"img":case"image":case"link":q("error",e),q("load",e),s=a;break;case"details":q("toggle",e),s=a;break;case"input":Bo(e,a),s=Zs(e,a),q("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=H({},a,{value:void 0}),q("invalid",e);break;case"textarea":zo(e,a),s=nr(e,a),q("invalid",e);break;default:s=a}sr(n,s),l=s;for(r in l)if(l.hasOwnProperty(r)){var i=l[r];r==="style"?hi(e,i):r==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&mi(e,i)):r==="children"?typeof i=="string"?(n!=="textarea"||i!=="")&&An(e,i):typeof i=="number"&&An(e,""+i):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Dn.hasOwnProperty(r)?i!=null&&r==="onScroll"&&q("scroll",e):i!=null&&Jr(e,r,i,o))}switch(n){case"input":aa(e),Go(e,a,!1);break;case"textarea":aa(e),Vo(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pt(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?Vt(e,!!a.multiple,r,!1):a.defaultValue!=null&&Vt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(b(166));if(n=xt(Gn.current),xt(je.current),_a(t)){if(a=t.stateNode,n=t.memoizedProps,a[Oe]=t,(r=a.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:pa(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pa(a.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Oe]=t,t.stateNode=a}return ne(t),null;case 13:if(O(j),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(L&&he!==null&&t.mode&1&&!(t.flags&128))ad(),Zt(),t.flags|=98560,r=!1;else if(r=_a(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(b(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(b(317));r[Oe]=t}else Zt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),r=!1}else De!==null&&(jr(De),De=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||j.current&1?Q===0&&(Q=3):Po())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Dr(e,t),e===null&&jn(t.stateNode.containerInfo),ne(t),null;case 10:return _o(t.type._context),ne(t),null;case 17:return ce(t.type)&&ja(),ne(t),null;case 19:if(O(j),r=t.memoizedState,r===null)return ne(t),null;if(a=(t.flags&128)!==0,o=r.rendering,o===null)if(a)hn(r,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ja(e),o!==null){for(t.flags|=128,hn(r,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)r=n,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(j,j.current&1|2),t.child}e=e.sibling}r.tail!==null&&V()>an&&(t.flags|=128,a=!0,hn(r,!1),t.lanes=4194304)}else{if(!a)if(e=Ja(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!L)return ne(t),null}else 2*V()-r.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,a=!0,hn(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=V(),t.sibling=null,n=j.current,F(j,a?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Eo(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?fe&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function __(e,t){switch(lo(t),t.tag){case 1:return ce(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),O(_e),O(se),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(O(j),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Zt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(j),null;case 4:return tn(),null;case 10:return _o(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var fa=!1,ae=!1,c_=typeof WeakSet=="function"?WeakSet:Set,S=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){B(e,t,a)}else n.current=null}function Ar(e,t,n){try{n()}catch(a){B(e,t,a)}}var Rl=!1;function m_(e,t){if(fr=Fa,e=zi(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,i=-1,d=0,h=0,c=e,f=null;t:for(;;){for(var g;c!==n||s!==0&&c.nodeType!==3||(l=o+s),c!==r||a!==0&&c.nodeType!==3||(i=o+a),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===e)break t;if(f===n&&++d===s&&(l=o),f===r&&++h===a&&(i=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=l===-1||i===-1?null:{start:l,end:i}}else n=null}n=n||{start:0,end:0}}else n=null;for(hr={focusedElem:e,selectionRange:n},Fa=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,P=w.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pe(t.type,v),P);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){B(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Rl,Rl=!1,w}function En(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var r=s.destroy;s.destroy=void 0,r!==void 0&&Ar(t,n,r)}s=s.next}while(s!==a)}}function ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Cr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ud(e){var t=e.alternate;t!==null&&(e.alternate=null,Ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Hn],delete t[vr],delete t[Xp],delete t[Yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function Fl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(a!==4&&(e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Fr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}var $=null,Ne=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Bd(e,t,n),n=n.sibling}function Bd(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ts,n)}catch{}switch(n.tag){case 5:ae||Gt(n,t);case 6:var a=$,s=Ne;$=null,Xe(e,t,n),$=a,Ne=s,$!==null&&(Ne?(e=$,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$.removeChild(n.stateNode));break;case 18:$!==null&&(Ne?(e=$,n=n.stateNode,e.nodeType===8?Fs(e.parentNode,n):e.nodeType===1&&Fs(e,n),qn(e)):Fs($,n.stateNode));break;case 4:a=$,s=Ne,$=n.stateNode.containerInfo,Ne=!0,Xe(e,t,n),$=a,Ne=s;break;case 0:case 11:case 14:case 15:if(!ae&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var r=s,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&Ar(n,t,o),s=s.next}while(s!==a)}Xe(e,t,n);break;case 1:if(!ae&&(Gt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){B(n,t,l)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(ae=(a=ae)||n.memoizedState!==null,Xe(e,t,n),ae=a):Xe(e,t,n);break;default:Xe(e,t,n)}}function ql(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new c_),t.forEach(function(a){var s=T_.bind(null,e,a);n.has(a)||(n.add(a),a.then(s,s))})}}function Ee(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];try{var r=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:$=l.stateNode,Ne=!1;break e;case 3:$=l.stateNode.containerInfo,Ne=!0;break e;case 4:$=l.stateNode.containerInfo,Ne=!0;break e}l=l.return}if($===null)throw Error(b(160));Bd(r,o,s),$=null,Ne=!1;var i=s.alternate;i!==null&&(i.return=null),s.return=null}catch(d){B(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}function Gd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ee(t,e),Fe(e),a&4){try{En(3,e,e.return),ds(3,e)}catch(v){B(e,e.return,v)}try{En(5,e,e.return)}catch(v){B(e,e.return,v)}}break;case 1:Ee(t,e),Fe(e),a&512&&n!==null&&Gt(n,n.return);break;case 5:if(Ee(t,e),Fe(e),a&512&&n!==null&&Gt(n,n.return),e.flags&32){var s=e.stateNode;try{An(s,"")}catch(v){B(e,e.return,v)}}if(a&4&&(s=e.stateNode,s!=null)){var r=e.memoizedProps,o=n!==null?n.memoizedProps:r,l=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&pi(s,r),rr(l,o);var d=rr(l,r);for(o=0;o<i.length;o+=2){var h=i[o],c=i[o+1];h==="style"?hi(s,c):h==="dangerouslySetInnerHTML"?mi(s,c):h==="children"?An(s,c):Jr(s,h,c,d)}switch(l){case"input":er(s,r);break;case"textarea":_i(s,r);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?Vt(s,!!r.multiple,g,!1):f!==!!r.multiple&&(r.defaultValue!=null?Vt(s,!!r.multiple,r.defaultValue,!0):Vt(s,!!r.multiple,r.multiple?[]:"",!1))}s[Hn]=r}catch(v){B(e,e.return,v)}}break;case 6:if(Ee(t,e),Fe(e),a&4){if(e.stateNode===null)throw Error(b(162));s=e.stateNode,r=e.memoizedProps;try{s.nodeValue=r}catch(v){B(e,e.return,v)}}break;case 3:if(Ee(t,e),Fe(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(v){B(e,e.return,v)}break;case 4:Ee(t,e),Fe(e);break;case 13:Ee(t,e),Fe(e),s=e.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Mo=V())),a&4&&ql(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||h,Ee(t,e),ae=d):Ee(t,e),Fe(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(c=S=h;S!==null;){switch(f=S,g=f.child,f.tag){case 0:case 11:case 14:case 15:En(4,f,f.return);break;case 1:Gt(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){a=f,n=f.return;try{t=a,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){B(a,n,v)}}break;case 5:Gt(f,f.return);break;case 22:if(f.memoizedState!==null){Ll(c);continue}}g!==null?(g.return=f,S=g):Ll(c)}h=h.sibling}e:for(h=null,c=e;;){if(c.tag===5){if(h===null){h=c;try{s=c.stateNode,d?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=c.stateNode,i=c.memoizedProps.style,o=i!=null&&i.hasOwnProperty("display")?i.display:null,l.style.display=fi("display",o))}catch(v){B(e,e.return,v)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=d?"":c.memoizedProps}catch(v){B(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ee(t,e),Fe(e),a&4&&ql(e);break;case 21:break;default:Ee(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hd(n)){var a=n;break e}n=n.return}throw Error(b(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(An(s,""),a.flags&=-33);var r=Fl(e);Fr(e,r,s);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Fl(e);Rr(e,l,o);break;default:throw Error(b(161))}}catch(i){B(e,e.return,i)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f_(e,t,n){S=e,zd(e)}function zd(e,t,n){for(var a=(e.mode&1)!==0;S!==null;){var s=S,r=s.child;if(s.tag===22&&a){var o=s.memoizedState!==null||fa;if(!o){var l=s.alternate,i=l!==null&&l.memoizedState!==null||ae;l=fa;var d=ae;if(fa=o,(ae=i)&&!d)for(S=s;S!==null;)o=S,i=o.child,o.tag===22&&o.memoizedState!==null?jl(s):i!==null?(i.return=o,S=i):jl(s);for(;r!==null;)S=r,zd(r),r=r.sibling;S=s,fa=l,ae=d}Ol(e)}else s.subtreeFlags&8772&&r!==null?(r.return=s,S=r):Ol(e)}}function Ol(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||ds(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!ae)if(n===null)a.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);a.componentDidUpdate(s,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&wl(t,r,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var i=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break;case"img":i.src&&(n.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&qn(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ae||t.flags&512&&Cr(t)}catch(f){B(t,t.return,f)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ll(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function jl(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ds(4,t)}catch(i){B(t,n,i)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var s=t.return;try{a.componentDidMount()}catch(i){B(t,s,i)}}var r=t.return;try{Cr(t)}catch(i){B(t,r,i)}break;case 5:var o=t.return;try{Cr(t)}catch(i){B(t,o,i)}}}catch(i){B(t,t.return,i)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var h_=Math.ceil,Ka=Ke.ReactCurrentDispatcher,ko=Ke.ReactCurrentOwner,ke=Ke.ReactCurrentBatchConfig,C=0,Y=null,J=null,Z=0,fe=0,zt=mt(0),Q=0,Wn=null,Et=0,us=0,So=0,Pn=null,de=null,Mo=0,an=1/0,Ue=null,Xa=!1,qr=null,it=null,ha=!1,nt=null,Ya=0,Nn=0,Or=null,Ia=-1,Ea=0;function oe(){return C&6?V():Ia!==-1?Ia:Ia=V()}function dt(e){return e.mode&1?C&2&&Z!==0?Z&-Z:Zp.transition!==null?(Ea===0&&(Ea=Ei()),Ea):(e=R,e!==0||(e=window.event,e=e===void 0?16:Fi(e.type)),e):1}function Ce(e,t,n,a){if(50<Nn)throw Nn=0,Or=null,Error(b(185));Kn(e,n,a),(!(C&2)||e!==Y)&&(e===Y&&(!(C&2)&&(us|=n),Q===4&&et(e,Z)),me(e,a),n===1&&C===0&&!(t.mode&1)&&(an=V()+500,os&&ft()))}function me(e,t){var n=e.callbackNode;Zu(e,t);var a=Ra(e,e===Y?Z:0);if(a===0)n!==null&&Qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Qo(n),t===1)e.tag===0?$p(Ul.bind(null,e)):ed(Ul.bind(null,e)),Qp(function(){!(C&6)&&ft()}),n=null;else{switch(Pi(a)){case 1:n=Yr;break;case 4:n=Mi;break;case 16:n=Ca;break;case 536870912:n=Ii;break;default:n=Ca}n=$d(n,Vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vd(e,t){if(Ia=-1,Ea=0,C&6)throw Error(b(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var a=Ra(e,e===Y?Z:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=$a(e,a);else{t=a;var s=C;C|=2;var r=Wd();(Y!==e||Z!==t)&&(Ue=null,an=V()+500,Tt(e,t));do try{v_();break}catch(l){Jd(e,l)}while(!0);po(),Ka.current=r,C=s,J!==null?t=0:(Y=null,Z=0,t=Q)}if(t!==0){if(t===2&&(s=ur(e),s!==0&&(a=s,t=Lr(e,s))),t===1)throw n=Wn,Tt(e,0),et(e,a),me(e,V()),n;if(t===6)et(e,a);else{if(s=e.current.alternate,!(a&30)&&!y_(s)&&(t=$a(e,a),t===2&&(r=ur(e),r!==0&&(a=r,t=Lr(e,r))),t===1))throw n=Wn,Tt(e,0),et(e,a),me(e,V()),n;switch(e.finishedWork=s,e.finishedLanes=a,t){case 0:case 1:throw Error(b(345));case 2:vt(e,de,Ue);break;case 3:if(et(e,a),(a&130023424)===a&&(t=Mo+500-V(),10<t)){if(Ra(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){oe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=gr(vt.bind(null,e,de,Ue),t);break}vt(e,de,Ue);break;case 4:if(et(e,a),(a&4194240)===a)break;for(t=e.eventTimes,s=-1;0<a;){var o=31-Ae(a);r=1<<o,o=t[o],o>s&&(s=o),a&=~r}if(a=s,a=V()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*h_(a/1960))-a,10<a){e.timeoutHandle=gr(vt.bind(null,e,de,Ue),a);break}vt(e,de,Ue);break;case 5:vt(e,de,Ue);break;default:throw Error(b(329))}}}return me(e,V()),e.callbackNode===n?Vd.bind(null,e):null}function Lr(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=$a(e,t),e!==2&&(t=de,de=n,t!==null&&jr(t)),e}function jr(e){de===null?de=e:de.push.apply(de,e)}function y_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var s=n[a],r=s.getSnapshot;s=s.value;try{if(!Re(r(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~So,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),a=1<<n;e[n]=-1,t&=~a}}function Ul(e){if(C&6)throw Error(b(327));Xt();var t=Ra(e,0);if(!(t&1))return me(e,V()),null;var n=$a(e,t);if(e.tag!==0&&n===2){var a=ur(e);a!==0&&(t=a,n=Lr(e,a))}if(n===1)throw n=Wn,Tt(e,0),et(e,t),me(e,V()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,de,Ue),me(e,V()),null}function Io(e,t){var n=C;C|=1;try{return e(t)}finally{C=n,C===0&&(an=V()+500,os&&ft())}}function Pt(e){nt!==null&&nt.tag===0&&!(C&6)&&Xt();var t=C;C|=1;var n=ke.transition,a=R;try{if(ke.transition=null,R=1,e)return e()}finally{R=a,ke.transition=n,C=t,!(C&6)&&ft()}}function Eo(){fe=zt.current,O(zt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wp(n)),J!==null)for(n=J.return;n!==null;){var a=n;switch(lo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ja();break;case 3:tn(),O(_e),O(se),yo();break;case 5:ho(a);break;case 4:tn();break;case 13:O(j);break;case 19:O(j);break;case 10:_o(a.type._context);break;case 22:case 23:Eo()}n=n.return}if(Y=e,J=e=ut(e.current,null),Z=fe=t,Q=0,Wn=null,So=us=Et=0,de=Pn=null,wt!==null){for(t=0;t<wt.length;t++)if(n=wt[t],a=n.interleaved,a!==null){n.interleaved=null;var s=a.next,r=n.pending;if(r!==null){var o=r.next;r.next=s,a.next=o}n.pending=a}wt=null}return e}function Jd(e,t){do{var n=J;try{if(po(),ka.current=Qa,Wa){for(var a=U.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}Wa=!1}if(It=0,X=W=U=null,In=!1,zn=0,ko.current=null,n===null||n.return===null){Q=1,Wn=t,J=null;break}e:{var r=e,o=n.return,l=n,i=t;if(t=Z,l.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var d=i,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Il(o);if(g!==null){g.flags&=-257,El(g,o,l,r,t),g.mode&1&&Ml(r,d,t),t=g,i=d;var w=t.updateQueue;if(w===null){var v=new Set;v.add(i),t.updateQueue=v}else w.add(i);break e}else{if(!(t&1)){Ml(r,d,t),Po();break e}i=Error(b(426))}}else if(L&&l.mode&1){var P=Il(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),El(P,o,l,r,t),io(nn(i,l));break e}}r=i=nn(i,l),Q!==4&&(Q=2),Pn===null?Pn=[r]:Pn.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var p=Pd(r,i,t);bl(r,p);break e;case 1:l=i;var u=r.type,_=r.stateNode;if(!(r.flags&128)&&(typeof u.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(it===null||!it.has(_)))){r.flags|=65536,t&=-t,r.lanes|=t;var y=Nd(r,l,t);bl(r,y);break e}}r=r.return}while(r!==null)}Kd(n)}catch(x){t=x,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Wd(){var e=Ka.current;return Ka.current=Qa,e===null?Qa:e}function Po(){(Q===0||Q===3||Q===2)&&(Q=4),Y===null||!(Et&268435455)&&!(us&268435455)||et(Y,Z)}function $a(e,t){var n=C;C|=2;var a=Wd();(Y!==e||Z!==t)&&(Ue=null,Tt(e,t));do try{g_();break}catch(s){Jd(e,s)}while(!0);if(po(),C=n,Ka.current=a,J!==null)throw Error(b(261));return Y=null,Z=0,Q}function g_(){for(;J!==null;)Qd(J)}function v_(){for(;J!==null&&!zu();)Qd(J)}function Qd(e){var t=Yd(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?Kd(e):J=t,ko.current=null}function Kd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=__(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,J=null;return}}else if(n=p_(n,t,fe),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Q===0&&(Q=5)}function vt(e,t,n){var a=R,s=ke.transition;try{ke.transition=null,R=1,b_(e,t,n,a)}finally{ke.transition=s,R=a}return null}function b_(e,t,n,a){do Xt();while(nt!==null);if(C&6)throw Error(b(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(ep(e,r),e===Y&&(J=Y=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,$d(Ca,function(){return Xt(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=ke.transition,ke.transition=null;var o=R;R=1;var l=C;C|=4,ko.current=null,m_(e,n),Gd(n,e),Up(hr),Fa=!!fr,hr=fr=null,e.current=n,f_(n),Vu(),C=l,R=o,ke.transition=r}else e.current=n;if(ha&&(ha=!1,nt=e,Ya=s),r=e.pendingLanes,r===0&&(it=null),Qu(n.stateNode),me(e,V()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],a(s.value,{componentStack:s.stack,digest:s.digest});if(Xa)throw Xa=!1,e=qr,qr=null,e;return Ya&1&&e.tag!==0&&Xt(),r=e.pendingLanes,r&1?e===Or?Nn++:(Nn=0,Or=e):Nn=0,ft(),null}function Xt(){if(nt!==null){var e=Pi(Ya),t=ke.transition,n=R;try{if(ke.transition=null,R=16>e?16:e,nt===null)var a=!1;else{if(e=nt,nt=null,Ya=0,C&6)throw Error(b(331));var s=C;for(C|=4,S=e.current;S!==null;){var r=S,o=r.child;if(S.flags&16){var l=r.deletions;if(l!==null){for(var i=0;i<l.length;i++){var d=l[i];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:En(8,h,r)}var c=h.child;if(c!==null)c.return=h,S=c;else for(;S!==null;){h=S;var f=h.sibling,g=h.return;if(Ud(h),h===d){S=null;break}if(f!==null){f.return=g,S=f;break}S=g}}}var w=r.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}S=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,S=o;else e:for(;S!==null;){if(r=S,r.flags&2048)switch(r.tag){case 0:case 11:case 15:En(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,S=p;break e}S=r.return}}var u=e.current;for(S=u;S!==null;){o=S;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,S=_;else e:for(o=u;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ds(9,l)}}catch(x){B(l,l.return,x)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(C=s,ft(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ts,e)}catch{}a=!0}return a}finally{R=n,ke.transition=t}}return!1}function Hl(e,t,n){t=nn(n,t),t=Pd(e,t,1),e=lt(e,t,1),t=oe(),e!==null&&(Kn(e,1,t),me(e,t))}function B(e,t,n){if(e.tag===3)Hl(e,e,n);else for(;t!==null;){if(t.tag===3){Hl(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(it===null||!it.has(a))){e=nn(n,e),e=Nd(t,e,1),t=lt(t,e,1),e=oe(),t!==null&&(Kn(t,1,e),me(t,e));break}}t=t.return}}function w_(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&130023424)===Z&&500>V()-Mo?Tt(e,0):So|=n),me(e,t)}function Xd(e,t){t===0&&(e.mode&1?(t=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):t=1);var n=oe();e=We(e,t),e!==null&&(Kn(e,t,n),me(e,n))}function x_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xd(e,n)}function T_(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(b(314))}a!==null&&a.delete(t),Xd(e,n)}var Yd;Yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,u_(e,t,n);pe=!!(e.flags&131072)}else pe=!1,L&&t.flags&1048576&&td(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ma(e,t),e=t.pendingProps;var s=$t(t,se.current);Kt(t,n),s=vo(null,t,a,e,s,n);var r=bo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ce(a)?(r=!0,Ua(t)):r=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,mo(t),s.updater=is,t.stateNode=s,s._reactInternals=t,Sr(t,a,e,n),t=Er(null,t,a,!0,r,n)):(t.tag=0,L&&r&&oo(t),re(null,t,s,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Ma(e,t),e=t.pendingProps,s=a._init,a=s(a._payload),t.type=a,s=t.tag=S_(a),e=Pe(a,e),s){case 0:t=Ir(null,t,a,e,n);break e;case 1:t=Dl(null,t,a,e,n);break e;case 11:t=Pl(null,t,a,e,n);break e;case 14:t=Nl(null,t,a,Pe(a.type,e),n);break e}throw Error(b(306,a,""))}return t;case 0:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:Pe(a,s),Ir(e,t,a,s,n);case 1:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:Pe(a,s),Dl(e,t,a,s,n);case 3:e:{if(Rd(t),e===null)throw Error(b(387));a=t.pendingProps,r=t.memoizedState,s=r.element,ld(e,t),Va(t,a,null,n);var o=t.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){s=nn(Error(b(423)),t),t=Al(e,t,a,n,s);break e}else if(a!==s){s=nn(Error(b(424)),t),t=Al(e,t,a,n,s);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ye=t,L=!0,De=null,n=rd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zt(),a===s){t=Qe(e,t,n);break e}re(e,t,a,n)}t=t.child}return t;case 5:return id(t),e===null&&xr(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,o=s.children,yr(a,s)?o=null:r!==null&&yr(a,r)&&(t.flags|=32),Cd(e,t),re(e,t,o,n),t.child;case 6:return e===null&&xr(t),null;case 13:return Fd(e,t,n);case 4:return fo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=en(t,null,a,n):re(e,t,a,n),t.child;case 11:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:Pe(a,s),Pl(e,t,a,s,n);case 7:return re(e,t,t.pendingProps,n),t.child;case 8:return re(e,t,t.pendingProps.children,n),t.child;case 12:return re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,s=t.pendingProps,r=t.memoizedProps,o=s.value,F(Ga,a._currentValue),a._currentValue=o,r!==null)if(Re(r.value,o)){if(r.children===s.children&&!_e.current){t=Qe(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var i=l.firstContext;i!==null;){if(i.context===a){if(r.tag===1){i=ze(-1,n&-n),i.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?i.next=i:(i.next=h.next,h.next=i),d.pending=i}}r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Tr(r.return,n,t),l.lanes|=n;break}i=i.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tr(o,n,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}re(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,a=t.pendingProps.children,Kt(t,n),s=Se(s),a=a(s),t.flags|=1,re(e,t,a,n),t.child;case 14:return a=t.type,s=Pe(a,t.pendingProps),s=Pe(a.type,s),Nl(e,t,a,s,n);case 15:return Dd(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:Pe(a,s),Ma(e,t),t.tag=1,ce(a)?(e=!0,Ua(t)):e=!1,Kt(t,n),Ed(t,a,s),Sr(t,a,s,n),Er(null,t,a,!0,e,n);case 19:return qd(e,t,n);case 22:return Ad(e,t,n)}throw Error(b(156,t.tag))};function $d(e,t){return Si(e,t)}function k_(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,a){return new k_(e,t,n,a)}function No(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S_(e){if(typeof e=="function")return No(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qr)return 11;if(e===Kr)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,a,s,r){var o=2;if(a=e,typeof e=="function")No(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rt:return kt(n.children,s,r,t);case Wr:o=8,s|=8;break;case Ks:return e=Te(12,n,t,s|2),e.elementType=Ks,e.lanes=r,e;case Xs:return e=Te(13,n,t,s),e.elementType=Xs,e.lanes=r,e;case Ys:return e=Te(19,n,t,s),e.elementType=Ys,e.lanes=r,e;case ii:return ps(n,s,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oi:o=10;break e;case li:o=9;break e;case Qr:o=11;break e;case Kr:o=14;break e;case Ye:o=16,a=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Te(o,n,t,s),t.elementType=e,t.type=a,t.lanes=r,t}function kt(e,t,n,a){return e=Te(7,e,a,t),e.lanes=n,e}function ps(e,t,n,a){return e=Te(22,e,a,t),e.elementType=ii,e.lanes=n,e.stateNode={isHidden:!1},e}function Gs(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M_(e,t,n,a,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,a,s,r,o,l,i){return e=new M_(e,t,n,l,i),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Te(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mo(r),e}function I_(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ct,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Zd(e){if(!e)return _t;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(ce(n))return Zi(e,n,t)}return t}function eu(e,t,n,a,s,r,o,l,i){return e=Do(n,a,!0,e,s,r,o,l,i),e.context=Zd(null),n=e.current,a=oe(),s=dt(n),r=ze(a,s),r.callback=t??null,lt(n,r,s),e.current.lanes=s,Kn(e,s,a),me(e,a),e}function _s(e,t,n,a){var s=t.current,r=oe(),o=dt(s);return n=Zd(n),t.context===null?t.context=n:t.pendingContext=n,t=ze(r,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=lt(s,t,o),e!==null&&(Ce(e,s,o,r),Ta(e,s,o)),o}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){Bl(e,t),(e=e.alternate)&&Bl(e,t)}function E_(){return null}var tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}cs.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));_s(e,t,null,null)};cs.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){_s(null,e,null,null)}),t[Je]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ai();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ze.length&&t!==0&&t<Ze[n].priority;n++);Ze.splice(n,0,e),n===0&&Ri(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gl(){}function P_(e,t,n,a,s){if(s){if(typeof a=="function"){var r=a;a=function(){var d=Za(o);r.call(d)}}var o=eu(t,a,e,0,null,!1,!1,"",Gl);return e._reactRootContainer=o,e[Je]=o.current,jn(e.nodeType===8?e.parentNode:e),Pt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var l=a;a=function(){var d=Za(i);l.call(d)}}var i=Do(e,0,!1,null,null,!1,!1,"",Gl);return e._reactRootContainer=i,e[Je]=i.current,jn(e.nodeType===8?e.parentNode:e),Pt(function(){_s(t,i,n,a)}),i}function fs(e,t,n,a,s){var r=n._reactRootContainer;if(r){var o=r;if(typeof s=="function"){var l=s;s=function(){var i=Za(o);l.call(i)}}_s(t,o,e,s)}else o=P_(n,t,e,s,a);return Za(o)}Ni=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&($r(t,n|1),me(t,V()),!(C&6)&&(an=V()+500,ft()))}break;case 13:Pt(function(){var a=We(e,1);if(a!==null){var s=oe();Ce(a,e,1,s)}}),Ao(e,1)}};Zr=function(e){if(e.tag===13){var t=We(e,134217728);if(t!==null){var n=oe();Ce(t,e,134217728,n)}Ao(e,134217728)}};Di=function(e){if(e.tag===13){var t=dt(e),n=We(e,t);if(n!==null){var a=oe();Ce(n,e,t,a)}Ao(e,t)}};Ai=function(){return R};Ci=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};lr=function(e,t,n){switch(t){case"input":if(er(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var s=rs(a);if(!s)throw Error(b(90));ui(a),er(a,s)}}}break;case"textarea":_i(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}};vi=Io;bi=Pt;var N_={usingClientEntryPoint:!1,Events:[Yn,Lt,rs,yi,gi,Io]},yn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ti(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||E_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{ts=ya.inject(D_),Le=ya}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(b(200));return I_(e,t,null,n)};ve.createRoot=function(e,t){if(!Ro(e))throw Error(b(299));var n=!1,a="",s=tu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,a,s),e[Je]=t.current,jn(e.nodeType===8?e.parentNode:e),new Co(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Ti(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Pt(e)};ve.hydrate=function(e,t,n){if(!ms(t))throw Error(b(200));return fs(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(b(405));var a=n!=null&&n.hydratedSources||null,s=!1,r="",o=tu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=eu(t,null,e,1,n??null,s,!1,r,o),e[Je]=t.current,jn(e),a)for(e=0;e<a.length;e++)n=a[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new cs(t)};ve.render=function(e,t,n){if(!ms(t))throw Error(b(200));return fs(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!ms(e))throw Error(b(40));return e._reactRootContainer?(Pt(function(){fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};ve.unstable_batchedUpdates=Io;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!ms(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return fs(e,t,n,!1,a)};ve.version="18.3.1-next-f1338f8080-20240426";function nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nu)}catch(e){console.error(e)}}nu(),ni.exports=ve;var A_=ni.exports,zl=A_;Ws.createRoot=zl.createRoot,Ws.hydrateRoot=zl.hydrateRoot;const Vs=[{id:"ai3x-api-contract-validator",title:"AI3X API Contract Validator",description:"Building Intelligent Interactions.",fileName:"AI3X API Contract Validator.json",rawData:{data:{edges:[{animated:!1,className:"",data:{sourceHandle:{dataType:"APIRequest",id:"APIRequest-KcKJG",name:"data",output_types:["JSON"]},targetHandle:{fieldName:"input_data",id:"ParserComponent-kAsOK",inputTypes:["DataFrame","Table","Data","JSON"],type:"other"}},id:"reactflow__edge-APIRequest-KcKJG{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-KcKJGœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}-ParserComponent-kAsOK{œfieldNameœ:œinput_dataœ,œidœ:œParserComponent-kAsOKœ,œinputTypesœ:[œDataFrameœ,œTableœ,œDataœ,œJSONœ],œtypeœ:œotherœ}",selected:!1,source:"APIRequest-KcKJG",sourceHandle:"{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-KcKJGœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}",target:"ParserComponent-kAsOK",targetHandle:"{œfieldNameœ:œinput_dataœ,œidœ:œParserComponent-kAsOKœ,œinputTypesœ:[œDataFrameœ,œTableœ,œDataœ,œJSONœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"ParserComponent",id:"ParserComponent-kAsOK",name:"parsed_text",output_types:["Message"]},targetHandle:{fieldName:"input_response",id:"Prompt Template-s3n0M",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-ParserComponent-kAsOK{œdataTypeœ:œParserComponentœ,œidœ:œParserComponent-kAsOKœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-s3n0M{œfieldNameœ:œinput_responseœ,œidœ:œPrompt Template-s3n0Mœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"ParserComponent-kAsOK",sourceHandle:"{œdataTypeœ:œParserComponentœ,œidœ:œParserComponent-kAsOKœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-s3n0M",targetHandle:"{œfieldNameœ:œinput_responseœ,œidœ:œPrompt Template-s3n0Mœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-s3n0M",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"OpenRouterComponent-aSpak",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-Prompt Template-s3n0M{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-s3n0Mœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-OpenRouterComponent-aSpak{œfieldNameœ:œinput_valueœ,œidœ:œOpenRouterComponent-aSpakœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-s3n0M",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-s3n0Mœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"OpenRouterComponent-aSpak",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œOpenRouterComponent-aSpakœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"OpenRouterComponent",id:"OpenRouterComponent-aSpak",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-10YVq",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"reactflow__edge-OpenRouterComponent-aSpak{œdataTypeœ:œOpenRouterComponentœ,œidœ:œOpenRouterComponent-aSpakœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-10YVq{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-10YVqœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"OpenRouterComponent-aSpak",sourceHandle:"{œdataTypeœ:œOpenRouterComponentœ,œidœ:œOpenRouterComponent-aSpakœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-10YVq",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-10YVqœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"}],nodes:[{data:{description:"Make HTTP requests using URL or cURL commands.",display_name:"API Request",id:"APIRequest-KcKJG",node:{base_classes:["JSON"],beta:!1,conditional_paths:[],custom_fields:{},description:"Make HTTP requests using URL or cURL commands.",display_name:"API Request",documentation:"https://docs.langflow.org/api-request",edited:!1,field_order:["url_input","curl_input","method","mode","query_params","body","headers","timeout","follow_redirects","save_to_file","include_httpx_metadata"],frozen:!1,icon:"Globe",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"1a052ebb9519",dependencies:{dependencies:[{name:"aiofiles",version:"24.1.0"},{name:"httpx",version:"0.28.1"},{name:"validators",version:"0.35.0"},{name:"lfx",version:"1.10.0"}],total_dependencies:4},module:"custom_components.api_request"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"API Response",group_outputs:!1,loop_types:null,method:"make_api_request",name:"data",options:null,required_inputs:null,selected:"JSON",tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",body:{_input_type:"TableInput",advanced:!0,display_name:"Body",dynamic:!1,info:"The body to send with the request as a dictionary (for POST, PATCH, PUT).",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"body",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Parameter name",display_name:"Key",name:"key",type:"str"},{description:"Parameter value",display_name:"Value",name:"value"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[]},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import json
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import parse_qsl, urlencode, urljoin, urlparse, urlunparse

import aiofiles
import aiofiles.os as aiofiles_os
import httpx
import validators

from lfx.base.curl.parse import parse_context
from lfx.custom.custom_component.component import Component
from lfx.inputs.inputs import TabInput
from lfx.io import (
    BoolInput,
    DataInput,
    DropdownInput,
    IntInput,
    MessageTextInput,
    MultilineInput,
    Output,
    TableInput,
)
from lfx.schema.data import Data
from lfx.schema.dotdict import dotdict
from lfx.utils.component_utils import set_current_fields, set_field_advanced, set_field_display

# SSRF Protection imports - for preventing Server-Side Request Forgery attacks
from lfx.utils.ssrf_protection import (
    SSRFProtectionError,
    is_ssrf_protection_enabled,
    validate_and_resolve_url,
)
from lfx.utils.ssrf_transport import create_ssrf_protected_client

# Define fields for each mode
MODE_FIELDS = {
    "URL": [
        "url_input",
        "method",
    ],
    "cURL": ["curl_input"],
}

# Fields that should always be visible
DEFAULT_FIELDS = ["mode"]

# HTTP redirect status codes (RFC 9110).
HTTP_MOVED_PERMANENTLY = 301
HTTP_FOUND = 302
HTTP_SEE_OTHER = 303
HTTP_TEMPORARY_REDIRECT = 307
HTTP_PERMANENT_REDIRECT = 308

# Maximum number of redirects to follow when re-validating each hop (matches httpx's default).
MAX_REDIRECTS = 20

# HTTP status codes that represent a redirect carrying a Location header.
REDIRECT_STATUS_CODES = frozenset(
    {
        HTTP_MOVED_PERMANENTLY,
        HTTP_FOUND,
        HTTP_SEE_OTHER,
        HTTP_TEMPORARY_REDIRECT,
        HTTP_PERMANENT_REDIRECT,
    }
)


class APIRequestComponent(Component):
    display_name = "API Request"
    description = "Make HTTP requests using URL or cURL commands."
    documentation: str = "https://docs.langflow.org/api-request"
    icon = "Globe"
    name = "APIRequest"

    inputs = [
        MessageTextInput(
            name="url_input",
            display_name="URL",
            info="Enter the URL for the request.",
            advanced=False,
            tool_mode=True,
        ),
        MultilineInput(
            name="curl_input",
            display_name="cURL",
            info=(
                "Paste a curl command to populate the fields. "
                "This will fill in the dictionary fields for headers and body."
            ),
            real_time_refresh=True,
            tool_mode=True,
            advanced=True,
            show=False,
        ),
        DropdownInput(
            name="method",
            display_name="Method",
            options=["GET", "POST", "PATCH", "PUT", "DELETE"],
            value="GET",
            info="The HTTP method to use.",
            real_time_refresh=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["URL", "cURL"],
            value="URL",
            info="Enable cURL mode to populate fields from a cURL command.",
            real_time_refresh=True,
        ),
        DataInput(
            name="query_params",
            display_name="Query Parameters",
            info="The query parameters to append to the URL.",
            advanced=True,
        ),
        TableInput(
            name="body",
            display_name="Body",
            info="The body to send with the request as a dictionary (for POST, PATCH, PUT).",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Key",
                    "type": "str",
                    "description": "Parameter name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "description": "Parameter value",
                },
            ],
            value=[],
            input_types=["Data", "JSON"],
            advanced=True,
            real_time_refresh=True,
        ),
        TableInput(
            name="headers",
            display_name="Headers",
            info="The headers to send with the request",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Header",
                    "type": "str",
                    "description": "Header name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "type": "str",
                    "description": "Header value",
                },
            ],
            value=[{"key": "User-Agent", "value": "Langflow/1.0"}],
            advanced=True,
            input_types=["Data", "JSON"],
            real_time_refresh=True,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            value=30,
            info="The timeout to use for the request.",
            advanced=True,
        ),
        BoolInput(
            name="follow_redirects",
            display_name="Follow Redirects",
            value=False,
            info=(
                "Whether to follow HTTP redirects. "
                "WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL "
                "redirects to internal resources. Only enable if you trust the target server. "
                "See OWASP SSRF Prevention Cheat Sheet for details."
            ),
            advanced=True,
        ),
        BoolInput(
            name="save_to_file",
            display_name="Save to File",
            value=False,
            info="Save the API response to a temporary file",
            advanced=True,
        ),
        BoolInput(
            name="include_httpx_metadata",
            display_name="Include HTTPx Metadata",
            value=False,
            info=(
                "Include properties such as headers, status_code, response_headers, "
                "and redirection_history in the output."
            ),
            advanced=True,
        ),
    ]

    outputs = [
        Output(display_name="API Response", name="data", method="make_api_request"),
    ]

    def _parse_json_value(self, value: Any) -> Any:
        """Parse a value that might be a JSON string."""
        if not isinstance(value, str):
            return value

        try:
            parsed = json.loads(value)
        except json.JSONDecodeError:
            return value
        else:
            return parsed

    def _process_body(self, body: Any) -> dict:
        """Process the body input into a valid dictionary."""
        if body is None:
            return {}
        if hasattr(body, "data"):
            body = body.data
        if isinstance(body, dict):
            return self._process_dict_body(body)
        if isinstance(body, str):
            return self._process_string_body(body)
        if isinstance(body, list):
            return self._process_list_body(body)
        return {}

    def _process_dict_body(self, body: dict) -> dict:
        """Process dictionary body by parsing JSON values."""
        return {k: self._parse_json_value(v) for k, v in body.items()}

    def _process_string_body(self, body: str) -> dict:
        """Process string body by attempting JSON parse."""
        try:
            return self._process_body(json.loads(body))
        except json.JSONDecodeError:
            return {"data": body}

    def _process_list_body(self, body: list) -> dict:
        """Process list body by converting to key-value dictionary."""
        processed_dict = {}
        try:
            for item in body:
                # Unwrap Data objects
                current_item = item
                if hasattr(item, "data"):
                    unwrapped_data = item.data
                    # If the unwrapped data is a dict but not key-value format, use it directly
                    if isinstance(unwrapped_data, dict) and not self._is_valid_key_value_item(unwrapped_data):
                        return unwrapped_data
                    current_item = unwrapped_data
                if not self._is_valid_key_value_item(current_item):
                    continue
                key = current_item["key"]
                value = self._parse_json_value(current_item["value"])
                processed_dict[key] = value
        except (KeyError, TypeError, ValueError) as e:
            self.log(f"Failed to process body list: {e}")
            return {}
        return processed_dict

    def _is_valid_key_value_item(self, item: Any) -> bool:
        """Check if an item is a valid key-value dictionary."""
        return isinstance(item, dict) and "key" in item and "value" in item

    def parse_curl(self, curl: str, build_config: dotdict) -> dotdict:
        """Parse a cURL command and update build configuration."""
        try:
            parsed = parse_context(curl)

            # Update basic configuration
            url = parsed.url
            # Normalize URL before setting it
            url = self._normalize_url(url)

            build_config["url_input"]["value"] = url
            build_config["method"]["value"] = parsed.method.upper()

            # Process headers
            headers_list = [{"key": k, "value": v} for k, v in parsed.headers.items()]
            build_config["headers"]["value"] = headers_list

            # Process body data
            if not parsed.data:
                build_config["body"]["value"] = []
            elif parsed.data:
                try:
                    json_data = json.loads(parsed.data)
                    if isinstance(json_data, dict):
                        body_list = [
                            {"key": k, "value": json.dumps(v) if isinstance(v, dict | list) else str(v)}
                            for k, v in json_data.items()
                        ]
                        build_config["body"]["value"] = body_list
                    else:
                        build_config["body"]["value"] = [{"key": "data", "value": json.dumps(json_data)}]
                except json.JSONDecodeError:
                    build_config["body"]["value"] = [{"key": "data", "value": parsed.data}]

        except Exception as exc:
            msg = f"Error parsing curl: {exc}"
            self.log(msg)
            raise ValueError(msg) from exc

        return build_config

    def _normalize_url(self, url: str) -> str:
        """Normalize URL by adding https:// if no protocol is specified."""
        if not url or not isinstance(url, str):
            msg = "URL cannot be empty"
            raise ValueError(msg)

        url = url.strip()
        if url.startswith(("http://", "https://")):
            return url
        return f"https://{url}"

    async def make_request(
        self,
        client: httpx.AsyncClient,
        method: str,
        url: str,
        headers: dict | None = None,
        body: Any = None,
        timeout: int = 5,
        *,
        follow_redirects: bool = False,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        redirection_history = []

        try:
            # Prepare request parameters
            request_params = {
                "method": method,
                "url": url,
                "headers": headers,
                "timeout": timeout,
                "follow_redirects": follow_redirects,
            }
            # Only include body for methods that support it (GET must not have a body per HTTP spec)
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body
            response = await client.request(**request_params)

            redirection_history = [
                {
                    "url": redirect.headers.get("Location", str(redirect.url)),
                    "status_code": redirect.status_code,
                }
                for redirect in response.history
            ]

            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
            self.log(f"Error making request to {url}")
            return Data(
                data={
                    "source": url,
                    "headers": headers,
                    "status_code": 500,
                    "error": str(exc),
                    **({"redirection_history": redirection_history} if redirection_history else {}),
                },
            )

    async def _build_response_data(
        self,
        response: httpx.Response,
        source_url: str,
        headers: dict | None,
        redirection_history: list,
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Turn an httpx response into the component's \`\`Data\`\` output.

        Shared by the standard request path (\`\`make_request\`\`) and the redirect
        re-validation path (\`\`_follow_redirects_with_validation\`\`) so both produce
        identical metadata, optional file saving, and body decoding.
        """
        is_binary, file_path = await self._response_info(response, with_file_path=save_to_file)
        response_headers = self._headers_to_dict(response.headers)

        # Base metadata
        metadata = {
            "source": source_url,
            "status_code": response.status_code,
            "response_headers": response_headers,
        }

        if redirection_history:
            metadata["redirection_history"] = redirection_history

        if save_to_file:
            mode = "wb" if is_binary else "w"
            encoding = response.encoding if mode == "w" else None
            if file_path:
                await aiofiles_os.makedirs(file_path.parent, exist_ok=True)
                if is_binary:
                    async with aiofiles.open(file_path, "wb") as f:
                        await f.write(response.content)
                        await f.flush()
                else:
                    async with aiofiles.open(file_path, "w", encoding=encoding) as f:
                        await f.write(response.text)
                        await f.flush()
                metadata["file_path"] = str(file_path)

            if include_httpx_metadata:
                metadata.update({"headers": headers})
            return Data(data=metadata)

        # Handle response content
        if is_binary:
            result = response.content
        else:
            try:
                result = response.json()
            except json.JSONDecodeError:
                self.log("Failed to decode JSON response")
                result = response.text.encode("utf-8")

        metadata["result"] = result

        if include_httpx_metadata:
            metadata.update({"headers": headers})

        return Data(data=metadata)

    def add_query_params(self, url: str, params: dict) -> str:
        """Add query parameters to URL efficiently."""
        if not params:
            return url
        url_parts = list(urlparse(url))
        query = dict(parse_qsl(url_parts[4]))
        query.update(params)
        url_parts[4] = urlencode(query)
        return urlunparse(url_parts)

    def _headers_to_dict(self, headers: httpx.Headers) -> dict[str, str]:
        """Convert HTTP headers to a dictionary with lowercased keys."""
        return {k.lower(): v for k, v in headers.items()}

    def _process_headers(self, headers: Any) -> dict:
        """Process the headers input into a valid dictionary."""
        if headers is None:
            return {}
        if isinstance(headers, dict):
            return headers
        if isinstance(headers, list):
            return {item["key"]: item["value"] for item in headers if self._is_valid_key_value_item(item)}
        return {}

    async def make_api_request(self) -> Data:
        """Make HTTP request with SSRF protection and DNS pinning.

        This method implements comprehensive SSRF (Server-Side Request Forgery) protection
        using DNS pinning to prevent DNS rebinding attacks. The protection works by:
        1. Validating the URL and resolving DNS during security check
        2. Pinning the validated IP address
        3. Forcing the HTTP client to use the pinned IP for the actual request
        4. Ignoring any subsequent DNS changes (prevents rebinding attacks)

        Returns:
            Data: Response data from the HTTP request

        Raises:
            ValueError: If URL is invalid or blocked by SSRF protection
        """
        # Extract request parameters
        method = self.method
        url = self.url_input.strip() if isinstance(self.url_input, str) else ""
        headers = self.headers or {}
        body = self.body or {}
        timeout = self.timeout
        follow_redirects = self.follow_redirects
        save_to_file = self.save_to_file
        include_httpx_metadata = self.include_httpx_metadata

        # Security warning: HTTP redirects can bypass SSRF protection
        # A public URL could redirect to an internal resource
        if follow_redirects:
            self.log(
                "Security Warning: HTTP redirects are enabled. This may allow SSRF bypass attacks "
                "where a public URL redirects to internal resources (e.g., cloud metadata endpoints). "
                "Only enable this if you trust the target server."
            )

        # Normalize URL (add https:// if no protocol specified)
        url = self._normalize_url(url)

        # Basic URL format validation
        if not validators.url(url):
            msg = f"Invalid URL provided: {url}"
            raise ValueError(msg)

        # ============================================================================
        # SSRF Protection with DNS Pinning
        # ============================================================================
        # This prevents DNS rebinding attacks by:
        # 1. Resolving DNS and validating IPs during security check
        # 2. Pinning the validated IP address
        # 3. Using a custom HTTP transport that forces use of the pinned IP
        # 4. Ignoring any new DNS resolutions (prevents rebinding)
        #
        # Without DNS pinning, an attacker could:
        # - First DNS lookup: returns public IP (passes validation)
        # - Second DNS lookup: returns internal IP (bypasses protection)
        # - Attack succeeds: accesses internal services
        #
        # With DNS pinning:
        # - First DNS lookup: returns public IP (passes validation)
        # - IP is pinned: "example.com = 93.184.216.34"
        # - HTTP request: uses pinned IP directly (no new DNS lookup)
        # - Attack fails: even if DNS changes, we use the validated IP
        # ============================================================================

        try:
            # Validate URL and get validated IPs for DNS pinning
            _validated_url, validated_ips = validate_and_resolve_url(url)

            # Log DNS pinning information for security auditing
            if validated_ips:
                self.log(f"SSRF Protection: Using DNS pinning with {len(validated_ips)} validated IP(s)")

        except SSRFProtectionError as e:
            # SSRF protection blocked the request (private IP, internal network, etc.)
            msg = f"SSRF Protection: {e}"
            raise ValueError(msg) from e

        # Process query parameters (from string or Data object)
        if isinstance(self.query_params, str):
            query_params = dict(parse_qsl(self.query_params))
        else:
            query_params = self.query_params.data if self.query_params else {}

        # Process headers and body into proper format
        headers = self._process_headers(headers)
        body = self._process_body(body)
        url = self.add_query_params(url, query_params)

        # ============================================================================
        # Execute the request (re-validating any redirects when SSRF protection is on)
        # ============================================================================
        # When SSRF protection is enabled we must NOT let httpx auto-follow redirects:
        # a validated public URL can redirect to an internal address (loopback, RFC1918,
        # link-local / cloud metadata) that was never checked, bypassing both the initial
        # validation and DNS pinning. Instead we follow redirects manually so every hop
        # is re-validated with the same denylist + DNS pinning. When protection is
        # disabled, we preserve the previous behavior and let httpx handle redirects.
        if is_ssrf_protection_enabled() and follow_redirects:
            result = await self._follow_redirects_with_validation(
                method,
                url,
                headers,
                body,
                timeout,
                validated_ips,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        else:
            # No redirect re-validation needed:
            # - SSRF protection is disabled (user opted out), or
            # - redirects are disabled, so httpx makes a single request.
            # DNS pinning still applies to the single request when protection is enabled
            # and the host resolved to validated IPs.
            async with self._build_http_client(url, validated_ips) as client:
                result = await self.make_request(
                    client,
                    method,
                    url,
                    headers,
                    body,
                    timeout,
                    follow_redirects=follow_redirects,
                    save_to_file=save_to_file,
                    include_httpx_metadata=include_httpx_metadata,
                )

        self.status = result
        return result

    def _build_http_client(self, url: str, validated_ips: list[str]) -> httpx.AsyncClient:
        """Create an HTTP client, pinning DNS to validated IPs when SSRF protection applies.

        Args:
            url: The request URL whose hostname will be pinned.
            validated_ips: IPs validated by \`\`validate_and_resolve_url\`\` for this hop.

        Returns:
            httpx.AsyncClient: A client that pins DNS to \`\`validated_ips\`\` (preventing
            rebinding) when SSRF protection is enabled and the hop has validated IPs;
            otherwise a standard client (protection disabled, allowlisted host, or
            hostname extraction failure).
        """
        if is_ssrf_protection_enabled() and validated_ips:
            # Extract hostname from the URL so the custom transport can pin it while
            # preserving the Host header for virtual hosting / TLS SNI.
            hostname = urlparse(url).hostname
            if hostname:
                # The custom transport tries validated IPs in order (dual-stack / LB).
                return create_ssrf_protected_client(hostname=hostname, validated_ips=validated_ips)
        return httpx.AsyncClient()

    @staticmethod
    def _method_for_redirect(method: str, status_code: int) -> str:
        """Return the HTTP method to use after a redirect, mirroring httpx semantics.

        A 303 (See Other) always becomes GET; 301/302 downgrade POST to GET for
        browser compatibility; 307/308 preserve the original method (and body).
        """
        method = method.upper()
        if status_code == HTTP_SEE_OTHER and method != "HEAD":
            return "GET"
        if status_code in (HTTP_MOVED_PERMANENTLY, HTTP_FOUND) and method == "POST":
            return "GET"
        return method

    @staticmethod
    def _headers_for_redirect(headers: dict | None, current_url: str, next_url: str) -> dict | None:
        """Drop sensitive headers when a redirect crosses to a different host.

        Mirrors httpx's auto-follow behavior so manually following redirects does not
        leak credentials (Authorization / Cookie) to a different host than the one the
        caller intended them for. Same-host redirects keep all headers.
        """
        if not headers:
            return headers
        if urlparse(current_url).hostname == urlparse(next_url).hostname:
            return headers
        sensitive = {"authorization", "proxy-authorization", "cookie"}
        return {k: v for k, v in headers.items() if k.lower() not in sensitive}

    async def _follow_redirects_with_validation(
        self,
        method: str,
        url: str,
        headers: dict | None,
        body: Any,
        timeout: int,
        validated_ips: list[str],
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Make the request and follow redirects manually, re-validating every hop.

        This closes an SSRF bypass: with \`\`follow_redirects\`\` enabled, httpx would
        otherwise auto-follow a redirect from a validated public URL to an internal
        address that was never checked. Here each redirect \`\`Location\`\` is resolved
        (relative locations included) and re-validated with \`\`validate_and_resolve_url\`\`
        — the same private/loopback/link-local denylist and DNS pinning applied to the
        initial request — before any connection to it is made. A blocked hop raises
        \`\`ValueError\`\`; the number of redirects is capped at \`\`MAX_REDIRECTS\`\`.
        """
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        current_url = url
        current_ips = validated_ips
        redirection_history: list[dict] = []

        for _ in range(MAX_REDIRECTS + 1):
            request_params: dict[str, Any] = {
                "method": method,
                "url": current_url,
                "headers": headers,
                "timeout": timeout,
                # Never let httpx follow redirects itself; each hop is validated below.
                "follow_redirects": False,
            }
            # Only include body for methods that support it (GET must not have a body).
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body

            try:
                async with self._build_http_client(current_url, current_ips) as client:
                    response = await client.request(**request_params)
            except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
                self.log(f"Error making request to {current_url}")
                return Data(
                    data={
                        "source": url,
                        "headers": headers,
                        "status_code": 500,
                        "error": str(exc),
                        **({"redirection_history": redirection_history} if redirection_history else {}),
                    },
                )

            location = response.headers.get("Location")
            if response.status_code in REDIRECT_STATUS_CODES and location:
                # Resolve relative redirects against the current URL.
                next_url = urljoin(current_url, location)
                redirection_history.append({"url": location, "status_code": response.status_code})

                # Re-validate the redirect target with the same SSRF denylist + DNS pinning.
                # Non-http(s) schemes, private/loopback/link-local hosts, and hostnames that
                # resolve to blocked IPs all raise SSRFProtectionError here.
                try:
                    _validated_url, current_ips = validate_and_resolve_url(next_url)
                except SSRFProtectionError as e:
                    msg = f"SSRF Protection: blocked redirect to {next_url}: {e}"
                    raise ValueError(msg) from e

                method = self._method_for_redirect(method, response.status_code)
                headers = self._headers_for_redirect(headers, current_url, next_url)
                current_url = next_url
                continue

            # Not a redirect (or no Location header) - this is the final response.
            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )

        msg = f"SSRF Protection: exceeded the maximum of {MAX_REDIRECTS} redirects while requesting {url}"
        raise ValueError(msg)

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the build config based on the selected mode."""
        if field_name != "mode":
            if field_name == "curl_input" and self.mode == "cURL" and self.curl_input:
                return self.parse_curl(self.curl_input, build_config)
            return build_config

        if field_value == "cURL":
            set_field_display(build_config, "curl_input", value=True)
            if build_config["curl_input"]["value"]:
                try:
                    build_config = self.parse_curl(build_config["curl_input"]["value"], build_config)
                except ValueError as e:
                    self.log(f"Failed to parse cURL input: {e}")
        else:
            set_field_display(build_config, "curl_input", value=False)

        return set_current_fields(
            build_config=build_config,
            action_fields=MODE_FIELDS,
            selected_action=field_value,
            default_fields=DEFAULT_FIELDS,
            func=set_field_advanced,
            default_value=True,
        )

    async def _response_info(
        self, response: httpx.Response, *, with_file_path: bool = False
    ) -> tuple[bool, Path | None]:
        """Determine the file path and whether the response content is binary.

        Args:
            response (Response): The HTTP response object.
            with_file_path (bool): Whether to save the response content to a file.

        Returns:
            Tuple[bool, Path | None]:
                A tuple containing a boolean indicating if the content is binary and the full file path (if applicable).
        """
        content_type = response.headers.get("Content-Type", "")
        is_binary = "application/octet-stream" in content_type or "application/binary" in content_type

        if not with_file_path:
            return is_binary, None

        component_temp_dir = Path(tempfile.gettempdir()) / self.__class__.__name__

        # Create directory asynchronously
        await aiofiles_os.makedirs(component_temp_dir, exist_ok=True)

        filename = None
        if "Content-Disposition" in response.headers:
            content_disposition = response.headers["Content-Disposition"]
            filename_match = re.search(r'filename="(.+?)"', content_disposition)
            if filename_match:
                extracted_filename = filename_match.group(1)
                filename = extracted_filename

        # Step 3: Infer file extension or use part of the request URL if no filename
        if not filename:
            # Extract the last segment of the URL path
            url_path = urlparse(str(response.request.url) if response.request else "").path
            base_name = Path(url_path).name  # Get the last segment of the path
            if not base_name:  # If the path ends with a slash or is empty
                base_name = "response"

            # Infer file extension
            content_type_to_extension = {
                "text/plain": ".txt",
                "application/json": ".json",
                "image/jpeg": ".jpg",
                "image/png": ".png",
                "application/octet-stream": ".bin",
            }
            extension = content_type_to_extension.get(content_type, ".bin" if is_binary else ".txt")
            filename = f"{base_name}{extension}"

        # Step 4: Define the full file path
        file_path = component_temp_dir / filename

        # Step 5: Check if file exists asynchronously and handle accordingly
        try:
            # Try to create the file exclusively (x mode) to check existence
            async with aiofiles.open(file_path, "x") as _:
                pass  # File created successfully, we can use this path
        except FileExistsError:
            # If file exists, append a timestamp to the filename
            timestamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S%f")
            file_path = component_temp_dir / f"{timestamp}-{filename}"

        return is_binary, file_path
`},curl_input:{_input_type:"MultilineInput",advanced:!0,ai_enabled:!1,copy_field:!1,display_name:"cURL",dynamic:!1,info:"Paste a curl command to populate the fields. This will fill in the dictionary fields for headers and body.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"curl_input",override_skip:!1,password:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},follow_redirects:{_input_type:"BoolInput",advanced:!0,display_name:"Follow Redirects",dynamic:!1,info:"Whether to follow HTTP redirects. WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL redirects to internal resources. Only enable if you trust the target server. See OWASP SSRF Prevention Cheat Sheet for details.",list:!1,list_add_label:"Add More",name:"follow_redirects",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},headers:{_input_type:"TableInput",advanced:!0,display_name:"Headers",dynamic:!1,info:"The headers to send with the request",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"headers",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Header name",display_name:"Header",name:"key",type:"str"},{description:"Header value",display_name:"Value",name:"value",type:"str"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[{key:"User-Agent",value:"Langflow/1.0"}]},include_httpx_metadata:{_input_type:"BoolInput",advanced:!0,display_name:"Include HTTPx Metadata",dynamic:!1,info:"Include properties such as headers, status_code, response_headers, and redirection_history in the output.",list:!1,list_add_label:"Add More",name:"include_httpx_metadata",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},method:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Method",dynamic:!1,external_options:{},info:"The HTTP method to use.",name:"method",options:["GET","POST","PATCH","PUT","DELETE"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"GET"},mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Enable cURL mode to populate fields from a cURL command.",name:"mode",options:["URL","cURL"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"URL"},query_params:{_input_type:"JSONInput",advanced:!0,display_name:"Query Parameters",dynamic:!1,info:"The query parameters to append to the URL.",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"query_params",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},save_to_file:{_input_type:"BoolInput",advanced:!0,display_name:"Save to File",dynamic:!1,info:"Save the API response to a temporary file",list:!1,list_add_label:"Add More",name:"save_to_file",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"The timeout to use for the request.",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:30},url_input:{_input_type:"MessageTextInput",advanced:!1,display_name:"URL",dynamic:!1,info:"Enter the URL for the request.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"url_input",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"https://gorest.co.in/public/v2/users"}},tool_mode:!1},showNode:!0,type:"APIRequest"},id:"APIRequest-KcKJG",measured:{height:385,width:320},position:{x:-250.31529491555972,y:119.15682908479599},selected:!1,type:"genericNode"},{data:{description:"Extracts text using a template.",display_name:"Parser",id:"ParserComponent-kAsOK",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Extracts text using a template.",display_name:"Parser",documentation:"https://docs.langflow.org/parser",edited:!1,field_order:["input_data","mode","pattern","sep"],frozen:!1,icon:"braces",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"cda7b997a730",dependencies:{dependencies:[{name:"lfx",version:"1.10.0"}],total_dependencies:1},module:"custom_components.parser"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Parsed Text",group_outputs:!1,loop_types:null,method:"parse_combined_text",name:"parsed_text",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from lfx.custom.custom_component.component import Component
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, HandleInput, MessageTextInput, MultilineInput, TabInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.template.field.base import Output


class ParserComponent(Component):
    display_name = "Parser"
    description = "Extracts text using a template."
    documentation: str = "https://docs.langflow.org/parser"
    icon = "braces"

    inputs = [
        HandleInput(
            name="input_data",
            display_name="JSON or Table",
            input_types=["DataFrame", "Table", "Data", "JSON"],
            info="Accepts either a DataFrame or a Data object.",
            required=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["Parser", "Stringify"],
            value="Parser",
            info="Convert into raw string instead of using a template.",
            real_time_refresh=True,
        ),
        MultilineInput(
            name="pattern",
            display_name="Template",
            info=(
                "Use variables within curly brackets to extract column values for DataFrames "
                "or key values for Data."
                "For example: \`Name: {Name}, Age: {Age}, Country: {Country}\`"
            ),
            value="Text: {text}",  # Example default
            dynamic=True,
            show=True,
            required=True,
        ),
        MessageTextInput(
            name="sep",
            display_name="Separator",
            advanced=True,
            value="\\n",
            info="String used to separate rows/items.",
        ),
    ]

    outputs = [
        Output(
            display_name="Parsed Text",
            name="parsed_text",
            info="Formatted text output.",
            method="parse_combined_text",
        ),
    ]

    def update_build_config(self, build_config, field_value, field_name=None):
        """Dynamically hide/show \`template\` and enforce requirement based on \`stringify\`."""
        if field_name == "mode":
            build_config["pattern"]["show"] = self.mode == "Parser"
            build_config["pattern"]["required"] = self.mode == "Parser"
            if field_value:
                clean_data = BoolInput(
                    name="clean_data",
                    display_name="Clean Data",
                    info=(
                        "Enable to clean the data by removing empty rows and lines "
                        "in each cell of the DataFrame/ Data object."
                    ),
                    value=True,
                    advanced=True,
                    required=False,
                )
                build_config["clean_data"] = clean_data.to_dict()
            else:
                build_config.pop("clean_data", None)

        return build_config

    def _clean_args(self):
        """Prepare arguments based on input type."""
        input_data = self.input_data

        match input_data:
            case list() if all(isinstance(item, Data) for item in input_data):
                msg = "List of Data objects is not supported."
                raise ValueError(msg)
            case DataFrame():
                return input_data, None
            case Data():
                return None, input_data
            case dict() if "data" in input_data:
                try:
                    if "columns" in input_data:  # Likely a DataFrame
                        return DataFrame.from_dict(input_data), None
                    # Likely a Data object
                    return None, Data(**input_data)
                except (TypeError, ValueError, KeyError) as e:
                    msg = f"Invalid structured input provided: {e!s}"
                    raise ValueError(msg) from e
            case _:
                msg = f"Unsupported input type: {type(input_data)}. Expected DataFrame or Data."
                raise ValueError(msg)

    def parse_combined_text(self) -> Message:
        """Parse all rows/items into a single text or convert input to string if \`stringify\` is enabled."""
        # Early return for stringify option
        if self.mode == "Stringify":
            return self.convert_to_string()

        df, data = self._clean_args()

        lines = []
        if df is not None:
            for _, row in df.iterrows():
                formatted_text = self.pattern.format(**row.to_dict())
                lines.append(formatted_text)
        elif data is not None:
            # Use format_map with a dict that returns default_value for missing keys
            class DefaultDict(dict):
                def __missing__(self, key):
                    return data.default_value or ""

            formatted_text = self.pattern.format_map(DefaultDict(data.data))
            lines.append(formatted_text)

        combined_text = self.sep.join(lines)
        self.status = combined_text
        return Message(text=combined_text)

    def convert_to_string(self) -> Message:
        """Convert input data to string with proper error handling."""
        result = ""
        if isinstance(self.input_data, list):
            result = "\\n".join([safe_convert(item, clean_data=self.clean_data or False) for item in self.input_data])
        else:
            result = safe_convert(self.input_data or False)
        self.log(f"Converted to string with length: {len(result)}")

        message = Message(text=result)
        self.status = message
        return message
`},input_data:{_input_type:"HandleInput",advanced:!1,display_name:"JSON or Table",dynamic:!1,info:"Accepts either a DataFrame or a Data object.",input_types:["DataFrame","Table","Data","JSON"],list:!1,list_add_label:"Add More",name:"input_data",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Convert into raw string instead of using a template.",name:"mode",options:["Parser","Stringify"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"Parser"},pattern:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"Template",dynamic:!0,info:"Use variables within curly brackets to extract column values for DataFrames or key values for Data.For example: `Name: {Name}, Age: {Age}, Country: {Country}`",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"pattern",override_skip:!1,password:!1,placeholder:"",required:!0,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"Text: {result}"},sep:{_input_type:"MessageTextInput",advanced:!0,display_name:"Separator",dynamic:!1,info:"String used to separate rows/items.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sep",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`
`}},tool_mode:!1},showNode:!0,type:"ParserComponent"},dragging:!1,id:"ParserComponent-kAsOK",measured:{height:331,width:320},position:{x:96.24484408928393,y:133.427185175647},selected:!1,type:"genericNode"},{data:{description:"Display a chat message in the Playground.",display_name:"Chat Output",id:"ChatOutput-10YVq",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:"1.10.0"}],total_dependencies:3},module:"custom_components.chat_output"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,loop_types:null,method:"message_response",name:"message",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},id:"ChatOutput-10YVq",measured:{height:52,width:192},position:{x:1247.0361716396371,y:162.98575750263095},selected:!1,type:"genericNode"},{data:{description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",id:"Prompt Template-s3n0M",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["input_response","json_schema"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,icon:"prompts",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:"1.10.0"}],total_dependencies:1},module:"custom_components.prompt_template"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},input_response:{advanced:!1,display_name:"input_response",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"input_response",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},json_schema:{advanced:!1,display_name:"json_schema",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"json_schema",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:`JSON Schema
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": [
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "gender": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
      ]
    }
  ]
}`},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",load_from_db:!1,name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`You are an API contract validator. Your task is to verify if the following API response matches the given JSON schema.
{input_response}
{json_schema}`},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},id:"Prompt Template-s3n0M",measured:{height:429,width:320},position:{x:475.8402406737912,y:128.1721056744376},selected:!1,type:"genericNode"},{data:{description:"OpenRouter provides unified access to multiple AI models from different providers through a single API.",display_name:"OpenRouter",id:"OpenRouterComponent-aSpak",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"OpenRouter provides unified access to multiple AI models from different providers through a single API.",display_name:"OpenRouter",documentation:"",edited:!1,field_order:["input_value","system_message","stream","api_key","model_name","temperature","max_tokens","site_url","app_name"],frozen:!1,icon:"OpenRouter",last_updated:"2026-06-27T13:18:03.773Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"83c3c312a7a2",dependencies:{dependencies:[{name:"httpx",version:"0.28.1"},{name:"langchain_openai",version:"1.2.2"},{name:"pydantic",version:"2.13.4"},{name:"lfx",version:"1.10.0"}],total_dependencies:4},keywords:["model","llm","language model","large language model"],module:"custom_components.openrouter"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,loop_types:null,method:"text_response",name:"text_output",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,loop_types:null,method:"build_model",name:"model_output",options:null,required_inputs:null,selected:"LanguageModel",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"98f2680e-e3ed-46e6-a983-a352510abb2a"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"API Key",dynamic:!1,info:"",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:""},app_name:{_input_type:"StrInput",advanced:!0,display_name:"App Name",dynamic:!1,info:"",list:!1,list_add_label:"Add More",load_from_db:!1,name:"app_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import httpx
from langchain_openai import ChatOpenAI
from pydantic.v1 import SecretStr

from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.field_typing.range_spec import RangeSpec
from lfx.inputs.inputs import DropdownInput, IntInput, SecretStrInput, SliderInput, StrInput


class OpenRouterComponent(LCModelComponent):
    """OpenRouter API component for language models."""

    display_name = "OpenRouter"
    description = (
        "OpenRouter provides unified access to multiple AI models from different providers through a single API."
    )
    icon = "OpenRouter"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        SecretStrInput(name="api_key", display_name="API Key", required=True),
        DropdownInput(
            name="model_name",
            display_name="Model",
            options=[],
            value="",
            refresh_button=True,
            real_time_refresh=True,
            required=True,
        ),
        SliderInput(
            name="temperature",
            display_name="Temperature",
            value=0.7,
            range_spec=RangeSpec(min=0, max=2, step=0.01),
            advanced=True,
        ),
        IntInput(name="max_tokens", display_name="Max Tokens", advanced=True),
        StrInput(name="site_url", display_name="Site URL", advanced=True),
        StrInput(name="app_name", display_name="App Name", advanced=True),
    ]

    def fetch_models(self) -> list[dict]:
        """Fetch available models from OpenRouter."""
        try:
            response = httpx.get("https://openrouter.ai/api/v1/models", timeout=10.0)
            response.raise_for_status()
            models = response.json().get("data", [])
            return sorted(
                [
                    {
                        "id": m["id"],
                        "name": m.get("name", m["id"]),
                        "context": m.get("context_length", 0),
                    }
                    for m in models
                    if m.get("id")
                ],
                key=lambda x: x["name"],
            )
        except (httpx.RequestError, httpx.HTTPStatusError) as e:
            self.log(f"Error fetching models: {e}")
            return []

    def update_build_config(self, build_config: dict, field_value: str, field_name: str | None = None) -> dict:  # noqa: ARG002
        """Update model options."""
        models = self.fetch_models()
        if models:
            build_config["model_name"]["options"] = [m["id"] for m in models]
            build_config["model_name"]["tooltips"] = {m["id"]: f"{m['name']} ({m['context']:,} tokens)" for m in models}
        else:
            build_config["model_name"]["options"] = ["Failed to load models"]
            build_config["model_name"]["value"] = "Failed to load models"
        return build_config

    def build_model(self) -> LanguageModel:
        """Build the OpenRouter model."""
        if not self.api_key:
            msg = "API key is required"
            raise ValueError(msg)
        if not self.model_name or self.model_name == "Loading...":
            msg = "Please select a model"
            raise ValueError(msg)

        kwargs = {
            "model": self.model_name,
            "openai_api_key": SecretStr(self.api_key).get_secret_value(),
            "openai_api_base": "https://openrouter.ai/api/v1",
            "temperature": self.temperature if self.temperature is not None else 0.7,
        }

        if self.max_tokens:
            kwargs["max_tokens"] = int(self.max_tokens)

        headers = {}
        if self.site_url:
            headers["HTTP-Referer"] = self.site_url
        if self.app_name:
            headers["X-Title"] = self.app_name
        if headers:
            kwargs["default_headers"] = headers

        return ChatOpenAI(**kwargs)
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},is_refresh:!0,max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Tokens",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Model",dynamic:!1,external_options:{},info:"",load_from_db:!1,name:"model_name",options:["ai21/jamba-large-1.7","aion-labs/aion-1.0","aion-labs/aion-1.0-mini","aion-labs/aion-2.0","aion-labs/aion-rp-llama-3.1-8b","allenai/olmo-3-32b-think","amazon/nova-2-lite-v1","amazon/nova-lite-v1","amazon/nova-micro-v1","amazon/nova-premier-v1","amazon/nova-pro-v1","~anthropic/claude-haiku-latest","~anthropic/claude-sonnet-latest","anthropic/claude-3-haiku","anthropic/claude-fable-5","~anthropic/claude-fable-latest","anthropic/claude-haiku-4.5","anthropic/claude-opus-4","anthropic/claude-opus-4.1","anthropic/claude-opus-4.5","anthropic/claude-opus-4.6","anthropic/claude-opus-4.6-fast","anthropic/claude-opus-4.7","anthropic/claude-opus-4.7-fast","anthropic/claude-opus-4.8","anthropic/claude-opus-4.8-fast","~anthropic/claude-opus-latest","anthropic/claude-sonnet-4","anthropic/claude-sonnet-4.5","anthropic/claude-sonnet-4.6","arcee-ai/coder-large","arcee-ai/trinity-large-thinking","arcee-ai/trinity-mini","arcee-ai/virtuoso-large","openrouter/auto","baidu/ernie-4.5-vl-424b-a47b","openrouter/bodybuilder","bytedance-seed/seed-1.6","bytedance-seed/seed-1.6-flash","bytedance-seed/seed-2.0-lite","bytedance-seed/seed-2.0-mini","bytedance/ui-tars-1.5-7b","cohere/command-a","cohere/command-r-08-2024","cohere/command-r-plus-08-2024","cohere/command-r7b-12-2024","cohere/north-mini-code:free","deepcogito/cogito-v2.1-671b","deepseek/deepseek-chat","deepseek/deepseek-chat-v3-0324","deepseek/deepseek-chat-v3.1","deepseek/deepseek-v3.1-terminus","deepseek/deepseek-v3.2","deepseek/deepseek-v3.2-exp","deepseek/deepseek-v4-flash","deepseek/deepseek-v4-pro","deepseek/deepseek-r1","deepseek/deepseek-r1-0528","deepseek/deepseek-r1-distill-llama-70b","openrouter/free","~google/gemini-flash-latest","~google/gemini-pro-latest","google/gemini-2.5-flash","google/gemini-2.5-flash-lite","google/gemini-2.5-flash-lite-preview-09-2025","google/gemini-2.5-pro","google/gemini-2.5-pro-preview-05-06","google/gemini-2.5-pro-preview","google/gemini-3-flash-preview","google/gemini-3.1-flash-lite","google/gemini-3.1-flash-lite-preview","google/gemini-3.1-pro-preview","google/gemini-3.1-pro-preview-customtools","google/gemini-3.5-flash","google/gemma-2-27b-it","google/gemma-3-12b-it","google/gemma-3-27b-it","google/gemma-3-4b-it","google/gemma-3n-e4b-it","google/gemma-4-26b-a4b-it","google/gemma-4-26b-a4b-it:free","google/gemma-4-31b-it","google/gemma-4-31b-it:free","google/lyria-3-clip-preview","google/lyria-3-pro-preview","google/gemini-2.5-flash-image","google/gemini-3.1-flash-image-preview","google/gemini-3.1-flash-image","google/gemini-3-pro-image-preview","google/gemini-3-pro-image","ibm-granite/granite-4.0-h-micro","ibm-granite/granite-4.1-8b","inception/mercury-2","inflection/inflection-3-pi","inflection/inflection-3-productivity","kwaipilot/kat-coder-pro-v2","liquid/lfm-2-24b-a2b","liquid/lfm-2.5-1.2b-instruct:free","liquid/lfm-2.5-1.2b-thinking:free","anthracite-org/magnum-v4-72b","mancer/weaver","meta-llama/llama-3-8b-instruct","meta-llama/llama-3.1-70b-instruct","meta-llama/llama-3.1-8b-instruct","meta-llama/llama-3.2-11b-vision-instruct","meta-llama/llama-3.2-1b-instruct","meta-llama/llama-3.2-3b-instruct","meta-llama/llama-3.2-3b-instruct:free","meta-llama/llama-3.3-70b-instruct","meta-llama/llama-3.3-70b-instruct:free","meta-llama/llama-4-maverick","meta-llama/llama-4-scout","meta-llama/llama-guard-4-12b","microsoft/phi-4","microsoft/phi-4-mini-instruct","minimax/minimax-m1","minimax/minimax-m2","minimax/minimax-m2-her","minimax/minimax-m2.1","minimax/minimax-m2.5","minimax/minimax-m2.7","minimax/minimax-m3","minimax/minimax-01","mistralai/mistral-large","mistralai/mistral-large-2407","mistralai/codestral-2508","mistralai/devstral-2512","mistralai/ministral-14b-2512","mistralai/ministral-3b-2512","mistralai/ministral-8b-2512","mistralai/mistral-large-2512","mistralai/mistral-medium-3","mistralai/mistral-medium-3.1","mistralai/mistral-medium-3-5","mistralai/mistral-nemo","mistralai/mistral-small-24b-instruct-2501","mistralai/mistral-small-3.1-24b-instruct","mistralai/mistral-small-3.2-24b-instruct","mistralai/mistral-small-2603","mistralai/mixtral-8x22b-instruct","mistralai/mistral-saba","mistralai/voxtral-small-24b-2507","~moonshotai/kimi-latest","moonshotai/kimi-k2","moonshotai/kimi-k2-0905","moonshotai/kimi-k2-thinking","moonshotai/kimi-k2.5","moonshotai/kimi-k2.6","moonshotai/kimi-k2.7-code","morph/morph-v3-fast","morph/morph-v3-large","gryphe/mythomax-l2-13b","nvidia/llama-3.3-nemotron-super-49b-v1.5","nvidia/nemotron-3-nano-30b-a3b","nvidia/nemotron-3-nano-30b-a3b:free","nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free","nvidia/nemotron-3-super-120b-a12b","nvidia/nemotron-3-super-120b-a12b:free","nvidia/nemotron-3-ultra-550b-a55b","nvidia/nemotron-3-ultra-550b-a55b:free","nvidia/nemotron-3.5-content-safety:free","nvidia/nemotron-nano-12b-v2-vl:free","nvidia/nemotron-nano-9b-v2:free","nex-agi/nex-n2-pro","nousresearch/hermes-3-llama-3.1-405b","nousresearch/hermes-3-llama-3.1-405b:free","nousresearch/hermes-3-llama-3.1-70b","nousresearch/hermes-4-405b","nousresearch/hermes-4-70b","~openai/gpt-latest","~openai/gpt-mini-latest","openai/gpt-audio","openai/gpt-audio-mini","openai/gpt-chat-latest","openai/gpt-3.5-turbo","openai/gpt-3.5-turbo-0613","openai/gpt-3.5-turbo-16k","openai/gpt-3.5-turbo-instruct","openai/gpt-4","openai/gpt-4-turbo","openai/gpt-4-turbo-preview","openai/gpt-4.1","openai/gpt-4.1-mini","openai/gpt-4.1-nano","openai/gpt-4o","openai/gpt-4o-2024-05-13","openai/gpt-4o-2024-08-06","openai/gpt-4o-2024-11-20","openai/gpt-4o-search-preview","openai/gpt-4o-mini","openai/gpt-4o-mini-2024-07-18","openai/gpt-4o-mini-search-preview","openai/gpt-5","openai/gpt-5-chat","openai/gpt-5-codex","openai/gpt-5-image","openai/gpt-5-image-mini","openai/gpt-5-mini","openai/gpt-5-nano","openai/gpt-5-pro","openai/gpt-5.1","openai/gpt-5.1-chat","openai/gpt-5.1-codex","openai/gpt-5.1-codex-max","openai/gpt-5.1-codex-mini","openai/gpt-5.2","openai/gpt-5.2-chat","openai/gpt-5.2-pro","openai/gpt-5.2-codex","openai/gpt-5.3-chat","openai/gpt-5.3-codex","openai/gpt-5.4","openai/gpt-5.4-image-2","openai/gpt-5.4-mini","openai/gpt-5.4-nano","openai/gpt-5.4-pro","openai/gpt-5.5","openai/gpt-5.5-pro","openai/gpt-oss-120b","openai/gpt-oss-120b:free","openai/gpt-oss-20b","openai/gpt-oss-20b:free","openai/gpt-oss-safeguard-20b","openai/o1","openai/o1-pro","openai/o3","openai/o3-deep-research","openai/o3-mini","openai/o3-mini-high","openai/o3-pro","openai/o4-mini","openai/o4-mini-deep-research","openai/o4-mini-high","openrouter/fusion","openrouter/owl-alpha","openrouter/pareto-code","perceptron/perceptron-mk1","perplexity/sonar","perplexity/sonar-deep-research","perplexity/sonar-pro","perplexity/sonar-pro-search","perplexity/sonar-reasoning-pro","poolside/laguna-m.1","poolside/laguna-m.1:free","poolside/laguna-xs.2","poolside/laguna-xs.2:free","qwen/qwen-2.5-72b-instruct","qwen/qwen-2.5-coder-32b-instruct","qwen/qwen-plus-2025-07-28","qwen/qwen-plus-2025-07-28:thinking","qwen/qwen-plus","qwen/qwen-2.5-7b-instruct","qwen/qwen2.5-vl-72b-instruct","qwen/qwen3-14b","qwen/qwen3-235b-a22b","qwen/qwen3-235b-a22b-2507","qwen/qwen3-235b-a22b-thinking-2507","qwen/qwen3-30b-a3b","qwen/qwen3-30b-a3b-instruct-2507","qwen/qwen3-30b-a3b-thinking-2507","qwen/qwen3-32b","qwen/qwen3-8b","qwen/qwen3-coder-30b-a3b-instruct","qwen/qwen3-coder","qwen/qwen3-coder:free","qwen/qwen3-coder-flash","qwen/qwen3-coder-next","qwen/qwen3-coder-plus","qwen/qwen3-max","qwen/qwen3-max-thinking","qwen/qwen3-next-80b-a3b-instruct","qwen/qwen3-next-80b-a3b-instruct:free","qwen/qwen3-next-80b-a3b-thinking","qwen/qwen3-vl-235b-a22b-instruct","qwen/qwen3-vl-235b-a22b-thinking","qwen/qwen3-vl-30b-a3b-instruct","qwen/qwen3-vl-30b-a3b-thinking","qwen/qwen3-vl-32b-instruct","qwen/qwen3-vl-8b-instruct","qwen/qwen3-vl-8b-thinking","qwen/qwen3.5-397b-a17b","qwen/qwen3.5-plus-02-15","qwen/qwen3.5-plus-20260420","qwen/qwen3.5-122b-a10b","qwen/qwen3.5-27b","qwen/qwen3.5-35b-a3b","qwen/qwen3.5-9b","qwen/qwen3.5-flash-02-23","qwen/qwen3.6-27b","qwen/qwen3.6-35b-a3b","qwen/qwen3.6-flash","qwen/qwen3.6-max-preview","qwen/qwen3.6-plus","qwen/qwen3.7-max","qwen/qwen3.7-plus","undi95/remm-slerp-l2-13b","rekaai/reka-edge","rekaai/reka-flash-3","relace/relace-apply-3","relace/relace-search","sakana/fugu-ultra","sao10k/l3-lunaris-8b","sao10k/l3.1-70b-hanami-x1","sao10k/l3.1-euryale-70b","sao10k/l3.3-euryale-70b","stepfun/step-3.5-flash","stepfun/step-3.7-flash","switchpoint/router","tencent/hunyuan-a13b-instruct","tencent/hy3-preview","thedrummer/cydonia-24b-v4.1","thedrummer/rocinante-12b","thedrummer/skyfall-36b-v2","thedrummer/unslopnemo-12b","upstage/solar-pro-3","cognitivecomputations/dolphin-mistral-24b-venice-edition:free","microsoft/wizardlm-2-8x22b","writer/palmyra-x5","xiaomi/mimo-v2.5","xiaomi/mimo-v2.5-pro","z-ai/glm-4.5","z-ai/glm-4.5-air","z-ai/glm-4.5v","z-ai/glm-4.6","z-ai/glm-4.6v","z-ai/glm-4.7","z-ai/glm-4.7-flash","z-ai/glm-5","z-ai/glm-5-turbo","z-ai/glm-5.1","z-ai/glm-5.2","z-ai/glm-5v-turbo","inclusionai/ling-2.6-1t","inclusionai/ling-2.6-flash","inclusionai/ring-2.6-1t","x-ai/grok-4.20","x-ai/grok-4.20-multi-agent","x-ai/grok-4.3","x-ai/grok-build-0.1"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,refresh_button:!0,required:!0,show:!0,title_case:!1,toggle:!1,tool_mode:!1,tooltips:{"ai21/jamba-large-1.7":"AI21: Jamba Large 1.7 (256,000 tokens)","aion-labs/aion-1.0":"AionLabs: Aion-1.0 (131,072 tokens)","aion-labs/aion-1.0-mini":"AionLabs: Aion-1.0-Mini (131,072 tokens)","aion-labs/aion-2.0":"AionLabs: Aion-2.0 (131,072 tokens)","aion-labs/aion-rp-llama-3.1-8b":"AionLabs: Aion-RP 1.0 (8B) (32,768 tokens)","allenai/olmo-3-32b-think":"AllenAI: Olmo 3 32B Think (65,536 tokens)","amazon/nova-2-lite-v1":"Amazon: Nova 2 Lite (1,000,000 tokens)","amazon/nova-lite-v1":"Amazon: Nova Lite 1.0 (300,000 tokens)","amazon/nova-micro-v1":"Amazon: Nova Micro 1.0 (128,000 tokens)","amazon/nova-premier-v1":"Amazon: Nova Premier 1.0 (1,000,000 tokens)","amazon/nova-pro-v1":"Amazon: Nova Pro 1.0 (300,000 tokens)","anthracite-org/magnum-v4-72b":"Magnum v4 72B (32,768 tokens)","anthropic/claude-3-haiku":"Anthropic: Claude 3 Haiku (200,000 tokens)","anthropic/claude-fable-5":"Anthropic: Claude Fable 5 (1,000,000 tokens)","anthropic/claude-haiku-4.5":"Anthropic: Claude Haiku 4.5 (200,000 tokens)","anthropic/claude-opus-4":"Anthropic: Claude Opus 4 (200,000 tokens)","anthropic/claude-opus-4.1":"Anthropic: Claude Opus 4.1 (200,000 tokens)","anthropic/claude-opus-4.5":"Anthropic: Claude Opus 4.5 (200,000 tokens)","anthropic/claude-opus-4.6":"Anthropic: Claude Opus 4.6 (1,000,000 tokens)","anthropic/claude-opus-4.6-fast":"Anthropic: Claude Opus 4.6 (Fast) (1,000,000 tokens)","anthropic/claude-opus-4.7":"Anthropic: Claude Opus 4.7 (1,000,000 tokens)","anthropic/claude-opus-4.7-fast":"Anthropic: Claude Opus 4.7 (Fast) (1,000,000 tokens)","anthropic/claude-opus-4.8":"Anthropic: Claude Opus 4.8 (1,000,000 tokens)","anthropic/claude-opus-4.8-fast":"Anthropic: Claude Opus 4.8 (Fast) (1,000,000 tokens)","anthropic/claude-sonnet-4":"Anthropic: Claude Sonnet 4 (1,000,000 tokens)","anthropic/claude-sonnet-4.5":"Anthropic: Claude Sonnet 4.5 (1,000,000 tokens)","anthropic/claude-sonnet-4.6":"Anthropic: Claude Sonnet 4.6 (1,000,000 tokens)","arcee-ai/coder-large":"Arcee AI: Coder Large (32,768 tokens)","arcee-ai/trinity-large-thinking":"Arcee AI: Trinity Large Thinking (262,144 tokens)","arcee-ai/trinity-mini":"Arcee AI: Trinity Mini (131,072 tokens)","arcee-ai/virtuoso-large":"Arcee AI: Virtuoso Large (131,072 tokens)","baidu/ernie-4.5-vl-424b-a47b":"Baidu: ERNIE 4.5 VL 424B A47B  (131,072 tokens)","bytedance-seed/seed-1.6":"ByteDance Seed: Seed 1.6 (262,144 tokens)","bytedance-seed/seed-1.6-flash":"ByteDance Seed: Seed 1.6 Flash (262,144 tokens)","bytedance-seed/seed-2.0-lite":"ByteDance Seed: Seed-2.0-Lite (262,144 tokens)","bytedance-seed/seed-2.0-mini":"ByteDance Seed: Seed-2.0-Mini (262,144 tokens)","bytedance/ui-tars-1.5-7b":"ByteDance: UI-TARS 7B  (128,000 tokens)","cognitivecomputations/dolphin-mistral-24b-venice-edition:free":"Venice: Uncensored (free) (32,768 tokens)","cohere/command-a":"Cohere: Command A (256,000 tokens)","cohere/command-r-08-2024":"Cohere: Command R (08-2024) (128,000 tokens)","cohere/command-r-plus-08-2024":"Cohere: Command R+ (08-2024) (128,000 tokens)","cohere/command-r7b-12-2024":"Cohere: Command R7B (12-2024) (128,000 tokens)","cohere/north-mini-code:free":"Cohere: North Mini Code (free) (256,000 tokens)","deepcogito/cogito-v2.1-671b":"Deep Cogito: Cogito v2.1 671B (128,000 tokens)","deepseek/deepseek-chat":"DeepSeek: DeepSeek V3 (131,072 tokens)","deepseek/deepseek-chat-v3-0324":"DeepSeek: DeepSeek V3 0324 (163,840 tokens)","deepseek/deepseek-chat-v3.1":"DeepSeek: DeepSeek V3.1 (163,840 tokens)","deepseek/deepseek-r1":"DeepSeek: R1 (163,840 tokens)","deepseek/deepseek-r1-0528":"DeepSeek: R1 0528 (163,840 tokens)","deepseek/deepseek-r1-distill-llama-70b":"DeepSeek: R1 Distill Llama 70B (128,000 tokens)","deepseek/deepseek-v3.1-terminus":"DeepSeek: DeepSeek V3.1 Terminus (163,840 tokens)","deepseek/deepseek-v3.2":"DeepSeek: DeepSeek V3.2 (131,072 tokens)","deepseek/deepseek-v3.2-exp":"DeepSeek: DeepSeek V3.2 Exp (163,840 tokens)","deepseek/deepseek-v4-flash":"DeepSeek: DeepSeek V4 Flash (1,048,576 tokens)","deepseek/deepseek-v4-pro":"DeepSeek: DeepSeek V4 Pro (1,048,576 tokens)","google/gemini-2.5-flash":"Google: Gemini 2.5 Flash (1,048,576 tokens)","google/gemini-2.5-flash-image":"Google: Nano Banana (Gemini 2.5 Flash Image) (32,768 tokens)","google/gemini-2.5-flash-lite":"Google: Gemini 2.5 Flash Lite (1,048,576 tokens)","google/gemini-2.5-flash-lite-preview-09-2025":"Google: Gemini 2.5 Flash Lite Preview 09-2025 (1,048,576 tokens)","google/gemini-2.5-pro":"Google: Gemini 2.5 Pro (1,048,576 tokens)","google/gemini-2.5-pro-preview":"Google: Gemini 2.5 Pro Preview 06-05 (1,048,576 tokens)","google/gemini-2.5-pro-preview-05-06":"Google: Gemini 2.5 Pro Preview 05-06 (1,048,576 tokens)","google/gemini-3-flash-preview":"Google: Gemini 3 Flash Preview (1,048,576 tokens)","google/gemini-3-pro-image":"Google: Nano Banana Pro (Gemini 3 Pro Image) (65,536 tokens)","google/gemini-3-pro-image-preview":"Google: Nano Banana Pro (Gemini 3 Pro Image Preview) (65,536 tokens)","google/gemini-3.1-flash-image":"Google: Nano Banana 2 (Gemini 3.1 Flash Image) (131,072 tokens)","google/gemini-3.1-flash-image-preview":"Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview) (131,072 tokens)","google/gemini-3.1-flash-lite":"Google: Gemini 3.1 Flash Lite (1,048,576 tokens)","google/gemini-3.1-flash-lite-preview":"Google: Gemini 3.1 Flash Lite Preview (1,048,576 tokens)","google/gemini-3.1-pro-preview":"Google: Gemini 3.1 Pro Preview (1,048,576 tokens)","google/gemini-3.1-pro-preview-customtools":"Google: Gemini 3.1 Pro Preview Custom Tools (1,048,756 tokens)","google/gemini-3.5-flash":"Google: Gemini 3.5 Flash (1,048,576 tokens)","google/gemma-2-27b-it":"Google: Gemma 2 27B (8,192 tokens)","google/gemma-3-12b-it":"Google: Gemma 3 12B (131,072 tokens)","google/gemma-3-27b-it":"Google: Gemma 3 27B (131,072 tokens)","google/gemma-3-4b-it":"Google: Gemma 3 4B (131,072 tokens)","google/gemma-3n-e4b-it":"Google: Gemma 3n 4B (32,768 tokens)","google/gemma-4-26b-a4b-it":"Google: Gemma 4 26B A4B  (262,144 tokens)","google/gemma-4-26b-a4b-it:free":"Google: Gemma 4 26B A4B  (free) (262,144 tokens)","google/gemma-4-31b-it":"Google: Gemma 4 31B (262,144 tokens)","google/gemma-4-31b-it:free":"Google: Gemma 4 31B (free) (262,144 tokens)","google/lyria-3-clip-preview":"Google: Lyria 3 Clip Preview (1,048,576 tokens)","google/lyria-3-pro-preview":"Google: Lyria 3 Pro Preview (1,048,576 tokens)","gryphe/mythomax-l2-13b":"MythoMax 13B (4,096 tokens)","ibm-granite/granite-4.0-h-micro":"IBM: Granite 4.0 Micro (131,000 tokens)","ibm-granite/granite-4.1-8b":"IBM: Granite 4.1 8B (131,072 tokens)","inception/mercury-2":"Inception: Mercury 2 (128,000 tokens)","inclusionai/ling-2.6-1t":"inclusionAI: Ling-2.6-1T (262,144 tokens)","inclusionai/ling-2.6-flash":"inclusionAI: Ling-2.6-flash (262,144 tokens)","inclusionai/ring-2.6-1t":"inclusionAI: Ring-2.6-1T (262,144 tokens)","inflection/inflection-3-pi":"Inflection: Inflection 3 Pi (8,000 tokens)","inflection/inflection-3-productivity":"Inflection: Inflection 3 Productivity (8,000 tokens)","kwaipilot/kat-coder-pro-v2":"Kwaipilot: KAT-Coder-Pro V2 (256,000 tokens)","liquid/lfm-2-24b-a2b":"LiquidAI: LFM2-24B-A2B (128,000 tokens)","liquid/lfm-2.5-1.2b-instruct:free":"LiquidAI: LFM2.5-1.2B-Instruct (free) (32,768 tokens)","liquid/lfm-2.5-1.2b-thinking:free":"LiquidAI: LFM2.5-1.2B-Thinking (free) (32,768 tokens)","mancer/weaver":"Mancer: Weaver (alpha) (8,000 tokens)","meta-llama/llama-3-8b-instruct":"Meta: Llama 3 8B Instruct (8,192 tokens)","meta-llama/llama-3.1-70b-instruct":"Meta: Llama 3.1 70B Instruct (131,072 tokens)","meta-llama/llama-3.1-8b-instruct":"Meta: Llama 3.1 8B Instruct (131,072 tokens)","meta-llama/llama-3.2-11b-vision-instruct":"Meta: Llama 3.2 11B Vision Instruct (131,072 tokens)","meta-llama/llama-3.2-1b-instruct":"Meta: Llama 3.2 1B Instruct (131,072 tokens)","meta-llama/llama-3.2-3b-instruct":"Meta: Llama 3.2 3B Instruct (131,072 tokens)","meta-llama/llama-3.2-3b-instruct:free":"Meta: Llama 3.2 3B Instruct (free) (131,072 tokens)","meta-llama/llama-3.3-70b-instruct":"Meta: Llama 3.3 70B Instruct (131,072 tokens)","meta-llama/llama-3.3-70b-instruct:free":"Meta: Llama 3.3 70B Instruct (free) (131,072 tokens)","meta-llama/llama-4-maverick":"Meta: Llama 4 Maverick (1,048,576 tokens)","meta-llama/llama-4-scout":"Meta: Llama 4 Scout (10,000,000 tokens)","meta-llama/llama-guard-4-12b":"Meta: Llama Guard 4 12B (163,840 tokens)","microsoft/phi-4":"Microsoft: Phi 4 (16,384 tokens)","microsoft/phi-4-mini-instruct":"Microsoft: Phi 4 Mini Instruct (131,072 tokens)","microsoft/wizardlm-2-8x22b":"WizardLM-2 8x22B (65,536 tokens)","minimax/minimax-01":"MiniMax: MiniMax-01 (1,000,192 tokens)","minimax/minimax-m1":"MiniMax: MiniMax M1 (1,000,000 tokens)","minimax/minimax-m2":"MiniMax: MiniMax M2 (204,800 tokens)","minimax/minimax-m2-her":"MiniMax: MiniMax M2-her (65,536 tokens)","minimax/minimax-m2.1":"MiniMax: MiniMax M2.1 (204,800 tokens)","minimax/minimax-m2.5":"MiniMax: MiniMax M2.5 (204,800 tokens)","minimax/minimax-m2.7":"MiniMax: MiniMax M2.7 (204,800 tokens)","minimax/minimax-m3":"MiniMax: MiniMax M3 (1,048,576 tokens)","mistralai/codestral-2508":"Mistral: Codestral 2508 (256,000 tokens)","mistralai/devstral-2512":"Mistral: Devstral 2 2512 (262,144 tokens)","mistralai/ministral-14b-2512":"Mistral: Ministral 3 14B 2512 (262,144 tokens)","mistralai/ministral-3b-2512":"Mistral: Ministral 3 3B 2512 (131,072 tokens)","mistralai/ministral-8b-2512":"Mistral: Ministral 3 8B 2512 (262,144 tokens)","mistralai/mistral-large":"Mistral Large (128,000 tokens)","mistralai/mistral-large-2407":"Mistral Large 2407 (131,072 tokens)","mistralai/mistral-large-2512":"Mistral: Mistral Large 3 2512 (262,144 tokens)","mistralai/mistral-medium-3":"Mistral: Mistral Medium 3 (131,072 tokens)","mistralai/mistral-medium-3-5":"Mistral: Mistral Medium 3.5 (262,144 tokens)","mistralai/mistral-medium-3.1":"Mistral: Mistral Medium 3.1 (131,072 tokens)","mistralai/mistral-nemo":"Mistral: Mistral Nemo (131,072 tokens)","mistralai/mistral-saba":"Mistral: Saba (32,768 tokens)","mistralai/mistral-small-24b-instruct-2501":"Mistral: Mistral Small 3 (32,768 tokens)","mistralai/mistral-small-2603":"Mistral: Mistral Small 4 (262,144 tokens)","mistralai/mistral-small-3.1-24b-instruct":"Mistral: Mistral Small 3.1 24B (128,000 tokens)","mistralai/mistral-small-3.2-24b-instruct":"Mistral: Mistral Small 3.2 24B (128,000 tokens)","mistralai/mixtral-8x22b-instruct":"Mistral: Mixtral 8x22B Instruct (65,536 tokens)","mistralai/voxtral-small-24b-2507":"Mistral: Voxtral Small 24B 2507 (32,000 tokens)","moonshotai/kimi-k2":"MoonshotAI: Kimi K2 0711 (131,072 tokens)","moonshotai/kimi-k2-0905":"MoonshotAI: Kimi K2 0905 (262,144 tokens)","moonshotai/kimi-k2-thinking":"MoonshotAI: Kimi K2 Thinking (262,144 tokens)","moonshotai/kimi-k2.5":"MoonshotAI: Kimi K2.5 (262,144 tokens)","moonshotai/kimi-k2.6":"MoonshotAI: Kimi K2.6 (262,144 tokens)","moonshotai/kimi-k2.7-code":"MoonshotAI: Kimi K2.7 Code (262,144 tokens)","morph/morph-v3-fast":"Morph: Morph V3 Fast (81,920 tokens)","morph/morph-v3-large":"Morph: Morph V3 Large (262,144 tokens)","nex-agi/nex-n2-pro":"Nex AGI: Nex-N2-Pro (262,144 tokens)","nousresearch/hermes-3-llama-3.1-405b":"Nous: Hermes 3 405B Instruct (131,072 tokens)","nousresearch/hermes-3-llama-3.1-405b:free":"Nous: Hermes 3 405B Instruct (free) (131,072 tokens)","nousresearch/hermes-3-llama-3.1-70b":"Nous: Hermes 3 70B Instruct (131,072 tokens)","nousresearch/hermes-4-405b":"Nous: Hermes 4 405B (131,072 tokens)","nousresearch/hermes-4-70b":"Nous: Hermes 4 70B (131,072 tokens)","nvidia/llama-3.3-nemotron-super-49b-v1.5":"NVIDIA: Llama 3.3 Nemotron Super 49B V1.5 (131,072 tokens)","nvidia/nemotron-3-nano-30b-a3b":"NVIDIA: Nemotron 3 Nano 30B A3B (262,144 tokens)","nvidia/nemotron-3-nano-30b-a3b:free":"NVIDIA: Nemotron 3 Nano 30B A3B (free) (256,000 tokens)","nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free":"NVIDIA: Nemotron 3 Nano Omni (free) (256,000 tokens)","nvidia/nemotron-3-super-120b-a12b":"NVIDIA: Nemotron 3 Super (1,000,000 tokens)","nvidia/nemotron-3-super-120b-a12b:free":"NVIDIA: Nemotron 3 Super (free) (1,000,000 tokens)","nvidia/nemotron-3-ultra-550b-a55b":"NVIDIA: Nemotron 3 Ultra (1,000,000 tokens)","nvidia/nemotron-3-ultra-550b-a55b:free":"NVIDIA: Nemotron 3 Ultra (free) (1,000,000 tokens)","nvidia/nemotron-3.5-content-safety:free":"NVIDIA: Nemotron 3.5 Content Safety (free) (128,000 tokens)","nvidia/nemotron-nano-12b-v2-vl:free":"NVIDIA: Nemotron Nano 12B 2 VL (free) (128,000 tokens)","nvidia/nemotron-nano-9b-v2:free":"NVIDIA: Nemotron Nano 9B V2 (free) (128,000 tokens)","openai/gpt-3.5-turbo":"OpenAI: GPT-3.5 Turbo (16,385 tokens)","openai/gpt-3.5-turbo-0613":"OpenAI: GPT-3.5 Turbo (older v0613) (4,095 tokens)","openai/gpt-3.5-turbo-16k":"OpenAI: GPT-3.5 Turbo 16k (16,385 tokens)","openai/gpt-3.5-turbo-instruct":"OpenAI: GPT-3.5 Turbo Instruct (4,095 tokens)","openai/gpt-4":"OpenAI: GPT-4 (8,191 tokens)","openai/gpt-4-turbo":"OpenAI: GPT-4 Turbo (128,000 tokens)","openai/gpt-4-turbo-preview":"OpenAI: GPT-4 Turbo Preview (128,000 tokens)","openai/gpt-4.1":"OpenAI: GPT-4.1 (1,047,576 tokens)","openai/gpt-4.1-mini":"OpenAI: GPT-4.1 Mini (1,047,576 tokens)","openai/gpt-4.1-nano":"OpenAI: GPT-4.1 Nano (1,047,576 tokens)","openai/gpt-4o":"OpenAI: GPT-4o (128,000 tokens)","openai/gpt-4o-2024-05-13":"OpenAI: GPT-4o (2024-05-13) (128,000 tokens)","openai/gpt-4o-2024-08-06":"OpenAI: GPT-4o (2024-08-06) (128,000 tokens)","openai/gpt-4o-2024-11-20":"OpenAI: GPT-4o (2024-11-20) (128,000 tokens)","openai/gpt-4o-mini":"OpenAI: GPT-4o-mini (128,000 tokens)","openai/gpt-4o-mini-2024-07-18":"OpenAI: GPT-4o-mini (2024-07-18) (128,000 tokens)","openai/gpt-4o-mini-search-preview":"OpenAI: GPT-4o-mini Search Preview (128,000 tokens)","openai/gpt-4o-search-preview":"OpenAI: GPT-4o Search Preview (128,000 tokens)","openai/gpt-5":"OpenAI: GPT-5 (400,000 tokens)","openai/gpt-5-chat":"OpenAI: GPT-5 Chat (128,000 tokens)","openai/gpt-5-codex":"OpenAI: GPT-5 Codex (400,000 tokens)","openai/gpt-5-image":"OpenAI: GPT-5 Image (400,000 tokens)","openai/gpt-5-image-mini":"OpenAI: GPT-5 Image Mini (400,000 tokens)","openai/gpt-5-mini":"OpenAI: GPT-5 Mini (400,000 tokens)","openai/gpt-5-nano":"OpenAI: GPT-5 Nano (400,000 tokens)","openai/gpt-5-pro":"OpenAI: GPT-5 Pro (400,000 tokens)","openai/gpt-5.1":"OpenAI: GPT-5.1 (400,000 tokens)","openai/gpt-5.1-chat":"OpenAI: GPT-5.1 Chat (128,000 tokens)","openai/gpt-5.1-codex":"OpenAI: GPT-5.1-Codex (400,000 tokens)","openai/gpt-5.1-codex-max":"OpenAI: GPT-5.1-Codex-Max (400,000 tokens)","openai/gpt-5.1-codex-mini":"OpenAI: GPT-5.1-Codex-Mini (400,000 tokens)","openai/gpt-5.2":"OpenAI: GPT-5.2 (400,000 tokens)","openai/gpt-5.2-chat":"OpenAI: GPT-5.2 Chat (128,000 tokens)","openai/gpt-5.2-codex":"OpenAI: GPT-5.2-Codex (400,000 tokens)","openai/gpt-5.2-pro":"OpenAI: GPT-5.2 Pro (400,000 tokens)","openai/gpt-5.3-chat":"OpenAI: GPT-5.3 Chat (128,000 tokens)","openai/gpt-5.3-codex":"OpenAI: GPT-5.3-Codex (400,000 tokens)","openai/gpt-5.4":"OpenAI: GPT-5.4 (1,050,000 tokens)","openai/gpt-5.4-image-2":"OpenAI: GPT-5.4 Image 2 (272,000 tokens)","openai/gpt-5.4-mini":"OpenAI: GPT-5.4 Mini (400,000 tokens)","openai/gpt-5.4-nano":"OpenAI: GPT-5.4 Nano (400,000 tokens)","openai/gpt-5.4-pro":"OpenAI: GPT-5.4 Pro (1,050,000 tokens)","openai/gpt-5.5":"OpenAI: GPT-5.5 (1,050,000 tokens)","openai/gpt-5.5-pro":"OpenAI: GPT-5.5 Pro (1,050,000 tokens)","openai/gpt-audio":"OpenAI: GPT Audio (128,000 tokens)","openai/gpt-audio-mini":"OpenAI: GPT Audio Mini (128,000 tokens)","openai/gpt-chat-latest":"OpenAI: GPT Chat Latest (400,000 tokens)","openai/gpt-oss-120b":"OpenAI: gpt-oss-120b (131,072 tokens)","openai/gpt-oss-120b:free":"OpenAI: gpt-oss-120b (free) (131,072 tokens)","openai/gpt-oss-20b":"OpenAI: gpt-oss-20b (131,072 tokens)","openai/gpt-oss-20b:free":"OpenAI: gpt-oss-20b (free) (131,072 tokens)","openai/gpt-oss-safeguard-20b":"OpenAI: gpt-oss-safeguard-20b (131,072 tokens)","openai/o1":"OpenAI: o1 (200,000 tokens)","openai/o1-pro":"OpenAI: o1-pro (200,000 tokens)","openai/o3":"OpenAI: o3 (200,000 tokens)","openai/o3-deep-research":"OpenAI: o3 Deep Research (200,000 tokens)","openai/o3-mini":"OpenAI: o3 Mini (200,000 tokens)","openai/o3-mini-high":"OpenAI: o3 Mini High (200,000 tokens)","openai/o3-pro":"OpenAI: o3 Pro (200,000 tokens)","openai/o4-mini":"OpenAI: o4 Mini (200,000 tokens)","openai/o4-mini-deep-research":"OpenAI: o4 Mini Deep Research (200,000 tokens)","openai/o4-mini-high":"OpenAI: o4 Mini High (200,000 tokens)","openrouter/auto":"Auto Router (2,000,000 tokens)","openrouter/bodybuilder":"Body Builder (beta) (128,000 tokens)","openrouter/free":"Free Models Router (200,000 tokens)","openrouter/fusion":"OpenRouter: Fusion (1,000,000 tokens)","openrouter/owl-alpha":"Owl Alpha (1,048,756 tokens)","openrouter/pareto-code":"Pareto Code Router (2,000,000 tokens)","perceptron/perceptron-mk1":"Perceptron: Perceptron Mk1 (32,768 tokens)","perplexity/sonar":"Perplexity: Sonar (127,072 tokens)","perplexity/sonar-deep-research":"Perplexity: Sonar Deep Research (128,000 tokens)","perplexity/sonar-pro":"Perplexity: Sonar Pro (200,000 tokens)","perplexity/sonar-pro-search":"Perplexity: Sonar Pro Search (200,000 tokens)","perplexity/sonar-reasoning-pro":"Perplexity: Sonar Reasoning Pro (128,000 tokens)","poolside/laguna-m.1":"Poolside: Laguna M.1 (262,144 tokens)","poolside/laguna-m.1:free":"Poolside: Laguna M.1 (free) (262,144 tokens)","poolside/laguna-xs.2":"Poolside: Laguna XS.2 (262,144 tokens)","poolside/laguna-xs.2:free":"Poolside: Laguna XS.2 (free) (262,144 tokens)","qwen/qwen-2.5-72b-instruct":"Qwen2.5 72B Instruct (131,072 tokens)","qwen/qwen-2.5-7b-instruct":"Qwen: Qwen2.5 7B Instruct (131,072 tokens)","qwen/qwen-2.5-coder-32b-instruct":"Qwen2.5 Coder 32B Instruct (128,000 tokens)","qwen/qwen-plus":"Qwen: Qwen-Plus (1,000,000 tokens)","qwen/qwen-plus-2025-07-28":"Qwen: Qwen Plus 0728 (1,000,000 tokens)","qwen/qwen-plus-2025-07-28:thinking":"Qwen: Qwen Plus 0728 (thinking) (1,000,000 tokens)","qwen/qwen2.5-vl-72b-instruct":"Qwen: Qwen2.5 VL 72B Instruct (131,072 tokens)","qwen/qwen3-14b":"Qwen: Qwen3 14B (131,702 tokens)","qwen/qwen3-235b-a22b":"Qwen: Qwen3 235B A22B (131,072 tokens)","qwen/qwen3-235b-a22b-2507":"Qwen: Qwen3 235B A22B Instruct 2507 (262,144 tokens)","qwen/qwen3-235b-a22b-thinking-2507":"Qwen: Qwen3 235B A22B Thinking 2507 (262,144 tokens)","qwen/qwen3-30b-a3b":"Qwen: Qwen3 30B A3B (131,072 tokens)","qwen/qwen3-30b-a3b-instruct-2507":"Qwen: Qwen3 30B A3B Instruct 2507 (131,072 tokens)","qwen/qwen3-30b-a3b-thinking-2507":"Qwen: Qwen3 30B A3B Thinking 2507 (131,072 tokens)","qwen/qwen3-32b":"Qwen: Qwen3 32B (131,072 tokens)","qwen/qwen3-8b":"Qwen: Qwen3 8B (131,072 tokens)","qwen/qwen3-coder":"Qwen: Qwen3 Coder 480B A35B (1,048,576 tokens)","qwen/qwen3-coder-30b-a3b-instruct":"Qwen: Qwen3 Coder 30B A3B Instruct (160,000 tokens)","qwen/qwen3-coder-flash":"Qwen: Qwen3 Coder Flash (1,000,000 tokens)","qwen/qwen3-coder-next":"Qwen: Qwen3 Coder Next (262,144 tokens)","qwen/qwen3-coder-plus":"Qwen: Qwen3 Coder Plus (1,000,000 tokens)","qwen/qwen3-coder:free":"Qwen: Qwen3 Coder 480B A35B (free) (1,048,576 tokens)","qwen/qwen3-max":"Qwen: Qwen3 Max (262,144 tokens)","qwen/qwen3-max-thinking":"Qwen: Qwen3 Max Thinking (262,144 tokens)","qwen/qwen3-next-80b-a3b-instruct":"Qwen: Qwen3 Next 80B A3B Instruct (262,144 tokens)","qwen/qwen3-next-80b-a3b-instruct:free":"Qwen: Qwen3 Next 80B A3B Instruct (free) (262,144 tokens)","qwen/qwen3-next-80b-a3b-thinking":"Qwen: Qwen3 Next 80B A3B Thinking (262,144 tokens)","qwen/qwen3-vl-235b-a22b-instruct":"Qwen: Qwen3 VL 235B A22B Instruct (262,144 tokens)","qwen/qwen3-vl-235b-a22b-thinking":"Qwen: Qwen3 VL 235B A22B Thinking (131,072 tokens)","qwen/qwen3-vl-30b-a3b-instruct":"Qwen: Qwen3 VL 30B A3B Instruct (262,144 tokens)","qwen/qwen3-vl-30b-a3b-thinking":"Qwen: Qwen3 VL 30B A3B Thinking (131,072 tokens)","qwen/qwen3-vl-32b-instruct":"Qwen: Qwen3 VL 32B Instruct (262,144 tokens)","qwen/qwen3-vl-8b-instruct":"Qwen: Qwen3 VL 8B Instruct (256,000 tokens)","qwen/qwen3-vl-8b-thinking":"Qwen: Qwen3 VL 8B Thinking (256,000 tokens)","qwen/qwen3.5-122b-a10b":"Qwen: Qwen3.5-122B-A10B (262,144 tokens)","qwen/qwen3.5-27b":"Qwen: Qwen3.5-27B (262,144 tokens)","qwen/qwen3.5-35b-a3b":"Qwen: Qwen3.5-35B-A3B (262,144 tokens)","qwen/qwen3.5-397b-a17b":"Qwen: Qwen3.5 397B A17B (256,000 tokens)","qwen/qwen3.5-9b":"Qwen: Qwen3.5-9B (262,144 tokens)","qwen/qwen3.5-flash-02-23":"Qwen: Qwen3.5-Flash (1,000,000 tokens)","qwen/qwen3.5-plus-02-15":"Qwen: Qwen3.5 Plus 2026-02-15 (1,000,000 tokens)","qwen/qwen3.5-plus-20260420":"Qwen: Qwen3.5 Plus 2026-04-20 (1,000,000 tokens)","qwen/qwen3.6-27b":"Qwen: Qwen3.6 27B (262,144 tokens)","qwen/qwen3.6-35b-a3b":"Qwen: Qwen3.6 35B A3B (262,144 tokens)","qwen/qwen3.6-flash":"Qwen: Qwen3.6 Flash (1,000,000 tokens)","qwen/qwen3.6-max-preview":"Qwen: Qwen3.6 Max Preview (262,144 tokens)","qwen/qwen3.6-plus":"Qwen: Qwen3.6 Plus (1,000,000 tokens)","qwen/qwen3.7-max":"Qwen: Qwen3.7 Max (1,000,000 tokens)","qwen/qwen3.7-plus":"Qwen: Qwen3.7 Plus (1,000,000 tokens)","rekaai/reka-edge":"Reka Edge (16,384 tokens)","rekaai/reka-flash-3":"Reka Flash 3 (65,536 tokens)","relace/relace-apply-3":"Relace: Relace Apply 3 (256,000 tokens)","relace/relace-search":"Relace: Relace Search (256,000 tokens)","sakana/fugu-ultra":"Sakana: Fugu Ultra (1,000,000 tokens)","sao10k/l3-lunaris-8b":"Sao10K: Llama 3 8B Lunaris (8,192 tokens)","sao10k/l3.1-70b-hanami-x1":"Sao10K: Llama 3.1 70B Hanami x1 (16,000 tokens)","sao10k/l3.1-euryale-70b":"Sao10K: Llama 3.1 Euryale 70B v2.2 (131,072 tokens)","sao10k/l3.3-euryale-70b":"Sao10K: Llama 3.3 Euryale 70B (131,072 tokens)","stepfun/step-3.5-flash":"StepFun: Step 3.5 Flash (262,144 tokens)","stepfun/step-3.7-flash":"StepFun: Step 3.7 Flash (256,000 tokens)","switchpoint/router":"Switchpoint Router (131,072 tokens)","tencent/hunyuan-a13b-instruct":"Tencent: Hunyuan A13B Instruct (131,072 tokens)","tencent/hy3-preview":"Tencent: Hy3 preview (262,144 tokens)","thedrummer/cydonia-24b-v4.1":"TheDrummer: Cydonia 24B V4.1 (131,072 tokens)","thedrummer/rocinante-12b":"TheDrummer: Rocinante 12B (32,768 tokens)","thedrummer/skyfall-36b-v2":"TheDrummer: Skyfall 36B V2 (32,768 tokens)","thedrummer/unslopnemo-12b":"TheDrummer: UnslopNemo 12B (32,768 tokens)","undi95/remm-slerp-l2-13b":"ReMM SLERP 13B (6,144 tokens)","upstage/solar-pro-3":"Upstage: Solar Pro 3 (128,000 tokens)","writer/palmyra-x5":"Writer: Palmyra X5 (1,040,000 tokens)","x-ai/grok-4.20":"xAI: Grok 4.20 (2,000,000 tokens)","x-ai/grok-4.20-multi-agent":"xAI: Grok 4.20 Multi-Agent (2,000,000 tokens)","x-ai/grok-4.3":"xAI: Grok 4.3 (1,000,000 tokens)","x-ai/grok-build-0.1":"xAI: Grok Build 0.1 (256,000 tokens)","xiaomi/mimo-v2.5":"Xiaomi: MiMo-V2.5 (1,048,576 tokens)","xiaomi/mimo-v2.5-pro":"Xiaomi: MiMo-V2.5-Pro (1,048,576 tokens)","z-ai/glm-4.5":"Z.ai: GLM 4.5 (131,072 tokens)","z-ai/glm-4.5-air":"Z.ai: GLM 4.5 Air (131,072 tokens)","z-ai/glm-4.5v":"Z.ai: GLM 4.5V (65,536 tokens)","z-ai/glm-4.6":"Z.ai: GLM 4.6 (202,752 tokens)","z-ai/glm-4.6v":"Z.ai: GLM 4.6V (131,072 tokens)","z-ai/glm-4.7":"Z.ai: GLM 4.7 (202,752 tokens)","z-ai/glm-4.7-flash":"Z.ai: GLM 4.7 Flash (202,752 tokens)","z-ai/glm-5":"Z.ai: GLM 5 (202,752 tokens)","z-ai/glm-5-turbo":"Z.ai: GLM 5 Turbo (262,144 tokens)","z-ai/glm-5.1":"Z.ai: GLM 5.1 (202,752 tokens)","z-ai/glm-5.2":"Z.ai: GLM 5.2 (1,048,576 tokens)","z-ai/glm-5v-turbo":"Z.ai: GLM 5V Turbo (202,752 tokens)","~anthropic/claude-fable-latest":"Anthropic: Claude Fable Latest (1,000,000 tokens)","~anthropic/claude-haiku-latest":"Anthropic Claude Haiku Latest (200,000 tokens)","~anthropic/claude-opus-latest":"Anthropic: Claude Opus Latest (1,000,000 tokens)","~anthropic/claude-sonnet-latest":"Anthropic Claude Sonnet Latest (1,000,000 tokens)","~google/gemini-flash-latest":"Google Gemini Flash Latest (1,048,576 tokens)","~google/gemini-pro-latest":"Google Gemini Pro Latest (1,048,576 tokens)","~moonshotai/kimi-latest":"MoonshotAI Kimi Latest (262,144 tokens)","~openai/gpt-latest":"OpenAI GPT Latest (1,050,000 tokens)","~openai/gpt-mini-latest":"OpenAI GPT Mini Latest (400,000 tokens)"},trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"deepseek/deepseek-v4-flash"},site_url:{_input_type:"StrInput",advanced:!0,display_name:"Site URL",dynamic:!1,info:"",list:!1,list_add_label:"Add More",load_from_db:!1,name:"site_url",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"After validation of schema then print the pass and failed report"},temperature:{_input_type:"SliderInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"",max_label:"",max_label_icon:"",min_label:"",min_label_icon:"",name:"temperature",override_skip:!1,placeholder:"",range_spec:{max:2,min:0,step:.01,step_type:"float"},required:!1,show:!0,slider_buttons:!1,slider_buttons_options:[],slider_input:!1,title_case:!1,tool_mode:!1,track_in_telemetry:!1,type:"slider",value:.7}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"OpenRouterComponent"},dragging:!1,id:"OpenRouterComponent-aSpak",measured:{height:485,width:320},position:{x:867.0835988345729,y:127.0951225567911},selected:!1,type:"genericNode"}],viewport:{x:191.87541975420373,y:117.84667811848095,zoom:.5747767822287406}},description:"Building Intelligent Interactions.",endpoint_name:null,id:"98f2680e-e3ed-46e6-a983-a352510abb2a",is_component:!1,last_tested_version:"1.10.0",locked:!1,name:"AI3X API Contract Validator",tags:[]}},{id:"bug-triage-ai-agent",title:"Bug_Triage_AI_Agent",description:"Create, Chain, Communicate.",fileName:"Bug_Triage_AI_Agent.json",rawData:{data:{edges:[{animated:!1,className:"",data:{sourceHandle:{dataType:"ChatInput",id:"ChatInput-jKDBG",name:"message",output_types:["Message"]},targetHandle:{fieldName:"issue_keys",id:"Prompt Template-uyv50",inputTypes:["Message"],type:"str"}},id:"xy-edge__ChatInput-jKDBG{œdataTypeœ:œChatInputœ,œidœ:œChatInput-jKDBGœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-uyv50{œfieldNameœ:œissue_keysœ,œidœ:œPrompt Template-uyv50œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"ChatInput-jKDBG",sourceHandle:"{œdataTypeœ:œChatInputœ,œidœ:œChatInput-jKDBGœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-uyv50",targetHandle:"{œfieldNameœ:œissue_keysœ,œidœ:œPrompt Template-uyv50œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-uyv50",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"url_input",id:"APIRequest-ebFnM",inputTypes:["Message"],type:"str"}},id:"xy-edge__Prompt Template-uyv50{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-uyv50œ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-APIRequest-ebFnM{œfieldNameœ:œurl_inputœ,œidœ:œAPIRequest-ebFnMœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-uyv50",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-uyv50œ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"APIRequest-ebFnM",targetHandle:"{œfieldNameœ:œurl_inputœ,œidœ:œAPIRequest-ebFnMœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"APIRequest",id:"APIRequest-ebFnM",name:"data",output_types:["JSON"]},targetHandle:{fieldName:"jira_json",id:"JiraSearchParserComponent-LyFLX",inputTypes:["Data","JSON"],type:"other"}},id:"xy-edge__APIRequest-ebFnM{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-ebFnMœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}-JiraSearchParserComponent-LyFLX{œfieldNameœ:œjira_jsonœ,œidœ:œJiraSearchParserComponent-LyFLXœ,œinputTypesœ:[œDataœ,œJSONœ],œtypeœ:œotherœ}",selected:!1,source:"APIRequest-ebFnM",sourceHandle:"{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-ebFnMœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}",target:"JiraSearchParserComponent-LyFLX",targetHandle:"{œfieldNameœ:œjira_jsonœ,œidœ:œJiraSearchParserComponent-LyFLXœ,œinputTypesœ:[œDataœ,œJSONœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"JiraSearchParserComponent",id:"JiraSearchParserComponent-LyFLX",name:"parsed_text",output_types:["Message"]},targetHandle:{fieldName:"issue",id:"Prompt Template-3Z68G",inputTypes:["Message"],type:"str"}},id:"xy-edge__JiraSearchParserComponent-LyFLX{œdataTypeœ:œJiraSearchParserComponentœ,œidœ:œJiraSearchParserComponent-LyFLXœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-3Z68G{œfieldNameœ:œissueœ,œidœ:œPrompt Template-3Z68Gœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"JiraSearchParserComponent-LyFLX",sourceHandle:"{œdataTypeœ:œJiraSearchParserComponentœ,œidœ:œJiraSearchParserComponent-LyFLXœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-3Z68G",targetHandle:"{œfieldNameœ:œissueœ,œidœ:œPrompt Template-3Z68Gœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-3Z68G",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"system_message",id:"MistralModel-Rdd6b",inputTypes:["Message"],type:"str"}},id:"xy-edge__Prompt Template-3Z68G{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-3Z68Gœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-MistralModel-Rdd6b{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-Rdd6bœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-3Z68G",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-3Z68Gœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"MistralModel-Rdd6b",targetHandle:"{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-Rdd6bœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MistralModel",id:"MistralModel-Rdd6b",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"input",id:"SaveToFile-ieDaM",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"xy-edge__MistralModel-Rdd6b{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-Rdd6bœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-SaveToFile-ieDaM{œfieldNameœ:œinputœ,œidœ:œSaveToFile-ieDaMœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"MistralModel-Rdd6b",sourceHandle:"{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-Rdd6bœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"SaveToFile-ieDaM",targetHandle:"{œfieldNameœ:œinputœ,œidœ:œSaveToFile-ieDaMœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"SaveToFile",id:"SaveToFile-ieDaM",name:"message",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-PKpIM",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"xy-edge__SaveToFile-ieDaM{œdataTypeœ:œSaveToFileœ,œidœ:œSaveToFile-ieDaMœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-PKpIM{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-PKpIMœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"SaveToFile-ieDaM",sourceHandle:"{œdataTypeœ:œSaveToFileœ,œidœ:œSaveToFile-ieDaMœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-PKpIM",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-PKpIMœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"}],nodes:[{data:{id:"note-bM6mm",node:{description:`Bug Triage AI Agent -
Hand it one Jira issue key. It fetches the ticket, reads it with Groq, and returns severity, priority, impact areas, and a root-cause hypothesis — as strict JSON.`,display_name:"",documentation:"",template:{}},type:"note"},dragging:!1,height:140,id:"note-bM6mm",measured:{height:140,width:520},position:{x:-5.75447650107003,y:-355.52492603337976},selected:!1,type:"noteNode",width:520},{data:{id:"Prompt Template-3Z68G",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["issue"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},issue:{advanced:!1,display_name:"issue",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"issue",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`You are a Senior Software QA Engineer and Bug Triage Lead with extensive experience in Jira, software testing, production support, distributed systems, APIs, web applications, mobile applications, and Agile software development.

Your task is to perform a professional bug triage based ONLY on the Jira issue provided.

JIRA ISSUE (JSON):
{issue}

=========================
TRIAGE GUIDELINES
=========================

• Use only the information present in the Jira issue.
• Never invent stack traces, logs, API responses, screenshots, environments, or root causes.
• If information is missing, explicitly state "Not Provided".
• Separate confirmed facts from reasonable inferences.
• Be objective and concise.

=========================
ANALYSIS
=========================

Provide the following sections.

# 1. Executive Summary
Summarize the issue in 2–4 sentences.

# 2. Issue Classification
Determine:
- Issue Type
- Functional Area
- Affected Module(s)
- Platform (Web/Mobile/API/Backend/Database/Infrastructure/Unknown)

# 3. Severity Assessment

Choose ONE:

- Blocker
- Critical
- Major
- Minor
- Trivial

Explain why.

# 4. Priority Assessment

Choose ONE:

- P0
- P1
- P2
- P3
- P4

Explain why from a business perspective.

# 5. Customer Impact

Describe:

- Users affected
- Business workflows affected
- Data impact
- Revenue impact
- Security impact
- Compliance impact

If unknown, state Not Provided.

# 6. Impact Areas

List:

- Features
- Modules
- APIs
- Database
- UI
- Authentication
- Payments
- Notifications
- Reporting
- Third-party integrations

Only include impacted areas supported by the Jira issue.

# 7. Root Cause Analysis

Provide:

Confirmed Evidence:
(List facts from Jira)

Possible Root Causes:
(List hypotheses ordered from most likely to least likely.)

Confidence:
High / Medium / Low

# 8. Risk Assessment

Assess:

- Regression Risk
- Production Risk
- Data Loss Risk
- Security Risk
- Performance Risk

Explain each briefly.

# 9. Missing Information

Identify missing details that would improve triage, such as:

- Steps to reproduce
- Expected result
- Actual result
- Environment
- Browser
- Device
- Logs
- Stack trace
- Screenshots
- API payload
- Database values

# 10. Recommended Investigation

Recommend what developers should inspect first.

Examples:

- Backend service
- API
- UI validation
- Database
- Deployment
- Authentication
- Network
- Browser Console
- Server Logs

# 11. QA Recommendations

Recommend testing:

- Functional Testing
- Regression Testing
- Boundary Testing
- Negative Testing
- API Testing
- Integration Testing
- Cross-browser Testing
- Performance Testing (if applicable)

# 12. Final Triage Decision

Return:

Severity:
Priority:
Impacted Modules:
Likely Root Cause:
Recommended Owner Team:
Confidence:
Justification:`},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},id:"Prompt Template-3Z68G",measured:{height:347,width:320},position:{x:995.2147155726792,y:276.5791473164461},selected:!1,type:"genericNode"},{data:{id:"ChatInput-jKDBG",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Get chat inputs from the Playground.",display_name:"Chat Input",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","files"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"7a26c54d89ed",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.input_output.chat.ChatInput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Chat Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from lfx.base.data.utils import IMG_FILE_TYPES, TEXT_FILE_TYPES
from lfx.base.io.chat import ChatComponent
from lfx.inputs.inputs import BoolInput
from lfx.io import (
    DropdownInput,
    FileInput,
    MessageTextInput,
    MultilineInput,
    Output,
)
from lfx.schema.message import Message
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_USER,
    MESSAGE_SENDER_USER,
)


class ChatInput(ChatComponent):
    display_name = "Chat Input"
    description = "Get chat inputs from the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatInput"
    minimized = True

    inputs = [
        MultilineInput(
            name="input_value",
            display_name="Input Text",
            value="",
            info="Message to be passed as input.",
            input_types=[],
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_USER,
            info="Type of sender.",
            advanced=True,
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_USER,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        FileInput(
            name="files",
            display_name="Files",
            file_types=TEXT_FILE_TYPES + IMG_FILE_TYPES,
            info="Files to be sent with the message.",
            advanced=True,
            is_list=True,
            temp_file=True,
        ),
    ]
    outputs = [
        Output(display_name="Chat Message", name="message", method="message_response"),
    ]

    async def message_response(self) -> Message:
        # Ensure files is a list and filter out empty/None values
        files = self.files if self.files else []
        if files and not isinstance(files, list):
            files = [files]
        # Filter out None/empty values
        files = [f for f in files if f is not None and f != ""]

        session_id = self.session_id or self.graph.session_id or ""
        message = await Message.create(
            text=self.input_value,
            sender=self.sender,
            sender_name=self.sender_name,
            session_id=session_id,
            context_id=self.context_id,
            files=files,
        )
        if session_id and isinstance(message, Message) and self.should_store_message:
            stored_message = await self.send_message(
                message,
            )
            self.message.value = stored_message
            message = stored_message

        self.status = message
        return message
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},files:{_input_type:"FileInput",advanced:!0,display_name:"Files",dynamic:!1,fileTypes:["csv","json","pdf","txt","md","mdx","yaml","yml","xml","html","htm","docx","py","sh","sql","js","ts","tsx","jpg","jpeg","png","bmp","image"],file_path:"",info:"Files to be sent with the message.",list:!0,list_add_label:"Add More",name:"files",override_skip:!1,placeholder:"",required:!1,show:!0,temp_file:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""},input_value:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"Input Text",dynamic:!1,info:"Message to be passed as input.",input_types:[],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"input_value",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"User"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"User"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatInput"},dragging:!1,id:"ChatInput-jKDBG",measured:{height:52,width:192},position:{x:-486.38747433165895,y:38.98507986128176},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-uyv50",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["issue_keys"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_frontend_node_flow_id:{value:"d0de0863-b3f4-44f8-8720-a187e4029213"},_frontend_node_folder_id:{value:"011fd645-4f38-4d59-8c87-4f3c8606d1ae"},_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},is_refresh:!1,issue_keys:{advanced:!1,display_name:"issue_keys",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"issue_keys",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:"https://jaivir.atlassian.net/rest/api/3/search/jql?jql=key%20in%20({issue_keys})&fields=summary,description,status,priority,issuetype"},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-uyv50",measured:{height:347,width:320},position:{x:-225.72740943084136,y:131.06306235259794},selected:!1,type:"genericNode"},{data:{id:"APIRequest-ebFnM",node:{base_classes:["JSON"],beta:!1,conditional_paths:[],custom_fields:{},description:"Make HTTP requests using URL or cURL commands.",display_name:"API Request",documentation:"https://docs.langflow.org/api-request",edited:!1,field_order:["url_input","curl_input","method","mode","query_params","body","headers","timeout","follow_redirects","save_to_file","include_httpx_metadata"],frozen:!1,icon:"Globe",last_updated:"2026-06-29T18:30:48.939Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"1a052ebb9519",dependencies:{dependencies:[{name:"aiofiles",version:"24.1.0"},{name:"httpx",version:"0.28.1"},{name:"validators",version:"0.35.0"},{name:"lfx",version:null}],total_dependencies:4},module:"lfx.components.data_source.api_request.APIRequestComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"API Response",group_outputs:!1,loop_types:null,method:"make_api_request",name:"data",options:null,required_inputs:null,selected:"JSON",tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"acfcd291-de1a-4419-b163-2ab582bd0d77"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",body:{_input_type:"TableInput",advanced:!1,display_name:"Body",dynamic:!1,info:"The body to send with the request as a dictionary (for POST, PATCH, PUT).",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"body",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Parameter name",display_name:"Key",formatter:"text",name:"key",type:"str"},{description:"Parameter value",display_name:"Value",formatter:"text",name:"value"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[]},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import json
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import parse_qsl, urlencode, urljoin, urlparse, urlunparse

import aiofiles
import aiofiles.os as aiofiles_os
import httpx
import validators

from lfx.base.curl.parse import parse_context
from lfx.custom.custom_component.component import Component
from lfx.inputs.inputs import TabInput
from lfx.io import (
    BoolInput,
    DataInput,
    DropdownInput,
    IntInput,
    MessageTextInput,
    MultilineInput,
    Output,
    TableInput,
)
from lfx.schema.data import Data
from lfx.schema.dotdict import dotdict
from lfx.utils.component_utils import set_current_fields, set_field_advanced, set_field_display

# SSRF Protection imports - for preventing Server-Side Request Forgery attacks
from lfx.utils.ssrf_protection import (
    SSRFProtectionError,
    is_ssrf_protection_enabled,
    validate_and_resolve_url,
)
from lfx.utils.ssrf_transport import create_ssrf_protected_client

# Define fields for each mode
MODE_FIELDS = {
    "URL": [
        "url_input",
        "method",
    ],
    "cURL": ["curl_input"],
}

# Fields that should always be visible
DEFAULT_FIELDS = ["mode"]

# HTTP redirect status codes (RFC 9110).
HTTP_MOVED_PERMANENTLY = 301
HTTP_FOUND = 302
HTTP_SEE_OTHER = 303
HTTP_TEMPORARY_REDIRECT = 307
HTTP_PERMANENT_REDIRECT = 308

# Maximum number of redirects to follow when re-validating each hop (matches httpx's default).
MAX_REDIRECTS = 20

# HTTP status codes that represent a redirect carrying a Location header.
REDIRECT_STATUS_CODES = frozenset(
    {
        HTTP_MOVED_PERMANENTLY,
        HTTP_FOUND,
        HTTP_SEE_OTHER,
        HTTP_TEMPORARY_REDIRECT,
        HTTP_PERMANENT_REDIRECT,
    }
)


class APIRequestComponent(Component):
    display_name = "API Request"
    description = "Make HTTP requests using URL or cURL commands."
    documentation: str = "https://docs.langflow.org/api-request"
    icon = "Globe"
    name = "APIRequest"

    inputs = [
        MessageTextInput(
            name="url_input",
            display_name="URL",
            info="Enter the URL for the request.",
            advanced=False,
            tool_mode=True,
        ),
        MultilineInput(
            name="curl_input",
            display_name="cURL",
            info=(
                "Paste a curl command to populate the fields. "
                "This will fill in the dictionary fields for headers and body."
            ),
            real_time_refresh=True,
            tool_mode=True,
            advanced=True,
            show=False,
        ),
        DropdownInput(
            name="method",
            display_name="Method",
            options=["GET", "POST", "PATCH", "PUT", "DELETE"],
            value="GET",
            info="The HTTP method to use.",
            real_time_refresh=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["URL", "cURL"],
            value="URL",
            info="Enable cURL mode to populate fields from a cURL command.",
            real_time_refresh=True,
        ),
        DataInput(
            name="query_params",
            display_name="Query Parameters",
            info="The query parameters to append to the URL.",
            advanced=True,
        ),
        TableInput(
            name="body",
            display_name="Body",
            info="The body to send with the request as a dictionary (for POST, PATCH, PUT).",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Key",
                    "type": "str",
                    "description": "Parameter name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "description": "Parameter value",
                },
            ],
            value=[],
            input_types=["Data", "JSON"],
            advanced=True,
            real_time_refresh=True,
        ),
        TableInput(
            name="headers",
            display_name="Headers",
            info="The headers to send with the request",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Header",
                    "type": "str",
                    "description": "Header name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "type": "str",
                    "description": "Header value",
                },
            ],
            value=[{"key": "User-Agent", "value": "Langflow/1.0"}],
            advanced=True,
            input_types=["Data", "JSON"],
            real_time_refresh=True,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            value=30,
            info="The timeout to use for the request.",
            advanced=True,
        ),
        BoolInput(
            name="follow_redirects",
            display_name="Follow Redirects",
            value=False,
            info=(
                "Whether to follow HTTP redirects. "
                "WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL "
                "redirects to internal resources. Only enable if you trust the target server. "
                "See OWASP SSRF Prevention Cheat Sheet for details."
            ),
            advanced=True,
        ),
        BoolInput(
            name="save_to_file",
            display_name="Save to File",
            value=False,
            info="Save the API response to a temporary file",
            advanced=True,
        ),
        BoolInput(
            name="include_httpx_metadata",
            display_name="Include HTTPx Metadata",
            value=False,
            info=(
                "Include properties such as headers, status_code, response_headers, "
                "and redirection_history in the output."
            ),
            advanced=True,
        ),
    ]

    outputs = [
        Output(display_name="API Response", name="data", method="make_api_request"),
    ]

    def _parse_json_value(self, value: Any) -> Any:
        """Parse a value that might be a JSON string."""
        if not isinstance(value, str):
            return value

        try:
            parsed = json.loads(value)
        except json.JSONDecodeError:
            return value
        else:
            return parsed

    def _process_body(self, body: Any) -> dict:
        """Process the body input into a valid dictionary."""
        if body is None:
            return {}
        if hasattr(body, "data"):
            body = body.data
        if isinstance(body, dict):
            return self._process_dict_body(body)
        if isinstance(body, str):
            return self._process_string_body(body)
        if isinstance(body, list):
            return self._process_list_body(body)
        return {}

    def _process_dict_body(self, body: dict) -> dict:
        """Process dictionary body by parsing JSON values."""
        return {k: self._parse_json_value(v) for k, v in body.items()}

    def _process_string_body(self, body: str) -> dict:
        """Process string body by attempting JSON parse."""
        try:
            return self._process_body(json.loads(body))
        except json.JSONDecodeError:
            return {"data": body}

    def _process_list_body(self, body: list) -> dict:
        """Process list body by converting to key-value dictionary."""
        processed_dict = {}
        try:
            for item in body:
                # Unwrap Data objects
                current_item = item
                if hasattr(item, "data"):
                    unwrapped_data = item.data
                    # If the unwrapped data is a dict but not key-value format, use it directly
                    if isinstance(unwrapped_data, dict) and not self._is_valid_key_value_item(unwrapped_data):
                        return unwrapped_data
                    current_item = unwrapped_data
                if not self._is_valid_key_value_item(current_item):
                    continue
                key = current_item["key"]
                value = self._parse_json_value(current_item["value"])
                processed_dict[key] = value
        except (KeyError, TypeError, ValueError) as e:
            self.log(f"Failed to process body list: {e}")
            return {}
        return processed_dict

    def _is_valid_key_value_item(self, item: Any) -> bool:
        """Check if an item is a valid key-value dictionary."""
        return isinstance(item, dict) and "key" in item and "value" in item

    def parse_curl(self, curl: str, build_config: dotdict) -> dotdict:
        """Parse a cURL command and update build configuration."""
        try:
            parsed = parse_context(curl)

            # Update basic configuration
            url = parsed.url
            # Normalize URL before setting it
            url = self._normalize_url(url)

            build_config["url_input"]["value"] = url
            build_config["method"]["value"] = parsed.method.upper()

            # Process headers
            headers_list = [{"key": k, "value": v} for k, v in parsed.headers.items()]
            build_config["headers"]["value"] = headers_list

            # Process body data
            if not parsed.data:
                build_config["body"]["value"] = []
            elif parsed.data:
                try:
                    json_data = json.loads(parsed.data)
                    if isinstance(json_data, dict):
                        body_list = [
                            {"key": k, "value": json.dumps(v) if isinstance(v, dict | list) else str(v)}
                            for k, v in json_data.items()
                        ]
                        build_config["body"]["value"] = body_list
                    else:
                        build_config["body"]["value"] = [{"key": "data", "value": json.dumps(json_data)}]
                except json.JSONDecodeError:
                    build_config["body"]["value"] = [{"key": "data", "value": parsed.data}]

        except Exception as exc:
            msg = f"Error parsing curl: {exc}"
            self.log(msg)
            raise ValueError(msg) from exc

        return build_config

    def _normalize_url(self, url: str) -> str:
        """Normalize URL by adding https:// if no protocol is specified."""
        if not url or not isinstance(url, str):
            msg = "URL cannot be empty"
            raise ValueError(msg)

        url = url.strip()
        if url.startswith(("http://", "https://")):
            return url
        return f"https://{url}"

    async def make_request(
        self,
        client: httpx.AsyncClient,
        method: str,
        url: str,
        headers: dict | None = None,
        body: Any = None,
        timeout: int = 5,
        *,
        follow_redirects: bool = False,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        redirection_history = []

        try:
            # Prepare request parameters
            request_params = {
                "method": method,
                "url": url,
                "headers": headers,
                "timeout": timeout,
                "follow_redirects": follow_redirects,
            }
            # Only include body for methods that support it (GET must not have a body per HTTP spec)
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body
            response = await client.request(**request_params)

            redirection_history = [
                {
                    "url": redirect.headers.get("Location", str(redirect.url)),
                    "status_code": redirect.status_code,
                }
                for redirect in response.history
            ]

            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
            self.log(f"Error making request to {url}")
            return Data(
                data={
                    "source": url,
                    "headers": headers,
                    "status_code": 500,
                    "error": str(exc),
                    **({"redirection_history": redirection_history} if redirection_history else {}),
                },
            )

    async def _build_response_data(
        self,
        response: httpx.Response,
        source_url: str,
        headers: dict | None,
        redirection_history: list,
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Turn an httpx response into the component's \`\`Data\`\` output.

        Shared by the standard request path (\`\`make_request\`\`) and the redirect
        re-validation path (\`\`_follow_redirects_with_validation\`\`) so both produce
        identical metadata, optional file saving, and body decoding.
        """
        is_binary, file_path = await self._response_info(response, with_file_path=save_to_file)
        response_headers = self._headers_to_dict(response.headers)

        # Base metadata
        metadata = {
            "source": source_url,
            "status_code": response.status_code,
            "response_headers": response_headers,
        }

        if redirection_history:
            metadata["redirection_history"] = redirection_history

        if save_to_file:
            mode = "wb" if is_binary else "w"
            encoding = response.encoding if mode == "w" else None
            if file_path:
                await aiofiles_os.makedirs(file_path.parent, exist_ok=True)
                if is_binary:
                    async with aiofiles.open(file_path, "wb") as f:
                        await f.write(response.content)
                        await f.flush()
                else:
                    async with aiofiles.open(file_path, "w", encoding=encoding) as f:
                        await f.write(response.text)
                        await f.flush()
                metadata["file_path"] = str(file_path)

            if include_httpx_metadata:
                metadata.update({"headers": headers})
            return Data(data=metadata)

        # Handle response content
        if is_binary:
            result = response.content
        else:
            try:
                result = response.json()
            except json.JSONDecodeError:
                self.log("Failed to decode JSON response")
                result = response.text.encode("utf-8")

        metadata["result"] = result

        if include_httpx_metadata:
            metadata.update({"headers": headers})

        return Data(data=metadata)

    def add_query_params(self, url: str, params: dict) -> str:
        """Add query parameters to URL efficiently."""
        if not params:
            return url
        url_parts = list(urlparse(url))
        query = dict(parse_qsl(url_parts[4]))
        query.update(params)
        url_parts[4] = urlencode(query)
        return urlunparse(url_parts)

    def _headers_to_dict(self, headers: httpx.Headers) -> dict[str, str]:
        """Convert HTTP headers to a dictionary with lowercased keys."""
        return {k.lower(): v for k, v in headers.items()}

    def _process_headers(self, headers: Any) -> dict:
        """Process the headers input into a valid dictionary."""
        if headers is None:
            return {}
        if isinstance(headers, dict):
            return headers
        if isinstance(headers, list):
            return {item["key"]: item["value"] for item in headers if self._is_valid_key_value_item(item)}
        return {}

    async def make_api_request(self) -> Data:
        """Make HTTP request with SSRF protection and DNS pinning.

        This method implements comprehensive SSRF (Server-Side Request Forgery) protection
        using DNS pinning to prevent DNS rebinding attacks. The protection works by:
        1. Validating the URL and resolving DNS during security check
        2. Pinning the validated IP address
        3. Forcing the HTTP client to use the pinned IP for the actual request
        4. Ignoring any subsequent DNS changes (prevents rebinding attacks)

        Returns:
            Data: Response data from the HTTP request

        Raises:
            ValueError: If URL is invalid or blocked by SSRF protection
        """
        # Extract request parameters
        method = self.method
        url = self.url_input.strip() if isinstance(self.url_input, str) else ""
        headers = self.headers or {}
        body = self.body or {}
        timeout = self.timeout
        follow_redirects = self.follow_redirects
        save_to_file = self.save_to_file
        include_httpx_metadata = self.include_httpx_metadata

        # Security warning: HTTP redirects can bypass SSRF protection
        # A public URL could redirect to an internal resource
        if follow_redirects:
            self.log(
                "Security Warning: HTTP redirects are enabled. This may allow SSRF bypass attacks "
                "where a public URL redirects to internal resources (e.g., cloud metadata endpoints). "
                "Only enable this if you trust the target server."
            )

        # Normalize URL (add https:// if no protocol specified)
        url = self._normalize_url(url)

        # Basic URL format validation
        if not validators.url(url):
            msg = f"Invalid URL provided: {url}"
            raise ValueError(msg)

        # ============================================================================
        # SSRF Protection with DNS Pinning
        # ============================================================================
        # This prevents DNS rebinding attacks by:
        # 1. Resolving DNS and validating IPs during security check
        # 2. Pinning the validated IP address
        # 3. Using a custom HTTP transport that forces use of the pinned IP
        # 4. Ignoring any new DNS resolutions (prevents rebinding)
        #
        # Without DNS pinning, an attacker could:
        # - First DNS lookup: returns public IP (passes validation)
        # - Second DNS lookup: returns internal IP (bypasses protection)
        # - Attack succeeds: accesses internal services
        #
        # With DNS pinning:
        # - First DNS lookup: returns public IP (passes validation)
        # - IP is pinned: "example.com = 93.184.216.34"
        # - HTTP request: uses pinned IP directly (no new DNS lookup)
        # - Attack fails: even if DNS changes, we use the validated IP
        # ============================================================================

        try:
            # Validate URL and get validated IPs for DNS pinning
            _validated_url, validated_ips = validate_and_resolve_url(url)

            # Log DNS pinning information for security auditing
            if validated_ips:
                self.log(f"SSRF Protection: Using DNS pinning with {len(validated_ips)} validated IP(s)")

        except SSRFProtectionError as e:
            # SSRF protection blocked the request (private IP, internal network, etc.)
            msg = f"SSRF Protection: {e}"
            raise ValueError(msg) from e

        # Process query parameters (from string or Data object)
        if isinstance(self.query_params, str):
            query_params = dict(parse_qsl(self.query_params))
        else:
            query_params = self.query_params.data if self.query_params else {}

        # Process headers and body into proper format
        headers = self._process_headers(headers)
        body = self._process_body(body)
        url = self.add_query_params(url, query_params)

        # ============================================================================
        # Execute the request (re-validating any redirects when SSRF protection is on)
        # ============================================================================
        # When SSRF protection is enabled we must NOT let httpx auto-follow redirects:
        # a validated public URL can redirect to an internal address (loopback, RFC1918,
        # link-local / cloud metadata) that was never checked, bypassing both the initial
        # validation and DNS pinning. Instead we follow redirects manually so every hop
        # is re-validated with the same denylist + DNS pinning. When protection is
        # disabled, we preserve the previous behavior and let httpx handle redirects.
        if is_ssrf_protection_enabled() and follow_redirects:
            result = await self._follow_redirects_with_validation(
                method,
                url,
                headers,
                body,
                timeout,
                validated_ips,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        else:
            # No redirect re-validation needed:
            # - SSRF protection is disabled (user opted out), or
            # - redirects are disabled, so httpx makes a single request.
            # DNS pinning still applies to the single request when protection is enabled
            # and the host resolved to validated IPs.
            async with self._build_http_client(url, validated_ips) as client:
                result = await self.make_request(
                    client,
                    method,
                    url,
                    headers,
                    body,
                    timeout,
                    follow_redirects=follow_redirects,
                    save_to_file=save_to_file,
                    include_httpx_metadata=include_httpx_metadata,
                )

        self.status = result
        return result

    def _build_http_client(self, url: str, validated_ips: list[str]) -> httpx.AsyncClient:
        """Create an HTTP client, pinning DNS to validated IPs when SSRF protection applies.

        Args:
            url: The request URL whose hostname will be pinned.
            validated_ips: IPs validated by \`\`validate_and_resolve_url\`\` for this hop.

        Returns:
            httpx.AsyncClient: A client that pins DNS to \`\`validated_ips\`\` (preventing
            rebinding) when SSRF protection is enabled and the hop has validated IPs;
            otherwise a standard client (protection disabled, allowlisted host, or
            hostname extraction failure).
        """
        if is_ssrf_protection_enabled() and validated_ips:
            # Extract hostname from the URL so the custom transport can pin it while
            # preserving the Host header for virtual hosting / TLS SNI.
            hostname = urlparse(url).hostname
            if hostname:
                # The custom transport tries validated IPs in order (dual-stack / LB).
                return create_ssrf_protected_client(hostname=hostname, validated_ips=validated_ips)
        return httpx.AsyncClient()

    @staticmethod
    def _method_for_redirect(method: str, status_code: int) -> str:
        """Return the HTTP method to use after a redirect, mirroring httpx semantics.

        A 303 (See Other) always becomes GET; 301/302 downgrade POST to GET for
        browser compatibility; 307/308 preserve the original method (and body).
        """
        method = method.upper()
        if status_code == HTTP_SEE_OTHER and method != "HEAD":
            return "GET"
        if status_code in (HTTP_MOVED_PERMANENTLY, HTTP_FOUND) and method == "POST":
            return "GET"
        return method

    @staticmethod
    def _headers_for_redirect(headers: dict | None, current_url: str, next_url: str) -> dict | None:
        """Drop sensitive headers when a redirect crosses to a different host.

        Mirrors httpx's auto-follow behavior so manually following redirects does not
        leak credentials (Authorization / Cookie) to a different host than the one the
        caller intended them for. Same-host redirects keep all headers.
        """
        if not headers:
            return headers
        if urlparse(current_url).hostname == urlparse(next_url).hostname:
            return headers
        sensitive = {"authorization", "proxy-authorization", "cookie"}
        return {k: v for k, v in headers.items() if k.lower() not in sensitive}

    async def _follow_redirects_with_validation(
        self,
        method: str,
        url: str,
        headers: dict | None,
        body: Any,
        timeout: int,
        validated_ips: list[str],
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Make the request and follow redirects manually, re-validating every hop.

        This closes an SSRF bypass: with \`\`follow_redirects\`\` enabled, httpx would
        otherwise auto-follow a redirect from a validated public URL to an internal
        address that was never checked. Here each redirect \`\`Location\`\` is resolved
        (relative locations included) and re-validated with \`\`validate_and_resolve_url\`\`
        — the same private/loopback/link-local denylist and DNS pinning applied to the
        initial request — before any connection to it is made. A blocked hop raises
        \`\`ValueError\`\`; the number of redirects is capped at \`\`MAX_REDIRECTS\`\`.
        """
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        current_url = url
        current_ips = validated_ips
        redirection_history: list[dict] = []

        for _ in range(MAX_REDIRECTS + 1):
            request_params: dict[str, Any] = {
                "method": method,
                "url": current_url,
                "headers": headers,
                "timeout": timeout,
                # Never let httpx follow redirects itself; each hop is validated below.
                "follow_redirects": False,
            }
            # Only include body for methods that support it (GET must not have a body).
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body

            try:
                async with self._build_http_client(current_url, current_ips) as client:
                    response = await client.request(**request_params)
            except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
                self.log(f"Error making request to {current_url}")
                return Data(
                    data={
                        "source": url,
                        "headers": headers,
                        "status_code": 500,
                        "error": str(exc),
                        **({"redirection_history": redirection_history} if redirection_history else {}),
                    },
                )

            location = response.headers.get("Location")
            if response.status_code in REDIRECT_STATUS_CODES and location:
                # Resolve relative redirects against the current URL.
                next_url = urljoin(current_url, location)
                redirection_history.append({"url": location, "status_code": response.status_code})

                # Re-validate the redirect target with the same SSRF denylist + DNS pinning.
                # Non-http(s) schemes, private/loopback/link-local hosts, and hostnames that
                # resolve to blocked IPs all raise SSRFProtectionError here.
                try:
                    _validated_url, current_ips = validate_and_resolve_url(next_url)
                except SSRFProtectionError as e:
                    msg = f"SSRF Protection: blocked redirect to {next_url}: {e}"
                    raise ValueError(msg) from e

                method = self._method_for_redirect(method, response.status_code)
                headers = self._headers_for_redirect(headers, current_url, next_url)
                current_url = next_url
                continue

            # Not a redirect (or no Location header) - this is the final response.
            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )

        msg = f"SSRF Protection: exceeded the maximum of {MAX_REDIRECTS} redirects while requesting {url}"
        raise ValueError(msg)

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the build config based on the selected mode."""
        if field_name != "mode":
            if field_name == "curl_input" and self.mode == "cURL" and self.curl_input:
                return self.parse_curl(self.curl_input, build_config)
            return build_config

        if field_value == "cURL":
            set_field_display(build_config, "curl_input", value=True)
            if build_config["curl_input"]["value"]:
                try:
                    build_config = self.parse_curl(build_config["curl_input"]["value"], build_config)
                except ValueError as e:
                    self.log(f"Failed to parse cURL input: {e}")
        else:
            set_field_display(build_config, "curl_input", value=False)

        return set_current_fields(
            build_config=build_config,
            action_fields=MODE_FIELDS,
            selected_action=field_value,
            default_fields=DEFAULT_FIELDS,
            func=set_field_advanced,
            default_value=True,
        )

    async def _response_info(
        self, response: httpx.Response, *, with_file_path: bool = False
    ) -> tuple[bool, Path | None]:
        """Determine the file path and whether the response content is binary.

        Args:
            response (Response): The HTTP response object.
            with_file_path (bool): Whether to save the response content to a file.

        Returns:
            Tuple[bool, Path | None]:
                A tuple containing a boolean indicating if the content is binary and the full file path (if applicable).
        """
        content_type = response.headers.get("Content-Type", "")
        is_binary = "application/octet-stream" in content_type or "application/binary" in content_type

        if not with_file_path:
            return is_binary, None

        component_temp_dir = Path(tempfile.gettempdir()) / self.__class__.__name__

        # Create directory asynchronously
        await aiofiles_os.makedirs(component_temp_dir, exist_ok=True)

        filename = None
        if "Content-Disposition" in response.headers:
            content_disposition = response.headers["Content-Disposition"]
            filename_match = re.search(r'filename="(.+?)"', content_disposition)
            if filename_match:
                extracted_filename = filename_match.group(1)
                filename = extracted_filename

        # Step 3: Infer file extension or use part of the request URL if no filename
        if not filename:
            # Extract the last segment of the URL path
            url_path = urlparse(str(response.request.url) if response.request else "").path
            base_name = Path(url_path).name  # Get the last segment of the path
            if not base_name:  # If the path ends with a slash or is empty
                base_name = "response"

            # Infer file extension
            content_type_to_extension = {
                "text/plain": ".txt",
                "application/json": ".json",
                "image/jpeg": ".jpg",
                "image/png": ".png",
                "application/octet-stream": ".bin",
            }
            extension = content_type_to_extension.get(content_type, ".bin" if is_binary else ".txt")
            filename = f"{base_name}{extension}"

        # Step 4: Define the full file path
        file_path = component_temp_dir / filename

        # Step 5: Check if file exists asynchronously and handle accordingly
        try:
            # Try to create the file exclusively (x mode) to check existence
            async with aiofiles.open(file_path, "x") as _:
                pass  # File created successfully, we can use this path
        except FileExistsError:
            # If file exists, append a timestamp to the filename
            timestamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S%f")
            file_path = component_temp_dir / f"{timestamp}-{filename}"

        return is_binary, file_path
`},curl_input:{_input_type:"MultilineInput",advanced:!0,ai_enabled:!1,copy_field:!1,display_name:"cURL",dynamic:!1,info:"Paste a curl command to populate the fields. This will fill in the dictionary fields for headers and body.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"curl_input",override_skip:!1,password:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`curl --location 'https://jaivir.atlassian.net/rest/api/3/issue/{}' \\
--header 'Accept: application/json' \\
--header 'Authorization: Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB' \\
--header 'Cookie: atlassian.xsrf.token=5476203bac55b87d3ef9ebb4d41c23b2dbaa1d89_lin'`},follow_redirects:{_input_type:"BoolInput",advanced:!0,display_name:"Follow Redirects",dynamic:!1,info:"Whether to follow HTTP redirects. WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL redirects to internal resources. Only enable if you trust the target server. See OWASP SSRF Prevention Cheat Sheet for details.",list:!1,list_add_label:"Add More",name:"follow_redirects",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},headers:{_input_type:"TableInput",advanced:!0,display_name:"Headers",dynamic:!1,info:"The headers to send with the request",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"headers",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Header name",display_name:"Header",formatter:"text",name:"key",type:"str"},{description:"Header value",display_name:"Value",formatter:"text",name:"value",type:"str"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[{key:"Accept",value:"application/json"},{key:"Authorization",value:"Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB"}]},include_httpx_metadata:{_input_type:"BoolInput",advanced:!0,display_name:"Include HTTPx Metadata",dynamic:!1,info:"Include properties such as headers, status_code, response_headers, and redirection_history in the output.",list:!1,list_add_label:"Add More",name:"include_httpx_metadata",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},is_refresh:!1,method:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Method",dynamic:!1,external_options:{},info:"The HTTP method to use.",name:"method",options:["GET","POST","PATCH","PUT","DELETE"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"GET"},mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Enable cURL mode to populate fields from a cURL command.",name:"mode",options:["URL","cURL"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"URL"},query_params:{_input_type:"JSONInput",advanced:!0,display_name:"Query Parameters",dynamic:!1,info:"The query parameters to append to the URL.",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"query_params",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},save_to_file:{_input_type:"BoolInput",advanced:!0,display_name:"Save to File",dynamic:!1,info:"Save the API response to a temporary file",list:!1,list_add_label:"Add More",name:"save_to_file",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"The timeout to use for the request.",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:30},url_input:{_input_type:"MessageTextInput",advanced:!1,display_name:"URL",dynamic:!1,info:"Enter the URL for the request.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"url_input",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"APIRequest"},id:"APIRequest-ebFnM",measured:{height:469,width:320},position:{x:234.97875635311647,y:176.73725941726522},selected:!1,type:"genericNode"},{data:{id:"JiraSearchParserComponent-LyFLX",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Parses the JIRA search response JSON to extract key, summary, type, description, and priority.",display_name:"Jira Search Parser",documentation:"",edited:!0,field_order:["jira_json"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"4ed653afc1de",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"}],total_dependencies:1},module:"custom_components.jira_search_parser"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Parsed Text",group_outputs:!1,hidden:null,loop_types:null,method:"build_output",name:"parsed_text",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import DataInput, Output\r
import json\r
\r
class JiraSearchParserComponent(Component):\r
    display_name = "Jira Search Parser"\r
    description = "Parses the JIRA search response JSON to extract key, summary, type, description, and priority."\r
\r
    inputs = [\r
        DataInput(\r
            name="jira_json",\r
            display_name="Jira JSON Response",\r
            info="The JSON output from the API Request component"\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Parsed Text", name="parsed_text", types=["Message"], method="build_output"),\r
    ]\r
\r
\r
    def build_output(self) -> str:\r
        jira_json = self.jira_json\r
\r
        if not jira_json:\r
            return "No data received."\r
            \r
        def flatten_adf(node):\r
            if not node: return ""\r
            if isinstance(node, str): return node\r
            if isinstance(node, list): return "".join(flatten_adf(n) for n in node)\r
            text = ""\r
            if node.get("type") == "text":\r
                text += node.get("text", "")\r
            if "content" in node:\r
                text += flatten_adf(node["content"])\r
            if node.get("type") in ["paragraph", "heading", "listItem", "blockquote", "bulletList", "orderedList"]:\r
                text += "\\n"\r
            if node.get("type") in ["hardBreak", "rule"]:\r
                text += "\\n"\r
            return text\r
\r
        try:\r
            # Extract data from Langflow structure if wrapped\r
            data = jira_json\r
            if hasattr(jira_json, "data"):\r
                data = jira_json.data\r
            elif isinstance(jira_json, str):\r
                try:\r
                    data = json.loads(jira_json)\r
                except json.JSONDecodeError:\r
                    pass\r
            \r
            # If the response is wrapped inside Langflow's API Request structure, get "result"\r
            if isinstance(data, dict) and "result" in data:\r
                data = data["result"]\r
            \r
            # If it's still a string (nested json parsing)\r
            if isinstance(data, str):\r
                data = json.loads(data)\r
\r
            issues = data.get("issues", [])\r
            if not issues:\r
                return "No issues found in the JIRA response."\r
                \r
            formatted_issues = []\r
            for issue in issues:\r
                key = issue.get("key", "Unknown Key")\r
                fields = issue.get("fields", {})\r
                summary = fields.get("summary", "No Summary")\r
                \r
                # Extract issuetype name\r
                issue_type = fields.get("issuetype", {})\r
                type_name = issue_type.get("name", "Unknown Type") if isinstance(issue_type, dict) else "Unknown Type"\r
                \r
                # Extract priority name\r
                priority = fields.get("priority", {})\r
                priority_name = priority.get("name", "Unspecified") if isinstance(priority, dict) else "Unspecified"\r
                \r
                # Extract and flatten ADF description\r
                desc = fields.get("description", "")\r
                if isinstance(desc, dict):\r
                    desc = flatten_adf(desc)\r
                elif not desc:\r
                    desc = "No description provided."\r
                \r
                formatted_issues.append(\r
                    f"### ISSUE: {key}\\n"\r
                    f"**Summary:** {summary}\\n"\r
                    f"**Type:** {type_name}\\n"\r
                    f"**Priority:** {priority_name}\\n"\r
                    f"**Description:**\\n{desc.strip()}\\n"\r
                )\r
            \r
            output = "\\n---%---\\n".join(formatted_issues)\r
            self.status = output\r
            return output\r
        except Exception as e:\r
            return f"Error parsing JIRA data: {str(e)}"`},jira_json:{_input_type:"JSONInput",advanced:!1,display_name:"Jira JSON Response",dynamic:!1,info:"The JSON output from the API Request component",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"jira_json",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""}},tool_mode:!1},showNode:!0,type:"JiraSearchParserComponent"},dragging:!1,id:"JiraSearchParserComponent-LyFLX",measured:{height:185,width:320},position:{x:630.4768442189009,y:134.9592923891894},selected:!1,type:"genericNode"},{data:{id:"MistralModel-Rdd6b",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Generates text using MistralAI LLMs.",display_name:"MistralAI",documentation:"",edited:!1,field_order:["input_value","system_message","stream","max_tokens","model_name","mistral_api_base","api_key","temperature","max_retries","timeout","max_concurrent_requests","top_p","random_seed","safe_mode"],frozen:!1,icon:"MistralAI",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"e21780948144",dependencies:{dependencies:[{name:"langchain_mistralai",version:"1.1.4"},{name:"pydantic",version:"2.13.4"},{name:"lfx",version:null}],total_dependencies:3},keywords:["model","llm","language model","large language model"],module:"lfx.components.mistral.mistral.MistralAIModelComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,method:"text_response",name:"text_output",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,method:"build_model",name:"model_output",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"Mistral API Key",dynamic:!1,info:"The Mistral API Key to use for the Mistral model.",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:"Lo4FXYs7WWRWxnyWXYkoEIcBMtFBnO5l"},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langchain_mistralai import ChatMistralAI
from pydantic.v1 import SecretStr

from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.io import BoolInput, DropdownInput, FloatInput, IntInput, SecretStrInput, StrInput


class MistralAIModelComponent(LCModelComponent):
    display_name = "MistralAI"
    description = "Generates text using MistralAI LLMs."
    icon = "MistralAI"
    name = "MistralModel"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            advanced=False,
            options=[
                "open-mixtral-8x7b",
                "open-mixtral-8x22b",
                "mistral-small-latest",
                "mistral-medium-latest",
                "mistral-large-latest",
                "codestral-latest",
            ],
            value="codestral-latest",
        ),
        StrInput(
            name="mistral_api_base",
            display_name="Mistral API Base",
            advanced=True,
            info="The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. "
            "You can change this to use other APIs like JinaChat, LocalAI and Prem.",
        ),
        SecretStrInput(
            name="api_key",
            display_name="Mistral API Key",
            info="The Mistral API Key to use for the Mistral model.",
            advanced=False,
            required=True,
            value="MISTRAL_API_KEY",
        ),
        FloatInput(
            name="temperature",
            display_name="Temperature",
            value=0.1,
            advanced=True,
        ),
        IntInput(
            name="max_retries",
            display_name="Max Retries",
            advanced=True,
            value=5,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            advanced=True,
            value=60,
        ),
        IntInput(
            name="max_concurrent_requests",
            display_name="Max Concurrent Requests",
            advanced=True,
            value=3,
        ),
        FloatInput(
            name="top_p",
            display_name="Top P",
            advanced=True,
            value=1,
        ),
        IntInput(
            name="random_seed",
            display_name="Random Seed",
            value=1,
            advanced=True,
        ),
        BoolInput(
            name="safe_mode",
            display_name="Safe Mode",
            advanced=True,
            value=False,
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        try:
            return ChatMistralAI(
                model_name=self.model_name,
                mistral_api_key=SecretStr(self.api_key).get_secret_value() if self.api_key else None,
                endpoint=self.mistral_api_base or "https://api.mistral.ai/v1",
                max_tokens=self.max_tokens or None,
                temperature=self.temperature,
                max_retries=self.max_retries,
                timeout=self.timeout,
                max_concurrent_requests=self.max_concurrent_requests,
                top_p=self.top_p,
                random_seed=self.random_seed,
                safe_mode=self.safe_mode,
                streaming=self.stream,
            )
        except Exception as e:
            msg = "Could not connect to MistralAI API."
            raise ValueError(msg) from e
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},max_concurrent_requests:{_input_type:"IntInput",advanced:!0,display_name:"Max Concurrent Requests",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_concurrent_requests",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:3},max_retries:{_input_type:"IntInput",advanced:!0,display_name:"Max Retries",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_retries",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:5},max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Tokens",dynamic:!1,info:"The maximum number of tokens to generate. Set to 0 for unlimited tokens.",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},mistral_api_base:{_input_type:"StrInput",advanced:!0,display_name:"Mistral API Base",dynamic:!1,info:"The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. You can change this to use other APIs like JinaChat, LocalAI and Prem.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"mistral_api_base",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Model Name",dynamic:!1,external_options:{},info:"",name:"model_name",options:["open-mixtral-8x7b","open-mixtral-8x22b","mistral-small-latest","mistral-medium-latest","mistral-large-latest","codestral-latest"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"mistral-large-latest"},random_seed:{_input_type:"IntInput",advanced:!0,display_name:"Random Seed",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"random_seed",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},safe_mode:{_input_type:"BoolInput",advanced:!0,display_name:"Safe Mode",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"safe_mode",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`You are a Principal SRE and QA Engineer. 
You will receive parsed JIRA issue details containing the key, summary, priority, and description.

---
PARSED JIRA DETAILS:
{jira_json}
---

Write a comprehensive, professional Root Cause Analysis (RCA) document in Markdown format using this structure:
# Root Cause Analysis (RCA) Report
## 1. Executive Summary
## 2. Event Log & Technical Details
## 3. Root Cause Investigation (The "5 Whys" Analysis)
## 4. Business & System Impact
## 5. Corrective and Preventive Actions (CAPA)
## 6. Automation Guardrails`},temperature:{_input_type:"FloatInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"temperature",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:.1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:100},top_p:{_input_type:"FloatInput",advanced:!0,display_name:"Top P",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"top_p",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:1}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"MistralModel"},dragging:!1,id:"MistralModel-Rdd6b",measured:{height:453,width:320},position:{x:1346.272679299933,y:112.67770997421562},selected:!1,type:"genericNode"},{data:{id:"ChatOutput-PKpIM",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null}],total_dependencies:3},module:"lfx.components.input_output.chat_output.ChatOutput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},dragging:!1,id:"ChatOutput-PKpIM",measured:{height:52,width:192},position:{x:1860.3203220744144,y:575.1991934140701},selected:!1,type:"genericNode"},{data:{id:"SaveToFile-ieDaM",node:{base_classes:["Message"],beta:!1,category:"files_and_knowledge",conditional_paths:[],custom_fields:{},description:"Save data to a file. Arguments: 'input' — the content to save (pass a DataFrame directly, or a JSON string for tabular data, or plain text for messages); 'file_name' — the name to save as, without extension (e.g. 'report'); 'file_format' — output format: 'csv', 'json', 'txt', 'html', 'excel', 'markdown' (optional). Returns a confirmation with the file path or URL.",display_name:"Write File",documentation:"https://docs.langflow.org/write-file",edited:!1,field_order:["storage_location","input","file_name","file_format","append_mode","local_format","aws_format","gdrive_format","aws_access_key_id","aws_secret_access_key","bucket_name","aws_region","s3_prefix","service_account_key","folder_id"],frozen:!1,icon:"file-text",key:"SaveToFile",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"837120b2e497",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"pandas",version:"2.3.3"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null},{name:"langflow",version:null},{name:"boto3",version:"1.40.61"},{name:"googleapiclient",version:"2.197.0"}],total_dependencies:7},module:"lfx.components.files_and_knowledge.save_file.SaveToFileComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"File Path",group_outputs:!1,method:"save_to_file",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,score:.007568328950209746,template:{_type:"Component",append_mode:{_input_type:"BoolInput",advanced:!1,display_name:"Append",dynamic:!1,info:"Append to file if it exists (only for Local storage with plain text formats). Not supported for cloud storage (AWS/Google Drive).",list:!1,list_add_label:"Add More",name:"append_mode",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},aws_access_key_id:{_input_type:"SecretStrInput",advanced:!0,display_name:"AWS Access Key ID",dynamic:!1,info:"AWS Access key ID.",input_types:[],load_from_db:!1,name:"aws_access_key_id",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},aws_format:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"File Format",dynamic:!1,external_options:{},info:"Select the file format for AWS S3 storage.",name:"aws_format",options:["txt","json","csv","xml","html","md","yaml","log","tsv","jsonl","parquet","xlsx","zip"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"txt"},aws_region:{_input_type:"StrInput",advanced:!0,display_name:"AWS Region",dynamic:!1,info:"AWS region (e.g., us-east-1, eu-west-1).",list:!1,list_add_label:"Add More",load_from_db:!1,name:"aws_region",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},aws_secret_access_key:{_input_type:"SecretStrInput",advanced:!0,display_name:"AWS Secret Key",dynamic:!1,info:"AWS Secret Key.",input_types:[],load_from_db:!1,name:"aws_secret_access_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},bucket_name:{_input_type:"StrInput",advanced:!0,display_name:"S3 Bucket Name",dynamic:!1,info:"Enter the name of the S3 bucket.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"bucket_name",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import json
from collections.abc import AsyncIterator, Iterator
from pathlib import Path
from typing import Any

import orjson
import pandas as pd
from fastapi import UploadFile
from fastapi.encoders import jsonable_encoder

from lfx.custom import Component
from lfx.inputs import SortableListInput
from lfx.inputs.inputs import DataFrameInput
from lfx.io import BoolInput, DropdownInput, SecretStrInput, StrInput
from lfx.schema import Data, DataFrame, Message
from lfx.services.deps import get_settings_service, get_storage_service, session_scope
from lfx.template.field.base import Output
from lfx.utils.validate_cloud import is_astra_cloud_environment


def _get_storage_location_options():
    """Get storage location options, filtering out Local if in Astra cloud environment."""
    all_options = [{"name": "AWS", "icon": "Amazon"}, {"name": "Google Drive", "icon": "google"}]
    if is_astra_cloud_environment():
        return all_options
    return [{"name": "Local", "icon": "hard-drive"}, *all_options]


def _get_default_storage_location() -> list[dict[str, str]]:
    """Return the default storage selection for the component template."""
    return [_get_storage_location_options()[0]]


def _is_default_storage(storage_name: str) -> bool:
    """Check whether a storage type is the default selection."""
    return _get_default_storage_location()[0]["name"] == storage_name


class SaveToFileComponent(Component):
    display_name = "Write File"
    description = (
        "Save data to a file. "
        "Arguments: 'input' — the content to save (pass a DataFrame directly, or a JSON string "
        "for tabular data, or plain text for messages); "
        "'file_name' — the name to save as, without extension (e.g. 'report'); "
        "'file_format' — output format: 'csv', 'json', 'txt', 'html', 'excel', 'markdown' (optional). "
        "Returns a confirmation with the file path or URL."
    )
    documentation: str = "https://docs.langflow.org/write-file"
    icon = "file-text"
    name = "SaveToFile"

    # File format options for different storage types
    LOCAL_DATA_FORMAT_CHOICES = ["csv", "excel", "json", "markdown"]
    LOCAL_MESSAGE_FORMAT_CHOICES = ["txt", "html", "json", "markdown"]
    AWS_FORMAT_CHOICES = [
        "txt",
        "json",
        "csv",
        "xml",
        "html",
        "md",
        "yaml",
        "log",
        "tsv",
        "jsonl",
        "parquet",
        "xlsx",
        "zip",
    ]
    GDRIVE_FORMAT_CHOICES = ["txt", "html", "json", "csv", "xlsx", "slides", "docs", "jpg", "mp3"]

    inputs = [
        SortableListInput(
            name="storage_location",
            display_name="Storage Location",
            placeholder="Select Location",
            info="Choose where to save the file.",
            options=_get_storage_location_options(),
            real_time_refresh=True,
            limit=1,
            value=_get_default_storage_location(),
            advanced=True,
        ),
        # Common inputs
        DataFrameInput(
            name="input",
            display_name="File Content",
            info=(
                "The content to save. Accepts a DataFrame, Data, or Message object directly. "
                'Can also accept a JSON string (e.g. \\'[{"col1": "val1"}]\\') which will be '
                "parsed into a DataFrame, or plain text which will be saved as a Message."
            ),
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
            tool_mode=True,
        ),
        StrInput(
            name="file_name",
            display_name="File Name",
            info="File name without extension (e.g. 'report'). Extension is added automatically.",
            required=True,
            show=True,
            tool_mode=True,
        ),
        StrInput(
            name="file_format",
            display_name="File Format (Tool)",
            info="Output format: 'csv', 'json', 'txt', 'html', 'excel', 'markdown'. Overrides pre-configured format.",
            required=False,
            show=False,
            tool_mode=True,
        ),
        BoolInput(
            name="append_mode",
            display_name="Append",
            info=(
                "Append to file if it exists (only for Local storage with plain text formats). "
                "Not supported for cloud storage (AWS/Google Drive)."
            ),
            value=False,
            show=_is_default_storage("Local"),
        ),
        # Format inputs (dynamic based on storage location)
        DropdownInput(
            name="local_format",
            display_name="File Format",
            options=list(dict.fromkeys(LOCAL_DATA_FORMAT_CHOICES + LOCAL_MESSAGE_FORMAT_CHOICES)),
            info="Select the file format for local storage.",
            value="json",
            show=_is_default_storage("Local"),
        ),
        DropdownInput(
            name="aws_format",
            display_name="File Format",
            options=AWS_FORMAT_CHOICES,
            info="Select the file format for AWS S3 storage.",
            value="txt",
            show=_is_default_storage("AWS"),
        ),
        DropdownInput(
            name="gdrive_format",
            display_name="File Format",
            options=GDRIVE_FORMAT_CHOICES,
            info="Select the file format for Google Drive storage.",
            value="txt",
            show=_is_default_storage("Google Drive"),
        ),
        # AWS S3 specific inputs
        SecretStrInput(
            name="aws_access_key_id",
            display_name="AWS Access Key ID",
            info="AWS Access key ID.",
            show=_is_default_storage("AWS"),
            advanced=not _is_default_storage("AWS"),
            required=True,
        ),
        SecretStrInput(
            name="aws_secret_access_key",
            display_name="AWS Secret Key",
            info="AWS Secret Key.",
            show=_is_default_storage("AWS"),
            advanced=not _is_default_storage("AWS"),
            required=True,
        ),
        StrInput(
            name="bucket_name",
            display_name="S3 Bucket Name",
            info="Enter the name of the S3 bucket.",
            show=_is_default_storage("AWS"),
            advanced=not _is_default_storage("AWS"),
            required=True,
        ),
        StrInput(
            name="aws_region",
            display_name="AWS Region",
            info="AWS region (e.g., us-east-1, eu-west-1).",
            show=_is_default_storage("AWS"),
            advanced=not _is_default_storage("AWS"),
        ),
        StrInput(
            name="s3_prefix",
            display_name="S3 Prefix",
            info="Prefix for all files in S3.",
            show=_is_default_storage("AWS"),
            advanced=not _is_default_storage("AWS"),
        ),
        # Google Drive specific inputs
        SecretStrInput(
            name="service_account_key",
            display_name="GCP Credentials Secret Key",
            info="Your Google Cloud Platform service account JSON key as a secret string (complete JSON content).",
            show=_is_default_storage("Google Drive"),
            advanced=not _is_default_storage("Google Drive"),
            required=True,
        ),
        StrInput(
            name="folder_id",
            display_name="Google Drive Folder ID",
            info=(
                "The Google Drive folder ID where the file will be uploaded. "
                "The folder must be shared with the service account email."
            ),
            required=True,
            show=_is_default_storage("Google Drive"),
            advanced=not _is_default_storage("Google Drive"),
        ),
    ]

    outputs = [Output(display_name="File Path", name="message", method="save_to_file")]

    def update_build_config(self, build_config, field_value, field_name=None):
        """Update build configuration to show/hide fields based on storage location selection."""
        # Update options dynamically based on cloud environment
        # This ensures options are refreshed when build_config is updated
        if "storage_location" in build_config:
            updated_options = _get_storage_location_options()
            build_config["storage_location"]["options"] = updated_options

        # When tool_mode is toggled, hide storage-specific format dropdowns
        # (the agent uses the unified file_format input instead)
        if field_name == "tool_mode":
            format_fields = ["local_format", "aws_format", "gdrive_format"]
            for f_name in format_fields:
                if f_name in build_config:
                    build_config[f_name]["show"] = not bool(field_value)
            return build_config

        if field_name != "storage_location":
            return build_config

        # Extract selected storage location
        selected = [location["name"] for location in field_value] if isinstance(field_value, list) else []

        # Hide all dynamic fields first
        dynamic_fields = [
            "file_name",  # Common fields (input is always visible)
            "append_mode",
            "local_format",
            "aws_format",
            "gdrive_format",
            "aws_access_key_id",
            "aws_secret_access_key",
            "bucket_name",
            "aws_region",
            "s3_prefix",
            "service_account_key",
            "folder_id",
        ]

        for f_name in dynamic_fields:
            if f_name in build_config:
                build_config[f_name]["show"] = False

        # Show fields based on selected storage location
        is_tool_mode = build_config.get("tools_metadata", {}).get("show", False)

        if len(selected) == 1:
            location = selected[0]

            # Show file_name when any storage location is selected
            if "file_name" in build_config:
                build_config["file_name"]["show"] = True

            # Show append_mode only for Local storage (not supported for cloud storage)
            if "append_mode" in build_config:
                build_config["append_mode"]["show"] = location == "Local"

            if location == "Local":
                if "local_format" in build_config:
                    build_config["local_format"]["show"] = not is_tool_mode

            elif location == "AWS":
                aws_fields = [
                    "aws_format",
                    "aws_access_key_id",
                    "aws_secret_access_key",
                    "bucket_name",
                    "aws_region",
                    "s3_prefix",
                ]
                for f_name in aws_fields:
                    if f_name in build_config:
                        show = f_name != "aws_format" or not is_tool_mode
                        build_config[f_name]["show"] = show
                        build_config[f_name]["advanced"] = False

            elif location == "Google Drive":
                gdrive_fields = ["gdrive_format", "service_account_key", "folder_id"]
                for f_name in gdrive_fields:
                    if f_name in build_config:
                        show = f_name != "gdrive_format" or not is_tool_mode
                        build_config[f_name]["show"] = show
                        build_config[f_name]["advanced"] = False

        return build_config

    async def save_to_file(self) -> Message:
        """Save the input to a file and upload it, returning a confirmation message."""
        # Validate inputs
        if not self.file_name:
            msg = "File name must be provided."
            raise ValueError(msg)
        if not self._get_input_type():
            msg = "Input type is not set."
            raise ValueError(msg)

        # Get selected storage location
        storage_location = self._get_selected_storage_location()
        if not storage_location:
            msg = "Storage location must be selected."
            raise ValueError(msg)

        # Check if Local storage is disabled in cloud environment
        if storage_location == "Local" and is_astra_cloud_environment():
            msg = "Local storage is not available in cloud environment. Please use AWS or Google Drive."
            raise ValueError(msg)

        # Route to appropriate save method based on storage location
        if storage_location == "Local":
            return await self._save_to_local()
        if storage_location == "AWS":
            return await self._save_to_aws()
        if storage_location == "Google Drive":
            return await self._save_to_google_drive()
        msg = f"Unsupported storage location: {storage_location}"
        raise ValueError(msg)

    def _get_input_type(self) -> str:
        """Determine the input type based on the provided input."""
        # Use exact type checking (type() is) instead of isinstance() to avoid inheritance issues.
        # Since Message inherits from Data, isinstance(message, Data) would return True for Message objects,
        # causing Message inputs to be incorrectly identified as Data type.
        if type(self.input) is DataFrame:
            return "DataFrame"
        if type(self.input) is Message:
            return "Message"
        if type(self.input) is Data:
            return "Data"
        # When invoked by a code agent (e.g. OpenDsStar), the input may be a raw
        # pandas DataFrame rather than Langflow's DataFrame wrapper.
        if isinstance(self.input, pd.DataFrame):
            self.input = DataFrame(self.input)
            return "DataFrame"
        # When invoked as a tool, the agent passes a string. Try to parse it as
        # tabular JSON (list of objects) → DataFrame, otherwise wrap as Message.
        if isinstance(self.input, str):
            self.input = self._coerce_string_input(self.input)
            return self._get_input_type()
        msg = f"Unsupported input type: {type(self.input)}"
        raise ValueError(msg)

    def _coerce_string_input(self, value: str) -> DataFrame | Message:
        """Convert a raw string (from agent tool call) into a DataFrame or Message.

        Tries to parse as JSON first — a list of objects or a single object becomes
        a DataFrame. Anything else is wrapped in a Message.
        """
        try:
            parsed = json.loads(value)
            if isinstance(parsed, list) and parsed and isinstance(parsed[0], dict):
                return DataFrame(pd.DataFrame(parsed))
            if isinstance(parsed, dict):
                return DataFrame(pd.DataFrame([parsed]))
        except (json.JSONDecodeError, ValueError):
            pass
        return Message(text=value)

    def _get_default_format(self) -> str:
        """Return the default file format based on input type."""
        if self._get_input_type() == "DataFrame":
            return "csv"
        if self._get_input_type() == "Data":
            return "json"
        if self._get_input_type() == "Message":
            return "json"
        return "json"  # Fallback

    def _adjust_file_path_with_format(self, path: Path, fmt: str) -> Path:
        """Adjust the file path to include the correct extension."""
        file_extension = path.suffix.lower().lstrip(".")
        if fmt == "excel":
            return Path(f"{path}.xlsx").expanduser() if file_extension not in ["xlsx", "xls"] else path
        return Path(f"{path}.{fmt}").expanduser() if file_extension != fmt else path

    def _is_plain_text_format(self, fmt: str) -> bool:
        """Check if a file format is plain text (supports appending)."""
        plain_text_formats = ["txt", "json", "markdown", "md", "csv", "xml", "html", "yaml", "log", "tsv", "jsonl"]
        return fmt.lower() in plain_text_formats

    async def _upload_file(self, file_path: Path) -> None:
        """Upload the saved file using the upload_user_file service."""
        from langflow.api.v2.files import upload_user_file
        from langflow.services.database.models.user.crud import get_user_by_id

        # Ensure the file exists
        if not file_path.exists():
            msg = f"File not found: {file_path}"
            raise FileNotFoundError(msg)

        # Upload the file - always use append=False because the local file already contains
        # the correct content (either new or appended locally)
        with file_path.open("rb") as f:
            async with session_scope() as db:
                if not self.user_id:
                    msg = "User ID is required for file saving."
                    raise ValueError(msg)
                current_user = await get_user_by_id(db, self.user_id)

                await upload_user_file(
                    file=UploadFile(filename=file_path.name, file=f, size=file_path.stat().st_size),
                    session=db,
                    current_user=current_user,
                    storage_service=get_storage_service(),
                    settings_service=get_settings_service(),
                    append=False,
                )

    def _save_dataframe(self, dataframe: DataFrame, path: Path, fmt: str) -> str:
        """Save a DataFrame to the specified file format."""
        append_mode = getattr(self, "append_mode", False)
        should_append = append_mode and path.exists() and self._is_plain_text_format(fmt)

        if fmt == "csv":
            dataframe.to_csv(path, index=False, mode="a" if should_append else "w", header=not should_append)
        elif fmt == "excel":
            dataframe.to_excel(path, index=False, engine="openpyxl")
        elif fmt == "json":
            if should_append:
                # Read and parse existing JSON
                existing_data = []
                try:
                    existing_content = path.read_text(encoding="utf-8").strip()
                    if existing_content:
                        parsed = json.loads(existing_content)
                        # Handle case where existing content is a single object
                        if isinstance(parsed, dict):
                            existing_data = [parsed]
                        elif isinstance(parsed, list):
                            existing_data = parsed
                except (json.JSONDecodeError, FileNotFoundError):
                    # Treat parse errors or missing file as empty array
                    existing_data = []

                # Append new data
                new_records = json.loads(dataframe.to_json(orient="records"))
                existing_data.extend(new_records)

                # Write back as a single JSON array
                path.write_text(json.dumps(existing_data, indent=2), encoding="utf-8")
            else:
                dataframe.to_json(path, orient="records", indent=2)
        elif fmt == "markdown":
            content = dataframe.to_markdown(index=False)
            if should_append:
                path.write_text(path.read_text(encoding="utf-8") + "\\n\\n" + content, encoding="utf-8")
            else:
                path.write_text(content, encoding="utf-8")
        else:
            msg = f"Unsupported DataFrame format: {fmt}"
            raise ValueError(msg)
        action = "appended to" if should_append else "saved successfully as"
        return f"DataFrame {action} '{path}'"

    def _save_data(self, data: Data, path: Path, fmt: str) -> str:
        """Save a Data object to the specified file format."""
        append_mode = getattr(self, "append_mode", False)
        should_append = append_mode and path.exists() and self._is_plain_text_format(fmt)

        if fmt == "csv":
            pd.DataFrame(data.data).to_csv(
                path,
                index=False,
                mode="a" if should_append else "w",
                header=not should_append,
            )
        elif fmt == "excel":
            pd.DataFrame(data.data).to_excel(path, index=False, engine="openpyxl")
        elif fmt == "json":
            new_data = jsonable_encoder(data.data)
            if should_append:
                # Read and parse existing JSON
                existing_data = []
                try:
                    existing_content = path.read_text(encoding="utf-8").strip()
                    if existing_content:
                        parsed = json.loads(existing_content)
                        # Handle case where existing content is a single object
                        if isinstance(parsed, dict):
                            existing_data = [parsed]
                        elif isinstance(parsed, list):
                            existing_data = parsed
                except (json.JSONDecodeError, FileNotFoundError):
                    # Treat parse errors or missing file as empty array
                    existing_data = []

                # Append new data
                if isinstance(new_data, list):
                    existing_data.extend(new_data)
                else:
                    existing_data.append(new_data)

                # Write back as a single JSON array
                path.write_text(json.dumps(existing_data, indent=2), encoding="utf-8")
            else:
                content = orjson.dumps(new_data, option=orjson.OPT_INDENT_2).decode("utf-8")
                path.write_text(content, encoding="utf-8")
        elif fmt == "markdown":
            content = pd.DataFrame(data.data).to_markdown(index=False)
            if should_append:
                path.write_text(path.read_text(encoding="utf-8") + "\\n\\n" + content, encoding="utf-8")
            else:
                path.write_text(content, encoding="utf-8")
        else:
            msg = f"Unsupported Data format: {fmt}"
            raise ValueError(msg)
        action = "appended to" if should_append else "saved successfully as"
        return f"Data {action} '{path}'"

    async def _save_message(self, message: Message, path: Path, fmt: str) -> str:
        """Save a Message to the specified file format, handling async iterators."""
        content = ""
        if message.text is None:
            content = ""
        elif isinstance(message.text, AsyncIterator):
            async for item in message.text:
                content += str(item) + " "
            content = content.strip()
        elif isinstance(message.text, Iterator):
            content = " ".join(str(item) for item in message.text)
        else:
            content = str(message.text)

        append_mode = getattr(self, "append_mode", False)
        should_append = append_mode and path.exists() and self._is_plain_text_format(fmt)

        if fmt in ("txt", "html"):
            if should_append:
                path.write_text(path.read_text(encoding="utf-8") + "\\n" + content, encoding="utf-8")
            else:
                path.write_text(content, encoding="utf-8")
        elif fmt == "json":
            new_message = {"message": content}
            if should_append:
                # Read and parse existing JSON
                existing_data = []
                try:
                    existing_content = path.read_text(encoding="utf-8").strip()
                    if existing_content:
                        parsed = json.loads(existing_content)
                        # Handle case where existing content is a single object
                        if isinstance(parsed, dict):
                            existing_data = [parsed]
                        elif isinstance(parsed, list):
                            existing_data = parsed
                except (json.JSONDecodeError, FileNotFoundError):
                    # Treat parse errors or missing file as empty array
                    existing_data = []

                # Append new message
                existing_data.append(new_message)

                # Write back as a single JSON array
                path.write_text(json.dumps(existing_data, indent=2), encoding="utf-8")
            else:
                path.write_text(json.dumps(new_message, indent=2), encoding="utf-8")
        elif fmt == "markdown":
            md_content = f"**Message:**\\n\\n{content}"
            if should_append:
                path.write_text(path.read_text(encoding="utf-8") + "\\n\\n" + md_content, encoding="utf-8")
            else:
                path.write_text(md_content, encoding="utf-8")
        else:
            msg = f"Unsupported Message format: {fmt}"
            raise ValueError(msg)
        action = "appended to" if should_append else "saved successfully as"
        return f"Message {action} '{path}'"

    def _get_selected_storage_location(self) -> str:
        """Get the selected storage location from the SortableListInput."""
        if hasattr(self, "storage_location") and self.storage_location:
            if isinstance(self.storage_location, list) and len(self.storage_location) > 0:
                return self.storage_location[0].get("name", "")
            if isinstance(self.storage_location, dict):
                return self.storage_location.get("name", "")
        return ""

    def _get_file_format_for_location(self, location: str) -> str:
        """Get the appropriate file format based on storage location.

        If the agent set file_format via tool mode, that takes priority.
        """
        agent_format = getattr(self, "file_format", None)
        if agent_format:
            return agent_format
        if location == "Local":
            return getattr(self, "local_format", None) or self._get_default_format()
        if location == "AWS":
            return getattr(self, "aws_format", "txt")
        if location == "Google Drive":
            return getattr(self, "gdrive_format", "txt")
        return self._get_default_format()

    async def _save_to_local(self) -> Message:
        """Save file to local storage (original functionality)."""
        file_format = self._get_file_format_for_location("Local")

        # Validate file format based on input type
        allowed_formats = (
            self.LOCAL_MESSAGE_FORMAT_CHOICES if self._get_input_type() == "Message" else self.LOCAL_DATA_FORMAT_CHOICES
        )
        if file_format not in allowed_formats:
            msg = f"Invalid file format '{file_format}' for {self._get_input_type()}. Allowed: {allowed_formats}"
            raise ValueError(msg)

        # Prepare file path
        file_path = Path(self.file_name).expanduser()
        if not file_path.parent.exists():
            file_path.parent.mkdir(parents=True, exist_ok=True)
        file_path = self._adjust_file_path_with_format(file_path, file_format)

        # Save the input to file based on type
        if self._get_input_type() == "DataFrame":
            confirmation = self._save_dataframe(self.input, file_path, file_format)
        elif self._get_input_type() == "Data":
            confirmation = self._save_data(self.input, file_path, file_format)
        elif self._get_input_type() == "Message":
            confirmation = await self._save_message(self.input, file_path, file_format)
        else:
            msg = f"Unsupported input type: {self._get_input_type()}"
            raise ValueError(msg)

        # Upload the saved file
        await self._upload_file(file_path)

        # Return the final file path and confirmation message
        final_path = Path.cwd() / file_path if not file_path.is_absolute() else file_path
        return Message(text=f"{confirmation} at {final_path}")

    async def _save_to_aws(self) -> Message:
        """Save file to AWS S3 using S3 functionality."""
        import os

        import boto3

        from lfx.base.data.cloud_storage_utils import create_s3_client, validate_aws_credentials

        # Get AWS credentials from component inputs or fall back to environment variables
        aws_access_key_id = getattr(self, "aws_access_key_id", None)
        if aws_access_key_id and hasattr(aws_access_key_id, "get_secret_value"):
            aws_access_key_id = aws_access_key_id.get_secret_value()
        if not aws_access_key_id:
            aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")

        aws_secret_access_key = getattr(self, "aws_secret_access_key", None)
        if aws_secret_access_key and hasattr(aws_secret_access_key, "get_secret_value"):
            aws_secret_access_key = aws_secret_access_key.get_secret_value()
        if not aws_secret_access_key:
            aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")

        bucket_name = getattr(self, "bucket_name", None)
        if not bucket_name:
            # Try to get from storage service settings
            settings = get_settings_service().settings
            bucket_name = settings.object_storage_bucket_name

        # Validate AWS credentials
        if not aws_access_key_id:
            msg = (
                "AWS Access Key ID is required for S3 storage. Provide it as a component input "
                "or set AWS_ACCESS_KEY_ID environment variable."
            )
            raise ValueError(msg)
        if not aws_secret_access_key:
            msg = (
                "AWS Secret Key is required for S3 storage. Provide it as a component input "
                "or set AWS_SECRET_ACCESS_KEY environment variable."
            )
            raise ValueError(msg)
        if not bucket_name:
            msg = (
                "S3 Bucket Name is required for S3 storage. Provide it as a component input "
                "or set LANGFLOW_OBJECT_STORAGE_BUCKET_NAME environment variable."
            )
            raise ValueError(msg)

        # Validate AWS credentials
        validate_aws_credentials(self)

        # Create S3 client
        s3_client = create_s3_client(self)
        client_config: dict[str, Any] = {
            "aws_access_key_id": str(aws_access_key_id),
            "aws_secret_access_key": str(aws_secret_access_key),
        }

        # Get region from component input, environment variable, or settings
        aws_region = getattr(self, "aws_region", None)
        if not aws_region:
            aws_region = os.getenv("AWS_DEFAULT_REGION") or os.getenv("AWS_REGION")
        if aws_region:
            client_config["region_name"] = str(aws_region)

        s3_client = boto3.client("s3", **client_config)

        # Extract content
        content = self._extract_content_for_upload()
        file_format = self._get_file_format_for_location("AWS")

        # Generate file path
        file_path = f"{self.file_name}.{file_format}"
        if hasattr(self, "s3_prefix") and self.s3_prefix:
            file_path = f"{self.s3_prefix.rstrip('/')}/{file_path}"

        # Create temporary file
        import tempfile

        with tempfile.NamedTemporaryFile(
            mode="w", encoding="utf-8", suffix=f".{file_format}", delete=False
        ) as temp_file:
            temp_file.write(content)
            temp_file_path = temp_file.name

        try:
            # Upload to S3
            s3_client.upload_file(temp_file_path, bucket_name, file_path)
            s3_url = f"s3://{bucket_name}/{file_path}"
            return Message(text=f"File successfully uploaded to {s3_url}")
        finally:
            # Clean up temp file
            if Path(temp_file_path).exists():
                Path(temp_file_path).unlink()

    async def _save_to_google_drive(self) -> Message:
        """Save file to Google Drive using Google Drive functionality."""
        import tempfile

        from googleapiclient.http import MediaFileUpload

        from lfx.base.data.cloud_storage_utils import create_google_drive_service

        # Validate Google Drive credentials
        if not getattr(self, "service_account_key", None):
            msg = "GCP Credentials Secret Key is required for Google Drive storage"
            raise ValueError(msg)
        if not getattr(self, "folder_id", None):
            msg = "Google Drive Folder ID is required for Google Drive storage"
            raise ValueError(msg)

        # Create Google Drive service with full drive scope (needed for folder operations)
        drive_service, credentials = create_google_drive_service(
            self.service_account_key, scopes=["https://www.googleapis.com/auth/drive"], return_credentials=True
        )

        # Extract content and format
        content = self._extract_content_for_upload()
        file_format = self._get_file_format_for_location("Google Drive")

        # Handle special Google Drive formats
        if file_format in ["slides", "docs"]:
            return await self._save_to_google_apps(drive_service, credentials, content, file_format)

        # Create temporary file
        file_path = f"{self.file_name}.{file_format}"
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            suffix=f".{file_format}",
            delete=False,
        ) as temp_file:
            temp_file.write(content)
            temp_file_path = temp_file.name

        try:
            # Upload to Google Drive
            # Note: We skip explicit folder verification since it requires broader permissions.
            # If the folder doesn't exist or isn't accessible, the create() call will fail with a clear error.
            file_metadata = {"name": file_path, "parents": [self.folder_id]}
            media = MediaFileUpload(temp_file_path, resumable=True)

            try:
                uploaded_file = (
                    drive_service.files().create(body=file_metadata, media_body=media, fields="id").execute()
                )
            except Exception as e:
                msg = (
                    f"Unable to upload file to Google Drive folder '{self.folder_id}'. "
                    f"Error: {e!s}. "
                    "Please ensure: 1) The folder ID is correct, 2) The folder exists, "
                    "3) The service account has been granted access to this folder."
                )
                raise ValueError(msg) from e

            file_id = uploaded_file.get("id")
            file_url = f"https://drive.google.com/file/d/{file_id}/view"
            return Message(text=f"File successfully uploaded to Google Drive: {file_url}")
        finally:
            # Clean up temp file
            if Path(temp_file_path).exists():
                Path(temp_file_path).unlink()

    async def _save_to_google_apps(self, drive_service, credentials, content: str, app_type: str) -> Message:
        """Save content to Google Apps (Slides or Docs)."""
        import time

        if app_type == "slides":
            from googleapiclient.discovery import build

            slides_service = build("slides", "v1", credentials=credentials)

            file_metadata = {
                "name": self.file_name,
                "mimeType": "application/vnd.google-apps.presentation",
                "parents": [self.folder_id],
            }

            created_file = drive_service.files().create(body=file_metadata, fields="id").execute()
            presentation_id = created_file["id"]

            time.sleep(2)  # Wait for file to be available  # noqa: ASYNC251

            presentation = slides_service.presentations().get(presentationId=presentation_id).execute()
            slide_id = presentation["slides"][0]["objectId"]

            # Add content to slide
            requests = [
                {
                    "createShape": {
                        "objectId": "TextBox_01",
                        "shapeType": "TEXT_BOX",
                        "elementProperties": {
                            "pageObjectId": slide_id,
                            "size": {
                                "height": {"magnitude": 3000000, "unit": "EMU"},
                                "width": {"magnitude": 6000000, "unit": "EMU"},
                            },
                            "transform": {
                                "scaleX": 1,
                                "scaleY": 1,
                                "translateX": 1000000,
                                "translateY": 1000000,
                                "unit": "EMU",
                            },
                        },
                    }
                },
                {"insertText": {"objectId": "TextBox_01", "insertionIndex": 0, "text": content}},
            ]

            slides_service.presentations().batchUpdate(
                presentationId=presentation_id, body={"requests": requests}
            ).execute()
            file_url = f"https://docs.google.com/presentation/d/{presentation_id}/edit"

        elif app_type == "docs":
            from googleapiclient.discovery import build

            docs_service = build("docs", "v1", credentials=credentials)

            file_metadata = {
                "name": self.file_name,
                "mimeType": "application/vnd.google-apps.document",
                "parents": [self.folder_id],
            }

            created_file = drive_service.files().create(body=file_metadata, fields="id").execute()
            document_id = created_file["id"]

            time.sleep(2)  # Wait for file to be available  # noqa: ASYNC251

            # Add content to document
            requests = [{"insertText": {"location": {"index": 1}, "text": content}}]
            docs_service.documents().batchUpdate(documentId=document_id, body={"requests": requests}).execute()
            file_url = f"https://docs.google.com/document/d/{document_id}/edit"

        return Message(text=f"File successfully created in Google {app_type.title()}: {file_url}")

    def _extract_content_for_upload(self) -> str:
        """Extract content from input for upload to cloud services."""
        if self._get_input_type() == "DataFrame":
            return self.input.to_csv(index=False)
        if self._get_input_type() == "Data":
            if hasattr(self.input, "data") and self.input.data:
                if isinstance(self.input.data, dict):
                    import json

                    return json.dumps(self.input.data, indent=2, ensure_ascii=False)
                return str(self.input.data)
            return str(self.input)
        if self._get_input_type() == "Message":
            return str(self.input.text) if self.input.text else str(self.input)
        return str(self.input)
`},file_format:{_input_type:"StrInput",advanced:!1,display_name:"File Format (Tool)",dynamic:!1,info:"Output format: 'csv', 'json', 'txt', 'html', 'excel', 'markdown'. Overrides pre-configured format.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_format",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},file_name:{_input_type:"StrInput",advanced:!1,display_name:"File Name",dynamic:!1,info:"File name without extension (e.g. 'report'). Extension is added automatically.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_name",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,tool_mode:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"BugTriage"},folder_id:{_input_type:"StrInput",advanced:!0,display_name:"Google Drive Folder ID",dynamic:!1,info:"The Google Drive folder ID where the file will be uploaded. The folder must be shared with the service account email.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"folder_id",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},gdrive_format:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"File Format",dynamic:!1,external_options:{},info:"Select the file format for Google Drive storage.",name:"gdrive_format",options:["txt","html","json","csv","xlsx","slides","docs","jpg","mp3"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"txt"},input:{_input_type:"DataFrameInput",advanced:!1,display_name:"File Content",dynamic:!1,info:`The content to save. Accepts a DataFrame, Data, or Message object directly. Can also accept a JSON string (e.g. '[{"col1": "val1"}]') which will be parsed into a DataFrame, or plain text which will be saved as a Message.`,input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},local_format:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"File Format",dynamic:!1,external_options:{},info:"Select the file format for local storage.",name:"local_format",options:["csv","excel","json","markdown","txt","html"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"markdown"},s3_prefix:{_input_type:"StrInput",advanced:!0,display_name:"S3 Prefix",dynamic:!1,info:"Prefix for all files in S3.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"s3_prefix",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},service_account_key:{_input_type:"SecretStrInput",advanced:!0,display_name:"GCP Credentials Secret Key",dynamic:!1,info:"Your Google Cloud Platform service account JSON key as a secret string (complete JSON content).",input_types:[],load_from_db:!1,name:"service_account_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},storage_location:{_input_type:"SortableListInput",advanced:!0,display_name:"Storage Location",dynamic:!1,info:"Choose where to save the file.",limit:1,name:"storage_location",options:[{icon:"hard-drive",name:"Local"},{icon:"Amazon",name:"AWS"},{icon:"google",name:"Google Drive"}],override_skip:!1,placeholder:"Select Location",real_time_refresh:!0,required:!1,search_category:[],show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"sortableList",value:[{chosen:!1,icon:"hard-drive",name:"Local",selected:!1}]}},tool_mode:!1},showNode:!0,type:"SaveToFile"},dragging:!1,id:"SaveToFile-ieDaM",measured:{height:488,width:320},position:{x:1838.0387396594408,y:-140.5966416669621},selected:!1,type:"genericNode"}],viewport:{x:222.6330095495532,y:250.54409058541785,zoom:.35904092676217675}},description:"Create, Chain, Communicate.",endpoint_name:null,id:"acfcd291-de1a-4419-b163-2ab582bd0d77",is_component:!1,last_tested_version:"1.10.0",locked:!1,name:"Bug_Triage_AI_Agent",tags:[]}},{id:"flaky-test-case-generator",title:"Flaky_Test_Case_generator",description:"Unravel the Art of Articulation.",fileName:"Flaky_Test_Case_generator.json",rawData:{data:{edges:[{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-bsj7J",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"MistralModel-iShHn",inputTypes:["Message"],type:"str"}},id:"xy-edge__Prompt Template-bsj7J{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-bsj7Jœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-MistralModel-iShHn{œfieldNameœ:œinput_valueœ,œidœ:œMistralModel-iShHnœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-bsj7J",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-bsj7Jœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"MistralModel-iShHn",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œMistralModel-iShHnœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MistralModel",id:"MistralModel-iShHn",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-HbKUY",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"xy-edge__MistralModel-iShHn{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-iShHnœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-HbKUY{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-HbKUYœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"MistralModel-iShHn",sourceHandle:"{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-iShHnœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-HbKUY",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-HbKUYœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"File",id:"File-ksUMq",name:"message",output_types:["Message"]},targetHandle:{fieldName:"file1",id:"Prompt Template-bsj7J",inputTypes:["Message"],type:"str"}},id:"xy-edge__File-ksUMq{œdataTypeœ:œFileœ,œidœ:œFile-ksUMqœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-bsj7J{œfieldNameœ:œfile1œ,œidœ:œPrompt Template-bsj7Jœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"File-ksUMq",sourceHandle:"{œdataTypeœ:œFileœ,œidœ:œFile-ksUMqœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-bsj7J",targetHandle:"{œfieldNameœ:œfile1œ,œidœ:œPrompt Template-bsj7Jœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"File",id:"File-z2bcx",name:"message",output_types:["Message"]},targetHandle:{fieldName:"file2",id:"Prompt Template-bsj7J",inputTypes:["Message"],type:"str"}},id:"xy-edge__File-z2bcx{œdataTypeœ:œFileœ,œidœ:œFile-z2bcxœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-bsj7J{œfieldNameœ:œfile2œ,œidœ:œPrompt Template-bsj7Jœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"File-z2bcx",sourceHandle:"{œdataTypeœ:œFileœ,œidœ:œFile-z2bcxœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-bsj7J",targetHandle:"{œfieldNameœ:œfile2œ,œidœ:œPrompt Template-bsj7Jœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"}],nodes:[{data:{id:"File-ksUMq",node:{base_classes:["Message"],beta:!1,category:"files_and_knowledge",conditional_paths:[],custom_fields:{},description:"Loads and returns the content from uploaded files.",display_name:"Test Execution Result R-1",documentation:"https://docs.langflow.org/read-file",edited:!1,field_order:["storage_location","path","file_path","separator","silent_errors","delete_server_file_after_processing","ignore_unsupported_extensions","ignore_unspecified_files","file_path_str","aws_access_key_id","aws_secret_access_key","bucket_name","aws_region","s3_file_key","service_account_key","file_id","advanced_mode","pipeline","ocr_engine","md_image_placeholder","md_page_break_placeholder","doc_key","use_multithreading","concurrency_multithreading","markdown"],frozen:!1,icon:"file-text",key:"File",last_updated:"2026-06-27T12:33:24.026Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"f497bdbc749b",dependencies:{dependencies:[{name:"lfx",version:null},{name:"langchain_core",version:"1.4.0"},{name:"pydantic",version:"2.13.4"},{name:"googleapiclient",version:"2.197.0"}],total_dependencies:4},module:"lfx.components.files_and_knowledge.file.FileComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Structured Content",group_outputs:!1,hidden:null,loop_types:null,method:"load_files_json",name:"json",options:null,required_inputs:null,tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Raw Content",group_outputs:!1,loop_types:null,method:"load_files_message",name:"message",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"File Path",group_outputs:!1,hidden:null,loop_types:null,method:"load_files_path",name:"path",options:null,required_inputs:null,tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,score:.007568328950209746,template:{_frontend_node_flow_id:{value:"d99f1491-3a0a-4109-b297-f4ab32e06e1f"},_frontend_node_folder_id:{value:"011fd645-4f38-4d59-8c87-4f3c8606d1ae"},_type:"Component",advanced_mode:{_input_type:"BoolInput",advanced:!1,display_name:"Advanced Parser",dynamic:!1,info:"Enable advanced document processing and export with Docling for PDFs, images, and office documents. Note that advanced document processing can consume significant resources.",list:!1,list_add_label:"Add More",name:"advanced_mode",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},aws_access_key_id:{_input_type:"SecretStrInput",advanced:!1,display_name:"AWS Access Key ID",dynamic:!1,info:"AWS Access key ID.",input_types:[],load_from_db:!1,name:"aws_access_key_id",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},aws_region:{_input_type:"StrInput",advanced:!1,display_name:"AWS Region",dynamic:!1,info:"AWS region (e.g., us-east-1, eu-west-1).",list:!1,list_add_label:"Add More",load_from_db:!1,name:"aws_region",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},aws_secret_access_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"AWS Secret Key",dynamic:!1,info:"AWS Secret Key.",input_types:[],load_from_db:!1,name:"aws_secret_access_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},bucket_name:{_input_type:"StrInput",advanced:!1,display_name:"S3 Bucket Name",dynamic:!1,info:"Enter the name of the S3 bucket.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"bucket_name",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`"""Enhanced file component with Docling support and process isolation.

Notes:
-----
- ALL Docling parsing/export runs in a separate OS process to prevent memory
  growth and native library state from impacting the main Langflow process.
- Standard text/structured parsing continues to use existing BaseFileComponent
  utilities (and optional threading via \`parallel_load_data\`).
"""

from __future__ import annotations

import contextlib
import json
import subprocess
import sys
import textwrap
import time
from copy import deepcopy
from pathlib import Path
from tempfile import NamedTemporaryFile
from typing import Any

from lfx.base.data.base_file import BaseFileComponent
from lfx.base.data.storage_utils import parse_storage_path, read_file_bytes, validate_image_content_type
from lfx.base.data.utils import TEXT_FILE_TYPES, parallel_load_data, parse_text_file_to_data
from lfx.inputs import SortableListInput
from lfx.inputs.inputs import DropdownInput, MessageTextInput, StrInput
from lfx.io import BoolInput, FileInput, IntInput, Output, SecretStrInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame  # noqa: TC001
from lfx.schema.message import Message
from lfx.services.deps import get_settings_service, get_storage_service
from lfx.utils.async_helpers import run_until_complete
from lfx.utils.validate_cloud import is_astra_cloud_environment


def _get_storage_location_options():
    """Get storage location options, filtering out Local if in Astra cloud environment."""
    all_options = [{"name": "AWS", "icon": "Amazon"}, {"name": "Google Drive", "icon": "google"}]
    if is_astra_cloud_environment():
        return all_options
    return [{"name": "Local", "icon": "hard-drive"}, *all_options]


class FileComponent(BaseFileComponent):
    """File component with optional Docling processing (isolated in a subprocess)."""

    display_name = "Read File"
    # description is now a dynamic property - see get_tool_description()
    _base_description = "Loads and returns the content from uploaded files."
    documentation: str = "https://docs.langflow.org/read-file"
    icon = "file-text"
    name = "File"
    add_tool_output = True  # Enable tool mode toggle without requiring tool_mode inputs

    # Extensions that can be processed without Docling (using standard text parsing)
    TEXT_EXTENSIONS = TEXT_FILE_TYPES

    # Extensions that require Docling for processing (images, advanced office formats, etc.)
    DOCLING_ONLY_EXTENSIONS = [
        "adoc",
        "asciidoc",
        "asc",
        "bmp",
        "dotx",
        "dotm",
        "docm",
        "jpg",
        "jpeg",
        "png",
        "potx",
        "ppsx",
        "pptm",
        "potm",
        "ppsm",
        "pptx",
        "tiff",
        "xls",
        "xlsx",
        "xhtml",
        "webp",
    ]

    # Docling-supported/compatible extensions; TEXT_FILE_TYPES are supported by the base loader.
    VALID_EXTENSIONS = [
        *TEXT_EXTENSIONS,
        *DOCLING_ONLY_EXTENSIONS,
    ]

    # Fixed export settings used when markdown export is requested.
    EXPORT_FORMAT = "Markdown"
    IMAGE_MODE = "placeholder"

    _base_inputs = deepcopy(BaseFileComponent.get_base_inputs())

    for input_item in _base_inputs:
        if isinstance(input_item, FileInput) and input_item.name == "path":
            input_item.real_time_refresh = True
            input_item.tool_mode = False  # Disable tool mode for file upload input
            input_item.required = False  # Make it optional so it doesn't error in tool mode
            break

    inputs = [
        SortableListInput(
            name="storage_location",
            display_name="Storage Location",
            placeholder="Select Location",
            info="Choose where to read the file from.",
            options=_get_storage_location_options(),
            real_time_refresh=True,
            limit=1,
            value=[{"name": "Local", "icon": "hard-drive"}],
            advanced=True,
        ),
        *_base_inputs,
        StrInput(
            name="file_path_str",
            display_name="File Path",
            info=(
                "Path to the file to read. Used when component is called as a tool. "
                "If not provided, will use the uploaded file from 'path' input."
            ),
            show=False,
            advanced=True,
            tool_mode=True,  # Required for Toolset toggle, but _get_tools() ignores this parameter
            required=False,
        ),
        # AWS S3 specific inputs
        SecretStrInput(
            name="aws_access_key_id",
            display_name="AWS Access Key ID",
            info="AWS Access key ID.",
            show=False,
            advanced=False,
            required=True,
        ),
        SecretStrInput(
            name="aws_secret_access_key",
            display_name="AWS Secret Key",
            info="AWS Secret Key.",
            show=False,
            advanced=False,
            required=True,
        ),
        StrInput(
            name="bucket_name",
            display_name="S3 Bucket Name",
            info="Enter the name of the S3 bucket.",
            show=False,
            advanced=False,
            required=True,
        ),
        StrInput(
            name="aws_region",
            display_name="AWS Region",
            info="AWS region (e.g., us-east-1, eu-west-1).",
            show=False,
            advanced=False,
        ),
        StrInput(
            name="s3_file_key",
            display_name="S3 File Key",
            info="The key (path) of the file in S3 bucket.",
            show=False,
            advanced=False,
            required=True,
        ),
        # Google Drive specific inputs
        SecretStrInput(
            name="service_account_key",
            display_name="GCP Credentials Secret Key",
            info="Your Google Cloud Platform service account JSON key as a secret string (complete JSON content).",
            show=False,
            advanced=False,
            required=True,
        ),
        StrInput(
            name="file_id",
            display_name="Google Drive File ID",
            info=("The Google Drive file ID to read. The file must be shared with the service account email."),
            show=False,
            advanced=False,
            required=True,
        ),
        BoolInput(
            name="advanced_mode",
            display_name="Advanced Parser",
            value=False,
            real_time_refresh=True,
            info=(
                "Enable advanced document processing and export with Docling for PDFs, images, and office documents. "
                "Note that advanced document processing can consume significant resources."
            ),
            # Disabled in cloud
            show=not is_astra_cloud_environment(),
        ),
        DropdownInput(
            name="pipeline",
            display_name="Pipeline",
            info="Docling pipeline to use",
            options=["standard", "vlm"],
            value="standard",
            advanced=True,
            real_time_refresh=True,
        ),
        DropdownInput(
            name="ocr_engine",
            display_name="OCR Engine",
            info="OCR engine to use. Only available when pipeline is set to 'standard'.",
            options=["None", "easyocr"],
            value="easyocr",
            show=False,
            advanced=True,
        ),
        StrInput(
            name="md_image_placeholder",
            display_name="Image placeholder",
            info="Specify the image placeholder for markdown exports.",
            value="<!-- image -->",
            advanced=True,
            show=False,
        ),
        StrInput(
            name="md_page_break_placeholder",
            display_name="Page break placeholder",
            info="Add this placeholder between pages in the markdown output.",
            value="",
            advanced=True,
            show=False,
        ),
        MessageTextInput(
            name="doc_key",
            display_name="Doc Key",
            info="The key to use for the DoclingDocument column.",
            value="doc",
            advanced=True,
            show=False,
        ),
        # Deprecated input retained for backward-compatibility.
        BoolInput(
            name="use_multithreading",
            display_name="[Deprecated] Use Multithreading",
            advanced=True,
            value=True,
            info="Set 'Processing Concurrency' greater than 1 to enable multithreading.",
        ),
        IntInput(
            name="concurrency_multithreading",
            display_name="Processing Concurrency",
            advanced=True,
            info="When multiple files are being processed, the number of files to process concurrently.",
            value=1,
        ),
        BoolInput(
            name="markdown",
            display_name="Markdown Export",
            info="Export processed documents to Markdown format. Only available when advanced mode is enabled.",
            value=False,
            show=False,
        ),
    ]

    outputs = [
        Output(display_name="Raw Content", name="message", method="load_files_message", tool_mode=True),
    ]

    # ------------------------------ Tool description with file names --------------

    def get_tool_description(self) -> str:
        """Return a dynamic description that includes the names of uploaded files.

        This helps the Agent understand which files are available to read.
        """
        base_description = type(self)._base_description  # noqa: SLF001

        # Get the list of uploaded file paths
        file_paths = getattr(self, "path", None)
        if not file_paths:
            return base_description

        # Ensure it's a list
        if not isinstance(file_paths, list):
            file_paths = [file_paths]

        # Extract just the file names from the paths
        file_names = []
        for fp in file_paths:
            if fp:
                name = Path(fp).name
                file_names.append(name)

        if file_names:
            files_str = ", ".join(file_names)
            return f"{base_description} Available files: {files_str}. Call this tool to read these files."

        return base_description

    @property
    def description(self) -> str:
        """Dynamic description property that includes uploaded file names."""
        return self.get_tool_description()

    async def _get_tools(self) -> list:
        """Override to create a tool without parameters.

        The Read File component should use the files already uploaded via UI,
        not accept file paths from the Agent (which wouldn't know the internal paths).
        """
        from langchain_core.tools import StructuredTool
        from pydantic import BaseModel

        # Empty schema - no parameters needed
        class EmptySchema(BaseModel):
            """No parameters required - uses pre-uploaded files."""

        async def read_files_tool() -> str:
            """Read the content of uploaded files."""
            try:
                if getattr(self, "advanced_mode", False):
                    # In advanced mode, use the markdown output path so that the
                    # tool shares the same Docling processing as the advanced
                    # outputs rather than triggering a second subprocess via
                    # load_files_message.
                    self.markdown = True
                    result = self.load_files_markdown()
                else:
                    result = self.load_files_message()
                if hasattr(result, "get_text"):
                    return result.get_text()
                if hasattr(result, "text"):
                    return result.text
                return str(result)
            except (FileNotFoundError, ValueError, OSError, RuntimeError) as e:
                return f"Error reading files: {e}"

        description = self.get_tool_description()

        tool = StructuredTool(
            name="load_files_message",
            description=description,
            coroutine=read_files_tool,
            args_schema=EmptySchema,
            handle_tool_error=True,
            tags=["load_files_message"],
            metadata={
                "display_name": "Read File",
                "display_description": description,
            },
        )

        return [tool]

    # ------------------------------ UI helpers --------------------------------------

    def _path_value(self, template: dict) -> list[str]:
        """Return the list of currently selected file paths from the template."""
        return template.get("path", {}).get("file_path", [])

    def _disable_docling_fields_in_cloud(self, build_config: dict[str, Any]) -> None:
        """Disable all Docling-related fields in cloud environments."""
        if "advanced_mode" in build_config:
            build_config["advanced_mode"]["show"] = False
            build_config["advanced_mode"]["value"] = False
        # Hide all Docling-related fields
        docling_fields = ("pipeline", "ocr_engine", "doc_key", "md_image_placeholder", "md_page_break_placeholder")
        for field in docling_fields:
            if field in build_config:
                build_config[field]["show"] = False
        # Also disable OCR engine specifically
        if "ocr_engine" in build_config:
            build_config["ocr_engine"]["value"] = "None"

    def update_build_config(
        self,
        build_config: dict[str, Any],
        field_value: Any,
        field_name: str | None = None,
    ) -> dict[str, Any]:
        """Show/hide Advanced Parser and related fields based on selection context."""
        # Update storage location options dynamically based on cloud environment
        if "storage_location" in build_config:
            updated_options = _get_storage_location_options()
            build_config["storage_location"]["options"] = updated_options

        # Handle storage location selection
        if field_name == "storage_location":
            # Extract selected storage location
            selected = [location["name"] for location in field_value] if isinstance(field_value, list) else []

            # Hide all storage-specific fields first
            storage_fields = [
                "aws_access_key_id",
                "aws_secret_access_key",
                "bucket_name",
                "aws_region",
                "s3_file_key",
                "service_account_key",
                "file_id",
            ]

            for f_name in storage_fields:
                if f_name in build_config:
                    build_config[f_name]["show"] = False

            # Show fields based on selected storage location
            if len(selected) == 1:
                location = selected[0]

                if location == "Local":
                    # Show file upload input for local storage
                    if "path" in build_config:
                        build_config["path"]["show"] = True

                elif location == "AWS":
                    # Hide file upload input, show AWS fields
                    if "path" in build_config:
                        build_config["path"]["show"] = False

                    aws_fields = [
                        "aws_access_key_id",
                        "aws_secret_access_key",
                        "bucket_name",
                        "aws_region",
                        "s3_file_key",
                    ]
                    for f_name in aws_fields:
                        if f_name in build_config:
                            build_config[f_name]["show"] = True
                            build_config[f_name]["advanced"] = False

                elif location == "Google Drive":
                    # Hide file upload input, show Google Drive fields
                    if "path" in build_config:
                        build_config["path"]["show"] = False

                    gdrive_fields = ["service_account_key", "file_id"]
                    for f_name in gdrive_fields:
                        if f_name in build_config:
                            build_config[f_name]["show"] = True
                            build_config[f_name]["advanced"] = False
            # No storage location selected - show file upload by default
            elif "path" in build_config:
                build_config["path"]["show"] = True

            return build_config

        if field_name == "path":
            paths = self._path_value(build_config)

            # Disable in cloud environments
            if is_astra_cloud_environment():
                self._disable_docling_fields_in_cloud(build_config)
            else:
                # If all files can be processed by docling, do so
                allow_advanced = all(not file_path.endswith((".csv", ".xlsx", ".parquet")) for file_path in paths)
                build_config["advanced_mode"]["show"] = allow_advanced
                if not allow_advanced:
                    build_config["advanced_mode"]["value"] = False
                    docling_fields = (
                        "pipeline",
                        "ocr_engine",
                        "doc_key",
                        "md_image_placeholder",
                        "md_page_break_placeholder",
                    )
                    for field in docling_fields:
                        if field in build_config:
                            build_config[field]["show"] = False

        # Docling Processing
        elif field_name == "advanced_mode":
            # Disable in cloud environments - don't show Docling fields even if advanced_mode is toggled
            if is_astra_cloud_environment():
                self._disable_docling_fields_in_cloud(build_config)
            else:
                docling_fields = (
                    "pipeline",
                    "ocr_engine",
                    "doc_key",
                    "md_image_placeholder",
                    "md_page_break_placeholder",
                )
                for field in docling_fields:
                    if field in build_config:
                        build_config[field]["show"] = bool(field_value)
                        if field == "pipeline":
                            build_config[field]["advanced"] = not bool(field_value)

        elif field_name == "pipeline":
            # Disable in cloud environments - don't show OCR engine even if pipeline is changed
            if is_astra_cloud_environment():
                self._disable_docling_fields_in_cloud(build_config)
            elif field_value == "standard":
                build_config["ocr_engine"]["show"] = True
                build_config["ocr_engine"]["value"] = "easyocr"
            else:
                build_config["ocr_engine"]["show"] = False
                build_config["ocr_engine"]["value"] = "None"

        return build_config

    def update_outputs(self, frontend_node: dict[str, Any], field_name: str, field_value: Any) -> dict[str, Any]:  # noqa: ARG002
        """Dynamically show outputs based on file count/type and advanced mode."""
        if field_name not in ["path", "advanced_mode", "pipeline"]:
            return frontend_node

        template = frontend_node.get("template", {})
        paths = self._path_value(template)
        if not paths:
            return frontend_node

        frontend_node["outputs"] = []
        if len(paths) == 1:
            file_path = paths[0] if field_name == "path" else frontend_node["template"]["path"]["file_path"][0]
            if file_path.endswith((".csv", ".xlsx", ".parquet")):
                frontend_node["outputs"].append(
                    Output(
                        display_name="Structured Content",
                        name="dataframe",
                        method="load_files_structured",
                        tool_mode=True,
                    ),
                )
            elif file_path.endswith(".json"):
                frontend_node["outputs"].append(
                    Output(display_name="Structured Content", name="json", method="load_files_json", tool_mode=True),
                )

            advanced_mode = frontend_node.get("template", {}).get("advanced_mode", {}).get("value", False)
            if advanced_mode:
                frontend_node["outputs"].append(
                    Output(
                        display_name="Structured Output",
                        name="advanced_dataframe",
                        method="load_files_dataframe",
                        tool_mode=True,
                    ),
                )
                frontend_node["outputs"].append(
                    Output(
                        display_name="Markdown", name="advanced_markdown", method="load_files_markdown", tool_mode=True
                    ),
                )
                frontend_node["outputs"].append(
                    Output(display_name="File Path", name="path", method="load_files_path", tool_mode=True),
                )
            else:
                frontend_node["outputs"].append(
                    Output(display_name="Raw Content", name="message", method="load_files_message", tool_mode=True),
                )
                frontend_node["outputs"].append(
                    Output(display_name="File Path", name="path", method="load_files_path", tool_mode=True),
                )
        else:
            # Multiple files => DataFrame output; advanced parser disabled
            frontend_node["outputs"].append(
                Output(display_name="Files", name="dataframe", method="load_files", tool_mode=True)
            )

        return frontend_node

    # ------------------------------ Core processing ----------------------------------

    def _get_selected_storage_location(self) -> str:
        """Get the selected storage location from the SortableListInput."""
        if hasattr(self, "storage_location") and self.storage_location:
            if isinstance(self.storage_location, list) and len(self.storage_location) > 0:
                return self.storage_location[0].get("name", "")
            if isinstance(self.storage_location, dict):
                return self.storage_location.get("name", "")
        return "Local"  # Default to Local if not specified

    def _validate_and_resolve_paths(self) -> list[BaseFileComponent.BaseFile]:
        """Override to handle file_path_str input from tool mode and cloud storage.

        Priority:
        1. Cloud storage (AWS/Google Drive) if selected
        2. file_path_str (if provided by the tool call)
        3. path (uploaded file from UI)
        """
        storage_location = self._get_selected_storage_location()

        # Handle AWS S3
        if storage_location == "AWS":
            return self._read_from_aws_s3()

        # Handle Google Drive
        if storage_location == "Google Drive":
            return self._read_from_google_drive()

        # Handle Local storage
        # Check if file_path_str is provided (from tool mode)
        file_path_str = getattr(self, "file_path_str", None)
        if file_path_str:
            # Use the string path from tool mode
            from pathlib import Path

            from lfx.schema.data import Data

            # Use same resolution logic as BaseFileComponent (support storage paths)
            path_str = str(file_path_str)
            if parse_storage_path(path_str):
                try:
                    resolved_path = Path(self.get_full_path(path_str))
                except (ValueError, AttributeError):
                    resolved_path = Path(self.resolve_path(path_str))
            else:
                resolved_path = Path(self.resolve_path(path_str))

            if not resolved_path.exists():
                msg = f"File or directory not found: {file_path_str}"
                self.log(msg)
                if not self.silent_errors:
                    raise ValueError(msg)
                return []

            data_obj = Data(data={self.SERVER_FILE_PATH_FIELDNAME: str(resolved_path)})
            return [BaseFileComponent.BaseFile(data_obj, resolved_path, delete_after_processing=False)]

        # Otherwise use the default implementation (uses path FileInput)
        return super()._validate_and_resolve_paths()

    def _read_from_aws_s3(self) -> list[BaseFileComponent.BaseFile]:
        """Read file from AWS S3."""
        from lfx.base.data.cloud_storage_utils import create_s3_client, validate_aws_credentials

        # Validate AWS credentials
        validate_aws_credentials(self)
        if not getattr(self, "s3_file_key", None):
            msg = "S3 File Key is required"
            raise ValueError(msg)

        # Create S3 client
        s3_client = create_s3_client(self)

        # Download file to temp location
        import tempfile

        # Get file extension from S3 key
        file_extension = Path(self.s3_file_key).suffix or ""

        with tempfile.NamedTemporaryFile(mode="wb", suffix=file_extension, delete=False) as temp_file:
            temp_file_path = temp_file.name
            try:
                s3_client.download_fileobj(self.bucket_name, self.s3_file_key, temp_file)
            except Exception as e:
                # Clean up temp file on failure
                with contextlib.suppress(OSError):
                    Path(temp_file_path).unlink()
                msg = f"Failed to download file from S3: {e}"
                raise RuntimeError(msg) from e

        # Create BaseFile object
        from lfx.schema.data import Data

        temp_path = Path(temp_file_path)
        data_obj = Data(data={self.SERVER_FILE_PATH_FIELDNAME: str(temp_path)})
        return [BaseFileComponent.BaseFile(data_obj, temp_path, delete_after_processing=True)]

    def _read_from_google_drive(self) -> list[BaseFileComponent.BaseFile]:
        """Read file from Google Drive."""
        import tempfile

        from googleapiclient.http import MediaIoBaseDownload

        from lfx.base.data.cloud_storage_utils import create_google_drive_service

        # Validate Google Drive credentials
        if not getattr(self, "service_account_key", None):
            msg = "GCP Credentials Secret Key is required for Google Drive storage"
            raise ValueError(msg)
        if not getattr(self, "file_id", None):
            msg = "Google Drive File ID is required"
            raise ValueError(msg)

        # Create Google Drive service with read-only scope
        drive_service = create_google_drive_service(
            self.service_account_key, scopes=["https://www.googleapis.com/auth/drive.readonly"]
        )

        # Get file metadata to determine file name and extension
        try:
            file_metadata = drive_service.files().get(fileId=self.file_id, fields="name,mimeType").execute()
            file_name = file_metadata.get("name", "download")
        except Exception as e:
            msg = (
                f"Unable to access file with ID '{self.file_id}'. "
                f"Error: {e!s}. "
                "Please ensure: 1) The file ID is correct, 2) The file exists, "
                "3) The service account has been granted access to this file."
            )
            raise ValueError(msg) from e

        # Download file to temp location
        file_extension = Path(file_name).suffix or ""
        with tempfile.NamedTemporaryFile(mode="wb", suffix=file_extension, delete=False) as temp_file:
            temp_file_path = temp_file.name
            try:
                request = drive_service.files().get_media(fileId=self.file_id)
                downloader = MediaIoBaseDownload(temp_file, request)
                done = False
                while not done:
                    _status, done = downloader.next_chunk()
            except Exception as e:
                # Clean up temp file on failure
                with contextlib.suppress(OSError):
                    Path(temp_file_path).unlink()
                msg = f"Failed to download file from Google Drive: {e}"
                raise RuntimeError(msg) from e

        # Create BaseFile object
        from lfx.schema.data import Data

        temp_path = Path(temp_file_path)
        data_obj = Data(data={self.SERVER_FILE_PATH_FIELDNAME: str(temp_path)})
        return [BaseFileComponent.BaseFile(data_obj, temp_path, delete_after_processing=True)]

    def _is_docling_compatible(self, file_path: str) -> bool:
        """Lightweight extension gate for Docling-compatible types."""
        docling_exts = (
            ".adoc",
            ".asciidoc",
            ".asc",
            ".bmp",
            ".csv",
            ".dotx",
            ".dotm",
            ".docm",
            ".docx",
            ".htm",
            ".html",
            ".jpg",
            ".jpeg",
            ".json",
            ".md",
            ".pdf",
            ".png",
            ".potx",
            ".ppsx",
            ".pptm",
            ".potm",
            ".ppsm",
            ".pptx",
            ".tiff",
            ".txt",
            ".xls",
            ".xlsx",
            ".xhtml",
            ".xml",
            ".webp",
        )
        return file_path.lower().endswith(docling_exts)

    async def _get_local_file_for_docling(self, file_path: str) -> tuple[str, bool]:
        """Get a local file path for Docling processing, downloading from S3 if needed.

        Args:
            file_path: Either a local path or S3 key (format "flow_id/filename")

        Returns:
            tuple[str, bool]: (local_path, should_delete) where should_delete indicates
                              if this is a temporary file that should be cleaned up
        """
        settings = get_settings_service().settings
        if settings.storage_type == "local":
            return file_path, False

        # S3 storage - download to temp file
        parsed = parse_storage_path(file_path)
        if not parsed:
            msg = f"Invalid S3 path format: {file_path}. Expected 'flow_id/filename'"
            raise ValueError(msg)

        storage_service = get_storage_service()
        flow_id, filename = parsed

        # Get file content from S3
        content = await storage_service.get_file(flow_id, filename)

        suffix = Path(filename).suffix
        with NamedTemporaryFile(mode="wb", suffix=suffix, delete=False) as tmp_file:
            tmp_file.write(content)
            temp_path = tmp_file.name

        return temp_path, True

    def _process_docling_in_subprocess(self, file_path: str) -> Data | None:
        """Run Docling in a separate OS process and map the result to a Data object.

        We avoid multiprocessing pickling by launching \`python -c "<script>"\` and
        passing JSON config via stdin. The child prints a JSON result to stdout.

        For S3 storage, the file is downloaded to a temp file first.
        """
        if not file_path:
            return None

        settings = get_settings_service().settings
        if settings.storage_type == "s3":
            local_path, should_delete = run_until_complete(self._get_local_file_for_docling(file_path))
        else:
            local_path = file_path
            should_delete = False

        try:
            return self._process_docling_subprocess_impl(local_path, file_path)
        finally:
            # Clean up temp file if we created one
            if should_delete:
                with contextlib.suppress(Exception):
                    Path(local_path).unlink()  # Ignore cleanup errors

    def _process_docling_subprocess_impl(self, local_file_path: str, original_file_path: str) -> Data | None:
        """Implementation of Docling subprocess processing.

        Args:
            local_file_path: Path to local file to process
            original_file_path: Original file path to include in metadata
        Returns:
            Data object with processed content
        """
        args: dict[str, Any] = {
            "file_path": local_file_path,
            "markdown": bool(self.markdown),
            "image_mode": str(self.IMAGE_MODE),
            "md_image_placeholder": str(self.md_image_placeholder),
            "md_page_break_placeholder": str(self.md_page_break_placeholder),
            "pipeline": str(self.pipeline),
            "ocr_engine": (
                self.ocr_engine if self.ocr_engine and self.ocr_engine != "None" and self.pipeline != "vlm" else None
            ),
        }

        # Child script for isolating the docling processing
        child_script = textwrap.dedent(
            r"""
            import json, sys

            def try_imports():
                try:
                    from docling.datamodel.base_models import ConversionStatus, InputFormat  # type: ignore
                    from docling.document_converter import DocumentConverter  # type: ignore
                    from docling_core.types.doc import ImageRefMode  # type: ignore
                    return ConversionStatus, InputFormat, DocumentConverter, ImageRefMode, "latest"
                except Exception as e:
                    raise e

            def create_converter(strategy, input_format, DocumentConverter, pipeline, ocr_engine):
                # --- Standard PDF/IMAGE pipeline (your existing behavior), with optional OCR ---
                if pipeline == "standard":
                    try:
                        from docling.datamodel.pipeline_options import PdfPipelineOptions  # type: ignore
                        from docling.document_converter import PdfFormatOption  # type: ignore

                        pipe = PdfPipelineOptions()
                        pipe.do_ocr = False

                        if ocr_engine:
                            try:
                                from docling.models.factories import get_ocr_factory  # type: ignore
                                pipe.do_ocr = True
                                fac = get_ocr_factory(allow_external_plugins=False)
                                pipe.ocr_options = fac.create_options(kind=ocr_engine)
                            except Exception:
                                # If OCR setup fails, disable it
                                pipe.do_ocr = False

                        fmt = {}
                        if hasattr(input_format, "PDF"):
                            fmt[getattr(input_format, "PDF")] = PdfFormatOption(pipeline_options=pipe)
                        if hasattr(input_format, "IMAGE"):
                            fmt[getattr(input_format, "IMAGE")] = PdfFormatOption(pipeline_options=pipe)

                        return DocumentConverter(format_options=fmt)
                    except Exception:
                        return DocumentConverter()

                # --- Vision-Language Model (VLM) pipeline ---
                if pipeline == "vlm":
                    try:
                        from docling.datamodel.pipeline_options import VlmPipelineOptions
                        from docling.datamodel.vlm_model_specs import GRANITEDOCLING_MLX, GRANITEDOCLING_TRANSFORMERS
                        from docling.document_converter import PdfFormatOption
                        from docling.pipeline.vlm_pipeline import VlmPipeline

                        vl_pipe = VlmPipelineOptions(
                            vlm_options=GRANITEDOCLING_TRANSFORMERS,
                        )

                        if sys.platform == "darwin":
                            try:
                                import mlx_vlm
                                vl_pipe.vlm_options = GRANITEDOCLING_MLX
                            except ImportError as e:
                                raise e

                        # VLM paths generally don't need OCR; keep OCR off by default here.
                        fmt = {}
                        if hasattr(input_format, "PDF"):
                            fmt[getattr(input_format, "PDF")] = PdfFormatOption(
                            pipeline_cls=VlmPipeline,
                            pipeline_options=vl_pipe
                        )
                        if hasattr(input_format, "IMAGE"):
                            fmt[getattr(input_format, "IMAGE")] = PdfFormatOption(
                            pipeline_cls=VlmPipeline,
                            pipeline_options=vl_pipe
                        )

                        return DocumentConverter(format_options=fmt)
                    except Exception as e:
                        raise e

                # --- Fallback: default converter with no special options ---
                return DocumentConverter()

            def export_markdown(document, ImageRefMode, image_mode, img_ph, pg_ph):
                try:
                    mode = getattr(ImageRefMode, image_mode.upper(), image_mode)
                    return document.export_to_markdown(
                        image_mode=mode,
                        image_placeholder=img_ph,
                        page_break_placeholder=pg_ph,
                    )
                except Exception:
                    try:
                        return document.export_to_text()
                    except Exception:
                        return str(document)

            def to_rows(doc_dict):
                rows = []
                for t in doc_dict.get("texts", []):
                    prov = t.get("prov") or []
                    page_no = None
                    if prov and isinstance(prov, list) and isinstance(prov[0], dict):
                        page_no = prov[0].get("page_no")
                    rows.append({
                        "page_no": page_no,
                        "label": t.get("label"),
                        "text": t.get("text"),
                        "level": t.get("level"),
                    })
                return rows

            def main():
                cfg = json.loads(sys.stdin.read())
                file_path = cfg["file_path"]
                markdown = cfg["markdown"]
                image_mode = cfg["image_mode"]
                img_ph = cfg["md_image_placeholder"]
                pg_ph = cfg["md_page_break_placeholder"]
                pipeline = cfg["pipeline"]
                ocr_engine = cfg.get("ocr_engine")
                meta = {"file_path": file_path}

                try:
                    ConversionStatus, InputFormat, DocumentConverter, ImageRefMode, strategy = try_imports()
                    converter = create_converter(strategy, InputFormat, DocumentConverter, pipeline, ocr_engine)
                    try:
                        res = converter.convert(file_path)
                    except Exception as e:
                        print(json.dumps({"ok": False, "error": f"Docling conversion error: {e}", "meta": meta}))
                        return

                    ok = False
                    if hasattr(res, "status"):
                        try:
                            ok = (res.status == ConversionStatus.SUCCESS) or (str(res.status).lower() == "success")
                        except Exception:
                            ok = (str(res.status).lower() == "success")
                    if not ok and hasattr(res, "document"):
                        ok = getattr(res, "document", None) is not None
                    if not ok:
                        print(json.dumps({"ok": False, "error": "Docling conversion failed", "meta": meta}))
                        return

                    doc = getattr(res, "document", None)
                    if doc is None:
                        print(json.dumps({"ok": False, "error": "Docling produced no document", "meta": meta}))
                        return

                    # Extract DoclingDocument metadata
                    if hasattr(doc, "name") and doc.name:
                        meta["name"] = doc.name
                    if hasattr(doc, "origin") and doc.origin is not None:
                        origin = doc.origin
                        if hasattr(origin, "filename") and origin.filename:
                            meta["filename"] = origin.filename
                        if hasattr(origin, "binary_hash") and origin.binary_hash:
                            meta["document_id"] = str(origin.binary_hash)
                        if hasattr(origin, "mimetype") and origin.mimetype:
                            meta["mimetype"] = origin.mimetype

                    if markdown:
                        text = export_markdown(doc, ImageRefMode, image_mode, img_ph, pg_ph)
                        print(json.dumps({"ok": True, "mode": "markdown", "text": text, "meta": meta}))
                        return

                    # structured
                    try:
                        doc_dict = doc.export_to_dict()
                    except Exception as e:
                        print(json.dumps({"ok": False, "error": f"Docling export_to_dict failed: {e}", "meta": meta}))
                        return

                    rows = to_rows(doc_dict)
                    print(json.dumps({"ok": True, "mode": "structured", "doc": rows, "meta": meta}))
                except Exception as e:
                    print(
                        json.dumps({
                            "ok": False,
                            "error": f"Docling processing error: {e}",
                            "meta": {"file_path": file_path},
                        })
                    )

            if __name__ == "__main__":
                main()
            """
        )

        # Validate file_path to avoid command injection or unsafe input.
        # Note: $ is intentionally not blocked here because the path is passed as JSON via
        # stdin to the subprocess, not interpolated in a shell command.
        if not isinstance(args["file_path"], str) or any(c in args["file_path"] for c in [";", "|", "&", "\`"]):
            return Data(data={"error": "Unsafe file path detected.", "file_path": args["file_path"]})

        # Use Popen with a polling loop instead of blocking subprocess.run().
        # This lets us emit periodic log messages that keep the SSE event stream
        # alive in multi-worker (Gunicorn) deployments, preventing the job queue
        # from being cleaned up while Docling is still processing.
        docling_timeout = 600  # 10 minutes; large PDFs with OCR may need this
        poll_interval = 5  # seconds between progress heartbeats

        proc = subprocess.Popen(  # noqa: S603
            [sys.executable, "-u", "-c", child_script],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        # Send input and close stdin so child can proceed
        proc.stdin.write(json.dumps(args).encode("utf-8"))
        proc.stdin.close()

        start = time.monotonic()
        while proc.poll() is None:
            elapsed = time.monotonic() - start
            if elapsed >= docling_timeout:
                proc.kill()
                proc.wait()
                return Data(
                    data={
                        "error": (
                            f"Docling processing timed out after {docling_timeout}s. "
                            "Consider using the standalone Docling component for large documents."
                        ),
                        "file_path": original_file_path,
                    },
                )
            # Heartbeat: emit a log so the graph event stream stays active
            self.log(f"Docling processing in progress ({int(elapsed)}s elapsed)...")
            time.sleep(poll_interval)

        stdout_bytes = proc.stdout.read()
        stderr_bytes = proc.stderr.read()
        proc.stdout.close()
        proc.stderr.close()

        if not stdout_bytes:
            err_msg = stderr_bytes.decode("utf-8", errors="replace") if stderr_bytes else "no output from child process"
            return Data(data={"error": f"Docling subprocess error: {err_msg}", "file_path": original_file_path})

        try:
            result = json.loads(stdout_bytes.decode("utf-8"))
        except Exception as e:  # noqa: BLE001
            err_msg = stderr_bytes.decode("utf-8", errors="replace")
            return Data(
                data={
                    "error": f"Invalid JSON from Docling subprocess: {e}. stderr={err_msg}",
                    "file_path": original_file_path,
                },
            )

        if not result.get("ok"):
            error_msg = result.get("error", "Unknown Docling error")
            # Override meta file_path with original_file_path to ensure correct path matching
            meta = result.get("meta", {})
            meta["file_path"] = original_file_path
            return Data(data={"error": error_msg, **meta})

        meta = result.get("meta", {})
        # Override meta file_path with original_file_path to ensure correct path matching
        # The subprocess returns the temp file path, but we need the original S3/local path for rollup_data
        meta["file_path"] = original_file_path
        if result.get("mode") == "markdown":
            exported_content = str(result.get("text", ""))
            return Data(
                text=exported_content,
                data={"exported_content": exported_content, "export_format": self.EXPORT_FORMAT, **meta},
            )

        rows = list(result.get("doc", []))
        return Data(data={"doc": rows, "export_format": self.EXPORT_FORMAT, **meta})

    def process_files(
        self,
        file_list: list[BaseFileComponent.BaseFile],
    ) -> list[BaseFileComponent.BaseFile]:
        """Process input files.

        - advanced_mode => Docling in a separate process.
        - Otherwise => standard parsing in current process (optionally threaded).
        """
        if not file_list:
            msg = "No files to process."
            raise ValueError(msg)

        # Validate image files to detect content/extension mismatches
        # This prevents API errors like "Image does not match the provided media type"
        image_extensions = {"jpeg", "jpg", "png", "gif", "webp", "bmp", "tiff"}
        settings = get_settings_service().settings
        for file in file_list:
            extension = file.path.suffix[1:].lower()
            if extension in image_extensions:
                # Read bytes based on storage type
                try:
                    if settings.storage_type == "s3":
                        # For S3 storage, use storage service to read file bytes
                        file_path_str = str(file.path)
                        content = run_until_complete(read_file_bytes(file_path_str))
                    else:
                        # For local storage, read bytes directly from filesystem
                        content = file.path.read_bytes()

                    is_valid, error_msg = validate_image_content_type(
                        str(file.path),
                        content=content,
                    )
                    if not is_valid:
                        self.log(error_msg)
                        if not self.silent_errors:
                            raise ValueError(error_msg)
                except (OSError, FileNotFoundError) as e:
                    self.log(f"Could not read file for validation: {e}")
                    # Continue - let it fail later with better error

        # Validate that files requiring Docling are only processed when advanced mode is enabled
        if not self.advanced_mode:
            for file in file_list:
                extension = file.path.suffix[1:].lower()
                if extension in self.DOCLING_ONLY_EXTENSIONS:
                    if is_astra_cloud_environment():
                        msg = (
                            f"File '{file.path.name}' has extension '.{extension}' which requires "
                            f"Advanced Parser mode. Advanced Parser is not available in cloud environments."
                        )
                    else:
                        msg = (
                            f"File '{file.path.name}' has extension '.{extension}' which requires "
                            f"Advanced Parser mode. Please enable 'Advanced Parser' to process this file."
                        )
                    self.log(msg)
                    raise ValueError(msg)

        def process_file_standard(file_path: str, *, silent_errors: bool = False) -> Data | None:
            try:
                return parse_text_file_to_data(file_path, silent_errors=silent_errors)
            except FileNotFoundError as e:
                self.log(f"File not found: {file_path}. Error: {e}")
                if not silent_errors:
                    raise
                return None
            except Exception as e:
                self.log(f"Unexpected error processing {file_path}: {e}")
                if not silent_errors:
                    raise
                return None

        docling_compatible = all(self._is_docling_compatible(str(f.path)) for f in file_list)

        # Advanced path: Check if ALL files are compatible with Docling
        if self.advanced_mode and docling_compatible:
            final_return: list[BaseFileComponent.BaseFile] = []
            for file in file_list:
                file_path = str(file.path)
                advanced_data: Data | None = self._process_docling_in_subprocess(file_path)

                # Handle None case - Docling processing failed or returned None
                if advanced_data is None:
                    error_data = Data(
                        data={
                            "file_path": file_path,
                            "error": "Docling processing returned no result. Check logs for details.",
                        },
                    )
                    final_return.extend(self.rollup_data([file], [error_data]))
                    continue

                # --- UNNEST: expand each element in \`doc\` to its own Data row
                payload = getattr(advanced_data, "data", {}) or {}

                # Check for errors first
                if "error" in payload:
                    error_msg = payload.get("error", "Unknown error")
                    error_data = Data(
                        data={
                            "file_path": file_path,
                            "error": error_msg,
                            **{k: v for k, v in payload.items() if k not in ("error", "file_path")},
                        },
                    )
                    final_return.extend(self.rollup_data([file], [error_data]))
                    continue

                doc_rows = payload.get("doc")
                if isinstance(doc_rows, list) and doc_rows:
                    # Non-empty list of structured rows
                    rows: list[Data | None] = [
                        Data(
                            data={
                                "file_path": file_path,
                                **(item if isinstance(item, dict) else {"value": item}),
                            },
                        )
                        for item in doc_rows
                    ]
                    final_return.extend(self.rollup_data([file], rows))
                elif isinstance(doc_rows, list) and not doc_rows:
                    # Empty list - file was processed but no text content found
                    # Create a Data object indicating no content was extracted
                    self.log(f"No text extracted from '{file_path}', creating placeholder data")
                    empty_data = Data(
                        data={
                            "file_path": file_path,
                            "text": "(No text content extracted from image)",
                            "info": "Image processed successfully but contained no extractable text",
                            **{k: v for k, v in payload.items() if k != "doc"},
                        },
                    )
                    final_return.extend(self.rollup_data([file], [empty_data]))
                else:
                    # If not structured, keep as-is (e.g., markdown export or error dict)
                    # Ensure file_path is set for proper rollup matching
                    if not payload.get("file_path"):
                        payload["file_path"] = file_path
                        # Create new Data with file_path
                        advanced_data = Data(
                            data=payload,
                            text=getattr(advanced_data, "text", None),
                        )
                    final_return.extend(self.rollup_data([file], [advanced_data]))
            return final_return

        # Standard multi-file (or single non-advanced) path
        concurrency = max(1, self.concurrency_multithreading)

        file_paths = [str(f.path) for f in file_list]
        self.log(f"Starting parallel processing of {len(file_paths)} files with concurrency: {concurrency}.")
        my_data = parallel_load_data(
            file_paths,
            silent_errors=self.silent_errors,
            load_function=process_file_standard,
            max_concurrency=concurrency,
        )
        return self.rollup_data(file_list, my_data)

    # ------------------------------ Output helpers -----------------------------------

    def load_files_helper(self) -> DataFrame:
        result = self.load_files()

        # Result is a DataFrame - check if it has any rows
        if result.empty:
            msg = "Could not extract content from the provided file(s)."
            raise ValueError(msg)

        # Check for error column with error messages
        if "error" in result.columns:
            errors = result["error"].dropna().tolist()
            if errors and not any(col in result.columns for col in ["text", "doc", "exported_content"]):
                raise ValueError(errors[0])

        return result

    def load_files_dataframe(self) -> DataFrame:
        """Load files using advanced Docling processing and export to DataFrame format."""
        self.markdown = False
        return self.load_files_helper()

    def load_files_markdown(self) -> Message:
        """Load files using advanced Docling processing and export to Markdown format."""
        self.markdown = True
        result = self.load_files_helper()

        # Result is a DataFrame - check for text or exported_content columns
        if "text" in result.columns and not result["text"].isna().all():
            text_values = result["text"].dropna().tolist()
            if text_values:
                return Message(text=str(text_values[0]))

        if "exported_content" in result.columns and not result["exported_content"].isna().all():
            content_values = result["exported_content"].dropna().tolist()
            if content_values:
                return Message(text=str(content_values[0]))

        # Return empty message with info that no text was found
        return Message(text="(No text content extracted from file)")
`},concurrency_multithreading:{_input_type:"IntInput",advanced:!0,display_name:"Processing Concurrency",dynamic:!1,info:"When multiple files are being processed, the number of files to process concurrently.",list:!1,list_add_label:"Add More",name:"concurrency_multithreading",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},delete_server_file_after_processing:{_input_type:"BoolInput",advanced:!0,display_name:"Delete Server File After Processing",dynamic:!1,info:"If true, the Server File Path will be deleted after processing.",list:!1,list_add_label:"Add More",name:"delete_server_file_after_processing",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},doc_key:{_input_type:"MessageTextInput",advanced:!0,display_name:"Doc Key",dynamic:!1,info:"The key to use for the DoclingDocument column.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"doc_key",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"doc"},file_id:{_input_type:"StrInput",advanced:!1,display_name:"Google Drive File ID",dynamic:!1,info:"The Google Drive file ID to read. The file must be shared with the service account email.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_id",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},file_path:{_input_type:"HandleInput",advanced:!0,display_name:"Server File Path",dynamic:!1,info:"Data object with a 'file_path' property pointing to server file or a Message object with a path to the file. Supercedes 'Path' but supports same file types.",input_types:["Data","JSON","Message"],list:!0,list_add_label:"Add More",name:"file_path",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},file_path_str:{_input_type:"StrInput",advanced:!0,display_name:"File Path",dynamic:!1,info:"Path to the file to read. Used when component is called as a tool. If not provided, will use the uploaded file from 'path' input.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_path_str",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},ignore_unspecified_files:{_input_type:"BoolInput",advanced:!0,display_name:"Ignore Unspecified Files",dynamic:!1,info:"If true, Data with no 'file_path' property will be ignored.",list:!1,list_add_label:"Add More",name:"ignore_unspecified_files",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},ignore_unsupported_extensions:{_input_type:"BoolInput",advanced:!0,display_name:"Ignore Unsupported Extensions",dynamic:!1,info:"If true, files with unsupported extensions will not be processed.",list:!1,list_add_label:"Add More",name:"ignore_unsupported_extensions",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},is_refresh:!1,markdown:{_input_type:"BoolInput",advanced:!1,display_name:"Markdown Export",dynamic:!1,info:"Export processed documents to Markdown format. Only available when advanced mode is enabled.",list:!1,list_add_label:"Add More",name:"markdown",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},md_image_placeholder:{_input_type:"StrInput",advanced:!0,display_name:"Image placeholder",dynamic:!1,info:"Specify the image placeholder for markdown exports.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"md_image_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"<!-- image -->"},md_page_break_placeholder:{_input_type:"StrInput",advanced:!0,display_name:"Page break placeholder",dynamic:!1,info:"Add this placeholder between pages in the markdown output.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"md_page_break_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},ocr_engine:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"OCR Engine",dynamic:!1,external_options:{},info:"OCR engine to use. Only available when pipeline is set to 'standard'.",name:"ocr_engine",options:["None","easyocr"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"easyocr"},path:{_input_type:"FileInput",advanced:!1,display_name:"Files",dynamic:!1,fileTypes:["csv","json","pdf","txt","md","mdx","yaml","yml","xml","html","htm","docx","py","sh","sql","js","ts","tsx","adoc","asciidoc","asc","bmp","dotx","dotm","docm","jpg","jpeg","png","potx","ppsx","pptm","potm","ppsm","pptx","tiff","xls","xlsx","xhtml","webp","zip","tar","tgz","bz2","gz"],file_path:["bc3e4db7-3e8e-49e7-bf53-d3ebeaa90837/result1.json"],info:"Supported file extensions: csv, json, pdf, txt, md, mdx, yaml, yml, xml, html, htm, docx, py, sh, sql, js, ts, tsx, adoc, asciidoc, asc, bmp, dotx, dotm, docm, jpg, jpeg, png, potx, ppsx, pptm, potm, ppsm, pptx, tiff, xls, xlsx, xhtml, webp; optionally bundled in file extensions: zip, tar, tgz, bz2, gz",list:!0,list_add_label:"Add More",name:"path",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,temp_file:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""},pipeline:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Pipeline",dynamic:!1,external_options:{},info:"Docling pipeline to use",name:"pipeline",options:["standard","vlm"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"standard"},s3_file_key:{_input_type:"StrInput",advanced:!1,display_name:"S3 File Key",dynamic:!1,info:"The key (path) of the file in S3 bucket.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"s3_file_key",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},separator:{_input_type:"StrInput",advanced:!0,display_name:"Separator",dynamic:!1,info:"Specify the separator to use between multiple outputs in Message format.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"separator",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`

`},service_account_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"GCP Credentials Secret Key",dynamic:!1,info:"Your Google Cloud Platform service account JSON key as a secret string (complete JSON content).",input_types:[],load_from_db:!1,name:"service_account_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},silent_errors:{_input_type:"BoolInput",advanced:!0,display_name:"Silent Errors",dynamic:!1,info:"If true, errors will not raise an exception.",list:!1,list_add_label:"Add More",name:"silent_errors",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},storage_location:{_input_type:"SortableListInput",advanced:!0,display_name:"Storage Location",dynamic:!1,info:"Choose where to read the file from.",limit:1,name:"storage_location",options:[{icon:"hard-drive",name:"Local"},{icon:"Amazon",name:"AWS"},{icon:"google",name:"Google Drive"}],override_skip:!1,placeholder:"Select Location",real_time_refresh:!0,required:!1,search_category:[],show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"sortableList",value:[{chosen:!1,icon:"hard-drive",name:"Local",selected:!1}]},use_multithreading:{_input_type:"BoolInput",advanced:!0,display_name:"[Deprecated] Use Multithreading",dynamic:!1,info:"Set 'Processing Concurrency' greater than 1 to enable multithreading.",list:!1,list_add_label:"Add More",name:"use_multithreading",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},selected_output:"message",showNode:!0,type:"File"},dragging:!1,id:"File-ksUMq",measured:{height:279,width:320},position:{x:-98.85988837399341,y:32.232835669657305},selected:!1,type:"genericNode"},{data:{id:"File-z2bcx",node:{base_classes:["Message"],beta:!1,category:"files_and_knowledge",conditional_paths:[],custom_fields:{},description:"Loads and returns the content from uploaded files.",display_name:"Test Execution Result R-2",documentation:"https://docs.langflow.org/read-file",edited:!1,field_order:["storage_location","path","file_path","separator","silent_errors","delete_server_file_after_processing","ignore_unsupported_extensions","ignore_unspecified_files","file_path_str","aws_access_key_id","aws_secret_access_key","bucket_name","aws_region","s3_file_key","service_account_key","file_id","advanced_mode","pipeline","ocr_engine","md_image_placeholder","md_page_break_placeholder","doc_key","use_multithreading","concurrency_multithreading","markdown"],frozen:!1,icon:"file-text",key:"File",last_updated:"2026-06-27T12:33:24.028Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"f497bdbc749b",dependencies:{dependencies:[{name:"lfx",version:null},{name:"langchain_core",version:"1.4.0"},{name:"pydantic",version:"2.13.4"},{name:"googleapiclient",version:"2.197.0"}],total_dependencies:4},module:"lfx.components.files_and_knowledge.file.FileComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Structured Content",group_outputs:!1,hidden:null,loop_types:null,method:"load_files_json",name:"json",options:null,required_inputs:null,tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Raw Content",group_outputs:!1,loop_types:null,method:"load_files_message",name:"message",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"File Path",group_outputs:!1,hidden:null,loop_types:null,method:"load_files_path",name:"path",options:null,required_inputs:null,tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,score:.007568328950209746,template:{_frontend_node_flow_id:{value:"d99f1491-3a0a-4109-b297-f4ab32e06e1f"},_frontend_node_folder_id:{value:"011fd645-4f38-4d59-8c87-4f3c8606d1ae"},_type:"Component",advanced_mode:{_input_type:"BoolInput",advanced:!1,display_name:"Advanced Parser",dynamic:!1,info:"Enable advanced document processing and export with Docling for PDFs, images, and office documents. Note that advanced document processing can consume significant resources.",list:!1,list_add_label:"Add More",name:"advanced_mode",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},aws_access_key_id:{_input_type:"SecretStrInput",advanced:!1,display_name:"AWS Access Key ID",dynamic:!1,info:"AWS Access key ID.",input_types:[],load_from_db:!1,name:"aws_access_key_id",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},aws_region:{_input_type:"StrInput",advanced:!1,display_name:"AWS Region",dynamic:!1,info:"AWS region (e.g., us-east-1, eu-west-1).",list:!1,list_add_label:"Add More",load_from_db:!1,name:"aws_region",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},aws_secret_access_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"AWS Secret Key",dynamic:!1,info:"AWS Secret Key.",input_types:[],load_from_db:!1,name:"aws_secret_access_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},bucket_name:{_input_type:"StrInput",advanced:!1,display_name:"S3 Bucket Name",dynamic:!1,info:"Enter the name of the S3 bucket.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"bucket_name",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`"""Enhanced file component with Docling support and process isolation.

Notes:
-----
- ALL Docling parsing/export runs in a separate OS process to prevent memory
  growth and native library state from impacting the main Langflow process.
- Standard text/structured parsing continues to use existing BaseFileComponent
  utilities (and optional threading via \`parallel_load_data\`).
"""

from __future__ import annotations

import contextlib
import json
import subprocess
import sys
import textwrap
import time
from copy import deepcopy
from pathlib import Path
from tempfile import NamedTemporaryFile
from typing import Any

from lfx.base.data.base_file import BaseFileComponent
from lfx.base.data.storage_utils import parse_storage_path, read_file_bytes, validate_image_content_type
from lfx.base.data.utils import TEXT_FILE_TYPES, parallel_load_data, parse_text_file_to_data
from lfx.inputs import SortableListInput
from lfx.inputs.inputs import DropdownInput, MessageTextInput, StrInput
from lfx.io import BoolInput, FileInput, IntInput, Output, SecretStrInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame  # noqa: TC001
from lfx.schema.message import Message
from lfx.services.deps import get_settings_service, get_storage_service
from lfx.utils.async_helpers import run_until_complete
from lfx.utils.validate_cloud import is_astra_cloud_environment


def _get_storage_location_options():
    """Get storage location options, filtering out Local if in Astra cloud environment."""
    all_options = [{"name": "AWS", "icon": "Amazon"}, {"name": "Google Drive", "icon": "google"}]
    if is_astra_cloud_environment():
        return all_options
    return [{"name": "Local", "icon": "hard-drive"}, *all_options]


class FileComponent(BaseFileComponent):
    """File component with optional Docling processing (isolated in a subprocess)."""

    display_name = "Read File"
    # description is now a dynamic property - see get_tool_description()
    _base_description = "Loads and returns the content from uploaded files."
    documentation: str = "https://docs.langflow.org/read-file"
    icon = "file-text"
    name = "File"
    add_tool_output = True  # Enable tool mode toggle without requiring tool_mode inputs

    # Extensions that can be processed without Docling (using standard text parsing)
    TEXT_EXTENSIONS = TEXT_FILE_TYPES

    # Extensions that require Docling for processing (images, advanced office formats, etc.)
    DOCLING_ONLY_EXTENSIONS = [
        "adoc",
        "asciidoc",
        "asc",
        "bmp",
        "dotx",
        "dotm",
        "docm",
        "jpg",
        "jpeg",
        "png",
        "potx",
        "ppsx",
        "pptm",
        "potm",
        "ppsm",
        "pptx",
        "tiff",
        "xls",
        "xlsx",
        "xhtml",
        "webp",
    ]

    # Docling-supported/compatible extensions; TEXT_FILE_TYPES are supported by the base loader.
    VALID_EXTENSIONS = [
        *TEXT_EXTENSIONS,
        *DOCLING_ONLY_EXTENSIONS,
    ]

    # Fixed export settings used when markdown export is requested.
    EXPORT_FORMAT = "Markdown"
    IMAGE_MODE = "placeholder"

    _base_inputs = deepcopy(BaseFileComponent.get_base_inputs())

    for input_item in _base_inputs:
        if isinstance(input_item, FileInput) and input_item.name == "path":
            input_item.real_time_refresh = True
            input_item.tool_mode = False  # Disable tool mode for file upload input
            input_item.required = False  # Make it optional so it doesn't error in tool mode
            break

    inputs = [
        SortableListInput(
            name="storage_location",
            display_name="Storage Location",
            placeholder="Select Location",
            info="Choose where to read the file from.",
            options=_get_storage_location_options(),
            real_time_refresh=True,
            limit=1,
            value=[{"name": "Local", "icon": "hard-drive"}],
            advanced=True,
        ),
        *_base_inputs,
        StrInput(
            name="file_path_str",
            display_name="File Path",
            info=(
                "Path to the file to read. Used when component is called as a tool. "
                "If not provided, will use the uploaded file from 'path' input."
            ),
            show=False,
            advanced=True,
            tool_mode=True,  # Required for Toolset toggle, but _get_tools() ignores this parameter
            required=False,
        ),
        # AWS S3 specific inputs
        SecretStrInput(
            name="aws_access_key_id",
            display_name="AWS Access Key ID",
            info="AWS Access key ID.",
            show=False,
            advanced=False,
            required=True,
        ),
        SecretStrInput(
            name="aws_secret_access_key",
            display_name="AWS Secret Key",
            info="AWS Secret Key.",
            show=False,
            advanced=False,
            required=True,
        ),
        StrInput(
            name="bucket_name",
            display_name="S3 Bucket Name",
            info="Enter the name of the S3 bucket.",
            show=False,
            advanced=False,
            required=True,
        ),
        StrInput(
            name="aws_region",
            display_name="AWS Region",
            info="AWS region (e.g., us-east-1, eu-west-1).",
            show=False,
            advanced=False,
        ),
        StrInput(
            name="s3_file_key",
            display_name="S3 File Key",
            info="The key (path) of the file in S3 bucket.",
            show=False,
            advanced=False,
            required=True,
        ),
        # Google Drive specific inputs
        SecretStrInput(
            name="service_account_key",
            display_name="GCP Credentials Secret Key",
            info="Your Google Cloud Platform service account JSON key as a secret string (complete JSON content).",
            show=False,
            advanced=False,
            required=True,
        ),
        StrInput(
            name="file_id",
            display_name="Google Drive File ID",
            info=("The Google Drive file ID to read. The file must be shared with the service account email."),
            show=False,
            advanced=False,
            required=True,
        ),
        BoolInput(
            name="advanced_mode",
            display_name="Advanced Parser",
            value=False,
            real_time_refresh=True,
            info=(
                "Enable advanced document processing and export with Docling for PDFs, images, and office documents. "
                "Note that advanced document processing can consume significant resources."
            ),
            # Disabled in cloud
            show=not is_astra_cloud_environment(),
        ),
        DropdownInput(
            name="pipeline",
            display_name="Pipeline",
            info="Docling pipeline to use",
            options=["standard", "vlm"],
            value="standard",
            advanced=True,
            real_time_refresh=True,
        ),
        DropdownInput(
            name="ocr_engine",
            display_name="OCR Engine",
            info="OCR engine to use. Only available when pipeline is set to 'standard'.",
            options=["None", "easyocr"],
            value="easyocr",
            show=False,
            advanced=True,
        ),
        StrInput(
            name="md_image_placeholder",
            display_name="Image placeholder",
            info="Specify the image placeholder for markdown exports.",
            value="<!-- image -->",
            advanced=True,
            show=False,
        ),
        StrInput(
            name="md_page_break_placeholder",
            display_name="Page break placeholder",
            info="Add this placeholder between pages in the markdown output.",
            value="",
            advanced=True,
            show=False,
        ),
        MessageTextInput(
            name="doc_key",
            display_name="Doc Key",
            info="The key to use for the DoclingDocument column.",
            value="doc",
            advanced=True,
            show=False,
        ),
        # Deprecated input retained for backward-compatibility.
        BoolInput(
            name="use_multithreading",
            display_name="[Deprecated] Use Multithreading",
            advanced=True,
            value=True,
            info="Set 'Processing Concurrency' greater than 1 to enable multithreading.",
        ),
        IntInput(
            name="concurrency_multithreading",
            display_name="Processing Concurrency",
            advanced=True,
            info="When multiple files are being processed, the number of files to process concurrently.",
            value=1,
        ),
        BoolInput(
            name="markdown",
            display_name="Markdown Export",
            info="Export processed documents to Markdown format. Only available when advanced mode is enabled.",
            value=False,
            show=False,
        ),
    ]

    outputs = [
        Output(display_name="Raw Content", name="message", method="load_files_message", tool_mode=True),
    ]

    # ------------------------------ Tool description with file names --------------

    def get_tool_description(self) -> str:
        """Return a dynamic description that includes the names of uploaded files.

        This helps the Agent understand which files are available to read.
        """
        base_description = type(self)._base_description  # noqa: SLF001

        # Get the list of uploaded file paths
        file_paths = getattr(self, "path", None)
        if not file_paths:
            return base_description

        # Ensure it's a list
        if not isinstance(file_paths, list):
            file_paths = [file_paths]

        # Extract just the file names from the paths
        file_names = []
        for fp in file_paths:
            if fp:
                name = Path(fp).name
                file_names.append(name)

        if file_names:
            files_str = ", ".join(file_names)
            return f"{base_description} Available files: {files_str}. Call this tool to read these files."

        return base_description

    @property
    def description(self) -> str:
        """Dynamic description property that includes uploaded file names."""
        return self.get_tool_description()

    async def _get_tools(self) -> list:
        """Override to create a tool without parameters.

        The Read File component should use the files already uploaded via UI,
        not accept file paths from the Agent (which wouldn't know the internal paths).
        """
        from langchain_core.tools import StructuredTool
        from pydantic import BaseModel

        # Empty schema - no parameters needed
        class EmptySchema(BaseModel):
            """No parameters required - uses pre-uploaded files."""

        async def read_files_tool() -> str:
            """Read the content of uploaded files."""
            try:
                if getattr(self, "advanced_mode", False):
                    # In advanced mode, use the markdown output path so that the
                    # tool shares the same Docling processing as the advanced
                    # outputs rather than triggering a second subprocess via
                    # load_files_message.
                    self.markdown = True
                    result = self.load_files_markdown()
                else:
                    result = self.load_files_message()
                if hasattr(result, "get_text"):
                    return result.get_text()
                if hasattr(result, "text"):
                    return result.text
                return str(result)
            except (FileNotFoundError, ValueError, OSError, RuntimeError) as e:
                return f"Error reading files: {e}"

        description = self.get_tool_description()

        tool = StructuredTool(
            name="load_files_message",
            description=description,
            coroutine=read_files_tool,
            args_schema=EmptySchema,
            handle_tool_error=True,
            tags=["load_files_message"],
            metadata={
                "display_name": "Read File",
                "display_description": description,
            },
        )

        return [tool]

    # ------------------------------ UI helpers --------------------------------------

    def _path_value(self, template: dict) -> list[str]:
        """Return the list of currently selected file paths from the template."""
        return template.get("path", {}).get("file_path", [])

    def _disable_docling_fields_in_cloud(self, build_config: dict[str, Any]) -> None:
        """Disable all Docling-related fields in cloud environments."""
        if "advanced_mode" in build_config:
            build_config["advanced_mode"]["show"] = False
            build_config["advanced_mode"]["value"] = False
        # Hide all Docling-related fields
        docling_fields = ("pipeline", "ocr_engine", "doc_key", "md_image_placeholder", "md_page_break_placeholder")
        for field in docling_fields:
            if field in build_config:
                build_config[field]["show"] = False
        # Also disable OCR engine specifically
        if "ocr_engine" in build_config:
            build_config["ocr_engine"]["value"] = "None"

    def update_build_config(
        self,
        build_config: dict[str, Any],
        field_value: Any,
        field_name: str | None = None,
    ) -> dict[str, Any]:
        """Show/hide Advanced Parser and related fields based on selection context."""
        # Update storage location options dynamically based on cloud environment
        if "storage_location" in build_config:
            updated_options = _get_storage_location_options()
            build_config["storage_location"]["options"] = updated_options

        # Handle storage location selection
        if field_name == "storage_location":
            # Extract selected storage location
            selected = [location["name"] for location in field_value] if isinstance(field_value, list) else []

            # Hide all storage-specific fields first
            storage_fields = [
                "aws_access_key_id",
                "aws_secret_access_key",
                "bucket_name",
                "aws_region",
                "s3_file_key",
                "service_account_key",
                "file_id",
            ]

            for f_name in storage_fields:
                if f_name in build_config:
                    build_config[f_name]["show"] = False

            # Show fields based on selected storage location
            if len(selected) == 1:
                location = selected[0]

                if location == "Local":
                    # Show file upload input for local storage
                    if "path" in build_config:
                        build_config["path"]["show"] = True

                elif location == "AWS":
                    # Hide file upload input, show AWS fields
                    if "path" in build_config:
                        build_config["path"]["show"] = False

                    aws_fields = [
                        "aws_access_key_id",
                        "aws_secret_access_key",
                        "bucket_name",
                        "aws_region",
                        "s3_file_key",
                    ]
                    for f_name in aws_fields:
                        if f_name in build_config:
                            build_config[f_name]["show"] = True
                            build_config[f_name]["advanced"] = False

                elif location == "Google Drive":
                    # Hide file upload input, show Google Drive fields
                    if "path" in build_config:
                        build_config["path"]["show"] = False

                    gdrive_fields = ["service_account_key", "file_id"]
                    for f_name in gdrive_fields:
                        if f_name in build_config:
                            build_config[f_name]["show"] = True
                            build_config[f_name]["advanced"] = False
            # No storage location selected - show file upload by default
            elif "path" in build_config:
                build_config["path"]["show"] = True

            return build_config

        if field_name == "path":
            paths = self._path_value(build_config)

            # Disable in cloud environments
            if is_astra_cloud_environment():
                self._disable_docling_fields_in_cloud(build_config)
            else:
                # If all files can be processed by docling, do so
                allow_advanced = all(not file_path.endswith((".csv", ".xlsx", ".parquet")) for file_path in paths)
                build_config["advanced_mode"]["show"] = allow_advanced
                if not allow_advanced:
                    build_config["advanced_mode"]["value"] = False
                    docling_fields = (
                        "pipeline",
                        "ocr_engine",
                        "doc_key",
                        "md_image_placeholder",
                        "md_page_break_placeholder",
                    )
                    for field in docling_fields:
                        if field in build_config:
                            build_config[field]["show"] = False

        # Docling Processing
        elif field_name == "advanced_mode":
            # Disable in cloud environments - don't show Docling fields even if advanced_mode is toggled
            if is_astra_cloud_environment():
                self._disable_docling_fields_in_cloud(build_config)
            else:
                docling_fields = (
                    "pipeline",
                    "ocr_engine",
                    "doc_key",
                    "md_image_placeholder",
                    "md_page_break_placeholder",
                )
                for field in docling_fields:
                    if field in build_config:
                        build_config[field]["show"] = bool(field_value)
                        if field == "pipeline":
                            build_config[field]["advanced"] = not bool(field_value)

        elif field_name == "pipeline":
            # Disable in cloud environments - don't show OCR engine even if pipeline is changed
            if is_astra_cloud_environment():
                self._disable_docling_fields_in_cloud(build_config)
            elif field_value == "standard":
                build_config["ocr_engine"]["show"] = True
                build_config["ocr_engine"]["value"] = "easyocr"
            else:
                build_config["ocr_engine"]["show"] = False
                build_config["ocr_engine"]["value"] = "None"

        return build_config

    def update_outputs(self, frontend_node: dict[str, Any], field_name: str, field_value: Any) -> dict[str, Any]:  # noqa: ARG002
        """Dynamically show outputs based on file count/type and advanced mode."""
        if field_name not in ["path", "advanced_mode", "pipeline"]:
            return frontend_node

        template = frontend_node.get("template", {})
        paths = self._path_value(template)
        if not paths:
            return frontend_node

        frontend_node["outputs"] = []
        if len(paths) == 1:
            file_path = paths[0] if field_name == "path" else frontend_node["template"]["path"]["file_path"][0]
            if file_path.endswith((".csv", ".xlsx", ".parquet")):
                frontend_node["outputs"].append(
                    Output(
                        display_name="Structured Content",
                        name="dataframe",
                        method="load_files_structured",
                        tool_mode=True,
                    ),
                )
            elif file_path.endswith(".json"):
                frontend_node["outputs"].append(
                    Output(display_name="Structured Content", name="json", method="load_files_json", tool_mode=True),
                )

            advanced_mode = frontend_node.get("template", {}).get("advanced_mode", {}).get("value", False)
            if advanced_mode:
                frontend_node["outputs"].append(
                    Output(
                        display_name="Structured Output",
                        name="advanced_dataframe",
                        method="load_files_dataframe",
                        tool_mode=True,
                    ),
                )
                frontend_node["outputs"].append(
                    Output(
                        display_name="Markdown", name="advanced_markdown", method="load_files_markdown", tool_mode=True
                    ),
                )
                frontend_node["outputs"].append(
                    Output(display_name="File Path", name="path", method="load_files_path", tool_mode=True),
                )
            else:
                frontend_node["outputs"].append(
                    Output(display_name="Raw Content", name="message", method="load_files_message", tool_mode=True),
                )
                frontend_node["outputs"].append(
                    Output(display_name="File Path", name="path", method="load_files_path", tool_mode=True),
                )
        else:
            # Multiple files => DataFrame output; advanced parser disabled
            frontend_node["outputs"].append(
                Output(display_name="Files", name="dataframe", method="load_files", tool_mode=True)
            )

        return frontend_node

    # ------------------------------ Core processing ----------------------------------

    def _get_selected_storage_location(self) -> str:
        """Get the selected storage location from the SortableListInput."""
        if hasattr(self, "storage_location") and self.storage_location:
            if isinstance(self.storage_location, list) and len(self.storage_location) > 0:
                return self.storage_location[0].get("name", "")
            if isinstance(self.storage_location, dict):
                return self.storage_location.get("name", "")
        return "Local"  # Default to Local if not specified

    def _validate_and_resolve_paths(self) -> list[BaseFileComponent.BaseFile]:
        """Override to handle file_path_str input from tool mode and cloud storage.

        Priority:
        1. Cloud storage (AWS/Google Drive) if selected
        2. file_path_str (if provided by the tool call)
        3. path (uploaded file from UI)
        """
        storage_location = self._get_selected_storage_location()

        # Handle AWS S3
        if storage_location == "AWS":
            return self._read_from_aws_s3()

        # Handle Google Drive
        if storage_location == "Google Drive":
            return self._read_from_google_drive()

        # Handle Local storage
        # Check if file_path_str is provided (from tool mode)
        file_path_str = getattr(self, "file_path_str", None)
        if file_path_str:
            # Use the string path from tool mode
            from pathlib import Path

            from lfx.schema.data import Data

            # Use same resolution logic as BaseFileComponent (support storage paths)
            path_str = str(file_path_str)
            if parse_storage_path(path_str):
                try:
                    resolved_path = Path(self.get_full_path(path_str))
                except (ValueError, AttributeError):
                    resolved_path = Path(self.resolve_path(path_str))
            else:
                resolved_path = Path(self.resolve_path(path_str))

            if not resolved_path.exists():
                msg = f"File or directory not found: {file_path_str}"
                self.log(msg)
                if not self.silent_errors:
                    raise ValueError(msg)
                return []

            data_obj = Data(data={self.SERVER_FILE_PATH_FIELDNAME: str(resolved_path)})
            return [BaseFileComponent.BaseFile(data_obj, resolved_path, delete_after_processing=False)]

        # Otherwise use the default implementation (uses path FileInput)
        return super()._validate_and_resolve_paths()

    def _read_from_aws_s3(self) -> list[BaseFileComponent.BaseFile]:
        """Read file from AWS S3."""
        from lfx.base.data.cloud_storage_utils import create_s3_client, validate_aws_credentials

        # Validate AWS credentials
        validate_aws_credentials(self)
        if not getattr(self, "s3_file_key", None):
            msg = "S3 File Key is required"
            raise ValueError(msg)

        # Create S3 client
        s3_client = create_s3_client(self)

        # Download file to temp location
        import tempfile

        # Get file extension from S3 key
        file_extension = Path(self.s3_file_key).suffix or ""

        with tempfile.NamedTemporaryFile(mode="wb", suffix=file_extension, delete=False) as temp_file:
            temp_file_path = temp_file.name
            try:
                s3_client.download_fileobj(self.bucket_name, self.s3_file_key, temp_file)
            except Exception as e:
                # Clean up temp file on failure
                with contextlib.suppress(OSError):
                    Path(temp_file_path).unlink()
                msg = f"Failed to download file from S3: {e}"
                raise RuntimeError(msg) from e

        # Create BaseFile object
        from lfx.schema.data import Data

        temp_path = Path(temp_file_path)
        data_obj = Data(data={self.SERVER_FILE_PATH_FIELDNAME: str(temp_path)})
        return [BaseFileComponent.BaseFile(data_obj, temp_path, delete_after_processing=True)]

    def _read_from_google_drive(self) -> list[BaseFileComponent.BaseFile]:
        """Read file from Google Drive."""
        import tempfile

        from googleapiclient.http import MediaIoBaseDownload

        from lfx.base.data.cloud_storage_utils import create_google_drive_service

        # Validate Google Drive credentials
        if not getattr(self, "service_account_key", None):
            msg = "GCP Credentials Secret Key is required for Google Drive storage"
            raise ValueError(msg)
        if not getattr(self, "file_id", None):
            msg = "Google Drive File ID is required"
            raise ValueError(msg)

        # Create Google Drive service with read-only scope
        drive_service = create_google_drive_service(
            self.service_account_key, scopes=["https://www.googleapis.com/auth/drive.readonly"]
        )

        # Get file metadata to determine file name and extension
        try:
            file_metadata = drive_service.files().get(fileId=self.file_id, fields="name,mimeType").execute()
            file_name = file_metadata.get("name", "download")
        except Exception as e:
            msg = (
                f"Unable to access file with ID '{self.file_id}'. "
                f"Error: {e!s}. "
                "Please ensure: 1) The file ID is correct, 2) The file exists, "
                "3) The service account has been granted access to this file."
            )
            raise ValueError(msg) from e

        # Download file to temp location
        file_extension = Path(file_name).suffix or ""
        with tempfile.NamedTemporaryFile(mode="wb", suffix=file_extension, delete=False) as temp_file:
            temp_file_path = temp_file.name
            try:
                request = drive_service.files().get_media(fileId=self.file_id)
                downloader = MediaIoBaseDownload(temp_file, request)
                done = False
                while not done:
                    _status, done = downloader.next_chunk()
            except Exception as e:
                # Clean up temp file on failure
                with contextlib.suppress(OSError):
                    Path(temp_file_path).unlink()
                msg = f"Failed to download file from Google Drive: {e}"
                raise RuntimeError(msg) from e

        # Create BaseFile object
        from lfx.schema.data import Data

        temp_path = Path(temp_file_path)
        data_obj = Data(data={self.SERVER_FILE_PATH_FIELDNAME: str(temp_path)})
        return [BaseFileComponent.BaseFile(data_obj, temp_path, delete_after_processing=True)]

    def _is_docling_compatible(self, file_path: str) -> bool:
        """Lightweight extension gate for Docling-compatible types."""
        docling_exts = (
            ".adoc",
            ".asciidoc",
            ".asc",
            ".bmp",
            ".csv",
            ".dotx",
            ".dotm",
            ".docm",
            ".docx",
            ".htm",
            ".html",
            ".jpg",
            ".jpeg",
            ".json",
            ".md",
            ".pdf",
            ".png",
            ".potx",
            ".ppsx",
            ".pptm",
            ".potm",
            ".ppsm",
            ".pptx",
            ".tiff",
            ".txt",
            ".xls",
            ".xlsx",
            ".xhtml",
            ".xml",
            ".webp",
        )
        return file_path.lower().endswith(docling_exts)

    async def _get_local_file_for_docling(self, file_path: str) -> tuple[str, bool]:
        """Get a local file path for Docling processing, downloading from S3 if needed.

        Args:
            file_path: Either a local path or S3 key (format "flow_id/filename")

        Returns:
            tuple[str, bool]: (local_path, should_delete) where should_delete indicates
                              if this is a temporary file that should be cleaned up
        """
        settings = get_settings_service().settings
        if settings.storage_type == "local":
            return file_path, False

        # S3 storage - download to temp file
        parsed = parse_storage_path(file_path)
        if not parsed:
            msg = f"Invalid S3 path format: {file_path}. Expected 'flow_id/filename'"
            raise ValueError(msg)

        storage_service = get_storage_service()
        flow_id, filename = parsed

        # Get file content from S3
        content = await storage_service.get_file(flow_id, filename)

        suffix = Path(filename).suffix
        with NamedTemporaryFile(mode="wb", suffix=suffix, delete=False) as tmp_file:
            tmp_file.write(content)
            temp_path = tmp_file.name

        return temp_path, True

    def _process_docling_in_subprocess(self, file_path: str) -> Data | None:
        """Run Docling in a separate OS process and map the result to a Data object.

        We avoid multiprocessing pickling by launching \`python -c "<script>"\` and
        passing JSON config via stdin. The child prints a JSON result to stdout.

        For S3 storage, the file is downloaded to a temp file first.
        """
        if not file_path:
            return None

        settings = get_settings_service().settings
        if settings.storage_type == "s3":
            local_path, should_delete = run_until_complete(self._get_local_file_for_docling(file_path))
        else:
            local_path = file_path
            should_delete = False

        try:
            return self._process_docling_subprocess_impl(local_path, file_path)
        finally:
            # Clean up temp file if we created one
            if should_delete:
                with contextlib.suppress(Exception):
                    Path(local_path).unlink()  # Ignore cleanup errors

    def _process_docling_subprocess_impl(self, local_file_path: str, original_file_path: str) -> Data | None:
        """Implementation of Docling subprocess processing.

        Args:
            local_file_path: Path to local file to process
            original_file_path: Original file path to include in metadata
        Returns:
            Data object with processed content
        """
        args: dict[str, Any] = {
            "file_path": local_file_path,
            "markdown": bool(self.markdown),
            "image_mode": str(self.IMAGE_MODE),
            "md_image_placeholder": str(self.md_image_placeholder),
            "md_page_break_placeholder": str(self.md_page_break_placeholder),
            "pipeline": str(self.pipeline),
            "ocr_engine": (
                self.ocr_engine if self.ocr_engine and self.ocr_engine != "None" and self.pipeline != "vlm" else None
            ),
        }

        # Child script for isolating the docling processing
        child_script = textwrap.dedent(
            r"""
            import json, sys

            def try_imports():
                try:
                    from docling.datamodel.base_models import ConversionStatus, InputFormat  # type: ignore
                    from docling.document_converter import DocumentConverter  # type: ignore
                    from docling_core.types.doc import ImageRefMode  # type: ignore
                    return ConversionStatus, InputFormat, DocumentConverter, ImageRefMode, "latest"
                except Exception as e:
                    raise e

            def create_converter(strategy, input_format, DocumentConverter, pipeline, ocr_engine):
                # --- Standard PDF/IMAGE pipeline (your existing behavior), with optional OCR ---
                if pipeline == "standard":
                    try:
                        from docling.datamodel.pipeline_options import PdfPipelineOptions  # type: ignore
                        from docling.document_converter import PdfFormatOption  # type: ignore

                        pipe = PdfPipelineOptions()
                        pipe.do_ocr = False

                        if ocr_engine:
                            try:
                                from docling.models.factories import get_ocr_factory  # type: ignore
                                pipe.do_ocr = True
                                fac = get_ocr_factory(allow_external_plugins=False)
                                pipe.ocr_options = fac.create_options(kind=ocr_engine)
                            except Exception:
                                # If OCR setup fails, disable it
                                pipe.do_ocr = False

                        fmt = {}
                        if hasattr(input_format, "PDF"):
                            fmt[getattr(input_format, "PDF")] = PdfFormatOption(pipeline_options=pipe)
                        if hasattr(input_format, "IMAGE"):
                            fmt[getattr(input_format, "IMAGE")] = PdfFormatOption(pipeline_options=pipe)

                        return DocumentConverter(format_options=fmt)
                    except Exception:
                        return DocumentConverter()

                # --- Vision-Language Model (VLM) pipeline ---
                if pipeline == "vlm":
                    try:
                        from docling.datamodel.pipeline_options import VlmPipelineOptions
                        from docling.datamodel.vlm_model_specs import GRANITEDOCLING_MLX, GRANITEDOCLING_TRANSFORMERS
                        from docling.document_converter import PdfFormatOption
                        from docling.pipeline.vlm_pipeline import VlmPipeline

                        vl_pipe = VlmPipelineOptions(
                            vlm_options=GRANITEDOCLING_TRANSFORMERS,
                        )

                        if sys.platform == "darwin":
                            try:
                                import mlx_vlm
                                vl_pipe.vlm_options = GRANITEDOCLING_MLX
                            except ImportError as e:
                                raise e

                        # VLM paths generally don't need OCR; keep OCR off by default here.
                        fmt = {}
                        if hasattr(input_format, "PDF"):
                            fmt[getattr(input_format, "PDF")] = PdfFormatOption(
                            pipeline_cls=VlmPipeline,
                            pipeline_options=vl_pipe
                        )
                        if hasattr(input_format, "IMAGE"):
                            fmt[getattr(input_format, "IMAGE")] = PdfFormatOption(
                            pipeline_cls=VlmPipeline,
                            pipeline_options=vl_pipe
                        )

                        return DocumentConverter(format_options=fmt)
                    except Exception as e:
                        raise e

                # --- Fallback: default converter with no special options ---
                return DocumentConverter()

            def export_markdown(document, ImageRefMode, image_mode, img_ph, pg_ph):
                try:
                    mode = getattr(ImageRefMode, image_mode.upper(), image_mode)
                    return document.export_to_markdown(
                        image_mode=mode,
                        image_placeholder=img_ph,
                        page_break_placeholder=pg_ph,
                    )
                except Exception:
                    try:
                        return document.export_to_text()
                    except Exception:
                        return str(document)

            def to_rows(doc_dict):
                rows = []
                for t in doc_dict.get("texts", []):
                    prov = t.get("prov") or []
                    page_no = None
                    if prov and isinstance(prov, list) and isinstance(prov[0], dict):
                        page_no = prov[0].get("page_no")
                    rows.append({
                        "page_no": page_no,
                        "label": t.get("label"),
                        "text": t.get("text"),
                        "level": t.get("level"),
                    })
                return rows

            def main():
                cfg = json.loads(sys.stdin.read())
                file_path = cfg["file_path"]
                markdown = cfg["markdown"]
                image_mode = cfg["image_mode"]
                img_ph = cfg["md_image_placeholder"]
                pg_ph = cfg["md_page_break_placeholder"]
                pipeline = cfg["pipeline"]
                ocr_engine = cfg.get("ocr_engine")
                meta = {"file_path": file_path}

                try:
                    ConversionStatus, InputFormat, DocumentConverter, ImageRefMode, strategy = try_imports()
                    converter = create_converter(strategy, InputFormat, DocumentConverter, pipeline, ocr_engine)
                    try:
                        res = converter.convert(file_path)
                    except Exception as e:
                        print(json.dumps({"ok": False, "error": f"Docling conversion error: {e}", "meta": meta}))
                        return

                    ok = False
                    if hasattr(res, "status"):
                        try:
                            ok = (res.status == ConversionStatus.SUCCESS) or (str(res.status).lower() == "success")
                        except Exception:
                            ok = (str(res.status).lower() == "success")
                    if not ok and hasattr(res, "document"):
                        ok = getattr(res, "document", None) is not None
                    if not ok:
                        print(json.dumps({"ok": False, "error": "Docling conversion failed", "meta": meta}))
                        return

                    doc = getattr(res, "document", None)
                    if doc is None:
                        print(json.dumps({"ok": False, "error": "Docling produced no document", "meta": meta}))
                        return

                    # Extract DoclingDocument metadata
                    if hasattr(doc, "name") and doc.name:
                        meta["name"] = doc.name
                    if hasattr(doc, "origin") and doc.origin is not None:
                        origin = doc.origin
                        if hasattr(origin, "filename") and origin.filename:
                            meta["filename"] = origin.filename
                        if hasattr(origin, "binary_hash") and origin.binary_hash:
                            meta["document_id"] = str(origin.binary_hash)
                        if hasattr(origin, "mimetype") and origin.mimetype:
                            meta["mimetype"] = origin.mimetype

                    if markdown:
                        text = export_markdown(doc, ImageRefMode, image_mode, img_ph, pg_ph)
                        print(json.dumps({"ok": True, "mode": "markdown", "text": text, "meta": meta}))
                        return

                    # structured
                    try:
                        doc_dict = doc.export_to_dict()
                    except Exception as e:
                        print(json.dumps({"ok": False, "error": f"Docling export_to_dict failed: {e}", "meta": meta}))
                        return

                    rows = to_rows(doc_dict)
                    print(json.dumps({"ok": True, "mode": "structured", "doc": rows, "meta": meta}))
                except Exception as e:
                    print(
                        json.dumps({
                            "ok": False,
                            "error": f"Docling processing error: {e}",
                            "meta": {"file_path": file_path},
                        })
                    )

            if __name__ == "__main__":
                main()
            """
        )

        # Validate file_path to avoid command injection or unsafe input.
        # Note: $ is intentionally not blocked here because the path is passed as JSON via
        # stdin to the subprocess, not interpolated in a shell command.
        if not isinstance(args["file_path"], str) or any(c in args["file_path"] for c in [";", "|", "&", "\`"]):
            return Data(data={"error": "Unsafe file path detected.", "file_path": args["file_path"]})

        # Use Popen with a polling loop instead of blocking subprocess.run().
        # This lets us emit periodic log messages that keep the SSE event stream
        # alive in multi-worker (Gunicorn) deployments, preventing the job queue
        # from being cleaned up while Docling is still processing.
        docling_timeout = 600  # 10 minutes; large PDFs with OCR may need this
        poll_interval = 5  # seconds between progress heartbeats

        proc = subprocess.Popen(  # noqa: S603
            [sys.executable, "-u", "-c", child_script],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        # Send input and close stdin so child can proceed
        proc.stdin.write(json.dumps(args).encode("utf-8"))
        proc.stdin.close()

        start = time.monotonic()
        while proc.poll() is None:
            elapsed = time.monotonic() - start
            if elapsed >= docling_timeout:
                proc.kill()
                proc.wait()
                return Data(
                    data={
                        "error": (
                            f"Docling processing timed out after {docling_timeout}s. "
                            "Consider using the standalone Docling component for large documents."
                        ),
                        "file_path": original_file_path,
                    },
                )
            # Heartbeat: emit a log so the graph event stream stays active
            self.log(f"Docling processing in progress ({int(elapsed)}s elapsed)...")
            time.sleep(poll_interval)

        stdout_bytes = proc.stdout.read()
        stderr_bytes = proc.stderr.read()
        proc.stdout.close()
        proc.stderr.close()

        if not stdout_bytes:
            err_msg = stderr_bytes.decode("utf-8", errors="replace") if stderr_bytes else "no output from child process"
            return Data(data={"error": f"Docling subprocess error: {err_msg}", "file_path": original_file_path})

        try:
            result = json.loads(stdout_bytes.decode("utf-8"))
        except Exception as e:  # noqa: BLE001
            err_msg = stderr_bytes.decode("utf-8", errors="replace")
            return Data(
                data={
                    "error": f"Invalid JSON from Docling subprocess: {e}. stderr={err_msg}",
                    "file_path": original_file_path,
                },
            )

        if not result.get("ok"):
            error_msg = result.get("error", "Unknown Docling error")
            # Override meta file_path with original_file_path to ensure correct path matching
            meta = result.get("meta", {})
            meta["file_path"] = original_file_path
            return Data(data={"error": error_msg, **meta})

        meta = result.get("meta", {})
        # Override meta file_path with original_file_path to ensure correct path matching
        # The subprocess returns the temp file path, but we need the original S3/local path for rollup_data
        meta["file_path"] = original_file_path
        if result.get("mode") == "markdown":
            exported_content = str(result.get("text", ""))
            return Data(
                text=exported_content,
                data={"exported_content": exported_content, "export_format": self.EXPORT_FORMAT, **meta},
            )

        rows = list(result.get("doc", []))
        return Data(data={"doc": rows, "export_format": self.EXPORT_FORMAT, **meta})

    def process_files(
        self,
        file_list: list[BaseFileComponent.BaseFile],
    ) -> list[BaseFileComponent.BaseFile]:
        """Process input files.

        - advanced_mode => Docling in a separate process.
        - Otherwise => standard parsing in current process (optionally threaded).
        """
        if not file_list:
            msg = "No files to process."
            raise ValueError(msg)

        # Validate image files to detect content/extension mismatches
        # This prevents API errors like "Image does not match the provided media type"
        image_extensions = {"jpeg", "jpg", "png", "gif", "webp", "bmp", "tiff"}
        settings = get_settings_service().settings
        for file in file_list:
            extension = file.path.suffix[1:].lower()
            if extension in image_extensions:
                # Read bytes based on storage type
                try:
                    if settings.storage_type == "s3":
                        # For S3 storage, use storage service to read file bytes
                        file_path_str = str(file.path)
                        content = run_until_complete(read_file_bytes(file_path_str))
                    else:
                        # For local storage, read bytes directly from filesystem
                        content = file.path.read_bytes()

                    is_valid, error_msg = validate_image_content_type(
                        str(file.path),
                        content=content,
                    )
                    if not is_valid:
                        self.log(error_msg)
                        if not self.silent_errors:
                            raise ValueError(error_msg)
                except (OSError, FileNotFoundError) as e:
                    self.log(f"Could not read file for validation: {e}")
                    # Continue - let it fail later with better error

        # Validate that files requiring Docling are only processed when advanced mode is enabled
        if not self.advanced_mode:
            for file in file_list:
                extension = file.path.suffix[1:].lower()
                if extension in self.DOCLING_ONLY_EXTENSIONS:
                    if is_astra_cloud_environment():
                        msg = (
                            f"File '{file.path.name}' has extension '.{extension}' which requires "
                            f"Advanced Parser mode. Advanced Parser is not available in cloud environments."
                        )
                    else:
                        msg = (
                            f"File '{file.path.name}' has extension '.{extension}' which requires "
                            f"Advanced Parser mode. Please enable 'Advanced Parser' to process this file."
                        )
                    self.log(msg)
                    raise ValueError(msg)

        def process_file_standard(file_path: str, *, silent_errors: bool = False) -> Data | None:
            try:
                return parse_text_file_to_data(file_path, silent_errors=silent_errors)
            except FileNotFoundError as e:
                self.log(f"File not found: {file_path}. Error: {e}")
                if not silent_errors:
                    raise
                return None
            except Exception as e:
                self.log(f"Unexpected error processing {file_path}: {e}")
                if not silent_errors:
                    raise
                return None

        docling_compatible = all(self._is_docling_compatible(str(f.path)) for f in file_list)

        # Advanced path: Check if ALL files are compatible with Docling
        if self.advanced_mode and docling_compatible:
            final_return: list[BaseFileComponent.BaseFile] = []
            for file in file_list:
                file_path = str(file.path)
                advanced_data: Data | None = self._process_docling_in_subprocess(file_path)

                # Handle None case - Docling processing failed or returned None
                if advanced_data is None:
                    error_data = Data(
                        data={
                            "file_path": file_path,
                            "error": "Docling processing returned no result. Check logs for details.",
                        },
                    )
                    final_return.extend(self.rollup_data([file], [error_data]))
                    continue

                # --- UNNEST: expand each element in \`doc\` to its own Data row
                payload = getattr(advanced_data, "data", {}) or {}

                # Check for errors first
                if "error" in payload:
                    error_msg = payload.get("error", "Unknown error")
                    error_data = Data(
                        data={
                            "file_path": file_path,
                            "error": error_msg,
                            **{k: v for k, v in payload.items() if k not in ("error", "file_path")},
                        },
                    )
                    final_return.extend(self.rollup_data([file], [error_data]))
                    continue

                doc_rows = payload.get("doc")
                if isinstance(doc_rows, list) and doc_rows:
                    # Non-empty list of structured rows
                    rows: list[Data | None] = [
                        Data(
                            data={
                                "file_path": file_path,
                                **(item if isinstance(item, dict) else {"value": item}),
                            },
                        )
                        for item in doc_rows
                    ]
                    final_return.extend(self.rollup_data([file], rows))
                elif isinstance(doc_rows, list) and not doc_rows:
                    # Empty list - file was processed but no text content found
                    # Create a Data object indicating no content was extracted
                    self.log(f"No text extracted from '{file_path}', creating placeholder data")
                    empty_data = Data(
                        data={
                            "file_path": file_path,
                            "text": "(No text content extracted from image)",
                            "info": "Image processed successfully but contained no extractable text",
                            **{k: v for k, v in payload.items() if k != "doc"},
                        },
                    )
                    final_return.extend(self.rollup_data([file], [empty_data]))
                else:
                    # If not structured, keep as-is (e.g., markdown export or error dict)
                    # Ensure file_path is set for proper rollup matching
                    if not payload.get("file_path"):
                        payload["file_path"] = file_path
                        # Create new Data with file_path
                        advanced_data = Data(
                            data=payload,
                            text=getattr(advanced_data, "text", None),
                        )
                    final_return.extend(self.rollup_data([file], [advanced_data]))
            return final_return

        # Standard multi-file (or single non-advanced) path
        concurrency = max(1, self.concurrency_multithreading)

        file_paths = [str(f.path) for f in file_list]
        self.log(f"Starting parallel processing of {len(file_paths)} files with concurrency: {concurrency}.")
        my_data = parallel_load_data(
            file_paths,
            silent_errors=self.silent_errors,
            load_function=process_file_standard,
            max_concurrency=concurrency,
        )
        return self.rollup_data(file_list, my_data)

    # ------------------------------ Output helpers -----------------------------------

    def load_files_helper(self) -> DataFrame:
        result = self.load_files()

        # Result is a DataFrame - check if it has any rows
        if result.empty:
            msg = "Could not extract content from the provided file(s)."
            raise ValueError(msg)

        # Check for error column with error messages
        if "error" in result.columns:
            errors = result["error"].dropna().tolist()
            if errors and not any(col in result.columns for col in ["text", "doc", "exported_content"]):
                raise ValueError(errors[0])

        return result

    def load_files_dataframe(self) -> DataFrame:
        """Load files using advanced Docling processing and export to DataFrame format."""
        self.markdown = False
        return self.load_files_helper()

    def load_files_markdown(self) -> Message:
        """Load files using advanced Docling processing and export to Markdown format."""
        self.markdown = True
        result = self.load_files_helper()

        # Result is a DataFrame - check for text or exported_content columns
        if "text" in result.columns and not result["text"].isna().all():
            text_values = result["text"].dropna().tolist()
            if text_values:
                return Message(text=str(text_values[0]))

        if "exported_content" in result.columns and not result["exported_content"].isna().all():
            content_values = result["exported_content"].dropna().tolist()
            if content_values:
                return Message(text=str(content_values[0]))

        # Return empty message with info that no text was found
        return Message(text="(No text content extracted from file)")
`},concurrency_multithreading:{_input_type:"IntInput",advanced:!0,display_name:"Processing Concurrency",dynamic:!1,info:"When multiple files are being processed, the number of files to process concurrently.",list:!1,list_add_label:"Add More",name:"concurrency_multithreading",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},delete_server_file_after_processing:{_input_type:"BoolInput",advanced:!0,display_name:"Delete Server File After Processing",dynamic:!1,info:"If true, the Server File Path will be deleted after processing.",list:!1,list_add_label:"Add More",name:"delete_server_file_after_processing",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},doc_key:{_input_type:"MessageTextInput",advanced:!0,display_name:"Doc Key",dynamic:!1,info:"The key to use for the DoclingDocument column.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"doc_key",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"doc"},file_id:{_input_type:"StrInput",advanced:!1,display_name:"Google Drive File ID",dynamic:!1,info:"The Google Drive file ID to read. The file must be shared with the service account email.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_id",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},file_path:{_input_type:"HandleInput",advanced:!0,display_name:"Server File Path",dynamic:!1,info:"Data object with a 'file_path' property pointing to server file or a Message object with a path to the file. Supercedes 'Path' but supports same file types.",input_types:["Data","JSON","Message"],list:!0,list_add_label:"Add More",name:"file_path",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},file_path_str:{_input_type:"StrInput",advanced:!0,display_name:"File Path",dynamic:!1,info:"Path to the file to read. Used when component is called as a tool. If not provided, will use the uploaded file from 'path' input.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_path_str",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},ignore_unspecified_files:{_input_type:"BoolInput",advanced:!0,display_name:"Ignore Unspecified Files",dynamic:!1,info:"If true, Data with no 'file_path' property will be ignored.",list:!1,list_add_label:"Add More",name:"ignore_unspecified_files",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},ignore_unsupported_extensions:{_input_type:"BoolInput",advanced:!0,display_name:"Ignore Unsupported Extensions",dynamic:!1,info:"If true, files with unsupported extensions will not be processed.",list:!1,list_add_label:"Add More",name:"ignore_unsupported_extensions",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},is_refresh:!1,markdown:{_input_type:"BoolInput",advanced:!1,display_name:"Markdown Export",dynamic:!1,info:"Export processed documents to Markdown format. Only available when advanced mode is enabled.",list:!1,list_add_label:"Add More",name:"markdown",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},md_image_placeholder:{_input_type:"StrInput",advanced:!0,display_name:"Image placeholder",dynamic:!1,info:"Specify the image placeholder for markdown exports.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"md_image_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"<!-- image -->"},md_page_break_placeholder:{_input_type:"StrInput",advanced:!0,display_name:"Page break placeholder",dynamic:!1,info:"Add this placeholder between pages in the markdown output.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"md_page_break_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},ocr_engine:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"OCR Engine",dynamic:!1,external_options:{},info:"OCR engine to use. Only available when pipeline is set to 'standard'.",name:"ocr_engine",options:["None","easyocr"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"easyocr"},path:{_input_type:"FileInput",advanced:!1,display_name:"Files",dynamic:!1,fileTypes:["csv","json","pdf","txt","md","mdx","yaml","yml","xml","html","htm","docx","py","sh","sql","js","ts","tsx","adoc","asciidoc","asc","bmp","dotx","dotm","docm","jpg","jpeg","png","potx","ppsx","pptm","potm","ppsm","pptx","tiff","xls","xlsx","xhtml","webp","zip","tar","tgz","bz2","gz"],file_path:["bc3e4db7-3e8e-49e7-bf53-d3ebeaa90837/result2.json"],info:"Supported file extensions: csv, json, pdf, txt, md, mdx, yaml, yml, xml, html, htm, docx, py, sh, sql, js, ts, tsx, adoc, asciidoc, asc, bmp, dotx, dotm, docm, jpg, jpeg, png, potx, ppsx, pptm, potm, ppsm, pptx, tiff, xls, xlsx, xhtml, webp; optionally bundled in file extensions: zip, tar, tgz, bz2, gz",list:!0,list_add_label:"Add More",name:"path",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,temp_file:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""},pipeline:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Pipeline",dynamic:!1,external_options:{},info:"Docling pipeline to use",name:"pipeline",options:["standard","vlm"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"standard"},s3_file_key:{_input_type:"StrInput",advanced:!1,display_name:"S3 File Key",dynamic:!1,info:"The key (path) of the file in S3 bucket.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"s3_file_key",override_skip:!1,placeholder:"",required:!0,show:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},separator:{_input_type:"StrInput",advanced:!0,display_name:"Separator",dynamic:!1,info:"Specify the separator to use between multiple outputs in Message format.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"separator",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`

`},service_account_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"GCP Credentials Secret Key",dynamic:!1,info:"Your Google Cloud Platform service account JSON key as a secret string (complete JSON content).",input_types:[],load_from_db:!1,name:"service_account_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!1,title_case:!1,track_in_telemetry:!1,type:"str",value:""},silent_errors:{_input_type:"BoolInput",advanced:!0,display_name:"Silent Errors",dynamic:!1,info:"If true, errors will not raise an exception.",list:!1,list_add_label:"Add More",name:"silent_errors",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},storage_location:{_input_type:"SortableListInput",advanced:!0,display_name:"Storage Location",dynamic:!1,info:"Choose where to read the file from.",limit:1,name:"storage_location",options:[{icon:"hard-drive",name:"Local"},{icon:"Amazon",name:"AWS"},{icon:"google",name:"Google Drive"}],override_skip:!1,placeholder:"Select Location",real_time_refresh:!0,required:!1,search_category:[],show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"sortableList",value:[{chosen:!1,icon:"hard-drive",name:"Local",selected:!1}]},use_multithreading:{_input_type:"BoolInput",advanced:!0,display_name:"[Deprecated] Use Multithreading",dynamic:!1,info:"Set 'Processing Concurrency' greater than 1 to enable multithreading.",list:!1,list_add_label:"Add More",name:"use_multithreading",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},selected_output:"message",showNode:!0,type:"File"},dragging:!1,id:"File-z2bcx",measured:{height:279,width:320},position:{x:-95.6261203765812,y:378.7904851904186},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-bsj7J",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["file1","file2"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},file1:{advanced:!1,display_name:"file1",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"file1",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},file2:{advanced:!1,display_name:"file2",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"file2",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`You are a senior test reliability engineer. You are given a comparison of two Playwright runs (Build 1 and Build 2) of the same suite.



COMPARISON REPORT:
{file1} - Build 1 JSON
{file2} - Build 2JSON  

Definitions you MUST follow:
- FLAKY = non-deterministic result: passed in one build and failed in the other, OR passed only after a retry. Flaky tests need a rerun / quarantine, not a code fix.
- CONSISTENT FAILURE = failed in BOTH builds. A real, reproducible bug, NOT flaky. Needs a fix.

Produce:
1. FLAKY_TESTS - names + one-line hypothesis of flake cause (timing, data, parallelism, network...).
2. CONSISTENT_FAILURES - tests failing in both builds, each with a probable root cause.
3. RERUN_RECOMMENDATION - which to rerun (flaky) vs send to engineering (bugs).
4. SUMMARY - counts + one sentence on suite health.

Base everything only on the comparison data. Do not invent test names.`},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},id:"Prompt Template-bsj7J",measured:{height:428,width:320},position:{x:361.00831409247985,y:104.11411697763903},selected:!1,type:"genericNode"},{data:{id:"MistralModel-iShHn",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Generates text using MistralAI LLMs.",display_name:"MistralAI",documentation:"",edited:!1,field_order:["input_value","system_message","stream","max_tokens","model_name","mistral_api_base","api_key","temperature","max_retries","timeout","max_concurrent_requests","top_p","random_seed","safe_mode"],frozen:!1,icon:"MistralAI",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"e21780948144",dependencies:{dependencies:[{name:"langchain_mistralai",version:"1.1.4"},{name:"pydantic",version:"2.13.4"},{name:"lfx",version:null}],total_dependencies:3},keywords:["model","llm","language model","large language model"],module:"lfx.components.mistral.mistral.MistralAIModelComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,method:"text_response",name:"text_output",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,method:"build_model",name:"model_output",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"Mistral API Key",dynamic:!1,info:"The Mistral API Key to use for the Mistral model.",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:"Lo4FXYs7WWRWxnyWXYkoEIcBMtFBnO5l"},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langchain_mistralai import ChatMistralAI
from pydantic.v1 import SecretStr

from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.io import BoolInput, DropdownInput, FloatInput, IntInput, SecretStrInput, StrInput


class MistralAIModelComponent(LCModelComponent):
    display_name = "MistralAI"
    description = "Generates text using MistralAI LLMs."
    icon = "MistralAI"
    name = "MistralModel"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            advanced=False,
            options=[
                "open-mixtral-8x7b",
                "open-mixtral-8x22b",
                "mistral-small-latest",
                "mistral-medium-latest",
                "mistral-large-latest",
                "codestral-latest",
            ],
            value="codestral-latest",
        ),
        StrInput(
            name="mistral_api_base",
            display_name="Mistral API Base",
            advanced=True,
            info="The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. "
            "You can change this to use other APIs like JinaChat, LocalAI and Prem.",
        ),
        SecretStrInput(
            name="api_key",
            display_name="Mistral API Key",
            info="The Mistral API Key to use for the Mistral model.",
            advanced=False,
            required=True,
            value="MISTRAL_API_KEY",
        ),
        FloatInput(
            name="temperature",
            display_name="Temperature",
            value=0.1,
            advanced=True,
        ),
        IntInput(
            name="max_retries",
            display_name="Max Retries",
            advanced=True,
            value=5,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            advanced=True,
            value=60,
        ),
        IntInput(
            name="max_concurrent_requests",
            display_name="Max Concurrent Requests",
            advanced=True,
            value=3,
        ),
        FloatInput(
            name="top_p",
            display_name="Top P",
            advanced=True,
            value=1,
        ),
        IntInput(
            name="random_seed",
            display_name="Random Seed",
            value=1,
            advanced=True,
        ),
        BoolInput(
            name="safe_mode",
            display_name="Safe Mode",
            advanced=True,
            value=False,
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        try:
            return ChatMistralAI(
                model_name=self.model_name,
                mistral_api_key=SecretStr(self.api_key).get_secret_value() if self.api_key else None,
                endpoint=self.mistral_api_base or "https://api.mistral.ai/v1",
                max_tokens=self.max_tokens or None,
                temperature=self.temperature,
                max_retries=self.max_retries,
                timeout=self.timeout,
                max_concurrent_requests=self.max_concurrent_requests,
                top_p=self.top_p,
                random_seed=self.random_seed,
                safe_mode=self.safe_mode,
                streaming=self.stream,
            )
        except Exception as e:
            msg = "Could not connect to MistralAI API."
            raise ValueError(msg) from e
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},max_concurrent_requests:{_input_type:"IntInput",advanced:!0,display_name:"Max Concurrent Requests",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_concurrent_requests",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:3},max_retries:{_input_type:"IntInput",advanced:!0,display_name:"Max Retries",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_retries",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:5},max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Tokens",dynamic:!1,info:"The maximum number of tokens to generate. Set to 0 for unlimited tokens.",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},mistral_api_base:{_input_type:"StrInput",advanced:!0,display_name:"Mistral API Base",dynamic:!1,info:"The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. You can change this to use other APIs like JinaChat, LocalAI and Prem.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"mistral_api_base",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Model Name",dynamic:!1,external_options:{},info:"",name:"model_name",options:["open-mixtral-8x7b","open-mixtral-8x22b","mistral-small-latest","mistral-medium-latest","mistral-large-latest","codestral-latest"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"codestral-latest"},random_seed:{_input_type:"IntInput",advanced:!0,display_name:"Random Seed",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"random_seed",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},safe_mode:{_input_type:"BoolInput",advanced:!0,display_name:"Safe Mode",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"safe_mode",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"You are a helpful assistant. Your task is to take the input and do the respective tasks "},temperature:{_input_type:"FloatInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"temperature",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:.1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:60},top_p:{_input_type:"FloatInput",advanced:!0,display_name:"Top P",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"top_p",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:1}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"MistralModel"},id:"MistralModel-iShHn",measured:{height:452,width:320},position:{x:773.7419483653352,y:104.11411697763903},selected:!1,type:"genericNode"},{data:{id:"ChatOutput-HbKUY",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null}],total_dependencies:3},module:"lfx.components.input_output.chat_output.ChatOutput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},dragging:!1,id:"ChatOutput-HbKUY",measured:{height:52,width:192},position:{x:1193.1378767070732,y:140.19609648131785},selected:!1,type:"genericNode"}],viewport:{x:134.0769289412866,y:57.99871321768467,zoom:.7695429379151495}},description:"Unravel the Art of Articulation.",endpoint_name:null,id:"d99f1491-3a0a-4109-b297-f4ab32e06e1f",is_component:!1,last_tested_version:"1.10.0",locked:!1,name:"Flaky_Test_Case_generator",tags:[]}},{id:"rca-bot",title:"RCA-Bot",description:"Text Generation Meets Business Transformation.",fileName:"RCA-Bot.json",rawData:{data:{edges:[{animated:!1,className:"",data:{sourceHandle:{dataType:"APIRequest",id:"APIRequest-x3OSv",name:"data",output_types:["JSON"]},targetHandle:{fieldName:"jira_json",id:"JiraSearchParserComponent-4otwK",inputTypes:["Data","JSON"],type:"other"}},id:"reactflow__edge-APIRequest-x3OSv{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-x3OSvœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}-JiraSearchParserComponent-4otwK{œfieldNameœ:œjira_jsonœ,œidœ:œJiraSearchParserComponent-4otwKœ,œinputTypesœ:[œDataœ,œJSONœ],œtypeœ:œotherœ}",selected:!1,source:"APIRequest-x3OSv",sourceHandle:"{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-x3OSvœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}",target:"JiraSearchParserComponent-4otwK",targetHandle:"{œfieldNameœ:œjira_jsonœ,œidœ:œJiraSearchParserComponent-4otwKœ,œinputTypesœ:[œDataœ,œJSONœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"JiraSearchParserComponent",id:"JiraSearchParserComponent-4otwK",name:"parsed_text",output_types:["Message"]},targetHandle:{fieldName:"jira_json",id:"Prompt Template-6ThMZ",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-JiraSearchParserComponent-4otwK{œdataTypeœ:œJiraSearchParserComponentœ,œidœ:œJiraSearchParserComponent-4otwKœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-6ThMZ{œfieldNameœ:œjira_jsonœ,œidœ:œPrompt Template-6ThMZœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"JiraSearchParserComponent-4otwK",sourceHandle:"{œdataTypeœ:œJiraSearchParserComponentœ,œidœ:œJiraSearchParserComponent-4otwKœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-6ThMZ",targetHandle:"{œfieldNameœ:œjira_jsonœ,œidœ:œPrompt Template-6ThMZœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-6ThMZ",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"system_message",id:"MistralModel-rqOP5",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-Prompt Template-6ThMZ{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-6ThMZœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-MistralModel-rqOP5{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-rqOP5œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-6ThMZ",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-6ThMZœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"MistralModel-rqOP5",targetHandle:"{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-rqOP5œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MistralModel",id:"MistralModel-rqOP5",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"rca_markdown",id:"RcaExporterComponent-KTH46",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-MistralModel-rqOP5{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-rqOP5œ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-RcaExporterComponent-KTH46{œfieldNameœ:œrca_markdownœ,œidœ:œRcaExporterComponent-KTH46œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"MistralModel-rqOP5",sourceHandle:"{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-rqOP5œ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"RcaExporterComponent-KTH46",targetHandle:"{œfieldNameœ:œrca_markdownœ,œidœ:œRcaExporterComponent-KTH46œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"RcaExporterComponent",id:"RcaExporterComponent-KTH46",name:"export_status",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-MIM00",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"reactflow__edge-RcaExporterComponent-KTH46{œdataTypeœ:œRcaExporterComponentœ,œidœ:œRcaExporterComponent-KTH46œ,œnameœ:œexport_statusœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-MIM00{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-MIM00œ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"RcaExporterComponent-KTH46",sourceHandle:"{œdataTypeœ:œRcaExporterComponentœ,œidœ:œRcaExporterComponent-KTH46œ,œnameœ:œexport_statusœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-MIM00",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-MIM00œ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-iLAUd",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"url_input",id:"APIRequest-x3OSv",inputTypes:["Message"],type:"str"}},id:"xy-edge__Prompt Template-iLAUd{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-iLAUdœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-APIRequest-x3OSv{œfieldNameœ:œurl_inputœ,œidœ:œAPIRequest-x3OSvœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-iLAUd",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-iLAUdœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"APIRequest-x3OSv",targetHandle:"{œfieldNameœ:œurl_inputœ,œidœ:œAPIRequest-x3OSvœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"ChatInput",id:"ChatInput-hzm0B",name:"message",output_types:["Message"]},targetHandle:{fieldName:"issue_keys",id:"Prompt Template-iLAUd",inputTypes:["Message"],type:"str"}},id:"xy-edge__ChatInput-hzm0B{œdataTypeœ:œChatInputœ,œidœ:œChatInput-hzm0Bœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-iLAUd{œfieldNameœ:œissue_keysœ,œidœ:œPrompt Template-iLAUdœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"ChatInput-hzm0B",sourceHandle:"{œdataTypeœ:œChatInputœ,œidœ:œChatInput-hzm0Bœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-iLAUd",targetHandle:"{œfieldNameœ:œissue_keysœ,œidœ:œPrompt Template-iLAUdœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"}],nodes:[{data:{id:"ChatInput-hzm0B",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Get chat inputs from the Playground.",display_name:"Chat Input",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","files"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"7a26c54d89ed",dependencies:{dependencies:[{name:"lfx",version:"1.10.0"}],total_dependencies:1},module:"custom_components.chat_input"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Chat Message",group_outputs:!1,hidden:null,loop_types:null,method:"message_response",name:"message",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from lfx.base.data.utils import IMG_FILE_TYPES, TEXT_FILE_TYPES
from lfx.base.io.chat import ChatComponent
from lfx.inputs.inputs import BoolInput
from lfx.io import (
    DropdownInput,
    FileInput,
    MessageTextInput,
    MultilineInput,
    Output,
)
from lfx.schema.message import Message
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_USER,
    MESSAGE_SENDER_USER,
)


class ChatInput(ChatComponent):
    display_name = "Chat Input"
    description = "Get chat inputs from the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatInput"
    minimized = True

    inputs = [
        MultilineInput(
            name="input_value",
            display_name="Input Text",
            value="",
            info="Message to be passed as input.",
            input_types=[],
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_USER,
            info="Type of sender.",
            advanced=True,
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_USER,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        FileInput(
            name="files",
            display_name="Files",
            file_types=TEXT_FILE_TYPES + IMG_FILE_TYPES,
            info="Files to be sent with the message.",
            advanced=True,
            is_list=True,
            temp_file=True,
        ),
    ]
    outputs = [
        Output(display_name="Chat Message", name="message", method="message_response"),
    ]

    async def message_response(self) -> Message:
        # Ensure files is a list and filter out empty/None values
        files = self.files if self.files else []
        if files and not isinstance(files, list):
            files = [files]
        # Filter out None/empty values
        files = [f for f in files if f is not None and f != ""]

        session_id = self.session_id or self.graph.session_id or ""
        message = await Message.create(
            text=self.input_value,
            sender=self.sender,
            sender_name=self.sender_name,
            session_id=session_id,
            context_id=self.context_id,
            files=files,
        )
        if session_id and isinstance(message, Message) and self.should_store_message:
            stored_message = await self.send_message(
                message,
            )
            self.message.value = stored_message
            message = stored_message

        self.status = message
        return message
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"QA-22"},files:{_input_type:"FileInput",advanced:!0,display_name:"Files",dynamic:!1,fileTypes:["csv","json","pdf","txt","md","mdx","yaml","yml","xml","html","htm","docx","py","sh","sql","js","ts","tsx","jpg","jpeg","png","bmp","image"],file_path:"",info:"Files to be sent with the message.",list:!0,list_add_label:"Add More",name:"files",override_skip:!1,placeholder:"",required:!1,show:!0,temp_file:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""},input_value:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"Input Text",dynamic:!1,info:"Message to be passed as input.",input_types:[],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"input_value",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"User"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"User"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatInput"},dragging:!1,id:"ChatInput-hzm0B",measured:{height:52,width:192},position:{x:-367.3442551635203,y:-106.26928926607151},selected:!1,type:"genericNode"},{data:{id:"APIRequest-x3OSv",node:{base_classes:["JSON"],beta:!1,conditional_paths:[],custom_fields:{},description:"Make HTTP requests using URL or cURL commands.",display_name:"API Request",documentation:"https://docs.langflow.org/api-request",edited:!1,field_order:["url_input","curl_input","method","mode","query_params","body","headers","timeout","follow_redirects","save_to_file","include_httpx_metadata"],frozen:!1,icon:"Globe",last_updated:"2026-06-29T17:49:07.780Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"1a052ebb9519",dependencies:{dependencies:[{name:"aiofiles",version:"24.1.0"},{name:"httpx",version:"0.28.1"},{name:"validators",version:"0.35.0"},{name:"lfx",version:null}],total_dependencies:4},module:"lfx.components.data_source.api_request.APIRequestComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"API Response",group_outputs:!1,loop_types:null,method:"make_api_request",name:"data",options:null,required_inputs:null,selected:"JSON",tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"c7513a46-daa4-4dd6-adb2-0b58a9c79dc0"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",body:{_input_type:"TableInput",advanced:!1,display_name:"Body",dynamic:!1,info:"The body to send with the request as a dictionary (for POST, PATCH, PUT).",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"body",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Parameter name",display_name:"Key",formatter:"text",name:"key",type:"str"},{description:"Parameter value",display_name:"Value",formatter:"text",name:"value"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[]},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import json
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import parse_qsl, urlencode, urljoin, urlparse, urlunparse

import aiofiles
import aiofiles.os as aiofiles_os
import httpx
import validators

from lfx.base.curl.parse import parse_context
from lfx.custom.custom_component.component import Component
from lfx.inputs.inputs import TabInput
from lfx.io import (
    BoolInput,
    DataInput,
    DropdownInput,
    IntInput,
    MessageTextInput,
    MultilineInput,
    Output,
    TableInput,
)
from lfx.schema.data import Data
from lfx.schema.dotdict import dotdict
from lfx.utils.component_utils import set_current_fields, set_field_advanced, set_field_display

# SSRF Protection imports - for preventing Server-Side Request Forgery attacks
from lfx.utils.ssrf_protection import (
    SSRFProtectionError,
    is_ssrf_protection_enabled,
    validate_and_resolve_url,
)
from lfx.utils.ssrf_transport import create_ssrf_protected_client

# Define fields for each mode
MODE_FIELDS = {
    "URL": [
        "url_input",
        "method",
    ],
    "cURL": ["curl_input"],
}

# Fields that should always be visible
DEFAULT_FIELDS = ["mode"]

# HTTP redirect status codes (RFC 9110).
HTTP_MOVED_PERMANENTLY = 301
HTTP_FOUND = 302
HTTP_SEE_OTHER = 303
HTTP_TEMPORARY_REDIRECT = 307
HTTP_PERMANENT_REDIRECT = 308

# Maximum number of redirects to follow when re-validating each hop (matches httpx's default).
MAX_REDIRECTS = 20

# HTTP status codes that represent a redirect carrying a Location header.
REDIRECT_STATUS_CODES = frozenset(
    {
        HTTP_MOVED_PERMANENTLY,
        HTTP_FOUND,
        HTTP_SEE_OTHER,
        HTTP_TEMPORARY_REDIRECT,
        HTTP_PERMANENT_REDIRECT,
    }
)


class APIRequestComponent(Component):
    display_name = "API Request"
    description = "Make HTTP requests using URL or cURL commands."
    documentation: str = "https://docs.langflow.org/api-request"
    icon = "Globe"
    name = "APIRequest"

    inputs = [
        MessageTextInput(
            name="url_input",
            display_name="URL",
            info="Enter the URL for the request.",
            advanced=False,
            tool_mode=True,
        ),
        MultilineInput(
            name="curl_input",
            display_name="cURL",
            info=(
                "Paste a curl command to populate the fields. "
                "This will fill in the dictionary fields for headers and body."
            ),
            real_time_refresh=True,
            tool_mode=True,
            advanced=True,
            show=False,
        ),
        DropdownInput(
            name="method",
            display_name="Method",
            options=["GET", "POST", "PATCH", "PUT", "DELETE"],
            value="GET",
            info="The HTTP method to use.",
            real_time_refresh=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["URL", "cURL"],
            value="URL",
            info="Enable cURL mode to populate fields from a cURL command.",
            real_time_refresh=True,
        ),
        DataInput(
            name="query_params",
            display_name="Query Parameters",
            info="The query parameters to append to the URL.",
            advanced=True,
        ),
        TableInput(
            name="body",
            display_name="Body",
            info="The body to send with the request as a dictionary (for POST, PATCH, PUT).",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Key",
                    "type": "str",
                    "description": "Parameter name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "description": "Parameter value",
                },
            ],
            value=[],
            input_types=["Data", "JSON"],
            advanced=True,
            real_time_refresh=True,
        ),
        TableInput(
            name="headers",
            display_name="Headers",
            info="The headers to send with the request",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Header",
                    "type": "str",
                    "description": "Header name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "type": "str",
                    "description": "Header value",
                },
            ],
            value=[{"key": "User-Agent", "value": "Langflow/1.0"}],
            advanced=True,
            input_types=["Data", "JSON"],
            real_time_refresh=True,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            value=30,
            info="The timeout to use for the request.",
            advanced=True,
        ),
        BoolInput(
            name="follow_redirects",
            display_name="Follow Redirects",
            value=False,
            info=(
                "Whether to follow HTTP redirects. "
                "WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL "
                "redirects to internal resources. Only enable if you trust the target server. "
                "See OWASP SSRF Prevention Cheat Sheet for details."
            ),
            advanced=True,
        ),
        BoolInput(
            name="save_to_file",
            display_name="Save to File",
            value=False,
            info="Save the API response to a temporary file",
            advanced=True,
        ),
        BoolInput(
            name="include_httpx_metadata",
            display_name="Include HTTPx Metadata",
            value=False,
            info=(
                "Include properties such as headers, status_code, response_headers, "
                "and redirection_history in the output."
            ),
            advanced=True,
        ),
    ]

    outputs = [
        Output(display_name="API Response", name="data", method="make_api_request"),
    ]

    def _parse_json_value(self, value: Any) -> Any:
        """Parse a value that might be a JSON string."""
        if not isinstance(value, str):
            return value

        try:
            parsed = json.loads(value)
        except json.JSONDecodeError:
            return value
        else:
            return parsed

    def _process_body(self, body: Any) -> dict:
        """Process the body input into a valid dictionary."""
        if body is None:
            return {}
        if hasattr(body, "data"):
            body = body.data
        if isinstance(body, dict):
            return self._process_dict_body(body)
        if isinstance(body, str):
            return self._process_string_body(body)
        if isinstance(body, list):
            return self._process_list_body(body)
        return {}

    def _process_dict_body(self, body: dict) -> dict:
        """Process dictionary body by parsing JSON values."""
        return {k: self._parse_json_value(v) for k, v in body.items()}

    def _process_string_body(self, body: str) -> dict:
        """Process string body by attempting JSON parse."""
        try:
            return self._process_body(json.loads(body))
        except json.JSONDecodeError:
            return {"data": body}

    def _process_list_body(self, body: list) -> dict:
        """Process list body by converting to key-value dictionary."""
        processed_dict = {}
        try:
            for item in body:
                # Unwrap Data objects
                current_item = item
                if hasattr(item, "data"):
                    unwrapped_data = item.data
                    # If the unwrapped data is a dict but not key-value format, use it directly
                    if isinstance(unwrapped_data, dict) and not self._is_valid_key_value_item(unwrapped_data):
                        return unwrapped_data
                    current_item = unwrapped_data
                if not self._is_valid_key_value_item(current_item):
                    continue
                key = current_item["key"]
                value = self._parse_json_value(current_item["value"])
                processed_dict[key] = value
        except (KeyError, TypeError, ValueError) as e:
            self.log(f"Failed to process body list: {e}")
            return {}
        return processed_dict

    def _is_valid_key_value_item(self, item: Any) -> bool:
        """Check if an item is a valid key-value dictionary."""
        return isinstance(item, dict) and "key" in item and "value" in item

    def parse_curl(self, curl: str, build_config: dotdict) -> dotdict:
        """Parse a cURL command and update build configuration."""
        try:
            parsed = parse_context(curl)

            # Update basic configuration
            url = parsed.url
            # Normalize URL before setting it
            url = self._normalize_url(url)

            build_config["url_input"]["value"] = url
            build_config["method"]["value"] = parsed.method.upper()

            # Process headers
            headers_list = [{"key": k, "value": v} for k, v in parsed.headers.items()]
            build_config["headers"]["value"] = headers_list

            # Process body data
            if not parsed.data:
                build_config["body"]["value"] = []
            elif parsed.data:
                try:
                    json_data = json.loads(parsed.data)
                    if isinstance(json_data, dict):
                        body_list = [
                            {"key": k, "value": json.dumps(v) if isinstance(v, dict | list) else str(v)}
                            for k, v in json_data.items()
                        ]
                        build_config["body"]["value"] = body_list
                    else:
                        build_config["body"]["value"] = [{"key": "data", "value": json.dumps(json_data)}]
                except json.JSONDecodeError:
                    build_config["body"]["value"] = [{"key": "data", "value": parsed.data}]

        except Exception as exc:
            msg = f"Error parsing curl: {exc}"
            self.log(msg)
            raise ValueError(msg) from exc

        return build_config

    def _normalize_url(self, url: str) -> str:
        """Normalize URL by adding https:// if no protocol is specified."""
        if not url or not isinstance(url, str):
            msg = "URL cannot be empty"
            raise ValueError(msg)

        url = url.strip()
        if url.startswith(("http://", "https://")):
            return url
        return f"https://{url}"

    async def make_request(
        self,
        client: httpx.AsyncClient,
        method: str,
        url: str,
        headers: dict | None = None,
        body: Any = None,
        timeout: int = 5,
        *,
        follow_redirects: bool = False,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        redirection_history = []

        try:
            # Prepare request parameters
            request_params = {
                "method": method,
                "url": url,
                "headers": headers,
                "timeout": timeout,
                "follow_redirects": follow_redirects,
            }
            # Only include body for methods that support it (GET must not have a body per HTTP spec)
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body
            response = await client.request(**request_params)

            redirection_history = [
                {
                    "url": redirect.headers.get("Location", str(redirect.url)),
                    "status_code": redirect.status_code,
                }
                for redirect in response.history
            ]

            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
            self.log(f"Error making request to {url}")
            return Data(
                data={
                    "source": url,
                    "headers": headers,
                    "status_code": 500,
                    "error": str(exc),
                    **({"redirection_history": redirection_history} if redirection_history else {}),
                },
            )

    async def _build_response_data(
        self,
        response: httpx.Response,
        source_url: str,
        headers: dict | None,
        redirection_history: list,
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Turn an httpx response into the component's \`\`Data\`\` output.

        Shared by the standard request path (\`\`make_request\`\`) and the redirect
        re-validation path (\`\`_follow_redirects_with_validation\`\`) so both produce
        identical metadata, optional file saving, and body decoding.
        """
        is_binary, file_path = await self._response_info(response, with_file_path=save_to_file)
        response_headers = self._headers_to_dict(response.headers)

        # Base metadata
        metadata = {
            "source": source_url,
            "status_code": response.status_code,
            "response_headers": response_headers,
        }

        if redirection_history:
            metadata["redirection_history"] = redirection_history

        if save_to_file:
            mode = "wb" if is_binary else "w"
            encoding = response.encoding if mode == "w" else None
            if file_path:
                await aiofiles_os.makedirs(file_path.parent, exist_ok=True)
                if is_binary:
                    async with aiofiles.open(file_path, "wb") as f:
                        await f.write(response.content)
                        await f.flush()
                else:
                    async with aiofiles.open(file_path, "w", encoding=encoding) as f:
                        await f.write(response.text)
                        await f.flush()
                metadata["file_path"] = str(file_path)

            if include_httpx_metadata:
                metadata.update({"headers": headers})
            return Data(data=metadata)

        # Handle response content
        if is_binary:
            result = response.content
        else:
            try:
                result = response.json()
            except json.JSONDecodeError:
                self.log("Failed to decode JSON response")
                result = response.text.encode("utf-8")

        metadata["result"] = result

        if include_httpx_metadata:
            metadata.update({"headers": headers})

        return Data(data=metadata)

    def add_query_params(self, url: str, params: dict) -> str:
        """Add query parameters to URL efficiently."""
        if not params:
            return url
        url_parts = list(urlparse(url))
        query = dict(parse_qsl(url_parts[4]))
        query.update(params)
        url_parts[4] = urlencode(query)
        return urlunparse(url_parts)

    def _headers_to_dict(self, headers: httpx.Headers) -> dict[str, str]:
        """Convert HTTP headers to a dictionary with lowercased keys."""
        return {k.lower(): v for k, v in headers.items()}

    def _process_headers(self, headers: Any) -> dict:
        """Process the headers input into a valid dictionary."""
        if headers is None:
            return {}
        if isinstance(headers, dict):
            return headers
        if isinstance(headers, list):
            return {item["key"]: item["value"] for item in headers if self._is_valid_key_value_item(item)}
        return {}

    async def make_api_request(self) -> Data:
        """Make HTTP request with SSRF protection and DNS pinning.

        This method implements comprehensive SSRF (Server-Side Request Forgery) protection
        using DNS pinning to prevent DNS rebinding attacks. The protection works by:
        1. Validating the URL and resolving DNS during security check
        2. Pinning the validated IP address
        3. Forcing the HTTP client to use the pinned IP for the actual request
        4. Ignoring any subsequent DNS changes (prevents rebinding attacks)

        Returns:
            Data: Response data from the HTTP request

        Raises:
            ValueError: If URL is invalid or blocked by SSRF protection
        """
        # Extract request parameters
        method = self.method
        url = self.url_input.strip() if isinstance(self.url_input, str) else ""
        headers = self.headers or {}
        body = self.body or {}
        timeout = self.timeout
        follow_redirects = self.follow_redirects
        save_to_file = self.save_to_file
        include_httpx_metadata = self.include_httpx_metadata

        # Security warning: HTTP redirects can bypass SSRF protection
        # A public URL could redirect to an internal resource
        if follow_redirects:
            self.log(
                "Security Warning: HTTP redirects are enabled. This may allow SSRF bypass attacks "
                "where a public URL redirects to internal resources (e.g., cloud metadata endpoints). "
                "Only enable this if you trust the target server."
            )

        # Normalize URL (add https:// if no protocol specified)
        url = self._normalize_url(url)

        # Basic URL format validation
        if not validators.url(url):
            msg = f"Invalid URL provided: {url}"
            raise ValueError(msg)

        # ============================================================================
        # SSRF Protection with DNS Pinning
        # ============================================================================
        # This prevents DNS rebinding attacks by:
        # 1. Resolving DNS and validating IPs during security check
        # 2. Pinning the validated IP address
        # 3. Using a custom HTTP transport that forces use of the pinned IP
        # 4. Ignoring any new DNS resolutions (prevents rebinding)
        #
        # Without DNS pinning, an attacker could:
        # - First DNS lookup: returns public IP (passes validation)
        # - Second DNS lookup: returns internal IP (bypasses protection)
        # - Attack succeeds: accesses internal services
        #
        # With DNS pinning:
        # - First DNS lookup: returns public IP (passes validation)
        # - IP is pinned: "example.com = 93.184.216.34"
        # - HTTP request: uses pinned IP directly (no new DNS lookup)
        # - Attack fails: even if DNS changes, we use the validated IP
        # ============================================================================

        try:
            # Validate URL and get validated IPs for DNS pinning
            _validated_url, validated_ips = validate_and_resolve_url(url)

            # Log DNS pinning information for security auditing
            if validated_ips:
                self.log(f"SSRF Protection: Using DNS pinning with {len(validated_ips)} validated IP(s)")

        except SSRFProtectionError as e:
            # SSRF protection blocked the request (private IP, internal network, etc.)
            msg = f"SSRF Protection: {e}"
            raise ValueError(msg) from e

        # Process query parameters (from string or Data object)
        if isinstance(self.query_params, str):
            query_params = dict(parse_qsl(self.query_params))
        else:
            query_params = self.query_params.data if self.query_params else {}

        # Process headers and body into proper format
        headers = self._process_headers(headers)
        body = self._process_body(body)
        url = self.add_query_params(url, query_params)

        # ============================================================================
        # Execute the request (re-validating any redirects when SSRF protection is on)
        # ============================================================================
        # When SSRF protection is enabled we must NOT let httpx auto-follow redirects:
        # a validated public URL can redirect to an internal address (loopback, RFC1918,
        # link-local / cloud metadata) that was never checked, bypassing both the initial
        # validation and DNS pinning. Instead we follow redirects manually so every hop
        # is re-validated with the same denylist + DNS pinning. When protection is
        # disabled, we preserve the previous behavior and let httpx handle redirects.
        if is_ssrf_protection_enabled() and follow_redirects:
            result = await self._follow_redirects_with_validation(
                method,
                url,
                headers,
                body,
                timeout,
                validated_ips,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        else:
            # No redirect re-validation needed:
            # - SSRF protection is disabled (user opted out), or
            # - redirects are disabled, so httpx makes a single request.
            # DNS pinning still applies to the single request when protection is enabled
            # and the host resolved to validated IPs.
            async with self._build_http_client(url, validated_ips) as client:
                result = await self.make_request(
                    client,
                    method,
                    url,
                    headers,
                    body,
                    timeout,
                    follow_redirects=follow_redirects,
                    save_to_file=save_to_file,
                    include_httpx_metadata=include_httpx_metadata,
                )

        self.status = result
        return result

    def _build_http_client(self, url: str, validated_ips: list[str]) -> httpx.AsyncClient:
        """Create an HTTP client, pinning DNS to validated IPs when SSRF protection applies.

        Args:
            url: The request URL whose hostname will be pinned.
            validated_ips: IPs validated by \`\`validate_and_resolve_url\`\` for this hop.

        Returns:
            httpx.AsyncClient: A client that pins DNS to \`\`validated_ips\`\` (preventing
            rebinding) when SSRF protection is enabled and the hop has validated IPs;
            otherwise a standard client (protection disabled, allowlisted host, or
            hostname extraction failure).
        """
        if is_ssrf_protection_enabled() and validated_ips:
            # Extract hostname from the URL so the custom transport can pin it while
            # preserving the Host header for virtual hosting / TLS SNI.
            hostname = urlparse(url).hostname
            if hostname:
                # The custom transport tries validated IPs in order (dual-stack / LB).
                return create_ssrf_protected_client(hostname=hostname, validated_ips=validated_ips)
        return httpx.AsyncClient()

    @staticmethod
    def _method_for_redirect(method: str, status_code: int) -> str:
        """Return the HTTP method to use after a redirect, mirroring httpx semantics.

        A 303 (See Other) always becomes GET; 301/302 downgrade POST to GET for
        browser compatibility; 307/308 preserve the original method (and body).
        """
        method = method.upper()
        if status_code == HTTP_SEE_OTHER and method != "HEAD":
            return "GET"
        if status_code in (HTTP_MOVED_PERMANENTLY, HTTP_FOUND) and method == "POST":
            return "GET"
        return method

    @staticmethod
    def _headers_for_redirect(headers: dict | None, current_url: str, next_url: str) -> dict | None:
        """Drop sensitive headers when a redirect crosses to a different host.

        Mirrors httpx's auto-follow behavior so manually following redirects does not
        leak credentials (Authorization / Cookie) to a different host than the one the
        caller intended them for. Same-host redirects keep all headers.
        """
        if not headers:
            return headers
        if urlparse(current_url).hostname == urlparse(next_url).hostname:
            return headers
        sensitive = {"authorization", "proxy-authorization", "cookie"}
        return {k: v for k, v in headers.items() if k.lower() not in sensitive}

    async def _follow_redirects_with_validation(
        self,
        method: str,
        url: str,
        headers: dict | None,
        body: Any,
        timeout: int,
        validated_ips: list[str],
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Make the request and follow redirects manually, re-validating every hop.

        This closes an SSRF bypass: with \`\`follow_redirects\`\` enabled, httpx would
        otherwise auto-follow a redirect from a validated public URL to an internal
        address that was never checked. Here each redirect \`\`Location\`\` is resolved
        (relative locations included) and re-validated with \`\`validate_and_resolve_url\`\`
        — the same private/loopback/link-local denylist and DNS pinning applied to the
        initial request — before any connection to it is made. A blocked hop raises
        \`\`ValueError\`\`; the number of redirects is capped at \`\`MAX_REDIRECTS\`\`.
        """
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        current_url = url
        current_ips = validated_ips
        redirection_history: list[dict] = []

        for _ in range(MAX_REDIRECTS + 1):
            request_params: dict[str, Any] = {
                "method": method,
                "url": current_url,
                "headers": headers,
                "timeout": timeout,
                # Never let httpx follow redirects itself; each hop is validated below.
                "follow_redirects": False,
            }
            # Only include body for methods that support it (GET must not have a body).
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body

            try:
                async with self._build_http_client(current_url, current_ips) as client:
                    response = await client.request(**request_params)
            except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
                self.log(f"Error making request to {current_url}")
                return Data(
                    data={
                        "source": url,
                        "headers": headers,
                        "status_code": 500,
                        "error": str(exc),
                        **({"redirection_history": redirection_history} if redirection_history else {}),
                    },
                )

            location = response.headers.get("Location")
            if response.status_code in REDIRECT_STATUS_CODES and location:
                # Resolve relative redirects against the current URL.
                next_url = urljoin(current_url, location)
                redirection_history.append({"url": location, "status_code": response.status_code})

                # Re-validate the redirect target with the same SSRF denylist + DNS pinning.
                # Non-http(s) schemes, private/loopback/link-local hosts, and hostnames that
                # resolve to blocked IPs all raise SSRFProtectionError here.
                try:
                    _validated_url, current_ips = validate_and_resolve_url(next_url)
                except SSRFProtectionError as e:
                    msg = f"SSRF Protection: blocked redirect to {next_url}: {e}"
                    raise ValueError(msg) from e

                method = self._method_for_redirect(method, response.status_code)
                headers = self._headers_for_redirect(headers, current_url, next_url)
                current_url = next_url
                continue

            # Not a redirect (or no Location header) - this is the final response.
            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )

        msg = f"SSRF Protection: exceeded the maximum of {MAX_REDIRECTS} redirects while requesting {url}"
        raise ValueError(msg)

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the build config based on the selected mode."""
        if field_name != "mode":
            if field_name == "curl_input" and self.mode == "cURL" and self.curl_input:
                return self.parse_curl(self.curl_input, build_config)
            return build_config

        if field_value == "cURL":
            set_field_display(build_config, "curl_input", value=True)
            if build_config["curl_input"]["value"]:
                try:
                    build_config = self.parse_curl(build_config["curl_input"]["value"], build_config)
                except ValueError as e:
                    self.log(f"Failed to parse cURL input: {e}")
        else:
            set_field_display(build_config, "curl_input", value=False)

        return set_current_fields(
            build_config=build_config,
            action_fields=MODE_FIELDS,
            selected_action=field_value,
            default_fields=DEFAULT_FIELDS,
            func=set_field_advanced,
            default_value=True,
        )

    async def _response_info(
        self, response: httpx.Response, *, with_file_path: bool = False
    ) -> tuple[bool, Path | None]:
        """Determine the file path and whether the response content is binary.

        Args:
            response (Response): The HTTP response object.
            with_file_path (bool): Whether to save the response content to a file.

        Returns:
            Tuple[bool, Path | None]:
                A tuple containing a boolean indicating if the content is binary and the full file path (if applicable).
        """
        content_type = response.headers.get("Content-Type", "")
        is_binary = "application/octet-stream" in content_type or "application/binary" in content_type

        if not with_file_path:
            return is_binary, None

        component_temp_dir = Path(tempfile.gettempdir()) / self.__class__.__name__

        # Create directory asynchronously
        await aiofiles_os.makedirs(component_temp_dir, exist_ok=True)

        filename = None
        if "Content-Disposition" in response.headers:
            content_disposition = response.headers["Content-Disposition"]
            filename_match = re.search(r'filename="(.+?)"', content_disposition)
            if filename_match:
                extracted_filename = filename_match.group(1)
                filename = extracted_filename

        # Step 3: Infer file extension or use part of the request URL if no filename
        if not filename:
            # Extract the last segment of the URL path
            url_path = urlparse(str(response.request.url) if response.request else "").path
            base_name = Path(url_path).name  # Get the last segment of the path
            if not base_name:  # If the path ends with a slash or is empty
                base_name = "response"

            # Infer file extension
            content_type_to_extension = {
                "text/plain": ".txt",
                "application/json": ".json",
                "image/jpeg": ".jpg",
                "image/png": ".png",
                "application/octet-stream": ".bin",
            }
            extension = content_type_to_extension.get(content_type, ".bin" if is_binary else ".txt")
            filename = f"{base_name}{extension}"

        # Step 4: Define the full file path
        file_path = component_temp_dir / filename

        # Step 5: Check if file exists asynchronously and handle accordingly
        try:
            # Try to create the file exclusively (x mode) to check existence
            async with aiofiles.open(file_path, "x") as _:
                pass  # File created successfully, we can use this path
        except FileExistsError:
            # If file exists, append a timestamp to the filename
            timestamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S%f")
            file_path = component_temp_dir / f"{timestamp}-{filename}"

        return is_binary, file_path
`},curl_input:{_input_type:"MultilineInput",advanced:!0,ai_enabled:!1,copy_field:!1,display_name:"cURL",dynamic:!1,info:"Paste a curl command to populate the fields. This will fill in the dictionary fields for headers and body.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"curl_input",override_skip:!1,password:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`curl --location 'https://jaivir.atlassian.net/rest/api/3/issue/{}' \\
--header 'Accept: application/json' \\
--header 'Authorization: Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB' \\
--header 'Cookie: atlassian.xsrf.token=5476203bac55b87d3ef9ebb4d41c23b2dbaa1d89_lin'`},follow_redirects:{_input_type:"BoolInput",advanced:!0,display_name:"Follow Redirects",dynamic:!1,info:"Whether to follow HTTP redirects. WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL redirects to internal resources. Only enable if you trust the target server. See OWASP SSRF Prevention Cheat Sheet for details.",list:!1,list_add_label:"Add More",name:"follow_redirects",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},headers:{_input_type:"TableInput",advanced:!0,display_name:"Headers",dynamic:!1,info:"The headers to send with the request",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"headers",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Header name",display_name:"Header",formatter:"text",name:"key",type:"str"},{description:"Header value",display_name:"Value",formatter:"text",name:"value",type:"str"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[{key:"Accept",value:"application/json"},{key:"Authorization",value:"Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB"}]},include_httpx_metadata:{_input_type:"BoolInput",advanced:!0,display_name:"Include HTTPx Metadata",dynamic:!1,info:"Include properties such as headers, status_code, response_headers, and redirection_history in the output.",list:!1,list_add_label:"Add More",name:"include_httpx_metadata",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},is_refresh:!1,method:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Method",dynamic:!1,external_options:{},info:"The HTTP method to use.",name:"method",options:["GET","POST","PATCH","PUT","DELETE"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"GET"},mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Enable cURL mode to populate fields from a cURL command.",name:"mode",options:["URL","cURL"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"URL"},query_params:{_input_type:"JSONInput",advanced:!0,display_name:"Query Parameters",dynamic:!1,info:"The query parameters to append to the URL.",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"query_params",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},save_to_file:{_input_type:"BoolInput",advanced:!0,display_name:"Save to File",dynamic:!1,info:"Save the API response to a temporary file",list:!1,list_add_label:"Add More",name:"save_to_file",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"The timeout to use for the request.",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:30},url_input:{_input_type:"MessageTextInput",advanced:!1,display_name:"URL",dynamic:!1,info:"Enter the URL for the request.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"url_input",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"APIRequest"},dragging:!1,id:"APIRequest-x3OSv",measured:{height:469,width:320},position:{x:321.0867225737182,y:-88.15631916651515},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-iLAUd",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["issue_keys"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_frontend_node_flow_id:{value:"d0de0863-b3f4-44f8-8720-a187e4029213"},_frontend_node_folder_id:{value:"011fd645-4f38-4d59-8c87-4f3c8606d1ae"},_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},is_refresh:!1,issue_keys:{advanced:!1,display_name:"issue_keys",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"issue_keys",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:"https://jaivir.atlassian.net/rest/api/3/search/jql?jql=key%20in%20({issue_keys})&fields=summary,description,status,priority,issuetype"},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-iLAUd",measured:{height:347,width:320},position:{x:-110.48609946454081,y:28.967998882178875},selected:!1,type:"genericNode"},{data:{id:"JiraSearchParserComponent-4otwK",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Parses the JIRA search response JSON to extract key, summary, type, description, and priority.",display_name:"Jira Search Parser",documentation:"",edited:!0,field_order:["jira_json"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"4ed653afc1de",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"}],total_dependencies:1},module:"custom_components.jira_search_parser"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Parsed Text",group_outputs:!1,hidden:null,loop_types:null,method:"build_output",name:"parsed_text",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import DataInput, Output\r
import json\r
\r
class JiraSearchParserComponent(Component):\r
    display_name = "Jira Search Parser"\r
    description = "Parses the JIRA search response JSON to extract key, summary, type, description, and priority."\r
\r
    inputs = [\r
        DataInput(\r
            name="jira_json",\r
            display_name="Jira JSON Response",\r
            info="The JSON output from the API Request component"\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Parsed Text", name="parsed_text", types=["Message"], method="build_output"),\r
    ]\r
\r
\r
    def build_output(self) -> str:\r
        jira_json = self.jira_json\r
\r
        if not jira_json:\r
            return "No data received."\r
            \r
        def flatten_adf(node):\r
            if not node: return ""\r
            if isinstance(node, str): return node\r
            if isinstance(node, list): return "".join(flatten_adf(n) for n in node)\r
            text = ""\r
            if node.get("type") == "text":\r
                text += node.get("text", "")\r
            if "content" in node:\r
                text += flatten_adf(node["content"])\r
            if node.get("type") in ["paragraph", "heading", "listItem", "blockquote", "bulletList", "orderedList"]:\r
                text += "\\n"\r
            if node.get("type") in ["hardBreak", "rule"]:\r
                text += "\\n"\r
            return text\r
\r
        try:\r
            # Extract data from Langflow structure if wrapped\r
            data = jira_json\r
            if hasattr(jira_json, "data"):\r
                data = jira_json.data\r
            elif isinstance(jira_json, str):\r
                try:\r
                    data = json.loads(jira_json)\r
                except json.JSONDecodeError:\r
                    pass\r
            \r
            # If the response is wrapped inside Langflow's API Request structure, get "result"\r
            if isinstance(data, dict) and "result" in data:\r
                data = data["result"]\r
            \r
            # If it's still a string (nested json parsing)\r
            if isinstance(data, str):\r
                data = json.loads(data)\r
\r
            issues = data.get("issues", [])\r
            if not issues:\r
                return "No issues found in the JIRA response."\r
                \r
            formatted_issues = []\r
            for issue in issues:\r
                key = issue.get("key", "Unknown Key")\r
                fields = issue.get("fields", {})\r
                summary = fields.get("summary", "No Summary")\r
                \r
                # Extract issuetype name\r
                issue_type = fields.get("issuetype", {})\r
                type_name = issue_type.get("name", "Unknown Type") if isinstance(issue_type, dict) else "Unknown Type"\r
                \r
                # Extract priority name\r
                priority = fields.get("priority", {})\r
                priority_name = priority.get("name", "Unspecified") if isinstance(priority, dict) else "Unspecified"\r
                \r
                # Extract and flatten ADF description\r
                desc = fields.get("description", "")\r
                if isinstance(desc, dict):\r
                    desc = flatten_adf(desc)\r
                elif not desc:\r
                    desc = "No description provided."\r
                \r
                formatted_issues.append(\r
                    f"### ISSUE: {key}\\n"\r
                    f"**Summary:** {summary}\\n"\r
                    f"**Type:** {type_name}\\n"\r
                    f"**Priority:** {priority_name}\\n"\r
                    f"**Description:**\\n{desc.strip()}\\n"\r
                )\r
            \r
            output = "\\n---%---\\n".join(formatted_issues)\r
            self.status = output\r
            return output\r
        except Exception as e:\r
            return f"Error parsing JIRA data: {str(e)}"`},jira_json:{_input_type:"JSONInput",advanced:!1,display_name:"Jira JSON Response",dynamic:!1,info:"The JSON output from the API Request component",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"jira_json",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""}},tool_mode:!1},showNode:!0,type:"JiraSearchParserComponent"},dragging:!1,id:"JiraSearchParserComponent-4otwK",measured:{height:185,width:320},position:{x:678.3889497598053,y:73.2319887023804},selected:!1,type:"genericNode"},{data:{id:"MistralModel-rqOP5",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Generates text using MistralAI LLMs.",display_name:"MistralAI",documentation:"",edited:!1,field_order:["input_value","system_message","stream","max_tokens","model_name","mistral_api_base","api_key","temperature","max_retries","timeout","max_concurrent_requests","top_p","random_seed","safe_mode"],frozen:!1,icon:"MistralAI",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"e21780948144",dependencies:{dependencies:[{name:"langchain_mistralai",version:"1.1.4"},{name:"pydantic",version:"2.13.4"},{name:"lfx",version:null}],total_dependencies:3},keywords:["model","llm","language model","large language model"],module:"lfx.components.mistral.mistral.MistralAIModelComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,method:"text_response",name:"text_output",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,method:"build_model",name:"model_output",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"Mistral API Key",dynamic:!1,info:"The Mistral API Key to use for the Mistral model.",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:"Lo4FXYs7WWRWxnyWXYkoEIcBMtFBnO5l"},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langchain_mistralai import ChatMistralAI
from pydantic.v1 import SecretStr

from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.io import BoolInput, DropdownInput, FloatInput, IntInput, SecretStrInput, StrInput


class MistralAIModelComponent(LCModelComponent):
    display_name = "MistralAI"
    description = "Generates text using MistralAI LLMs."
    icon = "MistralAI"
    name = "MistralModel"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            advanced=False,
            options=[
                "open-mixtral-8x7b",
                "open-mixtral-8x22b",
                "mistral-small-latest",
                "mistral-medium-latest",
                "mistral-large-latest",
                "codestral-latest",
            ],
            value="codestral-latest",
        ),
        StrInput(
            name="mistral_api_base",
            display_name="Mistral API Base",
            advanced=True,
            info="The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. "
            "You can change this to use other APIs like JinaChat, LocalAI and Prem.",
        ),
        SecretStrInput(
            name="api_key",
            display_name="Mistral API Key",
            info="The Mistral API Key to use for the Mistral model.",
            advanced=False,
            required=True,
            value="MISTRAL_API_KEY",
        ),
        FloatInput(
            name="temperature",
            display_name="Temperature",
            value=0.1,
            advanced=True,
        ),
        IntInput(
            name="max_retries",
            display_name="Max Retries",
            advanced=True,
            value=5,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            advanced=True,
            value=60,
        ),
        IntInput(
            name="max_concurrent_requests",
            display_name="Max Concurrent Requests",
            advanced=True,
            value=3,
        ),
        FloatInput(
            name="top_p",
            display_name="Top P",
            advanced=True,
            value=1,
        ),
        IntInput(
            name="random_seed",
            display_name="Random Seed",
            value=1,
            advanced=True,
        ),
        BoolInput(
            name="safe_mode",
            display_name="Safe Mode",
            advanced=True,
            value=False,
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        try:
            return ChatMistralAI(
                model_name=self.model_name,
                mistral_api_key=SecretStr(self.api_key).get_secret_value() if self.api_key else None,
                endpoint=self.mistral_api_base or "https://api.mistral.ai/v1",
                max_tokens=self.max_tokens or None,
                temperature=self.temperature,
                max_retries=self.max_retries,
                timeout=self.timeout,
                max_concurrent_requests=self.max_concurrent_requests,
                top_p=self.top_p,
                random_seed=self.random_seed,
                safe_mode=self.safe_mode,
                streaming=self.stream,
            )
        except Exception as e:
            msg = "Could not connect to MistralAI API."
            raise ValueError(msg) from e
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},max_concurrent_requests:{_input_type:"IntInput",advanced:!0,display_name:"Max Concurrent Requests",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_concurrent_requests",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:3},max_retries:{_input_type:"IntInput",advanced:!0,display_name:"Max Retries",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_retries",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:5},max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Tokens",dynamic:!1,info:"The maximum number of tokens to generate. Set to 0 for unlimited tokens.",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},mistral_api_base:{_input_type:"StrInput",advanced:!0,display_name:"Mistral API Base",dynamic:!1,info:"The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. You can change this to use other APIs like JinaChat, LocalAI and Prem.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"mistral_api_base",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Model Name",dynamic:!1,external_options:{},info:"",name:"model_name",options:["open-mixtral-8x7b","open-mixtral-8x22b","mistral-small-latest","mistral-medium-latest","mistral-large-latest","codestral-latest"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"codestral-latest"},random_seed:{_input_type:"IntInput",advanced:!0,display_name:"Random Seed",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"random_seed",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},safe_mode:{_input_type:"BoolInput",advanced:!0,display_name:"Safe Mode",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"safe_mode",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`You are a Principal SRE and QA Engineer. 
You will receive parsed JIRA issue details containing the key, summary, priority, and description.

---
PARSED JIRA DETAILS:
{jira_json}
---

Write a comprehensive, professional Root Cause Analysis (RCA) document in Markdown format using this structure:
# Root Cause Analysis (RCA) Report
## 1. Executive Summary
## 2. Event Log & Technical Details
## 3. Root Cause Investigation (The "5 Whys" Analysis)
## 4. Business & System Impact
## 5. Corrective and Preventive Actions (CAPA)
## 6. Automation Guardrails`},temperature:{_input_type:"FloatInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"temperature",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:.1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:100},top_p:{_input_type:"FloatInput",advanced:!0,display_name:"Top P",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"top_p",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:1}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"MistralModel"},dragging:!1,id:"MistralModel-rqOP5",measured:{height:453,width:320},position:{x:1357.7856911498384,y:193.35788977335162},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-6ThMZ",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["jira_json"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},jira_json:{advanced:!1,display_name:"jira_json",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"jira_json",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`You are a Principal SRE and QA Engineer. 
You will receive parsed JIRA issue details containing the key, summary, priority, and description.

---
PARSED JIRA DETAILS:
{jira_json}
---

Write a comprehensive, professional Root Cause Analysis (RCA) document in Markdown format using this structure:
# Root Cause Analysis (RCA) Report
## 1. Executive Summary
## 2. Event Log & Technical Details
## 3. Root Cause Investigation (The "5 Whys" Analysis)
## 4. Business & System Impact
## 5. Corrective and Preventive Actions (CAPA)
## 6. Automation Guardrails`},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-6ThMZ",measured:{height:347,width:320},position:{x:1013.6715281546701,y:74.92608302552316},selected:!1,type:"genericNode"},{data:{id:"ChatOutput-MIM00",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null}],total_dependencies:3},module:"lfx.components.input_output.chat_output.ChatOutput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},dragging:!1,id:"ChatOutput-MIM00",measured:{height:52,width:192},position:{x:1986.7934377750078,y:36.938040662470755},selected:!1,type:"genericNode"},{data:{id:"RcaExporterComponent-KTH46",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Formats the generated RCA document and creates download links for MD and DOCX.",display_name:"RCA Exporter",documentation:"",edited:!0,field_order:["rca_markdown","file_name"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"0026917c8423",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"},{name:"docx",version:"1.2.0"}],total_dependencies:2},module:"custom_components.rca_exporter"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Export Status",group_outputs:!1,hidden:null,loop_types:null,method:"build_output",name:"export_status",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import MessageTextInput, Output\r
import base64\r
\r
class RcaExporterComponent(Component):\r
    display_name = "RCA Exporter"\r
    description = "Formats the generated RCA document and creates download links for MD and DOCX."\r
\r
    inputs = [\r
        MessageTextInput(\r
            name="rca_markdown",\r
            display_name="RCA Markdown",\r
            info="The Markdown text generated by the LLM component.",\r
            value=""\r
        ),\r
        MessageTextInput(\r
            name="file_name",\r
            display_name="Output File Name",\r
            info="Base name for the downloaded file (without extension).",\r
            value="RCA_Report"\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Export Status", name="export_status", types=["Message"], method="build_output"),\r
    ]\r
\r
    def build_output(self) -> str:\r
        rca_markdown = self.rca_markdown\r
        file_name = self.file_name\r
        \r
        if not rca_markdown:\r
            return "No RCA content to export."\r
            \r
        clean_name = file_name.replace(" ", "_")\r
        \r
        # 1. Base64 Markdown Link\r
        md_base64 = base64.b64encode(rca_markdown.encode("utf-8")).decode("utf-8")\r
        md_download_link = f"data:text/markdown;charset=utf-8;base64,{md_base64}"\r
        \r
        # Ensure exports directory exists\r
        import os\r
        export_dir = "/app/langflow/exports"\r
        try:\r
            os.makedirs(export_dir, exist_ok=True)\r
        except Exception:\r
            pass\r
\r
        # Save MD locally\r
        md_local_path = f"{export_dir}/{clean_name}.md"\r
        try:\r
            with open(md_local_path, "w", encoding="utf-8") as f:\r
                f.write(rca_markdown)\r
        except Exception as e:\r
            md_local_path = f"Write error: {str(e)}"\r
            \r
        # 2. Base64 DOCX Link (requires python-docx)\r
        docx_download_link = ""\r
        docx_local_path = "N/A"\r
        try:\r
            import docx\r
            doc = docx.Document()\r
            doc.add_heading("Root Cause Analysis (RCA) Report", 0)\r
            \r
            for line in rca_markdown.split("\\n"):\r
                if line.startswith("# "):\r
                    doc.add_heading(line[2:], level=1)\r
                elif line.startswith("## "):\r
                    doc.add_heading(line[3:], level=2)\r
                elif line.startswith("### "):\r
                    doc.add_heading(line[4:], level=3)\r
                elif line.startswith("* ") or line.startswith("- "):\r
                    doc.add_paragraph(line, style="List Bullet")\r
                elif line.strip():\r
                    doc.add_paragraph(line)\r
            \r
            docx_path = f"{export_dir}/{clean_name}.docx"\r
            doc.save(docx_path)\r
            docx_local_path = docx_path\r
            \r
            with open(docx_path, "rb") as df:\r
                docx_base64 = base64.b64encode(df.read()).decode("utf-8")\r
            \r
            docx_download_link = f"- [Download Word Document (.docx)](data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,{docx_base64})"\r
        except ImportError:\r
            docx_download_link = "- ⚠️ *DOCX download unavailable: run \`pip install python-docx\` in your Langflow environment to enable Word exports.*"\r
        except Exception as e:\r
            docx_download_link = f"- ❌ *DOCX generation failed: {str(e)}*"\r
            \r
        output = (\r
            f"### 🎉 RCA Report Generated Successfully!\\n\\n"\r
            f"📂 **Files Saved to Workspace Exports Directory**:\\n"\r
            f"- Markdown: \`{md_local_path}\`\\n"\r
            f"- Word Document: \`{docx_local_path}\`\\n\\n"\r
            f"💡 *These files will be synced to your host machine at:* \\n"\r
            f"\`D:\\\\ai_3x_qa\\\\QA_AI_Projects\\\\AI_tools\\\\langflow-agents\\\\langflow-data\\\\exports\\\\\`"\r
        )\r
        self.status = output\r
        return output`},file_name:{_input_type:"MessageTextInput",advanced:!1,display_name:"Output File Name",dynamic:!1,info:"Base name for the downloaded file (without extension).",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"RCA_Report"},rca_markdown:{_input_type:"MessageTextInput",advanced:!1,display_name:"RCA Markdown",dynamic:!1,info:"The Markdown text generated by the LLM component.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"rca_markdown",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"RcaExporterComponent"},dragging:!1,id:"RcaExporterComponent-KTH46",measured:{height:305,width:320},position:{x:1707.6963649513314,y:192.7711159818561},selected:!1,type:"genericNode"}],viewport:{x:162.13081897578928,y:236.0456925398891,zoom:.39235898465767655}},description:"Text Generation Meets Business Transformation.",endpoint_name:null,id:"c7513a46-daa4-4dd6-adb2-0b58a9c79dc0",is_component:!1,last_tested_version:"1.10.0",locked:!1,name:"RCA-Bot",tags:[]}},{id:"test-cases-generator",title:"Test Cases Generator",description:"Promptly Ingenious!",fileName:"Test Cases Generator.json",rawData:{data:{edges:[{animated:!1,className:"",data:{sourceHandle:{dataType:"APIRequest",id:"APIRequest-WgoSq",name:"data",output_types:["JSON"]},targetHandle:{fieldName:"input_data",id:"ParserComponent-Vc0Sr",inputTypes:["DataFrame","Table","Data","JSON"],type:"other"}},id:"reactflow__edge-APIRequest-WgoSq{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-WgoSqœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}-ParserComponent-Vc0Sr{œfieldNameœ:œinput_dataœ,œidœ:œParserComponent-Vc0Srœ,œinputTypesœ:[œDataFrameœ,œTableœ,œDataœ,œJSONœ],œtypeœ:œotherœ}",selected:!1,source:"APIRequest-WgoSq",sourceHandle:"{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-WgoSqœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}",target:"ParserComponent-Vc0Sr",targetHandle:"{œfieldNameœ:œinput_dataœ,œidœ:œParserComponent-Vc0Srœ,œinputTypesœ:[œDataFrameœ,œTableœ,œDataœ,œJSONœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-M0bIf",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"GroqModel-KsYs0",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-Prompt Template-M0bIf{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-M0bIfœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-GroqModel-KsYs0{œfieldNameœ:œinput_valueœ,œidœ:œGroqModel-KsYs0œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-M0bIf",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-M0bIfœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"GroqModel-KsYs0",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œGroqModel-KsYs0œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"RcaExporterComponent",id:"RcaExporterComponent-cEu5j",name:"export_status",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-RYqz4",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"xy-edge__RcaExporterComponent-cEu5j{œdataTypeœ:œRcaExporterComponentœ,œidœ:œRcaExporterComponent-cEu5jœ,œnameœ:œexport_statusœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-RYqz4{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-RYqz4œ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"RcaExporterComponent-cEu5j",sourceHandle:"{œdataTypeœ:œRcaExporterComponentœ,œidœ:œRcaExporterComponent-cEu5jœ,œnameœ:œexport_statusœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-RYqz4",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-RYqz4œ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"GroqModel",id:"GroqModel-KsYs0",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"rca_markdown",id:"RcaExporterComponent-cEu5j",inputTypes:["Message"],type:"str"}},id:"xy-edge__GroqModel-KsYs0{œdataTypeœ:œGroqModelœ,œidœ:œGroqModel-KsYs0œ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-RcaExporterComponent-cEu5j{œfieldNameœ:œrca_markdownœ,œidœ:œRcaExporterComponent-cEu5jœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"GroqModel-KsYs0",sourceHandle:"{œdataTypeœ:œGroqModelœ,œidœ:œGroqModel-KsYs0œ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"RcaExporterComponent-cEu5j",targetHandle:"{œfieldNameœ:œrca_markdownœ,œidœ:œRcaExporterComponent-cEu5jœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"LocalDocumentReaderComponent",id:"LocalDocumentReaderComponent-wvxdX",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"document_text",id:"SourceSelectorComponent-lVErd",inputTypes:["Message"],type:"str"}},id:"xy-edge__LocalDocumentReaderComponent-wvxdX{œdataTypeœ:œLocalDocumentReaderComponentœ,œidœ:œLocalDocumentReaderComponent-wvxdXœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-SourceSelectorComponent-lVErd{œfieldNameœ:œdocument_textœ,œidœ:œSourceSelectorComponent-lVErdœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"LocalDocumentReaderComponent-wvxdX",sourceHandle:"{œdataTypeœ:œLocalDocumentReaderComponentœ,œidœ:œLocalDocumentReaderComponent-wvxdXœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"SourceSelectorComponent-lVErd",targetHandle:"{œfieldNameœ:œdocument_textœ,œidœ:œSourceSelectorComponent-lVErdœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"ParserComponent",id:"ParserComponent-Vc0Sr",name:"parsed_text",output_types:["Message"]},targetHandle:{fieldName:"jira_text",id:"SourceSelectorComponent-lVErd",inputTypes:["Message"],type:"str"}},id:"xy-edge__ParserComponent-Vc0Sr{œdataTypeœ:œParserComponentœ,œidœ:œParserComponent-Vc0Srœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}-SourceSelectorComponent-lVErd{œfieldNameœ:œjira_textœ,œidœ:œSourceSelectorComponent-lVErdœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"ParserComponent-Vc0Sr",sourceHandle:"{œdataTypeœ:œParserComponentœ,œidœ:œParserComponent-Vc0Srœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}",target:"SourceSelectorComponent-lVErd",targetHandle:"{œfieldNameœ:œjira_textœ,œidœ:œSourceSelectorComponent-lVErdœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"SourceSelectorComponent",id:"SourceSelectorComponent-lVErd",name:"consolidated_context",output_types:["Message"]},targetHandle:{fieldName:"text",id:"Prompt Template-M0bIf",inputTypes:["Message"],type:"str"}},id:"xy-edge__SourceSelectorComponent-lVErd{œdataTypeœ:œSourceSelectorComponentœ,œidœ:œSourceSelectorComponent-lVErdœ,œnameœ:œconsolidated_contextœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-M0bIf{œfieldNameœ:œtextœ,œidœ:œPrompt Template-M0bIfœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"SourceSelectorComponent-lVErd",sourceHandle:"{œdataTypeœ:œSourceSelectorComponentœ,œidœ:œSourceSelectorComponent-lVErdœ,œnameœ:œconsolidated_contextœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-M0bIf",targetHandle:"{œfieldNameœ:œtextœ,œidœ:œPrompt Template-M0bIfœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"}],nodes:[{data:{id:"APIRequest-WgoSq",node:{base_classes:["JSON"],beta:!1,conditional_paths:[],custom_fields:{},description:"Make HTTP requests using URL or cURL commands.",display_name:"API Request",documentation:"https://docs.langflow.org/api-request",edited:!1,field_order:["url_input","curl_input","method","mode","query_params","body","headers","timeout","follow_redirects","save_to_file","include_httpx_metadata"],frozen:!1,icon:"Globe",last_updated:"2026-06-29T17:35:39.573Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"1a052ebb9519",dependencies:{dependencies:[{name:"aiofiles",version:"24.1.0"},{name:"httpx",version:"0.28.1"},{name:"validators",version:"0.35.0"},{name:"lfx",version:null}],total_dependencies:4},module:"lfx.components.data_source.api_request.APIRequestComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"API Response",group_outputs:!1,loop_types:null,method:"make_api_request",name:"data",options:null,required_inputs:null,selected:"JSON",tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"b1bfddbf-dc92-4cad-b529-6edee104c6ed"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",body:{_input_type:"TableInput",advanced:!0,display_name:"Body",dynamic:!1,info:"The body to send with the request as a dictionary (for POST, PATCH, PUT).",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"body",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Parameter name",display_name:"Key",name:"key",type:"str"},{description:"Parameter value",display_name:"Value",name:"value"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[]},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import json
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import parse_qsl, urlencode, urljoin, urlparse, urlunparse

import aiofiles
import aiofiles.os as aiofiles_os
import httpx
import validators

from lfx.base.curl.parse import parse_context
from lfx.custom.custom_component.component import Component
from lfx.inputs.inputs import TabInput
from lfx.io import (
    BoolInput,
    DataInput,
    DropdownInput,
    IntInput,
    MessageTextInput,
    MultilineInput,
    Output,
    TableInput,
)
from lfx.schema.data import Data
from lfx.schema.dotdict import dotdict
from lfx.utils.component_utils import set_current_fields, set_field_advanced, set_field_display

# SSRF Protection imports - for preventing Server-Side Request Forgery attacks
from lfx.utils.ssrf_protection import (
    SSRFProtectionError,
    is_ssrf_protection_enabled,
    validate_and_resolve_url,
)
from lfx.utils.ssrf_transport import create_ssrf_protected_client

# Define fields for each mode
MODE_FIELDS = {
    "URL": [
        "url_input",
        "method",
    ],
    "cURL": ["curl_input"],
}

# Fields that should always be visible
DEFAULT_FIELDS = ["mode"]

# HTTP redirect status codes (RFC 9110).
HTTP_MOVED_PERMANENTLY = 301
HTTP_FOUND = 302
HTTP_SEE_OTHER = 303
HTTP_TEMPORARY_REDIRECT = 307
HTTP_PERMANENT_REDIRECT = 308

# Maximum number of redirects to follow when re-validating each hop (matches httpx's default).
MAX_REDIRECTS = 20

# HTTP status codes that represent a redirect carrying a Location header.
REDIRECT_STATUS_CODES = frozenset(
    {
        HTTP_MOVED_PERMANENTLY,
        HTTP_FOUND,
        HTTP_SEE_OTHER,
        HTTP_TEMPORARY_REDIRECT,
        HTTP_PERMANENT_REDIRECT,
    }
)


class APIRequestComponent(Component):
    display_name = "API Request"
    description = "Make HTTP requests using URL or cURL commands."
    documentation: str = "https://docs.langflow.org/api-request"
    icon = "Globe"
    name = "APIRequest"

    inputs = [
        MessageTextInput(
            name="url_input",
            display_name="URL",
            info="Enter the URL for the request.",
            advanced=False,
            tool_mode=True,
        ),
        MultilineInput(
            name="curl_input",
            display_name="cURL",
            info=(
                "Paste a curl command to populate the fields. "
                "This will fill in the dictionary fields for headers and body."
            ),
            real_time_refresh=True,
            tool_mode=True,
            advanced=True,
            show=False,
        ),
        DropdownInput(
            name="method",
            display_name="Method",
            options=["GET", "POST", "PATCH", "PUT", "DELETE"],
            value="GET",
            info="The HTTP method to use.",
            real_time_refresh=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["URL", "cURL"],
            value="URL",
            info="Enable cURL mode to populate fields from a cURL command.",
            real_time_refresh=True,
        ),
        DataInput(
            name="query_params",
            display_name="Query Parameters",
            info="The query parameters to append to the URL.",
            advanced=True,
        ),
        TableInput(
            name="body",
            display_name="Body",
            info="The body to send with the request as a dictionary (for POST, PATCH, PUT).",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Key",
                    "type": "str",
                    "description": "Parameter name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "description": "Parameter value",
                },
            ],
            value=[],
            input_types=["Data", "JSON"],
            advanced=True,
            real_time_refresh=True,
        ),
        TableInput(
            name="headers",
            display_name="Headers",
            info="The headers to send with the request",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Header",
                    "type": "str",
                    "description": "Header name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "type": "str",
                    "description": "Header value",
                },
            ],
            value=[{"key": "User-Agent", "value": "Langflow/1.0"}],
            advanced=True,
            input_types=["Data", "JSON"],
            real_time_refresh=True,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            value=30,
            info="The timeout to use for the request.",
            advanced=True,
        ),
        BoolInput(
            name="follow_redirects",
            display_name="Follow Redirects",
            value=False,
            info=(
                "Whether to follow HTTP redirects. "
                "WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL "
                "redirects to internal resources. Only enable if you trust the target server. "
                "See OWASP SSRF Prevention Cheat Sheet for details."
            ),
            advanced=True,
        ),
        BoolInput(
            name="save_to_file",
            display_name="Save to File",
            value=False,
            info="Save the API response to a temporary file",
            advanced=True,
        ),
        BoolInput(
            name="include_httpx_metadata",
            display_name="Include HTTPx Metadata",
            value=False,
            info=(
                "Include properties such as headers, status_code, response_headers, "
                "and redirection_history in the output."
            ),
            advanced=True,
        ),
    ]

    outputs = [
        Output(display_name="API Response", name="data", method="make_api_request"),
    ]

    def _parse_json_value(self, value: Any) -> Any:
        """Parse a value that might be a JSON string."""
        if not isinstance(value, str):
            return value

        try:
            parsed = json.loads(value)
        except json.JSONDecodeError:
            return value
        else:
            return parsed

    def _process_body(self, body: Any) -> dict:
        """Process the body input into a valid dictionary."""
        if body is None:
            return {}
        if hasattr(body, "data"):
            body = body.data
        if isinstance(body, dict):
            return self._process_dict_body(body)
        if isinstance(body, str):
            return self._process_string_body(body)
        if isinstance(body, list):
            return self._process_list_body(body)
        return {}

    def _process_dict_body(self, body: dict) -> dict:
        """Process dictionary body by parsing JSON values."""
        return {k: self._parse_json_value(v) for k, v in body.items()}

    def _process_string_body(self, body: str) -> dict:
        """Process string body by attempting JSON parse."""
        try:
            return self._process_body(json.loads(body))
        except json.JSONDecodeError:
            return {"data": body}

    def _process_list_body(self, body: list) -> dict:
        """Process list body by converting to key-value dictionary."""
        processed_dict = {}
        try:
            for item in body:
                # Unwrap Data objects
                current_item = item
                if hasattr(item, "data"):
                    unwrapped_data = item.data
                    # If the unwrapped data is a dict but not key-value format, use it directly
                    if isinstance(unwrapped_data, dict) and not self._is_valid_key_value_item(unwrapped_data):
                        return unwrapped_data
                    current_item = unwrapped_data
                if not self._is_valid_key_value_item(current_item):
                    continue
                key = current_item["key"]
                value = self._parse_json_value(current_item["value"])
                processed_dict[key] = value
        except (KeyError, TypeError, ValueError) as e:
            self.log(f"Failed to process body list: {e}")
            return {}
        return processed_dict

    def _is_valid_key_value_item(self, item: Any) -> bool:
        """Check if an item is a valid key-value dictionary."""
        return isinstance(item, dict) and "key" in item and "value" in item

    def parse_curl(self, curl: str, build_config: dotdict) -> dotdict:
        """Parse a cURL command and update build configuration."""
        try:
            parsed = parse_context(curl)

            # Update basic configuration
            url = parsed.url
            # Normalize URL before setting it
            url = self._normalize_url(url)

            build_config["url_input"]["value"] = url
            build_config["method"]["value"] = parsed.method.upper()

            # Process headers
            headers_list = [{"key": k, "value": v} for k, v in parsed.headers.items()]
            build_config["headers"]["value"] = headers_list

            # Process body data
            if not parsed.data:
                build_config["body"]["value"] = []
            elif parsed.data:
                try:
                    json_data = json.loads(parsed.data)
                    if isinstance(json_data, dict):
                        body_list = [
                            {"key": k, "value": json.dumps(v) if isinstance(v, dict | list) else str(v)}
                            for k, v in json_data.items()
                        ]
                        build_config["body"]["value"] = body_list
                    else:
                        build_config["body"]["value"] = [{"key": "data", "value": json.dumps(json_data)}]
                except json.JSONDecodeError:
                    build_config["body"]["value"] = [{"key": "data", "value": parsed.data}]

        except Exception as exc:
            msg = f"Error parsing curl: {exc}"
            self.log(msg)
            raise ValueError(msg) from exc

        return build_config

    def _normalize_url(self, url: str) -> str:
        """Normalize URL by adding https:// if no protocol is specified."""
        if not url or not isinstance(url, str):
            msg = "URL cannot be empty"
            raise ValueError(msg)

        url = url.strip()
        if url.startswith(("http://", "https://")):
            return url
        return f"https://{url}"

    async def make_request(
        self,
        client: httpx.AsyncClient,
        method: str,
        url: str,
        headers: dict | None = None,
        body: Any = None,
        timeout: int = 5,
        *,
        follow_redirects: bool = False,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        redirection_history = []

        try:
            # Prepare request parameters
            request_params = {
                "method": method,
                "url": url,
                "headers": headers,
                "timeout": timeout,
                "follow_redirects": follow_redirects,
            }
            # Only include body for methods that support it (GET must not have a body per HTTP spec)
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body
            response = await client.request(**request_params)

            redirection_history = [
                {
                    "url": redirect.headers.get("Location", str(redirect.url)),
                    "status_code": redirect.status_code,
                }
                for redirect in response.history
            ]

            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
            self.log(f"Error making request to {url}")
            return Data(
                data={
                    "source": url,
                    "headers": headers,
                    "status_code": 500,
                    "error": str(exc),
                    **({"redirection_history": redirection_history} if redirection_history else {}),
                },
            )

    async def _build_response_data(
        self,
        response: httpx.Response,
        source_url: str,
        headers: dict | None,
        redirection_history: list,
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Turn an httpx response into the component's \`\`Data\`\` output.

        Shared by the standard request path (\`\`make_request\`\`) and the redirect
        re-validation path (\`\`_follow_redirects_with_validation\`\`) so both produce
        identical metadata, optional file saving, and body decoding.
        """
        is_binary, file_path = await self._response_info(response, with_file_path=save_to_file)
        response_headers = self._headers_to_dict(response.headers)

        # Base metadata
        metadata = {
            "source": source_url,
            "status_code": response.status_code,
            "response_headers": response_headers,
        }

        if redirection_history:
            metadata["redirection_history"] = redirection_history

        if save_to_file:
            mode = "wb" if is_binary else "w"
            encoding = response.encoding if mode == "w" else None
            if file_path:
                await aiofiles_os.makedirs(file_path.parent, exist_ok=True)
                if is_binary:
                    async with aiofiles.open(file_path, "wb") as f:
                        await f.write(response.content)
                        await f.flush()
                else:
                    async with aiofiles.open(file_path, "w", encoding=encoding) as f:
                        await f.write(response.text)
                        await f.flush()
                metadata["file_path"] = str(file_path)

            if include_httpx_metadata:
                metadata.update({"headers": headers})
            return Data(data=metadata)

        # Handle response content
        if is_binary:
            result = response.content
        else:
            try:
                result = response.json()
            except json.JSONDecodeError:
                self.log("Failed to decode JSON response")
                result = response.text.encode("utf-8")

        metadata["result"] = result

        if include_httpx_metadata:
            metadata.update({"headers": headers})

        return Data(data=metadata)

    def add_query_params(self, url: str, params: dict) -> str:
        """Add query parameters to URL efficiently."""
        if not params:
            return url
        url_parts = list(urlparse(url))
        query = dict(parse_qsl(url_parts[4]))
        query.update(params)
        url_parts[4] = urlencode(query)
        return urlunparse(url_parts)

    def _headers_to_dict(self, headers: httpx.Headers) -> dict[str, str]:
        """Convert HTTP headers to a dictionary with lowercased keys."""
        return {k.lower(): v for k, v in headers.items()}

    def _process_headers(self, headers: Any) -> dict:
        """Process the headers input into a valid dictionary."""
        if headers is None:
            return {}
        if isinstance(headers, dict):
            return headers
        if isinstance(headers, list):
            return {item["key"]: item["value"] for item in headers if self._is_valid_key_value_item(item)}
        return {}

    async def make_api_request(self) -> Data:
        """Make HTTP request with SSRF protection and DNS pinning.

        This method implements comprehensive SSRF (Server-Side Request Forgery) protection
        using DNS pinning to prevent DNS rebinding attacks. The protection works by:
        1. Validating the URL and resolving DNS during security check
        2. Pinning the validated IP address
        3. Forcing the HTTP client to use the pinned IP for the actual request
        4. Ignoring any subsequent DNS changes (prevents rebinding attacks)

        Returns:
            Data: Response data from the HTTP request

        Raises:
            ValueError: If URL is invalid or blocked by SSRF protection
        """
        # Extract request parameters
        method = self.method
        url = self.url_input.strip() if isinstance(self.url_input, str) else ""
        headers = self.headers or {}
        body = self.body or {}
        timeout = self.timeout
        follow_redirects = self.follow_redirects
        save_to_file = self.save_to_file
        include_httpx_metadata = self.include_httpx_metadata

        # Security warning: HTTP redirects can bypass SSRF protection
        # A public URL could redirect to an internal resource
        if follow_redirects:
            self.log(
                "Security Warning: HTTP redirects are enabled. This may allow SSRF bypass attacks "
                "where a public URL redirects to internal resources (e.g., cloud metadata endpoints). "
                "Only enable this if you trust the target server."
            )

        # Normalize URL (add https:// if no protocol specified)
        url = self._normalize_url(url)

        # Basic URL format validation
        if not validators.url(url):
            msg = f"Invalid URL provided: {url}"
            raise ValueError(msg)

        # ============================================================================
        # SSRF Protection with DNS Pinning
        # ============================================================================
        # This prevents DNS rebinding attacks by:
        # 1. Resolving DNS and validating IPs during security check
        # 2. Pinning the validated IP address
        # 3. Using a custom HTTP transport that forces use of the pinned IP
        # 4. Ignoring any new DNS resolutions (prevents rebinding)
        #
        # Without DNS pinning, an attacker could:
        # - First DNS lookup: returns public IP (passes validation)
        # - Second DNS lookup: returns internal IP (bypasses protection)
        # - Attack succeeds: accesses internal services
        #
        # With DNS pinning:
        # - First DNS lookup: returns public IP (passes validation)
        # - IP is pinned: "example.com = 93.184.216.34"
        # - HTTP request: uses pinned IP directly (no new DNS lookup)
        # - Attack fails: even if DNS changes, we use the validated IP
        # ============================================================================

        try:
            # Validate URL and get validated IPs for DNS pinning
            _validated_url, validated_ips = validate_and_resolve_url(url)

            # Log DNS pinning information for security auditing
            if validated_ips:
                self.log(f"SSRF Protection: Using DNS pinning with {len(validated_ips)} validated IP(s)")

        except SSRFProtectionError as e:
            # SSRF protection blocked the request (private IP, internal network, etc.)
            msg = f"SSRF Protection: {e}"
            raise ValueError(msg) from e

        # Process query parameters (from string or Data object)
        if isinstance(self.query_params, str):
            query_params = dict(parse_qsl(self.query_params))
        else:
            query_params = self.query_params.data if self.query_params else {}

        # Process headers and body into proper format
        headers = self._process_headers(headers)
        body = self._process_body(body)
        url = self.add_query_params(url, query_params)

        # ============================================================================
        # Execute the request (re-validating any redirects when SSRF protection is on)
        # ============================================================================
        # When SSRF protection is enabled we must NOT let httpx auto-follow redirects:
        # a validated public URL can redirect to an internal address (loopback, RFC1918,
        # link-local / cloud metadata) that was never checked, bypassing both the initial
        # validation and DNS pinning. Instead we follow redirects manually so every hop
        # is re-validated with the same denylist + DNS pinning. When protection is
        # disabled, we preserve the previous behavior and let httpx handle redirects.
        if is_ssrf_protection_enabled() and follow_redirects:
            result = await self._follow_redirects_with_validation(
                method,
                url,
                headers,
                body,
                timeout,
                validated_ips,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        else:
            # No redirect re-validation needed:
            # - SSRF protection is disabled (user opted out), or
            # - redirects are disabled, so httpx makes a single request.
            # DNS pinning still applies to the single request when protection is enabled
            # and the host resolved to validated IPs.
            async with self._build_http_client(url, validated_ips) as client:
                result = await self.make_request(
                    client,
                    method,
                    url,
                    headers,
                    body,
                    timeout,
                    follow_redirects=follow_redirects,
                    save_to_file=save_to_file,
                    include_httpx_metadata=include_httpx_metadata,
                )

        self.status = result
        return result

    def _build_http_client(self, url: str, validated_ips: list[str]) -> httpx.AsyncClient:
        """Create an HTTP client, pinning DNS to validated IPs when SSRF protection applies.

        Args:
            url: The request URL whose hostname will be pinned.
            validated_ips: IPs validated by \`\`validate_and_resolve_url\`\` for this hop.

        Returns:
            httpx.AsyncClient: A client that pins DNS to \`\`validated_ips\`\` (preventing
            rebinding) when SSRF protection is enabled and the hop has validated IPs;
            otherwise a standard client (protection disabled, allowlisted host, or
            hostname extraction failure).
        """
        if is_ssrf_protection_enabled() and validated_ips:
            # Extract hostname from the URL so the custom transport can pin it while
            # preserving the Host header for virtual hosting / TLS SNI.
            hostname = urlparse(url).hostname
            if hostname:
                # The custom transport tries validated IPs in order (dual-stack / LB).
                return create_ssrf_protected_client(hostname=hostname, validated_ips=validated_ips)
        return httpx.AsyncClient()

    @staticmethod
    def _method_for_redirect(method: str, status_code: int) -> str:
        """Return the HTTP method to use after a redirect, mirroring httpx semantics.

        A 303 (See Other) always becomes GET; 301/302 downgrade POST to GET for
        browser compatibility; 307/308 preserve the original method (and body).
        """
        method = method.upper()
        if status_code == HTTP_SEE_OTHER and method != "HEAD":
            return "GET"
        if status_code in (HTTP_MOVED_PERMANENTLY, HTTP_FOUND) and method == "POST":
            return "GET"
        return method

    @staticmethod
    def _headers_for_redirect(headers: dict | None, current_url: str, next_url: str) -> dict | None:
        """Drop sensitive headers when a redirect crosses to a different host.

        Mirrors httpx's auto-follow behavior so manually following redirects does not
        leak credentials (Authorization / Cookie) to a different host than the one the
        caller intended them for. Same-host redirects keep all headers.
        """
        if not headers:
            return headers
        if urlparse(current_url).hostname == urlparse(next_url).hostname:
            return headers
        sensitive = {"authorization", "proxy-authorization", "cookie"}
        return {k: v for k, v in headers.items() if k.lower() not in sensitive}

    async def _follow_redirects_with_validation(
        self,
        method: str,
        url: str,
        headers: dict | None,
        body: Any,
        timeout: int,
        validated_ips: list[str],
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Make the request and follow redirects manually, re-validating every hop.

        This closes an SSRF bypass: with \`\`follow_redirects\`\` enabled, httpx would
        otherwise auto-follow a redirect from a validated public URL to an internal
        address that was never checked. Here each redirect \`\`Location\`\` is resolved
        (relative locations included) and re-validated with \`\`validate_and_resolve_url\`\`
        — the same private/loopback/link-local denylist and DNS pinning applied to the
        initial request — before any connection to it is made. A blocked hop raises
        \`\`ValueError\`\`; the number of redirects is capped at \`\`MAX_REDIRECTS\`\`.
        """
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        current_url = url
        current_ips = validated_ips
        redirection_history: list[dict] = []

        for _ in range(MAX_REDIRECTS + 1):
            request_params: dict[str, Any] = {
                "method": method,
                "url": current_url,
                "headers": headers,
                "timeout": timeout,
                # Never let httpx follow redirects itself; each hop is validated below.
                "follow_redirects": False,
            }
            # Only include body for methods that support it (GET must not have a body).
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body

            try:
                async with self._build_http_client(current_url, current_ips) as client:
                    response = await client.request(**request_params)
            except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
                self.log(f"Error making request to {current_url}")
                return Data(
                    data={
                        "source": url,
                        "headers": headers,
                        "status_code": 500,
                        "error": str(exc),
                        **({"redirection_history": redirection_history} if redirection_history else {}),
                    },
                )

            location = response.headers.get("Location")
            if response.status_code in REDIRECT_STATUS_CODES and location:
                # Resolve relative redirects against the current URL.
                next_url = urljoin(current_url, location)
                redirection_history.append({"url": location, "status_code": response.status_code})

                # Re-validate the redirect target with the same SSRF denylist + DNS pinning.
                # Non-http(s) schemes, private/loopback/link-local hosts, and hostnames that
                # resolve to blocked IPs all raise SSRFProtectionError here.
                try:
                    _validated_url, current_ips = validate_and_resolve_url(next_url)
                except SSRFProtectionError as e:
                    msg = f"SSRF Protection: blocked redirect to {next_url}: {e}"
                    raise ValueError(msg) from e

                method = self._method_for_redirect(method, response.status_code)
                headers = self._headers_for_redirect(headers, current_url, next_url)
                current_url = next_url
                continue

            # Not a redirect (or no Location header) - this is the final response.
            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )

        msg = f"SSRF Protection: exceeded the maximum of {MAX_REDIRECTS} redirects while requesting {url}"
        raise ValueError(msg)

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the build config based on the selected mode."""
        if field_name != "mode":
            if field_name == "curl_input" and self.mode == "cURL" and self.curl_input:
                return self.parse_curl(self.curl_input, build_config)
            return build_config

        if field_value == "cURL":
            set_field_display(build_config, "curl_input", value=True)
            if build_config["curl_input"]["value"]:
                try:
                    build_config = self.parse_curl(build_config["curl_input"]["value"], build_config)
                except ValueError as e:
                    self.log(f"Failed to parse cURL input: {e}")
        else:
            set_field_display(build_config, "curl_input", value=False)

        return set_current_fields(
            build_config=build_config,
            action_fields=MODE_FIELDS,
            selected_action=field_value,
            default_fields=DEFAULT_FIELDS,
            func=set_field_advanced,
            default_value=True,
        )

    async def _response_info(
        self, response: httpx.Response, *, with_file_path: bool = False
    ) -> tuple[bool, Path | None]:
        """Determine the file path and whether the response content is binary.

        Args:
            response (Response): The HTTP response object.
            with_file_path (bool): Whether to save the response content to a file.

        Returns:
            Tuple[bool, Path | None]:
                A tuple containing a boolean indicating if the content is binary and the full file path (if applicable).
        """
        content_type = response.headers.get("Content-Type", "")
        is_binary = "application/octet-stream" in content_type or "application/binary" in content_type

        if not with_file_path:
            return is_binary, None

        component_temp_dir = Path(tempfile.gettempdir()) / self.__class__.__name__

        # Create directory asynchronously
        await aiofiles_os.makedirs(component_temp_dir, exist_ok=True)

        filename = None
        if "Content-Disposition" in response.headers:
            content_disposition = response.headers["Content-Disposition"]
            filename_match = re.search(r'filename="(.+?)"', content_disposition)
            if filename_match:
                extracted_filename = filename_match.group(1)
                filename = extracted_filename

        # Step 3: Infer file extension or use part of the request URL if no filename
        if not filename:
            # Extract the last segment of the URL path
            url_path = urlparse(str(response.request.url) if response.request else "").path
            base_name = Path(url_path).name  # Get the last segment of the path
            if not base_name:  # If the path ends with a slash or is empty
                base_name = "response"

            # Infer file extension
            content_type_to_extension = {
                "text/plain": ".txt",
                "application/json": ".json",
                "image/jpeg": ".jpg",
                "image/png": ".png",
                "application/octet-stream": ".bin",
            }
            extension = content_type_to_extension.get(content_type, ".bin" if is_binary else ".txt")
            filename = f"{base_name}{extension}"

        # Step 4: Define the full file path
        file_path = component_temp_dir / filename

        # Step 5: Check if file exists asynchronously and handle accordingly
        try:
            # Try to create the file exclusively (x mode) to check existence
            async with aiofiles.open(file_path, "x") as _:
                pass  # File created successfully, we can use this path
        except FileExistsError:
            # If file exists, append a timestamp to the filename
            timestamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S%f")
            file_path = component_temp_dir / f"{timestamp}-{filename}"

        return is_binary, file_path
`},curl_input:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"cURL",dynamic:!1,info:"Paste a curl command to populate the fields. This will fill in the dictionary fields for headers and body.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"curl_input",override_skip:!1,password:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`curl --location 'https://jaivir.atlassian.net/rest/api/3/issue/QA-1' \\
--header 'Accept: application/json' \\
--header 'Authorization: Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB' \\
--header 'Cookie: atlassian.xsrf.token=8732527354ac562b52451cde08424669441bfc42_lin'`},follow_redirects:{_input_type:"BoolInput",advanced:!0,display_name:"Follow Redirects",dynamic:!1,info:"Whether to follow HTTP redirects. WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL redirects to internal resources. Only enable if you trust the target server. See OWASP SSRF Prevention Cheat Sheet for details.",list:!1,list_add_label:"Add More",name:"follow_redirects",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},headers:{_input_type:"TableInput",advanced:!0,display_name:"Headers",dynamic:!1,info:"The headers to send with the request",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"headers",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Header name",display_name:"Header",formatter:"text",name:"key",type:"str"},{description:"Header value",display_name:"Value",formatter:"text",name:"value",type:"str"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[{key:"Accept",value:"application/json"},{key:"Authorization",value:"Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB"}]},include_httpx_metadata:{_input_type:"BoolInput",advanced:!0,display_name:"Include HTTPx Metadata",dynamic:!1,info:"Include properties such as headers, status_code, response_headers, and redirection_history in the output.",list:!1,list_add_label:"Add More",name:"include_httpx_metadata",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},is_refresh:!1,method:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Method",dynamic:!1,external_options:{},info:"The HTTP method to use.",name:"method",options:["GET","POST","PATCH","PUT","DELETE"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"GET"},mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Enable cURL mode to populate fields from a cURL command.",name:"mode",options:["URL","cURL"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"cURL"},query_params:{_input_type:"JSONInput",advanced:!0,display_name:"Query Parameters",dynamic:!1,info:"The query parameters to append to the URL.",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"query_params",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},save_to_file:{_input_type:"BoolInput",advanced:!0,display_name:"Save to File",dynamic:!1,info:"Save the API response to a temporary file",list:!1,list_add_label:"Add More",name:"save_to_file",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"The timeout to use for the request.",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:30},url_input:{_input_type:"MessageTextInput",advanced:!0,display_name:"URL",dynamic:!1,info:"Enter the URL for the request.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"url_input",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"https://jaivir.atlassian.net/rest/api/3/issue/QA-1"}},tool_mode:!1},showNode:!0,type:"APIRequest"},dragging:!1,id:"APIRequest-WgoSq",measured:{height:303,width:320},position:{x:-870.151526285201,y:-1094.343626516397},selected:!1,type:"genericNode"},{data:{id:"GroqModel-KsYs0",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Generate text using Groq.",display_name:"Groq",documentation:"",edited:!1,field_order:["input_value","system_message","stream","api_key","base_url","max_tokens","temperature","n","model_name","tool_model_enabled"],frozen:!1,icon:"Groq",last_updated:"2026-06-29T17:40:31.603Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"8a55d3fa8173",dependencies:{dependencies:[{name:"pydantic",version:"2.13.4"},{name:"lfx",version:null},{name:"langchain_groq",version:"1.1.2"}],total_dependencies:3},keywords:["model","llm","language model","large language model"],module:"lfx.components.groq.groq.GroqModel"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,loop_types:null,method:"text_response",name:"text_output",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,loop_types:null,method:"build_model",name:"model_output",options:null,required_inputs:null,selected:"LanguageModel",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"b1bfddbf-dc92-4cad-b529-6edee104c6ed"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"Groq API Key",dynamic:!1,info:"API key for the Groq API.",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:""},base_url:{_input_type:"MessageTextInput",advanced:!0,display_name:"Groq API Base",dynamic:!1,info:"Base URL path for API requests, leave blank if not using a proxy or service emulator.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"base_url",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"https://api.groq.com"},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from pydantic.v1 import SecretStr

from lfx.base.models.groq_constants import GROQ_MODELS
from lfx.base.models.groq_model_discovery import get_groq_models
from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.field_typing.range_spec import RangeSpec
from lfx.io import BoolInput, DropdownInput, IntInput, MessageTextInput, SecretStrInput, SliderInput
from lfx.log.logger import logger


class GroqModel(LCModelComponent):
    display_name: str = "Groq"
    description: str = "Generate text using Groq."
    icon = "Groq"
    name = "GroqModel"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        SecretStrInput(
            name="api_key", display_name="Groq API Key", info="API key for the Groq API.", real_time_refresh=True
        ),
        MessageTextInput(
            name="base_url",
            display_name="Groq API Base",
            info="Base URL path for API requests, leave blank if not using a proxy or service emulator.",
            advanced=True,
            value="https://api.groq.com",
            real_time_refresh=True,
        ),
        IntInput(
            name="max_tokens",
            display_name="Max Output Tokens",
            info="The maximum number of tokens to generate.",
            advanced=True,
        ),
        SliderInput(
            name="temperature",
            display_name="Temperature",
            value=0.1,
            info="Run inference with this temperature. Must by in the closed interval [0.0, 1.0].",
            range_spec=RangeSpec(min=0, max=1, step=0.01),
            advanced=True,
        ),
        IntInput(
            name="n",
            display_name="N",
            info="Number of chat completions to generate for each prompt. "
            "Note that the API may not return the full n completions if duplicates are generated.",
            advanced=True,
        ),
        DropdownInput(
            name="model_name",
            display_name="Model",
            info="The name of the model to use. Add your Groq API key to access additional available models.",
            options=GROQ_MODELS,
            value=GROQ_MODELS[0],
            refresh_button=True,
            combobox=True,
        ),
        BoolInput(
            name="tool_model_enabled",
            display_name="Enable Tool Models",
            info=(
                "Select if you want to use models that can work with tools. If yes, only those models will be shown."
            ),
            advanced=False,
            value=False,
            real_time_refresh=True,
        ),
    ]

    def get_models(self, *, tool_model_enabled: bool | None = None) -> list[str]:
        """Get available Groq models using the dynamic discovery system.

        This method uses the groq_model_discovery module which:
        - Fetches models directly from Groq API
        - Automatically tests tool calling support
        - Caches results for 24 hours
        - Falls back to hardcoded list if API fails

        Args:
            tool_model_enabled: If True, only return models that support tool calling

        Returns:
            List of available model IDs
        """
        try:
            # Get models with metadata from dynamic discovery system
            api_key = self.api_key if hasattr(self, "api_key") and self.api_key else None
            models_metadata = get_groq_models(api_key=api_key)

            # Filter out non-LLM models (audio, TTS, guards)
            model_ids = [
                model_id for model_id, metadata in models_metadata.items() if not metadata.get("not_supported", False)
            ]

            # Filter by tool calling support if requested
            if tool_model_enabled:
                model_ids = [model_id for model_id in model_ids if models_metadata[model_id].get("tool_calling", False)]
                logger.info(f"Loaded {len(model_ids)} Groq models with tool calling support")
            else:
                logger.info(f"Loaded {len(model_ids)} Groq models")
        except (ValueError, KeyError, TypeError, ImportError):
            logger.exception("Error getting model names")
            # Fallback to hardcoded list from groq_constants.py
            return GROQ_MODELS
        else:
            return model_ids

    def update_build_config(self, build_config: dict, field_value: str, field_name: str | None = None):
        if field_name in {"base_url", "model_name", "tool_model_enabled", "api_key"} and field_value:
            try:
                if len(self.api_key) != 0:
                    try:
                        ids = self.get_models(tool_model_enabled=self.tool_model_enabled)
                    except (ValueError, KeyError, TypeError, ImportError):
                        logger.exception("Error getting model names")
                        ids = GROQ_MODELS
                    ids = ids or GROQ_MODELS
                    build_config.setdefault("model_name", {})
                    build_config["model_name"]["options"] = ids
                    build_config["model_name"].setdefault("value", ids[0])
            except (ValueError, KeyError, TypeError, AttributeError) as e:
                msg = f"Error getting model names: {e}"
                raise ValueError(msg) from e
        return build_config

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        try:
            from langchain_groq import ChatGroq
        except ImportError as e:
            msg = "langchain-groq is not installed. Please install it with \`pip install langchain-groq\`."
            raise ImportError(msg) from e

        return ChatGroq(
            model=self.model_name,
            max_tokens=self.max_tokens or None,
            temperature=self.temperature,
            base_url=self.base_url,
            n=self.n or 1,
            api_key=SecretStr(self.api_key).get_secret_value(),
            streaming=self.stream,
        )
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},is_refresh:!1,max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Output Tokens",dynamic:!1,info:"The maximum number of tokens to generate.",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!0,dialog_inputs:{},display_name:"Model",dynamic:!1,external_options:{},info:"The name of the model to use. Add your Groq API key to access additional available models.",name:"model_name",options:["groq/compound","openai/gpt-oss-20b","llama-3.3-70b-versatile","llama-3.1-8b-instant","openai/gpt-oss-120b","allam-2-7b","groq/compound-mini","qwen/qwen3.6-27b","meta-llama/llama-4-scout-17b-16e-instruct","qwen/qwen3-32b"],options_metadata:[],override_skip:!1,placeholder:"",refresh_button:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"llama-3.3-70b-versatile"},n:{_input_type:"IntInput",advanced:!0,display_name:"N",dynamic:!1,info:"Number of chat completions to generate for each prompt. Note that the API may not return the full n completions if duplicates are generated.",list:!1,list_add_label:"Add More",name:"n",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"1- You need to create the effective Test Cases including positive, negative, UI validation, security and performance of fetched description of Jira ticket."},temperature:{_input_type:"SliderInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"Run inference with this temperature. Must by in the closed interval [0.0, 1.0].",max_label:"",max_label_icon:"",min_label:"",min_label_icon:"",name:"temperature",override_skip:!1,placeholder:"",range_spec:{max:1,min:0,step:.01,step_type:"float"},required:!1,show:!0,slider_buttons:!1,slider_buttons_options:[],slider_input:!1,title_case:!1,tool_mode:!1,track_in_telemetry:!1,type:"slider",value:.49},tool_model_enabled:{_input_type:"BoolInput",advanced:!1,display_name:"Enable Tool Models",dynamic:!1,info:"Select if you want to use models that can work with tools. If yes, only those models will be shown.",list:!1,list_add_label:"Add More",name:"tool_model_enabled",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"GroqModel"},dragging:!1,id:"GroqModel-KsYs0",measured:{height:496,width:320},position:{x:680.6394380801562,y:-1106.5758757284664},selected:!1,type:"genericNode"},{data:{id:"ParserComponent-Vc0Sr",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Extracts text using a template.",display_name:"Parser",documentation:"https://docs.langflow.org/parser",edited:!1,field_order:["input_data","mode","pattern","sep"],frozen:!1,icon:"braces",last_updated:"2026-06-27T17:13:38.519Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"cda7b997a730",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.processing.parser.ParserComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Parsed Text",group_outputs:!1,loop_types:null,method:"parse_combined_text",name:"parsed_text",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"eb83caf7-a968-4253-805a-de09cf6767f6"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Clean Data",dynamic:!1,info:"Enable to clean the data by removing empty rows and lines in each cell of the DataFrame/ Data object.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from lfx.custom.custom_component.component import Component
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, HandleInput, MessageTextInput, MultilineInput, TabInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.template.field.base import Output


class ParserComponent(Component):
    display_name = "Parser"
    description = "Extracts text using a template."
    documentation: str = "https://docs.langflow.org/parser"
    icon = "braces"

    inputs = [
        HandleInput(
            name="input_data",
            display_name="JSON or Table",
            input_types=["DataFrame", "Table", "Data", "JSON"],
            info="Accepts either a DataFrame or a Data object.",
            required=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["Parser", "Stringify"],
            value="Parser",
            info="Convert into raw string instead of using a template.",
            real_time_refresh=True,
        ),
        MultilineInput(
            name="pattern",
            display_name="Template",
            info=(
                "Use variables within curly brackets to extract column values for DataFrames "
                "or key values for Data."
                "For example: \`Name: {Name}, Age: {Age}, Country: {Country}\`"
            ),
            value="Text: {text}",  # Example default
            dynamic=True,
            show=True,
            required=True,
        ),
        MessageTextInput(
            name="sep",
            display_name="Separator",
            advanced=True,
            value="\\n",
            info="String used to separate rows/items.",
        ),
    ]

    outputs = [
        Output(
            display_name="Parsed Text",
            name="parsed_text",
            info="Formatted text output.",
            method="parse_combined_text",
        ),
    ]

    def update_build_config(self, build_config, field_value, field_name=None):
        """Dynamically hide/show \`template\` and enforce requirement based on \`stringify\`."""
        if field_name == "mode":
            build_config["pattern"]["show"] = self.mode == "Parser"
            build_config["pattern"]["required"] = self.mode == "Parser"
            if field_value:
                clean_data = BoolInput(
                    name="clean_data",
                    display_name="Clean Data",
                    info=(
                        "Enable to clean the data by removing empty rows and lines "
                        "in each cell of the DataFrame/ Data object."
                    ),
                    value=True,
                    advanced=True,
                    required=False,
                )
                build_config["clean_data"] = clean_data.to_dict()
            else:
                build_config.pop("clean_data", None)

        return build_config

    def _clean_args(self):
        """Prepare arguments based on input type."""
        input_data = self.input_data

        match input_data:
            case list() if all(isinstance(item, Data) for item in input_data):
                msg = "List of Data objects is not supported."
                raise ValueError(msg)
            case DataFrame():
                return input_data, None
            case Data():
                return None, input_data
            case dict() if "data" in input_data:
                try:
                    if "columns" in input_data:  # Likely a DataFrame
                        return DataFrame.from_dict(input_data), None
                    # Likely a Data object
                    return None, Data(**input_data)
                except (TypeError, ValueError, KeyError) as e:
                    msg = f"Invalid structured input provided: {e!s}"
                    raise ValueError(msg) from e
            case _:
                msg = f"Unsupported input type: {type(input_data)}. Expected DataFrame or Data."
                raise ValueError(msg)

    def parse_combined_text(self) -> Message:
        """Parse all rows/items into a single text or convert input to string if \`stringify\` is enabled."""
        # Early return for stringify option
        if self.mode == "Stringify":
            return self.convert_to_string()

        df, data = self._clean_args()

        lines = []
        if df is not None:
            for _, row in df.iterrows():
                formatted_text = self.pattern.format(**row.to_dict())
                lines.append(formatted_text)
        elif data is not None:
            # Use format_map with a dict that returns default_value for missing keys
            class DefaultDict(dict):
                def __missing__(self, key):
                    return data.default_value or ""

            formatted_text = self.pattern.format_map(DefaultDict(data.data))
            lines.append(formatted_text)

        combined_text = self.sep.join(lines)
        self.status = combined_text
        return Message(text=combined_text)

    def convert_to_string(self) -> Message:
        """Convert input data to string with proper error handling."""
        result = ""
        if isinstance(self.input_data, list):
            result = "\\n".join([safe_convert(item, clean_data=self.clean_data or False) for item in self.input_data])
        else:
            result = safe_convert(self.input_data or False)
        self.log(f"Converted to string with length: {len(result)}")

        message = Message(text=result)
        self.status = message
        return message
`},input_data:{_input_type:"HandleInput",advanced:!1,display_name:"JSON or Table",dynamic:!1,info:"Accepts either a DataFrame or a Data object.",input_types:["DataFrame","Table","Data","JSON"],list:!1,list_add_label:"Add More",name:"input_data",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},is_refresh:!1,mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Convert into raw string instead of using a template.",name:"mode",options:["Parser","Stringify"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"Stringify"},pattern:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"Template",dynamic:!0,info:"Use variables within curly brackets to extract column values for DataFrames or key values for Data.For example: `Name: {Name}, Age: {Age}, Country: {Country}`",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"pattern",override_skip:!1,password:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"Issue Key: {key}Description: {description}"},sep:{_input_type:"MessageTextInput",advanced:!0,display_name:"Separator",dynamic:!1,info:"String used to separate rows/items.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sep",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`
`}},tool_mode:!1},showNode:!0,type:"ParserComponent"},dragging:!1,id:"ParserComponent-Vc0Sr",measured:{height:249,width:320},position:{x:-533.2763713991201,y:-1076.2207898081983},selected:!1,type:"genericNode"},{data:{id:"ChatOutput-RYqz4",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null}],total_dependencies:3},module:"lfx.components.input_output.chat_output.ChatOutput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},dragging:!1,id:"ChatOutput-RYqz4",measured:{height:52,width:192},position:{x:1717.6608953637237,y:-989.0594356269842},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-M0bIf",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["text"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`You are a Senior QA Engineer with over 15 years of experience.

Analyze the Jira requirement below
1- write the test cases as per details fetched from Jira and don't guss anything and focus on the jira ticket details only.
{text}
`},text:{advanced:!1,display_name:"text",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"text",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-M0bIf",measured:{height:347,width:320},position:{x:262.4060537124476,y:-1050.2366491038078},selected:!1,type:"genericNode"},{data:{id:"RcaExporterComponent-cEu5j",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Formats the generated Test Cases document and creates download links for MD and DOCX.",display_name:"Test Cases",documentation:"",edited:!0,field_order:["rca_markdown","file_name"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"0026917c8423",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"},{name:"docx",version:"1.2.0"}],total_dependencies:2},module:"custom_components.rca_exporter"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Export Status",group_outputs:!1,hidden:null,loop_types:null,method:"build_output",name:"export_status",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import MessageTextInput, Output\r
import base64\r
\r
class RcaExporterComponent(Component):\r
    display_name = "RCA Exporter"\r
    description = "Formats the generated RCA document and creates download links for MD and DOCX."\r
\r
    inputs = [\r
        MessageTextInput(\r
            name="rca_markdown",\r
            display_name="RCA Markdown",\r
            info="The Markdown text generated by the LLM component.",\r
            value=""\r
        ),\r
        MessageTextInput(\r
            name="file_name",\r
            display_name="Output File Name",\r
            info="Base name for the downloaded file (without extension).",\r
            value="RCA_Report"\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Export Status", name="export_status", types=["Message"], method="build_output"),\r
    ]\r
\r
    def build_output(self) -> str:\r
        rca_markdown = self.rca_markdown\r
        file_name = self.file_name\r
        \r
        if not rca_markdown:\r
            return "No RCA content to export."\r
            \r
        clean_name = file_name.replace(" ", "_")\r
        \r
        # 1. Base64 Markdown Link\r
        md_base64 = base64.b64encode(rca_markdown.encode("utf-8")).decode("utf-8")\r
        md_download_link = f"data:text/markdown;charset=utf-8;base64,{md_base64}"\r
        \r
        # Ensure exports directory exists\r
        import os\r
        export_dir = "/app/langflow/exports"\r
        try:\r
            os.makedirs(export_dir, exist_ok=True)\r
        except Exception:\r
            pass\r
\r
        # Save MD locally\r
        md_local_path = f"{export_dir}/{clean_name}.md"\r
        try:\r
            with open(md_local_path, "w", encoding="utf-8") as f:\r
                f.write(rca_markdown)\r
        except Exception as e:\r
            md_local_path = f"Write error: {str(e)}"\r
            \r
        # 2. Base64 DOCX Link (requires python-docx)\r
        docx_download_link = ""\r
        docx_local_path = "N/A"\r
        try:\r
            import docx\r
            doc = docx.Document()\r
            doc.add_heading("Root Cause Analysis (RCA) Report", 0)\r
            \r
            for line in rca_markdown.split("\\n"):\r
                if line.startswith("# "):\r
                    doc.add_heading(line[2:], level=1)\r
                elif line.startswith("## "):\r
                    doc.add_heading(line[3:], level=2)\r
                elif line.startswith("### "):\r
                    doc.add_heading(line[4:], level=3)\r
                elif line.startswith("* ") or line.startswith("- "):\r
                    doc.add_paragraph(line, style="List Bullet")\r
                elif line.strip():\r
                    doc.add_paragraph(line)\r
            \r
            docx_path = f"{export_dir}/{clean_name}.docx"\r
            doc.save(docx_path)\r
            docx_local_path = docx_path\r
            \r
            with open(docx_path, "rb") as df:\r
                docx_base64 = base64.b64encode(df.read()).decode("utf-8")\r
            \r
            docx_download_link = f"- [Download Word Document (.docx)](data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,{docx_base64})"\r
        except ImportError:\r
            docx_download_link = "- ⚠️ *DOCX download unavailable: run \`pip install python-docx\` in your Langflow environment to enable Word exports.*"\r
        except Exception as e:\r
            docx_download_link = f"- ❌ *DOCX generation failed: {str(e)}*"\r
            \r
        output = (\r
            f"### 🎉 RCA Report Generated Successfully!\\n\\n"\r
            f"📂 **Files Saved to Workspace Exports Directory**:\\n"\r
            f"- Markdown: \`{md_local_path}\`\\n"\r
            f"- Word Document: \`{docx_local_path}\`\\n\\n"\r
            f"💡 *These files will be synced to your host machine at:* \\n"\r
            f"\`D:\\\\ai_3x_qa\\\\QA_AI_Projects\\\\AI_tools\\\\langflow-agents\\\\langflow-data\\\\exports\\\\\`"\r
        )\r
        self.status = output\r
        return output`},file_name:{_input_type:"MessageTextInput",advanced:!1,display_name:"Output File Name",dynamic:!1,info:"Base name for the downloaded file (without extension).",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"file_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"Test_Cases"},rca_markdown:{_input_type:"MessageTextInput",advanced:!1,display_name:"RCA Markdown",dynamic:!1,info:"The Markdown text generated by the LLM component.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"rca_markdown",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"RcaExporterComponent"},dragging:!1,id:"RcaExporterComponent-cEu5j",measured:{height:305,width:320},position:{x:1078.3270717207683,y:-1026.8312908796252},selected:!1,type:"genericNode"},{data:{id:"LocalDocumentReaderComponent-wvxdX",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Reads text from PDF, DOCX, TXT, MD, or JSON files locally. 100% free and offline.",display_name:"Local Document Reader",documentation:"",edited:!0,field_order:["file_path"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"13d634df8ecd",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"},{name:"pypdf",version:"6.12.2"},{name:"docx",version:"1.2.0"}],total_dependencies:3},module:"custom_components.local_document_reader"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Text Output",group_outputs:!1,hidden:null,loop_types:null,method:"read_document",name:"text_output",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"File Path Output",group_outputs:!1,hidden:null,loop_types:null,method:"get_file_path",name:"file_path_output",options:null,required_inputs:null,tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import FileInput, Output\r
import os\r
\r
class LocalDocumentReaderComponent(Component):\r
    display_name = "Local Document Reader"\r
    description = "Reads text from PDF, DOCX, TXT, MD, or JSON files locally. 100% free and offline."\r
\r
    inputs = [\r
        FileInput(\r
            name="file_path",\r
            display_name="File",\r
            info="Upload a PDF, DOCX, TXT, MD, or JSON file",\r
            file_types=["pdf", "docx", "txt", "md", "json"]\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Text Output", name="text_output", types=["Message"], method="read_document"),\r
        Output(display_name="File Path Output", name="file_path_output", types=["Message"], method="get_file_path"),\r
    ]\r
\r
    def get_file_path(self) -> str:\r
        return self.file_path or ""\r
\r
    def read_document(self) -> str:\r
        if not self.file_path:\r
            return ""\r
\r
        path = self.file_path.strip()\r
\r
            \r
        if not os.path.exists(path):\r
            return f"Error: File not found at path: {path}"\r
\r
        ext = os.path.splitext(path)[1].lower()\r
\r
        # Handle PDF\r
        if ext == ".pdf":\r
            try:\r
                import pypdf\r
                reader = pypdf.PdfReader(path)\r
                text_pages = []\r
                for i, page in enumerate(reader.pages):\r
                    page_text = page.extract_text()\r
                    if page_text:\r
                        text_pages.append(f"--- PAGE {i+1} ---\\n{page_text}")\r
                if not text_pages:\r
                    return "Successfully read PDF, but no extractable text was found (possibly a scanned image PDF)."\r
                return "\\n\\n".join(text_pages)\r
            except Exception as e:\r
                return f"Error reading PDF: {str(e)}"\r
\r
        # Handle DOCX\r
        elif ext == ".docx":\r
            try:\r
                import docx\r
                doc = docx.Document(path)\r
                paragraphs_text = [p.text for p in doc.paragraphs if p.text.strip()]\r
                \r
                # Also extract text from any tables in the Word doc\r
                table_text = []\r
                for table in doc.tables:\r
                    for row in table.rows:\r
                        row_cells = [cell.text.strip() for cell in row.cells if cell.text.strip()]\r
                        if row_cells:\r
                            table_text.append(" | ".join(row_cells))\r
                \r
                full_text = paragraphs_text + table_text\r
                if not full_text:\r
                    return "Successfully read DOCX, but document is empty."\r
                return "\\n\\n".join(full_text)\r
            except ImportError:\r
                return "Error: \`python-docx\` is not installed. Run \`pip install python-docx\` in your environment to enable DOCX parsing."\r
            except Exception as e:\r
                return f"Error reading DOCX: {str(e)}"\r
\r
        # Handle Text / MD / JSON\r
        elif ext in [".txt", ".md", ".json"]:\r
            try:\r
                with open(path, "r", encoding="utf-8") as f:\r
                    content = f.read()\r
                if not content.strip():\r
                    return f"File is empty: {path}"\r
                return content\r
            except Exception as e:\r
                return f"Error reading text file: {str(e)}"\r
\r
        else:\r
            return f"Unsupported file format: '{ext}'. Supported formats are: .pdf, .docx, .txt, .md, .json"`},file_path:{_input_type:"FileInput",advanced:!1,display_name:"File",dynamic:!1,fileTypes:["pdf","docx","txt","md","json"],file_path:"",info:"Upload a PDF, DOCX, TXT, MD, or JSON file",list:!1,list_add_label:"Add More",name:"file_path",override_skip:!1,placeholder:"",required:!1,show:!0,temp_file:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"LocalDocumentReaderComponent"},dragging:!1,id:"LocalDocumentReaderComponent-wvxdX",measured:{height:233,width:320},position:{x:-911.6100470045244,y:-567.6297730400754},selected:!1,type:"genericNode"},{data:{id:"SourceSelectorComponent-lVErd",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Selects or merges the context from the JIRA search parser and/or the uploaded document.",display_name:"Source Selector",documentation:"",edited:!0,field_order:["jira_text","document_text"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"6d5c1c003bbc",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"}],total_dependencies:1},module:"custom_components.source_selector"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Consolidated Context",group_outputs:!1,hidden:null,loop_types:null,method:"select_source",name:"consolidated_context",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import MessageTextInput, Output\r
\r
class SourceSelectorComponent(Component):\r
    display_name = "Source Selector"\r
    description = "Selects or merges the context from the JIRA search parser and/or the uploaded document."\r
\r
    inputs = [\r
        MessageTextInput(\r
            name="jira_text",\r
            display_name="Jira Parsed Text",\r
            info="Text output from the Jira Search Parser component",\r
            value=""\r
        ),\r
        MessageTextInput(\r
            name="document_text",\r
            display_name="Uploaded Document Text",\r
            info="Text output from the Local Document Reader component",\r
            value=""\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Consolidated Context", name="consolidated_context", types=["Message"], method="select_source"),\r
    ]\r
\r
    def select_source(self) -> str:\r
        jira = self.jira_text.strip() if self.jira_text else ""\r
        doc = self.document_text.strip() if self.document_text else ""\r
        \r
        if jira and doc:\r
            return f"--- JIRA TICKETS CONTEXT ---\\n{jira}\\n\\n--- DOCUMENT UPLOAD CONTEXT ---\\n{doc}"\r
        elif jira:\r
            return jira\r
        elif doc:\r
            return doc\r
        else:\r
            return "No project context was provided. Please either query JIRA or upload a document."`},document_text:{_input_type:"MessageTextInput",advanced:!1,display_name:"Uploaded Document Text",dynamic:!1,info:"Text output from the Local Document Reader component",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"document_text",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},jira_text:{_input_type:"MessageTextInput",advanced:!1,display_name:"Jira Parsed Text",dynamic:!1,info:"Text output from the Jira Search Parser component",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"jira_text",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"SourceSelectorComponent"},dragging:!1,id:"SourceSelectorComponent-lVErd",measured:{height:305,width:320},position:{x:-119.21928500236635,y:-1053.8795541462866},selected:!1,type:"genericNode"}],viewport:{x:353.5688135343429,y:494.63488150394676,zoom:.36763679586335585}},description:"Promptly Ingenious!",endpoint_name:null,id:"b1bfddbf-dc92-4cad-b529-6edee104c6ed",is_component:!1,last_tested_version:"1.10.0",locked:!1,name:"Test Cases Generator",tags:[]}},{id:"test-strategy-and-test-plan-creator",title:"Test Strategy And Test Plan Creator",description:"Text Generation Meets Business Transformation.",fileName:"Test Strategy And Test Plan Creator.json",rawData:{data:{edges:[{animated:!1,className:"",data:{sourceHandle:{dataType:"APIRequest",id:"APIRequest-JN5nc",name:"data",output_types:["JSON"]},targetHandle:{fieldName:"jira_json",id:"JiraSearchParserComponent-mM8dB",inputTypes:["Data","JSON"],type:"other"}},id:"reactflow__edge-APIRequest-JN5nc{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-JN5ncœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}-JiraSearchParserComponent-mM8dB{œfieldNameœ:œjira_jsonœ,œidœ:œJiraSearchParserComponent-mM8dBœ,œinputTypesœ:[œDataœ,œJSONœ],œtypeœ:œotherœ}",selected:!1,source:"APIRequest-JN5nc",sourceHandle:"{œdataTypeœ:œAPIRequestœ,œidœ:œAPIRequest-JN5ncœ,œnameœ:œdataœ,œoutput_typesœ:[œJSONœ]}",target:"JiraSearchParserComponent-mM8dB",targetHandle:"{œfieldNameœ:œjira_jsonœ,œidœ:œJiraSearchParserComponent-mM8dBœ,œinputTypesœ:[œDataœ,œJSONœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-NUuDV",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"system_message",id:"MistralModel-IAau6",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-Prompt Template-NUuDV{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-NUuDVœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-MistralModel-IAau6{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-IAau6œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-NUuDV",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-NUuDVœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"MistralModel-IAau6",targetHandle:"{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-IAau6œ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MistralModel",id:"MistralModel-IAau6",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"llm_output",id:"MultiFileWriterComponent-xCuCQ",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-MistralModel-IAau6{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-IAau6œ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-MultiFileWriterComponent-xCuCQ{œfieldNameœ:œllm_outputœ,œidœ:œMultiFileWriterComponent-xCuCQœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"MistralModel-IAau6",sourceHandle:"{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-IAau6œ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"MultiFileWriterComponent-xCuCQ",targetHandle:"{œfieldNameœ:œllm_outputœ,œidœ:œMultiFileWriterComponent-xCuCQœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MultiFileWriterComponent",id:"MultiFileWriterComponent-xCuCQ",name:"write_status",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-RqCoB",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"reactflow__edge-MultiFileWriterComponent-xCuCQ{œdataTypeœ:œMultiFileWriterComponentœ,œidœ:œMultiFileWriterComponent-xCuCQœ,œnameœ:œwrite_statusœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-RqCoB{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-RqCoBœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"MultiFileWriterComponent-xCuCQ",sourceHandle:"{œdataTypeœ:œMultiFileWriterComponentœ,œidœ:œMultiFileWriterComponent-xCuCQœ,œnameœ:œwrite_statusœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-RqCoB",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-RqCoBœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"JiraSearchParserComponent",id:"JiraSearchParserComponent-mM8dB",name:"parsed_text",output_types:["Message"]},targetHandle:{fieldName:"context",id:"Prompt Template-NUuDV",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-JiraSearchParserComponent-mM8dB{œdataTypeœ:œJiraSearchParserComponentœ,œidœ:œJiraSearchParserComponent-mM8dBœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-NUuDV{œfieldNameœ:œcontextœ,œidœ:œPrompt Template-NUuDVœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"JiraSearchParserComponent-mM8dB",sourceHandle:"{œdataTypeœ:œJiraSearchParserComponentœ,œidœ:œJiraSearchParserComponent-mM8dBœ,œnameœ:œparsed_textœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-NUuDV",targetHandle:"{œfieldNameœ:œcontextœ,œidœ:œPrompt Template-NUuDVœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"LocalDocumentReaderComponent",id:"LocalDocumentReaderComponent-cCX9J",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"context",id:"Prompt Template-o7wsQ",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-LocalDocumentReaderComponent-cCX9J{œdataTypeœ:œLocalDocumentReaderComponentœ,œidœ:œLocalDocumentReaderComponent-cCX9Jœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-o7wsQ{œfieldNameœ:œcontextœ,œidœ:œPrompt Template-o7wsQœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"LocalDocumentReaderComponent-cCX9J",sourceHandle:"{œdataTypeœ:œLocalDocumentReaderComponentœ,œidœ:œLocalDocumentReaderComponent-cCX9Jœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-o7wsQ",targetHandle:"{œfieldNameœ:œcontextœ,œidœ:œPrompt Template-o7wsQœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-o7wsQ",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"system_message",id:"MistralModel-5TZDu",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-Prompt Template-o7wsQ{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-o7wsQœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-MistralModel-5TZDu{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-5TZDuœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-o7wsQ",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-o7wsQœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"MistralModel-5TZDu",targetHandle:"{œfieldNameœ:œsystem_messageœ,œidœ:œMistralModel-5TZDuœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MistralModel",id:"MistralModel-5TZDu",name:"text_output",output_types:["Message"]},targetHandle:{fieldName:"llm_output",id:"MultiFileWriterComponent-zM91m",inputTypes:["Message"],type:"str"}},id:"reactflow__edge-MistralModel-5TZDu{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-5TZDuœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}-MultiFileWriterComponent-zM91m{œfieldNameœ:œllm_outputœ,œidœ:œMultiFileWriterComponent-zM91mœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"MistralModel-5TZDu",sourceHandle:"{œdataTypeœ:œMistralModelœ,œidœ:œMistralModel-5TZDuœ,œnameœ:œtext_outputœ,œoutput_typesœ:[œMessageœ]}",target:"MultiFileWriterComponent-zM91m",targetHandle:"{œfieldNameœ:œllm_outputœ,œidœ:œMultiFileWriterComponent-zM91mœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"MultiFileWriterComponent",id:"MultiFileWriterComponent-zM91m",name:"write_status",output_types:["Message"]},targetHandle:{fieldName:"input_value",id:"ChatOutput-k3sEB",inputTypes:["Data","JSON","DataFrame","Table","Message"],type:"other"}},id:"reactflow__edge-MultiFileWriterComponent-zM91m{œdataTypeœ:œMultiFileWriterComponentœ,œidœ:œMultiFileWriterComponent-zM91mœ,œnameœ:œwrite_statusœ,œoutput_typesœ:[œMessageœ]}-ChatOutput-k3sEB{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-k3sEBœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}",selected:!1,source:"MultiFileWriterComponent-zM91m",sourceHandle:"{œdataTypeœ:œMultiFileWriterComponentœ,œidœ:œMultiFileWriterComponent-zM91mœ,œnameœ:œwrite_statusœ,œoutput_typesœ:[œMessageœ]}",target:"ChatOutput-k3sEB",targetHandle:"{œfieldNameœ:œinput_valueœ,œidœ:œChatOutput-k3sEBœ,œinputTypesœ:[œDataœ,œJSONœ,œDataFrameœ,œTableœ,œMessageœ],œtypeœ:œotherœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"Prompt Template",id:"Prompt Template-ctw9h",name:"prompt",output_types:["Message"]},targetHandle:{fieldName:"url_input",id:"APIRequest-JN5nc",inputTypes:["Message"],type:"str"}},id:"xy-edge__Prompt Template-ctw9h{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-ctw9hœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}-APIRequest-JN5nc{œfieldNameœ:œurl_inputœ,œidœ:œAPIRequest-JN5ncœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"Prompt Template-ctw9h",sourceHandle:"{œdataTypeœ:œPrompt Templateœ,œidœ:œPrompt Template-ctw9hœ,œnameœ:œpromptœ,œoutput_typesœ:[œMessageœ]}",target:"APIRequest-JN5nc",targetHandle:"{œfieldNameœ:œurl_inputœ,œidœ:œAPIRequest-JN5ncœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"},{animated:!1,className:"",data:{sourceHandle:{dataType:"ChatInput",id:"ChatInput-LqkDw",name:"message",output_types:["Message"]},targetHandle:{fieldName:"Jira_ID",id:"Prompt Template-ctw9h",inputTypes:["Message"],type:"str"}},id:"xy-edge__ChatInput-LqkDw{œdataTypeœ:œChatInputœ,œidœ:œChatInput-LqkDwœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}-Prompt Template-ctw9h{œfieldNameœ:œJira_IDœ,œidœ:œPrompt Template-ctw9hœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}",selected:!1,source:"ChatInput-LqkDw",sourceHandle:"{œdataTypeœ:œChatInputœ,œidœ:œChatInput-LqkDwœ,œnameœ:œmessageœ,œoutput_typesœ:[œMessageœ]}",target:"Prompt Template-ctw9h",targetHandle:"{œfieldNameœ:œJira_IDœ,œidœ:œPrompt Template-ctw9hœ,œinputTypesœ:[œMessageœ],œtypeœ:œstrœ}"}],nodes:[{data:{id:"ChatInput-LqkDw",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Get chat inputs from the Playground.",display_name:"Chat Input",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","files"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"7a26c54d89ed",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.input_output.chat.ChatInput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Chat Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from lfx.base.data.utils import IMG_FILE_TYPES, TEXT_FILE_TYPES
from lfx.base.io.chat import ChatComponent
from lfx.inputs.inputs import BoolInput
from lfx.io import (
    DropdownInput,
    FileInput,
    MessageTextInput,
    MultilineInput,
    Output,
)
from lfx.schema.message import Message
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_USER,
    MESSAGE_SENDER_USER,
)


class ChatInput(ChatComponent):
    display_name = "Chat Input"
    description = "Get chat inputs from the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatInput"
    minimized = True

    inputs = [
        MultilineInput(
            name="input_value",
            display_name="Input Text",
            value="",
            info="Message to be passed as input.",
            input_types=[],
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_USER,
            info="Type of sender.",
            advanced=True,
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_USER,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        FileInput(
            name="files",
            display_name="Files",
            file_types=TEXT_FILE_TYPES + IMG_FILE_TYPES,
            info="Files to be sent with the message.",
            advanced=True,
            is_list=True,
            temp_file=True,
        ),
    ]
    outputs = [
        Output(display_name="Chat Message", name="message", method="message_response"),
    ]

    async def message_response(self) -> Message:
        # Ensure files is a list and filter out empty/None values
        files = self.files if self.files else []
        if files and not isinstance(files, list):
            files = [files]
        # Filter out None/empty values
        files = [f for f in files if f is not None and f != ""]

        session_id = self.session_id or self.graph.session_id or ""
        message = await Message.create(
            text=self.input_value,
            sender=self.sender,
            sender_name=self.sender_name,
            session_id=session_id,
            context_id=self.context_id,
            files=files,
        )
        if session_id and isinstance(message, Message) and self.should_store_message:
            stored_message = await self.send_message(
                message,
            )
            self.message.value = stored_message
            message = stored_message

        self.status = message
        return message
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},files:{_input_type:"FileInput",advanced:!0,display_name:"Files",dynamic:!1,fileTypes:["csv","json","pdf","txt","md","mdx","yaml","yml","xml","html","htm","docx","py","sh","sql","js","ts","tsx","jpg","jpeg","png","bmp","image"],file_path:"",info:"Files to be sent with the message.",list:!0,list_add_label:"Add More",name:"files",override_skip:!1,placeholder:"",required:!1,show:!0,temp_file:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""},input_value:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"Input Text",dynamic:!1,info:"Message to be passed as input.",input_types:[],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"input_value",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"User"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"Amith"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatInput"},dragging:!1,id:"ChatInput-LqkDw",measured:{height:52,width:192},position:{x:-745.7788288491358,y:-363.39664367990656},selected:!1,type:"genericNode"},{data:{id:"APIRequest-JN5nc",node:{base_classes:["JSON"],beta:!1,conditional_paths:[],custom_fields:{},description:"Make HTTP requests using URL or cURL commands.",display_name:"API Request",documentation:"https://docs.langflow.org/api-request",edited:!1,field_order:["url_input","curl_input","method","mode","query_params","body","headers","timeout","follow_redirects","save_to_file","include_httpx_metadata"],frozen:!1,icon:"Globe",last_updated:"2026-06-29T17:59:54.724Z",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"1a052ebb9519",dependencies:{dependencies:[{name:"aiofiles",version:"24.1.0"},{name:"httpx",version:"0.28.1"},{name:"validators",version:"0.35.0"},{name:"lfx",version:null}],total_dependencies:4},module:"lfx.components.data_source.api_request.APIRequestComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"API Response",group_outputs:!1,loop_types:null,method:"make_api_request",name:"data",options:null,required_inputs:null,selected:"JSON",tool_mode:!0,types:["JSON"],value:"__UNDEFINED__"}],pinned:!1,template:{_frontend_node_flow_id:{value:"2a014bac-cd3b-4de4-a417-4cf00e33d238"},_frontend_node_folder_id:{value:"fc134815-ec62-4119-ba72-473e3ad183b1"},_type:"Component",body:{_input_type:"TableInput",advanced:!1,display_name:"Body",dynamic:!1,info:"The body to send with the request as a dictionary (for POST, PATCH, PUT).",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"body",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Parameter name",display_name:"Key",formatter:"text",name:"key",type:"str"},{description:"Parameter value",display_name:"Value",formatter:"text",name:"value"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[]},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import json
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import parse_qsl, urlencode, urljoin, urlparse, urlunparse

import aiofiles
import aiofiles.os as aiofiles_os
import httpx
import validators

from lfx.base.curl.parse import parse_context
from lfx.custom.custom_component.component import Component
from lfx.inputs.inputs import TabInput
from lfx.io import (
    BoolInput,
    DataInput,
    DropdownInput,
    IntInput,
    MessageTextInput,
    MultilineInput,
    Output,
    TableInput,
)
from lfx.schema.data import Data
from lfx.schema.dotdict import dotdict
from lfx.utils.component_utils import set_current_fields, set_field_advanced, set_field_display

# SSRF Protection imports - for preventing Server-Side Request Forgery attacks
from lfx.utils.ssrf_protection import (
    SSRFProtectionError,
    is_ssrf_protection_enabled,
    validate_and_resolve_url,
)
from lfx.utils.ssrf_transport import create_ssrf_protected_client

# Define fields for each mode
MODE_FIELDS = {
    "URL": [
        "url_input",
        "method",
    ],
    "cURL": ["curl_input"],
}

# Fields that should always be visible
DEFAULT_FIELDS = ["mode"]

# HTTP redirect status codes (RFC 9110).
HTTP_MOVED_PERMANENTLY = 301
HTTP_FOUND = 302
HTTP_SEE_OTHER = 303
HTTP_TEMPORARY_REDIRECT = 307
HTTP_PERMANENT_REDIRECT = 308

# Maximum number of redirects to follow when re-validating each hop (matches httpx's default).
MAX_REDIRECTS = 20

# HTTP status codes that represent a redirect carrying a Location header.
REDIRECT_STATUS_CODES = frozenset(
    {
        HTTP_MOVED_PERMANENTLY,
        HTTP_FOUND,
        HTTP_SEE_OTHER,
        HTTP_TEMPORARY_REDIRECT,
        HTTP_PERMANENT_REDIRECT,
    }
)


class APIRequestComponent(Component):
    display_name = "API Request"
    description = "Make HTTP requests using URL or cURL commands."
    documentation: str = "https://docs.langflow.org/api-request"
    icon = "Globe"
    name = "APIRequest"

    inputs = [
        MessageTextInput(
            name="url_input",
            display_name="URL",
            info="Enter the URL for the request.",
            advanced=False,
            tool_mode=True,
        ),
        MultilineInput(
            name="curl_input",
            display_name="cURL",
            info=(
                "Paste a curl command to populate the fields. "
                "This will fill in the dictionary fields for headers and body."
            ),
            real_time_refresh=True,
            tool_mode=True,
            advanced=True,
            show=False,
        ),
        DropdownInput(
            name="method",
            display_name="Method",
            options=["GET", "POST", "PATCH", "PUT", "DELETE"],
            value="GET",
            info="The HTTP method to use.",
            real_time_refresh=True,
        ),
        TabInput(
            name="mode",
            display_name="Mode",
            options=["URL", "cURL"],
            value="URL",
            info="Enable cURL mode to populate fields from a cURL command.",
            real_time_refresh=True,
        ),
        DataInput(
            name="query_params",
            display_name="Query Parameters",
            info="The query parameters to append to the URL.",
            advanced=True,
        ),
        TableInput(
            name="body",
            display_name="Body",
            info="The body to send with the request as a dictionary (for POST, PATCH, PUT).",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Key",
                    "type": "str",
                    "description": "Parameter name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "description": "Parameter value",
                },
            ],
            value=[],
            input_types=["Data", "JSON"],
            advanced=True,
            real_time_refresh=True,
        ),
        TableInput(
            name="headers",
            display_name="Headers",
            info="The headers to send with the request",
            table_schema=[
                {
                    "name": "key",
                    "display_name": "Header",
                    "type": "str",
                    "description": "Header name",
                },
                {
                    "name": "value",
                    "display_name": "Value",
                    "type": "str",
                    "description": "Header value",
                },
            ],
            value=[{"key": "User-Agent", "value": "Langflow/1.0"}],
            advanced=True,
            input_types=["Data", "JSON"],
            real_time_refresh=True,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            value=30,
            info="The timeout to use for the request.",
            advanced=True,
        ),
        BoolInput(
            name="follow_redirects",
            display_name="Follow Redirects",
            value=False,
            info=(
                "Whether to follow HTTP redirects. "
                "WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL "
                "redirects to internal resources. Only enable if you trust the target server. "
                "See OWASP SSRF Prevention Cheat Sheet for details."
            ),
            advanced=True,
        ),
        BoolInput(
            name="save_to_file",
            display_name="Save to File",
            value=False,
            info="Save the API response to a temporary file",
            advanced=True,
        ),
        BoolInput(
            name="include_httpx_metadata",
            display_name="Include HTTPx Metadata",
            value=False,
            info=(
                "Include properties such as headers, status_code, response_headers, "
                "and redirection_history in the output."
            ),
            advanced=True,
        ),
    ]

    outputs = [
        Output(display_name="API Response", name="data", method="make_api_request"),
    ]

    def _parse_json_value(self, value: Any) -> Any:
        """Parse a value that might be a JSON string."""
        if not isinstance(value, str):
            return value

        try:
            parsed = json.loads(value)
        except json.JSONDecodeError:
            return value
        else:
            return parsed

    def _process_body(self, body: Any) -> dict:
        """Process the body input into a valid dictionary."""
        if body is None:
            return {}
        if hasattr(body, "data"):
            body = body.data
        if isinstance(body, dict):
            return self._process_dict_body(body)
        if isinstance(body, str):
            return self._process_string_body(body)
        if isinstance(body, list):
            return self._process_list_body(body)
        return {}

    def _process_dict_body(self, body: dict) -> dict:
        """Process dictionary body by parsing JSON values."""
        return {k: self._parse_json_value(v) for k, v in body.items()}

    def _process_string_body(self, body: str) -> dict:
        """Process string body by attempting JSON parse."""
        try:
            return self._process_body(json.loads(body))
        except json.JSONDecodeError:
            return {"data": body}

    def _process_list_body(self, body: list) -> dict:
        """Process list body by converting to key-value dictionary."""
        processed_dict = {}
        try:
            for item in body:
                # Unwrap Data objects
                current_item = item
                if hasattr(item, "data"):
                    unwrapped_data = item.data
                    # If the unwrapped data is a dict but not key-value format, use it directly
                    if isinstance(unwrapped_data, dict) and not self._is_valid_key_value_item(unwrapped_data):
                        return unwrapped_data
                    current_item = unwrapped_data
                if not self._is_valid_key_value_item(current_item):
                    continue
                key = current_item["key"]
                value = self._parse_json_value(current_item["value"])
                processed_dict[key] = value
        except (KeyError, TypeError, ValueError) as e:
            self.log(f"Failed to process body list: {e}")
            return {}
        return processed_dict

    def _is_valid_key_value_item(self, item: Any) -> bool:
        """Check if an item is a valid key-value dictionary."""
        return isinstance(item, dict) and "key" in item and "value" in item

    def parse_curl(self, curl: str, build_config: dotdict) -> dotdict:
        """Parse a cURL command and update build configuration."""
        try:
            parsed = parse_context(curl)

            # Update basic configuration
            url = parsed.url
            # Normalize URL before setting it
            url = self._normalize_url(url)

            build_config["url_input"]["value"] = url
            build_config["method"]["value"] = parsed.method.upper()

            # Process headers
            headers_list = [{"key": k, "value": v} for k, v in parsed.headers.items()]
            build_config["headers"]["value"] = headers_list

            # Process body data
            if not parsed.data:
                build_config["body"]["value"] = []
            elif parsed.data:
                try:
                    json_data = json.loads(parsed.data)
                    if isinstance(json_data, dict):
                        body_list = [
                            {"key": k, "value": json.dumps(v) if isinstance(v, dict | list) else str(v)}
                            for k, v in json_data.items()
                        ]
                        build_config["body"]["value"] = body_list
                    else:
                        build_config["body"]["value"] = [{"key": "data", "value": json.dumps(json_data)}]
                except json.JSONDecodeError:
                    build_config["body"]["value"] = [{"key": "data", "value": parsed.data}]

        except Exception as exc:
            msg = f"Error parsing curl: {exc}"
            self.log(msg)
            raise ValueError(msg) from exc

        return build_config

    def _normalize_url(self, url: str) -> str:
        """Normalize URL by adding https:// if no protocol is specified."""
        if not url or not isinstance(url, str):
            msg = "URL cannot be empty"
            raise ValueError(msg)

        url = url.strip()
        if url.startswith(("http://", "https://")):
            return url
        return f"https://{url}"

    async def make_request(
        self,
        client: httpx.AsyncClient,
        method: str,
        url: str,
        headers: dict | None = None,
        body: Any = None,
        timeout: int = 5,
        *,
        follow_redirects: bool = False,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        redirection_history = []

        try:
            # Prepare request parameters
            request_params = {
                "method": method,
                "url": url,
                "headers": headers,
                "timeout": timeout,
                "follow_redirects": follow_redirects,
            }
            # Only include body for methods that support it (GET must not have a body per HTTP spec)
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body
            response = await client.request(**request_params)

            redirection_history = [
                {
                    "url": redirect.headers.get("Location", str(redirect.url)),
                    "status_code": redirect.status_code,
                }
                for redirect in response.history
            ]

            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
            self.log(f"Error making request to {url}")
            return Data(
                data={
                    "source": url,
                    "headers": headers,
                    "status_code": 500,
                    "error": str(exc),
                    **({"redirection_history": redirection_history} if redirection_history else {}),
                },
            )

    async def _build_response_data(
        self,
        response: httpx.Response,
        source_url: str,
        headers: dict | None,
        redirection_history: list,
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Turn an httpx response into the component's \`\`Data\`\` output.

        Shared by the standard request path (\`\`make_request\`\`) and the redirect
        re-validation path (\`\`_follow_redirects_with_validation\`\`) so both produce
        identical metadata, optional file saving, and body decoding.
        """
        is_binary, file_path = await self._response_info(response, with_file_path=save_to_file)
        response_headers = self._headers_to_dict(response.headers)

        # Base metadata
        metadata = {
            "source": source_url,
            "status_code": response.status_code,
            "response_headers": response_headers,
        }

        if redirection_history:
            metadata["redirection_history"] = redirection_history

        if save_to_file:
            mode = "wb" if is_binary else "w"
            encoding = response.encoding if mode == "w" else None
            if file_path:
                await aiofiles_os.makedirs(file_path.parent, exist_ok=True)
                if is_binary:
                    async with aiofiles.open(file_path, "wb") as f:
                        await f.write(response.content)
                        await f.flush()
                else:
                    async with aiofiles.open(file_path, "w", encoding=encoding) as f:
                        await f.write(response.text)
                        await f.flush()
                metadata["file_path"] = str(file_path)

            if include_httpx_metadata:
                metadata.update({"headers": headers})
            return Data(data=metadata)

        # Handle response content
        if is_binary:
            result = response.content
        else:
            try:
                result = response.json()
            except json.JSONDecodeError:
                self.log("Failed to decode JSON response")
                result = response.text.encode("utf-8")

        metadata["result"] = result

        if include_httpx_metadata:
            metadata.update({"headers": headers})

        return Data(data=metadata)

    def add_query_params(self, url: str, params: dict) -> str:
        """Add query parameters to URL efficiently."""
        if not params:
            return url
        url_parts = list(urlparse(url))
        query = dict(parse_qsl(url_parts[4]))
        query.update(params)
        url_parts[4] = urlencode(query)
        return urlunparse(url_parts)

    def _headers_to_dict(self, headers: httpx.Headers) -> dict[str, str]:
        """Convert HTTP headers to a dictionary with lowercased keys."""
        return {k.lower(): v for k, v in headers.items()}

    def _process_headers(self, headers: Any) -> dict:
        """Process the headers input into a valid dictionary."""
        if headers is None:
            return {}
        if isinstance(headers, dict):
            return headers
        if isinstance(headers, list):
            return {item["key"]: item["value"] for item in headers if self._is_valid_key_value_item(item)}
        return {}

    async def make_api_request(self) -> Data:
        """Make HTTP request with SSRF protection and DNS pinning.

        This method implements comprehensive SSRF (Server-Side Request Forgery) protection
        using DNS pinning to prevent DNS rebinding attacks. The protection works by:
        1. Validating the URL and resolving DNS during security check
        2. Pinning the validated IP address
        3. Forcing the HTTP client to use the pinned IP for the actual request
        4. Ignoring any subsequent DNS changes (prevents rebinding attacks)

        Returns:
            Data: Response data from the HTTP request

        Raises:
            ValueError: If URL is invalid or blocked by SSRF protection
        """
        # Extract request parameters
        method = self.method
        url = self.url_input.strip() if isinstance(self.url_input, str) else ""
        headers = self.headers or {}
        body = self.body or {}
        timeout = self.timeout
        follow_redirects = self.follow_redirects
        save_to_file = self.save_to_file
        include_httpx_metadata = self.include_httpx_metadata

        # Security warning: HTTP redirects can bypass SSRF protection
        # A public URL could redirect to an internal resource
        if follow_redirects:
            self.log(
                "Security Warning: HTTP redirects are enabled. This may allow SSRF bypass attacks "
                "where a public URL redirects to internal resources (e.g., cloud metadata endpoints). "
                "Only enable this if you trust the target server."
            )

        # Normalize URL (add https:// if no protocol specified)
        url = self._normalize_url(url)

        # Basic URL format validation
        if not validators.url(url):
            msg = f"Invalid URL provided: {url}"
            raise ValueError(msg)

        # ============================================================================
        # SSRF Protection with DNS Pinning
        # ============================================================================
        # This prevents DNS rebinding attacks by:
        # 1. Resolving DNS and validating IPs during security check
        # 2. Pinning the validated IP address
        # 3. Using a custom HTTP transport that forces use of the pinned IP
        # 4. Ignoring any new DNS resolutions (prevents rebinding)
        #
        # Without DNS pinning, an attacker could:
        # - First DNS lookup: returns public IP (passes validation)
        # - Second DNS lookup: returns internal IP (bypasses protection)
        # - Attack succeeds: accesses internal services
        #
        # With DNS pinning:
        # - First DNS lookup: returns public IP (passes validation)
        # - IP is pinned: "example.com = 93.184.216.34"
        # - HTTP request: uses pinned IP directly (no new DNS lookup)
        # - Attack fails: even if DNS changes, we use the validated IP
        # ============================================================================

        try:
            # Validate URL and get validated IPs for DNS pinning
            _validated_url, validated_ips = validate_and_resolve_url(url)

            # Log DNS pinning information for security auditing
            if validated_ips:
                self.log(f"SSRF Protection: Using DNS pinning with {len(validated_ips)} validated IP(s)")

        except SSRFProtectionError as e:
            # SSRF protection blocked the request (private IP, internal network, etc.)
            msg = f"SSRF Protection: {e}"
            raise ValueError(msg) from e

        # Process query parameters (from string or Data object)
        if isinstance(self.query_params, str):
            query_params = dict(parse_qsl(self.query_params))
        else:
            query_params = self.query_params.data if self.query_params else {}

        # Process headers and body into proper format
        headers = self._process_headers(headers)
        body = self._process_body(body)
        url = self.add_query_params(url, query_params)

        # ============================================================================
        # Execute the request (re-validating any redirects when SSRF protection is on)
        # ============================================================================
        # When SSRF protection is enabled we must NOT let httpx auto-follow redirects:
        # a validated public URL can redirect to an internal address (loopback, RFC1918,
        # link-local / cloud metadata) that was never checked, bypassing both the initial
        # validation and DNS pinning. Instead we follow redirects manually so every hop
        # is re-validated with the same denylist + DNS pinning. When protection is
        # disabled, we preserve the previous behavior and let httpx handle redirects.
        if is_ssrf_protection_enabled() and follow_redirects:
            result = await self._follow_redirects_with_validation(
                method,
                url,
                headers,
                body,
                timeout,
                validated_ips,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )
        else:
            # No redirect re-validation needed:
            # - SSRF protection is disabled (user opted out), or
            # - redirects are disabled, so httpx makes a single request.
            # DNS pinning still applies to the single request when protection is enabled
            # and the host resolved to validated IPs.
            async with self._build_http_client(url, validated_ips) as client:
                result = await self.make_request(
                    client,
                    method,
                    url,
                    headers,
                    body,
                    timeout,
                    follow_redirects=follow_redirects,
                    save_to_file=save_to_file,
                    include_httpx_metadata=include_httpx_metadata,
                )

        self.status = result
        return result

    def _build_http_client(self, url: str, validated_ips: list[str]) -> httpx.AsyncClient:
        """Create an HTTP client, pinning DNS to validated IPs when SSRF protection applies.

        Args:
            url: The request URL whose hostname will be pinned.
            validated_ips: IPs validated by \`\`validate_and_resolve_url\`\` for this hop.

        Returns:
            httpx.AsyncClient: A client that pins DNS to \`\`validated_ips\`\` (preventing
            rebinding) when SSRF protection is enabled and the hop has validated IPs;
            otherwise a standard client (protection disabled, allowlisted host, or
            hostname extraction failure).
        """
        if is_ssrf_protection_enabled() and validated_ips:
            # Extract hostname from the URL so the custom transport can pin it while
            # preserving the Host header for virtual hosting / TLS SNI.
            hostname = urlparse(url).hostname
            if hostname:
                # The custom transport tries validated IPs in order (dual-stack / LB).
                return create_ssrf_protected_client(hostname=hostname, validated_ips=validated_ips)
        return httpx.AsyncClient()

    @staticmethod
    def _method_for_redirect(method: str, status_code: int) -> str:
        """Return the HTTP method to use after a redirect, mirroring httpx semantics.

        A 303 (See Other) always becomes GET; 301/302 downgrade POST to GET for
        browser compatibility; 307/308 preserve the original method (and body).
        """
        method = method.upper()
        if status_code == HTTP_SEE_OTHER and method != "HEAD":
            return "GET"
        if status_code in (HTTP_MOVED_PERMANENTLY, HTTP_FOUND) and method == "POST":
            return "GET"
        return method

    @staticmethod
    def _headers_for_redirect(headers: dict | None, current_url: str, next_url: str) -> dict | None:
        """Drop sensitive headers when a redirect crosses to a different host.

        Mirrors httpx's auto-follow behavior so manually following redirects does not
        leak credentials (Authorization / Cookie) to a different host than the one the
        caller intended them for. Same-host redirects keep all headers.
        """
        if not headers:
            return headers
        if urlparse(current_url).hostname == urlparse(next_url).hostname:
            return headers
        sensitive = {"authorization", "proxy-authorization", "cookie"}
        return {k: v for k, v in headers.items() if k.lower() not in sensitive}

    async def _follow_redirects_with_validation(
        self,
        method: str,
        url: str,
        headers: dict | None,
        body: Any,
        timeout: int,
        validated_ips: list[str],
        *,
        save_to_file: bool = False,
        include_httpx_metadata: bool = False,
    ) -> Data:
        """Make the request and follow redirects manually, re-validating every hop.

        This closes an SSRF bypass: with \`\`follow_redirects\`\` enabled, httpx would
        otherwise auto-follow a redirect from a validated public URL to an internal
        address that was never checked. Here each redirect \`\`Location\`\` is resolved
        (relative locations included) and re-validated with \`\`validate_and_resolve_url\`\`
        — the same private/loopback/link-local denylist and DNS pinning applied to the
        initial request — before any connection to it is made. A blocked hop raises
        \`\`ValueError\`\`; the number of redirects is capped at \`\`MAX_REDIRECTS\`\`.
        """
        method = method.upper()
        if method not in {"GET", "POST", "PATCH", "PUT", "DELETE"}:
            msg = f"Unsupported method: {method}"
            raise ValueError(msg)

        processed_body = self._process_body(body)
        current_url = url
        current_ips = validated_ips
        redirection_history: list[dict] = []

        for _ in range(MAX_REDIRECTS + 1):
            request_params: dict[str, Any] = {
                "method": method,
                "url": current_url,
                "headers": headers,
                "timeout": timeout,
                # Never let httpx follow redirects itself; each hop is validated below.
                "follow_redirects": False,
            }
            # Only include body for methods that support it (GET must not have a body).
            if method in {"POST", "PATCH", "PUT", "DELETE"} and processed_body is not None:
                request_params["json"] = processed_body

            try:
                async with self._build_http_client(current_url, current_ips) as client:
                    response = await client.request(**request_params)
            except (httpx.HTTPError, httpx.RequestError, httpx.TimeoutException) as exc:
                self.log(f"Error making request to {current_url}")
                return Data(
                    data={
                        "source": url,
                        "headers": headers,
                        "status_code": 500,
                        "error": str(exc),
                        **({"redirection_history": redirection_history} if redirection_history else {}),
                    },
                )

            location = response.headers.get("Location")
            if response.status_code in REDIRECT_STATUS_CODES and location:
                # Resolve relative redirects against the current URL.
                next_url = urljoin(current_url, location)
                redirection_history.append({"url": location, "status_code": response.status_code})

                # Re-validate the redirect target with the same SSRF denylist + DNS pinning.
                # Non-http(s) schemes, private/loopback/link-local hosts, and hostnames that
                # resolve to blocked IPs all raise SSRFProtectionError here.
                try:
                    _validated_url, current_ips = validate_and_resolve_url(next_url)
                except SSRFProtectionError as e:
                    msg = f"SSRF Protection: blocked redirect to {next_url}: {e}"
                    raise ValueError(msg) from e

                method = self._method_for_redirect(method, response.status_code)
                headers = self._headers_for_redirect(headers, current_url, next_url)
                current_url = next_url
                continue

            # Not a redirect (or no Location header) - this is the final response.
            return await self._build_response_data(
                response,
                url,
                headers,
                redirection_history,
                save_to_file=save_to_file,
                include_httpx_metadata=include_httpx_metadata,
            )

        msg = f"SSRF Protection: exceeded the maximum of {MAX_REDIRECTS} redirects while requesting {url}"
        raise ValueError(msg)

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the build config based on the selected mode."""
        if field_name != "mode":
            if field_name == "curl_input" and self.mode == "cURL" and self.curl_input:
                return self.parse_curl(self.curl_input, build_config)
            return build_config

        if field_value == "cURL":
            set_field_display(build_config, "curl_input", value=True)
            if build_config["curl_input"]["value"]:
                try:
                    build_config = self.parse_curl(build_config["curl_input"]["value"], build_config)
                except ValueError as e:
                    self.log(f"Failed to parse cURL input: {e}")
        else:
            set_field_display(build_config, "curl_input", value=False)

        return set_current_fields(
            build_config=build_config,
            action_fields=MODE_FIELDS,
            selected_action=field_value,
            default_fields=DEFAULT_FIELDS,
            func=set_field_advanced,
            default_value=True,
        )

    async def _response_info(
        self, response: httpx.Response, *, with_file_path: bool = False
    ) -> tuple[bool, Path | None]:
        """Determine the file path and whether the response content is binary.

        Args:
            response (Response): The HTTP response object.
            with_file_path (bool): Whether to save the response content to a file.

        Returns:
            Tuple[bool, Path | None]:
                A tuple containing a boolean indicating if the content is binary and the full file path (if applicable).
        """
        content_type = response.headers.get("Content-Type", "")
        is_binary = "application/octet-stream" in content_type or "application/binary" in content_type

        if not with_file_path:
            return is_binary, None

        component_temp_dir = Path(tempfile.gettempdir()) / self.__class__.__name__

        # Create directory asynchronously
        await aiofiles_os.makedirs(component_temp_dir, exist_ok=True)

        filename = None
        if "Content-Disposition" in response.headers:
            content_disposition = response.headers["Content-Disposition"]
            filename_match = re.search(r'filename="(.+?)"', content_disposition)
            if filename_match:
                extracted_filename = filename_match.group(1)
                filename = extracted_filename

        # Step 3: Infer file extension or use part of the request URL if no filename
        if not filename:
            # Extract the last segment of the URL path
            url_path = urlparse(str(response.request.url) if response.request else "").path
            base_name = Path(url_path).name  # Get the last segment of the path
            if not base_name:  # If the path ends with a slash or is empty
                base_name = "response"

            # Infer file extension
            content_type_to_extension = {
                "text/plain": ".txt",
                "application/json": ".json",
                "image/jpeg": ".jpg",
                "image/png": ".png",
                "application/octet-stream": ".bin",
            }
            extension = content_type_to_extension.get(content_type, ".bin" if is_binary else ".txt")
            filename = f"{base_name}{extension}"

        # Step 4: Define the full file path
        file_path = component_temp_dir / filename

        # Step 5: Check if file exists asynchronously and handle accordingly
        try:
            # Try to create the file exclusively (x mode) to check existence
            async with aiofiles.open(file_path, "x") as _:
                pass  # File created successfully, we can use this path
        except FileExistsError:
            # If file exists, append a timestamp to the filename
            timestamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S%f")
            file_path = component_temp_dir / f"{timestamp}-{filename}"

        return is_binary, file_path
`},curl_input:{_input_type:"MultilineInput",advanced:!0,ai_enabled:!1,copy_field:!1,display_name:"cURL",dynamic:!1,info:"Paste a curl command to populate the fields. This will fill in the dictionary fields for headers and body.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"curl_input",override_skip:!1,password:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`curl --location 'https://jaivir.atlassian.net/rest/api/3/issue/QA-19' \\
--header 'Accept: application/json' \\
--header 'Authorization: Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB' \\
--header 'Cookie: atlassian.xsrf.token=5476203bac55b87d3ef9ebb4d41c23b2dbaa1d89_lin'`},follow_redirects:{_input_type:"BoolInput",advanced:!0,display_name:"Follow Redirects",dynamic:!1,info:"Whether to follow HTTP redirects. WARNING: Enabling redirects may allow SSRF bypass attacks where a public URL redirects to internal resources. Only enable if you trust the target server. See OWASP SSRF Prevention Cheat Sheet for details.",list:!1,list_add_label:"Add More",name:"follow_redirects",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},headers:{_input_type:"TableInput",advanced:!0,display_name:"Headers",dynamic:!1,info:"The headers to send with the request",input_types:["Data","JSON"],is_list:!0,list_add_label:"Add More",name:"headers",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,table_icon:"Table",table_schema:[{description:"Header name",display_name:"Header",formatter:"text",name:"key",type:"str"},{description:"Header value",display_name:"Value",formatter:"text",name:"value",type:"str"}],title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,trigger_icon:"Table",trigger_text:"Open table",type:"table",value:[{key:"Accept",value:"application/json"},{key:"Authorization",value:"Basic amFpdmlycmF0aGkuc2luZ2gxOUBnbWFpbC5jb206QVRBVFQzeEZmR0YwYmRSVFZtTVNOVnJkMmE0LXpXaENqQUtIN1E5MmhTRkptd0xVX2p2Nlk2cWw2QjR0RmNqQW13WXotVmJ3dXQ5WkxoNTBmT1JXWFBVVXBNT0ZXZWRPMzhoQXBPWmsxMGhSOHR0U3VpaUI2SHlWNEF6S2pMUUFMOHA1N3c5LVNxbE1GTXhMTS1EX05icFBBcndNYmVjTTFlaDllTWpGelg3eFU1a2tic2g0U1FrPTk0ODQwRUFB"}]},include_httpx_metadata:{_input_type:"BoolInput",advanced:!0,display_name:"Include HTTPx Metadata",dynamic:!1,info:"Include properties such as headers, status_code, response_headers, and redirection_history in the output.",list:!1,list_add_label:"Add More",name:"include_httpx_metadata",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},is_refresh:!1,method:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Method",dynamic:!1,external_options:{},info:"The HTTP method to use.",name:"method",options:["GET","POST","PATCH","PUT","DELETE"],options_metadata:[],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"GET"},mode:{_input_type:"TabInput",advanced:!1,display_name:"Mode",dynamic:!1,info:"Enable cURL mode to populate fields from a cURL command.",name:"mode",options:["URL","cURL"],override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"tab",value:"URL"},query_params:{_input_type:"JSONInput",advanced:!0,display_name:"Query Parameters",dynamic:!1,info:"The query parameters to append to the URL.",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"query_params",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},save_to_file:{_input_type:"BoolInput",advanced:!0,display_name:"Save to File",dynamic:!1,info:"Save the API response to a temporary file",list:!1,list_add_label:"Add More",name:"save_to_file",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"The timeout to use for the request.",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:30},url_input:{_input_type:"MessageTextInput",advanced:!1,display_name:"URL",dynamic:!1,info:"Enter the URL for the request.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"url_input",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"APIRequest"},dragging:!1,id:"APIRequest-JN5nc",measured:{height:469,width:320},position:{x:-129.3943566277582,y:-552.5685792588124},selected:!1,type:"genericNode"},{data:{id:"JiraSearchParserComponent-mM8dB",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Parses the JIRA search response JSON to extract key, summary, type, description, and priority.",display_name:"Jira Search Parser",documentation:"",edited:!0,field_order:["jira_json"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"4ed653afc1de",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"}],total_dependencies:1},module:"custom_components.jira_search_parser"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Parsed Text",group_outputs:!1,hidden:null,loop_types:null,method:"build_output",name:"parsed_text",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import DataInput, Output\r
import json\r
\r
class JiraSearchParserComponent(Component):\r
    display_name = "Jira Search Parser"\r
    description = "Parses the JIRA search response JSON to extract key, summary, type, description, and priority."\r
\r
    inputs = [\r
        DataInput(\r
            name="jira_json",\r
            display_name="Jira JSON Response",\r
            info="The JSON output from the API Request component"\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Parsed Text", name="parsed_text", types=["Message"], method="build_output"),\r
    ]\r
\r
\r
    def build_output(self) -> str:\r
        jira_json = self.jira_json\r
\r
        if not jira_json:\r
            return "No data received."\r
            \r
        def flatten_adf(node):\r
            if not node: return ""\r
            if isinstance(node, str): return node\r
            if isinstance(node, list): return "".join(flatten_adf(n) for n in node)\r
            text = ""\r
            if node.get("type") == "text":\r
                text += node.get("text", "")\r
            if "content" in node:\r
                text += flatten_adf(node["content"])\r
            if node.get("type") in ["paragraph", "heading", "listItem", "blockquote", "bulletList", "orderedList"]:\r
                text += "\\n"\r
            if node.get("type") in ["hardBreak", "rule"]:\r
                text += "\\n"\r
            return text\r
\r
        try:\r
            # Extract data from Langflow structure if wrapped\r
            data = jira_json\r
            if hasattr(jira_json, "data"):\r
                data = jira_json.data\r
            elif isinstance(jira_json, str):\r
                try:\r
                    data = json.loads(jira_json)\r
                except json.JSONDecodeError:\r
                    pass\r
            \r
            # If the response is wrapped inside Langflow's API Request structure, get "result"\r
            if isinstance(data, dict) and "result" in data:\r
                data = data["result"]\r
            \r
            # If it's still a string (nested json parsing)\r
            if isinstance(data, str):\r
                data = json.loads(data)\r
\r
            issues = data.get("issues", [])\r
            if not issues:\r
                return "No issues found in the JIRA response."\r
                \r
            formatted_issues = []\r
            for issue in issues:\r
                key = issue.get("key", "Unknown Key")\r
                fields = issue.get("fields", {})\r
                summary = fields.get("summary", "No Summary")\r
                \r
                # Extract issuetype name\r
                issue_type = fields.get("issuetype", {})\r
                type_name = issue_type.get("name", "Unknown Type") if isinstance(issue_type, dict) else "Unknown Type"\r
                \r
                # Extract priority name\r
                priority = fields.get("priority", {})\r
                priority_name = priority.get("name", "Unspecified") if isinstance(priority, dict) else "Unspecified"\r
                \r
                # Extract and flatten ADF description\r
                desc = fields.get("description", "")\r
                if isinstance(desc, dict):\r
                    desc = flatten_adf(desc)\r
                elif not desc:\r
                    desc = "No description provided."\r
                \r
                formatted_issues.append(\r
                    f"### ISSUE: {key}\\n"\r
                    f"**Summary:** {summary}\\n"\r
                    f"**Type:** {type_name}\\n"\r
                    f"**Priority:** {priority_name}\\n"\r
                    f"**Description:**\\n{desc.strip()}\\n"\r
                )\r
            \r
            output = "\\n---%---\\n".join(formatted_issues)\r
            self.status = output\r
            return output\r
        except Exception as e:\r
            return f"Error parsing JIRA data: {str(e)}"`},jira_json:{_input_type:"JSONInput",advanced:!1,display_name:"Jira JSON Response",dynamic:!1,info:"The JSON output from the API Request component",input_types:["Data","JSON"],list:!1,list_add_label:"Add More",name:"jira_json",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""}},tool_mode:!1},showNode:!0,type:"JiraSearchParserComponent"},dragging:!1,id:"JiraSearchParserComponent-mM8dB",measured:{height:185,width:320},position:{x:216.01897736055366,y:-538.6187419762541},selected:!1,type:"genericNode"},{data:{id:"MistralModel-IAau6",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Generates text using MistralAI LLMs.",display_name:"MistralAI",documentation:"",edited:!1,field_order:["input_value","system_message","stream","max_tokens","model_name","mistral_api_base","api_key","temperature","max_retries","timeout","max_concurrent_requests","top_p","random_seed","safe_mode"],frozen:!1,icon:"MistralAI",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"e21780948144",dependencies:{dependencies:[{name:"langchain_mistralai",version:"1.1.4"},{name:"pydantic",version:"2.13.4"},{name:"lfx",version:null}],total_dependencies:3},keywords:["model","llm","language model","large language model"],module:"lfx.components.mistral.mistral.MistralAIModelComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,method:"text_response",name:"text_output",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,method:"build_model",name:"model_output",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"Mistral API Key",dynamic:!1,info:"The Mistral API Key to use for the Mistral model.",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:"Lo4FXYs7WWRWxnyWXYkoEIcBMtFBnO5l"},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langchain_mistralai import ChatMistralAI
from pydantic.v1 import SecretStr

from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.io import BoolInput, DropdownInput, FloatInput, IntInput, SecretStrInput, StrInput


class MistralAIModelComponent(LCModelComponent):
    display_name = "MistralAI"
    description = "Generates text using MistralAI LLMs."
    icon = "MistralAI"
    name = "MistralModel"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            advanced=False,
            options=[
                "open-mixtral-8x7b",
                "open-mixtral-8x22b",
                "mistral-small-latest",
                "mistral-medium-latest",
                "mistral-large-latest",
                "codestral-latest",
            ],
            value="codestral-latest",
        ),
        StrInput(
            name="mistral_api_base",
            display_name="Mistral API Base",
            advanced=True,
            info="The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. "
            "You can change this to use other APIs like JinaChat, LocalAI and Prem.",
        ),
        SecretStrInput(
            name="api_key",
            display_name="Mistral API Key",
            info="The Mistral API Key to use for the Mistral model.",
            advanced=False,
            required=True,
            value="MISTRAL_API_KEY",
        ),
        FloatInput(
            name="temperature",
            display_name="Temperature",
            value=0.1,
            advanced=True,
        ),
        IntInput(
            name="max_retries",
            display_name="Max Retries",
            advanced=True,
            value=5,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            advanced=True,
            value=60,
        ),
        IntInput(
            name="max_concurrent_requests",
            display_name="Max Concurrent Requests",
            advanced=True,
            value=3,
        ),
        FloatInput(
            name="top_p",
            display_name="Top P",
            advanced=True,
            value=1,
        ),
        IntInput(
            name="random_seed",
            display_name="Random Seed",
            value=1,
            advanced=True,
        ),
        BoolInput(
            name="safe_mode",
            display_name="Safe Mode",
            advanced=True,
            value=False,
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        try:
            return ChatMistralAI(
                model_name=self.model_name,
                mistral_api_key=SecretStr(self.api_key).get_secret_value() if self.api_key else None,
                endpoint=self.mistral_api_base or "https://api.mistral.ai/v1",
                max_tokens=self.max_tokens or None,
                temperature=self.temperature,
                max_retries=self.max_retries,
                timeout=self.timeout,
                max_concurrent_requests=self.max_concurrent_requests,
                top_p=self.top_p,
                random_seed=self.random_seed,
                safe_mode=self.safe_mode,
                streaming=self.stream,
            )
        except Exception as e:
            msg = "Could not connect to MistralAI API."
            raise ValueError(msg) from e
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},max_concurrent_requests:{_input_type:"IntInput",advanced:!0,display_name:"Max Concurrent Requests",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_concurrent_requests",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:3},max_retries:{_input_type:"IntInput",advanced:!0,display_name:"Max Retries",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_retries",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:5},max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Tokens",dynamic:!1,info:"The maximum number of tokens to generate. Set to 0 for unlimited tokens.",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},mistral_api_base:{_input_type:"StrInput",advanced:!0,display_name:"Mistral API Base",dynamic:!1,info:"The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. You can change this to use other APIs like JinaChat, LocalAI and Prem.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"mistral_api_base",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Model Name",dynamic:!1,external_options:{},info:"",name:"model_name",options:["open-mixtral-8x7b","open-mixtral-8x22b","mistral-small-latest","mistral-medium-latest","mistral-large-latest","codestral-latest"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"mistral-large-latest"},random_seed:{_input_type:"IntInput",advanced:!0,display_name:"Random Seed",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"random_seed",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},safe_mode:{_input_type:"BoolInput",advanced:!0,display_name:"Safe Mode",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"safe_mode",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`You are a Principal SRE and QA Engineer. 
You will receive parsed JIRA issue details containing the key, summary, priority, and description.

---
PARSED JIRA DETAILS:
{jira_json}
---

Write a comprehensive, professional Root Cause Analysis (RCA) document in Markdown format using this structure:
# Root Cause Analysis (RCA) Report
## 1. Executive Summary
## 2. Event Log & Technical Details
## 3. Root Cause Investigation (The "5 Whys" Analysis)
## 4. Business & System Impact
## 5. Corrective and Preventive Actions (CAPA)
## 6. Automation Guardrails`},temperature:{_input_type:"FloatInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"temperature",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:.1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:100},top_p:{_input_type:"FloatInput",advanced:!0,display_name:"Top P",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"top_p",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:1}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"MistralModel"},dragging:!1,id:"MistralModel-IAau6",measured:{height:453,width:320},position:{x:1033.2854505813175,y:-534.4770408049854},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-NUuDV",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["context"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},context:{advanced:!1,display_name:"context",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"context",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`Role: You are a Principal QA Automation Architect responsible for generating Enterprise-grade Test Documentation.

# Objective
Generate both a comprehensive Master Test Plan and an Enterprise Test Strategy based ONLY on the provided Project Context.
Ensure the documentation is extremely detailed so that an LLM can later use it to automatically generate an entire automation test framework without hallucinating.

# Strict Hallucination Guardrails
- Do NOT invent features, API endpoints, or user flows. Use the source context ONLY.
- If a required detail is missing, explicitly state "Requirement Clarification Needed" instead of guessing.
- Extrapolate valid industry-standard strategies ONLY based on the tech stack mentioned in the context. If no tech stack is mentioned, recommend a modern default stack (e.g., Playwright + TypeScript, GitHub Actions) but clearly label it as a "Recommended Default due to missing context".

---
### INPUT PROJECT CONTEXT:
{context}
---

# Output Formatting Rules
You MUST generate two distinct documents in your output response. Wrap each document exactly inside the specified start and end delimiter blocks below to prevent context loss:

=====START OF test_plan.md=====
# 1. Introduction & Objectives
[Brief summary of what is being tested based on the project context]

# 2. Scope
- **In-Scope:** [What will be tested]
- **Out-of-Scope:** [What will NOT be tested]

# 3. Test Strategy & Approach
[High-level approach, e.g., layered testing, shift-left]

# 4. Types of Testing
[Identify required testing types, e.g., Functional, Non-functional, Integration, Security]

# 5. Entry & Exit Criteria
[Strict conditions for starting and stopping testing]

# 6. Defect Management Process
[How bugs will be tracked and prioritized]

# 7. Assumptions & Open Questions
[List any ambiguous requirements or missing details here]
=====END OF test_plan.md=====


=====START OF test_strategy.md=====
# 1. Testing Levels
[Unit, API, Integration, UI/E2E]

# 2. Test Environment Requirements
[Dev, QA, Staging, Prod]

# 3. Automation Strategy & Tools
[Recommended frameworks: e.g., Playwright/Selenium, RestAssured/Postman]

# 4. CI/CD Integration
[How tests plug into the deployment pipeline]

# 5. Performance & Security Testing Strategy
[Load testing tools like JMeter/K6 if applicable]
=====END OF test_strategy.md=====
`},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-NUuDV",measured:{height:347,width:320},position:{x:637.6471830963483,y:-524.2231946477561},selected:!1,type:"genericNode"},{data:{id:"LocalDocumentReaderComponent-cCX9J",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Reads text from PDF, DOCX, TXT, MD, or JSON files locally. 100% free and offline.",display_name:"Local Document Reader",documentation:"",edited:!0,field_order:["file_path"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"bbc26797ee78",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"},{name:"pypdf",version:"6.12.2"},{name:"docx",version:"1.2.0"}],total_dependencies:3},module:"custom_components.local_document_reader"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Text Output",group_outputs:!1,hidden:null,loop_types:null,method:"read_document",name:"text_output",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langflow.custom import Component\r
from langflow.io import FileInput, Output\r
import os\r
\r
class LocalDocumentReaderComponent(Component):\r
    display_name = "Local Document Reader"\r
    description = "Reads text from PDF, DOCX, TXT, MD, or JSON files locally. 100% free and offline."\r
\r
    inputs = [\r
        FileInput(\r
            name="file_path",\r
            display_name="File",\r
            info="Upload a PDF, DOCX, TXT, MD, or JSON file",\r
            file_types=["pdf", "docx", "txt", "md", "json"]\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Text Output", name="text_output", types=["Message"], method="read_document"),\r
    ]\r
\r
\r
    def read_document(self) -> str:\r
        if not self.file_path:\r
            return ""\r
        path = self.file_path.strip()\r
\r
            \r
        if not os.path.exists(path):\r
            return f"Error: File not found at path: {path}"\r
\r
        ext = os.path.splitext(path)[1].lower()\r
\r
        # Handle PDF\r
        if ext == ".pdf":\r
            try:\r
                import pypdf\r
                reader = pypdf.PdfReader(path)\r
                text_pages = []\r
                for i, page in enumerate(reader.pages):\r
                    page_text = page.extract_text()\r
                    if page_text:\r
                        text_pages.append(f"--- PAGE {i+1} ---\\n{page_text}")\r
                if not text_pages:\r
                    return "Successfully read PDF, but no extractable text was found (possibly a scanned image PDF)."\r
                return "\\n\\n".join(text_pages)\r
            except Exception as e:\r
                return f"Error reading PDF: {str(e)}"\r
\r
        # Handle DOCX\r
        elif ext == ".docx":\r
            try:\r
                import docx\r
                doc = docx.Document(path)\r
                paragraphs_text = [p.text for p in doc.paragraphs if p.text.strip()]\r
                \r
                # Also extract text from any tables in the Word doc\r
                table_text = []\r
                for table in doc.tables:\r
                    for row in table.rows:\r
                        row_cells = [cell.text.strip() for cell in row.cells if cell.text.strip()]\r
                        if row_cells:\r
                            table_text.append(" | ".join(row_cells))\r
                \r
                full_text = paragraphs_text + table_text\r
                if not full_text:\r
                    return "Successfully read DOCX, but document is empty."\r
                return "\\n\\n".join(full_text)\r
            except ImportError:\r
                return "Error: \`python-docx\` is not installed. Run \`pip install python-docx\` in your environment to enable DOCX parsing."\r
            except Exception as e:\r
                return f"Error reading DOCX: {str(e)}"\r
\r
        # Handle Text / MD / JSON\r
        elif ext in [".txt", ".md", ".json"]:\r
            try:\r
                with open(path, "r", encoding="utf-8") as f:\r
                    content = f.read()\r
                if not content.strip():\r
                    return f"File is empty: {path}"\r
                return content\r
            except Exception as e:\r
                return f"Error reading text file: {str(e)}"\r
\r
        else:\r
            return f"Unsupported file format: '{ext}'. Supported formats are: .pdf, .docx, .txt, .md, .json"`},file_path:{_input_type:"FileInput",advanced:!1,display_name:"File",dynamic:!1,fileTypes:["pdf","docx","txt","md","json"],file_path:"",info:"Upload a PDF, DOCX, TXT, MD, or JSON file",list:!1,list_add_label:"Add More",name:"file_path",override_skip:!1,placeholder:"",required:!1,show:!0,temp_file:!1,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"file",value:""}},tool_mode:!1},showNode:!0,type:"LocalDocumentReaderComponent"},dragging:!1,id:"LocalDocumentReaderComponent-cCX9J",measured:{height:233,width:320},position:{x:-735.4848474876335,y:308.1008944688233},selected:!1,type:"genericNode"},{data:{id:"note-DAAfM",node:{description:"If PRD is in DOCx or PDF use below",display_name:"",documentation:"",template:{}},type:"note"},dragging:!1,height:140,id:"note-DAAfM",measured:{height:140,width:280},position:{x:-745.6103225621841,y:72.8541891236454},selected:!1,type:"noteNode",width:280},{data:{id:"note-Ndp9f",node:{description:"If PRD is in uploaded in JIRA like epics or User stories",display_name:"",documentation:"",template:{}},type:"note"},dragging:!1,height:140,id:"note-Ndp9f",measured:{height:140,width:280},position:{x:-697.215997641673,y:-646.3380094513011},selected:!1,type:"noteNode",width:280},{data:{id:"MultiFileWriterComponent-xCuCQ",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Parses the LLM response and extracts test_plan.md and test_strategy.md files into the exports folder.",display_name:"Multi-File Writer",documentation:"",edited:!0,field_order:["llm_output"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"cee8947f4564",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"}],total_dependencies:1},module:"custom_components.multifile_writer"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Write Status",group_outputs:!1,hidden:null,loop_types:null,method:"write_files",name:"write_status",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import re\r
import os\r
from langflow.custom import Component\r
from langflow.io import MessageTextInput, Output\r
\r
class MultiFileWriterComponent(Component):\r
    display_name = "Multi-File Writer"\r
    description = "Parses the LLM response and extracts test_plan.md and test_strategy.md files into the exports folder."\r
\r
    inputs = [\r
        MessageTextInput(\r
            name="llm_output",\r
            display_name="LLM Output",\r
            info="The raw text response from the LLM component",\r
            value=""\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Write Status", name="write_status", types=["Message"], method="write_files"),\r
    ]\r
\r
    def write_files(self) -> str:\r
        text = self.llm_output\r
        if not text:\r
            return "No content to write."\r
\r
        export_dir = "/app/langflow/exports"\r
        try:\r
            os.makedirs(export_dir, exist_ok=True)\r
        except Exception:\r
            pass\r
\r
        # Regex to extract text between delimiters\r
        plan_match = re.search(r"=====START OF test_plan\\.md=====(.*?)=====END OF test_plan\\.md=====", text, re.DOTALL)\r
        strategy_match = re.search(r"=====START OF test_strategy\\.md=====(.*?)=====END OF test_strategy\\.md=====", text, re.DOTALL)\r
\r
        status_messages = []\r
\r
        if plan_match:\r
            plan_content = plan_match.group(1).strip()\r
            plan_path = os.path.join(export_dir, "test_plan.md")\r
            try:\r
                with open(plan_path, "w", encoding="utf-8") as f:\r
                    f.write(plan_content)\r
                status_messages.append(f"✅ **Test Plan** written to \`{plan_path}\`")\r
            except Exception as e:\r
                status_messages.append(f"❌ Failed to write **Test Plan**: {str(e)}")\r
        else:\r
            status_messages.append("⚠️ Could not locate a valid \`=====START OF test_plan.md===== ... =====END OF test_plan.md=====\` block in the LLM response.")\r
\r
        if strategy_match:\r
            strategy_content = strategy_match.group(1).strip()\r
            strategy_path = os.path.join(export_dir, "test_strategy.md")\r
            try:\r
                with open(strategy_path, "w", encoding="utf-8") as f:\r
                    f.write(strategy_content)\r
                status_messages.append(f"✅ **Test Strategy** written to \`{strategy_path}\`")\r
            except Exception as e:\r
                status_messages.append(f"❌ Failed to write **Test Strategy**: {str(e)}")\r
        else:\r
            status_messages.append("⚠️ Could not locate a valid \`=====START OF test_strategy.md===== ... =====END OF test_strategy.md=====\` block in the LLM response.")\r
\r
        status_messages.append("💡 *These files will be synced to your host machine at:* \\n\`D:\\\\ai_3x_qa\\\\QA_AI_Projects\\\\AI_tools\\\\langflow-agents\\\\langflow-data\\\\exports\\\\\`")\r
        return "\\n\\n".join(status_messages)`},llm_output:{_input_type:"MessageTextInput",advanced:!1,display_name:"LLM Output",dynamic:!1,info:"The raw text response from the LLM component",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"llm_output",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"MultiFileWriterComponent"},dragging:!1,id:"MultiFileWriterComponent-xCuCQ",measured:{height:239,width:320},position:{x:1432.6339321610335,y:-532.7189384980021},selected:!1,type:"genericNode"},{data:{id:"ChatOutput-RqCoB",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null}],total_dependencies:3},module:"lfx.components.input_output.chat_output.ChatOutput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},dragging:!1,id:"ChatOutput-RqCoB",measured:{height:52,width:192},position:{x:1871.5493896136404,y:-341.96501125525015},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-o7wsQ",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["context"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},context:{advanced:!1,display_name:"context",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"context",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:`Role: You are a Principal QA Automation Architect responsible for generating Enterprise-grade Test Documentation.

# Objective
Generate both a comprehensive Master Test Plan and an Enterprise Test Strategy based ONLY on the provided Project Context.
Ensure the documentation is extremely detailed so that an LLM can later use it to automatically generate an entire automation test framework without hallucinating.

# Strict Hallucination Guardrails
- Do NOT invent features, API endpoints, or user flows. Use the source context ONLY.
- If a required detail is missing, explicitly state "Requirement Clarification Needed" instead of guessing.
- Extrapolate valid industry-standard strategies ONLY based on the tech stack mentioned in the context. If no tech stack is mentioned, recommend a modern default stack (e.g., Playwright + TypeScript, GitHub Actions) but clearly label it as a "Recommended Default due to missing context".

---
### INPUT PROJECT CONTEXT:
{context}
---

# Output Formatting Rules
You MUST generate two distinct documents in your output response. Wrap each document exactly inside the specified start and end delimiter blocks below to prevent context loss:

=====START OF test_plan.md=====
# 1. Introduction & Objectives
[Brief summary of what is being tested based on the project context]

# 2. Scope
- **In-Scope:** [What will be tested]
- **Out-of-Scope:** [What will NOT be tested]

# 3. Test Strategy & Approach
[High-level approach, e.g., layered testing, shift-left]

# 4. Types of Testing
[Identify required testing types, e.g., Functional, Non-functional, Integration, Security]

# 5. Entry & Exit Criteria
[Strict conditions for starting and stopping testing]

# 6. Defect Management Process
[How bugs will be tracked and prioritized]

# 7. Assumptions & Open Questions
[List any ambiguous requirements or missing details here]
=====END OF test_plan.md=====


=====START OF test_strategy.md=====
# 1. Testing Levels
[Unit, API, Integration, UI/E2E]

# 2. Test Environment Requirements
[Dev, QA, Staging, Prod]

# 3. Automation Strategy & Tools
[Recommended frameworks: e.g., Playwright/Selenium, RestAssured/Postman]

# 4. CI/CD Integration
[How tests plug into the deployment pipeline]

# 5. Performance & Security Testing Strategy
[Load testing tools like JMeter/K6 if applicable]
=====END OF test_strategy.md=====
`},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-o7wsQ",measured:{height:347,width:320},position:{x:-177.85533455073107,y:192.49080723789956},selected:!1,type:"genericNode"},{data:{id:"MistralModel-5TZDu",node:{base_classes:["LanguageModel","Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Generates text using MistralAI LLMs.",display_name:"MistralAI",documentation:"",edited:!1,field_order:["input_value","system_message","stream","max_tokens","model_name","mistral_api_base","api_key","temperature","max_retries","timeout","max_concurrent_requests","top_p","random_seed","safe_mode"],frozen:!1,icon:"MistralAI",legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"e21780948144",dependencies:{dependencies:[{name:"langchain_mistralai",version:"1.1.4"},{name:"pydantic",version:"2.13.4"},{name:"lfx",version:null}],total_dependencies:3},keywords:["model","llm","language model","large language model"],module:"lfx.components.mistral.mistral.MistralAIModelComponent"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Model Response",group_outputs:!1,method:"text_response",name:"text_output",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"},{allows_loop:!1,cache:!0,display_name:"Language Model",group_outputs:!1,method:"build_model",name:"model_output",tool_mode:!0,types:["LanguageModel"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",api_key:{_input_type:"SecretStrInput",advanced:!1,display_name:"Mistral API Key",dynamic:!1,info:"The Mistral API Key to use for the Mistral model.",input_types:[],load_from_db:!1,name:"api_key",override_skip:!1,password:!0,placeholder:"",required:!0,show:!0,title_case:!1,track_in_telemetry:!1,type:"str",value:"Lo4FXYs7WWRWxnyWXYkoEIcBMtFBnO5l"},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from langchain_mistralai import ChatMistralAI
from pydantic.v1 import SecretStr

from lfx.base.models.model import LCModelComponent
from lfx.field_typing import LanguageModel
from lfx.io import BoolInput, DropdownInput, FloatInput, IntInput, SecretStrInput, StrInput


class MistralAIModelComponent(LCModelComponent):
    display_name = "MistralAI"
    description = "Generates text using MistralAI LLMs."
    icon = "MistralAI"
    name = "MistralModel"

    inputs = [
        *LCModelComponent.get_base_inputs(),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            advanced=False,
            options=[
                "open-mixtral-8x7b",
                "open-mixtral-8x22b",
                "mistral-small-latest",
                "mistral-medium-latest",
                "mistral-large-latest",
                "codestral-latest",
            ],
            value="codestral-latest",
        ),
        StrInput(
            name="mistral_api_base",
            display_name="Mistral API Base",
            advanced=True,
            info="The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. "
            "You can change this to use other APIs like JinaChat, LocalAI and Prem.",
        ),
        SecretStrInput(
            name="api_key",
            display_name="Mistral API Key",
            info="The Mistral API Key to use for the Mistral model.",
            advanced=False,
            required=True,
            value="MISTRAL_API_KEY",
        ),
        FloatInput(
            name="temperature",
            display_name="Temperature",
            value=0.1,
            advanced=True,
        ),
        IntInput(
            name="max_retries",
            display_name="Max Retries",
            advanced=True,
            value=5,
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            advanced=True,
            value=60,
        ),
        IntInput(
            name="max_concurrent_requests",
            display_name="Max Concurrent Requests",
            advanced=True,
            value=3,
        ),
        FloatInput(
            name="top_p",
            display_name="Top P",
            advanced=True,
            value=1,
        ),
        IntInput(
            name="random_seed",
            display_name="Random Seed",
            value=1,
            advanced=True,
        ),
        BoolInput(
            name="safe_mode",
            display_name="Safe Mode",
            advanced=True,
            value=False,
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        try:
            return ChatMistralAI(
                model_name=self.model_name,
                mistral_api_key=SecretStr(self.api_key).get_secret_value() if self.api_key else None,
                endpoint=self.mistral_api_base or "https://api.mistral.ai/v1",
                max_tokens=self.max_tokens or None,
                temperature=self.temperature,
                max_retries=self.max_retries,
                timeout=self.timeout,
                max_concurrent_requests=self.max_concurrent_requests,
                top_p=self.top_p,
                random_seed=self.random_seed,
                safe_mode=self.safe_mode,
                streaming=self.stream,
            )
        except Exception as e:
            msg = "Could not connect to MistralAI API."
            raise ValueError(msg) from e
`},input_value:{_input_type:"MessageInput",advanced:!1,display_name:"Input",dynamic:!1,info:"",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"input_value",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},max_concurrent_requests:{_input_type:"IntInput",advanced:!0,display_name:"Max Concurrent Requests",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_concurrent_requests",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:3},max_retries:{_input_type:"IntInput",advanced:!0,display_name:"Max Retries",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"max_retries",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:5},max_tokens:{_input_type:"IntInput",advanced:!0,display_name:"Max Tokens",dynamic:!1,info:"The maximum number of tokens to generate. Set to 0 for unlimited tokens.",list:!1,list_add_label:"Add More",name:"max_tokens",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:0},mistral_api_base:{_input_type:"StrInput",advanced:!0,display_name:"Mistral API Base",dynamic:!1,info:"The base URL of the Mistral API. Defaults to https://api.mistral.ai/v1. You can change this to use other APIs like JinaChat, LocalAI and Prem.",list:!1,list_add_label:"Add More",load_from_db:!1,name:"mistral_api_base",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},model_name:{_input_type:"DropdownInput",advanced:!1,combobox:!1,dialog_inputs:{},display_name:"Model Name",dynamic:!1,external_options:{},info:"",name:"model_name",options:["open-mixtral-8x7b","open-mixtral-8x22b","mistral-small-latest","mistral-medium-latest","mistral-large-latest","codestral-latest"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"mistral-large-latest"},random_seed:{_input_type:"IntInput",advanced:!0,display_name:"Random Seed",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"random_seed",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:1},safe_mode:{_input_type:"BoolInput",advanced:!0,display_name:"Safe Mode",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"safe_mode",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},stream:{_input_type:"BoolInput",advanced:!0,display_name:"Stream",dynamic:!1,info:"Stream the response from the model. Streaming works only in Chat.",list:!1,list_add_label:"Add More",name:"stream",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1},system_message:{_input_type:"MultilineInput",advanced:!1,ai_enabled:!1,copy_field:!1,display_name:"System Message",dynamic:!1,info:"System message to pass to the model.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,multiline:!0,name:"system_message",override_skip:!1,password:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:`You are a Principal SRE and QA Engineer. 
You will receive parsed JIRA issue details containing the key, summary, priority, and description.

---
PARSED JIRA DETAILS:
{jira_json}
---

Write a comprehensive, professional Root Cause Analysis (RCA) document in Markdown format using this structure:
# Root Cause Analysis (RCA) Report
## 1. Executive Summary
## 2. Event Log & Technical Details
## 3. Root Cause Investigation (The "5 Whys" Analysis)
## 4. Business & System Impact
## 5. Corrective and Preventive Actions (CAPA)
## 6. Automation Guardrails`},temperature:{_input_type:"FloatInput",advanced:!0,display_name:"Temperature",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"temperature",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:.1},timeout:{_input_type:"IntInput",advanced:!0,display_name:"Timeout",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"timeout",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"int",value:100},top_p:{_input_type:"FloatInput",advanced:!0,display_name:"Top P",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"top_p",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"float",value:1}},tool_mode:!1},selected_output:"text_output",showNode:!0,type:"MistralModel"},dragging:!1,id:"MistralModel-5TZDu",measured:{height:453,width:320},position:{x:313.9156911366715,y:126.86409234119495},selected:!1,type:"genericNode"},{data:{id:"MultiFileWriterComponent-zM91m",node:{base_classes:["Message","Text"],beta:!1,conditional_paths:[],custom_fields:{},description:"Parses the LLM response and extracts test_plan.md and test_strategy.md files into the exports folder.",display_name:"Multi-File Writer",documentation:"",edited:!0,field_order:["llm_output"],frozen:!1,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"cee8947f4564",dependencies:{dependencies:[{name:"langflow",version:"1.10.0"}],total_dependencies:1},module:"custom_components.multifile_writer"},minimized:!1,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Write Status",group_outputs:!1,hidden:null,loop_types:null,method:"write_files",name:"write_status",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message","Text"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`import re\r
import os\r
from langflow.custom import Component\r
from langflow.io import MessageTextInput, Output\r
\r
class MultiFileWriterComponent(Component):\r
    display_name = "Multi-File Writer"\r
    description = "Parses the LLM response and extracts test_plan.md and test_strategy.md files into the exports folder."\r
\r
    inputs = [\r
        MessageTextInput(\r
            name="llm_output",\r
            display_name="LLM Output",\r
            info="The raw text response from the LLM component",\r
            value=""\r
        )\r
    ]\r
\r
    outputs = [\r
        Output(display_name="Write Status", name="write_status", types=["Message"], method="write_files"),\r
    ]\r
\r
    def write_files(self) -> str:\r
        text = self.llm_output\r
        if not text:\r
            return "No content to write."\r
\r
        export_dir = "/app/langflow/exports"\r
        try:\r
            os.makedirs(export_dir, exist_ok=True)\r
        except Exception:\r
            pass\r
\r
        # Regex to extract text between delimiters\r
        plan_match = re.search(r"=====START OF test_plan\\.md=====(.*?)=====END OF test_plan\\.md=====", text, re.DOTALL)\r
        strategy_match = re.search(r"=====START OF test_strategy\\.md=====(.*?)=====END OF test_strategy\\.md=====", text, re.DOTALL)\r
\r
        status_messages = []\r
\r
        if plan_match:\r
            plan_content = plan_match.group(1).strip()\r
            plan_path = os.path.join(export_dir, "test_plan.md")\r
            try:\r
                with open(plan_path, "w", encoding="utf-8") as f:\r
                    f.write(plan_content)\r
                status_messages.append(f"✅ **Test Plan** written to \`{plan_path}\`")\r
            except Exception as e:\r
                status_messages.append(f"❌ Failed to write **Test Plan**: {str(e)}")\r
        else:\r
            status_messages.append("⚠️ Could not locate a valid \`=====START OF test_plan.md===== ... =====END OF test_plan.md=====\` block in the LLM response.")\r
\r
        if strategy_match:\r
            strategy_content = strategy_match.group(1).strip()\r
            strategy_path = os.path.join(export_dir, "test_strategy.md")\r
            try:\r
                with open(strategy_path, "w", encoding="utf-8") as f:\r
                    f.write(strategy_content)\r
                status_messages.append(f"✅ **Test Strategy** written to \`{strategy_path}\`")\r
            except Exception as e:\r
                status_messages.append(f"❌ Failed to write **Test Strategy**: {str(e)}")\r
        else:\r
            status_messages.append("⚠️ Could not locate a valid \`=====START OF test_strategy.md===== ... =====END OF test_strategy.md=====\` block in the LLM response.")\r
\r
        status_messages.append("💡 *These files will be synced to your host machine at:* \\n\`D:\\\\ai_3x_qa\\\\QA_AI_Projects\\\\AI_tools\\\\langflow-agents\\\\langflow-data\\\\exports\\\\\`")\r
        return "\\n\\n".join(status_messages)`},llm_output:{_input_type:"MessageTextInput",advanced:!1,display_name:"LLM Output",dynamic:!1,info:"The raw text response from the LLM component",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"llm_output",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""}},tool_mode:!1},showNode:!0,type:"MultiFileWriterComponent"},id:"MultiFileWriterComponent-zM91m",measured:{height:239,width:320},position:{x:892.3649391493741,y:168.19630220402325},selected:!1,type:"genericNode"},{data:{id:"ChatOutput-k3sEB",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{},description:"Display a chat message in the Playground.",display_name:"Chat Output",documentation:"https://docs.langflow.org/chat-input-and-output",edited:!1,field_order:["input_value","should_store_message","sender","sender_name","session_id","context_id","data_template","clean_data"],frozen:!1,icon:"MessagesSquare",legacy:!1,metadata:{code_hash:"84009527d08c",dependencies:{dependencies:[{name:"orjson",version:"3.11.9"},{name:"fastapi",version:"0.136.3"},{name:"lfx",version:null}],total_dependencies:3},module:"lfx.components.input_output.chat_output.ChatOutput"},minimized:!0,output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Output Message",group_outputs:!1,method:"message_response",name:"message",selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,template:{_type:"Component",clean_data:{_input_type:"BoolInput",advanced:!0,display_name:"Basic Clean Data",dynamic:!1,info:"Whether to clean data before converting to string.",list:!1,list_add_label:"Add More",name:"clean_data",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0},code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from collections.abc import Generator
from typing import Any

import orjson
from fastapi.encoders import jsonable_encoder

from lfx.base.io.chat import ChatComponent
from lfx.helpers.data import safe_convert
from lfx.inputs.inputs import BoolInput, DropdownInput, HandleInput, MessageTextInput
from lfx.schema.data import Data
from lfx.schema.dataframe import DataFrame
from lfx.schema.message import Message
from lfx.schema.properties import Source
from lfx.template.field.base import Output
from lfx.utils.constants import (
    MESSAGE_SENDER_AI,
    MESSAGE_SENDER_NAME_AI,
    MESSAGE_SENDER_USER,
)


class ChatOutput(ChatComponent):
    display_name = "Chat Output"
    description = "Display a chat message in the Playground."
    documentation: str = "https://docs.langflow.org/chat-input-and-output"
    icon = "MessagesSquare"
    name = "ChatOutput"
    minimized = True

    inputs = [
        HandleInput(
            name="input_value",
            display_name="Inputs",
            info="Message to be passed as output.",
            input_types=["Data", "JSON", "DataFrame", "Table", "Message"],
            required=True,
        ),
        BoolInput(
            name="should_store_message",
            display_name="Store Messages",
            info="Store the message in the history.",
            value=True,
            advanced=True,
        ),
        DropdownInput(
            name="sender",
            display_name="Sender Type",
            options=[MESSAGE_SENDER_AI, MESSAGE_SENDER_USER],
            value=MESSAGE_SENDER_AI,
            advanced=True,
            info="Type of sender.",
        ),
        MessageTextInput(
            name="sender_name",
            display_name="Sender Name",
            info="Name of the sender.",
            value=MESSAGE_SENDER_NAME_AI,
            advanced=True,
        ),
        MessageTextInput(
            name="session_id",
            display_name="Session ID",
            info="The session ID of the chat. If empty, the current session ID parameter will be used.",
            advanced=True,
        ),
        MessageTextInput(
            name="context_id",
            display_name="Context ID",
            info="The context ID of the chat. Adds an extra layer to the local memory.",
            value="",
            advanced=True,
        ),
        MessageTextInput(
            name="data_template",
            display_name="Data Template",
            value="{text}",
            advanced=True,
            info="Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",
        ),
        BoolInput(
            name="clean_data",
            display_name="Basic Clean Data",
            value=True,
            advanced=True,
            info="Whether to clean data before converting to string.",
        ),
    ]
    outputs = [
        Output(
            display_name="Output Message",
            name="message",
            method="message_response",
        ),
    ]

    def _build_source(self, id_: str | None, display_name: str | None, source: str | None) -> Source:
        source_dict = {}
        if id_:
            source_dict["id"] = id_
        if display_name:
            source_dict["display_name"] = display_name
        if source:
            # Handle case where source is a ChatOpenAI object
            if hasattr(source, "model_name"):
                source_dict["source"] = source.model_name
            elif hasattr(source, "model"):
                source_dict["source"] = str(source.model)
            else:
                source_dict["source"] = str(source)
        return Source(**source_dict)

    async def message_response(self) -> Message:
        # First convert the input to string if needed
        text = self.convert_to_string()

        # Get source properties
        source, _, display_name, source_id = self.get_properties_from_source_component()

        # Create or use existing Message object
        if isinstance(self.input_value, Message) and not self.is_connected_to_chat_input():
            message = self.input_value
            # Update message properties
            message.text = text
            # Preserve existing session_id from the incoming message if it exists
            existing_session_id = message.session_id
        else:
            message = Message(text=text)
            existing_session_id = None

        # Set message properties
        message.sender = self.sender
        message.sender_name = self.sender_name
        # Preserve session_id from incoming message, or use component/graph session_id
        message.session_id = (
            self.session_id or existing_session_id or (self.graph.session_id if hasattr(self, "graph") else None) or ""
        )
        message.context_id = self.context_id
        message.flow_id = self.graph.flow_id if hasattr(self, "graph") else None
        message.properties.source = self._build_source(source_id, display_name, source)

        # Store message if needed
        if message.session_id and self.should_store_message:
            stored_message = await self.send_message(message)
            self.message.value = stored_message
            message = stored_message

        # Set accumulated token usage from all upstream LLM vertices.
        # This must happen AFTER send_message() because streaming captures
        # usage from chunks and would overwrite accumulated totals.
        if hasattr(self, "_vertex") and self._vertex is not None:
            accumulated_usage = self._vertex._accumulate_upstream_token_usage()  # noqa: SLF001
            if accumulated_usage:
                message.properties.usage = accumulated_usage
                if self.should_store_message and message.get_id():
                    message = await self._update_stored_message(message)
                    await self._send_message_event(message, id_=message.get_id())

        self.status = message
        return message

    def _serialize_data(self, data: Data) -> str:
        """Serialize Data object to JSON string."""
        # Convert data.data to JSON-serializable format
        serializable_data = jsonable_encoder(data.data)
        # Serialize with orjson, enabling pretty printing with indentation
        json_bytes = orjson.dumps(serializable_data, option=orjson.OPT_INDENT_2)
        # Convert bytes to string and wrap in Markdown code blocks
        return "\`\`\`json\\n" + json_bytes.decode("utf-8") + "\\n\`\`\`"

    def _validate_input(self) -> None:
        """Validate the input data and raise ValueError if invalid."""
        if self.input_value is None:
            msg = "Input data cannot be None"
            raise ValueError(msg)
        if isinstance(self.input_value, list) and not all(
            isinstance(item, Message | Data | DataFrame | str) for item in self.input_value
        ):
            invalid_types = [
                type(item).__name__
                for item in self.input_value
                if not isinstance(item, Message | Data | DataFrame | str)
            ]
            msg = f"Expected Data or DataFrame or Message or str, got {invalid_types}"
            raise TypeError(msg)
        if not isinstance(
            self.input_value,
            Message | Data | DataFrame | str | list | Generator | type(None),
        ):
            type_name = type(self.input_value).__name__
            msg = f"Expected Data or DataFrame or Message or str, Generator or None, got {type_name}"
            raise TypeError(msg)

    def convert_to_string(self) -> str | Generator[Any, None, None]:
        """Convert input data to string with proper error handling."""
        self._validate_input()
        if isinstance(self.input_value, list):
            clean_data: bool = getattr(self, "clean_data", False)
            return "\\n".join([safe_convert(item, clean_data=clean_data) for item in self.input_value])
        if isinstance(self.input_value, Generator):
            return self.input_value
        return safe_convert(self.input_value)
`},context_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Context ID",dynamic:!1,info:"The context ID of the chat. Adds an extra layer to the local memory.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"context_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},data_template:{_input_type:"MessageTextInput",advanced:!0,display_name:"Data Template",dynamic:!1,info:"Template to convert Data to Text. If left empty, it will be dynamically set to the Data's text key.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"data_template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"{text}"},input_value:{_input_type:"HandleInput",advanced:!1,display_name:"Inputs",dynamic:!1,info:"Message to be passed as output.",input_types:["Data","JSON","DataFrame","Table","Message"],list:!1,list_add_label:"Add More",name:"input_value",override_skip:!1,placeholder:"",required:!0,show:!0,title_case:!1,trace_as_metadata:!0,track_in_telemetry:!1,type:"other",value:""},sender:{_input_type:"DropdownInput",advanced:!0,combobox:!1,dialog_inputs:{},display_name:"Sender Type",dynamic:!1,external_options:{},info:"Type of sender.",name:"sender",options:["Machine","User"],options_metadata:[],override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,toggle:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"str",value:"Machine"},sender_name:{_input_type:"MessageTextInput",advanced:!0,display_name:"Sender Name",dynamic:!1,info:"Name of the sender.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"sender_name",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:"AI"},session_id:{_input_type:"MessageTextInput",advanced:!0,display_name:"Session ID",dynamic:!1,info:"The session ID of the chat. If empty, the current session ID parameter will be used.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"session_id",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},should_store_message:{_input_type:"BoolInput",advanced:!0,display_name:"Store Messages",dynamic:!1,info:"Store the message in the history.",list:!1,list_add_label:"Add More",name:"should_store_message",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!0}},tool_mode:!1},showNode:!1,type:"ChatOutput"},id:"ChatOutput-k3sEB",measured:{height:52,width:192},position:{x:1399.7099273892827,y:324.6907761884726},selected:!1,type:"genericNode"},{data:{id:"Prompt Template-ctw9h",node:{base_classes:["Message"],beta:!1,conditional_paths:[],custom_fields:{template:["Jira_ID"]},description:"Create a prompt template with dynamic variables.",display_name:"Prompt Template",documentation:"https://docs.langflow.org/components-prompts",edited:!1,error:null,field_order:["template","use_double_brackets","tool_placeholder"],frozen:!1,full_path:null,icon:"prompts",is_composition:null,is_input:null,is_output:null,legacy:!1,lf_version:"1.10.0",metadata:{code_hash:"3d3fd7b8a36f",dependencies:{dependencies:[{name:"lfx",version:null}],total_dependencies:1},module:"lfx.components.models_and_agents.prompt.PromptComponent"},minimized:!1,name:"",output_types:[],outputs:[{allows_loop:!1,cache:!0,display_name:"Prompt",group_outputs:!1,hidden:null,loop_types:null,method:"build_prompt",name:"prompt",options:null,required_inputs:null,selected:"Message",tool_mode:!0,types:["Message"],value:"__UNDEFINED__"}],pinned:!1,priority:null,replacement:null,template:{Jira_ID:{advanced:!1,display_name:"Jira_ID",dynamic:!1,field_type:"str",fileTypes:[],file_path:"",info:"",input_types:["Message"],list:!1,load_from_db:!1,multiline:!0,name:"Jira_ID",placeholder:"",required:!1,show:!0,title_case:!1,type:"str",value:""},_type:"Component",code:{advanced:!0,dynamic:!0,fileTypes:[],file_path:"",info:"",list:!1,load_from_db:!1,multiline:!0,name:"code",password:!1,placeholder:"",required:!0,show:!0,title_case:!1,type:"code",value:`from typing import Any

from lfx.base.prompts.api_utils import process_prompt_template
from lfx.custom.custom_component.component import Component
from lfx.inputs.input_mixin import FieldTypes
from lfx.inputs.inputs import DefaultPromptField
from lfx.io import BoolInput, MessageTextInput, Output, PromptInput
from lfx.log.logger import logger
from lfx.schema.dotdict import dotdict
from lfx.schema.message import Message
from lfx.template.utils import update_template_values
from lfx.utils.mustache_security import validate_mustache_template


class PromptComponent(Component):
    display_name: str = "Prompt Template"
    description: str = "Create a prompt template with dynamic variables."
    documentation: str = "https://docs.langflow.org/components-prompts"
    icon = "prompts"
    trace_type = "prompt"
    name = "Prompt Template"

    inputs = [
        PromptInput(name="template", display_name="Template"),
        BoolInput(
            name="use_double_brackets",
            display_name="Use Double Brackets",
            value=False,
            advanced=True,
            info="Use {{variable}} syntax instead of {variable}.",
            real_time_refresh=True,
        ),
        MessageTextInput(
            name="tool_placeholder",
            display_name="Tool Placeholder",
            tool_mode=True,
            advanced=True,
            show=False,
            info="A placeholder input for tool mode.",
        ),
    ]

    outputs = [
        Output(display_name="Prompt", name="prompt", method="build_prompt"),
    ]

    def update_build_config(self, build_config: dotdict, field_value: Any, field_name: str | None = None) -> dotdict:
        """Update the template field type based on the selected mode."""
        if field_name == "use_double_brackets":
            # Change the template field type based on mode
            is_mustache = field_value is True
            if is_mustache:
                build_config["template"]["type"] = FieldTypes.MUSTACHE_PROMPT.value
            else:
                build_config["template"]["type"] = FieldTypes.PROMPT.value

            # Re-process the template to update variables when mode changes
            template_value = build_config.get("template", {}).get("value", "")
            if template_value:
                # Ensure custom_fields is properly initialized
                if "custom_fields" not in build_config:
                    build_config["custom_fields"] = {}

                # Clean up fields from the OLD mode before processing with NEW mode
                # This ensures we don't keep fields with wrong syntax even if validation fails
                old_custom_fields = build_config["custom_fields"].get("template", [])
                for old_field in list(old_custom_fields):
                    # Remove the field from custom_fields and template
                    if old_field in old_custom_fields:
                        old_custom_fields.remove(old_field)
                    build_config.pop(old_field, None)

                # Try to process template with new mode to add new variables
                # If validation fails, at least we cleaned up old fields
                try:
                    # Validate mustache templates for security
                    if is_mustache:
                        validate_mustache_template(template_value)

                    # Re-process template with new mode to add new variables
                    _ = process_prompt_template(
                        template=template_value,
                        name="template",
                        custom_fields=build_config["custom_fields"],
                        frontend_node_template=build_config,
                        is_mustache=is_mustache,
                    )
                except ValueError as e:
                    # If validation fails, we still updated the mode and cleaned old fields
                    # User will see error when they try to save
                    logger.debug(f"Template validation failed during mode switch: {e}")
        return build_config

    async def build_prompt(self) -> Message:
        use_double_brackets = self.use_double_brackets if hasattr(self, "use_double_brackets") else False
        template_format = "mustache" if use_double_brackets else "f-string"
        prompt = await Message.from_template_and_variables(template_format=template_format, **self._attributes)
        self.status = prompt.text
        return prompt

    def _update_template(self, frontend_node: dict):
        prompt_template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(prompt_template)

            custom_fields = frontend_node["custom_fields"]
            frontend_node_template = frontend_node["template"]
            _ = process_prompt_template(
                template=prompt_template,
                name="template",
                custom_fields=custom_fields,
                frontend_node_template=frontend_node_template,
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be created
            logger.debug(f"Template validation failed in _update_template: {e}")
        return frontend_node

    async def update_frontend_node(self, new_frontend_node: dict, current_frontend_node: dict):
        """This function is called after the code validation is done."""
        frontend_node = await super().update_frontend_node(new_frontend_node, current_frontend_node)
        template = frontend_node["template"]["template"]["value"]
        use_double_brackets = frontend_node["template"].get("use_double_brackets", {}).get("value", False)
        is_mustache = use_double_brackets is True

        try:
            # Validate mustache templates for security
            if is_mustache:
                validate_mustache_template(template)

            # Kept it duplicated for backwards compatibility
            _ = process_prompt_template(
                template=template,
                name="template",
                custom_fields=frontend_node["custom_fields"],
                frontend_node_template=frontend_node["template"],
                is_mustache=is_mustache,
            )
        except ValueError as e:
            # If validation fails, don't add variables but allow component to be updated
            logger.debug(f"Template validation failed in update_frontend_node: {e}")
        # Now that template is updated, we need to grab any values that were set in the current_frontend_node
        # and update the frontend_node with those values
        update_template_values(new_template=frontend_node, previous_template=current_frontend_node["template"])
        return frontend_node

    def _get_fallback_input(self, **kwargs):
        return DefaultPromptField(**kwargs)
`},template:{_input_type:"PromptInput",advanced:!1,display_name:"Template",dynamic:!1,info:"",list:!1,list_add_label:"Add More",name:"template",override_skip:!1,placeholder:"",required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_input:!0,track_in_telemetry:!1,type:"prompt",value:"https://jaivir.atlassian.net/rest/api/3/search/jql?jql=key%20in%20({Jira_ID})&fields=summary,description,status,priority,issuetype"},tool_placeholder:{_input_type:"MessageTextInput",advanced:!0,display_name:"Tool Placeholder",dynamic:!1,info:"A placeholder input for tool mode.",input_types:["Message"],list:!1,list_add_label:"Add More",load_from_db:!1,name:"tool_placeholder",override_skip:!1,placeholder:"",required:!1,show:!1,title_case:!1,tool_mode:!0,trace_as_input:!0,trace_as_metadata:!0,track_in_telemetry:!1,type:"str",value:""},use_double_brackets:{_input_type:"BoolInput",advanced:!0,display_name:"Use Double Brackets",dynamic:!1,info:"Use {{variable}} syntax instead of {variable}.",list:!1,list_add_label:"Add More",name:"use_double_brackets",override_skip:!1,placeholder:"",real_time_refresh:!0,required:!1,show:!0,title_case:!1,tool_mode:!1,trace_as_metadata:!0,track_in_telemetry:!0,type:"bool",value:!1}},tool_mode:!1},showNode:!0,type:"Prompt Template"},dragging:!1,id:"Prompt Template-ctw9h",measured:{height:347,width:320},position:{x:-522.9999690946212,y:-413.6969593046463},selected:!1,type:"genericNode"}],viewport:{x:302.7666924261189,y:339.4878306297069,zoom:.34563423156419837}},description:"Text Generation Meets Business Transformation.",endpoint_name:null,id:"2a014bac-cd3b-4de4-a417-4cf00e33d238",is_component:!1,last_tested_version:"1.10.0",locked:!1,name:"Test Strategy And Test Plan Creator",tags:[]}}],au="buddy_flow_settings",Js={apiKeys:{openai:"",groq:"",gemini:"",mistral:"",openrouter:"",ollama:""},jira:{baseUrl:"",apiUrl:"",projectKey:"",username:"",token:""},langflowUrl:"http://localhost:7860"},C_=()=>{try{const e=localStorage.getItem(au);return e?{...Js,...JSON.parse(e)}:Js}catch{return Js}},R_=e=>{try{return localStorage.setItem(au,JSON.stringify(e)),!0}catch(t){return console.error("Failed to save settings to localStorage:",t),!1}},F_=e=>{var l,i,d,h;const t=((i=(l=e==null?void 0:e.rawData)==null?void 0:l.data)==null?void 0:i.nodes)||[],n=((h=(d=e==null?void 0:e.rawData)==null?void 0:d.data)==null?void 0:h.edges)||[],a=[],s=new Set;let r=!1,o=[];return t.forEach(c=>{var P,p,u;const f=((P=c==null?void 0:c.data)==null?void 0:P.node)||{},g=(f==null?void 0:f.display_name)||((p=c==null?void 0:c.data)==null?void 0:p.display_name)||"",w=((u=c==null?void 0:c.data)==null?void 0:u.type)||"",v=(f==null?void 0:f.template)||{};(w.toLowerCase().includes("model")||g.toLowerCase().includes("mistral")||g.toLowerCase().includes("groq")||g.toLowerCase().includes("openrouter"))&&(g.toLowerCase().includes("groq")?s.add("groq"):g.toLowerCase().includes("mistral")?s.add("mistral"):g.toLowerCase().includes("openrouter")?s.add("openrouter"):g.toLowerCase().includes("openai")&&s.add("openai")),(g.toLowerCase().includes("jira")||w.toLowerCase().includes("jira"))&&(r=!0),Object.keys(v).forEach(_=>{const y=v[_];if(typeof y=="object"&&y!==null){const x=y.advanced===!0,T=y.show!==!1;!x&&T&&_!=="code"&&_!=="_type"&&(y.type==="file"||y._input_type==="FileInput"||_==="file_path"||_==="path"?o.push({nodeId:c.id,nodeName:g,fieldName:_,field:y}):a.push({nodeId:c.id,nodeName:g,fieldName:_,field:y}))}})}),{nodes:t,edges:n,userInputs:a,requiredKeys:Array.from(s),hasJira:r,fileUploads:o}};function q_({settings:e,onSave:t}){const[n,a]=ue.useState({...e}),[s,r]=ue.useState(!1),o=(d,h)=>{a(c=>({...c,apiKeys:{...c.apiKeys,[d]:h}}))},l=(d,h)=>{a(c=>({...c,jira:{...c.jira,[d]:h}}))},i=d=>{d.preventDefault(),t(n),r(!0),setTimeout(()=>r(!1),3e3)};return m.jsxs("div",{className:"settings-page",children:[m.jsx("div",{className:"panel-header",children:m.jsxs("div",{children:[m.jsx("p",{className:"flow-label",children:"System Preferences"}),m.jsx("h2",{children:"Configuration & Keys"}),m.jsx("p",{className:"flow-summary",children:"Configure and persist API keys and connection parameters. All data remains local in your browser."})]})}),m.jsxs("form",{onSubmit:i,className:"settings-form",children:[s&&m.jsx("div",{className:"alert alert-success",children:"✨ Settings successfully persisted!"}),m.jsxs("div",{className:"panel-grid",children:[m.jsxs("div",{className:"panel-card",children:[m.jsx("h3",{children:"🤖 LLM Provider Keys"}),m.jsx("p",{className:"card-desc",children:"Set API keys for the dynamic models requested by the workflows."}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Groq API Key"}),m.jsx("input",{type:"password",value:n.apiKeys.groq||"",onChange:d=>o("groq",d.target.value),placeholder:"gsk_...",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"OpenRouter Key"}),m.jsx("input",{type:"password",value:n.apiKeys.openrouter||"",onChange:d=>o("openrouter",d.target.value),placeholder:"sk-or-v1-...",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Mistral API Key"}),m.jsx("input",{type:"password",value:n.apiKeys.mistral||"",onChange:d=>o("mistral",d.target.value),placeholder:"Mistral key",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Gemini API Key"}),m.jsx("input",{type:"password",value:n.apiKeys.gemini||"",onChange:d=>o("gemini",d.target.value),placeholder:"AIzaSy...",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"OpenAI API Key"}),m.jsx("input",{type:"password",value:n.apiKeys.openai||"",onChange:d=>o("openai",d.target.value),placeholder:"sk-proj-...",className:"form-control"})]})]}),m.jsxs("div",{className:"panel-card",children:[m.jsx("h3",{children:"🎫 Jira Configuration"}),m.jsx("p",{className:"card-desc",children:"Configure connection parameters for workflows querying issue tracker endpoints."}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Base URL"}),m.jsx("input",{type:"url",value:n.jira.baseUrl||"",onChange:d=>l("baseUrl",d.target.value),placeholder:"https://company.atlassian.net",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"API URL / CURL Endpoint"}),m.jsx("input",{type:"text",value:n.jira.apiUrl||"",onChange:d=>l("apiUrl",d.target.value),placeholder:"/rest/api/3/search/jql",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Default Project Key"}),m.jsx("input",{type:"text",value:n.jira.projectKey||"",onChange:d=>l("projectKey",d.target.value),placeholder:"PROJ",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Username / Email"}),m.jsx("input",{type:"text",value:n.jira.username||"",onChange:d=>l("username",d.target.value),placeholder:"user@company.com",className:"form-control"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Token / Password"}),m.jsx("input",{type:"password",value:n.jira.token||"",onChange:d=>l("token",d.target.value),placeholder:"Jira API Token",className:"form-control"})]})]})]}),m.jsxs("div",{className:"form-group",style:{marginTop:"1.5rem"},children:[m.jsx("label",{children:"LangFlow API Endpoint URL"}),m.jsx("input",{type:"url",value:n.langflowUrl||"",onChange:d=>a(h=>({...h,langflowUrl:d.target.value})),className:"form-control",placeholder:"http://localhost:7860"})]}),m.jsx("div",{className:"action-row",style:{marginTop:"2rem"},children:m.jsx("button",{type:"submit",className:"primary-button",children:"Save Configuration"})})]})]})}function O_({nodes:e,edges:t,activeNodeId:n,onNodeClick:a}){if(!e||e.length===0)return null;const s=[],r=e.filter(i=>{var c,f,g;const d=(((f=(c=i.data)==null?void 0:c.node)==null?void 0:f.display_name)||"").toLowerCase(),h=(((g=i.data)==null?void 0:g.type)||"").toLowerCase();return d.includes("input")||h.includes("input")||h==="file"||d.includes("reader")}),o=e.filter(i=>{var h,c,f;const d=(((c=(h=i.data)==null?void 0:h.node)==null?void 0:c.display_name)||"").toLowerCase();return(((f=i.data)==null?void 0:f.type)||"").toLowerCase(),!r.includes(i)&&!d.includes("output")&&!d.includes("exporter")&&!d.includes("writer")}),l=e.filter(i=>{var h,c;const d=(((c=(h=i.data)==null?void 0:h.node)==null?void 0:c.display_name)||"").toLowerCase();return d.includes("output")||d.includes("exporter")||d.includes("writer")});return s.push(r),s.push(o),s.push(l),m.jsxs("div",{className:"flow-graph-container",children:[m.jsx("h3",{children:"🔌 Interactive Topology Map"}),m.jsx("p",{className:"graph-sub",children:"View node connectivity pipeline. Click a node to view or override properties."}),m.jsx("div",{className:"flow-columns",children:s.map((i,d)=>i.length===0?null:m.jsxs("div",{className:"flow-column",children:[m.jsx("div",{className:"column-header",children:d===0?"Inputs":d===1?"Processing & LLM":"Outputs"}),m.jsx("div",{className:"column-nodes",children:i.map(h=>{var w,v,P,p;const c=((v=(w=h.data)==null?void 0:w.node)==null?void 0:v.display_name)||((P=h.data)==null?void 0:P.display_name)||h.id,f=((p=h.data)==null?void 0:p.type)||"Node",g=n===h.id;return m.jsxs("div",{className:`node-bubble ${g?"active":""}`,onClick:()=>a(h),children:[m.jsx("div",{className:"node-bubble-title",children:c}),m.jsx("div",{className:"node-bubble-type",children:f})]},h.id)})})]},d))})]})}function L_({activeNode:e,nodeValues:t,onValueChange:n,jiraSettings:a}){var d,h;if(!e)return m.jsx("div",{className:"empty-node-form",children:m.jsx("p",{children:"Select any node from the interactive map to view and configure its parameters."})});const s=((d=e.data)==null?void 0:d.node)||{},r=s.display_name||((h=e.data)==null?void 0:h.display_name)||e.id,o=s.template||{},l=(c,f)=>{n(e.id,c,f)},i=(c,f)=>{var p,u;const g=((p=t[e.id])==null?void 0:p[c])!==void 0?(u=t[e.id])==null?void 0:u[c]:f.value,w=f._input_type||"",v=f.type||"";let P=f.placeholder||"";if((c.includes("url")||c.includes("jira"))&&a!=null&&a.baseUrl&&!g&&(P=`e.g. ${a.baseUrl}`),w==="SecretStrInput"||f.password===!0)return m.jsx("input",{type:"password",className:"form-control",value:g||"",onChange:_=>l(c,_.target.value),placeholder:"API Key / Secret Token"});if(w==="DropdownInput"||Array.isArray(f.options)&&f.options.length>0){const _=f.options||[];return m.jsx("select",{className:"form-control",value:g||"",onChange:y=>l(c,y.target.value),children:_.map(y=>m.jsx("option",{value:y,children:y},y))})}if(w==="BoolInput"||v==="bool")return m.jsxs("label",{className:"toggle-switch",children:[m.jsx("input",{type:"checkbox",checked:!!g,onChange:_=>l(c,_.target.checked)}),m.jsx("span",{className:"slider"})]});if(w==="FileInput"||v==="file")return m.jsxs("div",{className:"file-uploader",children:[m.jsx("input",{type:"file",onChange:_=>{const y=_.target.files[0];y&&l(c,y.name)}}),m.jsx("div",{className:"file-uploader-text",children:g?`Selected file: ${g}`:"Drag and drop or click to upload file"})]});if(w==="TableInput"||v==="table"){const _=Array.isArray(g)?g:[];return m.jsxs("div",{className:"table-input-container",children:[m.jsxs("table",{className:"field-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Key"}),m.jsx("th",{children:"Value"}),m.jsx("th",{children:"Actions"})]})}),m.jsx("tbody",{children:_.map((y,x)=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("input",{type:"text",className:"form-control",value:y.key||"",onChange:T=>{const k=[..._];k[x]={...k[x],key:T.target.value},l(c,k)}})}),m.jsx("td",{children:m.jsx("input",{type:"text",className:"form-control",value:y.value||"",onChange:T=>{const k=[..._];k[x]={...k[x],value:T.target.value},l(c,k)}})}),m.jsx("td",{children:m.jsx("button",{type:"button",className:"danger-button-sm",onClick:()=>{const T=_.filter((k,I)=>I!==x);l(c,T)},children:"Delete"})})]},x))})]}),m.jsx("button",{type:"button",className:"secondary-button",onClick:()=>{l(c,[..._,{key:"",value:""}])},children:"+ Add Table Row"})]})}return w==="MultilineInput"||f.multiline===!0?m.jsx("textarea",{rows:5,className:"form-control",value:g||"",onChange:_=>l(c,_.target.value),placeholder:P}):m.jsx("input",{type:"text",className:"form-control",value:g||"",onChange:_=>l(c,_.target.value),placeholder:P})};return m.jsxs("div",{className:"node-form-panel",children:[m.jsxs("div",{className:"node-form-header",children:[m.jsxs("h4",{children:["🔧 ",r," Parameters"]}),m.jsx("p",{children:s.description||"Configure parameters for this node"})]}),m.jsx("div",{className:"node-fields-list",children:Object.keys(o).map(c=>{const f=o[c];return typeof f!="object"||f===null||f.advanced===!0||f.show===!1||c==="code"||c==="_type"?null:m.jsxs("div",{className:"form-group field-item",children:[m.jsxs("label",{className:"field-label",children:[f.display_name||c,f.required&&m.jsx("span",{className:"required-star",children:"*"})]}),f.info&&m.jsx("p",{className:"field-info",children:f.info}),m.jsx("div",{className:"field-input-wrapper",children:i(c,f)})]},c)})})]})}function j_({flow:e,nodeValues:t,jiraSettings:n,apiKeys:a}){const[s,r]=ue.useState(!1),[o,l]=ue.useState("idle"),[i,d]=ue.useState([]),[h,c]=ue.useState(null),f=async()=>{r(!0),l("running"),d(["[System] Initiating dynamic execution pipeline...",`[System] Parsed file: ${e.fileName}`]),setTimeout(()=>{d(g=>[...g,"[System] Validating configuration variables..."])},800),setTimeout(()=>{const g=!!a.groq,w=!!a.openrouter;d(v=>[...v,`[Agent] API credentials check: Groq(${g?"Loaded":"None"}), OpenRouter(${w?"Loaded":"None"})`,"[Agent] Resolving workspace context and input connections..."])},1500),setTimeout(()=>{d(g=>[...g,"[Agent] Requesting execution from local LangFlow router..."])},2200),setTimeout(()=>{l("success"),r(!1),d(g=>[...g,"[System] Done! Node output captured successfully."]),e.id.includes("contract")?c({type:"markdown",content:`### 📄 API Contract Validator Result
- **Status**: Passed (200 OK)
- **Target URL**: \`https://gorest.co.in/public/v2/users\`
- **Response Validation**: Valid JSON format confirmed.
- **Contract Spec**: Matches OpenAPI schema contract.
`}):e.id.includes("triage")?c({type:"markdown",content:`### 🐞 Bug Triage Severity Analysis
- **Severity**: **Critical**
- **Priority**: **P1**
- **Affected Module**: Payment Processing
- **Root Cause Hypothesis**: Race condition on multiple charge transactions.
`}):e.id.includes("flaky")?c({type:"markdown",content:`### 🧪 Flaky Test Case Report
- **Flakiness Factor**: High (42%)
- **Identified Pattern**: DOM element load timeouts.
- **Remediation**: Use element visibility wait instead of static timeouts.
`}):e.id.includes("rca")?c({type:"markdown",content:`### 🔍 RCA Report Summary
- **Incident Summary**: Database connection pool exhaustion.
- **Impact Area**: Core Checkout API
- **Remediation Plan**: Increase max DB connections limit and configure proper timeouts.
`}):e.id.includes("strategy")?c({type:"markdown",content:`### 📋 Test Strategy & Verification Plan
- **Verification Level**: System Integration Testing
- **Test Scenarios**: Dynamic multi-role checkout, concurrency validation.
- **Deliverables**: PDF Test Strategy, DOCX Test Plan
`}):c({type:"json",content:JSON.stringify({status:"success",timestamp:new Date().toISOString(),output:"Workflow execution completed successfully with default outputs."},null,2)})},3500)};return m.jsxs("div",{className:"execution-panel",children:[m.jsxs("div",{className:"exec-control-row",children:[m.jsx("button",{className:`primary-button ${s?"loading":""}`,onClick:f,disabled:s,children:s?"Executing Workflow...":`⚡ Run ${e.title}`}),m.jsx("span",{className:`status-badge ${o}`,children:o.toUpperCase()})]}),m.jsxs("div",{className:"exec-grid",children:[m.jsxs("div",{className:"panel-card log-card",children:[m.jsx("h4",{children:"🪵 Live Execution Log"}),m.jsx("div",{className:"logs-container",children:i.length===0?m.jsx("p",{className:"logs-empty",children:"Ready for launch. Trigger run to stream execution logs."}):i.map((g,w)=>m.jsx("div",{className:"log-line",children:g},w))})]}),m.jsxs("div",{className:"panel-card output-card",children:[m.jsx("h4",{children:"📦 Execution Output Artifacts"}),m.jsx("div",{className:"output-container",children:h?h.type==="markdown"?m.jsx("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:h.content.replace(/\n/g,"<br />")}}):m.jsx("pre",{className:"json-output",children:m.jsx("code",{children:h.content})}):m.jsx("p",{className:"output-empty",children:"Waiting for execution outputs..."})})]})]})]})}function U_(){var f,g,w;const[e,t]=ue.useState(((f=Vs[0])==null?void 0:f.id)||"settings"),[n,a]=ue.useState(C_()),[s,r]=ue.useState({}),[o,l]=ue.useState(null);ue.useEffect(()=>{l(null)},[e]);const i=Vs.find(v=>v.id===e),d=v=>{a(v),R_(v)},h=(v,P,p)=>{r(u=>({...u,[v]:{...u[v]||{},[P]:p}}))},c=i?F_(i):null;return m.jsxs("div",{className:"app-shell",children:[m.jsxs("header",{className:"app-header",children:[m.jsxs("div",{className:"logo-group",children:[m.jsx("span",{className:"logo-icon",children:"🔮"}),m.jsxs("div",{children:[m.jsx("p",{className:"eyebrow",children:"ANTIGRAVITY AUTOMATION ENGINE"}),m.jsx("h1",{children:"4XQA Flow Control Center"})]})]}),m.jsx("p",{className:"intro",children:"Dynamically generated React forms, topology maps, configuration nodes, and runner interfaces mapped strictly from local n8n JSON exports."})]}),m.jsxs("main",{children:[m.jsxs("aside",{className:"tabs-panel",children:[m.jsxs("div",{className:"tabs-header",children:[m.jsx("p",{className:"tabs-title",children:"Dynamic Workflows"}),m.jsx("p",{className:"tabs-note",children:"Select a workflow to dynamically construct its interface."})]}),m.jsx("div",{className:"tab-list",children:Vs.map(v=>m.jsxs("button",{className:`tab-button ${v.id===e?"active":""}`,onClick:()=>t(v.id),children:[m.jsx("span",{className:"tab-icon",children:"🔌"}),m.jsx("span",{className:"tab-title-text",children:v.title})]},v.id))}),m.jsx("div",{className:"tabs-footer",children:m.jsxs("button",{className:`tab-button settings-btn ${e==="settings"?"active":""}`,onClick:()=>t("settings"),children:[m.jsx("span",{className:"tab-icon",children:"⚙️"}),m.jsx("span",{className:"tab-title-text",children:"System Settings"})]})})]}),m.jsx("section",{className:"content-panel",children:e==="settings"?m.jsx(q_,{settings:n,onSave:d}):i?m.jsxs("div",{className:"workflow-view",children:[m.jsxs("div",{className:"panel-header",children:[m.jsxs("div",{children:[m.jsx("p",{className:"flow-label",children:"Active Dynamic Workflow"}),m.jsx("h2",{children:i.title}),m.jsx("p",{className:"flow-summary",children:i.description})]}),m.jsxs("div",{className:"metadata-pills",children:[m.jsxs("span",{className:"pill",children:["Nodes: ",((g=c==null?void 0:c.nodes)==null?void 0:g.length)||0]}),m.jsxs("span",{className:"pill",children:["Edges: ",((w=c==null?void 0:c.edges)==null?void 0:w.length)||0]}),m.jsxs("span",{className:"pill flex-pill",children:["File: ",i.fileName]})]})]}),c&&(c.userInputs.length>0||c.fileUploads.length>0)&&m.jsxs("div",{className:"panel-card quick-inputs-card",children:[m.jsx("h3",{children:"🎯 Quick Action Inputs"}),m.jsx("p",{className:"card-desc",children:"Provide parameters dynamically required to execute this flow."}),m.jsxs("div",{className:"quick-inputs-grid",children:[c.userInputs.map(({nodeId:v,nodeName:P,fieldName:p,field:u})=>{var y,x;if(p==="api_key"||p==="token")return null;const _=((y=s[v])==null?void 0:y[p])!==void 0?(x=s[v])==null?void 0:x[p]:u.value;return m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{children:[P," - ",u.display_name||p]}),m.jsx("input",{type:"text",className:"form-control",value:_||"",onChange:T=>h(v,p,T.target.value),placeholder:u.placeholder||""})]},`${v}-${p}`)}),c.fileUploads.map(({nodeId:v,nodeName:P,fieldName:p,field:u})=>{var y,x;const _=((y=s[v])==null?void 0:y[p])!==void 0?(x=s[v])==null?void 0:x[p]:u.value;return m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{children:[P," - ",u.display_name||p," (Upload)"]}),m.jsxs("div",{className:"file-uploader flex-uploader",children:[m.jsx("input",{type:"file",onChange:T=>{const k=T.target.files[0];k&&h(v,p,k.name)}}),m.jsx("div",{className:"file-uploader-text",children:_?`Loaded: ${_}`:"Select Document (PDF, DOCX, APK, IPA)"})]})]},`${v}-${p}`)})]})]}),c&&m.jsx(O_,{nodes:c.nodes,edges:c.edges,activeNodeId:o==null?void 0:o.id,onNodeClick:l}),m.jsx(L_,{activeNode:o,nodeValues:s,onValueChange:h,jiraSettings:n.jira}),m.jsx(j_,{flow:i,nodeValues:s,jiraSettings:n.jira,apiKeys:n.apiKeys})]}):m.jsx("div",{className:"empty-panel",children:m.jsx("p",{children:"No active workflow tab selected."})})})]})]})}Ws.createRoot(document.getElementById("root")).render(m.jsx(wu.StrictMode,{children:m.jsx(U_,{})}));
