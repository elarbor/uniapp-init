"use strict";require("../../../../libs/lodash/_baseToString.js");const r=require("../../../../libs/lodash/debounce.js"),c=(o,n)=>{const t=()=>{o.disabled||o.loading||n("click")};return{buttonClick:o.debounce?r.debounce(t,250):t,getPhoneNumber:e=>{n("getphonenumber",e)},getRealTimePhoneNumber:e=>{n("getrealtimephonenumber",e)},openSetting:e=>{n("opensetting",e)},launchApp:e=>{n("launchapp",e)},getUserInfo:e=>{n("getuserinfo",e)},chooseAvatar:e=>{n("chooseavatar",e)},agreePrivacyAuthorization:e=>{n("agreeprivacyauthorization",e)},contact:e=>{n("contact",e)},openTypeError:e=>{n("error",e)}}};exports.useButton=c;
