(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,':root {\n  --primary-color: rgb(36, 36, 56);\n  --secondary-color: #00FFFF;\n}\n\n.light-theme {\n  --primary-color: #F6F5F4;\n  --text-color: rgb(36, 36, 56);\n}\n\n.dark-theme {\n  --primary-color: rgb(36, 36, 56); /* Dark Background */\n  --text-color: #F6F5F4; /* Light Text */\n}\n\n* {\n  font-family: \'Inter\';\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--text-color);\n  color: var(--primary-color);\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n#projectSubmitBtn, button[type="submit"] {\n  background-color: var(--text-color);\n  color: var(--primary-color)\n}\n\nbutton[type="submit"]:hover {\n  color: var(--text-color);\n}\n\nh3 {\n  margin-left: 1rem;\n}\n\ninput,\ntextarea,\nselect,\nbutton {\n  border: 1px solid black;\n  font: inherit;\n  padding: 5px;\n}\n\ninput {\n  border: 2px solid #ccc;          /* Light border */\n  border-radius: 8px;              /* Rounded corners */\n  font-size: 16px;\n}\n\nbutton {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--text-color);\n  background-color: var(--primary-color); /* Primary blue */\n  border: none;\n  border-radius: 8px; /* Rounded corners */\n  cursor: pointer;\n  transition: all 0.3s ease; /* Smooth transitions */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */\n}\n\n/* Hover effect */\nbutton:hover {\n  background-color: var(--primary-color); /* Darker blue on hover */\n  transform: translateY(-2px); /* Subtle lift */\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow */\n}\n\n/* Active effect */\nbutton:active {\n  transform: translateY(0); /* Reset lift */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Reset shadow */\n  background-color: var(--primary-color); /* Even darker blue */\n}\n\nbutton:disabled {\n  background-color: #c0c0c0; /* Gray for disabled buttons */\n  color: #6c757d; /* Muted text */\n  cursor: not-allowed;\n  box-shadow: none; /* Remove shadow */\n}\n\ninput[required]:invalid {\n  border-color: red; \n}\n\n\ninput[required]:valid {\n  border-color: green; \n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n  background-color: var(--text-color);\n}\n\n.buttons-container, .website-buttons-container {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.website-buttons-container {\n  margin-top: auto;\n  margin-bottom: 1rem;\n  margin-right: 1rem;\n  gap: 10px;\n}\n\n.buttons-container {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: fit-content;\n  padding: 2px;\n  border-radius: 4px;\n}\n\n#close-button, .delete-button, .edit-button, .clear-storage-button, .dark-light-theme-button {\n  display: flex;\n  height: 25px;\n  width: auto;\n  cursor: pointer;\n}\n\n.edit-button {\n  height: 25px;\n  width: 25px;\n}\n\n#close-button, .edit-button {\n  margin-left: auto;\n}\n\nselect {\n  padding: 10px 20px;              /* Padding inside the dropdown */\n  background-color: #fff;          /* White background for the select */\n  border: 2px solid #ccc;          /* Light border */\n  border-radius: 8px;              /* Rounded corners */\n  font-size: 16px;                 /* Slightly larger font size */\n  appearance: auto;                /* Use default dropdown arrow */\n  outline: none;                   /* Remove focus outline */\n  cursor: pointer;                /* Pointer cursor on hover */\n  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition effects */\n}\n\n/* Hover effect on the select dropdown */\nselect:hover {\n  border-color: #0066cc;           /* Change border color on hover */\n}\n\n/* Focus effect on the select dropdown */\nselect:focus {\n  border-color: #0066cc;           /* Highlight the border when focused */\n  box-shadow: 0 0 5px rgba(0, 102, 204, 0.3); /* Add subtle glow */\n}\n\n/* Styling the options inside the select */\nselect option {\n  padding: 10px;                    /* Padding inside each option */\n  font-size: 16px;                  /* Same font size as the select for consistency */\n  border: none;                     /* Remove borders around options */\n}\n\n/* Hover effect for options */\nselect option:hover {\n  background-color: var(--primary-color);        /* Light background on hover */\n}\n\n.delete-button, .edit-button, .clear-storage-button, .dark-light-theme-button {\n  background-color: transparent; /* Transparent background */\n  border: none;               /* No border */\n  cursor: pointer;            /* Pointer cursor on hover */\n  transition: transform 0.3s ease, fill 0.3s ease; /* Smooth hover effect */\n}\n\n/* Hover effect */\n.delete-button:hover, .delete-project-button:hover, .edit-button:hover, .clear-storage-button:hover, .dark-light-theme-button:hover {\n  transform: scale(1.2);         /* Slightly scale up the icon */\n  fill: #ff4d4d;                 /* Change color to red on hover */\n}\n\n.edit-button:hover {\n  transform: scale(1.1);\n}\n\n/* Active state (when button is clicked) */\n.delete-button:active, .delete-project-button:active, .edit-button:active, .clear-storage-button:active, .dark-light-theme-button:active {\n  transform: scale(0.95);        /* Scale down the icon to give a click effect */\n  fill: #d43f3a;                 /* Darker red color when clicked */\n}\n\n.delete-button path {\n  transition: fill 0.3s ease;\n}\n\n#projectTitle{\n  font-weight: bold;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 15vw;\n  height: 100%;\n  background-color: var(--secondary-color);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  width: 85vw;\n  height: 100%;\n}\n\n.taskItem {\n  border: 1px solid #ccc; \n  border-radius: 8px; \n  padding: 10px;\n  margin: 10px 0; \n  background-color: #f9f9f9; \n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \n  min-height: 150px;\n}\n\n#tasksContainer {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); \n  grid-template-rows: repeat(4, auto); \n  gap: 10px; \n  padding: 10px;\n}\n\n.sidebar-item {\n  margin-left: 1rem;\n  margin-top: 1rem;\n}\n\n.project-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  width: 100%;\n}\n\n\n.delete-project-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n}\n\n.delete-project-button:hover {\n  opacity: 1;\n}\n\n#form, #projectForm, #confirmation-form {\n  display: none;\n  position: fixed;\n  gap: 7px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out; \n}\n\n#popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5); \n  backdrop-filter: blur(5px); \n  display: none; \n  z-index: 999;\n  transition: opacity 0.3s ease; \n}\n\n#projectsSidebarContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-color);\n    color: var(--text-color);\n    font-weight: bold;\n    padding: 10px 0;\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:[':root {\r\n  --primary-color: rgb(36, 36, 56);\r\n  --secondary-color: #00FFFF;\r\n}\r\n\r\n.light-theme {\r\n  --primary-color: #F6F5F4;\r\n  --text-color: rgb(36, 36, 56);\r\n}\r\n\r\n.dark-theme {\r\n  --primary-color: rgb(36, 36, 56); /* Dark Background */\r\n  --text-color: #F6F5F4; /* Light Text */\r\n}\r\n\r\n* {\r\n  font-family: \'Inter\';\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--text-color);\r\n  color: var(--primary-color);\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n}\r\n\r\n#projectSubmitBtn, button[type="submit"] {\r\n  background-color: var(--text-color);\r\n  color: var(--primary-color)\r\n}\r\n\r\nbutton[type="submit"]:hover {\r\n  color: var(--text-color);\r\n}\r\n\r\nh3 {\r\n  margin-left: 1rem;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n  border: 1px solid black;\r\n  font: inherit;\r\n  padding: 5px;\r\n}\r\n\r\ninput {\r\n  border: 2px solid #ccc;          /* Light border */\r\n  border-radius: 8px;              /* Rounded corners */\r\n  font-size: 16px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: var(--text-color);\r\n  background-color: var(--primary-color); /* Primary blue */\r\n  border: none;\r\n  border-radius: 8px; /* Rounded corners */\r\n  cursor: pointer;\r\n  transition: all 0.3s ease; /* Smooth transitions */\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */\r\n}\r\n\r\n/* Hover effect */\r\nbutton:hover {\r\n  background-color: var(--primary-color); /* Darker blue on hover */\r\n  transform: translateY(-2px); /* Subtle lift */\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow */\r\n}\r\n\r\n/* Active effect */\r\nbutton:active {\r\n  transform: translateY(0); /* Reset lift */\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Reset shadow */\r\n  background-color: var(--primary-color); /* Even darker blue */\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: #c0c0c0; /* Gray for disabled buttons */\r\n  color: #6c757d; /* Muted text */\r\n  cursor: not-allowed;\r\n  box-shadow: none; /* Remove shadow */\r\n}\r\n\r\ninput[required]:invalid {\r\n  border-color: red; \r\n}\r\n\r\n\r\ninput[required]:valid {\r\n  border-color: green; \r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  background-color: var(--text-color);\r\n}\r\n\r\n.buttons-container, .website-buttons-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-left: auto;\r\n}\r\n\r\n.website-buttons-container {\r\n  margin-top: auto;\r\n  margin-bottom: 1rem;\r\n  margin-right: 1rem;\r\n  gap: 10px;\r\n}\r\n\r\n.buttons-container {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: fit-content;\r\n  padding: 2px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#close-button, .delete-button, .edit-button, .clear-storage-button, .dark-light-theme-button {\r\n  display: flex;\r\n  height: 25px;\r\n  width: auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-button {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n#close-button, .edit-button {\r\n  margin-left: auto;\r\n}\r\n\r\nselect {\r\n  padding: 10px 20px;              /* Padding inside the dropdown */\r\n  background-color: #fff;          /* White background for the select */\r\n  border: 2px solid #ccc;          /* Light border */\r\n  border-radius: 8px;              /* Rounded corners */\r\n  font-size: 16px;                 /* Slightly larger font size */\r\n  appearance: auto;                /* Use default dropdown arrow */\r\n  outline: none;                   /* Remove focus outline */\r\n  cursor: pointer;                /* Pointer cursor on hover */\r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition effects */\r\n}\r\n\r\n/* Hover effect on the select dropdown */\r\nselect:hover {\r\n  border-color: #0066cc;           /* Change border color on hover */\r\n}\r\n\r\n/* Focus effect on the select dropdown */\r\nselect:focus {\r\n  border-color: #0066cc;           /* Highlight the border when focused */\r\n  box-shadow: 0 0 5px rgba(0, 102, 204, 0.3); /* Add subtle glow */\r\n}\r\n\r\n/* Styling the options inside the select */\r\nselect option {\r\n  padding: 10px;                    /* Padding inside each option */\r\n  font-size: 16px;                  /* Same font size as the select for consistency */\r\n  border: none;                     /* Remove borders around options */\r\n}\r\n\r\n/* Hover effect for options */\r\nselect option:hover {\r\n  background-color: var(--primary-color);        /* Light background on hover */\r\n}\r\n\r\n.delete-button, .edit-button, .clear-storage-button, .dark-light-theme-button {\r\n  background-color: transparent; /* Transparent background */\r\n  border: none;               /* No border */\r\n  cursor: pointer;            /* Pointer cursor on hover */\r\n  transition: transform 0.3s ease, fill 0.3s ease; /* Smooth hover effect */\r\n}\r\n\r\n/* Hover effect */\r\n.delete-button:hover, .delete-project-button:hover, .edit-button:hover, .clear-storage-button:hover, .dark-light-theme-button:hover {\r\n  transform: scale(1.2);         /* Slightly scale up the icon */\r\n  fill: #ff4d4d;                 /* Change color to red on hover */\r\n}\r\n\r\n.edit-button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* Active state (when button is clicked) */\r\n.delete-button:active, .delete-project-button:active, .edit-button:active, .clear-storage-button:active, .dark-light-theme-button:active {\r\n  transform: scale(0.95);        /* Scale down the icon to give a click effect */\r\n  fill: #d43f3a;                 /* Darker red color when clicked */\r\n}\r\n\r\n.delete-button path {\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n#projectTitle{\r\n  font-weight: bold;\r\n}\r\n\r\n#sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  width: 15vw;\r\n  height: 100%;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 85vw;\r\n  height: 100%;\r\n}\r\n\r\n.taskItem {\r\n  border: 1px solid #ccc; \r\n  border-radius: 8px; \r\n  padding: 10px;\r\n  margin: 10px 0; \r\n  background-color: #f9f9f9; \r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n  min-height: 150px;\r\n}\r\n\r\n#tasksContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr); \r\n  grid-template-rows: repeat(4, auto); \r\n  gap: 10px; \r\n  padding: 10px;\r\n}\r\n\r\n.sidebar-item {\r\n  margin-left: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.project-container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 5px 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.delete-project-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n  transition: opacity 0.2s ease;\r\n}\r\n\r\n.delete-project-button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#form, #projectForm, #confirmation-form {\r\n  display: none;\r\n  position: fixed;\r\n  gap: 7px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 20px;\r\n  background-color: var(--primary-color);\r\n  color: var(--text-color);\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n  z-index: 1000;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in-out; \r\n}\r\n\r\n#popup-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5); \r\n  backdrop-filter: blur(5px); \r\n  display: none; \r\n  z-index: 999;\r\n  transition: opacity 0.3s ease; \r\n}\r\n\r\n#projectsSidebarContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: var(--primary-color);\r\n    color: var(--text-color);\r\n    font-weight: bold;\r\n    padding: 10px 0;\r\n}'],sourceRoot:""}]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<e.length;A++){var l=[].concat(e[A]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],A=r.base?s[0]+r.base:s[0],l=a[A]||0,d="".concat(A," ").concat(l);a[A]=l+1;var u=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),A=0;A<a.length;A++){var l=t(a[A]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),A=t(56),l=t.n(A),d=t(540),u=t.n(d),p=t(113),f=t.n(p),C=t(365),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(C.A,m),C.A&&C.A.locals&&C.A.locals;const E=t.p+"01ec1bbeb9fba6d40e41.svg",b=t.p+"d363960aa104ac8e6605.svg",h=(Math.pow(10,8),6e4),g=36e5,B=Symbol.for("constructDateFrom");function y(e,n){return"function"==typeof e?e(n):e&&"object"==typeof e&&B in e?e[B](n):e instanceof Date?new e.constructor(n):new Date(n)}function v(e,n){return y(n||e,e)}function x(e,n){const t=()=>y(n?.in,NaN),r=n?.additionalDigits??2,o=function(e){const n={},t=e.split(k.dateTimeDelimiter);let r;if(t.length>2)return n;if(/:/.test(t[0])?r=t[0]:(n.date=t[0],r=t[1],k.timeZoneDelimiter.test(n.date)&&(n.date=e.split(k.timeZoneDelimiter)[0],r=e.substr(n.date.length,e.length))),r){const e=k.timezone.exec(r);e?(n.time=r.replace(e[1],""),n.timezone=e[1]):n.time=r}return n}(e);let a;if(o.date){const e=function(e,n){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=e.match(t);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}(o.date,r);a=function(e,n){if(null===n)return new Date(NaN);const t=e.match(w);if(!t)return new Date(NaN);const r=!!t[4],o=j(t[1]),a=j(t[2])-1,i=j(t[3]),c=j(t[4]),s=j(t[5])-1;if(r)return function(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}(0,c,s)?function(e,n,t){const r=new Date(0);r.setUTCFullYear(e,0,4);const o=7*(n-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(n,c,s):new Date(NaN);{const e=new Date(0);return function(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(I[n]||(L(e)?29:28))}(n,a,i)&&function(e,n){return n>=1&&n<=(L(e)?366:365)}(n,o)?(e.setUTCFullYear(n,a,Math.max(o,i)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!a||isNaN(+a))return t();const i=+a;let c,s=0;if(o.time&&(s=function(e){const n=e.match(S);if(!n)return NaN;const t=T(n[1]),r=T(n[2]),o=T(n[3]);return function(e,n,t){return 24===e?0===n&&0===t:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}(t,r,o)?t*g+r*h+1e3*o:NaN}(o.time),isNaN(s)))return t();if(!o.timezone){const e=new Date(i+s),t=v(0,n?.in);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return c=function(e){if("Z"===e)return 0;const n=e.match(D);if(!n)return 0;const t="+"===n[1]?-1:1,r=parseInt(n[2]),o=n[3]&&parseInt(n[3])||0;return function(e,n){return n>=0&&n<=59}(0,o)?t*(r*g+o*h):NaN}(o.timezone),isNaN(c)?t():v(i+s+c,n?.in)}const k={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},w=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,S=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,D=/^([+-])(\d{2})(?::?(\d{2}))?$/;function j(e){return e?parseInt(e):1}function T(e){return e&&parseFloat(e.replace(",","."))||0}const I=[31,null,31,30,31,30,31,31,30,31,30,31];function L(e){return e%400==0||e%4==0&&e%100!=0}function q(e,n){const t=v(e,n?.in);return t.setHours(0,0,0,0),t}function N(e,n){return function(e,n,t){const[r,o]=function(e,...n){const t=y.bind(null,e||n.find((e=>"object"==typeof e)));return n.map(t)}(t?.in,e,n);return+q(r)==+q(o)}(y(n?.in||e,e),function(e){return y(e,Date.now())}(n?.in||e))}let F={};function Y(){return F}function U(e,n){const t=H("div",{class:"taskItem"});switch(t.dataset.id=n,e.priority){case"low":t.style.backgroundColor="#A8E6A3",t.style.color="#2F4F2F";break;case"medium":t.style.backgroundColor="#FFD54F",t.style.color="#3E2A47";break;case"high":t.style.backgroundColor="#FF8A80",t.style.color="#660000";break;default:t.style.backgroundColor="var(--primary-color)",t.style.color="var(--text-color)"}const r=H("text",{id:"projectTitle"});r.textContent=e.projectName,t.appendChild(r),[{id:"taskItemTitle",label:"Task",value:e.title},{id:"taskItemDesc",label:"Description",value:e.desc},{id:"taskItemDueDate",label:"Due Date",value:e.dueDate},{id:"taskItemPriority",label:"Priority",value:e.priority}].forEach((({id:e,label:n,value:r})=>{const o=H("div",{id:e});r&&""!==r||(r="None provided."),o.textContent=`${n}: ${r}`,t.appendChild(o)}));const o=H("img",{src:E,class:"delete-button"});o.addEventListener("click",(()=>{!function(e){const[n,t]=e.split("-"),r=ne.find((e=>e.name===n));r?r.tasks.splice(t,1):alert(`Project '${n}' not found`),te?te===n?P():console.log(`Selected project '${te}' does not match deleted task's project '${n}'.`):z()}(n)}));const a=H("img",{src:b,class:"edit-button"});a.addEventListener("click",(()=>{!function(e){const[n,t]=e.split("-"),r=ne.find((e=>e.name===n)).tasks[t],o=W(),a=o.querySelector("#title"),i=o.querySelector("#desc"),c=o.querySelector("#dueDate"),s=o.querySelector("#priority");a.value=r.title,i.value=r.desc,c.value=r.dueDate,s.value=r.priority;const A=Z();document.body.appendChild(A),document.body.appendChild(o),J(o,A),o.addEventListener("submit",(e=>{e.preventDefault();const n=G(o);r.title=n.taskTitle,r.desc=n.taskDesc,r.dueDate=n.taskDueDate,r.priority=n.taskPriority,X(o,A),null===te?z():P()})),o.querySelector("#close-button").addEventListener("click",(()=>{X(o,A)}))}(n)}));const i=H("div",{class:"buttons-container"});return i.appendChild(a),i.appendChild(o),t.appendChild(i),t}function P(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");if(t&&n.removeChild(t),e.innerHTML="",te){const t=ae(te),r=H("h3");r.textContent=`${te} Tasks`,n.insertBefore(r,n.firstChild),t.tasks.forEach(((n,t)=>{const r=U(n,`${te}-${t}`);e.appendChild(r)}))}else alert("No project selected. Please select a project.")}function z(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=H("h3");r.textContent="All tasks",n.insertBefore(r,n.firstChild),ne.forEach((n=>{n.tasks.forEach(((t,r)=>{const o=U(t,`${n.name}-${r}`);e.appendChild(o)}))}))}function M(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=H("h3");r.textContent="Tasks due this week",n.insertBefore(r,n.firstChild),function(){let e=[];const n=function(e,n){const t=Y(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=v(e,n?.in),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}(new Date,{weekStartsOn:0}),t=function(e,n){const t=Y(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=v(e,n?.in),a=o.getDay(),i=6+(a<r?-7:0)-(a-r);return o.setDate(o.getDate()+i),o.setHours(23,59,59,999),o}(new Date,{weekStartsOn:0});return ne.forEach((r=>{r.tasks.forEach((r=>{(function(e,n,t){const r=+v(e,t?.in),[o,a]=[+v(n.start,t?.in),+v(n.end,t?.in)].sort(((e,n)=>e-n));return r>=o&&r<=a})(x(r.dueDate),{start:n,end:t})&&e.push(r)}))})),e}().forEach(((n,t)=>{const r=U(n,`${n.projectName}-${t}`);e.appendChild(r)}))}const $=t.p+"5dd0a67532754cd71e51.svg";function H(e,n={}){const t=document.createElement(e);return Object.keys(n).forEach((e=>{t.setAttribute(e,n[e])})),t}function R(e,n,t,r=!1){const o=H("input",{id:e,name:e,type:n,placeholder:t});return r&&(o.required="true"),o}function O(e,n){const t=H("label",{for:e});return t.textContent=n,t}function W(){const e=H("form",{id:"form"}),n=H("img",{src:$,id:"close-button"}),t=O("title","Title: "),r=R("title","text","Enter a title",!0),o=O("desc","Description: "),a=R("desc","text","Enter a description"),i=O("dueDate","Due date: "),c=R("dueDate","date","Enter a due-date",!0),s=O("priority","Priority: "),A=function(){const e=H("select",{id:"priority",name:"priority"});return["None","Low","Medium","High"].forEach((n=>{const t=H("option",{value:n.toLowerCase()});t.textContent=n,e.appendChild(t)})),e}(),l=H("button",{type:"submit"});return l.textContent="Submit",r.addEventListener("input",(()=>{r.value.length>25&&(r.value=r.value.slice(0,25))})),a.addEventListener("input",(()=>{a.value.length>75&&(a.value=a.value.slice(0,75))})),e.append(n,t,r,o,a,i,c,s,A,l),e}function Z(){return H("div",{id:"popup-overlay"})}function J(e,n){e.style.display="flex",e.style.flexDirection="column",n.style.display="block",setTimeout((()=>{e.style.opacity="1",n.style.opacity="1"}),10)}function X(e,n){e.style.opacity="0",setTimeout((()=>{e.style.display="none",n.style.display="none"}),300)}function G(e){const n=e.querySelector("#title"),t=e.querySelector("#desc"),r=e.querySelector("#dueDate"),o=e.querySelector("#priority");return{taskTitle:n.value,taskDesc:t.value,taskDueDate:r.value,taskPriority:o.value}}function Q(e,n,t,r){return{title:e,desc:n,dueDate:t,priority:r,projectName:te}}function V(){const e=document.getElementById("addTaskBtn");te?(e.disabled=!1,e.classList.remove("disabled")):(e.disabled=!0,e.classList.add("disabled"))}const _=t.p+"404df4c353dc7f288dcb.svg",K=t.p+"1c3900177461bf58becc.svg";function ee(){const e=document.getElementById("projectsSidebarContainer");e.innerHTML="",ne.forEach((n=>{document.getElementById("sidebar");const t=document.createElement("div");t.classList.add("project-container");const r=document.createElement("button");r.textContent=n.name,r.addEventListener("click",(()=>{re(n.name),V(),P()}));const o=document.createElement("img");o.src=E,o.classList.add("delete-project-button"),o.style.display="none",t.addEventListener("mouseenter",(()=>{o.style.display="block"})),t.addEventListener("mouseleave",(()=>{o.style.display="none"})),o.addEventListener("click",(()=>{!function(e){if(1===ne.length)return void alert("Must have at least 1 project to add tasks to!");const n=ne.findIndex((n=>n.name===e));n>-1&&(ne.splice(n,1),localStorage.setItem("projects",JSON.stringify(ne)))}(n.name),e.removeChild(t),ee(),re(ne[0].name),P()})),t.appendChild(r),t.appendChild(o),e.appendChild(t)}))}let ne=[],te=null;function re(e){te=e,V()}function oe(e,n){return{id:e,name:n,tasks:[]}}function ae(e){return ne.find((n=>n.name===e))||!1}function ie(e,n){const t=ae(e);t&&(t.tasks.find((e=>e.title===n.title))?alert(`A task with the name "${n.title}" already exists in the project "${e}".`):(t.tasks.push(n),localStorage.setItem("projects",JSON.stringify(ne))))}!function(){const e=localStorage.getItem("projects");if(e&&0!==JSON.parse(e).length){const n=JSON.parse(e);ne.length=0,ne.push(...n),V(),z()}else{const e=oe(1,"Unlisted");ne.push(e),localStorage.setItem("projects",JSON.stringify(ne))}}(),re(ne[0].name),ne[0].tasks.length||(ie("Unlisted",Q("Example Task","I'm an example task!","02/27/2002","none")),ie("Unlisted",Q("Example Low Priority Task","I'm an example task!","02/27/2002","low")),ie("Unlisted",Q("Example Medium Priority Task","I'm an example task!","02/27/2002","medium")),ie("Unlisted",Q("Example High Priority Task","I'm an example task!","02/27/2002","high")),P()),P(),function(){const e=H("div",{class:"website-buttons-container"}),n=H("img",{src:K,class:"dark-light-theme-button"}),t=H("img",{src:_,class:"clear-storage-button"});e.appendChild(n),e.appendChild(t),document.body.classList.add("dark-theme"),n.addEventListener("click",(()=>{document.body.classList.contains("dark-theme")?(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")):(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"))})),t.addEventListener("click",(()=>{J(function(){const e=Z(),n=H("form",{id:"confirmation-form"}),t=H("p");t.textContent="This action will reset all projects and tasks. Are you sure you want to continue?";const r=H("button",{type:"submit"});r.textContent="Continue",r.addEventListener("click",(()=>{localStorage.clear(),X(n,e)}));const o=H("button",{type:"submit"});return o.textContent="Cancel",o.addEventListener("click",(()=>{X(n,e)})),n.appendChild(t),n.appendChild(r),n.appendChild(o),document.body.appendChild(e),document.body.appendChild(n),n}(),Z())})),sidebar.appendChild(e)}(),ee(),function(){const e=W(),n=Z(),t=document.getElementById("content"),r=document.getElementById("addTaskBtn"),o=e.querySelector("button"),a=e.querySelector("#close-button");r.addEventListener("click",(()=>J(e,n))),o.addEventListener("click",(t=>{const r=G(e);if(r&&""!==r.taskTitle.trim()&&""!==r.taskDueDate.trim()){if(r.taskTitle.length>25)return void alert("Task title must be 25 characters or less.");if(r.taskDesc.length>75)return void alert("Task description must be 75 characters or less.");t.preventDefault(),X(e,n),e.querySelector("#title").value="",e.querySelector("#desc").value="",e.querySelector("#dueDate").value="",e.querySelector("#priority").value="none",ie(te,Q(r.taskTitle,r.taskDesc,r.taskDueDate,r.taskPriority)),o=ae(te),console.log(`Tasks for project: ${o.name}`),o.tasks.forEach((e=>{console.log(e)})),P()}var o})),a.addEventListener("click",(()=>{X(e,n),e.querySelector("#title").value="",e.querySelector("#desc").value="",e.querySelector("#dueDate").value="",e.querySelector("#priority").value="none"})),t.append(e,n)}(),function(){const e=function(){const e=H("form",{id:"projectForm"}),n=H("img",{src:$,id:"close-button"}),t=O("projectName","Project name: "),r=R("projectName","text","Enter your project's name",!0),o=H("button",{type:"submit",id:"projectSubmitBtn"});return o.textContent="Submit",r.addEventListener("input",(()=>{r.value.length>20&&(r.value=r.value.slice(0,20))})),e.append(n,t,r,o),e}(),n=Z(),t=document.getElementById("content"),r=document.getElementById("addProjectBtn"),o=e.querySelector("#projectSubmitBtn"),a=e.querySelector("#close-button"),i=e.querySelector("#projectName");r.addEventListener("click",(()=>J(e,n))),o.addEventListener("click",(t=>{t.preventDefault(),function(e){if(e=e.trim(),ne.length>=6)alert("Can only have 6 projects max!");else if(ne.find((n=>n.name===e)))alert("Project with the same name already exists!");else{const n=oe(ne.length+1,e);re(e),ne.push(n),localStorage.setItem("projects",JSON.stringify(ne))}}(function(e){return e.querySelector("#projectName").value}(e)),ee(),X(e,n),i.value="",P()})),a.addEventListener("click",(()=>{X(e,n),i.value=""})),t.append(e,n)}(),function(){const e=document.getElementById("allTasksBtn"),n=document.getElementById("todayBtn"),t=document.getElementById("thisWeekBtn"),r=document.getElementById("importantBtn");e.addEventListener("click",(()=>{re(null),z()})),n.addEventListener("click",(()=>{re(null),function(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=H("h3");r.textContent="Tasks due today",n.insertBefore(r,n.firstChild),function(){let e=[];return ne.forEach((n=>{n.tasks.forEach((n=>{N(x(n.dueDate))&&e.push(n)}))})),e}().forEach(((n,t)=>{const r=U(n,`${n.projectName}-${t}`);e.appendChild(r)}))}()})),t.addEventListener("click",(()=>{re(null),M()})),r.addEventListener("click",(()=>{re(null),function(){const e=document.getElementById("tasksContainer"),n=document.getElementById("content"),t=n.querySelector("h3");t&&n.removeChild(t),e.innerHTML="";const r=H("h3");r.textContent="Tasks with High priority",n.insertBefore(r,n.firstChild),function(){let e=[];return ne.forEach((n=>{n.tasks.forEach((n=>{"high"===n.priority&&e.push(n)}))})),e}().forEach(((n,t)=>{const r=U(n,`${n.projectName}-${t}`);e.appendChild(r)}))}()}))}()})();
//# sourceMappingURL=main.js.map