const u={context:void 0,registry:void 0};function V(e){u.context=e}function he(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const ye=(e,t)=>e===t,Le=Symbol("solid-proxy"),ge=Symbol("solid-track"),P={equals:ye};let H=null,te=oe;const m=1,R=2,ne={owned:null,cleanups:null,context:null,owner:null};var d=null;let K=null,h=null,g=null,w=null,U=0;function O(e,t){const n=h,s=d,i=e.length===0,r=t===void 0?s:t,o=i?ne:{owned:null,cleanups:null,context:r?r.context:null,owner:r},l=i?e:()=>e(()=>p(()=>Y(o)));d=o,h=null;try{return k(l,!0)}finally{h=n,d=s}}function se(e,t){t=t?Object.assign({},P,t):P;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),le(n,i));return[re.bind(n),s]}function G(e,t,n){const s=q(e,t,!1,m);B(s)}function He(e,t,n){te=Ae;const s=q(e,t,!1,m);(!n||!n.render)&&(s.user=!0),w?w.push(s):B(s)}function $(e,t,n){n=n?Object.assign({},P,n):P;const s=q(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,B(s),re.bind(s)}function Be(e){return k(e,!1)}function p(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function ie(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function pe(e,t){H||(H=Symbol("error")),d=q(void 0,void 0,!0),d.context={...d.context,[H]:[t]};try{return e()}catch(n){F(n)}finally{d=d.owner}}function Me(){return h}function we(e){const t=$(e),n=$(()=>W(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function re(){if(this.sources&&this.state)if(this.state===m)B(this);else{const e=g;g=null,k(()=>j(this),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function le(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=K&&K.running;o&&K.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?g.push(r):w.push(r),r.observers&&fe(r)),o||(r.state=m)}if(g.length>1e6)throw g=[],new Error},!1)),t}function B(e){if(!e.fn)return;Y(e);const t=U;be(e,e.value,t)}function be(e,t,n){let s;const i=d,r=h;h=d=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(Y),e.owned=null),e.updatedAt=n+1,F(o)}finally{h=r,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?le(e,s):e.value=s,e.updatedAt=n)}function q(e,t,n,s=m,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==ne&&(d.owned?d.owned.push(r):d.owned=[r]),r}function _(e){if(e.state===0)return;if(e.state===R)return j(e);if(e.suspense&&p(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===m)B(e);else if(e.state===R){const s=g;g=null,k(()=>j(e,t[0]),!1),g=s}}function k(e,t){if(g)return e();let n=!1;t||(g=[]),w?n=!0:w=[],U++;try{const s=e();return xe(n),s}catch(s){n||(w=null),g=null,F(s)}}function xe(e){if(g&&(oe(g),g=null),e)return;const t=w;w=null,t.length&&k(()=>te(t),!1)}function oe(e){for(let t=0;t<e.length;t++)_(e[t])}function Ae(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,n));return}else u.effects&&(e=[...u.effects,...e],n+=u.effects.length,delete u.effects);V()}for(t=0;t<n;t++)_(e[t])}function j(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===m?s!==t&&(!s.updatedAt||s.updatedAt<U)&&_(s):i===R&&j(s,t)}}}function fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=R,n.pure?g.push(n):w.push(n),n.observers&&fe(n))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ee(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Q(e,t,n){try{for(const s of t)s(e)}catch(s){F(s,n&&n.owner||null)}}function F(e,t=d){const n=H&&t&&t.context&&t.context[H],s=Ee(e);if(!n)throw s;w?w.push({fn(){Q(s,n,t)},state:m}):Q(s,n,t)}function W(e){if(typeof e=="function"&&!e.length)return W(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=W(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const Se=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function me(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return ie(()=>J(r)),()=>{let c=e()||[],a,f;return c[ge],p(()=>{let y=c.length,x,v,L,M,I,A,E,S,C;if(y===0)o!==0&&(J(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[Se],i[0]=O(de=>(r[0]=de,n.fallback())),o=1);else if(o===0){for(i=new Array(y),f=0;f<y;f++)s[f]=c[f],i[f]=O(b);o=y}else{for(L=new Array(y),M=new Array(y),l&&(I=new Array(y)),A=0,E=Math.min(o,y);A<E&&s[A]===c[A];A++);for(E=o-1,S=y-1;E>=A&&S>=A&&s[E]===c[S];E--,S--)L[S]=i[E],M[S]=r[E],l&&(I[S]=l[E]);for(x=new Map,v=new Array(S+1),f=S;f>=A;f--)C=c[f],a=x.get(C),v[f]=a===void 0?-1:a,x.set(C,f);for(a=A;a<=E;a++)C=s[a],f=x.get(C),f!==void 0&&f!==-1?(L[f]=i[a],M[f]=r[a],l&&(I[f]=l[a]),f=v[f],x.set(C,f)):r[a]();for(f=A;f<y;f++)f in L?(i[f]=L[f],r[f]=M[f],l&&(l[f]=I[f],l[f](f))):i[f]=O(b);i=i.slice(0,o=y),s=c.slice(0)}return i});function b(y){if(r[f]=y,l){const[x,v]=se(f);return l[f]=v,t(c[f],x)}return t(c[f])}}}let ue=!1;function $e(){ue=!0}function Ie(e,t){if(ue&&u.context){const n=u.context;V(he());const s=p(()=>e(t||{}));return V(n),s}return p(()=>e(t||{}))}const ce=e=>`Stale read from <${e}>.`;function Oe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(me(()=>e.each,e.children,t||void 0))}function Pe(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return $(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?p(()=>i(t?s:()=>{if(!p(n))throw ce("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Re(e){let t=!1;const n=(r,o)=>r[0]===o[0]&&(t?r[1]===o[1]:!r[1]==!o[1])&&r[2]===o[2],s=we(()=>e.children),i=$(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let o=0;o<r.length;o++){const l=r[o].when;if(l)return t=!!r[o].keyed,[o,l,r[o]]}return[-1]},void 0,{equals:n});return $(()=>{const[r,o,l]=i();if(r<0)return e.fallback;const c=l.children;return typeof c=="function"&&c.length>0?p(()=>c(t?o:()=>{if(p(i)[0]!==r)throw ce("Match");return l.when})):c},void 0,void 0)}function _e(e){return e}let N;function je(){N&&[...N].forEach(e=>e())}function De(e){let t;u.context&&u.load&&(t=u.load(u.context.id+u.context.count));const[n,s]=se(t,void 0);return N||(N=new Set),N.add(s),ie(()=>N.delete(s)),$(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?p(()=>r(i,()=>s())):r}return pe(()=>e.children,s)},void 0,void 0)}function ve(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,c=t[i-1].nextSibling,a=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:c;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!a){a=new Map;let b=l;for(;b<r;)a.set(n[b],b++)}const f=a.get(t[o]);if(f!=null)if(l<f&&f<r){let b=o,y=1,x;for(;++b<i&&b<r&&!((x=a.get(t[b]))==null||x!==f+y);)y++;if(y>f-l){const v=t[o];for(;l<f;)e.insertBefore(n[l++],v)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Z="_$DX_DELEGATE";function Ce(e,t,n,s={}){let i;return O(r=>{i=r,t===document?e():Te(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ue(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>p(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function qe(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,ae))}}function Ye(e,t,n){!u.context&&(e[t]=n)}function Fe(e,t,n){u.context||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Ke(e,t){u.context||(t==null?e.removeAttribute("class"):e.className=t)}function Ve(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function Ge(e,t,n){return p(()=>e(t,n))}function Te(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);G(i=>D(e,t(),i,n),s)}function Ne(e,t,n={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=i=>globalThis._$HY.r[i],u.has=i=>i in globalThis._$HY.r,u.gather=i=>ee(t,i),u.registry=new Map,u.context={id:n.renderId||"",count:0},ee(t,n.renderId);const s=Ce(e,t,[...t.childNodes],n);return u.context=null,s}function We(e){let t,n;return!u.context||!(t=u.registry.get(n=ke()))?e():(u.completed&&u.completed.add(t),u.registry.delete(n),t)}function Xe(e){let t=e,n=0,s=[];if(u.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Qe(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ae(s),t.shift()}}),u.events.queued=!0)}function ae(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,s,i){if(u.context){!n&&(n=[...e.childNodes]);let l=[];for(let c=0;c<n.length;c++){const a=n[c];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():l.push(a)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(u.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=T(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(u.context)return n;n=T(e,n,s)}else{if(r==="function")return G(()=>{let l=t();for(;typeof l=="function";)l=l();n=D(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(X(l,t,n,i))return G(()=>n=D(e,l,n,s,!0)),()=>n;if(u.context){if(!l.length)return n;if(s===void 0)return[...e.childNodes];let a=l[0],f=[a];for(;(a=a.nextSibling)!==s;)f.push(a);return n=f}if(l.length===0){if(n=T(e,n,s),o)return n}else c?n.length===0?z(e,l,s):ve(e,n,l):(n&&T(e),z(e,l));n=l}else if(t.nodeType){if(u.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],c=n&&n[r],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=X(e,l,c)||i;else if(a==="function")if(s){for(;typeof l=="function";)l=l();i=X(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const f=String(l);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return i}function z(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const c=l.parentNode===e;!r&&!o?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function ee(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!u.registry.has(r)&&u.registry.set(r,i)}}function ke(){const e=u.context;return`${e.id}${e.count++}`}const Je=(...e)=>($e(),Ne(...e));export{Le as $,De as E,Oe as F,_e as M,Pe as S,Xe as a,Ie as b,Ke as c,qe as d,G as e,ge as f,We as g,Me as h,Te as i,Be as j,se as k,He as l,Re as m,Ye as n,$ as o,Ve as p,je as q,Qe as r,Fe as s,Ue as t,Ge as u,Je as v};