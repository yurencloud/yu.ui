<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">tag 标签</div>
    <div class="sub-title">普通用法</div>
    <yu-tag>标签一</yu-tag>
    <yu-tag type="info">标签一</yu-tag>
    <yu-tag type="success">标签一</yu-tag>
    <yu-tag type="warning">标签一</yu-tag>
    <yu-tag type="error">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---可关闭</div>
    <yu-tag closable>标签一</yu-tag>
    <yu-tag closable type="info">标签一</yu-tag>
    <yu-tag closable type="success">标签一</yu-tag>
    <yu-tag closable type="warning">标签一</yu-tag>
    <yu-tag closable type="error">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---不同尺寸的</div>
    <yu-tag closable>标签一</yu-tag>
    <yu-tag closable type="info" size="medium">标签一</yu-tag>
    <yu-tag closable type="success" size="small">标签一</yu-tag>
    <yu-tag closable type="warning" size="mini">标签一</yu-tag>
    <yu-tag closable type="error">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---没有边框的</div>
    <yu-tag closable hit>标签一</yu-tag>
    <yu-tag closable hit type="info" size="medium">标签一</yu-tag>
    <yu-tag closable hit type="success" size="small">标签一</yu-tag>
    <yu-tag closable hit type="warning" size="mini">标签一</yu-tag>
    <yu-tag closable hit type="error" @close="handleClose">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---关闭时出现动画----可删除</div>
    <yu-tag v-bind:key="index" v-for="(index, item) in tags"
            closable
            :disable-transitions="false"
            @close="Close(item)">{{item}}</yu-tag>
    <yu-tag closable hit type="error" @close="handleClose" colo="pink">标签一</yu-tag>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTag from '../components/tag';

export default {
  methods: {},
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
