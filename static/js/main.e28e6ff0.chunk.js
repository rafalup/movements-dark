(this["webpackJsonpmovements-dark"]=this["webpackJsonpmovements-dark"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),l=n(19),o=n.n(l),i=(n(26),n(9)),s=n(10),u=n(12),j=n(11),d=n(7),b=n(2),O=n(1),f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Home"})})}}]),n}(c.Component),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("main",{className:"container",children:Object(O.jsx)(b.c,{children:Object(O.jsx)(b.a,{exact:!0,path:"/",component:f})})})}}]),n}(c.Component),h=n(21),m=["title","titleId"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function g(e,t){var n=e.title,a=e.titleId,l=x(e,m);return c.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",ref:t,"aria-labelledby":a},l),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))}var y,k=c.forwardRef(g),w=(n.p,["title","titleId"]);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function L(e,t){var n=e.title,r=e.titleId,a=C(e,w);return c.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,y||(y=c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})))}var E=c.forwardRef(L),I=(n.p,n(33),n(34),function(){var e,t="clicked",n=document.body,r="light",c="dark";localStorage&&(e=localStorage.getItem("theme")),e===r||e===c?n.classList.add(e):n.classList.add(r);return Object(O.jsx)("button",{className:"dark"===e?t:"",id:"darkMode",onClick:function(a){return function(a){e===c?(n.classList.replace(c,r),a.target.classList.remove(t),localStorage.setItem("theme","light"),e=r):(n.classList.replace(r,c),a.target.classList.add(t),localStorage.setItem("theme","dark"),e=c)}(a)}})}),S=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],a=function(){return r(!1)};return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("div",{className:"logo-nav",children:[Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)(I,{})}),Object(O.jsxs)("ul",{className:n?"nav-options active":"nav-options",children:[Object(O.jsx)("li",{className:"option",onClick:a,children:Object(O.jsx)(d.b,{to:"/",children:"HOME"})}),Object(O.jsx)("li",{className:"option",onClick:a,children:Object(O.jsx)(d.b,{to:"/About",children:"ABOUT"})}),Object(O.jsx)("li",{className:"option",onClick:a,children:Object(O.jsx)(d.b,{to:"/Contact",children:"CONTACTO"})})]})]}),Object(O.jsx)("div",{className:"mobile-menu",onClick:function(){return r(!n)},children:n?Object(O.jsx)(k,{className:"menu-icon"}):Object(O.jsx)(E,{className:"menu-icon"})})]})},M=(n(35),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(S,{}),Object(O.jsx)(p,{})]})})}}]),n}(c.Component));o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(M,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e28e6ff0.chunk.js.map