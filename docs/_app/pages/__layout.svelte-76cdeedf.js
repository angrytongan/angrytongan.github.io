import{S as e,i as t,s as a,e as s,t as r,c as l,a as n,g as c,d as o,f as h,D as i,E as f,F as u,G as d,H as p,I as g,J as m,K as v,l as $,b,h as y,L as E,M as _,k as S,j as D,N as x,n as N,m as k,O as A,o as I,P as j,Q as F,R as H,x as O,u as P,v as T}from"../chunks/vendor-3a28259b.js";import{t as L}from"../chunks/store-a7f9cedd.js";function R(e,t,a){const s=e.slice();return s[3]=t[a],s}function w(e){let t,a,u,d=e[3]+"";return{c(){t=s("option"),a=r(d),this.h()},l(e){t=l(e,"OPTION",{});var s=n(t);a=c(s,d),s.forEach(o),this.h()},h(){t.__value=u=e[3],t.value=t.__value},m(e,s){h(e,t,s),i(t,a)},p:f,d(e){e&&o(t)}}}function C(e){let t,a,r,c=e[1],i=[];for(let s=0;s<c.length;s+=1)i[s]=w(R(e,c,s));return{c(){t=s("select");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=l(e,"SELECT",{});var a=n(t);for(let t=0;t<i.length;t+=1)i[t].l(a);a.forEach(o),this.h()},h(){void 0===e[0]&&u((()=>e[2].call(t)))},m(s,l){h(s,t,l);for(let e=0;e<i.length;e+=1)i[e].m(t,null);d(t,e[0]),a||(r=p(t,"change",e[2]),a=!0)},p(e,[a]){if(2&a){let s;for(c=e[1],s=0;s<c.length;s+=1){const r=R(e,c,s);i[s]?i[s].p(r,a):(i[s]=w(r),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=c.length}3&a&&d(t,e[0])},i:f,o:f,d(e){e&&o(t),g(i,e),a=!1,r()}}}function M(e,t,a){let s;m(e,L,(e=>a(0,s=e)));const r=["light","dark"];return e.$$.update=()=>{1&e.$$.dirty&&(document.body.classList.remove(...r),document.body.classList.add(s))},[s,r,function(){s=v(this),L.set(s),a(1,r)}]}class G extends e{constructor(e){super(),t(this,e,M,C,a,{})}}function V(e,t,a){const s=e.slice();return s[2]=t[a],s[4]=a,s}function W(e){let t,a,f,u,d,p=e[2].label+"";return{c(){t=r("/ "),a=s("a"),f=r(p),d=r(" "),this.h()},l(e){t=c(e,"/ "),a=l(e,"A",{href:!0});var s=n(a);f=c(s,p),s.forEach(o),d=c(e," "),this.h()},h(){b(a,"href",u=e[2].href)},m(e,s){h(e,t,s),h(e,a,s),i(a,f),h(e,d,s)},p(e,t){1&t&&p!==(p=e[2].label+"")&&y(f,p),1&t&&u!==(u=e[2].href)&&b(a,"href",u)},d(e){e&&o(t),e&&o(a),e&&o(d)}}}function q(e){let t,a,s=e[2].label+"";return{c(){t=r("/ "),a=r(s)},l(e){t=c(e,"/ "),a=c(e,s)},m(e,s){h(e,t,s),h(e,a,s)},p(e,t){1&t&&s!==(s=e[2].label+"")&&y(a,s)},d(e){e&&o(t),e&&o(a)}}}function J(e){let t;function a(e,t){return e[4]==e[0].length-1?q:W}let s=a(e),r=s(e);return{c(){r.c(),t=$()},l(e){r.l(e),t=$()},m(e,a){r.m(e,a),h(e,t,a)},p(e,l){s===(s=a(e))&&r?r.p(e,l):(r.d(1),r=s(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&o(t)}}}function K(e){let t,a=e[0],s=[];for(let r=0;r<a.length;r+=1)s[r]=J(V(e,a,r));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);h(e,t,a)},p(e,[r]){if(1&r){let l;for(a=e[0],l=0;l<a.length;l+=1){const n=V(e,a,l);s[l]?s[l].p(n,r):(s[l]=J(n),s[l].c(),s[l].m(t.parentNode,t))}for(;l<s.length;l+=1)s[l].d(1);s.length=a.length}},i:f,o:f,d(e){g(s,e),e&&o(t)}}}function Q(e,t,a){let{path:s}=t,r=[];return e.$$set=e=>{"path"in e&&a(1,s=e.path)},e.$$.update=()=>{if(3&e.$$.dirty){const e=s.split("/").filter((e=>""!==e));let t="";a(0,r=e.map((e=>(t+="/"+e,{label:e,href:t})))),r.unshift({label:"home",href:"/"})}},[r,s]}class z extends e{constructor(e){super(),t(this,e,Q,K,a,{path:1})}}const B={subscribe:e=>(()=>{const e=E("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function U(e){let t,a,f,u,d,p,g,m,v,$,y,E,L,R,w,C,M,V,W,q,J,K,Q,B,U,X,Y,Z,ee,te,ae,se,re,le,ne;document.title=t="df.id.au - "+e[0].path,$=new G({}),V=new z({props:{path:e[0].path}});const ce=e[2].default,oe=_(ce,e,e[1],null);return{c(){a=S(),f=s("div"),u=s("main"),d=s("div"),p=s("img"),m=S(),v=s("span"),D($.$$.fragment),y=S(),E=s("h1"),L=r("df.id.au"),R=S(),w=s("h4"),C=r("Dean Fogarty"),M=S(),D(V.$$.fragment),W=S(),q=s("hr"),J=S(),oe&&oe.c(),K=S(),Q=s("footer"),B=s("hr"),U=S(),X=s("p"),Y=r("Want to say g'day? Drop me an "),Z=s("a"),ee=r("email"),te=r(".\n            "),ae=s("span"),se=r("Style by "),re=s("a"),le=r("TypeSafe CSS"),this.h()},l(e){x('[data-svelte="svelte-u5qcxx"]',document.head).forEach(o),a=N(e),f=l(e,"DIV",{class:!0});var t=n(f);u=l(t,"MAIN",{});var s=n(u);d=l(s,"DIV",{class:!0});var r=n(d);p=l(r,"IMG",{src:!0,alt:!0,class:!0}),m=N(r),v=l(r,"SPAN",{class:!0});var h=n(v);k($.$$.fragment,h),h.forEach(o),y=N(r),E=l(r,"H1",{class:!0});var i=n(E);L=c(i,"df.id.au"),i.forEach(o),R=N(r),w=l(r,"H4",{class:!0});var g=n(w);C=c(g,"Dean Fogarty"),g.forEach(o),M=N(r),k(V.$$.fragment,r),W=N(r),q=l(r,"HR",{}),r.forEach(o),J=N(s),oe&&oe.l(s),s.forEach(o),K=N(t),Q=l(t,"FOOTER",{class:!0});var b=n(Q);B=l(b,"HR",{}),U=N(b),X=l(b,"P",{});var _=n(X);Y=c(_,"Want to say g'day? Drop me an "),Z=l(_,"A",{href:!0});var S=n(Z);ee=c(S,"email"),S.forEach(o),te=c(_,".\n            "),ae=l(_,"SPAN",{class:!0});var D=n(ae);se=c(D,"Style by "),re=l(D,"A",{target:!0,href:!0});var A=n(re);le=c(A,"TypeSafe CSS"),A.forEach(o),D.forEach(o),_.forEach(o),b.forEach(o),t.forEach(o),this.h()},h(){A(p.src,g="/13109002_223898111320684_484395489_n.jpg")||b(p,"src","/13109002_223898111320684_484395489_n.jpg"),b(p,"alt","Dean Fogarty"),b(p,"class","svelte-41dro8"),b(v,"class","theme svelte-41dro8"),b(E,"class","svelte-41dro8"),b(w,"class","svelte-41dro8"),b(d,"class","header svelte-41dro8"),b(Z,"href","mailto:dean@df.id.au"),b(re,"target","_blank"),b(re,"href","https://uglyduck.ca/typesafe-css"),b(ae,"class","right svelte-41dro8"),b(Q,"class","svelte-41dro8"),b(f,"class","wrapper svelte-41dro8")},m(e,t){h(e,a,t),h(e,f,t),i(f,u),i(u,d),i(d,p),i(d,m),i(d,v),I($,v,null),i(d,y),i(d,E),i(E,L),i(d,R),i(d,w),i(w,C),i(d,M),I(V,d,null),i(d,W),i(d,q),i(u,J),oe&&oe.m(u,null),i(f,K),i(f,Q),i(Q,B),i(Q,U),i(Q,X),i(X,Y),i(X,Z),i(Z,ee),i(X,te),i(X,ae),i(ae,se),i(ae,re),i(re,le),ne=!0},p(e,[a]){(!ne||1&a)&&t!==(t="df.id.au - "+e[0].path)&&(document.title=t);const s={};1&a&&(s.path=e[0].path),V.$set(s),oe&&oe.p&&(!ne||2&a)&&j(oe,ce,e,e[1],ne?H(ce,e[1],a,null):F(e[1]),null)},i(e){ne||(O($.$$.fragment,e),O(V.$$.fragment,e),O(oe,e),ne=!0)},o(e){P($.$$.fragment,e),P(V.$$.fragment,e),P(oe,e),ne=!1},d(e){e&&o(a),e&&o(f),T($),T(V),oe&&oe.d(e)}}}function X(e,t,a){let s;m(e,B,(e=>a(0,s=e)));let{$$slots:r={},$$scope:l}=t;return e.$$set=e=>{"$$scope"in e&&a(1,l=e.$$scope)},[s,l,r]}class Y extends e{constructor(e){super(),t(this,e,X,U,a,{})}}export{Y as default};