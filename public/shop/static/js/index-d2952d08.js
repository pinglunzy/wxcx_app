import{_ as t,u as e}from"./index-cf2f72b9.js";import s from"./index-d18b90fa.js";import i from"./index-fbfb7f0b.js";import a from"./index-de9cb5e7.js";import r from"./index-102d5f8f.js";import{F as o,K as p,L as m,al as u,o as n,c as d,T as c,Y as j}from"./@vue-8009ac6a.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-6a1b7bd0.js";import"./object-inspect-c71aff05.js";import"./element-plus-2311c378.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-ueditor-wrap-71bb720e.js";import"./product-f6413ef7.js";import"./add-8b770f34.js";import"./Upload-846deafd.js";import"./edit-b3ec6457.js";import"./add-ff312aba.js";import"./edit-d932e725.js";import"./add-572cd1ad.js";import"./edit-15ae2312.js";import"./add-6bb7a774.js";import"./edit-2368f23a.js";const l=o({components:{spec:s,attr:i,unit:a,feed:r},setup(){const{bus_emit:t,bus_off:s,bus_on:i}=e(),a=p({bus_emit:t,bus_off:s,bus_on:i,loading:!0,form:{},param:{},activeName:"spec",sourceList:[{key:"spec",value:"规格库",path:"/product/expand/spec/index"},{key:"attr",value:"属性库",path:"/product/expand/attr/index"},{key:"feed",value:"加料库",path:"/product/expand/feed/index"},{key:"unit",value:"单位库",path:"/product/expand/unit/index"}],tabList:[],paramsFlag:!1});return{...m(a)}},created(){this.tabList=this.authFilter(),this.tabList.length>0&&(this.activeName=this.tabList[0].key),null!=this.$route.query.type&&(this.activeName=this.$route.query.type),this.bus_on("activeValue",(t=>{this.activeName=t}));let t={active:this.activeName,list:this.tabList,tab_type:"expand"};this.bus_emit("tabData",t)},beforeUnmount(){this.bus_emit("tabData",{active:null,tab_type:"expand",list:[]}),this.bus_off("activeValue")},methods:{authFilter(){let t=[];for(let e=0;e<this.sourceList.length;e++){let s=this.sourceList[e];this.$filter.isAuth(s.path)&&t.push(s)}return t}}}),h={class:"common-seach-wrap"};const b=t(l,[["render",function(t,e,s,i,a,r){const o=u("spec"),p=u("attr"),m=u("unit"),l=u("feed");return n(),d("div",h,["spec"==t.activeName?(n(),c(o,{key:0})):j("",!0),"attr"==t.activeName?(n(),c(p,{key:1})):j("",!0),"unit"==t.activeName?(n(),c(m,{key:2})):j("",!0),"feed"==t.activeName?(n(),c(l,{key:3})):j("",!0)])}]]);export{b as default};