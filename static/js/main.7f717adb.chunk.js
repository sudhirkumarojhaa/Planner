(this["webpackJsonpget-set-go"]=this["webpackJsonpget-set-go"]||[]).push([[0],{35:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(9),o=n.n(s),l=(n(35),n(7)),i=n(13),j=n(25);function d(){var e=Object(j.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: 'Poppins', sans-serif;\n    transition: all 0.50s linear;\n  }\n  "]);return d=function(){return e},e}var b=Object(i.b)(d(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),u={body:"#fff",text:"#444",toggleBorder:"#fff",background:"#fff"},f={body:"#222",text:"#fff",toggleBorder:"#222831",background:"#222831"},x=(n(38),n(45)),g=n(46),h=n(47),O=n(48),m=n(49),k=n(50);function v(e){var t=e.onClick,n=e.theme,a=e.onclickPlus,r=e.onDelete,s=e.saveNotes,o=e.showNotes;return Object(c.jsx)("div",{className:"container-fluid p-5",children:Object(c.jsxs)("div",{className:"fixed-top w- 100 d-flex justify-content-between align-items-center p-4 bg-warning",children:[Object(c.jsx)("h3",{className:"m-0 font-weight-bold text-dark",children:"planner"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{size:16,onClick:o,className:"mr-4 text-dark"}),Object(c.jsx)(g.a,{size:16,onClick:s,className:"mr-4 text-dark"}),Object(c.jsx)(h.a,{size:16,onClick:a,className:"mr-4 text-dark"}),Object(c.jsx)(O.a,{size:16,onClick:r,className:"mr-4 text-dark"}),Object(c.jsx)("button",{onClick:t,children:"light"===n?Object(c.jsx)(m.a,{color:"#002856",size:16}):Object(c.jsx)(k.a,{color:"#000",size:16})})]})]})})}var y=n(16),N=n(10),C=n.n(N),p=n(52),w=n(53),S=n(54);function I(e){var t=e.onClick,n=e.bg;return Object(c.jsx)("div",{onClick:t,className:"radius",style:{backgroundColor:n}})}function z(e){var t=e.show,n=e.handleClose,r=(e.handleLevel,Object(a.useState)("")),s=Object(l.a)(r,2),o=s[0],i=s[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),b=d[0],u=d[1];return Object(c.jsxs)(p.a,{show:t,onHide:n,size:"lg",centered:!0,children:[Object(c.jsx)(p.a.Header,{closeButton:!0,children:Object(c.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",className:"text-dark",children:"create my task"})}),Object(c.jsx)(p.a.Body,{className:"py-4",children:Object(c.jsxs)(w.a,{children:[Object(c.jsxs)(w.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(w.a.Label,{className:"text-dark",children:"agenda:"}),Object(c.jsx)(w.a.Control,{className:"search",as:"textarea",placeholder:"add your tasks here",onChange:function(e){return i(e.target.value)},maxLength:"100"})]}),Object(c.jsx)(w.a.Label,{className:"text-dark",children:"priority:"}),Object(c.jsxs)("div",{className:"d-flex justify-content-start align-items-center",children:[Object(c.jsx)(I,{bg:"#99feaf",onClick:function(e){return u(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"orange",onClick:function(e){return u(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#70ddf7",onClick:function(e){return u(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#fb6a6b",onClick:function(e){return u(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#fff36d",onClick:function(e){return u(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#73e3fd",onClick:function(e){return u(e.target.style.backgroundColor)}})]})]})}),o&&b?Object(c.jsx)(p.a.Footer,{children:Object(c.jsx)(S.a,{variant:"primary",size:"lg",block:!0,onClick:function(){var e=JSON.parse(localStorage.getItem("item"))||[],t={text:o,level:b,key:C()().unix()},n=[].concat(Object(y.a)(e),[t]);localStorage.setItem("item",JSON.stringify(n)),window.location.reload(!1)},children:"create"})}):null]})}var J=n.p+"static/media/c.c8ffc59e.png";function L(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(l.a)(s,2),i=o[0],j=o[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),u=b[0],f=b[1];Object(a.useEffect)((function(){x()}),[]);var x=function(){var e=localStorage.getItem("item"),t=JSON.parse(e);r(t)},g=0!==u.length?n&&n.filter((function(e){if(e.level===u)return e})):n&&n.filter((function(e){return""===i||e.text.toLowerCase().includes(i.toLowerCase())?e:void 0})).reverse();return Object(c.jsxs)("div",{className:"mt-4 list",children:[Object(c.jsxs)("h6",{className:"font-weight-bold mb-3",children:["showing ",g&&g.length," results"]}),Object(c.jsx)("input",{type:"text",placeholder:"search an item here...",className:"w-100 p-2 search",onChange:function(e){return j(e.target.value)}}),Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-2",children:[Object(c.jsx)("p",{className:"mt-2 font-weight-bold",children:"sort by priority :"}),Object(c.jsxs)("div",{className:"d-flex justify-content-start align-items-center",children:[Object(c.jsx)(I,{bg:"#99feaf",onClick:function(e){return f(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"orange",onClick:function(e){return f(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#70ddf7",onClick:function(e){return f(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#fb6a6b",onClick:function(e){return f(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#fff36d",onClick:function(e){return f(e.target.style.backgroundColor)}}),Object(c.jsx)(I,{bg:"#73e3fd",onClick:function(e){return f(e.target.style.backgroundColor)}})]})]}),u?Object(c.jsxs)("div",{className:"d-flex justify-content-start align-items-center mt-2",children:[Object(c.jsx)("p",{className:"font-weight-bold mt-2",children:"now showing results for :"}),Object(c.jsx)("div",{style:{backgroundColor:u,width:30,height:30,marginLeft:20,borderRadius:30}}),Object(c.jsx)(S.a,{className:"button ml-4",variant:"primary",size:"sm",onClick:function(){return f("")},children:"show all results"})]}):null,Object(c.jsx)("div",{className:"over",children:g&&0!==g.length?g.map((function(e){return Object(c.jsx)("div",{className:"d-flex justify-content-between my-4",children:Object(c.jsxs)("div",{className:"flex-column w-100 bg py-1 mt-4 d-flex justify-content-between",children:[Object(c.jsx)("h3",{className:"font-weight-bold",children:e.text}),Object(c.jsxs)("div",{className:"d-flex my-4",children:[Object(c.jsx)("div",{style:{backgroundColor:e.level,width:20,height:20,borderRadius:30}}),Object(c.jsx)("h6",{className:"font-weight-bold mx-3",children:C.a.unix(e.key).format("DD MMMM,   YYYY")}),Object(c.jsx)("h6",{className:"font-weight-bold mx-3",children:C.a.unix(e.key).format("hh:mm A")}),Object(c.jsx)(O.a,{size:16,onClick:function(){return function(e){var t=(JSON.parse(localStorage.getItem("item"))||[]).filter((function(t){return t.key!==e}));localStorage.setItem("item",JSON.stringify(t)),window.location.reload(!1)}(e.key)},className:"mr-4"})]})]})},e.key)})):Object(c.jsxs)("div",{className:"mt-5 d-flex flex-column justify-content-center align-items-center",children:[Object(c.jsx)("p",{className:"text-center",children:"no saved cards found."}),Object(c.jsx)("img",{src:J,alt:"no",className:"w-25 align-self-center"}),Object(c.jsx)("p",{className:"text-center",children:"you can always start fresh by clicking on the pen icon in the header."})]})})]})}function B(e){var t=e.show,n=e.handleClose,r=(e.handleLevel,Object(a.useState)("")),s=Object(l.a)(r,2),o=s[0],i=s[1],j=Object(a.useState)([]),d=Object(l.a)(j,2),b=(d[0],d[1]);Object(a.useEffect)((function(){if(localStorage.getItem("notes")){var e=JSON.parse(localStorage.getItem("notes"));b(e)}}),[o]);return Object(c.jsxs)(p.a,{show:t,onHide:n,size:"lg",centered:!0,children:[Object(c.jsx)(p.a.Header,{closeButton:!0,children:Object(c.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",className:"text-dark",children:"create notes"})}),Object(c.jsx)(p.a.Body,{className:"py-4",children:Object(c.jsx)(w.a,{children:Object(c.jsx)(w.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(c.jsx)(w.a.Control,{as:"textarea",placeholder:"add your notes here",value:o,rows:15,onChange:function(e){return i(e.target.value)},maxLength:"500"})})})}),o?Object(c.jsx)(p.a.Footer,{children:Object(c.jsx)(S.a,{variant:"primary",size:"lg",block:!0,onClick:function(){var e=JSON.parse(localStorage.getItem("notes"))||[],t={text:o,key:C()().unix()},n=[].concat(Object(y.a)(e),[t]);localStorage.setItem("notes",JSON.stringify(n)),window.location.reload(!1)},children:"create"})}):null]})}var F=n(51),T=n.p+"static/media/m.cabd4d32.png";function H(e){var t=e.show,n=e.handleClose,r=(e.handleLevel,Object(a.useState)([])),s=Object(l.a)(r,2),o=s[0],i=s[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){var e=JSON.parse(localStorage.getItem("notes"))||[];i(e)};return Object(c.jsxs)(p.a,{show:t,onHide:n,size:"lg",children:[Object(c.jsx)(p.a.Header,{closeButton:!0,children:Object(c.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",className:"text-dark",children:"my notes"})}),Object(c.jsx)(p.a.Body,{className:"p-4 w-100 d-flex justify-content-center align-items-center flex-wrap",children:0!==o.length?o.map((function(e){return Object(c.jsxs)("div",{className:"card p-4 m-2 w-100 bg-info",children:[Object(c.jsx)("p",{className:"font-weight-bold text-white",children:e.text}),Object(c.jsxs)("div",{className:"abs",children:[" ",Object(c.jsx)(F.a,{size:14,color:"#fff",onClick:function(){return function(e){var t=(JSON.parse(localStorage.getItem("notes"))||[]).filter((function(t){return t.key!==e}));localStorage.setItem("notes",JSON.stringify(t)),i(t)}(e.key)}})]})]})})):Object(c.jsx)("img",{src:T,alt:"no",className:"w-50"})})]})}var D=function(){var e=Object(a.useState)("dark"),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),o=Object(l.a)(s,2),j=o[0],d=o[1],x=Object(a.useState)(!1),g=Object(l.a)(x,2),h=g[0],O=g[1],m=Object(a.useState)(!1),k=Object(l.a)(m,2),y=k[0],N=k[1];return Object(c.jsx)(i.a,{theme:"dark"===n?f:u,children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(v,{onClick:function(){r("light"===n?"dark":"light")},theme:n,onclickPlus:function(){d(!0)},saveNotes:function(){O(!0)},showNotes:function(){N(!0)},onDelete:function(){return localStorage.clear(),void window.location.reload(!1)}}),y?Object(c.jsx)(H,{show:y,handleClose:function(){return N(!y)}}):null,j?Object(c.jsx)(z,{show:j,handleClose:function(){return d(!j)}}):null,h?Object(c.jsx)(B,{show:h,handleClose:function(){return O(!h)}}):null,Object(c.jsx)(L,{})]})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),M()}},[[43,1,2]]]);
//# sourceMappingURL=main.7f717adb.chunk.js.map