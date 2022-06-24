export const less_back = () => {
  return app.gulp.src('src/less/style.less')
    .pipe(app.plugins.plumber(app.plugins.notify.onError(
      {
        title: "less_back",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.gulp.dest('src/less/bak/style.less'))
};
