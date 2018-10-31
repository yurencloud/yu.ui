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
      let errors = []
      // 触发每个field的submit检查
      this.$children.forEach((item) => {
        console.log(item)
        if (item.isField && item.prop) {
          item.handleEvent('submit', { name: item.prop, value: the.value[item.prop] })
          console.log(item.error, item.messages)
          if (item.error) {
            errors = errors.concat(item.messages)
          }
        }
      })

      return errors
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
