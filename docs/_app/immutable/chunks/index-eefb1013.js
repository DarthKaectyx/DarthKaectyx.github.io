function b(){}const nt=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function X(){return Object.create(null)}function N(t){t.forEach(it)}function j(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Kt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function vt(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(Et(e,n))}function Ut(t,e,n,s){if(t){const i=st(t,e,n,s);return t[0](i)}}function st(t,e,n,s){return t[1]&&s?bt(n.ctx.slice(),t[1](s(e))):n.ctx}function Vt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],r=Math.max(e.dirty.length,i.length);for(let a=0;a<r;a+=1)l[a]=e.dirty[a]|i[a];return l}return e.dirty|i}return e.dirty}function Xt(t,e,n,s,i,l){if(i){const r=st(e,n,s,l);t.p(r,i)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Zt(t){return t??""}function te(t,e,n){return t.set(n),e}function ee(t){return t&&j(t.destroy)?t.destroy:b}const rt=typeof window<"u";let lt=rt?()=>window.performance.now():()=>Date.now(),Q=rt?t=>requestAnimationFrame(t):b;const E=new Set;function ot(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&Q(ot)}function ct(t){let e;return E.size===0&&Q(ot),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let G=!1;function Nt(){G=!0}function Tt(){G=!1}function At(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(i>0&&e[n[i]].claim_order<=o?i+1:At(1,i,_=>e[n[_]].claim_order,o))-1;s[c]=n[f]+1;const u=f+1;n[u]=c,i=Math.max(u,i)}const l=[],r=[];let a=e.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(l.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);l.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<l.length&&r[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(r[c],f)}}function St(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=U("style");return Ct(at(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function Dt(t,e){if(G){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function jt(t,e,n){G&&!n?Dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function ie(){return V(" ")}function se(){return V("")}function re(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function le(t){return function(e){return e.preventDefault(),t.call(this,e)}}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,s,i=!1){ft(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,i||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return s()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function dt(t,e,n,s){return _t(t,i=>i.nodeName===e,i=>{const l=[];for(let r=0;r<i.attributes.length;r++){const a=i.attributes[r];n[a.name]||l.push(a.name)}l.forEach(r=>i.removeAttribute(r))},()=>s(e))}function ce(t,e,n){return dt(t,e,n,U)}function ae(t,e,n){return dt(t,e,n,ut)}function Rt(t,e){return _t(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>V(e),!0)}function ue(t){return Rt(t," ")}function Y(t,e,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i.nodeType===8&&i.textContent.trim()===e)return s}return t.length}function fe(t,e){const n=Y(t,"HTML_TAG_START",0),s=Y(t,"HTML_TAG_END",n);if(n===s)return new Z(void 0,e);ft(t);const i=t.splice(n,s-n+1);C(i[0]),C(i[i.length-1]);const l=i.slice(1,i.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Z(l,e)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e??""}function he(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function me(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function pe(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(s-=1,n.push(i)):l===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}class Pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class Z extends Pt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}}function ye(t,e){return new t(e)}const B=new Map;let z=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Mt(e),rules:{}};return B.set(t,n),n}function ht(t,e,n,s,i,l,r,a=0){const c=16.666/s;let o=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);o+=p*100+`%{${r(y,1-y)}}
`}const f=o+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(f)}_${a}`,_=at(t),{stylesheet:h,rules:d}=B.get(_)||Bt(_,t);d[u]||(d[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,z+=1,u}function J(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),z-=i,z||zt())}function zt(){Q(()=>{z||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),B.clear())})}let D;function M(t){D=t}function mt(){if(!D)throw new Error("Function called outside component initialization");return D}function ge(t){mt().$$.on_mount.push(t)}function we(t){mt().$$.after_update.push(t)}const S=[],tt=[],P=[],et=[],pt=Promise.resolve();let K=!1;function yt(){K||(K=!0,pt.then(gt))}function xe(){return yt(),pt}function H(t){P.push(t)}const I=new Set;let O=0;function gt(){const t=D;do{for(;O<S.length;){const e=S[O];O++,M(e),Ft(e.$$)}for(M(null),S.length=0,O=0;tt.length;)tt.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];I.has(n)||(I.add(n),n())}P.length=0}while(S.length);for(;et.length;)et.pop()();K=!1,I.clear(),M(t)}function Ft(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let k;function wt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function F(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const q=new Set;let $;function $e(){$={r:0,c:[],p:$}}function be(){$.r||N($.c),$=$.p}function xt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function ve(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),$.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const $t={duration:0};function Ee(t,e,n){const s={direction:"in"};let i=e(t,n,s),l=!1,r,a,c=0;function o(){r&&J(t,r)}function f(){const{delay:_=0,duration:h=300,easing:d=nt,tick:g=b,css:p}=i||$t;p&&(r=ht(t,0,1,h,_,d,p,c++)),g(0,1);const y=lt()+_,T=y+h;a&&a.abort(),l=!0,H(()=>F(t,!0,"start")),a=ct(v=>{if(l){if(v>=T)return g(1,0),F(t,!0,"end"),o(),l=!1;if(v>=y){const A=d((v-y)/h);g(A,1-A)}}return l})}let u=!1;return{start(){u||(u=!0,J(t),j(i)?(i=i(s),wt().then(f)):f())},invalidate(){u=!1},end(){l&&(o(),l=!1)}}}function Ne(t,e,n){const s={direction:"out"};let i=e(t,n,s),l=!0,r;const a=$;a.r+=1;function c(){const{delay:o=0,duration:f=300,easing:u=nt,tick:_=b,css:h}=i||$t;h&&(r=ht(t,1,0,f,o,u,h));const d=lt()+o,g=d+f;H(()=>F(t,!1,"start")),ct(p=>{if(l){if(p>=g)return _(0,1),F(t,!1,"end"),--a.r||N(a.c),!1;if(p>=d){const y=u((p-d)/f);_(1-y,y)}}return l})}return j(i)?wt().then(()=>{i=i(s),c()}):c(),{end(o){o&&i.tick&&i.tick(1,0),l&&(r&&J(t,r),l=!1)}}}const Te=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ae(t,e){t.d(1),e.delete(t.key)}function ke(t,e,n,s,i,l,r,a,c,o,f,u){let _=t.length,h=l.length,d=_;const g={};for(;d--;)g[t[d].key]=d;const p=[],y=new Map,T=new Map;for(d=h;d--;){const m=u(i,l,d),w=n(m);let x=r.get(w);x?s&&x.p(m,e):(x=o(w,m),x.c()),y.set(w,p[d]=x),w in g&&T.set(w,Math.abs(d-g[w]))}const v=new Set,A=new Set;function W(m){xt(m,1),m.m(a,f),r.set(m.key,m),f=m.first,h--}for(;_&&h;){const m=p[h-1],w=t[_-1],x=m.key,L=w.key;m===w?(f=m.first,_--,h--):y.has(L)?!r.has(x)||v.has(x)?W(m):A.has(L)?_--:T.get(x)>T.get(L)?(A.add(x),W(m)):(v.add(L),_--):(c(w,r),_--)}for(;_--;){const m=t[_];y.has(m.key)||c(m,r)}for(;h;)W(p[h-1]);return p}function Se(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function Gt(t,e,n,s){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),s||H(()=>{const r=t.$$.on_mount.map(it).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),l.forEach(H)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(S.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,s,i,l,r,a=[-1]){const c=D;M(t);const o=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(u,_,...h)=>{const d=h.length?h[0]:_;return o.ctx&&i(o.ctx[u],o.ctx[u]=d)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](d),f&&It(t,u)),_}):[],o.update(),f=!0,N(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){Nt();const u=Lt(e.target);o.fragment&&o.fragment.l(u),u.forEach(C)}else o.fragment&&o.fragment.c();e.intro&&xt(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),Tt(),gt()}M(c)}class De{$destroy(){Wt(this,1),this.$destroy=b}$on(e,n){if(!j(n))return b;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as $,xe as A,b as B,Ut as C,Dt as D,Xt as E,Yt as F,Vt as G,Qt as H,pe as I,ne as J,ut as K,ae as L,re as M,ee as N,N as O,Te as P,le as Q,Kt as R,De as S,me as T,H as U,Ee as V,Ne as W,nt as X,Zt as Y,te as Z,Z as _,ie as a,de as a0,ke as a1,Ae as a2,jt as b,ue as c,be as d,se as e,xt as f,$e as g,C as h,Ce as i,we as j,U as k,ce as l,Lt as m,oe as n,ge as o,he as p,V as q,Rt as r,Jt as s,ve as t,_e as u,ye as v,Se as w,Me as x,Gt as y,Wt as z};
