export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPath;
	isDev: boolean;
	port: number;
}

export type BuildMode = 'development' | 'production' | 'none';
export interface BuildPath {
	entry: string;
	build: string;
	html: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}
