(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(0),a=n.n(r),o=n(104),i=n(112),c=n(113),l=n(93),u=n(91),m=n(94),s=n.n(m),f=n(103),d=n.n(f),v=n(114);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){var e=y(Object(r.useState)(0),2),t=e[0],n=e[1];function o(){n((function(e){return e<99?e+1:e+(100-e)/2}))}return Object(r.useEffect)((function(){var e=setInterval(o,80);return function(){return clearInterval(e)}}),[]),a.a.createElement(v.a,{size:20,variant:"determinate",value:t})}function x(e){var t=e.text;return a.a.createElement(o.a,{p:3,px:8},a.a.createElement(o.a,{align:"right"},a.a.createElement(b,null)),a.a.createElement(l.a,{style:{maxWidth:"711px"},align:"center",dangerouslySetInnerHTML:{__html:d()(t)}}))}var g=Object(u.a)((function(e){return{root:(t={minHeight:"300px"},n=e.breakpoints.up("md"),r={height:"180px"},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)};var t,n,r}));function E(e){var t=e.scene,n=e.goToNextScene,r=e.goToPreviousScene,u=e.dialogIndex,m=e.handleNextDialog,f=e.handlePreviousDialog,d=g();return a.a.createElement(o.a,{align:"center",class:"blackness fixed-bottom"},a.a.createElement(i.a,{className:d.root,container:!0,spacing:3,alignItems:"center",justify:"center"},a.a.createElement(i.a,{item:!0,xs:12,md:2},a.a.createElement(c.a,{color:"secondary",onClick:r},"Previous"),a.a.createElement("br",null),a.a.createElement(l.a,{variant:"caption",color:"textSecondary"},t.prevSceneTitle)),a.a.createElement(i.a,{item:!0,xs:12,md:8},a.a.createElement(s.a,{interval:8e3,timeout:150,indicators:!1,navButtonsAlwaysVisible:!0,autoPlay:!0,next:m,prev:f,index:u},t.textContent.map((function(e){return a.a.createElement(x,{text:e.text,key:e.id})})))),a.a.createElement(i.a,{item:!0,xs:12,md:2},a.a.createElement(c.a,{color:"secondary",variant:"contained",onClick:n},"Next"),a.a.createElement("br",null),a.a.createElement(l.a,{variant:"caption",color:"textSecondary"},t.nextSceneTitle))))}}}]);