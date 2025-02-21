var Cn=Array.isArray,Zt=Array.prototype.indexOf,qn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,Mn=Array.prototype,zt=Object.getPrototypeOf;const jn=()=>{};function Un(t){return t()}function Jt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,wt=4,ut=8,ot=16,k=32,j=64,$=128,w=256,G=512,p=1024,S=2048,q=4096,C=8192,Q=16384,Qt=32768,mt=65536,Hn=1<<17,Xt=1<<19,gt=1<<20,pt=Symbol("$state"),Bn=Symbol("legacy props");function Tt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Zn(){X=!0}const Wn=1,zn=2,Jn=4,Qn=8,Xn=16,tr=1,nr=2,un="[",on="[!",fn="]",At={},rr=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function ht(t){f=t}function er(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ft(!1)})}function lr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];W(s.effect),Z(s.reaction),Ft(s.fn)}}finally{W(r),Z(e)}}f=n.p,n.m=!0}return{}}function tt(){return!X||f!==null&&f.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function sr(t){return _n(ft(t))}function ar(t,n=!1){var e;const r=ft(t);return n||(r.equals=xt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&!T&&u.f&m&&(x===null?Rn([t]):x.push(t)),t}function ur(t,n){return u!==null&&!T&&tt()&&u.f&(m|ot)&&(x===null||!x.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ht(),kt(t,S),tt()&&o!==null&&o.f&p&&!(o.f&(k|j))&&(A===null?kn([t]):A.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&S||!e&&a===o||(R(a,n),i&(p|w)&&(i&m?kt(a,q):rt(a)))}}let I=!1;function or(t){I=t}let g;function L(t){if(t===null)throw Rt(),At;return g=t}function fr(){return L(P(g))}function ir(t){if(I){if(P(g)!==null)throw Rt(),At;g=t}}function _r(t=1){if(I){for(var n=t,r=g;n--;)r=P(r);g=r}}function cr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=P(n);n.remove(),n=e}}var dt,vn,pn,Dt,St;function vr(){if(dt===void 0){dt=window,vn=document,pn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Dt=vt(n,"firstChild").get,St=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function lt(t){return Dt.call(t)}function P(t){return St.call(t)}function pr(t,n){if(!I)return lt(t);var r=lt(g);if(r===null)r=g.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),L(e),e}return L(r),r}function hr(t,n){if(!I){var r=lt(t);return r instanceof Comment&&r.data===""?P(r):r}return g}function dr(t,n=1,r=!1){let e=I?g:t;for(var l;n--;)l=e,e=P(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=et();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function yr(t){t.textContent=""}function Ot(t){var n=m|S,r=u!==null&&u.f&m?u:null;return o===null||r!==null&&r.f&w?n|=w:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function Er(t){const n=Ot(t);return n.equals=xt,n}function It(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)N(n[r])}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&m))return n;n=n.parent}return null}function dn(t){var n,r=o;W(hn(t));try{It(t),n=Vt(t)}finally{W(r)}return n}function Nt(t){var n=dn(t),r=(D||t.f&w)&&t.deps!==null?q:p;R(t,r),t.equals(n)||(t.v=n,t.wv=Ht())}function Pt(t){o===null&&u===null&&en(),u!==null&&u.f&w&&o===null&&rn(),it&&nn()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var l=(t&j)!==0,s=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=F;try{yt(!0),_t(a),a.f|=Qt}catch(v){throw N(a),v}finally{yt(i)}}else n!==null&&rt(a);var E=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(gt|$))===0;if(!E&&!l&&e&&(s!==null&&yn(a,s),u!==null&&u.f&m)){var _=u;(_.effects??(_.effects=[])).push(a)}return a}function wr(t){Pt();var n=o!==null&&(o.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ft(t);return e}}function mr(t){return Pt(),En(t)}function gr(t){const n=U(j,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function Ft(t){return U(wt,t,!1)}function En(t){return U(ut,t,!0)}function Tr(t,n=[],r=Ot){const e=n.map(r);return wn(()=>t(...e.map(Fn)))}function wn(t,n=0){return U(ut|ot|n,t,!0)}function xr(t,n=!0){return U(ut|k,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=u;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;N(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&k||N(n),n=r}}function N(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:P(e);e.remove(),e=s}r=!0}Ct(t,n&&!r),J(t,0),R(t,Q);var a=t.transitions;if(a!==null)for(const E of a)E.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Lt(t,r,!0),Tn(r,()=>{N(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&mt)!==0||(e.f&k)!==0;Lt(e,n,s?r:!1),e=l}}}function Ar(t){Yt(t,!0)}function Yt(t,n){if(t.f&C){t.f^=C,t.f&p||(t.f^=p),H(t)&&(R(t,S),rt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&k)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,st=[];function Mt(){K=!1;const t=st.slice();st=[],Jt(t)}function Rr(t){K||(K=!0,queueMicrotask(Mt)),st.push(t)}function xn(){K&&Mt()}const jt=0,An=1;let B=!1,V=jt,Y=!1,M=null,F=!1,it=!1;function yt(t){F=t}function Et(t){it=t}let O=[],b=0;let u=null,T=!1;function Z(t){u=t}let o=null;function W(t){o=t}let x=null;function Rn(t){x=t}let c=null,y=0,A=null;function kn(t){A=t}let Ut=1,z=0,D=!1;function Ht(){return++Ut}function H(t){var h;var n=t.f;if(n&S)return!0;if(n&q){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,s,a=(n&G)!==0,i=e&&o!==null&&!D,E=r.length;if(a||i){var _=t,v=_.parent;for(l=0;l<E;l++)s=r[l],(a||!((h=s==null?void 0:s.reactions)!=null&&h.includes(_)))&&(s.reactions??(s.reactions=[])).push(_);a&&(_.f^=G),i&&v!==null&&!(v.f&w)&&(_.f^=w)}for(l=0;l<E;l++)if(s=r[l],H(s)&&Nt(s),s.wv>t.wv)return!0}(!e||o!==null&&!D)&&R(t,p)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw B=!1,t}function Sn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&$)===0)}function nt(t,n,r,e){if(B){if(r===null&&(B=!1),Sn(n))throw t;return}r!==null&&(B=!0);{Dn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&m?Bt(s,n,!1):n===s&&(r?R(s,S):s.f&p&&R(s,q),rt(s))}}function Vt(t){var ct;var n=c,r=y,e=A,l=u,s=D,a=x,i=f,E=T,_=t.f;c=null,y=0,A=null,u=_&(k|j)?null:t,D=(_&w)!==0&&(!F||l===null||E),x=null,ht(t.ctx),T=!1,z++;try{var v=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(J(t,y),h!==null&&y>0)for(h.length=y+c.length,d=0;d<c.length;d++)h[y+d]=c[d];else t.deps=h=c;if(!D)for(d=y;d<h.length;d++)((ct=h[d]).reactions??(ct.reactions=[])).push(t)}else h!==null&&y<h.length&&(J(t,y),h.length=y);if(tt()&&A!==null&&!T&&h!==null&&!(t.f&(m|q|S)))for(d=0;d<A.length;d++)Bt(A[d],t);return l!==null&&z++,v}finally{c=n,y=r,A=e,u=l,D=s,x=a,ht(i),T=E}}function On(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&m&&(c===null||!c.includes(n))&&(R(n,q),n.f&(w|G)||(n.f^=G),It(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function _t(t){var n=t.f;if(!(n&Q)){R(t,p);var r=o,e=f;o=t;try{n&ot?mn(t):Ct(t),bt(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var s=t.deps,a}catch(i){nt(i,t,r,e||t.ctx)}finally{o=r}}}function $t(){if(b>1e3){b=0;try{ln()}catch(t){if(M!==null)nt(t,M,null);else throw t}}b++}function Gt(t){var n=t.length;if(n!==0){$t();var r=F;F=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=Pn(l);In(s)}}finally{F=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Q|C)))try{H(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){nt(l,e,null,e.ctx)}}}function Nn(){if(Y=!1,b>1001)return;const t=O;O=[],Gt(t),Y||(b=0,M=null)}function rt(t){V===jt&&(Y||(Y=!0,queueMicrotask(Nn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(j|k)){if(!(r&p))return;n.f^=p}}O.push(n)}function Pn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&k)!==0,s=l&&(e&p)!==0,a=r.next;if(!s&&!(e&C)){if(e&wt)n.push(r);else if(l)r.f^=p;else{var i=u;try{u=r,H(r)&&_t(r)}catch(v){nt(v,r,null,r.ctx)}finally{u=i}}var E=r.first;if(E!==null){r=E;continue}}if(a===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var _=v.next;if(_!==null){r=_;continue t}v=v.parent}}r=a}return n}function Kt(t){var n=V,r=O;try{$t();const l=[];V=An,O=l,Y=!1,Gt(r);var e=t==null?void 0:t();return xn(),(O.length>0||l.length>0)&&Kt(),b=0,M=null,e}finally{V=n,O=r}}async function kr(){await Promise.resolve(),Kt()}function Fn(t){var n=t.f,r=(n&m)!==0;if(u!==null&&!T){x!==null&&x.includes(t)&&sn();var e=u.deps;t.rv<z&&(t.rv=z,c===null&&e!==null&&e[y]===t?y++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&w)&&(l.f^=w)}return r&&(l=t,H(l)&&Nt(l)),t.v}function Dr(t){var n=T;try{return T=!0,t()}finally{T=n}}const bn=-7169;function R(t,n){t.f=t.f&bn|n}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Vn as $,zt as A,Cn as B,$n as C,Ot as D,mt as E,Er as F,xt as G,Xt as H,ar as I,Qn as J,Bn as K,Hn as L,Xn as M,zn as N,Wn as O,Jn as P,Ln as Q,Z as R,pt as S,W as T,rr as U,u as V,vr as W,At as X,fr as Y,fn as Z,Rt as _,xr as a,yr as a0,qn as a1,gr as a2,er as a3,lr as a4,pr as a5,dr as a6,ir as a7,mr as a8,Jt as a9,Un as aa,Sr as ab,hr as ac,Tr as ad,Wt as ae,vn as af,pn as ag,tr as ah,nr as ai,_r as aj,on as ak,cr as al,Ar as am,gn as an,Ft as ao,En as ap,Rr as aq,Kt as ar,sr as as,kr as at,tn as au,wn as b,g as c,N as d,Zn as e,et as f,un as g,I as h,P as i,L as j,lt as k,f as l,X as m,jn as n,Dr as o,Yn as p,Mn as q,ft as r,or as s,Kn as t,wr as u,Fn as v,ur as w,vt as x,o as y,Gn as z};
