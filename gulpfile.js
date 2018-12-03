var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss and children directories
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  // autres observations
})