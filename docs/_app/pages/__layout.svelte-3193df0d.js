import{S as e,i as t,s,e as a,t as r,c as l,a as n,g as o,d as c,f as h,D as i,E as f,F as u,G as d,H as p,I as g,J as m,K as v,l as $,b,h as y,L as E,M as _,k as S,j as D,N as x,n as N,m as k,O as A,o as I,P as j,Q as F,R as H,x as O,u as P,v as T}from"../chunks/vendor-2320dfb5.js";import{t as L}from"../chunks/store-d1634e7f.js";function R(e,t,s){const a=e.slice();return a[3]=t[s],a}function w(e){let t,s,u,d=e[3]+"";return{c(){t=a("option"),s=r(d),this.h()},l(e){t=l(e,"OPTION",{});var a=n(t);s=o(a,d),a.forEach(c),this.h()},h(){t.__value=u=e[3],t.value=t.__value},m(e,a){h(e,t,a),i(t,s)},p:f,d(e){e&&c(t)}}}function C(e){let t,s,r,o=e[1],i=[];for(let a=0;a<o.length;a+=1)i[a]=w(R(e,o,a));return{c(){t=a("select");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=l(e,"SELECT",{});var s=n(t);for(let t=0;t<i.length;t+=1)i[t].l(s);s.forEach(c),this.h()},h(){void 0===e[0]&&u((()=>e[2].call(t)))},m(a,l){h(a,t,l);for(let e=0;e<i.length;e+=1)i[e].m(t,null);d(t,e[0]),s||(r=p(t,"change",e[2]),s=!0)},p(e,[s]){if(2&s){let a;for(o=e[1],a=0;a<o.length;a+=1){const r=R(e,o,a);i[a]?i[a].p(r,s):(i[a]=w(r),i[a].c(),i[a].m(t,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=o.length}3&s&&d(t,e[0])},i:f,o:f,d(e){e&&c(t),g(i,e),s=!1,r()}}}function M(e,t,s){let a;m(e,L,(e=>s(0,a=e)));const r=["light","dark"];return e.$$.update=()=>{1&e.$$.dirty&&(document.body.classList.remove(...r),document.body.classList.add(a))},[a,r,function(){a=v(this),L.set(a),s(1,r)}]}class G extends e{constructor(e){super(),t(this,e,M,C,s,{})}}function V(e,t,s){const a=e.slice();return a[2]=t[s],a[4]=s,a}function W(e){let t,s,f,u,d,p=e[2].label+"";return{c(){t=r("/ "),s=a("a"),f=r(p),d=r(" "),this.h()},l(e){t=o(e,"/ "),s=l(e,"A",{href:!0});var a=n(s);f=o(a,p),a.forEach(c),d=o(e," "),this.h()},h(){b(s,"href",u=e[2].href)},m(e,a){h(e,t,a),h(e,s,a),i(s,f),h(e,d,a)},p(e,t){1&t&&p!==(p=e[2].label+"")&&y(f,p),1&t&&u!==(u=e[2].href)&&b(s,"href",u)},d(e){e&&c(t),e&&c(s),e&&c(d)}}}function q(e){let t,s,a=e[2].label+"";return{c(){t=r("/ "),s=r(a)},l(e){t=o(e,"/ "),s=o(e,a)},m(e,a){h(e,t,a),h(e,s,a)},p(e,t){1&t&&a!==(a=e[2].label+"")&&y(s,a)},d(e){e&&c(t),e&&c(s)}}}function J(e){let t;function s(e,t){return e[4]==e[0].length-1?q:W}let a=s(e),r=a(e);return{c(){r.c(),t=$()},l(e){r.l(e),t=$()},m(e,s){r.m(e,s),h(e,t,s)},p(e,l){a===(a=s(e))&&r?r.p(e,l):(r.d(1),r=a(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&c(t)}}}function K(e){let t,s=e[0],a=[];for(let r=0;r<s.length;r+=1)a[r]=J(V(e,s,r));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=$()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=$()},m(e,s){for(let t=0;t<a.length;t+=1)a[t].m(e,s);h(e,t,s)},p(e,[r]){if(1&r){let l;for(s=e[0],l=0;l<s.length;l+=1){const n=V(e,s,l);a[l]?a[l].p(n,r):(a[l]=J(n),a[l].c(),a[l].m(t.parentNode,t))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i:f,o:f,d(e){g(a,e),e&&c(t)}}}function Q(e,t,s){let{path:a}=t,r=[];return e.$$set=e=>{"path"in e&&s(1,a=e.path)},e.$$.update=()=>{if(3&e.$$.dirty){const e=a.split("/").filter((e=>""!==e));let t="";s(0,r=e.map((e=>(t+="/"+e,{label:e,href:t})))),r.unshift({label:"home",href:"/"})}},[r,a]}class z extends e{constructor(e){super(),t(this,e,Q,K,s,{path:1})}}const B={subscribe:e=>(()=>{const e=E("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function U(e){let t,s,f,u,d,p,g,m,v,$,y,E,L,R,w,C,M,V,W,q,J,K,Q,B,U,X,Y,Z,ee,te,se,ae,re,le,ne;document.title=t="df.id.au - "+e[0].path,$=new G({}),V=new z({props:{path:e[0].path}});const oe=e[2].default,ce=_(oe,e,e[1],null);return{c(){s=S(),f=a("div"),u=a("main"),d=a("div"),p=a("img"),m=S(),v=a("span"),D($.$$.fragment),y=S(),E=a("h1"),L=r("df.id.au"),R=S(),w=a("h4"),C=r("Dean Fogarty"),M=S(),D(V.$$.fragment),W=S(),q=a("hr"),J=S(),ce&&ce.c(),K=S(),Q=a("footer"),B=a("hr"),U=S(),X=a("p"),Y=r("Want to say g'day? Drop me an "),Z=a("a"),ee=r("email"),te=r(".\n            "),se=a("span"),ae=r("Style by "),re=a("a"),le=r("TypeSafe CSS"),this.h()},l(e){x('[data-svelte="svelte-u5qcxx"]',document.head).forEach(c),s=N(e),f=l(e,"DIV",{class:!0});var t=n(f);u=l(t,"MAIN",{});var a=n(u);d=l(a,"DIV",{class:!0});var r=n(d);p=l(r,"IMG",{src:!0,alt:!0,class:!0}),m=N(r),v=l(r,"SPAN",{class:!0});var h=n(v);k($.$$.fragment,h),h.forEach(c),y=N(r),E=l(r,"H1",{class:!0});var i=n(E);L=o(i,"df.id.au"),i.forEach(c),R=N(r),w=l(r,"H4",{class:!0});var g=n(w);C=o(g,"Dean Fogarty"),g.forEach(c),M=N(r),k(V.$$.fragment,r),W=N(r),q=l(r,"HR",{}),r.forEach(c),J=N(a),ce&&ce.l(a),a.forEach(c),K=N(t),Q=l(t,"FOOTER",{class:!0});var b=n(Q);B=l(b,"HR",{}),U=N(b),X=l(b,"P",{});var _=n(X);Y=o(_,"Want to say g'day? Drop me an "),Z=l(_,"A",{href:!0});var S=n(Z);ee=o(S,"email"),S.forEach(c),te=o(_,".\n            "),se=l(_,"SPAN",{class:!0});var D=n(se);ae=o(D,"Style by "),re=l(D,"A",{target:!0,href:!0});var A=n(re);le=o(A,"TypeSafe CSS"),A.forEach(c),D.forEach(c),_.forEach(c),b.forEach(c),t.forEach(c),this.h()},h(){A(p.src,g="/13109002_223898111320684_484395489_n.jpg")||b(p,"src","/13109002_223898111320684_484395489_n.jpg"),b(p,"alt","Dean Fogarty"),b(p,"class","svelte-41dro8"),b(v,"class","theme svelte-41dro8"),b(E,"class","svelte-41dro8"),b(w,"class","svelte-41dro8"),b(d,"class","header svelte-41dro8"),b(Z,"href","mailto:dean@df.id.au"),b(re,"target","_blank"),b(re,"href","https://uglyduck.ca/typesafe-css"),b(se,"class","right svelte-41dro8"),b(Q,"class","svelte-41dro8"),b(f,"class","wrapper svelte-41dro8")},m(e,t){h(e,s,t),h(e,f,t),i(f,u),i(u,d),i(d,p),i(d,m),i(d,v),I($,v,null),i(d,y),i(d,E),i(E,L),i(d,R),i(d,w),i(w,C),i(d,M),I(V,d,null),i(d,W),i(d,q),i(u,J),ce&&ce.m(u,null),i(f,K),i(f,Q),i(Q,B),i(Q,U),i(Q,X),i(X,Y),i(X,Z),i(Z,ee),i(X,te),i(X,se),i(se,ae),i(se,re),i(re,le),ne=!0},p(e,[s]){(!ne||1&s)&&t!==(t="df.id.au - "+e[0].path)&&(document.title=t);const a={};1&s&&(a.path=e[0].path),V.$set(a),ce&&ce.p&&(!ne||2&s)&&j(ce,oe,e,e[1],ne?H(oe,e[1],s,null):F(e[1]),null)},i(e){ne||(O($.$$.fragment,e),O(V.$$.fragment,e),O(ce,e),ne=!0)},o(e){P($.$$.fragment,e),P(V.$$.fragment,e),P(ce,e),ne=!1},d(e){e&&c(s),e&&c(f),T($),T(V),ce&&ce.d(e)}}}function X(e,t,s){let a;m(e,B,(e=>s(0,a=e)));let{$$slots:r={},$$scope:l}=t;return e.$$set=e=>{"$$scope"in e&&s(1,l=e.$$scope)},[a,l,r]}class Y extends e{constructor(e){super(),t(this,e,X,U,s,{})}}export{Y as default};