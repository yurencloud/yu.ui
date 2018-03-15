<template>
    <ul class="yu-dropdown-menu">
      <slot/>
    </ul>
</template>

<script>
export default {
  name: 'YuDropdownMenu',
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-dropdown-menu{
  box-shadow: $box-shadow;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
  max-height: 0;
  transition: all .3s linear;
  padding: 0;
}
</style>
