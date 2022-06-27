
export const parseSCSS = () => {
  return app.gulp.src(app.path.scss.src, { soursemaps: true, "allowEmpty": true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.gulp.dest(app.path.scss.dest))
    .pipe(app.plugins.browsersync.stream())
}
