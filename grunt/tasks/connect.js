module.exports = {
  dev: {
    options: {
      port: 9001,
      base: 'temp',
      keepalive: true,
      hostname: '127.0.0.1',
      livereload: true,
      debug: true
    }
  },
  dist: {
    options: {
      port: 9002,
      base: 'dist',
      keepalive: true,
      hostname: '127.0.0.1'
    }
  }
};
