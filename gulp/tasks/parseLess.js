export const parseLess = () => {
  return app.gulp.src(app.path.less.src, { soursemaps: true, "allowEmpty": true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError(
      {
        title: "LESS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.less(
      {
        outputStyle: 'expanded'
      }
    ))
    .pipe(app.gulp.dest(app.path.less.dest))
    .pipe(app.plugins.browsersync.stream())
}
