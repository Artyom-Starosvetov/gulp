export const groupMediaQuires = () => {
  return app.gulp.src(app.path.less.src)
    .pipe(app.plugins.plumber(app.plugins.notify.onError(
      {
        title: "groupMediaQuires",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.groupMediaQueries())
    .pipe(app.gulp.dest(app.path.less.dir))
};
