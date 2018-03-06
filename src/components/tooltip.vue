<template>
<div class="yu-tooltip" >
  <yu-button disabled  @mouseover.native="over"  @mouseout.native="out">{{btn}}</yu-button>
  <span class="tip" :class="[position]" v-show="display">
    {{content}}
  <i class="iconfont icon-right-top-triangle"></i>
  </span>
</div>
</template>

<script>
import YuButton from './button';

export default {
  name: 'YuTooltip',
  data() {
    return {
      display: false,
    };
  },
  props: {
    content: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    btn: {
      type: String,
      default: '哈哈',
    },
  },
  components: {
    YuButton,
  },
  methods: {
    over() {
      this.display = !this.display;
    },
    out() {
      this.display = !this.display;
    },
  },
  beforeMount() {

  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-tooltip{
    position: relative;
    display: inline-block;
     .tip{
       font-size: $small;
       border: 1px solid $dark-border;
       display: inline-block;
       padding: 5px;
       border-radius: 5px;
       background-color: #000;
       color: white;
       position: relative;
       /*margin: 10px;*/
     }
    .bottom{
      position: absolute;
      bottom: -25px;
      left: 7px;
      i{
        font-size: $normal;
        color: #000;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
        transform-origin: center;
        top: -7px;
      }
    }
    .top{
      position: absolute;
      top: -40px;
      left: -4px;
      i{
        font-size: $normal;
        color: #000;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(135deg);
        transform-origin: center;
        bottom: -7px;
      }
    }
    .right{
      position: relative;
      i{
        font-size: $normal;
        color: #000;
        position: absolute;
        left: 0;
        transform: translateX(-50%) rotate(-135deg);
        transform-origin: center;
        bottom: 5px;
      }
    }
    .left{
      position: absolute;
      left: -100px;
      top:3px;
      i{
        font-size: $normal;
        color: #000;
        position: absolute;
        right: -13px;
        transform: translateX(-50%) rotate(45deg);
        transform-origin: center;
        bottom: 5px;
      }
    }
  }


</style>
