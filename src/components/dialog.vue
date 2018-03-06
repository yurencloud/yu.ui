<template>
  <div class="yu-dialog">
    <div @click="toggle" class="click">{{tag}}</div>
    <div class="mask">
       <div class="dialog">
         <div class="title">
           {{title}}
         </div>
         <div class="close" @click="toggle" ><i class="iconfont icon-close"></i></div>
         <div class="content" v-if="iscontent">{{content}}</div>
         <div class="content" v-else>
           <slot></slot>
         </div>
         <div class="btn">
           <yu-button disabled size="small" @click.native="toggle">取消</yu-button>
           <yu-button size="small" type="primary" @click.native="open">打开内部弹出框</yu-button>
         </div>
         <div class="inner" v-show="inner">
           <div>{{innerContent}}</div>
           <div class="close" @click="open"><i class="iconfont icon-close"></i></div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button';

export default {
  name: 'YuDialog',
  data() {
    return {
      warp: false,
      inner: false,
    };
  },
  props: {
    tag: {
      type: String,
      default: '点击查看',
    },
    title: {
      type: String,
      default: '提示',
    },
    content: {
      type: String,
      default: '提示信息',
    },
    iscontent: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: '',
    },
    innerContent: {
      type: String,
      default: '',
    },
  },
  components: {
    YuButton,
  },
  methods: {
    toggle() {
      this.warp = !this.warp;
      console.log(this._props.isContent);
      if (this.warp) {
        document.getElementsByClassName('mask')[0].style.display = 'block';
      } else {
        document.getElementsByClassName('mask')[0].style.display = 'none';
      }
    },
    open() {
      this.inner = !this.inner;
    },
  },
  beforeMount() {

  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-dialog{
    .mask{
      z-index: 99999;
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4);
      .dialog{
        padding: 15px 30px;
        width: 30%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .title{
          color: #000;
          font-size: $big;
          padding: 5px 0;
          text-align: center;
        }
        .close{
          position: absolute;
          right: 10px;
          top: 5px;
          i{
            font-size: $huge;
            color: $text;
          }
        }
        .content{
          padding: 20px 0;
          color: $text;
        }
        .btn{
          text-align: right;
        }
      }
      .inner{
        width: 80%;
        height: 40%;
        position: absolute;
        z-index: 999;
        top: 20%;
        left: 50%;
        transform: translate(-50%,-40%);
        background-color: #ffffff;
        color:$dark-text;
        padding: 15px;
        box-shadow:0 1px 28px #888;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
