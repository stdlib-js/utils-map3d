"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=y(function(E,p){
var l=require('@stdlib/assert-is-array-like-object/dist'),c=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function b(e,r,w){var o,v,m,t,u,d,h,g,a,i,n;if(!l(e))throw new TypeError(s('1Vb2O',e));if(!c(r))throw new TypeError(s('1Vb2H',r));for(d=e.length,o=[],a=0;a<d;a++){if(t=e[a],!l(t))throw new TypeError(s('1VbBN',a,t));for(h=t.length,v=[],i=0;i<h;i++){if(u=t[i],!l(u))throw new TypeError(s('1VbBN',a,t));for(g=u.length,m=[],n=0;n<g;n++)m.push(r.call(w,u[n],[a,i,n],e));v.push(m)}o.push(v)}return o}p.exports=b
});var q=f();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
