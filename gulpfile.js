const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');

const { src, series, parallel, dest, watch } = require("gulp");

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
 });
 
gulp.task('sass-watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('babel', () =>
    gulp.src('./src/js/form.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist/assets/js'))
);

gulp.task("sass:watch", () => watchSass(
  "./src/sass/*.scss"
)
  .pipe(sass())
  .pipe(gulp.dest("./dist/assets/css")));

function watchTask(){
  watch(['./src/sass/*.scss'],{interval : 1000} ,parallel(sass));
}

exports.default = series(
  parallel(sass),
 watchTask
)
