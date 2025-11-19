"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var M=d(function(Q,E){
var L=require("path").resolve,P=require('@stdlib/fs-read-wasm/dist').sync,V=P(L(__dirname,"..","src","main.wasm"));E.exports=V
});var y=d(function(U,b){
var g=require('@stdlib/assert-is-wasm-memory/dist'),_=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),R=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=M();function v(e){if(!(this instanceof v))return new v(e);if(!g(e))throw new TypeError(z('29dH0',e));return R.call(this,D,e,{env:{memory:e}}),this}j(v,R);_(v.prototype,"main",function(r,s,i,a,t,n){return this._instance.exports.c_srotm(r,s,i,a,t,n),a});_(v.prototype,"ndarray",function(r,s,i,a,t,n,c,q){return this._instance.exports.c_srotm_ndarray(r,s,i,a,t,n,c,q),t});b.exports=v
});var A=d(function(Z,W){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/strided-base-stride2offset/dist'),T=require('@stdlib/strided-base-read-dataview/dist').ndarray,C=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),m=require('@stdlib/wasm-base-strided2object/dist'),f=y();function p(){return this instanceof p?(f.call(this,new C({initial:0})),this):new p}k(p,f);S(p.prototype,"main",function(r,s,i,a,t,n){return this.ndarray(r,s,i,x(r,i),a,t,x(r,t),n)});S(p.prototype,"ndarray",function(r,s,i,a,t,n,c,q){var l,u,o,w;return l=F(this,[m(r,s,i,a),m(r,t,n,c),m(5,q,1,0)]),u=l[0],o=l[1],w=l[2],f.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,o.ptr,o.stride,o.offset,w.ptr),u.copy&&T(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,s,i,a,!0),o.copy&&T(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,t,n,c,!0),t});W.exports=p
});var O=d(function($,B){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),H=A(),I=y(),h=new H;h.initializeSync();G(h,"Module",I.bind(null));B.exports=h
});var J=O();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
