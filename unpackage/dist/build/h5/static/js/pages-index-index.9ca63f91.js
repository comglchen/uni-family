(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"038c":function(t,e,n){"use strict";var a=n("78f7"),i=n.n(a);i.a},"55c0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-03a1f286]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-03a1f286]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-03a1f286]{display:flex;justify-content:center}.title[data-v-03a1f286]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},"67ba":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("search")])],1)],1)},i=[]},"6c28":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4");var a={data:function(){return{context:[],title:"Hello"}},onLoad:function(){},methods:{search:function(){var t=this;console.log("searching....."),uni.request({url:"/getData",success:function(e){t.context=e.data,console.log("success...",e.data),uni.navigateTo({url:"/pages/family/family/family?context="+JSON.stringify(t.context)})}})}}};e.default=a},"78f7":function(t,e,n){var a=n("55c0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("243d845c",a,!0,{sourceMap:!1,shadowMode:!1})},b35c:function(t,e,n){"use strict";n.r(e);var a=n("67ba"),i=n("f7de");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("038c");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"03a1f286",null,!1,a["a"],void 0);e["default"]=s.exports},f7de:function(t,e,n){"use strict";n.r(e);var a=n("6c28"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a}}]);