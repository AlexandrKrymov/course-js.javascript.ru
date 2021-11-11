!function(e){function t(t){for(var n,i,o=t[0],s=t[1],a=0,u=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);u.length;)u.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var d=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/course-js.javascript.ru/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var d=s;i(i.s=3)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("pointerup",e=>{const t=e.target.closest("a");if(!t)return;const n=new URL(t.getAttribute("href"),"/course-js.javascript.ru/").pathname;console.log(n)})}static instance(){return this._instance||(this._instance=new r),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const r=document.querySelector("main");r.classList.add("is-loading");const{default:i}=await n(1)(`./${e}/index.js`),o=new i,s=await o.render();r.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(s),o}(e)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}},function(e,t,n){var r={"./categories/index.js":[8,1],"./dashboard/index.js":[5,2],"./error404/index.js":[4,3],"./products/edit/index.js":[6,4],"./products/list/index.js":[7,5],"./sales/index.js":[9,6]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=1,e.exports=i},,function(e,t,n){"use strict";n.r(t);var r=n(0);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o{constructor(){if(i(this,"onPointerOver",e=>{const t=e.target.closest("[data-tooltip]");if(!t)return;const n=t.dataset.tooltip;this.render(n),t.addEventListener("pointermove",this.onPointerMove)}),i(this,"onPointerOut",e=>{const t=e.target.closest("[data-tooltip]");t&&(this.remove(),t.removeEventListener("pointermove",this.onPointerMove))}),i(this,"onPointerMove",e=>{this.element.style.top=e.y+10+"px",this.element.style.left=e.x+10+"px"}),o.instance)return o.instance;o.instance=this}getTemplate(e){return`<div class="tooltip">${e}</div>`}toHTML(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}initialize(){this.addEventListeners()}render(e=""){this.element=this.toHTML(this.getTemplate(e)),document.body.append(this.element)}addEventListeners(){document.addEventListener("pointerover",this.onPointerOver),document.addEventListener("pointerout",this.onPointerOut)}removeEventListeners(){document.removeEventListener("pointerover",this.onPointerOver),document.removeEventListener("pointerout",this.onPointerOut)}remove(){this.element&&this.element.remove(),this.element=null}destroy(){this.remove(),this.removeEventListeners()}}i(o,"instance",void 0);var s=o;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(new s).initialize();const d=r.a.instance(),u=new class{constructor(){a(this,"menu",[{title:"Dashboard",icon:"icon-dashboard",href:"/",id:"dashboard"},{title:"Products",icon:"icon-products",href:"/products",id:"categories"},{title:"Categories",icon:"icon-categories",href:"/categories",id:"categories"},{title:"Sales",icon:"icon-sales",href:"/sales",id:"sales"}]),a(this,"onToggleSidebar",()=>{document.body.classList.toggle("is-collapsed-sidebar")}),this.render()}render(){const e=this.menu.map(e=>this.getTemplateMenuItem(e));this.element=this.toHTML(this.getTemplate(e.join(""))),this.subElements=this.getSubElements(this.element),this.addEventListeners()}getTemplate(e){return`\n        <aside class="sidebar">\n            <h2 class="sidebar__title">\n                <a href="/">shop admin</a>\n            </h2>\n            <ul class="sidebar__nav" data-element="menu">\n                ${e}\n            </ul>\n            <ul class="sidebar__nav sidebar__nav_bottom">\n                <li>\n                    <button type="button" data-element="toggleBtn" class="sidebar__toggler">\n                    <i class="icon-toggle-sidebar"></i> <span>Toggle sidebar</span>\n                    </button>\n                </li>\n            </ul>\n        </aside>\n        `}getTemplateMenuItem(e){return`\n        <li><a href="${e.href}" data-page="${e.id}"><i class="${e.icon}"></i> <span>${e.title}</span></a></li>\n      `}addEventListeners(){this.subElements.toggleBtn.addEventListener("pointerup",this.onToggleSidebar)}removeEventListeners(){this.subElements.toggleBtn.removeEventListener("pointerup",this.onToggleSidebar)}getSubElements(e){const t={};return[...e.querySelectorAll("[data-element]")].forEach(e=>{t[e.dataset.element]=e}),t}remove(){this.element&&this.element.remove(),this.element=null}destroy(){this.remove(),this.removeEventListeners()}toHTML(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}};document.querySelector("[data-sidebar]").replaceWith(u.element),d.addRoute(/^$/,"dashboard").addRoute(/^products$/,"products/list").addRoute(/^products\/add$/,"products/edit").addRoute(/^products\/([\w()-]+)$/,"products/edit").addRoute(/^sales$/,"sales").addRoute(/^categories$/,"categories").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("error404").listen()}]);
//# sourceMappingURL=app.bundle.js.map