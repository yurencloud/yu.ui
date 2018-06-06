<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title">普通用法</div>
    <yu-button @click="click1">点击</yu-button>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuMessageBox from '../components/message-box';
import YuButton from '../components/button';

export default {
  data() {
    return {
      messageBox: {
        confirm: () => ({
          messagePopverType: 'success',
          messagePopverText: '删除成功',
        }),
        cancel: () => ({
          messagePopverType: 'info',
          messagePopverText: '已取消删除',
        }),
      },
      messageBoxEvent: {
        confirm: () => ({
          messagePopverType: 'success',
          messagePopverText: '您输入得邮箱地址为:',
        }),
        cancel: () => ({
          messagePopverType: 'info',
          messagePopverText: '已取消删除',
        }),

      },
    }
  },
  methods: {
    click1() {
      this.$alert('您输入得邮箱地址', '标题')
    },
  },
  components: {
    YuMessageBox,
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
