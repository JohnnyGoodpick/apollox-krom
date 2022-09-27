"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[637],{41980:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(5163),s=i(2784),l=i(70047);const n=function(e){return s.createElement(l.Z,(0,a.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),s.createElement("path",{d:"M12 9a1 1 0 100-2 1 1 0 100 2zm0 8a1 1 0 001-1v-5a1 1 0 10-2 0v5a1 1 0 001 1z"}),s.createElement("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z",clipRule:"evenodd"}))}},1637:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var a=i(52322),s=i(2784),l=i(39727),n=i(70993),r=i(98492),o=i(19526),d=i(37147),c=i(76695),u=i(23141),x=i(70899),m=i(35635),g=i(52613),p=i(35102),h=i(49967),v=i(83166),j=i(86778),y=i(20512);const b=s.memo((()=>{const{getI18n:e}=(0,n.yk)(),{handleHideOtherPairs:t,checked:i}=(0,s.useContext)(c.Z);return(0,a.jsx)("div",Object.assign({className:"action-bar"},{children:(0,a.jsxs)(m.Z,Object.assign({sx:{alignItems:"center",color:"t.third"},onClick:()=>t(!i)},{children:[(0,a.jsx)(j.Z,{name:"hidePairs",checked:i,onChange:()=>!1},void 0),(0,a.jsx)(y.Z,Object.assign({variant:"caption",sx:{userSelect:"none"}},{children:e("hideOtherSymbol",{defaultValue:"Hide Other Symbols"})}),void 0)]}),void 0)}),void 0)}));var f=i(5163),O=(0,s.forwardRef)((function(e,t){return s.createElement(g.Z,(0,f.__assign)({ref:t,as:"div",tx:"tag",variant:"default"},e,{__css:{display:"inline-block"}}))}));O.displayName="Tag";const w=O;var Z=i(74568);const S=({children:e})=>(0,a.jsx)(y.Z,Object.assign({variant:"caption",__css:{color:"t.third"}},{children:e}),void 0),T=e=>{var{color:t="t.primary"}=e,i=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(i[a[s]]=e[a[s]])}return i}(e,["color"]);return(0,a.jsx)(y.Z,Object.assign({variant:"captionSub",color:t},i),void 0)},V=({children:e,sx:t={}})=>(0,a.jsx)(m.Z,Object.assign({className:"row-item",sx:t},{children:e}),void 0),k=" / ",C=({symbolName:e,side:t,positionSide:i,nextPair:s,nextType:l,status:n})=>{const{getI18n:r}=(0,x.ZK)(),o=(e=>{switch((e||"").toLowerCase()){case"canceled":return"gray";case"filled":return"green";case"partial fill":default:return"default"}})(n);return(0,a.jsxs)(V,Object.assign({sx:{pb:"10px !important"}},{children:[(0,a.jsxs)("div",Object.assign({className:"symbol-wrap"},{children:[e?(0,a.jsxs)("div",Object.assign({className:"symbolText"},{children:[(0,a.jsx)("div",Object.assign({className:"symbol"},{children:e.symbol}),void 0),(0,a.jsx)("div",{children:`${e.contractTypeI18n} ${e.deliveryDateFormat}`},void 0)]}),void 0):(0,a.jsx)("div",Object.assign({className:"symbolText"},{children:s}),void 0),(0,a.jsx)(y.Z,Object.assign({variant:"caption",sx:{color:"BUY"===t?"buy":"sell"}},{children:"BUY"===t?`${l} / ${r(`sideBuy${i}`,{defaultValue:"Buy"})}`:`${l} / ${r(`sideSell${i}`,{defaultValue:"Sell"})}`}),void 0)]}),void 0),(0,a.jsx)(w,Object.assign({variant:o,sx:{py:"2px",fontSize:0}},{children:r(`status-${(0,d.No)(n)}`,{defaultValue:n})}),void 0)]}),void 0)},P=(0,s.memo)((e=>{const{side:t,status:i,reduceOnly:l,timeInForce:r,positionSide:o="BOTH",type:d,activatePrice:u,priceRate:p,workingType:h}=e,{getI18n:v}=(0,x.ZK)(),{getI18n:j}=(0,n.yk)(),{useColumn:y}=(0,s.useContext)(c.Z),b=y(e),{symbolName:f,nextDate:O,nextPair:w,nextAvgPrice:P,nextPrice:I,nextType:N,nextAmount:E,nextFilled:M,nextTriggerConditions:R}=b,_=(0,s.useMemo)((()=>[{label:[v("filled",{defaultValue:"Filled"}),v("amount",{defaultValue:"Amount"})].join(k),value:[M,E].join(k)},{label:[v("average",{defaultValue:"Average"}),v("price",{defaultValue:"Price"})].join(k),value:[P,I].join(k)},{label:v("reduceOnly",{defaultValue:"Reduce Only"}),value:l?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{label:j("orderType-postOnly",{defaultValue:"Post Only"}),value:"GTX"===r?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{label:j("time",{defaultValue:"Time"}),value:O}]),[v,M,E,P,I,l,j,r,O]);return(0,a.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,a.jsxs)(g.Z,Object.assign({px:"16px"},{children:[(0,a.jsx)(C,{symbolName:f,side:t,positionSide:o,nextPair:w,nextType:N,status:i},void 0),_.map((({label:e,value:t})=>(0,a.jsxs)(V,{children:[(0,a.jsx)(S,{children:e},void 0),(0,a.jsx)(T,{children:t},void 0)]},e))),(0,a.jsxs)(V,{children:[(0,a.jsx)(S,{children:v("triggerConditions",{defaultValue:"Trigger Conditions"})},void 0),(0,a.jsxs)(m.Z,Object.assign({alignItems:"center"},{children:[(0,a.jsx)(T,{children:R},void 0),(0,a.jsx)(Z.Z,{type:d,workingType:h,activatePrice:u,priceRate:p},void 0)]}),void 0)]},"triggerConditions")]}),void 0),(0,a.jsx)("div",{className:"line"},void 0)]}),void 0)})),I=(0,s.memo)((e=>{const{side:t,status:i,reduceOnly:l,timeInForce:r,positionSide:o="BOTH",type:d,activatePrice:u,priceRate:p,workingType:h}=e,{getI18n:v}=(0,x.ZK)(),{getI18n:j}=(0,n.yk)(),{useColumn:y}=(0,s.useContext)(c.Z),b=y(e),{symbolName:f,nextDate:O,nextPair:w,nextAvgPrice:V,nextPrice:k,nextType:P,nextAmount:I,nextFilled:N,nextTriggerConditions:E}=b,M=(0,s.useMemo)((()=>[{columnKey:"filled",label:v("filled",{defaultValue:"Filled"}),value:N},{columnKey:"amount",label:v("amount",{defaultValue:"Amount"}),value:I},{columnKey:"reduceOnly",label:v("reduceOnly",{defaultValue:"Reduce Only"}),value:l?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{columnKey:"average",label:v("average",{defaultValue:"Average"}),value:V},{columnKey:"price",label:v("price",{defaultValue:"Price"}),value:k},{columnKey:"postOnly",label:j("orderType-postOnly",{defaultValue:"Post Only"}),value:"GTX"===r?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{columnKey:"date",label:j("time",{defaultValue:"Time"}),value:O}]),[v,N,I,l,V,k,j,r,O]);return(0,a.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,a.jsxs)(g.Z,Object.assign({px:"16px"},{children:[(0,a.jsx)(C,{symbolName:f,side:t,positionSide:o,nextPair:w,nextType:P,status:i},void 0),(0,a.jsxs)("div",Object.assign({className:"row-grid"},{children:[M.map((({label:e,value:t,columnKey:i})=>(0,a.jsxs)("div",Object.assign({className:i},{children:[(0,a.jsx)(S,{children:e},void 0),(0,a.jsx)(T,{children:t},void 0)]}),i))),(0,a.jsxs)("div",Object.assign({className:"triggerConditions"},{children:[(0,a.jsxs)(m.Z,Object.assign({alignItems:"center"},{children:[(0,a.jsx)(S,{children:v("triggerConditions",{defaultValue:"Trigger Conditions"})},void 0),(0,a.jsx)(Z.Z,{type:d,workingType:h,activatePrice:u,priceRate:p},void 0)]}),void 0),(0,a.jsx)(T,{children:E},void 0)]}),"triggerConditions")]}),void 0)]}),void 0),(0,a.jsx)("div",{className:"line"},void 0)]}),void 0)})),N={position:"relative",flexDirection:"column",flex:"1 0",".action-bar":{display:"flex",alignItems:"center",height:32,pt:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-wrap":{color:"t.primary",pt:15,".line":{bg:"line",height:"1px",mx:"16px",mt:"16px"},"&:last-of-type":{mb:102},"& .row-item":{justifyContent:"space-between",alignItems:"center",py:"minor"},"& .symbol-wrap":{display:"flex",flexDirection:"column",fontSize:0,"& .symbolText":{display:"flex",alignItems:"center"},"& .symbol":{mr:"minor",fontSize:1,fontWeight:"medium"}}}},E={position:"relative",flexDirection:"column",height:"100%",".action-bar":{display:"flex",alignItems:"center",height:32,pb:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-list":{height:"calc(100% - 32px)",overflow:"auto","&::-webkit-scrollbar":{display:"none"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},".row-wrap":{color:"t.primary",pt:15,".line":{bg:"line",height:"1px",mx:"16px",mt:"16px"},"&:last-of-type":{mb:20},".row-grid":{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridGap:"12px 16px",gridTemplateAreas:'"filled amount reduceOnly"\n        "average price postOnly"\n        "triggerConditions date ."',"& .reduceOnly, & .postOnly":{textAlign:"right"}},"& .row-item":{justifyContent:"space-between",alignItems:"center"},"& .symbol-wrap":{display:"flex",alignItems:"center",fontSize:0,"& .symbolText":{display:"flex",alignItems:"center",mr:"xs"},"& .symbol":{mr:"minor",fontSize:1,fontWeight:"medium"}}}};var M=i(97103),R=i(20766);const _=({isMobile:e,items:t,loading:i,hasMore:l,loadMore:n,timeRange:r,onSearch:o})=>{const{emptyText:d}=s.useContext(c.Z);return(0,a.jsxs)(m.Z,Object.assign({sx:e?N:E},{children:[(0,a.jsx)(h.Z,{fullScreen:!0,show:i},void 0),(0,a.jsxs)(g.Z,Object.assign({px:"16px"},{children:[(0,a.jsx)(b,{},void 0),e?(0,a.jsx)(R.Z,{onSearch:o},void 0):(0,a.jsx)(M.Z,Object.assign({},r,{onSearch:o,loadMore:n}),void 0)]}),void 0),i||t&&t.length?(0,a.jsxs)(a.Fragment,{children:[e?t.map(((e,t)=>(0,a.jsx)(P,Object.assign({},e),t))):(0,a.jsx)("div",Object.assign({className:"row-list"},{children:t.map(((e,t)=>(0,a.jsx)(I,Object.assign({},e),t)))}),void 0),l?(0,a.jsx)(p.Z,{showMore:n,check:{offset:200},loading:i},void 0):null]},void 0):(0,a.jsx)(v.pB,Object.assign({className:"empty"},{children:d}),void 0)]}),void 0)};var z=i(98866),A=i(95211),B=i(20952),H=i(76743);const Y={pl:0,alignItems:"center",borderBottom:"1px solid",borderBottomColor:"newLine"},K=s.memo((({headers:e=[],sx:t={}})=>{const[i,l]=(0,s.useState)("down"),n=e=>{l(e?"up":"down")};return(0,a.jsx)(m.Z,Object.assign({__css:Y,sx:t},{children:e.map((({text:e,overlay:t,sx:s={}},l)=>t?(0,a.jsx)(B.Z,Object.assign({trigger:"click",overlay:t,sx:{userSelect:"none",display:"flex"},enablePortal:!0,style:(0,x.VE)(l),onVisibleChange:n},{children:(0,a.jsxs)(m.Z,Object.assign({"data-area":"left",sx:{alignItems:"center",cursor:"pointer",height:"24px"}},{children:[(0,a.jsx)(y.Z,Object.assign({title:e,sx:Object.assign({fontSize:0,color:"up"===i?"primary":"t.third"},s)},{children:e}),void 0),(0,a.jsx)(H.Z,{sx:{transform:"up"===i?"rotate(180deg)":"rotate(0deg)",color:"up"===i?"primary":"t.third",ml:"4px"},size:20},void 0)]}),void 0)}),l):(0,a.jsx)(m.Z,Object.assign({"data-area":"left",style:(0,x.VE)(l),sx:{alignItems:"center",cursor:t?"pointer":"auto"}},{children:(0,a.jsx)(y.Z,Object.assign({title:e,sx:Object.assign({fontSize:0,color:"t.third"},s)},{children:e}),void 0)}),l)))}),void 0)})),F=({type:e,onSearch:t,loadMore:i,sx:r={}})=>{(0,l.v9)((e=>e.pageStore.page));const{isMobile:o}=(0,n.Fs)(),{getI18n:d}=(0,n.yk)(),{handleHideOtherPairs:u,checked:x}=(0,s.useContext)(c.Z),g="hideOtherSymbol",p=d(g,{defaultValue:"Hide Other Symbol"});return(0,a.jsxs)(m.Z,Object.assign({__css:{flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},sx:r},{children:[(0,a.jsx)(M.Z,{type:e,onSearch:t,loadMore:i},void 0),(0,a.jsxs)(m.Z,Object.assign({sx:{alignItems:"center",fontSize:[1,0],color:"t.third",cursor:["auto","pointer"],lineHeight:["30px","24px"],position:"absolute",top:"-40px",right:"44px",zIndex:"999",height:"40px"},onClick:()=>u(!x)},{children:[(0,a.jsx)(j.Z,{name:g,size:o?18:16,checked:x,onChange:()=>!1},void 0),(0,a.jsx)(y.Z,Object.assign({sx:{userSelect:"none"}},{children:p}),void 0)]}),void 0)]}),void 0)};var $=i(41980),L=i(9221),D=i(4673),W=i(24071),X=i(48437),G=i(83538);const U=e=>(0,a.jsx)(y.Z,Object.assign({__css:{fontWeight:400}},e),void 0),q=s.memo((e=>{const{getI18n:t,i18n:{language:i}}=(0,x.ZK)(),{useColumn:l}=(0,s.useContext)(c.Z),{side:n,status:r,reduceOnly:o,timeInForce:u,positionSide:p="BOTH",symbol:h,orderId:v,id:j,type:b,activatePrice:f,priceRate:O,workingType:w}=e,S=(j&&j.split("_")[0],p),T="BUY"===n?{color:"buy",children:t(`sideBuy${S}`,{defaultValue:"Buy"})}:{color:"sell",children:t(`sideSell${S}`,{defaultValue:"Sell"})},V=l(e),k="canceled"===(null==r?void 0:r.toLowerCase())||"expired"===(null==r?void 0:r.toLowerCase())?"0.5":"1",C=()=>o?t("YES",{defaultValue:"YES"}):t("NO",{defaultValue:"NO"}),P=()=>"GTX"===u?t("YES",{defaultValue:"YES"}):t("NO",{defaultValue:"NO"}),{nextDate:I,nextPair:N,symbolName:E,nextAvgPrice:M,nextPrice:R,nextType:_,nextAmount:z,nextFilled:A,nextTriggerConditions:B,orderType:H,formatedMarkPrice:Y}=V;let K=0;return(0,a.jsx)(g.Z,Object.assign({sx:{width:"100%"}},{children:(0,a.jsx)(g.Z,Object.assign({px:"sm"},{children:(0,a.jsxs)(m.Z,Object.assign({sx:{width:"100%",alignItems:"center",color:"t.secondary",fontSize:[0],height:"40px",borderBottom:"1px solid",borderBottomColor:"newLine","> *":{fontWeight:"normal"},opacity:k,":hover":{backgroundColor:"bg3",".symbol":{color:"t.yellow"}}}},{children:[(0,a.jsx)(y.Z,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:I,sx:{color:"table.timeColor"}},{children:I}),void 0),(0,a.jsx)(y.Z,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:N,className:"symbol"},{children:(0,a.jsx)(W.O,{symbolName:E,fallbackText:h},void 0)}),void 0),(0,a.jsx)(y.Z,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:_},{children:_}),void 0),(0,a.jsx)(y.Z,Object.assign({},T,{"data-area":"left",style:(0,x.VE)(K++),title:T.children}),void 0),(0,a.jsx)(U,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:M},{children:M}),void 0),(0,a.jsx)(U,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:R},{children:(0,a.jsxs)(m.Z,Object.assign({alignItems:"center"},{children:[R,"LIQUIDATION"===H&&(0,a.jsx)(X.m,Object.assign({placement:"right",learnMoreLink:(0,G.C)(D.Wh.LIQ_PRICE,{locale:(0,L.s)(i)}),tip:t("Bankruptcy-Price",{markPrice:Y,defaultValue:"The price is the bankruptcy price at which margin loss reaches zero. The liquidation order will be replaced with the bankruptcy price. The liquidation price (the mark price when liquidated) is {{markPrice}}."})},{children:(0,a.jsx)($.Z,{size:16,ml:"2px"},void 0)}),void 0)]}),void 0)}),void 0),(0,a.jsx)(U,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:A},{children:A}),void 0),(0,a.jsx)(U,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:z},{children:z}),void 0),(0,a.jsx)(U,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:C()},{children:C()}),void 0),(0,a.jsx)(U,Object.assign({"data-area":"left",style:(0,x.VE)(K++),title:P()},{children:P()}),void 0),(0,a.jsxs)(m.Z,Object.assign({alignItems:"center",style:(0,x.VE)(K++)},{children:[(0,a.jsx)("div",Object.assign({style:{whiteSpace:"pre",textAlign:"left"}},{children:B}),void 0),(0,a.jsx)(Z.Z,{type:b,workingType:w,activatePrice:f,priceRate:O},void 0)]}),void 0),(0,a.jsx)(y.Z,Object.assign({"data-area":"left",sx:D.Pd,style:(0,x.VE)(K++)},{children:t(`status-${(0,d.No)(r)}`,{defaultValue:r||""})}),void 0),(0,a.jsx)(y.Z,{style:(0,x.VE)(K++)},void 0)]}),void 0)}),void 0)}),void 0)})),Q=s.memo((({items:e,loading:t,hasMore:i,loadMore:l,timeRange:n,onSearch:r,emptyText:o})=>{const d=(0,u.g4)(),c=!(!e.length&&t)&&t,m=(0,s.useCallback)((e=>(0,s.createElement)(q,Object.assign({},e,{key:e.orderId}))),[]);return(0,a.jsxs)(z.Z,Object.assign({sx:{position:"relative",px:0},"data-testid":"DataTable"},{children:[(0,a.jsx)(F,Object.assign({},n,{onSearch:r,loadMore:l,sx:{height:"32px",px:"16px"}}),void 0),(0,a.jsxs)(g.Z,Object.assign({sx:{height:"calc(100% - 32px)",overflowX:"auto"}},{children:[(0,a.jsx)(K,{headers:d,sx:{height:"32px",px:"16px",overflowX:"hidden",minWidth:x.ih}},void 0),(0,a.jsx)(A.i,{sx:{height:"calc(100% - 32px)",overflowY:"auto",overflowX:"hidden",minWidth:x.ih},data:e,renderItem:m,loading:c,hasMore:i,loadMore:l,emptyText:o},void 0)]}),void 0)]}),void 0)})),J=s.memo((()=>{const[e]=(0,r.z4)(),{getI18n:t}=(0,x.ZK)(),i=(0,l.I0)(),{isMobile:m,isIPad:g}=(0,n.Fs)(),[p,h]=(0,s.useState)((0,o.OQ)(g?"1w":"1d")),{preHistory:v,loading:j,updateTime:y,hasMore:b,loadMore:f}=(0,u.aM)(100,p.startTime,p.endTime,"MAIN"),{isOrderHistoryHideOtherPairs:O}=(0,r.VX)(),[w,Z]=(0,s.useState)(O),[S,T]=(0,s.useState)("All"),V=(0,s.useCallback)((e=>{Z(e),i.userProfile.save({key:"isOrderHistoryHideOtherPairs",value:e})}),[i.userProfile]),k=(0,s.useCallback)((e=>{T(e)}),[]),C=(0,d.Nm)(v,w,e),P=(0,d.vL)(C,S),I=t("nodata",{defaultValue:"You have no order history."}),N=(0,s.useMemo)((()=>({symbol:e,emptyText:I,checked:w,status:S,handleHideOtherPairs:V,handleStatusFilter:k,useColumn:u.R7})),[w,I,V,k,S,e]);return(0,a.jsx)(c.Z.Provider,Object.assign({value:N},{children:g?(0,a.jsx)(_,{isMobile:m,items:P,loading:j,hasMore:b,loadMore:f,timeRange:p,onSearch:h},void 0):(0,a.jsx)(Q,{items:P,loading:j,hasMore:b,loadMore:f,timeRange:p,onSearch:h,emptyText:I},void 0)}),void 0)}))},74568:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(52322),s=i(23299),l=i(2784),n=i(48437),r=i(70993);const o=l.memo((({type:e,workingType:t,activatePrice:i,priceRate:l})=>{const{getI18n:o,i18n:{language:d}}=(0,r.yk)();if("TRAILING_STOP_MARKET"!==e)return null;const c=o("trailing-stop-market-tip",{defaultValue:"Activation Price: {{activatePrice}}, Trigger Type: {{workingType}}, Callback Rate: {{priceRate}}%. ",activatePrice:Number(i)?Number(i):o("advancedStrategy-marketPrice"),workingType:o("CONTRACT_PRICE"===t?"lastPrice":"tradeHistory-positions-markPriceTitle"),priceRate:l});return(0,a.jsx)(n.m,Object.assign({hideUnderLine:!0,sx:{flex:"none"},learnMoreLink:`/${d}/support/faq/360042299292`,tip:c},{children:(0,a.jsx)(s.Z,{size:16},void 0)}),void 0)}))}}]);