"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      compass: {
        files: ['static/sass/{,**/}*.scss'],
        tasks: ['compass:dev']
      }
    },

    compass: {
      options: {
        bundleExec: true,
          relativeAssets: true,
        cssDir: 'static/css',
        sassDir: 'static/sass',
				imagesDir: 'static/img'
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          raw: 'line_numbers = :true\n'
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    }
  });

  var tasks = [
    'grunt-contrib-watch',
    'grunt-contrib-compass'
  ];

  for (var i in tasks) {
    grunt.loadNpmTasks(tasks[i]);
  }

  grunt.registerTask('default', ['compass:dev', 'watch']);
  grunt.registerTask('dist', ['compass:dist']);
};
