"use strict";const n=require("../../../common/vendor.js"),i={name:"",data(){return{img:"",html:"",explain:"",back:!0}},onLoad(e){this.html=e.html,this.explain=e.explain||"哎呀～  服务异常了",this.content=e.content,this.img=e.img||"./warning.png",this.back=e.back,this.back||n.index.hideHomeButton()},methods:{async resetLogin(){n.index.clearStorageSync(),(await logon()).userId&&n.index.reLaunch({url:"/pages/index/index"})},goPage(e){n.index.navigateTo({url:e})}}};function s(e,g,o,m,t,r){return n.e({a:t.img,b:n.t(t.explain),c:e.content},e.content?{d:n.t(e.content)}:{},{e:t.html},t.html?{f:t.html}:{},{g:n.o(a=>r.goPage("/pages/other/server")),h:n.o((...a)=>r.resetLogin&&r.resetLogin(...a))})}const c=n._export_sfc(i,[["render",s],["__file","C:/Users/全易/Documents/公司/mini-app/pages/status/abnormal/index.vue"]]);wx.createPage(c);
