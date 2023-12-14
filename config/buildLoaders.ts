import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;
	const typescriptLoaders = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoaders = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) => Boolean(resourcePath.includes('.module')),
						localIdentName: isDev ? '[path].[name]__[local].[hash:base64:4]' : '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	return [typescriptLoaders, cssLoaders];
}
