<template>
  <form class="yu-form"
        :class="{inline:inline}"
        :style="{width:width}"
        ref="form"
  >
    <slot/>
  </form>
</template>

<script>
import 'whatwg-fetch'
import { isEmpty } from '../utils/util'

export default {
  name: 'YuForm',
  componentName: 'YuForm',
  props: {
    inline: Boolean,
    rules: Object,
    width: {
      type: String,
      default: '100%',
    },
    isForm: {
      type: Boolean,
      default: true,
    },
    value: Object,
  },
  methods: {
    validate() {
      const the = this
      const errors = []
      // 触发每个field的submit检查
      this.$children.forEach((item) => {
        if (item.isField && item.prop) {
          item.handleEvent('blur', { name: item.prop, value: the.value[item.prop] })
          if (item.error) {
            errors.push(item.error)
          }
        }
      })

      return errors
    },
    clearAllError() {
      this.$children.forEach((item) => {
        if (item.isField) {
          item.error = null
        }
      })
    },
    getValue(name) {
      return this.value[name]
    },
    hasValue(name) {
      if (this.value.hasOwnProperty(name)) {
        const value = this.value[name]
        return !isEmpty(value)
      }
      return false
    },
  },
}
</script>
