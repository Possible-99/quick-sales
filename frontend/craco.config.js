const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#DC143C' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    proxy: {
        '/': 'http://127.0.0.1:5000'
    }
  }
};