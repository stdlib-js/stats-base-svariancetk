"use strict";var l=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var k=l(function(z,p){
var o=require('@stdlib/number-float64-base-to-float32/dist');function T(r,v,c,n){var f,e,i,a,t,u;if(t=r-v,r<=0||t<=0)return NaN;if(r===1||n===0)return 0;for(n<0?e=(1-r)*n:e=0,f=0,i=0,u=0;u<r;u++)a=c[e],f=o(f+o(a*a)),i=o(i+a),e+=n;return o(o(f-o(o(i/r)*i))/t)}p.exports=T
});var S=l(function(A,y){
var s=require('@stdlib/number-float64-base-to-float32/dist');function _(r,v,c,n,f){var e,i,a,t,u,q;if(u=r-v,r<=0||u<=0)return NaN;if(r===1||n===0)return 0;for(i=f,e=0,a=0,q=0;q<r;q++)t=c[i],e=s(e+s(t*t)),a=s(a+t),i+=n;return s(s(e-s(s(a/r)*a))/u)}y.exports=_
});var F=l(function(B,m){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=k(),O=S();E(j,"ndarray",O);m.exports=j
});var b=require("path").join,d=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=F(),x,R=d(b(__dirname,"./native.js"));g(R)?x=h:x=R;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
