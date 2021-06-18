const {src, dest, series, watch} = require('gulp');
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
/*
gulp.task('message',  gulp.series(async function () {
    return console.log('Gulp is running...');
}));
*/
function message(){
    return console.log('Gulp is running...');
}
// Copy All HTML tofiles

function copyHtml(){
  return src('src/*.html', {sourcemaps: true}).pipe(dest('dist', {sourcemaps: '.'}));
}
/*
gulp.task('copyHtml', gulp.series(async function(){
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
}));
*/

function imageMin (){
    return src('src/images/*', {sourcemaps: true}).pipe(dest('dist/images'));
}
/*
gulp.task('imageMin', gulp.series( async function (){
  gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}));
*/
function minify(){
  return src('src/js/*.js', {sourcemaps: true}).pipe(uglify()).pipe(dest('dist/js'));
}
/*
gulp.task('minify', gulp.series(function(){
    gulp.src('src/js/*.js')
}));
*/

function scss (){
  return src('src/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(dest('dist/css'));
}
/*

gulp.task('sass', gulp.series(function(){
  gulp.src('src/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('dist/css'));
}));
*/

//gulp.task('default', gulp.series('message', 'copyHtml', 'imageMin', 'minify','sass'));

//default Gulp task

exports.default = series (
  copyHtml,
  imageMin,
  minify,
  scss
);
