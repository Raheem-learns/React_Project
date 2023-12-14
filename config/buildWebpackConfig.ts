import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugin';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/buildOptions';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options;
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(paths),
		module: { rules: buildLoaders(options) },
		resolve: buildResolvers(),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev ? 'inline-source-map' : undefined,
	};
}
