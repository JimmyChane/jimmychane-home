(function(){"use strict";var e={1542:function(e,t,n){var r=n(9242),o=n(3396),i=n.p+"img/1590379855918.0c5326ae.png";const a={class:"App"},c={class:"App-body"},u={class:"App-main"},l=(0,o._)("div",{class:"App-footer"},[(0,o._)("img",{src:i})],-1);function s(e,t,n,r,i,s){const p=(0,o.up)("AppHeader"),m=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",c,[(0,o.Wm)(p),(0,o._)("div",u,[(0,o.Wm)(m,{class:"App-router"})])]),l])}var p=n(6520),m=n(7139);const d=e=>((0,o.dD)("data-v-32ead472"),e=e(),(0,o.Cn)(),e),f={class:"HomeNavigationItem-title"},h=d((()=>(0,o._)("div",{class:"HomeNavigationItem-highlight"},null,-1)));function y(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("div",{class:(0,m.C_)(["HomeNavigationItem",[e.isSelected?"HomeNavigationItem-isSelected":"HomeNavigationItem-isDeselected"]])},[(0,o._)("span",f,(0,m.zw)(e.title),1),h],2)}var v=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let g=class extends p.w3{};g=v([(0,p.Ei)({props:{title:{type:String,default:""},isSelected:{type:Boolean,default:!1}}})],g);var b=g,C=n(89);const k=(0,C.Z)(b,[["render",y],["__scopeId","data-v-32ead472"]]);var j=k,A=n.p+"img/photo_2022-07-17_09-49-51.dbd7cc15.jpg";const J={class:"AppHeader"},w={class:"AppHeader-body"},O=(0,o.uE)('<div class="AppHeader-background"><p class="AppHeader-background-1"> Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane </p><p class="AppHeader-background-2"> Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane </p><p class="AppHeader-background-3"> Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane </p><p class="AppHeader-background-4"> Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane </p><p class="AppHeader-background-5"> Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane </p><p class="AppHeader-background-6"> Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane </p></div><div class="AppHeader-profile"><img src="'+A+'"></div>',2),H={class:"AppHeader-navigation"};function _(e,t,n,r,i,a){const c=(0,o.up)("AppNavigationItem"),u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",J,[(0,o._)("div",w,[O,(0,o._)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.navigations,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.key,to:{name:t.key}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{title:t.title,isSelected:e.currentRouteKey===t.key},null,8,["title","isSelected"])])),_:2},1032,["to"])))),128))])])])}var E=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let N=class extends p.w3{};N=E([(0,p.Ei)({components:{AppNavigationItem:j},data(){return{navigations:[{key:"home",title:"Home"},{key:"intro",title:"Intro"},{key:"gallery",title:"Gallery"},{key:"project",title:"Projects"}]}},computed:{currentRouteKey:e=>e.$route.name}})],N);var S=N;const P=(0,C.Z)(S,[["render",_]]);var R=P,D=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let I=class extends p.w3{};I=D([(0,p.Ei)({components:{AppNavigationItem:j,AppHeader:R},computed:{currentRouteKey:e=>e.$route.name},mounted(){}})],I);var T=I;const x=(0,C.Z)(T,[["render",s]]);var K=x,L=n(2483);const B=[{path:"/",name:"home",component:()=>n.e(264).then(n.bind(n,1264))},{path:"/home",redirect:"/"},{path:"/intro",name:"intro",component:()=>n.e(606).then(n.bind(n,5606))},{path:"/gallery",name:"gallery",component:()=>n.e(908).then(n.bind(n,3908))},{path:"/project",name:"project",component:()=>n.e(782).then(n.bind(n,7782))},{path:"/:pathMatch(.*)*",redirect:"home"}],F=(0,L.p7)({history:(0,L.r5)(),routes:B});var M=F;(0,r.ri)(K).use(M).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{264:"b374dbe9",606:"fc54e5fe",782:"63dccc71",908:"a4d80ff9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{264:"4b88ba53",606:"947f929b",782:"c361a3c1",908:"159bf0a5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jimmychane:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){c=p;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(t(a,c))return o();e(r,c,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={264:1,606:1,782:1,908:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkjimmychane"]=self["webpackChunkjimmychane"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1542)}));r=n.O(r)})();
//# sourceMappingURL=app.d7d00d0f.js.map