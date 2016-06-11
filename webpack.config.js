var webpack = require('webpack');

module.exports = [{
    entry: './src/app.ts',
    output: {
        filename: './dist/app.js'
    },
    resolve: {
        extensions: ['', '.ts']
    },
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }]
    }
}];
