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

export default {
  name: 'YuForm',
  componentName: 'YuForm',
  props: {
    inline: Boolean,
    rules: Object,
    width: String,
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
    hasValue(name) {
      if (this.value.hasOwnProperty(name)) {
        const value = this.value[name]
        return (typeof value !== 'undefined' && value.toString().trim().length !== 0)
      }
      return false
    },
  },
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-form {
    width: 460px;
    &.inline {
      width: 100%;
      .yu-field {
        vertical-align: top;
        display: inline-block;
        label{
          width: auto;
        }
        .field{
          width: auto;
        }
      }
    }
  }

</style>
