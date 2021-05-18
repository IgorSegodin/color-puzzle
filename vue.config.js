var path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? (process.env.CONTEXT_PATH || '/') : '/',
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            modules: [path.resolve('src'), 'node_modules']
        }
    }
}