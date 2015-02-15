module.exports = function(grunt) {

    var testFiles = grunt.file.expand('test/**/*.js', 'test/*.js', '!test/coverage.js');
    
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '<%= pkg.name %> Built on <%= grunt.template.today("mm-dd-yyyy") %>. ©2015 <%= pkg.author %>', // This banner is appended to all minified/compiled files
		jshint: {
			files:{
				src: ['*.js', '**/*.js', "!node_modules/**/*"]
			},
			options: {
				node: true, // Some Node.js specific stuff
				eqnull: true, // Allows == null
    			lastsemic: true, // Allows function(){ return 'Something' } <-- Notice no ';' after return for single-line function
    			laxcomma: true, // Allows comma-first coding
    			proto: true, // Allows __proto__
    			sub: true // Not picky about object['key'] vs. object.key
			}
		},
		mochaTest: {
		    test: {
				options: {
				    reporter: 'spec',
				    require: 'test/coverage'
				},
				src: testFiles
		  	},
		  	coverage: {
				options: {
					reporter: 'html-cov',
			  		quiet: true,
			  		captureFile: 'coverage.html'
				},
				src: testFiles
		    },
	      	'travis-cov': {
	        	options: {
	          		reporter: 'travis-cov'
	    		},
	        	src: testFiles
	      	}
		},
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');

	// Default task(s).
	grunt.registerTask('default', ['jshint']);
	
	// Test task
	grunt.registerTask('test', ['jshint', 'mochaTest']);

};