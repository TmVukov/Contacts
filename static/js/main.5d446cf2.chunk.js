(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(37),r=n.n(s),i=(n(44),n(45),n(46),n(5)),o=n(17),j=n(1);function l(){return Object(j.jsxs)("section",{className:"home__container",children:[Object(j.jsxs)("header",{className:"home__header",children:[Object(j.jsx)(o.a,{className:"home__logo"}),Object(j.jsxs)("div",{className:"home__links",children:[Object(j.jsx)(i.b,{to:"/signup",children:Object(j.jsx)("button",{children:"register"})}),Object(j.jsx)(i.b,{to:"/login",children:"log in"})]})]}),Object(j.jsxs)("div",{className:"home__titles",children:[Object(j.jsx)("h1",{children:"Save your contacts"}),Object(j.jsx)("h2",{children:"Fast and easy"})]})]})}var u=n(4),b=(n(52),n(25));n(53);b.a.initializeApp({apiKey:"AIzaSyC30CcXGzXdhPMhQr4IYVbNIXn845_5ni0",authDomain:"contacts-d9f0b.firebaseapp.com",projectId:"contacts-d9f0b",storageBucket:"contacts-d9f0b.appspot.com",messagingSenderId:"100063188752",appId:"1:100063188752:web:192444baab87cd95aa3795"});var d=b.a.auth(),h=n(7),O=n(18),m=n.n(O);n(73);function x(e){var t=e.children;return Object(j.jsx)("div",{className:"header",children:t})}n(74);function f(){var e=(new Date).getFullYear();return Object(j.jsxs)("div",{className:"footer",children:["\xa9MyContacts ",e,"."]})}function p(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),l=r[0],b=r[1],O=Object(c.useState)(!1),p=Object(u.a)(O,2),g=p[0],v=p[1],_=Object(c.useState)(""),N=Object(u.a)(_,2),S=N[0],C=N[1],y=Object(h.g)();return Object(j.jsxs)("div",{className:"login__container",children:[Object(j.jsxs)(x,{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)(o.a,{className:"home__logo"})}),Object(j.jsx)(i.b,{to:"/signup",children:"sign up"})]}),Object(j.jsx)("main",{children:g?Object(j.jsx)(m.a,{className:"loader",type:"Oval",color:"#C7E2F7",height:80,width:80}):Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0),d.signInWithEmailAndPassword(n,l).then((function(e){e&&y.push("/")})).catch((function(){C("Failed to log in!"),v(!1),setTimeout((function(){C("")}),2e3)})),sessionStorage.setItem("user",JSON.stringify(n))},className:"login__form",children:[S&&Object(j.jsxs)("p",{children:[S," Please try again."]}),Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"email",placeholder:"Enter email",required:!0}),Object(j.jsx)("input",{onChange:function(e){return b(e.target.value)},type:"password",placeholder:"Enter password",required:!0}),Object(j.jsx)("button",{children:"Submit"})]})}),Object(j.jsx)(f,{})]})}n(75);var g=Object(c.createContext)();function v(e){var t=e.children,n=Object(c.useState)([]),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],b=o[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),m=O[0],x=O[1],f=Object(c.useState)(),p=Object(u.a)(f,2),v=p[0],_=p[1],N=Object(c.useState)(),S=Object(u.a)(N,2),C=S[0],y=S[1],E=Object(c.useState)(""),P=Object(u.a)(E,2),k=P[0],w=P[1],I=Object(c.useState)(""),M=Object(u.a)(I,2),U=M[0],z=M[1],D=Object(c.useState)(1),q=Object(u.a)(D,2),J=q[0],A=q[1],L=Object(c.useState)("10"),$=Object(u.a)(L,2),V=$[0],F=$[1],T=Object(c.useState)(null),B=Object(u.a)(T,2),W=B[0],X=B[1],Y=Object(c.useState)(!0),R=Object(u.a)(Y,2),G=R[0],K=R[1];Object(c.useEffect)((function(){return d.onAuthStateChanged((function(e){X(e),K(!1)}))}),[]);var Q={contacts:s,setContacts:r,name:l,setName:b,surname:m,setSurname:x,mobile:v,setMobile:_,phone:C,setPhone:y,email:k,setEmail:w,username:U,setUsername:z,currentPage:J,setCurrentPage:A,contactsPerPage:V,setContactsPerPage:F,currentUser:W,setCurrentUser:X};return Object(j.jsx)(g.Provider,{value:Q,children:!G&&t})}var _=n(19),N=n.n(_),S=N.a.create({baseURL:"https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/"});function C(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),l=r[0],b=r[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),v=p[0],_=p[1],N=Object(c.useState)(!1),C=Object(u.a)(N,2),y=C[0],E=C[1],P=Object(h.g)(),k=Object(c.useContext)(g),w=k.username,I=k.setUsername;return Object(j.jsxs)("div",{className:"signup__container",children:[Object(j.jsxs)(x,{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)(o.a,{className:"home__logo"})}),Object(j.jsx)(i.b,{to:"/login",children:"log in"})]}),Object(j.jsx)("main",{children:y?Object(j.jsx)(m.a,{className:"loader",type:"Oval",color:"#C7E2F7",height:80,width:80}):Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=/^(?=.*[0-9])(?=.*[a-z])(?=.*[$#!+-]).{6,}$/;E(!0),d.createUserWithEmailAndPassword(n,l).then((function(e){e&&!y&&P.push("/")})).catch((function(e){l.match(t)||_("Password should contain: at least 6 characters, 1 number and 1 special character: +, -, !, #, $."),_(e.message),E(!1),setTimeout((function(){_("")}),2e3)})),sessionStorage.setItem("user",JSON.stringify(n));var c={email:n,username:w};S.post("users.json/",c).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},className:"signup__form",children:[v&&Object(j.jsx)("p",{children:v}),Object(j.jsx)("input",{onChange:function(e){return I(e.target.value)},type:"text",placeholder:"Enter username"}),Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"email",placeholder:"Enter email",required:!0}),Object(j.jsx)("input",{onChange:function(e){return b(e.target.value)},type:"password",placeholder:"Enter password",required:!0}),Object(j.jsx)("button",{children:"Submit"})]})}),Object(j.jsx)(f,{})]})}n(94);var y=n(14),E=function(e){var t=e.data,n=[];for(var c in t)n.push(Object(y.a)(Object(y.a)({},t[c]),{},{id:c}));return n},P=function(e){sessionStorage.setItem("id",JSON.stringify(e))};n(95),n(96);function k(){var e=Object(c.useContext)(g),t=e.setMobile,n=e.setPhone,a=e.setEmail;return Object(j.jsxs)("div",{className:"subform__contacts",children:[Object(j.jsxs)("div",{className:"subform__mobile",children:[Object(j.jsx)("label",{children:"Mobile format: 09x xxx(x) xxx"}),Object(j.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"tel",placeholder:"Enter mobile",maxLength:"12",required:!0})]}),Object(j.jsxs)("div",{className:"subform__phone",children:[Object(j.jsx)("label",{children:"Phone format: 0x(x) xxx(x) xxx"}),Object(j.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"tel",placeholder:"Enter phone",maxLength:"12",required:!0})]}),Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},className:"subform__email",type:"email",placeholder:"Enter email",required:!0})]})}function w(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(!1),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useRef)(),m=Object(c.useContext)(g),x=m.name,f=m.setName,p=m.surname,v=m.setSurname,_=m.mobile,N=m.phone,C=m.email,y=m.favorite,E=_&&_.match(/^[0][9][1-9]\s\d{3,4}\s\d{3}$/),P=N&&N.match(/^[0][1]\s\d{3,4}\s\d{3}|[0][2-5][0-9]\s\d{3,4}\s\d{3}$/),w=function(e){return e.split("-").reverse().join("/")};return Object(j.jsx)("div",{className:"form__container",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:x,surname:p,email:C,mobile:_,phone:N,birthDate:w(n),favorite:y};S.post("contacts.json/",t).then((function(e){console.log(e),h(!0),setTimeout((function(){h(!1)}),1500)})).catch((function(e){return console.log(e)})),O.current.reset()},ref:O,className:"form__info",children:[d?Object(j.jsx)("div",{className:"form__message success",children:"Contact is saved!"}):"",_&&!E?Object(j.jsx)("div",{className:"form__message error",children:"Mobile format is invalid!"}):"",N&&!P?Object(j.jsx)("div",{className:"form__message error",children:"Phone format is invalid!"}):"",Object(j.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"text",placeholder:"Enter name",maxLength:"100",required:!0}),Object(j.jsx)("input",{onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Enter surname",maxLength:"300",required:!0}),Object(j.jsxs)("div",{className:"form__date",children:[Object(j.jsx)("label",{children:"Select birthdate"}),Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"date"})]}),Object(j.jsx)("button",{onClick:function(){return o(!i)},className:"form__button-enter",children:"Enter contacts"}),i&&Object(j.jsx)(k,{}),Object(j.jsx)("button",{disabled:!E||!P,children:"Add your contact"})]})})}n(97);function I(e){var t=e.children;return Object(j.jsx)("div",{className:"main",children:t})}function M(){var e=Object(c.useContext)(g),t=e.username,n=e.setUsername,a=JSON.parse(sessionStorage.getItem("user")),s=Object(h.g)();return Object(c.useEffect)((function(){return N.a.get("https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/users.json").then((function(e){var t=E(e).filter((function(e){return e.email===a}));n(t[0].username)})).catch((function(e){return console.log(e)}))}),[n,a]),Object(j.jsxs)("section",{className:"dashboard__container",children:[Object(j.jsxs)(x,{children:[Object(j.jsxs)("p",{children:["Welcome ",t,"!"]}),Object(j.jsx)(i.b,{to:"/contacts",className:"dashboard__link-contacts",children:"contacts"}),Object(j.jsx)("button",{onClick:function(){return d.signOut().then((function(){return s.push("/home")}))},className:"dashboard__btn-logout",children:"log out"})]}),Object(j.jsx)(I,{children:Object(j.jsx)(w,{})}),Object(j.jsx)(f,{})]})}n(98);var U=n(27),z=(n(99),n(26));function D(){for(var e=Object(c.useContext)(g),t=e.contacts,n=e.currentPage,a=e.setCurrentPage,s=e.contactsPerPage,r=e.setContactsPerPage,o=[],l=Math.ceil(t.length/s),u=1;u<=l;u++)o.push(u);return Object(j.jsxs)("div",{className:"pagination__container",children:[Object(j.jsxs)("div",{className:"pagination",children:[Object(j.jsx)(z.b,{onClick:function(){a(n-1),n<=1&&a(1)},className:"pagination__control"}),o.map((function(e,t){return Object(j.jsx)("li",{className:"pagination__num",children:Object(j.jsx)(i.b,{to:"/contacts",onClick:function(){return function(e){return a(e)}(e)},children:e})},t)})),Object(j.jsx)(z.a,{onClick:function(){a(n+1),n>=l&&a(l)},className:"pagination__control"})]}),Object(j.jsxs)("div",{className:"pagination__sort",children:[Object(j.jsx)("p",{children:"sort by:"}),Object(j.jsxs)("select",{value:s,onChange:function(e){return r(e.target.value)},children:[Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"15",children:"15"})]})]})]})}function q(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),o=r[0],l=r[1],b=Object(c.useState)([]),d=Object(u.a)(b,2),h=d[0],O=d[1],p=Object(c.useState)("a-z"),v=Object(u.a)(p,2),_=v[0],N=v[1],C=Object(c.useContext)(g),k=C.contacts,w=C.setContacts,M=C.currentPage,z=C.contactsPerPage,q=M*z,J=q-z,A=k.slice(J,q);Object(c.useEffect)((function(){return a(!0),S.get("contacts.json").then((function(e){var t=E(e).sort((function(e,t){return e.surname>t.surname?1:-1}));w(t),a(!1)})).catch((function(e){l(e),a(!1)}))}),[w]);var L=function(e){var t=k.filter((function(t){return t.id===e})),n=!t[0].favorite,c=k.map((function(t){return t.id===e?Object(y.a)(Object(y.a)({},t),{},{favorite:n}):t}));w(c),P(e);var a=JSON.parse(sessionStorage.getItem("id")),s=Object(y.a)(Object(y.a)({},t[0]),{},{favorite:n});S.patch("contacts/".concat(a,".json"),s).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))};return Object(j.jsxs)("div",{className:"contacts__container",children:[Object(j.jsxs)(x,{children:[Object(j.jsx)(i.b,{to:"/",className:"contacts__link home",children:"home"}),Object(j.jsx)(i.b,{to:"/favorites",className:"contacts__link favorites",children:"favorites"}),Object(j.jsx)("input",{onChange:function(e){return O(e.target.value)},type:"search",placeholder:"Search..."}),Object(j.jsxs)("div",{className:"contacts__sort",children:[Object(j.jsx)("p",{children:"sort by:"}),Object(j.jsxs)("select",{value:_,onChange:function(e){return N(e.target.value)},children:[Object(j.jsx)("option",{value:"a-z",children:"a-z"}),Object(j.jsx)("option",{value:"z-a",children:"z-a"})]})]})]}),Object(j.jsxs)(I,{children:[n?Object(j.jsx)(m.a,{type:"Oval",color:"##004890",height:80,width:80}):o?Object(j.jsx)("p",{children:o}):"",Object(j.jsx)("table",{className:"contacts__table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Surname"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Star"})]}),A.filter((function(e){return h.length?Object.values(e).includes(h):e})).sort((function(e,t){return"a-z"===_?e.surname>t.surname?1:-1:e.surname<t.surname?1:-1})).map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/details/".concat(e.id),onClick:function(){return P(e.id)},children:e.name})}),Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/details/".concat(e.id),onClick:function(){return P(e.id)},children:e.surname})}),Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/details/".concat(e.id),onClick:function(){return P(e.id)},children:e.email})}),Object(j.jsx)("td",{children:e.favorite?Object(j.jsx)(U.a,{onClick:function(){return L(e.id)}}):Object(j.jsx)(U.b,{onClick:function(){return L(e.id)}})})]},t)}))]})}),Object(j.jsx)(D,{})]}),Object(j.jsx)(f,{})]})}n(100);function J(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(g),r=s.contacts,o=s.setContacts,l=JSON.parse(sessionStorage.getItem("id"));Object(c.useEffect)((function(){return S.get("contacts/".concat(l,".json")).then((function(e){console.log(e.data),o([e.data])})).catch((function(e){return a(e)}))}),[o,l]);return Object(j.jsxs)("div",{className:"details__container",children:[Object(j.jsxs)(x,{children:[Object(j.jsx)(i.b,{to:"/contacts",className:"details__link home",children:"contacts"}),Object(j.jsx)(i.b,{to:"/favorites",className:"details__link favorites",children:"favorites"}),Object(j.jsx)(i.b,{to:"/update",className:"details__link update",children:"update"})]}),Object(j.jsxs)(I,{children:[Object(j.jsx)("button",{onClick:function(){S.delete("contacts/".concat(l,".json")).then((function(e){console.log(e),o([])}))},children:"Delete Contact"}),n?Object(j.jsx)("p",{children:n}):r[0]?l&&r.map((function(e,t){return Object(j.jsx)("section",{children:Object(j.jsx)("table",{className:"details__table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsx)("tr",{children:Object(j.jsx)("th",{children:"Contact Details"})}),Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:["Name: ",e.name]})}),Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:["Surname: ",e.surname]})}),Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:["Email: ",e.email]})}),Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:["Mob: ",e.mobile]})}),Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:["Phone: ",e.phone]})}),Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:["Birthdate: ",e.birthDate]})})]})})},t)})):Object(j.jsx)("p",{children:"Your contact is deleted."})]}),Object(j.jsx)(f,{})]})}n(101);function A(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),o=r[0],l=r[1],b=JSON.parse(sessionStorage.getItem("id")),d=Object(c.useContext)(g),h=d.contacts,O=d.setContacts,m=d.name,p=d.setName,v=d.surname,_=d.setSurname,N=d.email,C=d.setEmail,y=d.mobile,E=d.setMobile,P=d.phone,k=d.setPhone,w=(null===y||void 0===y?void 0:y.match(/^[0][9][1-9]\s\d{3,4}\s\d{3}$/))||void 0===y,M=(null===P||void 0===P?void 0:P.match(/^[0][1]\s\d{3,4}\s\d{3}|[0][2-5][0-9]\s\d{3,4}\s\d{3}$/))||void 0===P;console.log(y),Object(c.useEffect)((function(){return S.get("contacts/".concat(b,".json")).then((function(e){console.log(e.data),O([e.data])})).catch((function(e){return a(e)}))}),[O,b]);var U={name:m,surname:v,email:N,mobile:y,phone:P},z=function(e){e.preventDefault(),S.patch("contacts/".concat(b,".json"),function(e){var t={};for(var n in e)""!==e[n]&&void 0!==e[n]&&(t[n]=e[n]);return t}(U)).then((function(e){console.log(e),l(!0),setTimeout((function(){l(!1)}),1500)})).catch((function(e){return a(e)}))};return Object(j.jsxs)("div",{className:"update__container",children:[Object(j.jsx)(x,{children:Object(j.jsx)(i.b,{to:"/details/".concat(b),children:"details"})}),Object(j.jsxs)(I,{children:[o&&Object(j.jsx)("div",{className:"update__message success",children:"Contact is updated!"}),n&&Object(j.jsx)("div",{className:"update__message error",children:n}),y&&!w?Object(j.jsx)("div",{className:"update__message error",children:"Mobile format is invalid!"}):"",P&&!M?Object(j.jsx)("div",{className:"update__messageerror",children:"Phone format is invalid!"}):"",h[0]?h.map((function(e,t){return Object(j.jsxs)("form",{onSubmit:z,className:"update__form",children:[Object(j.jsx)("input",{onChange:function(e){return p(e.target.value)},defaultValue:e.name,placeholder:"Update name",type:"text"}),Object(j.jsx)("input",{onChange:function(e){return _(e.target.value)},defaultValue:e.surname,placeholder:"Update surname",type:"text"}),Object(j.jsx)("input",{onChange:function(e){return C(e.target.value)},defaultValue:e.email,placeholder:"update email",type:"email"}),Object(j.jsxs)("div",{className:"subform__mobile",children:[Object(j.jsx)("label",{children:"Mobile format: 09x xxx(x) xxx"}),Object(j.jsx)("input",{onChange:function(e){return E(e.target.value)},defaultValue:e.mobile,type:"tel",placeholder:"Enter mobile",maxLength:"12"})]}),Object(j.jsxs)("div",{className:"subform__phone",children:[Object(j.jsx)("label",{children:"Phone format: 0(xx) xxx(x) xxx"}),Object(j.jsx)("input",{onChange:function(e){return k(e.target.value)},defaultValue:e.phone,type:"tel",placeholder:"Enter phone",maxLength:"12"})]}),Object(j.jsx)("button",{disabled:!w||!M,children:"Update contact"})]},t)})):Object(j.jsx)("p",{children:"Sorry, your contact is deleted."})]}),Object(j.jsx)(f,{})]})}n(102);function L(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return N.a.get("https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/contacts.json").then((function(e){var t=E(e).filter((function(e){return!0===e.favorite}));a(t)})).catch((function(e){return console.log(e)}))}),[a]),Object(j.jsxs)("div",{className:"favorites__container",children:[Object(j.jsx)(x,{children:Object(j.jsx)(i.b,{to:"/contacts",className:"favorites__link home",children:"contacts"})}),Object(j.jsx)(I,{children:Object(j.jsx)("table",{className:"favorites__table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Surname"}),Object(j.jsx)("th",{children:"Email"})]}),n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/details/".concat(e.id),onClick:function(){return P(e.id)},children:e.name})}),Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/details/".concat(e.id),onClick:function(){return P(e.id)},children:e.surname})}),Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/details/".concat(e.id),onClick:function(){return P(e.id)},children:e.email})})]},t)}))]})})}),Object(j.jsx)(f,{})]})}var $=n(39);function V(e){var t=e.component,n=Object($.a)(e,["component"]),a=Object(c.useContext)(g).currentUser;return Object(j.jsx)(h.b,Object(y.a)(Object(y.a)({},n),{},{render:function(e){return a?Object(j.jsx)(t,Object(y.a)({},e)):Object(j.jsx)(h.a,{to:"/signup"})}}))}var F=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(h.d,{children:[Object(j.jsx)(V,{exact:!0,path:"/",component:M}),Object(j.jsx)(V,{path:"/contacts",component:q}),Object(j.jsx)(V,{path:"/details/:id",component:J}),Object(j.jsx)(V,{path:"/update",component:A}),Object(j.jsx)(V,{path:"/favorites",component:L}),Object(j.jsx)(h.b,{path:"/home",component:l}),Object(j.jsx)(h.b,{path:"/login",component:p}),Object(j.jsx)(h.b,{path:"/signup",component:C})]})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{children:Object(j.jsx)(F,{})})}),document.getElementById("root"))},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.5d446cf2.chunk.js.map