"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[5219],{47677:e=>{e.exports=function(e,t,n,i,o,r,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,i,o,r,a,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return d[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},45219:(e,t,n)=>{n.d(t,{JN:()=>oe,Rp:()=>S,W6:()=>V,W8:()=>se});var i=n(7896),o=n(2867),r=n(37584),a=n(9249),s=n(87371),l=n(11987),d=n(95058),c=n(45754),h=n(80753),u=n(56666),f=n(2784),p=n(13980),g=n.n(p),y=n(28316),x=n(47677),v=n.n(x),m=n(38777),w=function(){function e(){(0,a.Z)(this,e),(0,u.Z)(this,"refs",{})}return(0,s.Z)(e,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(b)}}]),e}();function b(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function S(e,t,n){return(e=e.slice()).splice(n<0?e.length+n:n,0,e.splice(t,1)[0]),e}function Z(e,t){return Object.keys(e).reduce((function(n,i){return-1===t.indexOf(i)&&(n[i]=e[i]),n}),{})}var C={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},k=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];switch(t){case"ms":return"ms";default:return t&&t.length?t[0].toUpperCase()+t.substr(1):""}}();function T(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function I(e,t){e.style["".concat(k,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function O(e,t){e.style["".concat(k,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function E(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function R(e,t,n){return Math.max(e,Math.min(n,t))}function D(e){return"px"===e.substr(-2)?parseFloat(e):0}function N(e){var t=window.getComputedStyle(e);return{bottom:D(t.marginBottom),left:D(t.marginLeft),right:D(t.marginRight),top:D(t.marginTop)}}function M(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function W(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function L(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function A(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var i={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?i:H(e.parentNode,t,i)}}function K(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}function G(e){var t=e.lockOffset,n=e.width,i=e.height,o=t,r=t,a="px";if("string"==typeof t){var s=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);v()(null!==s,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),o=parseFloat(t),r=parseFloat(t),a=s[1]}return v()(isFinite(o)&&isFinite(r),"lockOffset value should be a finite. Given %s",t),"%"===a&&(o=o*n/100,r=r*i/100),{x:o,y:r}}function P(e){var t=e.height,n=e.width,i=e.lockOffset,r=Array.isArray(i)?i:[i,i];v()(2===r.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",i);var a=(0,o.Z)(r,2),s=a[0],l=a[1];return[G({height:t,lockOffset:s,width:n}),G({height:t,lockOffset:l,width:n})]}function B(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:B(e.parentNode):null}function _(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:D(t.gridColumnGap),y:D(t.gridRowGap)}:{x:0,y:0}}var j="BUTTON",X="INPUT",U="OPTION",Y="TEXTAREA",F="SELECT";function q(e){var t="input, textarea, select, canvas, [contenteditable]",n=e.querySelectorAll(t),i=e.cloneNode(!0);return(0,m.Z)(i.querySelectorAll(t)).forEach((function(e,t){"file"!==e.type&&(e.value=n[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),"CANVAS"===e.tagName&&n[t].width>0&&n[t].height>0&&e.getContext("2d").drawImage(n[t],0,0)})),i}function V(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){return(0,a.Z)(this,n),(0,l.Z)(this,(0,d.Z)(n).apply(this,arguments))}return(0,c.Z)(n,t),(0,s.Z)(n,[{key:"componentDidMount",value:function(){(0,y.findDOMNode)(this).sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return v()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.refs.wrappedInstance}},{key:"render",value:function(){var t=o.withRef?"wrappedInstance":null;return(0,f.createElement)(e,(0,i.Z)({ref:t},this.props))}}]),n}(f.Component),(0,u.Z)(t,"displayName",M("sortableHandle",e)),n}function z(e){return null!=e.sortableHandle}var J=function(){function e(t,n){(0,a.Z)(this,e),this.container=t,this.onScrollCallback=n}return(0,s.Z)(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,i=e.minTranslate,o=e.maxTranslate,r=e.width,a=e.height,s={x:0,y:0},l={x:1,y:1},d=this.container,c=d.scrollTop,h=d.scrollLeft,u=d.scrollHeight,f=d.scrollWidth,p=0===c,g=u-c-d.clientHeight==0,y=0===h,x=f-h-d.clientWidth==0;n.y>=o.y-a/2&&!g?(s.y=1,l.y=10*Math.abs((o.y-a/2-n.y)/a)):n.x>=o.x-r/2&&!x?(s.x=1,l.x=10*Math.abs((o.x-r/2-n.x)/r)):n.y<=i.y+a/2&&!p?(s.y=-1,l.y=10*Math.abs((n.y-a/2-i.y)/a)):n.x<=i.x+r/2&&!y&&(s.x=-1,l.x=10*Math.abs((n.x-r/2-i.x)/r)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===s.x&&0===s.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:l.x*s.x,top:l.y*s.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}(),$={axis:g().oneOf(["x","y","xy"]),contentWindow:g().any,disableAutoscroll:g().bool,distance:g().number,getContainer:g().func,getHelperDimensions:g().func,helperClass:g().string,helperContainer:g().oneOfType([g().func,"undefined"==typeof HTMLElement?g().any:g().instanceOf(HTMLElement)]),hideSortableGhost:g().bool,keyboardSortingTransitionDuration:g().number,lockAxis:g().string,lockOffset:g().oneOfType([g().number,g().string,g().arrayOf(g().oneOfType([g().number,g().string]))]),lockToContainerEdges:g().bool,onSortEnd:g().func,onSortMove:g().func,onSortOver:g().func,onSortStart:g().func,pressDelay:g().number,pressThreshold:g().number,keyCodes:g().shape({lift:g().arrayOf(g().number),drop:g().arrayOf(g().number),cancel:g().arrayOf(g().number),up:g().arrayOf(g().number),down:g().arrayOf(g().number)}),shouldCancelStart:g().func,transitionDuration:g().number,updateBeforeSortStart:g().func,useDragHandle:g().bool,useWindowAsScrollContainer:g().bool},Q={lift:[32],drop:[32],cancel:[27],up:[38,37],down:[40,39]},ee={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:Q,shouldCancelStart:function(e){return-1!==[X,Y,F,U,j].indexOf(e.target.tagName)||!!E(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},te=Object.keys($);function ne(e){v()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function ie(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,value)}function oe(e){var t,n,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(e){var t;return(0,a.Z)(this,n),t=(0,l.Z)(this,(0,d.Z)(n).call(this,e)),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"state",{}),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleStart",(function(e){var n=t.props,i=n.distance,o=n.shouldCancelStart;if(2!==e.button&&!o(e)){t.touched=!0,t.position=L(e);var r=E(e.target,(function(e){return null!=e.sortableInfo}));if(r&&r.sortableInfo&&t.nodeIsChild(r)&&!t.state.sorting){var a=t.props.useDragHandle,s=r.sortableInfo,l=s.index,d=s.collection;if(s.disabled)return;if(a&&!E(e.target,z))return;t.manager.active={collection:d,index:l},A(e)||"A"!==e.target.tagName||e.preventDefault(),i||(0===t.props.pressDelay?t.handlePress(e):t.pressTimer=setTimeout((function(){return t.handlePress(e)}),t.props.pressDelay))}}})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"nodeIsChild",(function(e){return e.sortableInfo.manager===t.manager})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleMove",(function(e){var n=t.props,i=n.distance,o=n.pressThreshold;if(!t.state.sorting&&t.touched&&!t._awaitingUpdateBeforeSortStart){var r=L(e),a={x:t.position.x-r.x,y:t.position.y-r.y},s=Math.abs(a.x)+Math.abs(a.y);t.delta=a,i||o&&!(s>=o)?i&&s>=i&&t.manager.isActive()&&t.handlePress(e):(clearTimeout(t.cancelTimer),t.cancelTimer=setTimeout(t.cancel,0))}})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleEnd",(function(){t.touched=!1,t.cancel()})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"cancel",(function(){var e=t.props.distance;t.state.sorting||(e||clearTimeout(t.pressTimer),t.manager.active=null)})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handlePress",(function(e){try{var n=t.manager.getActive(),i=function(){if(n){var i=function(){var n=f.sortableInfo.index,i=N(f),o=_(t.container),c=t.scrollContainer.getBoundingClientRect(),y=s({index:n,node:f,collection:p});if(t.node=f,t.margin=i,t.gridGap=o,t.width=y.width,t.height=y.height,t.marginOffset={x:t.margin.left+t.margin.right+t.gridGap.x,y:Math.max(t.margin.top,t.margin.bottom,t.gridGap.y)},t.boundingClientRect=f.getBoundingClientRect(),t.containerBoundingRect=c,t.index=n,t.newIndex=n,t.axis={x:a.indexOf("x")>=0,y:a.indexOf("y")>=0},t.offsetEdge=H(f,t.container),t.initialOffset=L(g?(0,r.Z)({},e,{pageX:t.boundingClientRect.left,pageY:t.boundingClientRect.top}):e),t.initialScroll={left:t.scrollContainer.scrollLeft,top:t.scrollContainer.scrollTop},t.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},t.helper=t.helperContainer.appendChild(q(f)),T(t.helper,{boxSizing:"border-box",height:"".concat(t.height,"px"),left:"".concat(t.boundingClientRect.left-i.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(t.boundingClientRect.top-i.top,"px"),width:"".concat(t.width,"px")}),g&&t.helper.focus(),d&&(t.sortableGhost=f,T(f,{opacity:0,visibility:"hidden"})),t.minTranslate={},t.maxTranslate={},g){var x=u?{top:0,left:0,width:t.contentWindow.innerWidth,height:t.contentWindow.innerHeight}:t.containerBoundingRect,v=x.top,m=x.left,w=x.width,b=v+x.height,S=m+w;t.axis.x&&(t.minTranslate.x=m-t.boundingClientRect.left,t.maxTranslate.x=S-(t.boundingClientRect.left+t.width)),t.axis.y&&(t.minTranslate.y=v-t.boundingClientRect.top,t.maxTranslate.y=b-(t.boundingClientRect.top+t.height))}else t.axis.x&&(t.minTranslate.x=(u?0:c.left)-t.boundingClientRect.left-t.width/2,t.maxTranslate.x=(u?t.contentWindow.innerWidth:c.left+c.width)-t.boundingClientRect.left-t.width/2),t.axis.y&&(t.minTranslate.y=(u?0:c.top)-t.boundingClientRect.top-t.height/2,t.maxTranslate.y=(u?t.contentWindow.innerHeight:c.top+c.height)-t.boundingClientRect.top-t.height/2);l&&l.split(" ").forEach((function(e){return t.helper.classList.add(e)})),t.listenerNode=e.touches?f:t.contentWindow,g?(t.listenerNode.addEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.addEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.addEventListener("keydown",t.handleKeyDown)):(C.move.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortMove,!1)})),C.end.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortEnd,!1)}))),t.setState({sorting:!0,sortingIndex:n}),h&&h({node:f,index:n,collection:p,isKeySorting:g,nodes:t.manager.getOrderedRefs(),helper:t.helper},e),g&&t.keyMove(0)},o=t.props,a=o.axis,s=o.getHelperDimensions,l=o.helperClass,d=o.hideSortableGhost,c=o.updateBeforeSortStart,h=o.onSortStart,u=o.useWindowAsScrollContainer,f=n.node,p=n.collection,g=t.manager.isKeySorting,y=function(){if("function"==typeof c){t._awaitingUpdateBeforeSortStart=!0;var n=ie((function(){var t=f.sortableInfo.index;return Promise.resolve(c({collection:p,index:t,node:f,isKeySorting:g},e)).then((function(){}))}),(function(e,n){if(t._awaitingUpdateBeforeSortStart=!1,e)throw n;return n}));if(n&&n.then)return n.then((function(){}))}}();return y&&y.then?y.then(i):i()}}();return Promise.resolve(i&&i.then?i.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleSortMove",(function(e){var n=t.props.onSortMove;"function"==typeof e.preventDefault&&e.preventDefault(),t.updateHelperPosition(e),t.animateNodes(),t.autoscroll(),n&&n(e)})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleSortEnd",(function(e){var n=t.props,i=n.hideSortableGhost,o=n.onSortEnd,r=t.manager,a=r.active.collection,s=r.isKeySorting,l=t.manager.getOrderedRefs();t.listenerNode&&(s?(t.listenerNode.removeEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("keydown",t.handleKeyDown)):(C.move.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortMove)})),C.end.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortEnd)})))),t.helper.parentNode.removeChild(t.helper),i&&t.sortableGhost&&T(t.sortableGhost,{opacity:"",visibility:""});for(var d=0,c=l.length;d<c;d++){var h=l[d],u=h.node;h.edgeOffset=null,h.boundingClientRect=null,I(u,null),O(u,null),h.translate=null}t.autoScroller.clear(),t.manager.active=null,t.manager.isKeySorting=!1,t.setState({sorting:!1,sortingIndex:null}),"function"==typeof o&&o({collection:a,newIndex:t.newIndex,oldIndex:t.index,isKeySorting:s,nodes:l},e),t.touched=!1})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"autoscroll",(function(){var e=t.props.disableAutoscroll,n=t.manager.isKeySorting;if(e)t.autoScroller.clear();else{if(n){var i=(0,r.Z)({},t.translate),o=0,a=0;return t.axis.x&&(i.x=Math.min(t.maxTranslate.x,Math.max(t.minTranslate.x,t.translate.x)),o=t.translate.x-i.x),t.axis.y&&(i.y=Math.min(t.maxTranslate.y,Math.max(t.minTranslate.y,t.translate.y)),a=t.translate.y-i.y),t.translate=i,I(t.helper,t.translate),t.scrollContainer.scrollLeft+=o,void(t.scrollContainer.scrollTop+=a)}t.autoScroller.update({height:t.height,maxTranslate:t.maxTranslate,minTranslate:t.minTranslate,translate:t.translate,width:t.width})}})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"onAutoScroll",(function(e){t.translate.x+=e.left,t.translate.y+=e.top,t.animateNodes()})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleKeyDown",(function(e){var n=e.keyCode,i=t.props,o=i.shouldCancelStart,a=i.keyCodes,s=void 0===a?{}:a,l=(0,r.Z)({},Q,s);t.manager.active&&!t.manager.isKeySorting||!(t.manager.active||l.lift.includes(n)&&!o(e)&&t.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),l.lift.includes(n)&&!t.manager.active?t.keyLift(e):l.drop.includes(n)&&t.manager.active?t.keyDrop(e):l.cancel.includes(n)?(t.newIndex=t.manager.active.index,t.keyDrop(e)):l.up.includes(n)?t.keyMove(-1):l.down.includes(n)&&t.keyMove(1))})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"keyLift",(function(e){var n=e.target,i=E(n,(function(e){return null!=e.sortableInfo})).sortableInfo,o=i.index,r=i.collection;t.initialFocusedNode=n,t.manager.isKeySorting=!0,t.manager.active={index:o,collection:r},t.handlePress(e)})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"keyMove",(function(e){var n=t.manager.getOrderedRefs(),i=n[n.length-1].node.sortableInfo.index,o=t.newIndex+e,r=t.newIndex;if(!(o<0||o>i)){t.prevIndex=r,t.newIndex=o;var a=K(t.newIndex,t.prevIndex,t.index),s=n.find((function(e){return e.node.sortableInfo.index===a})),l=s.node,d=t.containerScrollDelta,c=s.boundingClientRect||W(l,d),h=s.translate||{x:0,y:0},u=c.top+h.y-d.top,f=c.left+h.x-d.left,p=r<o,g=p&&t.axis.x?l.offsetWidth-t.width:0,y=p&&t.axis.y?l.offsetHeight-t.height:0;t.handleSortMove({pageX:f+g,pageY:u+y,ignoreTransition:0===e})}})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"keyDrop",(function(e){t.handleSortEnd(e),t.initialFocusedNode&&t.initialFocusedNode.focus()})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"handleKeyEnd",(function(e){t.manager.active&&t.keyDrop(e)})),(0,u.Z)((0,h.Z)((0,h.Z)(t)),"isValidSortingTarget",(function(e){var n=t.props.useDragHandle,i=e.target,o=E(i,(function(e){return null!=e.sortableInfo}));return o&&o.sortableInfo&&!o.sortableInfo.disabled&&(n?z(i):i.sortableInfo)})),ne(e),t.manager=new w,t.events={end:t.handleEnd,move:t.handleMove,start:t.handleStart},t}return(0,c.Z)(n,t),(0,s.Z)(n,[{key:"getChildContext",value:function(){return{manager:this.manager}}},{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var i=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof i?i():i,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:B(e.container)||e.container,e.autoScroller=new J(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return C[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return C[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,i=t.lockOffset,r=t.lockToContainerEdges,a=t.transitionDuration,s=t.keyboardSortingTransitionDuration,l=void 0===s?a:s,d=this.manager.isKeySorting,c=e.ignoreTransition,h=L(e),u={x:h.x-this.initialOffset.x,y:h.y-this.initialOffset.y};if(u.y-=window.pageYOffset-this.initialWindowScroll.top,u.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=u,r){var f=P({height:this.height,lockOffset:i,width:this.width}),p=(0,o.Z)(f,2),g=p[0],y=p[1],x={x:this.width/2-g.x,y:this.height/2-g.y},v={x:this.width/2-y.x,y:this.height/2-y.y};u.x=R(this.minTranslate.x+x.x,this.maxTranslate.x-v.x,u.x),u.y=R(this.minTranslate.y+x.y,this.maxTranslate.y-v.y,u.y)}"x"===n?u.y=0:"y"===n&&(u.x=0),d&&l&&!c&&O(this.helper,l),I(this.helper,u)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,i=e.onSortOver,o=this.containerScrollDelta,r=this.windowScrollDelta,a=this.manager.getOrderedRefs(),s=this.offsetEdge.left+this.translate.x+o.left,l=this.offsetEdge.top+this.translate.y+o.top,d=this.manager.isKeySorting,c=this.newIndex;this.newIndex=null;for(var h=0,u=a.length;h<u;h++){var f=a[h].node,p=f.sortableInfo.index,g=f.offsetWidth,y=f.offsetHeight,x={height:this.height>y?y/2:this.height/2,width:this.width>g?g/2:this.width/2},v=d&&p>this.index&&p<=c,m=d&&p<this.index&&p>=c,w={x:0,y:0},b=a[h].edgeOffset;b||(b=H(f,this.container),a[h].edgeOffset=b,d&&(a[h].boundingClientRect=W(f,o)));var S=h<a.length-1&&a[h+1],Z=h>0&&a[h-1];S&&!S.edgeOffset&&(S.edgeOffset=H(S.node,this.container),d&&(S.boundingClientRect=W(S.node,o))),p!==this.index?(t&&O(f,t),this.axis.x?this.axis.y?m||p<this.index&&(s+r.left-x.width<=b.left&&l+r.top<=b.top+x.height||l+r.top+x.height<=b.top)?(w.x=this.width+this.marginOffset.x,b.left+w.x>this.containerBoundingRect.width-x.width&&S&&(w.x=S.edgeOffset.left-b.left,w.y=S.edgeOffset.top-b.top),null===this.newIndex&&(this.newIndex=p)):(v||p>this.index&&(s+r.left+x.width>=b.left&&l+r.top+x.height>=b.top||l+r.top+x.height>=b.top+y))&&(w.x=-(this.width+this.marginOffset.x),b.left+w.x<this.containerBoundingRect.left+x.width&&Z&&(w.x=Z.edgeOffset.left-b.left,w.y=Z.edgeOffset.top-b.top),this.newIndex=p):v||p>this.index&&s+r.left+x.width>=b.left?(w.x=-(this.width+this.marginOffset.x),this.newIndex=p):(m||p<this.index&&s+r.left<=b.left+x.width)&&(w.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(v||p>this.index&&l+r.top+x.height>=b.top?(w.y=-(this.height+this.marginOffset.y),this.newIndex=p):(m||p<this.index&&l+r.top<=b.top+x.height)&&(w.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),I(f,w),a[h].translate=w):n&&(this.sortableGhost=f,T(f,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),d&&(this.newIndex=c);var C=d?this.prevIndex:c;i&&this.newIndex!==C&&i({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:C,isKeySorting:d,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return v()(p.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.refs.wrappedInstance}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?(0,y.findDOMNode)(this):e(p.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var t=p.withRef?"wrappedInstance":null;return(0,f.createElement)(e,(0,i.Z)({ref:t},Z(this.props,te)))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),n}(f.Component),(0,u.Z)(t,"displayName",M("sortableList",e)),(0,u.Z)(t,"defaultProps",ee),(0,u.Z)(t,"propTypes",$),(0,u.Z)(t,"childContextTypes",{manager:g().object.isRequired}),n}var re={index:g().number.isRequired,collection:g().oneOfType([g().number,g().string]),disabled:g().bool},ae=Object.keys(re);function se(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){return(0,a.Z)(this,n),(0,l.Z)(this,(0,d.Z)(n).apply(this,arguments))}return(0,c.Z)(n,t),(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,i=e.index,o=(0,y.findDOMNode)(this);o.sortableInfo={collection:t,disabled:n,index:i,manager:this.context.manager},this.node=o,this.ref={node:o},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return v()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.refs.wrappedInstance}},{key:"render",value:function(){var t=o.withRef?"wrappedInstance":null;return(0,f.createElement)(e,(0,i.Z)({ref:t},Z(this.props,ae)))}}]),n}(f.Component),(0,u.Z)(t,"displayName",M("sortableElement",e)),(0,u.Z)(t,"contextTypes",{manager:g().object.isRequired}),(0,u.Z)(t,"propTypes",re),(0,u.Z)(t,"defaultProps",{collection:0}),n}}}]);