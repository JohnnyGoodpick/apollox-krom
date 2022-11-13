"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[5047],{59546:(e,t,i)=>{i.d(t,{Y5:()=>c,_p:()=>a,f5:()=>d});var n,o=i(86522);function r(e){return/[^\d|.|,|\u3002|\%]/.test(e)}e=i.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,a=function(e,t,i,n){var s="object"!==(0,o.Z)(e)?e:e.target.value;return r(Number(s))?"":~s.indexOf("%")?s:(/\u3002|,/.test(s)&&(s=s.replace(/[\u3002|,]/g,".")),/^0\d/.test(s)?s="0":/^\./.test(s)?s=0+s.substring(0,n+1):Number(s)>=0&&-1!==s.indexOf(".")&&s.split(".")[1].length>=n&&(s=s.replace(new RegExp("^(\\d*\\.\\d{".concat(n,"})\\d*")),"$1")),Number.isNaN(Number(s))?"":(i?t(i,s):t(s),s))},c=function(e){return!/\d*\.?\d+$/.test(e.target.value)&&(e.target.value="")},d=function(e,t){return"Enter"===e.key&&t()};(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(r,"inputCheck","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register((function(e,t){return r(e.key)||e.target.value.length>=t&&e.preventDefault()}),"onKeyPress","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register(a,"onInputChange","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register(c,"onBlur","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register(d,"onKeyDown","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/utils/input.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)},18495:(e,t,i)=>{i.d(t,{a:()=>B,H:()=>T});var n,o=i(5163),r=i(2784),s=i(13980),l=i.n(s),a=i(8301),c=i(12436),d=i.n(c),u=i(61049),p=i.n(u),h=i(18149),m=i.n(h),v=i(62143),f=i(72779),x=i.n(f),g=i(20573),y=i(7688),b=i(28316),j=i(10687),w={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},k=(0,r.memo)((function(e){var t=e.show,i=void 0===t||t,n=e.fullScreen,s=void 0!==n&&n,l=e.inner,a=e.children,c=e.zIndex;if(!i)return a||null;var d=r.createElement(j.Z,{sx:(0,o.__assign)({zIndex:c||"100"},w)});return s?r.createElement(r.Fragment,null,a,r.createElement("div",{style:{position:l?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",zIndex:2e3}},d)):r.createElement(r.Fragment,null,a,d)}));k.show=function(e){var t=(void 0===e?{}:e).fullScreen,i=void 0!==t&&t;n||(n=document.createElement("div"),document.body.appendChild(n)),b.render(r.createElement(k,{fullScreen:i}),n)},k.hide=function(){n&&b.render(r.createElement(k,{show:!1}),n)};const C=k;var S={fontSize:0,textAlign:"center",padding:"8px 6px",color:"t.third"};const E=(0,r.memo)((function(e){var t=e.children,i=(0,o.__rest)(e,["children"]);return r.createElement(v.Z,(0,o.__assign)({sx:S,className:"emptyLine"},i),t)}));var O=i(44613),_=i(74628),Z=i(76699),N=function(){var e=(0,Z.$)().i18n.language||"undefined"!=typeof window&&window.localStorage.i18nextLng||"en";return(0,_.yV)(e)};a.t7.displayName="FixedSizeList";var I,H,P,T=(0,r.memo)((function(e){var t=e.className,i=e.children,n=(0,o.__rest)(e,["className","children"]),s=x()("list-item-entity",t);return r.createElement(r.Fragment,null,r.createElement("div",(0,o.__assign)({className:s},n),i),r.createElement(g.xB,{styles:{".list-item-entity":{display:"flex",alignItems:"center",justifyContent:" space-between",flex:1}}}))})),L=function(){},M=(0,o.__read)([38,40],2),z=M[0],R=M[1],D=function(e){function t(t){var i,n=e.call(this,t)||this;return n.state={isScrolling:!1,isHover:!1,activeId:0,scrollOffset:0},n.renderItem=function(e){var t=e.index,i=e.style,s=n.props,l=s.dataSource,a=s.itemElement,c=s.openShotCut,d=n.state.activeId,u=!!c&&d===t;return r.createElement(r.Fragment,null,r.createElement("div",{style:i,className:"list-item-container"},r.createElement(a,(0,o.__assign)({},l[t],{activeId:d,active:u}))),r.createElement(g.xB,{styles:{".list-item-container":{display:"flex",alignItems:"center",overflowX:"hidden"}}}))},n.renderChild=function(){var e=n.props,t=e.dataSource,i=void 0===t?[]:t,s=e.itemKey,l=e.itemHeight,c=e.loading,d=void 0!==c&&c,u=e.loadWithContent,p=void 0!==u&&u,h=e.direction,m=e.listSx,v=void 0===m?{}:m,f=e.emptyText,x=e.emptyChildren,g=n.state.isScrolling,b=!d&&0===i.length;n.ListStyle=(0,o.__assign)({direction:h},v);var j=r.createElement(y.Z,{className:"list-auto-sizer"},(function(e){var t=e.width,c=e.height;return r.createElement(a.t7,{style:(0,o.__assign)({direction:h},v),className:"fixed-size-list",width:t,height:c,itemCount:i.length,itemSize:l,itemData:i,itemKey:s,overscanCount:g?10:1,outerRef:n.outerListRef,innerRef:n.innerListRef,useIsScrolling:!0},n.renderItem)}));return d?p?r.createElement(r.Fragment,null,r.createElement(C,{fullScreen:!0,inner:!0}),j):r.createElement(C,{fullScreen:!0,inner:!0}):b?r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexGrow:1}},x||(f?r.createElement(E,null,f):null)):j},n.handleScroll=d()(n.handleScroll.bind(n),200),n.handleMouseEnter=n.handleMouseEnter.bind(n),n.handleMouseLeave=n.handleMouseLeave.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n.keyScroll=n.keyScroll.bind(n),n.outerListRef=r.createRef(null),n.innerListRef=r.createRef(null),n.maxHeight=t.itemHeight,n.minHeight=.1,n.eventAttached=!1,n.keys=((i={})[z]=0,i[R]=0,i),n}return(0,o.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.openShotCut&&(this.eventAttached=!0,document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentDidUpdate=function(){this.props.openShotCut&&(this.eventAttached||document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentWillUnmount=function(){this.eventAttached&&(this.eventAttached=!1,document.removeEventListener("keydown",this.handleKeyDown)),this.clearTimer()},t.prototype.shouldComponentUpdate=function(e,t){return m()(e.dataSource,this.props.dataSource)?e.loading!==this.props.loading||e.itemHeight!==this.props.itemHeight||e.listSx!==this.props.listSx:!(t.isScrolling&&this.state.isScrolling||t.isHover!==this.state.isHover)},t.prototype.handleMouseEnter=function(){this.setState({isHover:!0})},t.prototype.handleMouseLeave=function(){this.setState({isHover:!1})},t.prototype.handleScroll=function(){var e=this;this.state.isHover&&(this.setState({isScrolling:!0}),this.clearTimer(),this.timer=setTimeout((function(){e.setState({isScrolling:!1})}),1e3))},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.handleKeyDown=function(e){var t,i=e.keyCode,n=e.metaKey,o=e.ctrlKey,r=this.props,s=r.itemHeight,l=r.dataSource,a=r.openShotCut,c=r.onKeyDownCallback,d=r.tradeType,u=this.state.activeId;if(a&&(13===i||i===z||i===R)&&(e&&e.preventDefault(),e.stopPropagation(),this.keys=((t={})[z]=Math.max(this.minHeight,this.state.scrollOffset-s),t[R]=Math.min(this.state.scrollOffset+s,this.maxHeight),t),this.keys[i]&&this.scrollItem(this.keys[i]),13===i)){var h=l.filter((function(e,t){return t===u})),m=h.length?h[0]:{};p()(c)&&c({data:m,metaKey:n,ctrlKey:o,tradeType:d})}},t.prototype.keyScroll=function(){this.innerListRef.current&&(this.maxHeight=this.innerListRef.current.style.height.replace("px","")||this.props.itemHeight),this.outerListRef.current&&this.outerListRef.current.scrollTo({left:0,top:this.state.scrollOffset,behavior:"auto"})},t.prototype.scrollItem=function(e){this.setState({activeId:Math.floor(e/this.props.itemHeight),scrollOffset:e})},t.prototype.render=function(){var e=this.props,t=e.variant,i=e.sx,n=e.tx,o=e.scrollPerf,s=void 0===o||o;return r.createElement(v.Z,{onScroll:s?this.handleScroll:L,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,__css:{position:"relative",display:"flex",flexDirection:"column",flexGrow:1},className:"list-container",variant:t,sx:i,tx:n},this.renderChild())},t.propTypes={dataSource:l().array.isRequired,itemElement:l().elementType.isRequired,itemHeight:l().number.isRequired,itemKey:l().func,sx:l().object,tx:l().string,variant:l().string,loading:l().bool,openShotCut:l().bool,onKeyDownCallback:l().func,emptyText:l().string,tradeType:l().string},t}(r.Component),B=(H=(I=D).displayName||I.name||"Component",(P=function(e){var t,i=(t=N(),(0,O.cp)(t));return r.createElement(I,(0,o.__assign)({},e,{direction:i}))}).displayName="WithDirection("+H+")",P)},19925:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(5163),o=i(2784),r=i(62143),s=(0,o.forwardRef)((function(e,t){return e.visible?o.createElement(r.Z,(0,n.__assign)({ref:t,variant:"mask"},e,{__css:{position:"fixed",top:0,left:0,bottom:0,right:0}})):null}));s.displayName="Mask";const l=s},74258:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(5163),o=i(2784),r=i(98569);const s=function(e){return o.createElement(r.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fill:"currentColor",d:"M3 4h18v3H3z"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 2H9v2h6V2zm4 5H5v14h14V7zm-8.5 2H8v9h2.5V9zm3 0H16v9h-2.5V9z",fill:"currentColor"}))}},4058:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(5163),o=i(2784),r=i(98569);const s=function(e){return o.createElement(r.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 7H4v3h16V7zm0 7H4v3h16v-3z",fill:"currentColor"}))}},34553:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(5163),o=i(2784),r=i(87938),s=i(92036),l=i(19925),a=i(62143),c=i(48658),d=i(77711),u="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,p=(0,o.forwardRef)((function(e,t){var i=e.open,p=e.title,h=e.titleSx,m=e.containerSx,v=e.contentSx,f=e.mask,x=void 0===f||f,g=e.maskSx,y=e.showMaskOnMobile,b=void 0!==y&&y,j=e.onMaskClick,w=e.onCloseIconClick,k=e.showCloseIcon,C=void 0===k||k,S=e.children,E=e.onPressEnter,O=void 0===E?function(){}:E,_=e.onPressEsc,Z=void 0===_?function(){}:_,N=e.specialCss,I=void 0===N?{}:N,H=e.closeSx,P=void 0===H?{}:H,T=e.closeIconProps,L=void 0===T?{}:T,M=e.showTitleBottomLine,z=void 0===M||M,R=(0,n.__rest)(e,["open","title","titleSx","containerSx","contentSx","mask","maskSx","showMaskOnMobile","onMaskClick","onCloseIconClick","showCloseIcon","children","onPressEnter","onPressEsc","specialCss","closeSx","closeIconProps","showTitleBottomLine"]),D=function(e){13===e.keyCode?O(e):27===e.keyCode&&Z(e)};if((0,o.useEffect)((function(){return i?document.addEventListener("keydown",D):document.removeEventListener("keydown",D),function(){document.removeEventListener("keydown",D)}}),[i]),u((function(){return x&&i?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow"),function(){document.body.style.removeProperty("overflow")}}),[x,i]),!i||"undefined"==typeof document||!document.body)return null;var B=!1;"undefined"!=typeof window&&window.matchMedia("(max-width: 766px)").matches&&(B=!0);var A=(0,n.__assign)({zIndex:"unset"},g),V=x&&(b||!B);return o.createElement(r.ZP,null,o.createElement(s.Z,{__css:(0,n.__assign)({zIndex:"modal",position:"fixed",alignItems:"center",justifyContent:"center",top:0,left:0,bottom:0,right:0},I),sx:m},V&&o.createElement(l.Z,{visible:!0,onClick:function(e){return j&&j(e)},sx:A}),o.createElement(a.Z,(0,n.__assign)({ref:t,__css:{position:"relative",borderRadius:["0px","large","large"],boxShadow:"dialog",backgroundColor:"popupBg",width:["100%","auto"],height:["100%","auto"],color:"t.primary"}},R),C&&o.createElement(a.Z,(0,n.__assign)({__css:{position:"absolute",top:0,right:0,left:"unset",pt:"20px",pr:"md",color:"t.disabled",cursor:"pointer",":hover":{color:"t.third"}}},L,{sx:P,onClick:function(e){return w&&w(e)}}),o.createElement(d.Z,{size:24})),p&&o.createElement(c.Z,{variant:"headline6",className:"modal-title",__css:{pl:"md",pr:"lg",pt:"20px",pb:"19px",borderBottom:"1px solid",borderBottomColor:"line",border:z?"":"none",textAlign:"left"},sx:h},p),o.createElement(a.Z,{className:"style-dialog-body",__css:{p:"md",fontSize:"sm",lineHeight:"20px"},sx:v},S))))}));p.displayName="StyledDialog";const h=p},59745:(e,t,i)=>{i.d(t,{y:()=>s});var n=i(5163),o=i(2784),r=i(62143),s=(0,o.forwardRef)((function(e,t){var i=e.children,s=(0,n.__rest)(e,["children"]);return o.createElement(r.Z,(0,n.__assign)({},s,{ref:t,__css:{position:["fixed","static"],zIndex:[1,"auto"],left:["0px","unset"],bottom:["0px","unset"],pt:"md",pb:["md","0px"],px:["md","0px"],width:["100%","unset"],boxShadow:["0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)","none"],bg:"popupBg"}}),i)}))},24685:(e,t,i)=>{i.d(t,{v:()=>d});var n=i(52322),o=i(29261),r=i(97060),s=i(68598),l=i(92036),a=i(45362);const c={margin:"28px auto 0",flexDirection:"column",alignItems:"center",".tip":{fontSize:"14px",lineHeight:"20px",color:"t.primary"}},d=({apiError:e=!1,confirmTip:t="",onRefresh:i=(()=>{}),onConfirm:d=(()=>{}),children:u})=>{const p=(0,o.zk)("abnormal"),{getI18n:h}=(0,r.yk)();return p||!e?u:(0,n.jsxs)(l.Z,Object.assign({sx:c},{children:[(0,n.jsx)(s.Z,{size:48},void 0),(0,n.jsxs)("div",Object.assign({className:"tip"},{children:[h("apiErrorRefreshTip",{defaultValue:"Data lost due to service malfunction, please refresh the page."}),(0,n.jsx)(a.Z,Object.assign({variant:"quiet",onClick:i},{children:h("refresh",{defaultValue:"Refresh"})}),void 0)]}),void 0),(0,n.jsxs)("div",Object.assign({className:"tip"},{children:[t,(0,n.jsx)(a.Z,Object.assign({variant:"quiet",onClick:d},{children:h("confirmBtn",{defaultValue:"Confirm"})}),void 0)]}),void 0)]}),void 0)}},19739:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(52322),o=i(21209),r=i(48658),s=i(27986),l=i(92036),a=i(45362),c=i(2784),d=i(37227),u=i(33470),p=i(97060),h=i(3638),m=i(11001),v=i(38896),f=i(23131);const x={position:"relative",padding:"20px 24px 24px 24px",width:["calc(100vw - 32px)","384px"],bg:"modalBg",boxShadow:"elevation3",borderRadius:"8px",".title":{marginBottom:"28px",color:"t.primary"},".field":{display:"flex",justifyContent:"space-between",mt:"12px",letterSpacing:"0.16px",fontSize:"14px",lineHeight:"20px",fontWeight:"normal",minHeight:"20px",".label":{color:"t.third","&.highlight":{color:"t.primary",fontWeight:"medium"}},".value":{color:"t.primary",textAlign:"right","&.buy":{color:"t.buy"},"&.sell":{color:"t.sell"},"&.highlight":{fontWeight:"medium"}}},".top-line":{pt:"4px",mt:"16px",borderTop:"0.5px solid",borderTopColor:"line"},".show-again":{display:"flex",mt:"22px",cursor:"pointer",color:"t.secondary",fontSize:"12px",lineHeight:"16px"}},g=({labelExtra:e="",label:t="",value:i="",unit:o="",labelClassName:r="",valueClassName:s="",className:l=""})=>(0,n.jsxs)("div",Object.assign({className:`field ${l}`},{children:[(0,n.jsxs)("div",Object.assign({className:`label ${r}`},{children:[t,e]}),void 0),(0,n.jsxs)("div",Object.assign({className:`value ${s}`},{children:[i," ",o||""]}),void 0)]}),void 0),y=(0,f.nM)(),b=c.memo((({symbol:e,title:t,color:i,orderSide:b,amendedField:j,isMarket:w,limitPrice:k,qty:C,isClose:S,epnl:E,onClose:O,onConfirm:_=(()=>{}),closeTip:Z})=>{const{getI18n:N}=(0,p.yk)(),I=(0,v.AM)()[e]||{},{shortName:H}=(0,d.H)(I,N),{baseAsset:P,quoteAsset:T,marginAsset:L,quantityPrecision:M,pricePrecision:z,equalQtyPrecision:R=2,tickSize:D,marketTakeBound:B}=I,A=(0,h.p)(Number(D)),V=100*+B,{unit:F}=(0,v.F7)(),K=F===m.SW.coin,W=F===m.AO.usdt;let q,G=M;y?K?(q=P,G=R):q=N("Cont"):W?(q=L,G=A):q=P;const[$,U]=(0,c.useState)(!1),Q=(0,c.useCallback)((()=>{return e=void 0,t=void 0,n=function*(){$&&Z(),_(),O()},new((i=void 0)||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}));var e,t,i,n}),[$,Z,_,O]),Y=`(${N("amended",{defaultValue:"Amended"})})`;return(0,n.jsxs)(o.Z,Object.assign({visible:!0,onMaskClick:()=>O(),sx:x},{children:[(0,n.jsx)(r.Z,Object.assign({variant:"title6",className:"title"},{children:N("order-confirmation",{defaultValue:"Order Confirmation"})}),void 0),(0,n.jsx)(g,{labelClassName:"highlight",label:H,value:t,valueClassName:i},void 0),w?(0,n.jsx)(g,{label:N("priceTitle",{defaultValue:"Price"}),value:N("market",{defaultValue:"Market"})},void 0):(0,n.jsx)(g,{label:N("priceTitle",{defaultValue:"Price"}),labelExtra:j===f.y3.PRICE||j===f.y3.BOTH?Y:"",value:(0,u.uf)(k,A),unit:T},void 0),(0,n.jsx)(g,{label:N("orderQtyTitle",{defaultValue:"Order Qty"}),labelExtra:j===f.y3.QUANTITY||j===f.y3.BOTH?Y:"",value:(0,u.uf)(C,G),unit:q},void 0),S&&(0,n.jsx)(g,{label:N("estimatedPNL",{defaultValue:"Estimated PNL"}),className:"top-line",value:(0,u.uf)(E,z),unit:L},void 0),w&&(0,n.jsx)(r.Z,Object.assign({variant:"caption",mt:3,color:"t.sell"},{children:N("orderFailHintV2",{value:V,defaultValue:`Your order will fail should the market price deviate from the marked price by more than ${V}%`})}),void 0),(0,n.jsxs)("label",Object.assign({className:"show-again"},{children:[(0,n.jsx)(s.Z,{defaultChecked:$,onChange:()=>{U(!$)}},void 0),N("dontAskAgain",{defaultValue:"Don’t ask me again"})]}),void 0),(0,n.jsxs)(l.Z,Object.assign({mt:"19px",width:"100%"},{children:[(0,n.jsx)(a.Z,Object.assign({colorStyle:"secondary",onClick:()=>O(),sx:{width:"164px",letterSpacing:"0.16px",mr:"8px",py:"10px"}},{children:N("cancelBtnText",{defaultValue:"Cancel"})}),void 0),(0,n.jsx)(a.Z,Object.assign({colorStyle:i,onClick:Q,sx:{width:"164px",letterSpacing:"0.16px",py:"10px"}},{children:t}),void 0)]}),void 0)]}),void 0)}))},65916:(e,t,i)=>{i.d(t,{O:()=>s});var n=i(52322),o=i(62143);const r={display:"flex",flexDirection:"column",".pair":{fontWeight:"semibold"},".extra":{fontWeight:"normal"}},s=e=>{var{symbolName:t,fallbackText:i=""}=e,s=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(e,["symbolName","fallbackText"]);return(0,n.jsx)(o.Z,Object.assign({__css:r},s,{children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",Object.assign({className:"pair"},{children:t.symbol}),void 0),(0,n.jsx)("div",Object.assign({className:"extra"},{children:`${t.contractTypeI18n} ${t.deliveryDateFormat}`}),void 0)," "]},void 0):i}),void 0)}},39477:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(52322),o=i(2784),r=i(72779),s=i.n(r),l=i(55742),a=i(62143),c=i(92036),d=i(37407),u=i(97060);const p={py:"4px",mt:"6px",bg:"modalBg",boxShadow:"elevation2",borderRadius:"4px",cursor:"pointer",".filter-option":{padding:"10px 32px 10px 16px",color:"t.primary","&:hover":{bg:"line"},"&.active":{color:"t.yellow"},fontSize:"14px"}},h=({workingType:e,changeWorkingType:t,sx:i={}})=>{var r;const{getI18n:h}=(0,u.yk)(),m=(0,o.useMemo)((()=>[{label:h("advancedStrategy-lastPrice",{defaultValue:"Last"}),type:"CONTRACT_PRICE"},{label:h("advancedStrategy-markPrice",{defaultValue:"Mark"}),type:"MARK_PRICE"}]),[h]),v=(0,o.useMemo)((()=>Object.assign({height:"40px",bg:"inputBg",borderRadius:"4px",justifyContent:"center",alignItems:"center",color:"t.primary",minWidth:"80px"},i)),[i]);return(0,n.jsx)(l.ZP,Object.assign({trigger:"hover",sx:{ml:"8px"},overlay:(0,n.jsx)(a.Z,Object.assign({sx:p},{children:m.map((({label:i,type:o})=>(0,n.jsx)("div",Object.assign({className:s()({"filter-option":!0,active:o===e}),onClick:()=>{o!==e&&t(o)}},{children:i}),o)))}),void 0)},{children:(0,n.jsxs)(c.Z,Object.assign({sx:v},{children:[null===(r=m.find((t=>t.type===e)))||void 0===r?void 0:r.label,(0,n.jsx)(d.Z,{ml:"4px",color:"t.third",size:16},void 0)]}),void 0)}),void 0)}},28123:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(52322),o=i(33322),r=i(27986),s=i(2784);const l={display:"flex",mt:"16px","& .checkBox":{height:"16px",width:"16px"},"& .label":{color:"t.primary",fontSize:"12px"}},a=(0,s.memo)((({defaultChecked:e,value:t,label:i,getValue:a,style:c})=>{const[d,u]=(0,s.useState)(e);return(0,n.jsxs)(o.Z,Object.assign({sx:l,style:c,onClick:e=>{e.stopPropagation()}},{children:[(0,n.jsx)(r.Z,{checked:d,onChange:e=>{u(e.currentTarget.checked),a({[t]:e.currentTarget.checked})},className:"checkBox"},void 0),(0,n.jsx)("div",Object.assign({className:"label"},{children:i}),void 0)]}),void 0)})),c=(0,s.memo)((({options:e=[],getValue:t})=>(0,n.jsx)(n.Fragment,{children:e.map((e=>(0,n.jsx)(a,{label:e.label,getValue:t,value:e.value,defaultChecked:e.defaultChecked,style:e.style},e.value)))},void 0)))},87364:(e,t,i)=>{i.d(t,{ZP:()=>y});var n=i(52322),o=i(2784),r=i(28316),s=i(21209),l=i(45362),a=i(62143),c=i(92036),d=i(88236),u=i(34553),p=i(59745),h=i(19614),m=i(59111),v=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const{notificationPosition:f}=m.ll;let x=0;var g;!function(e){e.dialog="dialog",e.styledDialog="styledDialog"}(g||(g={}));const y=new class{constructor(){this.id="",this.show=e=>{var{type:t=g.styledDialog}=e,i=v(e,["type"]);let n=document.getElementById(this.id);if(n||(n=document.createElement("div"),n.id=this.id,document.body.appendChild(n)),r.unmountComponentAtNode(n),t===g.dialog){if(!i.dialogProps)throw new Error("must pass dialogProps");this.showDialog(i,n)}else this.showStyledDialog(i,n)},this.showDialog=(e,t)=>{const{dialogProps:i}=e;requestAnimationFrame((()=>{const{isLight:o}=e;r.render((0,n.jsx)(h.f6,Object.assign({theme:o?h.ib:h.Cs},{children:(0,n.jsxs)(s.Z,Object.assign({sx:Object.assign({width:["298px","360px","360px"],p:"md"},e.sx),visible:!0,onMaskClick:this.close},{children:[null==i?void 0:i.body,(0,n.jsx)(l.Z,Object.assign({mt:["16px","16px","24px"],sz:"l",width:"100%",onClick:this.close},{children:null==i?void 0:i.okText}),void 0)]}),void 0)}),void 0),t)}))},this.showStyledDialog=(e,t)=>{requestAnimationFrame((()=>{const{isLight:i}=e;r.render((0,n.jsx)(h.f6,Object.assign({theme:i?h.ib:h.Cs},{children:(0,n.jsx)(d.Z,Object.assign({queueSize:2,closable:!0,autoHideDuration:4500,anchorOrigin:{vertical:e.isMobile?"top":f.vertical,horizontal:f.horizontal}},{children:(0,n.jsx)(u.Z,Object.assign({open:!0,onMaskClick:this.close,onCloseIconClick:this.close},e),void 0)}),void 0)}),void 0),t)}))},this.close=()=>{const e=document.getElementById(this.id);e&&r.unmountComponentAtNode(e)},this.confirm=e=>{return t=this,i=void 0,s=function*(){var{isLight:t,sx:i,content:r,cancelText:s,okText:d,hasFooter:u=!0}=e,h=v(e,["isLight","sx","content","cancelText","okText","hasFooter"]);return new Promise(((e,m)=>{this.show(Object.assign(Object.assign({},h),{isLight:t,sx:Object.assign({minWidth:"368px"},i),children:(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(a.Z,Object.assign({sx:{mt:"xs",textAlign:"center"}},{children:r}),void 0),u&&(0,n.jsx)(p.y,{children:(0,n.jsxs)(c.Z,{children:[s&&(0,n.jsx)(l.Z,Object.assign({flexGrow:1,variant:"outline",onClick:m,sz:"l",sx:{boxShadow:"none",border:"1px solid",borderColor:"dropdown.hoverBg",color:"t.primary",mr:3,width:.5,"&:hover":{borderColor:"t.yellow300",color:"t.yellow300",bg:"transparent !important"}}},{children:s}),void 0),d&&(0,n.jsx)(l.Z,Object.assign({sx:{width:.5},sz:"l",flexGrow:1,onClick:e},{children:d}),void 0)]},void 0)},void 0)]},void 0)}))}))},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function l(e){try{a(s.throw(e))}catch(e){n(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}a((s=s.apply(t,i||[])).next())}));var t,i,r,s},this.id=`uikit-dialog${x}`,x++}}},77376:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(33656);const o=({children:e})=>{const{isMobile:t,isIPad:i}=(0,n.F)();return e&&e({isMobile:t,isIPad:i})}},18046:(e,t,i)=>{i.d(t,{Z:()=>p});var n=i(52322),o=i(62143),r=i(4058),s=i(45219);const l={minWidth:"150px",backgroundColor:"rgba(255, 0, 0, .2)","& .sort-item":{boxShadow:"none !important"}},a={color:"t.primary",display:"flex",zIndex:1e4,backgroundColor:"popupBg",justifyContent:"space-between",alignItems:"center",padding:"8px 2px",fontSize:"12px",boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.3)","&:first-child":{marginTop:"16px"}},c=(0,s.W6)((()=>(0,n.jsx)(r.Z,{color:"t.third",size:20},void 0))),d=(0,s.W8)((({value:e})=>(0,n.jsxs)(o.Z,Object.assign({sx:a,className:"sort-item"},{children:[e,(0,n.jsx)(c,{},void 0)]}),void 0))),u=(0,s.JN)((({children:e})=>(0,n.jsx)(o.Z,Object.assign({sx:l},{children:e}),void 0))),p=({items:e,onSort:t})=>(0,n.jsx)(u,Object.assign({transitionDuration:100,useDragHandle:!0,onSortEnd:({oldIndex:i,newIndex:n},o)=>{o.stopPropagation(),o.preventDefault();const r=e.map((e=>e.value)),[s]=r.splice(i,1);r.splice(n,0,s),t(r)}},{children:e.map(((e,t)=>(0,n.jsx)(d,{value:e.label,index:t},e.value)))}),void 0)}}]);