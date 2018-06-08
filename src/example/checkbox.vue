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

    <div class="sub-title">v-model</div>
    <yu-checkboxs v-model="value">
      <yu-checkbox @change="checkboxChange" label="1" >苹果</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="2" >西瓜</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="3" @input="inputhand" >桃子</yu-checkbox>
    </yu-checkboxs>
    <yu-button @click="handleClick" style="margin-top: 20px;">改变value</yu-button>
    <div style="padding:20px 0;">{{value}}</div>

    <yu-checkbox v-model="value2" label="2">香蕉</yu-checkbox>
    <yu-button @click="value2=!value2" style="display: block;margin-top: 20px;">改变value</yu-button>
    <div style="padding:20px 0;">{{value2}}</div>
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
      value: ['1', '2'],
      value2: true,
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
    inputhand(value){
      console.log(value)
    },
    handleClick() {
      this.value = ['1','2','3']
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
