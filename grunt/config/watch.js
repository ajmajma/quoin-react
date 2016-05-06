'use strict';

module.exports = function() {
    return {
        js: {
            files: [
                'client/*.jsx',
                'client/**/*',
                '!client/json/*',
                '!client/bundle.js',
                '!client/css/*.min.css',
                '!client/index.html'
            ],
            tasks: ['build:local:debug'],
            options: {
                livereload: {
                    port: 1337
                }
            }
        }
    };
};
