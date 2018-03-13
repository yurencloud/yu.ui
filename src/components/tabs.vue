<template>
  <div class="yu-tabs"></div>
</template>

<script>
export default {
  name: 'YuTabs',
  props: {},
  provide() {
    return {
      rootTabs: this,
    }
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
</style>
