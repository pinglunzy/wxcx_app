import{_ as e,q as t,o as a,c as s,w as i,a as l,b as r,r as d,F as o,f as n,C as u,k as c,n as _,d as p,t as m,h as y,l as f,j as h,I as k,y as b,x as g,i as v}from"./index-691f12c6.js";import{P as D}from"./uni-popup.03bee7d9.js";import{r as x}from"./uni-app.es.7daea22d.js";/* empty css                                                                  */const O=e({components:{Popup:D},data:()=>({width:750,height:600,dataModel:{},minute:["10","25","40","55"],hours:[{start:"00",end:"02"},{start:"02",end:"04"},{start:"04",end:"06"},{start:"06",end:"08"},{start:"08",end:"10"},{start:"10",end:"12"},{start:"12",end:"14"},{start:"14",end:"16"},{start:"16",end:"18"},{start:"18",end:"20"},{start:"20",end:"22"},{start:"22",end:"24"}],myhours:"",myminute:"",pickhours:{start:"",end:""},mealtime:""}),props:["isTimer"],onShow(){},watch:{isTimer:function(e,t){e!=t&&this.getData()}},methods:{getData(){let e=this,t=new Date;e.myhours=t.getHours(),e.myminute=t.getMinutes(),e.pickH(e.hours[e.myhours]),e.$nextTick((function(){e.hours.forEach(((t,a)=>{t.start<=e.myhours&&e.myhours<t.end&&e.pickH(t)}))}))},pickH(e){this.pickhours=e},hidePopupFunc(e){this.$emit("close","")},picktime(e){this.mealtime=e,this.$emit("close",this.mealtime)},inittime(e){let t=e;return t=1*e-1,e<=10?"0"+t:t},copyQQ(e){var a=document.createElement("input");a.value=e,document.body.appendChild(a),a.select(),a.setSelectionRange(0,a.value.length),document.execCommand("Copy"),document.body.removeChild(a),t({title:"复制成功",icon:"success",mask:!0,duration:2e3})}}},[["render",function(e,t,f,h,k,b){const g=n,v=u,D=c("Popup");return a(),s(D,{show:f.isTimer,width:k.width,height:k.height,padding:0,onHidePopup:b.hidePopupFunc,type:"bottom"},{default:i((()=>[l(g,{class:"d-b-c time_picker"},{default:i((()=>[l(g,{class:"",style:{width:"40%"}},{default:i((()=>[l(v,{style:{height:"600rpx"},"scroll-y":"true"},{default:i((()=>[(a(!0),r(o,null,d(k.hours,((e,t)=>(a(),r(o,{key:t},[k.myhours<=e.end?(a(),s(g,{key:0,class:_(k.pickhours&&e.start!=k.pickhours.start?"hours":"hours-active"),onClick:t=>b.pickH(e)},{default:i((()=>[p(m(e.start+":00~"+e.end+":00"),1)])),_:2},1032,["class","onClick"])):y("",!0)],64)))),128))])),_:1})])),_:1}),l(g,{class:"flex-1"},{default:i((()=>[l(v,{style:{height:"600rpx"},"scroll-y":"true"},{default:i((()=>[(a(!0),r(o,null,d(k.minute,((e,t)=>(a(),r(o,{key:t},[k.pickhours&&k.myhours>=k.pickhours.start&&k.myminute<=e&&k.myhours!=b.inittime(k.pickhours.end)?(a(),s(g,{key:0,onClick:t=>b.picktime(k.pickhours.start+":"+e)},{default:i((()=>[p(m(k.pickhours.start+":"+e),1)])),_:2},1032,["onClick"])):y("",!0)],64)))),128)),(a(!0),r(o,null,d(k.minute,((e,t)=>(a(),r(o,{key:t},[k.pickhours&&k.myhours<=k.pickhours.start&&k.myhours!=b.inittime(k.pickhours.end)?(a(),s(g,{key:0,onClick:t=>b.picktime(k.pickhours.start+":"+e)},{default:i((()=>[p(m(k.pickhours.start+":"+e),1)])),_:2},1032,["onClick"])):y("",!0)],64)))),128)),(a(!0),r(o,null,d(k.minute,((e,t)=>(a(),r(o,{key:t},[k.pickhours&&k.myhours!=b.inittime(k.pickhours.end)?(a(),s(g,{key:0,onClick:t=>b.picktime(b.inittime(k.pickhours.end)+":"+e)},{default:i((()=>[p(m(b.inittime(k.pickhours.end)+":"+e),1)])),_:2},1032,["onClick"])):y("",!0)],64)))),128)),(a(!0),r(o,null,d(k.minute,((e,t)=>(a(),r(o,{key:t},[k.pickhours&&k.myminute<=e&&k.myhours==b.inittime(k.pickhours.end)?(a(),s(g,{key:0,onClick:t=>b.picktime(b.inittime(k.pickhours.end)+":"+e)},{default:i((()=>[p(m(b.inittime(k.pickhours.end)+":"+e),1)])),_:2},1032,["onClick"])):y("",!0)],64)))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["show","width","height","onHidePopup"])}],["__scopeId","data-v-8915680b"]]);const w=e({components:{timepicker:O},data:()=>({loading:!0,options:{},indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,tab_type:0,product_id:"",product_num:"",ProductData:[],OrderData:[],exist_address:!1,Address:{region:[]},extract_store:{},last_extract:{},product_sku_id:0,delivery:0,store_id:1,linkman:"",phone:"",remark:"",deliverySetting:[],temlIds:[],showAlipay:!1,takeout_address:{},isTimer:!1,mealtime:"",wmtime:"",estitime:"",is_pack:1,supplier:{},dinner_type:10,cart_type:0,store_set:[],delivery_set:[],table_id:0,min_money:0}),onLoad(e){let t=this;t.options=e,t.cart_type=e.cart_type,t.table_id=e.table_id||0,t.dinner_type=e.dinner_type,t.delivery=e.delivery},onShow(){this.$fire.on("takeout",(function(e){self.takeout_address=e,self.orderType="takeout"})),this.getData()},methods:{hasType(e){return-1!=this.deliverySetting.indexOf(e)},changeTime(e){},getTime(e){let t=new Date,a=t.getHours();a<10&&(a="0"+a);let s=t.getMinutes();s<10&&(s="0"+s);let i=t.getHours(),l=t.getMinutes()+15;return l>=60&&(l-=60,i+=1),l<10&&(l="0"+l),i<10&&(i="0"+i),"my"==e?a+":"+s:"wm"==e?i+":"+l:void 0},getData(){let e=this;f({title:"加载中"}),e.loading=!0;let t=function(t){e.OrderData=t.data.orderInfo,e.min_money=t.data.orderInfo.supplier.min_money,e.temlIds=t.data.template_arr,e.exist_address=e.OrderData.exist_address,e.Address=e.OrderData.address,e.extract_store=e.OrderData.extract_store,e.last_extract=e.OrderData.last_extract,e.ProductData=e.OrderData.product_list,e.supplier=t.data.orderInfo.supplier,e.linkman=t.data.orderInfo.last_extract.linkman,e.phone=t.data.orderInfo.last_extract.phone,e.delivery_set=t.data.orderInfo.supplier.delivery_set,e.store_set=t.data.orderInfo.supplier.store_set,"10"==e.OrderData.delivery&&(e.tab_type=0),"20"==e.OrderData.delivery&&(e.tab_type=1),"30"==e.OrderData.delivery&&(e.tab_type=3),"40"==e.OrderData.delivery&&(e.tab_type=4),0==e.cart_type?-1==e.delivery_set.indexOf(e.delivery)&&("10"==e.delivery_set[0]?(console.log("执行"),e.tabFunc(0,!0)):e.tabFunc(1,!0)):-1==e.store_set.indexOf(e.delivery)&&("30"==e.store_set[0]?e.tabFunc(3,!0):e.tabFunc(4,!0)),e.wmtime=e.getTime("wm"),e.mealtime=e.getTime("my"),e.estitime=e.getTime("wm"),e.deliverySetting=e.OrderData.deliverySetting,e.loading=!1},a={delivery:e.delivery||0,store_id:1,mealtime:"",pay_source:e.getPlatform()};e.table_id&&(a.table_id=e.table_id),"buy"===e.options.order_type?e._get("order.order/buy",Object.assign({},a,{product_id:e.options.product_id,product_num:e.options.product_num,product_sku_id:e.options.product_sku_id}),(function(e){t(e)})):"cart"===e.options.order_type&&e._get("order.order/cart",Object.assign({},a,{cart_ids:e.options.cart_ids||0,shop_supplier_id:e.options.shop_supplier_id||0,order_type:e.options.cart_type,table_id:e.table_id}),(function(e){t(e)}),(function(t){1==e.tab_type?e.tabFunc(0):0==e.tab_type&&e.tabFunc(1)}))},tabFunc(e,t){0==e&&1*this.min_money>1*this.OrderData.order_pay_price?this.showError("未满足最低配送费用!"):(this.tab_type=e,0==e?(this.delivery="10",this.dinner_type=10):1==e?(this.delivery="20",this.dinner_type=20):3==e?(this.delivery="30",this.dinner_type=30):4==e&&(this.delivery="40",this.dinner_type=30),t||(console.log("切换"),this.getData()))},SubmitOrder(){let e=this;if(this.loading)return;null!=e.$refs&&null!=e.$refs.getShopinfoData&&(e.$refs.getShopinfoData.phone,e.$refs.getShopinfoData.linkman);let t={delivery:e.delivery,store_id:1,linkman:e.linkman,phone:e.phone,remark:e.remark,mealtime:e.mealtime,shop_supplier_id:e.options.shop_supplier_id,pay_source:e.getPlatform()};10==e.delivery&&(t.mealtime=e.wmtime),1==e.tab_type&&10!=e.delivery&&(t.mealtime=e.getTime("my"));let a="";"buy"===e.options.order_type&&(a="order.order/buy",t=Object.assign(t,{product_id:e.options.product_id,product_num:e.options.product_num,product_sku_id:e.options.product_sku_id})),"cart"===e.options.order_type&&(a="order.order/cart",t=Object.assign(t,{cart_ids:e.options.cart_ids||0,dinner_type:e.dinner_type,shop_supplier_id:e.options.shop_supplier_id||0,order_type:e.options.cart_type,table_id:e.table_id}));e.subMessage(e.temlIds,(function(){e.loading=!0,f({title:"加载中",mask:!0}),e._post(a,t,(function(t){let a="/pages/order/cashier?order_type=10&order_id="+t.data.order_id;e.gotoPage(a,"reLaunch")}),(t=>{e.loading=!1}))}))},timepick(){this.isTimer=!0},closetimer(e){""!=e&&(this.wmtime=e,this.mealtime=e),this.isTimer=!1},packTypeFunc(e){this.is_pack=e}}},[["render",function(e,t,u,c,f,D){const w=h,C=n,T=k,F=v,P=b,I=x(g("timepicker"),O);return a(),s(C,{"data-theme":e.theme(),class:_(e.theme()||"")},{default:i((()=>[f.loading?y("",!0):(a(),s(C,{key:0,class:"wrap"},{default:i((()=>[0==f.cart_type?(a(),s(C,{key:0,class:"right"},{default:i((()=>[(a(!0),r(o,null,d(f.delivery_set,((e,d)=>(a(),r(o,{key:d+"1"},["10"==e?(a(),s(C,{key:0,class:_(["takeout",0==f.tab_type?"active":""]),onClick:t[0]||(t[0]=e=>D.tabFunc(0))},{default:i((()=>[l(w,null,{default:i((()=>[p("配送订单")])),_:1})])),_:1},8,["class"])):y("",!0)],64)))),128)),(a(!0),r(o,null,d(f.delivery_set,((e,d)=>(a(),r(o,{key:d+"2"},["20"==e?(a(),s(C,{key:0,class:_(["dinein",1==f.tab_type?"active":""]),onClick:t[1]||(t[1]=e=>D.tabFunc(1))},{default:i((()=>[l(w,null,{default:i((()=>[p("店内订单")])),_:1})])),_:1},8,["class"])):y("",!0)],64)))),128))])),_:1})):y("",!0),1==f.cart_type?(a(),s(C,{key:1,class:"right"},{default:i((()=>[(a(!0),r(o,null,d(f.store_set,((e,d)=>(a(),r(o,{key:e},["30"==e?(a(),s(C,{key:0,class:_(["takeout",3==f.tab_type?"active":""]),onClick:t[2]||(t[2]=e=>D.tabFunc(3))},{default:i((()=>[l(w,null,{default:i((()=>[p("打包订单")])),_:1})])),_:1},8,["class"])):y("",!0)],64)))),128)),(a(!0),r(o,null,d(f.store_set,((e,d)=>(a(),r(o,{key:e},["40"==e?(a(),s(C,{key:0,class:_(["dinein",4==f.tab_type?"active":""]),onClick:t[3]||(t[3]=e=>D.tabFunc(4))},{default:i((()=>[l(w,null,{default:i((()=>[p("店内订单")])),_:1})])),_:1},8,["class"])):y("",!0)],64)))),128))])),_:1})):y("",!0),0==f.cart_type?(a(),s(C,{key:2,class:"header"},{default:i((()=>[l(C,{class:"headr_top"},{default:i((()=>[1!=f.tab_type?(a(),s(C,{key:0,class:"flex-1",style:{width:"100%"}},{default:i((()=>[l(C,{class:"left overflow-hidden"},{default:i((()=>[l(C,{class:"overflow-hidden f28 fb w-b-a",style:{width:"600rpx"},onClick:t[4]||(t[4]=t=>e.gotoPage("/pages/user/address/storeaddress?shop_supplier_id="+f.options.shop_supplier_id))},{default:i((()=>[null!=f.Address?(a(),r(o,{key:0},[p(m(f.Address.detail+f.Address.address+" "+f.Address.name+" "+f.Address.phone),1)],64)):(a(),r(o,{key:1},[p(" 请选择配送地址 ")],64))])),_:1})])),_:1})])),_:1})):y("",!0),1==f.tab_type?(a(),s(C,{key:1,class:"header_bottom"},{default:i((()=>[l(C,{class:"uni-list-cell-left f32 fb"},{default:i((()=>[l(T,{type:"number",modelValue:f.phone,"onUpdate:modelValue":t[5]||(t[5]=e=>f.phone=e),placeholder:"请输入联系电话"},null,8,["modelValue"])])),_:1})])),_:1})):y("",!0)])),_:1})])),_:1})):y("",!0),0==f.tab_type&&10!=f.delivery?(a(),s(C,{key:3,class:"d-b-c meal_item",onClick:t[6]||(t[6]=e=>D.timepick())},{default:i((()=>[l(C,{class:"f28"},{default:i((()=>[p("取餐时间")])),_:1}),l(C,{class:"uni-list"},{default:i((()=>[l(C,{class:"uni-list-cell"},{default:i((()=>[l(C,{class:"uni-list-cell-left f28"},{default:i((()=>[l(w,{class:"f32 fb"},{default:i((()=>[p(m(f.mealtime),1)])),_:1}),l(w,{class:"icon iconfont icon-jiantou"})])),_:1})])),_:1})])),_:1})])),_:1})):y("",!0),1==f.tab_type&&10!=f.delivery?(a(),s(C,{key:4,class:"d-b-c meal_item"},{default:i((()=>[l(C,{class:"f28"},{default:i((()=>[p("预计取餐时间")])),_:1}),l(C,{class:"uni-list"},{default:i((()=>[l(C,{class:"uni-list-cell"},{default:i((()=>[l(C,{class:"uni-list-cell-left f28"},{default:i((()=>[l(w,{class:"f32 fb"},{default:i((()=>[p(m(f.estitime),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):y("",!0),0==f.tab_type&&10==f.delivery?(a(),s(C,{key:5,class:"d-b-c meal_item",onClick:t[7]||(t[7]=e=>D.timepick())},{default:i((()=>[l(C,{class:"f28"},{default:i((()=>[p("预计送达时间：")])),_:1}),l(C,{class:"uni-list"},{default:i((()=>[l(C,{class:"uni-list-cell"},{default:i((()=>[l(C,{class:"uni-list-cell-left f28"},{default:i((()=>[l(w,{class:"blue"},{default:i((()=>[p(m(f.wmtime),1)])),_:1}),l(w,{class:"icon iconfont icon-jiantou"})])),_:1})])),_:1})])),_:1})])),_:1})):y("",!0),l(C,{class:"vender"},{default:i((()=>[l(C,{class:"left"},{default:i((()=>[l(C,{class:"store-name"},{default:i((()=>[l(w,null,{default:i((()=>[p(m(f.supplier.name),1)])),_:1})])),_:1})])),_:1}),l(C,{class:"list"},{default:i((()=>[(a(!0),r(o,null,d(f.ProductData,((e,t)=>(a(),s(C,{class:"item d-b-c",key:t},{default:i((()=>[l(C,{class:"info d-s-s"},{default:i((()=>[l(C,{class:"cover"},{default:i((()=>[l(F,{src:e.image.file_path,mode:"aspectFill"},null,8,["src"])])),_:2},1024),l(C,{class:"flex-1"},{default:i((()=>[l(C,{class:"title f30 fb mb16"},{default:i((()=>[p(m(e.product.product_name),1)])),_:2},1024),l(C,{class:"num-wrap pl-30 gray9 f26"},{default:i((()=>[p(m(e.describe),1)])),_:2},1024),l(C,{class:"f26 gray9"},{default:i((()=>[p("×"+m(e.product_num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),l(C,{class:"",style:{height:"148rpx","text-align":"right"}},{default:i((()=>[l(C,{class:"f32 order_item mb16"},{default:i((()=>[p("¥"+m(e.price),1)])),_:2},1024),l(C,{class:"f24 text-d-line gray9 mb16"},{default:i((()=>[p("¥"+m(e.product_price),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),l(C,{class:"other_box"},{default:i((()=>[l(C,{class:"item"},{default:i((()=>[l(w,{class:"key"},{default:i((()=>[p("商品小计：")])),_:1}),l(w,{class:"f32"},{default:i((()=>[p("￥"+m(f.OrderData.order_total_price),1)])),_:1})])),_:1}),1!=f.tab_type&&0!=f.OrderData.express_price?(a(),s(C,{key:0,class:"item"},{default:i((()=>[l(w,{class:"key"},{default:i((()=>[p("配送费用：")])),_:1}),l(w,{class:"f32"},{default:i((()=>[p("￥"+m(f.OrderData.express_price),1)])),_:1})])),_:1})):y("",!0),l(C,{class:"item"},{default:i((()=>[l(w,{class:"key"},{default:i((()=>[p("包装费用：")])),_:1}),l(w,{class:"f32"},{default:i((()=>[p("￥"+m(f.OrderData.order_bag_price),1)])),_:1})])),_:1}),f.OrderData.reduce?(a(),s(C,{key:1,class:"item"},{default:i((()=>[l(w,{class:"key"},{default:i((()=>[p("满减("+m(f.OrderData.reduce.active_name)+")：",1)])),_:1}),l(w,{class:"f32"},{default:i((()=>[p("-￥"+m(f.OrderData.reduce.reduced_price),1)])),_:1})])),_:1})):y("",!0),f.OrderData.table_no?(a(),s(C,{key:2,class:"item"},{default:i((()=>[l(w,{class:"key"},{default:i((()=>[p("桌号：")])),_:1}),l(w,{class:"f32"},{default:i((()=>[p(m(f.OrderData.table_no),1)])),_:1})])),_:1})):y("",!0)])),_:1}),l(C,{class:"total-box"},{default:i((()=>[p(" 共"+m(f.OrderData.order_total_num)+"件商品 小计 ",1),l(w,{class:"f32 fb ml15"},{default:i((()=>[p("￥"+m(f.OrderData.order_pay_price),1)])),_:1})])),_:1})])),_:1}),l(C,{class:"meal_item"},{default:i((()=>[l(C,{class:"d-b-c item"},{default:i((()=>[l(C,{class:"mr20"},{default:i((()=>[p("备注:")])),_:1}),l(T,{class:"flex-1",type:"text",modelValue:f.remark,"onUpdate:modelValue":t[8]||(t[8]=e=>f.remark=e),placeholder:"请填写您的其他要求"},null,8,["modelValue"])])),_:1})])),_:1}),l(C,{class:"foot-pay-btns"},{default:i((()=>[f.OrderData.force_points?y("",!0):(a(),s(C,{key:0,class:"price"},{default:i((()=>[p(" ¥ "),l(w,{class:"num"},{default:i((()=>[p(m(f.OrderData.order_pay_price),1)])),_:1})])),_:1})),l(P,{class:"theme-bg",type:"primary",onClick:D.SubmitOrder},{default:i((()=>[p("提交订单")])),_:1},8,["onClick"])])),_:1}),l(I,{isTimer:f.isTimer,onClose:D.closetimer},null,8,["isTimer","onClose"])])),_:1}))])),_:1},8,["data-theme","class"])}],["__scopeId","data-v-f2596d0c"]]);export{w as default};