import{E as s,h as t,g as e,d as a,e as o,b as p}from"./element-plus-2311c378.js";import{A as r}from"./appsetting-bdc235b0.js";import{_ as i}from"./index-cf2f72b9.js";import{o as m,c as l,P as n,S as d,W as c,a as u}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const j={data:()=>({form:{passport_open:0,passport_type:10}}),created(){this.getData()},methods:{getData(){let s=this;r.appDetail({},!0).then((t=>{s.form.passport_open=t.data.data.passport_open,s.form.passport_type=t.data.data.passport_type})).catch((s=>{}))},onSubmit(){let t=this,e=this.form;r.editApp(e,!0).then((e=>{s({message:"恭喜你，设置成功",type:"success"}),t.$router.push("/appsetting/app/index")})).catch((s=>{}))},handleCheckedCitiesChange(s){}}},h={class:"product-add"},f=u("div",{class:"common-form"},"通行证设置",-1),_=u("a",{href:"https://open.weixin.qq.com",target:"_blank",class:"blue"},"微信开放平台",-1),b={class:"common-button-wrapper"};const g=i(j,[["render",function(s,r,i,j,g,y){const v=t,x=e,w=a,k=o,C=p;return m(),l("div",h,[n(C,{size:"small",ref:"form",model:g.form,"label-width":"200px"},{default:d((()=>[f,n(w,{label:"通行证类型",class:"flex items-center text-sm"},{default:d((()=>[n(v,{modelValue:g.form.passport_type,"onUpdate:modelValue":r[0]||(r[0]=s=>g.form.passport_type=s),label:10,size:"large"},{default:d((()=>[c("微信开放平台")])),_:1},8,["modelValue"]),n(x,{class:"gray"},{default:d((()=>[c(" 目前仅支持微信开放平台，未来会支持手机号、用户名。如未注册或未绑定微信开放平台，请前往 "),_])),_:1})])),_:1}),u("div",b,[n(k,{type:"primary",onClick:y.onSubmit},{default:d((()=>[c("提交")])),_:1},8,["onClick"])])])),_:1},8,["model"])])}]]);export{g as default};