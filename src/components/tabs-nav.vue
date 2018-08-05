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

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-tabs-nav{
  transition: background-color .4s, color .4s;
  list-style: none;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  text-align: center;
  color: $light-text;
  cursor: pointer;
  i{
    margin-right: 5px;
    font-size: $large;
  }
}
.yu-tabs-nav.active{

  }
</style>
