"use strict";const e=require("../../../common/vendor.js"),t={name:"",data:()=>({img:"",html:"",explain:"",back:!0}),onLoad(t){this.html=t.html,this.explain=t.explain||"哎呀～  服务异常了",this.content=t.content,this.img=t.img||"./warning.png",this.back=t.back,this.back||e.index.hideHomeButton()},methods:{async resetLogin(){e.index.clearStorageSync();(await logon()).userId&&e.index.reLaunch({url:"/pages/index/index"})},goPage(t){e.index.navigateTo({url:t})}}};const n=e._export_sfc(t,[["render",function(t,n,i,o,a,r){return e.e({a:a.img,b:e.t(a.explain),c:t.content},t.content?{d:e.t(t.content)}:{},{e:a.html},a.html?{f:a.html}:{},{g:e.o((e=>r.goPage("/pages/other/server"))),h:e.o(((...e)=>r.resetLogin&&r.resetLogin(...e)))})}]]);wx.createPage(n);
