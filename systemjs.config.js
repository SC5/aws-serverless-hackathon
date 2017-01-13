System.config({
  defaultJSExtensions: true,
  map: {
    app: 'app',
    angular2: 'node_modules/angular2',
    rxjs: 'node_modules/rxjs',
    "reflect-metadata": "node_modules/reflect-metadata/Reflect.js",
    "lodash": "node_modules/lodash/index.js",
    "zone.js": "node_modules/zone.js/dist/zone.js",
    "crypto": "node_modules/crypto-js/index.js"
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
  },
});
