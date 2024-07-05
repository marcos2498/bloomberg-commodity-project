const path = require('path');

module.exports = {
  mode: 'development', // or 'production' based on your environment
  entry: './index.js', // Adjust the entry point to the correct location of your main file
  output: {
    path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-native'),
          path.resolve(__dirname, 'node_modules/expo-status-bar'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
