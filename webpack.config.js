const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            // LOAD SCSS and SASS files and 
            test: /\.s[ac]ss$/,
            use: [
                {
                    // inject CSS to page ('style-loader'), 
                    loader: 'style-loader'
                },
                {
                    // translates CSS into CommonJS modules ('css-loader'), 
                    loader: 'css-loader'
                },
                {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                    // `postcssOptions` is needed for postcss 8.x;
                    // if you use postcss 7.x skip the key
                    postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                    }
                },
                {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }
            ]
        }
    ]
  }
};
