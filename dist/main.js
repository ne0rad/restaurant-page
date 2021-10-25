(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]),i.push([e.id,':root {\n  --background: rgb(46, 46, 46);\n  --foreground: tomato;\n  --text: white;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Ubuntu", sans-serif;\n  background-color: var(--background);\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  min-width: 310px;\n}\n\n#tomato-logo {\n  width: 60px;\n  height: auto;\n  margin-right: 5px;\n}\n\n.page-image {\n  width: 300px;\n  height: auto;\n}\n\n.nav-bar {\n  display: flex;\n  position: fixed;\n  top: 0;\n  border-radius: 0 0 10px 10px;\n  width: 96%;\n  height: 60px;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--foreground);\n  padding: 0 10px 0 10px;\n  box-shadow: 0 0 3px 1px black;\n  user-select: none;\n  min-width: 310px;\n  opacity: 0.9;\n}\n\n.nav-items-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding-bottom: 0;\n}\n\n.logo-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text);\n  font-size: 24px;\n  padding: 0 5px 0 5px;\n  margin: 0px 10px 0 10px;\n  text-shadow: 0 0 5px black;\n  transition: text-shadow 0.3s;\n}\n\n.nav-item:hover {\n  text-shadow: 0 0 5px white;\n}\n\n.active-tab {\n  padding: 5px;\n  box-shadow: 0 0 2px 1px var(--background);\n  border-radius: 10px;\n  background-color: var(--background);\n  color: var(--foreground);\n  text-shadow: 0 0 5px black;\n}\n\n.active-tab:hover {\n  text-shadow: 0 0 5px black;\n}\n\n.footer {\n  position:fixed;\n  bottom: 0;\n  width: 100%;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--foreground);\n  min-width: 310px;\n  user-select: none;\n  opacity: 0.9;\n}\n\n.footer-items {\n  color: var(--text);\n  font-size: 14px;\n}\n\n.big-text {\n  font-size: 28px;\n  color: var(--text);\n  font-weight: bold;\n  text-shadow: 0 0 5px black;\n}\n\n.text-title {\n  font-size: 24px;\n  color: var(--text);\n  font-weight: bold;\n}\n\n.text-menu {\n  width: 300px;\n  text-align: right;\n  margin-top: 5px;\n  font-size: 16px;\n  color: var(--text);\n}\n\n.text-paragraph {\n  font-size: 16px;\n  color: var(--text);\n  margin-top: 10px;\n  margin-bottom: 25px;\n}\n\n.text-link {\n  color: var(--text);\n}\n\n.text-price {\n  display: inline;\n  color: var(--text);\n  font-size: 14px;\n}\n\n.page-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 75px;\n  margin-bottom: 35px;\n  padding: 0 20% 0 20%;\n  color: var(--text);\n  font-size: 50px;\n  background-color: var(--background);\n}\n\n.home-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.menu-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.contacts-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n@media only screen and (max-width: 490px) {\n  .logo-box {\n    display: none;\n  }\n  .nav-bar {\n    justify-content: center;\n  }\n  .page-content {\n    padding: 0 10% 0 10%;\n  }\n}\n',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},740:(e,n,t)=>{e.exports=t.p+"877cecfc02e9d008f81e.png"},237:(e,n,t)=>{e.exports=t.p+"d9bffc8f1c4426d411ba.png"},45:(e,n,t)=>{e.exports=t.p+"86b687a582e53f15904e.png"},734:(e,n,t)=>{e.exports=t.p+"1b555d236c05004afd64.png"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(890),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=t(45),x=t(740),h=t(237),v=t(734);function b(e){let n=document.getElementsByClassName("nav-item"),t=document.getElementById("pageContent").childNodes;for(let e=0;e<n.length;e++)n[e].classList.remove("active-tab");for(let e=0;e<t.length;e++)t[e].remove();"navHome"===e?function(){let e=document.getElementById("pageContent");const n="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis magna in nunc pellentesque, eget commodo massa vehicula. Morbi feugiat dignissim ornare. Praesent id nunc ornare, varius elit sodales, tincidunt nibh. Suspendisse id mauris nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer pharetra laoreet nisi ac ultricies. Morbi malesuada diam sed justo pharetra consequat. Maecenas accumsan, ipsum at pulvinar malesuada, quam justo congue mi, sit amet sollicitudin enim dui at nibh. Vivamus a magna metus. Curabitur posuere auctor arcu eget maximus. Ut fermentum metus eu sem hendrerit lacinia. Integer tempus erat ut laoreet.";function t(e,n){let t=document.createElement("div");t.classList.add("text-title"),t.textContent=e,a.appendChild(t);let o=document.createElement("div");o.classList.add("text-paragraph"),o.textContent=n,a.appendChild(o)}let a=document.createElement("div");a.classList.add("home-page"),e.appendChild(a),t("Welcome to our restaurant!",n);let o=new Image;o.src=x,o.classList.add("page-image"),a.appendChild(o),t("Our tomatoes are the best!",n),t("Brief history of Tomato Bar",n)}():"navMenu"===e?function(){function e(e,n){let a=document.createElement("div");a.classList.add("text-menu"),a.textContent=`${e}   ...........   £${n}`,t.appendChild(a)}let n=document.getElementById("pageContent"),t=document.createElement("div");t.classList.add("menu-page"),n.appendChild(t);let a=new Image;a.src=h,a.classList.add("page-image"),t.appendChild(a),e("Tomato Caprese Salad Pasta","4.99"),e("Raw tomato","0.99"),e("Tomato Soup","2.99"),e("Tomato Salad","3.99"),e("Tomato Juice","1.99")}():"navContacts"===e&&function(){function e(e,n){let a=document.createElement("div");a.classList.add("text-menu"),a.textContent=`${e}:   ${n}`,t.appendChild(a)}let n=document.getElementById("pageContent"),t=document.createElement("div");t.classList.add("contacts-page"),n.appendChild(t);let a=new Image;a.src=v,a.classList.add("page-image"),t.appendChild(a),e("Email","tomatobar@fruits.com"),e("Phone","+44 4444 1234")}(),document.getElementById(e).classList.add("active-tab")}const y=["Home","Menu","Contacts"];!function(){let e=document.createElement("div");e.id="content",document.getElementsByTagName("body")[0].appendChild(e);let n=document.createElement("div");n.classList.add("nav-bar"),e.appendChild(n);let t=document.createElement("div");t.classList.add("logo-box"),n.appendChild(t);const a=new Image;a.src=g,a.id="tomato-logo",t.appendChild(a);let o=document.createElement("span");o.classList.add("big-text"),o.textContent="Tomato Bar",t.appendChild(o);let r=document.createElement("div");r.classList.add("nav-items-box"),n.appendChild(r),y.forEach((e=>{let n=document.createElement("div");n.textContent=e,n.classList.add("nav-item"),n.id="nav"+e,n.addEventListener("click",(()=>b("nav"+e))),r.appendChild(n)}));let i=document.createElement("div");i.classList.add("footer"),e.appendChild(i);let s=document.createElement("div");s.classList.add("footer-items"),s.textContent="Made by ",i.appendChild(s);let c=document.createElement("a");c.href="https://github.com/ne0rad/restaurant-page",c.textContent="ne0rad",c.target="_blank",c.classList.add("text-link"),s.appendChild(c);let d=document.createElement("div");d.classList.add("page-content"),d.id="pageContent",e.appendChild(d),b("navHome")}()})()})();