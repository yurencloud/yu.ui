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
