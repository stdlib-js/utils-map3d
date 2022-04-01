// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=e,s=r,a=t;var i=function(e,r,t){var i,m,o,u,d,l,h,f,g,p,j;if(!n(e))throw new TypeError(a("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(!s(r))throw new TypeError(a("invalid argument. Second argument must be a function. Value: `%s`.",r));for(l=e.length,i=[],g=0;g<l;g++){if(u=e[g],!n(u))throw new TypeError(a("invalid argument. First argument must be a three-dimensional nested array. Index: %u. Value: `%s`.",g,u));for(h=u.length,m=[],p=0;p<h;p++){if(d=u[p],!n(d))throw new TypeError(a("invalid argument. First argument must be a three-dimensional nested array. Index: %u. Value: `%s`.",g,u));for(f=d.length,o=[],j=0;j<f;j++)o.push(r.call(t,d[j],g,p,j,e));m.push(o)}i.push(m)}return i};export{i as default};
//# sourceMappingURL=index.mjs.map
