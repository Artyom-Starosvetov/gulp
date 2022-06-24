export const lesscomb = () => {
  return app.gulp.src(app.path.less.src, { soursemaps: true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError(
      {
        title: "LESSCOMB",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.csscomb({}))
    .pipe(app.gulp.dest(app.path.less.dir))
};
