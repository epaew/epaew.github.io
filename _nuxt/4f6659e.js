(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{360:function(t,e,l){},366:function(t,e,l){"use strict";l(360)},374:function(t,e,l){"use strict";l.r(e);var r=l(26),n=(l(90),l(0)),c=n.a.extend({props:{imageUrl:{type:String,required:!0}},data:function(){return{certifications:[["2017 春","データベーススペシャリスト"],["2016 秋","ネットワークスペシャリスト"],["2015 秋","応用情報技術者"],["2015 春","基本情報技術者"]],experiences:{Languages:["Ruby 2.1+","JavaScript/TypeScript"],Frameworks:["Ruby on Rails 5+","Vue.js (Nuxt.js)","React.js"],Others:["AWS Lambda","Docker","Git","Sass (SCSS)","Serverless Framework","Webpack 4","etc."]}}},computed:{age:function(){var t=Date.now()-Date.parse("1990/12/27");return new Date(t).getFullYear()-1970}}}),o=(l(366),l(49)),v=l(69),m=l.n(v),d=l(342),f=l(341),_=l(372),C=l(378),w=l(375),V=l(129),x=l(158),k=l(100),y=l(34),S=l(373),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[l("v-card",{attrs:{raised:""}},[l("v-img",t._g({staticClass:"btn align-end",attrs:{src:t.imageUrl}},r),[l("v-card-title",{staticClass:"display-1"},[t._v("About me")])],1)],1)]}}])},[l("v-card",[l("v-container",{staticClass:"pa-0 mx-0"},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"12",md:"6"}},[l("v-img",{staticClass:"align-end",attrs:{src:t.imageUrl}},[l("v-card-title",{staticClass:"display-2"},[t._v("epaew")]),l("v-card-subtitle",[t._v("Ryo Maeda / Web application developer")])],1)],1),l("v-col",{attrs:{cols:"12",md:"6"}},[l("v-list",[l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Age")]),l("v-list-item-subtitle",{staticClass:"subtitle-2",domProps:{textContent:t._s(t.age)}})],1)],1),l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Location")]),l("v-list-item-subtitle",{staticClass:"subtitle-2"},[t._v("Tokyo, Japan")])],1)],1),l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Certifications")]),l("v-list-item-subtitle",{staticClass:"subtitle-2"},[l("ul",t._l(t.certifications,(function(e){return l("li",[l("div",{staticClass:"d-sm-inline-block"},[t._v(t._s(e[0]))]),l("div",{staticClass:"d-sm-inline-block ml-2"},[t._v(t._s(e[1]))])])})),0)])],1)],1),l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Experiences")]),l("v-list-item-subtitle",{staticClass:"subtitle-2"},[l("ul",t._l(t.experiences,(function(e,r){return l("li",[l("span",[t._v(t._s(r))]),l("ul",t._l(e,(function(e){return l("li",[t._v(t._s(e))])})),0)])})),0)])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"f5a9c09a",null),h=component.exports;m()(component,{VCard:d.a,VCardSubtitle:f.b,VCardTitle:f.c,VCol:_.a,VContainer:C.a,VDialog:w.a,VImg:V.a,VList:x.a,VListItem:k.a,VListItemContent:y.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VRow:S.a});var R=n.a.extend({components:{ProfileModal:h},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$axios,e.next=3,l.$get("https://api.github.com/users/epaew");case 3:return r=e.sent,e.abrupt("return",{imageUrl:r.avatar_url});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Welcome"}}}),L=Object(o.a)(R,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",[l("v-row",[l("v-col",{attrs:{cols:"12",sm:"10","offset-sm":"1"}},[l("center",[l("h2",{staticClass:"display-2"},[t._v("Welcome")]),l("p",[t._v("This is a personal web page for epaew, a web application developer in Tokyo.")])])],1)],1),l("v-row",[l("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[l("profile-modal",{attrs:{"image-url":t.imageUrl}})],1)],1)],1)}),[],!1,null,null,null);e.default=L.exports;m()(L,{VCol:_.a,VContainer:C.a,VRow:S.a})}}]);