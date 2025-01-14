(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,":root {\n  --primary-color: rgb(36, 36, 56);\n  --secondary-color: #00FFFF;\n  --text-color: #F6F5F4;\n}\n\n.light-theme {\n  --primary-color: #F6F5F4;\n  --text-color: rgb(36, 36, 56);\n}\n\n* {\n  font-family: 'Inter';\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin-left: 1rem;\n}\n\ninput,\ntextarea,\nselect,\nbutton {\n  border: 1px solid black;\n  font: inherit;\n  color: inherit;\n  padding: 5px;\n}\n\ninput {\n  border: 2px solid #ccc;          /* Light border */\n  border-radius: 8px;              /* Rounded corners */\n  font-size: 16px;\n}\n\nbutton {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: var(--primary-color); /* Primary blue */\n  border: none;\n  border-radius: 8px; /* Rounded corners */\n  cursor: pointer;\n  transition: all 0.3s ease; /* Smooth transitions */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */\n}\n\n/* Hover effect */\nbutton:hover {\n  background-color: var(--primary-color); /* Darker blue on hover */\n  transform: translateY(-2px); /* Subtle lift */\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow */\n}\n\n/* Active effect */\nbutton:active {\n  transform: translateY(0); /* Reset lift */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Reset shadow */\n  background-color: var(--primary-color); /* Even darker blue */\n}\n\nbutton:disabled {\n  background-color: #c0c0c0; /* Gray for disabled buttons */\n  color: #6c757d; /* Muted text */\n  cursor: not-allowed;\n  box-shadow: none; /* Remove shadow */\n}\n\ninput[required]:invalid {\n  border-color: red; \n}\n\n\ninput[required]:valid {\n  border-color: green; \n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n  background-color: var(--text-color);\n}\n\n#close-button, .delete-button {\n  display: flex;\n  height: 25px;\n  width: auto;\n  margin-left: auto;\n  cursor: pointer;\n}\n\nselect {\n  padding: 10px 20px;              /* Padding inside the dropdown */\n  background-color: #fff;          /* White background for the select */\n  border: 2px solid #ccc;          /* Light border */\n  border-radius: 8px;              /* Rounded corners */\n  font-size: 16px;                 /* Slightly larger font size */\n  color: #333;                     /* Text color */\n  appearance: auto;                /* Use default dropdown arrow */\n  outline: none;                   /* Remove focus outline */\n  cursor: pointer;                /* Pointer cursor on hover */\n  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition effects */\n}\n\n/* Hover effect on the select dropdown */\nselect:hover {\n  border-color: #0066cc;           /* Change border color on hover */\n}\n\n/* Focus effect on the select dropdown */\nselect:focus {\n  border-color: #0066cc;           /* Highlight the border when focused */\n  box-shadow: 0 0 5px rgba(0, 102, 204, 0.3); /* Add subtle glow */\n}\n\n/* Styling the options inside the select */\nselect option {\n  padding: 10px;                    /* Padding inside each option */\n  font-size: 16px;                  /* Same font size as the select for consistency */\n  color: #333;                      /* Dark text color for options */\n  background-color: #fff;           /* White background for options */\n  border: none;                     /* Remove borders around options */\n}\n\n/* Hover effect for options */\nselect option:hover {\n  background-color: #f1f1f1;        /* Light background on hover */\n}\n\n.delete-button {\n  width: 30px;                /* Size of the SVG icon */\n  height: 30px;\n  background-color: transparent; /* Transparent background */\n  border: none;               /* No border */\n  cursor: pointer;            /* Pointer cursor on hover */\n  transition: transform 0.3s ease, fill 0.3s ease; /* Smooth hover effect */\n}\n\n/* Hover effect */\n.delete-button:hover, .delete-project-button:hover {\n  transform: scale(1.2);         /* Slightly scale up the icon */\n  fill: #ff4d4d;                 /* Change color to red on hover */\n}\n\n/* Active state (when button is clicked) */\n.delete-button:active, .delete-project-button:active {\n  transform: scale(0.95);        /* Scale down the icon to give a click effect */\n  fill: #d43f3a;                 /* Darker red color when clicked */\n}\n\n/* Focus state for accessibility */\n.delete-button:focus {\n  outline: 2px solid #ff4d4d;    /* Red outline on focus for accessibility */\n  outline-offset: 4px;\n}\n\n.delete-button path {\n  transition: fill 0.3s ease;\n}\n\n#projectTitle{\n  font-weight: bold;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 15vw;\n  height: 100%;\n  background-color: var(--secondary-color);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  width: 85vw;\n  height: 100%;\n}\n\n.taskItem {\n  border: 1px solid #ccc; \n  border-radius: 8px; \n  padding: 10px;\n  margin: 10px 0; \n  background-color: #f9f9f9; \n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \n  min-height: 150px;\n}\n\n#tasksContainer {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); \n  grid-template-rows: repeat(4, auto); \n  gap: 10px; \n  padding: 10px;\n}\n\n.sidebar-item {\n  margin-left: 1rem;\n  margin-top: 1rem;\n}\n\n.project-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  width: 100%;\n}\n\n.project-button {\n  padding: 10px;\n  font-size: 14px;\n  border: none;\n  background-color: #4CAF50;\n  color: white;\n  cursor: pointer;\n}\n\n.delete-project-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n}\n\n.delete-project-button:hover {\n  opacity: 1;\n}\n\n#form, #projectForm {\n  display: none;\n  position: fixed;\n  gap: 7px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out; \n}\n\n#popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5); \n  backdrop-filter: blur(5px); \n  display: none; \n  z-index: 999;\n  transition: opacity 0.3s ease; \n}\n\n#projectsSidebarContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-color);\n    color: white;\n    font-weight: bold;\n    padding: 10px 0;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:[":root {\r\n  --primary-color: rgb(36, 36, 56);\r\n  --secondary-color: #00FFFF;\r\n  --text-color: #F6F5F4;\r\n}\r\n\r\n.light-theme {\r\n  --primary-color: #F6F5F4;\r\n  --text-color: rgb(36, 36, 56);\r\n}\r\n\r\n* {\r\n  font-family: 'Inter';\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh3 {\r\n  margin-left: 1rem;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n  border: 1px solid black;\r\n  font: inherit;\r\n  color: inherit;\r\n  padding: 5px;\r\n}\r\n\r\ninput {\r\n  border: 2px solid #ccc;          /* Light border */\r\n  border-radius: 8px;              /* Rounded corners */\r\n  font-size: 16px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: white;\r\n  background-color: var(--primary-color); /* Primary blue */\r\n  border: none;\r\n  border-radius: 8px; /* Rounded corners */\r\n  cursor: pointer;\r\n  transition: all 0.3s ease; /* Smooth transitions */\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */\r\n}\r\n\r\n/* Hover effect */\r\nbutton:hover {\r\n  background-color: var(--primary-color); /* Darker blue on hover */\r\n  transform: translateY(-2px); /* Subtle lift */\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow */\r\n}\r\n\r\n/* Active effect */\r\nbutton:active {\r\n  transform: translateY(0); /* Reset lift */\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Reset shadow */\r\n  background-color: var(--primary-color); /* Even darker blue */\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: #c0c0c0; /* Gray for disabled buttons */\r\n  color: #6c757d; /* Muted text */\r\n  cursor: not-allowed;\r\n  box-shadow: none; /* Remove shadow */\r\n}\r\n\r\ninput[required]:invalid {\r\n  border-color: red; \r\n}\r\n\r\n\r\ninput[required]:valid {\r\n  border-color: green; \r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  background-color: var(--text-color);\r\n}\r\n\r\n#close-button, .delete-button {\r\n  display: flex;\r\n  height: 25px;\r\n  width: auto;\r\n  margin-left: auto;\r\n  cursor: pointer;\r\n}\r\n\r\nselect {\r\n  padding: 10px 20px;              /* Padding inside the dropdown */\r\n  background-color: #fff;          /* White background for the select */\r\n  border: 2px solid #ccc;          /* Light border */\r\n  border-radius: 8px;              /* Rounded corners */\r\n  font-size: 16px;                 /* Slightly larger font size */\r\n  color: #333;                     /* Text color */\r\n  appearance: auto;                /* Use default dropdown arrow */\r\n  outline: none;                   /* Remove focus outline */\r\n  cursor: pointer;                /* Pointer cursor on hover */\r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition effects */\r\n}\r\n\r\n/* Hover effect on the select dropdown */\r\nselect:hover {\r\n  border-color: #0066cc;           /* Change border color on hover */\r\n}\r\n\r\n/* Focus effect on the select dropdown */\r\nselect:focus {\r\n  border-color: #0066cc;           /* Highlight the border when focused */\r\n  box-shadow: 0 0 5px rgba(0, 102, 204, 0.3); /* Add subtle glow */\r\n}\r\n\r\n/* Styling the options inside the select */\r\nselect option {\r\n  padding: 10px;                    /* Padding inside each option */\r\n  font-size: 16px;                  /* Same font size as the select for consistency */\r\n  color: #333;                      /* Dark text color for options */\r\n  background-color: #fff;           /* White background for options */\r\n  border: none;                     /* Remove borders around options */\r\n}\r\n\r\n/* Hover effect for options */\r\nselect option:hover {\r\n  background-color: #f1f1f1;        /* Light background on hover */\r\n}\r\n\r\n.delete-button {\r\n  width: 30px;                /* Size of the SVG icon */\r\n  height: 30px;\r\n  background-color: transparent; /* Transparent background */\r\n  border: none;               /* No border */\r\n  cursor: pointer;            /* Pointer cursor on hover */\r\n  transition: transform 0.3s ease, fill 0.3s ease; /* Smooth hover effect */\r\n}\r\n\r\n/* Hover effect */\r\n.delete-button:hover, .delete-project-button:hover {\r\n  transform: scale(1.2);         /* Slightly scale up the icon */\r\n  fill: #ff4d4d;                 /* Change color to red on hover */\r\n}\r\n\r\n/* Active state (when button is clicked) */\r\n.delete-button:active, .delete-project-button:active {\r\n  transform: scale(0.95);        /* Scale down the icon to give a click effect */\r\n  fill: #d43f3a;                 /* Darker red color when clicked */\r\n}\r\n\r\n/* Focus state for accessibility */\r\n.delete-button:focus {\r\n  outline: 2px solid #ff4d4d;    /* Red outline on focus for accessibility */\r\n  outline-offset: 4px;\r\n}\r\n\r\n.delete-button path {\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n#projectTitle{\r\n  font-weight: bold;\r\n}\r\n\r\n#sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  width: 15vw;\r\n  height: 100%;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 85vw;\r\n  height: 100%;\r\n}\r\n\r\n.taskItem {\r\n  border: 1px solid #ccc; \r\n  border-radius: 8px; \r\n  padding: 10px;\r\n  margin: 10px 0; \r\n  background-color: #f9f9f9; \r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n  min-height: 150px;\r\n}\r\n\r\n#tasksContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr); \r\n  grid-template-rows: repeat(4, auto); \r\n  gap: 10px; \r\n  padding: 10px;\r\n}\r\n\r\n.sidebar-item {\r\n  margin-left: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.project-container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 5px 0;\r\n  width: 100%;\r\n}\r\n\r\n.project-button {\r\n  padding: 10px;\r\n  font-size: 14px;\r\n  border: none;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-project-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n  transition: opacity 0.2s ease;\r\n}\r\n\r\n.delete-project-button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#form, #projectForm {\r\n  display: none;\r\n  position: fixed;\r\n  gap: 7px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 20px;\r\n  background-color: white;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n  z-index: 1000;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in-out; \r\n}\r\n\r\n#popup-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5); \r\n  backdrop-filter: blur(5px); \r\n  display: none; \r\n  z-index: 999;\r\n  transition: opacity 0.3s ease; \r\n}\r\n\r\n#projectsSidebarContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 10px 0;\r\n}"],sourceRoot:""}]);const A=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],A=0;A<e.length;A++){var c=e[A],s=r.base?c[0]+r.base:c[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var u=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,r);r.byIndex=A,n.splice(A,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var A=t(i[a]);n[A].references--}for(var c=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),A=t(659),c=t.n(A),s=t(56),l=t.n(s),d=t(540),u=t.n(d),p=t(113),f=t.n(p),C=t(365),E={};E.styleTagTransform=f(),E.setAttributes=l(),E.insert=c().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=u(),o()(C.A,E),C.A&&C.A.locals&&C.A.locals;const h=t.p+"4cde6cf6920bc0095507.svg",B=(Math.pow(10,8),6e4),m=36e5,b=Symbol.for("constructDateFrom");function g(e,n){return"function"==typeof e?e(n):e&&"object"==typeof e&&b in e?e[b](n):e instanceof Date?new e.constructor(n):new Date(n)}function y(e,n){return g(n||e,e)}function x(e,n){const t=()=>g(n?.in,NaN),r=n?.additionalDigits??2,o=function(e){const n={},t=e.split(v.dateTimeDelimiter);let r;if(t.length>2)return n;if(/:/.test(t[0])?r=t[0]:(n.date=t[0],r=t[1],v.timeZoneDelimiter.test(n.date)&&(n.date=e.split(v.timeZoneDelimiter)[0],r=e.substr(n.date.length,e.length))),r){const e=v.timezone.exec(r);e?(n.time=r.replace(e[1],""),n.timezone=e[1]):n.time=r}return n}(e);let i;if(o.date){const e=function(e,n){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=e.match(t);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?o:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(o.date,r);i=function(e,n){if(null===n)return new Date(NaN);const t=e.match(k);if(!t)return new Date(NaN);const r=!!t[4],o=D(t[1]),i=D(t[2])-1,a=D(t[3]),A=D(t[4]),c=D(t[5])-1;if(r)return function(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}(0,A,c)?function(e,n,t){const r=new Date(0);r.setUTCFullYear(e,0,4);const o=7*(n-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(n,A,c):new Date(NaN);{const e=new Date(0);return function(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(T[n]||(I(e)?29:28))}(n,i,a)&&function(e,n){return n>=1&&n<=(I(e)?366:365)}(n,o)?(e.setUTCFullYear(n,i,Math.max(o,a)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!i||isNaN(+i))return t();const a=+i;let A,c=0;if(o.time&&(c=function(e){const n=e.match(w);if(!n)return NaN;const t=j(n[1]),r=j(n[2]),o=j(n[3]);return function(e,n,t){return 24===e?0===n&&0===t:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}(t,r,o)?t*m+r*B+1e3*o:NaN}(o.time),isNaN(c)))return t();if(!o.timezone){const e=new Date(a+c),t=y(0,n?.in);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return A=function(e){if("Z"===e)return 0;const n=e.match(S);if(!n)return 0;const t="+"===n[1]?-1:1,r=parseInt(n[2]),o=n[3]&&parseInt(n[3])||0;return function(e,n){return n>=0&&n<=59}(0,o)?t*(r*m+o*B):NaN}(o.timezone),isNaN(A)?t():y(a+c+A,n?.in)}const v={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},k=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,w=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,S=/^([+-])(\d{2})(?::?(\d{2}))?$/;function D(e){return e?parseInt(e):1}function j(e){return e&&parseFloat(e.replace(",","."))||0}const T=[31,null,31,30,31,30,31,31,30,31,30,31];function I(e){return e%400==0||e%4==0&&e%100!=0}function N(e,n){const t=y(e,n?.in);return t.setHours(0,0,0,0),t}function Y(e,n){return function(e,n,t){const[r,o]=function(e,...n){const t=g.bind(null,e||n.find((e=>"object"==typeof e)));return n.map(t)}(t?.in,e,n);return+N(r)==+N(o)}(g(n?.in||e,e),function(e){return g(e,Date.now())}(n?.in||e))}let q={};function F(){return q}function L(e,n){const t=R("div",{class:"taskItem"});t.dataset.id=n;const r=R("text",{id:"projectTitle"});r.textContent=e.projectName,t.appendChild(r),[{id:"taskItemTitle",label:"Task",value:e.title},{id:"taskItemDesc",label:"Description",value:e.desc},{id:"taskItemDueDate",label:"Due Date",value:e.dueDate},{id:"taskItemPriority",label:"Priority",value:e.priority}].forEach((({id:e,label:n,value:r})=>{const o=R("div",{id:e});r&&""!==r||(r="None provided."),o.textContent=`${n}: ${r}`,t.appendChild(o)}));const o=R("img",{src:h,class:"delete-button"});return o.addEventListener("click",(()=>{!function(e){const[n,t]=e.split("-"),r=G.find((e=>e.name===n));r?r.tasks.splice(t,1):alert(`Project '${n}' not found`),Q?Q===n?z():console.log(`Selected project '${Q}' does not match deleted task's project '${n}'.`):W()}(n)})),t.appendChild(o),t}function z(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");if(t&&n.removeChild(t),e.innerHTML="",Q){const t=_(Q),r=R("h3");r.textContent=`${Q} Tasks`,n.insertBefore(r,n.firstChild),t.tasks.forEach(((n,t)=>{const r=L(n,`${Q}-${t}`);e.appendChild(r)}))}else alert("No project selected. Please select a project.")}function W(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=R("h3");r.textContent="All tasks",n.insertBefore(r,n.firstChild),G.forEach((n=>{n.tasks.forEach(((t,r)=>{const o=L(t,`${n.name}-${r}`);e.appendChild(o)}))}))}function P(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=R("h3");r.textContent="Tasks due today",n.insertBefore(r,n.firstChild),function(){let e=[];const n=function(e,n){const t=F(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=y(e,n?.in),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}(new Date,{weekStartsOn:0}),t=function(e,n){const t=F(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=y(e,n?.in),i=o.getDay(),a=6+(i<r?-7:0)-(i-r);return o.setDate(o.getDate()+a),o.setHours(23,59,59,999),o}(new Date,{weekStartsOn:0});return G.forEach((r=>{r.tasks.forEach((r=>{(function(e,n,t){const r=+y(e,t?.in),[o,i]=[+y(n.start,t?.in),+y(n.end,t?.in)].sort(((e,n)=>e-n));return r>=o&&r<=i})(x(r.dueDate),{start:n,end:t})&&e.push(r)}))})),e}().forEach(((n,t)=>{const r=L(n,`${n.projectName}-${t}`);e.appendChild(r)}))}const U=t.p+"6281a16e7ee85ce2738c.svg";function R(e,n={}){const t=document.createElement(e);return Object.keys(n).forEach((e=>{t.setAttribute(e,n[e])})),t}function $(e,n,t,r=!1){const o=R("input",{id:e,name:e,type:n,placeholder:t});return r&&(o.required="true"),o}function M(e,n){const t=R("label",{for:e});return t.textContent=n,t}function H(){return R("div",{id:"popup-overlay"})}function O(e,n){e.style.display="flex",e.style.flexDirection="column",n.style.display="block",setTimeout((()=>{e.style.opacity="1",n.style.opacity="1"}),10)}function Z(e,n){e.style.opacity="0",setTimeout((()=>{e.style.display="none",n.style.display="none"}),300)}function J(){const e=document.getElementById("addTaskBtn");Q?(e.disabled=!1,e.classList.remove("disabled")):(e.disabled=!0,e.classList.add("disabled"))}function X(){const e=document.getElementById("projectsSidebarContainer");e.innerHTML="",G.forEach((n=>{const t=document.createElement("div");t.classList.add("project-container");const r=document.createElement("button");r.textContent=n.name,r.addEventListener("click",(()=>{V(n.name),J(),z()}));const o=document.createElement("img");o.src=h,o.classList.add("delete-project-button"),o.style.display="none",t.addEventListener("mouseenter",(()=>{o.style.display="block"})),t.addEventListener("mouseleave",(()=>{o.style.display="none"})),o.addEventListener("click",(()=>{!function(e){if(1===G.length)return void alert("Must have at least 1 project to add tasks to!");const n=G.findIndex((n=>n.name===e));n>-1&&(G.splice(n,1),localStorage.setItem("projects",JSON.stringify(G)))}(n.name),e.removeChild(t),X()})),t.appendChild(r),t.appendChild(o),e.appendChild(t)}))}let G=[],Q=null;function V(e){Q=e,null===Q&&J()}function K(e,n){return{id:e,name:n,tasks:[]}}function _(e){return G.find((n=>n.name===e))||!1}!function(){const e=localStorage.getItem("projects");if(e&&0!==JSON.parse(e).length){const n=JSON.parse(e);G.length=0,G.push(...n),J(),W()}else{const e=K(1,"Unlisted");G.push(e),localStorage.setItem("projects",JSON.stringify(G))}}(),V(G[0].name),X(),function(){const e=function(){const e=R("form",{id:"form"}),n=R("img",{src:U,id:"close-button"}),t=M("title","Title: "),r=$("title","text","Enter a title",!0),o=M("desc","Description: "),i=$("desc","text","Enter a description"),a=M("dueDate","Due date: "),A=$("dueDate","date","Enter a due-date",!0),c=M("priority","Priority: "),s=function(){const e=R("select",{id:"priority",name:"priority"});return["None","Low","Medium","High"].forEach((n=>{const t=R("option",{value:n.toLowerCase()});t.textContent=n,e.appendChild(t)})),e}(),l=R("button",{type:"submit"});return l.textContent="Submit",e.append(n,t,r,o,i,a,A,c,s,l),e}(),n=H(),t=document.getElementById("content"),r=document.getElementById("addTaskBtn"),o=e.querySelector("button"),i=e.querySelector("#close-button");r.addEventListener("click",(()=>O(e,n))),o.addEventListener("click",(t=>{const r=function(e){const n=e.querySelector("#title"),t=e.querySelector("#desc"),r=e.querySelector("#dueDate"),o=e.querySelector("#priority");return{taskTitle:n.value,taskDesc:t.value,taskDueDate:r.value,taskPriority:o.value}}(e);var o;r&&""!==r.taskTitle.trim()&&""!==r.taskDueDate.trim()&&(t.preventDefault(),Z(e,n),e.querySelector("#title").value="",e.querySelector("#desc").value="",e.querySelector("#dueDate").value="",e.querySelector("#priority").value="none",function(e,n){const t=_(e);t&&(t.tasks.find((e=>e.title===n.title))?alert(`A task with the name "${n.title}" already exists in the project "${e}".`):(t.tasks.push(n),localStorage.setItem("projects",JSON.stringify(G))))}(Q,{title:r.taskTitle,desc:r.taskDesc,dueDate:r.taskDueDate,priority:r.taskPriority,projectName:Q}),o=_(Q),console.log(`Tasks for project: ${o.name}`),o.tasks.forEach((e=>{console.log(e)})),z())})),i.addEventListener("click",(()=>{Z(e,n),e.querySelector("#title").value="",e.querySelector("#desc").value="",e.querySelector("#dueDate").value="",e.querySelector("#priority").value="none"})),t.append(e,n)}(),function(){const e=function(){const e=R("form",{id:"projectForm"}),n=R("img",{src:U,id:"close-button"}),t=M("projectName","Project name: "),r=$("projectName","text","Enter your project's name",!0),o=R("button",{type:"submit",id:"projectSubmitBtn"});return o.textContent="Submit",e.append(n,t,r,o),e}(),n=H(),t=document.getElementById("content"),r=document.getElementById("addProjectBtn"),o=e.querySelector("#projectSubmitBtn"),i=e.querySelector("#close-button"),a=e.querySelector("#projectName");r.addEventListener("click",(()=>O(e,n))),o.addEventListener("click",(t=>{t.preventDefault(),function(e){if(e=e.trim(),G.length>=6)alert("Can only have 6 projects max!");else if(e.length>20)alert("Project name must be 20 characters or fewer!");else if(G.find((n=>n.name===e)))alert("Project with the same name already exists!");else{const n=K(G.length+1,e);V(e),G.push(n),localStorage.setItem("projects",JSON.stringify(G))}}(function(e){return e.querySelector("#projectName").value}(e)),X(),Z(e,n),a.value="",z()})),i.addEventListener("click",(()=>{Z(e,n),a.value=""})),t.append(e,n)}(),function(){const e=document.getElementById("allTasksBtn"),n=document.getElementById("todayBtn"),t=document.getElementById("thisWeekBtn"),r=document.getElementById("importantBtn");e.addEventListener("click",(()=>{V(null),W()})),n.addEventListener("click",(()=>{V(null),function(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=R("h3");r.textContent="Tasks due today",n.insertBefore(r,n.firstChild),function(){let e=[];return G.forEach((n=>{n.tasks.forEach((n=>{Y(x(n.dueDate))&&e.push(n)}))})),e}().forEach(((n,t)=>{const r=L(n,`${n.projectName}-${t}`);e.appendChild(r)}))}()})),t.addEventListener("click",(()=>{V(null),P()})),r.addEventListener("click",(()=>{V(null),function(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=R("h3");r.textContent="Tasks with High priority",n.insertBefore(r,n.firstChild),function(){let e=[];return G.forEach((n=>{n.tasks.forEach((n=>{"high"===n.priority&&e.push(n)}))})),e}().forEach(((n,t)=>{const r=L(n,`${n.projectName}-${t}`);e.appendChild(r)}))}()}))}()})();
//# sourceMappingURL=main.js.map