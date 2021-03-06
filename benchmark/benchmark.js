/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var isArrayArray = require( '@stdlib/assert-is-array-array' );
var abs = require( '@stdlib/math-base-special-abs' );
var naryFunction = require( '@stdlib/utils-nary-function' );
var pkg = require( './../package.json' ).name;
var map3d = require( './../lib' );


// MAIN //

bench( pkg+':size=10000', function benchmark( b ) {
	var clbk;
	var out;
	var arr;
	var t1;
	var t2;
	var i;
	var j;
	var k;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		t1 = [];
		for ( j = 0; j < 10; j++ ) {
			t2 = [];
			for ( k = 0; k < 100; k++ ) {
				t2.push( -k );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}
	clbk = naryFunction( abs, 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = map3d( arr, clbk );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( out ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
