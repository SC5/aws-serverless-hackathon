const gulp = require('gulp');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const SystemBuilder = require('systemjs-builder');

gulp.task('clean:dist', () => {
  return gulp.src(['./dist'], { read: false })
    .pipe(clean());
});

gulp.task('clean:ts', () => {
  return gulp.src(['./app/**/*.js', './app/**/*.js.map'], { read: false })
    .pipe(clean());
});


const getBuilder = (configPath) => {
  const builder = new SystemBuilder();
  return builder.loadConfig(configPath)
    .then(function () {
      return builder;
    });
}

gulp.task('compile:ts', ['clean:ts'], shell.task([
  'tsc'
]));

gulp.task('bundle:app', ['compile:ts'], () => {
  return getBuilder('./systemjs.config.js')
    .then((builder) => {
      return builder.buildStatic('app', './dist/app.js', { minify: false })
    })
});

gulp.task('bundle', ['bundle:app'], () => {
  return gulp.src('index-bundle.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy:css', () => {
  return gulp.src(['./app/css/*', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy:dependencies', () => {
  return gulp.src([
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/lodash/lodash.min.js'
  ],{ base: './node_modules' })
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy:app', () => {
  return gulp.src(['./app/**/*.html'], { base: '.' })
    .pipe(gulp.dest('./dist'));
});

gulp.task('dist', (done) => {
  runSequence('clean:dist', 'bundle', 'copy:css', 'copy:app', 'copy:dependencies', () => {
    done();
  });
});
