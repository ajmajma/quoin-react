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
                    'client/css/irc.min.css'
                ]
            }
        }
    }
};
