<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">slider滑块</div>
    <div class="sub-title">普通用法</div>
    <yu-slider/>

    <div class="sub-title">显示计量单位，元，%等</div>
    <yu-slider value-unit="元"/>

    <div class="sub-title">定义初始值</div>
    <yu-slider :defaultValue=50 />

    <div class="sub-title">禁用</div>
    <yu-slider :defaultValue=50 disabled/>

    <div class="sub-title">步长</div>
    <yu-slider :defaultValue=50 :step=10 />

    <div class="sub-title">步长显示锚点</div>
    <yu-slider :defaultValue=50 :step=10 point />

    <div class="sub-title">修改总量(可为任意整数)</div>
    <yu-slider :defaultValue=500  :total=1000 />

    <div class="sub-title">修改长度</div>
    <yu-slider :width="800" />
    <yu-slider :width="80" />

    <div class="sub-title">最大值最小值</div>
    <yu-slider :min=50 :max=80 :default-value="50"/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSlider from '../components/slider';

export default {
  methods: {},
  components: {
    YuSlider,
  },
};
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
