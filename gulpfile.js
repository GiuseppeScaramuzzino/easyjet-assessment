var gulp = require('gulp');
var bower = require("gulp-bower");
var clean = require('gulp-clean');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var path = require('path');
var jshint = require('gulp-jshint');

gulp.task('default', ['bower', 'less.style', 'less.html'], function () {

});

gulp.task('lint', function () {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', {
      verbose: true
    }));
});

gulp.task('bower', function () {
  return bower();
});

gulp.task('less.style', function () {
  return gulp.src('less/*.less')
    .pipe(watchLess('less/*.less'))
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('less.html', function () {
  return gulp.src('view/**/*.less')
    .pipe(watchLess('view/**/*.less'))
    .pipe(less())
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});

gulp.task('scripts', function () {
  gulp.src('dev/scripts/**/*.js')
    .pipe(stripDebug())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('html/scripts'));
});

gulp.task('images', function () {
  return gulp.src('dev/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('html/images'));
});

gulp.task('styles', function () {
  gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(size())
    .pipe(gulp.dest('css/styles.css'));
});