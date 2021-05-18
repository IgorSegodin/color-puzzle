var path = require('path');

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            modules: [path.resolve('src'), 'node_modules']
        }
    }
}