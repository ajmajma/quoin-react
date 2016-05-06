'use strict';

module.exports = function() {

    return {
        target: {
            files: [{
                expand: true,
                cwd: 'client/css',
                src: ['irc.css'],
                dest: 'client/css',
                ext: '.min.css'
            }]
        }
    }
};
