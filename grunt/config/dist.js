module.exports = function(grunt) {
    return {
        clean: true,
        package: {
            omit: 'devDependencies'
        },
        artifact: {
            build: {
                url: process.env.BUILD_URL
            },
            platform: {
                nodejs: '0.12.x'
            },
            config: {
                contexts: [{
                    name: '.<%= packageJson.name %>rc',
                    type: 'application/json',
                    schema: {
                        type: 'object',
                        properties: {
                            port: {
                                type: 'string',
                                default: 8080
                            }
                        }
                    }
                }]
            }
        }
    };
};
