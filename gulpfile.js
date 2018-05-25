'use strict';

// Includes packages
var gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    cleanCss            = require('gulp-clean-css'),
    notify              = require('gulp-notify')


// Paths variables
var paths = {
    distCSS    : './dist',
    sass       : ['src/scss/**/*.scss']
};


// Compile SASS
gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['IE 8', 'IE 9', 'last 5 versions']}))
    //.pipe(cleanCss())
    .pipe(gulp.dest(paths.distCSS))
    .pipe(notify({ title: 'SASS', message: 'Compiled successfully!! Happy coding! 😎', onLast: true}));
});


// Rerun the task when a file changesa
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});



// Run default task
gulp.task('default', ['sass', 'watch']);