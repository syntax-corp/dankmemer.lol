(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{159:function(e){e.exports=JSON.parse('{"a":{"sandbox":"ARcRKInPqiVatw0xA38SBVPcTxqbesRh-7XKQE4b_eMJ4HTXkOPtwUVzpN6pomL2Ymjwh-uzXgmRu3sS","production":"ASxq51TP92spfbizUkcxNEl7x84Ct717OJ0xgI3A2O_FeIH1F1jEdTBAKWZq5Ml2G3U0p3g57OQlZJOB"}}')},161:function(e,t,n){e.exports=n.p+"214b5921370ab4c1a2257f8c4649a33a.png"},162:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n(141),s=n(12);function i(){return r.a.createElement("a",{id:"discord--login",href:"/oauth/login",rel:"noopener noreferrer"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 245 240"},r.a.createElement("path",{fill:"#ffffff",d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),r.a.createElement("path",{fill:"#ffffff",d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})),"Login with Discord")}var l=n(159),u=(n(20),n(160));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){const[t,n]=Object(a.useState)(e.boxCount),[o,c]=Object(a.useState)(e.activeBox);Object(a.useEffect)(()=>{n(e.boxCount)},[e.boxCount]);const s=t=>{const n=e.boxCount*e.activeBox.price;return t?n:n.toFixed(2)},i=t=>{const n=s(!0),{discountPercent:a}=(()=>{const{Constants:t,discount:n}=e,a={},r=s(!0);let o=0;n&&(o+=n.percent,a.discount=!0);const c=r*((100-(o+t.FLAT_DISCOUNT_PERCENTAGE))/100);return c>=t.MINIMUM_DISCOUNT_VALUE?(o+=t.FLAT_DISCOUNT_PERCENTAGE,a.flat=!0):a.neededUntilFlat=t.MINIMUM_DISCOUNT_VALUE-c,a.discountPercent=o,a})();console.log("Discount Percent: "+a);const r=0!==e.activeBox.id?n*(a/100):0;return t?r:r.toFixed(2)},p=e=>{const t=s(!0)-Number(i());return e?t:t.toFixed(2)};return r.a.createElement(u.PayPalButton,{options:{"client-id":l.a.production},style:{height:50,fontFamily:"'Inter', sans-serif"},createOrder:(t,n)=>{console.log(`Total: ${p(!0)}\nSubtotal: ${s(!0)}\nDiscount: ${i(!0).toFixed(2)}\nSales tax: ${(.0675*p(!0)).toFixed(2)}`);const a=(({total:e,subtotal:t,discount:n,token:a,activeBox:r,boxCount:o,giftUserID:c,salesTax:s})=>({intent:"CAPTURE",purchase_units:[{amount:{value:(Number(e)+Number(s)).toFixed(2),currency_code:"USD",breakdown:{item_total:{currency_code:"USD",value:(Number(t)+Number(s)).toFixed(2)},shipping_discount:{currency_code:"USD",value:n.toFixed(2)}}},description:"Dank Memer Lootbox Purchase",custom_id:`${a}${c?":"+c:""}`,soft_descriptor:"Dank Memer's Box Shop",items:[{name:r.name,unit_amount:{currency_code:"USD",value:r.price.toFixed(2)},quantity:o.toString(),category:"DIGITAL_GOODS"},{name:"Sales tax",unit_amount:{currency_code:"USD",value:s},quantity:"1",category:"DIGITAL_GOODS"}]}],application_context:{brand_name:"Dank Memer's Box Shop",shipping_preference:"NO_SHIPPING",user_action:"PAY_NOW"}}))(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({total:p(!0),subtotal:s(!0),discount:i(!0),token:e.login.token,activeBox:e.activeBox,boxCount:e.boxCount,salesTax:(.0675*p(!0)).toFixed(2)},null===e.giftState?{}:{giftUserID:e.giftState}));return n.order.create(a)},onApprove:(t,n)=>(t=>t.order.capture().then(t=>{e.setFinishState({finish:{success:!0,data:t}})}).catch(t=>{e.setFinishState({finish:{success:!1,err:t}})}))(n)})}n(161);Array(13).fill(0).map((e,t)=>new Audio(`/static/peepo${t}.mp3`));a.Component;const h=document.createElement("div");h.id="ree-overlay",document.body.appendChild(h);n(25),n(162);const f={id:0,name:"Lootbox",description:"Lootbox description",items:[],price:0,randomItem:{chance:0,keyword:"N/A"},yield:"0 - 0"};t.default=Object(s.b)(e=>e,null)((function(e){const t=Object(a.useRef)(),[n,s]=Object(a.useState)([f]),[l,u]=Object(a.useState)(null),[m,d]=Object(a.useState)(f),[h,E]=Object(a.useState)(!1),[b,g]=Object(a.useState)(!1),[x,v]=Object(a.useState)(!1),[y,O]=Object(a.useState)(null),[S,k]=Object(a.useState)(1),[w,I]=Object(a.useState)(null),[N,j]=Object(a.useState)(0),[_,C]=Object(a.useState)(!1);Object(a.useEffect)(()=>{c.all([c("/api/boxes"),c("/api/country"),c("/api/isBanned")]).then(c.spread(({data:{boxes:e,Constants:t}},{data:{isBlocked:n}},a)=>{s(e),d(e[1]),u(t),E(n),g(403===a.status)})).catch(e=>{console.error(e)})},[]),Object(a.useEffect)(()=>w&&N.toString().length<16||N.toString().length>21?C(!0):C(!1),[N]),Object(a.useEffect)(()=>{k(1)},[m]),Object(a.useEffect)(()=>{t.current.value=S},[S]);const D=e=>{const t=S*m.price;return e?t:t.toFixed(2)};Object(a.useEffect)(()=>{console.log(N.length)},[N]);const P=e=>{const t=D(!0),n=(()=>{const e={};let t=0;const n=D(!0)*((100-(t+l.FLAT_DISCOUNT_PERCENTAGE))/100);return n>=l.MINIMUM_DISCOUNT_VALUE?(t+=l.FLAT_DISCOUNT_PERCENTAGE,e.flat=!0):e.neededUntilFlat=l.MINIMUM_DISCOUNT_VALUE-n,e.discountPercent=t,e})(),a=0!==m.id?t*(n.discountPercent/100):0;return e?a:a.toFixed(2)},M=e=>{const t=D(!0)-Number(P());return e?t:t.toFixed(2)},T=e=>{e&&parseInt(S)<100?k(parseInt(S)+1):!e&&parseInt(S)>1&&k(parseInt(S)-1)};return r.a.createElement("div",{id:"store"},r.a.createElement("div",{id:"store-boxes"},n.map((e,a)=>r.a.createElement("div",{className:m.id===a?"store-box active":"store-box",onClick:()=>d(n[a])},r.a.createElement("h2",{className:"store-box-name"},e.name),r.a.createElement("p",{className:"store-box-price"},"$",e.price),m.id===a?r.a.createElement("div",{id:"store-box-counter"},r.a.createElement("div",{id:"store-box-counter-sub",onClick:()=>T(!1)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),r.a.createElement("input",{id:"store-box-counter-num",type:"number",ref:t,defaultValue:1,onInput:e=>k(e.target.value),placeholder:"Boxes"}),r.a.createElement("div",{id:"store-box-counter-ass",onClick:()=>T(!0)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"})))):""))),r.a.createElement("div",{id:"store-items"},r.a.createElement("h2",{id:"store-items-title"},"Possible items"),r.a.createElement("p",{id:"store-items-message"},"Below includes a list of all possible items and the maximum amount of items you could receive from the purchase of a ",r.a.createElement("span",{className:"text-highlight"},m.name),"! Along with these items, you have the chance of getting anywhere in the range of ",r.a.createElement("span",{className:"text-highlight"},m.yield)," coins."),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item name"),r.a.createElement("th",null,"Max. Amount"))),r.a.createElement("tbody",null,m.items.map(({name:e,amount:t},n)=>r.a.createElement("tr",null,r.a.createElement("td",null,e),r.a.createElement("td",null,t)))))),r.a.createElement("div",{id:"store-summary"},r.a.createElement("h2",{id:"store-summary-title"},"Order summary"),r.a.createElement("table",{id:"store-summary-items"},r.a.createElement("tr",null,r.a.createElement("td",null,S,"x ",m.name),r.a.createElement("td",null,"$",Math.round(100*(S*m.price+Number.EPSILON))/100)),r.a.createElement("tr",null,r.a.createElement("td",null,"Sales tax"),r.a.createElement("td",null,"$",l?(.0675*M(!0)).toFixed(2):"")),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{id:"store-summary-total"},"Total: $",Math.round(100*(parseFloat(l?(.0675*M(!0)).toFixed(2):0)+parseFloat(S*m.price)+Number.EPSILON))/100))),r.a.createElement("div",{id:"store-summary-inputs"},r.a.createElement("div",{className:"store-summary-input"},r.a.createElement("input",{name:"tos-privacy",type:"checkbox",onChange:e=>v(e.target.checked)}),r.a.createElement("div",{className:"store-summary-input-tick"},r.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M5 12l5 5l10 -10"}))),r.a.createElement("label",{for:"tos-privacy"},"I agree to Dank Memer\u2019s ",r.a.createElement(o.b,{to:"/terms"},"Terms of Service")," and ",r.a.createElement(o.b,{to:"refunds"},"Refund Policy"),"."),r.a.createElement("br",null)),r.a.createElement("div",{className:"store-summary-input"},r.a.createElement("input",{name:"gift-purchase",type:"checkbox",onChange:e=>I(e.target.checked)}),r.a.createElement("div",{className:"store-summary-input-tick"},r.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M5 12l5 5l10 -10"}))),r.a.createElement("label",{for:"gift-purchase"},"Th",1===S?"is box is":"ese boxes are"," being purchased as a gift.")),w?r.a.createElement("div",{className:"store-summary-input"},r.a.createElement("input",{name:"user-gift",type:"number",onChange:e=>j(e.target.value)}),r.a.createElement("label",{for:"user-gift"},"Gift recipient's user ID.")):"",_?r.a.createElement("div",{id:"checkout-error"},r.a.createElement("p",{id:"checkout-error-notice"},"The ID provided is invalid."),r.a.createElement("p",{id:"checkout-error-help"},"If you are unsure, you can find how to get an user ID ",r.a.createElement("a",{href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID",rel:"noreferrer noopener",target:"_blank"},"here"),".")):""),w?_&&x&&e.login.loggedIn&&l&&0!==m.price:x&&e.login.loggedIn&&l&&0!==m.price?r.a.createElement("div",{id:"store-summary-actions"},r.a.createElement(p,{activeBox:m,boxCount:S,giftState:w,login:e.login,Constants:l,discount:0,setFinishState:e=>{console.log(e)}})):e.login.loggedIn?"":r.a.createElement("div",{id:"store-summary-actions"},r.a.createElement(i,null),r.a.createElement("p",{id:"store-summary-actions-message"},"Before you purchase your ",r.a.createElement("span",{className:"text-highlight"},"shiny")," new boxes. You need to login."))))}))}}]);