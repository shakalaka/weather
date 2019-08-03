const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config');


gulp.task('babel', () =>
	gulp.src(config.src.js + '/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
        .on('error', config.errorHandler)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dest.js))
);

/*
gulp.task('babel', () =>
	gulp.src(config.src.js + '/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest(config.dest.js))
);

*/
gulp.task('babel:watch', function() {
    gulp.watch(config.src.js + '/**/*.js', ['babel']);
});