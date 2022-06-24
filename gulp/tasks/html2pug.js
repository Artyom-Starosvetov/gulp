import html2pug from 'gulp-html2pug';

export const html2pugg = () => {
  return app.gulp.src(app.path.html.all)
    .pipe(html2pug({ fragment: false }))
    .pipe(app.gulp.dest(app.path.pug.dir))
};
