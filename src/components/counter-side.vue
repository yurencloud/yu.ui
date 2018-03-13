<template>
  <div class="yu-counter-side">
    <yu-input
      :size="size"
      ref='input'
      :name="name"
      :defaultValue='number'
      :disabled="disabled"
      @change="handleChange"
    />
    <div>
      <button
        :size="size"
        @click="handleAdd"
        :class="[{disabled:disabled}]"
        :disabled="disabled"
      >
        <i class="iconfont icon-angle-up"></i>
      </button>
      <button
        :size="size"
        @click="handleSubtract"
        :class="[{disabled:disabled}]"
      >
        <i class="iconfont icon-angle-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
import YuInput from '../components/input';

export default {
  name: 'YuCounterSide',
  data() {
    return {
      number: this.step,
    };
  },
  props: {
    name: String,
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleSubtract() {
      this.$refs.input.changeValue(this.number -= this.step);
    },
    handleAdd() {
      this.$refs.input.changeValue(this.number += this.step);
    },
    handleChange(value) {
      this.number = parseInt(value, 0);
    },
  },
  components: {
    YuInput,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-counter-side {
    display: inline-block;
    font-size: 0;
    .yu-input {
      display: inline-block;
      box-sizing: border-box;
      margin-right: 0;
      input {
        width: 80px;
        border-radius: 4px 0 0 4px;
        text-align: center;
      }
    }
    div{
      height: 36px;
      vertical-align: top;
      display: inline-block;
      button {
        height: 50%;
        background-color: #fff;
        border: 1px solid $border;
        color: $text;
        font-size: $normal;
        padding: 0 20px;
        text-align: center;
        font-family: $font-family;
        transition: all .3s ease;
        outline: none;
        display: block;
        vertical-align: top;
        background: $background;
        width: 50px;
        margin: 0;
        i{
          margin-left: -3px;
        }
        &:hover:not(.disabled),&:focus:not(.disabled) {
          color: $primary;
          border: 1px solid lighten($primary,10);
          background-color: lighten($primary,35);
        }
        &.disabled{
          color:$lighter-text;
          background: $background;
        }
      }
      button:nth-child(1) {
        border-top-right-radius: 4px;
      }
      button:nth-child(2) {
        border-bottom-right-radius: 4px;
      }
    }

  }

</style>
