!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);(t=>{let e=document.getElementById("content");const n=t=>{t.tag||div;let e=document.createElement(t.tag);return t.class&&e.classList.add(t.class),t.text&&(e.innerText=t.text),t.id&&(e.id=t.id),e},r=()=>{let t=n({tag:"div",id:"app-window"}),e=(()=>{let t=n({tag:"div",id:"task-window"}),e=n({tag:"div",class:"title",text:"tasks"}),r=n({tag:"div",id:"task-list",text:"tasks here "});return t.appendChild(e),t.appendChild(r),t})(),r=(()=>{let t=n({tag:"div",id:"project-window"}),e=n({tag:"div",class:"title",text:"projects"}),r=n({tag:"div",id:"project-list",text:"projects here "});return t.appendChild(e),t.appendChild(r),t})();return t.appendChild(r),t.appendChild(e),t},i=()=>{let t=(()=>{let t=n({tag:"header"}),e=n({tag:"p",id:"title",text:"to.Do"});n({tag:"p",id:"subtitle",text:'"must do it"'});return t.appendChild(e),t})(),i=r();e.appendChild(t),e.appendChild(i)},s=()=>{i()};s()})();const r=()=>{let t=[];const e=()=>t.length;return{addToList:(e,n)=>{if(e.getType()!=n)throw`Item cannot be added to a ${n} list`;t.push(e)},show:()=>{for(let n=0;n<e();n++)t[n].showItem()},len:e}},i=()=>{let t={type:"default",name:"untitled"};const e=["Project","Task"],n=e=>{t.name=e};return{setType:n=>{e.includes(n)?t.type=n:throws`${n} is invalid type`},getType:()=>t.type,getName:()=>t.name,setName:n,setList:e=>{t.list=e},getList:e=>t.list,_init:t=>{n(t.name)},addTask:e=>{if(!t.list)throw"This Project has no list property";t.list.add(e)}}},s=t=>{const{setType:e,getType:n,getName:r,setName:s,_init:a}=i();var d;return d=t,e("Task"),a(d),{getType:n,showItem:t=>{console.log(`Task: ${r()}`)}}},a=t=>{const{setType:e,getType:n,setName:s,getName:a,addTask:d,setList:o,getList:l,_init:p}=i();var u;return u=t,e("Project"),p(u),o((()=>{const{addToList:t,show:e,len:n}=r();return{add:e=>{t(e,"Task")},showList:()=>{e()},len:n}})()),{showItem:t=>{console.log(`Project: ${a()}`),l().showList()},getType:n,addTask:d}};(()=>{let t={};const e=()=>{t=n()},n=()=>{let t=(()=>{const{addToList:t,show:e}=r();return{add:e=>{t(e,"Project")},showList:()=>{e()}}})(),e=a({name:"Accept/Enjoy Life as it Arrives"});e.addTask(s({name:"Drink water"})),e.addTask(s({name:"Meditate"})),t.add(e),t.showList()};return{run:()=>{e()}}})().run()}]);