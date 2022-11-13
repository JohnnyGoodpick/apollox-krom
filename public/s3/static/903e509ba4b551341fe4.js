"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[8052],{16902:(e,n,t)=>{t.d(n,{o:()=>u});var r=t(5163),o=t(2784),a=t(92036),l=t(51896),i=t(24336),s=t(76364),u=function(e){var n=e.onClickItem,t=e.options,u=(0,r.__rest)(e,["onClickItem","options"]),c=t.map((function(e,t){return{value:e.value,display:o.createElement(a.Z,{sx:{fontSize:"xs",color:"t.third"}},e.text),children:o.createElement(i.c,{key:t,active:e.value===u.value,onClick:function(){return n(e.value)},sx:{px:"xs",py:"ls"}},e.text)}}));return o.createElement(l.l,(0,r.__assign)({},u,{options:c,overlay:function(){return o.createElement(s.a,{sx:{position:"absolute",left:"-8px",width:"max-content"}},c.map((function(e){return e.children})))}}))}},51896:(e,n,t)=>{t.d(n,{l:()=>s});var r=t(5163),o=t(2784),a=t(55742),l=t(92036),i=t(10337),s=function(e){var n=e.options,t=e.value,s=e.showArrowIcon,u=void 0!==s&&s,c=e.onClickDropdownButton,p=e.overlay,d=(0,r.__rest)(e,["options","value","showArrowIcon","onClickDropdownButton","overlay"]),v=n.find((function(e){return e.value===t}));return o.createElement(a.ZP,(0,r.__assign)({},d,{enablePortal:!0,overlay:p({option:v,options:n}),sx:(0,r.__assign)({cursor:"pointer",minWidth:"auto","&:hover":{".interval-expand-btn":{color:"t.primary",transform:"rotate(180deg)"}}},d.sx)}),o.createElement(l.Z,{onClick:c,sx:{minWidth:"auto",alignItems:"center",justifyContent:"center"}},null==v?void 0:v.display,u&&o.createElement(i.Z,{className:"interval-expand-btn",size:3,sx:{color:"t.third",transition:"transform .2s, color .2s","&:not(:first-of-type)":{ml:"minor"}}})))}},24336:(e,n,t)=>{t.d(n,{c:()=>l});var r=t(5163),o=t(2784),a=t(92036),l=function(e){var n=e.onClick,t=e.active,l=e.children,i=(0,r.__rest)(e,["onClick","active","children"]);return o.createElement(a.Z,(0,r.__assign)({},i,{onClick:n,sx:(0,r.__assign)({px:"ls",py:"sm",fontSize:"xs",color:t?"t.yellow":"t.primary",bg:"transparent",cursor:"pointer",alignItems:"center",":hover":{bg:"bg3"},"& > *:not(:last-child)":{mr:"5px"}},i.sx)}),l)}},76364:(e,n,t)=>{t.d(n,{a:()=>l});var r=t(5163),o=t(2784),a=t(92036),l=function(e){var n=e.children,t=(0,r.__rest)(e,["children"]);return o.createElement(a.Z,(0,r.__assign)({},t,{sx:(0,r.__assign)({bg:"popupBg",shadow:"0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",borderRadius:"4px",py:"5px",flexDirection:"column"},t.sx)}),n)}},18052:(e,n,t)=>{t.r(n),t.d(n,{Tabs:()=>v,default:()=>m});var r,o=t(5163),a=t(2784),l=t(34274),i=t(55521),s=t(74900),u=function(e){var n=e.name,t=e.options,r=e.value,o=e.onChange;return a.createElement(s.QE,{name:n,value:r,onChange:o},t.map((function(e){return a.createElement(s.ZP,{key:e.value,value:e.value,label:e.label,sx:{"&:not(:first-of-type)":{ml:"10px"},"& label":{cursor:"pointer",color:e.value===r?"t.yellow":"t.third","&:hover":{color:"t.yellow"},"& div":{ml:0,p:"minor",fontSize:"12px",lineHeight:"16px",letterSpacing:"0.32px"}},"& svg":{display:"none"}}})})))},c=t(16902),p=t(92424),d=((r={})[p.Tabs.Origin]="Original",r[p.Tabs.TradingView]="Trading View",r[p.Tabs.Depth]="Depth",r),v=function(e){var n=e.tabKeys,t=e.namespace,r=(0,l.Z)("trd-chart","trade-ui").getI18n,s=(0,p.createStore)(t),v=(0,o.__read)(s(p.getActiveTab),2),m=v[0],x=v[1],f=(0,o.__read)((0,a.useState)(!1),2),g=f[0],h=f[1],_=(0,i.F)().isIPad,b=(0,a.useCallback)((function(){return h(!0)}),[h]),k=(0,a.useCallback)((function(){return h(!1)}),[h]),y=(0,a.useCallback)((function(){return h(!0)}),[h]),C=(0,a.useMemo)((function(){return n.map((function(e){return{value:e,label:r(d[e],{defaultValue:d[e]})}}))}),[r,n]),w=(0,a.useMemo)((function(){return n.map((function(e){return{value:e,text:r(d[e],{defaultValue:d[e]})||""}}))}),[r,n]),E=(0,a.useCallback)((function(e){x(e),h(!1)}),[x]);return _?a.createElement(c.o,{showArrowIcon:!0,open:g,onMouseEnter:b,onMouseLeave:k,onClickDropdownButton:y,onClickItem:E,options:w,value:m}):a.createElement(u,{name:"tab-"+t,options:C,value:m,onChange:x})};const m=v}}]);