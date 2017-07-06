const gulp = require('gulp');
const sass = require('gulp-sass');
const beautify = require('gulp-jsbeautifier')

const pages = ['./page_windows', './page_balcony', "./page_storage"]
const sassFiles = '/sass/*.scss';
const cssFiles = '/css/*.css'

gulp.task('sass', function() {
    pages.forEach(page => {
        return gulp.src(page + sassFiles)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(page + '/css'));
    })
})

gulp.task('beautify', function() {
    pages.forEach(page => {
        return gulp.src(page + cssFiles)
            .pipe(beautify())
            .pipe(gulp.dest(page + '/css'));
    })
});

gulp.task('watcher', function() {
    pages.forEach(page => {
        gulp.watch(page + sassFiles, ['sass']);
        gulp.watch(page + cssFiles, ['beautify']);
    })
})
