## npm 安装
~~~
npm i -S yu.ui
~~~

## 复制文件安装
复制scss文件 `src/assets/css/_varible.scss`
复制组件文件 `src/components/*`
配置vue scss loader   
~~~
  npm install --save-dev sass-loader
  npm install --save-dev node-sass
~~~   
~~~
  // 修改build/webpack.base.conf.js文件
  module: {
    rules: [
      // ... 省略前面的配置
      // 添加scss 配置
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      ]
    }
~~~
举例：如果你只想引入button组件，那么你只要复制button.vue文件和_varible.scss文件，  
并修改button.vue中的@import "../assets/css/varible";即可使用  


## 配置字体图标
在根目录下的index.html文件中引入外部字体图标css文件(注：如果你使用的组件中未使用到任何图标，可不引入)
~~~
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>yu-vue</title>
      <!--字体图标css-->
      <link rel="stylesheet" href="https://at.alicdn.com/t/font_554463_k9gdx8fkgj8m2t9.css">
      <!--字体图标css-->
    </head>
    <body>
      <div id="app"></div>
      <!-- built files will be auto injected -->
    </body>
  </html>
~~~

## 快速上手：Hello World
~~~

  // 引入yu-button组件
  import { YuButton } from 'yu.ui';
  export default {
    name: 'Example',
    components: { YuButton },
  }
      
~~~
~~~
  <!--使用yu-button组件-->
  <yu-button>Hello world</yu-button>
~~~
