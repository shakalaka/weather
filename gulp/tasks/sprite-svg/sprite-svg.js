var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var through2 = require('through2');
var cheerio = require('cheerio');
var rename      = require('gulp-rename');
var consolidate = require('gulp-consolidate');
var plumber     = require('gulp-plumber');
var svgmin      = require('gulp-svgmin');
var config      = require('../../config');

gulp.task('sprite:svg', function() {
  return gulp
    .src(config.src.iconsSvg + '/*.svg')
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      },
      plugins: [{
        removeDesc: true
      }, {
        cleanupIDs: true
      }, {
        mergePaths: false
      },
      {
        removeViewBox: false
      }]
    }))
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore())
    .pipe(through2.obj(function(file, encoding, cb) {
      var $ = cheerio.load(file.contents.toString(), {xmlMode: true});
      var data = $('svg > symbol').map(function() {
        var $this  = $(this);
        var viewbox = $this.attr('viewBox');
        var size   = viewbox ? viewbox.split(' ').splice(2) : '24 24';
        var name   = $this.attr('id');
        var ratio  = size[0] / size[1]; // symbol width / symbol height
        var fill   = $this.find('[fill]:not([fill="currentColor"])').attr('fill');
        var stroke = $this.find('[stroke]').attr('stroke');
        return {
          name: name,
          ratio: +ratio.toFixed(2),
          fill: fill || 'initial',
          stroke: stroke || 'initial'
        };
      }).get();
      this.push(file);
      gulp.src(__dirname + '/_sprite-svg.scss')
        .pipe(consolidate('lodash', {
          symbols: data
        }))
        .pipe(gulp.dest(config.src.sassGen));
      gulp.src(__dirname + '/sprite.html')
        .pipe(consolidate('lodash', {
          symbols: data
        }))
        .pipe(gulp.dest(config.src.root));
      cb();
    }))
    /*.pipe(cheerio({
      run: function($, file) {
        $('[fill]:not([fill="currentColor"])').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
      },
      parserOptions: { xmlMode: true }
    }))*/
    .pipe(rename({ basename: 'sprite' }))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('sprite:svg:watch', function() {
  gulp.watch(config.src.iconsSvg + '/*.svg', ['sprite:svg']);
});
