var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: 'src'
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

// Compile SASS to CSS
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(autoprefixer({
                browsers: ['last 3 versions']
               }))
               .pipe(gulp.dest('src/css'))
               .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);