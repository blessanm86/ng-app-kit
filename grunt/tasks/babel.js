module.exports = {
    options: {
        sourceMap: true
    },
    dev: {
        files: [
        	{ expand: true, cwd: 'app/', src: ['**/*.js'], dest: 'temp/app/' },
        ]
    }
};