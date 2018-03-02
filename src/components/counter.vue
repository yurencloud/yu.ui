<template>
  <div class="yu-counter">
    <yu-button
      @click="handleSubtract"
      :disabled="disabled"
    >-</yu-button>
    <yu-input
      ref='input'
      :name="name"
      :defaultValue='number'
      :disabled="disabled"
      @change="handleChange"
    />
    <yu-button
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
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
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
    YuButton,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-counter {
    .yu-input {
      display: inline-block;
      margin-right: 0;
      margin: 0 -5px;
      input {
        width: 80px;
        border-radius: 0;
        text-align: center;
      }
    }
    .yu-button {
      background: $background;
      margin-right: 0;
      width: 50px;
    }
    .yu-button:nth-child(1) {
      border-radius: 4px 0 0 4px;
      margin-right: .5px;
    }
    .yu-button:nth-child(3) {
      border-radius: 0 4px 4px 0;
      margin-left: .5px;
    }
  }

</style>
