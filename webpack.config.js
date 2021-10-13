const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development';

module.exports = {
    mode,
    devtool: 'source-map',

    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ],
        }, {
            test: /\.(s[ac]|c)css$/i,
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

    devServer: {
        static: path.join(__dirname, 'dist'),
    },
};
