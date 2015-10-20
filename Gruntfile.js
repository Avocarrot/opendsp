module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
          dev: {
            script: 'index.js',
            options: {
              env: {
                ENV: 'dev'
              }
            }
          },
          watch: [ 'lib/**/*.js', 'index.js' ]
        }
    });
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', [ 'nodemon:dev' ]);
};
