(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{L9jI:function(U,z,O){"use strict";U.exports="/__open-stack-frame-in-editor"},Y7cU:function(U,z,O){"use strict";var Y=O("tJVT"),S=O("q1tI"),I=O.n(S);/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var j=typeof navigator!="undefined"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function x(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function D(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function W(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function B(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}for(var k={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":j?173:189,"=":j?61:187,";":j?59:186,"'":222,"[":219,"]":221,"\\":220},N={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},T={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},c={16:!1,18:!1,17:!1,91:!1},v={},A=1;A<20;A++)k["f".concat(A)]=111+A;var p=[],ne="all",re=[],M=function(e){return k[e.toLowerCase()]||N[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function ie(t){ne=t||"all"}function _(){return ne||"all"}function pe(){return p.slice(0)}function ue(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function ve(t){return typeof t=="string"&&(t=M(t)),p.indexOf(t)!==-1}function he(t,e){var n,r;t||(t=_());for(var i in v)if(Object.prototype.hasOwnProperty.call(v,i))for(n=v[i],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;_()===t&&ie(e||"all")}function ge(t){var e=t.keyCode||t.which||t.charCode,n=p.indexOf(e);if(n>=0&&p.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&p.splice(0,p.length),(e===93||e===224)&&(e=91),e in c){c[e]=!1;for(var r in N)N[r]===e&&(L[r]=!1)}}function me(t){if(!t)Object.keys(v).forEach(function(l){return delete v[l]});else if(Array.isArray(t))t.forEach(function(l){l.key&&$(l)});else if(typeof t=="object")t.key&&$(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),$({key:t,scope:i,method:a,splitKey:"+"})}}var $=function(e){var n=e.key,r=e.scope,i=e.method,a=e.splitKey,l=a===void 0?"+":a,s=W(n);s.forEach(function(y){var f=y.split(l),o=f.length,d=f[o-1],u=d==="*"?"*":M(d);if(!!v[u]){r||(r=_());var h=o>1?D(N,f):[];v[u]=v[u].map(function(b){var P=i?b.method===i:!0;return P&&b.scope===r&&B(b.mods,h)?{}:b})}})};function ae(t,e,n){var r;if(e.scope===n||e.scope==="all"){r=e.mods.length>0;for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(!c[i]&&e.mods.indexOf(+i)>-1||c[i]&&e.mods.indexOf(+i)===-1)&&(r=!1);(e.mods.length===0&&!c[16]&&!c[18]&&!c[17]&&!c[91]||r||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function oe(t){var e=v["*"],n=t.keyCode||t.which||t.charCode;if(!!L.filter.call(this,t)){if((n===93||n===224)&&(n=91),p.indexOf(n)===-1&&n!==229&&p.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(h){var b=T[h];t[h]&&p.indexOf(b)===-1?p.push(b):!t[h]&&p.indexOf(b)>-1?p.splice(p.indexOf(b),1):h==="metaKey"&&t[h]&&p.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(p=p.slice(p.indexOf(b))))}),n in c){c[n]=!0;for(var r in N)N[r]===n&&(L[r]=!0);if(!e)return}for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(c[i]=t[T[i]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(p.indexOf(17)===-1&&p.push(17),p.indexOf(18)===-1&&p.push(18),c[17]=!0,c[18]=!0);var a=_();if(e)for(var l=0;l<e.length;l++)e[l].scope===a&&(t.type==="keydown"&&e[l].keydown||t.type==="keyup"&&e[l].keyup)&&ae(t,e[l],a);if(n in v){for(var s=0;s<v[n].length;s++)if((t.type==="keydown"&&v[n][s].keydown||t.type==="keyup"&&v[n][s].keyup)&&v[n][s].key){for(var y=v[n][s],f=y.splitKey,o=y.key.split(f),d=[],u=0;u<o.length;u++)d.push(M(o[u]));d.sort().join("")===p.sort().join("")&&ae(t,y,a)}}}}function ye(t){return re.indexOf(t)>-1}function L(t,e,n){p=[];var r=W(t),i=[],a="all",l=document,s=0,y=!1,f=!0,o="+";for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(l=e.element),e.keyup&&(y=e.keyup),e.keydown!==void 0&&(f=e.keydown),typeof e.splitKey=="string"&&(o=e.splitKey)),typeof e=="string"&&(a=e);s<r.length;s++)t=r[s].split(o),i=[],t.length>1&&(i=D(N,t)),t=t[t.length-1],t=t==="*"?"*":M(t),t in v||(v[t]=[]),v[t].push({keyup:y,keydown:f,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:o});typeof l!="undefined"&&!ye(l)&&window&&(re.push(l),x(l,"keydown",function(d){oe(d)}),x(window,"focus",function(){p=[]}),x(l,"keyup",function(d){oe(d),ge(d)}))}var J={setScope:ie,getScope:_,deleteScope:he,getPressedKeyCodes:pe,isPressed:ve,filter:ue,unbind:me};for(var Q in J)Object.prototype.hasOwnProperty.call(J,Q)&&(L[Q]=J[Q]);if(typeof window!="undefined"){var be=window.hotkeys;L.noConflict=function(t){return t&&window.hotkeys===L&&(window.hotkeys=be),L},window.hotkeys=L}var le=L,F=new Set;function Ee(t){function e(){n(window)}function n(o){o&&typeof o.addEventListener=="function"&&(o.addEventListener("click",a,!0),o.addEventListener("mousedown",l,!0),o.addEventListener("mouseover",l,!0),o.addEventListener("mouseup",l,!0),o.addEventListener("pointerdown",s,!0),o.addEventListener("pointerover",y,!0),o.addEventListener("pointerup",f,!0))}function r(){i(window),F.forEach(function(o){try{i(o.contentWindow)}catch(d){}}),F=new Set}function i(o){o&&typeof o.removeEventListener=="function"&&(o.removeEventListener("click",a,!0),o.removeEventListener("mousedown",l,!0),o.removeEventListener("mouseover",l,!0),o.removeEventListener("mouseup",l,!0),o.removeEventListener("pointerdown",s,!0),o.removeEventListener("pointerover",y,!0),o.removeEventListener("pointerup",f,!0))}function a(o){var d;o.preventDefault(),o.stopPropagation(),r(),(d=t.onClick)===null||d===void 0||d.call(t,o.target)}function l(o){o.preventDefault(),o.stopPropagation()}function s(o){o.preventDefault(),o.stopPropagation()}function y(o){var d;o.preventDefault(),o.stopPropagation();var u=o.target;if(u.tagName==="IFRAME"){var h=u;try{if(!F.has(h)){var b=h.contentWindow;n(b),F.add(h)}}catch(P){}}(d=t.onPointerOver)===null||d===void 0||d.call(t,o.target)}function f(o){o.preventDefault(),o.stopPropagation()}return e(),r}var Oe=O("33yf"),we=O.n(Oe),Ie=O("L9jI"),Ce=O.n(Ie),xe=O("cr+I"),Ne=O.n(xe),se=function t(e){if(!!(e==null?void 0:e.dataset)){var n=e.dataset,r=n.inspectorLine,i=n.inspectorColumn,a=n.inspectorRelativePath;if(r&&i&&a)return{lineNumber:r,columnNumber:i,relativePath:a};if(e.parentElement)return t(e.parentElement)}},Te=function(e){var n=Object({NODE_ENV:"production"}).PWD;if(!(!e||!n)){var r=e.relativePath,i=e.lineNumber,a=e.columnNumber,l=we.a.join(n,r),s={fileName:l,lineNumber:i,colNumber:a};fetch("".concat(Ce.a,"?").concat(Ne.a.stringify(s)))}},Le=function(e){var n=Object.keys(e).find(function(r){return r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber$")});return n?e[n]:null},Pe=/^(.*?\.Provider|.*?\.Consumer|Anonymous|Trigger|Tooltip|_.*|[a-z].*)$/,fe=function(e){for(var n,r,i,a=e;a;){var l=(r=(n=a.type)===null||n===void 0?void 0:n.displayName)!==null&&r!==void 0?r:(i=a.type)===null||i===void 0?void 0:i.name;if(l&&!Pe.test(l))return a;a=a.return}return null},Se=function(e){var n,r=(n=fe(e))===null||n===void 0?void 0:n.type,i;return typeof(r==null?void 0:r.displayName)=="string"?i=r.displayName:typeof(r==null?void 0:r.name)=="string"&&(i=r.name),i},de=function(e,n){var r=fe(Le(e)),i=Se(r),a=e.nodeName.toLowerCase(),l=i||a,s=n?"<".concat(l,">"):"".concat(a," in <").concat(i,">");return{fiber:r,name:i,title:s}},Ke=O("rAM+"),X=O("fWQN"),Z=O("mtLc");function ce(t,e){return t.getBoundingClientRect()}function Re(t){var e=window.getComputedStyle(t);return{borderLeft:parseInt(e.borderLeftWidth,10),borderRight:parseInt(e.borderRightWidth,10),borderTop:parseInt(e.borderTopWidth,10),borderBottom:parseInt(e.borderBottomWidth,10),marginLeft:parseInt(e.marginLeft,10),marginRight:parseInt(e.marginRight,10),marginTop:parseInt(e.marginTop,10),marginBottom:parseInt(e.marginBottom,10),paddingLeft:parseInt(e.paddingLeft,10),paddingRight:parseInt(e.paddingRight,10),paddingTop:parseInt(e.paddingTop,10),paddingBottom:parseInt(e.paddingBottom,10)}}var je=function(){function t(e,n){Object(X.a)(this,t),this.node=e.createElement("div"),this.border=e.createElement("div"),this.padding=e.createElement("div"),this.content=e.createElement("div"),this.border.style.borderColor=H.border,this.padding.style.borderColor=H.padding,this.content.style.backgroundColor=H.background,Object.assign(this.node.style,{borderColor:H.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),n.appendChild(this.node)}return Object(Z.a)(t,[{key:"remove",value:function(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}},{key:"update",value:function(n,r){q(r,"margin",this.node),q(r,"border",this.border),q(r,"padding",this.padding),Object.assign(this.content.style,{height:"".concat(n.height-r.borderTop-r.borderBottom-r.paddingTop-r.paddingBottom,"px"),width:"".concat(n.width-r.borderLeft-r.borderRight-r.paddingLeft-r.paddingRight,"px")}),Object.assign(this.node.style,{top:"".concat(n.top-r.marginTop,"px"),left:"".concat(n.left-r.marginLeft,"px")})}}]),t}(),De=function(){function t(e,n){Object(X.a)(this,t),this.tip=e.createElement("div"),Object.assign(this.tip.style,{display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"6px 8px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=e.createElement("span"),this.tip.appendChild(this.nameSpan),Object.assign(this.nameSpan.style,{display:"flex",flexDirection:"column",borderRight:"1px solid #aaaaaa",paddingRight:"0.8rem",marginRight:"0.8rem"}),this.titleDiv=e.createElement("div"),this.nameSpan.appendChild(this.titleDiv),Object.assign(this.titleDiv.style,{color:"#ee78e6",fontSize:"16px"}),this.infoDiv=e.createElement("div"),this.nameSpan.appendChild(this.infoDiv),Object.assign(this.infoDiv.style,{color:"#ee78e6",fontSize:"14px"}),this.dimSpan=e.createElement("span"),this.tip.appendChild(this.dimSpan),Object.assign(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",n.appendChild(this.tip)}return Object(Z.a)(t,[{key:"remove",value:function(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}},{key:"updateText",value:function(n,r,i,a){this.titleDiv.textContent=n,this.infoDiv.textContent=r!=null?r:"",this.dimSpan.textContent="".concat(Math.round(i),"px \xD7 ").concat(Math.round(a),"px")}},{key:"updatePosition",value:function(n,r){var i=this.tip.getBoundingClientRect(),a=ke(n,r,{width:i.width,height:i.height});Object.assign(this.tip.style,a.style)}}]),t}(),We=function(){function t(){Object(X.a)(this,t);var e=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=e;var n=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=n;var r=e.document;this.container=r.createElement("div"),this.container.style.zIndex="10000000",this.tip=new De(r,this.container),this.rects=[],this.removeCallback=function(){},r.body.appendChild(this.container)}return Object(Z.a)(t,[{key:"remove",value:function(){this.tip.remove(),this.rects.forEach(function(n){n.remove()}),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.removeCallback()}},{key:"setRemoveCallback",value:function(n){this.removeCallback=n.bind(this)}},{key:"inspect",value:function(n,r,i){for(var a=this,l,s=n.filter(function(w){return w.nodeType===Node.ELEMENT_NODE});this.rects.length>s.length;){var y=this.rects.pop();y==null||y.remove()}if(s.length!==0){for(;this.rects.length<s.length;)this.rects.push(new je(this.window.document,this.container));var f={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(s.forEach(function(w,g){var m=ce(w,a.window),E=Re(w);f.top=Math.min(f.top,m.top-E.marginTop),f.right=Math.max(f.right,m.left+m.width+E.marginRight),f.bottom=Math.max(f.bottom,m.top+m.height+E.marginBottom),f.left=Math.min(f.left,m.left-E.marginLeft);var C=a.rects[g];C.update(m,E)}),!r){r=s[0].nodeName.toLowerCase();var o=s[0],d=(l=o.ownerDocument.defaultView)===null||l===void 0?void 0:l.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(d==null?void 0:d.rendererInterfaces){var u=null,h=Object(Ke.a)(d.rendererInterfaces.values()),b;try{for(h.s();!(b=h.n()).done;){var P=b.value,V=P.getFiberIDForNative(o,!0);if(V!==null){u=P.getDisplayNameForFiberID(V,!0);break}}}catch(w){h.e(w)}finally{h.f()}u&&(r+=" (in ".concat(u,")"))}}this.tip.updateText(r,i,f.right-f.left,f.bottom-f.top);var K=ce(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:f.top,left:f.left,height:f.bottom-f.top,width:f.right-f.left},{top:K.top+this.tipBoundsWindow.scrollY,left:K.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}}]),t}();function ke(t,e,n){var r=Math.max(n.height,20),i=Math.max(n.width,60),a=5,l;t.top+t.height+r<=e.top+e.height?t.top+t.height<e.top+0?l=e.top+a:l=t.top+t.height+a:t.top-r<=e.top+e.height?t.top-r-a<e.top+a?l=e.top+a:l=t.top-r-a:l=e.top+e.height-r-a;var s=t.left+a;return t.left<e.left&&(s=e.left+a),t.left+i>e.left+e.width&&(s=e.left+e.width-i-a),l+="px",s+="px",{style:{top:l,left:s}}}function q(t,e,n){Object.assign(n.style,{borderTopWidth:"".concat(t["".concat(e,"Top")],"px"),borderLeftWidth:"".concat(t["".concat(e,"Left")],"px"),borderRightWidth:"".concat(t["".concat(e,"Right")],"px"),borderBottomWidth:"".concat(t["".concat(e,"Bottom")],"px"),borderStyle:"solid"})}var H={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},_e=["control","shift","command","c"],Ae=function(e){var n=e.keys,r=e.onHoverElement,i=e.onClickElement,a=e.disableLaunchEditor,l=e.children,s=(n!=null?n:_e).join("+"),y=Object(S.useState)(!1),f=Object(Y.a)(y,2),o=f[0],d=f[1],u=Object(S.useRef)(),h=function(g){var m,E=u.current,C=se(g),G=C==null?void 0:C.relativePath,R=de(g,G),ee=R.fiber,te=R.name,Be=R.title;(m=E==null?void 0:E.inspect)===null||m===void 0||m.call(E,[g],Be,G),r==null||r({element:g,fiber:ee,codeInfo:C,name:te})},b=function(g){var m,E=u.current;(m=E==null?void 0:E.remove)===null||m===void 0||m.call(E),u.current=void 0,d(!1);var C=se(g),G=C==null?void 0:C.relativePath,R=de(g,G),ee=R.fiber,te=R.name;a||Te(C),i==null||i({element:g,fiber:ee,codeInfo:C,name:te})},P=function(){var g=new We,m=Ee({onPointerOver:h,onClick:b});g.setRemoveCallback(m),u.current=g,d(!0)},V=function(){var g;(g=u.current)===null||g===void 0||g.remove(),d(!1)},K=function(){return o?V():P()};return Object(S.useEffect)(function(){var w=function(m,E){E.key===s&&K()};return le(s,w),window.__REACT_DEV_INSPECTOR_TOGGLE__=K,function(){le.unbind(s,w),delete window.__REACT_DEV_INSPECTOR_TOGGLE__}},[s,K]),I.a.createElement(I.a.Fragment,null,l)}},"rAM+":function(U,z,O){"use strict";O.d(z,"a",function(){return S});var Y=O("Qw5x");function S(I,j){var x;if(typeof Symbol=="undefined"||I[Symbol.iterator]==null){if(Array.isArray(I)||(x=Object(Y.a)(I))||j&&I&&typeof I.length=="number"){x&&(I=x);var D=0,W=function(){};return{s:W,n:function(){return D>=I.length?{done:!0}:{done:!1,value:I[D++]}},e:function(c){throw c},f:W}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B=!0,k=!1,N;return{s:function(){x=I[Symbol.iterator]()},n:function(){var c=x.next();return B=c.done,c},e:function(c){k=!0,N=c},f:function(){try{!B&&x.return!=null&&x.return()}finally{if(k)throw N}}}}}}]);
