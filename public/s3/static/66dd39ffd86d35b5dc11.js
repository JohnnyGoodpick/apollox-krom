"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[223],{69223:(e,t,n)=>{n.r(t),n.d(t,{Indicator:()=>u,default:()=>p});var a=n(5163),r=n(2784),i=n(65403),c=n(52261),o=n(15794),l=function(e){return r.createElement(c.Z,(0,a.__assign)({},e,{placement:"top",enablePortal:!0,arrow:!0,sx:(0,a.__assign)({cursor:"pointer",display:"flex",minWidth:"auto",alignItems:"center",justifyContent:"center"},e.sx)}),r.createElement(o.Z,{sx:{minWidth:"20px",minHeight:"20px"},size:20,color:"t.third"}))},s=n(69922),d=n(67300),u=function(e){var t=e.namespace,n=(0,i.Z)("trd-chart","trade-ui").getI18n,c=(0,s.createStore)(t),o=(0,d.createStore)(t),u=(0,a.__read)(c(s.getActiveTab),1)[0],p=(0,a.__read)(o(d.getCandlestickReference),1)[0],m=(0,a.__read)(o(d.getTradingViewReference),1)[0],_=(0,r.useCallback)((function(e){u===s.Tabs.Origin?null==p||p.showIndicatorsDialog():null==m||m.activeChart().executeActionById("insertIndicator"),e&&(null==e||e.nativeEvent.stopImmediatePropagation())}),[u,p,m]),f=(0,r.useMemo)((function(){return n("technicalIndicator",{defaultValue:"Technical Indicator"})||""}),[n]);return r.createElement(l,{tip:f,onClick:_,sx:{ml:"0px !important"}})};const p=u}}]);