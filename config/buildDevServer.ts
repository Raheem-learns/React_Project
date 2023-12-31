import { BuildOptions } from './types/buildOptions';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	const { port } = options;
	return {
		open: true,
		port,
		historyApiFallback: true,
	};
}
