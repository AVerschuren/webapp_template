module.exports = function(grunt) {

grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),

uglify: {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  },
  dist: {
    files: {
      'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    }
  }
},
cssmin: {
    target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
    }
},
babel: {
    options: {
        sourceMap: true,
        presets: ['env']
    },
    dist: {
        files: {
            'dist/app.js': 'main.js'
        }
    }
}
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-babel');    

grunt.registerTask('default', ['babel', 'uglify', 'cssmin']);

};