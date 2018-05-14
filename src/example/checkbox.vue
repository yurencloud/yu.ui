<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">多选框</div>

    <div class="sub-title">基础选项</div>
    <yu-checkboxs>
      <yu-checkbox @change="checkboxChange" checked label="1">苹果</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="2">西瓜</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="sub-title">基础选项</div>
    <yu-checkboxs selectAll>
      <yu-checkbox @change="checkboxChange" checked label="1">苹果</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="2">西瓜</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="sub-title">禁用状态</div>
    <yu-checkbox @change="checkboxChange" checked label="1" disabled>苹果</yu-checkbox>
    <yu-checkbox @change="checkboxChange" label="2" disabled>香蕉</yu-checkbox>

    <div class="sub-title">垂直方向</div>
    <yu-checkboxs>
      <yu-checkbox @change="checkboxChange" vertical checked label="1">苹果</yu-checkbox>
      <yu-checkbox @change="checkboxChange" vertical label="2">西瓜</yu-checkbox>
      <yu-checkbox @change="checkboxChange" vertical label="3">桃子</yu-checkbox>
    </yu-checkboxs>

  </div>
</template>
<script>
import YuButton from '../components/button';
import YuButtons from '../components/buttons';
import YuCheckbox from '../components/checkbox';
import YuCheckboxs from '../components/checkboxs';

export default {
  data() {
    return {
      activeIndex: null,
      options: [
        { value: 1, label: '北京' },
        { value: 2, label: '上海' },
        { value: 3, label: '广州' },
      ],
    }
  },
  methods: {
    checkboxChange(value) {
      // console.log(value)
    },
    clickButton(item, index) {
      this.activeIndex = index;
      if (this.$parent.isRadios) {
        this.$parent.handleChange(this.value, this.isChecked);
      }
    },
  },
  components: {
    YuButton,
    YuButtons,
    YuCheckbox,
    YuCheckboxs,
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
