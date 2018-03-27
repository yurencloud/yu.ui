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
  mounted() {
    // console.log(this.rootTabs)
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-tabs-nav{
  list-style: none;
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  box-sizing: border-box;
  color: $light-text;
  i{
    margin-right: 5px;
    font-size: $large;
  }
}
.yu-tabs-nav.active{
  border-bottom: 2px solid #409EFF;
  }
</style>
