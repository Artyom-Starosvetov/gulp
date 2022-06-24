export const copyLibs = () => {
  // метод gulp.src() копирует содержимое, указанное в пути
  return app.gulp.src(app.path.libs.src)
    // метод gulp.dest() переносит содержимое
    .pipe(app.gulp.dest(app.path.libs.dest))
}
