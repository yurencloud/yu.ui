<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">多选框</div>

    <div class="sub-title">基础选项</div>
    <yu-checkboxs v-model="value1">
      <yu-checkbox  checked label="1">苹果</yu-checkbox>
      <yu-checkbox  label="2">西瓜</yu-checkbox>
      <yu-checkbox  label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="sub-title">基础选项</div>
    <yu-checkboxs v-model="value2" showControl>
      <yu-checkbox  checked label="1">苹果</yu-checkbox>
      <yu-checkbox  label="2">西瓜</yu-checkbox>
      <yu-checkbox  label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="sub-title">禁用状态</div>
    <yu-checkbox  checked label="1" disabled>苹果</yu-checkbox>
    <yu-checkbox  label="2" disabled>香蕉</yu-checkbox>

    <div class="sub-title">垂直方向</div>
    <yu-checkboxs v-model="value3">
      <yu-checkbox  vertical checked label="1">苹果</yu-checkbox>
      <yu-checkbox  vertical label="2">西瓜</yu-checkbox>
      <yu-checkbox  vertical label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="sub-title">v-model</div>

    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>
  </div>
</template>
<script>
import YuButton from '../components/button'
import YuButtons from '../components/buttons'
import YuCheckbox from '../components/checkbox'
import YuCheckboxs from '../components/checkboxs'

export default {
  data() {
    return {
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      value5: [],
    }
  },
  components: {
    YuButton,
    YuButtons,
    YuCheckbox,
    YuCheckboxs,
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
