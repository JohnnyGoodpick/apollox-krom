(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[5879],{56980:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(2784),o=function(){},a="undefined"!=typeof window;const i=a?n.useLayoutEffect:n.useEffect;var c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const s=a&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(c),a=o[0],s=o[1],u=(0,n.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,r=t.x,n=t.y,o=t.width,a=t.height,i=t.top,c=t.left,u=t.bottom,l=t.right;s({x:r,y:n,width:o,height:a,top:i,left:c,bottom:u,right:l})}}))}),[]);return i((function(){if(t)return u.observe(t),function(){u.disconnect()}}),[t]),[r,a]}:function(){return[o,c]}},37407:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(5163),o=r(2784),a=r(98569);const i=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",fill:"currentColor"}))}},8335:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(5163),o=r(2784),a=r(98569);const i=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",fill:"currentColor"}))}},66306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(5163),o=r(2784),a=r(62143),i=r(92036),c=r(48658),s=r(72779),u=r.n(s),l="32px",f=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.required;return r?o.createElement(a.Z,(0,n.__assign)({ref:t,as:"label",className:u()({"bn-input-label-required":i},"bn-input-label"),tx:"forms",variant:"label"},e,{__css:{position:"absolute",top:"-32px",left:"0px",lineHeight:l,zIndex:"1",cursor:"text","&.bn-input-label-required::before":{display:"inline-block",marginRight:"minor",color:"error",content:'"*"'}}})):null})),b=(0,o.forwardRef)((function(e,t){return e.children?o.createElement(a.Z,(0,n.__assign)({ref:t,as:"label",className:"bn-input-label",tx:"forms",variant:"label"},e,{__css:{position:"absolute",top:"-32px",right:0,lineHeight:l,zIndex:"1",cursor:"text"}})):null}));f.displayName="TextFieldLabel";var p=(0,o.forwardRef)((function(e,t){var r=e.onFocus,i=e.onBlur,c=e.onChange,s=(0,n.__rest)(e,["onFocus","onBlur","onChange"]);return o.createElement(a.Z,(0,n.__assign)({ref:t,as:"input","data-bn-type":"input"},s,{onFocus:r,onBlur:i,onChange:c,__css:{width:"100%",height:"100%",padding:"0",outline:"none",border:"none",bg:"inherit",opacity:1,"&::placeholder":{color:"t.placeholder",fontSize:"14px"}}}))}));p.displayName="TextFieldInput";var d=(0,o.forwardRef)((function(e,t){var r=e.variant,s=void 0===r?"default":r,d=e.id,x=e.value,v=e.defaultValue,h=e.label,g=e.placeholder,j=e.error,m=e.disabled,y=e.prefix,_=e.suffix,w=e.infoText,A=void 0===w?"":w,E=e.errorText,F=void 0===E?"":E,S=e.onFocus,I=e.onBlur,R=e.onChange,B=e.boxProps,C=e.required,Z=e.extraInfo,N=e.size,O=void 0===N?"lg":N,z=(0,n.__rest)(e,["variant","id","value","defaultValue","label","placeholder","error","disabled","prefix","suffix","infoText","errorText","onFocus","onBlur","onChange","boxProps","required","extraInfo","size"]),k=o.useState(""),M=k[0],T=k[1],U=o.useRef(null!=x).current,q=o.useState(v),V=q[0],D=q[1];U&&x!==V&&D(x);var H=j?F:A,L=o.useState(16),P=L[0],G=L[1],W=j?"error":"info",$="string"==typeof h?h:z["area-label"],J=m?"disabled":j?"error":M;return""!==J&&(J="bn-input-status-"+J),o.createElement(i.Z,(0,n.__assign)({tx:"textFieldV2",className:u()([J]),variant:s},B,{__css:(0,n.__assign)((0,n.__assign)((0,n.__assign)((0,n.__assign)({display:"inline-flex",position:"relative",mt:h?l:"0px",mb:H.length>0?P+"px":"0px",alignItems:"center",lineHeight:1.6,height:"48px"},"lg"===O&&{height:"48px"}),"md"===O&&{height:"40px"}),"sm"===O&&{height:"32px"}),{"&.bn-input-status-focus .bn-input-label":{top:"-32px"}})}),y&&o.createElement(a.Z,{className:"bn-input-prefix"},y),o.createElement(p,(0,n.__assign)({id:d,onFocus:function(e){T("focus"),S&&S(e)},onBlur:function(e){T(""),I&&I(e)},onChange:function(e){U||D(e.target.value),R&&R(e)},ref:t,value:V,"aria-label":$,disabled:m,placeholder:g,required:C},z)),_&&o.createElement(a.Z,{className:"bn-input-suffix"},_),o.createElement(f,{htmlFor:d,required:C},h),Z&&o.createElement(b,null,Z),H.length>0&&o.createElement(c.Z,{ref:function(e){if(e){var t=e.getBoundingClientRect().height;G(t)}},className:"bn-input-helper-text",variant:"textField.helperText."+W,__css:{position:"absolute",bottom:-1*P-4+"px",lineHeight:P+"px"}},H))}));d.displayName="TextFieldV2";const x=d},67993:(e,t,r)=>{var n=r(752),o=r(90249);e.exports=function(e,t){return e&&n(t,o(t),e)}},55906:(e,t,r)=>{var n=r(752),o=r(18582);e.exports=function(e,t){return e&&n(t,o(t),e)}},18874:(e,t,r)=>{var n=r(86571),o=r(72517),a=r(60091),i=r(67993),c=r(55906),s=r(92175),u=r(51522),l=r(7680),f=r(19987),b=r(13483),p=r(76939),d=r(70940),x=r(99917),v=r(8222),h=r(78725),g=r(86152),j=r(73226),m=r(4714),y=r(29259),_=r(43679),w=r(90249),A=r(18582),E="[object Arguments]",F="[object Function]",S="[object Object]",I={};I[E]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[S]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[F]=I["[object WeakMap]"]=!1,e.exports=function e(t,r,R,B,C,Z){var N,O=1&r,z=2&r,k=4&r;if(R&&(N=C?R(t,B,C,Z):R(t)),void 0!==N)return N;if(!y(t))return t;var M=g(t);if(M){if(N=x(t),!O)return u(t,N)}else{var T=d(t),U=T==F||"[object GeneratorFunction]"==T;if(j(t))return s(t,O);if(T==S||T==E||U&&!C){if(N=z||U?{}:h(t),!O)return z?f(t,c(N,t)):l(t,i(N,t))}else{if(!I[T])return C?t:{};N=v(t,T,O)}}Z||(Z=new n);var q=Z.get(t);if(q)return q;Z.set(t,N),_(t)?t.forEach((function(n){N.add(e(n,r,R,n,t,Z))})):m(t)&&t.forEach((function(n,o){N.set(o,e(n,r,R,o,t,Z))}));var V=M?void 0:(k?z?p:b:z?A:w)(t);return o(V||t,(function(n,o){V&&(n=t[o=n]),a(N,o,e(n,r,R,o,t,Z))})),N}},74511:(e,t,r)=>{var n=r(70940),o=r(15125);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},8109:(e,t,r)=>{var n=r(70940),o=r(15125);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},34727:(e,t,r)=>{var n=r(79882);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},96058:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},70169:(e,t,r)=>{var n=r(50857),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},7680:(e,t,r)=>{var n=r(752),o=r(80633);e.exports=function(e,t){return n(e,o(e),t)}},19987:(e,t,r)=>{var n=r(752),o=r(12680);e.exports=function(e,t){return n(e,o(e),t)}},76939:(e,t,r)=>{var n=r(1897),o=r(12680),a=r(18582);e.exports=function(e){return n(e,a,o)}},12680:(e,t,r)=>{var n=r(65067),o=r(47353),a=r(80633),i=r(30981),c=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=o(e);return t}:i;e.exports=c},99917:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},8222:(e,t,r)=>{var n=r(79882),o=r(34727),a=r(96058),i=r(70169),c=r(6190);e.exports=function(e,t,r){var s=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new s(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return c(e,r);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(e);case"[object RegExp]":return a(e);case"[object Set]":return new s;case"[object Symbol]":return i(e)}}},4714:(e,t,r)=>{var n=r(74511),o=r(47826),a=r(4146),i=a&&a.isMap,c=i?o(i):n;e.exports=c},43679:(e,t,r)=>{var n=r(8109),o=r(47826),a=r(4146),i=a&&a.isSet,c=i?o(i):n;e.exports=c}}]);