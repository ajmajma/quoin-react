'use strict';

module.exports = function() {
    return {
        options: {
            hostname: 'localhost',
            base: 'client'
        },
        all: {
            options: {
                port: 3005
            }
        },
        test: {
            options: {
                port: 3008
            }
        },
        prod: {
            options: {
                port: 3572,
                base: 'dist',
                keepalive: 'true'
            }
        }
    }
};
