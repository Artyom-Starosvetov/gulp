export const parseJS = () => {
  // метод gulp.src() копирует содержимое, указанное в пути
  return app.gulp.src(app.path.js.src, { "allowEmpty": true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.beautify.js({
      indent_size: 2
    }))
    .pipe(app.gulp.dest(app.path.js.dest)) // метод gulp.dest() переносит содержимое
    .pipe(app.plugins.browsersync.stream())
}
