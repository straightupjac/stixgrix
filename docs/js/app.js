(function(t){function a(a){for(var r,i,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(a);while(u.length)u.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],r=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(r=!1)}r&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},o=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/stixgrix/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var v=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1bf2":function(t,a,e){},"2edd":function(t,a,e){t.exports=e.p+"img/kyotoStrutGreyscaleInvert.svg"},"344a":function(t,a,e){"use strict";e("6290")},"3db4":function(t,a,e){t.exports=e.p+"img/tg-city.jpg"},4202:function(t,a,e){t.exports=e.p+"img/jon.jpeg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{color:"primary",dark:t.setTheme()}},[e("v-app-bar",{attrs:{id:"app-bar",elevation:"0",app:"",color:"primary","fade-img-on-scroll":""}},[e("v-switch",{staticClass:"ml-15 mt-5",attrs:{color:"secondary",inset:""},model:{value:t.goDark,callback:function(a){t.goDark=a},expression:"goDark"}}),e("v-spacer"),e("div",{staticClass:"ml-10 mr-10"},[e("v-btn",{staticClass:"text-center nav-button",attrs:{to:"/",target:"",text:""}},[e("span",{staticClass:"mr-2"},[t._v("home")])]),e("v-btn",{staticClass:"text-center nav-button",attrs:{to:"/about",target:"",text:""}},[e("span",{staticClass:"mr-2"},[t._v("about")])]),e("v-btn",{staticClass:"text-center nav-button",attrs:{to:"/work",target:"",text:""}},[t._v(" work ")]),e("v-btn",{staticClass:"text-center nav-button",attrs:{to:"/art",target:"",text:""}},[t._v(" art ")]),e("v-btn",{staticClass:"text-center nav-button",attrs:{to:"/fun",target:"",text:"","active-class":"current"}},[t._v(" fun ")])],1)],1),e("v-main",[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1),e("app-footer",[e("v-footer",{attrs:{padless:""}},[e("v-card",{staticClass:"primary",attrs:{flat:"",tile:"",width:"100%"}},[e("v-card-title",{staticClass:"ml-10 mr-10"},[t._v(" Like what you see? ")]),e("v-card-text",{staticClass:"ml-10 mr-10 footer-body"},[t._v(" Let's connect "),t._l(t.icons,(function(a){return e("v-btn",{key:a,staticClass:"mx-4",attrs:{href:a.link,target:"_blank",icon:""}},[e("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(a.icon)+" ")])],1)}))],2),e("v-card-text",{staticClass:"mr-10 ml-10"},[e("p",[t._v(t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Jonathan Chan")]),t._v(" | Designed by "),e("a",{staticStyle:{color:"#88b1b1","text-decoration":"none"},attrs:{href:"http://jaclynchan.me/",target:"_blank"}},[t._v(" Jaclyn Chan")])])])],1)],1)],1)],1)],1)},o=[],i={name:"App",data:function(){return{userBar:!1,icons:[{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/jdcjonathan/"},{icon:"mdi-instagram",link:"https://www.instagram.com/stixgrix"},{icon:"mdi-twitter",link:"https://twitter.com/stixgrix"},{icon:"mdi-email",link:"mailto:jdchan@edu.uwaterloo.ca"}],goDark:!0}},methods:{setTheme:function(){return!0===this.goDark?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1}}},s=i,c=(e("5c0b"),e("2877")),l=e("6544"),v=e.n(l),d=e("7496"),u=e("40dc"),p=e("8336"),g=e("b0af"),h=e("99d9"),m=e("553a"),f=e("132d"),y=e("f6c4"),w=e("2fa4"),b=e("b73d"),_=Object(c["a"])(s,n,o,!1,null,null,null),x=_.exports;v()(_,{VApp:d["a"],VAppBar:u["a"],VBtn:p["a"],VCard:g["a"],VCardText:h["a"],VCardTitle:h["b"],VFooter:m["a"],VIcon:f["a"],VMain:y["a"],VSpacer:w["a"],VSwitch:b["a"]});var C=e("f309");r["a"].use(C["a"]);var V=new C["a"]({theme:{dark:!0,themes:{light:{primary:"white",secondary:"#333333",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"black",secondary:"#333333",accent:"#88b1b1",error:"#f88ff9",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),k=e("8c4f"),j=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("div",{staticClass:"primary landing full-height"},[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"7",md:"5",lg:"5"}},[this.$vuetify.theme.dark?r("v-img",{attrs:{src:e("7a36"),width:"100%"}}):r("v-img",{attrs:{src:e("2edd"),width:"100%"}})],1),r("v-col",{staticStyle:{padding:"250px 0"},attrs:{"justify-center":""}},[r("v-slide-x-transition",[r("v-card",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{elevation:"0",color:"transparent"}},[r("v-card-title",{staticClass:"landing-title"},[r("p",[t._v("Jonathan Chan")])]),r("v-card-text",{staticClass:"body-text"},[r("p",[t._v("Blockchain. "),r("a",{staticStyle:{color:"#88b1b1","text-decoration":"none"},attrs:{href:"/art"}},[t._v("Art.")]),t._v(" Engineer.")]),r("br"),r("p",[r("v-icon",[t._v("mdi-map-marker")]),t._v(" Hong Kong.")],1),r("p",[r("v-icon",[t._v("mdi-school")]),t._v(" Nanotechnology Engineering, University of Waterloo")],1)])],1)],1)],1)],1)],1)],1)])},S=[],T={name:"Home",data:function(){return{show:!1}},mounted:function(){this.show=!this.show}},A=T,O=(e("344a"),e("62ad")),F=e("a523"),E=e("adda"),P=e("0fd9"),D=e("0789"),B=Object(c["a"])(A,j,S,!1,null,"63c4edb8",null),I=B.exports;v()(B,{VCard:g["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:O["a"],VContainer:F["a"],VIcon:f["a"],VImg:E["a"],VRow:P["a"],VSlideXTransition:D["d"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"primary"},[e("div",{staticStyle:{height:"100vh"},attrs:{id:"art",fluid:""}},[e("v-container",[e("v-row",[e("v-col"),e("v-col",{staticStyle:{padding:"200px 0"},attrs:{"justify-center":""}},[e("v-slide-x-transition",[e("v-card",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{shaped:"",elevation:"0",color:"primary"}},[e("v-card-title",{staticClass:"page-title"},[e("p",[t._v("I'm "),e("strong",[t._v("Jonathan Chan")])])]),e("v-card-text",{staticClass:"body-text"},[e("p",[t._v("Blockchain. "),e("a",{staticStyle:{color:"#88b1b1","text-decoration":"none"},attrs:{href:"/art"}},[t._v("Art.")]),t._v(" Engineer.")]),e("br"),e("p",[t._v("Director of Technology at Loopnest Accelerator")])])],1)],1)],1)],1)],1)],1),e("div",[e("v-container",[e("v-timeline",{attrs:{dense:""}},[e("v-scroll-x-reverse-transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("v-timeline-item",[e("v-card",{staticClass:"elevation-2"},[e("v-card-title",[t._v(" Education ")]),e("v-card-text",{staticClass:"timeline-text"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Candidate for Postgraduate Diploma in Finance & Law")]),t._v(", HKU SPACE, Hong Kong")]),e("v-col",{attrs:{align:"right"}},[t._v("Oct 2020 - Present")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Bachelor of Applied Science")]),t._v(", Nanotechnology Engineering, University of Waterloo, Ontario, Canada")]),e("v-col",{attrs:{align:"right"}},[t._v("Sep 2013 – Apr 2018")])],1)],1)],1)],1)],1),e("v-scroll-x-reverse-transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("v-timeline-item",[e("v-card",{staticClass:"elevation-2"},[e("v-card-title",[t._v(" Selected Experiences ")]),e("v-card-text",{staticClass:"timeline-text"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Directory of Technology")]),t._v(", Loopnest Accelerator Limited, Hong Kong")]),e("v-col",{attrs:{align:"right"}},[t._v("Jan 2021 - Present")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Blockchain Analyst")]),t._v(", Loopnest Accelerator Limited, Hong Kong")]),e("v-col",{attrs:{align:"right"}},[t._v("Oct 2018 – Dec 2020")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Trainee")]),t._v(", Loopring Foundation, Shanghai")]),e("v-col",{attrs:{align:"right"}})],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"9"}},[e("strong",[t._v("Assistant Engineer (Algorithms)")]),t._v(", Racefit International Company Limited, Hong Kong")]),e("v-col",{attrs:{align:"right"}},[t._v("Jan – Apr 2016, Jan – Aug 2017")])],1)],1)],1)],1)],1),e("v-scroll-x-reverse-transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("v-timeline-item",[e("v-card",{staticClass:"elevation-2"},[e("v-card-title",[t._v(" Background & Interests ")]),e("v-card-text",{staticClass:"timeline-text"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Art")]),t._v(", Digital Arts/Street Photography")]),e("v-col",{attrs:{align:"right"}},[e("a",{staticStyle:{color:"#88b1b1","text-decoration":"none"},attrs:{href:"https://www.behance.net/jdcjonathan"}},[t._v("Portfolio")])])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Competitive Fencing")])]),e("v-col",{attrs:{align:"right"}})],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"10"}},[e("strong",[t._v("Volleyball")])]),e("v-col",{attrs:{align:"right"}})],1)],1)],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{align:"center"}},[e("v-btn",{staticClass:"nav-button active",attrs:{text:""},on:{click:function(a){return t.readFile()}}},[t._v("resume")])],1)],1)],1)],1)])},L=[],H={name:"Home",data:function(){return{show:!1}},mounted:function(){this.show=!this.show},methods:{readFile:function(){window.open("/assets/files/jonathan-chan-resume.pdf","_blank")}}},J=H,R=(e("ba6e"),e("8414")),K=e("1e06"),N=Object(c["a"])(J,$,L,!1,null,"607d79c0",null),M=N.exports;v()(N,{VBtn:p["a"],VCard:g["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:O["a"],VContainer:F["a"],VRow:P["a"],VScrollXReverseTransition:D["c"],VSlideXTransition:D["d"],VTimeline:R["a"],VTimelineItem:K["a"]});var X=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("div",{staticClass:"primary landing full-height"},[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"7",sm:"5",md:"6",lg:"7"}},[r("v-img",{attrs:{src:e("d994"),width:"100%"}})],1),r("v-col",[r("v-slide-x-transition",[r("v-card",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{shaped:"",elevation:"0",color:"primary"}},[r("v-card-title",{staticClass:"page-title"},[r("p",[t._v("I'm "),r("strong",[t._v("Jonathan Chan")])])]),r("v-card-text",{staticClass:"body-text"},[r("p",[t._v("Blockchain. "),r("a",{staticStyle:{color:"#88b1b1","text-decoration":"none"},attrs:{href:"/art"}},[t._v("Art.")]),t._v(" Engineer.")]),r("br"),r("p",[t._v("Director of Technology at Loopnest Accelerator")])])],1)],1)],1)],1)],1)],1),r("div",{attrs:{id:"work-panel"}})])},U=[],G={name:"Home",data:function(){return{show:!1}},mounted:function(){this.show=!this.show}},W=G,z=(e("967d"),Object(c["a"])(W,X,U,!1,null,"06a1a4ac",null)),Y=z.exports;v()(z,{VCard:g["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:O["a"],VContainer:F["a"],VImg:E["a"],VRow:P["a"],VSlideXTransition:D["d"]});var q=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"primary"},[r("div",{staticStyle:{height:"100vh"},attrs:{fluid:""}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"7",md:"9",lg:"9"}},[r("v-img",{attrs:{src:e("3db4"),height:"95vh"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),r("v-col",{attrs:{cols:"3",md:"3",lg:"3"}},[r("v-card",{attrs:{elevation:"0",color:"transparent"}},[r("v-card-title",{staticClass:"page-title"},[t._v("Art"),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{rounded:"",href:"https://www.behance.net/jdcjonathan",target:"_blank"}},[t._v("Portfolio")])],1)],1),r("v-container",{attrs:{fluid:""}},[this.$vuetify.theme.dark?r("v-img",{attrs:{contain:"",src:e("7a36"),height:"85vh"}}):r("v-img",{attrs:{contain:"",src:e("2edd"),height:"85vh"}})],1)],1)],1)],1)],1),r("div",{staticStyle:{height:"80vh"},attrs:{id:"panel",fluid:""}},[r("v-overlay",{attrs:{opacity:1,value:t.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1),r("div",{staticStyle:{height:"150vh"},attrs:{id:"art",fluid:""}})])},Q=[],Z={data:function(){return{overlay:!0}},mounted:function(){this.overlay=!1}},tt=Z,at=(e("ac5a"),e("a797")),et=e("490a"),rt=Object(c["a"])(tt,q,Q,!1,null,"e798c4d8",null),nt=rt.exports;v()(rt,{VBtn:p["a"],VCard:g["a"],VCardTitle:h["b"],VCol:O["a"],VContainer:F["a"],VImg:E["a"],VOverlay:at["a"],VProgressCircular:et["a"],VRow:P["a"],VSpacer:w["a"]});var ot=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"primary"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"7",sm:"8",md:"8",lg:"8"}},[r("v-img",{attrs:{src:e("67ce")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),r("v-col",{staticStyle:{padding:"70px 0"},attrs:{"justify-center":""}},[r("v-card",{attrs:{color:"transparent"}},[r("v-card-title",{staticClass:"page-title"},[t._v(" Fun ")]),r("v-card-text",[t._v(" random things ")])],1)],1)],1),r("v-row",[r("v-col"),r("v-col",{attrs:{cols:"7",sm:"5",md:"6",lg:"7","justify-center":""}},[r("v-img",{attrs:{src:e("4202"),width:"100%"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1)},it=[],st={},ct=Object(c["a"])(st,ot,it,!1,null,null,null),lt=ct.exports;v()(ct,{VCard:g["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:O["a"],VContainer:F["a"],VImg:E["a"],VProgressCircular:et["a"],VRow:P["a"]});var vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",[t._v(" Not found ")])],1)},dt=[],ut={},pt=Object(c["a"])(ut,vt,dt,!1,null,null,null),gt=pt.exports;v()(pt,{VContainer:F["a"]}),r["a"].use(k["a"]);var ht=[{path:"/",name:"Home",component:I},{path:"/about",component:M},{path:"/work",component:Y},{path:"/art",component:nt},{path:"/fun",component:lt},{path:"/*",component:gt}],mt=new k["a"]({mode:"hash",routes:ht,base:"/stixgrix/"}),ft=mt;r["a"].config.productionTip=!1,new r["a"]({router:ft,vuetify:V,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";e("9c0c")},6290:function(t,a,e){},"67ce":function(t,a,e){t.exports=e.p+"img/22.jpg"},"7a36":function(t,a,e){t.exports=e.p+"img/kyotoStrutGreyscale.svg"},"8b01":function(t,a,e){},"967d":function(t,a,e){"use strict";e("8b01")},"9c0c":function(t,a,e){},ac5a:function(t,a,e){"use strict";e("b3a4")},b3a4:function(t,a,e){},ba6e:function(t,a,e){"use strict";e("1bf2")},d994:function(t,a,e){t.exports=e.p+"img/windyjon.jpg"}});