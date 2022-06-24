export const server = () => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.html.dest}`
    },
    notify: false,
    port: 3000,
  });
}
