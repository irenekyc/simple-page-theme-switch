(this["webpackJsonplanding-page-switch-theme"]=this["webpackJsonplanding-page-switch-theme"]||[]).push([[0],{12:function(n,t,e){n.exports=e(19)},19:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(8),o=e.n(i),c=e(2),l=e(5),u=e(1);function s(){var n=Object(c.a)(["\nbody{\n  width: 100vw;\n  font-size: 14px;\n  line-height: 1.2;\n  font-family: sans-serif;\n  font-weight:300;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}"]);return s=function(){return n},n}var h=Object(u.b)(s());function d(){var n=Object(c.a)(['\n    position: absolute;\n    content: " ";\n    height: 35px;\n    width: 35px;\n    background: ',";\n    border-radius: 50%;\n    z-index: 1;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n    transition: all 0.5s;\n    transform: translate(\n      ","\n    );\n  "]);return d=function(){return n},n}function b(){var n=Object(c.a)(["\n    display: block;\n    width: 80px;\n    height: 40px;\n    border-radius: 20px;\n    background: ",";\n    position: relative;\n    cursor: pointer;\n  "]);return b=function(){return n},n}var g=function(n){var t=n.color,e=n.theme,r=n.onClickHandler,i=u.c.div(b(),t.btnBg),o=u.c.div(d(),t.btn,(function(n){return"light"===n.theme?"5px, 2.5px":"40px, 2.5px"}));return a.a.createElement(i,{onClick:r},a.a.createElement(o,{theme:e}))},p={light:{bg:"#F4F4F4",mainText:"#272727",secondaryText:"#D7D7D7",btnBg:"#EAEAEA",btn:"#fff"},dark:{bg:"#151F25",mainText:"#C0C8CE",secondaryText:"#555C64",btnBg:"#182C37",btn:"#2364AF"}};function f(){var n=Object(c.a)(["\n    position: absolute;\n    right: 5%;\n    top: 5%;\n  "]);return f=function(){return n},n}function m(){var n=Object(c.a)(["\n    font-size: 3rem;\n    text-shadow: 3px 3px 3px gray;\n  "]);return m=function(){return n},n}function x(){var n=Object(c.a)(["\n    width: 100vw;\n    height: 100vh;\n    background: ",";\n    color: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  "]);return x=function(){return n},n}var v=function(){var n=Object(r.useState)("light"),t=Object(l.a)(n,2),e=t[0],i=t[1],o=Object(r.useState)(p.light),c=Object(l.a)(o,2),s=c[0],d=c[1],b=u.c.div(x(),s.bg,s.mainText),v=u.c.h1(m()),w=u.c.div(f());return a.a.createElement(u.a,{theme:p},a.a.createElement(h,null),a.a.createElement(b,null,a.a.createElement(v,null," Hello World! "),a.a.createElement(w,null,a.a.createElement(g,{theme:e,color:s,onClickHandler:function(){"light"===e?(i("dark"),d(p.dark)):"dark"===e&&(i("light"),d(p.light))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.9590cce2.chunk.js.map