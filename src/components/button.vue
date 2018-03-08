<template>
  <button
    @click="handleClick"
    class="yu-button"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[type, size, {disabled:disabled},shape, {plain:plain}, {loading:loading}]" >
    <i v-if="icon" class="ui iconfont" v-bind:class="[icon]"></i>
    <i v-if="loading" class="ui iconfont icon-loading loading"></i>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'YuButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    icon: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    shape: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    autofocus: {
      type: Boolean,
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    plain: {
      type: Boolean,
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-button {
    // 基础属性
    padding: 0 20px;
    border-radius: 4px;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 12px;
    font-family: $font-family;
    transition: all .3s ease;
    outline: none;
    /*box-sizing: border-box;*/

    // 默认属性
    background-color: #fff;
    border: 1px solid $border;
    color: $text;
    font-size: $normal;
    &.default:hover:not(.disabled),&:focus:not(.disabled) {
      color: $primary;
      border: 1px solid lighten($primary,10);
      background-color: lighten($primary,35);
    }
    &.disabled{
      color:$lighter-text;
      background: $background;
    }

    @include generalAllSizeButton();
    @include generalAllColorButton();

    &.circle{
      // circle 默认
      padding: 0;
      width: $normal-height;
      height: $normal-height;
      border-radius: 50%;
      @include generalAllSizeCircleButton();
    }

    &.plain{
      // plain 默认
      &:hover:not(.disabled),&:focus:not(.disabled) {
        border: 1px solid $primary;
        color: $primary;
        background: #fff;
      }
      @include generalAllColorPlainButton();
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

    &.append{
      display: inline-block;
      vertical-align: top;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin: 0;
    }

    &.prepend{
      vertical-align: top;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin: 0;
    }
  }
</style>
