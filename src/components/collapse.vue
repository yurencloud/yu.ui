<template>
  <div class="yu-collapse" :style="{width:width+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YuCollapse',
  props: {
    width: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/varible";
  .yu-collapse{
  }
</style>
