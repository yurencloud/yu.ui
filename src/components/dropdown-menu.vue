<template>
    <div class="yu-dropdown-menu" v-if="rootDrop.visible">
      <div class="dropdown-angle"></div>
      <ul class="menu-ul">
        <slot/>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'YuDropdownMenu',
  inject: ['rootDrop'],
  methods: {
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-dropdown-menu{
    background-color: #fff;
    box-shadow: $box-shadow;
    max-width: 100px;
    box-sizing: border-box;
    position: absolute;
    z-index: 200;
    margin-top: 10px;
    .menu-ul{
      background-color: #fff;
      padding: 0;
      margin: 5px 0;
    }
    .dropdown-angle{
      width: 8px;
      height: 8px;
      display: inline-block;
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: -5px;
      border-top: 1px solid $light-border;
      border-right: 1px solid $light-border;
      transform: translateX(-50%) rotate(-45deg);
      z-index: 0;
    }
  }

</style>
