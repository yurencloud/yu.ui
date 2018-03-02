<template>
  <div id="container" style="margin: 30px">
    <div class="title">按钮</div>
    <yu-button>默认</yu-button>
    <yu-button icon="icon-home" autoFocus>默认</yu-button>
    <yu-button type="primary" disabled>主要</yu-button>
    <yu-button type="success">成功</yu-button>
    <yu-button type="warming" array="">警告</yu-button>
    <yu-button type="danger">危险</yu-button>
    <yu-button type="info">信息</yu-button>
    <yu-button size="big">大按钮</yu-button>
    <yu-button size="small">小按钮</yu-button>
    <yu-button size="small" disabled>小按钮</yu-button>
    <yu-button shape="circle" icon="icon-user"/>
    <yu-buttons>
      <yu-button>1</yu-button>
      <yu-button type="danger">2</yu-button>
      <yu-button>3</yu-button>
    </yu-buttons>
    <yu-button loading type="primary">按钮</yu-button>

    <div class="title">单选框</div>
    <yu-radios ref="">
      <yu-radio @change="radioChange" checked label="1">选项1</yu-radio>
      <yu-radio @change="radioChange" label="2">选项2</yu-radio>
      <yu-radio @change="radioChange" label="3">选项3</yu-radio>
      <yu-radio disabled>选项4</yu-radio>
    </yu-radios>
    <yu-radio>选项2</yu-radio>
    <yu-radio>选项3</yu-radio>
    <div class="title">输入框</div>
    <yu-input placeholder="请输入用户名" @change="inputChange"/>
    <yu-input placeholder="请输入用户名" disabled/>
    <yu-input placeholder="请输入用户名" clearable/>
    <yu-input placeholder="请输入用户名" prefix="icon-user"/>
    <yu-input placeholder="请输入用户名" suffix="icon-user"/>
    <yu-input placeholder="请输入用户名" type="textarea"/>
    <yu-input placeholder="请输入用户名">
      <template slot="append">.com</template>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <template slot="prepend">https://</template>
    </yu-input>
    <div class="title">下拉选择</div>
    <yu-select text="动物">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
    </yu-select>
    <yu-select text="动物" overflow>
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
    </yu-select>
    <div class="title">计数器</div>
    <yu-counter/>
    <yu-counter disabled/>
    <yu-counter :step=5 />
    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import YuButton from '../components/button';
import YuButtons from '../components/buttons';
import YuInput from '../components/input';
import YuOption from '../components/option';
import YuRadio from '../components/radio';
import YuRadios from '../components/radios';
import YuSelect from '../components/select';
import YuCounter from '../components/counter';


export default {
  name: 'ViewContainer',
  methods: {
    radioChange(value) {
      console.log(value);
    },
    inputChange(value) {
      console.log(value);
    },
  },
  components: {
    YuButton,
    YuButtons,
    YuInput,
    YuOption,
    YuRadio,
    YuRadios,
    YuSelect,
    YuCounter,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  .title{
    color:$light-text;
    border-bottom: 1px solid $border;
    padding: 14px 0;
    margin: 20px 0;
  }
</style>
