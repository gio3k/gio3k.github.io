import{a as p,c as w,t as y,b as l}from"../chunks/Cqx2m8EO.js";import{b as A,h as _,Y as h,a as O,c as g,i as R,_ as j,X as k,j as N,k as T,d as C,A as E,ae as M,a3 as P,a4 as S,af as Y,a6 as v,ac as z,a5 as D,a7 as H}from"../chunks/Diw5ZUyC.js";import{h as I}from"../chunks/CnaHselm.js";function X(a,t,r,o,s){var i=a,c="",n;A(()=>{if(c===(c=t()??"")){_&&h();return}n!==void 0&&(C(n),n=void 0),c!==""&&(n=O(()=>{if(_){g.data;for(var e=h(),d=e;e!==null&&(e.nodeType!==8||e.data!=="");)d=e,e=R(e);if(e===null)throw j(),k;p(g,d),i=N(e);return}var b=c+"",f=w(b);p(T(f),f.lastChild),i.before(f)}))})}function u(a,t,r,o){var s=a.__attributes??(a.__attributes={});_&&(s[t]=a.getAttribute(t)),s[t]!==(s[t]=r)&&(r==null?a.removeAttribute(t):typeof r!="string"&&q(a).includes(t)?a[t]=r:a.setAttribute(t,r))}var m=new Map;function q(a){var t=m.get(a.nodeName);if(t)return t;m.set(a.nodeName,t=[]);for(var r,o=a,s=Element.prototype;s!==o;){r=M(o);for(var i in r)r[i].set&&t.push(i);o=E(o)}return t}const B=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:B},Symbol.toStringTag,{value:"Module"}));var F=y('<meta property="og:type" content="article"> <meta property="og:title"> <meta name="twitter:title">',1),G=y('<article class="post"><!></article>');function U(a,t){P(t,!0);const{title:r}=t.data;console.log(t.data);const o=t.data.content;var s=G();I(c=>{var n=F();Y.title=r;var e=v(z(n),2);u(e,"content",r);var d=v(e,2);u(d,"content",r),l(c,n)});var i=D(s);X(i,()=>o),H(s),l(a,s),S()}export{U as component,Q as universal};
