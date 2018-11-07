<template>
  <div class="yu-counter-side">
    <yu-input
      :size="size"
      ref='input'
      :name="name"
      :disabled="disabled"
      @change="handleChange"
      @inptu="handleInput"
      @blur="handleBlur"
      :value="value"
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
import YuInput from '../components/input'

const calc = require('calculatorjs')

export default {
  name: 'YuCounterSide',
  data() {
    return {
      currentValue: this.min || this.value,
      disabledAdd: false,
      disabledSubtract: this.min !== null || false,
    }
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
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
  },
}
</script>
