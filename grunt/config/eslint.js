'use strict';


module.exports = function(grunt) {
    return {
        server: {
            options: {
                env: {
                    'es6': false
                },
                ecmaFeatures: {
                    modules: false
                },
                rules: {
                    'no-var': 0,
                    'prefer-arrow-callback': 0,
                    'prefer-template': 0,
                    'strict': 0
                }
            },
            src: [
                '*.js'
            ]
        },
        // serverTest: {
        //     options: {
        //         envs: [
        //             'mocha'
        //         ]
        //     }
        // },
        client: {
            options: {},
            src: [
                'client/app.jsx',
                'client/**/*.js',
                'client/**/*.jsx',
                '!client/bundle.js',
                '!client/bower_components/**/*',
                '!client/modules/**/*',
                '!client/test-helpers.js',
                '!client/**/*.spec.*.js',
                '!client/production.min.js',
                '!client/**/*.spec.*.jsx'
            ]
        },
        clientTest: {
            options: {
                envs: [
                    'mocha'
                ],
                rules: {
                    'no-undefined': 0
                }
            },
            src: [
                'client/**/*.spec.*.js',
                'client/**/*.spec.*.jsx'
            ]
        }
    };
};
