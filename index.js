// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).map3d=t()}(this,(function(){"use strict";var e=Math.floor;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=4294967295;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,a=i.toString,l=i.__defineGetter__,f=i.__defineSetter__,c=i.__lookupGetter__,p=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?u:function(e,t,r){var n,o,u,s;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(c.call(e,t)||p.call(e,t)?(n=e.__proto__,e.__proto__=i,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),u="get"in r,s="set"in r,o&&(u||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(e,t,r.get),s&&f&&f.call(e,t,r.set),e};var s=o;function y(e,t,r){s(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(e){return"boolean"==typeof e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(e){var t,r,n,o,u;if(null==e)return g.call(e);r=e[m],u=m,t=null!=(o=e)&&h.call(o,u);try{e[m]=void 0}catch(t){return g.call(e)}return n=g.call(e),t?e[m]=r:delete e[m],n}:function(e){return g.call(e)},_=Boolean.prototype.toString;var j=v();function S(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function E(e){return b(e)||S(e)}function T(){return new Function("return this;")()}y(E,"isPrimitive",b),y(E,"isObject",S);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,x="object"==typeof global?global:null;var B=function(e){if(arguments.length){if(!b(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(O)return O;if(A)return A;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;y(k,"REGEXP",C);var F=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function I(e){return null!==e&&"object"==typeof e}function G(e){var t,r,n,o;if(("Object"===(r=w(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return I(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(I,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!F(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(I));var L="function"==typeof r||"object"==typeof V||"function"==typeof P?function(e){return G(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?G(e).toLowerCase():t};function M(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,r,n){var o,u,i,a,l,f,c,p,s,y,b;if(!t(e))throw new TypeError(M("0ke2a",e));if("function"!==L(r))throw new TypeError(M("0ke2S",r));for(f=e.length,o=[],s=0;s<f;s++){if(!t(a=e[s]))throw new TypeError(M("invalid argument. First argument must be a three-dimensional nested array. Index: `%u`. Value: `%s`.",s,a));for(c=a.length,u=[],y=0;y<c;y++){if(!t(l=a[y]))throw new TypeError(M("invalid argument. First argument must be a three-dimensional nested array. Index: `%u`. Value: `%s`.",s,a));for(p=l.length,i=[],b=0;b<p;b++)i.push(r.call(n,l[b],s,y,b,e));u.push(i)}o.push(u)}return o}}));
//# sourceMappingURL=index.js.map
