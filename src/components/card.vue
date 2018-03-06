<template>
<div class="yu-card">
  <div class="title">
     <span> {{title}}</span>
      <yu-button>添加</yu-button>
  </div>
  <div class="content">
    <slot></slot>
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
    height: 200px;
    .title {
      overflow: hidden;
      height: 50px;
      line-height:50px ;
     span{
       float: left;
     }
      button{
        float: right;
      }
    }
    .text{
      font-size: $normal;
      padding: 10px;
    }
  }
</style>
