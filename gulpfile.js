var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var paths = {
	src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',

	tmp: 'tmp',
    tmpIndex: 'tmp/index.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',

    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
};

gulp.task('html', function() {
    gulp.src(paths.srcHTML)
    .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(paths.srcCSS)
    .pipe(connect.reload())
});

gulp.task('js', function() {
    gulp.src(paths.srcJS)
    .pipe(babel({
      presets: ['es2015']  // babel config object
    }))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch(paths.srcJS, ['js']);
    gulp.watch(paths.srcCSS, ['css']);
    gulp.watch(paths.srcHTML, ['html']);
});
    
gulp.task('connect', function() {
    connect.server({
        port: '3000',
        root: '.',
        livereload: true
    })
});

gulp.task('default', ['html', 'js', 'css', 'connect', 'watch']);
    
