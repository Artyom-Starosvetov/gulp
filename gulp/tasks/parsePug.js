export const parsePug = () => {
  // Метод gulp.src() копирует содержимое, указанное в пути
  return app.gulp.src(app.path.pug.src, { "allowEmpty": true })
    // Вывод сообщений об ошибке в виндоус
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "PUG",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.pug({
      pretty: true,
      // Показывать обрабатываемые файлы в терминале
      verbose: true,
    }))
    // Метод gulp.dest() переносит содержимое
    .pipe(app.gulp.dest(app.path.pug.dest))
    // .pipe(app.plugins.htmlhint.failAfterError())
    .pipe(app.plugins.browsersync.stream())
}
