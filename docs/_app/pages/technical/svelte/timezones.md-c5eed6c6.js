import{S as gn,i as ns,s as ss,r as c,u as i,v as u,n as s,f as t,C as Hn,G as ps,q as ls,U as rs,x as k,a as d,y as f,d as _,I as o,z as Kn,c as cs,b as is,w as cn,m as us,k as ks,t as fs,l as ms}from"../../../chunks/index-077af1fa.js";function Qn(w,l,m){const p=w.slice();return p[4]=l[m],p}function Vn(w){let l,m,p=w[4]+"",r,v,e,h=w[1].toLocaleString(Xn,{...w[2],timeZone:w[4]})+"",z,b;return{c(){l=c("tr"),m=c("td"),r=k(p),v=d(),e=c("td"),z=k(h),b=d()},l(E){l=i(E,"TR",{});var y=u(l);m=i(y,"TD",{});var D=u(m);r=f(D,p),D.forEach(s),v=_(y),e=i(y,"TD",{});var L=u(e);z=f(L,h),L.forEach(s),b=_(y),y.forEach(s)},m(E,y){t(E,l,y),o(l,m),o(m,r),o(l,v),o(l,e),o(e,z),o(l,b)},p(E,y){y&1&&p!==(p=E[4]+"")&&Kn(r,p),y&3&&h!==(h=E[1].toLocaleString(Xn,{...E[2],timeZone:E[4]})+"")&&Kn(z,h)},d(E){E&&s(l)}}}function ds(w){let l,m=w[0],p=[];for(let r=0;r<m.length;r+=1)p[r]=Vn(Qn(w,m,r));return{c(){l=c("table");for(let r=0;r<p.length;r+=1)p[r].c()},l(r){l=i(r,"TABLE",{});var v=u(l);for(let e=0;e<p.length;e+=1)p[e].l(v);v.forEach(s)},m(r,v){t(r,l,v);for(let e=0;e<p.length;e+=1)p[e].m(l,null)},p(r,[v]){if(v&7){m=r[0];let e;for(e=0;e<m.length;e+=1){const h=Qn(r,m,e);p[e]?p[e].p(h,v):(p[e]=Vn(h),p[e].c(),p[e].m(l,null))}for(;e<p.length;e+=1)p[e].d(1);p.length=m.length}},i:Hn,o:Hn,d(r){r&&s(l),ps(p,r)}}}const Xn="en-US";function _s(w,l,m){let{timezones:p=["America/New_York","Europe/London","Asia/Tokyo","Australia/Brisbane"]}=l;const r={weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};let v=new Date,e;return ls(()=>{e=setInterval(()=>{m(1,v=new Date)},1e3)}),rs(()=>{e&&clearInterval(e)}),w.$$set=h=>{"timezones"in h&&m(0,p=h.timezones)},[p,v,r]}class vs extends gn{constructor(l){super(),ns(this,l,_s,ds,ss,{timezones:0})}}function hs(w){let l,m,p,r,v,e,h,z,b,E,y,D,L,P,un,J,S,kn,x,fn,mn,F,U,dn,K,T,_n,B,vn,hn,G,yn,wn,Q,Z,En,V,M,bn,N,Dn,Tn,X,I,as=`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount<span class="token punctuation">,</span> onDestroy <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">let</span> timezones <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">'America/New_York'</span><span class="token punctuation">,</span>
        <span class="token string">'Europe/London'</span><span class="token punctuation">,</span>
        <span class="token string">'Asia/Tokyo'</span><span class="token punctuation">,</span>
        <span class="token string">'Australia/Brisbane'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token string">'en-US'</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> intervalId<span class="token punctuation">;</span>

    <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>table<span class="token operator">></span>
    <span class="token punctuation">&#123;</span>#each timezones <span class="token keyword">as</span> z<span class="token punctuation">&#125;</span>
        <span class="token operator">&lt;</span>tr<span class="token operator">></span>
            <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">&#123;</span>z<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
            <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">&#123;</span>now<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">timeZone</span><span class="token operator">:</span> z <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
    <span class="token punctuation">&#123;</span><span class="token operator">/</span>each<span class="token punctuation">&#125;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">></span></code>`,g,C,zn,nn,O,Sn,sn,A,ts=`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> TimeZoneTable <span class="token keyword">from</span> <span class="token string">'./TimeZoneTable.svelte'</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>TimeZoneTable <span class="token operator">/</span><span class="token operator">></span></code>`,an,W,Mn,tn,$,Ln,en,q,In,on,j,Y,H,An,pn;return D=new vs({}),{c(){l=c("p"),m=k("Display the current date and time from multiple timezones."),p=d(),r=c("hr"),v=d(),e=c("h2"),h=k("Our goal?"),z=d(),b=c("p"),E=k(`We want to display the current time for a number of locations around the world
as a table:`),y=d(),cs(D.$$.fragment),L=d(),P=c("h2"),un=k("Method"),J=d(),S=c("p"),kn=k("Create a component that periodically uses "),x=c("code"),fn=k("Date().toLocaleString()"),mn=k(` to
format the current local time in arbitrary timezones and display as a table.`),F=d(),U=c("h3"),dn=k("onMount / onDestroy"),K=d(),T=c("p"),_n=k("We can use Svelte\u2019s lifecycle functions "),B=c("code"),vn=k("onMount()"),hn=k(" and "),G=c("code"),yn=k("onDestroy()"),wn=k(`
to initialise and cleanup a periodic timer. The timer will get the date and
update a reactive varible, which will redraw the table when changed.`),Q=d(),Z=c("h3"),En=k("The component"),V=d(),M=c("p"),bn=k("A single component fulfills our requirements (say "),N=c("code"),Dn=k("./TimeZoneTable.svelte"),Tn=k("):"),X=d(),I=c("pre"),g=d(),C=c("h2"),zn=k("Usage"),nn=d(),O=c("p"),Sn=k("Use the component wherever it\u2019s required:"),sn=d(),A=c("pre"),an=d(),W=c("h2"),Mn=k("Summary"),tn=d(),$=c("p"),Ln=k(`We created a simple method for displaying the time in differen timezones
around the world.`),en=d(),q=c("h2"),In=k("More information"),on=d(),j=c("ul"),Y=c("li"),H=c("a"),An=k("Date"),this.h()},l(n){l=i(n,"P",{});var a=u(l);m=f(a,"Display the current date and time from multiple timezones."),a.forEach(s),p=_(n),r=i(n,"HR",{}),v=_(n),e=i(n,"H2",{});var Pn=u(e);h=f(Pn,"Our goal?"),Pn.forEach(s),z=_(n),b=i(n,"P",{});var Un=u(b);E=f(Un,`We want to display the current time for a number of locations around the world
as a table:`),Un.forEach(s),y=_(n),is(D.$$.fragment,n),L=_(n),P=i(n,"H2",{});var Zn=u(P);un=f(Zn,"Method"),Zn.forEach(s),J=_(n),S=i(n,"P",{});var ln=u(S);kn=f(ln,"Create a component that periodically uses "),x=i(ln,"CODE",{});var Cn=u(x);fn=f(Cn,"Date().toLocaleString()"),Cn.forEach(s),mn=f(ln,` to
format the current local time in arbitrary timezones and display as a table.`),ln.forEach(s),F=_(n),U=i(n,"H3",{});var On=u(U);dn=f(On,"onMount / onDestroy"),On.forEach(s),K=_(n),T=i(n,"P",{});var R=u(T);_n=f(R,"We can use Svelte\u2019s lifecycle functions "),B=i(R,"CODE",{});var Wn=u(B);vn=f(Wn,"onMount()"),Wn.forEach(s),hn=f(R," and "),G=i(R,"CODE",{});var $n=u(G);yn=f($n,"onDestroy()"),$n.forEach(s),wn=f(R,`
to initialise and cleanup a periodic timer. The timer will get the date and
update a reactive varible, which will redraw the table when changed.`),R.forEach(s),Q=_(n),Z=i(n,"H3",{});var qn=u(Z);En=f(qn,"The component"),qn.forEach(s),V=_(n),M=i(n,"P",{});var rn=u(M);bn=f(rn,"A single component fulfills our requirements (say "),N=i(rn,"CODE",{});var jn=u(N);Dn=f(jn,"./TimeZoneTable.svelte"),jn.forEach(s),Tn=f(rn,"):"),rn.forEach(s),X=_(n),I=i(n,"PRE",{class:!0});var es=u(I);es.forEach(s),g=_(n),C=i(n,"H2",{});var Rn=u(C);zn=f(Rn,"Usage"),Rn.forEach(s),nn=_(n),O=i(n,"P",{});var xn=u(O);Sn=f(xn,"Use the component wherever it\u2019s required:"),xn.forEach(s),sn=_(n),A=i(n,"PRE",{class:!0});var os=u(A);os.forEach(s),an=_(n),W=i(n,"H2",{});var Bn=u(W);Mn=f(Bn,"Summary"),Bn.forEach(s),tn=_(n),$=i(n,"P",{});var Gn=u($);Ln=f(Gn,`We created a simple method for displaying the time in differen timezones
around the world.`),Gn.forEach(s),en=_(n),q=i(n,"H2",{});var Nn=u(q);In=f(Nn,"More information"),Nn.forEach(s),on=_(n),j=i(n,"UL",{});var Yn=u(j);Y=i(Yn,"LI",{});var Jn=u(Y);H=i(Jn,"A",{href:!0,rel:!0});var Fn=u(H);An=f(Fn,"Date"),Fn.forEach(s),Jn.forEach(s),Yn.forEach(s),this.h()},h(){cn(I,"class","language-js"),cn(A,"class","language-js"),cn(H,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"),cn(H,"rel","nofollow")},m(n,a){t(n,l,a),o(l,m),t(n,p,a),t(n,r,a),t(n,v,a),t(n,e,a),o(e,h),t(n,z,a),t(n,b,a),o(b,E),t(n,y,a),us(D,n,a),t(n,L,a),t(n,P,a),o(P,un),t(n,J,a),t(n,S,a),o(S,kn),o(S,x),o(x,fn),o(S,mn),t(n,F,a),t(n,U,a),o(U,dn),t(n,K,a),t(n,T,a),o(T,_n),o(T,B),o(B,vn),o(T,hn),o(T,G),o(G,yn),o(T,wn),t(n,Q,a),t(n,Z,a),o(Z,En),t(n,V,a),t(n,M,a),o(M,bn),o(M,N),o(N,Dn),o(M,Tn),t(n,X,a),t(n,I,a),I.innerHTML=as,t(n,g,a),t(n,C,a),o(C,zn),t(n,nn,a),t(n,O,a),o(O,Sn),t(n,sn,a),t(n,A,a),A.innerHTML=ts,t(n,an,a),t(n,W,a),o(W,Mn),t(n,tn,a),t(n,$,a),o($,Ln),t(n,en,a),t(n,q,a),o(q,In),t(n,on,a),t(n,j,a),o(j,Y),o(Y,H),o(H,An),pn=!0},p:Hn,i(n){pn||(ks(D.$$.fragment,n),pn=!0)},o(n){fs(D.$$.fragment,n),pn=!1},d(n){n&&s(l),n&&s(p),n&&s(r),n&&s(v),n&&s(e),n&&s(z),n&&s(b),n&&s(y),ms(D,n),n&&s(L),n&&s(P),n&&s(J),n&&s(S),n&&s(F),n&&s(U),n&&s(K),n&&s(T),n&&s(Q),n&&s(Z),n&&s(V),n&&s(M),n&&s(X),n&&s(I),n&&s(g),n&&s(C),n&&s(nn),n&&s(O),n&&s(sn),n&&s(A),n&&s(an),n&&s(W),n&&s(tn),n&&s($),n&&s(en),n&&s(q),n&&s(on),n&&s(j)}}}class ws extends gn{constructor(l){super(),ns(this,l,null,hs,ss,{})}}export{ws as default};