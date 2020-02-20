/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},o={},n={},r=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${h}`);class c{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],o=document.createTreeWalker(e.content,133,null,!1);let n=0,h=-1,c=0;const{strings:u,values:{length:f}}=t;for(;c<f;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)l(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=u[c],i=d.exec(e)[2],s=i.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const n=o.split(a);this.parts.push({type:"attribute",index:h,name:i,strings:n}),c+=n.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const s=t.parentNode,o=e.split(a),n=o.length-1;for(let e=0;e<n;e++){let i,n=o[e];if(""===n)i=p();else{const t=d.exec(n);null!==t&&l(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===o[n]?(s.insertBefore(p(),t),i.push(t)):t.data=o[n],c+=n}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&h!==n||(h++,e.insertBefore(p(),t)),n=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),c++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),c++}}else o.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const l=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},u=t=>-1!==t.index,p=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,r=0,h=0,a=o.nextNode();for(;r<s.length;)if(n=s[r],u(n)){for(;h<n.index;)h++,"TEMPLATE"===a.nodeName&&(e.push(a),o.currentNode=a.content),null===(a=o.nextNode())&&(o.currentNode=e.pop(),a=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++}else this.t.push(void 0),r++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=` ${r} `;class v{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const n=d.exec(t);e+=null===n?t+(i?m:h):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class g{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new y(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(w(t)||!b(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||w(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=p()),t.s(this.endNode=p())}insertAfterPart(t){t.s(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){for(;e(this.i);){const t=this.i;this.i=o,t(this)}const t=this.i;t!==o&&(w(t)?t!==this.value&&this.o(t):t instanceof v?this.h(t):t instanceof Node?this.l(t):b(t)?this.u(t):t===n?(this.value=n,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const i=new f(e,t.processor,this.options),s=i._clone();i.update(t.values),this.l(s),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const o of t)i=e[s],void 0===i&&(i=new x(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(o),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;e(this.i);){const t=this.i;this.i=o,t(this)}if(this.i===o)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=o}}class $ extends g{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends y{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class k{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;e(this.i);){const t=this.i;this.i=o,t(this)}if(this.i===o)return;const t=this.i,i=this.value,s=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),n=null!=t&&(null==i||s);s&&this.element.removeEventListener(this.eventName,this.p,this.m),n&&(this.m=A(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const D=new class{handleAttributeExpressions(t,e,i,s){const o=e[0];if("."===o){return new $(t,e.slice(1),i).parts}return"@"===o?[new k(t,e.slice(1),s.eventContext)]:"?"===o?[new S(t,e.slice(1),i)]:new g(t,e,i).parts}handleTextExpression(t){return new x(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function P(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(r);return i=e.keyString.get(s),void 0===i&&(i=new c(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const E=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(t,...e)=>new v(t,e,"html",D)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function j(t,e){const{element:{content:i},parts:s}=t,o=document.createTreeWalker(i,133,null,!1);let n=T(s),r=s[n],h=-1,a=0;const c=[];let l=null;for(;o.nextNode();){h++;const t=o.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&a++;void 0!==r&&r.index===h;)r.index=null!==l?-1:r.index-a,n=T(s,n),r=s[n]}c.forEach(t=>t.parentNode.removeChild(t))}const F=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},T=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(u(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const N=t=>e=>{const i=U(e.type,t);let s=E.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},E.set(i,s));let o=s.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(r);if(o=s.keyString.get(n),void 0===o){const i=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,t),o=new c(e,i),s.keyString.set(n,o)}return s.stringsArray.set(e.strings,o),o},L=["html","svg"],I=new Set,V=(t,e,i)=>{I.add(t);const s=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{L.forEach(e=>{const i=E.get(U(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),j(t,i)})})})(t);const h=s.content;i?function(t,e,i=null){const{element:{content:s},parts:o}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=T(o),h=0,a=-1;for(;n.nextNode();){for(a++,n.currentNode===i&&(h=F(e),i.parentNode.insertBefore(e,i));-1!==r&&o[r].index===a;){if(h>0){for(;-1!==r;)o[r].index+=h,r=T(o,r);return}r=T(o,r)}}}(i,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const a=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else if(i){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),j(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),R={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:B},G=Promise.resolve(!0);class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=R){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const s=this[t];this[i]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||q,o="function"==typeof s?s:s.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||q.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=R){const s=this.constructor,o=s._attributeNameForProperty(t,i);if(void 0!==o){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i._classProperties.get(s)||R;this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,o=s._classProperties.get(t)||R;s._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{t=i,e=s});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const H=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}});function W(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):H(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Y=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let s=0,o=e.length;s<o;s++){const o=e[s];Array.isArray(o)?t(o,i):i.push(o)}return i}(t);class Z extends J{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){Y(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}Z.finalized=!0,Z.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,n=M.has(e),r=z&&11===e.nodeType&&!!e.host,h=r&&!I.has(o),a=h?document.createDocumentFragment():e;if(((t,e,i)=>{let o=M.get(e);void 0===o&&(s(e,e.firstChild),M.set(e,o=new x(Object.assign({templateFactory:P},i))),o.appendInto(e)),o.setValue(t),o.commit()})(t,a,Object.assign({templateFactory:N(o)},i)),h){const t=M.get(a);M.delete(a);const i=t.value instanceof f?t.value.template:void 0;V(o,a,i),s(e,e.firstChild),e.appendChild(a),M.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var tt=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let et=class extends Z{constructor(){super(...arguments),this.url="https://cxstaging.getdirect.io/listings/search/",this.numberOfGuests=1,this.startDate=`${(new Date).getFullYear()}-${this.pad((new Date).getMonth()+1)}-${(new Date).getDate()}`,this.endDate=`${(new Date).getFullYear()}-${this.pad((new Date).getMonth()+1)}-${(new Date).getDate()+1}`,this.locations=[],this.selectedLocation="",this.bedrooms=1,this.buttonCss=""}render(){return O`
      <form action="${this.url}" @submit="${this.handleFormSubmit}">
        ${this.locations.length>0?O`
              <section>
                <label for="loc">Location</label>
                <select id="location" name="loc" slot="location" tabindex="1" @change="${this.handleLocationChange}">
                  <option value="">Select a Location</option>
                  ${this.locations.map(({value:t,name:e})=>O`
                        <option .value="${t}">${e}</option>
                      `)}
                </select>
              </section>
            `:""}
        <section>
          <label for="startDate">Check-In</label>
          <input id="startDate" name="check-in" required type="date" value="${this.startDate}" tabindex="2" @change="${this.handleStartDateChanged}" />
        </section>
        <section>
          <label for="endDate">Check-Out</label>
          <input id="startDate" name="check-out" required type="date" value="${this.endDate}" tabindex="3" @change="${this.handleEndDateChanged}" />
        </section>
        <section>
          <label for="numberOfGuests">Guests</label>
          <select name="guests" id="numberOfGuests" @change="${this.handleGuestsChange}" tabindex="4">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
        </section>
        <section>
          <label for="beds">Beds</label>
          <select name="beds" id="beds" @change="${this.handleBedsChange}" tabindex="5">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
        </section>
        <section>
          <button type="submit" tabindex="6" .style="${this.buttonCss}">Search Listings</button>
        </section>
      </form>
    `}handleLocationChange(t){this.selectedLocation=t.currentTarget.value}handleGuestsChange(t){this.numberOfGuests=t.currentTarget.value}handleBedsChange(t){this.bedrooms=t.currentTarget.value}handleStartDateChanged(t){this.startDate=t.currentTarget.value}handleEndDateChanged(t){this.endDate=t.currentTarget.value}handleFormSubmit(t){t.preventDefault();const e=this.startDate.toString().split("-"),i=this.endDate.toString().split("-");let s=`${this.url}?guests=${this.numberOfGuests}&check-in=${e[2]}-${e[1]}-${e[0]}&check-out=${i[2]}-${i[1]}-${i[0]}`;this.selectedLocation&&(s=`${s}&loc=${this.selectedLocation}`),window.location.href=s}pad(t){return t<10?"0"+t:t}};var it;et.styles=((t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new X(i,Q)})`
    :host {
      display: flex;
      flex-direction: column;
      padding: 16px;
      margin: 16px;
      box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }

    label,
    select,
    input,
    section,
    button {
      font-size: 14px;
      font-family: sans-serif;
    }

    section {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 600;
      padding: 6px 0px 3px 0px;
      text-transform: uppercase;
      color: #9da8ad;
    }

    input,
    select,
    option {
      border: 1px solid #cdd3d5;
      border-radius: 6px;
      color: #1c2131;
      padding: 0.6em 1.4em 0.5em 0.8em;
    }

    select {
      display: block;

      line-height: 1.3;
      padding: 0.6em 1.4em 0.5em 0.8em;

      box-sizing: border-box;
      margin: 0;
      border: 1px solid #aaa;
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      border-radius: 0.5em;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      /* background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.65em auto, 100%;
    }

    section {
      margin-bottom: 10px;
    }

    button {
      border: 2px solid #666;
      padding: 12px 24px;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
    }

    [hidden] {
      display: none;
    }

    section button {
      margin-top: 15px;
    }
  `,tt([W({type:String,reflect:!0})],et.prototype,"url",void 0),tt([W({type:Number,reflect:!0})],et.prototype,"numberOfGuests",void 0),tt([W({type:String,reflect:!0})],et.prototype,"startDate",void 0),tt([W({type:String,reflect:!0})],et.prototype,"endDate",void 0),tt([W({type:Array})],et.prototype,"locations",void 0),tt([W({type:String,reflect:!0})],et.prototype,"selectedLocation",void 0),tt([W({type:Number,reflect:!0})],et.prototype,"bedrooms",void 0),tt([W({type:String,reflect:!0})],et.prototype,"buttonCss",void 0),et=tt([(it="direct-search",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(it,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(it,t))],et);export{et as DirectSearch};
