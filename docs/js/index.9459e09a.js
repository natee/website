(function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],f=0,l=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={index:0},c={index:0},a=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0f02cf":"b88fca11","chunk-51f8ba5e":"451e5047","chunk-778006a2":"8d88ce43"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-51f8ba5e":1,"chunk-778006a2":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0f02cf":"31d6cfe0","chunk-51f8ba5e":"48bf4b57","chunk-778006a2":"bd10ac3b"}[t]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://natee.github.io/website/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("df31")},"106f":function(t,e,n){"use strict";var r=n("792c"),o=n.n(r);o.a},"18df":function(t,e,n){"use strict";var r=n("f7c0"),o=n.n(r);o.a},"297d":function(t,e,n){t.exports=n.p+"img/home.87063b3e.png"},"2f14":function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return b}));n("99af"),n("7db0"),n("a15b"),n("fb6a"),n("d3b7"),n("e25e"),n("ac1f"),n("25f0"),n("5319");var r=n("8237"),o=n.n(r),c=n("aaef");console.log.bind(console);var a=function(t){return o()(t.replace(/\s+/g,""))};function i(t){return c["a"].find((function(e){return e.pwd===a(t)}))}var u=function(t){var e=i(t);return void 0!==e&&(localStorage.setItem("tokenCD",JSON.stringify({value:t,time:+new Date+864e5})),localStorage.setItem("role",e.role)),void 0!==e},s=function(){var t=JSON.parse(localStorage.getItem("tokenCD")),e="";return t&&(e=+new Date-t.time>=0?"":t.value),u(e)},f=function(t){return isNaN(t)?0:Math.pow(t,4)-4*Math.pow(t,3)+3*t+5};function l(t,e){return Math.floor(Math.random()*(e-t)+t)}var d=function(){return Math.random().toString(36).substr(7)};var p="ontouchend"in document;function b(t,e){var n=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16);n=parseInt(n*(100+e)/100),r=parseInt(r*(100+e)/100),o=parseInt(o*(100+e)/100),n=n<255?n:255,r=r<255?r:255,o=o<255?o:255;var c=1==n.toString(16).length?"0"+n.toString(16):n.toString(16),a=1==r.toString(16).length?"0"+r.toString(16):r.toString(16),i=1==o.toString(16).length?"0"+o.toString(16):o.toString(16);return"#"+c+a+i}},3095:function(t,e,n){t.exports=n.p+"img/projector.7e365c1b.png"},"792c":function(t,e,n){},"8a6f":function(t,e,n){t.exports=n.p+"img/exit.ea6cbe4a.png"},aaef:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c}));var r=0xef6ad14bd5,o=[{pwd:"b5224b7d86a4c1ffff395d31a6fa4a3d",role:"guest"},{pwd:"5f2441ef22d306d6bd20ddb4b678e048",role:"admin"},{pwd:"01d7f40760960e7bd9443513f22ab9af",role:"guest"}],c="/website"},b5c0:function(t,e,n){},b795:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b");var r=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=[{path:"/secret",component:function(){return n.e("chunk-2d0f02cf").then(n.bind(null,"9af7"))},meta:{role:"admin"}}];function i(t,e){return!e.meta||!e.meta.role||t===e.meta.role}function u(t,e){var n=[];return t.forEach((function(t){var r=c({},t);i(e,r)&&n.push(r)})),n}var s=function(t,e){var n=[];return n="admin"===t?e||a:u(e||a,t),n.push({path:"*",redirect:"/404"}),n}},bca8:function(t,e,n){"use strict";var r=n("b5c0"),o=n.n(r);o.a},cf90:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showFooter?n("div",{staticClass:"footer"},[n("div",{staticClass:"sub-nav fr"},[n("a",{on:{click:function(e){return t.goUrl("index.html")}}},[t._v("首页")]),n("a",{on:{click:function(e){return t.goUrl("login.html#/getPassword")}}},[t._v("获取密码")]),n("a",{on:{click:function(e){return t.goUrl("login.html#/aboutMe")}}},[t._v("关于我")]),n("a",{on:{click:function(e){return t.goUrl("resume.html")}}},[t._v("简历")]),n("span",{staticClass:"sp"},[t._v("|")]),n("a",{on:{click:function(e){return t.goUrl("login.html#/trianglify")}}},[t._v("trianglify")])]),n("div",{staticClass:"copyright fl"},[t._v(" © 2020 natee All Rights Reserved. ")])]):t._e()},o=[],c=n("ff50"),a={name:"SiteFooter",data:function(){return{showFooter:!1}},created:function(){var t=this;this.timer=setInterval((function(){var e=document.querySelector("#mainView");e&&(t.showFooter=!0,clearInterval(t.timer))}),50)},methods:{goUrl:function(t){Object(c["a"])(t)}},destroyed:function(){clearInterval(this.timer)}},i=a,u=(n("bca8"),n("2877")),s=Object(u["a"])(i,r,o,!1,null,null,null);e["a"]=s.exports},df31:function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tokenValid?n("div",{staticClass:"layout",attrs:{id:"app"}},[n("osx-dock",{staticClass:"navigation",attrs:{list:t.list}}),n("router-view",{staticClass:"layout-top",attrs:{id:"mainView"}}),n("site-footer",{staticClass:"layout-bottom"})],1):t._e()},c=[],a=(n("f5df"),n("77ed"),n("cf90")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"osx-dock"},t._l(t.list,(function(e,r){return n("li",{key:r,staticClass:"osx-dock__item",class:{nearby:t.nearbyIndex.indexOf(r)>-1,"nearby-one":t.nearbyOneIndex.indexOf(r)>-1},on:{mouseover:function(e){return t.hover(r,!0)},mouseout:function(e){return t.hover(r,!1)}}},[n("span",{staticClass:"osx-dock__name"},[t._v(t._s(e.name))]),n("a",{staticClass:"osx-dock__icon",on:{click:function(n){return t.clickItem(e.click)}}},[n("img",{attrs:{src:e.src}})])])})),0)])},u=[],s={name:"osx-dock",props:{list:{type:Array,default:function(){return[{name:"测试",link:"#",src:"https://zurb.com/playground/uploads/upload/upload/151/zurb-icon.png"}]}}},data:function(){return{hoverIndex:-10}},computed:{nearbyIndex:function(){return[this.hoverIndex-1,this.hoverIndex+1]},nearbyOneIndex:function(){return[this.hoverIndex-2,this.hoverIndex+2]}},methods:{hover:function(t,e){this.hoverIndex=e?t:-10},clickItem:function(t){t.bind(this)()}}},f=s,l=(n("106f"),n("2877")),d=Object(l["a"])(f,i,u,!1,null,"bee18810",null),p=d.exports,b=n("ff50"),h=n("2f14"),m={name:"App",components:{SiteFooter:a["a"],OsxDock:p},data:function(){return{tokenValid:!1,list:[{name:"Home",click:function(){this.$router.push("index")},src:n("297d")},{name:"Projects",click:function(){this.$router.push("projects")},src:n("fb78")},{name:"Presentation",click:function(){Object(b["a"])("presentation.html")},src:n("3095")},{name:"Exit",click:function(){Object(b["b"])()},src:n("8a6f")}]}},mounted:function(){this.tokenValid=Object(h["g"])()}},v=m,g=(n("18df"),Object(l["a"])(v,o,c,!1,null,null,null)),y=g.exports,O=(n("a4d3"),n("99af"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ade3")),j=n("8c4f"),k=n("b795");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(O["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}r["a"].use(j["a"]);var S=[],_=[{path:"/",redirect:"/index",meta:{title:"人之初性本善"}},{path:"/index",component:function(){return n.e("chunk-51f8ba5e").then(n.bind(null,"9726"))},meta:{title:"人之初性本善"}},{path:"/404",component:function(){return n.e("chunk-778006a2").then(n.bind(null,"8cdb"))},meta:{title:"页面神游八荒外"}}];S=new j["a"]({routes:[].concat(_),mode:"hash"});var P=!1;S.beforeEach((function(t,e,n){var r=Object(h["g"])(),o=localStorage.getItem("role");if(r){if(t.meta.title&&(document.title=t.meta.title),!P){var c=Object(k["a"])(o);S.addRoutes(c,{override:!0}),P=!0,n(x({},t,{replace:!0}))}n()}else Object(b["b"])()}));var I=S;r["a"].config.productionTip=!1,new r["a"]({router:I,render:function(t){return t(y)}}).$mount("#app")},f7c0:function(t,e,n){},fb78:function(t,e,n){t.exports=n.p+"img/project.7eb192e4.png"},ff50:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n("aaef");function o(){a(),c("login.html")}function c(t){window.location.href=location.origin+r["c"]+"/"+t}function a(){localStorage.removeItem("tokenCD"),localStorage.removeItem("role")}}});