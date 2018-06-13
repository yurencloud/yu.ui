<template>
  <div v-if="loading" class="yu-loading" :class="[align,size,{inline:inline}]">
    <i class="iconfont icon-loading loading" ></i>
    <div class="loading-text"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'YuLoading',
  props: {
    size: String,
    align: String,
    inline: Boolean,
    loading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-loading {
    font-size: 12px;
    color:$text;
    margin-right: 8px;
    text-align: center;
    &.inline{
      display: inline-block;
      .loading-text{
        display: inline-block;
      }
    }
    &.large{
      height: 30px;
      font-size: 20px;
      i{
        font-size: 24px;
      }
    }
    &.big{
      height: 40px;
      font-size: 30px;
      i{
        font-size: 36px;
      }
    }
    // loading动画
    i.loading{
      display: inline-block;
      animation: loading 2s linear infinite;
      @keyframes loading {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }

    &.left{
      text-align: left;
    }
    &.right{
      text-align: right;
    }
    &.center{
      text-align: center;
    }
  }

</style>
