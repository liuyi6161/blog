(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{533:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" mongodb")]),t._v(" "),e("h2",{attrs:{id:"常用命令行查询语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令行查询语句"}},[t._v("#")]),t._v(" 常用命令行查询语句")]),t._v(" "),e("h3",{attrs:{id:"根据数组字段长度查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据数组字段长度查询"}},[t._v("#")]),t._v(" 根据数组字段长度查询")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v('db.data.find({ $where: "this.num.length < 3" })')]),t._v("，语法灵活，但是速度比较慢")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('db.data.find({ "num.2": {$exists:0} })')]),t._v("，数组大小小于3，就意味着num[2]不存在")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('db.data.find({ "num.3": {$exists:1} })')]),t._v("，要求数组大小大于3")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);