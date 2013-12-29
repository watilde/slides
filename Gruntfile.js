module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: [''],
      tasks: ['']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-markdown');
  grunt.registerTask('default', ['watch']);
};
