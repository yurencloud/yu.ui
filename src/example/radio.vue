<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">单选框</div>

    <div class="sub-title">基础选项</div>
    <yu-radios>
      <yu-radio @change="radioChange" checked label="1">苹果</yu-radio>
      <yu-radio @change="radioChange" label="2">香蕉</yu-radio>
      <yu-radio @change="radioChange" label="3">桃子</yu-radio>
    </yu-radios>
    <div class="sub-title">禁用选项</div>
    <yu-radio checked disabled>桔子</yu-radio>
    <yu-radio disabled>桔子</yu-radio>
    <div class="sub-title">垂直方向</div>
    <yu-radios>
      <yu-radio @change="radioChange" vertical checked label="1">苹果</yu-radio>
      <yu-radio @change="radioChange" vertical label="2">香蕉</yu-radio>
      <yu-radio @change="radioChange" vertical label="3">桃子</yu-radio>
    </yu-radios>

    <div class="sub-title">可以多选</div>
    <yu-radio>手机</yu-radio>
    <yu-radio>电脑</yu-radio>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button';
import YuButtons from '../components/buttons';
import YuRadio from '../components/radio';
import YuRadios from '../components/radios';

export default {
  methods: {
    radioChange(value) {
      console.log(value)
    },
  },
  components: {
    YuButton,
    YuButtons,
    YuRadio,
    YuRadios,
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
