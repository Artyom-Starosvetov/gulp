import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
console.log(rootFolder);

const buildFolder = `./app/dist`;
const srcFolder = `./app/src`;

export const path = {
  html: {
    src: `${srcFolder}/html/*.html`,
    all: `${srcFolder}/*.html`,
    dir: `${srcFolder}/html/`,
    dest: `${buildFolder}/html/`
  },
  pug: {
    src: `${srcFolder}/pug/*.pug`,
    dir: `${srcFolder}/pug/`,
    dest: `${srcFolder}/html/`
  },
  scss: {
    src: `${srcFolder}/scss/style.scss`,
    dest: `${srcFolder}/css/`
  },
  less: {
    src: `${srcFolder}/less/style.less`,
    dir: `${srcFolder}/less/`,
    bak: `${srcFolder}/less/bak/`,
    dest: `${srcFolder}/css/`
  },
  css: {
    src: `${srcFolder}/css/style.css`,
    dest: `${buildFolder}/css/`
  },
  images: {
    src: `${srcFolder}/img/**/*.{svg,jpg,jpeg,png,webp,gif}`,
    dest: `${buildFolder}/img/`
  },
  fonts: {
    dest: `${buildFolder}/fonts/`
  },
  js: {
    src: `${srcFolder}/js/*.js`,
    dest: `${buildFolder}/js/`
  },
  libs: {
    src: `${srcFolder}/libs/**/*.*`,
    dest: `${buildFolder}/libs/`
  },
  misc: {
    src: `${srcFolder}/**/*.txt`,
    dest: `${buildFolder}/`
  },
  watch: {
    less: `${srcFolder}/less/**/*.less`,
    scss: `${srcFolder}/scss/**/*.scss`,
    css: `${srcFolder}/css/**/*.css`,
    js: `${srcFolder}/js/**/*.js`,
    pug: `${srcFolder}/pug/**/*.pug`,
    html: `${srcFolder}/html/**/*.html`,
    images: `${srcFolder}/img/**/*.{svg,jpg,jpeg,png,webp,gif}`,
  },
  buildFolder,
  srcFolder,
  rootFolder,
  clean: buildFolder,
  ftp: ``
}
