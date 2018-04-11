<template>
<div class="yu-popover">
  <div class="popover-trigger">
    <slot name="trigger"/>
  </div>
  <div class="popover-content">
    <slot name="content"/>
    <div class="popover-title">{{title}}</div>
    <div class="content">{{content}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'YuPopover',
  props: {
    title: String,
    content: String,
  },
}
</script>

<style lang="scss" type="text/scss" scoped>

</style>
