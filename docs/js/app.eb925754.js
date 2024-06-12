(function(){"use strict";var e={9688:function(e,t,n){var a=n(3751),r=n(641),s=n(33);const o={id:"app-header"},i=(0,r.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})],-1),l=(0,r.Lk)("span",null,null,-1),c=[i,l];function d(e,t,n,a,i,l){const d=(0,r.g2)("MonthListComponent"),u=(0,r.g2)("CalendarComponent"),v=(0,r.g2)("EventsListComponent");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("header",o,[(0,r.Lk)("button",{class:"control",onClick:t[0]||(t[0]=(...e)=>a.toggleListView&&a.toggleListView(...e))},c)]),(0,r.bF)(d,{class:(0,s.C4)(["months",[a.listViewState?"":"off"]]),events:a.events,date:a.date,onDateChange:a.onListChange},null,8,["class","events","date","onDateChange"]),(0,r.bF)(u,{class:"grid",events:a.events,date:a.date},null,8,["events","date"]),(0,r.bF)(v,{class:"events",events:a.events,date:a.date},null,8,["events","date"])],64)}const u={class:"container"},v={class:"rm2n"};function h(e,t,n,a,o,i){const l=(0,r.g2)("vue-cal");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("div",v,[(0,r.bF)(l,{"hide-view-selector":"","active-view":"month","active-vew":"'week'","disable-views":"['years', 'year', 'week', 'day']",small:!0,time:!1,events:o.collection,"events-count-on-year-view":!0,"selected-date":n.date,"cell-class":a.getCellClass,onViewChange:i.onViewChange,style:{width:"100%",height:"100%"}},{"cell-content":(0,r.k6)((({cell:e,view:t,events:n})=>[(0,r.Lk)("div",{class:(0,s.C4)(["vuecal__cell-date",[t.id,a.getCellClass(e,t,n)]])},(0,s.v_)(e.content),3)])),_:1},8,["events","selected-date","cell-class","onViewChange"])])])}var g=n(6150),f={components:{VueCal:g.A},props:{events:{type:Array,required:!0},date:{type:Date,required:!0}},setup(){const e=(e,t,n)=>!e.outOfScope&&n.length&&(n[0]["class"]??"");return{getCellClass:e}},data(){return{selectedDate:new Date(1970,0,1),collection:[]}},watch:{events:{immediate:!0,handler(e){this.collection=e.sort(((e,t)=>e.start?.getTime()-t.start?.getTime()))}}},methods:{onViewChange(e){this.$emit("view-change",{startDate:e.startDate,endDate:e.endDate})}}},m=n(6262);const p=(0,m.A)(f,[["render",h],["__scopeId","data-v-2a1aa8be"]]);var b=p;const y=e=>((0,r.Qi)("data-v-433c7bfd"),e=e(),(0,r.jt)(),e),w={key:0,class:"container"},k=y((()=>(0,r.Lk)("div",{class:"header"},[(0,r.Lk)("div",null,[(0,r.Lk)("h5",{class:"subtitle past"},"PAST"),(0,r.Lk)("h5",{class:"subtitle future"},"FUTURE")]),(0,r.Lk)("h1",{class:"title"},"EVENTS")],-1))),C={class:"timeline"},D={class:"timeline-content"},L=["innerHTML"],M={key:1,class:"container"},E=y((()=>(0,r.Lk)("div",{class:"header"},[(0,r.Lk)("div",null,[(0,r.Lk)("h5",{class:"subtitle past"},"PAST"),(0,r.Lk)("h5",{class:"subtitle future"},"FUTURE")]),(0,r.Lk)("h1",{class:"title"},"EVENTS")],-1))),T=[E];function S(e,t,n,a,o,i){return(0,r.uX)(),(0,r.CE)("div",null,[o.collection?.length?((0,r.uX)(),(0,r.CE)("div",w,[k,(0,r.Lk)("div",C,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.collection,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:"timeline-item",key:t},[(0,r.Lk)("div",{class:(0,s.C4)(["timeline-marker",[e.class]])},null,2),(0,r.Lk)("div",D,[(0,r.Lk)("h3",null,(0,s.v_)(e.start),1),(0,r.Lk)("p",{innerHTML:e.summary},null,8,L)])])))),128))])])):(0,r.Q3)("",!0),o.collection?.length?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",M,T))])}var F={components:{},props:{events:{type:Array,required:!0},date:{type:Date,required:!0}},watch:{events:{immediate:!0,handler(e){const t=this.date??new Date,n=new Date(t.getFullYear(),t.getMonth(),1),a=new Date(t.getFullYear(),t.getMonth()+1,0);this.collection=e.sort(((e,t)=>e.start?.getTime()-t.start?.getTime())).filter((e=>e.start.getTime()>=n.getTime()&&e.end.getTime()<=a.getTime())).map((e=>({...e,start:this.toFormatedDate(e.start),end:this.toFormatedDate(e.end)})))}}},methods:{toFormatedDate:function(e){const t=e.toString().replace(/^.{3}\s|\s?GMT.+/gi,""),[n,a,r,s]=t.split(" "),[o,i]=s.split(":");let l=n;return l+=" ",l+=+a,l+=", ",l+=r,l+=" ",l+=+o<=12?o:+o,l+=":",l+=i,l+=+o<12?"AM":"PM",l}},data(){return{comingNextEvent:null,lastStagedEvent:null,collection:[]}}};const O=(0,m.A)(F,[["render",S],["__scopeId","data-v-433c7bfd"]]);var _=O;const A={class:"container"},V={class:"year"},j={class:"list"},Y=["for"],x=["id","value"],I={class:"month"},Z={class:"events"};function X(e,t,n,o,i,l){const c=(0,r.g2)("slide"),d=(0,r.g2)("navigation"),u=(0,r.g2)("carousel");return(0,r.uX)(),(0,r.CE)("div",A,[(0,r.bF)(u,{class:"years",modelValue:i.selectedYearIndex,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedYearIndex=e),"items-to-show":1,onSlideEnd:l.onSlideEnd},{addons:(0,r.k6)((()=>[(0,r.bF)(d)])),default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.years,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e},{default:(0,r.k6)((()=>[(0,r.Lk)("span",V,(0,s.v_)(e),1)])),_:2},1024)))),128))])),_:1},8,["modelValue","onSlideEnd"]),(0,r.Lk)("div",j,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.collection,((e,n)=>((0,r.uX)(),(0,r.CE)("label",{class:"list-item",key:n,for:e.label,onChange:t[2]||(t[2]=(...e)=>l.goToMonth&&l.goToMonth(...e))},[(0,r.bo)((0,r.Lk)("input",{class:"sr-only",type:"radio",name:"month.label","onUpdate:modelValue":t[1]||(t[1]=e=>i.selectedMonth=e),id:e.label,value:n},null,8,x),[[a.XL,i.selectedMonth]]),(0,r.Lk)("span",I,(0,s.v_)(e.label),1),(0,r.Lk)("span",Z,(0,s.v_)(e.events?.length),1)],40,Y)))),128))])])}var H=n(953),N=(n(4114),{groupByDateMonth:e=>e.reduce(((e,t)=>{const n=t.start?.getDate()+"."+t.start?.getMonth();return e[n]?e[n].push(t):e[n]=[t],e}),{}),groupByMonthYear:e=>e.reduce(((e,t)=>{const n=t.start?.getMonth()+"."+t.start?.getFullYear();return e[n]?e[n].push(t):e[n]=[t],e}),{})}),P=n(2091),q={components:{Carousel:P.FN,Slide:P.q7,Navigation:P.Vx},props:{events:{type:Object,required:!0},date:{type:Date,required:!0},view:{type:Boolean,required:!0}},watch:{events:{immediate:!0,handler(e){this.collection=N.groupByMonthYear(e);const t=this.years[this.selectedYearIndex];if(!t)return;const n=Object.fromEntries(Object.entries(this.collection).map((([e,t])=>[e,{events:t}]))),a=Object.fromEntries(this.months.map(((e,a)=>[a+"."+t,{label:e,...n[a+"."+t]??{events:(0,H.KR)([])}}])));this.collection=Object.values(a)}},date:{immediate:!0,handler(e){e instanceof Date&&(this.selectedYearIndex=this.years.indexOf(e.getFullYear()),this.selectedMonth=e.getMonth())}},view:{immediate:!0,handler(e){this.viewListState=e}}},data(){const e=new Date;return{viewListState:!1,collection:[],selectedMonth:e.getMonth(),selectedYearIndex:e.getFullYear(),years:Array.from({length:25},((t,n)=>e.getFullYear()+(n-8))),months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},methods:{getRangeDates(){return{startDate:new Date(this.years[this.selectedYearIndex],this.selectedMonth,1),endDate:new Date(this.years[this.selectedYearIndex],this.selectedMonth+1,0)}},goToMonth(){this.$emit("date-change",this.getRangeDates())},onSlideEnd(){this.$emit("date-change",this.getRangeDates())}}};const R=(0,m.A)(q,[["render",X],["__scopeId","data-v-32c1a806"]]);var B=R,K=n(2838),U=n.n(K),$={name:"App",components:{CalendarComponent:b,MonthListComponent:B,EventsListComponent:_},setup(){const e=new Date,t=Date.UTC(e.getFullYear(),1+e.getMonth(),1),n=(0,H.KR)([]),a=(0,H.KR)(!1),s=(0,H.KR)(new Date(t)),o=["bg-blue-100","bg-teal-100","bg-indigo-100","bg-green-300","bg-brown-600","bg-yellow-600","bg-green-700","bg-brown-700","bg-pink-700","bg-orange-700"],i=function(e,t){return e instanceof Date&&t instanceof Date&&e?.getMonth()===t?.getMonth()&&e?.getYear()===t?.getYear()},l=e=>e.map((e=>({title:e.summary,start:e.start.dateTime||e.start.date,end:e.end.dateTime||e.end.date,summary:U().sanitize(e.description),id:e.id}))).map((e=>({...e,start:Date.parse(e.start)?new Date(e.start):e.start,end:Date.parse(e.end)?new Date(e.end):e.end}))),c=async function(e,t){const n=e+"  "+t,a=JSON.parse(localStorage.getItem("__cssd")??"{}");a[n];const r=`https://www.googleapis.com/calendar/v3/calendars/9188d3a61627dc646487e8a9e8a02541f4fca90eebdf0f0bf162bd0a23d45edf@group.calendar.google.com/events?singleEvents=true&orderBy=startTime&key=AIzaSyD1SAN0kf3Ou-SCDCbsiPEPsj8G4rGWIo0&timeMin=${e}&timeMax=${t}`;try{const e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch events");const{items:t=[]}=await(e?.json());return t}catch(s){return[]}},d=async(e,t)=>{const n=await c(e,t);return Object.values(N.groupByDateMonth(l(n))).map(((e,t)=>e.map((e=>({...e,class:o[t%o.length]}))))).flatMap((e=>e))},u=async e=>{i(s.value,e.startDate)||(s.value=e.startDate,window.innerWidth<=768&&v(),n.value=await d(new Date(s.value.getFullYear(),0,1,0,0,0,0).toISOString(),new Date(s.value.getFullYear(),11,31,23,59,59,999).toISOString()))},v=()=>{a.value=!a.value};return(0,r.sV)((async()=>{n.value=await d("2024-01-01T00:00:00.000Z","2024-12-31T23:59:59.999Z")})),{events:n,date:s,listViewState:a,toggleListView:v,onListChange:u}}};const J=(0,m.A)($,[["render",d]]);var z=J;const G=(0,a.Ef)(z);G.mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{127:"425ea325",131:"28fa908b",155:"075dec39",170:"6c072bd4",216:"25241d8d",219:"4bc98984",233:"d169fc7f",238:"6fbfe8da",245:"5f09e7c2",269:"c6efbfc0",274:"9d02a3c2",324:"3a18bdc8",326:"df75fb79",332:"e6d59b5e",335:"24ea74ed",359:"ae234877",400:"3037fedf",442:"c6933c56",444:"209e443b",448:"b1015e14",466:"9d5d0cf4",514:"7fd9bd30",533:"52c7aa8e",543:"893b26a3",573:"2ddd274e",595:"28a57be3",613:"5608f52b",634:"5292c3ee",677:"455d9aa5",689:"1ef02f54",722:"022aa505",724:"491390a8",743:"8e35a4d8",775:"c75c780b",785:"045c279c",829:"38470832",836:"efd29b61",841:"4b0019a7",859:"833f4e07",863:"bdcb362b",913:"30b3e12d",970:"d2293986"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="san-diego-cyber:";n.l=function(a,r,s,o){if(e[a])e[a].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+s){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=a),e[a]=[r];var v=function(t,n){i.onerror=i.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(v.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=v.bind(null,i.onerror),i.onload=v.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/san-diego-cyber/"}(),function(){var e={524:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=s);var o=n.p+n.u(t),i=new Error,l=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,r[1](i)}};n.l(o,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],i=a[1],l=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(t&&t(a);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunksan_diego_cyber"]=self["webpackChunksan_diego_cyber"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(9688)}));a=n.O(a)})();
//# sourceMappingURL=app.eb925754.js.map