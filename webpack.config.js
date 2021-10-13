const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development';

module.exports = {
    mode,
    devtool: 'source-map',

    entry: [
        './src/index.js',
        './src/styles/index.scss',
    ],

    module: {
        rules: [{
            test: /\.jsx?$/i,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ],
        }, {
            test: /\.(s[ac]|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        },],
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
    },
};
