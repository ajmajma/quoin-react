'use strict';

module.exports = function() {
    var timestamp = '?' + Date.now();

    return {
        options: {
            addRootSlash: false,
            ignorePath: 'client/',
            transform: function(filepath, index, length) {
                if (filepath.indexOf("bower_components/") == -1) {
                    filepath += timestamp;
                }

                if (filepath.indexOf(".css") == -1) {
                    return '<script src="' + filepath + '"></script>';
                } else {
                    return '<link rel="stylesheet" href="' + filepath + '"/>';
                }
            }
        },
        build: {
            options: {
                template: 'client/index.raw.html'
            },
            files: {
                'client/index.html': [
                    'cengage/bower_components/jquery/dist/jquery.min.js',
                    'cengage/bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'cengage/bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'client/css/irc.min.css'
                ]
            }
        }
    }
};
