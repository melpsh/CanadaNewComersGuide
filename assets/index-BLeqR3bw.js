(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ch={exports:{}},ka={},fh={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),pg=Symbol.for("react.portal"),mg=Symbol.for("react.fragment"),vg=Symbol.for("react.strict_mode"),gg=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),_g=Symbol.for("react.forward_ref"),Sg=Symbol.for("react.suspense"),kg=Symbol.for("react.memo"),Eg=Symbol.for("react.lazy"),Rc=Symbol.iterator;function bg(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var dh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hh=Object.assign,ph={};function Er(e,t,n){this.props=e,this.context=t,this.refs=ph,this.updater=n||dh}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mh(){}mh.prototype=Er.prototype;function su(e,t,n){this.props=e,this.context=t,this.refs=ph,this.updater=n||dh}var lu=su.prototype=new mh;lu.constructor=su;hh(lu,Er.prototype);lu.isPureReactComponent=!0;var Nc=Array.isArray,vh=Object.prototype.hasOwnProperty,uu={current:null},gh={key:!0,ref:!0,__self:!0,__source:!0};function yh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)vh.call(t,r)&&!gh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Pi,type:e,key:o,ref:a,props:i,_owner:uu.current}}function Tg(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function Ig(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lc=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ig(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pi:case pg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Xa(a,0):r,Nc(i)?(n="",e!=null&&(n=e.replace(Lc,"$&/")+"/"),So(i,t,n,"",function(u){return u})):i!=null&&(cu(i)&&(i=Tg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nc(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Xa(o,s);a+=So(o,t,n,l,i)}else if(l=bg(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Xa(o,s++),a+=So(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ki(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Cg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},ko={transition:null},Pg={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:ko,ReactCurrentOwner:uu};function wh(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Er;j.Fragment=mg;j.Profiler=gg;j.PureComponent=su;j.StrictMode=vg;j.Suspense=Sg;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;j.act=wh;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=uu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)vh.call(t,l)&&!gh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Pi,type:e.type,key:i,ref:o,props:r,_owner:a}};j.createContext=function(e){return e={$$typeof:wg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yg,_context:e},e.Consumer=e};j.createElement=yh;j.createFactory=function(e){var t=yh.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:_g,render:e}};j.isValidElement=cu;j.lazy=function(e){return{$$typeof:Eg,_payload:{_status:-1,_result:e},_init:Cg}};j.memo=function(e,t){return{$$typeof:kg,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};j.unstable_act=wh;j.useCallback=function(e,t){return be.current.useCallback(e,t)};j.useContext=function(e){return be.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return be.current.useDeferredValue(e)};j.useEffect=function(e,t){return be.current.useEffect(e,t)};j.useId=function(){return be.current.useId()};j.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return be.current.useMemo(e,t)};j.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};j.useRef=function(e){return be.current.useRef(e)};j.useState=function(e){return be.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return be.current.useTransition()};j.version="18.3.1";fh.exports=j;var fu=fh.exports;const du=uh(fu);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag=fu,Og=Symbol.for("react.element"),xg=Symbol.for("react.fragment"),Rg=Object.prototype.hasOwnProperty,Ng=Ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lg={key:!0,ref:!0,__self:!0,__source:!0};function _h(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Rg.call(t,r)&&!Lg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Og,type:e,key:o,ref:a,props:i,_owner:Ng.current}}ka.Fragment=xg;ka.jsx=_h;ka.jsxs=_h;ch.exports=ka;var Dc=ch.exports,Bs={},Sh={exports:{}},De={},kh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,A){var D=b.length;b.push(A);e:for(;0<D;){var V=D-1>>>1,ne=b[V];if(0<i(ne,A))b[V]=A,b[D]=ne,D=V;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var A=b[0],D=b.pop();if(D!==A){b[0]=D;e:for(var V=0,ne=b.length,Wi=ne>>>1;V<Wi;){var hn=2*(V+1)-1,Ja=b[hn],pn=hn+1,Gi=b[pn];if(0>i(Ja,D))pn<ne&&0>i(Gi,Ja)?(b[V]=Gi,b[pn]=D,V=pn):(b[V]=Ja,b[hn]=D,V=hn);else if(pn<ne&&0>i(Gi,D))b[V]=Gi,b[pn]=D,V=pn;else break e}}return A}function i(b,A){var D=b.sortIndex-A.sortIndex;return D!==0?D:b.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,p=3,y=!1,v=!1,g=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=b)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function _(b){if(g=!1,m(b),!v)if(n(l)!==null)v=!0,M(E);else{var A=n(u);A!==null&&ae(_,A.startTime-b)}}function E(b,A){v=!1,g&&(g=!1,h(O),O=-1),y=!0;var D=p;try{for(m(A),f=n(l);f!==null&&(!(f.expirationTime>A)||b&&!te());){var V=f.callback;if(typeof V=="function"){f.callback=null,p=f.priorityLevel;var ne=V(f.expirationTime<=A);A=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&r(l),m(A)}else r(l);f=n(l)}if(f!==null)var Wi=!0;else{var hn=n(u);hn!==null&&ae(_,hn.startTime-A),Wi=!1}return Wi}finally{f=null,p=D,y=!1}}var I=!1,P=null,O=-1,B=5,U=-1;function te(){return!(e.unstable_now()-U<B)}function dn(){if(P!==null){var b=e.unstable_now();U=b;var A=!0;try{A=P(!0,b)}finally{A?ft():(I=!1,P=null)}}else I=!1}var ft;if(typeof d=="function")ft=function(){d(dn)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,T=w.port2;w.port1.onmessage=dn,ft=function(){T.postMessage(null)}}else ft=function(){C(dn,0)};function M(b){P=b,I||(I=!0,ft())}function ae(b,A){O=C(function(){b(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,M(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var D=p;p=A;try{return b()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var D=p;p=b;try{return A()}finally{p=D}},e.unstable_scheduleCallback=function(b,A,D){var V=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?V+D:V):D=V,b){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=D+ne,b={id:c++,callback:A,priorityLevel:b,startTime:D,expirationTime:ne,sortIndex:-1},D>V?(b.sortIndex=D,t(u,b),n(l)===null&&b===n(u)&&(g?(h(O),O=-1):g=!0,ae(_,D-V))):(b.sortIndex=ne,t(l,b),v||y||(v=!0,M(E))),b},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(b){var A=p;return function(){var D=p;p=A;try{return b.apply(this,arguments)}finally{p=D}}}})(Eh);kh.exports=Eh;var Dg=kh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg=fu,Le=Dg;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bh=new Set,ni={};function Mn(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ni[e]=t,e=0;e<t.length;e++)bh.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=Object.prototype.hasOwnProperty,Ug=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mc={},Uc={};function zg(e){return $s.call(Uc,e)?!0:$s.call(Mc,e)?!1:Ug.test(e)?Uc[e]=!0:(Mc[e]=!0,!1)}function jg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bg(e,t,n,r){if(t===null||typeof t>"u"||jg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var hu=/[\-:]([a-z])/g;function pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hu,pu);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hu,pu);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hu,pu);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=ve.hasOwnProperty(t)?ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bg(t,n,i,r)&&(n=null),r||i===null?zg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),Hs=Symbol.for("react.profiler"),Th=Symbol.for("react.provider"),Ih=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),Vs=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Ch=Symbol.for("react.offscreen"),zc=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Qa;function jr(e){if(Qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qa=t&&t[1]||""}return`
`+Qa+e}var Za=!1;function es(e,t){if(!e||Za)return"";Za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function $g(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=es(e.type,!1),e;case 11:return e=es(e.type.render,!1),e;case 1:return e=es(e.type,!0),e;default:return""}}function Ws(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case jn:return"Portal";case Hs:return"Profiler";case vu:return"StrictMode";case Fs:return"Suspense";case Vs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ih:return(e.displayName||"Context")+".Consumer";case Th:return(e._context.displayName||"Context")+".Provider";case gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yu:return t=e.displayName||null,t!==null?t:Ws(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return Ws(e(t))}catch{}}return null}function Hg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ws(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ph(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fg(e){var t=Ph(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){e._valueTracker||(e._valueTracker=Fg(e))}function Ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ph(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oh(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function Ks(e,t){Oh(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ys(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ys(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ys(e,t,n){(t!=="number"||$o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Br=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Br(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function xh(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Js(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ji,Nh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vg=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function Lh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function Dh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wg=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xs(e,t){if(t){if(Wg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zs=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,nr=null,rr=null;function Fc(e){if(e=xi(e)){if(typeof el!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ca(t),el(e.stateNode,e.type,t))}}function Mh(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Uh(){if(nr){var e=nr,t=rr;if(rr=nr=null,Fc(e),t)for(e=0;e<t.length;e++)Fc(t[e])}}function zh(e,t){return e(t)}function jh(){}var ts=!1;function Bh(e,t,n){if(ts)return e(t,n);ts=!0;try{return zh(e,t,n)}finally{ts=!1,(nr!==null||rr!==null)&&(jh(),Uh())}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var tl=!1;if(_t)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){tl=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{tl=!1}function Gg(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Wr=!1,Ho=null,Fo=!1,nl=null,Kg={onError:function(e){Wr=!0,Ho=e}};function Yg(e,t,n,r,i,o,a,s,l){Wr=!1,Ho=null,Gg.apply(Kg,arguments)}function qg(e,t,n,r,i,o,a,s,l){if(Yg.apply(this,arguments),Wr){if(Wr){var u=Ho;Wr=!1,Ho=null}else throw Error(k(198));Fo||(Fo=!0,nl=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(Un(e)!==e)throw Error(k(188))}function Jg(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vc(i),e;if(o===r)return Vc(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Hh(e){return e=Jg(e),e!==null?Fh(e):null}function Fh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fh(e);if(t!==null)return t;e=e.sibling}return null}var Vh=Le.unstable_scheduleCallback,Wc=Le.unstable_cancelCallback,Xg=Le.unstable_shouldYield,Qg=Le.unstable_requestPaint,oe=Le.unstable_now,Zg=Le.unstable_getCurrentPriorityLevel,_u=Le.unstable_ImmediatePriority,Wh=Le.unstable_UserBlockingPriority,Vo=Le.unstable_NormalPriority,ey=Le.unstable_LowPriority,Gh=Le.unstable_IdlePriority,Ea=null,at=null;function ty(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:iy,ny=Math.log,ry=Math.LN2;function iy(e){return e>>>=0,e===0?32:31-(ny(e)/ry|0)|0}var Xi=64,Qi=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=$r(s):(o&=a,o!==0&&(r=$r(o)))}else a=n&~i,a!==0?r=$r(a):o!==0&&(r=$r(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function oy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Xe(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=oy(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kh(){var e=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),e}function ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function sy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Yh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qh,ku,Jh,Xh,Qh,il=!1,Zi=[],Gt=null,Kt=null,Yt=null,oi=new Map,ai=new Map,Ut=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function Rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uy(e,t,n,r,i){switch(t){case"focusin":return Gt=Rr(Gt,e,t,n,r,i),!0;case"dragenter":return Kt=Rr(Kt,e,t,n,r,i),!0;case"mouseover":return Yt=Rr(Yt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oi.set(o,Rr(oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ai.set(o,Rr(ai.get(o)||null,e,t,n,r,i)),!0}return!1}function Zh(e){var t=yn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=$h(n),t!==null){e.blockedOn=t,Qh(e.priority,function(){Jh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zs=r,n.target.dispatchEvent(r),Zs=null}else return t=xi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Kc(e,t,n){Eo(e)&&n.delete(t)}function cy(){il=!1,Gt!==null&&Eo(Gt)&&(Gt=null),Kt!==null&&Eo(Kt)&&(Kt=null),Yt!==null&&Eo(Yt)&&(Yt=null),oi.forEach(Kc),ai.forEach(Kc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,il||(il=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,cy)))}function si(e){function t(i){return Nr(i,e)}if(0<Zi.length){Nr(Zi[0],e);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Nr(Gt,e),Kt!==null&&Nr(Kt,e),Yt!==null&&Nr(Yt,e),oi.forEach(t),ai.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Zh(n),n.blockedOn===null&&Ut.shift()}var ir=At.ReactCurrentBatchConfig,Go=!0;function fy(e,t,n,r){var i=F,o=ir.transition;ir.transition=null;try{F=1,Eu(e,t,n,r)}finally{F=i,ir.transition=o}}function dy(e,t,n,r){var i=F,o=ir.transition;ir.transition=null;try{F=4,Eu(e,t,n,r)}finally{F=i,ir.transition=o}}function Eu(e,t,n,r){if(Go){var i=ol(e,t,n,r);if(i===null)ds(e,t,r,Ko,n),Gc(e,r);else if(uy(i,e,t,n,r))r.stopPropagation();else if(Gc(e,r),t&4&&-1<ly.indexOf(e)){for(;i!==null;){var o=xi(i);if(o!==null&&qh(o),o=ol(e,t,n,r),o===null&&ds(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ds(e,t,r,null,n)}}var Ko=null;function ol(e,t,n,r){if(Ko=null,e=wu(r),e=yn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zg()){case _u:return 1;case Wh:return 4;case Vo:case ey:return 16;case Gh:return 536870912;default:return 16}default:return 16}}var Ft=null,bu=null,bo=null;function tp(){if(bo)return bo;var e,t=bu,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return bo=i.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Yc(){return!1}function Me(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?eo:Yc,this.isPropagationStopped=Yc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=Me(br),Oi=ee({},br,{view:0,detail:0}),hy=Me(Oi),rs,is,Lr,ba=ee({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(rs=e.screenX-Lr.screenX,is=e.screenY-Lr.screenY):is=rs=0,Lr=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:is}}),qc=Me(ba),py=ee({},ba,{dataTransfer:0}),my=Me(py),vy=ee({},Oi,{relatedTarget:0}),os=Me(vy),gy=ee({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=Me(gy),wy=ee({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_y=Me(wy),Sy=ee({},br,{data:0}),Jc=Me(Sy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=by[e])?!!t[e]:!1}function Iu(){return Ty}var Iy=ee({},Oi,{key:function(e){if(e.key){var t=ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cy=Me(Iy),Py=ee({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=Me(Py),Ay=ee({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),Oy=Me(Ay),xy=ee({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ry=Me(xy),Ny=ee({},ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Me(Ny),Dy=[9,13,27,32],Cu=_t&&"CompositionEvent"in window,Gr=null;_t&&"documentMode"in document&&(Gr=document.documentMode);var My=_t&&"TextEvent"in window&&!Gr,np=_t&&(!Cu||Gr&&8<Gr&&11>=Gr),Qc=" ",Zc=!1;function rp(e,t){switch(e){case"keyup":return Dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Uy(e,t){switch(e){case"compositionend":return ip(t);case"keypress":return t.which!==32?null:(Zc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Zc?null:e;default:return null}}function zy(e,t){if($n)return e==="compositionend"||!Cu&&rp(e,t)?(e=tp(),bo=bu=Ft=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return np&&t.locale!=="ko"?null:t.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jy[e.type]:t==="textarea"}function op(e,t,n,r){Mh(r),t=Yo(t,"onChange"),0<t.length&&(n=new Tu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,li=null;function By(e){vp(e,0)}function Ta(e){var t=Vn(e);if(Ah(t))return e}function $y(e,t){if(e==="change")return t}var ap=!1;if(_t){var as;if(_t){var ss="oninput"in document;if(!ss){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),ss=typeof tf.oninput=="function"}as=ss}else as=!1;ap=as&&(!document.documentMode||9<document.documentMode)}function nf(){Kr&&(Kr.detachEvent("onpropertychange",sp),li=Kr=null)}function sp(e){if(e.propertyName==="value"&&Ta(li)){var t=[];op(t,li,e,wu(e)),Bh(By,t)}}function Hy(e,t,n){e==="focusin"?(nf(),Kr=t,li=n,Kr.attachEvent("onpropertychange",sp)):e==="focusout"&&nf()}function Fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(li)}function Vy(e,t){if(e==="click")return Ta(t)}function Wy(e,t){if(e==="input"||e==="change")return Ta(t)}function Gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Gy;function ui(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$s.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function of(e,t){var n=rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function lp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function up(){for(var e=window,t=$o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$o(e.document)}return t}function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ky(e){var t=up(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lp(n.ownerDocument.documentElement,n)){if(r!==null&&Pu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=of(n,o);var a=of(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yy=_t&&"documentMode"in document&&11>=document.documentMode,Hn=null,al=null,Yr=null,sl=!1;function af(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||Hn==null||Hn!==$o(r)||(r=Hn,"selectionStart"in r&&Pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&ui(Yr,r)||(Yr=r,r=Yo(al,"onSelect"),0<r.length&&(t=new Tu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},ls={},cp={};_t&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function Ia(e){if(ls[e])return ls[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cp)return ls[e]=t[n];return e}var fp=Ia("animationend"),dp=Ia("animationiteration"),hp=Ia("animationstart"),pp=Ia("transitionend"),mp=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){mp.set(e,t),Mn(t,[e])}for(var us=0;us<sf.length;us++){var cs=sf[us],qy=cs.toLowerCase(),Jy=cs[0].toUpperCase()+cs.slice(1);ln(qy,"on"+Jy)}ln(fp,"onAnimationEnd");ln(dp,"onAnimationIteration");ln(hp,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(pp,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qg(r,t,void 0,e),e.currentTarget=null}function vp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;lf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;lf(i,s,u),o=l}}}if(Fo)throw e=nl,Fo=!1,nl=null,e}function K(e,t){var n=t[dl];n===void 0&&(n=t[dl]=new Set);var r=e+"__bubble";n.has(r)||(gp(t,e,2,!1),n.add(r))}function fs(e,t,n){var r=0;t&&(r|=4),gp(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[no]){e[no]=!0,bh.forEach(function(n){n!=="selectionchange"&&(Xy.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,fs("selectionchange",!1,t))}}function gp(e,t,n,r){switch(ep(t)){case 1:var i=fy;break;case 4:i=dy;break;default:i=Eu}n=i.bind(null,t,n,e),i=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ds(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=yn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Bh(function(){var u=o,c=wu(n),f=[];e:{var p=mp.get(e);if(p!==void 0){var y=Tu,v=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":y=Cy;break;case"focusin":v="focus",y=os;break;case"focusout":v="blur",y=os;break;case"beforeblur":case"afterblur":y=os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Oy;break;case fp:case dp:case hp:y=yy;break;case pp:y=Ry;break;case"scroll":y=hy;break;case"wheel":y=Ly;break;case"copy":case"cut":case"paste":y=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xc}var g=(t&4)!==0,C=!g&&e==="scroll",h=g?p!==null?p+"Capture":null:p;g=[];for(var d=u,m;d!==null;){m=d;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,h!==null&&(_=ii(d,h),_!=null&&g.push(fi(d,_,m)))),C)break;d=d.return}0<g.length&&(p=new y(p,v,null,n,c),f.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Zs&&(v=n.relatedTarget||n.fromElement)&&(yn(v)||v[St]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?yn(v):null,v!==null&&(C=Un(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(g=qc,_="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Xc,_="onPointerLeave",h="onPointerEnter",d="pointer"),C=y==null?p:Vn(y),m=v==null?p:Vn(v),p=new g(_,d+"leave",y,n,c),p.target=C,p.relatedTarget=m,_=null,yn(c)===u&&(g=new g(h,d+"enter",v,n,c),g.target=m,g.relatedTarget=C,_=g),C=_,y&&v)t:{for(g=y,h=v,d=0,m=g;m;m=zn(m))d++;for(m=0,_=h;_;_=zn(_))m++;for(;0<d-m;)g=zn(g),d--;for(;0<m-d;)h=zn(h),m--;for(;d--;){if(g===h||h!==null&&g===h.alternate)break t;g=zn(g),h=zn(h)}g=null}else g=null;y!==null&&uf(f,p,y,g,!1),v!==null&&C!==null&&uf(f,C,v,g,!0)}}e:{if(p=u?Vn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var E=$y;else if(ef(p))if(ap)E=Wy;else{E=Fy;var I=Hy}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Vy);if(E&&(E=E(e,u))){op(f,E,n,c);break e}I&&I(e,p,u),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&Ys(p,"number",p.value)}switch(I=u?Vn(u):window,e){case"focusin":(ef(I)||I.contentEditable==="true")&&(Hn=I,al=u,Yr=null);break;case"focusout":Yr=al=Hn=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,af(f,n,c);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":af(f,n,c)}var P;if(Cu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else $n?rp(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(np&&n.locale!=="ko"&&($n||O!=="onCompositionStart"?O==="onCompositionEnd"&&$n&&(P=tp()):(Ft=c,bu="value"in Ft?Ft.value:Ft.textContent,$n=!0)),I=Yo(u,O),0<I.length&&(O=new Jc(O,e,null,n,c),f.push({event:O,listeners:I}),P?O.data=P:(P=ip(n),P!==null&&(O.data=P)))),(P=My?Uy(e,n):zy(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(c=new Jc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}vp(f,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ii(e,n),o!=null&&r.unshift(fi(e,o,i)),o=ii(e,t),o!=null&&r.push(fi(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ii(n,o),l!=null&&a.unshift(fi(n,l,s))):i||(l=ii(n,o),l!=null&&a.push(fi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(Qy,`
`).replace(Zy,"")}function ro(e,t,n){if(t=cf(t),cf(e)!==t&&n)throw Error(k(425))}function qo(){}var ll=null,ul=null;function cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fl=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(n0)}:fl;function n0(e){setTimeout(function(){throw e})}function hs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);si(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),rt="__reactFiber$"+Tr,di="__reactProps$"+Tr,St="__reactContainer$"+Tr,dl="__reactEvents$"+Tr,r0="__reactListeners$"+Tr,i0="__reactHandles$"+Tr;function yn(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[rt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xi(e){return e=e[rt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ca(e){return e[di]||null}var hl=[],Wn=-1;function un(e){return{current:e}}function q(e){0>Wn||(e.current=hl[Wn],hl[Wn]=null,Wn--)}function G(e,t){Wn++,hl[Wn]=e.current,e.current=t}var rn={},_e=un(rn),Pe=un(!1),Cn=rn;function hr(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Jo(){q(Pe),q(_e)}function hf(e,t,n){if(_e.current!==rn)throw Error(k(168));G(_e,t),G(Pe,n)}function yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Hg(e)||"Unknown",i));return ee({},n,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,Cn=_e.current,G(_e,e),G(Pe,Pe.current),!0}function pf(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=yp(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,q(Pe),q(_e),G(_e,e)):q(Pe),G(Pe,n)}var ht=null,Pa=!1,ps=!1;function wp(e){ht===null?ht=[e]:ht.push(e)}function o0(e){Pa=!0,wp(e)}function cn(){if(!ps&&ht!==null){ps=!0;var e=0,t=F;try{var n=ht;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Pa=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),Vh(_u,cn),i}finally{F=t,ps=!1}}return null}var Gn=[],Kn=0,Qo=null,Zo=0,ze=[],je=0,Pn=null,pt=1,mt="";function mn(e,t){Gn[Kn++]=Zo,Gn[Kn++]=Qo,Qo=e,Zo=t}function _p(e,t,n){ze[je++]=pt,ze[je++]=mt,ze[je++]=Pn,Pn=e;var r=pt;e=mt;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var o=32-Xe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,pt=1<<32-Xe(t)+i|n<<i|r,mt=o+e}else pt=1<<o|n<<i|r,mt=e}function Au(e){e.return!==null&&(mn(e,1),_p(e,1,0))}function Ou(e){for(;e===Qo;)Qo=Gn[--Kn],Gn[Kn]=null,Zo=Gn[--Kn],Gn[Kn]=null;for(;e===Pn;)Pn=ze[--je],ze[je]=null,mt=ze[--je],ze[je]=null,pt=ze[--je],ze[je]=null}var Ne=null,Re=null,X=!1,qe=null;function Sp(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Re=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Re=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(X){var t=Re;if(t){var n=t;if(!mf(e,t)){if(pl(e))throw Error(k(418));t=qt(n.nextSibling);var r=Ne;t&&mf(e,t)?Sp(r,n):(e.flags=e.flags&-4097|2,X=!1,Ne=e)}}else{if(pl(e))throw Error(k(418));e.flags=e.flags&-4097|2,X=!1,Ne=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function io(e){if(e!==Ne)return!1;if(!X)return vf(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cl(e.type,e.memoizedProps)),t&&(t=Re)){if(pl(e))throw kp(),Error(k(418));for(;t;)Sp(e,t),t=qt(t.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ne?qt(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=Re;e;)e=qt(e.nextSibling)}function pr(){Re=Ne=null,X=!1}function xu(e){qe===null?qe=[e]:qe.push(e)}var a0=At.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gf(e){var t=e._init;return t(e._payload)}function Ep(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Zt(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,m,_){return d===null||d.tag!==6?(d=Ss(m,h.mode,_),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,_){var E=m.type;return E===Bn?c(h,d,m.props.children,_,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dt&&gf(E)===d.type)?(_=i(d,m.props),_.ref=Dr(h,d,m),_.return=h,_):(_=Ro(m.type,m.key,m.props,null,h.mode,_),_.ref=Dr(h,d,m),_.return=h,_)}function u(h,d,m,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ks(m,h.mode,_),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,_,E){return d===null||d.tag!==7?(d=bn(m,h.mode,_,E),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ss(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yi:return m=Ro(d.type,d.key,d.props,null,h.mode,m),m.ref=Dr(h,null,d),m.return=h,m;case jn:return d=ks(d,h.mode,m),d.return=h,d;case Dt:var _=d._init;return f(h,_(d._payload),m)}if(Br(d)||Or(d))return d=bn(d,h.mode,m,null),d.return=h,d;oo(h,d)}return null}function p(h,d,m,_){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,d,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:return m.key===E?l(h,d,m,_):null;case jn:return m.key===E?u(h,d,m,_):null;case Dt:return E=m._init,p(h,d,E(m._payload),_)}if(Br(m)||Or(m))return E!==null?null:c(h,d,m,_,null);oo(h,m)}return null}function y(h,d,m,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(m)||null,s(d,h,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yi:return h=h.get(_.key===null?m:_.key)||null,l(d,h,_,E);case jn:return h=h.get(_.key===null?m:_.key)||null,u(d,h,_,E);case Dt:var I=_._init;return y(h,d,m,I(_._payload),E)}if(Br(_)||Or(_))return h=h.get(m)||null,c(d,h,_,E,null);oo(d,_)}return null}function v(h,d,m,_){for(var E=null,I=null,P=d,O=d=0,B=null;P!==null&&O<m.length;O++){P.index>O?(B=P,P=null):B=P.sibling;var U=p(h,P,m[O],_);if(U===null){P===null&&(P=B);break}e&&P&&U.alternate===null&&t(h,P),d=o(U,d,O),I===null?E=U:I.sibling=U,I=U,P=B}if(O===m.length)return n(h,P),X&&mn(h,O),E;if(P===null){for(;O<m.length;O++)P=f(h,m[O],_),P!==null&&(d=o(P,d,O),I===null?E=P:I.sibling=P,I=P);return X&&mn(h,O),E}for(P=r(h,P);O<m.length;O++)B=y(P,h,O,m[O],_),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?O:B.key),d=o(B,d,O),I===null?E=B:I.sibling=B,I=B);return e&&P.forEach(function(te){return t(h,te)}),X&&mn(h,O),E}function g(h,d,m,_){var E=Or(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var I=E=null,P=d,O=d=0,B=null,U=m.next();P!==null&&!U.done;O++,U=m.next()){P.index>O?(B=P,P=null):B=P.sibling;var te=p(h,P,U.value,_);if(te===null){P===null&&(P=B);break}e&&P&&te.alternate===null&&t(h,P),d=o(te,d,O),I===null?E=te:I.sibling=te,I=te,P=B}if(U.done)return n(h,P),X&&mn(h,O),E;if(P===null){for(;!U.done;O++,U=m.next())U=f(h,U.value,_),U!==null&&(d=o(U,d,O),I===null?E=U:I.sibling=U,I=U);return X&&mn(h,O),E}for(P=r(h,P);!U.done;O++,U=m.next())U=y(P,h,O,U.value,_),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?O:U.key),d=o(U,d,O),I===null?E=U:I.sibling=U,I=U);return e&&P.forEach(function(dn){return t(h,dn)}),X&&mn(h,O),E}function C(h,d,m,_){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:e:{for(var E=m.key,I=d;I!==null;){if(I.key===E){if(E=m.type,E===Bn){if(I.tag===7){n(h,I.sibling),d=i(I,m.props.children),d.return=h,h=d;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dt&&gf(E)===I.type){n(h,I.sibling),d=i(I,m.props),d.ref=Dr(h,I,m),d.return=h,h=d;break e}n(h,I);break}else t(h,I);I=I.sibling}m.type===Bn?(d=bn(m.props.children,h.mode,_,m.key),d.return=h,h=d):(_=Ro(m.type,m.key,m.props,null,h.mode,_),_.ref=Dr(h,d,m),_.return=h,h=_)}return a(h);case jn:e:{for(I=m.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=ks(m,h.mode,_),d.return=h,h=d}return a(h);case Dt:return I=m._init,C(h,d,I(m._payload),_)}if(Br(m))return v(h,d,m,_);if(Or(m))return g(h,d,m,_);oo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=Ss(m,h.mode,_),d.return=h,h=d),a(h)):n(h,d)}return C}var mr=Ep(!0),bp=Ep(!1),ea=un(null),ta=null,Yn=null,Ru=null;function Nu(){Ru=Yn=ta=null}function Lu(e){var t=ea.current;q(ea),e._currentValue=t}function vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){ta=e,Ru=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(ta===null)throw Error(k(308));Yn=e,ta.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var wn=null;function Du(e){wn===null?wn=[e]:wn.push(e)}function Tp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Du(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Du(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function yf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function na(e,t,n,r){var i=e.updateQueue;Mt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var p=s.lane,y=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,g=s;switch(p=t,y=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){f=v.call(y,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,p=typeof v=="function"?v.call(y,f,p):v,p==null)break e;f=ee({},f,p);break e;case 2:Mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else y={eventTime:y,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);On|=a,e.lanes=a,e.memoizedState=f}}function wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Ri={},st=un(Ri),hi=un(Ri),pi=un(Ri);function _n(e){if(e===Ri)throw Error(k(174));return e}function Uu(e,t){switch(G(pi,t),G(hi,e),G(st,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Js(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Js(t,e)}q(st),G(st,t)}function vr(){q(st),q(hi),q(pi)}function Cp(e){_n(pi.current);var t=_n(st.current),n=Js(t,e.type);t!==n&&(G(hi,e),G(st,n))}function zu(e){hi.current===e&&(q(st),q(hi))}var Q=un(0);function ra(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ms=[];function ju(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var Co=At.ReactCurrentDispatcher,vs=At.ReactCurrentBatchConfig,An=0,Z=null,ue=null,de=null,ia=!1,qr=!1,mi=0,s0=0;function ge(){throw Error(k(321))}function Bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function $u(e,t,n,r,i,o){if(An=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?f0:d0,e=n(r,i),qr){o=0;do{if(qr=!1,mi=0,25<=o)throw Error(k(301));o+=1,de=ue=null,t.updateQueue=null,Co.current=h0,e=n(r,i)}while(qr)}if(Co.current=oa,t=ue!==null&&ue.next!==null,An=0,de=ue=Z=null,ia=!1,t)throw Error(k(300));return e}function Hu(){var e=mi!==0;return mi=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function We(){if(ue===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?Z.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function vi(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((An&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,Z.lanes|=c,On|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Ze(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,On|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ys(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ze(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Pp(){}function Ap(e,t){var n=Z,r=We(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Fu(Rp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,gi(9,xp.bind(null,n,r,i,t),void 0,null),he===null)throw Error(k(349));An&30||Op(n,t,i)}return i}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xp(e,t,n,r){t.value=n,t.getSnapshot=r,Np(t)&&Lp(e)}function Rp(e,t,n){return n(function(){Np(t)&&Lp(e)})}function Np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Lp(e){var t=kt(e,1);t!==null&&Qe(t,e,1,-1)}function _f(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=c0.bind(null,Z,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dp(){return We().memoizedState}function Po(e,t,n,r){var i=tt();Z.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function Aa(e,t,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(ue!==null){var a=ue.memoizedState;if(o=a.destroy,r!==null&&Bu(r,a.deps)){i.memoizedState=gi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=gi(1|t,n,o,r)}function Sf(e,t){return Po(8390656,8,e,t)}function Fu(e,t){return Aa(2048,8,e,t)}function Mp(e,t){return Aa(4,2,e,t)}function Up(e,t){return Aa(4,4,e,t)}function zp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jp(e,t,n){return n=n!=null?n.concat([e]):null,Aa(4,4,zp.bind(null,t,e),n)}function Vu(){}function Bp(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $p(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hp(e,t,n){return An&21?(Ze(n,t)||(n=Kh(),Z.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function l0(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=vs.transition;vs.transition={};try{e(!1),t()}finally{F=n,vs.transition=r}}function Fp(){return We().memoizedState}function u0(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vp(e))Wp(t,n);else if(n=Tp(e,t,n,r),n!==null){var i=Ee();Qe(n,e,r,i),Gp(n,t,r)}}function c0(e,t,n){var r=Qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vp(e))Wp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ze(s,a)){var l=t.interleaved;l===null?(i.next=i,Du(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Tp(e,t,i,r),n!==null&&(i=Ee(),Qe(n,e,r,i),Gp(n,t,r))}}function Vp(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Wp(e,t){qr=ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var oa={readContext:Ve,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},f0={readContext:Ve,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Sf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,zp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u0.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:_f,useDebugValue:Vu,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=_f(!1),t=e[0];return e=l0.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=tt();if(X){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),he===null)throw Error(k(349));An&30||Op(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sf(Rp.bind(null,r,o,e),[e]),r.flags|=2048,gi(9,xp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tt(),t=he.identifierPrefix;if(X){var n=mt,r=pt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=s0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d0={readContext:Ve,useCallback:Bp,useContext:Ve,useEffect:Fu,useImperativeHandle:jp,useInsertionEffect:Mp,useLayoutEffect:Up,useMemo:$p,useReducer:gs,useRef:Dp,useState:function(){return gs(vi)},useDebugValue:Vu,useDeferredValue:function(e){var t=We();return Hp(t,ue.memoizedState,e)},useTransition:function(){var e=gs(vi)[0],t=We().memoizedState;return[e,t]},useMutableSource:Pp,useSyncExternalStore:Ap,useId:Fp,unstable_isNewReconciler:!1},h0={readContext:Ve,useCallback:Bp,useContext:Ve,useEffect:Fu,useImperativeHandle:jp,useInsertionEffect:Mp,useLayoutEffect:Up,useMemo:$p,useReducer:ys,useRef:Dp,useState:function(){return ys(vi)},useDebugValue:Vu,useDeferredValue:function(e){var t=We();return ue===null?t.memoizedState=e:Hp(t,ue.memoizedState,e)},useTransition:function(){var e=ys(vi)[0],t=We().memoizedState;return[e,t]},useMutableSource:Pp,useSyncExternalStore:Ap,useId:Fp,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oa={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Qt(e),o=wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(Qe(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Qt(e),o=wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(Qe(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Qt(e),i=wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(Qe(t,e,r,n),Io(t,e,r))}};function kf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,o):!0}function Kp(e,t,n){var r=!1,i=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ae(t)?Cn:_e.current,r=t.contextTypes,o=(r=r!=null)?hr(e,i):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oa.enqueueReplaceState(t,t.state,null)}function yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ae(t)?Cn:_e.current,i.context=hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oa.enqueueReplaceState(i,i.state,null),na(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=$g(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function Yp(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,Al=r),wl(e,t)},n}function qp(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wl(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function bf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=P0.bind(null,e,t,n),t.then(e,e))}function Tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function If(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var m0=At.ReactCurrentOwner,Ce=!1;function ke(e,t,n,r){t.child=e===null?bp(t,null,n,r):mr(t,e.child,n,r)}function Cf(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=$u(e,t,n,r,o,i),n=Hu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(X&&n&&Au(t),t.flags|=1,ke(e,t,r,i),t.child)}function Pf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Jp(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(a,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Jp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ui(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Et(e,t,i)}return _l(e,t,n,r,i)}function Xp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Jn,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Jn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(Jn,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(Jn,xe),xe|=r;return ke(e,t,i,n),t.child}function Qp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var o=Ae(n)?Cn:_e.current;return o=hr(t,o),or(t,i),n=$u(e,t,n,r,o,i),r=Hu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(X&&r&&Au(t),t.flags|=1,ke(e,t,n,i),t.child)}function Af(e,t,n,r,i){if(Ae(n)){var o=!0;Xo(t)}else o=!1;if(or(t,i),t.stateNode===null)Ao(e,t),Kp(t,n,r),yl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ae(n)?Cn:_e.current,u=hr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ef(t,a,r,u),Mt=!1;var p=t.memoizedState;a.state=p,na(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Pe.current||Mt?(typeof c=="function"&&(gl(t,n,c,r),l=t.memoizedState),(s=Mt||kf(t,n,s,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ip(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ke(t.type,s),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Ae(n)?Cn:_e.current,l=hr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&Ef(t,a,r,l),Mt=!1,p=t.memoizedState,a.state=p,na(t,r,a,i);var v=t.memoizedState;s!==f||p!==v||Pe.current||Mt?(typeof y=="function"&&(gl(t,n,y,r),v=t.memoizedState),(u=Mt||kf(t,n,u,r,p,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Sl(e,t,n,r,o,i)}function Sl(e,t,n,r,i,o){Qp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&pf(t,n,!1),Et(e,t,o);r=t.stateNode,m0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=mr(t,e.child,null,o),t.child=mr(t,null,s,o)):ke(e,t,s,o),t.memoizedState=r.state,i&&pf(t,n,!0),t.child}function Zp(e){var t=e.stateNode;t.pendingContext?hf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hf(e,t.context,!1),Uu(e,t.containerInfo)}function Of(e,t,n,r,i){return pr(),xu(i),t.flags|=256,ke(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function El(e){return{baseLanes:e,cachePool:null,transitions:null}}function em(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(Q,i&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Na(a,r,0,null),e=bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=El(n),t.memoizedState=kl,e):Wu(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return v0(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Zt(s,o):(o=bn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?El(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return o=e.child,e=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wu(e,t){return t=Na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&xu(r),mr(t,e.child,null,n),e=Wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ws(Error(k(422))),ao(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Na({mode:"visible",children:r.children},i,0,null),o=bn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mr(t,e.child,null,a),t.child.memoizedState=El(a),t.memoizedState=kl,o);if(!(t.mode&1))return ao(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=ws(o,r,void 0),ao(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ce||s){if(r=he,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kt(e,i),Qe(r,e,i,-1))}return Xu(),r=ws(Error(k(421))),ao(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=A0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=qt(i.nextSibling),Ne=t,X=!0,qe=null,e!==null&&(ze[je++]=pt,ze[je++]=mt,ze[je++]=Pn,pt=e.id,mt=e.overflow,Pn=t),t=Wu(t,r.children),t.flags|=4096,t)}function xf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vl(e.return,t,n)}function _s(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function tm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,n,t);else if(e.tag===19)xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ra(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_s(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ra(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_s(t,!0,n,null,o);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g0(e,t,n){switch(t.tag){case 3:Zp(t),pr();break;case 5:Cp(t);break;case 1:Ae(t.type)&&Xo(t);break;case 4:Uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(ea,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?em(e,t,n):(G(Q,Q.current&1),e=Et(e,t,n),e!==null?e.sibling:null);G(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Xp(e,t,n)}return Et(e,t,n)}var nm,bl,rm,im;nm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};rm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_n(st.current);var o=null;switch(n){case"input":i=Gs(e,i),r=Gs(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=qs(e,i),r=qs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}Xs(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};im=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y0(e,t,n){var r=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ae(t.type)&&Jo(),ye(t),null;case 3:return r=t.stateNode,vr(),q(Pe),q(_e),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(Rl(qe),qe=null))),bl(e,t),ye(t),null;case 5:zu(t);var i=_n(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)rm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ye(t),null}if(e=_n(st.current),io(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rt]=t,r[di]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)K(Hr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":jc(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":$c(r,o),K("invalid",r)}Xs(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,s,e),i=["children",""+s]):ni.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":qi(r),Bc(r,o,!0);break;case"textarea":qi(r),Hc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[rt]=t,e[di]=r,nm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qs(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)K(Hr[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":jc(e,r),i=Gs(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",e);break;case"textarea":$c(e,r),i=qs(e,r),K("invalid",e);break;default:i=r}Xs(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Dh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ri(e,l):typeof l=="number"&&ri(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ni.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&mu(e,o,l,a))}switch(n){case"input":qi(e),Bc(e,r,!1);break;case"textarea":qi(e),Hc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)im(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=_n(pi.current),_n(st.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return ye(t),null;case 13:if(q(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Re!==null&&t.mode&1&&!(t.flags&128))kp(),pr(),t.flags|=98560,o=!1;else if(o=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[rt]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else qe!==null&&(Rl(qe),qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ce===0&&(ce=3):Xu())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return vr(),bl(e,t),e===null&&ci(t.stateNode.containerInfo),ye(t),null;case 10:return Lu(t.type._context),ye(t),null;case 17:return Ae(t.type)&&Jo(),ye(t),null;case 19:if(q(Q),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Mr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ra(e),a!==null){for(t.flags|=128,Mr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>yr&&(t.flags|=128,r=!0,Mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ra(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!X)return ye(t),null}else 2*oe()-o.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=Q.current,G(Q,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return Ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function w0(e,t){switch(Ou(t),t.tag){case 1:return Ae(t.type)&&Jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),q(Pe),q(_e),ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(q(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Q),null;case 4:return vr(),null;case 10:return Lu(t.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var so=!1,we=!1,_0=typeof WeakSet=="function"?WeakSet:Set,R=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Tl(e,t,n){try{n()}catch(r){re(e,t,r)}}var Rf=!1;function S0(e,t){if(ll=Go,e=up(),Pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=a),p===o&&++c===r&&(l=a),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ul={focusedElem:e,selectionRange:n},Go=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,C=v.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ke(t.type,g),C);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){re(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=Rf,Rf=!1,v}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Tl(t,n,o)}i=i.next}while(i!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Il(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function om(e){var t=e.alternate;t!==null&&(e.alternate=null,om(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[di],delete t[dl],delete t[r0],delete t[i0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function am(e){return e.tag===5||e.tag===3||e.tag===4}function Nf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}var pe=null,Ye=!1;function xt(e,t,n){for(n=n.child;n!==null;)sm(e,t,n),n=n.sibling}function sm(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:we||qn(n,t);case 6:var r=pe,i=Ye;pe=null,xt(e,t,n),pe=r,Ye=i,pe!==null&&(Ye?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ye?(e=pe,n=n.stateNode,e.nodeType===8?hs(e.parentNode,n):e.nodeType===1&&hs(e,n),si(e)):hs(pe,n.stateNode));break;case 4:r=pe,i=Ye,pe=n.stateNode.containerInfo,Ye=!0,xt(e,t,n),pe=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Tl(n,t,a),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!we&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,xt(e,t,n),we=r):xt(e,t,n);break;default:xt(e,t,n)}}function Lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _0),t.forEach(function(r){var i=O0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,Ye=!1;break e;case 3:pe=s.stateNode.containerInfo,Ye=!0;break e;case 4:pe=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(pe===null)throw Error(k(160));sm(o,a,i),pe=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lm(t,e),t=t.sibling}function lm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),et(e),r&4){try{Jr(3,e,e.return),xa(3,e)}catch(g){re(e,e.return,g)}try{Jr(5,e,e.return)}catch(g){re(e,e.return,g)}}break;case 1:Ge(t,e),et(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Ge(t,e),et(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{ri(i,"")}catch(g){re(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Oh(i,o),Qs(s,a);var u=Qs(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Dh(i,f):c==="dangerouslySetInnerHTML"?Nh(i,f):c==="children"?ri(i,f):mu(i,c,f,u)}switch(s){case"input":Ks(i,o);break;case"textarea":xh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?tr(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(g){re(e,e.return,g)}}break;case 6:if(Ge(t,e),et(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){re(e,e.return,g)}}break;case 3:if(Ge(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(g){re(e,e.return,g)}break;case 4:Ge(t,e),et(e);break;case 13:Ge(t,e),et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=oe())),r&4&&Lf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||c,Ge(t,e),we=u):Ge(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(p=R,y=p.child,p.tag){case 0:case 11:case 14:case 15:Jr(4,p,p.return);break;case 1:qn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){re(r,n,g)}}break;case 5:qn(p,p.return);break;case 22:if(p.memoizedState!==null){Mf(f);continue}}y!==null?(y.return=p,R=y):Mf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Lh("display",a))}catch(g){re(e,e.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){re(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),et(e),r&4&&Lf(e);break;case 21:break;default:Ge(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(am(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var o=Nf(e);Pl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Nf(e);Cl(e,s,a);break;default:throw Error(k(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k0(e,t,n){R=e,um(e)}function um(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||so;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||we;s=so;var u=we;if(so=a,(we=l)&&!u)for(R=i;R!==null;)a=R,l=a.child,a.tag===22&&a.memoizedState!==null?Uf(i):l!==null?(l.return=a,R=l):Uf(i);for(;o!==null;)R=o,um(o),o=o.sibling;R=i,so=s,we=u}Df(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Df(e)}}function Df(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&si(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}we||t.flags&512&&Il(t)}catch(p){re(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Mf(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Uf(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var o=t.return;try{Il(t)}catch(l){re(t,o,l)}break;case 5:var a=t.return;try{Il(t)}catch(l){re(t,a,l)}}}catch(l){re(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var E0=Math.ceil,aa=At.ReactCurrentDispatcher,Gu=At.ReactCurrentOwner,$e=At.ReactCurrentBatchConfig,H=0,he=null,se=null,me=0,xe=0,Jn=un(0),ce=0,yi=null,On=0,Ra=0,Ku=0,Xr=null,Ie=null,Yu=0,yr=1/0,dt=null,sa=!1,Al=null,Xt=null,lo=!1,Vt=null,la=0,Qr=0,Ol=null,Oo=-1,xo=0;function Ee(){return H&6?oe():Oo!==-1?Oo:Oo=oe()}function Qt(e){return e.mode&1?H&2&&me!==0?me&-me:a0.transition!==null?(xo===0&&(xo=Kh()),xo):(e=F,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e):1}function Qe(e,t,n,r){if(50<Qr)throw Qr=0,Ol=null,Error(k(185));Ai(e,n,r),(!(H&2)||e!==he)&&(e===he&&(!(H&2)&&(Ra|=n),ce===4&&zt(e,me)),Oe(e,r),n===1&&H===0&&!(t.mode&1)&&(yr=oe()+500,Pa&&cn()))}function Oe(e,t){var n=e.callbackNode;ay(e,t);var r=Wo(e,e===he?me:0);if(r===0)n!==null&&Wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wc(n),t===1)e.tag===0?o0(zf.bind(null,e)):wp(zf.bind(null,e)),t0(function(){!(H&6)&&cn()}),n=null;else{switch(Yh(r)){case 1:n=_u;break;case 4:n=Wh;break;case 16:n=Vo;break;case 536870912:n=Gh;break;default:n=Vo}n=gm(n,cm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cm(e,t){if(Oo=-1,xo=0,H&6)throw Error(k(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=Wo(e,e===he?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ua(e,r);else{t=r;var i=H;H|=2;var o=dm();(he!==e||me!==t)&&(dt=null,yr=oe()+500,En(e,t));do try{I0();break}catch(s){fm(e,s)}while(!0);Nu(),aa.current=o,H=i,se!==null?t=0:(he=null,me=0,t=ce)}if(t!==0){if(t===2&&(i=rl(e),i!==0&&(r=i,t=xl(e,i))),t===1)throw n=yi,En(e,0),zt(e,r),Oe(e,oe()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!b0(i)&&(t=ua(e,r),t===2&&(o=rl(e),o!==0&&(r=o,t=xl(e,o))),t===1))throw n=yi,En(e,0),zt(e,r),Oe(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:vn(e,Ie,dt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Yu+500-oe(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fl(vn.bind(null,e,Ie,dt),t);break}vn(e,Ie,dt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Xe(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E0(r/1960))-r,10<r){e.timeoutHandle=fl(vn.bind(null,e,Ie,dt),r);break}vn(e,Ie,dt);break;case 5:vn(e,Ie,dt);break;default:throw Error(k(329))}}}return Oe(e,oe()),e.callbackNode===n?cm.bind(null,e):null}function xl(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=ua(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Rl(t)),e}function Rl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function b0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~Ku,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function zf(e){if(H&6)throw Error(k(327));ar();var t=Wo(e,0);if(!(t&1))return Oe(e,oe()),null;var n=ua(e,t);if(e.tag!==0&&n===2){var r=rl(e);r!==0&&(t=r,n=xl(e,r))}if(n===1)throw n=yi,En(e,0),zt(e,t),Oe(e,oe()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Ie,dt),Oe(e,oe()),null}function qu(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(yr=oe()+500,Pa&&cn())}}function xn(e){Vt!==null&&Vt.tag===0&&!(H&6)&&ar();var t=H;H|=1;var n=$e.transition,r=F;try{if($e.transition=null,F=1,e)return e()}finally{F=r,$e.transition=n,H=t,!(H&6)&&cn()}}function Ju(){xe=Jn.current,q(Jn)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:vr(),q(Pe),q(_e),ju();break;case 5:zu(r);break;case 4:vr();break;case 13:q(Q);break;case 19:q(Q);break;case 10:Lu(r.type._context);break;case 22:case 23:Ju()}n=n.return}if(he=e,se=e=Zt(e.current,null),me=xe=t,ce=0,yi=null,Ku=Ra=On=0,Ie=Xr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}wn=null}return e}function fm(e,t){do{var n=se;try{if(Nu(),Co.current=oa,ia){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ia=!1}if(An=0,de=ue=Z=null,qr=!1,mi=0,Gu.current=null,n===null||n.return===null){ce=1,yi=t,se=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=me,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Tf(a);if(y!==null){y.flags&=-257,If(y,a,s,o,t),y.mode&1&&bf(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(l),t.updateQueue=g}else v.add(l);break e}else{if(!(t&1)){bf(o,u,t),Xu();break e}l=Error(k(426))}}else if(X&&s.mode&1){var C=Tf(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),If(C,a,s,o,t),xu(gr(l,s));break e}}o=l=gr(l,s),ce!==4&&(ce=2),Xr===null?Xr=[o]:Xr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Yp(o,l,t);yf(o,h);break e;case 1:s=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xt===null||!Xt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=qp(o,s,t);yf(o,_);break e}}o=o.return}while(o!==null)}pm(n)}catch(E){t=E,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function dm(){var e=aa.current;return aa.current=oa,e===null?oa:e}function Xu(){(ce===0||ce===3||ce===2)&&(ce=4),he===null||!(On&268435455)&&!(Ra&268435455)||zt(he,me)}function ua(e,t){var n=H;H|=2;var r=dm();(he!==e||me!==t)&&(dt=null,En(e,t));do try{T0();break}catch(i){fm(e,i)}while(!0);if(Nu(),H=n,aa.current=r,se!==null)throw Error(k(261));return he=null,me=0,ce}function T0(){for(;se!==null;)hm(se)}function I0(){for(;se!==null&&!Xg();)hm(se)}function hm(e){var t=vm(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?pm(e):se=t,Gu.current=null}function pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w0(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=y0(n,t,xe),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function vn(e,t,n){var r=F,i=$e.transition;try{$e.transition=null,F=1,C0(e,t,n,r)}finally{$e.transition=i,F=r}return null}function C0(e,t,n,r){do ar();while(Vt!==null);if(H&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sy(e,o),e===he&&(se=he=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,gm(Vo,function(){return ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var a=F;F=1;var s=H;H|=4,Gu.current=null,S0(e,n),lm(n,e),Ky(ul),Go=!!ll,ul=ll=null,e.current=n,k0(n),Qg(),H=s,F=a,$e.transition=o}else e.current=n;if(lo&&(lo=!1,Vt=e,la=i),o=e.pendingLanes,o===0&&(Xt=null),ty(n.stateNode),Oe(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=Al,Al=null,e;return la&1&&e.tag!==0&&ar(),o=e.pendingLanes,o&1?e===Ol?Qr++:(Qr=0,Ol=e):Qr=0,cn(),null}function ar(){if(Vt!==null){var e=Yh(la),t=$e.transition,n=F;try{if($e.transition=null,F=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,la=0,H&6)throw Error(k(331));var i=H;for(H|=4,R=e.current;R!==null;){var o=R,a=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Jr(8,c,o)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var p=c.sibling,y=c.return;if(om(c),c===u){R=null;break}if(p!==null){p.return=y,R=p;break}R=y}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var C=g.sibling;g.sibling=null,g=C}while(g!==null)}}R=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,R=a;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var d=e.current;for(R=d;R!==null;){a=R;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,R=m;else e:for(a=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xa(9,s)}}catch(E){re(s,s.return,E)}if(s===a){R=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,R=_;break e}R=s.return}}if(H=i,cn(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ea,e)}catch{}r=!0}return r}finally{F=n,$e.transition=t}}return!1}function jf(e,t,n){t=gr(n,t),t=Yp(e,t,1),e=Jt(e,t,1),t=Ee(),e!==null&&(Ai(e,1,t),Oe(e,t))}function re(e,t,n){if(e.tag===3)jf(e,e,n);else for(;t!==null;){if(t.tag===3){jf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=gr(n,e),e=qp(t,e,1),t=Jt(t,e,1),e=Ee(),t!==null&&(Ai(t,1,e),Oe(t,e));break}}t=t.return}}function P0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>oe()-Yu?En(e,0):Ku|=n),Oe(e,t)}function mm(e,t){t===0&&(e.mode&1?(t=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):t=1);var n=Ee();e=kt(e,t),e!==null&&(Ai(e,t,n),Oe(e,n))}function A0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mm(e,n)}function O0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),mm(e,n)}var vm;vm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,g0(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,X&&t.flags&1048576&&_p(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=hr(t,_e.current);or(t,n),i=$u(null,t,r,e,i,n);var o=Hu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mu(t),i.updater=Oa,t.stateNode=i,i._reactInternals=t,yl(t,r,e,n),t=Sl(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Au(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=R0(r),e=Ke(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Af(null,t,r,e,n);break e;case 11:t=Cf(null,t,r,e,n);break e;case 14:t=Pf(null,t,r,Ke(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),_l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Af(e,t,r,i,n);case 3:e:{if(Zp(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ip(e,t),na(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gr(Error(k(423)),t),t=Of(e,t,r,n,i);break e}else if(r!==i){i=gr(Error(k(424)),t),t=Of(e,t,r,n,i);break e}else for(Re=qt(t.stateNode.containerInfo.firstChild),Ne=t,X=!0,qe=null,n=bp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===i){t=Et(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Cp(t),e===null&&ml(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,cl(r,i)?a=null:o!==null&&cl(r,o)&&(t.flags|=32),Qp(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&ml(t),null;case 13:return em(e,t,n);case 4:return Uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Cf(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,G(ea,r._currentValue),r._currentValue=a,o!==null)if(Ze(o.value,a)){if(o.children===i.children&&!Pe.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=wt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),vl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=Ve(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),Pf(e,t,r,i,n);case 15:return Jp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Ao(e,t),t.tag=1,Ae(r)?(e=!0,Xo(t)):e=!1,or(t,n),Kp(t,r,i),yl(t,r,i,n),Sl(null,t,r,!0,e,n);case 19:return tm(e,t,n);case 22:return Xp(e,t,n)}throw Error(k(156,t.tag))};function gm(e,t){return Vh(e,t)}function x0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new x0(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R0(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gu)return 11;if(e===yu)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Bn:return bn(n.children,i,o,t);case vu:a=8,i|=8;break;case Hs:return e=Be(12,n,t,i|2),e.elementType=Hs,e.lanes=o,e;case Fs:return e=Be(13,n,t,i),e.elementType=Fs,e.lanes=o,e;case Vs:return e=Be(19,n,t,i),e.elementType=Vs,e.lanes=o,e;case Ch:return Na(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Th:a=10;break e;case Ih:a=9;break e;case gu:a=11;break e;case yu:a=14;break e;case Dt:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Be(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function bn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Na(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Ch,e.lanes=n,e.stateNode={isHidden:!1},e}function Ss(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function N0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ns(0),this.expirationTimes=ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,o,a,s,l){return e=new N0(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(o),e}function L0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ym(e){if(!e)return rn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ae(n))return yp(e,n,t)}return t}function wm(e,t,n,r,i,o,a,s,l){return e=Zu(n,r,!0,e,i,o,a,s,l),e.context=ym(null),n=e.current,r=Ee(),i=Qt(n),o=wt(r,i),o.callback=t??null,Jt(n,o,i),e.current.lanes=i,Ai(e,i,r),Oe(e,r),e}function La(e,t,n,r){var i=t.current,o=Ee(),a=Qt(i);return n=ym(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,a),e!==null&&(Qe(e,i,a,o),Io(e,i,a)),a}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){Bf(e,t),(e=e.alternate)&&Bf(e,t)}function D0(){return null}var _m=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}Da.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));La(e,t,null,null)};Da.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){La(null,e,null,null)}),t[St]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Zh(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $f(){}function M0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ca(a);o.call(u)}}var a=wm(t,r,e,0,null,!1,!1,"",$f);return e._reactRootContainer=a,e[St]=a.current,ci(e.nodeType===8?e.parentNode:e),xn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ca(l);s.call(u)}}var l=Zu(e,0,!1,null,null,!1,!1,"",$f);return e._reactRootContainer=l,e[St]=l.current,ci(e.nodeType===8?e.parentNode:e),xn(function(){La(t,l,n,r)}),l}function Ua(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ca(a);s.call(l)}}La(t,a,e,i)}else a=M0(n,t,e,i,r);return ca(a)}qh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(Su(t,n|1),Oe(t,oe()),!(H&6)&&(yr=oe()+500,cn()))}break;case 13:xn(function(){var r=kt(e,1);if(r!==null){var i=Ee();Qe(r,e,1,i)}}),ec(e,1)}};ku=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Ee();Qe(t,e,134217728,n)}ec(e,134217728)}};Jh=function(e){if(e.tag===13){var t=Qt(e),n=kt(e,t);if(n!==null){var r=Ee();Qe(n,e,t,r)}ec(e,t)}};Xh=function(){return F};Qh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};el=function(e,t,n){switch(t){case"input":if(Ks(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ca(r);if(!i)throw Error(k(90));Ah(r),Ks(r,i)}}}break;case"textarea":xh(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};zh=qu;jh=xn;var U0={usingClientEntryPoint:!1,Events:[xi,Vn,Ca,Mh,Uh,qu]},Ur={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z0={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Ea=uo.inject(z0),at=uo}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(k(200));return L0(e,t,null,n)};De.createRoot=function(e,t){if(!nc(e))throw Error(k(299));var n=!1,r="",i=_m;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,ci(e.nodeType===8?e.parentNode:e),new tc(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Hh(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return xn(e)};De.hydrate=function(e,t,n){if(!Ma(t))throw Error(k(200));return Ua(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=_m;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wm(t,null,e,1,n??null,i,!1,o,a),e[St]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Da(t)};De.render=function(e,t,n){if(!Ma(t))throw Error(k(200));return Ua(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(k(40));return e._reactRootContainer?(xn(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};De.unstable_batchedUpdates=qu;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ua(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function Sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm)}catch(e){console.error(e)}}Sm(),Sh.exports=De;var j0=Sh.exports,Hf=j0;Bs.createRoot=Hf.createRoot,Bs.hydrateRoot=Hf.hydrateRoot;function Ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ff(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ff(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fa(e){"@babel/helpers - typeof";return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fa(e)}function B0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H0(e,t,n){return t&&$0(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rc(e,t){return V0(e)||G0(e,t)||km(e,t)||Y0()}function Ni(e){return F0(e)||W0(e)||km(e)||K0()}function F0(e){if(Array.isArray(e))return Nl(e)}function V0(e){if(Array.isArray(e))return e}function W0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function G0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function km(e,t){if(e){if(typeof e=="string")return Nl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nl(e,t)}}function Nl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function K0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vf=function(){},ic={},Em={},bm=null,Tm={mark:Vf,measure:Vf};try{typeof window<"u"&&(ic=window),typeof document<"u"&&(Em=document),typeof MutationObserver<"u"&&(bm=MutationObserver),typeof performance<"u"&&(Tm=performance)}catch{}var q0=ic.navigator||{},Wf=q0.userAgent,Gf=Wf===void 0?"":Wf,on=ic,J=Em,Kf=bm,co=Tm;on.document;var Ot=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Im=~Gf.indexOf("MSIE")||~Gf.indexOf("Trident/"),fo,ho,po,mo,vo,bt="___FONT_AWESOME___",Ll=16,Cm="fa",Pm="svg-inline--fa",Rn="data-fa-i2svg",Dl="data-fa-pseudo-element",J0="data-fa-pseudo-element-pending",oc="data-prefix",ac="data-icon",Yf="fontawesome-i2svg",X0="async",Q0=["HTML","HEAD","STYLE","SCRIPT"],Am=function(){try{return!0}catch{return!1}}(),Y="classic",ie="sharp",sc=[Y,ie];function Li(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var wi=Li((fo={},fe(fo,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),fe(fo,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),fo)),_i=Li((ho={},fe(ho,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(ho,ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ho)),Si=Li((po={},fe(po,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(po,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),po)),Z0=Li((mo={},fe(mo,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(mo,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),mo)),e1=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Om="fa-layers-text",t1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,n1=Li((vo={},fe(vo,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(vo,ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),vo)),xm=[1,2,3,4,5,6,7,8,9,10],r1=xm.concat([11,12,13,14,15,16,17,18,19,20]),i1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ki=new Set;Object.keys(_i[Y]).map(ki.add.bind(ki));Object.keys(_i[ie]).map(ki.add.bind(ki));var o1=[].concat(sc,Ni(ki),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sn.GROUP,Sn.SWAP_OPACITY,Sn.PRIMARY,Sn.SECONDARY]).concat(xm.map(function(e){return"".concat(e,"x")})).concat(r1.map(function(e){return"w-".concat(e)})),Zr=on.FontAwesomeConfig||{};function a1(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function s1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var l1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];l1.forEach(function(e){var t=rc(e,2),n=t[0],r=t[1],i=s1(a1(n));i!=null&&(Zr[r]=i)})}var Rm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Cm,replacementClass:Pm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zr.familyPrefix&&(Zr.cssPrefix=Zr.familyPrefix);var wr=x(x({},Rm),Zr);wr.autoReplaceSvg||(wr.observeMutations=!1);var N={};Object.keys(Rm).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){wr[e]=n,ei.forEach(function(r){return r(N)})},get:function(){return wr[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){wr.cssPrefix=t,ei.forEach(function(n){return n(N)})},get:function(){return wr.cssPrefix}});on.FontAwesomeConfig=N;var ei=[];function u1(e){return ei.push(e),function(){ei.splice(ei.indexOf(e),1)}}var Rt=Ll,it={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function c1(e){if(!(!e||!Ot)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return J.head.insertBefore(t,r),e}}var f1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ei(){for(var e=12,t="";e-- >0;)t+=f1[Math.random()*62|0];return t}function Ir(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function lc(e){return e.classList?Ir(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Nm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Nm(e[n]),'" ')},"").trim()}function za(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function uc(e){return e.size!==it.size||e.x!==it.x||e.y!==it.y||e.rotate!==it.rotate||e.flipX||e.flipY}function h1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function p1(e){var t=e.transform,n=e.width,r=n===void 0?Ll:n,i=e.height,o=i===void 0?Ll:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&Im?l+="translate(".concat(t.x/Rt-r/2,"em, ").concat(t.y/Rt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Rt,"em), calc(-50% + ").concat(t.y/Rt,"em)) "):l+="translate(".concat(t.x/Rt,"em, ").concat(t.y/Rt,"em) "),l+="scale(".concat(t.size/Rt*(t.flipX?-1:1),", ").concat(t.size/Rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var m1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Lm(){var e=Cm,t=Pm,n=N.cssPrefix,r=N.replacementClass,i=m1;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var qf=!1;function Es(){N.autoAddCss&&!qf&&(c1(Lm()),qf=!0)}var v1={mixout:function(){return{dom:{css:Lm,insertCss:Es}}},hooks:function(){return{beforeDOMElementCreation:function(){Es()},beforeI2svg:function(){Es()}}}},Tt=on||{};Tt[bt]||(Tt[bt]={});Tt[bt].styles||(Tt[bt].styles={});Tt[bt].hooks||(Tt[bt].hooks={});Tt[bt].shims||(Tt[bt].shims=[]);var Je=Tt[bt],Dm=[],g1=function e(){J.removeEventListener("DOMContentLoaded",e),da=1,Dm.map(function(t){return t()})},da=!1;Ot&&(da=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),da||J.addEventListener("DOMContentLoaded",g1));function y1(e){Ot&&(da?setTimeout(e,0):Dm.push(e))}function Di(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Nm(e):"<".concat(t," ").concat(d1(r),">").concat(o.map(Di).join(""),"</").concat(t,">")}function Jf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bs=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function w1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ml(e){var t=w1(e);return t.length===1?t[0].toString(16):null}function _1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Xf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ul(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Xf(t);typeof Je.hooks.addPack=="function"&&!i?Je.hooks.addPack(e,Xf(t)):Je.styles[e]=x(x({},Je.styles[e]||{}),o),e==="fas"&&Ul("fa",t)}var go,yo,wo,Xn=Je.styles,S1=Je.shims,k1=(go={},fe(go,Y,Object.values(Si[Y])),fe(go,ie,Object.values(Si[ie])),go),cc=null,Mm={},Um={},zm={},jm={},Bm={},E1=(yo={},fe(yo,Y,Object.keys(wi[Y])),fe(yo,ie,Object.keys(wi[ie])),yo);function b1(e){return~o1.indexOf(e)}function T1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!b1(i)?i:null}var $m=function(){var t=function(o){return bs(Xn,function(a,s,l){return a[l]=bs(s,o,{}),a},{})};Mm=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),Um=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),Bm=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in Xn||N.autoFetchSvg,r=bs(S1,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});zm=r.names,jm=r.unicodes,cc=ja(N.styleDefault,{family:N.familyDefault})};u1(function(e){cc=ja(e.styleDefault,{family:N.familyDefault})});$m();function fc(e,t){return(Mm[e]||{})[t]}function I1(e,t){return(Um[e]||{})[t]}function kn(e,t){return(Bm[e]||{})[t]}function Hm(e){return zm[e]||{prefix:null,iconName:null}}function C1(e){var t=jm[e],n=fc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function an(){return cc}var dc=function(){return{prefix:null,iconName:null,rest:[]}};function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=wi[r][e],o=_i[r][e]||_i[r][i],a=e in Je.styles?e:null;return o||a||null}var Qf=(wo={},fe(wo,Y,Object.keys(Si[Y])),fe(wo,ie,Object.keys(Si[ie])),wo);function Ba(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},fe(t,Y,"".concat(N.cssPrefix,"-").concat(Y)),fe(t,ie,"".concat(N.cssPrefix,"-").concat(ie)),t),a=null,s=Y;(e.includes(o[Y])||e.some(function(u){return Qf[Y].includes(u)}))&&(s=Y),(e.includes(o[ie])||e.some(function(u){return Qf[ie].includes(u)}))&&(s=ie);var l=e.reduce(function(u,c){var f=T1(N.cssPrefix,c);if(Xn[c]?(c=k1[s].includes(c)?Z0[s][c]:c,a=c,u.prefix=c):E1[s].indexOf(c)>-1?(a=c,u.prefix=ja(c,{family:s})):f?u.iconName=f:c!==N.replacementClass&&c!==o[Y]&&c!==o[ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=a==="fa"?Hm(u.iconName):{},y=kn(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||y||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Xn.far&&Xn.fas&&!N.autoFetchSvg&&(u.prefix="fas")}return u},dc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Xn.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=kn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=an()||"fas"),l}var P1=function(){function e(){B0(this,e),this.definitions={}}return H0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),a[s]),Ul(s,a[s]);var l=Si[Y][s];l&&Ul(l,a[s]),$m()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Zf=[],Qn={},sr={},A1=Object.keys(sr);function O1(e,t){var n=t.mixoutsTo;return Zf=e,Qn={},Object.keys(sr).forEach(function(r){A1.indexOf(r)===-1&&delete sr[r]}),Zf.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),fa(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){Qn[a]||(Qn[a]=[]),Qn[a].push(o[a])})}r.provides&&r.provides(sr)}),n}function zl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Qn[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Qn[e]||[];i.forEach(function(o){o.apply(null,n)})}function It(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return sr[e]?sr[e].apply(null,t):void 0}function jl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||an();if(t)return t=kn(n,t)||t,Jf(Fm.definitions,n,t)||Jf(Je.styles,n,t)}var Fm=new P1,x1=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Nn("noAuto")},R1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ot?(Nn("beforeI2svg",t),It("pseudoElements2svg",t),It("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,y1(function(){L1({autoReplaceSvgRoot:n}),Nn("watch",t)})}},N1={icon:function(t){if(t===null)return null;if(fa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ja(t[0]);return{prefix:r,iconName:kn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(e1))){var i=Ba(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||an(),iconName:kn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=an();return{prefix:o,iconName:kn(o,t)||t}}}},Ue={noAuto:x1,config:N,dom:R1,parse:N1,library:Fm,findIconDefinition:jl,toHtml:Di},L1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Je.styles).length>0||N.autoFetchSvg)&&Ot&&N.autoReplaceSvg&&Ue.dom.i2svg({node:r})};function $a(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Di(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ot){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function D1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(uc(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=za(x(x({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function M1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:a}),children:r}]}]}function hc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,y=p===void 0?!1:p,v=r.found?r:n,g=v.width,C=v.height,h=i==="fak",d=[N.replacementClass,o?"".concat(N.cssPrefix,"-").concat(o):""].filter(function(B){return f.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(f.classes).join(" "),m={children:[],attributes:x(x({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(C)})},_=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/C*16*.0625,"em")}:{};y&&(m.attributes[Rn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ei())},children:[l]}),delete m.attributes.title);var E=x(x({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:x(x({},_),f.styles)}),I=r.found&&n.found?It("generateAbstractMask",E)||{children:[],attributes:{}}:It("generateAbstractIcon",E)||{children:[],attributes:{}},P=I.children,O=I.attributes;return E.children=P,E.attributes=O,s?M1(E):D1(E)}function ed(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Rn]="");var c=x({},a.styles);uc(i)&&(c.transform=p1({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=za(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function U1(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=za(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Ts=Je.styles;function Bl(e){var t=e[0],n=e[1],r=e.slice(4),i=rc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Sn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Sn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Sn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var z1={found:!1,width:512,height:512};function j1(e,t){!Am&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $l(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=an()),new Promise(function(r,i){if(It("missingIconAbstract"),n==="fa"){var o=Hm(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ts[t]&&Ts[t][e]){var a=Ts[t][e];return r(Bl(a))}j1(e,t),r(x(x({},z1),{},{icon:N.showMissingIcons&&e?It("missingIconAbstract")||{}:{}}))})}var td=function(){},Hl=N.measurePerformance&&co&&co.mark&&co.measure?co:{mark:td,measure:td},Fr='FA "6.5.2"',B1=function(t){return Hl.mark("".concat(Fr," ").concat(t," begins")),function(){return Vm(t)}},Vm=function(t){Hl.mark("".concat(Fr," ").concat(t," ends")),Hl.measure("".concat(Fr," ").concat(t),"".concat(Fr," ").concat(t," begins"),"".concat(Fr," ").concat(t," ends"))},pc={begin:B1,end:Vm},No=function(){};function nd(e){var t=e.getAttribute?e.getAttribute(Rn):null;return typeof t=="string"}function $1(e){var t=e.getAttribute?e.getAttribute(oc):null,n=e.getAttribute?e.getAttribute(ac):null;return t&&n}function H1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function F1(){if(N.autoReplaceSvg===!0)return Lo.replace;var e=Lo[N.autoReplaceSvg];return e||Lo.replace}function V1(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function W1(e){return J.createElement(e)}function Wm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?V1:W1:n;if(typeof e=="string")return J.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Wm(a,{ceFn:r}))}),i}function G1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Lo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Wm(i),n)}),n.getAttribute(Rn)===null&&N.keepOriginalSource){var r=J.createComment(G1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~lc(n).indexOf(N.replacementClass))return Lo.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return Di(s)}).join(`
`);n.setAttribute(Rn,""),n.innerHTML=a}};function rd(e){e()}function Gm(e,t){var n=typeof t=="function"?t:No;if(e.length===0)n();else{var r=rd;N.mutateApproach===X0&&(r=on.requestAnimationFrame||rd),r(function(){var i=F1(),o=pc.begin("mutate");e.map(i),o(),n()})}}var mc=!1;function Km(){mc=!0}function Fl(){mc=!1}var ha=null;function id(e){if(Kf&&N.observeMutations){var t=e.treeCallback,n=t===void 0?No:t,r=e.nodeCallback,i=r===void 0?No:r,o=e.pseudoElementsCallback,a=o===void 0?No:o,s=e.observeMutationsRoot,l=s===void 0?J:s;ha=new Kf(function(u){if(!mc){var c=an();Ir(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!nd(f.addedNodes[0])&&(N.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&N.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&nd(f.target)&&~i1.indexOf(f.attributeName))if(f.attributeName==="class"&&$1(f.target)){var p=Ba(lc(f.target)),y=p.prefix,v=p.iconName;f.target.setAttribute(oc,y||c),v&&f.target.setAttribute(ac,v)}else H1(f.target)&&i(f.target)})}}),Ot&&ha.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function K1(){ha&&ha.disconnect()}function Y1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function q1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ba(lc(e));return i.prefix||(i.prefix=an()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=I1(i.prefix,e.innerText)||fc(i.prefix,Ml(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function J1(e){var t=Ir(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Ei()):(t["aria-hidden"]="true",t.focusable="false")),t}function X1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:it,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function od(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=q1(e),r=n.iconName,i=n.prefix,o=n.rest,a=J1(e),s=zl("parseNodeAttributes",{},e),l=t.styleParser?Y1(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:it,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var Q1=Je.styles;function Ym(e){var t=N.autoReplaceSvg==="nest"?od(e,{styleParser:!1}):od(e);return~t.extra.classes.indexOf(Om)?It("generateLayersText",e,t):It("generateSvgReplacementMutation",e,t)}var sn=new Set;sc.map(function(e){sn.add("fa-".concat(e))});Object.keys(wi[Y]).map(sn.add.bind(sn));Object.keys(wi[ie]).map(sn.add.bind(sn));sn=Ni(sn);function ad(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ot)return Promise.resolve();var n=J.documentElement.classList,r=function(f){return n.add("".concat(Yf,"-").concat(f))},i=function(f){return n.remove("".concat(Yf,"-").concat(f))},o=N.autoFetchSvg?sn:sc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Q1));o.includes("fa")||o.push("fa");var a=[".".concat(Om,":not([").concat(Rn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Rn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Ir(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=pc.begin("onTree"),u=s.reduce(function(c,f){try{var p=Ym(f);p&&c.push(p)}catch(y){Am||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){Gm(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function Z1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ym(e).then(function(n){n&&Gm([n],t)})}function ew(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:jl(i||{})),e(r,x(x({},n),{},{mask:i}))}}var tw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?it:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,y=n.titleId,v=y===void 0?null:y,g=n.classes,C=g===void 0?[]:g,h=n.attributes,d=h===void 0?{}:h,m=n.styles,_=m===void 0?{}:m;if(t){var E=t.prefix,I=t.iconName,P=t.icon;return $a(x({type:"icon"},t),function(){return Nn("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?d["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(v||Ei()):(d["aria-hidden"]="true",d.focusable="false")),hc({icons:{main:Bl(P),mask:l?Bl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:I,transform:x(x({},it),i),symbol:a,title:p,maskId:c,titleId:v,extra:{attributes:d,styles:_,classes:C}})})}},nw={mixout:function(){return{icon:ew(tw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ad,n.nodeCallback=Z1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?J:r,o=n.callback,a=o===void 0?function(){}:o;return ad(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(y,v){Promise.all([$l(i,s),c.iconName?$l(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var C=rc(g,2),h=C[0],d=C[1];y([n,hc({icons:{main:h,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:p,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=za(s);l.length>0&&(i.style=l);var u;return uc(a)&&(u=It("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},rw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return $a({type:"layer"},function(){Nn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Ni(o)).join(" ")},children:a}]})}}}},iw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return $a({type:"counter",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),U1({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Ni(s))}})})}}}},ow={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?it:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,y=p===void 0?{}:p;return $a({type:"text",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),ed({content:n,transform:x(x({},it),o),title:s,extra:{attributes:f,styles:y,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Ni(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(Im){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,ed({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},aw=new RegExp('"',"ug"),sd=[1105920,1112319];function sw(e){var t=e.replace(aw,""),n=_1(t,0),r=n>=sd[0]&&n<=sd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ml(i?t[0]:t),isSecondary:r||i}}function ld(e,t){var n="".concat(J0).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Ir(e.children),a=o.filter(function(P){return P.getAttribute(Dl)===t})[0],s=on.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(t1),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:Y,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_i[p][l[2].toLowerCase()]:n1[p][u],v=sw(f),g=v.value,C=v.isSecondary,h=l[0].startsWith("FontAwesome"),d=fc(y,g),m=d;if(h){var _=C1(g);_.iconName&&_.prefix&&(d=_.iconName,y=_.prefix)}if(d&&!C&&(!a||a.getAttribute(oc)!==y||a.getAttribute(ac)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var E=X1(),I=E.extra;I.attributes[Dl]=t,$l(d,y).then(function(P){var O=hc(x(x({},E),{},{icons:{main:P,mask:dc()},prefix:y,iconName:m,extra:I,watchable:!0})),B=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=O.map(function(U){return Di(U)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function lw(e){return Promise.all([ld(e,"::before"),ld(e,"::after")])}function uw(e){return e.parentNode!==document.head&&!~Q0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ud(e){if(Ot)return new Promise(function(t,n){var r=Ir(e.querySelectorAll("*")).filter(uw).map(lw),i=pc.begin("searchPseudoElements");Km(),Promise.all(r).then(function(){i(),Fl(),t()}).catch(function(){i(),Fl(),n()})})}var cw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ud,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?J:r;N.searchPseudoElements&&ud(i)}}},cd=!1,fw={mixout:function(){return{dom:{unwatch:function(){Km(),cd=!0}}}},hooks:function(){return{bootstrap:function(){id(zl("mutationObserverCallbacks",{}))},noAuto:function(){K1()},watch:function(n){var r=n.observeMutationsRoot;cd?Fl():id(zl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},fd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},dw={mixout:function(){return{parse:{transform:function(n){return fd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=fd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},y={outer:s,inner:f,path:p};return{tag:"g",attributes:x({},y.outer),children:[{tag:"g",attributes:x({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),y.path)}]}]}}}},Is={x:0,y:0,width:"100%",height:"100%"};function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hw(e){return e.tag==="g"?e.children:[e]}var pw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Ba(i.split(" ").map(function(a){return a.trim()})):dc();return o.prefix||(o.prefix=an()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,p=a.icon,y=h1({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:x(x({},Is),{},{fill:"white"})},g=c.children?{children:c.children.map(dd)}:{},C={tag:"g",attributes:x({},y.inner),children:[dd(x({tag:c.tag,attributes:x(x({},c.attributes),y.path)},g))]},h={tag:"g",attributes:x({},y.outer),children:[C]},d="mask-".concat(s||Ei()),m="clip-".concat(s||Ei()),_={tag:"mask",attributes:x(x({},Is),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,h]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:hw(p)},_]};return r.push(E,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Is)}),{children:r,attributes:i}}}},mw={provides:function(t){var n=!1;on.matchMedia&&(n=on.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=x(x({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},gw=[v1,nw,rw,iw,ow,cw,fw,dw,pw,mw,vw];O1(gw,{mixoutsTo:Ue});Ue.noAuto;Ue.config;Ue.library;Ue.dom;var Vl=Ue.parse;Ue.findIconDefinition;Ue.toHtml;var yw=Ue.icon;Ue.layer;Ue.text;Ue.counter;var qm={exports:{}},ww="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_w=ww,Sw=_w;function Jm(){}function Xm(){}Xm.resetWarningCache=Jm;var kw=function(){function e(r,i,o,a,s,l){if(l!==Sw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xm,resetWarningCache:Jm};return n.PropTypes=n,n};qm.exports=kw();var Ew=qm.exports;const z=uh(Ew);function hd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hd(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pa(e){"@babel/helpers - typeof";return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pa(e)}function Zn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tw(e,t){if(e==null)return{};var n=bw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wl(e){return Iw(e)||Cw(e)||Pw(e)||Aw()}function Iw(e){if(Array.isArray(e))return Gl(e)}function Cw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pw(e,t){if(e){if(typeof e=="string")return Gl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gl(e,t)}}function Gl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Aw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ow(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,y=e.inverse,v=e.border,g=e.listItem,C=e.flip,h=e.size,d=e.rotation,m=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":y,"fa-border":v,"fa-li":g,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Zn(t,"fa-".concat(h),typeof h<"u"&&h!==null),Zn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Zn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Zn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(E){return _[E]?E:null}).filter(function(E){return E})}function xw(e){return e=e-0,e===e}function Qm(e){return xw(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Rw=["style"];function Nw(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Lw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Qm(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Nw(i)]=o:t[i]=o,t},{})}function Zm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Zm(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Lw(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Qm(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=Tw(n,Rw);return i.attrs.style=nt(nt({},i.attrs.style),a),e.apply(void 0,[t.tag,nt(nt({},i.attrs),s)].concat(Wl(r)))}var ev=!1;try{ev=!0}catch{}function Dw(){if(!ev&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function pd(e){if(e&&pa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vl.icon)return Vl.icon(e);if(e===null)return null;if(e&&pa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Cs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Zn({},e,t):{}}var md={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},tv=du.forwardRef(function(e,t){var n=nt(nt({},md),e),r=n.icon,i=n.mask,o=n.symbol,a=n.className,s=n.title,l=n.titleId,u=n.maskId,c=pd(r),f=Cs("classes",[].concat(Wl(Ow(n)),Wl(a.split(" ")))),p=Cs("transform",typeof n.transform=="string"?Vl.transform(n.transform):n.transform),y=Cs("mask",pd(i)),v=yw(c,nt(nt(nt(nt({},f),p),y),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!v)return Dw("Could not find icon",c),null;var g=v.abstract,C={ref:t};return Object.keys(n).forEach(function(h){md.hasOwnProperty(h)||(C[h]=n[h])}),Mw(g[0],C)});tv.displayName="FontAwesomeIcon";tv.propTypes={beat:z.bool,border:z.bool,beatFade:z.bool,bounce:z.bool,className:z.string,fade:z.bool,flash:z.bool,mask:z.oneOfType([z.object,z.array,z.string]),maskId:z.string,fixedWidth:z.bool,inverse:z.bool,flip:z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:z.oneOfType([z.object,z.array,z.string]),listItem:z.bool,pull:z.oneOf(["right","left"]),pulse:z.bool,rotation:z.oneOf([0,90,180,270]),shake:z.bool,size:z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:z.bool,spinPulse:z.bool,spinReverse:z.bool,symbol:z.oneOfType([z.bool,z.string]),title:z.string,titleId:z.string,transform:z.oneOfType([z.string,z.object]),swapOpacity:z.bool};var Mw=Zm.bind(null,du.createElement),vd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Uw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4;let p=(s&15)<<2|u>>6,y=u&63;l||(y=64,a||(p=64)),r.push(n[c],n[f],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Uw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||f==null)throw new zw;const p=o<<2|s>>4;if(r.push(p),u!==64){const y=s<<4&240|u>>2;if(r.push(y),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jw=function(e){const t=nv(e);return rv.encodeByteArray(t,!0)},iv=function(e){return jw(e).replace(/\./g,"")},ov=function(e){try{return rv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=()=>Bw().__FIREBASE_DEFAULTS__,Hw=()=>{if(typeof process>"u"||typeof vd>"u")return;const e=vd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Fw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ov(e[1]);return t&&JSON.parse(t)},vc=()=>{try{return $w()||Hw()||Fw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vw=e=>{var t,n;return(n=(t=vc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},av=()=>{var e;return(e=vc())===null||e===void 0?void 0:e.config},sv=e=>{var t;return(t=vc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Kw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jw(){try{return typeof indexedDB=="object"}catch{return!1}}function Xw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="FirebaseError";class fn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Qw,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Zw(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new fn(i,s,r)}}function Zw(e,t){return e.replace(e_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const e_=/\{\$([^}]+)}/g;function t_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ma(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(gd(o)&&gd(a)){if(!ma(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function n_(e,t){const n=new r_(e,t);return n.subscribe.bind(n)}class r_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");i_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ps),i.error===void 0&&(i.error=Ps),i.complete===void 0&&(i.complete=Ps);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ps(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ww;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(s_(t))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=gn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gn){return this.instances.has(t)}getOptions(t=gn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gn){return this.component?this.component.multipleInstances?t:gn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a_(e){return e===gn?void 0:e}function s_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new o_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const u_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},c_=W.INFO,f_={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},d_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=f_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lv{constructor(t){this.name=t,this._logLevel=c_,this._logHandler=d_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?u_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const h_=(e,t)=>t.some(n=>e instanceof n);let yd,wd;function p_(){return yd||(yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return wd||(wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,Kl=new WeakMap,cv=new WeakMap,As=new WeakMap,gc=new WeakMap;function v_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(en(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&uv.set(n,e)}).catch(()=>{}),gc.set(t,e),t}function g_(e){if(Kl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Kl.set(e,t)}let Yl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Kl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function y_(e){Yl=e(Yl)}function w_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Os(this),t,...n);return cv.set(r,t.sort?t.sort():[t]),en(r)}:m_().includes(e)?function(...t){return e.apply(Os(this),t),en(uv.get(this))}:function(...t){return en(e.apply(Os(this),t))}}function __(e){return typeof e=="function"?w_(e):(e instanceof IDBTransaction&&g_(e),h_(e,p_())?new Proxy(e,Yl):e)}function en(e){if(e instanceof IDBRequest)return v_(e);if(As.has(e))return As.get(e);const t=__(e);return t!==e&&(As.set(e,t),gc.set(t,e)),t}const Os=e=>gc.get(e);function S_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=en(a);return r&&a.addEventListener("upgradeneeded",l=>{r(en(a.result),l.oldVersion,l.newVersion,en(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const k_=["get","getKey","getAll","getAllKeys","count"],E_=["put","add","delete","clear"],xs=new Map;function _d(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||k_.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return xs.set(t,o),o}y_(e=>({...e,get:(t,n,r)=>_d(t,n)||e.get(t,n,r),has:(t,n)=>!!_d(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ql="@firebase/app",Sd="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new lv("@firebase/app"),I_="@firebase/app-compat",C_="@firebase/analytics-compat",P_="@firebase/analytics",A_="@firebase/app-check-compat",O_="@firebase/app-check",x_="@firebase/auth",R_="@firebase/auth-compat",N_="@firebase/database",L_="@firebase/database-compat",D_="@firebase/functions",M_="@firebase/functions-compat",U_="@firebase/installations",z_="@firebase/installations-compat",j_="@firebase/messaging",B_="@firebase/messaging-compat",$_="@firebase/performance",H_="@firebase/performance-compat",F_="@firebase/remote-config",V_="@firebase/remote-config-compat",W_="@firebase/storage",G_="@firebase/storage-compat",K_="@firebase/firestore",Y_="@firebase/vertexai-preview",q_="@firebase/firestore-compat",J_="firebase",X_="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="[DEFAULT]",Q_={[ql]:"fire-core",[I_]:"fire-core-compat",[P_]:"fire-analytics",[C_]:"fire-analytics-compat",[O_]:"fire-app-check",[A_]:"fire-app-check-compat",[x_]:"fire-auth",[R_]:"fire-auth-compat",[N_]:"fire-rtdb",[L_]:"fire-rtdb-compat",[D_]:"fire-fn",[M_]:"fire-fn-compat",[U_]:"fire-iid",[z_]:"fire-iid-compat",[j_]:"fire-fcm",[B_]:"fire-fcm-compat",[$_]:"fire-perf",[H_]:"fire-perf-compat",[F_]:"fire-rc",[V_]:"fire-rc-compat",[W_]:"fire-gcs",[G_]:"fire-gcs-compat",[K_]:"fire-fst",[q_]:"fire-fst-compat",[Y_]:"fire-vertex","fire-js":"fire-js",[J_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Map,Z_=new Map,Xl=new Map;function kd(e,t){try{e.container.addComponent(t)}catch(n){Ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bi(e){const t=e.name;if(Xl.has(t))return Ln.debug(`There were multiple attempts to register component ${t}.`),!1;Xl.set(t,e);for(const n of va.values())kd(n,e);for(const n of Z_.values())kd(n,e);return!0}function fv(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Wt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new Mi("app","Firebase",eS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=X_;function dv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw tn.create("bad-app-name",{appName:String(i)});if(n||(n=av()),!n)throw tn.create("no-options");const o=va.get(i);if(o){if(ma(n,o.options)&&ma(r,o.config))return o;throw tn.create("duplicate-app",{appName:i})}const a=new l_(i);for(const l of Xl.values())a.addComponent(l);const s=new tS(n,r,a);return va.set(i,s),s}function nS(e=Jl){const t=va.get(e);if(!t&&e===Jl&&av())return dv();if(!t)throw tn.create("no-app",{appName:e});return t}function lr(e,t,n){var r;let i=(r=Q_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ln.warn(s.join(" "));return}bi(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="firebase-heartbeat-database",iS=1,Ti="firebase-heartbeat-store";let Rs=null;function hv(){return Rs||(Rs=S_(rS,iS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(e=>{throw tn.create("idb-open",{originalErrorMessage:e.message})})),Rs}async function oS(e){try{const n=(await hv()).transaction(Ti),r=await n.objectStore(Ti).get(pv(e));return await n.done,r}catch(t){if(t instanceof fn)Ln.warn(t.message);else{const n=tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(n.message)}}}async function Ed(e,t){try{const r=(await hv()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(t,pv(e)),await r.done}catch(n){if(n instanceof fn)Ln.warn(n.message);else{const r=tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function pv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=1024,sS=30*24*60*60*1e3;class lS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const s=new Date(a.date).valueOf();return Date.now()-s<=sS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bd(),{heartbeatsToSend:r,unsentEntries:i}=uS(this._heartbeatsCache.heartbeats),o=iv(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function bd(){return new Date().toISOString().substring(0,10)}function uS(e,t=aS){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Td(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Td(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jw()?Xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Td(e){return iv(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(e){bi(new _r("platform-logger",t=>new b_(t),"PRIVATE")),bi(new _r("heartbeat",t=>new lS(t),"PRIVATE")),lr(ql,Sd,e),lr(ql,Sd,"esm2017"),lr("fire-js","")}fS("");var dS="firebase",hS="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(dS,hS,"app");function yc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pS=mv,vv=new Mi("auth","Firebase",mv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new lv("@firebase/auth");function mS(e,...t){ga.logLevel<=W.WARN&&ga.warn(`Auth (${zi}): ${e}`,...t)}function Do(e,...t){ga.logLevel<=W.ERROR&&ga.error(`Auth (${zi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,...t){throw wc(e,...t)}function lt(e,...t){return wc(e,...t)}function gv(e,t,n){const r=Object.assign(Object.assign({},pS()),{[t]:n});return new Mi("auth","Firebase",r).create(t,{appName:e.name})}function Tn(e){return gv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return vv.create(e,...t)}function L(e,t,...n){if(!e)throw wc(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Do(t),new Error(t)}function Pt(e,t){e||vt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function vS(){return Id()==="http:"||Id()==="https:"}function Id(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||Kw()||"connection"in navigator)?navigator.onLine:!0}function yS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,Pt(n>t,"Short delay should be less than long delay!"),this.isMobile=Gw()||Yw()}get(){return gS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new ji(3e4,6e4);function Sc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pr(e,t,n,r,i={}){return wv(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=Ui(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),yv.fetch()(_v(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function wv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},wS),t);try{const i=new kS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw _o(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw _o(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw _o(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gv(e,c,u);Ct(e,c)}}catch(i){if(i instanceof fn)throw i;Ct(e,"network-request-failed",{message:String(i)})}}async function SS(e,t,n,r,i={}){const o=await Pr(e,t,n,r,i);return"mfaPendingCredential"in o&&Ct(e,"multi-factor-auth-required",{_serverResponse:o}),o}function _v(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?_c(e.config,i):`${e.config.apiScheme}://${i}`}class kS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),_S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(e,t){return Pr(e,"POST","/v1/accounts:delete",t)}async function Sv(e,t){return Pr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bS(e,t=!1){const n=Cr(e),r=await n.getIdToken(t),i=kc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ti(Ns(i.auth_time)),issuedAtTime:ti(Ns(i.iat)),expirationTime:ti(Ns(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ns(e){return Number(e)*1e3}function kc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const i=ov(n);return i?JSON.parse(i):(Do("Failed to decode base64 JWT payload"),null)}catch(i){return Do("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cd(e){const t=kc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof fn&&TS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function TS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ii(e,Sv(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?kv(o.providerUserInfo):[],s=PS(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Zl(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function CS(e){const t=Cr(e);await ya(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function PS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function kv(e){return e.map(t=>{var{providerId:n}=t,r=yc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(e,t){const n=await wv(e,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=_v(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",yv.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OS(e,t){return Pr(e,"POST","/v2/accounts:revokeToken",Sc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Cd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=Cd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await AS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new ur;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class gt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=yc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Zl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return bS(this,t)}reload(){return CS(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new gt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Tn(this.auth));const t=await this.getIdToken();return await Ii(this,ES(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(s=n.tenantId)!==null&&s!==void 0?s:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:E,providerData:I,stsTokenManager:P}=n;L(m&&P,t,"internal-error");const O=ur.fromJSON(this.name,P);L(typeof m=="string",t,"internal-error"),Nt(f,t.name),Nt(p,t.name),L(typeof _=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),Nt(y,t.name),Nt(v,t.name),Nt(g,t.name),Nt(C,t.name),Nt(h,t.name),Nt(d,t.name);const B=new gt({uid:m,auth:t,email:p,emailVerified:_,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:y,tenantId:g,stsTokenManager:O,createdAt:h,lastLoginAt:d});return I&&Array.isArray(I)&&(B.providerData=I.map(U=>Object.assign({},U))),C&&(B._redirectEventId=C),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new ur;i.updateFromServerResponse(n);const o=new gt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ya(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?kv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),s=new ur;s.updateFromIdToken(r);const l=new gt({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Zl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;function yt(e){Pt(e instanceof Function,"Expected a class definition");let t=Pd.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pd.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ev.type="NONE";const Ad=Ev;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t,n){return`firebase:${e}:${t}:${n}`}class cr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Mo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Mo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?gt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new cr(yt(Ad),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||yt(Ad);const a=Mo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const f=gt._fromJSON(t,c);u!==o&&(s=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new cr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new cr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Iv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pv(t))return"Blackberry";if(Av(t))return"Webos";if(Ec(t))return"Safari";if((t.includes("chrome/")||Tv(t))&&!t.includes("edge/"))return"Chrome";if(Cv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bv(e=Se()){return/firefox\//i.test(e)}function Ec(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tv(e=Se()){return/crios\//i.test(e)}function Iv(e=Se()){return/iemobile/i.test(e)}function Cv(e=Se()){return/android/i.test(e)}function Pv(e=Se()){return/blackberry/i.test(e)}function Av(e=Se()){return/webos/i.test(e)}function Ha(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xS(e=Se()){var t;return Ha(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function RS(){return qw()&&document.documentMode===10}function Ov(e=Se()){return Ha(e)||Cv(e)||Av(e)||Pv(e)||/windows phone/i.test(e)||Iv(e)}function NS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(e,t=[]){let n;switch(e){case"Browser":n=Od(Se());break;case"Worker":n=`${Od(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(e,t={}){return Pr(e,"GET","/v2/passwordPolicy",Sc(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=6;class US{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:MS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xd(this),this.idTokenSubscription=new xd(this),this.beforeStateQueue=new LS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Sv(this,{idToken:t}),r=await gt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ya(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Wt(this.app))return Promise.reject(Tn(this));const n=t?Cr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Wt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await DS(this),n=new US(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Mi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(s,this,"internal-error"),s.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&mS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bc(e){return Cr(e)}class xd{constructor(t){this.auth=t,this.observer=null,this.addObserver=n_(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jS(e){Tc=e}function BS(e){return Tc.loadJS(e)}function $S(){return Tc.gapiScript}function HS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(e,t){const n=fv(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ma(o,t??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:t})}function VS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function WS(e,t,n){const r=bc(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Rv(t),{host:a,port:s}=GS(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),KS()}function Rv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function GS(e){const t=Rv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Rd(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Rd(a)}}}function Rd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function KS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e,t){return SS(e,"POST","/v1/accounts:signInWithIdp",Sc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="http://localhost";class Dn extends Nv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=yc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Dn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fr(t,n)}buildRequest(){const t={requestUri:YS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ui(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Lv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Bi{constructor(){super("facebook.com")}static credential(t){return Dn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Dn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Bi{constructor(){super("github.com")}static credential(t){return Dn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Bi{constructor(){super("twitter.com")}static credential(t,n){return Dn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await gt._fromIdTokenResponse(t,r,i),a=Nd(r);return new Sr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Nd(r);return new Sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Nd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends fn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new wa(t,n,r,i)}}function Dv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?wa._fromErrorAndOperation(e,o,t,r):o})}async function qS(e,t,n=!1){const r=await Ii(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(e,t,n=!1){const{auth:r}=e;if(Wt(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const o=await Ii(e,Dv(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=kc(o.idToken);L(a,r,"internal-error");const{sub:s}=a;return L(e.uid===s,r,"user-mismatch"),Sr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(e,t,n=!1){if(Wt(e.app))return Promise.reject(Tn(e));const r="signIn",i=await Dv(e,r,t),o=await Sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function QS(e,t,n,r){return Cr(e).onIdTokenChanged(t,n,r)}function ZS(e,t,n){return Cr(e).beforeAuthStateChanged(t,n)}const _a="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_a,"1"),this.storage.removeItem(_a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){const e=Se();return Ec(e)||Ha(e)}const tk=1e3,nk=10;class Uv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ek()&&NS(),this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);RS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,nk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Uv.type="LOCAL";const rk=Uv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}zv.type="SESSION";const jv=zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Fa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await ik(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=Ic("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(p.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function ak(e){ut().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function uk(){return Bv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="firebaseLocalStorageDb",ck=1,Sa="firebaseLocalStorage",Hv="fbase_key";class $i{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(e,t){return e.transaction([Sa],t?"readwrite":"readonly").objectStore(Sa)}function fk(){const e=indexedDB.deleteDatabase($v);return new $i(e).toPromise()}function eu(){const e=indexedDB.open($v,ck);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Sa,{keyPath:Hv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Sa)?t(r):(r.close(),await fk(),t(await eu()))})})}async function Ld(e,t,n){const r=Va(e,!0).put({[Hv]:t,value:n});return new $i(r).toPromise()}async function dk(e,t){const n=Va(e,!1).get(t),r=await new $i(n).toPromise();return r===void 0?null:r.value}function Dd(e,t){const n=Va(e,!0).delete(t);return new $i(n).toPromise()}const hk=800,pk=3;class Fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(uk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await sk(),!this.activeServiceWorker)return;this.sender=new ok(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await eu();return await Ld(t,_a,"1"),await Dd(t,_a),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ld(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>dk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Va(i,!1).getAll();return new $i(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fv.type="LOCAL";const mk=Fv;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(e,t){return t?yt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Nv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function gk(e){return XS(e.auth,new Cc(e),e.bypassAuthState)}function yk(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),JS(n,new Cc(e),e.bypassAuthState)}async function wk(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),qS(n,new Cc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gk;case"linkViaPopup":case"linkViaRedirect":return wk;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:Ct(this.auth,"internal-error")}}resolve(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new ji(2e3,1e4);class er extends Vv{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const t=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_k.get())};t()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="pendingRedirect",Uo=new Map;class kk extends Vv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Uo.get(this.auth._key());if(!t){try{const r=await Ek(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Uo.set(this.auth._key(),t)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ek(e,t){const n=Ik(t),r=Tk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bk(e,t){Uo.set(e._key(),t)}function Tk(e){return yt(e._redirectPersistence)}function Ik(e){return Mo(Sk,e.config.apiKey,e.name)}async function Ck(e,t,n=!1){if(Wt(e.app))return Promise.reject(Tn(e));const r=bc(e),i=vk(r,t),a=await new kk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=10*60*1e3;class Ak{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ok(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Wv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(t))}saveEventToCache(t){this.cachedEventUids.add(Md(t)),this.lastProcessedEventTime=Date.now()}}function Md(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Wv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ok(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(e,t={}){return Pr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nk=/^https?/;async function Lk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xk(e);for(const n of t)try{if(Dk(n))return}catch{}Ct(e,"unauthorized-domain")}function Dk(e){const t=Ql(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Nk.test(n))return!1;if(Rk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new ji(3e4,6e4);function Ud(){const e=ut().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Uk(e){return new Promise((t,n)=>{var r,i,o;function a(){Ud(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(lt(e,"network-request-failed"))},timeout:Mk.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ut().gapi)===null||o===void 0)&&o.load)a();else{const s=HS("iframefcb");return ut()[s]=()=>{gapi.load?a():n(lt(e,"network-request-failed"))},BS(`${$S()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw zo=null,t})}let zo=null;function zk(e){return zo=zo||Uk(e),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new ji(5e3,15e3),Bk="__/auth/iframe",$k="emulator/auth/iframe",Hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_c(t,$k):`https://${e.config.authDomain}/${Bk}`,r={apiKey:t.apiKey,appName:e.name,v:zi},i=Fk.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ui(r).slice(1)}`}async function Wk(e){const t=await zk(e),n=ut().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:Vk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hk,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=lt(e,"network-request-failed"),s=ut().setTimeout(()=>{o(a)},jk.get());function l(){ut().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Yk=600,qk="_blank",Jk="http://localhost";class zd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(e,t,n,r=Kk,i=Yk){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Gk),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Se().toLowerCase();n&&(s=Tv(u)?qk:n),bv(u)&&(t=t||Jk,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[y,v])=>`${p}${y}=${v},`,"");if(xS(u)&&s!=="_self")return Qk(t||"",s),new zd(null);const f=window.open(t||"",s,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new zd(f)}function Qk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="__/auth/handler",eE="emulator/auth/handler",tE=encodeURIComponent("fac");async function jd(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(t instanceof Lv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",t_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries({}))a[c]=f}if(t instanceof Bi){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(a.scopes=c.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${tE}=${encodeURIComponent(l)}`:"";return`${nE(e)}?${Ui(s).slice(1)}${u}`}function nE({config:e}){return e.emulator?_c(e,eE):`https://${e.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="webStorageSupport";class rE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jv,this._completeRedirectFn=Ck,this._overrideRedirectResult=bk}async _openPopup(t,n,r,i){var o;Pt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await jd(t,n,r,Ql(),i);return Xk(t,a,Ic())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await jd(t,n,r,Ql(),i);return ak(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Pt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Wk(t),r=new Ak(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ls,{type:Ls},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ls];a!==void 0&&n(!!a),Ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ov()||Ec()||Ha()}}const iE=rE;var Bd="@firebase/auth",$d="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sE(e){bi(new _r("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(e)},u=new zS(r,i,o,l);return VS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),bi(new _r("auth-internal",t=>{const n=bc(t.getProvider("auth").getImmediate());return(r=>new oE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(Bd,$d,aE(e)),lr(Bd,$d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=5*60,uE=sv("authIdTokenMaxAge")||lE;let Hd=null;const cE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uE)return;const i=n==null?void 0:n.token;Hd!==i&&(Hd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fE(e=nS()){const t=fv(e,"auth");if(t.isInitialized())return t.getImmediate();const n=FS(e,{popupRedirectResolver:iE,persistence:[mk,rk,jv]}),r=sv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=cE(o.toString());ZS(n,a,()=>a(n.currentUser)),QS(n,s=>a(s))}}const i=Vw("auth");return i&&WS(n,`http://${i}`),n}function dE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}jS({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=lt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",dE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sE("Browser");const hE={apiKey:"AIzaSyD6jEJF1wXwsJVOPgADquJQEay1FvQC-ww",authDomain:"newcomersguide-b827d.firebaseapp.com",projectId:"newcomersguide-b827d",storageBucket:"newcomersguide-b827d.appspot.com",messagingSenderId:"674798949742",appId:"1:674798949742:web:d9c0d546f5da29dc7e9d7f",measurementId:"G-RJH74T3Z00"},pE=dv(hE),mE=fE(pE);console.log("pleaseeeeeeeeeee",mE);function Gv(e,t){return function(){return e.apply(t,arguments)}}const{toString:vE}=Object.prototype,{getPrototypeOf:Pc}=Object,Wa=(e=>t=>{const n=vE.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ct=e=>(e=e.toLowerCase(),t=>Wa(t)===e),Ga=e=>t=>typeof t===e,{isArray:Ar}=Array,Ci=Ga("undefined");function gE(e){return e!==null&&!Ci(e)&&e.constructor!==null&&!Ci(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Kv=ct("ArrayBuffer");function yE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Kv(e.buffer),t}const wE=Ga("string"),He=Ga("function"),Yv=Ga("number"),Ka=e=>e!==null&&typeof e=="object",_E=e=>e===!0||e===!1,jo=e=>{if(Wa(e)!=="object")return!1;const t=Pc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},SE=ct("Date"),kE=ct("File"),EE=ct("Blob"),bE=ct("FileList"),TE=e=>Ka(e)&&He(e.pipe),IE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||He(e.append)&&((t=Wa(e))==="formdata"||t==="object"&&He(e.toString)&&e.toString()==="[object FormData]"))},CE=ct("URLSearchParams"),PE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ar(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function qv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Jv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xv=e=>!Ci(e)&&e!==Jv;function tu(){const{caseless:e}=Xv(this)&&this||{},t={},n=(r,i)=>{const o=e&&qv(t,i)||i;jo(t[o])&&jo(r)?t[o]=tu(t[o],r):jo(r)?t[o]=tu({},r):Ar(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Hi(arguments[r],n);return t}const AE=(e,t,n,{allOwnKeys:r}={})=>(Hi(t,(i,o)=>{n&&He(i)?e[o]=Gv(i,n):e[o]=i},{allOwnKeys:r}),e),OE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},RE=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Pc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},NE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},LE=e=>{if(!e)return null;if(Ar(e))return e;let t=e.length;if(!Yv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},DE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pc(Uint8Array)),ME=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},UE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zE=ct("HTMLFormElement"),jE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Fd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),BE=ct("RegExp"),Qv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Hi(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},$E=e=>{Qv(e,(t,n)=>{if(He(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(He(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},HE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ar(e)?r(e):r(String(e).split(t)),n},FE=()=>{},VE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ds="abcdefghijklmnopqrstuvwxyz",Vd="0123456789",Zv={DIGIT:Vd,ALPHA:Ds,ALPHA_DIGIT:Ds+Ds.toUpperCase()+Vd},WE=(e=16,t=Zv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function GE(e){return!!(e&&He(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const KE=e=>{const t=new Array(10),n=(r,i)=>{if(Ka(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ar(r)?[]:{};return Hi(r,(a,s)=>{const l=n(a,i+1);!Ci(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},YE=ct("AsyncFunction"),qE=e=>e&&(Ka(e)||He(e))&&He(e.then)&&He(e.catch),S={isArray:Ar,isArrayBuffer:Kv,isBuffer:gE,isFormData:IE,isArrayBufferView:yE,isString:wE,isNumber:Yv,isBoolean:_E,isObject:Ka,isPlainObject:jo,isUndefined:Ci,isDate:SE,isFile:kE,isBlob:EE,isRegExp:BE,isFunction:He,isStream:TE,isURLSearchParams:CE,isTypedArray:DE,isFileList:bE,forEach:Hi,merge:tu,extend:AE,trim:PE,stripBOM:OE,inherits:xE,toFlatObject:RE,kindOf:Wa,kindOfTest:ct,endsWith:NE,toArray:LE,forEachEntry:ME,matchAll:UE,isHTMLForm:zE,hasOwnProperty:Fd,hasOwnProp:Fd,reduceDescriptors:Qv,freezeMethods:$E,toObjectSet:HE,toCamelCase:jE,noop:FE,toFiniteNumber:VE,findKey:qv,global:Jv,isContextDefined:Xv,ALPHABET:Zv,generateString:WE,isSpecCompliantForm:GE,toJSONObject:KE,isAsyncFn:YE,isThenable:qE};function $(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const eg=$.prototype,tg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{tg[e]={value:e}});Object.defineProperties($,tg);Object.defineProperty(eg,"isAxiosError",{value:!0});$.from=(e,t,n,r,i,o)=>{const a=Object.create(eg);return S.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),$.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const JE=null;function nu(e){return S.isPlainObject(e)||S.isArray(e)}function ng(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function Wd(e,t,n){return e?e.concat(t).map(function(i,o){return i=ng(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function XE(e){return S.isArray(e)&&!e.some(nu)}const QE=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Ya(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,C){return!S.isUndefined(C[g])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(S.isDate(v))return v.toISOString();if(!l&&S.isBlob(v))throw new $("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(v)||S.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,g,C){let h=v;if(v&&!C&&typeof v=="object"){if(S.endsWith(g,"{}"))g=r?g:g.slice(0,-2),v=JSON.stringify(v);else if(S.isArray(v)&&XE(v)||(S.isFileList(v)||S.endsWith(g,"[]"))&&(h=S.toArray(v)))return g=ng(g),h.forEach(function(m,_){!(S.isUndefined(m)||m===null)&&t.append(a===!0?Wd([g],_,o):a===null?g:g+"[]",u(m))}),!1}return nu(v)?!0:(t.append(Wd(C,g,o),u(v)),!1)}const f=[],p=Object.assign(QE,{defaultVisitor:c,convertValue:u,isVisitable:nu});function y(v,g){if(!S.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+g.join("."));f.push(v),S.forEach(v,function(h,d){(!(S.isUndefined(h)||h===null)&&i.call(t,h,S.isString(d)?d.trim():d,g,p))===!0&&y(h,g?g.concat(d):[d])}),f.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Gd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ac(e,t){this._pairs=[],e&&Ya(e,this,t)}const rg=Ac.prototype;rg.append=function(t,n){this._pairs.push([t,n])};rg.toString=function(t){const n=t?function(r){return t.call(this,r,Gd)}:Gd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ZE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ig(e,t,n){if(!t)return e;const r=n&&n.encode||ZE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new Ac(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Kd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const og={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eb=typeof URLSearchParams<"u"?URLSearchParams:Ac,tb=typeof FormData<"u"?FormData:null,nb=typeof Blob<"u"?Blob:null,rb={isBrowser:!0,classes:{URLSearchParams:eb,FormData:tb,Blob:nb},protocols:["http","https","file","blob","url","data"]},ag=typeof window<"u"&&typeof document<"u",ib=(e=>ag&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),ob=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ab=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ag,hasStandardBrowserEnv:ib,hasStandardBrowserWebWorkerEnv:ob},Symbol.toStringTag,{value:"Module"})),ot={...ab,...rb};function sb(e,t){return Ya(e,new ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ot.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function lb(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ub(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function sg(e){function t(n,r,i,o){let a=n[o++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&S.isArray(i)?i.length:a,l?(S.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!S.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&S.isArray(i[a])&&(i[a]=ub(i[a])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(lb(r),i,n,0)}),n}return null}function cb(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Fi={transitional:og,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i?JSON.stringify(sg(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sb(t,this.formSerializer).toString();if((s=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ya(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),cb(t)):t}],transformResponse:[function(t){const n=this.transitional||Fi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?$.from(s,$.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{Fi.headers[e]={}});const fb=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),db=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&fb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Yd=Symbol("internals");function zr(e){return e&&String(e).trim().toLowerCase()}function Bo(e){return e===!1||e==null?e:S.isArray(e)?e.map(Bo):String(e)}function hb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const pb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ms(e,t,n,r,i){if(S.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function mb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vb(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Fe{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const c=zr(l);if(!c)throw new Error("header name must be a non-empty string");const f=S.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Bo(s))}const a=(s,l)=>S.forEach(s,(u,c)=>o(u,c,l));return S.isPlainObject(t)||t instanceof this.constructor?a(t,n):S.isString(t)&&(t=t.trim())&&!pb(t)?a(db(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=zr(t),t){const r=S.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return hb(i);if(S.isFunction(n))return n.call(this,i,r);if(S.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=zr(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ms(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=zr(a),a){const s=S.findKey(r,a);s&&(!n||Ms(r,r[s],s,n))&&(delete r[s],i=!0)}}return S.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ms(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return S.forEach(this,(i,o)=>{const a=S.findKey(r,o);if(a){n[a]=Bo(i),delete n[o];return}const s=t?mb(o):String(o).trim();s!==o&&delete n[o],n[s]=Bo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Yd]=this[Yd]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=zr(a);r[s]||(vb(i,a),r[s]=!0)}return S.isArray(t)?t.forEach(o):o(t),this}}Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(Fe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(Fe);function Us(e,t){const n=this||Fi,r=t||n,i=Fe.from(r.headers);let o=r.data;return S.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function lg(e){return!!(e&&e.__CANCEL__)}function Vi(e,t,n){$.call(this,e??"canceled",$.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(Vi,$,{__CANCEL__:!0});function gb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const yb=ot.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),S.isString(r)&&a.push("path="+r),S.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _b(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ug(e,t){return e&&!wb(t)?_b(e,t):t}const Sb=ot.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=S.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function kb(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Eb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const y=c&&u-c;return y?Math.round(p*1e3/y):void 0}}function qd(e,t){let n=0;const r=Eb(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const bb=typeof XMLHttpRequest<"u",Tb=bb&&function(e){return new Promise(function(n,r){let i=e.data;const o=Fe.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let c;if(S.isFormData(i)){if(ot.hasStandardBrowserEnv||ot.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((c=o.getContentType())!==!1){const[g,...C]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([g||"multipart/form-data",...C].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",C=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+C))}const p=ug(e.baseURL,e.url);f.open(e.method.toUpperCase(),ig(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function y(){if(!f)return;const g=Fe.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),h={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:g,config:e,request:f};gb(function(m){n(m),u()},function(m){r(m),u()},h),f=null}if("onloadend"in f?f.onloadend=y:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(y)},f.onabort=function(){f&&(r(new $("Request aborted",$.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new $("Network Error",$.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||og;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),r(new $(C,h.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,f)),f=null},ot.hasStandardBrowserEnv&&(s&&S.isFunction(s)&&(s=s(e)),s||s!==!1&&Sb(p))){const g=e.xsrfHeaderName&&e.xsrfCookieName&&yb.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&S.forEach(o.toJSON(),function(C,h){f.setRequestHeader(h,C)}),S.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),a&&a!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",qd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",qd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=g=>{f&&(r(!g||g.type?new Vi(null,e,f):g),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const v=kb(p);if(v&&ot.protocols.indexOf(v)===-1){r(new $("Unsupported protocol "+v+":",$.ERR_BAD_REQUEST,e));return}f.send(i||null)})},ru={http:JE,xhr:Tb};S.forEach(ru,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Jd=e=>`- ${e}`,Ib=e=>S.isFunction(e)||e===null||e===!1,cg={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!Ib(n)&&(r=ru[(a=String(n)).toLowerCase()],r===void 0))throw new $(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Jd).join(`
`):" "+Jd(o[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:ru};function zs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vi(null,e)}function Xd(e){return zs(e),e.headers=Fe.from(e.headers),e.data=Us.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),cg.getAdapter(e.adapter||Fi.adapter)(e).then(function(r){return zs(e),r.data=Us.call(e,e.transformResponse,r),r.headers=Fe.from(r.headers),r},function(r){return lg(r)||(zs(e),r&&r.response&&(r.response.data=Us.call(e,e.transformResponse,r.response),r.response.headers=Fe.from(r.response.headers))),Promise.reject(r)})}const Qd=e=>e instanceof Fe?{...e}:e;function kr(e,t){t=t||{};const n={};function r(u,c,f){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge.call({caseless:f},u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u,c,f){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!S.isUndefined(c))return r(void 0,c)}function a(u,c){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>i(Qd(u),Qd(c),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||i,p=f(e[c],t[c],c);S.isUndefined(p)&&f!==s||(n[c]=p)}),n}const fg="1.6.8",Oc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Oc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Zd={};Oc.transitional=function(t,n,r){function i(o,a){return"[Axios v"+fg+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new $(i(a," has been removed"+(n?" in "+n:"")),$.ERR_DEPRECATED);return n&&!Zd[a]&&(Zd[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function Cb(e,t,n){if(typeof e!="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new $("option "+o+" must be "+l,$.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $("Unknown option "+o,$.ERR_BAD_OPTION)}}const iu={assertOptions:Cb,validators:Oc},Lt=iu.validators;class In{constructor(t){this.defaults=t,this.interceptors={request:new Kd,response:new Kd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=kr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&iu.assertOptions(r,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),i!=null&&(S.isFunction(i)?n.paramsSerializer={serialize:i}:iu.assertOptions(i,{encode:Lt.function,serialize:Lt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&S.merge(o.common,o[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Fe.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let c,f=0,p;if(!l){const v=[Xd.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),p=v.length,c=Promise.resolve(n);f<p;)c=c.then(v[f++],v[f++]);return c}p=s.length;let y=n;for(f=0;f<p;){const v=s[f++],g=s[f++];try{y=v(y)}catch(C){g.call(this,C);break}}try{c=Xd.call(this,y)}catch(v){return Promise.reject(v)}for(f=0,p=u.length;f<p;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=kr(this.defaults,t);const n=ug(t.baseURL,t.url);return ig(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){In.prototype[t]=function(n,r){return this.request(kr(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(kr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}In.prototype[t]=n(),In.prototype[t+"Form"]=n(!0)});class xc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new Vi(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new xc(function(i){t=i}),cancel:t}}}function Pb(e){return function(n){return e.apply(null,n)}}function Ab(e){return S.isObject(e)&&e.isAxiosError===!0}const ou={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ou).forEach(([e,t])=>{ou[t]=e});function dg(e){const t=new In(e),n=Gv(In.prototype.request,t);return S.extend(n,In.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return dg(kr(e,i))},n}const le=dg(Fi);le.Axios=In;le.CanceledError=Vi;le.CancelToken=xc;le.isCancel=lg;le.VERSION=fg;le.toFormData=Ya;le.AxiosError=$;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=Pb;le.isAxiosError=Ab;le.mergeConfig=kr;le.AxiosHeaders=Fe;le.formToJSON=e=>sg(S.isHTMLForm(e)?new FormData(e):e);le.getAdapter=cg.getAdapter;le.HttpStatusCode=ou;le.default=le;le.create({baseURL:"http://localhost:3500"});var au={exports:{}};(function(e,t){var n=typeof self<"u"?self:hg,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(w){return w&&DataView.prototype.isPrototypeOf(w)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(w){return w&&u.indexOf(Object.prototype.toString.call(w))>-1};function f(w){if(typeof w!="string"&&(w=String(w)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(w))throw new TypeError("Invalid character in header field name");return w.toLowerCase()}function p(w){return typeof w!="string"&&(w=String(w)),w}function y(w){var T={next:function(){var M=w.shift();return{done:M===void 0,value:M}}};return s.iterable&&(T[Symbol.iterator]=function(){return T}),T}function v(w){this.map={},w instanceof v?w.forEach(function(T,M){this.append(M,T)},this):Array.isArray(w)?w.forEach(function(T){this.append(T[0],T[1])},this):w&&Object.getOwnPropertyNames(w).forEach(function(T){this.append(T,w[T])},this)}v.prototype.append=function(w,T){w=f(w),T=p(T);var M=this.map[w];this.map[w]=M?M+", "+T:T},v.prototype.delete=function(w){delete this.map[f(w)]},v.prototype.get=function(w){return w=f(w),this.has(w)?this.map[w]:null},v.prototype.has=function(w){return this.map.hasOwnProperty(f(w))},v.prototype.set=function(w,T){this.map[f(w)]=p(T)},v.prototype.forEach=function(w,T){for(var M in this.map)this.map.hasOwnProperty(M)&&w.call(T,this.map[M],M,this)},v.prototype.keys=function(){var w=[];return this.forEach(function(T,M){w.push(M)}),y(w)},v.prototype.values=function(){var w=[];return this.forEach(function(T){w.push(T)}),y(w)},v.prototype.entries=function(){var w=[];return this.forEach(function(T,M){w.push([M,T])}),y(w)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function g(w){if(w.bodyUsed)return Promise.reject(new TypeError("Already read"));w.bodyUsed=!0}function C(w){return new Promise(function(T,M){w.onload=function(){T(w.result)},w.onerror=function(){M(w.error)}})}function h(w){var T=new FileReader,M=C(T);return T.readAsArrayBuffer(w),M}function d(w){var T=new FileReader,M=C(T);return T.readAsText(w),M}function m(w){for(var T=new Uint8Array(w),M=new Array(T.length),ae=0;ae<T.length;ae++)M[ae]=String.fromCharCode(T[ae]);return M.join("")}function _(w){if(w.slice)return w.slice(0);var T=new Uint8Array(w.byteLength);return T.set(new Uint8Array(w)),T.buffer}function E(){return this.bodyUsed=!1,this._initBody=function(w){this._bodyInit=w,w?typeof w=="string"?this._bodyText=w:s.blob&&Blob.prototype.isPrototypeOf(w)?this._bodyBlob=w:s.formData&&FormData.prototype.isPrototypeOf(w)?this._bodyFormData=w:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(w)?this._bodyText=w.toString():s.arrayBuffer&&s.blob&&l(w)?(this._bodyArrayBuffer=_(w.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(w)||c(w))?this._bodyArrayBuffer=_(w):this._bodyText=w=Object.prototype.toString.call(w):this._bodyText="",this.headers.get("content-type")||(typeof w=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(w)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var w=g(this);if(w)return w;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?g(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var w=g(this);if(w)return w;if(this._bodyBlob)return d(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(B)}),this.json=function(){return this.text().then(JSON.parse)},this}var I=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function P(w){var T=w.toUpperCase();return I.indexOf(T)>-1?T:w}function O(w,T){T=T||{};var M=T.body;if(w instanceof O){if(w.bodyUsed)throw new TypeError("Already read");this.url=w.url,this.credentials=w.credentials,T.headers||(this.headers=new v(w.headers)),this.method=w.method,this.mode=w.mode,this.signal=w.signal,!M&&w._bodyInit!=null&&(M=w._bodyInit,w.bodyUsed=!0)}else this.url=String(w);if(this.credentials=T.credentials||this.credentials||"same-origin",(T.headers||!this.headers)&&(this.headers=new v(T.headers)),this.method=P(T.method||this.method||"GET"),this.mode=T.mode||this.mode||null,this.signal=T.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&M)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(M)}O.prototype.clone=function(){return new O(this,{body:this._bodyInit})};function B(w){var T=new FormData;return w.trim().split("&").forEach(function(M){if(M){var ae=M.split("="),b=ae.shift().replace(/\+/g," "),A=ae.join("=").replace(/\+/g," ");T.append(decodeURIComponent(b),decodeURIComponent(A))}}),T}function U(w){var T=new v,M=w.replace(/\r?\n[\t ]+/g," ");return M.split(/\r?\n/).forEach(function(ae){var b=ae.split(":"),A=b.shift().trim();if(A){var D=b.join(":").trim();T.append(A,D)}}),T}E.call(O.prototype);function te(w,T){T||(T={}),this.type="default",this.status=T.status===void 0?200:T.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in T?T.statusText:"OK",this.headers=new v(T.headers),this.url=T.url||"",this._initBody(w)}E.call(te.prototype),te.prototype.clone=function(){return new te(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},te.error=function(){var w=new te(null,{status:0,statusText:""});return w.type="error",w};var dn=[301,302,303,307,308];te.redirect=function(w,T){if(dn.indexOf(T)===-1)throw new RangeError("Invalid status code");return new te(null,{status:T,headers:{location:w}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(T,M){this.message=T,this.name=M;var ae=Error(T);this.stack=ae.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function ft(w,T){return new Promise(function(M,ae){var b=new O(w,T);if(b.signal&&b.signal.aborted)return ae(new a.DOMException("Aborted","AbortError"));var A=new XMLHttpRequest;function D(){A.abort()}A.onload=function(){var V={status:A.status,statusText:A.statusText,headers:U(A.getAllResponseHeaders()||"")};V.url="responseURL"in A?A.responseURL:V.headers.get("X-Request-URL");var ne="response"in A?A.response:A.responseText;M(new te(ne,V))},A.onerror=function(){ae(new TypeError("Network request failed"))},A.ontimeout=function(){ae(new TypeError("Network request failed"))},A.onabort=function(){ae(new a.DOMException("Aborted","AbortError"))},A.open(b.method,b.url,!0),b.credentials==="include"?A.withCredentials=!0:b.credentials==="omit"&&(A.withCredentials=!1),"responseType"in A&&s.blob&&(A.responseType="blob"),b.headers.forEach(function(V,ne){A.setRequestHeader(ne,V)}),b.signal&&(b.signal.addEventListener("abort",D),A.onreadystatechange=function(){A.readyState===4&&b.signal.removeEventListener("abort",D)}),A.send(typeof b._bodyInit>"u"?null:b._bodyInit)})}return ft.polyfill=!0,o.fetch||(o.fetch=ft,o.Headers=v,o.Request=O,o.Response=te),a.Headers=v,a.Request=O,a.Response=te,a.fetch=ft,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t})(au,au.exports);var Ob=au.exports;function xb(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(c){try{u(r.next(c))}catch(f){a(f)}}function l(c){try{u(r.throw(c))}catch(f){a(f)}}function u(c){c.done?o(c.value):i(c.value).then(s,l)}u((r=r.apply(e,[])).next())})}class qa{constructor(t){this.client=t}static flatten(t,n=""){let r={};for(const[i,o]of Object.entries(t)){let a=n?n+"["+i+"]":i;Array.isArray(o)?r=Object.assign(Object.assign({},r),qa.flatten(o,a)):r[a]=o}return r}}qa.CHUNK_SIZE=5*1024*1024;class js extends Error{constructor(t,n=0,r="",i=""){super(t),this.name="AppwriteException",this.message=t,this.code=n,this.type=r,this.response=i}}class Rb{constructor(){this.config={endpoint:"https://cloud.appwrite.io/v1",endpointRealtime:"",project:"",jwt:"",locale:"",session:""},this.headers={"x-sdk-name":"Web","x-sdk-platform":"client","x-sdk-language":"web","x-sdk-version":"14.0.1","X-Appwrite-Response-Format":"1.5.0"},this.realtime={socket:void 0,timeout:void 0,url:"",channels:new Set,subscriptions:new Map,subscriptionsCounter:0,reconnect:!0,reconnectAttempts:0,lastMessage:void 0,connect:()=>{clearTimeout(this.realtime.timeout),this.realtime.timeout=window==null?void 0:window.setTimeout(()=>{this.realtime.createSocket()},50)},getTimeout:()=>{switch(!0){case this.realtime.reconnectAttempts<5:return 1e3;case this.realtime.reconnectAttempts<15:return 5e3;case this.realtime.reconnectAttempts<100:return 1e4;default:return 6e4}},createSocket:()=>{var t,n,r;if(this.realtime.channels.size<1){this.realtime.reconnect=!1,(t=this.realtime.socket)===null||t===void 0||t.close();return}const i=new URLSearchParams;i.set("project",this.config.project),this.realtime.channels.forEach(a=>{i.append("channels[]",a)});const o=this.config.endpointRealtime+"/realtime?"+i.toString();(o!==this.realtime.url||!this.realtime.socket||((n=this.realtime.socket)===null||n===void 0?void 0:n.readyState)>WebSocket.OPEN)&&(this.realtime.socket&&((r=this.realtime.socket)===null||r===void 0?void 0:r.readyState)<WebSocket.CLOSING&&(this.realtime.reconnect=!1,this.realtime.socket.close()),this.realtime.url=o,this.realtime.socket=new WebSocket(o),this.realtime.socket.addEventListener("message",this.realtime.onMessage),this.realtime.socket.addEventListener("open",a=>{this.realtime.reconnectAttempts=0}),this.realtime.socket.addEventListener("close",a=>{var s,l,u;if(!this.realtime.reconnect||((l=(s=this.realtime)===null||s===void 0?void 0:s.lastMessage)===null||l===void 0?void 0:l.type)==="error"&&((u=this.realtime)===null||u===void 0?void 0:u.lastMessage.data).code===1008){this.realtime.reconnect=!0;return}const c=this.realtime.getTimeout();console.error(`Realtime got disconnected. Reconnect will be attempted in ${c/1e3} seconds.`,a.reason),setTimeout(()=>{this.realtime.reconnectAttempts++,this.realtime.createSocket()},c)}))},onMessage:t=>{var n,r;try{const i=JSON.parse(t.data);switch(this.realtime.lastMessage=i,i.type){case"connected":const o=JSON.parse((n=window.localStorage.getItem("cookieFallback"))!==null&&n!==void 0?n:"{}"),a=o==null?void 0:o[`a_session_${this.config.project}`],s=i.data;a&&!s.user&&((r=this.realtime.socket)===null||r===void 0||r.send(JSON.stringify({type:"authentication",data:{session:a}})));break;case"event":let l=i.data;if(l!=null&&l.channels){if(!l.channels.some(c=>this.realtime.channels.has(c)))return;this.realtime.subscriptions.forEach(c=>{l.channels.some(f=>c.channels.includes(f))&&setTimeout(()=>c.callback(l))})}break;case"error":throw i.data;default:break}}catch(i){console.error(i)}},cleanUp:t=>{this.realtime.channels.forEach(n=>{t.includes(n)&&(Array.from(this.realtime.subscriptions).some(([i,o])=>o.channels.includes(n))||this.realtime.channels.delete(n))})}}}setEndpoint(t){return this.config.endpoint=t,this.config.endpointRealtime=this.config.endpointRealtime||this.config.endpoint.replace("https://","wss://").replace("http://","ws://"),this}setEndpointRealtime(t){return this.config.endpointRealtime=t,this}setProject(t){return this.headers["X-Appwrite-Project"]=t,this.config.project=t,this}setJWT(t){return this.headers["X-Appwrite-JWT"]=t,this.config.jwt=t,this}setLocale(t){return this.headers["X-Appwrite-Locale"]=t,this.config.locale=t,this}setSession(t){return this.headers["X-Appwrite-Session"]=t,this.config.session=t,this}subscribe(t,n){let r=typeof t=="string"?[t]:t;r.forEach(o=>this.realtime.channels.add(o));const i=this.realtime.subscriptionsCounter++;return this.realtime.subscriptions.set(i,{channels:r,callback:n}),this.realtime.connect(),()=>{this.realtime.subscriptions.delete(i),this.realtime.cleanUp(r),this.realtime.connect()}}call(t,n,r={},i={}){var o,a;return xb(this,void 0,void 0,function*(){t=t.toUpperCase(),r=Object.assign({},this.headers,r);let s={method:t,headers:r,credentials:"include"};if(typeof window<"u"&&window.localStorage&&(r["X-Fallback-Cookies"]=(o=window.localStorage.getItem("cookieFallback"))!==null&&o!==void 0?o:""),t==="GET")for(const[l,u]of Object.entries(qa.flatten(i)))n.searchParams.append(l,u);else switch(r["content-type"]){case"application/json":s.body=JSON.stringify(i);break;case"multipart/form-data":let l=new FormData;for(const u in i)Array.isArray(i[u])?i[u].forEach(c=>{l.append(u+"[]",c)}):l.append(u,i[u]);s.body=l,delete r["content-type"];break}try{let l=null;const u=yield Ob.fetch(n.toString(),s);if(!((a=u.headers.get("content-type"))===null||a===void 0)&&a.includes("application/json")?l=yield u.json():l={message:yield u.text()},400<=u.status)throw new js(l==null?void 0:l.message,u.status,l==null?void 0:l.type,l);const c=u.headers.get("X-Fallback-Cookies");return typeof window<"u"&&window.localStorage&&c&&(window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."),window.localStorage.setItem("cookieFallback",c)),l}catch(l){throw l instanceof js?l:new js(l.message)}})}}var eh;(function(e){e.Totp="totp"})(eh||(eh={}));var th;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(th||(th={}));var nh;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(nh||(nh={}));var rh;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(rh||(rh={}));var ih;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Consosud="censosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionChinaPay="union-china-pay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro"})(ih||(ih={}));var oh;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(oh||(oh={}));var ah;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS"})(ah||(ah={}));var sh;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(sh||(sh={}));var lh;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Gif="gif",e.Png="png",e.Webp="webp"})(lh||(lh={}));const Nb=new Rb;Nb.setEndpoint("https://cloud.appwrite.io/v1").setProject("6646f9a7002e21400b4f");Bs.createRoot(document.getElementById("root")).render(Dc.jsx(du.StrictMode,{children:Dc.jsx("h1",{children:"HELLO TEST"})}));
