import{o as e,c as s,a as o,b as t,d as n}from"./vendor.e5744eb4.js";const i={data:()=>({count:123,video:"/1.MP4"}),created(){this.onOpen()},methods:{onOpen(){console.log("this is my first web preject")}}},r={class:"test"},c=o("p",{class:"title"},"测试",-1),d={width:"500",controls:""},a=t(" 您的浏览器不支持Video标签。 ");i.render=function(t,n,i,p,l,u){return e(),s("div",r,[c,o("video",d,[o("source",{src:l.video,type:"video/mp4"},null,8,["src"]),a])])};n({setup:o=>(o,t)=>(e(),s(i))}).mount("#app");
