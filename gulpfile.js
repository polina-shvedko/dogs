let gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
purge = require('gulp-css-purge');

let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(purge({
            trim: true,
            shorten: true,
            verbose: true
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('minify-js', function () {
    return gulp.src([
        'src/js/*.js'
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['minify-css', 'minify-js'], function () {
    gulp.watch(['src/css/*.css', 'src/js/*.js'], ['minify-css', 'minify-js']);
});

gulp.task('default', ['watch']);
