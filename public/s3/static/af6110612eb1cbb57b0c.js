(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[3021],{53021:(e,t,n)=>{"use strict";n.d(t,{D:()=>ge});var r=n(2784);function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof o(e).Element||e instanceof Element}function a(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.round;function c(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;return a(e)&&t&&(r=n.width/e.offsetWidth||1,o=n.height/e.offsetHeight||1),{width:f(n.width/r),height:f(n.height/o),top:f(n.top/o),right:f(n.right/r),bottom:f(n.bottom/o),left:f(n.left/r),x:f(n.left/r),y:f(n.top/o)}}function u(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function p(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function d(e){return c(l(e)).left+u(e).scrollLeft}function m(e){return o(e).getComputedStyle(e)}function h(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function v(e,t,n){void 0===n&&(n=!1);var r,i,s=a(t),f=a(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),m=l(t),v=c(e,f),y={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(s||!s&&!n)&&(("body"!==p(t)||h(m))&&(y=(r=t)!==o(r)&&a(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:u(r)),a(t)?((g=c(t,!0)).x+=t.clientLeft,g.y+=t.clientTop):m&&(g.x=d(m))),{x:v.left+y.scrollLeft-g.x,y:v.top+y.scrollTop-g.y,width:v.width,height:v.height}}function y(e){var t=c(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||l(e)}function b(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:a(e)&&h(e)?e:b(g(e))}function w(e,t){var n;void 0===t&&(t=[]);var r=b(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],h(r)?r:[]):r,f=t.concat(s);return i?f:f.concat(w(g(s)))}function O(e){return["table","td","th"].indexOf(p(e))>=0}function x(e){return a(e)&&"fixed"!==m(e).position?e.offsetParent:null}function j(e){for(var t=o(e),n=x(e);n&&O(n)&&"static"===m(n).position;)n=x(n);return n&&("html"===p(n)||"body"===p(n)&&"static"===m(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&a(e)&&"fixed"===m(e).position)return null;for(var n=g(e);a(n)&&["html","body"].indexOf(p(n))<0;){var r=m(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var E="top",k="bottom",D="right",M="left",A="auto",S=[E,k,D,M],L="start",P="end",B="viewport",W="popper",R=S.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+P])}),[]),H=[].concat(S,[A]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+P])}),[]),T=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function C(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var _={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function U(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?_:o;return function(e,t,n){void 0===n&&(n=a);var o,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:f,setOptions:function(n){l(),f.options=Object.assign({},a,f.options,n),f.scrollParents={reference:i(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var o,s,u=function(e){var t=C(e);return T.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(r,f.options.modifiers),s=o.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(s).map((function(e){return s[e]}))));return f.orderedModifiers=u.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:p,options:r});c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(q(t,n)){f.rects={reference:v(t,j(n),"fixed"===f.options.strategy),popper:y(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:p})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){l(),u=!0}};if(!q(e,t))return p;function l(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var V={passive:!0};const z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,c=o(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,V)})),f&&c.addEventListener("resize",n.update,V),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,V)})),f&&c.removeEventListener("resize",n.update,V)}},data:{}};function F(e){return e.split("-")[0]}function N(e){return e.split("-")[1]}function I(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?N(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case E:t={x:s,y:n.y-r.height};break;case k:t={x:s,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:f};break;case M:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?I(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case L:t[c]=t[c]-(n[u]/2-r[u]/2);break;case P:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}const Y={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var $=Math.max,G=Math.min,J=Math.round,K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:J(J(t*r)/r)||0,y:J(J(n*r)/r)||0}}(a):"function"==typeof u?u(a):a,d=p.x,h=void 0===d?0:d,v=p.y,y=void 0===v?0:v,g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=M,O=E,x=window;if(c){var A=j(n),S="clientHeight",L="clientWidth";A===o(n)&&"static"!==m(A=l(n)).position&&(S="scrollHeight",L="scrollWidth"),A=A,i===E&&(O=k,y-=A[S]-r.height,y*=f?1:-1),i===M&&(w=D,h-=A[L]-r.width,h*=f?1:-1)}var P,B=Object.assign({position:s},c&&K);return f?Object.assign({},B,((P={})[O]=b?"0":"",P[w]=g?"0":"",P.transform=(x.devicePixelRatio||1)<2?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",P)):Object.assign({},B,((t={})[O]=b?y+"px":"",t[w]=g?h+"px":"",t.transform="",t))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t){return t===B?oe(function(e){var t=o(e),n=l(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:i,height:a,x:s+d(e),y:f}}(e)):a(t)?function(e){var t=c(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):oe(function(e){var t,n=l(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+d(e),f=-r.scrollTop;return"rtl"===m(o||n).direction&&(s+=$(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(l(e)))}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,s=n.boundary,f=void 0===s?"clippingParents":s,u=n.rootBoundary,d=void 0===u?B:u,h=n.elementContext,v=void 0===h?W:h,y=n.altBoundary,b=void 0!==y&&y,O=n.padding,x=void 0===O?0:O,M=ae("number"!=typeof x?x:se(x,S)),A=v===W?"reference":W,L=e.elements.reference,P=e.rects.popper,R=e.elements[b?A:v],H=function(e,t,n){var r="clippingParents"===t?function(e){var t=w(g(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&a(e)?j(e):e;return i(n)?t.filter((function(e){return i(e)&&re(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),s=o[0],f=o.reduce((function(t,n){var r=ie(e,n);return t.top=$(r.top,t.top),t.right=G(r.right,t.right),t.bottom=G(r.bottom,t.bottom),t.left=$(r.left,t.left),t}),ie(e,s));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}(i(R)?R:R.contextElement||l(e.elements.popper),f,d),T=c(L),C=X({reference:T,element:P,strategy:"absolute",placement:o}),_=oe(Object.assign({},P,C)),q=v===W?_:T,U={top:H.top-q.top+M.top,bottom:q.bottom-H.bottom+M.bottom,left:H.left-q.left+M.left,right:q.right-H.right+M.right},V=e.modifiersData.offset;if(v===W&&V){var z=V[o];Object.keys(U).forEach((function(e){var t=[D,k].indexOf(e)>=0?1:-1,n=[E,k].indexOf(e)>=0?"y":"x";U[e]+=z[n]*t}))}return U}function ce(e,t,n){return $(e,G(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[E,D,k,M].some((function(t){return e[t]>=0}))}var le=U({defaultModifiers:[z,Y,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:F(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];a(o)&&p(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});a(r)&&p(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[M,E].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[M,D].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=F(v),g=f||(y!==v&&m?function(e){if(F(e)===A)return[];var t=ee(e);return[ne(e),t,ne(t)]}(v):[ee(v)]),b=[v].concat(g).reduce((function(e,n){return e.concat(F(n)===A?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?H:f,u=N(r),p=u?s?R:R.filter((function(e){return N(e)===u})):S,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,j=!0,P=b[0],B=0;B<b.length;B++){var W=b[B],T=F(W),C=N(W)===L,_=[E,k].indexOf(T)>=0,q=_?"width":"height",U=fe(t,{placement:W,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),V=_?C?D:M:C?k:E;w[q]>O[q]&&(V=ee(V));var z=ee(V),I=[];if(i&&I.push(U[T]<=0),s&&I.push(U[V]<=0,U[z]<=0),I.every((function(e){return e}))){P=W,j=!1;break}x.set(W,I)}if(j)for(var X=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},Y=m?3:1;Y>0&&"break"!==X(Y);Y--);t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=fe(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),g=F(t.placement),b=N(t.placement),w=!b,O=I(g),x="x"===O?"y":"x",A=t.modifiersData.popperOffsets,S=t.rects.reference,P=t.rects.popper,B="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W={x:0,y:0};if(A){if(i||s){var R="y"===O?E:M,H="y"===O?k:D,T="y"===O?"height":"width",C=A[O],_=A[O]+v[R],q=A[O]-v[H],U=d?-P[T]/2:0,V=b===L?S[T]:P[T],z=b===L?-P[T]:-S[T],X=t.elements.arrow,Y=d&&X?y(X):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[R],Q=J[H],Z=ce(0,S[T],Y[T]),ee=w?S[T]/2-U-Z-K-B:V-Z-K-B,te=w?-S[T]/2+U+Z+Q+B:z+Z+Q+B,ne=t.elements.arrow&&j(t.elements.arrow),re=ne?"y"===O?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][O]:0,ie=A[O]+ee-oe-re,ae=A[O]+te-oe;if(i){var se=ce(d?G(_,ie):_,C,d?$(q,ae):q);A[O]=se,W[O]=se-C}if(s){var ue="x"===O?E:M,pe="x"===O?k:D,le=A[x],de=le+v[ue],me=le-v[pe],he=ce(d?G(de,ie):de,le,d?$(me,ae):me);A[x]=he,W[x]=he-le}}t.modifiersData[r]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=I(s),c=[M,D].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ae("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,S))}(o.padding,n),p=y(i),l="y"===f?E:M,d="y"===f?k:D,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=j(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,w=u[l],O=g-p[c]-u[d],x=g/2-p[c]/2+b,A=ce(w,x,O),L=f;n.modifiersData[r]=((t={})[L]=A,t.centerOffset=A-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&re(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=ue(a,r),c=ue(s,o,i),u=pe(f),p=pe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),de=n(26503),me=n.n(de),he=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},ve="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,ye=[],ge=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ye},a=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],f=a[1],c=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);f({styles:he(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:he(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=r.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return me()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),p=r.useRef();return ve((function(){p.current&&p.current.setOptions(u)}),[u]),ve((function(){if(null!=e&&null!=t){var r=(n.createPopper||le)(e,t,u);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}},26503:(e,t,n)=>{var r=n(23716),o="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,s="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function f(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var n,r,c,u;if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!f(e[r],t[r]))return!1;return!0}if(i&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(r=u.next()).done;)if(!t.has(r.value[0]))return!1;for(u=e.entries();!(r=u.next()).done;)if(!f(r.value[1],t.get(r.value[0])))return!1;return!0}if(a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(r=u.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,c[r]))return!1;if(o&&e instanceof Element)return!1;for(r=n;0!=r--;)if(("_owner"!==c[r]&&"__v"!==c[r]&&"__o"!==c[r]||!e.$$typeof)&&!f(e[c[r]],t[c[r]]))return!1;return!0}return e!=e&&t!=t}e.exports=function(e,t){try{return f(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return r.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}}}]);