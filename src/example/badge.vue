<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title" style="margin-top: 100px">标记</div>
    <yu-badge value="99">
      <yu-button type="small">评价</yu-button>
    </yu-badge>
    <yu-badge value="99" :max="10">
      <yu-button type="small">评价</yu-button>
    </yu-badge>
    <yu-badge value="New">
      <yu-button type="small">评价</yu-button>
    </yu-badge>
    <yu-badge value="Hot">
      <yu-button>评价</yu-button>
    </yu-badge>
    <yu-badge is-dot>
      数据查询
    </yu-badge>
    <yu-badge is-dot hidden>
      <yu-button>评价</yu-button>
    </yu-badge>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuBadge from '../components/badge'
import YuButton from '../components/button'

export default {
  methods: {},
  components: {
    YuBadge,
    YuButton,
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
