"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var w=y(function(E,f){
var d=require('@stdlib/assert-is-array-like-object/dist'),c=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function b(e,r,o){var v,m,l,t,u,h,g,p,a,i,n;if(!d(e))throw new TypeError(s('1Vb2O',e));if(!c(r))throw new TypeError(s('1Vb2H',r));for(h=e.length,v=[],a=0;a<h;a++){if(t=e[a],!d(t))throw new TypeError(s('1VbBN',a,t));for(g=t.length,m=[],i=0;i<g;i++){if(u=t[i],!d(u))throw new TypeError(s('1VbBN',a,t));for(p=u.length,l=[],n=0;n<p;n++)l.push(r.call(o,u[n],[a,i,n],e));m.push(l)}v.push(m)}return v}f.exports=b
});var q=w();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
