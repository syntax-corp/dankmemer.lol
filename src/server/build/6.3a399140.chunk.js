(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(15),r=a.n(s),c=a(6),i=a(63),l=o.a.memo(({success:e,data:t})=>o.a.createElement("main",{className:"content loot"},o.a.createElement("div",{className:`fancy-header absolute-unit${e?"":" red"}`},e?"Success!":"Fucky wucky."),o.a.createElement("div",{style:{fontSize:"22px"}},e?o.a.createElement(o.a.Fragment,null,"Your payment has successfully been made. Your boxes should be deposited directly into your inventory within 5 minutes of completing the purchase.",o.a.createElement("br",null),"If they do not show up after 24 hours, join ",o.a.createElement("a",{href:"https://discord.gg/FnP8m6q"},"the support server")," and mention a mod or a developer for assistance.",o.a.createElement("div",{className:"divider"}),"Additionally, can find your Payment ID below.",o.a.createElement("br",null),"You should store this ID somewhere and make sure you don't lose it - it is necessary if you are experiencing any problems.",o.a.createElement("br",null),o.a.createElement("code",{style:{fontSize:"32px"}},t.id)):o.a.createElement(o.a.Fragment,null,"Something went wrong while trying to ",t?"process":"create"," your payment.",o.a.createElement("br",null),"Please join ",o.a.createElement("a",{href:"https://discord.gg/FnP8m6q"},"the support server")," for help",t?" and contact an administrator with your Payment ID:":".",o.a.createElement("br",null),t&&o.a.createElement("code",{style:{fontSize:"32px"}},t.id))))),u=a(64),d=a.n(u);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){h(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const b=[0,90,180,270],y=Array(7).fill(0).map((e,t)=>new Audio(`/static/peepo${t}.mp3`));let f=-1;const v=()=>(y[++f]||y[f=0]).play();class E extends n.Component{shouldComponentUpdate(e,t){return e.isActive!==this.props.isActive}render(){const{box:e,isActive:t,setActiveBox:a,index:n}=this.props,s=()=>{const e=b[Math.floor(4*Math.random())],t=e%180?200:0,a=e%180?0:90;return{"--direction":`${e}deg`,"--delta-x":`${e>=180?-t:t}px`,"--delta-y":`${e>=180?a:-a}px`,"--offset-x":e%180?0:`${130-260*Math.random()}px`,"--offset-y":e%180?`${40-80*Math.random()}px`:0}};return o.a.createElement("div",{className:"box",onClick:()=>{a(n),v()}},this.props.isActive&&Array(3).fill(0).map((e,t)=>o.a.createElement("div",{key:t,className:"peepo",style:p({},s(),{backgroundImage:`url(${d.a})`})})),o.a.createElement("div",{className:`box-content${t?" active":""}`},o.a.createElement("div",{className:"box-header"},e.name),o.a.createElement("div",{className:"box-description"},e.description),o.a.createElement("div",{className:"box-yield"},"Amount of coins:",o.a.createElement("span",{className:"box-piss"}," ",e.yield),o.a.createElement("br",null),"A ",o.a.createElement("u",null,100*e.randomItem.chance,"%")," chance at a ",o.a.createElement("i",null,e.randomItem.keyword,"-tiered")," item."),o.a.createElement("div",{className:"box-price"},"$",e.price.toFixed(2))))}}var x=o.a.memo(({country:e})=>o.a.createElement("main",{className:"content loot"},o.a.createElement("div",{className:"fancy-header absolute-unit red"},"Sorry."),o.a.createElement("div",{style:{fontSize:"22px"}},"Loot boxes are declared illegal in your country. As a result, you are unable to purchase any boxes.",o.a.createElement("br",null),"Alternatively, click ",o.a.createElement("a",{href:"https://www.google.com/search?q=flights+to+usa"},"here")," to find flights to the Land of Freedom."),o.a.createElement("div",{style:{fontSize:"4px"}},"also ",e," gay lmao"))),g=({total:e,subtotal:t,discount:a,token:n,activeBox:o,boxCount:s})=>({intent:"CAPTURE",purchase_units:[{amount:{value:e,currency_code:"USD",breakdown:{item_total:{currency_code:"USD",value:t},shipping_discount:{currency_code:"USD",value:a}}},description:"Dank Memer Lootbox Purchase",custom_id:n,soft_descriptor:"Dank Memer's Box Shop",items:[{name:o.name,unit_amount:{currency_code:"USD",value:o.price.toFixed(2)},quantity:s.toString(),category:"DIGITAL_GOODS"}]}],application_context:{brand_name:"Dank Memer's Box Shop",shipping_preference:"NO_SHIPPING",user_action:"PAY_NOW"}}),N=a(46);const S=document.createElement("div");S.id="ree-overlay",document.body.appendChild(S);let A=0;var w=async({duration:e=1500,heavyness:t=10,playAudio:a=!0,rage:n=!0}={})=>{A++;const o=()=>(-t/2+Math.random()*t).toFixed(2),s=setInterval(()=>document.body.style.transform=`translate(${o()}px, ${o()}px)`);if(S.style.transition=`opacity ${(e/1e3).toFixed(1)}s`,setTimeout(()=>{clearInterval(s),0==--A&&(document.body.style.transform="",S.className="")},e),n&&(S.className="reeing"),a){const t=new Audio("/static/reeee.mp3");t.volume=.5,await t.play();const a=e/(t.volume/.001);for(;t.volume>.001;)await Object(N.a)(a),t.volume-=.001;t.volume=0}return s},O=a(19),k=a(18);a(65);function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=Object(c.b)(e=>e,null)(class extends n.Component{constructor(...e){super(...e),C(this,"inputRef",Object(n.createRef)()),C(this,"paypalButton",null),C(this,"state",{boxes:null,activeBox:null,Constants:null,bannedCountry:!1,bannedUser:!1,hasAgreed:!1,succeededPayment:null,boxCount:1})}async componentDidMount(){const{boxes:e,Constants:t}=await fetch("/api/boxes").then(e=>e.json());this.setState({boxes:e,Constants:t,activeBox:e[0]});const a=await fetch("/api/country").then(e=>e.json());if(a.isBlocked)return this.setState({blockedCountry:a});if(403===(await fetch("/api/isBanned",{credentials:"same-origin"})).status)return this.setState({bannedUser:!0});await Object(k.a)(`https://www.paypal.com/sdk/js?client-id=${i.a.production}`);const n=window.paypal.Buttons.driver("react",{React:o.a,ReactDOM:r.a});this.paypalButton=o.a.createElement(n,{env:"production",style:{height:45,shape:"rect",color:"blue",tagline:!1},createOrder:(e,t)=>this.createOrder(t),onApprove:(e,t)=>this.onApprove(t)}),this.forceUpdate()}getSubtotal(e){const t=this.state.boxCount*this.state.activeBox.price;return e?t:t.toFixed(2)}getDiscount(e){const{Constants:t}=this.state,{discount:a}=this.props,n=this.getSubtotal(!0);let o=n>=t.MINIMUM_DISCOUNT_VALUE?t.FLAT_DISCOUNT_PERCENTAGE:0;a&&(o+=a.percent);const s=0!==this.state.activeBox.id?n*(o/100):0;return e?s:s.toFixed(2)}getDiscountedSubtotal(e){const t=this.getSubtotal(!0)-Number(this.getDiscount());return e?t:t.toFixed(2)}createOrder(e){return e.order.create(g({total:this.getDiscountedSubtotal(),subtotal:this.getSubtotal(),discount:this.getDiscount(),token:this.props.login.token,activeBox:this.state.activeBox,boxCount:this.state.boxCount})).catch(e=>{console.error(e),this.setState({finish:{success:!1}})})}onApprove(e){return e.order.capture().then(e=>{console.log(e),this.setState({finish:{success:!0,data:e}})}).catch(e=>{console.error(e),this.setState({finish:{success:!1,err:e}})})}onInput({target:e,value:t}){let a=void 0!==t?t:Math.round(e.value);(a<=0||a>=100)&&""!==e.value&&(a=a<=0?1:99,w({duration:1500,intensity:35})),e.value=a,this.setState({boxCount:a})}onCheck({target:e}){this.setState({hasAgreed:e.checked})}async setActiveBox(e){this.setState({activeBox:this.state.boxes[e]})}onInputClick(e){return()=>{let t=this.inputRef.current.value;e?t++:t--,this.onInput({target:this.inputRef.current,value:t})}}render(){const{boxes:e,Constants:t,finish:a,blockedCountry:n,activeBox:s,bannedUser:r}=this.state;if(a)return o.a.createElement(l,a);if(n)return o.a.createElement(x,n);if(r)return o.a.createElement("main",{className:"content loot"},o.a.createElement("div",{className:"fancy-header absolute-unit red"},"Sorry, not sorry."),o.a.createElement("div",{style:{fontSize:"22px"}},"Your account has been banned from purchasing any lootboxes."));if(!e)return o.a.createElement("div",null);const c=this.getDiscountedSubtotal(!0)>t.MINIMUM_PURCHASE_VALUE,i=this.props.login.loggedIn,u=this.state.hasAgreed;let d;u?c?i||(d=o.a.createElement("div",null,"You aren't logged in with your Discord account. ",o.a.createElement("a",{href:"/oauth/login?redirect=/loot"},"Click this")," to log in.")):d=`You haven't met the minimum purchase value of $${t.MINIMUM_PURCHASE_VALUE.toFixed(2)}.`:d="You haven't agreed to the Terms of Service and Refund Policy.";const m=o.a.createElement("div",{className:"header red"},d);return o.a.createElement("main",{className:"content loot"},o.a.createElement("div",{className:"fancy-header absolute-unit"},"Go on, honey. Go pick yourself a boxy box."),o.a.createElement("div",{className:"boxes"},e.map((e,t)=>o.a.createElement(E,{key:e.name,index:t,box:e,isActive:s.id===t,setActiveBox:e=>this.setActiveBox(e)}))),o.a.createElement("span",{className:"discount-notification"},"Purchases above ",o.a.createElement("span",{className:"green"},"$",t.MINIMUM_DISCOUNT_VALUE)," receive a ",o.a.createElement("u",null,t.FLAT_DISCOUNT_PERCENTAGE,"%")," discount!"),o.a.createElement("br",null),this.props.discount&&o.a.createElement("span",{className:"flash-discount-notification"},this.props.discount.name," FLASH SALE: ALL purchases receive a BONUS ",o.a.createElement("u",null,this.props.discount.percent,"%")," discount!",o.a.createElement("br",null),Object(O.a)(this.props.discount.expiry-Date.now()).human," left."),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"header"},"Amount of ",o.a.createElement("span",{className:"selected-box-name"},s.name,"es"),":"),o.a.createElement("input",{className:"box-input",type:"number",onInput:e=>this.onInput(e),defaultValue:"1",ref:this.inputRef}),o.a.createElement("span",{className:"input-btn",onClick:this.onInputClick(!0)},"+"),o.a.createElement("span",{className:"input-btn",onClick:this.onInputClick(!1)},"\u2013"),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"header"},"Subtotal:"),o.a.createElement("div",{className:"dolla-dolla-bills"},0===this.getDiscount(!0)?o.a.createElement("span",null,"$",this.getSubtotal()):o.a.createElement("span",null,o.a.createElement("s",null,o.a.createElement("i",null,"$",this.getSubtotal()))," $",this.getDiscountedSubtotal(),o.a.createElement("div",{className:"discount-info"},"(",(this.getDiscount(!0)/this.getSubtotal(!0)*100).toFixed(),"% total discount)"))),o.a.createElement("div",{className:"divider"}),o.a.createElement("label",{className:"tos-container"},o.a.createElement("input",{type:"checkbox",className:"tos-checkbox",onChange:this.onCheck.bind(this)}),o.a.createElement("span",{className:"tos-checkmark"}),o.a.createElement("span",{className:"header"},"I agree to Dank Memer's ",o.a.createElement("a",{href:"/terms"},"Terms of Service")," and ",o.a.createElement("a",{href:"/refunds"},"Refund Policy"),o.a.createElement("span",{className:"red"},"*")),"."),o.a.createElement("div",{className:"divider"}),m,o.a.createElement("div",{style:{display:c&&i&&u?"inline-block":"none",width:"300px"}},this.paypalButton))}})},46:function(e,t,a){"use strict";t.a=e=>new Promise(t=>setTimeout(t,e))},63:function(e){e.exports=JSON.parse('{"a":{"sandbox":"AZdGYShvqAd8pQwNxWLiNE8OY5zG6eJRCPBJyRJlQ9G5k32Y36tAM9afFGVOnFzVXquW_47dKUS648G3","production":"ASxq51TP92spfbizUkcxNEl7x84Ct717OJ0xgI3A2O_FeIH1F1jEdTBAKWZq5Ml2G3U0p3g57OQlZJOB"}}')},64:function(e,t,a){e.exports=a.p+"214b5921370ab4c1a2257f8c4649a33a.png"},65:function(e,t,a){}}]);