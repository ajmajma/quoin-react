'use strict';

var loadGruntConfig = require('load-grunt-config');
var path = require('path');
var timeGrunt = require('time-grunt');


module.exports = function gruntfile(grunt) {
    timeGrunt(grunt);

    loadGruntConfig(grunt, {
        configPath: path.join(__dirname, 'grunt', 'config'),
        jitGrunt: {
            customTasksDir: path.join('grunt', 'tasks'),
            staticMappings: {
                dist: 'artifact'
            }
        },
        data: {
            packageJson: require('./package.json')
        }
    });

    grunt.registerTask('default', [
        'checkCode',
        'build:local:debug',
        'connect:all',
        'watch'
    ]);

    grunt.registerTask('checkCode', [
        'jsbeautifier',
        'eslint'
    ]);

    grunt.registerTask('build:local:debug', [
        'checkCode',
        'cssmin',
        'injector:build',
        'webpack:dev'
    ]);

    grunt.registerTask('prod', [
        'checkCode',
        'cssmin',
        'injector:build',
        'webpack:prod'
    ]);

    grunt.registerTask('test', [
        'clean:test',
        'run:test'
    ]);

    grunt.registerTask('build', [
        'test',
        'prod',
        'dist:prepare',
        'copy:all'
    ]);

    grunt.registerTask('jenkins', [
        'build',
        'dist:publish'
    ]);
};
