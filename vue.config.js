module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "github",
            owner: "adrianxhyra",
            repo: "vue-project-electron",
            releaseType: 'draft'
          }
        ]
        // publish: [
        //   {
        //     provider: 'github',
        //     owner: 'adrianxhyra',
        //     private: false,
        //   }
        // ]
        // publish: ['github']
      },
      preload: "src/preload.js", // this one
    }
  }
}