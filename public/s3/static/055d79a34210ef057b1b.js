"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[6164],{51896:(e,t,n)=>{n.d(t,{l:()=>s});var r=n(5163),a=n(2784),o=n(55742),i=n(92036),l=n(10337),s=function(e){var t=e.options,n=e.value,s=e.showArrowIcon,u=void 0!==s&&s,c=e.onClickDropdownButton,p=e.overlay,v=(0,r.__rest)(e,["options","value","showArrowIcon","onClickDropdownButton","overlay"]),f=t.find((function(e){return e.value===n}));return a.createElement(o.ZP,(0,r.__assign)({},v,{enablePortal:!0,overlay:p({option:f,options:t}),sx:(0,r.__assign)({cursor:"pointer",minWidth:"auto","&:hover":{".interval-expand-btn":{color:"t.primary",transform:"rotate(180deg)"}}},v.sx)}),a.createElement(i.Z,{onClick:c,sx:{minWidth:"auto",alignItems:"center",justifyContent:"center"}},null==f?void 0:f.display,u&&a.createElement(l.Z,{className:"interval-expand-btn",size:3,sx:{color:"t.third",transition:"transform .2s, color .2s","&:not(:first-of-type)":{ml:"minor"}}})))}},6164:(e,t,n)=>{n.r(t),n.d(t,{IntervalFilterSmall2:()=>v,default:()=>f});var r=n(2784),a=n(5163),o=n(92036),i=n(51896),l=function(e){var t=e.active,n=e.onClick,i=e.children,l=(0,a.__rest)(e,["active","onClick","children"]);return r.createElement(o.Z,(0,a.__assign)({},l,{onClick:n,sx:(0,a.__assign)({alignItems:"center",justifyContent:"center",borderRadius:"2px",bg:t?"line":"bg3",color:"t.primary",fontSize:"xs",cursor:"pointer",":hover":{bg:"line"}},l.sx)}),i)},s=n(62143),u=function(e){var t=e.children,n=(0,a.__rest)(e,["children"]);return r.createElement(s.Z,(0,a.__assign)({},n,{sx:(0,a.__assign)({display:"grid",gridTemplateColumns:"repeat(5, 60px)",gridTemplateRows:"repeat(4, 24px)",gridGap:"10px",bg:"popupBg",shadow:"0 2 16px rgba(0,0,0,.25)",p:"sm"},n.sx)}),t)},c=function(e){var t=e.onClickItem,n=e.options,s=(0,a.__rest)(e,["onClickItem","options"]),c=n.map((function(e){return{value:e.value,display:r.createElement(o.Z,{sx:{color:"t.third",fontSize:"xs",alignItems:"center"}},e.text),children:r.createElement(l,{key:e.value,active:e.value===s.value,onClick:function(){return t(e.value)}},e.text)}}));return r.createElement(i.l,(0,a.__assign)({},s,{showArrowIcon:!0,options:c,overlay:function(){return r.createElement(u,null,c.map((function(e){return e.children})))}}))},p=n(12188),v=function(e){var t=e.namespace,n=e.intervalOptions,a=(0,p.J)({namespace:t,intervalOptions:n}),o=a.options,i=a.option,l=a.dropdownExpanded,s=a.setDropdownOpen,u=a.handleClickItem;return r.createElement(c,{options:o,value:i,open:l,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},onClickDropdownButton:function(){return s(!0)},onClickItem:u})};const f=v},12188:(e,t,n)=>{n.d(t,{J:()=>p});var r=n(5163),a=n(2784);var o=n(44082);const i=n.n(o)(),l=function(e,t){!function(e,t,n){var r=(0,a.useRef)(void 0);r.current&&n(t,r.current)||(r.current=t),(0,a.useEffect)(e,r.current)}(e,t,i)};var s=n(34274),u=n(92424),c=n(86368),p=function(e){var t=e.namespace,n=e.intervalOptions,o=(0,s.Z)("trd-chart","trade-ui").getI18n,i=(0,u.createStore)(t),p=(0,c.createStore)(t),v=(0,r.__read)(i(u.getActiveTab),2),f=v[0],d=v[1],m=(0,r.__read)(i(u.getInterval),2),y=m[0],g=m[1],_=(0,r.__read)(i(u.getSelectedIntervals),1)[0],h=(0,r.__read)(p(c.getIntervalConfigOpen),2),I=h[0],x=h[1],D=(0,a.useMemo)((function(){return function(e){var t=e("line",{defaultValue:"Time"})||"Time",n=e("second",{defaultValue:"s"})||"s",r=e("minute",{defaultValue:"m"})||"m",a=e("hour",{defaultValue:"H"})||"H",o=e("day",{defaultValue:"D"})||"D",i=e("weekLine",{defaultValue:"W"})||"W",l=e("monthLine",{defaultValue:"M"})||"M";return function(e){var s;return{value:e,text:((s={})[u.DisplayIntervals.Time]=t,s[u.DisplayIntervals["1s"]]="1"+n,s[u.DisplayIntervals["1m"]]="1"+r,s[u.DisplayIntervals["3m"]]="3"+r,s[u.DisplayIntervals["5m"]]="5"+r,s[u.DisplayIntervals["15m"]]="15"+r,s[u.DisplayIntervals["30m"]]="30"+r,s[u.DisplayIntervals["1h"]]="1"+a,s[u.DisplayIntervals["2h"]]="2"+a,s[u.DisplayIntervals["4h"]]="4"+a,s[u.DisplayIntervals["6h"]]="6"+a,s[u.DisplayIntervals["8h"]]="8"+a,s[u.DisplayIntervals["12h"]]="12"+a,s[u.DisplayIntervals["1d"]]="1"+o,s[u.DisplayIntervals["3d"]]="3"+o,s[u.DisplayIntervals["1w"]]=i,s[u.DisplayIntervals["1M"]]=l,s)[e]}}}(o)}),[o]),k=(0,a.useMemo)((function(){return function(e){var t=e.createOption;return e.options.map((function(e){return t(e)}))}({options:n,createOption:D})}),[D,n]),b=(0,a.useMemo)((function(){return k.map((function(e){var t=e.value,n=e.text;return{value:t,text:void 0===n?"":n,selected:_.some((function(e){return e===t}))}}))}),[k,_]),w=(0,r.__read)((0,a.useState)(b),2),C=w[0],O=w[1];l((function(){return O(b)}),[b]);var E=(0,a.useCallback)((function(e){x(!1),g(e),d(f===u.Tabs.Depth?u.Tabs.Origin:f)}),[x,g,d,f]);return{options:C,setOptions:O,option:y,dropdownExpanded:I,setDropdownOpen:x,handleClickItem:E}}},44082:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!=a--;){var i=o[a];if(!("_owner"===i&&t.$$typeof||e(t[i],n[i])))return!1}return!0}return t!=t&&n!=n}}}]);