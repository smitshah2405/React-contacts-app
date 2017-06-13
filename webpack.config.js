module.exports = {
    entry: {
        app: __dirname + '/src/js/main.js',
    },
    output: {
        path: __dirname + '/public',
        filename: 'mycms.js',
        publicPath: '/',
    },
    module: {

        rules: [{
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: "eslint-loader",
                options: {
                	parser: "babel-eslint",
                    "root": true,
                    "ecmaFeatures": {
                        "jsx": true
                    },
                    "env": {
                        "browser": true,
                        "node": true,
                        "jquery": true
                    },
                    "rules": {
                        "quotes": 0,
                        "no-trailing-spaces": 0,
                        "eol-last": 0,
                        "no-unused-vars": 0,
                        "no-underscore-dangle": 0,
                        "no-alert": 0,
                        "no-lone-blocks": 0
                    }
                }
            }],
        }, {
            test: [/\.js$/, /\.jsx$/],
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] },
            }]
        }]
    },
    devServer: {
        contentBase: __dirname + '/public'
    }
}
