<template>
<div class="yu-tooltip" :class="[placement]">
    <!--提示框-->
    <div class="tooltip"
         v-show="isShow"
         :class="[effect,]">{{content}}</div>
  <!--文字-->
    <div class="text" @mouseover="over"
                      @mouseout="over">
      <i class="iconfont"
         v-if="showArrow"
         :class="[{'icon-caret-down':top,'icon-angle-down':isLight}]"
         v-show="isShow"></i>
      <slot/>
    </div>
</div>
</template>

<script>
import YuButton from './button';

export default {
  name: 'YuToolTip',
  data() {
    return {
      display: false,
      top: true,
      isShow: false,
      isLight: false,
    };
  },
  props: {
    content: String,
    placement: String,
    showArrow: false,
    effect: {
      type: String,
      default: 'dark',
    },
  },
  components: {
    YuButton,
  },
  methods: {
    over() {
      this.isShow = !this.isShow;
    },
  },
  beforeMount() {
    if (this.effect === 'light') {
      this.isLight = true;
      this.top = false;
    }
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-tooltip{
    display: inline-block;
    position: relative;
   .tooltip{
     padding: 10px;
     color: white;
     background-color:#000;
     display: block;
     border-radius: 5px;
     top: -33px;
     font-size: $small;
     transform: translateX(-25%);
     transition:all .2s linear;
     position: absolute;
     white-space:nowrap;
   }
    .light{
      color: #000;
      background-color: white;
      border: 1px solid #000;
    }
    .text{
      margin-top: 10px;
      position: relative;
      display: inline-block;
      i{
        position: absolute;
        left: 50%;
        font-size: $huge;
        transform: translateX(-50%);
        top: -18px;
      }
      .icon-angle-down{
        background-color: #fff;
      }
    }
  }
  /*提示框在--上左*/
  .yu-tooltip.top-left{
    .tooltip{
      transform: translateX(0);
    }
  }
  /*提示框在--上右*/
  .yu-tooltip.top-right{
    .tooltip{
      transform: translateX(-50%);
    }
  }
  /*提示框在--左侧*/
  .yu-tooltip.left{
    .tooltip{
      transform: translateX(-25%);
      position: absolute;
      left: -105%;
      top: 10px;
    }
    .text{
      i{
        position: absolute;
        top: 16%;
        left: -20%;
        transform: rotate(-90deg);
      }
    }
  }

  /*提示框在--右侧*/
  .yu-tooltip.right{
    .tooltip{
      transform: translateX(-25%);
      left: 120%;
      top: 10px;
    }
    .text{
      margin-top: 10px;
      position: relative;
      display: inline-block;
      margin-right: 10px;
      i{
        position: absolute;
        top: 16%;
        left: 90%;
        transform: rotate(90deg);
      }
    }
  }
  /*下中*/
  .yu-tooltip.bottom{
    .tooltip{
      top: 100%;
      transform: translateX(-50%);
      left: 50%;
    }
    .text{
      i{
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
        top: 76%;
      }
    }
  }
  /*下左边*/
  .yu-tooltip.bottom-left{
    .tooltip{
      top: 100%;
      transform: translateX(0);
    }
    .text{
      i{
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
        top: 76%;
      }
    }
  }
  /*下右边*/
  .yu-tooltip.bottom-right{
    .tooltip{
      top: 100%;
      transform: translateX(-50%);
    }
    .text{
      i{
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
        top: 76%;
      }
    }
  }
</style>
