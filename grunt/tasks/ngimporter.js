module.exports = {
  dev: {
    importData: [{
        src: ['app/controllers/**/*.js'],
        dest: 'app/controllers/index.js',
        base: 'app/controllers/',
        type: 'controller'
      }, {
        src: ['app/directives/**/*.js'],
        dest: 'app/directives/index.js',
        base: 'app/directives/',
        type: 'directive'
      }, {
        src: ['app/services/**/*.js'],
        dest: 'app/services/index.js',
        base: 'app/services/',
        type: 'service'
      }, {
        src: ['app/filters/**/*.js'],
        dest: 'app/filters/index.js',
        base: 'app/filters/',
        type: 'filter'
      }
    ]
  }
};
