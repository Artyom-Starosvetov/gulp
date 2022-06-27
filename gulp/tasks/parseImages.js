// import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const parseImages = () => {
  return app.gulp.src(app.path.images.src, { "allowEmpty": true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.newer(app.path.images.dest))
    // .pipe(webp())
    .pipe(app.gulp.dest(app.path.images.dest))
    .pipe(app.gulp.src(app.path.images.src))
    .pipe(imagemin({
      interlaced: true,
      quality: 70,
      progressive: true,
      optimizationLevel: 3,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false }
      ]
    }))
    .pipe(app.gulp.dest(app.path.images.dest))
    .pipe(app.plugins.browsersync.stream());
}
