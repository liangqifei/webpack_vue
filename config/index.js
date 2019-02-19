const path = require("path");
import devEvn from "dev.js";
import buildEvn from "dev.js";
import startEvn from "dev.js";
module.exports = {
  dev: {
    outputPath_publicPath: "/",
    outputPath: path.resolve(__dirname, "../dist"),
    mode: devEvn.NODE_ENV
  },
  build: {
    outputPath_publicPath: "./",
    outputPath: path.resolve(__dirname, "/"),
    mode: devEvn.NODE_ENV
  },
  start: {
    outputPath_publicPath: "./",
    outputPath: path.resolve(__dirname, "../devdist"),
    mode: devEvn.NODE_ENV
  }
};
