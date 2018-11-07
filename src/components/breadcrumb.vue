<template>
  <div class="yu-breadcrumb">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuBreadcrumb',
  provide() {
    return {
      rootBreadcrumb: this,
    }
  },
  props: {
    separator: {
      type: String,
      default: '/',
    },
    iconSeparator: String,
  },
}
</script>
