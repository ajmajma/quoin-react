'use strict';

module.exports = function() {
    var srcFiles = [
        'modules/app.js',
        'modules/config.js',
        'modules/**/*.js',
        '.tmp/jsx/**/*.js',
        'client/views/mirc.views.min.js'
    ];

    return {
        debug: {
            options: {
                beautify: {
                    width: 80,
                    beautify: true
                },
                mangle: false
            },
            src: srcFiles,
            dest: 'client/production.min.js'
        },
        production: {
            options: {
                mangle: false
            },
            src: srcFiles,
            dest: 'client/production.min.js'
        },
        build: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            src: srcFiles,
            dest: 'client/production.min.js'
        }
    }
};
