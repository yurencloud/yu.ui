<template>
  <div class="yu-collapse" :style="{width:width}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuCollapse',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    accordion: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  .yu-collapse{
    div{
      &:first-child{
        border-top: 1px solid $border;
      }
    }
  }
</style>
