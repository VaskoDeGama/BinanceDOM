(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ad8cea4"],{"13d5":function(t,e,r){"use strict";var n=r("23e7"),a=r("d58f").left,o=r("a640"),i=r("ae40"),c=o("reduce"),s=i("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!s},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("17c2"),i=r("9112");for(var c in a){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=r("ae40"),i=a("forEach"),c=o("forEach");t.exports=i&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},a016:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"diff-list"},[r("div",{staticClass:"diff-list__select-symbol"},[r("h3",{staticClass:"diff-list__title"},[t._v("Current symbol: "+t._s(t.currentSymbol)+" ")]),r("label",{attrs:{for:"symbolSelect"}}),r("select",{directives:[{name:"model",rawName:"v-model",value:t.currentSymbol,expression:"currentSymbol"}],staticClass:"diff-list__select",attrs:{id:"symbolSelect"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentSymbol=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"disabled",selected:"selected"}},[t._v("Choose a symbol")]),t._l(t.options,(function(e,n){return r("option",{key:n,staticClass:"select__option"},[t._v(t._s(e))])}))],2)]),r("div",{staticClass:"diff-list__event-log"},[r("h3",{staticClass:"diff-list__title"},[t._v("Even Diff log:")]),r("div",{staticClass:"diff-list__log-container"},[t.logs.length>0?r("ul",{staticClass:"diff-list__event-container"},t._l(t.logs,(function(e,n){return r("li",{key:"log-"+n},[r("p",[t._v("Time Stamp: "),r("span",[t._v(t._s(e.date))]),t._v(" Symbol: "),r("span",[t._v(t._s(t.currentSymbol))])]),r("p",[t._v(" Ask: avgPRICE: "),r("span",[t._v(t._s(e.ask.avgPrice))]),t._v(" avgAmount: "),r("span",[t._v(t._s(e.ask.avgAmount))]),t._v(" changes: "),r("span",[t._v(t._s(e.ask.changeCount))])]),r("p",[t._v(" Bid: avgPRICE: "),r("span",[t._v(t._s(e.bid.avgPrice))]),t._v(" avgAmount: "),r("span",[t._v(t._s(e.bid.avgAmount))]),t._v(" changes: "),r("span",[t._v(t._s(e.ask.changeCount))])])])})),0):r("span",[t._v("There are no logs yet")])])])])},a=[];r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r("13d5");function s(t){if(Array.isArray(t))return t}r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function u(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)if(r.push(i.value),e&&r.length===e)break}catch(s){a=!0,o=s}finally{try{n||null==c["return"]||c["return"]()}finally{if(a)throw o}}return r}}var l=r("06c5");function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){return s(t)||u(t,e)||Object(l["a"])(t,e)||f()}var b=function(t){return new Intl.DateTimeFormat("ru",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(t)},v=function(t){return new Intl.NumberFormat("ru-RU",{style:"decimal",maximumFractionDigits:"3"}).format(t)},p=function(t){var e=t.length,r=t.reduce((function(t,e){var r=d(e,2),n=r[0],a=r[1];return{price:t.price+ +n,amount:t.amount+ +a}}),{price:0,amount:0});return{avgPrice:v(r.price/e),avgAmount:v(r.amount/e),changeCount:e}},m={name:"DiffList",data:function(){return{options:["BTCUSDT","BNBBTC","ETHBTC"],currentSymbol:"BTCUSDT",logs:[]}},mounted:function(){var t=this;this.$bus.$on("diff",(function(e){var r=e.asksAdd,n=e.bidsAdd,a=e.type,o=p(r),i=p(n),s={ask:c({},o),bid:c({},i),type:a,date:b(Date.now())};t.logs.push(s)}))},watch:{currentSymbol:function(t){this.$bus.$emit("changeSymbol",{symbol:t,type:"changeSymbol"})}}},y=m,h=r("2877"),g=Object(h["a"])(y,n,a,!1,null,null,null);e["default"]=g.exports},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),o=r("df75"),i=r("d039"),c=i((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(a(t))}})},d58f:function(t,e,r){var n=r("1c0b"),a=r("7b0b"),o=r("44ad"),i=r("50c4"),c=function(t){return function(e,r,c,s){n(r);var u=a(e),l=o(u),f=i(u.length),d=t?f-1:0,b=t?-1:1;if(c<2)while(1){if(d in l){s=l[d],d+=b;break}if(d+=b,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=b)d in l&&(s=r(s,l[d],d,u));return s}};t.exports={left:c(!1),right:c(!0)}},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),i=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),a=c.f,u=o(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),i=r("06cf").f,c=r("83ab"),s=a((function(){i(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})}}]);
//# sourceMappingURL=chunk-7ad8cea4.7b5a589c.js.map