import{C as e}from"./vendor-3a28259b.js";const t=((t,s,r=[],o=[])=>{{const e=localStorage.getItem(t);e&&(s=o.reduce(((e,t)=>t(e)),e))}const{subscribe:c,set:a}=e(s);return{subscribe:c,set:e=>(localStorage.setItem(t,r.reduce(((e,t)=>t(e)),e)),a(e))}})("theme","light");export{t};