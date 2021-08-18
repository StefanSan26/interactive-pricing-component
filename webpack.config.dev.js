const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalizerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin



module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js",
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "[name][contenthash].js"
  },
	mode: 'development',
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js"],
  },
	module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.m?.js$/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/
      },
			{
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
	plugins:[
		new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
		new MiniCssExtractPlugin({
			filename:"assets/[name].[contenthash].css"
		}),
		new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "../images"),
          to: "assets/images",
        },
      ],
    }),
		new BundleAnalizerPlugin()
	],
	devServer:{
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		port: 4015,
	}
}