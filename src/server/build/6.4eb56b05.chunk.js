(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){e.exports=a.p+"8c9a4331ffbd4aacbd8bc23b46e45383.gif"},101:function(e,t,a){e.exports=a.p+"5295c2391f509827dfe95d73cbf4d072.png"},102:function(e,t,a){e.exports=a.p+"696461a621cfbcb8156457b741365a81.png"},103:function(e,t,a){e.exports=a.p+"2b8fa13b72cde5940407e101fb2e252d.gif"},104:function(e,t,a){e.exports=a.p+"b5bdba7c6cde4511a021c8c276861b0f.png"},105:function(e,t,a){e.exports=a.p+"0db60fcf17107d94fe2b26440bf88428.gif"},106:function(e,t,a){e.exports=a.p+"7dad32b9358fbe4630bc6031bfee4d47.gif"},118:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=({children:e})=>r.a.createElement("div",{className:"backdrop"},e),c=a(48);class i extends r.a.Component{render(){return r.a.createElement(o,null,r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-child"},this.props.component)),r.a.createElement(c.a,null))}}a(122);var s=a(20),d=a.n(s);a.d(t,"a",function(){return f});const l=document.querySelector("#modals");function f(e){return d.a.render(r.a.createElement(i,{component:e}),l)}document.addEventListener("keydown",e=>{if("Escape"===e.code&&document.querySelector(".backdrop"))return d.a.unmountComponentAtNode(l)}),document.addEventListener("mousedown",e=>{if("modal"===e.target.className)return d.a.unmountComponentAtNode(l)})},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(0),r=a.n(n),o=a(48),c=a(63),i=a(64),s=a(49);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u({discordAvatar:e,name:t,avatar:a,social:u,about:b}){const[g,m]=Object(n.useState)(a),[v,h]=Object(n.useState)(b),[E,w]=Object(n.useState)(u),y=(e,t)=>{if(t.length<1){const{[e]:t}=E,a=f(E,[e].map(p));return w(a)}w(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){l(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},E,{[e]:t}))},x=()=>{s({url:`/api/${window.location.pathname.split("/")[1]}/staff`,method:"PUT",data:{avatar:g,about:v,socials:E}}).then(()=>{window.location.reload()}).catch(e=>{o.b.error("There was an issue while trying to update your staff card.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"})})};return r.a.createElement("div",{id:"edit-staff-modal"},r.a.createElement("h1",{id:"edit-staff-modal-title"},"Editing your staff card."),r.a.createElement("div",{id:"edit-staff-modal-content"},r.a.createElement("div",{id:"edit-staff-modal-content-preview"},r.a.createElement(c.a,{name:t,avatar:g,social:E,about:v}),r.a.createElement("input",{className:"input-singular",defaultValue:g.includes("cdn.discord")?"":g,onChange:t=>m(t.target.value||e),placeholder:"Custom card picture"}),r.a.createElement("span",{id:"edit-staff-modal-content-preview-save",className:"hide-mobile",onClick:x},"Save changes")),r.a.createElement("div",{id:"edit-staff-modal-content-info"},r.a.createElement("textarea",{defaultValue:b,onChange:e=>h(e.target.value)}),Object.entries(i).map(([e,t],a)=>r.a.createElement("div",{className:"input-group",key:a},r.a.createElement("div",{className:"input-group-image",style:{backgroundImage:`url("${t}")`}}),r.a.createElement("input",{defaultValue:u[e]?u[e]:"",onChange:t=>y(e,t.target.value),placeholder:`Your ${e.toLowerCase()} ${"website"!==e.toLowerCase()?"discord"!==e.toLowerCase()?"account ":"server ":""}URL`})))),r.a.createElement("span",{id:"edit-staff-modal-content-preview-save",className:"show-mobile",onClick:x},"Save changes")))}},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a(48),i=(a(113),a(72)),s=(a(121),a(49)),d=a(63),l=a(123),f=a(118);t.default=Object(o.b)(e=>e.login,null)(function(e){const[t,a]=Object(n.useState)(!1),[o,p]=Object(n.useState)(0),[u,b]=Object(n.useState)(""),[g,m]=Object(n.useState)(""),[v,h]=Object(n.useState)(""),[E,w]=Object(n.useState)("");return Object(n.useEffect)(()=>{if(e.loggedIn&&e.isModerator&&a(!0),e.loggedIn&&!e.isModerator)return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");e.loggedIn&&s(`/api/staff?id=${e.id}`).then(({data:e})=>{e=e[0],b(e.name),m(e.about),h(e.avatar),w(e.social)}).catch(()=>c.b.dark("Your staff card data was not able to be shown.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"}))},[e]),r.a.createElement("div",{id:"control"},t&&e.loggedIn?t?r.a.createElement("div",{id:"control-mods"},r.a.createElement("div",{id:"control-mods-header"},r.a.createElement("h1",{id:"control-mods-header-title"},"Hey, ",u),r.a.createElement("p",{id:"control-mods-header-note"},"This is your control panel. Here you can change the appearance of your staff card and get website related information regarding a user.")),r.a.createElement("div",{id:"control-mods-checker"},r.a.createElement("h3",{id:"control-mods-checker-title"},"Check website bans"),r.a.createElement("p",{id:"control-mods-checker-note"},"Quickly check to see if a user is website banned which may be restricting their access to specific parts of the website."),r.a.createElement("div",{id:"control-mods-checker-input"},r.a.createElement("label",{htmlFor:"checking"},"User ID"),r.a.createElement("input",{name:"checking",type:"text",onChange:e=>p(e.target.value)})),r.a.createElement("div",{id:"control-mods-checker-actions"},r.a.createElement("span",{id:"control-mods-checker-actions-submit",onClick:async()=>{try{let{data:e}=await s(`/api/mods/checkBan?type=any&id=${o}`);e[0]?c.b.dark(r.a.createElement("p",null,r.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},r.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"The user has ",1===e.length&&"appeal"===e[0]?"an ":"a ",e.join(" & ")," ban",1===e.length?"":"s",".")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"appealState"}):c.b.dark(r.a.createElement("p",null,r.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(50, 211, 139)"}},r.a.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})),r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"This user has no website bans.")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"appealState"})}catch(e){console.error(e)}}},"Check user")))):"":r.a.createElement("div",{id:"control-login"},r.a.createElement("div",{id:"control-login-content"},r.a.createElement("h1",{id:"control-login-content-title"},"Restricted"),r.a.createElement("p",{id:"control-login-content-body"},"The page you are trying to access is restricted. Please login to continue"),r.a.createElement(i.a,null))),t?r.a.createElement("div",{id:"staff-card"},r.a.createElement(d.a,{name:u,about:g,social:E,avatar:v}),r.a.createElement("span",{id:"edit-staff-card",onClick:()=>Object(f.a)(r.a.createElement(l.a,{discordAvatar:`https://cdn.discordapp.com/avatars/${e.id}/${e.avatar}`,name:u,avatar:v,social:E,about:g}))},"Edit your staff card")):"",r.a.createElement(c.a,null))})},50:function(e,t,a){e.exports=a.p+"f8389ca1a741a115313bede9ac02e2c0.svg"},51:function(e,t,a){e.exports=a.p+"e359ad39480a3ed8d413d0a663bce8a7.svg"},52:function(e,t,a){e.exports=a.p+"9be66c09991347ecc68ec5063d920ab7.svg"},53:function(e,t,a){e.exports=a.p+"d8851beea04ea75ca3febac546828318.svg"},54:function(e,t,a){e.exports=a.p+"427337d19ee4c8c33cab4ae98952b2f8.svg"},55:function(e,t,a){e.exports=a.p+"d219fc5e66cd2e90747714476d460f31.svg"},56:function(e,t,a){e.exports=a.p+"ab089c02c8a54a63a347b47190857329.svg"},57:function(e,t,a){e.exports=a.p+"0629a43be86a5fbb16a2e4ab256016d7.svg"},58:function(e,t,a){e.exports=a.p+"68f7b9f66e8ba664e2adbe0b81c0c18f.svg"},59:function(e,t,a){e.exports=a.p+"6d2ab22bcdee8ba006102c0eb8ad5502.png"},63:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),o=(a(74),a(64)),c=a(67);const i=new Audio("/static/audio/uwu.wav"),s=()=>i.play();function d({name:e,avatar:t,social:a,about:n}){return r.a.createElement("div",{className:"staff-card"},r.a.createElement("div",{className:"staff-card-details"},r.a.createElement("img",{className:"staff-card-details-picture",src:t||c.a[e.toLowerCase().replace(/ /g,"-")],alt:`${e}'s avatar`,onClick:()=>{"Melmsie"===e?s():console.log("Go click Mel's avatar")}}),r.a.createElement("p",{className:"staff-card-details-name"},e),r.a.createElement("div",{className:"staff-card-details-about-container"},r.a.createElement("p",{className:n.length>120?"staff-card-details-about scroll":"staff-card-details-about",dangerouslySetInnerHTML:{__html:n}}))),r.a.createElement("div",{className:"staff-card-socials"},Object.entries(a).map(([t,a])=>r.a.createElement("a",{key:t,href:a},r.a.createElement("img",{className:"staff-card-socials-account",alt:`${e}'s ${t} link`,src:o[t]})))))}},64:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a.n(n);a.d(t,"Discord",function(){return r.a});var o=a(51),c=a.n(o);a.d(t,"Spotify",function(){return c.a});var i=a(52),s=a.n(i);a.d(t,"Twitter",function(){return s.a});var d=a(53),l=a.n(d);a.d(t,"Website",function(){return l.a});var f=a(54),p=a.n(f);a.d(t,"YouTube",function(){return p.a});var u=a(55),b=a.n(u);a.d(t,"GitHub",function(){return b.a});var g=a(56),m=a.n(g);a.d(t,"GitLab",function(){return m.a});var v=a(57),h=a.n(v);a.d(t,"Reddit",function(){return h.a});var E=a(58),w=a.n(E);a.d(t,"Twitch",function(){return w.a});var y=a(59),x=a.n(y);a.d(t,"Instagram",function(){return x.a})},67:function(e,t,a){"use strict";const n={},r=a(75);r.keys().map(e=>n[e.slice(2).split(".")[0]]=r(e)),t.a=n},72:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n);function o(){return r.a.createElement("a",{id:"discord--login",href:"/oauth/login?redirect="+window.location.pathname,rel:"noopener noreferrer"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 245 240"},r.a.createElement("path",{fill:"#ffffff",d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),r.a.createElement("path",{fill:"#ffffff",d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})),"Login with Discord")}},74:function(e,t,a){},75:function(e,t,a){var n={"./2pumpchump.png":76,"./abaddon.gif":77,"./aerielle.png":78,"./aetheryx.png":79,"./aiphey.png":80,"./auxim.gif":81,"./blair.gif":82,"./cece.gif":83,"./dauntless.jpg":84,"./devoxin.jpg":85,"./duckysoren.gif":86,"./faith.png":87,"./gxbriel.jpg":88,"./inblue.png":89,"./julia.png":90,"./kable-kompany.gif":91,"./melmsie.png":92,"./mistress-red.jpg":93,"./nunca.jpg":94,"./reese.png":95,"./samantha.gif":96,"./shiiiitak\xeb.png":97,"./sinister.png":98,"./smile.jpg":99,"./spurkeh.gif":100,"./terrarian.png":101,"./theprodigyhenry.png":102,"./tintin.gif":103,"./toto.png":104,"./xfastx.gif":105,"./yeng.gif":106};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=75},76:function(e,t,a){e.exports=a.p+"fee51643e2bb31af0780c1c8bb63aef4.png"},77:function(e,t,a){e.exports=a.p+"3adc385d31cd711ff1925738b25e5d2e.gif"},78:function(e,t,a){e.exports=a.p+"712bb3d47f2427cbeabf1f596f66be36.png"},79:function(e,t,a){e.exports=a.p+"7fbdb76a544220a0c7c6798f8bea1023.png"},80:function(e,t,a){e.exports=a.p+"4795fc64832831dc9c571728aafad65f.png"},81:function(e,t,a){e.exports=a.p+"9dedba447b4a9a15a3ad2595e9745992.gif"},82:function(e,t,a){e.exports=a.p+"6a8764fd3ab02420b6ed7c3b27a47ac4.gif"},83:function(e,t,a){e.exports=a.p+"43d06266d11f9efade5183e7723c7c9e.gif"},84:function(e,t,a){e.exports=a.p+"ad192b782127e0679d3ffe5d2c0ee5db.jpg"},85:function(e,t,a){e.exports=a.p+"891369adad61358fbde147eb4f8d7c32.jpg"},86:function(e,t,a){e.exports=a.p+"75c25e5d9666b5f8b943df219de315ad.gif"},87:function(e,t,a){e.exports=a.p+"7ad9861f47d10ec65e9850081e8abec2.png"},88:function(e,t,a){e.exports=a.p+"335531fb7ba07aa6c3d084942b8acede.jpg"},89:function(e,t,a){e.exports=a.p+"09e087e8508ae41582280257b3fa254a.png"},90:function(e,t,a){e.exports=a.p+"3a9550df56521d0dc6e4528e65c9bc92.png"},91:function(e,t,a){e.exports=a.p+"e6bcb2987332e274dd2d25c9a654d780.gif"},92:function(e,t,a){e.exports=a.p+"ac8d991f4bb8c804867147d7b613c821.png"},93:function(e,t,a){e.exports=a.p+"07ae074302f502e03657bfdd82eb3441.jpg"},94:function(e,t,a){e.exports=a.p+"474e76d7e0ad7b015a1a25e451ad120e.jpg"},95:function(e,t,a){e.exports=a.p+"7bb79e0dca8f7772f187a3a731b99831.png"},96:function(e,t,a){e.exports=a.p+"8a1de42878b52df25e0216ab1ffa7c68.gif"},97:function(e,t,a){e.exports=a.p+"b03acd8c9f7a35b82f5b45a767bcc421.png"},98:function(e,t,a){e.exports=a.p+"ca2cace685e80c175b8fd2e4ade695b8.png"},99:function(e,t,a){e.exports=a.p+"38d6453ea0d54faf9225312025208d78.jpg"}}]);