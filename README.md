# webpack_vue

<p align="center">webpack配置vue2.0</p>
<p align="center">效果图</p>
<p align="center">
  <img width="500" src="https://github.com/liangqifei/webpack_vue/blob/master/static/vue.png" alt="示例">
</p>

## 安装学习的网址

[Vue Loader](https://vue-loader.vuejs.org/zh/)

[Vue](https://cn.vuejs.org/v2/guide/installation.html#NPM)

[Babel](https://babeljs.io/docs/en/config-files)

[webpack](https://www.webpackjs.com/)

[markdown 语法](http://www.markdown.cn)

## webapck 配置环境准备

### node 环境以及检查

     `node -v`

### 安装 webapck 以及检查

     `npm install webpack webpacl-cli --save-dev`
     `webpack -v`

### 安装插件

     `npm install  copy-webpack-plugin -s`

### 打包

     打包命令 `npm run build`

## 前台目录结构

```
├─config Webpack配置
├─src
│  ├─components 组件
│  │  └─common
│  ├─assets 资源
│  │  └─images
│  ├─router vue路由
│  └─views 视图
└─static 静态资源
    ├─css
    └─img
```

## package.json 配置打包环境

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js",//配置正式环境打包命令
    "start": "webpack --config webpack.dev.js",//配置测试环境打包命令
    "dev": "webpack-dev-server --inline --config webpack.dev.js"//配置开发环境命令
  }

```

## webapck 配置介绍

`entry: "./src/index.js"`
待更
