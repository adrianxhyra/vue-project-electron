module.exports = {
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
      },
      preload: "src/preload.js", // this one
    }
  }
};