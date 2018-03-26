<template>
<div class="yu-tabs-item">
    <slot/>
</div>
</template>
<script>
export default {
  name: 'YuTabsItem',
  props: {
    label: String,
  },
}
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-tabs-item{
    display: none;
    width: 100%;
    height: 200px;
    float: left;
  }
  .yu-tabs-item.active{
    display: block;
}
</style>
