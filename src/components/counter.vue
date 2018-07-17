<template>
  <div class="yu-counter">
    <yu-button
      :size="size"
      class="counter sub"
      @click="handleSubtract"
      :disabled="disabled || disabledSubtract"
    >-</yu-button>
    <yu-input
      :size="size"
      ref='input'
      :name="name"
      :disabled="disabled"
      class="counter"
      @change="handleChange"
      @blur="handleBlur"
      @input="handleInput"
      :width="width"
      :value="value"
    />
    <yu-button
      :size="size"
      @click="handleAdd"
      class="counter add"
      :disabled="disabled || disabledAdd"
    >+</yu-button>
  </div>
</template>

<script>
import YuInput from '../components/input'
import YuButton from '../components/button'

const calc = require('calculatorjs')

export default {
  name: 'YuCounter',
  data() {
    return {
      currentValue: this.min || this.value,
      disabledAdd: false,
      disabledSubtract: this.min !== null || false,
      fixed: 0, // 小数点位数
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: [Number, String],
    name: String,
    size: String,
    width: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1, // 必须大于0
    },
    max: {
      type: Number,
      default: null,
    }, // 包含
    min: {
      type: Number,
      default: null,
    }, // 包含
  },
  methods: {
    handleSubtract() {
      this.currentValue = calc.sub(this.value, this.step)
    },
    handleAdd() {
      this.currentValue = calc.add(this.value, this.step)
    },
    handleChange(value, name) {
      let fixed = 0
      if (this.step.toString().indexOf('.') > -1) {
        fixed = this.step.toString().split('.')[1].length
      }
      this.currentValue = Number(value).toFixed(fixed)
      this.$emit('change', this.currentValue, name)
    },
    handleInput(value, name) {
      let fixed = 0
      if (this.step.toString().indexOf('.') > -1) {
        fixed = this.step.toString().split('.')[1].length
      }
      this.currentValue = Number(value).toFixed(fixed)
      this.$emit('change', this.currentValue, name)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
  },
  watch: {
    currentValue(value) {
      if (this.max !== null) {
        if (value >= this.max) {
          this.$emit('input', this.max)
          this.disabledAdd = true
          return
        }
        this.disabledAdd = false
      }
      if (this.min !== null) {
        if (value <= this.min) {
          this.$emit('input', this.min)
          this.disabledSubtract = true
        } else {
          this.disabledSubtract = false
        }
      }
      this.$emit('input', value)
    },
  },
  components: {
    YuInput,
    YuButton,
  },
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-counter {
    display: inline-block;
    font-size: 0;
    .yu-input.counter {
      display: inline-block;
      box-sizing: border-box;
      margin-right: 0;
      input {
        width: 80px;
        border-radius: 0;
        text-align: center;
      }
    }
    .yu-button.counter {
      vertical-align: top;
      background: $background;
      margin-right: 0;
      width: 50px;
    }
    .yu-button.sub{
      border-radius: 4px 0 0 4px;
    }
    .yu-button.add{
      border-radius: 0 4px 4px 0;
    }
  }

</style>
