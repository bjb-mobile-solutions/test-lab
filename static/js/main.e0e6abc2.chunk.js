(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(61),r=a.n(o),s=(a(70),a(18)),l=a(19),i=a(21),m=a(20),u=a(22),d=a(139),p=a(141),b=a(140),f=(a(72),a(62)),h=(a(74),a(34));h.initializeApp({apiKey:"AIzaSyD9AtuHI_zqeW3L2s-mTvc-J-281_dpAKw",authDomain:"jbtestlab.firebaseapp.com",databaseURL:"https://jbtestlab.firebaseio.com",projectId:"jbtestlab",storageBucket:"jbtestlab.appspot.com",messagingSenderId:"242278540925"}),h.firestore().settings({timestampsInSnapshots:!0});var v=h,E=(a(131),a(63)),j=a.n(E),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=["#006400ff","#006400dd","#006400bb","#00640099","#00640077","#00640055","#00640033"],t=["#f39c12ff","#f39c12dd","#f39c12bb","#f39c1299","#f39c1277","#f39c1255","#f39c1233"],a=this.props.os,n=[],o=0,r=0;return Object.keys(a).map(function(c){return Object.keys(a[c]).map(function(s){var l=a[c][s];n.push({value:l,color:"Android"===c?e[r++]:t[o++]})})}),o=0,r=0,c.a.createElement("div",{className:"OSStatistics"},c.a.createElement("div",{className:"PieChart"},c.a.createElement(j.a,{data:n})),c.a.createElement("div",null,c.a.createElement("table",{className:"Table"},c.a.createElement("tbody",null,Object.keys(a).map(function(n){return Object.keys(a[n]).map(function(s){return c.a.createElement("tr",{style:{backgroundColor:"Android"===n?e[r++]:t[o++],color:"white"},key:n+s},c.a.createElement("td",null,n," ",s),c.a.createElement("td",null,a[n][s]))})})))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[],n={};e.forEach(function(e){var a=e.data(),c=a.model,o=a.modelName,r=a.osName,s=a.osVersion;t.push({key:e.id,doc:e,model:c,modelName:o,osName:r,osVersion:s}),void 0===n[r]?n[r]=Object(f.a)({},s,1):void 0===n[r][s]?n[r][s]=1:n[r][s]+=1}),a.setState({devices:t,os:n})},a.ref=v.firestore().collection("devices"),a.unsubscribe=null,a.state={devices:[],os:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){return c.a.createElement("div",{className:"DeviceList"},c.a.createElement("h2",null,"Device List"),c.a.createElement(O,{os:this.state.os}),c.a.createElement("ul",null,this.state.devices.map(function(e){return c.a.createElement("li",{key:e.key,className:"DeviceItem"},c.a.createElement("div",{className:"PlatformIcon"},"Android"===e.osName&&c.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/android-os.png"}),"iOS"===e.osName&&c.a.createElement("img",{src:"https://img.icons8.com/ios/48/000000/mac-os-filled.png"})),c.a.createElement("div",{className:"DeviceInfo"},c.a.createElement("span",null,e.modelName),c.a.createElement("p",null,e.osName," ",e.osVersion)))})))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:"/test-lab"},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-header"},c.a.createElement("h1",null,"Julius Baer"),c.a.createElement("p",null,"Test Lab")),c.a.createElement("div",{className:"App-content"},c.a.createElement(p.a,null,c.a.createElement(b.a,{exact:!0,path:"/",component:y}),c.a.createElement(b.a,{render:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Oops..."),c.a.createElement("h2",null,"Something went wrong :("))}}))),c.a.createElement("footer",null,"version: 0.0.1 (beta)")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a(136)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.e0e6abc2.chunk.js.map