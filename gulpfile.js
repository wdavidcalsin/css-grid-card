const gulp = require("gulp");
const sass = require("gulp-sass");
let browserSync = require("browser-sync").create();

function style() {
   return gulp
      .src("./dist/scss/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./dist/css"))
      .pipe(browserSync.stream());
}

function watch() {
   browserSync.init({
      server: {
         baseDir: "./",
      },
   });

   gulp.watch("./dist/scss/**/*.scss", style);
   gulp.watch("./**/*.html", style).on("change", browserSync.reload);
   gulp.watch("./js/**/*.js", style).on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
