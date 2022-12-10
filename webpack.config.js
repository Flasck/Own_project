const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV

const config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    target: 'web',
    devServer: {
        compress: true,
        hot: true,
        port: 3333,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        alias: {
            '@images': path.resolve(__dirname, 'public/images'),
            '@fonts': path.resolve(__dirname, 'public/fonts'),
            '@pages': path.resolve(__dirname, 'src/pages'),
			'@components': path.resolve(__dirname, 'src/components'),
        }
    },
    module: {
        rules: [
            {
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: 'asset/resource',
			},
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							modules: true,
						},
					},
				],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html",
                // favicon: "./public/favicon.ico",
            }
        ),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public/images'),
					to: path.resolve(__dirname, 'dist/images'),
				},
			],
		}),
    ],
};

if(mode === 'development'){
    config.mode = 'development'
    config.devtool = 'source-map'
}else{
    config.mode = 'production'
    config.optimization={
        minimize: true,
        concatenateModules: true,
        moduleIds: "deterministic",
        usedExports: true,
        splitChunks: {
            minChunks: 2,
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
        },
    }
}

module.exports = config;