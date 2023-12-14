import { config } from 'process';
import { buildWebpackConfig } from './config/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/types/buildOptions';
import webpack from 'webpack';
import path from 'path';

export default (env: BuildEnv) => {
	const mode = env.mode || 'development';
	const port = env.port || 3000;
	const isDev = mode === 'development';
	const paths: BuildPath = {
		build: path.resolve(__dirname, 'dist'),
		entry: path.resolve(__dirname, 'src'),
		html: path.resolve(__dirname, 'public/index.html'),
	};
	const config: webpack.Configuration = buildWebpackConfig({ mode, paths: paths, isDev, port });

	return config;
};
