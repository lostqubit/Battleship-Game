(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>l});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Jersey+20&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]),i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Jersey+20&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]),i.push([t.id,'* {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nhtml {\n\theight: 100%;\n}\n\nbody {\n\theight: 100%;\n}\n\n#root {\n\theight: 100%;\n\tbackground-color: #00193b;\n\tdisplay: grid;\n\tgrid-template-rows: 58px 1fr 60px;\n\toverflow: auto;\n}\n\n#root > h1:first-child {\n\tcolor: white;\n\ttext-align: center;\n\tfont-family: "Jersey 20";\n\tfont-size: 3rem;\n\tpadding-top: 10px;\n}\n\n#root > div {\n\tmargin: 40px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, 420px);\n\tgrid-auto-rows: max-content;\n\tjustify-content: center;\n\tcolumn-gap: 100px;\n\trow-gap: 30px;\n\talign-items: center;\n}\n\n#root > div > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#root > div > div > h2 {\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tcolor: white;\n\tfont-family: "Poppins";\n}\n\n.grid {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(10, 40px);\n\tgrid-template-columns: repeat(10, 40px);\n\tgap: 2px;\n}\n\n.cell {\n\tborder: 2px solid rgba(255, 255, 255, 0.5);\n}\n\n#ship-div {\n\tbox-sizing: border-box;\n\tpadding-top: 50px;\n}\n\n@media (max-width: 939px) {\n\t#ship-div {\n\t\tpadding-top: 0px;\n\t}\n}\n\n#root > div > #ship-div > h2 {\n\ttext-align: center;\n\tmargin-bottom: 10px;\n\tcolor: white;\n\tfont-family: "Poppins";\n}\n\n.ships {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.ship-container {\n\tborder-style: dotted;\n\tborder-color: rgba(255, 255, 255, 0.5);\n\tpadding: 5px;\n\tborder-radius: 10px;\n}\n\n.ships > .ship-container:first-child {\n\theight: 25px;\n\twidth: 208px;\n}\n\n.ships > .ship-container:first-child,\n#carrier {\n\theight: 25px;\n\twidth: 208px;\n}\n\n.ships > .ship-container:nth-child(2),\n#battleship {\n\theight: 25px;\n\twidth: 166px;\n}\n\n.ships > .ship-container:nth-child(3),\n#destroyer {\n\theight: 25px;\n\twidth: 124px;\n}\n\n.ships > .ship-container:nth-child(4),\n#submarine {\n\theight: 25px;\n\twidth: 124px;\n}\n\n.ships > .ship-container:last-child,\n#patrolBoat {\n\theight: 25px;\n\twidth: 82px;\n}\n\n#ship-div > p {\n\tcolor: white;\n\tfont-family: "Poppins";\n\ttext-align: center;\n\tmargin-top: 15px;\n\tfont-size: 0.9rem;\n}\n\n#ship-div > p + div {\n\tmargin-top: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#ship-div > div:last-child {\n\tmargin-top: 10px;\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 20px;\n}\n\nbutton {\n\twidth: 100px;\n\theight: 25px;\n\tfont-size: 0.8rem;\n\tbackground-color: #4762b8;\n\tcolor: white;\n\tborder: none;\n\tfont-family: "Poppins";\n\tborder-radius: 7px;\n}\n\nbutton:hover {\n\topacity: 0.7;\n\tcursor: pointer;\n}\n\n.disabled-btn {\n\topacity: 0.6;\n\tcursor: not-allowed;\n}\n\n.disabled-btn:hover {\n\topacity: 0.6;\n\tcursor: not-allowed;\n}\n\n.winner {\n\tposition: fixed;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\theight: 100%;\n\tcolor: white;\n\tfont-family: "Poppins";\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nfooter {\n\tcolor: whitesmoke;\n\tfont-family: "Poppins";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 5px;\n}\n\nfooter > a {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#github {\n\theight: 1.5rem;\n}\n',""]);const l=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],l=0;l<t.length;l++){var s=t[l],c=r.base?s[0]+r.base:s[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var h=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(f);else{var u=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var l=n(a[i]);e[l].references--}for(var s=r(t,o),c=0;c<a.length;c++){var d=n(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),o=n.n(r),a=n(659),i=n.n(a),l=n(56),s=n.n(l),c=n(540),d=n.n(c),p=n(113),h=n.n(p),f=n(208),u={};u.styleTagTransform=h(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=d(),e()(f.A,u),f.A&&f.A.locals&&f.A.locals;const g=n.p+"1e0bfc7d2d14646e9ee3.png",m=n.p+"d20e8a0ecfd58a30e8e1.png",b=n.p+"eb21b2ce1883e44bc973.png",y=n.p+"bce2fa8f1174d35c0f8d.png",v=n.p+"c8a373577563d610ae94.png",x=t=>{let e;e="carrier"===t?5:"battleship"===t?4:"destroyer"===t||"submarine"===t?3:2;let n=0;const r=t;return{get type(){return r},get length(){return e},hit:()=>{n<e&&n++},isSunk:()=>n===e}},C=t=>{const e=(()=>{const t=[];let e=0,n=0;for(let e=0;e<10;e++){const e=[];for(let t=0;t<10;t++)e.push(0);t.push(e)}const r=()=>{n=0;for(let e=0;e<10;e++)for(let n=0;n<10;n++)t[e][n]=0},o=t=>[Math.floor(t/10),t%10],a=(e,n,r)=>{const[a,i]=o(n);if(0===r){if(i+e.length>10)return!1;for(let n=i;n<i+e.length;n++)if(0!==t[a][n]&&t[a][n].type!==e.type)return!1}if(1===r){if(a+e.length>10)return!1;for(let n=a;n<a+e.length;n++)if(0!==t[n][i]&&t[n][i].type!==e.type)return!1}return!0},i=(e,r,a)=>{n++;for(let n=0;n<10;n++)for(let r=0;r<10;r++)0!==t[n][r]&&t[n][r].type===e.type&&(t[n][r]=0);const[i,l]=o(r);if(0===a)for(let n=l;n<l+e.length;n++)t[i][n]=e;else for(let n=i;n<i+e.length;n++)t[n][l]=e},l=t=>{const[e,n]=[Math.floor(100*Math.random()),Math.floor(2*Math.random())];return a(t,e,n)?(i(t,e,n),[t,e,n]):l(t)};return{get shipCount(){return n},init:r,canPlaceShip:a,placeShip:i,processAttack:n=>{const[r,a]=o(n);if(0===t[r][a])return t[r][a]=-1,-1;if(1!==t[r][a]&&-1!==t[r][a]){const n=t[r][a];return n.hit(),n.isSunk()&&e++,t[r][a]=1,1}return 0},checkGameOver:()=>5===e,generateRandomConfig:()=>{r();const t=[x("carrier"),x("battleship"),x("destroyer"),x("submarine"),x("patrolBoat")],e=[];for(let n of t)e.push(l(n));return e}}})();return{get board(){return e}}},w=(()=>{const t=document.querySelector("#root"),e=document.querySelector("#root>div"),n=t=>{const n=document.createElement("div"),r=document.createElement("div");r.classList.add("grid");for(let e=0;e<100;e++){const n=document.createElement("div");n.classList.add("cell"),n.id=`cell${t}-${e}`,r.appendChild(n)}const o=document.createElement("h2");1===t?(r.id="player",o.innerText="Friendly Waters"):(r.id="computer",o.innerText="Enemy Waters"),n.appendChild(o),n.appendChild(r),e.appendChild(n)};return{reset:()=>{e.innerHTML=""},loadInitialScreen:(t,r)=>{const o=document.createElement("div");o.id="ship-div";const a=document.createElement("h2");a.innerText="Place your ships",o.appendChild(a);const i=document.createElement("div");i.classList.add("ships");const l=document.createElement("div");l.classList.add("ship-container");const s=document.createElement("img");s.src=g,s.id="carrier",l.appendChild(s);const c=document.createElement("div");c.classList.add("ship-container");const d=document.createElement("img");d.src=m,d.id="battleship",c.appendChild(d);const p=document.createElement("div");p.classList.add("ship-container");const h=document.createElement("img");h.src=b,h.id="destroyer",p.appendChild(h);const f=document.createElement("div");f.classList.add("ship-container");const u=document.createElement("img");u.src=y,u.id="submarine",f.appendChild(u);const C=document.createElement("div");C.classList.add("ship-container");const w=document.createElement("img");w.src=v,w.id="patrolBoat",C.appendChild(w),i.appendChild(l),i.appendChild(c),i.appendChild(p),i.appendChild(f),i.appendChild(C),o.appendChild(i);const E=document.createElement("p");E.innerText="Drag the ships to to the grid, and then click to rotate",o.appendChild(E);const T=document.createElement("div"),A=document.createElement("button");A.innerText="Start",A.classList.add("disabled-btn"),A.id="start",T.appendChild(A),o.appendChild(T);const M=document.createElement("div"),k=document.createElement("button");k.innerText="Randomize";const z=document.createElement("button");z.innerText="Reset",M.appendChild(k),M.appendChild(z),o.appendChild(M),e.appendChild(o),n(1);const L=$(window).height(),P=$(window).width();$("#carrier").draggable({cursorAt:{left:104,top:13},revert:"invalid",containment:[0,0,P-208,L-25]}),$("#battleship").draggable({cursorAt:{left:83,top:13},revert:"invalid",containment:[0,0,P-166,L-25]}),$("#destroyer").draggable({cursorAt:{left:62,top:13},revert:"invalid",containment:[0,0,P-124,L-25]}),$("#submarine").draggable({cursorAt:{left:62,top:13},revert:"invalid",containment:[0,0,P-124,L-25]}),$("#patrolBoat").draggable({cursorAt:{left:41,top:13},revert:"invalid",containment:[0,0,P-82,L-25]}),$("#carrier").addClass("horizontal"),$("#battleship").addClass("horizontal"),$("#destroyer").addClass("horizontal"),$("#submarine").addClass("horizontal"),$("#patrolBoat").addClass("horizontal");for(let e of document.querySelectorAll(".cell"))$(`#${e.id}`).droppable({tolerance:"pointer",accept:function(t){return!0},drop:function(e,o){let a,i,l,s,c=!0;const d=o.draggable.attr("id"),p=x(d),h=parseInt(e.target.id.split("-")[1]);o.draggable.hasClass("horizontal")?("carrier"===d?(a=5,i=-84,l=h-2,s=h+2,Math.floor(l/10)!==Math.floor(h/10)&&(c=!1),Math.floor(s/10)!==Math.floor(h/10)&&(c=!1)):"battleship"===d?(a=5,i=-83,l=h-2,s=h+1,Math.floor(l/10)!==Math.floor(h/10)&&(c=!1),Math.floor(s/10)!==Math.floor(h/10)&&(c=!1)):"destroyer"===d||"submarine"===d?(a=5,i=-42,l=h-1,s=h+1,Math.floor(l/10)!==Math.floor(h/10)&&(c=!1),Math.floor(s/10)!==Math.floor(h/10)&&(c=!1)):(a=5,i=-42,l=h-1,s=h,Math.floor(l/10)!==Math.floor(h/10)&&(c=!1),Math.floor(s/10)!==Math.floor(h/10)&&(c=!1)),c&&t.canPlaceShip(p,l,0)?(t.placeShip(p,l,0),$(o.draggable).detach().css({top:a,left:i}).appendTo(this),o.draggable.unbind("click"),o.draggable.click((()=>{const e={};if(o.draggable.hasClass("horizontal")){const n={transform:"rotate(90deg)"};t.canPlaceShip(p,l,1)&&(t.placeShip(p,l,1),"carrier"===d?(n.top=90,n.left=-84,e.top=104,e.left=13):"battleship"===d?(n.top=70,n.left=-65,e.top=83,e.left=13):"destroyer"===d||"submarine"===d?(n.top=48,n.left=-36,e.top=62,e.left=13):(n.top=26,n.left=-20,e.top=41,e.left=13),$(`#${d}`).detach().css(n).appendTo($(`#cell1-${l}`)),$(`#${d}`).removeClass("horizontal"),$(`#${d}`).draggable("option","cursorAt",e))}else{const n={top:5,left:0,transform:"rotate(0deg)"};t.canPlaceShip(p,l,0)&&(t.placeShip(p,l,0),$(`#${d}`).detach().css(n).appendTo($(`#cell1-${l}`)),$(`#${d}`).addClass("horizontal"),"carrier"===d?(e.top=13,e.left=104):"battleship"===d?(e.top=13,e.left=83):"destroyer"===d||"submarine"===d?(e.top=13,e.left=62):(e.top=13,e.left=41),$(`#${d}`).draggable("option","cursorAt",e))}}))):(o.draggable.draggable("option","revert",!0),setTimeout((()=>o.draggable.draggable("option","revert","invalid")),1))):("carrier"===d?(a=5,i=-84,l=h-20,s=h+20):"battleship"===d?(a=5,i=-62,l=h-20,s=h+10):"destroyer"===d||"submarine"===d?(a=5,i=-42,l=h-10,s=h+10):(a=5,i=-42,l=h-10,s=h),t.canPlaceShip(p,l,1)?(t.placeShip(p,l,1),$(o.draggable).detach().css({top:a,left:i}).appendTo(this),o.draggable.unbind("click"),o.draggable.click((()=>{const e={};if(o.draggable.hasClass("horizontal")){const n={transform:"rotate(90deg)"};t.canPlaceShip(p,l,1)&&(t.placeShip(p,l,1),"carrier"===d?(n.top=90,n.left=-84,e.top=104,e.left=13):"battleship"===d?(n.top=70,n.left=-65,e.top=83,e.left=13):"destroyer"===d||"submarine"===d?(n.top=48,n.left=-36,e.top=62,e.left=13):(n.top=26,n.left=-20,e.top=41,e.left=13),$(`#${d}`).detach().css(n).appendTo($(`#cell1-${l}`)),$(`#${d}`).removeClass("horizontal"),$(`#${d}`).draggable("option","cursorAt",e))}else{const n={top:5,left:0,transform:"rotate(0deg)"};t.canPlaceShip(p,l,0)&&(t.placeShip(p,l,0),$(`#${d}`).detach().css(n).appendTo($(`#cell1-${l}`)),$(`#${d}`).addClass("horizontal"),"carrier"===d?(e.top=13,e.left=104):"battleship"===d?(e.top=13,e.left=83):"destroyer"===d||"submarine"===d?(e.top=13,e.left=62):(e.top=13,e.left=41),$(`#${d}`).draggable("option","cursorAt",e))}}))):(o.draggable.draggable("option","revert",!0),setTimeout((()=>o.draggable.draggable("option","revert","invalid")),1))),$("#start").hasClass("disabled-btn")&&5===t.shipCount&&(A.classList.remove("disabled-btn"),$("#start").click((()=>{document.querySelector("#ship-div").remove(),n(2),$("#carrier").draggable("destroy"),$("#battleship").draggable("destroy"),$("#destroyer").draggable("destroy"),$("#submarine").draggable("destroy"),$("#patrolBoat").draggable("destroy"),r.generateRandomConfig(),S.start()})))}});z.addEventListener("click",(()=>{t.init();const e={top:0,left:0,transform:"rotate(0deg)"};$("#carrier").detach().css(e).appendTo($(".ship-container:first-child")),$("#carrier").draggable("option","cursorAt",{left:104,top:13}),$("#carrier").addClass("horizontal"),$("#battleship").detach().css(e).appendTo($(".ship-container:nth-child(2)")),$("#battleship").draggable("option","cursorAt",{left:83,top:13}),$("#battleship").addClass("horizontal"),$("#destroyer").detach().css(e).appendTo($(".ship-container:nth-child(3)")),$("#destroyer").draggable("option","cursorAt",{left:62,top:13}),$("#destroyer").addClass("horizontal"),$("#submarine").detach().css(e).appendTo($(".ship-container:nth-child(4)")),$("#submarine").draggable("option","cursorAt",{left:62,top:13}),$("#submarine").addClass("horizontal"),$("#patrolBoat").detach().css(e).appendTo($(".ship-container:last-child")),$("#patrolBoat").draggable("option","cursorAt",{left:41,top:13}),$("#patrolBoat").addClass("horizontal"),A.classList.add("disabled-btn"),$("#start").unbind("click")})),k.addEventListener("click",(()=>{t.init();const e=t.generateRandomConfig();for(let t of e){const[e,n,r]=t,o=$(`#${e.type}`),a=$(`#cell1-${n}`),i={},l={};0===r?(o.addClass("horizontal"),i.top=5,i.left=0,i.transform="rotate(0deg)","carrier"===e.type?(l.top=13,l.left=104):"battleship"===e.type?(l.top=13,l.left=83):"destroyer"===e.type||"submarine"===e.type?(l.top=13,l.left=62):(l.top=13,l.left=41)):(o.removeClass("horizontal"),"carrier"===e.type?(i.top=90,i.left=-84,i.transform="rotate(90deg)",l.top=104,l.left=13):"battleship"===e.type?(i.top=70,i.left=-65,i.transform="rotate(90deg)",l.top=83,l.left=13):"destroyer"===e.type||"submarine"===e.type?(i.top=48,i.left=-36,i.transform="rotate(90deg)",l.top=62,l.left=13):(i.top=26,i.left=-20,i.transform="rotate(90deg)",l.top=41,l.left=13)),o.detach().css(i).appendTo(a),o.draggable("option","cursorAt",l)}$("#start").hasClass("disabled-btn")&&5===t.shipCount&&(A.classList.remove("disabled-btn"),$("#start").click((()=>{document.querySelector("#ship-div").remove(),n(2),$("#carrier").draggable("destroy"),$("#battleship").draggable("destroy"),$("#destroyer").draggable("destroy"),$("#submarine").draggable("destroy"),$("#patrolBoat").draggable("destroy"),r.generateRandomConfig(),S.start()})))}))},generateBoard:n,winnerScreen:e=>{const n=document.createElement("div");n.classList.add("winner");const r=document.createElement("h1");r.innerText=1===e?"Enemy fleet has been destroyed! You win!":"Your fleet has been destroyed! You Lose!",n.appendChild(r),t.after(n)}}})(),S=(()=>{const t=C(),e=C(),n=t.board,r=e.board,o=(t,e)=>{1===e?t.style.backgroundColor="red":-1===e&&(t.style.backgroundColor="green")},a=()=>{const t=Math.floor(100*Math.random()),e=(Math.floor(t/10),n.processAttack(t));e?o(document.querySelector(`#player>.cell:nth-child(${t+1})`),e):a()},i=t=>{const e=t.target.id.split("-")[1],l=r.processAttack(e);if(o(t.target,l),l)if(r.checkGameOver()){for(let t of document.querySelectorAll("#computer>.cell"))t.removeEventListener("click",i);w.winnerScreen(1)}else if(a(),n.checkGameOver()){for(let t of document.querySelectorAll("#computer>.cell"))t.removeEventListener("click",i);w.winnerScreen(2)}};return{init:()=>{w.reset(),n.init(),r.init(),w.loadInitialScreen(n,r)},start:()=>{r.generateRandomConfig();const t=document.querySelectorAll("#computer>.cell");for(let e of t)e.addEventListener("click",i)}}})();S.init()})()})();