const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./scss/'));
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});