(this.webpackJsonpgears=this.webpackJsonpgears||[]).push([[0],{105:function(e,t,n){},143:function(e,t,n){e.exports=n(268)},152:function(e,t,n){},157:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},228:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),o=n(43),i=n(10),u=(n(269),n(53)),m=(n(150),n(47)),s=n(272),p=n(273),d=n(29),f=(n(152),n(153),n(139)),E=(n(155),n(141)),v=(n(157),function(e){var t=Object(a.useRef)(null);return c.a.createElement("div",{className:"g-code-paper-wrapper"},c.a.createElement("textarea",{ref:t,defaultValue:e.text,className:"g-code-paper-textarea ".concat(e.className)}),e.handleClick&&c.a.createElement(E.a,{onClick:function(){var n=t.current.value;e.handleClick&&e.handleClick(n)}},e.buttonText?e.buttonText:"\u66f4\u65b0\u6570\u636e"))}),g=n(51),h=n.n(g),b=(n(215),n(36)),w=function(e){var t=e.menu,n=e.children,r=Object(a.useState)({x:0,y:0}),l=Object(i.a)(r,2),o=l[0],u=l[1],m=Object(a.useState)(!1),s=Object(i.a)(m,2),p=s[0],d=s[1],f={position:"fixed",left:o.x,top:o.y,backgroundColor:"white",borderRadius:"4px"};return c.a.createElement("div",{onClick:function(e){d(!1),e.stopPropagation()},onContextMenu:function(e){e.preventDefault(),u({x:e.clientX,y:e.clientY}),d(!0)}},n,p&&c.a.createElement("div",{style:f},t),";")},k=(n(216),{w:0,h:0,r:0,s:1,l:0,t:0,centerX:0,centerY:0,wStatic:0,hStatic:0,rotateTime:0});function O(e){var t=e.url,n=e.children,r=void 0===n?null:n,l=e.fixed,o=void 0===l||l,u=e.visible,m=e.onClose,s=Object(a.useState)(k),p=Object(i.a)(s,2),d=p[0],f=p[1],E=Object(a.useState)(k),v=Object(i.a)(E,2),g=v[0],h=v[1],O=Object(a.useRef)(null),j={cursor:"move",position:"absolute",left:"".concat(d.l,"px"),top:"".concat(d.t,"px"),width:"".concat(d.w,"px"),height:"".concat(d.h,"px"),transform:"translate(-50%, -50%) rotate(".concat(d.r,"deg) scale(").concat(d.s,", ").concat(d.s,")")},y=function(){f(g)},C=function(e){y(),m&&m()},x=Object(a.useState)({x:0,y:0}),S=Object(i.a)(x,2),N=S[0],T=S[1],M=Object(a.useState)(!1),I=Object(i.a)(M,2),R=I[0],L=I[1],A=function(e){W(e)},D=Object(a.useState)("drag"),P=Object(i.a)(D,2),Y=P[0],W=P[1],X=c.a.createElement("div",null,c.a.createElement("p",{onClick:function(){return A("rotate")}},"\u81ea\u7531\u65cb\u8f6c"),c.a.createElement("p",{onClick:function(){return A("rotate")}},"\u81ea\u7531\u62d6\u62fd"),c.a.createElement("p",{onClick:void 0},"\u4e0b\u8f7d\u56fe\u7247"));return u?c.a.createElement("div",{className:"g-image-preview-wrapper ".concat(o?"g-fixed-wrapper":""),onClick:o?C:void 0},r,c.a.createElement("div",{className:"g-image-preview-close",onClick:C},"X"),c.a.createElement(w,{menu:X},c.a.createElement("img",{className:"g-image-preview-image ".concat(o?"g-image-preview-image-fixed":""),onMouseDown:function(e){"drag"===Y&&function(e){e.preventDefault(),L(!0),T({x:e.clientX-O.current.offsetLeft,y:e.clientY-O.current.offsetTop})}(e)},onMouseMove:function(e){"drag"===Y&&function(e){if(R){var t=e.clientX-N.x,n=e.clientY-N.y;f((function(e){return Object(b.a)({},e,{l:t,t:n})}))}}(e)},onMouseUp:function(e){"drag"===Y&&L(!1)},onClick:function(e){return e.stopPropagation()},style:j,onLoad:function(){if(O.current){var e=function(e){var t=window.innerWidth/2,n=window.innerHeight/2,a=.9*window.innerWidth,c=.9*window.innerHeight-100,r=e.naturalWidth,l=e.naturalHeight,o=r/a,i=l/c,u=o<1&&i<1?{w:r,h:l}:o>i?{w:a,h:l/o}:{w:r/i,h:c},m={t:n,l:t,w:u.w,h:u.h,wStatic:u.w,hStatic:u.h},s=Object(b.a)({},d,{},m);return f(s),s}(O.current);h(e)}},ref:O,src:t,alt:"\u56fe\u7247",onWheel:function(e){var t=e.deltaY<0?.05:-.05,n=e.clientX-d.l,a=e.clientY-d.t,c=d.w*(1+t),r=d.h*(1+t),l=d.l,o=d.t,i=l-t*n,u=o-t*a;f((function(e){var t=Object(b.a)({},e,{w:c,h:r,l:i,t:u,everRotated:!1});return console.log("origin",e,"current",t),t}))}})),c.a.createElement("div",{className:"g-image-preview-action-bar",onClick:function(e){return e.stopPropagation()}},c.a.createElement("i",{className:"g-action",onClick:function(e){f((function(e){return Object(b.a)({},e,{w:1.05*d.w,h:1.05*d.h})}))}},"+"),c.a.createElement("i",{className:"g-action",onClick:function(e){f((function(e){return Object(b.a)({},e,{w:.95*d.w,h:.95*d.h})}))}},"-"),c.a.createElement("i",{className:"g-action",onClick:function(e){f((function(e){return Object(b.a)({},e,{r:e.r+90,rotateTime:++e.rotateTime})}))}},"ROTATE"),c.a.createElement("i",{className:"g-action",onClick:y},"RESET"))):c.a.createElement(c.a.Fragment,null)}n(105);var j=function(e){var t=e.level,n=e.depth,r=e.route,l=Object(a.useState)(!!window.location.pathname.match(r)),o=Object(i.a)(l,2),u=o[0],m=o[1],s=function(e){return window.location.replace(e)},p=function(e){return console.log(e)};return c.a.createElement("div",{key:t.name,className:function(e){return"g-levels-link ".concat(e?"g-small-font":"")}(n),onClick:function(){return function(e,t){return m((function(e){return!e})),e.static?s(e.route):p(t)}(t,r)},style:u?{color:"#2dc6ad"}:void 0},c.a.createElement("span",{style:{paddingLeft:"".concat(n,"em")}}),t.name)},y=function(e){var t=e.data,n=e.fontSize,a=void 0===n?45:n;return c.a.createElement("div",{className:"g-levels-wrapper"},t.map((function(e){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,l=r?"".concat(r,"/").concat(t.route):t.route;return c.a.createElement("div",{key:t.name},c.a.createElement(j,{level:t,depth:n,route:l,fontSize:a}),t.deep&&t.deep.map((function(t){return e(t,n+1,l)})))}(e)})))},C=[{name:"Pipeline",route:"pipeline"},{name:"Github",route:"https://github.com/",static:!0},{name:"Ground",route:"ground",deep:[{name:"Solid",route:"solid",deep:[{name:"Dust",route:"dust"},{name:"Germ",route:"germ"}]},{name:"Liquid",route:"liquid"}]}],x=(n(217),function(e){return c.a.createElement("span",{className:"g-icon-rotate",onClick:e.handleClick})}),S=(n(218),function(e){var t=e.routes;return c.a.createElement("div",{className:"p-comp"},c.a.createElement(d.c,null,t.map((function(e){return c.a.createElement(H,Object.assign({key:e.key},e))}))))}),N=(n(107),n(30)),T=(n(222),n(140)),M=(n(109),n(15)),I=(n(224),n(133)),R=(n(270),n(138)),L=(n(228),R.a.Meta),A=[{key:"home",icon:"home",title:"\u9996\u9875",exact:!0,component:function(){var e,t=(new Date).getHours(),n=t>=12&&t<=17?"\u4e0b\u5348\u597d, \u8bb0\u5f97\u591a\u8d77\u6765\u52a8\u52a8":t>=17&&t<=23?"\u665a\u4e0a\u597d, \u8981\u591a\u591a\u73a9\u800d~":t>23||t<5?"\u6df1\u591c\u4e86, \u5feb\u4f11\u606f\u5427":"\u65e9\u4e0a\u597d, \u8fce\u63a5\u4e00\u5929\u6700\u597d\u7684\u9633\u5149";return c.a.createElement("div",{className:"p-home"},c.a.createElement("h3",null," \u7ec4\u4ef6\u5e73\u53f0 "),c.a.createElement(N.a,null,c.a.createElement(M.a,{span:20},c.a.createElement(L,{avatar:c.a.createElement(I.a,{style:{marginTop:5},size:"large",src:h.a}),title:"".concat(n),description:"\u7ec4\u4ef6\u76ee\u5f55\u5728\u4fa7\u680f, \u8bf7\u9009\u62e9\u67e5\u770b"})),c.a.createElement(M.a,{style:{marginTop:-13},span:4},c.a.createElement(T.a,{title:"\u5f53\u524d\u7ec4\u4ef6\u603b\u6570",value:null===(e=A[1].routes)||void 0===e?void 0:e.length}))))},inMenu:!0,path:"/"},{key:"comp",icon:"gold",title:"\u7ec4\u4ef6",inMenu:!0,component:S,path:"/comp",routes:[{key:"image-preview",title:"\u56fe\u7247\u9884\u89c8 \xb7 ImagePreview",component:function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),u=o[0],m=o[1],s=Object(a.useState)(""),p=Object(i.a)(s,2),d=p[0],f=p[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("image-preview-url");e&&f(e)}),[]),c.a.createElement("div",null,c.a.createElement("h3",null,"\u7ec4\u4ef6\u540d\u79f0\uff1a\u56fe\u7247\u9884\u89c8\uff08ImagePreview\uff09"),c.a.createElement("h4",null,"\u57fa\u7840\u64cd\u4f5c: \u6eda\u8f6e\u7f29\u653e \u65cb\u8f6c \u91cd\u7f6e"),c.a.createElement("br",null),c.a.createElement("h4",null,"\u793a\u4f8b\u56fe\u7247"),c.a.createElement("img",{src:h.a,alt:"\u56fe\u7247",onClick:function(){r(!0)}}),c.a.createElement(O,{url:h.a,fixed:!0,visible:n,onClose:function(){r(!1)}}),c.a.createElement("br",null),c.a.createElement("h4",null,"\u7f51\u7edc\u56fe\u7247"),c.a.createElement("p",null,"\u5c06\u60f3\u8981\u6d4b\u8bd5\u56fe\u7247\u5730\u5740\u8f93\u5165(\u7a7a\u767d\u4f7f\u7528\u9ed8\u8ba4\u56fe\u7247)"),c.a.createElement(v,{text:d,handleClick:function(e){e&&(f(e),localStorage.setItem("image-preview-url",e)),m(!0)},buttonText:"\u663e\u793a\u9884\u89c8",className:"small-size"}),c.a.createElement(O,{url:d,fixed:!0,visible:u,onClose:function(){m(!1)}}))},path:"/comp/image-preview"},{key:"levels",title:"\u9636\u7ea7\u5bfc\u822a \xb7 Levels",component:function(){var e=Object(a.useState)(C),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"demo-levels-wrapper"},c.a.createElement("h3",null,"\u7ec4\u4ef6\u540d\u79f0\uff1a\u5c42\u7ea7\u5bfc\u822a\uff08Levels\uff09"),c.a.createElement("h4",null,"(\u5f00\u53d1\u4e2d)"),c.a.createElement("h4",null,"\u793a\u4f8b"),"\u5f53\u524d\u6570\u636e:",c.a.createElement(v,{text:"".concat(JSON.stringify(C)),handleClick:function(e){try{r(JSON.parse(e))}catch(t){console.error("error: INVALID JSON ARRAY FORMAT")}}}),c.a.createElement(y,{data:n}))},path:"/comp/levels"},{key:"code-paper",title:"\u4ee3\u7801\u5757 \xb7 CodePaper",component:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"\u4ee3\u7801\u5757"),c.a.createElement(v,{text:"",handleClick:function(e){f.a.info(e)}}))},path:"/comp/code-paper"},{key:"loading",title:"\u52a0\u8f7d \xb7 Loading",component:function(){return c.a.createElement("div",null,c.a.createElement(x,null))},path:"/comp/loading"}]}],D=function(){return c.a.createElement("div",null,"NOTFOUND")},P=m.a.Header,Y=m.a.Sider,W=m.a.Content,X=u.a.SubMenu;function H(e){return c.a.createElement(d.a,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var J=Object(d.f)((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=function(e){return c.a.createElement("span",null,c.a.createElement(s.a,null),c.a.createElement("span",null,e.title))};return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(Y,{trigger:null,collapsible:!0,collapsed:n},c.a.createElement("div",{className:"logo"}),c.a.createElement(u.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["home"],defaultOpenKeys:["comp"]},A.map((function(e){return e.routes?c.a.createElement(X,{key:e.key,title:l(e)},e.routes.map((function(e){return c.a.createElement(u.a.Item,{key:e.key},c.a.createElement(o.b,{to:e.path},e.icon&&c.a.createElement(p.a,null),c.a.createElement("span",null,e.title)))}))):e.component?c.a.createElement(u.a.Item,{key:e.key},c.a.createElement(o.b,{to:e.path},e.icon&&c.a.createElement(p.a,null),c.a.createElement("span",null,e.title))):null})))),c.a.createElement(m.a,null,c.a.createElement(P,{style:{background:"#fff",padding:0}},c.a.createElement(p.a,{className:"trigger",onClick:function(){return r(!n)}})),c.a.createElement(W,{className:"App-content"},c.a.createElement(d.c,null,"123",A.map((function(e){return c.a.createElement(H,Object.assign({key:e.key},e))})),c.a.createElement(d.a,{component:D}))))))}));n(267),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.a,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t,n){e.exports=n.p+"static/media/panda.6c7f1359.png"}},[[143,1,2]]]);
//# sourceMappingURL=main.6b4cf072.chunk.js.map