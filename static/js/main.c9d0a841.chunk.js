(this["webpackJsonpfirst-work-app"]=this["webpackJsonpfirst-work-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),i=c.n(r),a=(c(9),c(2)),l=(c(10),c(0));function o(e){var t=e.Theuser;return Object(l.jsxs)("div",{className:"card w-100 mt-3 ",children:[Object(l.jsx)("div",{style:{width:"100%"},children:Object(l.jsx)("img",{src:"https://picsum.photos/200/300?random="+t.id,className:"card-img-top",alt:"..."})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("h5",{className:"card-title",children:[" ",t.name]}),Object(l.jsx)("p",{className:"card-text",children:t.email})]})]})}function j(e){var t=e.children;return Object(l.jsx)("div",{style:{border:"1px solid black",overflow:"scroll",height:780},children:t})}function d(e){var t=e.setTheInputVal;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",placeholder:"tap here",onChange:function(e){t(e.target.value)}})})}var u=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),u=i[0],h=i[1],b=Object(n.useState)([]),O=Object(a.a)(b,2),f=O[0],m=O[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e),m(e)}))}),[]),Object(n.useEffect)((function(){var e=c.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));m(e)}),[u]),Object(l.jsxs)("div",{className:"",children:[Object(l.jsxs)("div",{className:"text-center mt-3",children:[Object(l.jsx)("h1",{children:"kareem"}),Object(l.jsx)(d,{setTheInputVal:h})]}),Object(l.jsx)(j,{children:Object(l.jsx)("div",{className:"row",children:0===c.length?Object(l.jsx)("div",{children:"loading"}):f.map((function(e,t){return Object(l.jsx)("div",{className:"col-md-4 col-lg-3 col-sm-6",children:Object(l.jsx)(o,{Theuser:e})},t)}))})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c9d0a841.chunk.js.map