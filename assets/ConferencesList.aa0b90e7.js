import{Q as i}from"./QPage.708672f7.js";import{C as l,a as m}from"./ConferenceCard.9a5a6c1f.js";import{_ as p,a3 as f,O as t,Q as d,R as C,S as r,T as o,U as _,a5 as n,a6 as u,a7 as w}from"./index.1f97ba4d.js";import"./use-router-link.9769059d.js";import"./format.f6ac36d5.js";import"./use-form.9d944e87.js";import"./QChip.781452b9.js";import"./QItemLabel.8a1ce7da.js";import"./QBtn.8c565d49.js";import"./country-flag.esm.04c187fe.js";const U={name:"ConferencesList",components:{ConferenceCard:l,ConferenceFilter:m},computed:{...f({conferences:"conferencesStore/filteredConferences"})}},g={class:"row justify-left q-gutter-none"};function k(a,v,B,F,$,b){const s=r("ConferenceFilter"),c=r("ConferenceCard");return t(),d(i,{padding:""},{default:C(()=>[o(s),_("div",g,[(t(!0),n(w,null,u(a.conferences,e=>(t(),n("div",{key:e.name,class:"col-12 col-sm-6 col-lg-3"},[o(c,{name:e.name,location:e.location,websiteUrl:e.websiteUrl,twitterUrl:e.twitterUrl},null,8,["name","location","websiteUrl","twitterUrl"])]))),128))])]),_:1})}var E=p(U,[["render",k]]);export{E as default};