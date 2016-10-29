/*!
 * Created by MohsenEkhtiari.
 * Licensed under the MIT license
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

var scripts = [
  'assets/javascripts/bootstrap/transition.js',
  'assets/javascripts/bootstrap/alert.js',
  'assets/javascripts/bootstrap/button.js',
  'assets/javascripts/bootstrap/carousel.js',
  'assets/javascripts/bootstrap/collapse.js',
  'assets/javascripts/bootstrap/dropdown.js',
  'assets/javascripts/bootstrap/modal.js',
  'assets/javascripts/bootstrap/tooltip.js', // must be before popover
  'assets/javascripts/bootstrap/popover.js',
  'assets/javascripts/bootstrap/scrollspy.js',
  'assets/javascripts/bootstrap/tab.js',
  'assets/javascripts/bootstrap/affix.js'
];

var bootstrapPkg = {
  version: '3.3.7',
  homepage: 'http://getbootstrap.com',
  year: '2016',
  author: 'Twitter, Inc.',
  license: 'MIT'
};

var jqueryCheck =
  "if (typeof jQuery === 'undefined') {\n" +
  "  throw new Error('Bootstrap\\'s JavaScript requires jQuery')\n" +
  "}\n";

var jqueryVersionCheck =
  "+function ($) {\n" +
  "  'use strict';\n" +
  "  var version = $.fn.jquery.split(' ')[0].split('.')\n" +
  "  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {\n" +
  "    throw new Error('Bootstrap\\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')\n" +
  "  }\n" +
  "}(jQuery);\n";

gulp.task('js-concat', function() {
  gulp.src(scripts)
  .pipe(concat('bootstrap.js'))
  .pipe(header(
      '/*!\n' +
      ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2011-<%= pkg.year %> <%= pkg.author %>\n' +
      ' * Licensed under the <%= pkg.license %> license\n' +
      ' */\n\n' +
      '<%= jqueryCheck %>\n' +
      '<%= jqueryVersionCheck %>\n',
      {jqueryCheck: jqueryCheck, jqueryVersionCheck: jqueryVersionCheck, pkg: bootstrapPkg}
  ))
  .pipe(gulp.dest('./assets/javascripts/'))
});

gulp.task('js-minify', ['js-concat'], function() {
  gulp.src('assets/javascripts/bootstrap.js')
  .pipe(uglify({
    compress: {
      warnings: false
    },
    mangle: true,
    preserveComments: 'some',
  }))
  .pipe(rename('bootstrap.min.js'))
  .pipe(gulp.dest('./assets/javascripts/'));
});

gulp.task('js', ['js-minify']);

gulp.task('default', ['js']);