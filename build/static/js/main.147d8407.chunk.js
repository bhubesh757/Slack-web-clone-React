(this["webpackJsonpreact-clone-four"]=this["webpackJsonpreact-clone-four"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(2),a=c.n(s),i=c(29),r=c.n(i),o=(c(80),c(18)),j=(c(81),c(116)),l=c(52),d=c.n(l),b=c(53),u=c.n(b),h=c(54),O=c.n(h),m=(c(82),Object(s.createContext)()),x=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(n.jsx)(m.Provider,{value:Object(s.useReducer)(t,c),children:a})},p=function(){return Object(s.useContext)(m)};var v=function(){var e=p(),t=Object(o.a)(e,1)[0].user;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"header__left",children:[Object(n.jsx)(j.a,{src:null===t||void 0===t?void 0:t.photoURL,alt:null===t||void 0===t?void 0:t.displayName,className:"header__avatar"}),Object(n.jsx)(d.a,{})]}),Object(n.jsxs)("div",{className:"header__Search",children:[Object(n.jsx)(u.a,{}),Object(n.jsx)("input",{type:"text ",className:"header__inputtext",placeholder:"Search Slack"})]}),Object(n.jsx)("div",{className:"header__right",children:Object(n.jsx)(O.a,{})})]})},f=(c(88),c(56)),g=c.n(f),_=c(55),N=c.n(_),S=c(10),I=c(36),w=I.a.initializeApp({apiKey:"AIzaSyBeU33mSd2JOC8ttwofTTX-KiBfc145nDM",authDomain:"slack-web-clone-js.firebaseapp.com",projectId:"slack-web-clone-js",storageBucket:"slack-web-clone-js.appspot.com",messagingSenderId:"360828311041",appId:"1:360828311041:web:21b234f3f2b84f2b855200",measurementId:"G-PQ47TYSGST"}).firestore(),C=I.a.auth(),y=new I.a.auth.GoogleAuthProvider,k=I.a;c(92);var B=function(e){var t=e.Icon,c=e.title,s=e.addChannelOption,a=e.id,i=Object(S.f)();return Object(n.jsxs)("div",{className:"SidebarOption",onClick:s?function(){var e=prompt("Please Enter the Channel Name ");e&&w.collection("rooms").add({name:e})}:function(){a?i.push("/room/".concat(a)):i.push(c)},children:[t&&Object(n.jsx)(t,{className:"sidebarOption__icon"}),t?Object(n.jsxs)("h3",{children:[" ",c," "]}):Object(n.jsxs)("h3",{className:"sidebaroption__channel",children:[Object(n.jsx)("span",{className:"sidebaroption__hash",children:" # "}),c]})]})},T=c(57),D=c.n(T),P=c(58),F=c.n(P),M=c(59),R=c.n(M),E=c(60),U=c.n(E),A=c(61),G=c.n(A),L=c(62),J=c.n(L),K=c(63),W=c.n(K),z=c(64),q=c.n(z),Q=c(65),V=c.n(Q),X=c(66),Y=c.n(X);var H=function(){var e=p(),t=Object(o.a)(e,1)[0].user,c=Object(s.useState)([]),a=Object(o.a)(c,2),i=a[0],r=a[1];return Object(s.useEffect)((function(){w.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar__header",children:[Object(n.jsxs)("div",{className:"sidebar__info",children:[Object(n.jsx)("h2",{children:"React Js India"}),Object(n.jsxs)("h3",{children:[Object(n.jsx)(N.a,{}),null===t||void 0===t?void 0:t.displayName]})]}),Object(n.jsx)(g.a,{})]}),Object(n.jsx)(B,{Icon:D.a,title:"Threads"}),Object(n.jsx)(B,{Icon:F.a,title:"Mentions and Reactions"}),Object(n.jsx)(B,{Icon:R.a,title:"Saved"}),Object(n.jsx)(B,{Icon:U.a,title:"Channel Browser"}),Object(n.jsx)(B,{Icon:G.a,title:"People and User Groups"}),Object(n.jsx)(B,{Icon:J.a,title:"Apps"}),Object(n.jsx)(B,{Icon:W.a,title:"File Browser"}),Object(n.jsx)(B,{Icon:q.a,title:"Show less"}),Object(n.jsx)("hr",{}),Object(n.jsx)(B,{Icon:V.a,title:"Direct Messages"}),Object(n.jsx)("hr",{}),Object(n.jsx)(B,{Icon:Y.a,title:"Add Channel",addChannelOption:!0}),i.map((function(e){return Object(n.jsx)(B,{title:e.name,id:e.id})}))]})},Z=c(39),$=(c(96),c(68)),ee=c.n($),te=c(69),ce=c.n(te),ne=c(70),se=c.n(ne),ae=c(67),ie=c.n(ae);c(97);var re=function(e){var t=e.message,c=e.timestamp,s=e.user,a=e.userImage;return Object(n.jsxs)("div",{className:"message",children:[Object(n.jsx)("img",{src:a}),Object(n.jsxs)("div",{className:"message__info",children:[Object(n.jsxs)("h4",{children:[" ",s," ",Object(n.jsx)("span",{className:"message__timestamp",children:new Date(null===c||void 0===c?void 0:c.toDate()).toUTCString()})," "]}),Object(n.jsxs)("p",{children:[" ",t," "]})]})]})},oe=c(115);c(98);var je=function(e){var t=e.channelName,c=e.channelId,a=Object(s.useState)(""),i=Object(o.a)(a,2),r=i[0],j=i[1],l=p(),d=Object(o.a)(l,1)[0].user;return Object(n.jsx)("div",{className:"chatinput",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{placeholder:"Message #".concat(null===t||void 0===t?void 0:t.toLowerCase()),value:r,onChange:function(e){return j(e.target.value)}}),Object(n.jsx)(oe.a,{type:"submit",onClick:function(e){e.preventDefault(),c&&(w.collection("rooms").doc(c).collection("messages").add({message:r,user:d.displayName,userImage:d.photoURL,timestamp:k.firestore.FieldValue.serverTimestamp()}),j(""))},children:"Send"})]})})};var le=function(){var e=Object(S.g)().roomId,t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)([]),j=Object(o.a)(r,2),l=j[0],d=j[1];return Object(s.useEffect)((function(){e&&w.collection("rooms").doc(e).onSnapshot((function(e){return i(e.data())})),w.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))}))}),[e]),console.log("Messages==",l),Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsxs)("div",{className:"chat__header",children:[Object(n.jsx)("div",{className:"chat__headerleft",children:Object(n.jsxs)("div",{className:"chat__channelName",children:[Object(n.jsxs)("strong",{children:[" # ",null===a||void 0===a?void 0:a.name," "]}),Object(n.jsx)(ie.a,{})]})}),Object(n.jsx)("div",{className:"chat__headerRight",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(ee.a,{}),Object(n.jsx)(ce.a,{}),Object(n.jsx)(se.a,{}),"Details"]})})]}),Object(n.jsx)("div",{className:"chat__messages",children:l.map((function(e){var t=e.message,c=e.timestamp,s=e.user,a=e.userImage;return Object(n.jsx)(re,{message:t,timestamp:c,user:s,userImage:a})}))}),Object(n.jsx)(je,{channelName:null===a||void 0===a?void 0:a.name,channelId:e})]})},de=c(71),be=(c(99),c(72)),ue=c.n(be),he=c(46),Oe="SET_USER",me=function(e,t){switch(console.log(t),t.type){case Oe:return Object(he.a)(Object(he.a)({},e),{},{user:t.user});default:return e}};var xe=function(){var e=p(),t=Object(o.a)(e,2);Object(de.a)(t[0]);var c=t[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("img",{src:"https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png"}),Object(n.jsx)("h1",{children:"Sign In to Slack"}),Object(n.jsx)("p",{children:"Bhubesh.slack.com"}),Object(n.jsx)(oe.a,{onClick:function(){C.signInWithPopup(y).then((function(e){c({type:Oe,user:e.user})})).catch((function(e){return alert(e.message)}))},children:" Sign in With Google"})]}),Object(n.jsxs)("div",{className:"login__dev",children:["Developed by : Bhubesh ",Object(n.jsx)(ue.a,{}),"2021"]})]})};var pe=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(Z.a,{children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:"app__body",children:[Object(n.jsx)(H,{}),Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{path:"/room/:roomId",children:Object(n.jsx)(le,{},"uniqueKey")}),Object(n.jsx)(S.a,{path:"/",children:Object(n.jsx)("h1",{children:" Welcome page"})})]})]})]}):Object(n.jsx)(xe,{})})})},ve=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,117)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{initialState:{user:null},reducer:me,children:Object(n.jsx)(pe,{})})}),document.getElementById("root")),ve()},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},88:function(e,t,c){},92:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.147d8407.chunk.js.map