(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-050a4a68"],{"00ee":function(t,e,n){var r=n("b622"),o=r("toStringTag"),c={};c[o]="z",t.exports="[object z]"===String(c)},"0d26":function(t,e,n){var r=n("e330"),o=Error,c=r("".replace),i=function(t){return String(o(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,s=a.test(i);t.exports=function(t,e){if(s&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=c(t,a,"");return t}},"19aa":function(t,e,n){var r=n("3a9b"),o=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw o("Incorrect invocation")}},"24f6":function(t,e,n){},2805:function(t,e,n){"use strict";n("24f6")},"2ba4":function(t,e,n){var r=n("40d5"),o=Function.prototype,c=o.apply,i=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?i.bind(c):function(){return i.apply(c,arguments)})},"3bbe":function(t,e,n){var r=n("1626"),o=String,c=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw c("Can't set "+o(t)+" as a prototype")}},4372:function(t,e,n){"use strict";n.r(e);var r=n("7a23");const o={class:"tri-view"},c={class:"tri-view__sidebar"},i={class:"tri-view__sidebar-inner"},a={class:"row"},s={class:"control col"},l=Object(r["i"])("label",null,"宽",-1),u={class:"control col"},b=Object(r["i"])("label",null,"高",-1),d={class:"control"},f=Object(r["i"])("label",null,"颜色模式",-1),p={class:"segmented-control"},v=["onClick"],O={class:"control"},m=Object(r["i"])("label",null,"强度",-1),E={class:"control"},j=Object(r["i"])("label",null,"三角偏移量",-1),h={class:"control"},R=Object(r["i"])("label",null,"格子大小",-1),y=Object(r["i"])("div",{class:"control"},[Object(r["i"])("label",null,"调色板")],-1),w={class:"palette-list"},g={class:"segmented-control"},_=Object(r["i"])("svg",{viewBox:"0 0 512 512",class:"icon"},[Object(r["i"])("path",{d:"M443.3 325.7l-35.6-35.4c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3L423 328h-99L198.2 170.8c-1.5-1.8-3.9-2.8-6.3-2.8H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h116.3l57.3 72-57.3 72H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h120c2.4 0 4.6-1 6.1-2.8l57.9-72.7 57.9 72.7c1.5 1.8 3.8 2.8 6.1 2.8h105l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l33.6-33.4c6.2-6.3 6.2-16.4-.1-22.6z"}),Object(r["i"])("path",{d:"M323.7 184h99.2l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 3.1 3.1 8.2 3.1 11.3 0l35.6-35.4c6.2-6.2 6.2-16.3 0-22.5l-33.6-33.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3c-3.1 3.1-3.1 8.2 0 11.3l26.6 26.4H320c-2.4 0-4.6 1-6.1 2.8l-47.3 60.2 10.5 12.4 46.6-59.5z"})],-1),C=[_],k=["onClick"],I={class:"tri-view__preview"},N={class:"tri-view__preview-inner",ref:"previewInnerRef"},T=Object(r["i"])("p",{class:"tip"},[Object(r["k"])(" Inspired by "),Object(r["i"])("a",{href:"https://trianglify.io/",target:"_blank"},"trianglify.io")],-1),S={class:"actions"},x=Object(r["i"])("svg",{viewBox:"0 0 512 512",class:"icon"},[Object(r["i"])("path",{d:"M288 144v16h112v272H112V160h112v-16H96v304h320V144z"}),Object(r["i"])("path",{d:"M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z"})],-1),A=Object(r["i"])("svg",{viewBox:"0 0 512 512",class:"icon"},[Object(r["i"])("path",{d:"M288 144v16h112v272H112V160h112v-16H96v304h320V144z"}),Object(r["i"])("path",{d:"M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z"})],-1);function D(t,e,n,_,D,L){return Object(r["t"])(),Object(r["h"])("div",o,[Object(r["i"])("div",c,[Object(r["i"])("div",i,[Object(r["i"])("div",a,[Object(r["i"])("div",s,[l,Object(r["F"])(Object(r["i"])("input",{class:"tri-input",type:"number","onUpdate:modelValue":e[0]||(e[0]=e=>t.options.width=e)},null,512),[[r["C"],t.options.width,void 0,{number:!0}]])]),Object(r["i"])("div",u,[b,Object(r["F"])(Object(r["i"])("input",{class:"tri-input",type:"number","onUpdate:modelValue":e[1]||(e[1]=e=>t.options.height=e)},null,512),[[r["C"],t.options.height,void 0,{number:!0}]])])]),Object(r["i"])("div",d,[f,Object(r["i"])("div",p,[(Object(r["t"])(!0),Object(r["h"])(r["a"],null,Object(r["x"])(t.colorFunctions,(e,n)=>(Object(r["t"])(),Object(r["h"])("button",{key:n,onClick:n=>t.onChangeColorFunctionType(e.fName),class:Object(r["o"])({selected:e.fName===t.usedFunction})},Object(r["B"])(e.name),11,v))),128))])]),Object(r["i"])("div",O,[m,Object(r["F"])(Object(r["i"])("input",{class:"tri-input",type:"range",min:"0.0",max:"1",step:"0.01","onUpdate:modelValue":e[2]||(e[2]=e=>t.colorFunctionIntensity=e)},null,512),[[r["C"],t.colorFunctionIntensity,void 0,{number:!0}]])]),Object(r["i"])("div",E,[j,Object(r["F"])(Object(r["i"])("input",{class:"tri-input",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":e[3]||(e[3]=e=>t.options.variance=e)},null,512),[[r["C"],t.options.variance,void 0,{number:!0}]])]),Object(r["i"])("div",h,[R,Object(r["F"])(Object(r["i"])("input",{class:"tri-input",type:"range",min:"20",max:"200",step:"10","onUpdate:modelValue":e[4]||(e[4]=e=>t.options.cellSize=e)},null,512),[[r["C"],t.options.cellSize,void 0,{number:!0}]])]),Object(r["i"])("button",{class:"randomize",onClick:e[5]||(e[5]=(...e)=>t.randomize&&t.randomize(...e))},"随机"),y,Object(r["i"])("div",w,[Object(r["i"])("div",g,[Object(r["i"])("button",{class:Object(r["o"])({selected:"colorbrewer"===t.usedPalette}),onClick:e[6]||(e[6]=e=>t.onChangeColorPalette("colorbrewer"))}," 预设 ",2),Object(r["i"])("button",{class:Object(r["o"])({selected:"custom"===t.usedPalette}),onClick:e[7]||(e[7]=e=>t.onChangeColorPalette("custom"))}," 自定义 ",2)]),Object(r["i"])("div",{class:Object(r["o"])(["palette random",{selected:"random"===t.options.xColors}]),onClick:e[8]||(e[8]=(...e)=>t.onClickRandomPalette&&t.onClickRandomPalette(...e))},C,2),(Object(r["t"])(!0),Object(r["h"])(r["a"],null,Object(r["x"])(t.colorbrewer,(e,n)=>(Object(r["t"])(),Object(r["h"])("div",{class:Object(r["o"])(["palette",{selected:t.options.xColors===n}]),key:n,onClick:e=>t.onClickPalette(n)},[(Object(r["t"])(!0),Object(r["h"])(r["a"],null,Object(r["x"])(e,(t,e)=>(Object(r["t"])(),Object(r["h"])("div",{class:"swatch",style:Object(r["p"])({background:t})},null,4))),256))],10,k))),128))])])]),Object(r["i"])("div",I,[Object(r["i"])("div",N,[T,Object(r["i"])("div",S,[Object(r["i"])("button",{class:"actions-button",onClick:e[9]||(e[9]=(...e)=>t.downloadPNG&&t.downloadPNG(...e))},[x,Object(r["k"])(" PNG ")]),Object(r["i"])("button",{class:"actions-button",onClick:e[10]||(e[10]=(...e)=>t.downloadSVG&&t.downloadSVG(...e))},[A,Object(r["k"])(" SVG ")])])],512)])])}n("d9e2"),n("b7ef");var L=n("af70"),F=n("cd5e"),M=n("2f14");const P=[{name:"渐变",fName:"interpolateLinear"},{name:"闪烁",fName:"sparkle"},{name:"阴影",fName:"shadows"}],U=t=>e=>{switch(t){case"interpolateLinear":return trianglify.colorFunctions.interpolateLinear(e);case"sparkle":return trianglify.colorFunctions.sparkle(e/2);case"shadows":return trianglify.colorFunctions.shadows(2*e);default:throw TypeError("Unrecognized color function")}};var V=Object(r["m"])({name:"Trianglify",setup(){const t=Object(r["w"])(null),e=Object(r["w"])({}),n=Object(r["w"])(.3),o=Object(r["w"])("interpolateLinear"),c=Object(r["w"])("colorbrewer"),i=Object(r["w"])({width:600,height:400,cellSize:75,variance:.75,seed:null,xColors:"random",yColors:"match",fill:!0,colorSpace:"lab",colorFunction:null,strokeWidth:0,points:null});function a(){return Object(L["a"])("trianglify")}function s(){const e=document.querySelector(".trianglify-canvas");e&&t.value.removeChild(e)}function l(t){o.value=t,i.value.colorFunction=U(t)(n.value)}function u(){a().then(()=>{try{s(),e.value=trianglify.utils.colorbrewer,null===i.value.colorFunction&&l(o.value);const n=trianglify(i.value),r=n.toCanvas();F["a"].addClass(r,"trianglify-canvas"),t.value.appendChild(r)}catch(n){throw n}})}function b(){n.value=Math.random(),i.value.seed=Object(M["f"])(),i.value.cellSize=Object(M["e"])(20,200),i.value.variance=Math.random()}function d(){i.value.xColors="random"}function f(t){i.value.xColors=t}function p(t){c.value=t}return Object(r["r"])(()=>{u()}),Object(r["D"])(()=>i.value,t=>{u()},{deep:!0}),Object(r["D"])(()=>n.value,t=>{}),{colorFunctions:P,previewInnerRef:t,colorbrewer:e,colorFunctionIntensity:n,usedFunction:o,usedPalette:c,options:i,onChangeColorFunctionType:l,randomize:b,onClickRandomPalette:d,onClickPalette:f,onChangeColorPalette:p}}}),z=(n("2805"),n("6b0d")),H=n.n(z);const G=H()(V,[["render",D]]);e["default"]=G},"577e":function(t,e,n){var r=n("f5dfe"),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},7156:function(t,e,n){var r=n("1626"),o=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,a;return c&&r(i=e.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&c(t,a),t}},ab36:function(t,e,n){var r=n("861d"),o=n("9112");t.exports=function(t,e){r(e)&&"cause"in e&&o(t,"cause",e.cause)}},aeb0:function(t,e,n){var r=n("9bf2").f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},af70:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r={trianglify:{depUrl:"/website/static/lib/trianglify.bundle.js",isReady:!1},html2canvas:{depUrl:"/website/static/lib/html2canvas.min.js",isReady:!1},stackblur:{depUrl:"/website/static/lib/stackblur.min.js",isReady:!1}};function o(t){const e=r[t];return e.isReady?Promise.resolve():new Promise((function(t,n){const r=window.document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.addEventListener("load",(function(){e.isReady=!0,t()}),!1),r.addEventListener("error",(function(){n()}),!1),r.src=e.depUrl,r.crossOrigin="anonymous",window.document.body.appendChild(r)}))}},b7ef:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d066"),i=n("5c6c"),a=n("9bf2").f,s=n("1a2d"),l=n("19aa"),u=n("7156"),b=n("e391"),d=n("cf98"),f=n("0d26"),p=n("83ab"),v=n("c430"),O="DOMException",m=c("Error"),E=c(O),j=function(){l(this,h);var t=arguments.length,e=b(t<1?void 0:arguments[0]),n=b(t<2?void 0:arguments[1],"Error"),r=new E(e,n),o=m(e);return o.name=O,a(r,"stack",i(1,f(o.stack,1))),u(r,this,j),r},h=j.prototype=E.prototype,R="stack"in m(O),y="stack"in new E(1,2),w=E&&p&&Object.getOwnPropertyDescriptor(o,O),g=!!w&&!(w.writable&&w.configurable),_=R&&!g&&!y;r({global:!0,constructor:!0,forced:v||_},{DOMException:_?j:E});var C=c(O),k=C.prototype;if(k.constructor!==C)for(var I in v||a(k,"constructor",i(1,C)),d)if(s(d,I)){var N=d[I],T=N.s;s(C,T)||a(C,T,i(6,N.c))}},b980:function(t,e,n){var r=n("d039"),o=n("5c6c");t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},cd5e:function(t,e,n){"use strict";function r(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var o,c,i;function a(t,e){var n=o(t,e)?i:c;n(t,e)}"classList"in document.documentElement?(o=function(t,e){return t.classList.contains(e)},c=function(t,e){t.classList.add(e)},i=function(t,e){t.classList.remove(e)}):(o=function(t,e){return r(e).test(t.className)},c=function(t,e){o(t,e)||(t.className=t.className+" "+e)},i=function(t,e){t.className=t.className.replace(r(e)," ")});var s={hasClass:o,addClass:c,removeClass:i,toggleClass:a,has:o,add:c,remove:i,toggle:a};e["a"]=s},cf98:function(t,e){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},d2bb:function(t,e,n){var r=n("e330"),o=n("825a"),c=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(i){}return function(n,r){return o(n),c(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d9e2:function(t,e,n){var r=n("23e7"),o=n("da84"),c=n("2ba4"),i=n("e5cb"),a="WebAssembly",s=o[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=i(t,e,l),r({global:!0,constructor:!0,arity:1,forced:l},n)},b=function(t,e){if(s&&s[t]){var n={};n[t]=i(a+"."+t,e,l),r({target:a,stat:!0,constructor:!0,arity:1,forced:l},n)}};u("Error",(function(t){return function(e){return c(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return c(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return c(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return c(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return c(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return c(t,this,arguments)}})),u("URIError",(function(t){return function(e){return c(t,this,arguments)}})),b("CompileError",(function(t){return function(e){return c(t,this,arguments)}})),b("LinkError",(function(t){return function(e){return c(t,this,arguments)}})),b("RuntimeError",(function(t){return function(e){return c(t,this,arguments)}}))},e391:function(t,e,n){var r=n("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},e5cb:function(t,e,n){"use strict";var r=n("d066"),o=n("1a2d"),c=n("9112"),i=n("3a9b"),a=n("d2bb"),s=n("e893"),l=n("aeb0"),u=n("7156"),b=n("e391"),d=n("ab36"),f=n("0d26"),p=n("b980"),v=n("83ab"),O=n("c430");t.exports=function(t,e,n,m){var E="stackTraceLimit",j=m?2:1,h=t.split("."),R=h[h.length-1],y=r.apply(null,h);if(y){var w=y.prototype;if(!O&&o(w,"cause")&&delete w.cause,!n)return y;var g=r("Error"),_=e((function(t,e){var n=b(m?e:t,void 0),r=m?new y(t):new y;return void 0!==n&&c(r,"message",n),p&&c(r,"stack",f(r.stack,2)),this&&i(w,this)&&u(r,this,_),arguments.length>j&&d(r,arguments[j]),r}));if(_.prototype=w,"Error"!==R?a?a(_,g):s(_,g,{name:!0}):v&&E in y&&(l(_,y,E),l(_,y,"prepareStackTrace")),s(_,y),!O)try{w.name!==R&&c(w,"name",R),w.constructor=_}catch(C){}return _}}},f5dfe:function(t,e,n){var r=n("00ee"),o=n("1626"),c=n("c6b6"),i=n("b622"),a=i("toStringTag"),s=Object,l="Arguments"==c(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?c:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=s(t),a))?n:l?c(e):"Object"==(r=c(e))&&o(e.callee)?"Arguments":r}}}]);