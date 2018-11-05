<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <yu-dropdown>
      <yu-button>更多菜单</yu-button>
      <yu-dropdown-menu>
        <yu-dropdown-item command="a">狮子头狮子头狮子头</yu-dropdown-item>
        <yu-dropdown-item command="b">黄金糕</yu-dropdown-item>
        <yu-dropdown-item command="c">螺蛳粉</yu-dropdown-item>
        <yu-dropdown-item command="d" :disabled="true">臭豆腐</yu-dropdown-item>
        <yu-dropdown-item command="e" divided>铁板烧</yu-dropdown-item>
      </yu-dropdown-menu>
    </yu-dropdown>

    <yu-dropdown trigger="click">
      <span>下拉菜单 <i class="iconfont icon-angle-down"></i></span>
      <yu-dropdown-menu>
        <yu-dropdown-item command="a">狮子头</yu-dropdown-item>
        <yu-dropdown-item command="b">黄金糕</yu-dropdown-item>
        <yu-dropdown-item command="c">螺蛳粉</yu-dropdown-item>
        <yu-dropdown-item command="d" :disabled="true">臭豆腐</yu-dropdown-item>
        <yu-dropdown-item command="e" divided>铁板烧</yu-dropdown-item>
      </yu-dropdown-menu>
    </yu-dropdown>

    <yu-dropdown>
      <span>下拉菜单 <i class="iconfont icon-angle-down"></i></span>
      <yu-dropdown-menu>
        <yu-dropdown-item command="a">狮子头</yu-dropdown-item>
        <yu-dropdown-item command="b">黄金糕</yu-dropdown-item>
        <yu-dropdown-item command="c">螺蛳粉</yu-dropdown-item>
        <yu-dropdown-item command="d" :disabled="true">臭豆腐</yu-dropdown-item>
        <yu-dropdown-item command="e" divided>铁板烧</yu-dropdown-item>
      </yu-dropdown-menu>
    </yu-dropdown>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuDropdown from '../components/dropdown'
import YuButton from '../components/button'
import YuDropdownMenu from '../components/dropdown-menu'
import YuDropdownItem from '../components/dropdown-item'

export default {
  methods: {},
  components: {
    YuButton,
    YuDropdown,
    YuDropdownMenu,
    YuDropdownItem,
  },
}
</script>
<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .title {
    color: $text;
    padding: 14px 0;
    margin: 20px 0;
    border-bottom: 1px solid $border;
  }

  .sub-title {
    color: $text;
    padding: 0 8px;
    margin: 20px 0;
    border-left: 4px solid $primary;
  }
</style>
