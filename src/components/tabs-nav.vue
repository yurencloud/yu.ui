<template>
  <li class="yu-tabs-nav">
    <slot/>
    <i class="iconfont icon-close"
       v-if="rootTabs.closeable"></i>
  </li>
</template>

<script>
export default {
  name: 'YuTabsNav',
  inject: ['rootTabs'],
  methods: {
  },
}
</script>
