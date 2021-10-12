const path = require('path');

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
        },],
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
    },
};
