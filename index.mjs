// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function s(s,o,i){var n,h,p,d,f,l,m,j,a,b,w;if(!r(s))throw new TypeError(e("1Vb2O,GW",s));if(!t(o))throw new TypeError(e("1Vb2H,G6",o));for(l=s.length,n=[],a=0;a<l;a++){if(d=s[a],!r(d))throw new TypeError(e("1VbBN,PN",a,d));for(m=d.length,h=[],b=0;b<m;b++){if(f=d[b],!r(f))throw new TypeError(e("1VbBN,PN",a,d));for(j=f.length,p=[],w=0;w<j;w++)p.push(o.call(i,f[w],[a,b,w],s));h.push(p)}n.push(h)}return n}export{s as default};
//# sourceMappingURL=index.mjs.map
