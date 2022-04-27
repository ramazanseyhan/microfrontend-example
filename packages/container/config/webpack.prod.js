const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        helloHeader: `helloHeader@${domain}/helloHeader/latest/remoteEntry.js`,
        helloVue: `helloVue@${domain}/helloVue/latest/remoteEntry.js`,
        helloReact: `helloReact@${domain}/helloReact/latest/remoteEntry.js`,
        helloFooter: `helloFooter@${domain}/helloFooter/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
