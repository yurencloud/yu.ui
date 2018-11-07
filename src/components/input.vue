<template>
  <div class="yu-input" :class="[{disabled:disabled},size]">
    <!--前置图标-->
    <span class="prefix icon" v-if="prefix">
      <i class="iconfont" :class="[prefix]"></i>
    </span>
    <!--前置组件-->
    <slot v-if="$slots.prepend" class="prepend" name="prepend"/>
    <input
      v-if="type!=='textarea'"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      :readonly="readonly"
      :name="name"
      :autofocus="autofocus"
      @click="handleClick"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyup"
      @input="handleInput"
      :autocomplete="autocomplete"
      :class="[
                {prefix:prefix},
                {suffix:suffix},
                {append:$slots.append},
                {prepend:$slots.prepend},
                type,
              ]"
      :style="{width:width}">

    <!--后置图标-->
    <span class="suffix icon" v-if="suffix">
      <i class="iconfont" :class="[suffix]"></i>
    </span>
    <!--清除图标-->
    <span class="clearable" v-if="clearable && value" @click="clear">
     <i class="iconfont icon-close-circle "></i>
    </span>
    <textarea
      v-if="type==='textarea'"
      :name="name"
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
      @click="handleClick"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyup"
      @input="handleInput"
      :value="value"
      :style="{width:width}"
      :readonly="readonly"
    ></textarea>
    <!--后置组件-->
    <slot v-if="$slots.append" class="append" name="append"/>

    <!--输入提示-->
    <transition name="zoom-in-top">
    <div v-if="options" v-show="search" class="options" :class="[{overflow:overflow}]">
      <yu-loading :loading="loading && remote"/>
      <yu-option ref="option"
                 v-for="item in options"
                 :key="item.value"
                 :disabled="item.disabled"
                 :label="item.label"
                 :value="item.value"
      />
    </div>
    </transition>

  </div>
</template>

<script>
import YuButton from './button'
import YuOption from './option'
import YuLoading from './loading'

export default {
  name: 'YuInput',
  data() {
    return {
      currentValue: this.value || '',
      search: false,
      optionsFilter: [],
      activeNumber: -1,
      hover: false,
      select: '',
      loading: false,
    }
  },
  model: {
    prop: 'value',
    model: 'input',
  },
  props: {
    placeholder: String,
    disabled: Boolean,
    clearable: Boolean,
    readonly: Boolean,
    prefix: String,
    suffix: String,
    name: String,
    autofocus: Boolean,
    size: {
      type: String,
      default: 'normal',
    },
    width: String,
    options: Array,
    overflow: Boolean,
    remote: Boolean,
    value: [String, Number],
    type: {
      type: String,
      default: 'input',
    },
    cols: {
      type: Number,
      default: 30,
    },
    rows: {
      type: Number,
      default: 4,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
  },
  created() {
    this.$on('handleSelect', this.handleSelect)
  },
  methods: {
    clear() {
      this.currentValue = ''
      this.$emit('input', '')
      this.$emit('clear')
      if (this.$parent.isField) {
        this.$parent.handleEvent('clear', { name: this.name, value: this.value })
      }
    },
    handleClick(event) {
      this.$emit('click', event)
    },
    handleBlur(event) {
      if (this.options) {
        this.search = false
      }
      this.$emit('blur', event)
      if (this.$parent.isField) {
        this.$parent.handleEvent('blur', { name: this.name, value: this.value })
      }
    },
    handleFocus(event) {
      if (this.options) {
        this.search = true
      }
      if (this.remote) {
        this.loading = true
        this.$emit('fetch', this.value)
      }
      this.$emit('focus', event)
      if (this.$parent.isField) {
        this.$parent.handleEvent('focus', { name: this.name, value: this.value })
      }
    },
    handleChange() {
      this.$emit('change', this.value, this.name)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.value })
      }
    },
    handleInput(event) {
      this.$emit('input', event.target.value)
      if (this.$parent.isField) {
        this.$parent.handleEvent('input', { name: this.name, value: this.value })
      }
    },

    changeValue(value) {
      this.currentValue = value
    },

    handleKeyup(event) {
      if (!this.options) {
        return
      }
      const len = this.options.length
      // Down键事件
      if (event.keyCode === 40 && this.activeNumber < len - 1) {
        this.activeNumber += 1
      }

      // Up键事件
      if (event.keyCode === 38 && this.activeNumber > 0) {
        this.activeNumber -= 1
      }

      // 按Enter键
      if (event.keyCode === 13) {
        if (this.activeNumber >= 0 && this.activeNumber < len) {
          const select = this.$refs.option[this.activeNumber]
          this.currentValue = select.label
          this.select = select.value
          this.search = false
        }
      }

      // remote true是远程，false是本地
      if (!this.remote && event.keyCode !== 38 && event.keyCode !== 40 && event.keyCode !== 13) {
        // 判断是不是远程获取输入提示选项
        if (this.value.trim().length !== 0) {
          this.$refs.option.forEach((item) => {
            item.hide = item.label.indexOf(this.value) <= -1
          })
        } else {
          this.currentValue = ''
          this.select = ''
          this.$refs.option.forEach((item) => {
            item.hide = false
            item.active = false
          })
        }
        this.loading = false
      }
      if (this.activeNumber >= 0) {
        this.$refs.option.forEach((item) => {
          item.active = false
        })
        this.$refs.option[this.activeNumber].active = true
      }
    },
    handleSelect({ label, value }) {
      this.currentValue = label
      this.select = value
      this.search = false
    },
  },
  watch: {
    options() {
      this.loading = false
    },
    currentValue(currentValue) {
      this.$emit('input', currentValue)
    },
    value(value) {
      this.loading = true
      if (this.remote) {
        this.$emit('fetch', value)
      }
    },
  },
  components: {
    YuButton,
    YuOption,
    YuLoading,
  },
}
</script>
