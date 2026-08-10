const path = require('path'); // CommonJS

module.exports = {
    mode: 'development',
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname,'frontend', 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
    {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] }
        }
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[contenthash:8].[ext]',
                outputPath: '../img',
                publicPath: 'assets/img',
                esModule: false
            }
        }
        ]
    }
    ]
},
    devtool: 'source-map'
};
