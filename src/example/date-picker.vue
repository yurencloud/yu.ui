<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">日期选择器</div>
    <div class="sub-title">普通用法</div>
    <yu-date-picker v-model="value1"/>

    <div class="sub-title">获取月份</div>
    <yu-date-picker type="month" v-model="value2"/>

    <div class="sub-title">获取年份</div>
    <yu-date-picker type="year" v-model="value3"/>

    <div class="sub-title">最大日期和最小日期</div>
    <yu-date-picker min-date="2018-05-15" v-model="value4"/>
    <yu-date-picker max-date="2018-05-15" v-model="value5"/>

    <div class="sub-title">v-model</div>
    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuDatePicker from '../components/date-picker'
import YuButton from '../components/button'

export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    }
  },
  methods: {},
  components: {
    YuDatePicker,
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
