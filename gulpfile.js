let gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    purge = require('gulp-css-purge'),
    server = require('gulp-webserver'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    mustache = require("gulp-mustache"),
    htmlValidator = require('gulp-w3c-html-validator');

gulp.task('server', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            open: true,
            port: 7005
        }));
});

gulp.task('validateHtml', function() {
    gulp.src('app/*.html')
        .pipe(htmlValidator())
        .pipe(htmlValidator.reporter());
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


gulp.task('html', () => {
    return gulp.src("src/templates/**/*.*")
        .pipe(mustache({
            msg: "Hello Gulp!"
        }))
        .pipe(gulp.dest("app"))
        .pipe(livereload());
});

gulp.task('watch', ['css', 'js', 'html'], function () {
    livereload.listen();
    gulp.watch(['src/css/*.css', 'src/js/*.js', 'src/templates/*.html'], ['css', 'js', 'html']);
});

gulp.task('validate-html', ['validateHtml']);

gulp.task('default', ['watch', 'server']);
