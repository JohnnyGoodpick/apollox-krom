"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[517],{25517:(e,t,s)=>{s.r(t),s.d(t,{default:()=>U});var a=s(52322),o=s(2784),i=s(39727),n=s(52613),r=s(2724),l=s(83166),d=s(70993),c=s(98492),g=s(38086),x=s(35635),m=s(49967),b=s(86778),p=s(20512);const h=o.memo((({hideZeroAsset:e,toggleZeroAsset:t})=>{const{getI18n:s}=(0,d.yk)(),o="hideZeroAsset",i=s(o,{defaultValue:"Hide Zero Assets"});return(0,a.jsx)("div",Object.assign({className:"action-bar"},{children:(0,a.jsxs)(x.Z,Object.assign({sx:{alignItems:"center",color:"t.third"},onClick:t},{children:[(0,a.jsx)(b.Z,{name:o,checked:e},void 0),(0,a.jsx)(p.Z,Object.assign({variant:"caption",sx:{userSelect:"none"}},{children:i}),void 0)]}),void 0)}),void 0)}));var v=s(43757),j=s(48437),u=s(12729);const f=e=>{var{color:t="t.primary"}=e,s=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s}(e,["color"]);return(0,a.jsx)(p.Z,Object.assign({variant:"captionSub",color:t},s),void 0)},y=({children:e,sx:t})=>(0,a.jsx)(x.Z,Object.assign({className:"row-item",sx:t},{children:e}),void 0),w=({assetLogo:e,assetCode:t,enable:s})=>(0,a.jsxs)(y,Object.assign({sx:{pb:"10px !important"}},{children:[(0,a.jsxs)(x.Z,Object.assign({sx:{alignItems:"center"}},{children:[(0,a.jsx)(v.Z,{variant:"avatar",src:e,alt:"",sx:{width:24,height:24,alignSelf:"center"}},void 0),(0,a.jsx)(p.Z,Object.assign({variant:"h4",sx:{ml:2,fontWeight:"medium"}},{children:t}),void 0)]}),void 0),(0,a.jsx)("div",Object.assign({className:"transfer"},{children:(0,a.jsx)(u.MK,{assetCode:t,enable:s},void 0)}),void 0)]}),void 0),C=({formattedWalletBalance:e})=>{const{getI18n:t}=(0,d.yk)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.m,Object.assign({tip:t("tradeHistory-marginBalance-walletBalanceTip")},{children:t("assetsList-walletBalance",{defaultValue:"Wallet Balance"})}),void 0),(0,a.jsx)(f,{children:e},void 0)]},void 0)},O=({assetCode:e,formattedUnpl:t})=>{const{getI18n:s}=(0,d.yk)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.m,Object.assign({tip:s("tradeHistory-marginBalance-unrealizedPNLTip")},{children:s("tradeHistory-marginBalance-unrealizedPNLTitle",{defaultValue:"Unrealized PNL"})}),void 0),(0,a.jsx)(f,{children:t},void 0)]},void 0)},A=({assetCode:e,formattedAvailableBalance:t})=>{const{getI18n:s}=(0,d.yk)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.m,Object.assign({tip:s("tradeHistory-marginBalance-availableForOrderTip")},{children:s("tradeHistory-marginBalance-availableForOrderTitle",{defaultValue:"Available for Order"})}),void 0),(0,a.jsx)(f,{children:t},void 0)]},void 0)},B=({formattedAssetContribution:e})=>{const{getI18n:t}=(0,d.yk)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.m,Object.assign({tip:t("AssetContributionTip")},{children:t("AssetContribution",{defaultValue:"Asset Contribution"})}),void 0),(0,a.jsx)(f,{children:`${e} USD`},void 0)]},void 0)},Z=({assetCode:e,formattedMarginBalance:t})=>{const{getI18n:s}=(0,d.yk)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Z,Object.assign({variant:"caption",__css:{color:"t.third"}},{children:s("tradeHistory-marginBalanceLabel",{defaultValue:"Margin Balance"})}),void 0),(0,a.jsx)(f,{children:t},void 0)]},void 0)},I=o.memo((e=>{const{assetMode:t=!1}=(0,c.F7)(),s=t,{assetLogo:o,assetCode:i,formattedWalletBalance:n,formattedUnpl:r,formattedAvailableBalance:l,formattedAssetContribution:d,formattedMarginBalance:g,enable:x}=e;return(0,a.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,a.jsx)(w,{assetLogo:o,assetCode:i,enable:x},void 0),(0,a.jsx)(y,{children:(0,a.jsx)(C,{formattedWalletBalance:n},void 0)},void 0),(0,a.jsx)(y,{children:(0,a.jsx)(O,{assetCode:i,formattedUnpl:r},void 0)},void 0),(0,a.jsx)(y,{children:(0,a.jsx)(Z,{assetCode:i,formattedMarginBalance:g},void 0)},void 0),(0,a.jsx)(y,{children:s?(0,a.jsx)(B,{formattedAssetContribution:d},void 0):(0,a.jsx)(A,{assetCode:i,formattedAvailableBalance:l},void 0)},void 0)]}),void 0)})),k=o.memo((e=>{const{assetMode:t=!1}=(0,c.F7)(),s=t,{assetLogo:o,assetCode:i,formattedWalletBalance:n,formattedUnpl:r,formattedAvailableBalance:l,formattedAssetContribution:d,formattedMarginBalance:g,enable:x}=e;return(0,a.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,a.jsx)(w,{assetLogo:o,assetCode:i,enable:x},void 0),(0,a.jsxs)("div",Object.assign({className:"row-grid"},{children:[(0,a.jsx)("div",Object.assign({className:"walletBalance"},{children:(0,a.jsx)(C,{formattedWalletBalance:n},void 0)}),void 0),(0,a.jsx)("div",Object.assign({className:"unrealizedPNL"},{children:(0,a.jsx)(O,{assetCode:i,formattedUnpl:r},void 0)}),void 0),(0,a.jsx)("div",Object.assign({className:"marginBalance"},{children:(0,a.jsx)(Z,{assetCode:i,formattedMarginBalance:g},void 0)}),void 0),s?(0,a.jsx)("div",Object.assign({className:"availableBalance"},{children:(0,a.jsx)(B,{formattedAssetContribution:d},void 0)}),void 0):(0,a.jsx)("div",Object.assign({className:"availableBalance"},{children:(0,a.jsx)(A,{assetCode:i,formattedAvailableBalance:l},void 0)}),void 0)]}),void 0)]}),void 0)})),N={position:"relative",flexDirection:"column",flex:"1 0",".action-bar":{display:"flex",alignItems:"center",height:32,pt:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-wrap":{fontSize:"12px",color:"t.primary",py:15,borderBottom:"1px solid",borderColor:"line","&:last-of-type":{mb:102,borderBottom:"none"},"& .row-item":{justifyContent:"space-between",alignItems:"center",py:"minor"},"& .transfer":{color:"t.yellow",fontSize:1}}},S={position:"relative",flexDirection:"column",height:"100%",".action-bar":{display:"flex",alignItems:"center",height:32,pt:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-list":{height:"calc(100% - 32px)",overflow:"auto","&::-webkit-scrollbar":{display:"none"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},".row-wrap":{fontSize:"12px",color:"t.primary",py:15,borderBottom:"1px solid",borderColor:"line","&:last-of-type":{mb:15,borderBottom:"none"},".row-grid":{display:"grid",alignItems:"end",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gridGap:"12px 16px",gridTemplateAreas:'"walletBalance unrealizedPNL"\n        "marginBalance availableBalance"',"& .unrealizedPNL, & .availableBalance":{textAlign:"right"}},"& .row-item":{justifyContent:"space-between",alignItems:"center",py:"minor"},"& .transfer":{color:"t.yellow",fontSize:1}}},z=o.memo((({isMobile:e,loading:t,emptyText:s,data:o,hideZeroAsset:i,toggleZeroAsset:n})=>(0,a.jsxs)(x.Z,Object.assign({sx:e?N:S},{children:[(0,a.jsx)(m.Z,{fullScreen:!0,show:t},void 0),(0,a.jsx)(h,{hideZeroAsset:i,toggleZeroAsset:n},void 0),t||o&&o.length?(0,a.jsx)(a.Fragment,{children:e?o.map((e=>(0,a.jsx)(I,Object.assign({},e),e.assetCode))):(0,a.jsx)("div",Object.assign({className:"row-list"},{children:o.map((e=>(0,a.jsx)(k,Object.assign({},e),e.assetCode)))}),void 0)},void 0):s]}),void 0)));var L=s(7688),R=s(5163),T=s(68326),M=s(62242);var _=function(e){var t=function(e){return(0,R.__assign)((0,R.__assign)({},e),{expandable:(0,R.__assign)({defaultExpandAllRows:e.defaultExpandAllRows,defaultExpandedRowKeys:e.defaultExpandedRowKeys,expandedRowKeys:e.expandedRowKeys,expandedRowRender:e.expandedRowRender,expandedRowClassName:e.expandedRowClassName,expandIcon:e.expandIcon,expandIconColumnIndex:e.expandIconColumnIndex,indentSize:e.indentSize,onExpand:e.onExpand,onExpandedRowsChange:e.onExpandedRowsChange},e.expandable)})}(e);return o.createElement(T.ZP,(0,R.__assign)({direction:(0,M.Z)()},t))};_.displayName="Table";const F=_,H=({hideZeroAsset:e,toggleZeroAsset:t})=>{const{getI18n:s}=(0,d.yk)(),o="hideZeroAsset",i=s(o,{defaultValue:"Hide Zero Assets"});return(0,a.jsx)(x.Z,Object.assign({sx:{alignItems:"center",justifyContent:"flex-end",position:"absolute",top:"-40px",right:"28px",zIndex:"999",height:"40px"}},{children:(0,a.jsxs)(x.Z,Object.assign({sx:{alignItems:"center",fontSize:[1,0],color:"t.third",cursor:["auto","pointer"],lineHeight:["30px","24px"]},onClick:t},{children:[(0,a.jsx)(b.Z,{name:o,checked:e},void 0),(0,a.jsx)(p.Z,Object.assign({sx:{userSelect:"none"}},{children:i}),void 0)]}),void 0)}),void 0)},E={overflow:"visible",position:"relative",".rc-table-container":{overflow:"auto","&::-webkit-scrollbar-track":{bg:"position.bg"},"&::-webkit-scrollbar-corner":{bg:"position.bg"}},".rc-table-body":{"&::-webkit-scrollbar-track":{bg:"position.bg"},"&::-webkit-scrollbar-corner":{bg:"position.bg"},"tr:not(:first-child)":{td:{borderBottom:"1px solid",borderBottomColor:"newLine"}}},table:{borderSpacing:0,width:"100%",borderBottom:"1px solid",borderBottomColor:"newLine",borderCollapse:"collapse"},"thead tr":{height:"32px"},"tbody tr":{height:"40px"},"th, td":{textAlign:"left",bg:"position.bg"},thead:{verticalAlign:"bottom",th:{fontWeight:400}},"& .assets-row":{color:"t.primary",fontSize:[0]}},P=({loading:e,emptyText:t,columns:s,data:o=[],hideZeroAsset:i,toggleZeroAsset:n})=>(0,a.jsxs)(x.Z,Object.assign({sx:Object.assign({height:"100%"},E)},{children:[(0,a.jsx)(m.Z,{inner:!0,fullScreen:!0,show:e},void 0),(0,a.jsx)(H,{hideZeroAsset:i,toggleZeroAsset:n},void 0),(0,a.jsx)(L.Z,{children:({width:e,height:i})=>(0,a.jsx)(F,{className:"assets-table",rowClassName:"assets-row",tableLayout:"auto",useFixedHeader:"true",scroll:{y:i-40},style:{width:e,height:i},rowKey:"assetCode",data:o,emptyText:t,columns:s},void 0)},void 0)]}),void 0),U=o.memo((()=>{const{getI18n:e}=(0,d.yk)(),{assetMode:t=!1}=(0,c.F7)(),s=t;let x=!1;try{x=JSON.parse(window.localStorage.getItem("futures-hideZeroAssets"))}catch(e){}const[m,b]=(0,o.useState)(!!x),p=(0,o.useCallback)((()=>{const e=!m;b(e),window.localStorage.setItem("futures-hideZeroAssets",String(e))}),[m]),h=(0,i.I0)(),v=(0,g.UW)(),j=(0,o.useMemo)((()=>v.filter((e=>!m||0!==e.walletBalance||0!==e.upnl||(s?0!==e.assetContribution:0!==e.availableBalance)))),[m,v,s]),u=(0,g.nN)(j),f=(0,g.Y0)(),y=(0,a.jsx)(l.pB,Object.assign({className:"empty"},{children:e("noasset",{defaultValue:"You have no asset."})}),void 0),[w,C]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{C(!0),h.transferAssets.getUserAssets().finally((()=>C(!1)))}),[h.transferAssets]),(0,a.jsx)(n.Z,Object.assign({height:"100%",px:"sm"},{children:(0,a.jsx)(r.Z,{children:({isMobile:e,isIPad:t})=>(0,a.jsx)(a.Fragment,{children:t?(0,a.jsx)(z,{isMobile:e,loading:w,emptyText:y,data:u,hideZeroAsset:m,toggleZeroAsset:p},void 0):(0,a.jsx)(P,{loading:w,emptyText:y,columns:f,data:u,hideZeroAsset:m,toggleZeroAsset:p},void 0)},void 0)},void 0)}),void 0)}))}}]);