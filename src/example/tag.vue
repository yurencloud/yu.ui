<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">tag 标签</div>
    <div class="sub-title">普通用法</div>
    <yu-tag>标签</yu-tag>

    <div class="sub-title">可关闭</div>
    <yu-tag closable>标签</yu-tag>

    <div class="sub-title">不同尺寸</div>
    <yu-tag closable size="normal">标签</yu-tag>
    <yu-tag closable size="medium">标签</yu-tag>
    <yu-tag closable size="small">标签</yu-tag>
    <yu-tag closable size="mini">标签</yu-tag>

    <div class="sub-title">去除边框</div>
    <yu-tag closable clearBorder>标签</yu-tag>

    <div class="sub-title">不同颜色</div>
    <yu-tag closable type="primary">标签</yu-tag>
    <yu-tag closable type="info">标签</yu-tag>
    <yu-tag closable type="success">标签</yu-tag>
    <yu-tag closable type="warning">标签</yu-tag>
    <yu-tag closable type="danger">标签</yu-tag>

    <div class="sub-title">去除动画</div>
    <yu-tag disableTransitions>标签</yu-tag>
    <yu-tag closable clearBorder type="danger" @close="handleClose" colo="pink">标签</yu-tag>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTag from '../components/tag';

export default {
  data() {
    return {
      tags: ['标签', '标签二', '标签三'],
    }
  },
  methods: {
    handleClose() {
      alert('哈哈哈哈哈哈')
    },
  },
  components: {
    YuTag,
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
