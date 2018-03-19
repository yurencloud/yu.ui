<template>
  <div class="yu-tabs">
    <ul class="tabs-nav">
      <slot name="nav"/>
    </ul>
    <div class="tabs-item">
      <slot name="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuTabs',
}
</script>

<style lang="scss" type="text/scss" scoped>

</style>
