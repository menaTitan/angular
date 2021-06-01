const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
/*
-- TOP LEVEL FUNCTION --
gulp.task  - Define tasks
gulp.src   - Point tofiles to use
gulp.dest  - points to folder to output
gulp.watch - Watch files and folder for changes

*/

// log message

gulp.task('message',  gulp.series(async function () {
    return console.log('Gulp is running...');
}));

function message(){
    return console.log('Gulp is running...');
}
// Copy All HTML tofiles

gulp.task('copyHtml', gulp.series(async function(){
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
}));

gulp.task('imageMin', gulp.series( async function (){
  gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}));

gulp.task('minify', gulp.series(function(){
    gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
}));

gulp.task('sass', gulp.series(function(){
  gulp.src('src/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('dist/css'));
}));


gulp.task('default', gulp.series('message', 'copyHtml', 'imageMin', 'minify','sass'));
