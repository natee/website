(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-691c9cd1"],{"4a99":function(e,t,s){"use strict";s("a75c")},"65e5":function(e,t,s){"use strict";s.r(t);var n=s("7a23");const o={key:"0",class:"qs flex","data-delay":"0"},a=Object(n["i"])("p",{class:"qs-title"},"你知道我是谁吗？",-1),c={class:"answer"},l=Object(n["i"])("div",{class:"mouse"},null,-1),u={key:"1",class:"qs flex","data-delay":"0"},i={class:"qs-title"},b={class:"answer"},r=Object(n["i"])("div",{class:"mouse"},null,-1),O={key:"2",class:"qs flex","data-delay":"0"},j={class:"qs-title"},d={class:"answer"},p={key:"3",class:"qs flex guess-number","data-delay":"0"},y=["disabled"],v={class:"input__label input__label--haruki",for:"input-1"},g={key:0,class:"exp wrong-color"},h={key:0,class:"win"},M={class:"learn-pinyin",key:"9"};function k(e,t,s,k,w,f){const x=Object(n["y"])("Button"),m=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["f"])(n["c"],{tag:"div",onAfterEnter:e.pageEnter,class:Object(n["o"])(["get-token hide-footer flex",{happy:"yes"===e.buttonType,sad:"no"===e.buttonType,"has-face":[0,1].indexOf(e.qsIndex)>-1}])},{default:Object(n["E"])(()=>[0===e.qsIndex?(Object(n["t"])(),Object(n["h"])("div",o,[a,Object(n["i"])("div",c,[Object(n["l"])(x,{class:"answer-btn btn-boxshadow",type:"yes",text:"是",onMouseover:e.baseMouseIn,onMouseout:e.baseMouseOut,onClick:e.clickYes},null,8,["onMouseover","onMouseout","onClick"]),Object(n["l"])(x,{class:"answer-btn btn-boxshadow",type:"no",text:"不",onMouseover:e.baseMouseIn,onMouseout:e.baseMouseOut,onClick:e.clickNo},null,8,["onMouseover","onMouseout","onClick"]),Object(n["i"])("div",{class:Object(n["o"])(["tear tear-left",{"animate-drip":"no"===e.buttonType}])},null,2),Object(n["i"])("div",{class:Object(n["o"])(["tear tear-right",{"animate-drip":"no"===e.buttonType}])},null,2),l])])):Object(n["g"])("",!0),1===e.qsIndex?(Object(n["t"])(),Object(n["h"])("div",u,[Object(n["i"])("p",i,Object(n["B"])("yes"===e.lastAnswerType?"知道就好，拼音会吧？":'不知道？去"关于我"找找看吧。'),1),Object(n["i"])("div",b,[Object(n["l"])(x,{class:"answer-btn btn-boxshadow",type:"yes",text:"是",onMouseover:e.baseMouseIn,onMouseout:e.baseMouseOut,onClick:e.clickYes},null,8,["onMouseover","onMouseout","onClick"]),Object(n["l"])(x,{class:"answer-btn btn-boxshadow",type:"no",text:"不",onMouseover:e.baseMouseIn,onMouseout:e.baseMouseOut,onClick:e.clickNo},null,8,["onMouseover","onMouseout","onClick"]),Object(n["i"])("div",{class:Object(n["o"])(["tear tear-left",{"animate-drip":"no"===e.buttonType}])},null,2),Object(n["i"])("div",{class:Object(n["o"])(["tear tear-right",{"animate-drip":"no"===e.buttonType}])},null,2),r])])):Object(n["g"])("",!0),2===e.qsIndex?(Object(n["t"])(),Object(n["h"])("div",O,[Object(n["i"])("p",j,Object(n["B"])("yes"===e.lastAnswerType?"很好，先把拼音倒着写在小纸条上":"额，请教一下别人吧，再见！"),1),Object(n["i"])("div",d,[Object(n["l"])(x,{class:"answer-btn btn-boxshadow",type:"yes",text:"是",onMouseover:e.baseMouseIn,onMouseout:e.baseMouseOut,onClick:e.clickYes},null,8,["onMouseover","onMouseout","onClick"]),Object(n["l"])(x,{class:"answer-btn btn-boxshadow",type:"no",text:"不",onMouseover:e.baseMouseIn,onMouseout:e.baseMouseOut,onClick:e.clickNo},null,8,["onMouseover","onMouseout","onClick"])])])):Object(n["g"])("",!0),3===e.qsIndex?(Object(n["t"])(),Object(n["h"])("div",p,[Object(n["i"])("span",{class:Object(n["o"])(["input input--haruki",{"input--filled":!!e.guessVal}])},[Object(n["F"])(Object(n["i"])("input",{class:"input__field input__field--haruki",type:"text",disabled:e.pass&&!!e.guessVal,"onUpdate:modelValue":t[0]||(t[0]=t=>e.guessVal=t),maxlength:"6",onChange:t[1]||(t[1]=(...t)=>e.guessAnswer&&e.guessAnswer(...t))},null,40,y),[[n["C"],e.guessVal,void 0,{lazy:!0}]]),Object(n["i"])("label",v,[Object(n["i"])("span",{class:Object(n["o"])(["input__label-content input__label-content--haruki",{"right-color":e.pass}])},[!e.pass&&e.guessVal?(Object(n["t"])(),Object(n["h"])("i",g,Object(n["B"])(e.exp),1)):Object(n["g"])("",!0),Object(n["k"])(" "+Object(n["B"])(e.displayText),1)],2)])],2),e.pass?(Object(n["t"])(),Object(n["h"])("div",h,[Object(n["i"])("p",null,[Object(n["k"])(" 小纸条上的内容+"+Object(n["B"])(e.guessVal)+" ",1),Object(n["l"])(m,{to:"index",class:"login"},{default:Object(n["E"])(()=>[Object(n["k"])("登录")]),_:1})])])):Object(n["g"])("",!0)])):Object(n["g"])("",!0),e.learnPinyin?(Object(n["t"])(),Object(n["h"])("div",M,[Object(n["l"])(x,{class:"btn-boxshadow",text:"学废了",onClick:e.canPinyin},null,8,["onClick"])])):Object(n["g"])("",!0)]),_:1},8,["onAfterEnter","class"])}s("14d9");var w=s("6605"),f=s("5956"),x=s("1209");class m{constructor(e,t){this.DOM={el:e,elHeight:e.clientHeight},this.wrapHeight=t}enter(){Object(x["a"])({targets:this.DOM.el,translateY:-this.wrapHeight/2-150,duration:500,delay:function(e){return+e.getAttribute("data-delay")},easing:"cubicBezier(0.91, -0.54, 0.29, 1.56)"})}exit(){Object(x["a"])({targets:this.DOM.el,translateY:-this.wrapHeight-this.DOM.elHeight,duration:500,delay:100,easing:"cubicBezier(0.91, -0.54, 0.29, 1.56)"})}}var C=s("2f14"),q=s("bab1"),_=Object(n["m"])({name:"GetToken",components:{Button:f["a"]},setup(){const e=Object(w["c"])(),t=Object(n["w"])(""),s=Object(n["w"])(0),o=Object(n["w"])("yes"),a=Object(n["w"])(""),c=Object(n["w"])("嗯，猜一个数字......"),l=Object(n["w"])("(╯▔︵▔)╯"),u=Object(n["w"])(!1),i=Object(n["w"])(!1);function b(e){t.value=e}function r(){t.value=""}function O(e){r(),s.value++,o.value=e}function j(){const e=s.value;0===e?O("yes"):1===e?"no"===o.value?y("/aboutMe"):O("yes"):2===e&&("yes"===o.value?O("yes"):i.value=!0)}function d(){i.value=!1,s.value--,o.value="yes",r()}function p(){const e=s.value;0===e?O("no"):1===e?"no"===o.value?y("aboutMe"):O("no"):2===e&&y("/")}function y(t){e.push(t)}function v(){const e=document.body.clientHeight,t=Array.from(document.querySelectorAll(".qs")),s=new m(t[0],e);s.enter()}function g(){const e=this.guessVal.trim();if(!e)return c.value="嗯，猜一个数字......",void(u.value=!0);isNaN(e)?c.value="数字数字！":Object(C["b"])(e)<q["b"]?(c.value=e+" < N",u.value=!1):Object(C["b"])(e)>q["b"]?(c.value=e+" > N",u.value=!1):(c.value="恭喜你猜对了",u.value=!0)}return Object(n["r"])(()=>{console.log('God: "googood!"'),v()}),{buttonType:t,qsIndex:s,lastAnswerType:o,guessVal:a,displayText:c,exp:l,pass:u,learnPinyin:i,baseMouseIn:b,baseMouseOut:r,clickYes:j,clickNo:p,canPinyin:d,guessAnswer:g,pageEnter:v}}}),I=(s("4a99"),s("6b0d")),T=s.n(I);const A=T()(_,[["render",k]]);t["default"]=A},a75c:function(e,t,s){}}]);