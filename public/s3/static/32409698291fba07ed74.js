"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[1766],{31766:(e,a,r)=>{r.r(a),r.d(a,{default:()=>i});var c=r(2784),s=r(4946),t=r(33073),T=r(38896),n=r(544);const i=()=>{const e=(0,t.i)(),a=(0,T._n)(),{isConnectWalletSucceeded:r}=(0,n.CR)(),i=(0,c.useRef)(!1);return(0,c.useEffect)((()=>{a&&!i.current&&e&&r&&(i.current=!0,s.ee.emit("SHOW_DEPOSIT_LITE_DRAWER",void 0))}),[a,e,r]),null}},33073:(e,a,r)=>{r.d(a,{k:()=>d,i:()=>u});var c=r(94106),s=r(60520),t=r(33470),T=r(38896),n=r(39591),i=r(5271);const u=()=>{const e=(0,T.KQ)();return!e.loading&&!e.isError&&0===Object.values(e).reduce(((e,a)=>e+((null==a?void 0:a.walletBalance)||0)),0)},d=()=>{const[e,a]=(0,c.qo)({name:[s.T.SIDE,s.T.UNIT_AMOUNT]}),r=(({side:e})=>{const a=(0,n.Z)({lastPriceType:"trade"}),[r]=(0,T.KK)(),{maxBuyUnitAmount:c,maxSellUnitAmount:s}=(0,T.l_)({reduceOnly:r,orderPrice:a}),{pricePrecision:u}=(0,T.j2)();return e===i.hp.BUY?(0,t.Jp)(c).toFixed(u,1):(0,t.Jp)(s).toFixed(u,1)})({side:e}),d=u(),_=0===Number(r);return{maxAvailableBalance:r,amount:a,isInsufficient:!_&&Number(a||0)>Number(r),isZeroBalance:d,isOrderBookEmpty:_}}},39591:(e,a,r)=>{r.d(a,{Z:()=>T});var c=r(94106),s=r(38896),t=r(60520);const T=({lastPriceType:e})=>{const[a,r,T,n]=(0,c.qo)({name:[t.T.LIMIT_PRICE,t.T.TRIGGER_PRICE,t.T.ACTIVATE_PRICE,t.T.ACTIVATE_PRICE_WORKING_TYPE]}),[i]=(0,s.K5)(),u="MARKET"===i,d="TRAILING_STOP_MARKET"===i,_="trade"===e,l=(0,s.uH)(u&&_||d&&!T&&"CONTRACT_PRICE"===n),{bidPrice:o,askPrice:R}=(0,s.y$)(u&&!_),E=(0,s.aJ)(d&&!T&&"MARK_PRICE"===n);let I;switch(i){case"LIMIT":case"STOP":case"TAKE_PROFIT":case"POST_ONLY":I=a;break;case"MARKET":switch(e){case"trade":I=l;break;case"bid":I=o;break;case"ask":I=R}break;case"STOP_MARKET":case"TAKE_PROFIT_MARKET":I=r;break;case"TRAILING_STOP_MARKET":I=T||("MARK_PRICE"===n?E:l)}return Number(I)||0}}}]);