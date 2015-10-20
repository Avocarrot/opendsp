module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
          dev: {
            script: 'index.js'
          },
          watch: [ 'lib/**/*.js', 'index.js' ]
        }
    });
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', [ 'nodemon:dev' ]);
};
