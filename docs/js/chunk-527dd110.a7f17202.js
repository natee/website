(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-527dd110"],{"1dc9":function(t,e,s){},2626:function(t,e,s){"use strict";var a=s("d066"),c=s("9bf2"),r=s("b622"),i=s("83ab"),l=r("species");t.exports=function(t){var e=a(t),s=c.f;i&&e&&!e[l]&&s(e,l,{configurable:!0,get:function(){return this}})}},"38a0":function(t,e,s){"use strict";var a=s("8ef8"),c=s.n(a);c.a},"403c":function(t,e,s){},"4d63":function(t,e,s){var a=s("83ab"),c=s("da84"),r=s("94ca"),i=s("7156"),l=s("9bf2").f,n=s("241c").f,o=s("44e7"),u=s("ad6d"),d=s("9f7f"),f=s("6eeb"),x=s("d039"),m=s("69f3").set,v=s("2626"),p=s("b622"),y=p("match"),h=c.RegExp,b=h.prototype,g=/a/g,C=/a/g,_=new h(g)!==g,k=d.UNSUPPORTED_Y,E=a&&r("RegExp",!_||k||x((function(){return C[y]=!1,h(g)!=g||h(C)==C||"/a/i"!=h(g,"i")})));if(E){var T=function(t,e){var s,a=this instanceof T,c=o(t),r=void 0===e;if(!a&&c&&t.constructor===T&&r)return t;_?c&&!r&&(t=t.source):t instanceof T&&(r&&(e=u.call(t)),t=t.source),k&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,"")));var l=i(_?new h(t,e):h(t,e),a?this:b,T);return k&&s&&m(l,{sticky:s}),l},w=function(t){t in T||l(T,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},I=n(h),S=0;while(I.length>S)w(I[S++]);b.constructor=T,T.prototype=b,f(c,"RegExp",T)}v("RegExp")},"6d67":function(t,e,s){"use strict";var a=s("403c"),c=s.n(a);c.a},"8ef8":function(t,e,s){},cd5e:function(t,e,s){"use strict";var a,c,r;s("4d63"),s("ac1f"),s("25f0"),s("5319");function i(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function l(t,e){var s=a(t,e)?r:c;s(t,e)}"classList"in document.documentElement?(a=function(t,e){return t.classList.contains(e)},c=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(a=function(t,e){return i(e).test(t.className)},c=function(t,e){a(t,e)||(t.className=t.className+" "+e)},r=function(t,e){t.className=t.className.replace(i(e)," ")});var n={hasClass:a,addClass:c,removeClass:r,toggleClass:l,has:a,add:c,remove:r,toggle:l};e["a"]=n},d07f:function(t,e,s){"use strict";var a=s("1dc9"),c=s.n(a);c.a},e843:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"grid grid--up",class:{"is--mobile":t.isMobile}},t._l(t.contents,(function(e,a){return s("div",{key:a,staticClass:"grid-item"},[s("div",{staticClass:"box",style:e.style},[s("div",{staticClass:"box__cover"},["text"===e.type?s("h2",[t._v(t._s(e.coverText))]):"svg-dashed"===e.type?s("svg-text-dashed",{attrs:{text:e.coverText,"symbol-id":"presentation"+a}}):"svg-rotate"===e.type?s("svg-text-rotate",{attrs:{text:e.coverText,"symbol-id":"presentation"+a}}):t._e()],1),s("div",{staticClass:"box__intro"},[s("h3",[t._v(t._s(e.title))]),s("p",{staticClass:"date"},[t._v(t._s(e.date))]),s("a",{staticClass:"box__btn",on:{click:function(s){return t.jump(e.path)}}},[t._v("Enter")])])])])})),0)])},c=[],r=(s("99af"),s("d81d"),s("fb6a"),s("159b"),s("2f14")),i=s("cd5e"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"svg-dashed-text",attrs:{viewBox:"0 0 600 300"}},[s("symbol",{attrs:{id:t.symbolId}},[s("text",{attrs:{"text-anchor":"middle",x:"50%",y:"50%",dy:".35em"}},[t._v(t._s(t.text))])]),s("use",{staticClass:"stroke-text",attrs:{"xlink:href":"#"+t.symbolId}}),s("use",{staticClass:"stroke-text",attrs:{"xlink:href":"#"+t.symbolId}}),s("use",{staticClass:"stroke-text",attrs:{"xlink:href":"#"+t.symbolId}}),s("use",{staticClass:"stroke-text",attrs:{"xlink:href":"#"+t.symbolId}}),s("use",{staticClass:"stroke-text",attrs:{"xlink:href":"#"+t.symbolId}})])},n=[],o={name:"SvgTextDashed",props:{text:{type:String,default:"TEXT"},symbolId:{defualt:"svgTextItem"}}},u=o,d=(s("d07f"),s("2877")),f=Object(d["a"])(u,l,n,!1,null,"39ba668c",null),x=f.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"svg-rotate-text",attrs:{viewBox:"0 0 600 300"}},[s("symbol",{attrs:{id:t.symbolId}},[s("text",{attrs:{"text-anchor":"middle",x:"50%",y:"50%",dy:".35em"}},[t._v(t._s(t.text))])]),s("clipPath",{attrs:{id:"clipPath"+t.symbolId}},[s("text",{attrs:{"text-anchor":"middle",x:"50%",y:"50%",dy:".35em"}},[t._v(" "+t._s(t.text)+" ")])]),s("pattern",{attrs:{id:"p-circles",width:"40",height:"40",viewBox:"0 0 40 40",patternUnits:"userSpaceOnUse"}},[s("circle",{staticClass:"small-circle",attrs:{r:"12",cx:"20",cy:"20"}}),s("circle",{staticClass:"small-circle small-circle--fill",attrs:{r:"5",cx:"20",cy:"20"}}),s("circle",{staticClass:"small-circle",attrs:{r:"12",cx:"0",cy:"0"}}),s("circle",{staticClass:"small-circle",attrs:{r:"12",cx:"40",cy:"0"}}),s("circle",{staticClass:"small-circle",attrs:{r:"12",cx:"40",cy:"40"}}),s("circle",{staticClass:"small-circle",attrs:{r:"12",cx:"0",cy:"40"}}),s("circle",{staticClass:"small-circle",attrs:{r:"5",cx:"0",cy:"0"}}),s("circle",{staticClass:"small-circle",attrs:{r:"5",cx:"40",cy:"0"}}),s("circle",{staticClass:"small-circle",attrs:{r:"5",cx:"40",cy:"40"}}),s("circle",{staticClass:"small-circle",attrs:{r:"5",cx:"0",cy:"40"}})]),s("g",{attrs:{"clip-path":"url(#clipPath"+t.symbolId+")"}},[s("circle",{staticClass:"stroke-text-fill",attrs:{r:"70%",cx:"300",cy:"150"}})]),s("use",{staticClass:"stroke-text",attrs:{"xlink:href":"#"+t.symbolId}})])},v=[],p={name:"SvgTextRotate",props:{text:{type:String,default:"TEXT"},symbolId:{defualt:"svgTextItem"}}},y=p,h=(s("38a0"),Object(d["a"])(y,m,v,!1,null,"102c342c",null)),b=h.exports,g=["#109F92","#FFE8B0","#D6EFF8","#F6A5A1","#E4F0D9","#CACCCD"],C={name:"presentation",components:{SvgTextDashed:x,SvgTextRotate:b},data:function(){return{isMobile:!1,contents:[{type:"svg-dashed",coverText:"2019",title:"2019年度总结",date:"2019-12-31",path:"/summary/2019"},{type:"svg-rotate",coverText:"2018",title:"2018年度总结",date:"2018-12-31",path:"/summary/2018"},{type:"text",coverText:"让人脸红的文章",title:"5秒钟快速摺衣服的生活智慧",date:"2019-09-09",path:"/summary/2018"}].map((function(t,e){var s=Object(r["g"])(g[e],-20);return t.style={background:"".concat(g[e]," -webkit-radial-gradient(").concat(g[e],", ").concat(s,")")},t}))}},created:function(){},mounted:function(){this.isMobile=r["d"],r["d"]&&[].slice.call(document.querySelectorAll("ul.grid > li > .box")).forEach((function(t,e){t.querySelector(".box__intro > a").addEventListener("touchstart",(function(t){t.stopPropagation()}),!1),t.addEventListener("touchstart",(function(t){i["a"].toggle(this,"is--hover")}),!1)}))},methods:{jump:function(t){t&&this.$router.push({path:t})}}},_=C,k=(s("6d67"),Object(d["a"])(_,a,c,!1,null,null,null));e["default"]=k.exports}}]);