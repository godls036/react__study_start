const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development', //실 서비스: production
    devtool: 'eval',    //실 서비스: hidden-source-map 
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client']
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'],
                        }
                    }],
                    '@babel/preset-react'
                ],
            }
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],

    output: {
        path: __dirname,
        filename: 'app.js'
    }
};