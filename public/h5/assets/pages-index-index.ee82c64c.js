import{_ as t,o as a,c as e,w as l,a as s,b as i,F as o,r as n,d,t as c,i as r,S as u,e as m,f as g,n as p,g as f,h as y,j as _,k as D,u as h,s as x,l as k,m as b,p as v,q as w,v as C,x as P,y as U}from"./index-691f12c6.js";import{r as S}from"./uni-app.es.7daea22d.js";const Q=t({components:{banner:t({data:()=>({indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,indicatorActiveColor:"#ffffff"}),props:["itemData"],created(){this.interval=this.itemData.params.interval,this.indicatorActiveColor=this.itemData.style.btnColor},methods:{gotoPages(t){this.gotoPage(t.linkUrl)}}},[["render",function(t,p,f,y,_,D){const h=r,x=u,k=m,b=g;return a(),e(b,null,{default:l((()=>[s(b,{class:"diy-banner-box"},{default:l((()=>[s(k,{class:"swiper","indicator-active-color":_.indicatorActiveColor,autoplay:_.autoplay,interval:_.interval,duration:_.duration},{default:l((()=>[(a(!0),i(o,null,n(f.itemData.data,((t,i)=>(a(),e(x,{key:i,onClick:a=>D.gotoPages(t)},{default:l((()=>[s(h,{src:t.imgUrl},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-active-color","autoplay","interval","duration"])])),_:1}),s(b,{class:"diy-banner-xf d-b-c"},{default:l((()=>[s(b,{class:"banner-xf-box",onClick:p[0]||(p[0]=a=>t.gotoPage("/"+f.itemData.params.nav[0].navlinkUrl))},{default:l((()=>[s(b,{class:"rides"},{default:l((()=>[s(h,{src:f.itemData.params.nav[0].navimgUrl},null,8,["src"])])),_:1}),s(b,{class:"rides_title"},{default:l((()=>[d(c(f.itemData.params.nav[0].title),1)])),_:1}),s(b,{class:"rides_text"},{default:l((()=>[d(c(f.itemData.params.nav[0].text),1)])),_:1})])),_:1}),s(b,{class:"banner-xf-box",onClick:p[1]||(p[1]=a=>t.gotoPage("/"+f.itemData.params.nav[1].navlinkUrl))},{default:l((()=>[s(b,{class:"rides"},{default:l((()=>[s(h,{src:f.itemData.params.nav[1].navimgUrl},null,8,["src"])])),_:1}),s(b,{class:"rides_title"},{default:l((()=>[d(c(f.itemData.params.nav[1].title),1)])),_:1}),s(b,{class:"rides_text"},{default:l((()=>[d(c(f.itemData.params.nav[1].text),1)])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-fd84872a"]]),windows:t({data:()=>({}),props:["itemData"],methods:{gotoPages(t){this.gotoPage(t.linkUrl)}}},[["render",function(t,d,c,u,m,_){const D=r,h=g;return a(),e(h,{class:"diy-window",style:f({background:c.itemData.style.background,padding:c.itemData.style.paddingTop+"px "+c.itemData.style.paddingLeft+"px"})},{default:l((()=>[c.itemData.style.layout>-1?(a(),e(h,{key:0,class:p(["data-list","column__"+c.itemData.style.layout])},{default:l((()=>[(a(!0),i(o,null,n(c.itemData.data,((t,i)=>(a(),e(h,{class:"item",key:i,onClick:a=>_.gotoPages(t)},{default:l((()=>[s(h,{class:"item-image",style:f({padding:c.itemData.style.paddingTop+"px "+c.itemData.style.paddingLeft+"px"})},{default:l((()=>[s(D,{src:t.imgUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["style"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class"])):(a(),e(h,{key:1,class:"display",style:f({padding:c.itemData.style.paddingTop+"px "+c.itemData.style.paddingLeft+"px"})},{default:l((()=>[s(h,{class:"img-box-wrap-1"},{default:l((()=>[s(h,{class:"img-box",onClick:d[0]||(d[0]=t=>_.gotoPages(c.itemData.data[0]))},{default:l((()=>[s(D,{src:c.itemData.data[0].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1}),s(h,{class:"percent-w50 d-s-c d-c"},{default:l((()=>[c.itemData.data.length>=2?(a(),e(h,{key:0,class:"img-box-wrap-2"},{default:l((()=>[s(h,{class:"img-box",onClick:d[1]||(d[1]=t=>_.gotoPages(c.itemData.data[1]))},{default:l((()=>[s(D,{src:c.itemData.data[1].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):y("",!0),s(h,{class:"d-s-c img-box-wrap-3"},{default:l((()=>[c.itemData.data.length>=3?(a(),e(h,{key:0,class:"img-box-wrap-4"},{default:l((()=>[s(h,{class:"img-box",onClick:d[2]||(d[2]=t=>_.gotoPages(c.itemData.data[2]))},{default:l((()=>[s(D,{src:c.itemData.data[2].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):y("",!0),c.itemData.data.length>=4?(a(),e(h,{key:1,class:"img-box-wrap-4"},{default:l((()=>[s(h,{class:"img-box",onClick:d[3]||(d[3]=t=>_.gotoPages(c.itemData.data[3]))},{default:l((()=>[s(D,{src:c.itemData.data[3].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):y("",!0)])),_:1})])),_:1})])),_:1},8,["style"]))])),_:1},8,["style"])}],["__scopeId","data-v-ba7d0e6e"]]),navBar:t({data:()=>({item_width:"",item_height:""}),props:["itemData"],created(){this.item_width=1==this.itemData.style.rowsNum?"690rpx":"330rpx",this.item_height=1==this.itemData.style.rowsNum?"150rpx":"254rpx"},methods:{gotoDetail(t){let a=this;console.log(t),t.startsWith("scanQrcode")?a[t]():a.gotoPage(t)},scanQrcode:function(){this.$emit("scanQrcode")}}},[["render",function(t,u,m,p,D,h){const x=g,k=_,b=r;return a(),e(x,null,{default:l((()=>[s(x,{class:"diy-navbar"},{default:l((()=>[1==m.itemData.style.rowsNum?(a(!0),i(o,{key:0},n(m.itemData.data,((t,i)=>(a(),e(x,{class:"item rowsNum1",key:i,onClick:a=>h.gotoDetail(t.linkUrl)},{default:l((()=>[s(x,{class:"hh100 d-c-s d-c flex-1"},{default:l((()=>[s(x,{class:"d-s-c mb10"},{default:l((()=>[s(x,{class:"gray3 title flex-1"},{default:l((()=>[d(c(t.title),1)])),_:2},1024),s(x,{class:"icon iconfont icon-jiantou"})])),_:2},1024),s(k,{class:"gray9 text",style:f({color:t.color})},{default:l((()=>[d(c(t.text),1)])),_:2},1032,["style"])])),_:2},1024),s(x,{class:"nav-image"},{default:l((()=>[s(b,{src:t.imageUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1024)])),_:2},1032,["onClick"])))),128)):y("",!0),2==m.itemData.style.rowsNum?(a(!0),i(o,{key:1},n(m.itemData.data,((t,i)=>(a(),e(x,{class:"item rowsNum2",key:i,onClick:a=>h.gotoDetail(t.linkUrl)},{default:l((()=>[s(x,{class:"nav-image"},{default:l((()=>[s(b,{src:t.imageUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1024),s(x,{class:"d-s-c"},{default:l((()=>[s(x,{class:"gray3 title flex-1"},{default:l((()=>[d(c(t.title),1)])),_:2},1024)])),_:2},1024),s(x,{class:"gray9 text",style:f({color:t.color})},{default:l((()=>[d(c(t.text),1)])),_:2},1032,["style"])])),_:2},1032,["onClick"])))),128)):y("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-8bfc0117"]]),blank:t({data:()=>({}),props:["itemData"],methods:{}},[["render",function(t,l,s,i,o,n){const d=g;return a(),e(d,{class:"diy-blank",style:f({height:s.itemData.style.height+"px",background:s.itemData.style.background})},null,8,["style"])}]]),guide:t({data:()=>({}),props:["itemData"],methods:{}},[["render",function(t,i,o,n,d,c){const r=g;return a(),e(r,{class:"diy-guide",style:f({padding:o.itemData.style.paddingTop+"px 0",background:o.itemData.style.background})},{default:l((()=>[s(r,{class:"line",style:f({borderTopWidth:o.itemData.style.lineHeight+"px",borderTopColor:o.itemData.style.lineColor,borderTopStyle:o.itemData.style.lineStyle})},null,8,["style"])])),_:1},8,["style"])}]])},data:()=>({}),props:["diyItems"],created(){},methods:{scanQrcode(){this.$emit("scanQrcode")}}},[["render",function(t,s,d,c,r,u){const m=D("banner"),p=D("windows"),f=D("navBar"),_=D("blank"),h=D("guide"),x=g;return a(),e(x,null,{default:l((()=>[(a(!0),i(o,null,n(d.diyItems,((t,l)=>(a(),i(o,{key:l},["banner"===t.type&&null!=t.data?(a(),e(m,{key:0,itemData:t},null,8,["itemData"])):y("",!0),"window"==t.type&&null!=t.data?(a(),e(p,{key:1,itemData:t},null,8,["itemData"])):y("",!0),"navBar"===t.type&&null!=t.data?(a(),e(f,{key:2,itemData:t,onScanQrcode:u.scanQrcode},null,8,["itemData","onScanQrcode"])):y("",!0),"blank"==t.type?(a(),e(_,{key:3,itemData:t},null,8,["itemData"])):y("",!0),"guide"==t.type?(a(),e(h,{key:4,itemData:t},null,8,["itemData"])):y("",!0)],64)))),128))])),_:1})}]]);const L=t({components:{diy:Q},data:()=>({user:"",loadding:!0,listData:[],urldata:"",longitude:0,latitude:0,delivery_set:[],items:[]}),mounted(){this.isWeixin()&&(this.urldata=window.location.href),this.getcityData(),this.getData()},onLoad(t){let a=h.getSceneData(t),e=t.shop_supplier_id?t.shop_supplier_id:a.sid;e&&x("selectedId",e)},methods:{getData(){let t=this;k({title:"加载中"}),t._post("index/index",{url:t.urldata,longitude:t.longitude||"0",latitude:t.latitude||"0"},(function(a){x("sign",a.data.signPackage),""==b("selectedId")&&x("selectedId",a.data.supplier?a.data.supplier.shop_supplier_id:0),t.items=a.data.data.items,t.user=a.data.user,""!=t.urldata&&(t.jweixin=t.configWxScan(a.data.signPackage)),v()}))},scanQrcode:function(){let t=this;this.isWeixin()?t.jweixin.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){window.location.href=t.resultStr},error:function(t){w({title:"扫码失败，请重试"})}}):console.log("H5暂只支持公众号扫码")},onShareAppMessage(){return{title:this.page.params.share_title,path:"/pages/index/index?"+this.getShareUrlParams()}},getcityData(){let t=this;if(t.isWeixin()){let a=b("sign");a?t.getWxLocation(a):(k({title:"加载中"}),t._post("index/index",{url:window.location.href},(function(e){x("sign",e.data.signPackage),a=e.data.signPackage,v(),t.getWxLocation(a)})))}else t.getLocation()},onAuthorize(){let t=this;uni.openSetting({success(a){a.authSetting["scope.userLocation"]&&(t.isAuthor=!0,setTimeout((()=>{t.getLocation((t=>{}))}),1e3))}})},getLocation(t){let a=this;C({type:"wgs84",success(t){a.longitude=t.longitude,a.latitude=t.latitude,a.getData()},fail(t){a.longitude=0,a.latitude=0,w({title:"获取定位失败，请点击右下角按钮打开定位权限",duration:2e3,icon:"none"}),a.getData()}})},getWxLocation(t,a){let e=this;var l=require("jweixin-module");l.config(JSON.parse(t)),l.ready((function(t){l.getLocation({type:"wgs84",success:function(t){e.longitude=t.longitude,e.latitude=t.latitude,e.getData()},fail(t){e.longitude=0,e.latitude=0,e.getData()}})})),l.error((function(t){console.log(t)}))}}},[["render",function(t,i,o,n,c,r){const u=S(P("diy"),Q),m=_,D=g,h=U;return a(),e(D,{"data-theme":t.theme(),class:p(t.theme()||"")},{default:l((()=>[s(u,{style:{position:"relative"},diyItems:c.items,onScanQrcode:r.scanQrcode},null,8,["diyItems","onScanQrcode"]),t.is_collection?(a(),e(D,{key:0,class:"collection-box",style:f("top:"+(t.topBarTop()+t.topBarHeight()+10)+"px;")},{default:l((()=>[s(D,{class:"inner"},{default:l((()=>[s(m,null,{default:l((()=>[d("点击“")])),_:1}),s(m,{class:"point"},{default:l((()=>[d(".")])),_:1}),s(m,{class:"point point-big"},{default:l((()=>[d(".")])),_:1}),s(m,{class:"point"},{default:l((()=>[d(".")])),_:1}),s(m,null,{default:l((()=>[d("”添加到我的小程序，\\n微信首页下拉即可快速访问店铺")])),_:1})])),_:1}),s(h,{type:"primary",class:"close-btn",onClick:i[0]||(i[0]=a=>t.is_collection=!1)},{default:l((()=>[d("x")])),_:1})])),_:1},8,["style"])):y("",!0)])),_:1},8,["data-theme","class"])}],["__scopeId","data-v-0c41c744"]]);export{L as default};