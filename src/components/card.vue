<template>
<div class="yu-card" :style="{width:width+'px',height:height+'px'}">
  <div class="title">
     <span v-if="title != ''"> {{title}}</span>
      <yu-button v-if="operation != ''" size="small">{{operation}}</yu-button>
  </div>
  <div class="content">
    <slot></slot>
  </div>
  <div class="bottom" v-if="bottom">
      <div class="msg">
        <i class="iconfont icon-commenting"></i>
        <span>message</span>
      </div>
      <div class="like">
        <i class="iconfont icon-heart"></i>
        <span>I love </span>
      </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button';

export default {
  name: 'YuCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    operation: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 250,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    YuButton,
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-card{
     width: 30%;
     box-shadow: $box-shadow;
    overflow: hidden;
    .title {
      overflow: hidden;
      border-bottom: 1px solid $border;
      height: 50px;
      padding:10px;
      margin: 0;
      box-sizing: border-box;
      line-height: 30px;
      color: $dark-text;
     span{
       float: left;
     }
      button{
        float: right;
        margin-bottom: 10px;
      }
    }
    .content{
      /*todo*/
      height: calc(100% - 80px);
      /*此处的高度根据不同的类型的卡片高度不同*/
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text{
      font-size: $normal;
      padding: 10px;
    }
   .bottom{
     padding: 5px;
     overflow: hidden;
     line-height: 20px;
     height: 30px;
     box-sizing: border-box;
       .msg{
         font-size: $normal;
         float: left;
         color: $light-text;
         i{
           font-size: $huge;
           margin-right: 5px;
           &:hover{
             color: $primary;
           }
         }
       }
     .like{
       font-size: $normal;
       float: right;
       color: $light-text;
       i{
         font-size: $huge;
         margin-right: 5px;
         &:hover{
           color: $danger;
         }
       }
     }
   }
  }
</style>
