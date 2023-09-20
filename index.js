// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).map3d=e()}(this,(function(){"use strict";var t=Math.floor;function e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(r=e.length,t(r)===r)&&e.length>=0&&e.length<=4294967295;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,f=i.toString,l=i.__defineGetter__,c=i.__defineSetter__,a=i.__lookupGetter__,p=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,u,y;if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(t,e)||p.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,y="set"in r,o&&(u||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(t,e,r.get),y&&c&&c.call(t,e,r.set),t};var y=o;function s(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=d()?function(t){var e,r,n,o,u;if(null==t)return h.call(t);r=t[w],u=w,e=null!=(o=t)&&g.call(o,u);try{t[w]=void 0}catch(e){return h.call(t)}return n=h.call(t),e?t[w]=r:delete t[w],n}:function(t){return h.call(t)},_=Boolean.prototype.toString;var j=d();function E(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function S(t){return b(t)||E(t)}function T(){return new Function("return this;")()}s(S,"isPrimitive",b),s(S,"isObject",E);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,B="object"==typeof global?global:null;var P=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(O)return O;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),V=P.document&&P.document.childNodes,x=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;s(G,"REGEXP",N);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function k(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=N.exec(n.toString()))return e[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!C(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(k));var M="function"==typeof r||"object"==typeof x||"function"==typeof V?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};function F(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,r,n){var o,u,i,f,l,c,a,p,y,s,b;if(!e(t))throw new TypeError(F("1Vb2O,GW",t));if("function"!==M(r))throw new TypeError(F("1Vb2H,G6",r));for(c=t.length,o=[],y=0;y<c;y++){if(!e(f=t[y]))throw new TypeError(F("1VbBN,PN",y,f));for(a=f.length,u=[],s=0;s<a;s++){if(!e(l=f[s]))throw new TypeError(F("1VbBN,PN",y,f));for(p=l.length,i=[],b=0;b<p;b++)i.push(r.call(n,l[b],[y,s,b],t));u.push(i)}o.push(u)}return o}}));
//# sourceMappingURL=index.js.map
