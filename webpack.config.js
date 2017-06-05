module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}]
			},
			{
				test: /\.tsx?$/, loader: "awesome-typescript-loader"
			},
			{
				enforce: "pre", test: /\.js$/, loader: "source-map-loader"
			}

		]

	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};
