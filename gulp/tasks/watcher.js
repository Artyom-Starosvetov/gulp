// Наблюдатель за изменениями в файлах
export function watcher() {
  gulp.watch(path.watch.pug, app.tasks.pugTasks);
  gulp.watch(path.watch.html, app.tasks.parseHTML);
  gulp.watch(path.watch.less, app.tasks.lessTasks);
  gulp.watch(path.watch.scss, app.tasks.scssTasks);
  gulp.watch(path.watch.css, app.tasks.parseCSS);
  gulp.watch(path.watch.images, app.tasks.parseImages);
  gulp.watch(path.watch.js, app.tasks.parseJS);
}
