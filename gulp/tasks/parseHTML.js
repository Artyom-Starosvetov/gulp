export const parseHTML = () => {
  // метод gulp.src() копирует содержимое, указанное в пути
  return app.gulp.src(app.path.html.src, { "allowEmpty": true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    // Сбор шаблонов .html в единый файл страницы
    .pipe(app.plugins.fileInclude())
    // Фикс переменной для папки картинок
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    // Работа с картинками .svg -> .webp
    // .pipe(app.plugins.webpHtmlNosvg())
    // Управление версиями, добавление даты и времени к названиям, чтобы кэш браузера не мешал отображать изменения
    // .pipe(versionNumber({
    //   'value': '%DT%',
    //   'append': {
    //     'key': '_v',
    //     'cover': 0,
    //     'to': [
    //       'css',
    //       'js',
    //     ]
    //   },
    //   'output': {
    //     'file': 'gulp/version.json'
    //   }
    // }))
    .pipe(app.plugins.beautify.html({
      indent_size: 2,
      "preserve-newlines": true,
      "max-preserve-newlines": 2,
      "indent-inner-html": true,
      "brace-style": "expand",
      "indent-scripts": "separate",
      "inline": [],
      "content_unformatted": [],
    }))
    .pipe(app.gulp.dest(app.path.html.dest)) // метод gulp.dest() переносит содержимое
    .pipe(app.plugins.browsersync.stream())
}
