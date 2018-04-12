<template>
<div class="yu-popover">
  <!--popover-->
  <div class="popover-content"
       v-show="showContent"
       :style="{left:left,top:top}">
    <div class="content">
      <div class="popover-title">{{title}}</div>
      <slot>{{content}}</slot>
    </div>
  </div>
  <!--三角形-->
  <div class="tangle" :class="[position,]"  v-show="showContent">
  </div>
  <!--触发按钮-->
  <div class="popover-trigger" @click="change">
    <slot name="trigger" />
  </div>
</div>
</template>

<script>
export default {
  name: 'YuPopover',
  props: {
    title: String,
    content: String,
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
      },
    },
    left: String,
    top: String,
    delay: {
      type: Number,
      default: 3,
    },
    isDisappear: Boolean,
    position: {
      type: String,
      default: 'top',
    },
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    change() {
      this.showContent = !this.showContent;
      if (this.isDisappear) {
        setTimeout(() => {
          this.showContent = !this.showContent;
        }, this.delay * 1000)
      }
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
   .yu-popover{
     display: inline-block;
     position: relative;
     .popover-content{
       display: inline-block;
       position: absolute;
       background-color: #fff;
       box-shadow: $box-shadow;
       padding: 10px;
       width: 200px;
       .content{
         .popover-title{
           margin-bottom: 5px;
           font-size: $normal;
         }
           font-size: $small;
       }
     }
     .tangle{
       width:0;
       height:0;
       border-top:6px solid red;
       border-right:8px solid transparent;
       border-bottom:8px solid transparent;
       border-left:8px solid transparent;
       position: absolute;
       &.top{
         top: -14px;
         left: 40px;
       }
       &.bottom{
         bottom: -3px;
         left: 40px;
         transform: rotateX(180deg);
       }
       /*todo*/
       &.right{
         right: -21px;
         top: 25%;
         -webkit-transform: rotate(-90deg) translateY(-50%);
         transform: rotate(-90deg) translateY(-50%);
       }
     }
   }
</style>
