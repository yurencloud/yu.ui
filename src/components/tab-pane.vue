<template>
  <div class="yu-tab-pane">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuTabPane',
  provide() {
    return {
      tabpane: this,
    }
  },
  props: {

  },
}
</script>

<style lang="scss" scoped type="text/scss">

</style>
