import{S as n,i as a,s,_ as t,l as e,$ as o,a as p,d as c,b as l,f as r,I as i,e as u,k,t as h,c as m,n as f,g as d,T as v,D as g,h as w,E as y,j as E,m as b,o as x,x as $,u as z,v as W,r as C,w as D,A as S,V as A}from"../../../chunks/vendor-5fde3abd.js";function P(n,a,s){const t=n.slice();return t[6]=a[s],t}function I(n,a,s){const t=n.slice();return t[9]=a[s],t}function L(n){let a,s;return{c(){a=t("line"),this.h()},l(n){a=o(n,"line",{class:!0,y1:!0,y2:!0,transform:!0}),p(a).forEach(c),this.h()},h(){l(a,"class",s="minor "+n[4]+" svelte-197hpgm"),l(a,"y1","42"),l(a,"y2","45"),l(a,"transform","rotate("+6*(n[6]+n[9])+")")},m(n,s){r(n,a,s)},p(n,t){16&t&&s!==(s="minor "+n[4]+" svelte-197hpgm")&&l(a,"class",s)},d(n){n&&c(a)}}}function j(n){let a,s,u,k,h=[1,2,3,4],m=[];for(let t=0;t<4;t+=1)m[t]=L(I(n,h,t));return{c(){a=t("line");for(let n=0;n<4;n+=1)m[n].c();k=e(),this.h()},l(n){a=o(n,"line",{class:!0,y1:!0,y2:!0,transform:!0}),p(a).forEach(c);for(let a=0;a<4;a+=1)m[a].l(n);k=e(),this.h()},h(){l(a,"class",s="major "+n[4]+" svelte-197hpgm"),l(a,"y1","35"),l(a,"y2","45"),l(a,"transform",u="rotate("+30*n[6]+")")},m(n,s){r(n,a,s);for(let a=0;a<4;a+=1)m[a].m(n,s);r(n,k,s)},p(n,t){if(16&t&&s!==(s="major "+n[4]+" svelte-197hpgm")&&l(a,"class",s),16&t){let a;for(h=[1,2,3,4],a=0;a<4;a+=1){const s=I(n,h,a);m[a]?m[a].p(s,t):(m[a]=L(s),m[a].c(),m[a].m(k.parentNode,k))}for(;a<4;a+=1)m[a].d(1)}},d(n){n&&c(a),i(m,n),n&&c(k)}}}function H(n){let a,s,e,E,b,x,$,z,W,C,D,S,A,I,L,H,T,M,O,R,U,B,V,q,_=[0,5,10,15,20,25,30,35,40,45,50,55],G=[];for(let t=0;t<12;t+=1)G[t]=j(P(n,_,t));return{c(){a=u("div"),s=t("svg"),e=t("circle");for(let n=0;n<12;n+=1)G[n].c();b=t("line"),$=t("line"),W=t("g"),C=t("line"),D=t("line"),A=k(),I=u("p"),L=h(n[1]),H=h(":"),T=h(n[2]),M=h(":"),O=h(n[3]),R=k(),U=h(n[4]),B=u("br"),V=k(),q=h(n[0]),this.h()},l(t){a=m(t,"DIV",{});var l=p(a);s=o(l,"svg",{viewBox:!0,class:!0});var r=p(s);e=o(r,"circle",{class:!0,r:!0}),p(e).forEach(c);for(let n=0;n<12;n+=1)G[n].l(r);b=o(r,"line",{class:!0,y1:!0,y2:!0,transform:!0}),p(b).forEach(c),$=o(r,"line",{class:!0,y1:!0,y2:!0,transform:!0}),p($).forEach(c),W=o(r,"g",{transform:!0});var i=p(W);C=o(i,"line",{class:!0,y1:!0,y2:!0}),p(C).forEach(c),D=o(i,"line",{class:!0,y1:!0,y2:!0}),p(D).forEach(c),i.forEach(c),r.forEach(c),A=f(l),I=m(l,"P",{style:!0});var u=p(I);L=d(u,n[1]),H=d(u,":"),T=d(u,n[2]),M=d(u,":"),O=d(u,n[3]),R=f(u),U=d(u,n[4]),B=m(u,"BR",{}),V=f(u),q=d(u,n[0]),u.forEach(c),l.forEach(c),this.h()},h(){l(e,"class",E="clock-face "+n[4]+" svelte-197hpgm"),l(e,"r","48"),l(b,"class","hour svelte-197hpgm"),l(b,"y1","2"),l(b,"y2","-20"),l(b,"transform",x="rotate("+(30*n[1]+n[2]/2)+")"),l($,"class","minute svelte-197hpgm"),l($,"y1","4"),l($,"y2","-30"),l($,"transform",z="rotate("+(6*n[2]+n[3]/10)+")"),l(C,"class","second svelte-197hpgm"),l(C,"y1","10"),l(C,"y2","-38"),l(D,"class","second-counterweight svelte-197hpgm"),l(D,"y1","10"),l(D,"y2","2"),l(W,"transform",S="rotate("+6*n[3]+")"),l(s,"viewBox","-50 -50 100 100"),l(s,"class","svelte-197hpgm"),v(I,"text-align","center")},m(n,t){r(n,a,t),g(a,s),g(s,e);for(let a=0;a<12;a+=1)G[a].m(s,null);g(s,b),g(s,$),g(s,W),g(W,C),g(W,D),g(a,A),g(a,I),g(I,L),g(I,H),g(I,T),g(I,M),g(I,O),g(I,R),g(I,U),g(I,B),g(I,V),g(I,q)},p(n,[a]){if(16&a&&E!==(E="clock-face "+n[4]+" svelte-197hpgm")&&l(e,"class",E),16&a){let t;for(_=[0,5,10,15,20,25,30,35,40,45,50,55],t=0;t<12;t+=1){const e=P(n,_,t);G[t]?G[t].p(e,a):(G[t]=j(e),G[t].c(),G[t].m(s,b))}for(;t<12;t+=1)G[t].d(1)}6&a&&x!==(x="rotate("+(30*n[1]+n[2]/2)+")")&&l(b,"transform",x),12&a&&z!==(z="rotate("+(6*n[2]+n[3]/10)+")")&&l($,"transform",z),8&a&&S!==(S="rotate("+6*n[3]+")")&&l(W,"transform",S),2&a&&w(L,n[1]),4&a&&w(T,n[2]),8&a&&w(O,n[3]),16&a&&w(U,n[4]),1&a&&w(q,n[0])},i:y,o:y,d(n){n&&c(a),i(G,n)}}}function T(n,a,s){let{timezone:t="Australia/Brisbane"}=a,{now:e}=a,o=0,p=0,c=0,l="";return n.$$set=n=>{"timezone"in n&&s(0,t=n.timezone),"now"in n&&s(5,e=n.now)},n.$$.update=()=>{if(33&n.$$.dirty){const n=e.toLocaleString("en-US",{timeZone:t,hour:"numeric",minute:"numeric",second:"numeric"});s(1,[o,p,c,l]=n.split(/[ :]/),o,(s(2,p),s(5,e),s(0,t)),(s(3,c),s(5,e),s(0,t)),(s(4,l),s(5,e),s(0,t)))}},[t,o,p,c,l,e]}class M extends n{constructor(n){super(),a(this,n,T,H,s,{timezone:0,now:5})}}function O(n,a,s){const t=n.slice();return t[3]=a[s],t}function R(n){let a,s,t,e;return s=new M({props:{now:n[1],timezone:n[3]}}),{c(){a=u("div"),E(s.$$.fragment),t=k(),this.h()},l(n){a=m(n,"DIV",{class:!0});var e=p(a);b(s.$$.fragment,e),t=f(e),e.forEach(c),this.h()},h(){l(a,"class","clock svelte-ivz82d")},m(n,o){r(n,a,o),x(s,a,null),g(a,t),e=!0},p(n,a){const t={};2&a&&(t.now=n[1]),1&a&&(t.timezone=n[3]),s.$set(t)},i(n){e||($(s.$$.fragment,n),e=!0)},o(n){z(s.$$.fragment,n),e=!1},d(n){n&&c(a),W(s)}}}function U(n){let a,s,t=n[0],e=[];for(let p=0;p<t.length;p+=1)e[p]=R(O(n,t,p));const o=n=>z(e[n],1,1,(()=>{e[n]=null}));return{c(){a=u("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){a=m(n,"DIV",{class:!0});var s=p(a);for(let a=0;a<e.length;a+=1)e[a].l(s);s.forEach(c),this.h()},h(){l(a,"class","clocks svelte-ivz82d")},m(n,t){r(n,a,t);for(let s=0;s<e.length;s+=1)e[s].m(a,null);s=!0},p(n,[s]){if(3&s){let p;for(t=n[0],p=0;p<t.length;p+=1){const o=O(n,t,p);e[p]?(e[p].p(o,s),$(e[p],1)):(e[p]=R(o),e[p].c(),$(e[p],1),e[p].m(a,null))}for(C(),p=t.length;p<e.length;p+=1)o(p);D()}},i(n){if(!s){for(let n=0;n<t.length;n+=1)$(e[n]);s=!0}},o(n){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)z(e[a]);s=!1},d(n){n&&c(a),i(e,n)}}}function B(n,a,s){let t,{timezones:e=["America/New_York","Europe/London","Asia/Tokyo","Australia/Brisbane","Australia/Perth"]}=a,o=new Date;return S((()=>{t=setInterval((()=>{s(1,o=new Date)}),1e3)})),A((()=>{t&&clearInterval(t)})),n.$$set=n=>{"timezones"in n&&s(0,e=n.timezones)},[e,o]}class V extends n{constructor(n){super(),a(this,n,B,U,s,{timezones:0})}}function q(n){let a,s,t,e,o,i,v,w,C,D,S,A,P,I,L,j,H,T,M,O,R,U,B,q,_,G,N,Y,Z,J,F,K,Q,X,nn,an,sn,tn,en,on,pn,cn,ln,rn,un,kn,hn,mn,fn,dn,vn,gn,wn,yn,En,bn,xn,$n,zn,Wn,Cn,Dn,Sn,An,Pn,In,Ln,jn,Hn,Tn,Mn,On,Rn,Un,Bn,Vn,qn,_n,Gn,Nn,Yn,Zn,Jn,Fn,Kn,Qn,Xn,na,aa,sa;return A=new V({}),{c(){a=u("p"),s=h("Display the current date and time from multiple timezones as a bunch of wall clocks."),t=k(),e=u("hr"),o=k(),i=u("h2"),v=h("Our goal?"),w=k(),C=u("p"),D=h("We want to display the current time for a number of locations around the world in\nthe form of a wall of clocks:"),S=k(),E(A.$$.fragment),P=k(),I=u("h2"),L=h("Method"),j=k(),H=u("p"),T=h("We will need two components: an individual clock component (say\n"),M=u("code"),O=h("./WallClock.svelte"),R=h(") and a container that manages the clocks by feeding\nthem the current local time and required locale (say\n"),U=u("code"),B=h("./WallClocks.svelte"),q=h("). "),_=u("code"),G=h("WallClock.svelte"),N=h(" will calculate the time in\nit’s locale and draw a clock with this time."),Y=k(),Z=u("h3"),J=u("code"),F=h("WallClocks.svelte"),K=k(),Q=u("p"),X=h("Similarly to "),nn=u("a"),an=h("our table of locations and times"),sn=h(",\nwe will set an interval that updates a variable, which is used as a prop\nto the clock component:"),tn=k(),en=u("pre"),on=k(),pn=u("h3"),cn=u("code"),ln=h("WallClock.svelte"),rn=k(),un=u("p"),kn=h("The individual clock component uses "),hn=u("code"),mn=h("toLocaleString()"),fn=h(" as our "),dn=u("a"),vn=h("table\nversion"),gn=h(", and parses the output:"),wn=k(),yn=u("pre"),En=k(),bn=u("p"),xn=h("The clock face itself is built with SVG. Rather than reproduce the\nit here, you are encouraged to check the "),$n=u("a"),zn=h("clock\nexample"),Wn=h(" from the "),Cn=u("a"),Dn=h("Svelte Example\nlist"),Sn=h("; the example at the top of this page uses\nthis code verbatim."),An=k(),Pn=u("h2"),In=h("Usage"),Ln=k(),jn=u("p"),Hn=h("Use the component wherever it’s required:"),Tn=k(),Mn=u("pre"),On=k(),Rn=u("h2"),Un=h("Summary"),Bn=k(),Vn=u("p"),qn=h("We have created two components that can be used to display wall clocks based on\ntimezone."),_n=k(),Gn=u("h2"),Nn=h("More information"),Yn=k(),Zn=u("ul"),Jn=u("li"),Fn=u("a"),Kn=h("Date"),Qn=k(),Xn=u("li"),na=u("a"),aa=h("Svelte Examples: clock"),this.h()},l(n){a=m(n,"P",{});var l=p(a);s=d(l,"Display the current date and time from multiple timezones as a bunch of wall clocks."),l.forEach(c),t=f(n),e=m(n,"HR",{}),o=f(n),i=m(n,"H2",{});var r=p(i);v=d(r,"Our goal?"),r.forEach(c),w=f(n),C=m(n,"P",{});var u=p(C);D=d(u,"We want to display the current time for a number of locations around the world in\nthe form of a wall of clocks:"),u.forEach(c),S=f(n),b(A.$$.fragment,n),P=f(n),I=m(n,"H2",{});var k=p(I);L=d(k,"Method"),k.forEach(c),j=f(n),H=m(n,"P",{});var h=p(H);T=d(h,"We will need two components: an individual clock component (say\n"),M=m(h,"CODE",{});var g=p(M);O=d(g,"./WallClock.svelte"),g.forEach(c),R=d(h,") and a container that manages the clocks by feeding\nthem the current local time and required locale (say\n"),U=m(h,"CODE",{});var y=p(U);B=d(y,"./WallClocks.svelte"),y.forEach(c),q=d(h,"). "),_=m(h,"CODE",{});var E=p(_);G=d(E,"WallClock.svelte"),E.forEach(c),N=d(h," will calculate the time in\nit’s locale and draw a clock with this time."),h.forEach(c),Y=f(n),Z=m(n,"H3",{});var x=p(Z);J=m(x,"CODE",{});var $=p(J);F=d($,"WallClocks.svelte"),$.forEach(c),x.forEach(c),K=f(n),Q=m(n,"P",{});var z=p(Q);X=d(z,"Similarly to "),nn=m(z,"A",{href:!0});var W=p(nn);an=d(W,"our table of locations and times"),W.forEach(c),sn=d(z,",\nwe will set an interval that updates a variable, which is used as a prop\nto the clock component:"),z.forEach(c),tn=f(n),en=m(n,"PRE",{class:!0}),p(en).forEach(c),on=f(n),pn=m(n,"H3",{});var V=p(pn);cn=m(V,"CODE",{});var sa=p(cn);ln=d(sa,"WallClock.svelte"),sa.forEach(c),V.forEach(c),rn=f(n),un=m(n,"P",{});var ta=p(un);kn=d(ta,"The individual clock component uses "),hn=m(ta,"CODE",{});var ea=p(hn);mn=d(ea,"toLocaleString()"),ea.forEach(c),fn=d(ta," as our "),dn=m(ta,"A",{href:!0});var oa=p(dn);vn=d(oa,"table\nversion"),oa.forEach(c),gn=d(ta,", and parses the output:"),ta.forEach(c),wn=f(n),yn=m(n,"PRE",{class:!0}),p(yn).forEach(c),En=f(n),bn=m(n,"P",{});var pa=p(bn);xn=d(pa,"The clock face itself is built with SVG. Rather than reproduce the\nit here, you are encouraged to check the "),$n=m(pa,"A",{href:!0,rel:!0});var ca=p($n);zn=d(ca,"clock\nexample"),ca.forEach(c),Wn=d(pa," from the "),Cn=m(pa,"A",{href:!0,rel:!0});var la=p(Cn);Dn=d(la,"Svelte Example\nlist"),la.forEach(c),Sn=d(pa,"; the example at the top of this page uses\nthis code verbatim."),pa.forEach(c),An=f(n),Pn=m(n,"H2",{});var ra=p(Pn);In=d(ra,"Usage"),ra.forEach(c),Ln=f(n),jn=m(n,"P",{});var ia=p(jn);Hn=d(ia,"Use the component wherever it’s required:"),ia.forEach(c),Tn=f(n),Mn=m(n,"PRE",{class:!0}),p(Mn).forEach(c),On=f(n),Rn=m(n,"H2",{});var ua=p(Rn);Un=d(ua,"Summary"),ua.forEach(c),Bn=f(n),Vn=m(n,"P",{});var ka=p(Vn);qn=d(ka,"We have created two components that can be used to display wall clocks based on\ntimezone."),ka.forEach(c),_n=f(n),Gn=m(n,"H2",{});var ha=p(Gn);Nn=d(ha,"More information"),ha.forEach(c),Yn=f(n),Zn=m(n,"UL",{});var ma=p(Zn);Jn=m(ma,"LI",{});var fa=p(Jn);Fn=m(fa,"A",{href:!0,rel:!0});var da=p(Fn);Kn=d(da,"Date"),da.forEach(c),fa.forEach(c),Qn=f(ma),Xn=m(ma,"LI",{});var va=p(Xn);na=m(va,"A",{href:!0,rel:!0});var ga=p(na);aa=d(ga,"Svelte Examples: clock"),ga.forEach(c),va.forEach(c),ma.forEach(c),this.h()},h(){l(nn,"href","/technical/svelte/timezones"),l(en,"class","language-js"),l(dn,"href","/technical/svelte/timezones"),l(yn,"class","language-js"),l($n,"href","https://svelte.dev/examples#clock"),l($n,"rel","nofollow"),l(Cn,"href","https://svelte.dev/examples"),l(Cn,"rel","nofollow"),l(Mn,"class","language-js"),l(Fn,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"),l(Fn,"rel","nofollow"),l(na,"href","https://svelte.dev/examples#clock"),l(na,"rel","nofollow")},m(n,p){r(n,a,p),g(a,s),r(n,t,p),r(n,e,p),r(n,o,p),r(n,i,p),g(i,v),r(n,w,p),r(n,C,p),g(C,D),r(n,S,p),x(A,n,p),r(n,P,p),r(n,I,p),g(I,L),r(n,j,p),r(n,H,p),g(H,T),g(H,M),g(M,O),g(H,R),g(H,U),g(U,B),g(H,q),g(H,_),g(_,G),g(H,N),r(n,Y,p),r(n,Z,p),g(Z,J),g(J,F),r(n,K,p),r(n,Q,p),g(Q,X),g(Q,nn),g(nn,an),g(Q,sn),r(n,tn,p),r(n,en,p),en.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount<span class="token punctuation">,</span> onDestroy <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">import</span> WallClock <span class="token keyword">from</span> <span class="token string">\'./WallClock.svelte\'</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">export</span> <span class="token keyword">let</span> timezones <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token string">\'America/New_York\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'Europe/London\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'Asia/Tokyo\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'Australia/Brisbane\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">let</span> intervalId<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n        intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n            now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n            <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">&#125;</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"clocks"</span><span class="token operator">></span>\n    <span class="token punctuation">&#123;</span>#each timezones <span class="token keyword">as</span> timezone<span class="token punctuation">&#125;</span>\n        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"clock"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>WallClock <span class="token punctuation">&#123;</span>now<span class="token punctuation">&#125;</span> <span class="token punctuation">&#123;</span>timezone<span class="token punctuation">&#125;</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">&#123;</span><span class="token operator">/</span>each<span class="token punctuation">&#125;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></code>',r(n,on,p),r(n,pn,p),g(pn,cn),g(cn,ln),r(n,rn,p),r(n,un,p),g(un,kn),g(un,hn),g(hn,mn),g(un,fn),g(un,dn),g(dn,vn),g(un,gn),r(n,wn,p),r(n,yn,p),yn.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">export</span> <span class="token keyword">let</span> timezone<span class="token punctuation">;</span>\n    <span class="token keyword">export</span> <span class="token keyword">let</span> now<span class="token punctuation">;</span>\n\n    <span class="token keyword">let</span> hours <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> minutes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> seconds <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> amPm <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\n    $<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        <span class="token keyword">const</span> d <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>\n            timeZone<span class="token operator">:</span> timezone<span class="token punctuation">,</span>\n            hour<span class="token operator">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n            minute<span class="token operator">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n            second<span class="token operator">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token punctuation">[</span> hours<span class="token punctuation">,</span> minutes<span class="token punctuation">,</span> seconds<span class="token punctuation">,</span> amPm <span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[ :]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>svg<span class="token operator">></span>\n        <span class="token operator">...</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n</code>',r(n,En,p),r(n,bn,p),g(bn,xn),g(bn,$n),g($n,zn),g(bn,Wn),g(bn,Cn),g(Cn,Dn),g(bn,Sn),r(n,An,p),r(n,Pn,p),g(Pn,In),r(n,Ln,p),r(n,jn,p),g(jn,Hn),r(n,Tn,p),r(n,Mn,p),Mn.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">import</span> WallClocks <span class="token keyword">from</span> <span class="token string">\'./WallClocks.svelte\'</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>WallClocks <span class="token operator">/</span><span class="token operator">></span></code>',r(n,On,p),r(n,Rn,p),g(Rn,Un),r(n,Bn,p),r(n,Vn,p),g(Vn,qn),r(n,_n,p),r(n,Gn,p),g(Gn,Nn),r(n,Yn,p),r(n,Zn,p),g(Zn,Jn),g(Jn,Fn),g(Fn,Kn),g(Zn,Qn),g(Zn,Xn),g(Xn,na),g(na,aa),sa=!0},p:y,i(n){sa||($(A.$$.fragment,n),sa=!0)},o(n){z(A.$$.fragment,n),sa=!1},d(n){n&&c(a),n&&c(t),n&&c(e),n&&c(o),n&&c(i),n&&c(w),n&&c(C),n&&c(S),W(A,n),n&&c(P),n&&c(I),n&&c(j),n&&c(H),n&&c(Y),n&&c(Z),n&&c(K),n&&c(Q),n&&c(tn),n&&c(en),n&&c(on),n&&c(pn),n&&c(rn),n&&c(un),n&&c(wn),n&&c(yn),n&&c(En),n&&c(bn),n&&c(An),n&&c(Pn),n&&c(Ln),n&&c(jn),n&&c(Tn),n&&c(Mn),n&&c(On),n&&c(Rn),n&&c(Bn),n&&c(Vn),n&&c(_n),n&&c(Gn),n&&c(Yn),n&&c(Zn)}}}class _ extends n{constructor(n){super(),a(this,n,null,q,s,{})}}export{_ as default};