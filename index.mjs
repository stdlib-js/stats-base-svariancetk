// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function s(e,r,s,n,d){var i,o,a,f,m,l;if(m=e-r,e<=0||m<=0)return NaN;if(1===e||0===n)return 0;for(o=d,i=0,a=0,l=0;l<e;l++)f=s[o],i=t(i+t(f*f)),a=t(a+f),o+=n;return t(t(i-t(t(a/e)*a))/m)}function n(e,t,n,d){return s(e,t,n,d,r(e,d))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
