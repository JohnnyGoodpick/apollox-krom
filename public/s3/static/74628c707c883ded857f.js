"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[706],{60706:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(52322),o=i(2784),a=i(72779),r=i.n(a),l=i(77711),n=i(87938),d=i(62143),c=i(92036),p=i(48658),b=i(25181),m=i(77536),x=i(97060),h=i(38896),u=i(4946),v=i(28715),f=i(96406);const j={position:"fixed",width:"100vw",height:"100vh",left:0,right:0,top:0,bottom:0,zIndex:999,mb:"sm",bg:"modalBg",boxShadow:"elevation3",borderRadius:"4px",userSelect:"none",".header-container":{px:["16px","md"],pt:["16px","20px"],pb:["0px","20px"],height:"64px",borderBottomWidth:["0px","0.5px"],borderBottomStyle:["none","solid"],borderBottomColor:"line",".title":{fontSize:"plus",color:"t.primary"},".close":{color:"t.third",fontSize:"24px",cursor:"pointer",":hover":{color:"t.primary"}}},".desc":{fontSize:"14px",lineHeight:"18px",color:"t.third",ml:"25px",mt:"8px",whiteSpace:"pre-line"},".label":{color:"t.primary",fontSize:"md",fontWeight:500},".content":{fontSize:"sm",lineHeight:"20px",letterSpacing:"0.16px",color:"t.secondary",mt:"40px"}},g={mb:"md"},S={pb:0,pr:"sm",".active":{borderBottom:"2px solid",borderColor:"primary",color:"t.primary",fontWeight:"semibold"}},y=(0,o.forwardRef)(((e,t)=>{const{getI18n:i}=(0,x.yk)(),[a,y]=(0,o.useState)({defaultActiveKey:"pm"}),{defaultActiveKey:O="pm"}=a,[C,Z]=(0,o.useState)(!1),k=(0,f.I)((e=>e.visible)),w=(0,f.I)((e=>e.setVisible)),A=(0,f.I)((e=>e.setAssetMode)),P=(0,o.useCallback)((()=>{Z(!1)}),[Z]),M=(0,o.useCallback)((e=>{Z(!0),y(e)}),[]);(0,o.useImperativeHandle)(t,(()=>({showPreferencePanel:M}))),(0,o.useEffect)((()=>u.ee.on("SHOW_PREFERENCE_PANEL",(e=>{M({defaultActiveKey:e})}))),[M]);const z=(0,h.$J)(),I=new Set,N=!!Object.values(z).filter((e=>{if(e.isolated&&"BOTH"===e.positionSide){const{symbol:t}=e;return!I.has(t)&&(I.add(t),!0)}return!1})).length;return(0,o.useMemo)((()=>C||k?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.ZP,{children:(0,s.jsxs)(d.Z,Object.assign({sx:j},{children:[(0,s.jsxs)(c.Z,Object.assign({alignItems:"center",justifyContent:"space-between",className:"header-container"},{children:[(0,s.jsx)(p.Z,Object.assign({className:"title"},{children:i("preference",{defaultValue:"Preference"})}),void 0),(0,s.jsx)(l.Z,{className:"close",onClick:P},void 0)]}),void 0),(0,s.jsx)(d.Z,Object.assign({sx:{px:"sm"}},{children:(0,s.jsxs)(b.Z,Object.assign({defaultActiveKey:O,variant:"trade-next",tabSx:S,tabsSx:g,lazy:!0},{children:[(0,s.jsx)(m.Z,Object.assign({tab:e=>(0,s.jsx)(p.Z,Object.assign({variant:"subtitle2",className:r()({active:e})},{children:i("position-mode",{defaultValue:"Position Mode"})}),void 0),tabKey:"pm"},{children:(0,s.jsx)(v.PositionSideForm,{},void 0)}),void 0),(0,s.jsx)(m.Z,Object.assign({tab:e=>(0,s.jsx)(p.Z,Object.assign({variant:"subtitle2",className:r()({active:e})},{children:i("assetMode",{defaultValue:"Asset Mode"})}),void 0),tabKey:"am"},{children:(0,s.jsx)(v.AssetModeForm,{setConfirmVisible:w,setAssetMode:A,isolatedPositionFlag:N},void 0)}),void 0)]}),void 0)}),void 0)]}),void 0)},void 0),(0,s.jsx)(v.AssetModeDialog,{confirmVisible:k,setConfirmVisible:w},void 0)]},void 0):null),[A,w,k,O,i,P,N,C])}))}}]);