(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f684665a"],{"14d6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("q-timeline",{attrs:{layout:"comfortable"}},e._l(e.cfps,(function(t){return n("q-timeline-entry",{key:t.id,attrs:{title:e.editionByName(t.conference).conference,subtitle:e.printDate(t),side:"left",color:e.color(t),icon:"fas fa-flag-checkered"}},[n("CFPCard",{attrs:{name:e.editionByName(t.conference).conference,location:e.editionByName(t.conference).location,websiteUrl:e.editionByName(t.conference).websiteUrl,cfpUrl:t.cfpUrl,date:e.eventDates(t),days:e.eventDays(t)}})],1)})),1)],1)},o=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),c=n.n(a),i=n("2f62"),s=n("bd4c"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-toolbar",[e.cfpUrl?n("q-btn",{attrs:{outline:"",size:"sm",type:"a",href:e.cfpUrl,target:"_blank","icon-right":"far fa-paper-plane",label:"Submit proposals"}}):e._e(),n("q-separator",{staticClass:"q-mx-md",attrs:{vertical:"",inset:""}}),n("q-icon",{attrs:{size:"xs",name:"far fa-calendar-check"}}),e._v("\n    "+e._s(e.date)+" ("+e._s(e.days)+")\n\n  "),e.cfpUrl?n("q-separator",{staticClass:"q-mx-md",attrs:{vertical:"",inset:""}}):e._e(),e.countryCode(e.location)?n("country-flag",{staticClass:"vertical-middle",attrs:{country:e.countryCode(e.location),size:"small"}}):e._e(),e._v("\n    "+e._s(e.location)+"\n\n")],1)},f=[],p=n("eea2");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={name:"ConferenceCard",components:{"country-flag":p["a"]},props:{name:String,location:String,websiteUrl:String,cfpUrl:String,date:String,days:String},data:function(){return{}},methods:{thumbnail:function(){return void 0===this.websiteUrl||""===this.websiteUrl?"/statics/community.jpg":"http://free.pagepeeker.com/v2/thumbs.php?size=l&url="+this.websiteUrl}},computed:d({},Object(i["b"])({countryCode:"conferencesStore/countryCode2"}))},m=b,y=(n("5353"),n("2877")),O=n("fe09"),g=Object(y["a"])(m,l,f,!1,null,null,null),h=g.exports;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}g.options.components=Object.assign({QToolbar:O["L"],QBtn:O["d"],QSeparator:O["B"],QIcon:O["o"],QItem:O["q"]},g.options.components||{});var w={name:"CFPs",components:{CFPCard:h},computed:D({},Object(i["b"])({cfps:"conferencesStore/upcomingCFPs",editionByName:"conferencesStore/editionByName"})),methods:{printDate:function(e){return s["b"].formatDate(e.end,"DD MMMM YYYY")},eventDates:function(e){var t=this.editionByName(e.conference);return t.start===t.end?s["b"].formatDate(t.start,"DD MMM"):s["b"].formatDate(t.start,"DD MMM")+" - "+s["b"].formatDate(t.end,"DD MMM")},eventDays:function(e){var t=this.editionByName(e.conference),n=Math.round((new Date(t.end)-new Date(t.start))/864e5)+1;return n+(n>1?" days":" day")},color:function(e){return e.color&&""!==e.color?e.color:this.$q.dark.isActive?"secondary":"primary"}}},j=w,P=Object(y["a"])(j,r,o,!1,null,null,null);t["default"]=P.exports;P.options.components=Object.assign({QPage:O["w"],QTimeline:O["I"],QTimelineEntry:O["J"]},P.options.components||{})},5353:function(e,t,n){"use strict";var r=n("a057"),o=n.n(r);o.a},a057:function(e,t,n){}}]);