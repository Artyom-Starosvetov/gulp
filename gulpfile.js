// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  gulp,
  path,
  plugins,
}

// Импорт сценариев
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";

import { parseHTML } from "./gulp/tasks/parseHTML.js";
import { parsePug } from "./gulp/tasks/parsePug.js";
import { parseJS } from "./gulp/tasks/parseJS.js";
import { parseImages } from "./gulp/tasks/parseImages.js";
import { otf2ttf, ttf2woff, fontStyle } from "./gulp/tasks/parseFonts.js"
import { parseCSS } from "./gulp/tasks/parseCSS.js"
import { parseSCSS } from "./gulp/tasks/parseSCSS.js" // Опционально. Если надо - добавь в mainTasks
import { parseLess } from "./gulp/tasks/parseLess.js"  // Опционально. Если надо - добавь в mainTasks

import { html2pugg } from "./gulp/tasks/html2pug.js";
import { less_back } from "./gulp/tasks/less_back.js"
import { lesscomb } from "./gulp/tasks/lesscomb.js"
const combTasks = gulp.series(less_back, lesscomb);
import { groupMediaQuires } from "./gulp/tasks/groupMediaQuires.js"
import { copyLibs } from "./gulp/tasks/copyLibs.js";

const pugTasks = gulp.series(parsePug, parseHTML);
const lessTasks = gulp.series(parseLess, parseCSS);
const scssTasks = gulp.series(parseSCSS, parseCSS);
const fontsTasks = gulp.series(otf2ttf, ttf2woff, fontStyle);
const parseTasks = gulp.parallel(parseJS, pugTasks, lessTasks, scssTasks, parseImages);

const outTasks = gulp.parallel(watcher, server);
const buildTasks = gulp.series(copyLibs, fontsTasks, parseTasks, outTasks);
const rebuildTasks = gulp.series(reset, buildTasks);

gulp.task('reset', reset);
gulp.task('copyLibs', copyLibs);

gulp.task('parse', parseTasks);
gulp.task('parseJs', parseJS);
gulp.task('parsePug', pugTasks);
gulp.task('parseHtml', parseHTML);
gulp.task('parseLess', parseLess);
gulp.task('parseCss', parseCSS);
gulp.task('parseImages', parseImages);
gulp.task('parseFonts', fontsTasks);

gulp.task('html2pugg', html2pugg);
gulp.task('groupMedia', groupMediaQuires);
gulp.task('lesscomb', combTasks);

gulp.task('out', outTasks);
gulp.task('build', buildTasks);
gulp.task('rebuild', rebuildTasks);

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.pug, pugTasks);
  gulp.watch(path.watch.html, parseHTML);
  gulp.watch(path.watch.less, lessTasks);
  gulp.watch(path.watch.scss, scssTasks);
  gulp.watch(path.watch.css, parseCSS);
  gulp.watch(path.watch.images, parseImages);
  gulp.watch(path.watch.js, parseJS);
}

// Выполнение сценария по умолчанию
gulp.task('default', outTasks);
