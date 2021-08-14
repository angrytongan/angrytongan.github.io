import{S as a,i as n,s,e as t,t as o,k as e,c as p,a as c,g as r,d as l,n as u,b as i,f as k,D as d,E as h}from"../../../chunks/vendor-3d5021e0.js";function f(a){let n,s,f,v,g,m,y,w,E,b,S,I,P,L,j,O,M,H,x,T,B,C,D,W,A,_,N,R,F,$,U,J,K,Y,q,z,G,Q,V,X,Z,aa,na,sa,ta,oa,ea,pa,ca,ra,la,ua,ia,ka,da,ha,fa,va,ga,ma,ya,wa,Ea,ba,Sa,Ia,Pa,La,ja,Oa,Ma,Ha,xa,Ta,Ba,Ca,Da,Wa,Aa,_a,Na,Ra,Fa,$a,Ua,Ja,Ka,Ya,qa,za,Ga,Qa,Va,Xa,Za,an,nn,sn,tn,on,en,pn,cn,rn,ln,un,kn,dn,hn,fn,vn,gn,mn,yn,wn,En,bn,Sn,In,Pn,Ln,jn,On,Mn,Hn,xn,Tn,Bn,Cn,Dn,Wn,An,_n,Nn,Rn,Fn,$n,Un;return{c(){n=t("p"),s=o("Storing typed data from "),f=t("a"),v=o("Svelte\nstores"),g=o("\nto browser localStorage."),m=e(),y=t("hr"),w=e(),E=t("h2"),b=o("Previously"),S=e(),I=t("p"),P=o("In "),L=t("a"),j=o("part I"),O=o(" we wrapped\n"),M=t("code"),H=o("localStorage.setItem()"),x=o(" and "),T=t("code"),B=o("localStorage.getItem()"),C=o(" behind a "),D=t("a"),W=o("Svelte\nstore"),A=o(", giving the developer a consistent\ninterface to both normal stores and localStorage."),_=e(),N=t("h3"),R=o("Typed data?"),F=e(),$=t("p"),U=o("Our previous solution allows us to store any type of data (say "),J=t("code"),K=o("./store.js"),Y=o("):"),q=e(),z=t("pre"),G=e(),Q=t("p"),V=o("but the developer must manually manage it’s type:"),X=e(),Z=t("pre"),aa=e(),na=t("h2"),sa=o("Our goal?"),ta=e(),oa=t("p"),ea=o("We want to provide wrappers around "),pa=t("code"),ca=o("createLocalStorage()"),ra=o(" that handle\ntypes. For the developer, we want the wrapper use to be as inconvenient as\npossible."),la=e(),ua=t("h2"),ia=o("Method"),ka=e(),da=t("p"),ha=o("We need to adjust "),fa=t("code"),va=o("createLocalStorage()"),ga=o(" to accept a “pull” and a\n“push” functions. These functions will transform the data on the\nway back in from  and to localStorage, respectively."),ma=e(),ya=t("pre"),wa=e(),Ea=t("p"),ba=o("We will create a number of wrapper functions that provide the developer with\noptions on the type of storage to create; for example:"),Sa=e(),Ia=t("pre"),Pa=e(),La=t("p"),ja=o("and implement the pull and push functions:"),Oa=e(),Ma=t("pre"),Ha=e(),xa=t("h2"),Ta=o("Usage"),Ba=e(),Ca=t("p"),Da=o("Our store file looks familiar (say, "),Wa=t("code"),Aa=o("./store.js"),_a=o("):"),Na=e(),Ra=t("pre"),Fa=e(),$a=t("p"),Ua=o("as do our components:"),Ja=e(),Ka=t("pre"),Ya=e(),qa=t("p"),za=o("but the developer no longer needs to worry about managing types after pulling\nor before pushing to the store."),Ga=e(),Qa=t("h2"),Va=o("Summary"),Xa=e(),Za=t("p"),an=o("We have provided wrappers around "),nn=t("code"),sn=o("createLocalStorage()"),tn=o(" that handle types\nwithout any additional burden on the developer."),on=e(),en=t("h3"),pn=o("Improvements"),cn=e(),rn=t("ul"),ln=t("li"),un=o("The above example only allows a single transform, centred around managing the\ndata type. We expand this example to handle doing multiple, arbitrary transforms\nin "),kn=t("a"),dn=o("part III"),hn=o("."),fn=e(),vn=t("li"),gn=t("a"),mn=o("SvelteKit"),yn=o(" performs server-side rendering of the\napplication, so "),wn=t("code"),En=o("localStorage"),bn=o(" is not available and the reference to it in\nthe above example will fail. This should be guarded by "),Sn=t("code"),In=o("browser"),Pn=o(" from\n"),Ln=t("code"),jn=o("$app/env"),On=o(". More details\n"),Mn=t("a"),Hn=o("here"),xn=o("."),Tn=e(),Bn=t("h2"),Cn=o("More information"),Dn=e(),Wn=t("ul"),An=t("li"),_n=t("a"),Nn=o("Part I"),Rn=e(),Fn=t("li"),$n=t("a"),Un=o("Part III"),this.h()},l(a){n=p(a,"P",{});var t=c(n);s=r(t,"Storing typed data from "),f=p(t,"A",{href:!0,rel:!0});var o=c(f);v=r(o,"Svelte\nstores"),o.forEach(l),g=r(t,"\nto browser localStorage."),t.forEach(l),m=u(a),y=p(a,"HR",{}),w=u(a),E=p(a,"H2",{});var e=c(E);b=r(e,"Previously"),e.forEach(l),S=u(a),I=p(a,"P",{});var i=c(I);P=r(i,"In "),L=p(i,"A",{href:!0});var k=c(L);j=r(k,"part I"),k.forEach(l),O=r(i," we wrapped\n"),M=p(i,"CODE",{});var d=c(M);H=r(d,"localStorage.setItem()"),d.forEach(l),x=r(i," and "),T=p(i,"CODE",{});var h=c(T);B=r(h,"localStorage.getItem()"),h.forEach(l),C=r(i," behind a "),D=p(i,"A",{href:!0,rel:!0});var Jn=c(D);W=r(Jn,"Svelte\nstore"),Jn.forEach(l),A=r(i,", giving the developer a consistent\ninterface to both normal stores and localStorage."),i.forEach(l),_=u(a),N=p(a,"H3",{});var Kn=c(N);R=r(Kn,"Typed data?"),Kn.forEach(l),F=u(a),$=p(a,"P",{});var Yn=c($);U=r(Yn,"Our previous solution allows us to store any type of data (say "),J=p(Yn,"CODE",{});var qn=c(J);K=r(qn,"./store.js"),qn.forEach(l),Y=r(Yn,"):"),Yn.forEach(l),q=u(a),z=p(a,"PRE",{class:!0}),c(z).forEach(l),G=u(a),Q=p(a,"P",{});var zn=c(Q);V=r(zn,"but the developer must manually manage it’s type:"),zn.forEach(l),X=u(a),Z=p(a,"PRE",{class:!0}),c(Z).forEach(l),aa=u(a),na=p(a,"H2",{});var Gn=c(na);sa=r(Gn,"Our goal?"),Gn.forEach(l),ta=u(a),oa=p(a,"P",{});var Qn=c(oa);ea=r(Qn,"We want to provide wrappers around "),pa=p(Qn,"CODE",{});var Vn=c(pa);ca=r(Vn,"createLocalStorage()"),Vn.forEach(l),ra=r(Qn," that handle\ntypes. For the developer, we want the wrapper use to be as inconvenient as\npossible."),Qn.forEach(l),la=u(a),ua=p(a,"H2",{});var Xn=c(ua);ia=r(Xn,"Method"),Xn.forEach(l),ka=u(a),da=p(a,"P",{});var Zn=c(da);ha=r(Zn,"We need to adjust "),fa=p(Zn,"CODE",{});var as=c(fa);va=r(as,"createLocalStorage()"),as.forEach(l),ga=r(Zn," to accept a “pull” and a\n“push” functions. These functions will transform the data on the\nway back in from  and to localStorage, respectively."),Zn.forEach(l),ma=u(a),ya=p(a,"PRE",{class:!0}),c(ya).forEach(l),wa=u(a),Ea=p(a,"P",{});var ns=c(Ea);ba=r(ns,"We will create a number of wrapper functions that provide the developer with\noptions on the type of storage to create; for example:"),ns.forEach(l),Sa=u(a),Ia=p(a,"PRE",{class:!0}),c(Ia).forEach(l),Pa=u(a),La=p(a,"P",{});var ss=c(La);ja=r(ss,"and implement the pull and push functions:"),ss.forEach(l),Oa=u(a),Ma=p(a,"PRE",{class:!0}),c(Ma).forEach(l),Ha=u(a),xa=p(a,"H2",{});var ts=c(xa);Ta=r(ts,"Usage"),ts.forEach(l),Ba=u(a),Ca=p(a,"P",{});var os=c(Ca);Da=r(os,"Our store file looks familiar (say, "),Wa=p(os,"CODE",{});var es=c(Wa);Aa=r(es,"./store.js"),es.forEach(l),_a=r(os,"):"),os.forEach(l),Na=u(a),Ra=p(a,"PRE",{class:!0}),c(Ra).forEach(l),Fa=u(a),$a=p(a,"P",{});var ps=c($a);Ua=r(ps,"as do our components:"),ps.forEach(l),Ja=u(a),Ka=p(a,"PRE",{class:!0}),c(Ka).forEach(l),Ya=u(a),qa=p(a,"P",{});var cs=c(qa);za=r(cs,"but the developer no longer needs to worry about managing types after pulling\nor before pushing to the store."),cs.forEach(l),Ga=u(a),Qa=p(a,"H2",{});var rs=c(Qa);Va=r(rs,"Summary"),rs.forEach(l),Xa=u(a),Za=p(a,"P",{});var ls=c(Za);an=r(ls,"We have provided wrappers around "),nn=p(ls,"CODE",{});var us=c(nn);sn=r(us,"createLocalStorage()"),us.forEach(l),tn=r(ls," that handle types\nwithout any additional burden on the developer."),ls.forEach(l),on=u(a),en=p(a,"H3",{});var is=c(en);pn=r(is,"Improvements"),is.forEach(l),cn=u(a),rn=p(a,"UL",{});var ks=c(rn);ln=p(ks,"LI",{});var ds=c(ln);un=r(ds,"The above example only allows a single transform, centred around managing the\ndata type. We expand this example to handle doing multiple, arbitrary transforms\nin "),kn=p(ds,"A",{href:!0});var hs=c(kn);dn=r(hs,"part III"),hs.forEach(l),hn=r(ds,"."),ds.forEach(l),fn=u(ks),vn=p(ks,"LI",{});var fs=c(vn);gn=p(fs,"A",{href:!0,rel:!0});var vs=c(gn);mn=r(vs,"SvelteKit"),vs.forEach(l),yn=r(fs," performs server-side rendering of the\napplication, so "),wn=p(fs,"CODE",{});var gs=c(wn);En=r(gs,"localStorage"),gs.forEach(l),bn=r(fs," is not available and the reference to it in\nthe above example will fail. This should be guarded by "),Sn=p(fs,"CODE",{});var ms=c(Sn);In=r(ms,"browser"),ms.forEach(l),Pn=r(fs," from\n"),Ln=p(fs,"CODE",{});var ys=c(Ln);jn=r(ys,"$app/env"),ys.forEach(l),On=r(fs,". More details\n"),Mn=p(fs,"A",{href:!0,rel:!0});var ws=c(Mn);Hn=r(ws,"here"),ws.forEach(l),xn=r(fs,"."),fs.forEach(l),ks.forEach(l),Tn=u(a),Bn=p(a,"H2",{});var Es=c(Bn);Cn=r(Es,"More information"),Es.forEach(l),Dn=u(a),Wn=p(a,"UL",{});var bs=c(Wn);An=p(bs,"LI",{});var Ss=c(An);_n=p(Ss,"A",{href:!0});var Is=c(_n);Nn=r(Is,"Part I"),Is.forEach(l),Ss.forEach(l),Rn=u(bs),Fn=p(bs,"LI",{});var Ps=c(Fn);$n=p(Ps,"A",{href:!0});var Ls=c($n);Un=r(Ls,"Part III"),Ls.forEach(l),Ps.forEach(l),bs.forEach(l),this.h()},h(){i(f,"href","https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values"),i(f,"rel","nofollow"),i(L,"href","/technical/svelte/persist-localStorage"),i(D,"href","https://svelte.dev/docs#svelte_store"),i(D,"rel","nofollow"),i(z,"class","language-js"),i(Z,"class","language-js"),i(ya,"class","language-js"),i(Ia,"class","language-js"),i(Ma,"class","language-js"),i(Ra,"class","language-js"),i(Ka,"class","language-js"),i(kn,"href","/technical/svelte/persist-transforms"),i(gn,"href","https://kit.svelte.dev"),i(gn,"rel","nofollow"),i(Mn,"href","https://kit.svelte.dev/docs#modules-$app-env"),i(Mn,"rel","nofollow"),i(_n,"href","/technical/svelte/persist-localStorage"),i($n,"href","/technical/svelte/persist-transforms")},m(a,t){k(a,n,t),d(n,s),d(n,f),d(f,v),d(n,g),k(a,m,t),k(a,y,t),k(a,w,t),k(a,E,t),d(E,b),k(a,S,t),k(a,I,t),d(I,P),d(I,L),d(L,j),d(I,O),d(I,M),d(M,H),d(I,x),d(I,T),d(T,B),d(I,C),d(I,D),d(D,W),d(I,A),k(a,_,t),k(a,N,t),d(N,R),k(a,F,t),k(a,$,t),d($,U),d($,J),d(J,K),d($,Y),k(a,q,t),k(a,z,t),z.innerHTML='<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> createLocalStorage <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./localStorage.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> aString <span class="token operator">=</span> <span class="token function">createLocalStorage</span><span class="token punctuation">(</span><span class="token string">\'aString\'</span><span class="token punctuation">,</span> <span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> aStruct <span class="token operator">=</span> <span class="token function">createLocalStorage</span><span class="token punctuation">(</span><span class="token string">\'aStruct\'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> hi<span class="token operator">:</span> <span class="token string">\'world\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> aNumber <span class="token operator">=</span> <span class="token function">createLocalStorage</span><span class="token punctuation">(</span><span class="token string">\'aNumber\'</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> aBoolean <span class="token operator">=</span> <span class="token function">createLocalStorage</span><span class="token punctuation">(</span><span class="token string">\'aBoolean\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',k(a,G,t),k(a,Q,t),d(Q,V),k(a,X,t),k(a,Z,t),Z.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> aNumber<span class="token punctuation">,</span> aBoolean <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./store.js\'</span><span class="token punctuation">;</span>\n\n    $aNumber <span class="token operator">+=</span> <span class="token number">123</span><span class="token punctuation">;</span>            <span class="token comment">// we want 246, but got \'123123\'</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>$aBoolean <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>   <span class="token comment">// will fail as \'true\' !== true</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">&#125;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code>',k(a,aa,t),k(a,na,t),d(na,sa),k(a,ta,t),k(a,oa,t),d(oa,ea),d(oa,pa),d(pa,ca),d(oa,ra),k(a,la,t),k(a,ua,t),d(ua,ia),k(a,ka,t),k(a,da,t),d(da,ha),d(da,fa),d(fa,va),d(da,ga),k(a,ma,t),k(a,ya,t),ya.innerHTML='<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> writable <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte/store\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">createLocalStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> init<span class="token punctuation">,</span> pushFn<span class="token punctuation">,</span> pullFn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">let</span> value <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Pull the previously stored value and transform it on</span>\n    <span class="token comment">// the way in. If we don\'t have a previously stored value,</span>\n    <span class="token comment">// transform the initial value and write to localStorage.</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n        value <span class="token operator">=</span> <span class="token function">pullFn</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>\n            key<span class="token punctuation">,</span>\n            <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">pushFn</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        value <span class="token operator">=</span> init<span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n\n    <span class="token comment">// Create our store.</span>\n    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> subscribe<span class="token punctuation">,</span> set <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>\n        subscribe<span class="token punctuation">,</span>\n        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n            <span class="token comment">// Apply push function on write.</span>\n            localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>\n                key<span class="token punctuation">,</span>\n                <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">pushFn</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token function">set</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>',k(a,wa,t),k(a,Ea,t),d(Ea,ba),k(a,Sa,t),k(a,Ia,t),Ia.innerHTML='<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createBooleanStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> init</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n    <span class="token function">createLocalStorage</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> init<span class="token punctuation">,</span> pushBoolean<span class="token punctuation">,</span> pullBoolean<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',k(a,Pa,t),k(a,La,t),d(La,ja),k(a,Oa,t),k(a,Ma,t),Ma.innerHTML='<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">pushBoolean</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">?</span> <span class="token string">\'true\'</span> <span class="token operator">:</span> <span class="token string">\'false\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">pullBoolean</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">==</span> <span class="token string">\'true\'</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></code>',k(a,Ha,t),k(a,xa,t),d(xa,Ta),k(a,Ba,t),k(a,Ca,t),d(Ca,Da),d(Ca,Wa),d(Wa,Aa),d(Ca,_a),k(a,Na,t),k(a,Ra,t),Ra.innerHTML='<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> createBooleanStorage <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./localStorage.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> darkMode <span class="token operator">=</span> <span class="token function">createBooleanStorage</span><span class="token punctuation">(</span>\n    <span class="token string">\'darkMode\'</span><span class="token punctuation">,</span>\n    <span class="token boolean">false</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',k(a,Fa,t),k(a,$a,t),d($a,Ua),k(a,Ja,t),k(a,Ka,t),Ka.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> darkMode <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./store.js\'</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>select bind<span class="token operator">:</span>value<span class="token operator">=</span><span class="token punctuation">&#123;</span>darkMode<span class="token punctuation">&#125;</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token operator">></span>Yes<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n    <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span><span class="token operator">></span>No<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>selet<span class="token operator">></span></code>',k(a,Ya,t),k(a,qa,t),d(qa,za),k(a,Ga,t),k(a,Qa,t),d(Qa,Va),k(a,Xa,t),k(a,Za,t),d(Za,an),d(Za,nn),d(nn,sn),d(Za,tn),k(a,on,t),k(a,en,t),d(en,pn),k(a,cn,t),k(a,rn,t),d(rn,ln),d(ln,un),d(ln,kn),d(kn,dn),d(ln,hn),d(rn,fn),d(rn,vn),d(vn,gn),d(gn,mn),d(vn,yn),d(vn,wn),d(wn,En),d(vn,bn),d(vn,Sn),d(Sn,In),d(vn,Pn),d(vn,Ln),d(Ln,jn),d(vn,On),d(vn,Mn),d(Mn,Hn),d(vn,xn),k(a,Tn,t),k(a,Bn,t),d(Bn,Cn),k(a,Dn,t),k(a,Wn,t),d(Wn,An),d(An,_n),d(_n,Nn),d(Wn,Rn),d(Wn,Fn),d(Fn,$n),d($n,Un)},p:h,i:h,o:h,d(a){a&&l(n),a&&l(m),a&&l(y),a&&l(w),a&&l(E),a&&l(S),a&&l(I),a&&l(_),a&&l(N),a&&l(F),a&&l($),a&&l(q),a&&l(z),a&&l(G),a&&l(Q),a&&l(X),a&&l(Z),a&&l(aa),a&&l(na),a&&l(ta),a&&l(oa),a&&l(la),a&&l(ua),a&&l(ka),a&&l(da),a&&l(ma),a&&l(ya),a&&l(wa),a&&l(Ea),a&&l(Sa),a&&l(Ia),a&&l(Pa),a&&l(La),a&&l(Oa),a&&l(Ma),a&&l(Ha),a&&l(xa),a&&l(Ba),a&&l(Ca),a&&l(Na),a&&l(Ra),a&&l(Fa),a&&l($a),a&&l(Ja),a&&l(Ka),a&&l(Ya),a&&l(qa),a&&l(Ga),a&&l(Qa),a&&l(Xa),a&&l(Za),a&&l(on),a&&l(en),a&&l(cn),a&&l(rn),a&&l(Tn),a&&l(Bn),a&&l(Dn),a&&l(Wn)}}}class v extends a{constructor(a){super(),n(this,a,null,f,s,{})}}export{v as default};
