(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20734a"],{a016:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"diff-list"},[s("div",{staticClass:"diff-list__select-symbol"},[s("h3",{staticClass:"diff-list__title"},[t._v("Current symbol: "+t._s(t.currentSymbol)+" ")]),s("label",{attrs:{for:"symbolSelect"}}),s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentSymbol,expression:"currentSymbol"}],staticClass:"diff-list__select",attrs:{id:"symbolSelect"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentSymbol=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"disabled",selected:"selected"}},[t._v("Choose a symbol")]),t._l(t.options,(function(e,l){return s("option",{key:l,staticClass:"select__option"},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"diff-list__event-log"},[s("h3",{staticClass:"diff-list__title"},[t._v("Even Diff log:")]),s("div",{staticClass:"diff-list__log-container"},[t.logs.length>0?s("ul",{staticClass:"diff-list__event-container"},t._l(t.logs,(function(e,l){return s("li",{key:"log-"+l},[s("p",[t._v("Time Stamp: "),s("span",[t._v(t._s(e.date))]),t._v(" Symbol: "),s("span",[t._v(t._s(e.symbol))])]),s("p",[t._v(" Ask: PRICE diff: "),s("span",[t._v(t._s(e.ask.avgPrice))])]),s("p",[t._v(" Bid: PRICE diff: "),s("span",[t._v(t._s(e.bid.avgPrice))])])])})),0):s("span",[t._v("There are no logs yet")])])])])},i=[],a=s("5530"),n=s("ed08"),o={name:"DiffList",data:function(){return{options:["BTCUSDT","BNBBTC","ETHBTC"],currentSymbol:"BTCUSDT",logs:[]}},mounted:function(){var t=this;this.$bus.$on("diff",(function(e){var s=e.asksAdd,l=e.bidsAdd,i=e.type,o=e.symbol,c=Object(n["a"])(s),r=Object(n["a"])(l),d={symbol:o,ask:Object(a["a"])({},c),bid:Object(a["a"])({},r),type:i,date:Object(n["b"])(Date.now())};t.logs.push(d)}))},watch:{currentSymbol:function(t){this.$bus.$emit("changeSymbol",{symbol:t,type:"changeSymbol"})}}},c=o,r=s("2877"),d=Object(r["a"])(c,l,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20734a.c0d87c72.js.map