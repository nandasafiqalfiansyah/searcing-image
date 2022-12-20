const { merge } = require("wepack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_module/",
        use: [
          {
            loader: "babel-loader",
            option: {
              presets: ["@babel/preser-env"],
            },
          },
        ],
      },
    ],
  },
});
