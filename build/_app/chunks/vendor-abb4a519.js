var Io=Object.defineProperty,Eo=Object.defineProperties;var wo=Object.getOwnPropertyDescriptors;var Ui=Object.getOwnPropertySymbols;var To=Object.prototype.hasOwnProperty,bo=Object.prototype.propertyIsEnumerable;var xi=(e,t,n)=>t in e?Io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fi=(e,t)=>{for(var n in t||(t={}))To.call(t,n)&&xi(e,n,t[n]);if(Ui)for(var n of Ui(t))bo.call(t,n)&&xi(e,n,t[n]);return e},ji=(e,t)=>Eo(e,wo(t));function pe(){}function So(e,t){for(const n in t)e[n]=t[n];return e}function Bi(e){return e()}function $i(){return Object.create(null)}function ke(e){e.forEach(Bi)}function Ao(e){return typeof e=="function"}function ko(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Co(e){return Object.keys(e).length===0}function Ro(e,...t){if(e==null)return pe;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Du(e,t,n){e.$$.on_destroy.push(Ro(t,n))}function Pu(e,t,n,i){if(e){const s=Hi(e,t,n,i);return e[0](s)}}function Hi(e,t,n,i){return e[1]&&i?So(n.ctx.slice(),e[1](i(t))):n.ctx}function Nu(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(t.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=t.dirty[a]|s[a];return r}return t.dirty|s}return t.dirty}function Lu(e,t,n,i,s,r){if(s){const o=Hi(t,n,i,r);e.p(o,s)}}function Mu(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function Uu(e,t,n){return e.set(n),t}let ht=!1;function Oo(){ht=!0}function Do(){ht=!1}function Po(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function No(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let h=0;h<t.length;h++){const u=t[h];u.claim_order!==void 0&&c.push(u)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let c=0;c<t.length;c++){const h=t[c].claim_order,u=(s>0&&t[n[s]].claim_order<=h?s+1:Po(1,s,_=>t[n[_]].claim_order,h))-1;i[c]=n[u]+1;const p=u+1;n[p]=c,s=Math.max(p,s)}const r=[],o=[];let a=t.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(r.push(t[c-1]);a>=c;a--)o.push(t[a]);a--}for(;a>=0;a--)o.push(t[a]);r.reverse(),o.sort((c,h)=>c.claim_order-h.claim_order);for(let c=0,h=0;c<o.length;c++){for(;h<r.length&&o[c].claim_order>=r[h].claim_order;)h++;const u=h<r.length?r[h]:null;e.insertBefore(o[c],u)}}function Lo(e,t){if(ht){for(No(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function xu(e,t,n){ht&&!n?Lo(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function Mo(e){e.parentNode.removeChild(e)}function Uo(e){return document.createElement(e)}function an(e){return document.createTextNode(e)}function Fu(){return an(" ")}function ju(){return an("")}function Bu(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $u(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Hu(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function xo(e){return Array.from(e.childNodes)}function Fo(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Vi(e,t,n,i,s=!1){Fo(e);const r=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const a=e[o];if(t(a)){const c=n(a);return c===void 0?e.splice(o,1):e[o]=c,s||(e.claim_info.last_index=o),a}}for(let o=e.claim_info.last_index-1;o>=0;o--){const a=e[o];if(t(a)){const c=n(a);return c===void 0?e.splice(o,1):e[o]=c,s?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,a}}return i()})();return r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,r}function jo(e,t,n,i){return Vi(e,s=>s.nodeName===t,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(t))}function Vu(e,t,n){return jo(e,t,n,Uo)}function Bo(e,t){return Vi(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>an(t),!0)}function Wu(e){return Bo(e," ")}function zu(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Gu(e,t){e.value=t==null?"":t}function qu(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}let lt;function ut(e){lt=e}function dt(){if(!lt)throw new Error("Function called outside component initialization");return lt}function Ku(e){dt().$$.on_mount.push(e)}function Xu(e){dt().$$.after_update.push(e)}function Ju(e){dt().$$.on_destroy.push(e)}function Yu(e,t){dt().$$.context.set(e,t)}const Ce=[],Wi=[],ft=[],zi=[],$o=Promise.resolve();let cn=!1;function Ho(){cn||(cn=!0,$o.then(Gi))}function hn(e){ft.push(e)}let ln=!1;const un=new Set;function Gi(){if(!ln){ln=!0;do{for(let e=0;e<Ce.length;e+=1){const t=Ce[e];ut(t),Vo(t.$$)}for(ut(null),Ce.length=0;Wi.length;)Wi.pop()();for(let e=0;e<ft.length;e+=1){const t=ft[e];un.has(t)||(un.add(t),t())}ft.length=0}while(Ce.length);for(;zi.length;)zi.pop()();cn=!1,ln=!1,un.clear()}}function Vo(e){if(e.fragment!==null){e.update(),ke(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(hn)}}const pt=new Set;let ee;function Qu(){ee={r:0,c:[],p:ee}}function Zu(){ee.r||ke(ee.c),ee=ee.p}function Wo(e,t){e&&e.i&&(pt.delete(e),e.i(t))}function ed(e,t,n,i){if(e&&e.o){if(pt.has(e))return;pt.add(e),ee.c.push(()=>{pt.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function td(e,t){const n={},i={},s={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(i[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);e[r]=a}else for(const c in o)s[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function nd(e){return typeof e=="object"&&e!==null?e:{}}function id(e){e&&e.c()}function sd(e,t){e&&e.l(t)}function zo(e,t,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=e.$$;s&&s.m(t,n),i||hn(()=>{const c=r.map(Bi).filter(Ao);o?o.push(...c):ke(c),e.$$.on_mount=[]}),a.forEach(hn)}function Go(e,t){const n=e.$$;n.fragment!==null&&(ke(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qo(e,t){e.$$.dirty[0]===-1&&(Ce.push(e),Ho(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function rd(e,t,n,i,s,r,o,a=[-1]){const c=lt;ut(e);const h=e.$$={fragment:null,ctx:null,props:r,update:pe,not_equal:s,bound:$i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:$i(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(h.root);let u=!1;if(h.ctx=n?n(e,t.props||{},(p,_,...I)=>{const O=I.length?I[0]:_;return h.ctx&&s(h.ctx[p],h.ctx[p]=O)&&(!h.skip_bound&&h.bound[p]&&h.bound[p](O),u&&qo(e,p)),_}):[],h.update(),u=!0,ke(h.before_update),h.fragment=i?i(h.ctx):!1,t.target){if(t.hydrate){Oo();const p=xo(t.target);h.fragment&&h.fragment.l(p),p.forEach(Mo)}else h.fragment&&h.fragment.c();t.intro&&Wo(e.$$.fragment),zo(e,t.target,t.anchor,t.customElement),Do(),Gi()}ut(c)}class od{$destroy(){Go(this,1),this.$destroy=pe}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!Co(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ge=[];function ad(e,t=pe){let n;const i=new Set;function s(a){if(ko(e,a)&&(e=a,n)){const c=!ge.length;for(const h of i)h[1](),ge.push(h,e);if(c){for(let h=0;h<ge.length;h+=2)ge[h][0](ge[h+1]);ge.length=0}}}function r(a){s(a(e))}function o(a,c=pe){const h=[a,c];return i.add(h),i.size===1&&(n=t(s)||pe),a(e),()=>{i.delete(h),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)==55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ko=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ki={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,u=r>>2,p=(r&3)<<4|a>>4;let _=(a&15)<<2|h>>6,I=h&63;c||(I=64,o||(_=64)),i.push(n[u],n[p],n[_],n[I])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ko(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||h==null||p==null)throw Error();const _=r<<2|a>>4;if(i.push(_),h!==64){const I=a<<4&240|h>>2;if(i.push(I),p!==64){const O=h<<6&192|p;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Xo=function(e){const t=qi(e);return Ki.encodeByteArray(t,!0)},Xi=function(e){return Xo(e).replace(/\./g,"")},Jo=function(e){try{return Ki.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function Zo(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ea(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ta(){const e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function na(){return typeof indexedDB=="object"}function ia(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="FirebaseError";class j extends Error{constructor(t,n,i){super(n);this.code=t,this.customData=i,this.name=sa,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Re.prototype.create)}}class Re{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?ra(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new j(s,a,i)}}function ra(e,t){return e.replace(oa,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const oa=/\{\$([^}]+)}/g;function aa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function gt(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(Ji(r)&&Ji(o)){if(!gt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ji(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function De(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function Pe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ca(e,t){const n=new ha(e,t);return n.subscribe.bind(n)}class ha{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");la(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=dn),s.error===void 0&&(s.error=dn),s.complete===void 0&&(s.complete=dn);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function la(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function dn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return e&&e._delegate?e._delegate:e}class ne{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Yo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fa(t))try{this.getOrInitializeService({instanceIdentifier:ie})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ie){return this.instances.has(t)}getOptions(t=ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:da(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ie){return this.component?this.component.multipleInstances?t:ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function da(e){return e===ie?void 0:e}function fa(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ua(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(m||(m={}));const ga={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},ma=m.INFO,_a={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},va=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=_a[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fn{constructor(t){this.name=t,this._logLevel=ma,this._logHandler=va,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in m))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ga[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...t),this._logHandler(this,m.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...t),this._logHandler(this,m.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,m.INFO,...t),this._logHandler(this,m.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,m.WARN,...t),this._logHandler(this,m.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...t),this._logHandler(this,m.ERROR,...t)}}const ya=(e,t)=>t.some(n=>e instanceof n);let Yi,Qi;function Ia(){return Yi||(Yi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ea(){return Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zi=new WeakMap,pn=new WeakMap,es=new WeakMap,gn=new WeakMap,mn=new WeakMap;function wa(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(z(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Zi.set(n,e)}).catch(()=>{}),mn.set(t,e),t}function Ta(e){if(pn.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});pn.set(e,t)}let _n={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||es.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return z(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ba(e){_n=e(_n)}function Sa(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(vn(this),t,...n);return es.set(i,t.sort?t.sort():[t]),z(i)}:Ea().includes(e)?function(...t){return e.apply(vn(this),t),z(Zi.get(this))}:function(...t){return z(e.apply(vn(this),t))}}function Aa(e){return typeof e=="function"?Sa(e):(e instanceof IDBTransaction&&Ta(e),ya(e,Ia())?new Proxy(e,_n):e)}function z(e){if(e instanceof IDBRequest)return wa(e);if(gn.has(e))return gn.get(e);const t=Aa(e);return t!==e&&(gn.set(e,t),mn.set(t,e)),t}const vn=e=>mn.get(e);function ka(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=z(o);return i&&o.addEventListener("upgradeneeded",c=>{i(z(o.result),c.oldVersion,c.newVersion,z(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ca=["get","getKey","getAll","getAllKeys","count"],Ra=["put","add","delete","clear"],yn=new Map;function ts(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yn.get(t))return yn.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Ra.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ca.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&c.done]))[0]};return yn.set(t,r),r}ba(e=>ji(Fi({},e),{get:(t,n,i)=>ts(t,n)||e.get(t,n,i),has:(t,n)=>!!ts(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Da(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Da(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const In="@firebase/app",ns="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new fn("@firebase/app"),Pa="@firebase/app-compat",Na="@firebase/analytics-compat",La="@firebase/analytics",Ma="@firebase/app-check-compat",Ua="@firebase/app-check",xa="@firebase/auth",Fa="@firebase/auth-compat",ja="@firebase/database",Ba="@firebase/database-compat",$a="@firebase/functions",Ha="@firebase/functions-compat",Va="@firebase/installations",Wa="@firebase/installations-compat",za="@firebase/messaging",Ga="@firebase/messaging-compat",qa="@firebase/performance",Ka="@firebase/performance-compat",Xa="@firebase/remote-config",Ja="@firebase/remote-config-compat",Ya="@firebase/storage",Qa="@firebase/storage-compat",Za="@firebase/firestore",ec="@firebase/firestore-compat",tc="firebase",nc="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]",ic={[In]:"fire-core",[Pa]:"fire-core-compat",[La]:"fire-analytics",[Na]:"fire-analytics-compat",[Ua]:"fire-app-check",[Ma]:"fire-app-check-compat",[xa]:"fire-auth",[Fa]:"fire-auth-compat",[ja]:"fire-rtdb",[Ba]:"fire-rtdb-compat",[$a]:"fire-fn",[Ha]:"fire-fn-compat",[Va]:"fire-iid",[Wa]:"fire-iid-compat",[za]:"fire-fcm",[Ga]:"fire-fcm-compat",[qa]:"fire-perf",[Ka]:"fire-perf-compat",[Xa]:"fire-rc",[Ja]:"fire-rc-compat",[Ya]:"fire-gcs",[Qa]:"fire-gcs-compat",[Za]:"fire-fst",[ec]:"fire-fst-compat","fire-js":"fire-js",[tc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Map,En=new Map;function sc(e,t){try{e.container.addComponent(t)}catch(n){se.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function me(e){const t=e.name;if(En.has(t))return se.debug(`There were multiple attempts to register component ${t}.`),!1;En.set(t,e);for(const n of mt.values())sc(n,e);return!0}function ss(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},re=new Re("app","Firebase",rc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=nc;function cd(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:is,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw re.create("bad-app-name",{appName:String(i)});const s=mt.get(i);if(s){if(gt(e,s.options)&&gt(n,s.config))return s;throw re.create("duplicate-app",{appName:i})}const r=new pa(i);for(const a of En.values())r.addComponent(a);const o=new oc(e,n,r);return mt.set(i,o),o}function ac(e=is){const t=mt.get(e);if(!t)throw re.create("no-app",{appName:e});return t}function G(e,t,n){var i;let s=(i=ic[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),se.warn(a.join(" "));return}me(new ne(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="firebase-heartbeat-database",hc=1,Le="firebase-heartbeat-store";let wn=null;function rs(){return wn||(wn=ka(cc,hc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Le)}}}).catch(e=>{throw re.create("idb-open",{originalErrorMessage:e.message})})),wn}async function lc(e){var t;try{return(await rs()).transaction(Le).objectStore(Le).get(as(e))}catch(n){if(n instanceof j)se.warn(n.message);else{const i=re.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});se.warn(i.message)}}}async function os(e,t){var n;try{const s=(await rs()).transaction(Le,"readwrite");return await s.objectStore(Le).put(t,as(e)),s.done}catch(i){if(i instanceof j)se.warn(i.message);else{const s=re.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});se.warn(s.message)}}}function as(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=1024,dc=30*24*60*60*1e3;class fc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=dc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cs(),{heartbeatsToSend:n,unsentEntries:i}=pc(this._heartbeatsCache.heartbeats),s=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cs(){return new Date().toISOString().substring(0,10)}function pc(e,t=uc){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),hs(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hs(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class gc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return na()?ia().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return os(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return os(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function hs(e){return Xi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e){me(new ne("platform-logger",t=>new Oa(t),"PRIVATE")),me(new ne("heartbeat",t=>new fc(t),"PRIVATE")),G(In,ns,e),G(In,ns,"esm2017"),G("fire-js","")}mc("");var _c="firebase",vc="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G(_c,vc,"app");function Tn(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function ls(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yc=ls,us=new Re("auth","Firebase",ls());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new fn("@firebase/auth");function _t(e,...t){ds.logLevel<=m.ERROR&&ds.error(`Auth (${Ne}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,...t){throw bn(e,...t)}function M(e,...t){return bn(e,...t)}function Ic(e,t,n){const i=Object.assign(Object.assign({},yc()),{[t]:n});return new Re("auth","Firebase",i).create(t,{appName:e.name})}function bn(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return us.create(e,...t)}function d(e,t,...n){if(!e)throw bn(t,...n)}function B(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _t(t),new Error(t)}function $(e,t){e||B(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Map;function H(e){$(e instanceof Function,"Expected a class definition");let t=fs.get(e);return t?($(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fs.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e,t){const n=ss(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(gt(r,t!=null?t:{}))return s;L(s,"already-initialized")}return n.initialize({options:t})}function wc(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(H);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Tc(){return ps()==="http:"||ps()==="https:"}function ps(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tc()||Zo()||"connection"in navigator)?navigator.onLine:!0}function Sc(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,n){this.shortDelay=t,this.longDelay=n,$(n>t,"Short delay should be less than long delay!"),this.isMobile=Qo()||ea()}get(){return bc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,t){$(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;B("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;B("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;B("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Me(3e4,6e4);function Ue(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function xe(e,t,n,i,s={}){return ms(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Oe(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),gs.fetch()(_s(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))})}async function ms(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ac),t);try{const s=new Cc(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw vt(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vt(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vt(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw vt(e,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ic(e,u,h);L(e,u)}}catch(s){if(s instanceof j)throw s;L(e,"network-request-failed")}}async function Fe(e,t,n,i,s={}){const r=await xe(e,t,n,i,s);return"mfaPendingCredential"in r&&L(e,"multi-factor-auth-required",{_serverResponse:r}),r}function _s(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?An(e.config,s):`${e.config.apiScheme}://${s}`}class Cc{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(M(this.auth,"network-request-failed")),kc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=M(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(e,t){return xe(e,"POST","/v1/accounts:delete",t)}async function Oc(e,t){return xe(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Dc(e,t=!1){const n=te(e),i=await n.getIdToken(t),s=Cn(i);d(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:je(kn(s.auth_time)),issuedAtTime:je(kn(s.iat)),expirationTime:je(kn(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kn(e){return Number(e)*1e3}function Cn(e){var t;const[n,i,s]=e.split(".");if(n===void 0||i===void 0||s===void 0)return _t("JWT malformed, contained fewer than 3 sections"),null;try{const r=Jo(i);return r?JSON.parse(r):(_t("Failed to decode base64 JWT payload"),null)}catch(r){return _t("Caught error parsing JWT payload as JSON",(t=r)===null||t===void 0?void 0:t.toString()),null}}function Pc(e){const t=Cn(e);return d(t,"internal-error"),d(typeof t.exp!="undefined","internal-error"),d(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof j&&Nc(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Nc({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Be(e,Oc(n,{idToken:i}));d(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=((t=r.providerUserInfo)===null||t===void 0?void 0:t.length)?xc(r.providerUserInfo):[],a=Uc(e.providerData,o),c=e.isAnonymous,h=!(e.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=c?h:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vs(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,p)}async function Mc(e){const t=te(e);await yt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Uc(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function xc(e){return e.map(t=>{var{providerId:n}=t,i=Tn(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(e,t){const n=await ms(e,{},async()=>{const i=Oe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=_s(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gs.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){d(t.idToken,"internal-error"),d(typeof t.idToken!="undefined","internal-error"),d(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):Pc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return d(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Fc(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new $e;return i&&(d(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(d(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(d(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $e,this.toJSON())}_performRefresh(){return B("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){d(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class oe{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=Tn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Be(this,this.stsTokenManager.getToken(this.auth,t));return d(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Dc(this,t)}reload(){return Mc(this)}_assign(t){this!==t&&(d(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new oe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await yt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Be(this,Rc(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,c,h,u;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,I=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,O=(o=n.photoURL)!==null&&o!==void 0?o:void 0,fe=(a=n.tenantId)!==null&&a!==void 0?a:void 0,nn=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Di=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Pi=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:sn,emailVerified:Ni,isAnonymous:Li,providerData:rn,stsTokenManager:Mi}=n;d(sn&&Mi,t,"internal-error");const vo=$e.fromJSON(this.name,Mi);d(typeof sn=="string",t,"internal-error"),q(p,t.name),q(_,t.name),d(typeof Ni=="boolean",t,"internal-error"),d(typeof Li=="boolean",t,"internal-error"),q(I,t.name),q(O,t.name),q(fe,t.name),q(nn,t.name),q(Di,t.name),q(Pi,t.name);const on=new oe({uid:sn,auth:t,email:_,emailVerified:Ni,displayName:p,isAnonymous:Li,photoURL:O,phoneNumber:I,tenantId:fe,stsTokenManager:vo,createdAt:Di,lastLoginAt:Pi});return rn&&Array.isArray(rn)&&(on.providerData=rn.map(yo=>Object.assign({},yo))),nn&&(on._redirectEventId=nn),on}static async _fromIdTokenResponse(t,n,i=!1){const s=new $e;s.updateFromServerResponse(n);const r=new oe({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await yt(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ys.type="NONE";const Is=ys;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t,n){return`firebase:${e}:${t}:${n}`}class _e{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=It(this.userKey,s.apiKey,r),this.fullPersistenceKey=It("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?oe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new _e(H(Is),t,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||H(Is);const o=It(i,t.config.apiKey,t.name);let a=null;for(const h of n)try{const u=await h._get(o);if(u){const p=oe._fromJSON(t,u);h!==r&&(a=p),r=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new _e(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new _e(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ws(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(As(t))return"Blackberry";if(ks(t))return"Webos";if(Rn(t))return"Safari";if((t.includes("chrome/")||Ts(t))&&!t.includes("edge/"))return"Chrome";if(Ss(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ws(e=S()){return/firefox\//i.test(e)}function Rn(e=S()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ts(e=S()){return/crios\//i.test(e)}function bs(e=S()){return/iemobile/i.test(e)}function Ss(e=S()){return/android/i.test(e)}function As(e=S()){return/blackberry/i.test(e)}function ks(e=S()){return/webos/i.test(e)}function Et(e=S()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function jc(e=S()){var t;return Et(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function Bc(){return ta()&&document.documentMode===10}function Cs(e=S()){return Et(e)||Ss(e)||ks(e)||As(e)||/windows phone/i.test(e)||bs(e)}function $c(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e,t=[]){let n;switch(e){case"Browser":n=Es(S());break;case"Worker":n=`${Es(S())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ne}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const i=[];try{for(const s of this.queue)await s(t),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n,i){this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Os(this),this.idTokenSubscription=new Os(this),this.beforeStateQueue=new Hc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=us,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=H(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await _e.create(this,t),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await yt(t)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Sc()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?te(t):null;return n&&d(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&d(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(H(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Re("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&H(t)||this._popupRedirectResolver;d(n,this,"argument-error"),this.redirectPersistenceManager=await _e.create(this,[H(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return d(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function wt(e){return te(e)}class Os{constructor(t){this.auth=t,this.observer=null,this.addObserver=ca(n=>this.observer=n)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return B("not implemented")}_getIdTokenResponse(t){return B("not implemented")}_linkToIdToken(t,n){return B("not implemented")}_getReauthenticationResolver(t){return B("not implemented")}}async function Wc(e,t){return xe(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(e,t){return Fe(e,"POST","/v1/accounts:signInWithPassword",Ue(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e,t){return Fe(e,"POST","/v1/accounts:signInWithEmailLink",Ue(e,t))}async function qc(e,t){return Fe(e,"POST","/v1/accounts:signInWithEmailLink",Ue(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends On{constructor(t,n,i,s=null){super("password",i);this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new He(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new He(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return zc(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gc(t,{email:this._email,oobCode:this._password});default:L(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Wc(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qc(t,{idToken:n,email:this._email,oobCode:this._password});default:L(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t){return Fe(e,"POST","/v1/accounts:signInWithIdp",Ue(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="http://localhost";class ae extends On{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new ae(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):L("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=Tn(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ae(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ve(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,ve(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ve(t,n)}buildRequest(){const t={requestUri:Kc,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Oe(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jc(e){const t=De(Pe(e)).link,n=t?De(Pe(t)).deep_link_id:null,i=De(Pe(e)).deep_link_id;return(i?De(Pe(i)).link:null)||i||n||t||e}class Dn{constructor(t){var n,i,s,r,o,a;const c=De(Pe(t)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,p=Xc((s=c.mode)!==null&&s!==void 0?s:null);d(h&&u&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Jc(t);try{return new Dn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.providerId=ye.PROVIDER_ID}static credential(t,n){return He._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=Dn.parseLink(n);return d(i,"argument-error"),He._fromEmailAndCode(t,i.code,i.tenantId)}}ye.PROVIDER_ID="password";ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Ds{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K extends Ve{constructor(){super("facebook.com")}static credential(t){return ae._fromParams({providerId:K.PROVIDER_ID,signInMethod:K.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return K.credentialFromTaggedObject(t)}static credentialFromError(t){return K.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return K.credential(t.oauthAccessToken)}catch{return null}}}K.FACEBOOK_SIGN_IN_METHOD="facebook.com";K.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Ve{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return ae._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return X.credentialFromTaggedObject(t)}static credentialFromError(t){return X.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return X.credential(n,i)}catch{return null}}}X.GOOGLE_SIGN_IN_METHOD="google.com";X.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends Ve{constructor(){super("github.com")}static credential(t){return ae._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return J.credentialFromTaggedObject(t)}static credentialFromError(t){return J.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return J.credential(t.oauthAccessToken)}catch{return null}}}J.GITHUB_SIGN_IN_METHOD="github.com";J.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Ve{constructor(){super("twitter.com")}static credential(t,n){return ae._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Y.credentialFromTaggedObject(t)}static credentialFromError(t){return Y.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Y.credential(n,i)}catch{return null}}}Y.TWITTER_SIGN_IN_METHOD="twitter.com";Y.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(e,t){return Fe(e,"POST","/v1/accounts:signUp",Ue(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await oe._fromIdTokenResponse(t,i,s),o=Ps(i);return new ce({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=Ps(i);return new ce({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function Ps(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends j{constructor(t,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Tt.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Tt(t,n,i,s)}}function Ns(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Tt._fromErrorAndOperation(e,r,t,i):r})}async function Qc(e,t,n=!1){const i=await Be(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ce._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(e,t,n=!1){var i;const{auth:s}=e,r="reauthenticate";try{const o=await Be(e,Ns(s,r,t,e),n);d(o.idToken,s,"internal-error");const a=Cn(o.idToken);d(a,s,"internal-error");const{sub:c}=a;return d(e.uid===c,s,"user-mismatch"),ce._forOperation(e,r,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&L(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t,n=!1){const i="signIn",s=await Ns(e,i,t),r=await ce._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function eh(e,t){return Ls(wt(e),t)}async function hd(e,t,n){const i=wt(e),s=await Yc(i,{returnSecureToken:!0,email:t,password:n}),r=await ce._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function ld(e,t,n){return eh(te(e),ye.credential(t,n))}function ud(e,t,n,i){return te(e).onAuthStateChanged(t,n,i)}function dd(e){return te(e).signOut()}const bt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(){const e=S();return Rn(e)||Et(e)}const nh=1e3,ih=10;class Us extends Ms{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=th()&&$c(),this.fallbackToPolling=Cs(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Bc()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,ih):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},nh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Us.type="LOCAL";const sh=Us;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Ms{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}xs.type="SESSION";const Fs=xs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new St(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async h=>h(n.origin,r)),c=await rh(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}St.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const h=Pn("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(_.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return window}function ah(e){U().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(){return typeof U().WorkerGlobalScope!="undefined"&&typeof U().importScripts=="function"}async function ch(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hh(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function lh(){return js()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="firebaseLocalStorageDb",uh=1,At="firebaseLocalStorage",$s="fbase_key";class We{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kt(e,t){return e.transaction([At],t?"readwrite":"readonly").objectStore(At)}function dh(){const e=indexedDB.deleteDatabase(Bs);return new We(e).toPromise()}function Nn(){const e=indexedDB.open(Bs,uh);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(At,{keyPath:$s})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(At)?t(i):(i.close(),await dh(),t(await Nn()))})})}async function Hs(e,t,n){const i=kt(e,!0).put({[$s]:t,value:n});return new We(i).toPromise()}async function fh(e,t){const n=kt(e,!1).get(t),i=await new We(n).toPromise();return i===void 0?null:i.value}function Vs(e,t){const n=kt(e,!0).delete(t);return new We(n).toPromise()}const ph=800,gh=3;class Ws{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nn(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>gh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return js()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=St._getInstance(lh()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ch(),!this.activeServiceWorker)return;this.sender=new oh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((t=i[0])===null||t===void 0?void 0:t.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Nn();return await Hs(t,bt,"1"),await Vs(t,bt),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Hs(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>fh(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vs(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=kt(s,!1).getAll();return new We(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ph)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ws.type="LOCAL";const mh=Ws;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function vh(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=M("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",_h().appendChild(i)})}function yh(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Me(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(e,t){return t?H(t):(d(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends On{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return ve(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ve(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ve(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Eh(e){return Ls(e.auth,new Ln(e),e.bypassAuthState)}function wh(e){const{auth:t,user:n}=e;return d(n,t,"internal-error"),Zc(n,new Ln(e),e.bypassAuthState)}async function Th(e){const{auth:t,user:n}=e;return d(n,t,"internal-error"),Qc(n,new Ln(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Eh;case"linkViaPopup":case"linkViaRedirect":return Th;case"reauthViaPopup":case"reauthViaRedirect":return wh;default:L(this.auth,"internal-error")}}resolve(t){$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Me(2e3,1e4);class Ie extends zs{constructor(t,n,i,s,r){super(t,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return d(t,this.auth,"internal-error"),t}async onExecution(){$(this.filter.length===1,"Popup operations only handle one event");const t=Pn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(M(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(M(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(M(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,bh.get())};t()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="pendingRedirect",Ct=new Map;class Ah extends zs{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let t=Ct.get(this.auth._key());if(!t){try{const i=await kh(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Ct.set(this.auth._key(),t)}return this.bypassAuthState||Ct.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kh(e,t){const n=Oh(t),i=Rh(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Ch(e,t){Ct.set(e._key(),t)}function Rh(e){return H(e._redirectPersistence)}function Oh(e){return It(Sh,e.config.apiKey,e.name)}async function Dh(e,t,n=!1){const i=wt(e),s=Ih(i,t),o=await new Ah(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=10*60*1e3;class Nh{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Lh(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!qs(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(M(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ph&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gs(t))}saveEventToCache(t){this.cachedEventUids.add(Gs(t)),this.lastProcessedEventTime=Date.now()}}function Gs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function qs({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Lh(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qs(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(e,t={}){return xe(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xh=/^https?/;async function Fh(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Mh(e);for(const n of t)try{if(jh(n))return}catch{}L(e,"unauthorized-domain")}function jh(e){const t=Sn(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!xh.test(n))return!1;if(Uh.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Me(3e4,6e4);function Ks(){const e=U().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function $h(e){return new Promise((t,n)=>{var i,s,r;function o(){Ks(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ks(),n(M(e,"network-request-failed"))},timeout:Bh.get()})}if((s=(i=U().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)t(gapi.iframes.getContext());else if((r=U().gapi)===null||r===void 0?void 0:r.load)o();else{const a=yh("iframefcb");return U()[a]=()=>{gapi.load?o():n(M(e,"network-request-failed"))},vh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Rt=null,t})}let Rt=null;function Hh(e){return Rt=Rt||$h(e),Rt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Me(5e3,15e3),Wh="__/auth/iframe",zh="emulator/auth/iframe",Gh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kh(e){const t=e.config;d(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?An(t,zh):`https://${e.config.authDomain}/${Wh}`,i={apiKey:t.apiKey,appName:e.name,v:Ne},s=qh.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Oe(i).slice(1)}`}async function Xh(e){const t=await Hh(e),n=U().gapi;return d(n,e,"internal-error"),t.open({where:document.body,url:Kh(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gh,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=M(e,"network-request-failed"),a=U().setTimeout(()=>{r(o)},Vh.get());function c(){U().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yh=500,Qh=600,Zh="_blank",el="http://localhost";class Xs{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tl(e,t,n,i=Yh,s=Qh){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jh),{width:i.toString(),height:s.toString(),top:r,left:o}),h=S().toLowerCase();n&&(a=Ts(h)?Zh:n),ws(h)&&(t=t||el,c.scrollbars="yes");const u=Object.entries(c).reduce((_,[I,O])=>`${_}${I}=${O},`,"");if(jc(h)&&a!=="_self")return nl(t||"",a),new Xs(null);const p=window.open(t||"",a,u);d(p,e,"popup-blocked");try{p.focus()}catch{}return new Xs(p)}function nl(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="__/auth/handler",sl="emulator/auth/handler";function Js(e,t,n,i,s,r){d(e.config.authDomain,e,"auth-domain-config-required"),d(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ne,eventId:s};if(t instanceof Ds){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",aa(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(r||{}))o[c]=h}if(t instanceof Ve){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${rl(e)}?${Oe(a).slice(1)}`}function rl({config:e}){return e.emulator?An(e,sl):`https://${e.authDomain}/${il}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="webStorageSupport";class ol{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fs,this._completeRedirectFn=Dh,this._overrideRedirectResult=Ch}async _openPopup(t,n,i,s){var r;$((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Js(t,n,i,Sn(),s);return tl(t,o,Pn())}async _openRedirect(t,n,i,s){return await this._originValidation(t),ah(Js(t,n,i,Sn(),s)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):($(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await Xh(t),i=new Nh(t);return n.register("authEvent",s=>(d(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Mn,{type:Mn},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Mn];o!==void 0&&n(!!o),L(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fh(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cs()||Rn()||Et()}}const al=ol;var Ys="@firebase/auth",Qs="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{var s;t(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ll(e){me(new ne("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,c)=>{d(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),d(!(o==null?void 0:o.includes(":")),"argument-error",{appName:a.name});const h={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rs(e)},u=new Vc(a,c,h);return wc(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),me(new ne("auth-internal",t=>{const n=wt(t.getProvider("auth").getImmediate());return(i=>new cl(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),G(Ys,Qs,hl(e)),G(Ys,Qs,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(e=ac()){const t=ss(e,"auth");return t.isInitialized()?t.getImmediate():Ec(e,{popupRedirectResolver:al,persistence:[mh,sh,Fs]})}ll("Browser");var ul=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},l,Un=Un||{},f=ul||self;function Ot(){}function xn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ze(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function dl(e){return Object.prototype.hasOwnProperty.call(e,Fn)&&e[Fn]||(e[Fn]=++fl)}var Fn="closure_uid_"+(1e9*Math.random()>>>0),fl=0;function pl(e,t,n){return e.call.apply(e.bind,arguments)}function gl(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w=pl:w=gl,w.apply(null,arguments)}function Dt(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function T(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function Q(){this.s=this.s,this.o=this.o}var ml=0,_l={};Q.prototype.s=!1;Q.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ml!=0)){var e=dl(this);delete _l[e]}};Q.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},er=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<i;r++)r in s&&t.call(n,s[r],r,e)};function vl(e){e:{var t=hu;const n=e.length,i=typeof e=="string"?e.split(""):e;for(let s=0;s<n;s++)if(s in i&&t.call(void 0,i[s],s,e)){t=s;break e}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function tr(e){return Array.prototype.concat.apply([],arguments)}function jn(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Pt(e){return/^[\s\xa0]*$/.test(e)}var nr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function k(e,t){return e.indexOf(t)!=-1}function Bn(e,t){return e<t?-1:e>t?1:0}var C;e:{var ir=f.navigator;if(ir){var sr=ir.userAgent;if(sr){C=sr;break e}}C=""}function $n(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function rr(e){const t={};for(const n in e)t[n]=e[n];return t}var or="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ar(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<or.length;r++)n=or[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Hn(e){return Hn[" "](e),e}Hn[" "]=Ot;function yl(e){var t=wl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Il=k(C,"Opera"),Ge=k(C,"Trident")||k(C,"MSIE"),cr=k(C,"Edge"),Vn=cr||Ge,hr=k(C,"Gecko")&&!(k(C.toLowerCase(),"webkit")&&!k(C,"Edge"))&&!(k(C,"Trident")||k(C,"MSIE"))&&!k(C,"Edge"),El=k(C.toLowerCase(),"webkit")&&!k(C,"Edge");function lr(){var e=f.document;return e?e.documentMode:void 0}var Wn;e:{var zn="",Gn=function(){var e=C;if(hr)return/rv:([^\);]+)(\)|;)/.exec(e);if(cr)return/Edge\/([\d\.]+)/.exec(e);if(Ge)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(El)return/WebKit\/(\S+)/.exec(e);if(Il)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Gn&&(zn=Gn?Gn[1]:""),Ge){var qn=lr();if(qn!=null&&qn>parseFloat(zn)){Wn=String(qn);break e}}Wn=zn}var wl={};function Tl(){return yl(function(){let e=0;const t=nr(String(Wn)).split("."),n=nr("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=Bn(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Bn(s[2].length==0,r[2].length==0)||Bn(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}f.document&&Ge&&lr();var bl=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{f.addEventListener("test",Ot,t),f.removeEventListener("test",Ot,t)}catch{}return e}();function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};function qe(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(hr){e:{try{Hn(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Sl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&qe.Z.h.call(this)}}T(qe,A);var Sl={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),Al=0;function kl(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=s,this.key=++Al,this.ca=this.fa=!1}function Nt(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Lt(e){this.src=e,this.g={},this.h=0}Lt.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Xn(e,t,i,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new kl(t,this.src,r,!!i,s),t.fa=n,e.push(t)),t};function Kn(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=Zs(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Nt(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xn(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==i)return s}return-1}var Jn="closure_lm_"+(1e6*Math.random()|0),Yn={};function ur(e,t,n,i,s){if(i&&i.once)return fr(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ur(e,t[r],n,i,s);return null}return n=ti(n),e&&e[Ke]?e.N(t,n,ze(i)?!!i.capture:!!i,s):dr(e,t,n,!1,i,s)}function dr(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=ze(s)?!!s.capture:!!s,a=Zn(e);if(a||(e[Jn]=a=new Lt(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=Cl(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)bl||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(gr(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Cl(){function e(n){return t.call(e.src,e.listener,n)}var t=Rl;return e}function fr(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)fr(e,t[r],n,i,s);return null}return n=ti(n),e&&e[Ke]?e.O(t,n,ze(i)?!!i.capture:!!i,s):dr(e,t,n,!0,i,s)}function pr(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)pr(e,t[r],n,i,s);else i=ze(i)?!!i.capture:!!i,n=ti(n),e&&e[Ke]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Xn(r,n,i,s),-1<n&&(Nt(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zn(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xn(t,n,i,s)),(n=-1<e?t[e]:null)&&Qn(n))}function Qn(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ke])Kn(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(gr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Zn(t))?(Kn(n,e),n.h==0&&(n.src=null,t[Jn]=null)):Nt(e)}}}function gr(e){return e in Yn?Yn[e]:Yn[e]="on"+e}function Rl(e,t){if(e.ca)e=!0;else{t=new qe(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&Qn(e),e=n.call(i,t)}return e}function Zn(e){return e=e[Jn],e instanceof Lt?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(e){return typeof e=="function"?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function E(){Q.call(this),this.i=new Lt(this),this.P=this,this.I=null}T(E,Q);E.prototype[Ke]=!0;E.prototype.removeEventListener=function(e,t,n,i){pr(this,e,t,n,i)};function b(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var s=t;t=new A(i,e),ar(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Mt(o,i,!0,t)&&s}if(o=t.g=e,s=Mt(o,i,!0,t)&&s,s=Mt(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=Mt(o,i,!1,t)&&s}E.prototype.M=function(){if(E.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Nt(n[i]);delete e.g[t],e.h--}}this.I=null};E.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};E.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Mt(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Kn(e.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var ni=f.JSON.stringify;function Ol(){var e=_r;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Dl{constructor(){this.h=this.g=null}add(t,n){const i=mr.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var mr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Pl,e=>e.reset());class Pl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Nl(e){f.setTimeout(()=>{throw e},0)}function ii(e,t){si||Ll(),ri||(si(),ri=!0),_r.add(e,t)}var si;function Ll(){var e=f.Promise.resolve(void 0);si=function(){e.then(Ml)}}var ri=!1,_r=new Dl;function Ml(){for(var e;e=Ol();){try{e.h.call(e.g)}catch(n){Nl(n)}var t=mr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ri=!1}function Ut(e,t){E.call(this),this.h=e||1,this.g=t||f,this.j=w(this.kb,this),this.l=Date.now()}T(Ut,E);l=Ut.prototype;l.da=!1;l.S=null;l.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),b(this,"tick"),this.da&&(oi(this),this.start()))}};l.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}l.M=function(){Ut.Z.M.call(this),oi(this),delete this.g};function ai(e,t,n){if(typeof e=="function")n&&(e=w(e,n));else if(e&&typeof e.handleEvent=="function")e=w(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:f.setTimeout(e,t||0)}function vr(e){e.g=ai(()=>{e.g=null,e.i&&(e.i=!1,vr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ul extends Q{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vr(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(e){Q.call(this),this.h=e,this.g={}}T(Xe,Q);var yr=[];function Ir(e,t,n,i){Array.isArray(n)||(n&&(yr[0]=n.toString()),n=yr);for(var s=0;s<n.length;s++){var r=ur(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Er(e){$n(e.g,function(t,n){this.g.hasOwnProperty(n)&&Qn(t)},e),e.g={}}Xe.prototype.M=function(){Xe.Z.M.call(this),Er(this)};Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xt(){this.g=!0}xt.prototype.Aa=function(){this.g=!1};function xl(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var p=u.split("_");o=2<=p.length&&p[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Fl(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Ee(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Bl(e,n)+(i?" "+i:"")})}function jl(e,t){e.info(function(){return"TIMEOUT: "+t})}xt.prototype.info=function(){};function Bl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ni(n)}catch{return t}}var we={},wr=null;function ci(){return wr=wr||new E}we.Ma="serverreachability";function Tr(e){A.call(this,we.Ma,e)}T(Tr,A);function Je(e){const t=ci();b(t,new Tr(t,e))}we.STAT_EVENT="statevent";function br(e,t){A.call(this,we.STAT_EVENT,e),this.stat=t}T(br,A);function R(e){const t=ci();b(t,new br(t,e))}we.Na="timingevent";function Sr(e,t){A.call(this,we.Na,e),this.size=t}T(Sr,A);function Ye(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){e()},t)}var hi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},$l={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function li(){}li.prototype.h=null;function Ar(e){return e.h||(e.h=e.i())}var Ft={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ui(){A.call(this,"d")}T(ui,A);function di(){A.call(this,"c")}T(di,A);var fi;function jt(){}T(jt,li);jt.prototype.g=function(){return new XMLHttpRequest};jt.prototype.i=function(){return{}};fi=new jt;function Qe(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Xe(this),this.P=Hl,e=Vn?125:void 0,this.W=new Ut(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new kr}function kr(){this.i=null,this.g="",this.h=!1}var Hl=45e3,pi={},Bt={};l=Qe.prototype;l.setTimeout=function(e){this.P=e};function gi(e,t,n){e.K=1,e.v=zt(V(t)),e.s=n,e.U=!0,Cr(e,null)}function Cr(e,t){e.F=Date.now(),Ze(e),e.A=V(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),xr(n.h,"t",i),e.C=0,n=e.l.H,e.h=new kr,e.g=oo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ul(w(e.Ia,e,e.g),e.O)),Ir(e.V,e.g,"readystatechange",e.gb),t=e.H?rr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Je(1),xl(e.j,e.u,e.A,e.m,e.X,e.s)}l.gb=function(e){e=e.target;const t=this.L;t&&W(e)==3?t.l():this.Ia(e)};l.Ia=function(e){try{if(e==this.g)e:{const u=W(this.g);var t=this.g.Da();const p=this.g.ba();if(!(3>u)&&(u!=3||Vn||this.g&&(this.h.h||this.g.ga()||Xr(this.g)))){this.I||u!=4||t==7||(t==8||0>=p?Je(3):Je(2)),$t(this);var n=this.g.ba();this.N=n;t:if(Rr(this)){var i=Xr(this.g);e="";var s=i.length,r=W(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){he(this),et(this);var o="";break t}this.h.i=new f.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Fl(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pt(a)){var h=a;break t}}h=null}if(n=h)Ee(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mi(this,n);else{this.i=!1,this.o=3,R(12),he(this),et(this);break e}}this.U?(Or(this,u,o),Vn&&this.i&&u==3&&(Ir(this.V,this.W,"tick",this.fb),this.W.start())):(Ee(this.j,this.m,o,null),mi(this,o)),u==4&&he(this),this.i&&!this.I&&(u==4?no(this.l,this):(this.i=!1,Ze(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,R(12)):(this.o=0,R(13)),he(this),et(this)}}}catch{}finally{}};function Rr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Or(e,t,n){let i=!0,s;for(;!e.I&&e.C<n.length;)if(s=Vl(e,n),s==Bt){t==4&&(e.o=4,R(14),i=!1),Ee(e.j,e.m,null,"[Incomplete Response]");break}else if(s==pi){e.o=4,R(15),Ee(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Ee(e.j,e.m,s,null),mi(e,s);Rr(e)&&s!=Bt&&s!=pi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,R(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ki(t),t.L=!0,R(11))):(Ee(e.j,e.m,n,"[Invalid Chunked Response]"),he(e),et(e))}l.fb=function(){if(this.g){var e=W(this.g),t=this.g.ga();this.C<t.length&&($t(this),Or(this,e,t),this.i&&e!=4&&Ze(this))}};function Vl(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Bt:(n=Number(t.substring(n,i)),isNaN(n)?pi:(i+=1,i+n>t.length?Bt:(t=t.substr(i,n),e.C=i+n,t)))}l.cancel=function(){this.I=!0,he(this)};function Ze(e){e.Y=Date.now()+e.P,Dr(e,e.P)}function Dr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ye(w(e.eb,e),t)}function $t(e){e.B&&(f.clearTimeout(e.B),e.B=null)}l.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(jl(this.j,this.A),this.K!=2&&(Je(3),R(17)),he(this),this.o=2,et(this)):Dr(this,this.Y-e)};function et(e){e.l.G==0||e.I||no(e.l,e)}function he(e){$t(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,oi(e.W),Er(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function mi(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||yi(n.i,e))){if(n.I=e.N,!e.J&&yi(n.i,e)&&n.G==3){try{var i=n.Ca.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Qt(n),Jt(n);else break e;Ai(n),R(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ye(w(n.ab,n),6e3));if(1>=Br(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else de(n,11)}else if((e.J||n.g==e)&&Qt(n),!Pt(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const u=h[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const p=h[4];p!=null&&(n.za=p,n.h.info("SVER="+n.za));const _=h[5];_!=null&&typeof _=="number"&&0<_&&(i=1.5*_,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const I=e.g;if(I){const O=I.g?I.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(O){var r=i.i;!r.g&&(k(O,"spdy")||k(O,"quic")||k(O,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ii(r,r.h),r.h=null))}if(i.D){const fe=I.g?I.g.getResponseHeader("X-HTTP-Session-Id"):null;fe&&(i.sa=fe,v(i.F,i.D,fe))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=ro(i,i.H?i.la:null,i.W),o.J){$r(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&($t(a),Ze(a)),i.g=o}else eo(i);0<n.l.length&&Yt(n)}else h[0]!="stop"&&h[0]!="close"||de(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?de(n,7):bi(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}Je(4)}catch{}}function Wl(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(xn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function _i(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(xn(e)||typeof e=="string")er(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(xn(e)||typeof e=="string"){n=[];for(var i=e.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,e)n[i++]=s;i=Wl(e),s=i.length;for(var r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}}function Te(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Te)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}l=Te.prototype;l.R=function(){vi(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};l.T=function(){return vi(this),this.g.concat()};function vi(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];le(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)i=e.g[t],le(s,i)||(e.g[n++]=i,s[i]=1),t++;e.g.length=n}}l.get=function(e,t){return le(this.h,e)?this.h[e]:t};l.set=function(e,t){le(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};l.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);e.call(t,r,s,this)}};function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Pr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ue(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof ue){this.g=t!==void 0?t:e.g,Ht(this,e.j),this.s=e.s,Vt(this,e.i),Wt(this,e.m),this.l=e.l,t=e.h;var n=new it;n.i=t.i,t.g&&(n.g=new Te(t.g),n.h=t.h),Nr(this,n),this.o=e.o}else e&&(n=String(e).match(Pr))?(this.g=!!t,Ht(this,n[1]||"",!0),this.s=tt(n[2]||""),Vt(this,n[3]||"",!0),Wt(this,n[4]),this.l=tt(n[5]||"",!0),Nr(this,n[6]||"",!0),this.o=tt(n[7]||"")):(this.g=!!t,this.h=new it(null,this.g))}ue.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nt(t,Lr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(nt(t,Lr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(nt(n,n.charAt(0)=="/"?Jl:Xl,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nt(n,Ql)),e.join("")};function V(e){return new ue(e)}function Ht(e,t,n){e.j=n?tt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vt(e,t,n){e.i=n?tt(t,!0):t}function Wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Nr(e,t,n){t instanceof it?(e.h=t,Zl(e.h,e.g)):(n||(t=nt(t,Yl)),e.h=new it(t,e.g))}function v(e,t,n){e.h.set(t,n)}function zt(e){return v(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gl(e){return e instanceof ue?V(e):new ue(e,void 0)}function ql(e,t,n,i){var s=new ue(null,void 0);return e&&Ht(s,e),t&&Vt(s,t),n&&Wt(s,n),i&&(s.l=i),s}function tt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Kl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Lr=/[#\/\?@]/g,Xl=/[#\?:]/g,Jl=/[#\?]/g,Yl=/[#\?@]/g,Ql=/#/g;function it(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Z(e){e.g||(e.g=new Te,e.h=0,e.i&&zl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}l=it.prototype;l.add=function(e,t){Z(this),this.i=null,e=be(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Mr(e,t){Z(e),t=be(e,t),le(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,le(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&vi(e)))}function Ur(e,t){return Z(e),t=be(e,t),le(e.g.h,t)}l.forEach=function(e,t){Z(this),this.g.forEach(function(n,i){er(n,function(s){e.call(t,s,i,this)},this)},this)};l.T=function(){Z(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var s=e[i],r=0;r<s.length;r++)n.push(t[i]);return n};l.R=function(e){Z(this);var t=[];if(typeof e=="string")Ur(this,e)&&(t=tr(t,this.g.get(be(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=tr(t,e[n])}return t};l.set=function(e,t){return Z(this),this.i=null,e=be(this,e),Ur(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};l.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function xr(e,t,n){Mr(e,t),0<n.length&&(e.i=null,e.g.set(be(e,t),jn(n)),e.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),e.push(o)}}return this.i=e.join("&")};function be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Zl(e,t){t&&!e.j&&(Z(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Mr(this,i),xr(this,s,n))},e)),e.j=t}var eu=class{constructor(e,t){this.h=e,this.g=t}};function Fr(e){this.l=e||tu,f.PerformanceNavigationTiming?(e=f.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(f.g&&f.g.Ea&&f.g.Ea()&&f.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tu=10;function jr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Br(e){return e.h?1:e.g?e.g.size:0}function yi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ii(e,t){e.g?e.g.add(t):e.h=t}function $r(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Fr.prototype.cancel=function(){if(this.i=Hr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Hr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return jn(e.i)}function Ei(){}Ei.prototype.stringify=function(e){return f.JSON.stringify(e,void 0)};Ei.prototype.parse=function(e){return f.JSON.parse(e,void 0)};function nu(){this.g=new Ei}function iu(e,t,n){const i=n||"";try{_i(e,function(s,r){let o=s;ze(s)&&(o=ni(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function su(e,t){const n=new xt;if(f.Image){const i=new Image;i.onload=Dt(Gt,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Dt(Gt,n,i,"TestLoadImage: error",!1,t),i.onabort=Dt(Gt,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Dt(Gt,n,i,"TestLoadImage: timeout",!1,t),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Gt(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function qt(e){this.l=e.$b||null,this.j=e.ib||!1}T(qt,li);qt.prototype.g=function(){return new Kt(this.l,this.j)};qt.prototype.i=function(e){return function(){return e}}({});function Kt(e,t){E.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=wi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}T(Kt,E);var wi=0;l=Kt.prototype;l.open=function(e,t){if(this.readyState!=wi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rt(this)};l.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||f).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,st(this)),this.readyState=wi};l.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rt(this)),this.g&&(this.readyState=3,rt(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof f.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Vr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}l.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?st(this):rt(this),this.readyState==3&&Vr(this)}};l.Ua=function(e){this.g&&(this.response=this.responseText=e,st(this))};l.Ta=function(e){this.g&&(this.response=e,st(this))};l.ha=function(){this.g&&st(this)};function st(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rt(e)}l.setRequestHeader=function(e,t){this.v.append(e,t)};l.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function rt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Kt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ru=f.JSON.parse;function y(e){E.call(this),this.headers=new Te,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Wr,this.K=this.L=!1}T(y,E);var Wr="",ou=/^https?$/i,au=["POST","PUT"];l=y.prototype;l.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fi.g(),this.C=this.u?Ar(this.u):Ar(fi),this.g.onreadystatechange=w(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){zr(this,r);return}e=n||"";const s=new Te(this.headers);i&&_i(i,function(r,o){s.set(o,r)}),i=vl(s.T()),n=f.FormData&&e instanceof f.FormData,!(0<=Zs(au,t))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kr(this),0<this.B&&((this.K=cu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.pa,this)):this.A=ai(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){zr(this,r)}};function cu(e){return Ge&&Tl()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function hu(e){return e.toLowerCase()=="content-type"}l.pa=function(){typeof Un!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,b(this,"timeout"),this.abort(8))};function zr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gr(e),Xt(e)}function Gr(e){e.D||(e.D=!0,b(e,"complete"),b(e,"error"))}l.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,b(this,"complete"),b(this,"abort"),Xt(this))};l.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xt(this,!0)),y.Z.M.call(this)};l.Fa=function(){this.s||(this.F||this.v||this.l?qr(this):this.cb())};l.cb=function(){qr(this)};function qr(e){if(e.h&&typeof Un!="undefined"&&(!e.C[1]||W(e)!=4||e.ba()!=2)){if(e.v&&W(e)==4)ai(e.Fa,0,e);else if(b(e,"readystatechange"),W(e)==4){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.H).match(Pr)[1]||null;if(!s&&f.self&&f.self.location){var r=f.self.location.protocol;s=r.substr(0,r.length-1)}i=!ou.test(s?s.toLowerCase():"")}n=i}if(n)b(e,"complete"),b(e,"success");else{e.m=6;try{var o=2<W(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Gr(e)}}finally{Xt(e)}}}}function Xt(e,t){if(e.g){Kr(e);const n=e.g,i=e.C[0]?Ot:null;e.g=null,e.C=null,t||b(e,"ready");try{n.onreadystatechange=i}catch{}}}function Kr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(f.clearTimeout(e.A),e.A=null)}function W(e){return e.g?e.g.readyState:0}l.ba=function(){try{return 2<W(this)?this.g.status:-1}catch{return-1}};l.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ru(t)}};function Xr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Wr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}l.Da=function(){return this.m};l.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function lu(e){let t="";return $n(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Ti(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=lu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):v(e,t,n))}function ot(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Jr(e){this.za=0,this.l=[],this.h=new xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ot("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ot("baseRetryDelayMs",5e3,e),this.$a=ot("retryDelaySeedMs",1e4,e),this.Ya=ot("forwardChannelMaxRetries",2,e),this.ra=ot("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Fr(e&&e.concurrentRequestLimit),this.Ca=new nu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}l=Jr.prototype;l.ma=8;l.G=1;function bi(e){if(Yr(e),e.G==3){var t=e.V++,n=V(e.F);v(n,"SID",e.J),v(n,"RID",t),v(n,"TYPE","terminate"),at(e,n),t=new Qe(e,e.h,t,void 0),t.K=2,t.v=zt(V(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(t.v.toString(),"")),!n&&f.Image&&(new Image().src=t.v,n=!0),n||(t.g=oo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ze(t)}so(e)}l.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Jt(e){e.g&&(ki(e),e.g.cancel(),e.g=null)}function Yr(e){Jt(e),e.u&&(f.clearTimeout(e.u),e.u=null),Qt(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&f.clearTimeout(e.m),e.m=null)}function Si(e,t){e.l.push(new eu(e.Za++,t)),e.G==3&&Yt(e)}function Yt(e){jr(e.i)||e.m||(e.m=!0,ii(e.Ha,e),e.C=0)}function uu(e,t){return Br(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Ye(w(e.Ha,e,t),io(e,e.C)),e.C++,!0)}l.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new Qe(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=rr(r),ar(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zr(this,s,t),n=V(this.F),v(n,"RID",e),v(n,"CVER",22),this.D&&v(n,"X-HTTP-Session-Id",this.D),at(this,n),this.o&&r&&Ti(n,this.o,r),Ii(this.i,s),this.Ra&&v(n,"TYPE","init"),this.ja?(v(n,"$req",t),v(n,"SID","null"),s.$=!0,gi(s,n,null)):gi(s,n,t),this.G=2}}else this.G==3&&(e?Qr(this,e):this.l.length==0||jr(this.i)||Qr(this))};function Qr(e,t){var n;t?n=t.m:n=e.V++;const i=V(e.F);v(i,"SID",e.J),v(i,"RID",n),v(i,"AID",e.U),at(e,i),e.o&&e.s&&Ti(i,e.o,e.s),n=new Qe(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Zr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Ii(e.i,n),gi(n,i,t)}function at(e,t){e.j&&_i({},function(n,i){v(t,i,n)})}function Zr(e,t,n){n=Math.min(e.l.length,n);var i=e.j?w(e.j.Oa,e.j,e):null;e:{var s=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=s[c].h;const u=s[c].g;if(h-=r,0>h)r=Math.max(0,s[c].h-100),a=!1;else try{iu(u,o,"req"+h+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function eo(e){e.g||e.u||(e.Y=1,ii(e.Ga,e),e.A=0)}function Ai(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Ye(w(e.Ga,e),io(e,e.A)),e.A++,!0)}l.Ga=function(){if(this.u=null,to(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ye(w(this.bb,this),e)}};l.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,R(10),Jt(this),to(this))};function ki(e){e.B!=null&&(f.clearTimeout(e.B),e.B=null)}function to(e){e.g=new Qe(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=V(e.oa);v(t,"RID","rpc"),v(t,"SID",e.J),v(t,"CI",e.N?"0":"1"),v(t,"AID",e.U),at(e,t),v(t,"TYPE","xmlhttp"),e.o&&e.s&&Ti(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=zt(V(t)),n.s=null,n.U=!0,Cr(n,e)}l.ab=function(){this.v!=null&&(this.v=null,Jt(this),Ai(this),R(19))};function Qt(e){e.v!=null&&(f.clearTimeout(e.v),e.v=null)}function no(e,t){var n=null;if(e.g==t){Qt(e),ki(e),e.g=null;var i=2}else if(yi(e.i,t))n=t.D,$r(e.i,t),i=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=ci(),b(i,new Sr(i,n,t,s)),Yt(e)}else eo(e);else if(s=t.o,s==3||s==0&&0<e.I||!(i==1&&uu(e,t)||i==2&&Ai(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:de(e,5);break;case 4:de(e,10);break;case 3:de(e,6);break;default:de(e,2)}}}function io(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function de(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var i=w(e.jb,e);n||(n=new ue("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ht(n,"https"),zt(n)),su(n.toString(),i)}else R(2);e.G=0,e.j&&e.j.va(t),so(e),Yr(e)}l.jb=function(e){e?(this.h.info("Successfully pinged google.com"),R(2)):(this.h.info("Failed to ping google.com"),R(1))};function so(e){e.G=0,e.I=-1,e.j&&((Hr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,jn(e.l),e.l.length=0),e.j.ua())}function ro(e,t,n){let i=Gl(n);if(i.i!="")t&&Vt(i,t+"."+i.i),Wt(i,i.m);else{const s=f.location;i=ql(s.protocol,t?t+"."+s.hostname:s.hostname,+s.port,n)}return e.aa&&$n(e.aa,function(s,r){v(i,r,s)}),t=e.D,n=e.sa,t&&n&&v(i,t,n),v(i,"VER",e.ma),at(e,i),i}function oo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new y(new qt({ib:!0})):new y(e.qa),t.L=e.H,t}function ao(){}l=ao.prototype;l.xa=function(){};l.wa=function(){};l.va=function(){};l.ua=function(){};l.Oa=function(){};function N(e,t){E.call(this),this.g=new Jr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Pt(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pt(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Se(this)}T(N,E);N.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ii(w(e.hb,e,t))),R(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ro(e,null,e.W),Yt(e)};N.prototype.close=function(){bi(this.g)};N.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Si(this.g,t)}else this.v?(t={},t.__data__=ni(e),Si(this.g,t)):Si(this.g,e)};N.prototype.M=function(){this.g.j=null,delete this.j,bi(this.g),delete this.g,N.Z.M.call(this)};function co(e){ui.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}T(co,ui);function ho(){di.call(this),this.status=1}T(ho,di);function Se(e){this.g=e}T(Se,ao);Se.prototype.xa=function(){b(this.g,"a")};Se.prototype.wa=function(e){b(this.g,new co(e))};Se.prototype.va=function(e){b(this.g,new ho(e))};Se.prototype.ua=function(){b(this.g,"b")};N.prototype.send=N.prototype.u;N.prototype.open=N.prototype.m;N.prototype.close=N.prototype.close;hi.NO_ERROR=0;hi.TIMEOUT=8;hi.HTTP_ERROR=6;$l.COMPLETE="complete";Ft.OPEN="a";Ft.CLOSE="b";Ft.ERROR="c";Ft.MESSAGE="d";E.prototype.listen=E.prototype.N;y.prototype.listenOnce=y.prototype.O;y.prototype.getLastError=y.prototype.La;y.prototype.getLastErrorCode=y.prototype.Da;y.prototype.getStatus=y.prototype.ba;y.prototype.getResponseJson=y.prototype.Qa;y.prototype.getResponseText=y.prototype.ga;y.prototype.send=y.prototype.ea;const lo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}D.UNAUTHENTICATED=new D(null),D.GOOGLE_CREDENTIALS=new D("google-credentials-uid"),D.FIRST_PARTY=new D("first-party-uid"),D.MOCK_USER=new D("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new fn("@firebase/firestore");function P(e,...t){if(en.logLevel<=m.DEBUG){const n=t.map(uo);en.debug(`Firestore (${Zt}): ${e}`,...n)}}function Ci(e,...t){if(en.logLevel<=m.ERROR){const n=t.map(uo);en.error(`Firestore (${Zt}): ${e}`,...n)}}function uo(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e="Unexpected state"){const t=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+e;throw Ci(t),new Error(t)}function tn(e,t){e||fo()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends j{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(D.UNAUTHENTICATED))}shutdown(){}}class pu{constructor(t){this.t=t,this.currentUser=D.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ae,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tn(typeof i.accessToken=="string"),new du(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tn(t===null||typeof t=="string"),new D(t)}}class gu{constructor(t,n,i){this.type="FirstParty",this.user=D.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class mu{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new gu(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(D.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _u{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const i=r=>{r.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(tn(typeof n.token=="string"),this.p=n.token,new _u(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=yu(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function po(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,i,s,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ct{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ct("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ct&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var go,g;(g=go||(go={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS";function Ri(){return typeof document!="undefined"?document:null}class wu{constructor(t,n,i=1e3,s=1.5,r=6e4){this.js=t,this.timerId=n,this.lo=i,this.fo=s,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-i);s>0&&P("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new Oi(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tu(e,t){if(Ci("AsyncQueue",`${t}: ${e}`),po(e))return new F(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=D.UNAUTHENTICATED,this.clientId=Iu.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{P("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(P("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Tu(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}const mo=new Map;function Su(e,t,n,i){if(t===!0&&i===!0)throw new F(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new F(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Su("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _o({}),this._settingsFrozen=!1,t instanceof ct?this._databaseId=t:(this._app=t,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new F(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ct(s.options.projectId)}(t))}get app(){if(!this._app)throw new F(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _o(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fu;switch(n.type){case"gapi":const i=n.client;return tn(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new mu(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new F(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=mo.get(t);n&&(P("ComponentProvider","Removing Datastore"),mo.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new wu(this,"async_queue_retry"),this.Kc=()=>{const n=Ri();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Ri();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Ri();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Ae;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!po(t))throw t;P("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(i=>{this.Bc=i,this.Lc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ci("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Lc=!1,i))));return this.Mc=n,n}enqueueAfterDelay(t,n,i){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const s=Oi.createAndSchedule(this,t,n,i,r=>this.Wc(r));return this.$c.push(s),s}Gc(){this.Bc&&fo()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class Cu extends Au{constructor(t,n,i){super(t,n,i),this.type="firestore",this._queue=new ku,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ru(this),this._firestoreClient.terminate()}}function Ru(e){var t;const n=e._freezeSettings(),i=function(s,r,o,a){return new Eu(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new bu(e._authCredentials,e._appCheckCredentials,e._queue,i)}(function(e,t=!0){(function(n){Zt=n})(Ne),me(new ne("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new Cu(s,new pu(n.getProvider("auth-internal")),new vu(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r},"PUBLIC")),G(lo,"3.4.14",e),G(lo,"3.4.14","esm2017")})();export{Ku as A,So as B,ad as C,Pu as D,Lu as E,Mu as F,Nu as G,ud as H,cd as I,fd as J,Lo as K,pe as L,Bu as M,ke as N,Du as O,Ju as P,dd as Q,Uu as R,od as S,qu as T,Gu as U,$u as V,hd as W,ld as X,xo as a,Hu as b,Vu as c,Mo as d,Uo as e,xu as f,Bo as g,zu as h,rd as i,id as j,Fu as k,ju as l,sd as m,Wu as n,zo as o,td as p,nd as q,Qu as r,ko as s,an as t,ed as u,Go as v,Zu as w,Wo as x,Yu as y,Xu as z};
