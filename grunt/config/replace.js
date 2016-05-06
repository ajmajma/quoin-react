'use strict';

module.exports = function() {
    return {
        localhost: {
            src: ['client/test/e2e/*_spec.js'],
            overwrite: true,
            replacements: [{
                from: '$mircBaseUrl',
                to: "http://localhost:8081"
            }, {
                from: '$mircSessionCookie',
                to: 's%3AfzEflJe9G9oRzJPjw72KGtQx.Z%2BhSX5sR6OnHGTIRKnZSDFczAOXpXNiaCzIna2lFCk4'
            }, {
                from: '$mircBaseDomain',
                to: "localhost"
            }]
        },
        localhost_reset: {
            src: ['client/test/e2e/*_spec.js'],
            overwrite: true,
            replacements: [{
                from: "http://localhost:8081",
                to: '$mircBaseUrl'
            }, {
                from: 's%3AfzEflJe9G9oRzJPjw72KGtQx.Z%2BhSX5sR6OnHGTIRKnZSDFczAOXpXNiaCzIna2lFCk4',
                to: '$mircSessionCookie'
            }, {
                from: "localhost",
                to: '$mircBaseDomain'

            }]
        },
        jenkins: {
            src: ['client/test/e2e/*_spec.js'],
            overwrite: true,
            replacements: [{
                from: '$mircBaseUrl',
                to: "http://mirc.dev.cengage.info"
            }, {
                from: '$mircSessionCookie',
                to: 's%3AnFEaCeoKBkrooAPhHtQYmXkm.%2F7LFEPks9Nblyyq%2F9RhqDglDDV9cTx0%2BbJUki8A%2FWxk'
            }, {
                from: '$mircBaseDomain',
                to: "qah-ng.cengage.com"

            }]
        },
        jenkins_reset: {
            src: ['client/test/e2e/*_spec.js'],
            overwrite: true,
            replacements: [{
                from: "http://mirc.dev.cengage.info",
                to: '$mircBaseUrl'
            }, {
                from: 's%3AnFEaCeoKBkrooAPhHtQYmXkm.%2F7LFEPks9Nblyyq%2F9RhqDglDDV9cTx0%2BbJUki8A%2FWxk',
                to: '$mircSessionCookie'
            }, {
                from: "qah-ng.cengage.com",
                to: '$mircBaseDomain'
            }]
        }
    }
};
