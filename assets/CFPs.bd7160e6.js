import{a as N,Q as q,h as g}from"./use-router-link.82802e89.js";import{c as k,j as f,b as u,h as i,k as w,av as U,g as F,C as P,a3 as B,_ as M,S as Q,O as l,a5 as p,U as y,T as h,V as S,a4 as v,Q as m,ap as D,R as _,a6 as T,a7 as $}from"./index.da2813c8.js";import{u as V,a as j}from"./format.8001fcf3.js";import{Q as z}from"./QPage.f1a46e70.js";import{d}from"./date.99e290eb.js";import{Q as E}from"./QBtn.c8506e10.js";import{C as Y}from"./country-flag.esm.a0b48992.js";var x=k({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:n}){const t=w(U,f);if(t===f)return console.error("QTimelineEntry needs to be child of QTimeline"),f;const s=u(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),c=u(()=>`q-timeline__dot text-${e.color||t.color}`),r=u(()=>t.layout==="comfortable"&&t.side==="left");return()=>{const o=N(n.default,[]);if(e.body!==void 0&&o.unshift(e.body),e.heading===!0){const C=[i("div"),i("div"),i(e.tag,{class:"q-timeline__heading-title"},o)];return i("div",{class:"q-timeline__heading"},r.value===!0?C.reverse():C)}let a;e.icon!==void 0?a=[i(q,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(a=[i("img",{class:"q-timeline__dot-img",src:e.avatar})]);const b=[i("div",{class:"q-timeline__subtitle"},[i("span",{},g(n.subtitle,[e.subtitle]))]),i("div",{class:c.value},a),i("div",{class:"q-timeline__content"},[i("h6",{class:"q-timeline__title"},g(n.title,[e.title]))].concat(o))];return i("li",{class:s.value},r.value===!0?b.reverse():b)}}}),I=k({name:"QTimeline",props:{...V,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:n}){const t=F(),s=j(e,t.proxy.$q);P(U,e);const c=u(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(s.value===!0?" q-timeline--dark":""));return()=>i("ul",{class:c.value},g(n.default))}});const R={name:"ConferenceCard",components:{"country-flag":Y},props:{name:String,location:String,websiteUrl:String,cfpUrl:String,date:String,days:String},data(){return{}},methods:{thumbnail:function(){return this.websiteUrl===void 0||this.websiteUrl===""?"/community.jpg":"http://free.pagepeeker.com/v2/thumbs.php?size=l&url="+this.websiteUrl}},computed:{...B({countryCode:"conferencesStore/countryCode2"})}},A={class:"col-12"},G={class:"col-12"},K={class:"col-12"};function L(e,n,t,s,c,r){const o=Q("country-flag");return l(),p("div",null,[y("div",A,[h(q,{size:"xs",name:"far fa-calendar-check"}),S(" \xA0 "+v(t.date)+" ("+v(t.days)+") ",1)]),y("div",G,[e.countryCode(t.location)?(l(),m(o,{key:0,class:"vertical-middle",country:e.countryCode(t.location),size:"small"},null,8,["country"])):D("",!0),S(" \xA0 "+v(t.location),1)]),y("div",K,[t.cfpUrl?(l(),m(E,{key:0,outline:"",size:"sm",type:"a",href:t.cfpUrl,target:"_blank","icon-right":"far fa-paper-plane",label:"Submit proposals"},null,8,["href"])):D("",!0)])])}var O=M(R,[["render",L]]);const H={name:"CFPs",components:{CFPCard:O},computed:{...B({cfps:"conferencesStore/upcomingCFPs",editionByName:"conferencesStore/editionByName"})},methods:{printDate:function(e){return d.formatDate(e.end,"DD MMMM YYYY")},eventDates:function(e){let n=this.editionByName(e.conference);return n.start===n.end?d.formatDate(n.start,"DD MMM"):d.formatDate(n.start,"DD MMM")+" - "+d.formatDate(n.end,"DD MMM")},eventDays:function(e){let n=this.editionByName(e.conference),t=Math.round((new Date(n.end)-new Date(n.start))/864e5)+1;return t+(t>1?" days":" day")},color:function(e){return e.color&&e.color!==""?e.color:this.$q.dark.isActive?"secondary":"primary"}}};function J(e,n,t,s,c,r){const o=Q("CFPCard");return l(),m(z,{padding:""},{default:_(()=>[h(I,{layout:"comfortable"},{default:_(()=>[(l(!0),p($,null,T(e.cfps,a=>(l(),m(x,{key:a.id,title:e.editionByName(a.conference).conference,subtitle:r.printDate(a),side:"left",color:r.color(a),icon:"fas fa-flag-checkered"},{default:_(()=>[h(o,{name:e.editionByName(a.conference).conference,location:e.editionByName(a.conference).location,websiteUrl:e.editionByName(a.conference).websiteUrl,cfpUrl:a.cfpUrl,date:r.eventDates(a),days:r.eventDays(a)},null,8,["name","location","websiteUrl","cfpUrl","date","days"])]),_:2},1032,["title","subtitle","color"]))),128))]),_:1})]),_:1})}var ie=M(H,[["render",J]]);export{ie as default};
