/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );


// MAIN //

/**
* Computes the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @returns {number} variance
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var N = x.length;
*
* var v = svariancetk( N, 1, x, 1 );
* // returns ~4.3333
*/
function svariancetk( N, correction, x, stride ) {
	var S2;
	var ix;
	var S;
	var v;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return 0.0;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	S2 = 0.0;
	S = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		S2 = float64ToFloat32( S2 + float64ToFloat32( v*v ) );
		S = float64ToFloat32( S+v );
		ix += stride;
	}
	return float64ToFloat32( float64ToFloat32(S2 - float64ToFloat32(float64ToFloat32(S/N)*S)) / n ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = svariancetk;
