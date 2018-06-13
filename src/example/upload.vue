<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">上传文件</div>
    <div class="sub-title">普通用法 上传单文件</div>
    <yu-upload url="/api/upload">点击上传单文件</yu-upload>

    <div class="sub-title">普通用法 上传多文件</div>
    <yu-upload url="/api/uploads" multiple="multiple">点击上传多文件</yu-upload>

    <div class="sub-title">显示上传列表和状态</div>
    <yu-upload url="/api/uploads" multiple="multiple" list>点击上传多文件</yu-upload>
    <yu-upload url="/api/upload" list>点击上传单文件</yu-upload>

    <div class="sub-title">显示多种文件图标</div>
    <div style="margin-bottom: 20px;">
      <i class="iconfont icon-f-file"></i>
      <i class="iconfont icon-f-word"></i>
      <i class="iconfont icon-f-pdf"></i>
      <i class="iconfont icon-f-excel"></i>
      <i class="iconfont icon-f-image"></i>
      <i class="iconfont icon-f-archive"></i>
      <i class="iconfont icon-f-powerpoint"></i>
      <i class="iconfont icon-f-audio"></i>
    </div>
    <yu-upload url="/api/uploads" multiple="multiple" list multiIcon>点击上传多文件</yu-upload>

    <div class="sub-title">上传图片并显示图片</div>
    <yu-upload url="/api/upload" type="image" />

    <div class="sub-title">限制上传文件大小</div>
    <yu-upload url="/api/upload" :maxSize="1024" >点击上传</yu-upload>

    <div class="sub-title">上传图片显示缩略图</div>
    <yu-upload url="/api/uploads" multiple previewList list >点击上传</yu-upload>

    <div class="sub-title">自定义触发按钮</div>
    <yu-upload url="/api/uploads" type="defined" >
      <yu-button shape="circle" icon="icon-upload" type="danger" />
    </yu-upload>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuUpload from '../components/upload'
import YuButton from '../components/button'

export default {
  methods: {},
  components: {
    YuUpload,
    YuButton,
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
