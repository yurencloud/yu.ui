<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">等级</div>
    <div class="sub-title" >普通用法</div>
    <yu-rate v-model="value1"/>

    <div class="sub-title">显示label</div>
    <yu-rate labeled/>

    <div class="sub-title">自定义label</div>
    <yu-rate :label="label2" labeled/>

    <div class="sub-title">设置默认值，并只读</div>
    <yu-rate readOnly :defaultValue="3"/>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuRate from '../components/rate'

export default {
  data() {
    return {
      value1: 0,
      label2: ['极差2', '失望2', '一般2', '满意2', '惊喜2'],
    }
  },
  methods: {},
  components: {
    YuRate,
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
