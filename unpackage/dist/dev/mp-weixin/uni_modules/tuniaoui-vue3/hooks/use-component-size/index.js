"use strict";const n=require("../../../../common/vendor.js"),o=require("../../constants/size.js"),t=e=>({sizeType:n.computed(()=>e?o.componentSizes.includes(e)?"inner":"custom":"none")});exports.useComponentSize=t;
