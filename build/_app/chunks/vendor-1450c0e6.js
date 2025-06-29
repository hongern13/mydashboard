var Rl=Object.defineProperty,Ol=Object.defineProperties;var Ml=Object.getOwnPropertyDescriptors;var oo=Object.getOwnPropertySymbols;var Pl=Object.prototype.hasOwnProperty,Ll=Object.prototype.propertyIsEnumerable;var ao=(t,e,n)=>e in t?Rl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,co=(t,e)=>{for(var n in e||(e={}))Pl.call(e,n)&&ao(t,n,e[n]);if(oo)for(var n of oo(e))Ll.call(e,n)&&ao(t,n,e[n]);return t},uo=(t,e)=>Ol(t,Ml(e));function ot(){}function xl(t,e){for(const n in e)t[n]=e[n];return t}function lo(t){return t()}function ho(){return Object.create(null)}function xt(t){t.forEach(lo)}function Ul(t){return typeof t=="function"}function Fl(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Vl(t){return Object.keys(t).length===0}function Bl(t,...e){if(t==null)return ot;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Av(t,e,n){t.$$.on_destroy.push(Bl(e,n))}function kv(t,e,n,s){if(t){const i=fo(t,e,n,s);return t[0](i)}}function fo(t,e,n,s){return t[1]&&s?xl(n.ctx.slice(),t[1](s(e))):n.ctx}function Dv(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Nv(t,e,n,s,i,r){if(i){const o=fo(e,n,s,r);t.p(o,i)}}function Rv(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Ov(t,e,n){return t.set(n),e}let Vn=!1;function $l(){Vn=!0}function jl(){Vn=!1}function ql(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function Hl(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const l=e[u];l.claim_order!==void 0&&c.push(l)}e=c}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,l=(i>0&&e[n[i]].claim_order<=u?i+1:ql(1,i,d=>e[n[d]].claim_order,u))-1;s[c]=n[l]+1;const h=l+1;n[h]=c,i=Math.max(h,i)}const r=[],o=[];let a=e.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(r.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<r.length&&o[c].claim_order>=r[u].claim_order;)u++;const l=u<r.length?r[u]:null;t.insertBefore(o[c],l)}}function Kl(t,e){if(Vn){for(Hl(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Mv(t,e,n){Vn&&!n?Kl(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function zl(t){t.parentNode.removeChild(t)}function Pv(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Gl(t){return document.createElement(t)}function ni(t){return document.createTextNode(t)}function Lv(){return ni(" ")}function xv(){return ni("")}function Uv(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Fv(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Vv(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bv(t){return t===""?null:+t}function Wl(t){return Array.from(t.childNodes)}function Ql(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function po(t,e,n,s,i=!1){Ql(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return s()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Xl(t,e,n,s){return po(t,i=>i.nodeName===e,i=>{const r=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>i.removeAttribute(o))},()=>s(e))}function $v(t,e,n){return Xl(t,e,n,Gl)}function Yl(t,e){return po(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>ni(e),!0)}function jv(t){return Yl(t," ")}function qv(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Hv(t,e){t.value=e==null?"":e}function Kv(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}let Bn;function $n(t){Bn=t}function jn(){if(!Bn)throw new Error("Function called outside component initialization");return Bn}function zv(t){jn().$$.on_mount.push(t)}function Gv(t){jn().$$.after_update.push(t)}function Wv(t){jn().$$.on_destroy.push(t)}function Qv(t,e){jn().$$.context.set(t,e)}const Ut=[],go=[],qn=[],mo=[],Jl=Promise.resolve();let si=!1;function Zl(){si||(si=!0,Jl.then(yo))}function ii(t){qn.push(t)}let ri=!1;const oi=new Set;function yo(){if(!ri){ri=!0;do{for(let t=0;t<Ut.length;t+=1){const e=Ut[t];$n(e),eh(e.$$)}for($n(null),Ut.length=0;go.length;)go.pop()();for(let t=0;t<qn.length;t+=1){const e=qn[t];oi.has(e)||(oi.add(e),e())}qn.length=0}while(Ut.length);for(;mo.length;)mo.pop()();si=!1,ri=!1,oi.clear()}}function eh(t){if(t.fragment!==null){t.update(),xt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ii)}}const Hn=new Set;let Be;function Xv(){Be={r:0,c:[],p:Be}}function Yv(){Be.r||xt(Be.c),Be=Be.p}function th(t,e){t&&t.i&&(Hn.delete(t),t.i(e))}function Jv(t,e,n,s){if(t&&t.o){if(Hn.has(t))return;Hn.add(t),Be.c.push(()=>{Hn.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function Zv(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function ew(t){return typeof t=="object"&&t!==null?t:{}}function tw(t){t&&t.c()}function nw(t,e){t&&t.l(e)}function nh(t,e,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),s||ii(()=>{const c=r.map(lo).filter(Ul);o?o.push(...c):xt(c),t.$$.on_mount=[]}),a.forEach(ii)}function sh(t,e){const n=t.$$;n.fragment!==null&&(xt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ih(t,e){t.$$.dirty[0]===-1&&(Ut.push(t),Zl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function sw(t,e,n,s,i,r,o,a=[-1]){const c=Bn;$n(t);const u=t.$$={fragment:null,ctx:null,props:r,update:ot,not_equal:i,bound:ho(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ho(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...g)=>{const y=g.length?g[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=y)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](y),l&&ih(t,h)),d}):[],u.update(),l=!0,xt(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){$l();const h=Wl(e.target);u.fragment&&u.fragment.l(h),h.forEach(zl)}else u.fragment&&u.fragment.c();e.intro&&th(t.$$.fragment),nh(t,e.target,e.anchor,e.customElement),jl(),yo()}$n(c)}class iw{$destroy(){sh(this,1),this.$destroy=ot}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Vl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const at=[];function rw(t,e=ot){let n;const s=new Set;function i(a){if(Fl(t,a)&&(t=a,n)){const c=!at.length;for(const u of s)u[1](),at.push(u,t);if(c){for(let u=0;u<at.length;u+=2)at[u][0](at[u+1]);at.length=0}}}function r(a){i(a(t))}function o(a,c=ot){const u=[a,c];return s.add(u),s.size===1&&(n=e(i)||ot),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}/**
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
 */const vo=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},oh=function(t){const e=vo(t);return wo.encodeByteArray(e,!0)},_o=function(t){return oh(t).replace(/\./g,"")},ah=function(t){try{return wo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function j(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function Io(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function To(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uh(){return j().indexOf("Electron/")>=0}function bo(){const t=j();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lh(){return j().indexOf("MSAppHost/")>=0}function hh(){return typeof indexedDB=="object"}function dh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const fh="FirebaseError";class me extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=fh,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ph(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new me(i,a,s)}}function ph(t,e){return t.replace(gh,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const gh=/\{\$([^}]+)}/g;function mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(So(r)&&So(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function So(t){return t!==null&&typeof t=="object"}/**
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
 */function Vt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function $t(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yh(t,e){const n=new vh(t,e);return n.subscribe.bind(n)}class vh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ai),i.error===void 0&&(i.error=ai),i.complete===void 0&&(i.complete=ai);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ai(){}/**
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
 */function re(t){return t&&t._delegate?t._delegate:t}class $e{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class _h{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ch;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ih(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Eh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eh(t){return t===je?void 0:t}function Ih(t){return t.instantiationMode==="EAGER"}/**
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
 */class Th{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _h(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const bh={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Sh=N.INFO,Ch={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ah=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ch[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ci{constructor(e){this.name=e,this._logLevel=Sh,this._logHandler=Ah,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const kh=(t,e)=>e.some(n=>t instanceof n);let Co,Ao;function Dh(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nh(){return Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,ui=new WeakMap,Do=new WeakMap,li=new WeakMap,hi=new WeakMap;function Rh(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ae(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ko.set(n,t)}).catch(()=>{}),hi.set(e,t),e}function Oh(t){if(ui.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ui.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Do.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mh(t){di=t(di)}function Ph(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fi(this),e,...n);return Do.set(s,e.sort?e.sort():[e]),Ae(s)}:Nh().includes(t)?function(...e){return t.apply(fi(this),e),Ae(ko.get(this))}:function(...e){return Ae(t.apply(fi(this),e))}}function Lh(t){return typeof t=="function"?Ph(t):(t instanceof IDBTransaction&&Oh(t),kh(t,Dh())?new Proxy(t,di):t)}function Ae(t){if(t instanceof IDBRequest)return Rh(t);if(li.has(t))return li.get(t);const e=Lh(t);return e!==t&&(li.set(t,e),hi.set(e,t)),e}const fi=t=>hi.get(t);function xh(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ae(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ae(o.result),c.oldVersion,c.newVersion,Ae(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Uh=["get","getKey","getAll","getAllKeys","count"],Fh=["put","add","delete","clear"],pi=new Map;function No(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pi.get(e))return pi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Fh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Uh.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return pi.set(e,r),r}Mh(t=>uo(co({},t),{get:(e,n,s)=>No(e,n)||t.get(e,n,s),has:(e,n)=>!!No(e,n)||t.has(e,n)}));/**
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
 */class Vh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Bh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gi="@firebase/app",Ro="0.7.30";/**
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
 */const qe=new ci("@firebase/app"),$h="@firebase/app-compat",jh="@firebase/analytics-compat",qh="@firebase/analytics",Hh="@firebase/app-check-compat",Kh="@firebase/app-check",zh="@firebase/auth",Gh="@firebase/auth-compat",Wh="@firebase/database",Qh="@firebase/database-compat",Xh="@firebase/functions",Yh="@firebase/functions-compat",Jh="@firebase/installations",Zh="@firebase/installations-compat",ed="@firebase/messaging",td="@firebase/messaging-compat",nd="@firebase/performance",sd="@firebase/performance-compat",id="@firebase/remote-config",rd="@firebase/remote-config-compat",od="@firebase/storage",ad="@firebase/storage-compat",cd="@firebase/firestore",ud="@firebase/firestore-compat",ld="firebase",hd="9.9.2";/**
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
 */const Oo="[DEFAULT]",dd={[gi]:"fire-core",[$h]:"fire-core-compat",[qh]:"fire-analytics",[jh]:"fire-analytics-compat",[Kh]:"fire-app-check",[Hh]:"fire-app-check-compat",[zh]:"fire-auth",[Gh]:"fire-auth-compat",[Wh]:"fire-rtdb",[Qh]:"fire-rtdb-compat",[Xh]:"fire-fn",[Yh]:"fire-fn-compat",[Jh]:"fire-iid",[Zh]:"fire-iid-compat",[ed]:"fire-fcm",[td]:"fire-fcm-compat",[nd]:"fire-perf",[sd]:"fire-perf-compat",[id]:"fire-rc",[rd]:"fire-rc-compat",[od]:"fire-gcs",[ad]:"fire-gcs-compat",[cd]:"fire-fst",[ud]:"fire-fst-compat","fire-js":"fire-js",[ld]:"fire-js-all"};/**
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
 */const zn=new Map,mi=new Map;function fd(t,e){try{t.container.addComponent(e)}catch(n){qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ct(t){const e=t.name;if(mi.has(e))return qe.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,t);for(const n of zn.values())fd(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},He=new Ft("app","Firebase",pd);/**
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
 */class gd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw He.create("app-deleted",{appName:this._name})}}/**
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
 */const jt=hd;function ow(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Oo,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw He.create("bad-app-name",{appName:String(s)});const i=zn.get(s);if(i){if(Kn(t,i.options)&&Kn(n,i.config))return i;throw He.create("duplicate-app",{appName:s})}const r=new Th(s);for(const a of mi.values())r.addComponent(a);const o=new gd(t,n,r);return zn.set(s,o),o}function Mo(t=Oo){const e=zn.get(t);if(!e)throw He.create("no-app",{appName:t});return e}function ke(t,e,n){var s;let i=(s=dd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qe.warn(a.join(" "));return}ct(new $e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const md="firebase-heartbeat-database",yd=1,qt="firebase-heartbeat-store";let vi=null;function Po(){return vi||(vi=xh(md,yd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qt)}}}).catch(t=>{throw He.create("idb-open",{originalErrorMessage:t.message})})),vi}async function vd(t){var e;try{return(await Po()).transaction(qt).objectStore(qt).get(xo(t))}catch(n){if(n instanceof me)qe.warn(n.message);else{const s=He.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qe.warn(s.message)}}}async function Lo(t,e){var n;try{const i=(await Po()).transaction(qt,"readwrite");return await i.objectStore(qt).put(e,xo(t)),i.done}catch(s){if(s instanceof me)qe.warn(s.message);else{const i=He.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});qe.warn(i.message)}}}function xo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wd=1024,_d=30*24*60*60*1e3;class Ed{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Td(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=_d}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uo(),{heartbeatsToSend:n,unsentEntries:s}=Id(this._heartbeatsCache.heartbeats),i=_o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uo(){return new Date().toISOString().substring(0,10)}function Id(t,e=wd){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fo(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Td{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hh()?dh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fo(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bd(t){ct(new $e("platform-logger",e=>new Vh(e),"PRIVATE")),ct(new $e("heartbeat",e=>new Ed(e),"PRIVATE")),ke(gi,Ro,t),ke(gi,Ro,"esm2017"),ke("fire-js","")}bd("");var Sd="firebase",Cd="9.9.2";/**
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
 */ke(Sd,Cd,"app");function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Vo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ad=Vo,Bo=new Ft("auth","Firebase",Vo());/**
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
 */const $o=new ci("@firebase/auth");function Gn(t,...e){$o.logLevel<=N.ERROR&&$o.error(`Auth (${jt}): ${t}`,...e)}/**
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
 */function ue(t,...e){throw _i(t,...e)}function le(t,...e){return _i(t,...e)}function kd(t,e,n){const s=Object.assign(Object.assign({},Ad()),{[e]:n});return new Ft("auth","Firebase",s).create(e,{appName:t.name})}function _i(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bo.create(t,...e)}function E(t,e,...n){if(!t)throw _i(e,...n)}function ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gn(e),new Error(e)}function ve(t,e){t||ye(e)}/**
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
 */const jo=new Map;function we(t){ve(t instanceof Function,"Expected a class definition");let e=jo.get(t);return e?(ve(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jo.set(t,e),e)}/**
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
 */function Dd(t,e){const n=yi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Kn(r,e!=null?e:{}))return i;ue(i,"already-initialized")}return n.initialize({options:e})}function Nd(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(we);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ei(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rd(){return qo()==="http:"||qo()==="https:"}function qo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Od(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rd()||Io()||"connection"in navigator)?navigator.onLine:!0}function Md(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ht{constructor(e,n){this.shortDelay=e,this.longDelay=n,ve(n>e,"Short delay should be less than long delay!"),this.isMobile=Eo()||To()}get(){return Od()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ii(t,e){ve(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ho{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Pd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ld=new Ht(3e4,6e4);function Kt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zt(t,e,n,s,i={}){return Ko(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Vt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ho.fetch()(zo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Ko(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Pd),e);try{const i=new xd(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wn(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kd(t,l,u);ue(t,l)}}catch(i){if(i instanceof me)throw i;ue(t,"network-request-failed")}}async function Gt(t,e,n,s,i={}){const r=await zt(t,e,n,s,i);return"mfaPendingCredential"in r&&ue(t,"multi-factor-auth-required",{_serverResponse:r}),r}function zo(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ii(t.config,i):`${t.config.apiScheme}://${i}`}class xd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(le(this.auth,"network-request-failed")),Ld.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=le(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Ud(t,e){return zt(t,"POST","/v1/accounts:delete",e)}async function Fd(t,e){return zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vd(t,e=!1){const n=re(t),s=await n.getIdToken(e),i=bi(s);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Wt(Ti(i.auth_time)),issuedAtTime:Wt(Ti(i.iat)),expirationTime:Wt(Ti(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ti(t){return Number(t)*1e3}function bi(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Gn("JWT malformed, contained fewer than 3 sections"),null;try{const r=ah(s);return r?JSON.parse(r):(Gn("Failed to decode base64 JWT payload"),null)}catch(r){return Gn("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Bd(t){const e=bi(t);return E(e,"internal-error"),E(typeof e.exp!="undefined","internal-error"),E(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof me&&$d(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $d({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Go{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qn(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Qt(t,Fd(n,{idToken:s}));E(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Kd(r.providerUserInfo):[],a=Hd(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Go(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function qd(t){const e=re(t);await Qn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hd(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Kd(t){return t.map(e=>{var{providerId:n}=e,s=wi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zd(t,e){const n=await Ko(t,{},async()=>{const s=Vt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=zo(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ho.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken!="undefined","internal-error"),E(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zd(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xt;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
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
 */function De(t,e){E(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ke{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Go(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vd(this,e)}reload(){return qd(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Qn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qt(this,Ud(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(u=n.createdAt)!==null&&u!==void 0?u:void 0,Y=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ge,emailVerified:Ce,isAnonymous:Mt,providerData:Pt,stsTokenManager:Lt}=n;E(ge&&Lt,e,"internal-error");const Dl=Xt.fromJSON(this.name,Lt);E(typeof ge=="string",e,"internal-error"),De(h,e.name),De(d,e.name),E(typeof Ce=="boolean",e,"internal-error"),E(typeof Mt=="boolean",e,"internal-error"),De(g,e.name),De(y,e.name),De(k,e.name),De(D,e.name),De($,e.name),De(Y,e.name);const ti=new Ke({uid:ge,auth:e,email:d,emailVerified:Ce,displayName:h,isAnonymous:Mt,photoURL:y,phoneNumber:g,tenantId:k,stsTokenManager:Dl,createdAt:$,lastLoginAt:Y});return Pt&&Array.isArray(Pt)&&(ti.providerData=Pt.map(Nl=>Object.assign({},Nl))),D&&(ti._redirectEventId=D),ti}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xt;i.updateFromServerResponse(n);const r=new Ke({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Qn(r),r}}/**
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
 */class Wo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wo.type="NONE";const Qo=Wo;/**
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
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Xn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xn("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ke._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ut(we(Qo),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||we(Qo);const o=Xn(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ke._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ut(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ut(r,e,s))}}/**
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
 */function Xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ta(e))return"Blackberry";if(na(e))return"Webos";if(Si(e))return"Safari";if((e.includes("chrome/")||Jo(e))&&!e.includes("edge/"))return"Chrome";if(ea(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yo(t=j()){return/firefox\//i.test(t)}function Si(t=j()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jo(t=j()){return/crios\//i.test(t)}function Zo(t=j()){return/iemobile/i.test(t)}function ea(t=j()){return/android/i.test(t)}function ta(t=j()){return/blackberry/i.test(t)}function na(t=j()){return/webos/i.test(t)}function Yn(t=j()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gd(t=j()){var e;return Yn(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Wd(){return bo()&&document.documentMode===10}function sa(t=j()){return Yn(t)||ea(t)||na(t)||ta(t)||/windows phone/i.test(t)||Zo(t)}function Qd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ia(t,e=[]){let n;switch(t){case"Browser":n=Xo(j());break;case"Worker":n=`${Xo(j())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jt}/${s}`}/**
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
 */class Xd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Yd{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ra(this),this.idTokenSubscription=new ra(this),this.beforeStateQueue=new Xd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=we(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ut.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Qn(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Md()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?re(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&we(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[we(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ia(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Jn(t){return re(t)}class ra{constructor(e){this.auth=e,this.observer=null,this.addObserver=yh(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ci{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ye("not implemented")}_getIdTokenResponse(e){return ye("not implemented")}_linkToIdToken(e,n){return ye("not implemented")}_getReauthenticationResolver(e){return ye("not implemented")}}async function Jd(t,e){return zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Zd(t,e){return Gt(t,"POST","/v1/accounts:signInWithPassword",Kt(t,e))}/**
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
 */async function ef(t,e){return Gt(t,"POST","/v1/accounts:signInWithEmailLink",Kt(t,e))}async function tf(t,e){return Gt(t,"POST","/v1/accounts:signInWithEmailLink",Kt(t,e))}/**
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
 */class Yt extends Ci{constructor(e,n,s,i=null){super("password",s);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yt(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Yt(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Zd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ef(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jd(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tf(e,{idToken:n,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lt(t,e){return Gt(t,"POST","/v1/accounts:signInWithIdp",Kt(t,e))}/**
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
 */const nf="http://localhost";class ze extends Ci{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=wi(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ze(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,lt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lt(e,n)}buildRequest(){const e={requestUri:nf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vt(n)}return e}}/**
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
 */function sf(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rf(t){const e=Bt($t(t)).link,n=e?Bt($t(e)).deep_link_id:null,s=Bt($t(t)).deep_link_id;return(s?Bt($t(s)).link:null)||s||n||e||t}class Ai{constructor(e){var n,s,i,r,o,a;const c=Bt($t(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=sf((i=c.mode)!==null&&i!==void 0?i:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rf(e);try{return new Ai(n)}catch{return null}}}/**
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
 */class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,n){return Yt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ai.parseLink(n);return E(s,"argument-error"),Yt._fromEmailAndCode(e,s.code,s.tenantId)}}ht.PROVIDER_ID="password";ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jt extends oa{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ne extends Jt{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
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
 */class Re extends Jt{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ze._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Re.credential(n,s)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
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
 */class Oe extends Jt{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
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
 */class Me extends Jt{constructor(){super("twitter.com")}static credential(e,n){return ze._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Me.credential(n,s)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
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
 */async function of(t,e){return Gt(t,"POST","/v1/accounts:signUp",Kt(t,e))}/**
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
 */class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ke._fromIdTokenResponse(e,s,i),o=aa(s);return new Ge({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=aa(s);return new Ge({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zn extends me{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,Zn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Zn(e,n,s,i)}}function ca(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Zn._fromErrorAndOperation(t,r,e,s):r})}async function af(t,e,n=!1){const s=await Qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ge._forOperation(t,"link",s)}/**
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
 */async function cf(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await Qt(t,ca(i,r,e,t),n);E(o.idToken,i,"internal-error");const a=bi(o.idToken);E(a,i,"internal-error");const{sub:c}=a;return E(t.uid===c,i,"user-mismatch"),Ge._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ue(i,"user-mismatch"),o}}/**
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
 */async function ua(t,e,n=!1){const s="signIn",i=await ca(t,s,e),r=await Ge._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function uf(t,e){return ua(Jn(t),e)}async function aw(t,e,n){const s=Jn(t),i=await of(s,{returnSecureToken:!0,email:e,password:n}),r=await Ge._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function cw(t,e,n){return uf(re(t),ht.credential(e,n))}function uw(t,e,n,s){return re(t).onAuthStateChanged(e,n,s)}function lw(t){return re(t).signOut()}const es="__sak";/**
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
 */class la{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lf(){const t=j();return Si(t)||Yn(t)}const hf=1e3,df=10;class ha extends la{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lf()&&Qd(),this.fallbackToPolling=sa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Wd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,df):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},hf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ha.type="LOCAL";const ff=ha;/**
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
 */class da extends la{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}da.type="SESSION";const fa=da;/**
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
 */function pf(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ts(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await pf(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
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
 */function ki(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=ki("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function he(){return window}function mf(t){he().location.href=t}/**
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
 */function pa(){return typeof he().WorkerGlobalScope!="undefined"&&typeof he().importScripts=="function"}async function yf(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wf(){return pa()?self:null}/**
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
 */const ga="firebaseLocalStorageDb",_f=1,ns="firebaseLocalStorage",ma="fbase_key";class Zt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ss(t,e){return t.transaction([ns],e?"readwrite":"readonly").objectStore(ns)}function Ef(){const t=indexedDB.deleteDatabase(ga);return new Zt(t).toPromise()}function Di(){const t=indexedDB.open(ga,_f);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ns,{keyPath:ma})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ns)?e(s):(s.close(),await Ef(),e(await Di()))})})}async function ya(t,e,n){const s=ss(t,!0).put({[ma]:e,value:n});return new Zt(s).toPromise()}async function If(t,e){const n=ss(t,!1).get(e),s=await new Zt(n).toPromise();return s===void 0?null:s.value}function va(t,e){const n=ss(t,!0).delete(e);return new Zt(n).toPromise()}const Tf=800,bf=3;class wa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Di(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(wf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yf(),!this.activeServiceWorker)return;this.sender=new gf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Di();return await ya(e,es,"1"),await va(e,es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ya(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>If(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>va(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ss(i,!1).getAll();return new Zt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wa.type="LOCAL";const Sf=wa;/**
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
 */function Cf(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Af(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=le("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Cf().appendChild(s)})}function kf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ht(3e4,6e4);/**
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
 */function Df(t,e){return e?we(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ni extends Ci{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nf(t){return ua(t.auth,new Ni(t),t.bypassAuthState)}function Rf(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),cf(n,new Ni(t),t.bypassAuthState)}async function Of(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),af(n,new Ni(t),t.bypassAuthState)}/**
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
 */class _a{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nf;case"linkViaPopup":case"linkViaRedirect":return Of;case"reauthViaPopup":case"reauthViaRedirect":return Rf;default:ue(this.auth,"internal-error")}}resolve(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mf=new Ht(2e3,1e4);class dt extends _a{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,dt.currentPopupAction&&dt.currentPopupAction.cancel(),dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mf.get())};e()}}dt.currentPopupAction=null;/**
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
 */const Pf="pendingRedirect",is=new Map;class Lf extends _a{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const s=await xf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xf(t,e){const n=Vf(e),s=Ff(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Uf(t,e){is.set(t._key(),e)}function Ff(t){return we(t._redirectPersistence)}function Vf(t){return Xn(Pf,t.config.apiKey,t.name)}async function Bf(t,e,n=!1){const s=Jn(t),i=Df(s,e),o=await new Lf(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const $f=10*60*1e3;class jf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ia(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(le(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$f&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ea(e))}saveEventToCache(e){this.cachedEventUids.add(Ea(e)),this.lastProcessedEventTime=Date.now()}}function Ea(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ia({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ia(t);default:return!1}}/**
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
 */async function Hf(t,e={}){return zt(t,"GET","/v1/projects",e)}/**
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
 */const Kf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zf=/^https?/;async function Gf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hf(t);for(const n of e)try{if(Wf(n))return}catch{}ue(t,"unauthorized-domain")}function Wf(t){const e=Ei(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zf.test(n))return!1;if(Kf.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Qf=new Ht(3e4,6e4);function Ta(){const t=he().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xf(t){return new Promise((e,n)=>{var s,i,r;function o(){Ta(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ta(),n(le(t,"network-request-failed"))},timeout:Qf.get()})}if((i=(s=he().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((r=he().gapi)===null||r===void 0?void 0:r.load)o();else{const a=kf("iframefcb");return he()[a]=()=>{gapi.load?o():n(le(t,"network-request-failed"))},Af(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw rs=null,e})}let rs=null;function Yf(t){return rs=rs||Xf(t),rs}/**
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
 */const Jf=new Ht(5e3,15e3),Zf="__/auth/iframe",ep="emulator/auth/iframe",tp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},np=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sp(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ii(e,ep):`https://${t.config.authDomain}/${Zf}`,s={apiKey:e.apiKey,appName:t.name,v:jt},i=np.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Vt(s).slice(1)}`}async function ip(t){const e=await Yf(t),n=he().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:sp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=le(t,"network-request-failed"),a=he().setTimeout(()=>{r(o)},Jf.get());function c(){he().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const rp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},op=500,ap=600,cp="_blank",up="http://localhost";class ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lp(t,e,n,s=op,i=ap){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rp),{width:s.toString(),height:i.toString(),top:r,left:o}),u=j().toLowerCase();n&&(a=Jo(u)?cp:n),Yo(u)&&(e=e||up,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(Gd(u)&&a!=="_self")return hp(e||"",a),new ba(null);const h=window.open(e||"",a,l);E(h,t,"popup-blocked");try{h.focus()}catch{}return new ba(h)}function hp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const dp="__/auth/handler",fp="emulator/auth/handler";function Sa(t,e,n,s,i,r){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:jt,eventId:i};if(e instanceof oa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof Jt){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${pp(t)}?${Vt(a).slice(1)}`}function pp({config:t}){return t.emulator?Ii(t,fp):`https://${t.authDomain}/${dp}`}/**
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
 */const Ri="webStorageSupport";class gp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fa,this._completeRedirectFn=Bf,this._overrideRedirectResult=Uf}async _openPopup(e,n,s,i){var r;ve((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Sa(e,n,s,Ei(),i);return lp(e,o,ki())}async _openRedirect(e,n,s,i){return await this._originValidation(e),mf(Sa(e,n,s,Ei(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ve(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ip(e),s=new jf(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ri,{type:Ri},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ri];o!==void 0&&n(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sa()||Si()||Yn()}}const mp=gp;var Ca="@firebase/auth",Aa="0.20.5";/**
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
 */class yp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wp(t){ct(new $e("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{E(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),E(!(o==null?void 0:o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ia(t)},l=new Yd(a,c,u);return Nd(l,n),l})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ct(new $e("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(s=>new yp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Ca,Aa,vp(t)),ke(Ca,Aa,"esm2017")}/**
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
 */function hw(t=Mo()){const e=yi(t,"auth");return e.isInitialized()?e.getImmediate():Dd(t,{popupRedirectResolver:mp,persistence:[Sf,ff,fa]})}wp("Browser");var _p=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,Oi=Oi||{},I=_p||self;function os(){}function Mi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function en(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ep(t){return Object.prototype.hasOwnProperty.call(t,Pi)&&t[Pi]||(t[Pi]=++Ip)}var Pi="closure_uid_"+(1e9*Math.random()>>>0),Ip=0;function Tp(t,e,n){return t.call.apply(t.bind,arguments)}function bp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function K(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=Tp:K=bp,K.apply(null,arguments)}function as(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function z(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Pe(){this.s=this.s,this.o=this.o}var Sp=0,Cp={};Pe.prototype.s=!1;Pe.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Sp!=0)){var t=Ep(this);delete Cp[t]}};Pe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ka=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Da=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Ap(t){e:{var e=vg;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Na(t){return Array.prototype.concat.apply([],arguments)}function Li(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function cs(t){return/^[\s\xa0]*$/.test(t)}var Ra=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ee(t,e){return t.indexOf(e)!=-1}function xi(t,e){return t<e?-1:t>e?1:0}var te;e:{var Oa=I.navigator;if(Oa){var Ma=Oa.userAgent;if(Ma){te=Ma;break e}}te=""}function Ui(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Pa(t){const e={};for(const n in t)e[n]=t[n];return e}var La="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xa(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<La.length;r++)n=La[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Fi(t){return Fi[" "](t),t}Fi[" "]=os;function kp(t){var e=Rp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Dp=ee(te,"Opera"),ft=ee(te,"Trident")||ee(te,"MSIE"),Ua=ee(te,"Edge"),Vi=Ua||ft,Fa=ee(te,"Gecko")&&!(ee(te.toLowerCase(),"webkit")&&!ee(te,"Edge"))&&!(ee(te,"Trident")||ee(te,"MSIE"))&&!ee(te,"Edge"),Np=ee(te.toLowerCase(),"webkit")&&!ee(te,"Edge");function Va(){var t=I.document;return t?t.documentMode:void 0}var us;e:{var Bi="",$i=function(){var t=te;if(Fa)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ua)return/Edge\/([\d\.]+)/.exec(t);if(ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Np)return/WebKit\/(\S+)/.exec(t);if(Dp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($i&&(Bi=$i?$i[1]:""),ft){var ji=Va();if(ji!=null&&ji>parseFloat(Bi)){us=String(ji);break e}}us=Bi}var Rp={};function Op(){return kp(function(){let t=0;const e=Ra(String(us)).split("."),n=Ra("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=xi(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||xi(i[2].length==0,r[2].length==0)||xi(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var qi;if(I.document&&ft){var Ba=Va();qi=Ba||parseInt(us,10)||void 0}else qi=void 0;var Mp=qi,Pp=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",os,e),I.removeEventListener("test",os,e)}catch{}return t}();function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};function tn(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fa){e:{try{Fi(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Lp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tn.Z.h.call(this)}}z(tn,J);var Lp={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),xp=0;function Up(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++xp,this.ca=this.fa=!1}function ls(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function hs(t){this.src=t,this.g={},this.h=0}hs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ki(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Up(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function Hi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=ka(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ls(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ki(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),Gi={};function $a(t,e,n,s,i){if(s&&s.once)return qa(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)$a(t,e[r],n,s,i);return null}return n=Yi(n),t&&t[nn]?t.N(e,n,en(s)?!!s.capture:!!s,i):ja(t,e,n,!1,s,i)}function ja(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=en(i)?!!i.capture:!!i,a=Qi(t);if(a||(t[zi]=a=new hs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Fp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Pp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ka(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fp(){function t(n){return e.call(t.src,t.listener,n)}var e=Vp;return t}function qa(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)qa(t,e[r],n,s,i);return null}return n=Yi(n),t&&t[nn]?t.O(e,n,en(s)?!!s.capture:!!s,i):ja(t,e,n,!0,s,i)}function Ha(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ha(t,e[r],n,s,i);else s=en(s)?!!s.capture:!!s,n=Yi(n),t&&t[nn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ki(r,n,s,i),-1<n&&(ls(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ki(e,n,s,i)),(n=-1<t?e[t]:null)&&Wi(n))}function Wi(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[nn])Hi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ka(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Qi(e))?(Hi(n,t),n.h==0&&(n.src=null,e[zi]=null)):ls(t)}}}function Ka(t){return t in Gi?Gi[t]:Gi[t]="on"+t}function Vp(t,e){if(t.ca)t=!0;else{e=new tn(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Wi(t),t=n.call(s,e)}return t}function Qi(t){return t=t[zi],t instanceof hs?t:null}var Xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yi(t){return typeof t=="function"?t:(t[Xi]||(t[Xi]=function(e){return t.handleEvent(e)}),t[Xi])}function q(){Pe.call(this),this.i=new hs(this),this.P=this,this.I=null}z(q,Pe);q.prototype[nn]=!0;q.prototype.removeEventListener=function(t,e,n,s){Ha(this,t,e,n,s)};function G(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var i=e;e=new J(s,t),xa(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ds(o,s,!0,e)&&i}if(o=e.g=t,i=ds(o,s,!0,e)&&i,i=ds(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ds(o,s,!1,e)&&i}q.prototype.M=function(){if(q.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ls(n[s]);delete t.g[e],t.h--}}this.I=null};q.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};q.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ds(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Hi(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ji=I.JSON.stringify;function Bp(){var t=Ga;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $p{constructor(){this.h=this.g=null}add(e,n){const s=za.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var za=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jp,t=>t.reset());class jp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qp(t){I.setTimeout(()=>{throw t},0)}function Zi(t,e){er||Hp(),tr||(er(),tr=!0),Ga.add(t,e)}var er;function Hp(){var t=I.Promise.resolve(void 0);er=function(){t.then(Kp)}}var tr=!1,Ga=new $p;function Kp(){for(var t;t=Bp();){try{t.h.call(t.g)}catch(n){qp(n)}var e=za;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tr=!1}function fs(t,e){q.call(this),this.h=t||1,this.g=e||I,this.j=K(this.kb,this),this.l=Date.now()}z(fs,q);m=fs.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),G(this,"tick"),this.da&&(nr(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}m.M=function(){fs.Z.M.call(this),nr(this),delete this.g};function sr(t,e,n){if(typeof t=="function")n&&(t=K(t,n));else if(t&&typeof t.handleEvent=="function")t=K(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function Wa(t){t.g=sr(()=>{t.g=null,t.i&&(t.i=!1,Wa(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zp extends Pe{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wa(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sn(t){Pe.call(this),this.h=t,this.g={}}z(sn,Pe);var Qa=[];function Xa(t,e,n,s){Array.isArray(n)||(n&&(Qa[0]=n.toString()),n=Qa);for(var i=0;i<n.length;i++){var r=$a(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ya(t){Ui(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wi(e)},t),t.g={}}sn.prototype.M=function(){sn.Z.M.call(this),Ya(this)};sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ps(){this.g=!0}ps.prototype.Aa=function(){this.g=!1};function Gp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Wp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function pt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Xp(t,n)+(s?" "+s:"")})}function Qp(t,e){t.info(function(){return"TIMEOUT: "+e})}ps.prototype.info=function(){};function Xp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ji(n)}catch{return e}}var We={},Ja=null;function gs(){return Ja=Ja||new q}We.Ma="serverreachability";function Za(t){J.call(this,We.Ma,t)}z(Za,J);function rn(t){const e=gs();G(e,new Za(e,t))}We.STAT_EVENT="statevent";function ec(t,e){J.call(this,We.STAT_EVENT,t),this.stat=e}z(ec,J);function ne(t){const e=gs();G(e,new ec(e,t))}We.Na="timingevent";function tc(t,e){J.call(this,We.Na,t),this.size=e}z(tc,J);function on(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var ms={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},nc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ir(){}ir.prototype.h=null;function sc(t){return t.h||(t.h=t.i())}function ic(){}var an={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function rr(){J.call(this,"d")}z(rr,J);function or(){J.call(this,"c")}z(or,J);var ar;function ys(){}z(ys,ir);ys.prototype.g=function(){return new XMLHttpRequest};ys.prototype.i=function(){return{}};ar=new ys;function cn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new sn(this),this.P=Yp,t=Vi?125:void 0,this.W=new fs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new rc}function rc(){this.i=null,this.g="",this.h=!1}var Yp=45e3,cr={},vs={};m=cn.prototype;m.setTimeout=function(t){this.P=t};function ur(t,e,n){t.K=1,t.v=Ts(_e(e)),t.s=n,t.U=!0,oc(t,null)}function oc(t,e){t.F=Date.now(),un(t),t.A=_e(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),gc(n.h,"t",s),t.C=0,n=t.l.H,t.h=new rc,t.g=Fc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zp(K(t.Ia,t,t.g),t.O)),Xa(t.V,t.g,"readystatechange",t.gb),e=t.H?Pa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),rn(1),Gp(t.j,t.u,t.A,t.m,t.X,t.s)}m.gb=function(t){t=t.target;const e=this.L;e&&Ee(t)==3?e.l():this.Ia(t)};m.Ia=function(t){try{if(t==this.g)e:{const l=Ee(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Vi||this.g&&(this.h.h||this.g.ga()||Ac(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?rn(3):rn(2)),ws(this);var n=this.g.ba();this.N=n;t:if(ac(this)){var s=Ac(this.g);t="";var i=s.length,r=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Qe(this),ln(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Wp(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cs(a)){var u=a;break t}}u=null}if(n=u)pt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lr(this,n);else{this.i=!1,this.o=3,ne(12),Qe(this),ln(this);break e}}this.U?(cc(this,l,o),Vi&&this.i&&l==3&&(Xa(this.V,this.W,"tick",this.fb),this.W.start())):(pt(this.j,this.m,o,null),lr(this,o)),l==4&&Qe(this),this.i&&!this.I&&(l==4?Pc(this.l,this):(this.i=!1,un(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ne(12)):(this.o=0,ne(13)),Qe(this),ln(this)}}}catch{}finally{}};function ac(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function cc(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Jp(t,n),i==vs){e==4&&(t.o=4,ne(14),s=!1),pt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cr){t.o=4,ne(15),pt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else pt(t.j,t.m,i,null),lr(t,i);ac(t)&&i!=vs&&i!=cr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ne(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Er(e),e.L=!0,ne(11))):(pt(t.j,t.m,n,"[Invalid Chunked Response]"),Qe(t),ln(t))}m.fb=function(){if(this.g){var t=Ee(this.g),e=this.g.ga();this.C<e.length&&(ws(this),cc(this,t,e),this.i&&t!=4&&un(this))}};function Jp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?vs:(n=Number(e.substring(n,s)),isNaN(n)?cr:(s+=1,s+n>e.length?vs:(e=e.substr(s,n),t.C=s+n,e)))}m.cancel=function(){this.I=!0,Qe(this)};function un(t){t.Y=Date.now()+t.P,uc(t,t.P)}function uc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=on(K(t.eb,t),e)}function ws(t){t.B&&(I.clearTimeout(t.B),t.B=null)}m.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Qp(this.j,this.A),this.K!=2&&(rn(3),ne(17)),Qe(this),this.o=2,ln(this)):uc(this,this.Y-t)};function ln(t){t.l.G==0||t.I||Pc(t.l,t)}function Qe(t){ws(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,nr(t.W),Ya(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fr(n.i,t))){if(n.I=t.N,!t.J&&fr(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ds(n),As(n);else break e;_r(n),ne(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=on(K(n.ab,n),6e3));if(1>=vc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Je(n,11)}else if((t.J||n.g==t)&&Ds(n),!cs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;!r.g&&(ee(y,"spdy")||ee(y,"quic")||ee(y,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(pr(r,r.h),r.h=null))}if(s.D){const k=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,M(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Uc(s,s.H?s.la:null,s.W),o.J){wc(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ws(a),un(a)),s.g=o}else Oc(s);0<n.l.length&&ks(n)}else u[0]!="stop"&&u[0]!="close"||Je(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Je(n,7):vr(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}rn(4)}catch{}}function Zp(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Mi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function hr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mi(t)||typeof t=="string")Da(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Mi(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Zp(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function gt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof gt)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}m=gt.prototype;m.R=function(){dr(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};m.T=function(){return dr(this),this.g.concat()};function dr(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Xe(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],Xe(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}m.get=function(t,e){return Xe(this.h,t)?this.h[t]:e};m.set=function(t,e){Xe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};m.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function Xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var lc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function eg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ye(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ye){this.g=e!==void 0?e:t.g,_s(this,t.j),this.s=t.s,Es(this,t.i),Is(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new gt(e.g),n.h=e.h),hc(this,n),this.o=t.o}else t&&(n=String(t).match(lc))?(this.g=!!e,_s(this,n[1]||"",!0),this.s=hn(n[2]||""),Es(this,n[3]||"",!0),Is(this,n[4]),this.l=hn(n[5]||"",!0),hc(this,n[6]||"",!0),this.o=hn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}Ye.prototype.toString=function(){var t=[],e=this.j;e&&t.push(dn(e,dc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(dn(e,dc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(dn(n,n.charAt(0)=="/"?rg:ig,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",dn(n,ag)),t.join("")};function _e(t){return new Ye(t)}function _s(t,e,n){t.j=n?hn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Es(t,e,n){t.i=n?hn(e,!0):e}function Is(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hc(t,e,n){e instanceof fn?(t.h=e,cg(t.h,t.g)):(n||(e=dn(e,og)),t.h=new fn(e,t.g))}function M(t,e,n){t.h.set(e,n)}function Ts(t){return M(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tg(t){return t instanceof Ye?_e(t):new Ye(t,void 0)}function ng(t,e,n,s){var i=new Ye(null,void 0);return t&&_s(i,t),e&&Es(i,e),n&&Is(i,n),s&&(i.l=s),i}function hn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dc=/[#\/\?@]/g,ig=/[#\?:]/g,rg=/[#\?]/g,og=/[#\?@]/g,ag=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Le(t){t.g||(t.g=new gt,t.h=0,t.i&&eg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}m=fn.prototype;m.add=function(t,e){Le(this),this.i=null,t=mt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fc(t,e){Le(t),e=mt(t,e),Xe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Xe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&dr(t)))}function pc(t,e){return Le(t),e=mt(t,e),Xe(t.g.h,e)}m.forEach=function(t,e){Le(this),this.g.forEach(function(n,s){Da(n,function(i){t.call(e,i,s,this)},this)},this)};m.T=function(){Le(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};m.R=function(t){Le(this);var e=[];if(typeof t=="string")pc(this,t)&&(e=Na(e,this.g.get(mt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Na(e,t[n])}return e};m.set=function(t,e){return Le(this),this.i=null,t=mt(this,t),pc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};m.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function gc(t,e,n){fc(t,e),0<n.length&&(t.i=null,t.g.set(mt(t,e),Li(n)),t.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function mt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cg(t,e){e&&!t.j&&(Le(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(fc(this,s),gc(this,i,n))},t)),t.j=e}var ug=class{constructor(t,e){this.h=t,this.g=e}};function mc(t){this.l=t||lg,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ea&&I.g.Ea()&&I.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lg=10;function yc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vc(t){return t.h?1:t.g?t.g.size:0}function fr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pr(t,e){t.g?t.g.add(e):t.h=e}function wc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mc.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _c(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Li(t.i)}function gr(){}gr.prototype.stringify=function(t){return I.JSON.stringify(t,void 0)};gr.prototype.parse=function(t){return I.JSON.parse(t,void 0)};function hg(){this.g=new gr}function dg(t,e,n){const s=n||"";try{hr(t,function(i,r){let o=i;en(i)&&(o=Ji(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function fg(t,e){const n=new ps;if(I.Image){const s=new Image;s.onload=as(bs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=as(bs,n,s,"TestLoadImage: error",!1,e),s.onabort=as(bs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=as(bs,n,s,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function bs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}z(pn,ir);pn.prototype.g=function(){return new Ss(this.l,this.j)};pn.prototype.i=function(t){return function(){return t}}({});function Ss(t,e){q.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Ss,q);var mr=0;m=Ss.prototype;m.open=function(t,e){if(this.readyState!=mr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,mn(this)};m.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||I).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=mr};m.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mn(this)),this.g&&(this.readyState=3,mn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof I.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ec(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ec(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}m.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gn(this):mn(this),this.readyState==3&&Ec(this)}};m.Ua=function(t){this.g&&(this.response=this.responseText=t,gn(this))};m.Ta=function(t){this.g&&(this.response=t,gn(this))};m.ha=function(){this.g&&gn(this)};function gn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,mn(t)}m.setRequestHeader=function(t,e){this.v.append(t,e)};m.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pg=I.JSON.parse;function L(t){q.call(this),this.headers=new gt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ic,this.K=this.L=!1}z(L,q);var Ic="",gg=/^https?$/i,mg=["POST","PUT"];m=L.prototype;m.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ar.g(),this.C=this.u?sc(this.u):sc(ar),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Tc(this,r);return}t=n||"";const i=new gt(this.headers);s&&hr(s,function(r,o){i.set(o,r)}),s=Ap(i.T()),n=I.FormData&&t instanceof I.FormData,!(0<=ka(mg,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cc(this),0<this.B&&((this.K=yg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=sr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Tc(this,r)}};function yg(t){return ft&&Op()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function vg(t){return t.toLowerCase()=="content-type"}m.pa=function(){typeof Oi!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Tc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bc(t),Cs(t)}function bc(t){t.D||(t.D=!0,G(t,"complete"),G(t,"error"))}m.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,G(this,"complete"),G(this,"abort"),Cs(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cs(this,!0)),L.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Sc(this):this.cb())};m.cb=function(){Sc(this)};function Sc(t){if(t.h&&typeof Oi!="undefined"&&(!t.C[1]||Ee(t)!=4||t.ba()!=2)){if(t.v&&Ee(t)==4)sr(t.Fa,0,t);else if(G(t,"readystatechange"),Ee(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(lc)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!gg.test(i?i.toLowerCase():"")}n=s}if(n)G(t,"complete"),G(t,"success");else{t.m=6;try{var o=2<Ee(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",bc(t)}}finally{Cs(t)}}}}function Cs(t,e){if(t.g){Cc(t);const n=t.g,s=t.C[0]?os:null;t.g=null,t.C=null,e||G(t,"ready");try{n.onreadystatechange=s}catch{}}}function Cc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}function Ee(t){return t.g?t.g.readyState:0}m.ba=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pg(e)}};function Ac(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ic:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function wg(t){let e="";return Ui(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=wg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):M(t,e,n))}function yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kc(t){this.za=0,this.l=[],this.h=new ps,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=yn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=yn("baseRetryDelayMs",5e3,t),this.$a=yn("retryDelaySeedMs",1e4,t),this.Ya=yn("forwardChannelMaxRetries",2,t),this.ra=yn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mc(t&&t.concurrentRequestLimit),this.Ca=new hg,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}m=kc.prototype;m.ma=8;m.G=1;function vr(t){if(Dc(t),t.G==3){var e=t.V++,n=_e(t.F);M(n,"SID",t.J),M(n,"RID",e),M(n,"TYPE","terminate"),vn(t,n),e=new cn(t,t.h,e,void 0),e.K=2,e.v=Ts(_e(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(e.v.toString(),"")),!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),un(e)}xc(t)}m.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function As(t){t.g&&(Er(t),t.g.cancel(),t.g=null)}function Dc(t){As(t),t.u&&(I.clearTimeout(t.u),t.u=null),Ds(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function wr(t,e){t.l.push(new ug(t.Za++,e)),t.G==3&&ks(t)}function ks(t){yc(t.i)||t.m||(t.m=!0,Zi(t.Ha,t),t.C=0)}function _g(t,e){return vc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=on(K(t.Ha,t,e),Lc(t,t.C)),t.C++,!0)}m.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new cn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Pa(r),xa(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rc(this,i,e),n=_e(this.F),M(n,"RID",t),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),vn(this,n),this.o&&r&&yr(n,this.o,r),pr(this.i,i),this.Ra&&M(n,"TYPE","init"),this.ja?(M(n,"$req",e),M(n,"SID","null"),i.$=!0,ur(i,n,null)):ur(i,n,e),this.G=2}}else this.G==3&&(t?Nc(this,t):this.l.length==0||yc(this.i)||Nc(this))};function Nc(t,e){var n;e?n=e.m:n=t.V++;const s=_e(t.F);M(s,"SID",t.J),M(s,"RID",n),M(s,"AID",t.U),vn(t,s),t.o&&t.s&&yr(s,t.o,t.s),n=new cn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Rc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),pr(t.i,n),ur(n,s,e)}function vn(t,e){t.j&&hr({},function(n,s){M(e,s,n)})}function Rc(t,e,n){n=Math.min(t.l.length,n);var s=t.j?K(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{dg(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Oc(t){t.g||t.u||(t.Y=1,Zi(t.Ga,t),t.A=0)}function _r(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=on(K(t.Ga,t),Lc(t,t.A)),t.A++,!0)}m.Ga=function(){if(this.u=null,Mc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=on(K(this.bb,this),t)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ne(10),As(this),Mc(this))};function Er(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function Mc(t){t.g=new cn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=_e(t.oa);M(e,"RID","rpc"),M(e,"SID",t.J),M(e,"CI",t.N?"0":"1"),M(e,"AID",t.U),vn(t,e),M(e,"TYPE","xmlhttp"),t.o&&t.s&&yr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ts(_e(e)),n.s=null,n.U=!0,oc(n,t)}m.ab=function(){this.v!=null&&(this.v=null,As(this),_r(this),ne(19))};function Ds(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function Pc(t,e){var n=null;if(t.g==e){Ds(t),Er(t),t.g=null;var s=2}else if(fr(t.i,e))n=e.D,wc(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=gs(),G(s,new tc(s,n,e,i)),ks(t)}else Oc(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&_g(t,e)||s==2&&_r(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Je(t,5);break;case 4:Je(t,10);break;case 3:Je(t,6);break;default:Je(t,2)}}}function Lc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Je(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=K(t.jb,t);n||(n=new Ye("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||_s(n,"https"),Ts(n)),fg(n.toString(),s)}else ne(2);t.G=0,t.j&&t.j.va(e),xc(t),Dc(t)}m.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ne(2)):(this.h.info("Failed to ping google.com"),ne(1))};function xc(t){t.G=0,t.I=-1,t.j&&((_c(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Li(t.l),t.l.length=0),t.j.ua())}function Uc(t,e,n){let s=tg(n);if(s.i!="")e&&Es(s,e+"."+s.i),Is(s,s.m);else{const i=I.location;s=ng(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ui(t.aa,function(i,r){M(s,r,i)}),e=t.D,n=t.sa,e&&n&&M(s,e,n),M(s,"VER",t.ma),vn(t,s),s}function Fc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new L(new pn({ib:!0})):new L(t.qa),e.L=t.H,e}function Vc(){}m=Vc.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function Ns(){if(ft&&!(10<=Number(Mp)))throw Error("Environmental error: no available transport.")}Ns.prototype.g=function(t,e){return new oe(t,e)};function oe(t,e){q.call(this),this.g=new kc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!cs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yt(this)}z(oe,q);oe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zi(K(t.hb,t,e))),ne(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Uc(t,null,t.W),ks(t)};oe.prototype.close=function(){vr(this.g)};oe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,wr(this.g,e)}else this.v?(e={},e.__data__=Ji(t),wr(this.g,e)):wr(this.g,t)};oe.prototype.M=function(){this.g.j=null,delete this.j,vr(this.g),delete this.g,oe.Z.M.call(this)};function Bc(t){rr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}z(Bc,rr);function $c(){or.call(this),this.status=1}z($c,or);function yt(t){this.g=t}z(yt,Vc);yt.prototype.xa=function(){G(this.g,"a")};yt.prototype.wa=function(t){G(this.g,new Bc(t))};yt.prototype.va=function(t){G(this.g,new $c(t))};yt.prototype.ua=function(){G(this.g,"b")};Ns.prototype.createWebChannel=Ns.prototype.g;oe.prototype.send=oe.prototype.u;oe.prototype.open=oe.prototype.m;oe.prototype.close=oe.prototype.close;ms.NO_ERROR=0;ms.TIMEOUT=8;ms.HTTP_ERROR=6;nc.COMPLETE="complete";ic.EventType=an;an.OPEN="a";an.CLOSE="b";an.ERROR="c";an.MESSAGE="d";q.prototype.listen=q.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.La;L.prototype.getLastErrorCode=L.prototype.Da;L.prototype.getStatus=L.prototype.ba;L.prototype.getResponseJson=L.prototype.Qa;L.prototype.getResponseText=L.prototype.ga;L.prototype.send=L.prototype.ea;var Eg=function(){return new Ns},Ig=function(){return gs()},Ir=ms,Tg=nc,bg=We,jc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Sg=pn,Rs=ic,Cg=L;const qc="@firebase/firestore";/**
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
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
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
 */let vt="9.9.2";/**
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
 */const Ze=new ci("@firebase/firestore");function Hc(){return Ze.logLevel}function v(t,...e){if(Ze.logLevel<=N.DEBUG){const n=e.map(Tr);Ze.debug(`Firestore (${vt}): ${t}`,...n)}}function Ie(t,...e){if(Ze.logLevel<=N.ERROR){const n=e.map(Tr);Ze.error(`Firestore (${vt}): ${t}`,...n)}}function Kc(t,...e){if(Ze.logLevel<=N.WARN){const n=e.map(Tr);Ze.warn(`Firestore (${vt}): ${t}`,...n)}}function Tr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function T(t="Unexpected state"){const e=`FIRESTORE (${vt}) INTERNAL ASSERTION FAILED: `+t;throw Ie(e),new Error(e)}function O(t,e){t||T()}function b(t,e){return t}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends me{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class et{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class Dg{constructor(e){this.t=e,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new et,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new et)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return O(e===null||typeof e=="string"),new se(e)}}class Ng{constructor(e,n,s){this.type="FirstParty",this.user=se.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Rg{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ng(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mg{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(O(typeof n.token=="string"),this.p=n.token,new Og(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Pg(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class zc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Pg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function R(t,e){return t<e?-1:t>e?1:0}function wt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class F{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new F(0,0))}static max(){return new S(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wn{constructor(e,n,s){n===void 0?n=0:n>e.length&&T(),s===void 0?s=e.length-n:s>e.length-n&&T(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class P extends wn{construct(e,n,s){return new P(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new P(n)}static emptyPath(){return new P([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends wn{construct(e,n,s){return new Z(e,n,s)}static isValidIdentifier(e){return Lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(n)}static emptyPath(){return new Z([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(P.fromString(e))}static fromName(e){return new w(P.fromString(e).popFirst(5))}static empty(){return new w(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return P.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new P(e.slice()))}}function xg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new xe(i,w.empty(),e)}function Ug(t){return new xe(t.readTime,t.key,-1)}class xe{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xe(S.min(),w.empty(),-1)}static max(){return new xe(S.max(),w.empty(),-1)}}function Fg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=w.comparator(t.documentKey,e.documentKey),n!==0?n:R(t.largestBatchId,e.largestBatchId))}/**
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
 */const Vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _n(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==Vg)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,s)=>{n(e)})}static reject(e){return new f((n,s)=>{s(e)})}static waitFor(e){return new f((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=f.resolve(!1);for(const s of e)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new f((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new f((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function En(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class br{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Gc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _t(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */br.ot=-1;class V{constructor(e,n){this.comparator=e,this.root=n||W.EMPTY}insert(e,n){return new V(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(e){return new V(this.comparator,this.root.remove(e,this.comparator).copy(null,null,W.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class W{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:W.RED,this.left=i!=null?i:W.EMPTY,this.right=r!=null?r:W.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new W(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return W.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,n,s,i){return this}insert(t,e,n){return new W(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class B{constructor(e){this.comparator=e,this.data=new V(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(e){return new Qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof B)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new B(this.comparator);return n.data=e,n}}class Qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class de{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new de([])}unionWith(e){let n=new B(Z.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new de(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Q(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Q(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const $g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ue(t){if(O(!!t),typeof t=="string"){let e=0;const n=$g.exec(t);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:x(t.seconds),nanos:x(t.nanos)}}function x(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Et(t){return typeof t=="string"?Q.fromBase64String(t):Q.fromUint8Array(t)}/**
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
 */function Xc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yc(t){const e=t.mapValue.fields.__previous_value__;return Xc(e)?Yc(e):e}function In(t){const e=Ue(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
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
 */class jg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class It{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new It("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof It&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Ms(t){return t==null}function Ps(t){return t===0&&1/t==-1/0}function qg(t){return typeof t=="number"&&Number.isInteger(t)&&!Ps(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xc(t)?4:Hg(t)?9007199254740991:10:T()}function fe(t,e){if(t===e)return!0;const n=tt(t);if(n!==tt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return In(t).isEqual(In(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ue(s.timestampValue),o=Ue(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Et(s.bytesValue).isEqual(Et(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return x(s.geoPointValue.latitude)===x(i.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return x(s.integerValue)===x(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=x(s.doubleValue),o=x(i.doubleValue);return r===o?Ps(r)===Ps(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return wt(t.arrayValue.values||[],e.arrayValue.values||[],fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Gc(r)!==Gc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!fe(r[a],o[a])))return!1;return!0}(t,e);default:return T()}}function Tn(t,e){return(t.values||[]).find(n=>fe(n,e))!==void 0}function Tt(t,e){if(t===e)return 0;const n=tt(t),s=tt(e);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=x(i.integerValue||i.doubleValue),a=x(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jc(t.timestampValue,e.timestampValue);case 4:return Jc(In(t),In(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Et(i),a=Et(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=R(x(i.latitude),x(r.latitude));return o!==0?o:R(x(i.longitude),x(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Tt(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ls.mapValue&&r===Ls.mapValue)return 0;if(i===Ls.mapValue)return 1;if(r===Ls.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=Tt(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(t.mapValue,e.mapValue);default:throw T()}}function Jc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return R(t,e);const n=Ue(t),s=Ue(e),i=R(n.seconds,s.seconds);return i!==0?i:R(n.nanos,s.nanos)}function bt(t){return Sr(t)}function Sr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ue(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Et(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,w.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Sr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Sr(s.fields[a])}`;return r+"}"}(t.mapValue):T();var e,n}function Cr(t){return!!t&&"integerValue"in t}function Ar(t){return!!t&&"arrayValue"in t}function Zc(t){return!!t&&"nullValue"in t}function eu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xs(t){return!!t&&"mapValue"in t}function bn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _t(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=bn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ae{constructor(e){this.value=e}static empty(){return new ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bn(n)}setAll(e){let n=Z.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=bn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){_t(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ae(bn(this.value))}}function tu(t){const e=[];return _t(t.fields,(n,s)=>{const i=new Z([n]);if(xs(s)){const r=tu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new de(e)}/**
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
 */class X{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new X(e,0,S.min(),S.min(),ae.empty(),0)}static newFoundDocument(e,n,s){return new X(e,1,n,S.min(),s,0)}static newNoDocument(e,n){return new X(e,2,n,S.min(),ae.empty(),0)}static newUnknownDocument(e,n){return new X(e,3,n,S.min(),ae.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof X&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kg{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function nu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Kg(t,e,n,s,i,r,o)}function kr(t){const e=b(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+bt(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ms(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>bt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>bt(s)).join(",")),e.ut=n}return e.ut}function zg(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${bt(s.value)}`;var s}).join(", ")}]`),Ms(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>bt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>bt(n)).join(",")),`Target(${e})`}function Dr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!em(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!fe(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ru(t.startAt,e.startAt)&&ru(t.endAt,e.endAt)}function Nr(t){return w.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ie extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new Gg(e,n,s):n==="array-contains"?new Xg(e,s):n==="in"?new Yg(e,s):n==="not-in"?new Jg(e,s):n==="array-contains-any"?new Zg(e,s):new ie(e,n,s)}static ct(e,n,s){return n==="in"?new Wg(e,s):new Qg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Tt(n,this.value)):n!==null&&tt(this.value)===tt(n)&&this.at(Tt(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Gg extends ie{constructor(e,n,s){super(e,n,s),this.key=w.fromName(s.referenceValue)}matches(e){const n=w.comparator(e.key,this.key);return this.at(n)}}class Wg extends ie{constructor(e,n){super(e,"in",n),this.keys=su("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qg extends ie{constructor(e,n){super(e,"not-in",n),this.keys=su("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function su(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Xg extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ar(n)&&Tn(n.arrayValue,this.value)}}class Yg extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tn(this.value.arrayValue,n)}}class Jg extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tn(this.value.arrayValue,n)}}class Zg extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ar(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Tn(this.value.arrayValue,s))}}class Us{constructor(e,n){this.position=e,this.inclusive=n}}class Sn{constructor(e,n="asc"){this.field=e,this.dir=n}}function em(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function iu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Tt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ru(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fs{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function tm(t,e,n,s,i,r,o,a){return new Fs(t,e,n,s,i,r,o,a)}function Rr(t){return new Fs(t)}function ou(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sm(t){for(const e of t.filters)if(e.ht())return e.field;return null}function im(t){return t.collectionGroup!==null}function Cn(t){const e=b(t);if(e.lt===null){e.lt=[];const n=sm(e),s=nm(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new Sn(n)),e.lt.push(new Sn(Z.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Sn(Z.keyField(),r))}}}return e.lt}function Te(t){const e=b(t);if(!e.ft)if(e.limitType==="F")e.ft=nu(e.path,e.collectionGroup,Cn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Cn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Sn(r.field,o))}const s=e.endAt?new Us(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Us(e.startAt.position,e.startAt.inclusive):null;e.ft=nu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.ft}function Or(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vs(t,e){return Dr(Te(t),Te(e))&&t.limitType===e.limitType}function au(t){return`${kr(Te(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${zg(Te(t))}; limitType=${t.limitType})`}function Pr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=iu(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Cn(n),s)||n.endAt&&!function(i,r,o){const a=iu(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Cn(n),s))}(t,e)}function rm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cu(t){return(e,n)=>{let s=!1;for(const i of Cn(t)){const r=om(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function om(t,e,n){const s=t.field.isKeyField()?w.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Tt(a,c):T()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function uu(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ps(e)?"-0":e}}function lu(t){return{integerValue:""+t}}function am(t,e){return qg(e)?lu(e):uu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Bs{constructor(){this._=void 0}}function cm(t,e,n){return t instanceof $s?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof An?du(t,e):t instanceof kn?fu(t,e):function(s,i){const r=hu(s,i),o=pu(r)+pu(s._t);return Cr(r)&&Cr(s._t)?lu(o):uu(s.wt,o)}(t,e)}function um(t,e,n){return t instanceof An?du(t,e):t instanceof kn?fu(t,e):n}function hu(t,e){return t instanceof js?Cr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class $s extends Bs{}class An extends Bs{constructor(e){super(),this.elements=e}}function du(t,e){const n=gu(e);for(const s of t.elements)n.some(i=>fe(i,s))||n.push(s);return{arrayValue:{values:n}}}class kn extends Bs{constructor(e){super(),this.elements=e}}function fu(t,e){let n=gu(e);for(const s of t.elements)n=n.filter(i=>!fe(i,s));return{arrayValue:{values:n}}}class js extends Bs{constructor(e,n){super(),this.wt=e,this._t=n}}function pu(t){return x(t.integerValue||t.doubleValue)}function gu(t){return Ar(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof An&&s instanceof An||n instanceof kn&&s instanceof kn?wt(n.elements,s.elements,fe):n instanceof js&&s instanceof js?fe(n._t,s._t):n instanceof $s&&s instanceof $s}(t.transform,e.transform)}class hm{constructor(e,n){this.version=e,this.transformResults=n}}class pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pe}static exists(e){return new pe(void 0,e)}static updateTime(e){return new pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hs{}function mu(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lr(t.key,pe.none()):new Nn(t.key,t.data,pe.none());{const n=t.data,s=ae.empty();let i=new B(Z.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new nt(t.key,s,new de(i.toArray()),pe.none())}}function dm(t,e,n){t instanceof Nn?function(s,i,r){const o=s.value.clone(),a=wu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nt?function(s,i,r){if(!qs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=wu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vu(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Dn(t,e,n,s){return t instanceof Nn?function(i,r,o,a){if(!qs(i.precondition,r))return o;const c=i.value.clone(),u=_u(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof nt?function(i,r,o,a){if(!qs(i.precondition,r))return o;const c=_u(i.fieldTransforms,a,r),u=r.data;return u.setAll(vu(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return qs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function fm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=hu(s.transform,i||null);r!=null&&(n===null&&(n=ae.empty()),n.set(s.field,r))}return n||null}function yu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wt(n,s,(i,r)=>lm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Nn extends Hs{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nt extends Hs{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function wu(t,e,n){const s=new Map;O(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,um(o,a,n[i]))}return s}function _u(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,cm(r,o,e))}return s}class Lr extends Hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pm extends Hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gm{constructor(e){this.count=e}}/**
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
 */var U,A;function mm(t){switch(t){default:return T();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Eu(t){if(t===void 0)return Ie("GRPC error has no .code"),p.UNKNOWN;switch(t){case U.OK:return p.OK;case U.CANCELLED:return p.CANCELLED;case U.UNKNOWN:return p.UNKNOWN;case U.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case U.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case U.INTERNAL:return p.INTERNAL;case U.UNAVAILABLE:return p.UNAVAILABLE;case U.UNAUTHENTICATED:return p.UNAUTHENTICATED;case U.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case U.NOT_FOUND:return p.NOT_FOUND;case U.ALREADY_EXISTS:return p.ALREADY_EXISTS;case U.PERMISSION_DENIED:return p.PERMISSION_DENIED;case U.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case U.ABORTED:return p.ABORTED;case U.OUT_OF_RANGE:return p.OUT_OF_RANGE;case U.UNIMPLEMENTED:return p.UNIMPLEMENTED;case U.DATA_LOSS:return p.DATA_LOSS;default:return T()}}(A=U||(U={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class St{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_t(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Wc(this.inner)}size(){return this.innerSize}}/**
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
 */const ym=new V(w.comparator);function be(){return ym}const Iu=new V(w.comparator);function Rn(...t){let e=Iu;for(const n of t)e=e.insert(n.key,n);return e}function Tu(t){let e=Iu;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function st(){return On()}function bu(){return On()}function On(){return new St(t=>t.toString(),(t,e)=>t.isEqual(e))}const vm=new V(w.comparator),wm=new B(w.comparator);function C(...t){let e=wm;for(const n of t)e=e.add(n);return e}const _m=new B(R);function Su(){return _m}/**
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
 */class Ks{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Mn.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ks(S.min(),s,Su(),be(),C())}}class Mn{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Mn(Q.EMPTY_BYTE_STRING,n,C(),C(),C())}}/**
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
 */class zs{constructor(e,n,s,i){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=i}}class Cu{constructor(e,n){this.targetId=e,this.It=n}}class Au{constructor(e,n,s=Q.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ku{constructor(){this.Tt=0,this.Et=Nu(),this.At=Q.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=C(),n=C(),s=C();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new Mn(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Nu()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Em{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=be(),this.Bt=Du(),this.Lt=new B(R)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:T()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,s=e.It.count,i=this.Ht(n);if(i){const r=i.target;if(Nr(r))if(s===0){const o=new w(r.path);this.Kt(n,o,X.newNoDocument(o,S.min()))}else O(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&Nr(a.target)){const c=new w(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,X.newNoDocument(c,e))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=C();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new Ks(e,n,this.Lt,this.$t,s);return this.$t=be(),this.Bt=Du(),this.Lt=new B(R),i}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ku,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new B(R),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ku),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function Du(){return new V(w.comparator)}function Nu(){return new V(w.comparator)}/**
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
 */const Im=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class bm{constructor(e,n){this.databaseId=e,this.dt=n}}function Gs(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ru(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Sm(t,e){return Gs(t,e.toTimestamp())}function Se(t){return O(!!t),S.fromTimestamp(function(e){const n=Ue(e);return new F(n.seconds,n.nanos)}(t))}function xr(t,e){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ou(t){const e=P.fromString(t);return O(xu(e)),e}function Ur(t,e){return xr(t.databaseId,e.path)}function Fr(t,e){const n=Ou(e);if(n.get(1)!==t.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new w(Mu(n))}function Vr(t,e){return xr(t.databaseId,e)}function Cm(t){const e=Ou(t);return e.length===4?P.emptyPath():Mu(e)}function Br(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mu(t){return O(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pu(t,e,n){return{name:Ur(t,e),fields:n.value.mapValue.fields}}function Am(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.dt?(O(u===void 0||typeof u=="string"),Q.fromBase64String(u||"")):(O(u===void 0||u instanceof Uint8Array),Q.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:Eu(c.code);return new _(u,c.message||"")}(o);n=new Au(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Fr(t,s.document.name),r=Se(s.document.updateTime),o=new ae({mapValue:{fields:s.document.fields}}),a=X.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new zs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Fr(t,s.document),r=s.readTime?Se(s.readTime):S.min(),o=X.newNoDocument(i,r),a=s.removedTargetIds||[];n=new zs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Fr(t,s.document),r=s.removedTargetIds||[];n=new zs([],r,i,null)}else{if(!("filter"in e))return T();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new gm(i),o=s.targetId;n=new Cu(o,r)}}return n}function km(t,e){let n;if(e instanceof Nn)n={update:Pu(t,e.key,e.value)};else if(e instanceof Lr)n={delete:Ur(t,e.key)};else if(e instanceof nt)n={update:Pu(t,e.key,e.data),updateMask:Fm(e.fieldMask)};else{if(!(e instanceof pm))return T();n={verify:Ur(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof $s)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof An)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof kn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof js)return{fieldPath:r.field.canonicalString(),increment:o._t};throw T()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(t,e.precondition)),n}function Dm(t,e){return t&&t.length>0?(O(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Se(s.updateTime):Se(i);return r.isEqual(S.min())&&(r=Se(i)),new hm(r,s.transformResults||[])}(n,e))):[]}function Nm(t,e){return{documents:[Vr(t,e.path)]}}function Rm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Vr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(eu(h.value))return{unaryFilter:{field:Ct(h.field),op:"IS_NAN"}};if(Zc(h.value))return{unaryFilter:{field:Ct(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(eu(h.value))return{unaryFilter:{field:Ct(h.field),op:"IS_NOT_NAN"}};if(Zc(h.value))return{unaryFilter:{field:Ct(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ct(h.field),op:Lm(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ct(l.field),direction:Pm(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.dt||Ms(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Om(t){let e=Cm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){O(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=Lu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Sn(At(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ms(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Us(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Us(d,h)}(n.endAt)),tm(e,i,o,r,a,"F",c,u)}function Mm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lu(t){return t?t.unaryFilter!==void 0?[Um(t)]:t.fieldFilter!==void 0?[xm(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Lu(e)).reduce((e,n)=>e.concat(n)):T():[]}function Pm(t){return Im[t]}function Lm(t){return Tm[t]}function Ct(t){return{fieldPath:t.canonicalString()}}function At(t){return Z.fromServerFormat(t.fieldPath)}function xm(t){return ie.create(At(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}function Um(t){switch(t.unaryFilter.op){case"IS_NAN":const e=At(t.unaryFilter.field);return ie.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=At(t.unaryFilter.field);return ie.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=At(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=At(t.unaryFilter.field);return ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function Fm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&dm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Dn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Dn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bu();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=mu(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),C())}isEqual(e){return this.batchId===e.batchId&&wt(this.mutations,e.mutations,(n,s)=>yu(n,s))&&wt(this.baseMutations,e.baseMutations,(n,s)=>yu(n,s))}}class $r{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){O(e.mutations.length===s.length);let i=vm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new $r(e,n,s,i)}}/**
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
 */class Bm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class it{constructor(e,n,s,i,r=S.min(),o=S.min(),a=Q.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class $m{constructor(e){this.ne=e}}function jm(t){const e=Om({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Or(e,e.limit,"L"):e}/**
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
 */class qm{constructor(){this.ze=new Hm}addToCollectionParentIndex(e,n){return this.ze.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n){return f.resolve(null)}getIndexType(e,n){return f.resolve(0)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,n){return f.resolve(xe.min())}getMinOffsetFromCollectionGroup(e,n){return f.resolve(xe.min())}updateCollectionGroup(e,n,s){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class Hm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new B(P.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new B(P.comparator)).toArray()}}/**
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
 */class kt{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new kt(0)}static Rn(){return new kt(-1)}}/**
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
 */class Km{constructor(){this.changes=new St(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,X.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Gm{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Dn(s.mutation,i,de.empty(),F.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,C()).next(()=>s))}getLocalViewOfDocuments(e,n,s=C()){const i=st();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Rn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=st();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,C()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=be();const o=On(),a=On();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof nt)?r=r.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Dn(l.mutation,u,l.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new zm(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=On();let i=new V((o,a)=>o-a),r=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||de.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=bu();l.forEach(d=>{if(!r.has(d)){const g=mu(n.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):im(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):f.resolve(st());let a=-1,c=r;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?f.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,C())).next(l=>({batchId:a,changes:Tu(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new w(n)).next(s=>{let i=Rn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Rn();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new Fs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,X.newInvalidDocument(u)))});let o=Rn();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Dn(u.mutation,c,de.empty(),F.now()),Pr(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):f.resolve(X.newInvalidDocument(n))}}/**
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
 */class Wm{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return f.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Se(s.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:jm(s.bundledQuery),readTime:Se(s.readTime)}}(n)),f.resolve()}}/**
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
 */class Qm{constructor(){this.overlays=new V(w.comparator),this.Xn=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}getOverlays(e,n){const s=st();return f.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ie(e,n,r)}),f.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),f.resolve()}getOverlaysForCollection(e,n,s){const i=st(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new V((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=st(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=st(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}ie(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Bm(n,s));let r=this.Xn.get(n);r===void 0&&(r=C(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
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
 */class jr{constructor(){this.Zn=new B(H.ts),this.es=new B(H.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new H(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new H(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new w(new P([])),s=new H(n,e),i=new H(n,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new w(new P([])),s=new H(n,e),i=new H(n,e+1);let r=C();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new H(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class H{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return w.comparator(e.key,n.key)||R(e.ls,n.ls)}static ns(e,n){return R(e.ls,n.ls)||w.comparator(e.key,n.key)}}/**
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
 */class Xm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new B(H.ts)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new H(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new H(n,0),i=new H(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new B(R);return n.forEach(i=>{const r=new H(i,0),o=new H(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),f.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new H(new w(r),0);let a=new B(R);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),f.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){O(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return f.forEach(n.mutations,i=>{const r=new H(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new H(n,0),i=this.ds.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ym{constructor(e){this.ps=e,this.docs=new V(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(e,n){let s=be();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():X.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(e,n,s){let i=be();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Fg(Ug(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,n,s,i){T()}Is(e,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Jm(this)}getSize(e){return f.resolve(this.size)}}class Jm extends Km{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),f.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class Zm{constructor(e){this.persistence=e,this.Ts=new St(n=>kr(n),Dr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Es=0,this.As=new jr,this.targetCount=0,this.Rs=kt.An()}forEachTarget(e,n){return this.Ts.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),f.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new kt(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.vn(n),f.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return f.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),f.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),f.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return f.resolve(s)}containsKey(e,n){return f.resolve(this.As.containsKey(n))}}/**
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
 */class ey{constructor(e,n){this.bs={},this.overlays={},this.Ps=new br(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Zm(this),this.indexManager=new qm,this.remoteDocumentCache=function(s){return new Ym(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new $m(n),this.Ds=new Wm(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new Xm(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){v("MemoryPersistence","Starting transaction:",e);const i=new ty(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,n){return f.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class ty extends Bg{constructor(e){super(),this.currentSequenceNumber=e}}class qr{constructor(e){this.persistence=e,this.ks=new jr,this.Ms=null}static Os(e){return new qr(e)}get Fs(){if(this.Ms)return this.Ms;throw T()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),f.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),f.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Fs,s=>{const i=w.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return f.or([()=>f.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Hr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(e,n){let s=C(),i=C();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Hr(e,n.fromCache,s,i)}}/**
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
 */class ny{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ci(e,n).next(r=>r||this.xi(e,n,i,s)).next(r=>r||this.Ni(e,n))}Ci(e,n){if(ou(n))return f.resolve(null);let s=Te(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Or(n,null,"F"),s=Te(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=C(...r);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(e,Or(n,null,"F")):this.Oi(e,u,n,c)}))})))}xi(e,n,s,i){return ou(n)||i.isEqual(S.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(n,r);return this.Mi(n,o,s,i)?this.Ni(e,n):(Hc()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mr(n)),this.Oi(e,o,n,xg(i,-1)))})}ki(e,n){let s=new B(cu(e));return n.forEach((i,r)=>{Pr(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,n){return Hc()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.Di.getDocumentsMatchingQuery(e,n,xe.min())}Oi(e,n,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class sy{constructor(e,n,s,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new V(R),this.Bi=new St(r=>kr(r),Dr),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gm(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function iy(t,e,n,s){return new sy(t,e,n,s)}async function Uu(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function ry(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const k=c.docVersions.get(g);O(k!==null),y.version.compareTo(k)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=C();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Fu(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function oy(t,e){const n=b(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(r,l.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Q.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),i=i.insert(h,g),function(y,k,D){return y.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,l)&&a.push(n.Vs.updateTargetData(r,g))});let c=be(),u=C();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(ay(r,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(S.min())){const l=n.Vs.getLastRemoteSnapshotVersion(r).next(h=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.$i=i,r))}function ay(t,e,n){let s=C(),i=C();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=be();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function cy(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function uy(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,e).next(r=>r?(i=r,f.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new it(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Kr(t,e,n){const s=b(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!En(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function Vu(t,e,n){const s=b(t);let i=S.min(),r=C();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=b(a),h=l.Bi.get(u);return h!==void 0?f.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,Te(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?i:S.min(),n?r:C())).next(a=>(ly(s,rm(e),a),{documents:a,ji:r})))}function ly(t,e,n){let s=S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Li.set(e,s)}class Bu{constructor(){this.activeTargetIds=Su()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hy{constructor(){this.Fr=new Bu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Bu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dy{Br(e){}shutdown(){}}/**
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
 */class $u{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const fy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class py{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class gy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,i,r){const o=this.oo(e,n);v("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Kc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,i,r,o){return this.ro(e,n,s,i,r)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+vt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,n){const s=fy[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,i){return new Promise((r,o)=>{const a=new Cg;a.listenOnce(Tg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ir.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Ir.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(y)>=0?y:p.UNKNOWN}(h.status);o(new _(d,h.message))}else o(new _(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(p.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(e,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Eg(),o=Ig(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Sg({})),this.uo(a.initMessageHeaders,n,s),Eo()||To()||uh()||bo()||lh()||Io()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const d=new py({jr:y=>{h?v("Connection","Not sending because WebChannel is closed:",y):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),g=(y,k,D)=>{y.listen(k,$=>{try{D($)}catch(Y){setTimeout(()=>{throw Y},0)}})};return g(u,Rs.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),g(u,Rs.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.eo())}),g(u,Rs.EventType.ERROR,y=>{h||(h=!0,Kc("Connection","WebChannel transport errored:",y),d.eo(new _(p.UNAVAILABLE,"The operation could not be completed")))}),g(u,Rs.EventType.MESSAGE,y=>{var k;if(!h){const D=y.data[0];O(!!D);const $=D,Y=$.error||((k=$[0])===null||k===void 0?void 0:k.error);if(Y){v("Connection","WebChannel received error:",Y);const ge=Y.status;let Ce=function(Pt){const Lt=U[Pt];if(Lt!==void 0)return Eu(Lt)}(ge),Mt=Y.message;Ce===void 0&&(Ce=p.INTERNAL,Mt="Unknown error status: "+ge+" with message "+Y.message),h=!0,d.eo(new _(Ce,Mt)),u.close()}else v("Connection","WebChannel received:",D),d.no(D)}}),g(o,bg.STAT_EVENT,y=>{y.stat===jc.PROXY?v("Connection","Detected buffering proxy"):y.stat===jc.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function zr(){return typeof document!="undefined"?document:null}/**
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
 */function Ws(t){return new bm(t,!0)}class ju{constructor(e,n,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class qu{constructor(e,n,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ju(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Ie(n.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{e(()=>{const i=new _(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class my extends qu{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Am(this.wt,e),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?Se(r.readTime):S.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Br(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=Nr(a)?{documents:Nm(i,a)}:{query:Rm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ru(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Gs(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=Mm(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=Br(this.wt),n.removeTarget=e,this.Oo(n)}}class yy extends qu{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(O(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Dm(e.writeResults,e.commitTime),s=Se(e.commitTime);return this.listener.Jo(s,n)}return O(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Br(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>km(this.wt,s))};this.Oo(n)}}/**
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
 */class vy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}ao(e,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(p.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class wy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ie(n),this.su=!1):v("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class _y{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{rt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.lu.add(4),await Pn(c),c._u.set("Unknown"),c.lu.delete(4),await Qs(c)}(this))})}),this._u=new wy(s,i)}}async function Qs(t){if(rt(t))for(const e of t.fu)await e(!0)}async function Pn(t){for(const e of t.fu)await e(!1)}function Hu(t,e){const n=b(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Qr(n)?Wr(n):Dt(n).Co()&&Gr(n,e))}function Ku(t,e){const n=b(t),s=Dt(n);n.hu.delete(e),s.Co()&&zu(n,e),n.hu.size===0&&(s.Co()?s.ko():rt(n)&&n._u.set("Unknown"))}function Gr(t,e){t.wu.Nt(e.targetId),Dt(t).Qo(e)}function zu(t,e){t.wu.Nt(e),Dt(t).jo(e)}function Wr(t){t.wu=new Em({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Dt(t).start(),t._u.iu()}function Qr(t){return rt(t)&&!Dt(t).Do()&&t.hu.size>0}function rt(t){return b(t).lu.size===0}function Gu(t){t.wu=void 0}async function Ey(t){t.hu.forEach((e,n)=>{Gr(t,e)})}async function Iy(t,e){Gu(t),Qr(t)?(t._u.uu(e),Wr(t)):t._u.set("Unknown")}async function Ty(t,e,n){if(t._u.set("Online"),e instanceof Au&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xs(t,s)}else if(e instanceof zs?t.wu.Ut(e):e instanceof Cu?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(S.min()))try{const s=await Fu(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(c);u&&i.hu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(Q.EMPTY_BYTE_STRING,c.snapshotVersion)),zu(i,a);const u=new it(c.target,a,1,c.sequenceNumber);Gr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Xs(t,s)}}async function Xs(t,e,n){if(!En(e))throw e;t.lu.add(1),await Pn(t),t._u.set("Offline"),n||(n=()=>Fu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Qs(t)})}function Wu(t,e){return e().catch(n=>Xs(t,n,e))}async function Ys(t){const e=b(t),n=Fe(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;by(e);)try{const i=await cy(e.localStore,s);if(i===null){e.au.length===0&&n.ko();break}s=i.batchId,Sy(e,i)}catch(i){await Xs(e,i)}Qu(e)&&Xu(e)}function by(t){return rt(t)&&t.au.length<10}function Sy(t,e){t.au.push(e);const n=Fe(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Qu(t){return rt(t)&&!Fe(t).Do()&&t.au.length>0}function Xu(t){Fe(t).start()}async function Cy(t){Fe(t).Xo()}async function Ay(t){const e=Fe(t);for(const n of t.au)e.Ho(n.mutations)}async function ky(t,e,n){const s=t.au.shift(),i=$r.from(s,e,n);await Wu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ys(t)}async function Dy(t,e){e&&Fe(t).zo&&await async function(n,s){if(i=s.code,mm(i)&&i!==p.ABORTED){const r=n.au.shift();Fe(n).No(),await Wu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ys(n)}var i}(t,e),Qu(t)&&Xu(t)}async function Yu(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=rt(n);n.lu.add(3),await Pn(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Qs(n)}async function Ny(t,e){const n=b(t);e?(n.lu.delete(2),await Qs(n)):e||(n.lu.add(2),await Pn(n),n._u.set("Unknown"))}function Dt(t){return t.mu||(t.mu=function(e,n,s){const i=b(e);return i.tu(),new my(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:Ey.bind(null,t),Jr:Iy.bind(null,t),Go:Ty.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Qr(t)?Wr(t):t._u.set("Unknown")):(await t.mu.stop(),Gu(t))})),t.mu}function Fe(t){return t.gu||(t.gu=function(e,n,s){const i=b(e);return i.tu(),new yy(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:Cy.bind(null,t),Jr:Dy.bind(null,t),Yo:Ay.bind(null,t),Jo:ky.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ys(t)):(await t.gu.stop(),t.au.length>0&&(v("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class Xr{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Xr(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yr(t,e){if(Ie("AsyncQueue",`${e}: ${t}`),En(t))return new _(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Nt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Rn(),this.sortedSet=new V(this.comparator)}static emptySet(e){return new Nt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Nt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ju{constructor(){this.yu=new V(w.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):T():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rt{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Rt(e,n,Nt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Ry{constructor(){this.Iu=void 0,this.listeners=[]}}class Oy{constructor(){this.queries=new St(e=>au(e),Vs),this.onlineState="Unknown",this.Tu=new Set}}async function My(t,e){const n=b(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ry),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Yr(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Jr(n)}async function Py(t,e){const n=b(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ly(t,e){const n=b(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Jr(n)}function xy(t,e,n){const s=b(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Jr(t){t.Tu.forEach(e=>{e.next()})}class Uy{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Rt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Rt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class Zu{constructor(e){this.key=e}}class el{constructor(e){this.key=e}}class Fy{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=C(),this.mutatedKeys=C(),this.Lu=cu(e),this.Uu=new Nt(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Ju,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),g=Pr(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?y!==k&&(s.track({type:3,doc:g}),D=!0):this.Qu(d,g)||(s.track({type:2,doc:g}),D=!0,(c&&this.Lu(g,c)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),D=!0):d&&!g&&(s.track({type:1,doc:d}),D=!0,(c||u)&&(a=!0)),D&&(g?(o=o.add(g),r=k?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:r}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((u,l)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return g(h)-g(d)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new Rt(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Ju,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=C(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new el(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new Zu(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=C();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Rt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Vy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class By{constructor(e){this.key=e,this.Xu=!1}}class $y{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new St(a=>au(a),Vs),this.ec=new Map,this.nc=new Set,this.sc=new V(w.comparator),this.ic=new Map,this.rc=new jr,this.oc={},this.uc=new Map,this.cc=kt.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function jy(t,e){const n=Jy(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await uy(n.localStore,Te(e));n.isPrimaryClient&&Hu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await qy(n,e,s,a==="current")}return i}async function qy(t,e,n,s){t.hc=(l,h,d)=>async function(g,y,k,D){let $=y.view.Ku(k);$.Mi&&($=await Vu(g.localStore,y.query,!1).then(({documents:Ce})=>y.view.Ku(Ce,$)));const Y=D&&D.targetChanges.get(y.targetId),ge=y.view.applyChanges($,g.isPrimaryClient,Y);return ol(g,y.targetId,ge.zu),ge.snapshot}(t,l,h,d);const i=await Vu(t.localStore,e,!0),r=new Fy(e,i.ji),o=r.Ku(i.documents),a=Mn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);ol(t,n,c.zu);const u=new Vy(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Hy(t,e){const n=b(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!Vs(r,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Kr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ku(n.remoteStore,s.targetId),Zr(n,s.targetId)}).catch(_n)):(Zr(n,s.targetId),await Kr(n.localStore,s.targetId,!0))}async function Ky(t,e,n){const s=Zy(t);try{const i=await function(r,o){const a=b(r),c=F.now(),u=o.reduce((d,g)=>d.add(g.key),C());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=be(),y=C();return a.Ui.getEntries(d,u).next(k=>{g=k,g.forEach((D,$)=>{$.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(k=>{l=k;const D=[];for(const $ of o){const Y=fm($,l.get($.key).overlayedDocument);Y!=null&&D.push(new nt($.key,Y,tu(Y.value.mapValue),pe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,D,o)}).next(k=>{h=k;const D=k.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,k.batchId,D)})}).then(()=>({batchId:h.batchId,changes:Tu(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new V(R)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ln(s,i.changes),await Ys(s.remoteStore)}catch(i){const r=Yr(i,"Failed to persist write");n.reject(r)}}async function tl(t,e){const n=b(t);try{const s=await oy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?O(o.Xu):i.removedDocuments.size>0&&(O(o.Xu),o.Xu=!1))}),await Ln(n,s,e)}catch(s){await _n(s)}}function nl(t,e,n){const s=b(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Jr(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zy(t,e,n){const s=b(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new V(w.comparator);o=o.insert(r,X.newNoDocument(r,S.min()));const a=C().add(r),c=new Ks(S.min(),new Map,new B(R),o,a);await tl(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),eo(s)}else await Kr(s.localStore,e,!1).then(()=>Zr(s,e,n)).catch(_n)}async function Gy(t,e){const n=b(t),s=e.batch.batchId;try{const i=await ry(n.localStore,e);il(n,s,null),sl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ln(n,i)}catch(i){await _n(i)}}async function Wy(t,e,n){const s=b(t);try{const i=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(O(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);il(s,e,n),sl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ln(s,i)}catch(i){await _n(i)}}function sl(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function il(t,e,n){const s=b(t);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}function Zr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||rl(t,s)})}function rl(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Ku(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),eo(t))}function ol(t,e,n){for(const s of n)s instanceof Zu?(t.rc.addReference(s.key,e),Qy(t,s)):s instanceof el?(v("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||rl(t,s.key)):T()}function Qy(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(v("SyncEngine","New document in limbo: "+n),t.nc.add(s),eo(t))}function eo(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new w(P.fromString(e)),s=t.cc.next();t.ic.set(s,new By(n)),t.sc=t.sc.insert(n,s),Hu(t.remoteStore,new it(Te(Rr(n.path)),s,2,br.ot))}}async function Ln(t,e,n){const s=b(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=Hr.Vi(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!En(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.$i.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,y)}}}(s.localStore,r))}async function Xy(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await Uu(n.localStore,e);n.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new _(p.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ln(n,s.Ki)}}function Yy(t,e){const n=b(t),s=n.ic.get(e);if(s&&s.Xu)return C().add(s.key);{let i=C();const r=n.ec.get(e);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function Jy(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zy.bind(null,e),e.Zu.Go=Ly.bind(null,e.eventManager),e.Zu.lc=xy.bind(null,e.eventManager),e}function Zy(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wy.bind(null,e),e}class ev{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ws(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return iy(this.persistence,new ny,e.initialUser,this.wt)}_c(e){return new ey(qr.Os,this.wt)}dc(e){return new hy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xy.bind(null,this.syncEngine),await Ny(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Oy}createDatastore(e){const n=Ws(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new gy(i));var i;return function(r,o,a,c){return new vy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>nl(this.syncEngine,a,0),o=$u.V()?new $u:new dy,new _y(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new $y(s,i,r,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=b(e);v("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Pn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class nv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Ie("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=se.UNAUTHENTICATED,this.clientId=zc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function iv(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Uu(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function rv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ov(t);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Yu(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Yu(e.remoteStore,r)),t.onlineComponents=e}async function ov(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await iv(t,new ev)),t.offlineComponents}async function al(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await rv(t,new tv)),t.onlineComponents}function av(t){return al(t).then(e=>e.syncEngine)}async function cl(t){const e=await al(t),n=e.eventManager;return n.onListen=jy.bind(null,e.syncEngine),n.onUnlisten=Hy.bind(null,e.syncEngine),n}const ul=new Map;/**
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
 */function ll(t,e,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cv(t,e,n,s){if(e===!0&&s===!0)throw new _(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hl(t){if(!w.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dl(t){if(w.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function to(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":T()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=to(t);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class fl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,cv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class no{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fl({}),this._settingsFrozen=!1,e instanceof It?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new It(i.options.projectId)}(e))}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kg;switch(n.type){case"gapi":const s=n.client;return O(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Rg(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ul.get(e);n&&(v("ComponentProvider","Removing Datastore"),ul.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ce{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}}class Js{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Js(this.firestore,e,this._query)}}class Ve extends Js{constructor(e,n,s){super(e,n,Rr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new w(e))}withConverter(e){return new Ve(this.firestore,e,this._path)}}function dw(t,e,...n){if(t=re(t),ll("collection","path",e),t instanceof no){const s=P.fromString(e,...n);return dl(s),new Ve(t,null,s)}{if(!(t instanceof ce||t instanceof Ve))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return dl(s),new Ve(t.firestore,null,s)}}function uv(t,e,...n){if(t=re(t),arguments.length===1&&(e=zc.I()),ll("doc","path",e),t instanceof no){const s=P.fromString(e,...n);return hl(s),new ce(t,null,new w(s))}{if(!(t instanceof ce||t instanceof Ve))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return hl(s),new ce(t.firestore,t instanceof Ve?t.converter:null,new w(s))}}/**
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
 */class lv{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ju(this,"async_queue_retry"),this.Kc=()=>{const n=zr();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=zr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=zr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new et;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!En(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ie("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Xr.createAndSchedule(this,e,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&T()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function pl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Un extends no{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new lv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ml(this),this._firestoreClient.terminate()}}function fw(t=Mo()){return yi(t,"firestore").getImmediate()}function gl(t){return t._firestoreClient||ml(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ml(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new jg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class so{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(Q.fromBase64String(e))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yl{constructor(e){this._methodName=e}}/**
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
 */class io{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
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
 */const hv=/^__.*__$/;class dv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new nt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Nn(e,this.data,n,this.fieldTransforms)}}function vl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ro{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new ro(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.sa(e),i}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Zs(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(vl(this.Zc)&&hv.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class fv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Ws(e)}aa(e,n,s,i=!1){return new ro({Zc:e,methodName:n,ca:s,path:Z.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function pv(t){const e=t._freezeSettings(),n=Ws(t._databaseId);return new fv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gv(t,e,n,s,i,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,i);Il("Data must be an object, but it was:",o,s);const a=_l(s,o);let c,u;if(r.merge)c=new de(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=mv(e,h,n);if(!o.contains(d))throw new _(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vv(l,d)||l.push(d)}c=new de(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new dv(new ae(a),c,u)}function wl(t,e){if(El(t=re(t)))return Il("Unsupported field value:",e,t),_l(t,e);if(t instanceof yl)return function(n,s){if(!vl(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=wl(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return am(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=F.fromDate(n);return{timestampValue:Gs(s.wt,i)}}if(n instanceof F){const i=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gs(s.wt,i)}}if(n instanceof io)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ot)return{bytesValue:Ru(s.wt,n._byteString)};if(n instanceof ce){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${to(n)}`)}(t,e)}function _l(t,e){const n={};return Wc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_t(t,(s,i)=>{const r=wl(i,e.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function El(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof F||t instanceof io||t instanceof Ot||t instanceof ce||t instanceof yl)}function Il(t,e,n){if(!El(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=to(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function mv(t,e,n){if((e=re(e))instanceof so)return e._internalPath;if(typeof e=="string")return Tl(t,e);throw Zs("Field path arguments must be of type string or ",t,!1,void 0,n)}const yv=new RegExp("[~\\*/\\[\\]]");function Tl(t,e,n){if(e.search(yv)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new so(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zs(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(p.INVALID_ARGUMENT,a+t+c)}function vv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bl{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wv extends bl{data(){return super.data()}}function Sl(t,e){return typeof e=="string"?Tl(t,e):e instanceof so?e._internalPath:e._delegate._internalPath}/**
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
 */class Fn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cl extends bl{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Sl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ei extends Cl{data(e={}){return super.data(e)}}class _v{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ei(this._firestore,this._userDataWriter,s.key,s,new Fn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ei(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ei(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Ev(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ev(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
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
 */function Iv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Tv{convertValue(e,n="none"){switch(tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return x(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw T()}}convertObject(e,n){const s={};return _t(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new io(x(e.latitude),x(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(In(e));default:return null}}convertTimestamp(e){const n=Ue(e);return new F(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=P.fromString(e);O(xu(s));const i=new It(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||Ie(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function bv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Al extends Tv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,n)}}function pw(t){return kl(xn(t.firestore,Un),[new Lr(t._key,pe.none())])}function gw(t,e){const n=xn(t.firestore,Un),s=uv(t),i=bv(t.converter,e);return kl(n,[gv(pv(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,pe.exists(!1))]).then(()=>s)}function mw(t,...e){var n,s,i;t=re(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(pl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof ce)u=xn(t.firestore,Un),l=Rr(t._key.path),c={next:h=>{e[o]&&e[o](Sv(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xn(t,Js);u=xn(h.firestore,Un),l=h._query;const d=new Al(u);c={next:g=>{e[o]&&e[o](new _v(u,d,h,g))},error:e[o+1],complete:e[o+2]},Iv(t._query)}return function(h,d,g,y){const k=new nv(y),D=new Uy(d,k,g);return h.asyncQueue.enqueueAndForget(async()=>My(await cl(h),D)),()=>{k.Tc(),h.asyncQueue.enqueueAndForget(async()=>Py(await cl(h),D))}}(gl(u),l,a,c)}function kl(t,e){return function(n,s){const i=new et;return n.asyncQueue.enqueueAndForget(async()=>Ky(await av(n),s,i)),i.promise}(gl(t),e)}function Sv(t,e,n){const s=n.docs.get(e._key),i=new Al(t);return new Cl(t,i,e._key,s,new Fn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){vt=n})(jt),ct(new $e("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Un(i,new Dg(n.getProvider("auth-internal")),new Mg(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),ke(qc,"3.4.14",t),ke(qc,"3.4.14","esm2017")})();export{Ov as $,zv as A,xl as B,rw as C,kv as D,Nv as E,Rv as F,Dv as G,uw as H,ow as I,hw as J,Kl as K,ot as L,Uv as M,Hv as N,xt as O,gw as P,dw as Q,mw as R,iw as S,pw as T,fw as U,uv as V,Kv as W,Pv as X,Av as Y,Wv as Z,lw as _,Wl as a,Fv as a0,aw as a1,Bv as a2,cw as a3,Vv as b,$v as c,zl as d,Gl as e,Mv as f,Yl as g,qv as h,sw as i,tw as j,Lv as k,xv as l,nw as m,jv as n,nh as o,Zv as p,ew as q,Xv as r,Fl as s,ni as t,Jv as u,sh as v,Yv as w,th as x,Qv as y,Gv as z};
