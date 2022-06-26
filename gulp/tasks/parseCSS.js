export const parseCSS = () => {
  return app.gulp.src(app.path.css.src, { soursemaps: false, "allowEmpty": true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError(
      {
        title: "CSS",
        message: "Error: <%= error.message %>"
      })
    ))
    // Фикс переменной для папки картинок
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(app.plugins.groupMediaQueries())
    .pipe(app.plugins.webpcss(
      {
        webpClass: ".webp",
        noWebpClass: ".no-webp"
      }
    ))
    .pipe(app.plugins.autoPrefixer(
      {
        grid: true,
        overrideBrowserslist: [">0.05%"],
        cascade: true
      }
    ))
    .pipe(app.plugins.vars())
    .pipe(app.plugins.beautify.css({
      indent_size: 2
    }))
    .pipe(app.plugins.csscomb())
    .pipe(app.gulp.dest(app.path.css.dest))
    .pipe(app.plugins.cleanCss())
    .pipe(app.plugins.rename(
      {
        extname: ".min.css"
      }
    ))
    .pipe(app.gulp.dest(app.path.css.dest))
    .pipe(app.plugins.browsersync.stream())
}
