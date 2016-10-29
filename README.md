[![npm version](https://badge.fury.io/js/bootstrap-sass-directional.svg)](https://badge.fury.io/js/bootstrap-sass-directional)
[![Bower version](https://badge.fury.io/bo/bootstrap-sass-directional.svg)](https://badge.fury.io/bo/bootstrap-sass-directional)

`bootstrap-sass-directional` is a directionalized (right-to-left (rtl) or left-to-right (ltr)) Sass-powered version of [Bootstrap](https://github.com/twbs/bootstrap) 3, ready to drop right into your Sass powered applications.

It is simply made by introducing $dir variable (with 'rtl' as default or 'ltr' value) into code-generated asset files of [Bootstrap for Sass](https://github.com/twbs/bootstrap-sass).

Currently used version of `Bootstrap for Sass` or `Bootstrap` is **v3.3.7**.

## Installation

* [Bower](#a-bower).
* [npm / Node.js](#b-npm--nodejs).

### a. Bower

```console
$ bower install bootstrap-sass-directional
```

### b. npm / Node.js

```console
$ npm install bootstrap-sass-directional
```


## Configuration

See upstream project [Bootstrap for Sass](https://github.com/twbs/bootstrap-sass) for more information.
### Sass

By default all of Bootstrap is imported.

You can also import components explicitly. To start with a full list of modules copy
[`_bootstrap.scss`](assets/stylesheets/_bootstrap.scss) file into your assets as `_bootstrap-custom.scss`.
Then comment out components you do not want from `_bootstrap-custom`.
In the application Sass file, replace `@import 'bootstrap'` with:

```scss
@import 'bootstrap-custom';
```

### Sass: Number Precision

bootstrap-sass [requires](https://github.com/twbs/bootstrap-sass/issues/409) minimum [Sass number precision][sass-precision] of 8 (default is 5).

Precision can be set by `--precision NUMBER_OF_DIGITS` option of `sass` command, or `precision` option of node-sass.

### Sass: Autoprefixer

Bootstrap requires the use of [Autoprefixer][autoprefixer].
[Autoprefixer][autoprefixer] adds vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).

To match [upstream Bootstrap's level of browser compatibility](http://getbootstrap.com/getting-started/#support), set Autoprefixer's `browsers` option to:
```json
[
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 20",
  "Firefox >= 24",
  "Explorer >= 8",
  "iOS >= 6",
  "Opera >= 12",
  "Safari >= 6"
]
```

### JavaScript

[`assets/javascripts/bootstrap.js`](/assets/javascripts/bootstrap.js) contains all of Bootstrap's JavaScript,
concatenated in the [correct order](/assets/javascripts/bootstrap-sprockets.js).

You can also load individual modules, provided you also require any dependencies.
You can check dependencies in the [Bootstrap JS documentation][jsdocs].

```js
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/dropdown
```

### Fonts

The fonts are referenced as:

```scss
"#{$icon-font-path}#{$icon-font-name}.eot"
```

`$icon-font-path` defaults to `bootstrap/` if asset path helpers are used, and `../fonts/bootstrap/` otherwise.

## Usage

### Sass

Import Bootstrap into a Sass file (for example, `application.scss`) to get all of Bootstrap's styles, mixins and variables!

```scss
@import "bootstrap";
```

You can also include optional Bootstrap theme:

```scss
@import "bootstrap/theme";
```

The full list of Bootstrap variables can be found [here](http://getbootstrap.com/customize/#less-variables). You can override these by simply redefining the variable before the `@import` directive, e.g.:

```scss
$navbar-default-bg: #312312;
$light-orange: #ff8c00;
$navbar-default-color: $light-orange;

@import "bootstrap";
```

## Credits

Special thanks to both [bootstrap contributors](https://github.com/twbs/bootstrap/graphs/contributors) and [Bootstrap for Sass contributors](https://github.com/twbs/bootstrap-sass/graphs/contributors).

Also Thanks *Tyson Matanich* for his useful [Directional-SCSS](https://github.com/tysonmatanich/directional-scss) Sass functions and mixins.

[jsdocs]: http://getbootstrap.com/javascript/#transitions
[sass-precision]: http://sass-lang.com/documentation/Sass/Script/Value/Number.html#precision%3D-class_method
[autoprefixer]: https://github.com/postcss/autoprefixer
