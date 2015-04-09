module.exports = {
    options: {
        sourceMap: true
    },
    dev: {
        files: {
	      'temp/app/bundle.js': ['app/app.js'],
	    },
	    options: {
	       transform: ['babelify'],
            browserifyOptions: {
                debug: true
            }
	    }
    }
};