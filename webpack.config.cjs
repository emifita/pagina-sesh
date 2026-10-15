const path = require('path'); // CommonJS

module.exports = {
    // Development mode keeps the generated bundle readable while the project is being edited.
    mode: 'development',
    entry: './frontend/main.js',
    output: {
        // Emit the browser bundle where the static frontend can load it.
        path: path.resolve(__dirname,'frontend', 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
    {
        // Transpile project JavaScript while leaving installed dependencies untouched.
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] }
        }
    },
    {
        // Bundle imported styles into the page through style-loader and css-loader.
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        // Copy imported image assets and give them content-based names for cache busting.
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[contenthash:8].[ext]',
                outputPath: '../img',
                publicPath: '/assets/img',
                esModule: false
            }
        }
        ]
    }
    ]
},
    // Map bundled code back to its source files during browser debugging.
    devtool: 'source-map'
};
