<template>
  <ul  class="yu-navmenu">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'YuNavMenu',
  props: {

  },
}
</script>

<style lang="scss" scoped type="text/scss">
@import "../assets/css/varible";
@import "../assets/css/function";
  /*水平方向*/
.yu-navmenu{
  width: 100%;
  padding-left:55px;
  height: 60px;
  border-bottom: 1px solid $light-border;
}

  /*垂直方向*/

</style>
