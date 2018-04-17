<template>
  <div class="yu-counter">
    <yu-button
      :size="size"
      @click="handleSubtract"
      :disabled="disabled"
    >-</yu-button>
    <yu-input
      :size="size"
      ref='input'
      :name="name"
      :defaultValue='number'
      :disabled="disabled"
      @change="handleChange"
      @blur="handleBlur"
      :width="width"
    />
    <yu-button
      :size="size"
      @click="handleAdd"
      :disabled="disabled"
    >+</yu-button>
  </div>
</template>

<script>
import YuInput from '../components/input';
import YuButton from '../components/button';

export default {
  name: 'YuCounter',
  data() {
    return {
      number: this.step,
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
  },
  methods: {
    handleSubtract() {
      this.$refs.input.changeValue(this.number -= this.step);
    },
    handleAdd() {
      this.$refs.input.changeValue(this.number += this.step);
    },
    handleChange(value, name) {
      this.number = parseInt(value, 0);
      this.$emit('change', value, name);
    },
    handleBlur(event) {
      if (this.$parent.isField) {
        this.$parent.handleBlur({ name: this.name, value: this.number });
      }
      this.$emit('blur', event)
    },
  },
  watch: {
    number(value) {
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value });
      }
    },
  },
  components: {
    YuInput,
    YuButton,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-counter {
    display: inline-block;
    font-size: 0;
    .yu-input {
      display: inline-block;
      box-sizing: border-box;
      margin-right: 0;
      input {
        width: 80px;
        border-radius: 0;
        text-align: center;
      }
    }
    .yu-button {
      vertical-align: top;
      background: $background;
      margin-right: 0;
      width: 50px;
    }
    .yu-button:nth-child(1) {
      border-radius: 4px 0 0 4px;
    }
    .yu-button:nth-child(3) {
      border-radius: 0 4px 4px 0;
    }
  }

</style>
