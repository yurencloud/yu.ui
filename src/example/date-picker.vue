<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">日期选择器</div>
    <div class="sub-title">普通用法</div>
    <yu-date-picker/>

    <div class="sub-title">获取月份</div>
    <yu-date-picker type="month"/>

    <div class="sub-title">获取年份</div>
    <yu-date-picker type="year"/>

    <div class="sub-title">最大日期和最小日期</div>
    <yu-date-picker min-date="2018-05-15"/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuDatePicker from '../components/date-picker';

export default {
  methods: {},
  components: {
    YuDatePicker,
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
