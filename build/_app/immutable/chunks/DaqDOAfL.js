import{Q as H,R as O,T as A,B as M,V as P,y as V,W as E,k as $,g as j,i as B,X as T,s as v,j as D,Y as C,c as y,Z as W,_ as q,$ as Q,a0 as X,a1 as Z,a2 as z,f as F,a as G,a3 as J,l as K,h as b,a4 as U}from"./Diw5ZUyC.js";import{r as x}from"./CnaHselm.js";import{a as rr}from"./Cqx2m8EO.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}const k=new Set,R=new Set;function ir(r){for(var a=0;a<r.length;a++)k.add(r[a]);for(var t of R)t(r)}function m(r){var N;var a=this,t=a.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],e=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(d=u)}if(e=i[d]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||t}});var w=P,o=V;O(null),A(null);try{for(var s,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&(!e.disabled||r.target===e))if(M(l)){var[L,...Y]=l;L.apply(e,[r,...Y])}else l.call(e,r)}catch(g){s?n.push(g):s=g}if(r.cancelBubble||f===a||f===null)break;e=f}if(s){for(let g of n)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=a,delete r.currentTarget,O(w),A(o)}}}function fr(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function tr(r,a){return I(r,a)}function dr(r,a){E(),a.intro=a.intro??!1;const t=a.target,c=b,i=y;try{for(var e=$(t);e&&(e.nodeType!==8||e.data!==j);)e=B(e);if(!e)throw T;v(!0),D(e),C();const d=I(r,{...a,anchor:e});if(y===null||y.nodeType!==8||y.data!==W)throw q(),T;return v(!1),d}catch(d){if(d===T)return a.recover===!1&&Q(),E(),X(t),v(!1),tr(r,a);throw d}finally{v(c),D(i),x()}}const p=new Map;function I(r,{target:a,anchor:t,props:c={},events:i,context:e,intro:d=!0}){E();var _=new Set,u=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!_.has(n)){_.add(n);var f=er(n);a.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};u(Z(k)),R.add(u);var h=void 0,w=z(()=>{var o=t??a.appendChild(F());return G(()=>{if(e){J({});var s=K;s.c=e}i&&(c.$$events=i),b&&rr(o,null),h=r(o,c)||{},b&&(V.nodes_end=y),e&&U()}),()=>{var f;for(var s of _){a.removeEventListener(s,m);var n=p.get(s);--n===0?(document.removeEventListener(s,m),p.delete(s)):p.set(s,n)}R.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function ur(r,a){const t=S.get(r);return t?(S.delete(r),t(a)):Promise.resolve()}export{ir as d,dr as h,tr as m,fr as s,ur as u};
