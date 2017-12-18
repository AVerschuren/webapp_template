module.exports = function(grunt) {

grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),
concat: {
  options: {
    separator: ';'
  },
  dist: {
    src: ['src/*.js'],
    dest: 'dist/<%= pkg.name %>.js'
  }
},
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
            'dist/app.js': 'src/main.js'
        }
    }
}
});
    
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-babel');

grunt.registerTask('default', [ 'uglify', 'cssmin', 'babel']);

};