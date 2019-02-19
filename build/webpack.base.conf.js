const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
import config from "../config";
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"), //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
  entry: "./src/index.js", //起点或是应用程序的起点入口
  output: {
    filename: "[name].[hash:7].js",
    path: config.outputPath,
    publicPath: config.outputPath_publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      //   // 它会应用到普通的 `.js` 文件
      //   // 以及 `.vue` 文件中的 `<script>` 块
      //   {
      //     test: /\.js$/,
      //     loader: "babel-loader"
      //   },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader"
        // options: {
        //   limit: 1000,
        //   name: utils.assetsPath("img/[name].[hash:7].[ext]")
        // }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader"
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath("media/[name].[hash:7].[ext]")
        // }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader"
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        // }
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      //   "@": resolve("src/view"),
      "@con": resolve("src/component")
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new CleanWebpackPlugin(["dist"]),
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./static"),
        to: "static",
        ignore: [".*"]
      }
    ])
  ]
};
