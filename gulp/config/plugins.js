import replace from "gulp-replace"; // Поиск и замена
import rename from 'gulp-rename'; // Переименование
import newer from 'gulp-newer'; // Переименование
import del from "del";
import versionNumber from "gulp-version-number";

import beautify from "gulp-beautify";
import fileInclude from "gulp-file-include";

import less from "gulp-less";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass); // передача компилятора в обработчик

import csscomb from 'gulp-csscomb';
import vars from 'gulp-vars'; // Подстановка значений css variables var(--variable-name)
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import autoPrefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа-запросов
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений

import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import postAutoprefixer from 'autoprefixer';

import pug from "gulp-pug";
// import webpHtmlNosvg from "gulp-webp-html-nosvg";
// import htmlhint from "gulp-htmlhint"; // Проверка выходного HTML // ??? Как с этим работать

import plumber from "gulp-plumber"; // обертка для notify
import notify from "gulp-notify"; // Уведомления об ошибках

import browsersync from "browser-sync"; // Локальный сервер с автоапдейтом страницы

// Экспорт объекта
export const plugins = {
  replace,
  rename,
  newer,
  del,
  versionNumber,

  beautify,
  fileInclude,

  less,
  sass,

  csscomb,
  cleanCss,
  autoPrefixer,
  groupMediaQueries,
  webpcss,
  vars,

  postcss,
  sourcemaps,
  postAutoprefixer,

  pug,
  // webpHtmlNosvg,
  // htmlhint,

  plumber,
  notify,
  browsersync
}
