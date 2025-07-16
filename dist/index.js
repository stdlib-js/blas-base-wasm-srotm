"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=l(function(Q,w){
var P=require("path").resolve,V=require('@stdlib/fs-read-wasm/dist').sync,g=V(P(__dirname,"..","src","main.wasm"));w.exports=g
});var y=l(function(U,R){
var j=require('@stdlib/assert-is-wasm-memory/dist'),M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/wasm-module-wrapper/dist'),D=require('@stdlib/error-tools-fmtprodmsg/dist'),k=E();function v(e){if(!(this instanceof v))return new v(e);if(!j(e))throw new TypeError(D('29dH0',e));return _.call(this,k,e,{env:{memory:e}}),this}z(v,_);M(v.prototype,"main",function(r,s,i,a,t,n){return this._instance.exports.c_srotm(r,s,i,a,t,n),a});M(v.prototype,"ndarray",function(r,s,i,a,t,n,c,q){return this._instance.exports.c_srotm_ndarray(r,s,i,a,t,n,c,q),t});R.exports=v
});var W=l(function(Z,S){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/strided-base-stride2offset/dist'),b=require('@stdlib/strided-base-read-dataview/dist').ndarray,F=require('@stdlib/wasm-memory/dist'),G=require('@stdlib/wasm-base-arrays2ptrs/dist'),m=require('@stdlib/wasm-base-strided2object/dist'),f=y();function p(){return this instanceof p?(f.call(this,new F({initial:0})),this):new p}C(p,f);T(p.prototype,"main",function(r,s,i,a,t,n){return this.ndarray(r,s,i,x(r,i),a,t,x(r,t),n)});T(p.prototype,"ndarray",function(r,s,i,a,t,n,c,q){var d,u,o,h;return d=G(this,[m(r,s,i,a),m(r,t,n,c),m(5,q,1,0)]),u=d[0],o=d[1],h=d[2],f.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,o.ptr,o.stride,o.offset,h.ptr),u.copy&&b(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,s,i,a,!0),o.copy&&b(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,t,n,c,!0),t});S.exports=p
});var O=l(function($,B){
var H=W(),A=new H;A.initializeSync();B.exports=A
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=O(),J=y();I(L,"Module",J);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
