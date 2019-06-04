let gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
purge = require('gulp-css-purge');

let livereload = require('gulp-livereload');

let cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(purge({
            trim: true,
            shorten: true,
            verbose: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(livereload());
});

gulp.task('js', function () {
    return gulp.src([
        'src/js/*.js'
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('app/js'))
        .pipe(livereload());
});

let mustache = require("gulp-mustache");

gulp.task('html', () => {
    return gulp.src("src/templates/*.html")
        .pipe(mustache({
            msg: "Hello Gulp!"
        }))
        .pipe(gulp.dest("app"))
        .pipe(livereload());
});

gulp.task('watch', ['css', 'js', 'html'], function () {
    livereload.listen()
    gulp.watch(['src/css/*.css', 'src/js/*.js', 'src/templates/*.html'], ['css', 'js', 'html']);
});

gulp.task('default', ['watch']);
