module.exports = function(grunt) {
  'use strict';

  var tasks = [
    'grunt-contrib-jshint',
    'grunt-contrib-concat',
    'grunt-contrib-jasmine',
    'grunt-contrib-watch',
    'grunt-contrib-uglify',
  ];

 var config = {};

  // *********************************************
  // jshint
  config.jshint = {};
  config.jshint.all = ['src/**/*.js'];


  // *********************************************
  // concat
  config.concat = {
    dist: {
      src: [
        'src/**/*.js'
      ],
      dest: 'dist/ordine.js'
    }
  }


  // *********************************************
  // uglify
  config.uglify = {};
  config.uglify.all = {
    files: {
      'dist/ordine.min.js': [ 'dist/ordine.js' ]
    },
    options: {
      preserveComments: false,
      sourceMap: 'dist/ordine.min.map',
      sourceMappingURL: 'dist/ordine.min.map',
      report: 'min',
      beautify: {
        ascii_only: true
      },
      compress: {
        hoist_funs: false,
        loops: false,
        unused: false
      }
    }
  }


  // *********************************************
  // watch
  config.watch = {};
  config.watch.scripts = {
    files: ['src/**/*.js','src/*.js'],
    tasks: ['jshint','concat','uglify'],
    options: {
      spawn: false,
    }
  }

  grunt.initConfig(config);

  tasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'concat','watch', 'uglify']);

};