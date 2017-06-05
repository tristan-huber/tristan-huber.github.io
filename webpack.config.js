module.exports = {
	entry: "./entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.less$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "less-loader"
			}]
		}]

	}
};
