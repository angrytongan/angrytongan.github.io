import{S as e,i as a,s,e as n,t as o,k as t,c as r,a as c,g as p,d as l,n as i,b as h,f as u,D as d,E as m}from"../../../chunks/vendor-3d5021e0.js";function k(e){let a,s,k,f,v,g,b,E,w,y,S,C,L,W,A,P,T,_,H,D,x,O,I,j,M,$,U,q,R,z,F,K,B,G,J,N,Q,V,X,Y,Z,ee,ae,se,ne,oe,te,re,ce,pe,le,ie,he,ue,de,me,ke,fe,ve,ge,be,Ee,we,ye,Se,Ce,Le,We,Ae,Pe,Te,_e,He,De,xe,Oe,Ie,je,Me,$e,Ue,qe,Re,ze,Fe,Ke,Be,Ge,Je,Ne,Qe,Ve,Xe,Ye,Ze,ea,aa,sa,na,oa,ta,ra,ca,pa,la,ia,ha,ua,da,ma,ka,fa,va,ga,ba,Ea,wa,ya,Sa,Ca,La,Wa,Aa,Pa,Ta,_a,Ha,Da,xa,Oa,Ia,ja,Ma,$a,Ua;return{c(){a=n("p"),s=o("A simple way to toggle light and dark mode in a "),k=n("a"),f=o("Svelte"),v=o("\napplication."),g=t(),b=n("hr"),E=t(),w=n("h2"),y=o("What is dark mode?"),S=t(),C=n("p"),L=o("When enabled on a website, dark mode (also “night mode”) reduces\nthe amount of light emitted by a screen by changing the palette of colours\nit uses. For instance, changing the background from a paper-white to a dark\ngray, and text colour from black to light gray."),W=t(),A=n("p"),P=o("Dark mode can be more comfortable to use in low-light conditions. Some\ntechnologies, such as OLED panels, may consume less power which is better\nsuited for mobile devices."),T=t(),_=n("h2"),H=o("Our goal?"),D=t(),x=n("p"),O=o("We want a component that allows the user to change between light and dark\nmode. Third party components should also be notified of the colour mode."),I=t(),j=n("h2"),M=o("Method"),$=t(),U=n("p"),q=o("We specify a dark style in our application stylesheet. When triggered,\nwe manipulate\n"),R=n("a"),z=o("Element.classList"),F=o("\non "),K=n("code"),B=o("<body>"),G=o(" to add or remove this class. We use a Svelte\n"),J=n("a"),N=o("store"),Q=o("\nto track the change, which allows third-party components to alter their\nrendering."),V=t(),X=n("h3"),Y=o("The CSS"),Z=t(),ee=n("p"),ae=o("A very simple implementation of the CSS required may look like (say "),se=n("code"),ne=o("static/styles.css"),oe=o("):"),te=t(),re=n("pre"),ce=t(),pe=n("h3"),le=o("The store"),ie=t(),he=n("p"),ue=o("We track the selected mode in our store, say "),de=n("code"),me=o("store.js"),ke=o(":"),fe=t(),ve=n("pre"),ge=t(),be=n("h3"),Ee=o("The component"),we=t(),ye=n("p"),Se=o("A "),Ce=n("code"),Le=o("<select>"),We=o(" element allows the user to switch between modes. We bind\nto "),Ae=n("code"),Pe=o("$colourScheme"),Te=o(" so any subscribers will get notification of the change\n(say "),_e=n("code"),He=o("./ColourScheme.svelte"),De=o("):"),xe=t(),Oe=n("pre"),Ie=t(),je=n("h2"),Me=o("Usage"),$e=t(),Ue=n("p"),qe=o("Include the component wherever it’s required:"),Re=t(),ze=n("pre"),Fe=t(),Ke=n("p"),Be=o("An implementation can be seen on this website, at the top of the page."),Ge=t(),Je=n("h2"),Ne=o("Summary"),Qe=t(),Ve=n("p"),Xe=o("We created a component that allows the user to choose between two colour modes, specified in CSS. The chosen colour mode is stored in a Svelte store, available to other subscribed components."),Ye=t(),Ze=n("h3"),ea=o("Improvements"),aa=t(),sa=n("ul"),na=n("li"),oa=o("Some applications may require extending light / dark mode to a generic\n“theme” mode, where selection from a number of palettes can be\nperformed by the user. Extending the above solution would be trivial for this\ncase."),ta=t(),ra=n("li"),ca=o("The solution demonstrated above ignores the CSS media\n"),pa=n("a"),la=o("prefers-color-scheme"),ia=o(". At a minimum, the default selection for the mode chooser should\nadhere to the value of this feature."),ha=t(),ua=n("li"),da=n("a"),ma=o("SvelteKit"),ka=o(" performs server-side rendering of the\napplication, so "),fa=n("code"),va=o("document"),ga=o(" is not available and the reference to it in\nthe above example will fail. This should be guarded by "),ba=n("code"),Ea=o("browser"),wa=o(" from\n"),ya=n("code"),Sa=o("$app/env"),Ca=o(". More details\n"),La=n("a"),Wa=o("here"),Aa=o("."),Pa=t(),Ta=n("h2"),_a=o("More information"),Ha=t(),Da=n("ul"),xa=n("li"),Oa=n("a"),Ia=o("Element.classList"),ja=t(),Ma=n("li"),$a=n("a"),Ua=o("Svelte stores"),this.h()},l(e){a=r(e,"P",{});var n=c(a);s=p(n,"A simple way to toggle light and dark mode in a "),k=r(n,"A",{href:!0,rel:!0});var o=c(k);f=p(o,"Svelte"),o.forEach(l),v=p(n,"\napplication."),n.forEach(l),g=i(e),b=r(e,"HR",{}),E=i(e),w=r(e,"H2",{});var t=c(w);y=p(t,"What is dark mode?"),t.forEach(l),S=i(e),C=r(e,"P",{});var h=c(C);L=p(h,"When enabled on a website, dark mode (also “night mode”) reduces\nthe amount of light emitted by a screen by changing the palette of colours\nit uses. For instance, changing the background from a paper-white to a dark\ngray, and text colour from black to light gray."),h.forEach(l),W=i(e),A=r(e,"P",{});var u=c(A);P=p(u,"Dark mode can be more comfortable to use in low-light conditions. Some\ntechnologies, such as OLED panels, may consume less power which is better\nsuited for mobile devices."),u.forEach(l),T=i(e),_=r(e,"H2",{});var d=c(_);H=p(d,"Our goal?"),d.forEach(l),D=i(e),x=r(e,"P",{});var m=c(x);O=p(m,"We want a component that allows the user to change between light and dark\nmode. Third party components should also be notified of the colour mode."),m.forEach(l),I=i(e),j=r(e,"H2",{});var qa=c(j);M=p(qa,"Method"),qa.forEach(l),$=i(e),U=r(e,"P",{});var Ra=c(U);q=p(Ra,"We specify a dark style in our application stylesheet. When triggered,\nwe manipulate\n"),R=r(Ra,"A",{href:!0,rel:!0});var za=c(R);z=p(za,"Element.classList"),za.forEach(l),F=p(Ra,"\non "),K=r(Ra,"CODE",{});var Fa=c(K);B=p(Fa,"<body>"),Fa.forEach(l),G=p(Ra," to add or remove this class. We use a Svelte\n"),J=r(Ra,"A",{href:!0,rel:!0});var Ka=c(J);N=p(Ka,"store"),Ka.forEach(l),Q=p(Ra,"\nto track the change, which allows third-party components to alter their\nrendering."),Ra.forEach(l),V=i(e),X=r(e,"H3",{});var Ba=c(X);Y=p(Ba,"The CSS"),Ba.forEach(l),Z=i(e),ee=r(e,"P",{});var Ga=c(ee);ae=p(Ga,"A very simple implementation of the CSS required may look like (say "),se=r(Ga,"CODE",{});var Ja=c(se);ne=p(Ja,"static/styles.css"),Ja.forEach(l),oe=p(Ga,"):"),Ga.forEach(l),te=i(e),re=r(e,"PRE",{class:!0}),c(re).forEach(l),ce=i(e),pe=r(e,"H3",{});var Na=c(pe);le=p(Na,"The store"),Na.forEach(l),ie=i(e),he=r(e,"P",{});var Qa=c(he);ue=p(Qa,"We track the selected mode in our store, say "),de=r(Qa,"CODE",{});var Va=c(de);me=p(Va,"store.js"),Va.forEach(l),ke=p(Qa,":"),Qa.forEach(l),fe=i(e),ve=r(e,"PRE",{class:!0}),c(ve).forEach(l),ge=i(e),be=r(e,"H3",{});var Xa=c(be);Ee=p(Xa,"The component"),Xa.forEach(l),we=i(e),ye=r(e,"P",{});var Ya=c(ye);Se=p(Ya,"A "),Ce=r(Ya,"CODE",{});var Za=c(Ce);Le=p(Za,"<select>"),Za.forEach(l),We=p(Ya," element allows the user to switch between modes. We bind\nto "),Ae=r(Ya,"CODE",{});var es=c(Ae);Pe=p(es,"$colourScheme"),es.forEach(l),Te=p(Ya," so any subscribers will get notification of the change\n(say "),_e=r(Ya,"CODE",{});var as=c(_e);He=p(as,"./ColourScheme.svelte"),as.forEach(l),De=p(Ya,"):"),Ya.forEach(l),xe=i(e),Oe=r(e,"PRE",{class:!0}),c(Oe).forEach(l),Ie=i(e),je=r(e,"H2",{});var ss=c(je);Me=p(ss,"Usage"),ss.forEach(l),$e=i(e),Ue=r(e,"P",{});var ns=c(Ue);qe=p(ns,"Include the component wherever it’s required:"),ns.forEach(l),Re=i(e),ze=r(e,"PRE",{class:!0}),c(ze).forEach(l),Fe=i(e),Ke=r(e,"P",{});var os=c(Ke);Be=p(os,"An implementation can be seen on this website, at the top of the page."),os.forEach(l),Ge=i(e),Je=r(e,"H2",{});var ts=c(Je);Ne=p(ts,"Summary"),ts.forEach(l),Qe=i(e),Ve=r(e,"P",{});var rs=c(Ve);Xe=p(rs,"We created a component that allows the user to choose between two colour modes, specified in CSS. The chosen colour mode is stored in a Svelte store, available to other subscribed components."),rs.forEach(l),Ye=i(e),Ze=r(e,"H3",{});var cs=c(Ze);ea=p(cs,"Improvements"),cs.forEach(l),aa=i(e),sa=r(e,"UL",{});var ps=c(sa);na=r(ps,"LI",{});var ls=c(na);oa=p(ls,"Some applications may require extending light / dark mode to a generic\n“theme” mode, where selection from a number of palettes can be\nperformed by the user. Extending the above solution would be trivial for this\ncase."),ls.forEach(l),ta=i(ps),ra=r(ps,"LI",{});var is=c(ra);ca=p(is,"The solution demonstrated above ignores the CSS media\n"),pa=r(is,"A",{href:!0,rel:!0});var hs=c(pa);la=p(hs,"prefers-color-scheme"),hs.forEach(l),ia=p(is,". At a minimum, the default selection for the mode chooser should\nadhere to the value of this feature."),is.forEach(l),ha=i(ps),ua=r(ps,"LI",{});var us=c(ua);da=r(us,"A",{href:!0,rel:!0});var ds=c(da);ma=p(ds,"SvelteKit"),ds.forEach(l),ka=p(us," performs server-side rendering of the\napplication, so "),fa=r(us,"CODE",{});var ms=c(fa);va=p(ms,"document"),ms.forEach(l),ga=p(us," is not available and the reference to it in\nthe above example will fail. This should be guarded by "),ba=r(us,"CODE",{});var ks=c(ba);Ea=p(ks,"browser"),ks.forEach(l),wa=p(us," from\n"),ya=r(us,"CODE",{});var fs=c(ya);Sa=p(fs,"$app/env"),fs.forEach(l),Ca=p(us,". More details\n"),La=r(us,"A",{href:!0,rel:!0});var vs=c(La);Wa=p(vs,"here"),vs.forEach(l),Aa=p(us,"."),us.forEach(l),ps.forEach(l),Pa=i(e),Ta=r(e,"H2",{});var gs=c(Ta);_a=p(gs,"More information"),gs.forEach(l),Ha=i(e),Da=r(e,"UL",{});var bs=c(Da);xa=r(bs,"LI",{});var Es=c(xa);Oa=r(Es,"A",{href:!0,rel:!0});var ws=c(Oa);Ia=p(ws,"Element.classList"),ws.forEach(l),Es.forEach(l),ja=i(bs),Ma=r(bs,"LI",{});var ys=c(Ma);$a=r(ys,"A",{href:!0,rel:!0});var Ss=c($a);Ua=p(Ss,"Svelte stores"),Ss.forEach(l),ys.forEach(l),bs.forEach(l),this.h()},h(){h(k,"href","https://svelte.dev"),h(k,"rel","nofollow"),h(R,"href","https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"),h(R,"rel","nofollow"),h(J,"href","https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values"),h(J,"rel","nofollow"),h(re,"class","language-css"),h(ve,"class","language-js"),h(Oe,"class","language-js"),h(ze,"class","language-js"),h(pa,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"),h(pa,"rel","nofollow"),h(da,"href","https://kit.svelte.dev"),h(da,"rel","nofollow"),h(La,"href","https://kit.svelte.dev/docs#modules-$app-env"),h(La,"rel","nofollow"),h(Oa,"href","https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"),h(Oa,"rel","nofollow"),h($a,"href","https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values"),h($a,"rel","nofollow")},m(e,n){u(e,a,n),d(a,s),d(a,k),d(k,f),d(a,v),u(e,g,n),u(e,b,n),u(e,E,n),u(e,w,n),d(w,y),u(e,S,n),u(e,C,n),d(C,L),u(e,W,n),u(e,A,n),d(A,P),u(e,T,n),u(e,_,n),d(_,H),u(e,D,n),u(e,x,n),d(x,O),u(e,I,n),u(e,j,n),d(j,M),u(e,$,n),u(e,U,n),d(U,q),d(U,R),d(R,z),d(U,F),d(U,K),d(K,B),d(U,G),d(U,J),d(J,N),d(U,Q),u(e,V,n),u(e,X,n),d(X,Y),u(e,Z,n),u(e,ee,n),d(ee,ae),d(ee,se),d(se,ne),d(ee,oe),u(e,te,n),u(e,re,n),re.innerHTML='<code class="language-css"><span class="token selector">.light</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #121212<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n<span class="token selector">.dark</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #121212<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #aaa<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',u(e,ce,n),u(e,pe,n),d(pe,le),u(e,ie,n),u(e,he,n),d(he,ue),d(he,de),d(de,me),d(he,ke),u(e,fe,n),u(e,ve,n),ve.innerHTML='<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> writable <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte/store\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> colourScheme <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token string">\'light\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',u(e,ge,n),u(e,be,n),d(be,Ee),u(e,we,n),u(e,ye,n),d(ye,Se),d(ye,Ce),d(Ce,Le),d(ye,We),d(ye,Ae),d(Ae,Pe),d(ye,Te),d(ye,_e),d(_e,He),d(ye,De),u(e,xe,n),u(e,Oe,n),Oe.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> colourScheme <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./store.js\'</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> schemes <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">\'light\'</span><span class="token punctuation">,</span> <span class="token string">\'dark\'</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    $<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token operator">...</span>schemes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>$colourScheme<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>select bind<span class="token operator">:</span>value<span class="token operator">=</span><span class="token punctuation">&#123;</span>$colourScheme<span class="token punctuation">&#125;</span><span class="token operator">></span>\n    <span class="token punctuation">&#123;</span>#each schemes <span class="token keyword">as</span> s<span class="token punctuation">&#125;</span>\n        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token punctuation">&#123;</span>s<span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">&#123;</span>s<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n    <span class="token punctuation">&#123;</span><span class="token operator">/</span>each<span class="token punctuation">&#125;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span></code>',u(e,Ie,n),u(e,je,n),d(je,Me),u(e,$e,n),u(e,Ue,n),d(Ue,qe),u(e,Re,n),u(e,ze,n),ze.innerHTML='<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">import</span> ColourScheme <span class="token keyword">from</span> <span class="token string">\'./ColourScheme.svelte\'</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>ColourScheme <span class="token operator">/</span><span class="token operator">></span></code>',u(e,Fe,n),u(e,Ke,n),d(Ke,Be),u(e,Ge,n),u(e,Je,n),d(Je,Ne),u(e,Qe,n),u(e,Ve,n),d(Ve,Xe),u(e,Ye,n),u(e,Ze,n),d(Ze,ea),u(e,aa,n),u(e,sa,n),d(sa,na),d(na,oa),d(sa,ta),d(sa,ra),d(ra,ca),d(ra,pa),d(pa,la),d(ra,ia),d(sa,ha),d(sa,ua),d(ua,da),d(da,ma),d(ua,ka),d(ua,fa),d(fa,va),d(ua,ga),d(ua,ba),d(ba,Ea),d(ua,wa),d(ua,ya),d(ya,Sa),d(ua,Ca),d(ua,La),d(La,Wa),d(ua,Aa),u(e,Pa,n),u(e,Ta,n),d(Ta,_a),u(e,Ha,n),u(e,Da,n),d(Da,xa),d(xa,Oa),d(Oa,Ia),d(Da,ja),d(Da,Ma),d(Ma,$a),d($a,Ua)},p:m,i:m,o:m,d(e){e&&l(a),e&&l(g),e&&l(b),e&&l(E),e&&l(w),e&&l(S),e&&l(C),e&&l(W),e&&l(A),e&&l(T),e&&l(_),e&&l(D),e&&l(x),e&&l(I),e&&l(j),e&&l($),e&&l(U),e&&l(V),e&&l(X),e&&l(Z),e&&l(ee),e&&l(te),e&&l(re),e&&l(ce),e&&l(pe),e&&l(ie),e&&l(he),e&&l(fe),e&&l(ve),e&&l(ge),e&&l(be),e&&l(we),e&&l(ye),e&&l(xe),e&&l(Oe),e&&l(Ie),e&&l(je),e&&l($e),e&&l(Ue),e&&l(Re),e&&l(ze),e&&l(Fe),e&&l(Ke),e&&l(Ge),e&&l(Je),e&&l(Qe),e&&l(Ve),e&&l(Ye),e&&l(Ze),e&&l(aa),e&&l(sa),e&&l(Pa),e&&l(Ta),e&&l(Ha),e&&l(Da)}}}class f extends e{constructor(e){super(),a(this,e,null,k,s,{})}}export{f as default};