// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function t(r,t,n,a){var i,s,o,f,d,u;if(d=r-t,r<=0||d<=0)return NaN;if(1===r||0===a)return 0;for(s=a<0?(1-r)*a:0,i=0,o=0,u=0;u<r;u++)f=n[s],i=e(i+e(f*f)),o=e(o+f),s+=a;return e(e(i-e(e(o/r)*o))/d)}function n(r,t,n,a,i){var s,o,f,d,u,l;if(u=r-t,r<=0||u<=0)return NaN;if(1===r||0===a)return 0;for(o=i,s=0,f=0,l=0;l<r;l++)d=n[o],s=e(s+e(d*d)),f=e(f+d),o+=a;return e(e(s-e(e(f/r)*f))/u)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
