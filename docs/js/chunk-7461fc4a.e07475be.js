(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7461fc4a"],{"0efc":function(t,n,e){"use strict";var o=e("d16a"),i=e.n(o);i.a},2626:function(t,n,e){"use strict";var o=e("d066"),i=e("9bf2"),a=e("b622"),r=e("83ab"),s=a("species");t.exports=function(t){var n=o(t),e=i.f;r&&n&&!n[s]&&e(n,s,{configurable:!0,get:function(){return this}})}},"3bbe":function(t,n,e){var o=e("861d");t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},4372:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tri-view"},[e("div",{staticClass:"tri-view__sidebar"},[e("div",{staticClass:"tri-view__sidebar-inner"},[e("div",{staticClass:"row"},[e("div",{staticClass:"control col"},[e("label",[t._v("宽")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.width,expression:"options.width",modifiers:{number:!0}}],staticClass:"tri-input",attrs:{type:"number"},domProps:{value:t.options.width},on:{input:function(n){n.target.composing||t.$set(t.options,"width",t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})]),e("div",{staticClass:"control col"},[e("label",[t._v("高")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.height,expression:"options.height",modifiers:{number:!0}}],staticClass:"tri-input",attrs:{type:"number"},domProps:{value:t.options.height},on:{input:function(n){n.target.composing||t.$set(t.options,"height",t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})])]),e("div",{staticClass:"control"},[e("label",[t._v("颜色模式")]),e("div",{staticClass:"segmented-control"},t._l(t.colorFunctions,(function(n,o){return e("button",{key:o,class:{selected:n.fName===t.usedFunction},on:{click:function(e){return t.onChangeColorFunctionType(n.fName)}}},[t._v(" "+t._s(n.name)+" ")])})),0)]),e("div",{staticClass:"control"},[e("label",[t._v("强度")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.colorFunctionIntensity,expression:"colorFunctionIntensity",modifiers:{number:!0}}],staticClass:"tri-input",attrs:{type:"range",min:"0.0",max:"1",step:"0.01"},domProps:{value:t.colorFunctionIntensity},on:{__r:function(n){t.colorFunctionIntensity=t._n(n.target.value)},blur:function(n){return t.$forceUpdate()}}})]),e("div",{staticClass:"control"},[e("label",[t._v("三角偏移量")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.variance,expression:"options.variance",modifiers:{number:!0}}],staticClass:"tri-input",attrs:{type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:t.options.variance},on:{__r:function(n){t.$set(t.options,"variance",t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})]),e("div",{staticClass:"control"},[e("label",[t._v("格子大小")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.cellSize,expression:"options.cellSize",modifiers:{number:!0}}],staticClass:"tri-input",attrs:{type:"range",min:"20",max:"200",step:"10"},domProps:{value:t.options.cellSize},on:{__r:function(n){t.$set(t.options,"cellSize",t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})]),e("button",{staticClass:"randomize",on:{click:t.randomize}},[t._v("随机")]),t._m(0),e("div",{staticClass:"palette-list"},[e("div",{staticClass:"segmented-control"},[e("button",{class:{selected:"colorbrewer"===t.usedPalette},on:{click:function(n){return t.onChangeColorPalette("colorbrewer")}}},[t._v("预设")]),e("button",{class:{selected:"custom"===t.usedPalette},on:{click:function(n){return t.onChangeColorPalette("custom")}}},[t._v("自定义")])]),e("div",{staticClass:"palette random",class:{selected:"random"===t.options.xColors},on:{click:t.onClickRandomPalette}},[e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M443.3 325.7l-35.6-35.4c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3L423 328h-99L198.2 170.8c-1.5-1.8-3.9-2.8-6.3-2.8H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h116.3l57.3 72-57.3 72H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h120c2.4 0 4.6-1 6.1-2.8l57.9-72.7 57.9 72.7c1.5 1.8 3.8 2.8 6.1 2.8h105l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l33.6-33.4c6.2-6.3 6.2-16.4-.1-22.6z"}}),e("path",{attrs:{d:"M323.7 184h99.2l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 3.1 3.1 8.2 3.1 11.3 0l35.6-35.4c6.2-6.2 6.2-16.3 0-22.5l-33.6-33.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3c-3.1 3.1-3.1 8.2 0 11.3l26.6 26.4H320c-2.4 0-4.6 1-6.1 2.8l-47.3 60.2 10.5 12.4 46.6-59.5z"}})])]),t._l(t.colorbrewer,(function(n,o){return e("div",{key:o,staticClass:"palette",class:{selected:t.options.xColors===o},on:{click:function(n){return t.onClickPalette(o)}}},t._l(n,(function(t,n){return e("div",{staticClass:"swatch",style:{background:t}})})),0)}))],2)])]),e("div",{staticClass:"tri-view__preview"},[e("div",{staticClass:"tri-view__preview-inner"},[t._m(1),e("div",{staticClass:"actions"},[e("button",{staticClass:"actions-button",on:{click:t.downloadPNG}},[e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M288 144v16h112v272H112V160h112v-16H96v304h320V144z"}}),e("path",{attrs:{d:"M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z"}})]),t._v(" PNG ")]),e("button",{staticClass:"actions-button",on:{click:t.downloadSVG}},[e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M288 144v16h112v272H112V160h112v-16H96v304h320V144z"}}),e("path",{attrs:{d:"M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z"}})]),t._v(" SVG ")])])])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"control"},[e("label",[t._v("调色板")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"copyright"},[t._v("Inspired by "),e("a",{attrs:{href:"https://trianglify.io/",target:"_blank"}},[t._v("trianglify.io")])])}],a=(e("d3b7"),{trianglify:{depUrl:"".concat("/website","/static/lib/trianglify.bundle.js"),isReady:!1},"vue-color":{depUrl:"".concat("/website","/static/lib/vue-color.min.js"),isReady:!1}});function r(t){var n=a[t];return n.isReady?Promise.resolve():new Promise((function(t,e){var o=window.document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.addEventListener("load",(function(){n.isReady=!0,t()}),!1),o.addEventListener("error",(function(){e()}),!1),o.src=n.depUrl,o.crossOrigin="anonymous",window.document.body.appendChild(o)}))}var s=e("cd5e"),c=e("2f14"),l=function(t){return function(n){switch(t){case"interpolateLinear":return trianglify.colorFunctions.interpolateLinear(n);case"sparkle":return trianglify.colorFunctions.sparkle(n/2);case"shadows":return trianglify.colorFunctions.shadows(2*n);default:throw TypeError("Unrecognized color function")}}},u={data:function(){return{$canvasWrap:null,colorbrewer:{},colorFunctionIntensity:.3,colorFunctions:[{name:"渐变",fName:"interpolateLinear"},{name:"闪烁",fName:"sparkle"},{name:"阴影",fName:"shadows"}],usedFunction:"interpolateLinear",usedPalette:"colorbrewer",options:{width:600,height:400,cellSize:75,variance:.75,seed:null,xColors:"random",yColors:"match",fill:!0,colorSpace:"lab",colorFunction:null,strokeWidth:0,points:null}}},watch:{options:{handler:function(t){this.render()},deep:!0},colorFunctionIntensity:{handler:function(t){this.render()}}},mounted:function(){this.$canvasWrap=document.querySelector(".tri-view__preview-inner"),this.render()},methods:{render:function(){var t=this;this.loadTrianglify().then((function(){try{t.clearCanvas(),t.colorbrewer=trianglify.utils.colorbrewer,null===t.options.colorFunction&&t.onChangeColorFunctionType(t.usedFunction);var n=trianglify(t.options),e=n.toCanvas();s["a"].addClass(e,"trianglify-canvas"),t.$canvasWrap.appendChild(e)}catch(o){throw o}}))},loadTrianglify:function(){return r("trianglify")},clearCanvas:function(){var t=document.querySelector(".trianglify-canvas");t&&this.$canvasWrap.removeChild(t)},onChangeColorFunctionType:function(t){this.usedFunction=t,this.options.colorFunction=l(t)(this.colorFunctionIntensity)},randomize:function(){this.colorFunctionIntensity=Math.random(),this.options.seed=Object(c["d"])(),this.options.cellSize=Object(c["c"])(20,200),this.options.variance=Math.random()},onClickRandomPalette:function(){this.options.xColors="random"},onClickPalette:function(t){this.options.xColors=t},onChangeColorPalette:function(t){this.usedPalette=t},downloadFile:function(t,n){var e=document.createElement("a");e.href=n,e.download=t,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)},downloadSVG:function(t){var n=trianglify(this.options).toSVG(),e=new window.XMLSerializer,o=e.serializeToString(n),i=window.btoa(o),a="data:image/svg+xml;base64,"+i;this.downloadFile("trianglify.svg",a)},downloadPNG:function(t){var n=trianglify(this.options).toCanvas(null,{scaling:!1}).toDataURL("image/png");this.downloadFile("trianglify.png",n)}}},d=u,p=(e("0efc"),e("2877")),v=Object(p["a"])(d,o,i,!1,null,null,null);n["default"]=v.exports},"44e7":function(t,n,e){var o=e("861d"),i=e("c6b6"),a=e("b622"),r=a("match");t.exports=function(t){var n;return o(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==i(t))}},"4d63":function(t,n,e){var o=e("83ab"),i=e("da84"),a=e("94ca"),r=e("7156"),s=e("9bf2").f,c=e("241c").f,l=e("44e7"),u=e("ad6d"),d=e("9f7f"),p=e("6eeb"),v=e("d039"),f=e("69f3").set,m=e("2626"),h=e("b622"),b=h("match"),g=i.RegExp,w=g.prototype,y=/a/g,C=/a/g,_=new g(y)!==y,x=d.UNSUPPORTED_Y,F=o&&a("RegExp",!_||x||v((function(){return C[b]=!1,g(y)!=y||g(C)==C||"/a/i"!=g(y,"i")})));if(F){var k=function(t,n){var e,o=this instanceof k,i=l(t),a=void 0===n;if(!o&&i&&t.constructor===k&&a)return t;_?i&&!a&&(t=t.source):t instanceof k&&(a&&(n=u.call(t)),t=t.source),x&&(e=!!n&&n.indexOf("y")>-1,e&&(n=n.replace(/y/g,"")));var s=r(_?new g(t,n):g(t,n),o?this:w,k);return x&&e&&f(s,{sticky:e}),s},P=function(t){t in k||s(k,t,{configurable:!0,get:function(){return g[t]},set:function(n){g[t]=n}})},N=c(g),z=0;while(N.length>z)P(N[z++]);w.constructor=k,k.prototype=w,p(i,"RegExp",k)}m("RegExp")},7156:function(t,n,e){var o=e("861d"),i=e("d2bb");t.exports=function(t,n,e){var a,r;return i&&"function"==typeof(a=n.constructor)&&a!==e&&o(r=a.prototype)&&r!==e.prototype&&i(t,r),t}},cd5e:function(t,n,e){"use strict";var o,i,a;e("4d63"),e("ac1f"),e("25f0"),e("5319");function r(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function s(t,n){var e=o(t,n)?a:i;e(t,n)}"classList"in document.documentElement?(o=function(t,n){return t.classList.contains(n)},i=function(t,n){t.classList.add(n)},a=function(t,n){t.classList.remove(n)}):(o=function(t,n){return r(n).test(t.className)},i=function(t,n){o(t,n)||(t.className=t.className+" "+n)},a=function(t,n){t.className=t.className.replace(r(n)," ")});var c={hasClass:o,addClass:i,removeClass:a,toggleClass:s,has:o,add:i,remove:a,toggle:s};n["a"]=c},d16a:function(t,n,e){},d2bb:function(t,n,e){var o=e("825a"),i=e("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(e,[]),n=e instanceof Array}catch(a){}return function(e,a){return o(e),i(a),n?t.call(e,a):e.__proto__=a,e}}():void 0)}}]);