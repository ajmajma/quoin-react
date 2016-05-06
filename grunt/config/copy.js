'use strict';

module.exports = function() {
    return {
        all: {
            expand: true,
            src: [
                'client/bower_components/**/*',
                'client/deploymentdescriptors/*.json',
                'client/modules/**/*',
                'client/css/**/*',
                'client/json/**/*',
                'client/fonts/**/*',
                'client/bundle.js',
                'client/images/*.*',
                'client/__status',
                'client/index.html',
                'client/favicon.png',
                'server.js',
                'config.js'
            ],
            dest: 'dist'
        }
    };
};
