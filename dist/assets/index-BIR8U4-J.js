(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();let U,et,nt,rt;const m={light:"",dark:""},St=[];async function be(t){await new Promise(e=>setTimeout(e,t))}function Ee(){return"fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function $(t,e){try{return typeof t=="string"?(e??document).querySelector(t):t}catch{return null}}function b(t,e){try{return typeof t=="string"?(e??document).querySelectorAll(t):t??St}catch{return St}}function p(t,e){var n;return((n=t?.classList)==null?void 0:n.contains(e))??!1}function V(t,e){var n;return((n=t?.tagName)==null?void 0:n.toLowerCase())===e}function B(t,e){var n;return((n=t?.type)==null?void 0:n.toLowerCase())===e}function M(t,e){var n;(n=t?.classList)==null||n.add(e)}function h(t,e){var n;(n=t?.classList)==null||n.remove(e)}function T(t,e,n,r=!0){t?.addEventListener(e,n,r)}function Ut(t,e,n,r=!0){t?.removeEventListener(e,n,r)}function Te(t,e){var n;(n=e?.parentNode)==null||n.insertBefore(t,e)}function at(t){return t?.previousElementSibling}function Bt(t){return t?.nextElementSibling}function C(t){return t?.parentElement}function ve(t){const e=document.createElement("div");for(let n=0,r=Object.keys(t),o=r.length;n<o;n++){const i=r[n],s=t[i];e.setAttribute(i,s)}return e}function K(t){const e=t;B(e,"number")&&!e.value&&(e.value=""),e.placeholder||(e.placeholder=" "),t.getAttribute("data-ui")&&dt(t,null)}function Oe(t){dt(t.currentTarget,null,null,t)}function Ne(t){const e=t.currentTarget,n=C(e),r=$("input:not([type=file], [type=checkbox], [type=radio]), select, textarea",n);r&&r.focus()}function xe(t){const e=t.currentTarget;K(e)}function Me(t){const e=t.currentTarget;K(e)}function Yt(t){Ut(document.body,"click",Yt);const e=t.target,n=b("menu.active");for(let r=0,o=n.length;r<o;r++)Kt(e,n[r],t)}function Ae(t){const e=t.currentTarget;h(e,"active"),U&&clearTimeout(U)}function Ce(t){const e=t.currentTarget;lt(e)}function _e(t){const e=t.currentTarget;ft(e)}function Se(t){const e=t.currentTarget;lt(e,t)}function Pe(t){const e=t.currentTarget;ft(e,t)}function we(t){const e=t.currentTarget;$t(e)}function Pt(){et&&clearTimeout(et),et=setTimeout(()=>{q()},180)}function lt(t,e){if(e&&e.key==="Enter"){const o=at(t);if(!B(o,"file"))return;o.click();return}const n=t,r=Bt(t);B(r,"text")&&(r.value=n.files?Array.from(n.files).map(o=>o.name).join(", "):"",r.readOnly=!0,T(r,"keydown",Se,!1),K(r))}function ft(t,e){if(e&&e.key==="Enter"){const o=at(t);if(!B(o,"color"))return;o.click();return}const n=t,r=Bt(t);B(r,"text")&&(r.readOnly=!0,r.value=n.value,T(r,"keydown",Pe,!1),K(r))}function $t(t){const e=C(t),n=C(t);e.removeAttribute("style"),p(e,"min")&&e.style.setProperty("---size",`${Math.max(t.scrollHeight,n.offsetHeight)}px`)}function wt(t){const e=C(t),n=$("span",e),r=b("input",e);if(!r.length||!n)return;const o=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size"))||16,i=p(e,"max")?0:.25*o*100/r[0].offsetWidth,s=[],u=[];for(let g=0,H=r.length;g<H;g++){const R=parseFloat(r[g].min)||0,L=parseFloat(r[g].max)||100,N=parseFloat(r[g].value)||0,_=(N-R)*100/(L-R),k=i/2-i*_/100;s.push(_+k),u.push(N)}let c=s[0],l=0,a=100-l-c,f=u[0],d=u[1]||0;r.length>1&&(c=Math.abs(s[1]-s[0]),l=s[1]>s[0]?s[0]:s[1],a=100-l-c,d>f&&(f=u[1]||0,d=u[0])),e.style.setProperty("---start",`${l}%`),e.style.setProperty("---end",`${a}%`),e.style.setProperty("---value1",`'${f}'`),e.style.setProperty("---value2",`'${d}'`)}function st(t){if(t){const n=t.target;if(n.type==="range"){wt(n);return}}const e=b(".slider > input[type=range]");e.length?T(globalThis,"input",st,!1):Ut(globalThis,"input",st,!1);for(let n=0,r=e.length;n<r;n++)wt(e[n])}async function dt(t,e,n,r){if(!(!e&&(e=$(t.getAttribute("data-ui")),!e))){if(V(e,"dialog")){await ke(t,e);return}if(V(e,"menu")){Kt(t,e,r);return}if(p(e,"snackbar")){De(t,e,n);return}if(p(e,"page")){Le(t,e);return}if(F(t),p(e,"active")){h(e,"active");return}M(e,"active")}}function F(t){t.id&&p(t,"page")&&(t=$(`[data-ui="#${t.id}"]`)??t);const e=C(t);if(!p(e,"tabs"))return;const n=b("a",e);for(let r=0,o=n.length;r<o;r++)h(n[r],"active");M(t,"active")}function Le(t,e){F(t);const n=C(e);if(n)for(let r=0,o=n.children.length;r<o;r++)p(n.children[r],"page")&&h(n.children[r],"active");M(e,"active")}function Kt(t,e,n){nt&&clearTimeout(nt),nt=setTimeout(()=>{var r;T(document.body,"click",Yt),(r=document.activeElement)==null||r.blur(),F(t);const o=p(e,"active"),i=n?.target===t,s=!!t.closest("menu");if(!o&&s||o&&i){h(e,"active");return}const u=b("menu.active");for(let c=0,l=u.length;c<l;c++)h(u[c],"active");M(e,"active")},90)}async function ke(t,e){var n;(n=document.activeElement)==null||n.blur(),F(t);let r=at(e);const o=e,i=p(e,"active")||o.open,s=p(e,"modal"),u=C(e),c=V(u,"nav");if(p(r,"overlay")||(r=ve({class:"overlay"}),Te(r,e),await be(90)),r.onclick=()=>{s||(h(t,"active"),h(e,"active"),h(r,"active"),o.close())},c){const l=b("dialog, a, .overlay",u);for(let a=0,f=l.length;a<f;a++){const d=l[a];h(d,"active"),d.open&&d.close()}}i?(h(t,"active"),h(r,"active"),h(e,"active"),o.close()):(!V(t,"button")&&!p(t,"button")&&!p(t,"chip")&&M(t,"active"),M(r,"active"),M(e,"active"),s?o.showModal():o.show())}function De(t,e,n){var r;(r=document.activeElement)==null||r.blur(),F(t);const o=b(".snackbar.active");for(let i=0,s=o.length;i<s;i++)h(o[i],"active");M(e,"active"),T(e,"click",Ae),U&&clearTimeout(U),n!==-1&&(U=setTimeout(()=>{h(e,"active")},n??6e3))}function je(){if(m.light&&m.dark)return m;const t=document.createElement("body");t.className="light",document.body.appendChild(t);const e=document.createElement("body");e.className="dark",document.body.appendChild(e);const n=getComputedStyle(t),r=getComputedStyle(e),o=["--primary","--on-primary","--primary-container","--on-primary-container","--secondary","--on-secondary","--secondary-container","--on-secondary-container","--tertiary","--on-tertiary","--tertiary-container","--on-tertiary-container","--error","--on-error","--error-container","--on-error-container","--background","--on-background","--surface","--on-surface","--surface-variant","--on-surface-variant","--outline","--outline-variant","--shadow","--scrim","--inverse-surface","--inverse-on-surface","--inverse-primary","--surface-dim","--surface-bright","--surface-container-lowest","--surface-container-low","--surface-container","--surface-container-high","--surface-container-highest"];for(let i=0,s=o.length;i<s;i++)m.light+=o[i]+":"+n.getPropertyValue(o[i])+";",m.dark+=o[i]+":"+r.getPropertyValue(o[i])+";";return document.body.removeChild(t),document.body.removeChild(e),m}function Ie(t){if(!t||!globalThis.materialDynamicColors)return je();const e=/dark/i.test(document.body.className)?"dark":"light";return t.light&&t.dark?(m.light=t.light,m.dark=t.dark,document.body.setAttribute("style",t[e]),t):globalThis.materialDynamicColors(t).then(n=>{const r=o=>{let i="";for(let s=0,u=Object.keys(o),c=u.length;s<c;s++){const l=u[s],a=o[l],f=l.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();i+="--"+f+":"+a+";"}return i};return m.light=r(n.light),m.dark=r(n.dark),document.body.setAttribute("style",m[e]),m})}function Ue(t){if(!t)return/dark/i.test(document.body.className)?"dark":"light";document.body.classList.remove("light","dark"),document.body.classList.add(t);const e=t==="light"?m.light:m.dark;return globalThis.materialDynamicColors&&document.body.setAttribute("style",e),t}function Be(){rt||(rt=new MutationObserver(Pt),rt.observe(document.body,{childList:!0,subtree:!0}),Pt())}function q(t,e){if(t){if(t==="setup"){Be();return}if(t==="guid")return Ee();if(t==="mode")return Ue(e);if(t==="theme")return Ie(e);const c=$(t);if(!c)return;dt(c,c,e)}const n=b("[data-ui]");for(let c=0,l=n.length;c<l;c++)T(n[c],"click",Oe);const r=b(".field > label");for(let c=0,l=r.length;c<l;c++)T(r[c],"click",Ne);const o=b(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea");for(let c=0,l=o.length;c<l;c++){const a=o[c];T(a,"focus",xe),T(a,"blur",Me),K(a)}const i=b(".field > input[type=file]");for(let c=0,l=i.length;c<l;c++){const a=i[c];T(a,"change",Ce),lt(a)}const s=b(".field > input[type=color]");for(let c=0,l=s.length;c<l;c++){const a=s[c];T(a,"change",_e),ft(a)}const u=b(".field.textarea > textarea");for(let c=0,l=u.length;c<l;c++){const a=u[c];T(a,"input",we),$t(a)}st()}globalThis.addEventListener&&globalThis.addEventListener("load",async()=>await q("setup"));globalThis.beercss=q;globalThis.ui=q;/* Riot WIP, @license MIT */const w=new Map,Ye=Symbol("riot-component"),$e=new Set,ht="is",X="mount",mt="update",pt="unmount",Ft="shouldUpdate",Ht="onBeforeMount",Rt="onMounted",zt="onBeforeUpdate",Vt="onUpdated",Gt="onBeforeUnmount",qt="onUnmounted",E="props",v="state",Xt="slots",ct="root",Z=Symbol("pure"),ot=Symbol("is_updating"),I=Symbol("parent"),D=Symbol("attributes"),j=Symbol("template");/* Riot WIP, @license MIT */const W=0,gt=1,J=2,yt=3,Zt={ATTRIBUTE:W,EVENT:gt,TEXT:J,VALUE:yt};/* Riot WIP, @license MIT */function Ke(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Wt(t){return t.replace(/-(\w)/g,(e,n)=>n.toUpperCase())}/* Riot WIP, @license MIT */function Y(t,e){throw new Error(t,{cause:e})}function bt(t){const e=new Map,n=r=>(e.has(r)||e.set(r,t.call(this,r)))&&e.get(r);return n.cache=e,n}function ut(t){return t.reduce((e,n)=>{const{value:r,type:o}=n;switch(!0){case(!n.name&&o===W):return{...e,...r};case o===yt:e.value=n.value;break;default:e[Wt(n.name)]=n.value}return e},{})}/* Riot WIP, @license MIT */function Jt(t,e){return typeof t===e}function Qt(t){const e=t.ownerSVGElement;return!!e||e===null}function Q(t){return t.tagName.toLowerCase()==="template"}function Et(t){return Jt(t,"function")}function Fe(t){return Jt(t,"boolean")}function Tt(t){return!te(t)&&t.constructor===Object}function te(t){return t==null}/* Riot WIP, @license MIT */function y(){return this}function He(t,e){return e.forEach(n=>{t[n]=t[n].bind(t)}),t}function tt(t){return Et(t)?t.prototype&&t.prototype.constructor?new t:t():t}/* Riot WIP, @license MIT */function ee(t){return Array.from(t.attributes).reduce((e,n)=>(e[Wt(n.name)]=n.value,e),{})}function Re(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)}function vt(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ze(t){for(let e=0;e<t.length;e++)A(t[e])}const A=t=>t.remove(),x=(t,e)=>e&&e.parentNode&&e.parentNode.insertBefore(t,e),Ve=(t,e)=>e&&e.parentNode&&e.parentNode.replaceChild(t,e);/* Riot v9.1.8, @license MIT */const Ge={[X](t){this.el=t},[mt]:y,[pt](t,e,n=!1){n?A(this.el):n||vt(this.el)},clone:y,createDOM:y};/* Riot WIP, @license MIT */const ne=0,re=1,Ot=2,oe=3,ie=4,qe={EACH:ne,IF:re,SIMPLE:Ot,TAG:oe,SLOT:ie};/* Riot WIP, @license MIT */function O(t,e,n,r={}){return Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!1,configurable:!0,...r}),t}function se(t,e,n){return Object.entries(e).forEach(([r,o])=>{O(t,r,o,n)}),t}function ce(t,e){return Object.entries(e).forEach(([n,r])=>{t[n]||(t[n]=r)}),t}function Xe(t,e){return Tt(t)?Object.fromEntries(e.map(n=>[n,t[n]])):t}/* Riot WIP, @license MIT */const Ze=Symbol(),We=Symbol();function Je(){const t=document.createTextNode(""),e=document.createTextNode("");return t[Ze]=!0,e[We]=!0,{head:t,tail:e}}function Qe(t){const e=t.dom.cloneNode(!0),{head:n,tail:r}=Je();return{avoidDOMInjection:!0,fragment:e,head:n,tail:r,children:[n,...Array.from(e.childNodes),r]}}const tn=(t,e,n,r)=>{const o=e.length;let i=t.length,s=o,u=0,c=0,l=null;for(;u<i||c<s;)if(i===u){const a=s<o?c?n(e[c-1],-0).nextSibling:n(e[s-c],0):r;for(;c<s;)x(n(e[c++],1),a)}else if(s===c)for(;u<i;)(!l||!l.has(t[u]))&&A(n(t[u],-1)),u++;else if(t[u]===e[c])u++,c++;else if(t[i-1]===e[s-1])i--,s--;else if(t[u]===e[s-1]&&e[c]===t[i-1]){const a=n(t[--i],-1).nextSibling;x(n(e[c++],1),n(t[u++],-1).nextSibling),x(n(e[--s],1),a),t[i]=e[s]}else{if(!l){l=new Map;let a=c;for(;a<s;)l.set(e[a],a++)}if(l.has(t[u])){const a=l.get(t[u]);if(c<a&&a<s){let f=u,d=1;for(;++f<i&&f<s&&l.get(t[f])===a+d;)d++;if(d>a-c){const g=n(t[u],0);for(;c<a;)x(n(e[c++],1),g)}else Ve(n(e[c++],1),n(t[u++],-1))}else u++}else A(n(t[u++],-1))}return e},Lt=Symbol("unmount"),en={nodes:[],mount(t,e){return this.update(t,e)},update(t,e){const{placeholder:n,nodes:r,childrenMap:o}=this,i=t===Lt?null:this.evaluate(t),s=i?Array.from(i):[],{newChildrenMap:u,batches:c,futureNodes:l}=sn(s,t,e,this);return tn(r,l,nn(Array.from(o.values()),e),n),c.forEach(a=>a()),this.childrenMap=u,this.nodes=l,this},unmount(t,e){return this.update(Lt,e),this}};function nn(t,e){return(n,r)=>{if(r<0){const o=t[t.length-1];if(o){const{template:i,nodes:s,context:u}=o;s.pop(),s.length||(t.pop(),i.unmount(u,e,null))}}return n}}function rn(t,e){return t?!t(e):!1}function on(t,{itemName:e,indexName:n,index:r,item:o}){return O(t,e,o),n&&O(t,n,r),t}function sn(t,e,n,r){const{condition:o,template:i,childrenMap:s,itemName:u,getKey:c,indexName:l,root:a,isTemplateTag:f}=r,d=new Map,g=[],H=[];return t.forEach((R,L)=>{const N=on(Object.create(e),{itemName:u,indexName:l,index:L,item:R}),_=c?c(N):L,k=s.get(_),z=[];if(rn(o,N))return;const At=!k,S=k?k.template:i.clone(),Ct=S.el||a.cloneNode(),_t=f&&At?Qe(S):S.meta;At?g.push(()=>S.mount(Ct,N,n,_t)):g.push(()=>S.update(N,n)),f?z.push(..._t.children):z.push(Ct),s.delete(_),H.push(...z),d.set(_,{nodes:z,template:S,context:N,index:L})}),{newChildrenMap:d,batches:g,futureNodes:H}}function cn(t,{evaluate:e,condition:n,itemName:r,indexName:o,getKey:i,template:s}){const u=document.createTextNode(""),c=t.cloneNode();return x(u,t),A(t),{...en,childrenMap:new Map,node:t,root:c,condition:n,evaluate:e,isTemplateTag:Q(c),template:s.createDOM(t),getKey:i,indexName:o,itemName:r,placeholder:u}}const un={mount(t,e){return this.update(t,e)},update(t,e){const n=!!this.evaluate(t),r=!this.value&&n,o=this.value&&!n,i=()=>{const s=this.node.cloneNode();x(s,this.placeholder),this.template=this.template.clone(),this.template.mount(s,t,e)};switch(!0){case r:i();break;case o:this.unmount(t);break;default:n&&this.template.update(t,e)}return this.value=n,this},unmount(t,e){return this.template.unmount(t,e,!0),this}};function an(t,{evaluate:e,template:n}){const r=document.createTextNode("");return x(r,t),A(t),{...un,node:t,evaluate:e,placeholder:r,template:n.createDOM(t)}}const ln=typeof Element>"u"?{}:Element.prototype,fn=bt(t=>ln.hasOwnProperty(t));function dn(t,e){Object.keys(e).forEach(n=>ue(t,{name:n},e[n]))}function hn(t,e,n){const r=e?Object.keys(e):[];Object.keys(n).filter(o=>!r.includes(o)).forEach(o=>t.removeAttribute(o))}function mn(t){return["string","number","boolean"].includes(typeof t)}function pn(t,e){return e?!t&&t!==0:typeof t>"u"||t===null}function ue(t,{name:e,isBoolean:n},r,o){if(!e){o&&hn(t,r,o),r&&dn(t,r);return}!fn(e)&&(Fe(r)||Tt(r)||Et(r))&&(t[e]=r),pn(r,n)?t.removeAttribute(e):mn(r)&&t.setAttribute(e,gn(e,r,n))}function gn(t,e,n){return e===!0&&n?t:e}const yn=/^on/,bn=t=>Array.isArray(t)?t:[t,!1],En={handleEvent(t){this[t.type](t)}},ae=new WeakMap,Tn=t=>{const e=Object.create(En);return ae.set(t,e),e};function vn(t,{name:e},n){const r=e.replace(yn,""),o=ae.get(t)||Tn(t),[i,s]=bn(n),u=o[r],c=u&&!i,l=i&&!u;c&&t.removeEventListener(r,o),l&&t.addEventListener(r,o,s),o[r]=i}function le(t){return te(t)?"":t}const On=(t,e)=>t.childNodes[e];function Nn(t,e,n){t.data=le(n)}function xn(t,e,n){t.value=le(n)}const Mn={[W]:ue,[gt]:vn,[J]:Nn,[yt]:xn},An={mount(t){return this.value=this.evaluate(t),it(this,this.value),this},update(t){const e=this.evaluate(t);return this.value!==e&&(it(this,e),this.value=e),this},unmount(){return this.type===gt&&it(this,null),this}};function it(t,e){return Mn[t.type](t.node,t,e,t.value)}function fe(t,e){return{...An,...e,node:e.type===J?On(t,e.childNodeIndex):t}}function Cn(t,e,n){return e.reduce((r,o)=>({...r,[o]:i=>t.map(s=>s[o](i))&&n}),{})}function _n(t,{expressions:e}){return Cn(e.map(n=>fe(t,n)),["mount","update","unmount"])}function Sn(t,e,n){if(!t||!t.length)return n;const r=t.map(o=>({...o,value:o.evaluate(e)}));return Object.assign(Object.create(n||null),ut(r))}const kt=(t,e)=>t[I]||e,Pn={attributes:[],getTemplateScope(t,e){return Sn(this.attributes,t,e)},mount(t,e){const n=t.slots?t.slots.find(({id:i})=>i===this.name):!1,{parentNode:r}=this.node,o=kt(t,e);return this.template=n&&Nt(n.html,n.bindings).createDOM(r),this.template&&(vt(this.node),this.template.mount(this.node,this.getTemplateScope(t,o),o),this.template.children=Array.from(this.node.childNodes)),de(this.node),A(this.node),this},update(t,e){if(this.template){const n=kt(t,e);this.template.update(this.getTemplateScope(t,n),n)}return this},unmount(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}};function de(t){const e=t&&t.firstChild;e&&(x(e,t),de(t))}function wn(t,{name:e,attributes:n}){return{...Pn,attributes:n,node:t,name:e}}function Ln(t,e=[],n=[]){return t?t({slots:e,attributes:n}):Nt(Dn(e),[...kn(e),{expressions:n.map(r=>({type:W,...r}))}])}function kn(t){return t.reduce((e,{bindings:n})=>e.concat(n),[])}function Dn(t){return t.reduce((e,n)=>e+n.html,"")}const jn={mount(t){return this.update(t)},update(t,e){const n=this.evaluate(t);return n&&n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=Ln(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount(t,e,n){return this.tag&&this.tag.unmount(n),this}};function In(t,{evaluate:e,getComponent:n,slots:r,attributes:o}){return{...jn,node:t,evaluate:e,slots:r,attributes:o,getComponent:n}}const Dt={[re]:an,[Ot]:_n,[ne]:cn,[oe]:In,[ie]:wn};function Un(t,e){return t.map(n=>n.type===J?{...n,childNodeIndex:n.childNodeIndex+e}:n)}function Bn(t,e,n){const{selector:r,type:o,redundantAttribute:i,expressions:s}=e,u=r?t.querySelector(r):t;i&&u.removeAttribute(i);const c=s||[];return(Dt[o]||Dt[Ot])(u,{...e,expressions:n&&!r?Un(c,n):c})}function Yn(t,e){const n=Q(e)?e:document.createElement("template");return n.innerHTML=t,n.content}function $n(t,e){return e.ownerDocument.importNode(new window.DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,"application/xml").documentElement,!0)}function Kn(t,e){return Qt(t)?$n(e,t):Yn(e,t)}function Fn(t,e){switch(!0){case Qt(t):Re(e,t);break;case Q(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}}function Hn(t,e){return e&&(typeof e=="string"?Kn(t,e):e)}function Rn(t,e,n){const r=Array.from(t.childNodes);return Math.max(r.indexOf(e),r.indexOf(n.head)+1,0)}const zn={createDOM(t){return this.dom=this.dom||Hn(t,this.html)||document.createDocumentFragment(),this},mount(t,e,n,r={}){t||Y("Please provide DOM node to mount properly your template"),this.el&&this.unmount(e);const{fragment:o,children:i,avoidDOMInjection:s}=r,{parentNode:u}=i?i[0]:t,c=Q(t),l=c?Rn(u,t,r):null;this.createDOM(t);const a=o||this.dom.cloneNode(!0);return this.el=c?u:t,this.children=c?i||Array.from(a.childNodes):null,!s&&a&&Fn(t,a),this.bindings=this.bindingsData.map(f=>Bn(this.el,f,l)),this.bindings.forEach(f=>f.mount(e,n)),this.meta=r,this},update(t,e){return this.bindings.forEach(n=>n.update(t,e)),this},unmount(t,e,n=!1){const r=this.el;if(!r)return this;switch(this.bindings.forEach(o=>o.unmount(t,e,n)),!0){case(r[Z]||n===null):break;case Array.isArray(this.children):ze(this.children);break;case!n:vt(r);break;case!!n:A(r);break}return this.el=null,this},clone(){return{...this,meta:{},el:null}}};function Nt(t,e=[]){return{...zn,html:t,bindingsData:e}}/* Riot v9.1.8, @license MIT */function Vn(t,e,n){return t(Nt,Zt,qe,n)}/* Riot v9.1.8, @license MIT */const Gn=Object.freeze({[X]:y,[mt]:y,[pt]:y});/* Riot v9.1.8, @license MIT */const he=(t,e)=>t[Ye]=e;/* Riot v9.1.8, @license MIT */function me(t){return[X,mt,pt].reduce((e,n)=>(e[n]=t(n),e),{})}/* Riot v9.1.8, @license MIT */function qn(t,{slots:e,attributes:n,props:r,css:o,template:i}){i&&Y("Pure components can not have html"),o&&Y("Pure components do not have css");const s=ce(t({slots:e,attributes:n,props:r}),Gn);return me(u=>(...c)=>{if(u===X){const[l]=c;O(l,Z,!0),he(l,s)}return s[u](...c),s})}/* Riot WIP, @license MIT */function xt(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&typeof t.length=="number"?Array.from(t):[t]}/* Riot WIP, @license MIT */function G(t,e){return xt(typeof t=="string"?(e||document).querySelectorAll(t):t)}/* Riot v9.1.8, @license MIT */const Xn=Object.freeze({$(t){return G(t,this.root)[0]},$$(t){return G(t,this.root)}});/* Riot v9.1.8, @license MIT */const Zn=Object.freeze({[Ft]:y,[Ht]:y,[Rt]:y,[zt]:y,[Vt]:y,[Gt]:y,[qt]:y});/* Riot WIP, @license MIT */const jt=t=>t.length===1?t[0]:t;function Wn(t,e,n){const r=[e];return jt(xt(t).map(o=>jt(r.map(i=>o[n](i)))))}function pe(t,e,n){const r=typeof e=="object"?e:{[e]:n},o=Object.keys(r);return xt(t).forEach(i=>{o.forEach(s=>i.setAttribute(s,r[s]))}),t}function Jn(t,e){return Wn(t,e,"getAttribute")}/* Riot v9.1.8, @license MIT */const P=new Map,Qn="style[riot]",tr=(t=>()=>t||(t=G(Qn)[0]||document.createElement("style"),pe(t,"type","text/css"),t.parentNode||document.head.appendChild(t),t))(),er={CSS_BY_NAME:P,add(t,e){return P.has(t)||(P.set(t,e),this.inject()),this},inject(){return tr().innerHTML=[...P.values()].join(`
`),this},remove(t){return P.has(t)&&(P.delete(t),this.inject()),this}};/* Riot WIP, @license MIT */function ge(t,...e){return(...n)=>(n=[...e,...n],n.length<t.length?ge(t,...n):t(...n))}/* Riot v9.1.8, @license MIT */function ye(t){return Jn(t,ht)||t.tagName.toLowerCase()}/* Riot v9.1.8, @license MIT */function nr(t,e){ye(t)!==e&&pe(t,ht,e)}/* Riot v9.1.8, @license MIT */function It(t,e){return{...t,...tt(e)}}/* Riot v9.1.8, @license MIT */function rr(t,e={}){return{...ee(t),...tt(e)}}/* Riot v9.1.8, @license MIT */function or(t,e=[]){const n=e.map(o=>fe(t,o)),r={};return Object.assign(r,{expressions:n,...me(o=>i=>(n.forEach(s=>s[o](i)),r))})}/* Riot v9.1.8, @license MIT */function ir(t){return[...$e].reduce((e,n)=>n(e)||e,t)}/* Riot v9.1.8, @license MIT */const sr=bt(t=>{const e=t?.bindingsData?.[0];return e?.selector?[]:e?.expressions?.reduce((n,{name:r,type:o})=>o===Zt.ATTRIBUTE?n.concat([r]):n,[])??[]});/* Riot v9.1.8, @license MIT */function cr(t,{slots:e,attributes:n,props:r}){return He(ir(se(Tt(t)?Object.create(t):t,{mount(o,i={},s){return O(o,Z,!1),this[I]=s,this[D]=or(o,n).mount(s),O(this,E,Object.freeze({...rr(o,r),...ut(this[D].expressions)})),this[v]=It(this[v],i),this[j]=this.template.createDOM(o).clone(),he(o,this),t.name&&nr(o,t.name),O(this,ct,o),O(this,Xt,e),this[Ht](this[E],this[v]),this[j].mount(o,this,s),this[Rt](this[E],this[v]),this},update(o={},i){i&&(this[I]=i,this[D].update(i));const s=sr(this[j]),u=Array.from(this[ct].attributes).filter(({name:f})=>!s.includes(f)),c=ee({attributes:u}),{[ht]:l,...a}={...c,...ut(this[D].expressions)};if(this[Ft](a,this[E])!==!1)return O(this,E,Object.freeze({...i?Xe(this[E],s):this[E],...a})),this[v]=It(this[v],o),this[zt](this[E],this[v]),this[ot]||(this[ot]=!0,this[j].update(this,this[I])),this[Vt](this[E],this[v]),this[ot]=!1,this},unmount(o){return this[Gt](this[E],this[v]),this[D].unmount(),this[j].unmount(this,this[I],o===null?null:!o),this[qt](this[E],this[v]),this}})),Object.keys(t).filter(o=>Et(t[o])))}/* Riot v9.1.8, @license MIT */function ur({css:t,template:e,componentAPI:n,name:r}){return t&&r&&er.add(r,t),ge(cr)(se(ce(n,{...Zn,[E]:{},[v]:{}}),{[Xt]:null,[ct]:null,...Xn,name:r,css:t,template:e}))}/* Riot v9.1.8, @license MIT */function ar(t={}){return Object.entries(tt(t)).reduce((e,[n,r])=>(e[Ke(n)]=Mt(r),e),{})}const lr=t=>{const e=ar(t.exports?t.exports.components:{});return n=>n===t.name?fr(t):e[n]||w.get(n)},fr=bt(Mt);function Mt(t){const{css:e,template:n,exports:r,name:o}=t,i=n?Vn(n,t,lr(t)):Ge;return({slots:s,attributes:u,props:c})=>{if(r&&r[Z])return qn(r,{slots:s,attributes:u,props:c,css:e,template:n});const l=tt(r)||{},a=ur({css:e,template:i,componentAPI:l,name:o})({slots:s,attributes:u,props:c});return{mount(f,d,g){return a.mount(f,g,d)},update(f,d){return a.update(d,f)},unmount(f){return a.unmount(f)}}}}/* Riot v9.1.8, @license MIT */function dr(t,{css:e,template:n,exports:r}){return w.has(t)&&Y(`The component "${t}" was already registered`),w.set(t,Mt({name:t,css:e,template:n,exports:r})),w}/* Riot v9.1.8, @license MIT */function hr(t,e,n,r){const o=ye(t);return w.has(o)||Y(`The component named "${o}" was never registered`),w.get(o)({props:e,slots:r}).mount(t)}/* Riot v9.1.8, @license MIT */function mr(t,e,n){return G(t).map(r=>hr(r,e))}console.log("MYLABEL");const pr={css:null,exports:{mydata:"mydata",onMounted(){this.state=this.props,console.log(JSON.stringify(this.state)),this.update()},onBeforeUpdate(t,e){console.log("onBeforeUpdate")},onUpdated(){console.log("onUpdated")}},template:(t,e,n,r)=>t('<button><i>home</i><span expr0="expr0"> </span></button>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:e.TEXT,childNodeIndex:0,evaluate:o=>["MYLABEL ",o.state.firstname].join("")}]}]),name:"c-label"};console.log("sub1");var gr={firstname:"Wolfgang",lastname:"Gehner"};dr("c-label",pr);mr("c-label",gr);