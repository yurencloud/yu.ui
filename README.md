<h2 align="center">YU.UI</h2>
<p align="center">VUE UI组件库 | VUE UI framework | pc端 | 一套简洁，小巧的基于 Vue 2.0 的桌面端组件库</p>

<p align="center">
   <img src="https://img.shields.io/npm/v/yu.ui.svg" alt="">
    <img src="https://img.shields.io/github/stars/yurencloud/yu.ui.svg" alt="">
    <img src="https://img.shields.io/github/issues/yurencloud/yu.ui.svg" alt="">
    <img src="https://img.shields.io/github/forks/yurencloud/yu.ui.svg" alt="">
    <img src="https://img.shields.io/github/license/yurencloud/yu.ui.svg" alt="">
</p>

<p align="center">
  <a href="http://www.yurencloud.com/ui/install" target="_blank">使用文档</a>
  |
  <a href="https://github.com/yurencloud/yu.ui/tree/master/src/example"  target="_blank">完整示例</a>
  |
  <a href="http://www.yurencloud.com"  target="_blank">官方网站</a>
</p>



## 快速上手



#### npm 安装

~~~
npm install --save yu.ui
~~~



#### 引入样式 

方式一: 在html中引入 

~~~html
  // 例如vue项目的根目录index.html
  <link rel="stylesheet" href="https://unpkg.com/yu.ui/src/assets/yu.ui.css">
~~~
方式二: 在js中引入 

~~~
  // 例如vue项目的src/main.js中
  import 'yu.ui/src/assets/yu.ui.css'
~~~


#### 使用示例
~~~

  // 引入yu-button组件
  import { YuButton } from 'yu.ui';
  export default {
    components: { YuButton },
  }
      
~~~
~~~
  <!--使用yu-button组件-->
  <yu-button>Hello world</yu-button>
~~~
