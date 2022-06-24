import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const copyHTML = () => {
  // Метод gulp.src() копирует содержимое, указанное в пути
  return app.gulp.src(app.path.src.html)
    // Вывод сообщений об ошибке в виндоус
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    // Сбор шаблонов .html в единый файл страницы
    .pipe(fileInclude())
    // Фикс переменной для папки картинок
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    // Работа с картинками .svg -> .webp
    .pipe(webpHtmlNosvg())
    // Управление версиями, добавление даты и времени к названиям, чтобы кэш браузера не мешал отображать изменения
    .pipe(
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp/version.json'
        }
      })
    )
    // Метод gulp.dest() переносит содержимое
    .pipe(app.gulp.dest(app.path.build.html))
}
