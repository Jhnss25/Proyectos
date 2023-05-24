const { src, dest, watch, parallel, task} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');

const paths = {
    src: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// Compilar CSS
function css() {
    return src(paths.src)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log('Error:', error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(postcss([autoprefixer, cssnano]))
        .pipe(dest('build/css'));
}

// Compilar JavaScript
function js() {
    return src(paths.js)
        .pipe(dest('build/js'));
}

// watch
function watchs() {
    watch(paths.src, css);
    watch(paths.js, js);
}


task('compilar-css', css);
task('compilar-js', js);
task('watch', parallel(watchs, css, js));
exports.watchs = parallel(watchs, css, js);