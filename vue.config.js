var path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            modules: [path.resolve('src'), 'node_modules']
        }
    }
}