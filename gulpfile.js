const gulp = require("gulp");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

// 编译css:
function fnCss(){
    return gulp.src("./src/sass/**/*")
    .pipe(sass({outerStyle: "enpanded"}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest("./dist/css"))
}
// 复制index:
function copyIndex(){
    return gulp.src("./src/index.html")
    .pipe(gulp.dest("./dist"))
}

// 编译js：
function fnJs(){
    return gulp.src("./src/js/**/*")
    .pipe(babel({presets:["@babel/env"]}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest("./dist/js"))
}


// 导出：
exports.css = fnCss;
exports.copy = copyIndex;
exports.js = fnJs; 
// 监听：
function fnWatch(){
    gulp.watch("./src/sass/**/*",fnCss)
    gulp.watch("./src/js/**/*",fnJs)
    gulp.watch("./src/index.html",copyIndex)
}
exports.default = fnWatch;
