let gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
purge = require('gulp-css-purge');

let browserSync = require('browser-sync').create();
let reload = browserSync.reload;

let cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        port: 81
    });

    browserSync.reload();
});

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
        .pipe(gulp.dest('app/css'));
});

gulp.task('js', function () {
    return gulp.src([
        'src/js/*.js'
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('app/js'));
});

let mustache = require("gulp-mustache");

gulp.task('html', () => {
    return gulp.src("src/templates/*.html")
        .pipe(mustache({
            msg: "Hello Gulp!"
        }))
        .pipe(gulp.dest("app"));
});

gulp.task('watch', ['css', 'js', 'html'], function () {
    gulp.watch(['src/css/*.css', 'src/js/*.js', 'src/templates/*.html'], ['css', 'js', 'html']);
    gulp.watch(['app/css/*.css', 'app/js/*.js', 'app/*.html'], ['browser-sync']);
});

gulp.task('default', ['watch']);
