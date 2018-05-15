<template>
  <div class="yu-counter-side">
    <yu-input
      :size="size"
      ref='input'
      :name="name"
      :defaultValue='value+valueUnit'
      :disabled="disabled"
      @change="handleChange"
      @blur="handleBlur"
    />
    <div :class="[size]">
      <button
        @click="handleAdd"
        :class="[{disabled:disabled||disabledAdd}]"
      >
        <i class="iconfont icon-angle-up"></i>
      </button>
      <button
        @click="handleSubtract"
        :class="[{disabled:disabled||disabledSubtract}]"
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
      value: this.min || this.step,
      disabledAdd: false,
      disabledSubtract: this.min !== null || false,
    };
  },
  props: {
    name: String,
    size: String,
    width: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: null,
    }, // 包含
    min: {
      type: Number,
      default: null,
    }, // 包含
    valueUnit: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleSubtract() {
      this.value -= this.step;
      this.$refs.input.changeValue(this.value + this.valueUnit);
    },
    handleAdd() {
      this.value += this.step;
      this.$refs.input.changeValue(this.value + this.valueUnit);
    },
    handleChange(value) {
      this.value = parseInt(value, 0);
      this.$emit('change', value, name);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
  },
  watch: {
    value() {
      if (this.max !== null) {
        if (this.value >= this.max) {
          this.value = this.max;
          this.$refs.input.changeValue(this.value + this.valueUnit);
          this.disabledAdd = true;
          return;
        }
        this.disabledAdd = false;
      }
      if (this.min !== null) {
        if (this.value <= this.min) {
          this.value = this.min;
          this.$refs.input.changeValue(this.value + this.valueUnit);
          this.disabledSubtract = true;
        } else {
          this.disabledSubtract = false;
        }
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
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
      height: 40px;
      &.medium{
        height: 36px;
      }
      &.small{
        height: 32px;
      }
      &.mini{
        height: 28px;
      }
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
          cursor: not-allowed;
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
