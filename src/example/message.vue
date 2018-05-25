<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title">普通用法</div>
    <yu-button @click="click1">点击</yu-button>

    <div class="sub-title">自定义图标</div>
    <yu-button @click="click2">点击</yu-button>

    <div class="sub-title">自定义HTML片段</div>
    <yu-button @click="click3">点击</yu-button>

    <div class="sub-title">居中</div>
    <yu-button @click="click4">点击</yu-button>

    <div class="sub-title">不同类型消息</div>
    <yu-button @click="click5">警告</yu-button>
    <yu-button @click="click7">成功</yu-button>
    <yu-button @click="click8">错误</yu-button>
    <yu-button @click="click9">主要</yu-button>
    <yu-button @click="click10">信息</yu-button>


    <div class="sub-title">显示关闭图标</div>
    <yu-button @click="click6">点击</yu-button>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuMessage from '../components/message';
import YuButton from '../components/button';

export default {
  methods: {
    click1() {
      this.$message('hello world');
    },
    click2() {
      this.$message({ message: 'hello world', iconClass: 'icon-apple1', type: 'success' });
    },
    click3() {
      this.$message({ message: '<h1>哈哈哈哈</h1>', type: 'success', dangerouslyUseHTMLString: true });
    },
    click4() {
      this.$message({ message: '居中', center: true });
    },
    click5() {
      this.$message({ message: '消息', type: 'warning' });
    },
    click6() {
      this.$message({ message: '可关闭', showClose: true });
    },
    click7() {
      this.$message.success('消息');
    },
    click8() {
      this.$message.danger('消息');
    },
    click9() {
      this.$message.primary('消息');
    },
    click10() {
      this.$message.info('消息');
    },
  },
  components: {
    YuMessage,
    YuButton,
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
