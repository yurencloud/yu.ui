<template>
  <div class="yu-time-picker">
    <yu-input v-if="type==='simple'"
              prefix="icon-clock"
              :options="options"
              overflow
              clearable
              :name="name"
              :placeholder="placeholder"
              @blur="handleBlur"
              @change="handleChange"
              @clear="handleClear"
              @input="handleInput"
              ref="input"
              :width="width"
              :disabled="disabled"
              :size="size"
              :value="value"
              autocomplete="off"
    />
    <yu-scroll-select
      :split="':'"
      ref="scroll"
      v-if="type==='scroll'"
      remote
      :options="cascader"
      @firstFetch="firstFetch"
      @secondFetch="secondFetch"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
    />
  </div>
</template>

<script>
import YuInput from './input'
import YuScrollSelect from './scroll-select'

export default {
  name: 'YuTimePicker',
  data() {
    return {
      currentValue: '',
      sixty: [],
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
    disabled: Boolean,
    width: String,
    type: {
      type: String,
      default: 'simple',
    },
    optionParam: {
      type: Object,
      default() {
        return {
          start: '00:00',
          step: '00:30',
          end: '24:00',
        }
      },
    },
    selectParam: {
      type: Object,
      default() {
        return {
          start: '00:00:00',
          end: '24:00:00',
        }
      },
    },
    name: {
      type: String,
      default: 'time',
    },
    placeholder: {
      type: String,
      default: '请选择时间',
    },
    size: String,
  },
  methods: {
    handleClear() {
      this.currentValue = ''
      if (this.$parent.isField) {
        this.$parent.handleEvent('clear', { name: this.name, value: '' })
      }
    },
    handleBlur(event) {
      this.currentValue = this.$refs.input.value
      this.$emit('blur', event)
      if (this.$parent.isField) {
        this.$parent.handleEvent('blur', { name: this.name, value: this.currentValue })
      }
    },
    handleChange(value, name) {
      this.currentValue = value
      this.$emit('change', value, name)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.currentValue })
      }
    },
    handleInput(value) {
      this.currentValue = value
    },
    getMinute(time) {
      const arr = time.split(':')
      return (parseInt(arr[0], 0) * 60) + parseInt(arr[1], 0)
    },
    firstFetch() {
      this.$refs.scroll.secondCascader = this.sixty
    },
    secondFetch() {
      this.$refs.scroll.thirdCascader = this.sixty
    },
  },
  computed: {
    options() {
      // 全部以分钟计算
      const startMinute = this.getMinute(this.optionParam.start)
      const stepMinute = this.getMinute(this.optionParam.step)
      const endMinute = this.getMinute(this.optionParam.end)
      const min = this.getMinute(this.optionParam.minTime || '00:00') // 设置最大值，最小值
      const max = this.getMinute(this.optionParam.maxTime || '24:00')
      const options = []
      let i = startMinute
      while (i < endMinute) {
        let hours = Math.floor(i / 60)
        hours < 10 ? hours = `0${hours}` : hours = hours.toString()
        let minutes = i % 60
        minutes < 10 ? minutes = `0${minutes}` : minutes = minutes.toString()
        const result = `${hours}:${minutes}`
        options.push({ value: result, label: result, disabled: i < min || i > max })
        i += stepMinute
      }
      return options
    },
    cascader() {
      const cascader = []
      // 造小时
      for (let i = 0; i < 24; i++) {
        let time = ''
        i < 10 ? time = `0${i}` : time = i.toString()
        cascader.push({ value: time, label: time })
      }
      cascader[0].children = this.sixty
      cascader[0].children[0].children = this.sixty
      return cascader
    },
  },
  created() {
    const sixty = []
    // 造分钟和秒
    for (let i = 0; i < 60; i++) {
      let time = ''
      i < 10 ? time = `0${i}` : time = i.toString()
      sixty.push({ value: time, label: time })
    }
    this.sixty = sixty
  },
  watch: {
    currentValue(value) {
      this.$emit('input', value)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
  },
  components: {
    YuInput,
    YuScrollSelect,
  },
}
</script>
