System.register(["./element-plus-legacy-0c4dfff3.js","./@vue-legacy-0c361579.js","./index-legacy-876ca1cb.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,l){"use strict";var t,n,u,a,r,o,s,c,i,d,f,m,y,g,p,j;return{setters:[function(e){t=e.J,n=e.e,u=e.d,a=e.h,r=e.w,o=e.K,s=e.b},function(e){c=e.o,i=e.c,d=e.a,f=e.X,m=e.P,y=e.S,g=e.a1,p=e.W},function(e){j=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={class:"common-form"},h={class:"d-s-c"},I={class:"d-s-c"};e("default",j({data:function(){return{}},props:["curItem","selectedIndex","opts"],created:function(){this.curItem.style.lineHeight=parseInt(this.curItem.style.lineHeight),this.curItem.style.paddingTop=parseInt(this.curItem.style.paddingTop)},methods:{}},[["render",function(e,j,b,V,v,_){var x=t,C=n,w=u,k=a,U=r,H=o,S=s;return c(),i("div",null,[d("div",l,[d("span",null,f(b.curItem.name),1)]),m(S,{size:"small",model:b.curItem,"label-width":"100px"},{default:y((function(){return[m(w,{label:"背景颜色："},{default:y((function(){return[d("div",h,[m(x,{modelValue:b.curItem.style.background,"onUpdate:modelValue":j[0]||(j[0]=function(e){return b.curItem.style.background=e})},null,8,["modelValue"]),m(C,{type:"button",style:{"margin-left":"10px"},onClick:j[1]||(j[1]=g((function(l){return e.$parent.onEditorResetColor(b.curItem.style,"btnColor","#ffffff")}),["stop"]))},{default:y((function(){return[p("重置")]})),_:1})])]})),_:1}),m(w,{label:"线条样式："},{default:y((function(){return[m(U,{modelValue:b.curItem.style.lineStyle,"onUpdate:modelValue":j[2]||(j[2]=function(e){return b.curItem.style.lineStyle=e})},{default:y((function(){return[m(k,{label:"solid"},{default:y((function(){return[p("实线")]})),_:1}),m(k,{label:"dashed"},{default:y((function(){return[p("虚线")]})),_:1}),m(k,{label:"dotted"},{default:y((function(){return[p("点状")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),m(w,{label:"线条颜色："},{default:y((function(){return[d("div",I,[m(x,{modelValue:b.curItem.style.lineColor,"onUpdate:modelValue":j[3]||(j[3]=function(e){return b.curItem.style.lineColor=e})},null,8,["modelValue"]),m(C,{type:"button",style:{"margin-left":"10px"},onClick:j[4]||(j[4]=g((function(l){return e.$parent.onEditorResetColor(b.curItem.style,"btnColor","#ffffff")}),["stop"]))},{default:y((function(){return[p("重置")]})),_:1})])]})),_:1}),m(w,{label:"线条高度："},{default:y((function(){return[m(H,{modelValue:b.curItem.style.lineHeight,"onUpdate:modelValue":j[5]||(j[5]=function(e){return b.curItem.style.lineHeight=e}),"show-input":""},null,8,["modelValue"])]})),_:1}),m(w,{label:"上下边距："},{default:y((function(){return[m(H,{modelValue:b.curItem.style.paddingTop,"onUpdate:modelValue":j[6]||(j[6]=function(e){return b.curItem.style.paddingTop=e}),"show-input":""},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));