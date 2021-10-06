(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]),i.push([n.id,':root {\n  --background: rgb(46, 46, 46);\n  --foreground: tomato;\n  --text: white;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Ubuntu", sans-serif;\n  background-color: var(--background);\n}\n\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#tomato-logo {\n  width: 60px;\n  height: auto;\n  margin-right: 5px;\n}\n\n.nav-bar {\n  display: flex;\n  position: fixed;\n  top: 0;\n  border-radius: 0 0 10px 10px;\n  width: 96%;\n  height: 80px;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--foreground);\n  padding: 0 10px 0 10px;\n  box-shadow: 0 0 3px 1px black;\n  user-select: none;\n}\n\n.nav-items-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding-bottom: 0;\n}\n\n.logo-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text);\n  font-size: 24px;\n  padding: 0 5px 0 5px;\n  margin: 0px 10px 0 10px;\n  text-shadow: 0 0 5px black;\n  transition: text-shadow 0.3s;\n}\n\n.nav-item:hover {\n  text-shadow: 0 0 5px white;\n}\n\n.active-tab {\n  padding: 5px;\n  box-shadow: 0 0 2px 1px var(--background);\n  border-radius: 10px;\n  background-color: var(--background);\n  color: var(--foreground);\n  text-shadow: 0 0 5px black;\n}\n\n.active-tab:hover {\n  text-shadow: 0 0 5px black;\n}\n\n.big-text {\n  font-size: 28px;\n  color: var(--text);\n  font-weight: bold;\n  text-shadow: 0 0 5px black;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},45:(n,e,t)=>{n.exports=t.p+"86b687a582e53f15904e.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(890),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=t(45);const h=["Home","Menu","Contacts"];let g="navHome";function x(n){document.getElementById(g).classList.remove("active-tab"),document.getElementById(n).classList.add("active-tab"),g=n}!function(){let n=document.createElement("div");n.id="content",document.getElementsByTagName("body")[0].appendChild(n);let e=document.createElement("div");e.classList.add("nav-bar");let t=document.createElement("div");t.classList.add("logo-box"),e.appendChild(t);const r=new Image;r.src=v,r.id="tomato-logo",t.appendChild(r);let o=document.createElement("span");o.classList.add("big-text"),o.textContent="Tomato Bar",t.appendChild(o);let a=document.createElement("div");a.classList.add("nav-items-box"),e.appendChild(a),h.forEach((n=>{let e=document.createElement("div");e.textContent=n,e.classList.add("nav-item"),e.id="nav"+n,e.addEventListener("click",(()=>x("nav"+n))),a.appendChild(e)})),setTimeout((()=>{x(g)}),1),n.appendChild(e)}()})()})();