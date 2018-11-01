<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <yu-collapse>
      <yu-collapse-item title="蜀山行">
        <div>人生几何春已夏</div>
        <div>空山新雨后,天气晚来秋</div>
        <div>欲把西湖比西子,淡妆浓抹总相宜</div>
        <div>不见高堂明镜悲白发，朝如青丝暮成雪</div>
      </yu-collapse-item>
      <yu-collapse-item title="蜀山行">
        <div>劝君更尽一杯酒,西出阳关无故人</div>
      </yu-collapse-item>
    </yu-collapse>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuCollapse from '../components/collapse'
import YuCollapseItem from '../components/collapse-item'

export default {
  methods: {},
  components: {
    YuCollapse,
    YuCollapseItem,
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
