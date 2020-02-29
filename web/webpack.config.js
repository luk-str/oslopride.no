/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
	entry: ["react-hot-loader/patch", "./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".tsx", ".ts"],
		alias: {
			"react-dom": "@hot-loader/react-dom"
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			// Classy-ui uses this within the template
			production: process.env.NODE_ENV === "production"
		}),
		new ForkTsCheckerWebpackPlugin({ eslint: true })
	]
};

module.exports = config;
