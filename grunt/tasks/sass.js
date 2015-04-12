module.exports = {
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      'app/styles/app.css': 'app/styles/sass/app.scss'
    }
  },
  dist: {
    options: {
      sourcemap: 'none',
      style: 'compressed'
    },
    files: {
      'app/styles/app.css': 'app/styles/sass/app.scss'
    }
  }
};
