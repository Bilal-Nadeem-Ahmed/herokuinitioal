(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),r=n(15),a=n.n(r),i=(n(20),n(3)),u=(n(21),n(6)),s=n(0),l=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(s.jsxs)("li",{className:"note",children:[e.content,Object(s.jsx)("button",{onClick:n,children:c})]})},j=n(4),f=n.n(j),d="/api/notes",b={getAll:function(){return f.a.get(d).then((function(t){return t.data}))},create:function(t){return f.a.post(d,t).then((function(t){return t.data}))},update:function(t,e){return f.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))}},p=function(t){var e=t.message;return null===e?null:Object(s.jsx)("div",{className:"error",children:e})},O=function(t){var e=t.notes,n=t.setNotes,o=Object(c.useState)("a new note..."),r=Object(i.a)(o,2),a=r[0],j=r[1],f=Object(c.useState)(!1),d=Object(i.a)(f,2),O=d[0],h=d[1],m=Object(c.useState)(null),g=Object(i.a)(m,2),v=g[0],x=g[1],S=O?e:e.filter((function(t){return t.important}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Notes"}),Object(s.jsx)(p,{message:v}),Object(s.jsx)("div",{children:Object(s.jsxs)("button",{onClick:function(){return h(!O)},children:["show ",O?"important":"all"]})}),Object(s.jsx)("ul",{children:S.map((function(t){return Object(s.jsx)(l,{note:t,toggleImportance:function(){return function(t){var c=e.find((function(e){return e.id===t})),o=Object(u.a)(Object(u.a)({},c),{},{important:!c.important});b.update(t,o).then((function(c){n(e.map((function(e){return e.id!==t?e:c})))})).catch((function(o){x("the note '".concat(c.content,"' was already deleted from server")),setTimeout((function(){x(null)}),5e3),n(e.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={content:a,date:(new Date).toISOString(),important:Math.random()<.5};b.create(c).then((function(t){n(e.concat(t)),j("")}))},children:[Object(s.jsx)("input",{value:a,onChange:function(t){console.log(t.target.value),j(t.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"save"})]})]})};var h=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1];return console.log(b),Object(c.useEffect)((function(){console.log("effect"),b.getAll().then((function(t){console.log("promise is fulfilled"),o(t)}))}),[]),console.log("render",n.length,"notes"),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(O,{notes:n,setNotes:o})})};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7cedf78c.chunk.js.map