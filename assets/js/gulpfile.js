var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src('/assets/js/emp-create.js')
    .pipe(uglify())
    .pipe(gulp.dest('/assets/js/emp-ind'));
    
});