module.exports = {
  dev: ['temp/**/*', 'app/**/index.js'],
  dist: ['dist/**/*', 'app/**/index.js'],
  distPostCleanup: ['dist/assets/bundle.js']
};
