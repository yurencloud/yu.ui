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
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
  },
  components: {
    YuInput,
    YuButton,
  },
}
</script>
