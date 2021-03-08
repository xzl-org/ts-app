const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require("path")

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // 资源路径别名
  addWebpackAlias({
    assets: path.resolve(__dirname, "./src/assets"),
    components: path.resolve(__dirname, "./src/components"),
    // services: path.resolve(__dirname, "./src/services"),
    "@": path.resolve(__dirname, "./src")
  })
);
