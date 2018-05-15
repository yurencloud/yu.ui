<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">计数器</div>
    <div class="sub-title">基础用法</div>
    <yu-counter/>
    <div class="sub-title">最大值，最小值</div>
    <yu-counter :max="5" :step="3"/>
    <yu-counter :min="10"/>

    <div class="sub-title">显示计量单位，元，%等</div>
    <yu-counter value-unit="元" :min="0"/>
    <yu-counter value-unit="元" :min="0" :max="10"/>

    <div class="sub-title">禁用状态</div>
    <yu-counter disabled/>
    <div class="sub-title">步数间隔</div>
    <yu-counter :step="5" />
    <div class="sub-title">尺寸大小</div>
    <yu-counter :step="5" size="medium "/>
    <yu-counter :step="5" size="small"/>
    <yu-counter :step="5" size="mini"/>

    <div class="sub-title">单边控制样式</div>
    <yu-counter-side :step=5 size="medium "/>

    <div class="sub-title">最大值，最小值</div>
    <yu-counter-side :max="5" :step="3"/>
    <yu-counter-side :min="10"/>

    <div class="sub-title">显示计量单位，元，%等</div>
    <yu-counter-side value-unit="元" :min="0"/>
    <yu-counter-side value-unit="元" :min="0" :max="10"/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuCounter from '../components/counter';
import YuCounterSide from '../components/counter-side';

export default {
  methods: {},
  components: {
    YuCounter,
    YuCounterSide,
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
