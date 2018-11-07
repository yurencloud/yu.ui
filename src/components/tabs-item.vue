<template>
<div class="yu-tabs-item" :style="{height:rootTabs.tabItemHeight}">
    <slot/>
</div>
</template>
<script>
export default {
  name: 'YuTabsItem',
  inject: ['rootTabs'],
  props: {
    label: String,
  },
}
</script>
