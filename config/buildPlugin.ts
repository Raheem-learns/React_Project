import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildPath } from './types/buildOptions';

export function buildPlugins(paths: BuildPath): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({ template: paths.html }),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:5].css',
			chunkFilename: 'css/[name].[contenthash:5].css',
		}),
	];
}
