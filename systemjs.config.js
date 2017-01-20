System.config({
  defaultJSExtensions: true,
  map: {
    app: 'app',
    angular2: 'node_modules/angular2',
    rxjs: 'node_modules/rxjs',
    lodash: "node_modules/lodash/index.js",
  },
  packages: {
    app: {
      defaultExtension: 'js',
      main: 'main.js'
    },
    angular2: {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
