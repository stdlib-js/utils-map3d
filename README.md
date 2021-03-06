<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# map3d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function to each nested element in a three-dimensional nested array and assign the result to a nested element in a new three-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-map3d
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var map3d = require( '@stdlib/utils-map3d' );
```

#### map3d( arr, fcn\[, thisArg] )

Applies a function to each nested element in a three-dimensional nested array and assigns the result to a nested element in a new three-dimensional nested array.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var abs = require( '@stdlib/math-base-special-abs' );

var arr = [
    [ [ -1, -2, -3 ] ],
    [ [ -4, -5, -6 ] ]
];

var out = map3d( arr, naryFunction( abs, 1 ) );
// returns [ [ [ 1, 2, 3 ] ], [ [ 4, 5, 6 ] ] ]
```

The applied function is provided the following arguments:

-   **value**: array element.
-   **i**: index of the first dimension.
-   **j**: index of the second dimension.
-   **k**: index of the third dimension.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var abs = require( '@stdlib/math-base-special-abs' );

function fcn( v ) {
    this.count += 1;
    return abs( v );
}

var arr = [
    [ [ -1, -2, -3 ] ],
    [ [ -4, -5, -6 ] ]
];

var ctx = {
    'count': 0
};

var out = map3d( arr, fcn, ctx );
// returns [ [ [ 1, 2, 3 ] ], [ [ 4, 5, 6 ] ] ]

var cnt = ctx.count;
// returns 6
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var abs2 = require( '@stdlib/math-base-special-abs2' );
var map3d = require( '@stdlib/utils-map3d' );

function nestedFill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'float64', rand );
}

function fill() {
    return filledarrayBy( 10, 'generic', nestedFill );
}

// Create a three-dimensional nested array:
var x = filledarrayBy( 10, 'generic', fill );

// Create an explicit unary function:
var f = naryFunction( abs2, 1 );

// Compute the element-wise squared absolute value...
var y = map3d( x, f );

console.log( 'x:' );
console.log( x );

console.log( 'y:' );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map3d.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map3d

[test-image]: https://github.com/stdlib-js/utils-map3d/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-map3d/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map3d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map3d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map3d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map3d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map3d/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-map3d/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-map3d/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-map3d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map3d/main/LICENSE

</section>

<!-- /.links -->
