const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 mode: 'development',
 // To setup mulitple entry points of our React.js
 // Codesplitting
 entry: {
    // First module, eg: Customer facing module
   main: './src/index.tsx',
   // Another module. eg: Admin facing module
   another: './src/anotherEntry.tsx'
 },
 output: {
    // First nbundle - main.budle.js
    // Second bundle - another.bundle.js
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
   publicPath: '/'
 },
 resolve: {
   extensions: ['.ts', '.tsx', '.js', '.jsx']
 },
 // the loaders for js and css
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 // server configuration
 devServer: {
   static: {
       directory: path.join(__dirname, 'dist'),
     },
     compress: true, // Enables gzip compression for everything served
     port: 3000, // Port to access your dev server
     historyApiFallback: true, // Enables HTML5 mode
     hot: true, // Hot Module Replacement (HMR) feature
     open: true, // Opens the browser after the server starts
 },
 plugins: [
    // To define multiple entry points
   new HtmlWebpackPlugin({
     template: './public/index.html',
     chunks: ['main'] // Default entry point [eg:customer facing]
   }),
   new HtmlWebpackPlugin({
     template: './public/another.html',
     filename: 'another.html',
     chunks: ['another'] // Additional entry point [eg: admin]
   })
 ],
 // setup the code-splitting optimization 
 optimization: {
   splitChunks: {
     chunks: 'all',
     name: 'vendors',
   }
 }
};
