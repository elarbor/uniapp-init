"use strict";const u=require("../../../../../../common/vendor.js");require("../../../../libs/lodash/_baseToString.js");const d=require("../../../../utils/types.js"),s=require("../../../../utils/dom/unit.js"),h=require("../../../../hooks/use-namespace/index.js"),c=require("../../../../hooks/use-component-color/index.js"),C=require("../../../../hooks/use-component-size/index.js"),z=e=>{const n=h.useNamespace("icon"),[a,l,m]=c.useComponentColor(u.toRef(e,"color"),"text"),[_]=c.useComponentColor(u.toRef(e,"transparentBg"),"bg"),{sizeType:o}=C.useComponentSize(e.size),i=u.computed(()=>!!(e!=null&&e.name)&&e.name.includes("/")),f=u.computed(()=>{const t=[];return t.push(n.b()),i.value?t.push(n.m("image")):(e.type&&t.push(`tn-type-${e.type}_text`),e.transparent?t.push("tn-text-transparent",_.value):a.value&&t.push(a.value),e.bold&&t.push("tn-text-bold")),o.value==="inner"&&t.push(n.m(e.size)),e.customClass&&t.push(e.customClass),t.join(" ")}),r=u.computed(()=>{const t={};return i.value?o.value==="custom"&&e.size&&(t.width=t.height=s.formatDomSizeValue(e.size)):(l.value&&(t.color=l.value),o.value==="custom"&&e.size&&(t.fontSize=s.formatDomSizeValue(e.size))),e.offsetTop&&(t.transform=`translateY(${s.formatDomSizeValue(e.offsetTop)})`),d.isEmpty(e.customStyle)||Object.assign(t,e.customStyle),t});return{isImg:i,iconClass:f,iconStyle:r,updateColor:m}};exports.useIcon=z;
