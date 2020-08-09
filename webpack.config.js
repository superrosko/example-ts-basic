const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

const buildConfig = {
  entry: {
    'web-bundle': './src/web-bundle.ts',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const outputExampleWebVoiceControl = Object.assign({}, buildConfig, {
  output: {
    filename: 'web-bundle.js',
    path: path.resolve(__dirname, 'examples/example-ts-basic'),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname,
            './examples/example-ts-basic/web-bundle.js'),
      ],
    }),
  ],
});

module.exports = [outputExampleWebVoiceControl];
