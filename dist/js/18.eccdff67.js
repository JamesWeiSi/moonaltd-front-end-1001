"use strict";(self["webpackChunkmoonaltd"]=self["webpackChunkmoonaltd"]||[]).push([[18],{2426:function(c,t,a){a.r(t),a.d(t,{default:function(){return q}});var n=a(3396),o=a(7139);const e={class:"productDisplay"},s=(0,n._)("div",{class:"picture"},[(0,n._)("img",{src:"",alt:"图片缺失",id:"images"})],-1),i={class:"content"},d={class:"productName"},r={class:"brand"},p={class:"desContent"},l=(0,n._)("div",{class:"descTitle"},"产品描述： ",-1),u={class:"description"},f={class:"priceContent"},v=(0,n._)("div",{class:"priceTitle"},"零售价格： ",-1),m={class:"productPrice"},I={class:"otherDetails"},h={class:"quantity"},_={key:0,class:"special"},g={key:1,class:"special"};function w(c,t,a,w,S,C){const k=(0,n.up)("HeaderComponent"),y=(0,n.up)("SearchComponent"),z=(0,n.up)("NavComponent");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(k),(0,n.Wm)(y),(0,n.Wm)(z),(0,n._)("div",e,[s,(0,n._)("div",i,[(0,n._)("div",d,"产品名称： "+(0,o.zw)(w.productInfo.name),1),(0,n._)("div",r,"商品品牌： "+(0,o.zw)(w.productInfo.brand),1),(0,n._)("div",p,[l,(0,n._)("div",u,(0,o.zw)(w.productInfo.description),1)]),(0,n._)("div",f,[v,(0,n._)("div",m,"￥"+(0,o.zw)(w.productInfo.price),1)]),(0,n._)("div",I,[(0,n._)("div",h,"库存存货： "+(0,o.zw)(w.productInfo.quantity),1),w.hasSpecial?((0,n.wg)(),(0,n.iD)("div",g,"特价价格： ￥"+(0,o.zw)(w.productInfo.special),1)):((0,n.wg)(),(0,n.iD)("div",_," 特价价格： 无"))])])])],64)}var S=a(4870),C=a(2906),k=a(1600),y=a(8074),z=a(6204);function P(){const c=(0,S.qj)({productInfo:{},hasSpecial:!1});let t=localStorage.getItem("singleProductId");async function a(){const a=await(0,C.U2)(`/api/user/product/${t}`);c.productInfo=a.data,""!=a.data.special||null!=a.data.special?c.hasSpecial=!0:c.hasSpecial=!1}const{productInfo:n,hasSpecial:o}=(0,S.BK)(c);return{productInfo:n,hasSpecial:o,getProductInfo:a}}var D={name:"SingleProduct",components:{HeaderComponent:k.Z,SearchComponent:y.Z,NavComponent:z.Z},setup(){const{productInfo:c,hasSpecial:t,getProductInfo:a}=P();return a(),{productInfo:c,hasSpecial:t,getProductInfo:a}}},b=a(89);const Z=(0,b.Z)(D,[["render",w]]);var q=Z}}]);
//# sourceMappingURL=18.eccdff67.js.map