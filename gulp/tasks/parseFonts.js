import fs from 'fs'; // встроенный модуль Node для работы с файловой системой
import fonter from 'gulp-fonter'; // ttf и woff
import ttf2woff2 from 'gulp-ttf2woff2'; // из ttf в woff2

export const otf2ttf = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, { "allowEmpty": true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      })
    ))
    // конвертируем в .ttf
    .pipe(fonter({
      formats: ['ttf']
    }))
    // выгружаем в исходную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
}

export const ttf2woff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      })
    ))
    // конвертируем в .ttf
    .pipe(fonter({
      formats: ['woff']
    }))
    // выгружаем в исходную папку
    .pipe(app.gulp.dest(app.path.fonts.dest))
    // ищем шрифты .ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    // преобразуем в woff2
    .pipe(ttf2woff2())
    // выгружаем в папку с результатом
    .pipe(app.gulp.dest(app.path.fonts.dest));
}

export const fontStyle = () => {
  // файл стилей подключения шрифтов
  let fontsSCSSFile = `${app.path.srcFolder}/scss/_tech/_fonts.scss`;
  let fontsLessFile = `${app.path.srcFolder}/less/)/_tech/_fonts.less`;
  // проверяем существуют ли файлы шрифтов
  fs.readdir(app.path.fonts.dest, function (err, fontsFiles) {
    if (fontsFiles) {
      // проверяем существует ли файл стилей для подключения шрифтов
      if (!fs.existsSync(fontsSCSSFile) || !fs.existsSync(fontsLessFile)) {
        // если файла нет, создаем его
        fs.writeFile(fontsSCSSFile, '', cb);
        fs.writeFile(fontsLessFile, '', cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          // записываем подключения шрифтов в файл стилей
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            let fw = fontWeight.toLowerCase();
            if (fw === 'thin') {
              fontWeight = 100;
            }
            else if (fw === 'extralight') {
              fontWeight = 200;
            }
            else if (fw === 'light') {
              fontWeight = 300;
            }
            else if (fw === 'medium') {
              fontWeight = 500;
            }
            else if (fw === 'semibold') {
              fontWeight = 600;
            }
            else if (fw === 'bold') {
              fontWeight = 700;
            }
            else if (fw === 'extrabold' || 'heavy') {
              fontWeight = 800;
            }
            else if (fw === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(fontsSCSSFile,
              `@font-face {\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              cb);
            fs.appendFile(fontsLessFile,
              `@font-face {\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              cb);
            newFileOnly = fontFileName;
          }
        }
      } else {
        // если файл есть, выводим сообщение
        console.log("Файл scss/fonts.scss уже существует. Для обновления его нужно удалить");
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() { }
}
