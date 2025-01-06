"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=c(function(A,x){
var a=require('@stdlib/number-float64-base-to-float32/dist');function S(r,e,u,i,R){var v,s,t,n,o,q;if(o=r-e,r<=0||o<=0)return NaN;if(r===1||i===0)return 0;for(s=R,v=0,t=0,q=0;q<r;q++)n=u[s],v=a(v+a(n*n)),t=a(t+n),s+=i;return a(a(v-a(a(t/r)*t))/o)}x.exports=S
});var d=c(function(B,y){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=f();function F(r,e,u,i){return E(r,e,u,i,_(r,i))}y.exports=F
});var j=c(function(C,l){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),T=f();O(k,"ndarray",T);l.exports=k
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=j(),p,m=g(b(__dirname,"./native.js"));h(m)?p=w:p=m;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
