(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"15/o":function(L,T,i){},AOa7:function(L,T,i){},"BGR+":function(L,T,i){"use strict";function G(Q,j){for(var N=Object.assign({},Q),D=0;D<j.length;D+=1){var K=j[D];delete N[K]}return N}T.a=G},DnfT:function(L,T,i){},FRQA:function(L,T,i){"use strict";var G=i("GNNt"),Q=i("wEI+"),j=i("DnfT"),N=i.n(j),D=i("q1tI"),K=i.n(D),k=i("TSYQ"),q=i.n(k),ae=i("jYQm"),l=function(w){var A=Object(D.useContext)(ae.a),ee=w.children,Y=w.contentWidth,H=w.className,_=w.style,u=Object(D.useContext)(Q.a.ConfigContext),d=u.getPrefixCls,h=w.prefixCls||d("pro"),g=Y||A.contentWidth,x="".concat(h,"-grid-content");return K.a.createElement("div",{className:q()(x,H,{wide:g==="Fixed"}),style:_},K.a.createElement("div",{className:"".concat(h,"-grid-content-children")},ee))};T.a=l},"YV/h":function(L,T,i){},jRje:function(L,T,i){"use strict";var G=i("GNNt"),Q=i("wEI+"),j=i("q1tI"),N=i.n(j),D=i("TSYQ"),K=i.n(D),k=i("BGR+"),q=i("rsCp"),ae=i.n(q),l=i("jYQm");function y(){return y=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var h=arguments[d];for(var g in h)Object.prototype.hasOwnProperty.call(h,g)&&(u[g]=h[g])}return u},y.apply(this,arguments)}function w(u,d){var h=Object.keys(u);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(u);d&&(g=g.filter(function(x){return Object.getOwnPropertyDescriptor(u,x).enumerable})),h.push.apply(h,g)}return h}function A(u){for(var d=1;d<arguments.length;d++){var h=arguments[d]!=null?arguments[d]:{};d%2?w(Object(h),!0).forEach(function(g){ee(u,g,h[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(h)):w(Object(h)).forEach(function(g){Object.defineProperty(u,g,Object.getOwnPropertyDescriptor(h,g))})}return u}function ee(u,d,h){return d in u?Object.defineProperty(u,d,{value:h,enumerable:!0,configurable:!0,writable:!0}):u[d]=h,u}function Y(u,d){if(u==null)return{};var h=H(u,d),g,x;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(u);for(x=0;x<B.length;x++)g=B[x],!(d.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,g)||(h[g]=u[g]))}return h}function H(u,d){if(u==null)return{};var h={},g=Object.keys(u),x,B;for(B=0;B<g.length;B++)x=g[B],!(d.indexOf(x)>=0)&&(h[x]=u[x]);return h}var _=function(d){var h=d.children,g=d.className,x=d.extra,B=d.style,te=d.renderContent,ne=Y(d,["children","className","extra","style","renderContent"]),z=Object(j.useContext)(Q.a.ConfigContext),ue=z.getPrefixCls,oe=d.prefixCls||ue("pro"),J="".concat(oe,"-footer-bar"),C=Object(j.useContext)(l.a),ie=Object(j.useMemo)(function(){var S=C.hasSiderMenu,ce=C.isMobile,se=C.siderWidth;if(!!S)return se?ce?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[C.collapsed,C.hasSiderMenu,C.isMobile,C.siderWidth]),W=N.a.createElement(N.a.Fragment,null,N.a.createElement("div",{className:"".concat(J,"-left")},x),N.a.createElement("div",{className:"".concat(J,"-right")},h));return Object(j.useEffect)(function(){return!C||!(C==null?void 0:C.setHasFooterToolbar)?function(){}:(C==null||C.setHasFooterToolbar(!0),function(){var S;C==null||(S=C.setHasFooterToolbar)===null||S===void 0||S.call(C,!1)})},[]),N.a.createElement("div",y({className:K()(g,"".concat(J)),style:A({width:ie},B)},Object(k.a)(ne,["prefixCls"])),te?te(A(A(A({},d),C),{},{leftWidth:ie}),W):W)};T.a=_},jYQm:function(L,T,i){"use strict";var G=i("q1tI"),Q=i.n(G),j=Object(G.createContext)({});T.a=j},rsCp:function(L,T,i){},tMyG:function(L,T,i){"use strict";var G=i("cIOH"),Q=i("15/o"),j=i("wx14"),N=i("rePB"),D=i("1OyB"),K=i("vuIU"),k=i("Ji7U"),q=i("LK+K"),ae=i("U8pU"),l=i("q1tI"),y=i.n(l),w=i("TSYQ"),A=i.n(w),ee=i("bT9E"),Y=i("6ner"),H=i("H84U"),_=i("KQm4"),u=i("wgJM");function d(n){var e,r=function(o){return function(){e=null,n.apply(void 0,Object(_.a)(o))}},t=function(){if(e==null){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];e=Object(u.a)(r(s))}};return t.cancel=function(){return u.a.cancel(e)},t}function h(){return function(e,r,t){var a=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(r))return a;var c=d(a.bind(this));return o=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var g=i("zT1h");function x(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function B(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function te(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ne=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],z=[];function ue(){return z}function oe(n,e){if(!!n){var r=z.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},z.push(r),ne.forEach(function(t){r.eventHandlers[t]=Object(g.a)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function J(n){var e=z.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(z=z.filter(function(r){return r!==e}),ne.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var C=function(n,e,r,t){var a=arguments.length,o=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,s;if((typeof Reflect=="undefined"?"undefined":Object(ae.a)(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,r,t);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(o=(a<3?s(o):a>3?s(e,r,o):s(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};function ie(){return typeof window!="undefined"?window:null}var W;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(W||(W={}));var S=function(n){Object(k.a)(r,n);var e=Object(q.a)(r);function r(){var t;return Object(D.a)(this,r),t=e.apply(this,arguments),t.state={status:W.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,o=t.props.offsetTop;return a===void 0&&o===void 0&&(o=0),o},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,o=a.status,s=a.lastAffix,c=t.props.onChange,f=t.getTargetFunc();if(!(o!==W.Prepare||!t.fixedNode||!t.placeholderNode||!f)){var v=t.getOffsetTop(),p=t.getOffsetBottom(),P=f();if(!!P){var m={status:W.None},O=x(P),E=x(t.placeholderNode),b=B(E,O,v),U=te(E,O,p);b!==void 0?(m.affixStyle={position:"fixed",top:b,width:E.width,height:E.height},m.placeholderStyle={width:E.width,height:E.height}):U!==void 0&&(m.affixStyle={position:"fixed",bottom:U,width:E.width,height:E.height},m.placeholderStyle={width:E.width,height:E.height}),m.lastAffix=!!m.affixStyle,c&&s!==m.lastAffix&&c(m.lastAffix),t.setState(m)}}},t.prepareMeasure=function(){if(t.setState({status:W.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,o=t.state,s=o.affixStyle,c=o.placeholderStyle,f=t.props,v=f.prefixCls,p=f.children,P=A()(Object(N.a)({},a("affix",v),s)),m=Object(ee.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return l.createElement(Y.a,{onResize:function(){t.updatePosition()}},l.createElement("div",Object(j.a)({},m,{ref:t.savePlaceholderNode}),s&&l.createElement("div",{style:c,"aria-hidden":"true"}),l.createElement("div",{className:P,ref:t.saveFixedNode,style:s},l.createElement(Y.a,{onResize:function(){t.updatePosition()}},p))))},t}return Object(K.a)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:a||ie}},{key:"componentDidMount",value:function(){var a=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){oe(o(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var o=this.state.prevTarget,s=this.getTargetFunc(),c=null;s&&(c=s()||null),o!==c&&(J(this),c&&(oe(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),J(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),o=this.state.affixStyle;if(a&&o){var s=this.getOffsetTop(),c=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var v=x(f),p=x(this.placeholderNode),P=B(p,v,s),m=te(p,v,c);if(P!==void 0&&o.top===P||m!==void 0&&o.bottom===m)return}}this.prepareMeasure()}}]),r}(l.Component);S.contextType=H.b,C([h()],S.prototype,"updatePosition",null),C([h()],S.prototype,"lazyUpdatePosition",null);var ce=S,se=i("GNNt"),xe=i("wEI+"),ut=i("YV/h"),vt=i("AOa7"),mt=i("lUTK"),ht=i("qVdP"),gt=i("Telt"),je=i("ODXe"),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ne=Te,ve=i("6VBw"),me=function(e,r){return l.createElement(ve.a,Object.assign({},e,{ref:r,icon:Ne}))};me.displayName="ArrowLeftOutlined";var Re=l.forwardRef(me),Be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},De=Be,he=function(e,r){return l.createElement(ve.a,Object.assign({},e,{ref:r,icon:De}))};he.displayName="ArrowRightOutlined";var Ae=l.forwardRef(he),Me=i("Zm9Q"),Ie=i("8Skl"),Le=i("XBQK"),we=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},ge=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.children,s=e.overlay,c=e.dropdownProps,f=we(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=l.useContext(H.b),p=v.getPrefixCls,P=p("breadcrumb",r),m=function(b){return s?l.createElement(Le.a,Object(j.a)({overlay:s,placement:"bottomCenter"},c),l.createElement("span",{className:"".concat(P,"-overlay-link")},b,l.createElement(Ie.a,null))):b},O;return"href"in f?O=l.createElement("a",Object(j.a)({className:"".concat(P,"-link")},f),o):O=l.createElement("span",Object(j.a)({className:"".concat(P,"-link")},f),o),O=m(O),o?l.createElement("span",null,O,a&&a!==""&&l.createElement("span",{className:"".concat(P,"-separator")},a)):null};ge.__ANT_BREADCRUMB_ITEM=!0;var pe=ge,Oe=function(e){var r=e.children,t=l.useContext(H.b),a=t.getPrefixCls,o=a("breadcrumb");return l.createElement("span",{className:"".concat(o,"-separator")},r||"/")};Oe.__ANT_BREADCRUMB_SEPARATOR=!0;var Se=Oe,be=i("BvKs"),Ue=i("uaoM"),He=i("0n0R"),We=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function Fe(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,o){return e[o]||a});return t}function Ke(n,e,r,t){var a=r.indexOf(n)===r.length-1,o=Fe(n,e);return a?l.createElement("span",null,o):l.createElement("a",{href:"#/".concat(t.join("/"))},o)}var Pe=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},ze=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=Object(_.a)(e),o=Pe(r,t);return o&&a.push(o),a},fe=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.style,s=e.className,c=e.routes,f=e.children,v=e.itemRender,p=v===void 0?Ke:v,P=e.params,m=P===void 0?{}:P,O=We(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),E=l.useContext(H.b),b=E.getPrefixCls,U=E.direction,I,le=b("breadcrumb",r);if(c&&c.length>0){var V=[];I=c.map(function(R){var $=Pe(R.path,m);$&&V.push($);var re;return R.children&&R.children.length&&(re=l.createElement(be.a,null,R.children.map(function(X){return l.createElement(be.a.Item,{key:X.path||X.breadcrumbName},p(X,m,c,ze(V,X.path,m)))}))),l.createElement(pe,{overlay:re,separator:a,key:$||R.breadcrumbName},p(R,m,c,V))})}else f&&(I=Object(Me.a)(f).map(function(R,$){return R&&(Object(Ue.a)(R.type&&(R.type.__ANT_BREADCRUMB_ITEM===!0||R.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(He.a)(R,{separator:a,key:$}))}));var F=A()(le,Object(N.a)({},"".concat(le,"-rtl"),U==="rtl"),s);return l.createElement("div",Object(j.a)({className:F,style:o},O),I)};fe.Item=pe,fe.Separator=Se;var $e=fe,Ge=$e,Qe=i("Tckk"),Ye=i("gDlH"),Ve=i("YMnH"),_e=function(e,r,t){return!r||!t?null:l.createElement(Ve.a,{componentName:"PageHeader"},function(a){var o=a.back;return l.createElement("div",{className:"".concat(e,"-back")},l.createElement(Ye.a,{onClick:function(c){t&&t(c)},className:"".concat(e,"-back-button"),"aria-label":o},r))})},Je=function(e){return l.createElement(Ge,e)},Ze=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?l.createElement(Ae,null):l.createElement(Re,null)},Xe=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,o=r.avatar,s=r.subTitle,c=r.tags,f=r.extra,v=r.onBack,p="".concat(e,"-heading"),P=a||s||c||f;if(!P)return null;var m=Ze(r,t),O=_e(e,m,v),E=O||o||P;return l.createElement("div",{className:p},E&&l.createElement("div",{className:"".concat(p,"-left")},O,o&&l.createElement(Qe.a,o),a&&l.createElement("span",{className:"".concat(p,"-title"),title:typeof a=="string"?a:void 0},a),s&&l.createElement("span",{className:"".concat(p,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&l.createElement("span",{className:"".concat(p,"-tags")},c)),f&&l.createElement("span",{className:"".concat(p,"-extra")},f))},ke=function(e,r){return r?l.createElement("div",{className:"".concat(e,"-footer")},r):null},qe=function(e,r){return l.createElement("div",{className:"".concat(e,"-content")},r)},et=function(e){var r=l.useState(!1),t=Object(je.a)(r,2),a=t[0],o=t[1],s=function(f){var v=f.width;o(v<768)};return l.createElement(H.a,null,function(c){var f,v=c.getPrefixCls,p=c.pageHeader,P=c.direction,m=e.prefixCls,O=e.style,E=e.footer,b=e.children,U=e.breadcrumb,I=e.breadcrumbRender,le=e.className,V=!0;"ghost"in e?V=e.ghost:p&&"ghost"in p&&(V=p.ghost);var F=v("page-header",m),R=function(){var de;return((de=U)===null||de===void 0?void 0:de.routes)?Je(U):null},$=R(),re=(I==null?void 0:I(e,$))||$,X=A()(F,le,(f={"has-breadcrumb":re,"has-footer":E},Object(N.a)(f,"".concat(F,"-ghost"),V),Object(N.a)(f,"".concat(F,"-rtl"),P==="rtl"),Object(N.a)(f,"".concat(F,"-compact"),a),f));return l.createElement(Y.a,{onResize:s},l.createElement("div",{className:X,style:O},re,Xe(F,e,P),b&&qe(F,b),ke(F,E)))})},tt=et,pt=i("Znn+"),Ee=i("ZTPi"),rt=i("jYQm"),at=i("FRQA"),nt=i("jRje"),Ot=i("u/V1"),ot=i("95SA");function ye(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function M(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(r),!0).forEach(function(t){Ce(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Ce(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function it(n,e){if(n==null)return{};var r=lt(n,e),t,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function lt(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,o;for(o=0;o<t.length;o++)a=t[o],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function Z(){return Z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},Z.apply(this,arguments)}var ct=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,o=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return r&&r.length?y.a.createElement(Ee.a,Z({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(v){a&&a(v)},tabBarExtraContent:o},s),r.map(function(f,v){return y.a.createElement(Ee.a.TabPane,Z({},f,{tab:f.tab,key:f.key||v}))})):null},st=function(e,r,t){return!e&&!r?null:y.a.createElement("div",{className:"".concat(t,"-detail")},y.a.createElement("div",{className:"".concat(t,"-main")},y.a.createElement("div",{className:"".concat(t,"-row")},e&&y.a.createElement("div",{className:"".concat(t,"-content")},e),r&&y.a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},ft=function(e,r){var t,a,o,s=e.title,c=e.content,f=e.pageHeaderRender,v=e.header,p=e.extraContent,P=e.style,m=e.prefixCls,O=it(e,["title","content","pageHeaderRender","header","extraContent","style","prefixCls"]);if(f===!1)return null;if(f)return f(M(M({},e),r));var E=s;!s&&s!==!1&&(E=r.title);var b=M(M(M({},r),{},{title:E},O),{},{footer:ct(M(M({},O),{},{prefixedClassName:r.prefixedClassName}))},v);return!b.title&&!b.subTitle&&!((t=b.breadcrumb)===null||t===void 0?void 0:t.itemRender)&&!((a=b.breadcrumb)===null||a===void 0||(o=a.routes)===null||o===void 0?void 0:o.length)&&!b.extra&&!b.tags&&!b.footer&&!b.avatar&&!b.backIcon&&!c&&!p?null:y.a.createElement(tt,Z({},b,{breadcrumb:M(M({},b.breadcrumb),b.breadcrumbProps),prefixCls:m}),(v==null?void 0:v.children)||st(c,p,r.prefixedClassName))},dt=function(e){var r=e.children,t=e.loading,a=e.style,o=e.footer,s=e.affixProps,c=e.ghost,f=e.fixedHeader,v=Object(l.useContext)(rt.a),p=Object(l.useContext)(xe.a.ConfigContext),P=p.getPrefixCls,m=e.prefixCls||P("pro"),O="".concat(m,"-page-container"),E=A()(O,e.className,Ce({},"".concat(m,"-page-container-ghost"),c)),b=r?y.a.createElement("div",null,y.a.createElement("div",{className:"".concat(O,"-children-content")},r),v.hasFooterToolbar&&y.a.createElement("div",{style:{height:48,marginTop:24}})):null,U=ft(e,M(M({},v),{},{prefixCls:void 0,prefixedClassName:O})),I=U?y.a.createElement("div",{className:"".concat(O,"-warp")},U):null;return y.a.createElement("div",{style:a,className:E},f&&I?y.a.createElement(ce,Z({offsetTop:v.hasHeader&&v.fixedHeader?v.headerHeight:0},s),I):I,y.a.createElement(at.a,null,t?y.a.createElement(ot.a,null):b),o&&y.a.createElement(nt.a,{prefixCls:m},o))},bt=T.a=dt},"u/V1":function(L,T,i){}}]);