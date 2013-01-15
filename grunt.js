module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    compass: {
      specify: 'dev/scss/*.scss'
    }

  });

  // Load tasks from grunt plugins installed via Npm.
  grunt.loadNpmTasks('grunt-compass');

  // Default task.
  grunt.registerTask('default', 'compass');
};