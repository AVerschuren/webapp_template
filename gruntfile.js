module.exports = function(grunt) {

grunt.initConfig({

uglify: {
    my_target: {
      files: {
        'dist/main.min.js': ['src/main.js']
      }
    }
  },
cssmin: {
    target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
    }
},

});
    
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', [ 'uglify', 'cssmin']);

};