(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[7631],{56980:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(2784),o=function(){},c="undefined"!=typeof window;const u=c?n.useLayoutEffect:n.useEffect;var a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const i=c&&void 0!==window.ResizeObserver?function(){var t=(0,n.useState)(null),e=t[0],r=t[1],o=(0,n.useState)(a),c=o[0],i=o[1],s=(0,n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,r=e.x,n=e.y,o=e.width,c=e.height,u=e.top,a=e.left,s=e.bottom,f=e.right;i({x:r,y:n,width:o,height:c,top:u,left:a,bottom:s,right:f})}}))}),[]);return u((function(){if(e)return s.observe(e),function(){s.disconnect()}}),[e]),[r,c]}:function(){return[o,a]}},67993:(t,e,r)=>{var n=r(752),o=r(90249);t.exports=function(t,e){return t&&n(e,o(e),t)}},55906:(t,e,r)=>{var n=r(752),o=r(18582);t.exports=function(t,e){return t&&n(e,o(e),t)}},18874:(t,e,r)=>{var n=r(86571),o=r(72517),c=r(60091),u=r(67993),a=r(55906),i=r(92175),s=r(51522),f=r(7680),b=r(19987),j=r(13483),v=r(76939),p=r(70940),l=r(99917),y=r(8222),d=r(78725),x=r(86152),w=r(73226),h=r(4714),A=r(29259),g=r(43679),m=r(90249),E=r(18582),S="[object Arguments]",k="[object Function]",O="[object Object]",I={};I[S]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[O]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[k]=I["[object WeakMap]"]=!1,t.exports=function t(e,r,R,U,C,F){var M,B=1&r,D=2&r,T=4&r;if(R&&(M=C?R(e,U,C,F):R(e)),void 0!==M)return M;if(!A(e))return e;var _=x(e);if(_){if(M=l(e),!B)return s(e,M)}else{var z=p(e),L=z==k||"[object GeneratorFunction]"==z;if(w(e))return i(e,B);if(z==O||z==S||L&&!C){if(M=D||L?{}:d(e),!B)return D?b(e,a(M,e)):f(e,u(M,e))}else{if(!I[z])return C?e:{};M=y(e,z,B)}}F||(F=new n);var N=F.get(e);if(N)return N;F.set(e,M),g(e)?e.forEach((function(n){M.add(t(n,r,R,n,e,F))})):h(e)&&e.forEach((function(n,o){M.set(o,t(n,r,R,o,e,F))}));var P=_?void 0:(T?D?v:j:D?E:m)(e);return o(P||e,(function(n,o){P&&(n=e[o=n]),c(M,o,t(n,r,R,o,e,F))})),M}},74511:(t,e,r)=>{var n=r(70940),o=r(15125);t.exports=function(t){return o(t)&&"[object Map]"==n(t)}},8109:(t,e,r)=>{var n=r(70940),o=r(15125);t.exports=function(t){return o(t)&&"[object Set]"==n(t)}},34727:(t,e,r)=>{var n=r(79882);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},96058:t=>{var e=/\w*$/;t.exports=function(t){var r=new t.constructor(t.source,e.exec(t));return r.lastIndex=t.lastIndex,r}},70169:(t,e,r)=>{var n=r(50857),o=n?n.prototype:void 0,c=o?o.valueOf:void 0;t.exports=function(t){return c?Object(c.call(t)):{}}},7680:(t,e,r)=>{var n=r(752),o=r(80633);t.exports=function(t,e){return n(t,o(t),e)}},19987:(t,e,r)=>{var n=r(752),o=r(12680);t.exports=function(t,e){return n(t,o(t),e)}},76939:(t,e,r)=>{var n=r(1897),o=r(12680),c=r(18582);t.exports=function(t){return n(t,c,o)}},12680:(t,e,r)=>{var n=r(65067),o=r(47353),c=r(80633),u=r(30981),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,c(t)),t=o(t);return e}:u;t.exports=a},99917:t=>{var e=Object.prototype.hasOwnProperty;t.exports=function(t){var r=t.length,n=new t.constructor(r);return r&&"string"==typeof t[0]&&e.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},8222:(t,e,r)=>{var n=r(79882),o=r(34727),c=r(96058),u=r(70169),a=r(6190);t.exports=function(t,e,r){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return n(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return o(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return a(t,r);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return c(t);case"[object Set]":return new i;case"[object Symbol]":return u(t)}}},1395:(t,e,r)=>{var n=r(49432),o=r(50343),c=r(68286),u=r(36060);t.exports=function(t){var e=null==t?0:t.length,r=c;return t=e?o(t,(function(t){if("function"!=typeof t[1])throw new TypeError("Expected a function");return[r(t[0]),t[1]]})):[],u((function(r){for(var o=-1;++o<e;){var c=t[o];if(n(c[0],this,r))return n(c[1],this,r)}}))}},4714:(t,e,r)=>{var n=r(74511),o=r(47826),c=r(4146),u=c&&c.isMap,a=u?o(u):n;t.exports=a},43679:(t,e,r)=>{var n=r(8109),o=r(47826),c=r(4146),u=c&&c.isSet,a=u?o(u):n;t.exports=a},45126:(t,e,r)=>{var n=r(18874),o=r(26423);t.exports=function(t){return o(n(t,1))}},34725:t=>{t.exports=function(){return!0}},98331:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(2784);function o(t,e,r){void 0===e&&(e=0),void 0===r&&(r=[]);var o=function(t,e){void 0===e&&(e=0);var r=(0,n.useRef)(!1),o=(0,n.useRef)(),c=(0,n.useRef)(t),u=(0,n.useCallback)((function(){return r.current}),[]),a=(0,n.useCallback)((function(){r.current=!1,o.current&&clearTimeout(o.current),o.current=setTimeout((function(){r.current=!0,c.current()}),e)}),[e]),i=(0,n.useCallback)((function(){r.current=null,o.current&&clearTimeout(o.current)}),[]);return(0,n.useEffect)((function(){c.current=t}),[t]),(0,n.useEffect)((function(){return a(),i}),[e]),[u,i,a]}(t,e),c=o[0],u=o[1],a=o[2];return(0,n.useEffect)(a,r),[c,u]}}}]);