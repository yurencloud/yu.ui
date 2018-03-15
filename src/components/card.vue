<template>
<div class="yu-card" :style="{width:width}">
  <div class="title"  v-if="title">
     <span>{{title}}</span>
      <yu-button v-if="operation !== ''" size="small">{{operation}}</yu-button>
  </div>
  <div class="content">
    <slot/>
  </div>
  <div class="bottom" v-if="bottom">
    <div v-if="bottomTitle">{{bottomTitle}}</div>
      <div class="msg">
        <i class="iconfont icon-commenting"></i>
        <span>{{leftMessage}}</span>
      </div>
      <div class="like" @click="handleClick">
        <i class="iconfont icon-heart"></i>
        <span>{{rightMessage}}</span>
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
    },
    bottomTitle: String,
    leftMessage: String,
    rightMessage: String,
    operation: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '400px',
    },
    bottom: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    YuButton,
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    },
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
      img{
        width: 100%;
        height: 300px;
      }
    }
    .text{
      font-size: $normal;
      padding: 10px;
    }
   .bottom{
     padding: 5px 10px;
     overflow: hidden;
     line-height: 30px;
     box-sizing: border-box;
       .msg{
         font-size: $large;
         float: left;
         color: $text;
         cursor: pointer;
         &:hover i{
           color: $primary;
         }
         i{
           font-size: $big;
           margin-right: 5px;
         }
       }
     .like{
       font-size: $normal;
       float: right;
       color: $text;
       cursor: pointer;
       &:hover i{
         color: $danger;
       }
       i{
         font-size: $big;
         margin-right: 5px;
       }
     }
   }
  }
</style>
