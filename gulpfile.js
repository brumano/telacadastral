var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var del = require('del');
var removeHtmlComments = require('gulp-remove-html-comments');
var preprocess = require('gulp-preprocess');
var concat = require('gulp-concat');

gulp.task('default', ['developer']);


var bowerOverridesJS = [
    "./bower_components/angular-i18n/angular-locale_pt-br.js"
];

//Developer
gulp.task('developer', ['bower-files', 'developer-sass', 'copy-js', 'includeBowerOverridesJS', 'copy-glyphicons', 'copy-fonts', 'copy-html', 'copy-images', 'copy-shared-html'], function() {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src('dist/**/*.css', { read: false }), { relative: true, ignorePath: '../dist/' }))
        .pipe(inject(gulp.src(['dist/scripts/angular.js', 'dist/scripts/jquery.js', 'dist/scripts/**/*.js'], { read: false }), { relative: true, ignorePath: '../dist/' }))
        .pipe(inject(gulp.src(["!dist/scripts/**/*.js", 'dist/**/*.js'], { read: false }), { relative: true, name: 'app', ignorePath: '../dist/' }))
        .pipe(removeHtmlComments())
        .pipe(gulp.dest('./dist'));
});


gulp.task('developer-sass', ['clean-dist'], function() {

    var files = bowerFiles('**/*.css');
    files.push('./src/**/*.scss');
    files.push('!./src/assets/styles/_core/*');

    return gulp.src(files)
        .pipe(sass())
        .pipe(preprocess({ context: { PATH: '../../' } }))
        .pipe(gulp.dest('./dist'));
});




gulp.task('includeBowerOverridesJS', ['clean-dist'], function() {
    return gulp.src(bowerOverridesJS)
        .pipe(gulp.dest('./dist/services'));
});

gulp.task('copy-js', ['clean-dist'], function() {
    return gulp.src(['src/**/*.js'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('bower-files', ['clean-dist'], function() {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('copy-glyphicons', ['clean-dist'], function() {
    return gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*.{eot,svg,woff,woff2,ttf}')
        .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('copy-fonts', ['clean-dist'], function() {
    return gulp.src('./src/assets/fonts/**/*')
        .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('copy-html', ['clean-dist'], function() {
    return gulp.src(['./src/apps/**/*'])
        .pipe(gulp.dest('./dist/apps'));
});

gulp.task('copy-shared-html', ['clean-dist'], function() {
    return gulp.src('./src/shared/**/*.html')
        .pipe(gulp.dest('./dist/shared'));
});

gulp.task('copy-images', ['clean-dist'], function() {
    return gulp.src('./src/assets/images/**/*.{png,gif,jpg,html,svg}')
        .pipe(gulp.dest('./dist/assets/images'));
});


gulp.task('clean-dist', function() {
    return del([
        'dist/**/*'
    ]);
});

