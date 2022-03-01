module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ["."],
        extensions: [
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg'
        ],
        alias: {
          '~': './src',
        },
      }
    ]
  ]
};
