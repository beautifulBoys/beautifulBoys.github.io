(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{HKUZ:function(M,l,e){"use strict";var s=e("jrin"),i=e("k1fw"),o=e("tJVT"),a=e("q1tI"),O=e.n(a),_=e("gL5p"),r=e("nKUr"),f=e.n(r);function d(t,c){var n;Object(a.useImperativeHandle)(c,function(){return{getValues:v,setValues:g}});var P=Object(a.useState)(),m=Object(o.a)(P,2),j=m[0],E=m[1];Object(a.useEffect)(function(){E(t.value)},[t.value]);function D(u,b){t.onChange&&t.onChange(u),E(u)}function v(u){return j}function g(u){E(u)}return Object(r.jsx)("div",{style:Object(i.a)({height:"100%",border:"1px solid #eeeeee"},t.style),children:Object(r.jsx)(_.a,{language:t.language||"javascript",theme:"vs",value:j,options:(n={selectOnLineNumbers:!0,glyphMargin:!0,renderWhitespace:!0,minimap:{enabled:!1}},Object(s.a)(n,"glyphMargin",!1),Object(s.a)(n,"scrollBeyondLastLine",!1),Object(s.a)(n,"folding",!1),Object(s.a)(n,"roundedSelection",!1),n),onChange:D})})}l.a=Object(a.forwardRef)(d)},ZATK:function(M,l,e){"use strict";e.r(l);var s=e("+L6B"),i=e("2/Rp"),o=e("q1tI"),a=e.n(o),O=e("HKUZ"),_=e("nKUr"),r=e.n(_);function f(){var d=Object(o.useRef)();Object(o.useEffect)(function(){},[]);function t(){var c=d.current.getValues();console.log(c)}return Object(_.jsxs)("div",{children:[Object(_.jsx)(i.a,{onClick:function(n){return t()},children:"\u5185\u5BB9"}),Object(_.jsx)("div",{style:{width:300,height:500},children:Object(_.jsx)(O.a,{ref:d})})]})}l.default=f}}]);