var gulp = require( 'gulp' );
var fontSpider = require( 'gulp-font-spider' );

gulp.task('font', function() {
  debugger
    // var s = gulp.src('./index.html');
    // return gulp.src('./index.html')
		// .pipe(fontSpider());
    var s = gulp.src('./index.html')
        .pipe(fontSpider());
});

gulp.task('default', ['font']);
