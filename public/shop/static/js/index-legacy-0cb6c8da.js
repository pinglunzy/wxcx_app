!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function n(t,n,l){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var a=l.call(t,n||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}System.register(["./index-legacy-876ca1cb.js","./index-legacy-85af0df7.js","./index-legacy-42c97114.js","./@vue-legacy-0c361579.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./call-bind-legacy-8dd3cf22.js","./object-inspect-legacy-c9b49e9b.js","./element-plus-legacy-0c4dfff3.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-ueditor-wrap-legacy-b853d0ad.js","./product-legacy-64fe8576.js","./Add-legacy-f411a651.js","./Upload-legacy-5f9ebe89.js","./Edit-legacy-2a7323cd.js"],(function(e,l){"use strict";var a,r,i,u,c,s,o,y,f,p,b,g;return{setters:[function(e){a=e._,r=e.u},function(e){i=e.default},function(e){u=e.default},function(e){c=e.F,s=e.K,o=e.L,y=e.al,f=e.o,p=e.c,b=e.T,g=e.Y},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=c({components:{categoryindex:i,productindex:u},setup:function(){var e=r(),l=e.bus_emit,a=e.bus_off,i=e.bus_on,u=s({bus_emit:l,bus_off:a,bus_on:i,loading:!0,form:{},param:{},activeName:"productindex",sourceList:[{key:"productindex",value:"商品管理",path:"/product/takeaway/product/index"},{key:"categoryindex",value:"分类管理",path:"/product/takeaway/category/index"}],tabList:[],paramsFlag:!1});return function(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o(u))},created:function(){var e=this;this.tabList=this.authFilter(),this.tabList.length>0&&(this.activeName=this.tabList[0].key),null!=this.$route.query.type&&(this.activeName=this.$route.query.type),this.bus_on("activeValue",(function(t){e.activeName=t}));var t={active:this.activeName,list:this.tabList,tab_type:"takeaway"};this.bus_emit("tabData",t)},beforeUnmount:function(){this.bus_emit("tabData",{active:null,tab_type:"takeaway",list:[]}),this.bus_off("activeValue")},methods:{authFilter:function(){for(var e=[],t=0;t<this.sourceList.length;t++){var n=this.sourceList[t];this.$filter.isAuth(n.path)&&e.push(n)}return e}}}),d={class:"common-seach-wrap"};e("default",a(l,[["render",function(e,t,n,l,a,r){var i=y("productindex"),u=y("categoryindex");return f(),p("div",d,["productindex"==e.activeName?(f(),b(i,{key:0})):g("",!0),"categoryindex"==e.activeName?(f(),b(u,{key:1})):g("",!0)])}]]))}}}))}();