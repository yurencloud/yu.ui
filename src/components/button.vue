<template>
  <button
    @click="handleClick"
    class="yu-button"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[type, size, {disabled:disabled},shape]" >
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
    height: 35px;
    width: 100px;
    border-radius: 4px;
    line-height: 30px;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 12px;
    font-family: $font-family;
    color: $text;
    border: 1px solid $border;
    font-size: $normal;
    background-color: #fff;
    transition: all .3s ease;
    &.default:hover:not(.disabled) {
      color: $primary;
      border: 1px solid lighten($primary,10);
      background-color: lighten($primary,35);
    }
    &.circle{
      width:35px;
      height: 35px;
      border-radius: 50%;
    }
    &:focus:not(.disabled){
      color: $primary;
      border: 1px solid lighten($primary,10);
      background-color: lighten($primary,35);
      outline: none;
    }
    &.disabled{
      color:$lighter-text;
      background: $background;
    }
    &.disabled:focus{
      outline: none;
    }
    @include generalAllColorButton();
    &.big{
      width: 120px;
      height: 50px;
      font-size: $big;
      line-height: 50px;
    }
    &.small{
      width: 80px;
      height: 30px;
      font-size: $small;
      line-height: 30px;
    }
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
  }
</style>
