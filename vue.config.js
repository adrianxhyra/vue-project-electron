module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: 'github',
            owner: 'adrianxhyra',
            private: false,
          }
        ]
        // publish: ['github']
      },
      preload: "src/preload.js", // this one
    }
  }
}