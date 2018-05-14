<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">按钮</div>

    <div class="sub-title">基础用法</div>
    <yu-button>默认按钮</yu-button>
    <yu-button type="primary">主要按钮</yu-button>
    <yu-button type="success">成功按钮</yu-button>
    <yu-button type="warning">警告按钮</yu-button>
    <yu-button type="danger">危险按钮</yu-button>
    <yu-button type="info">信息按钮</yu-button>
    <br/>
    <yu-button plain>朴素按钮</yu-button>
    <yu-button type="primary" plain>主要按钮</yu-button>
    <yu-button type="success" plain>成功按钮</yu-button>
    <yu-button type="warning" plain>警告按钮</yu-button>
    <yu-button type="danger" plain>危险按钮</yu-button>
    <yu-button type="info" plain>信息按钮</yu-button>

    <div class="sub-title">图标按钮</div>
    <yu-button icon="icon-edit" type="primary"/>
    <yu-button icon="icon-accessory" type="primary"/>
    <yu-button icon="icon-trash" type="primary"/>
    <yu-button icon="icon-search-o" type="primary">搜索</yu-button>
    <yu-button icon="icon-upload" type="primary">上传</yu-button>

    <div class="sub-title">按钮组</div>
    <yu-buttons>
      <yu-button type="primary">
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button>
      <yu-button type="primary">
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-buttons>
    <yu-buttons>
      <yu-button>
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button>
      <yu-button>
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-buttons>
    <yu-buttons>
      <yu-button plain>
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button>
      <yu-button plain>
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-buttons>
    <yu-buttons>
      <yu-button>
        1
      </yu-button>
      <yu-button>
        2
      </yu-button>
      <yu-button>
        3
      </yu-button>
      <yu-button>
        4
      </yu-button>
    </yu-buttons>
    <yu-buttons>
      <yu-button icon="icon-edit" type="primary"/>
      <yu-button icon="icon-accessory" type="primary"/>
      <yu-button icon="icon-trash" type="primary"/>
    </yu-buttons>


    <div class="sub-title">禁用状态</div>
    <yu-button disabled>默认按钮</yu-button>
    <yu-button type="primary" disabled>主要按钮</yu-button>
    <yu-button type="success" disabled>成功按钮</yu-button>
    <yu-button type="warning" disabled>警告按钮</yu-button>
    <yu-button type="danger" disabled>危险按钮</yu-button>
    <yu-button type="info" disabled>信息按钮</yu-button>
    <br/>
    <yu-button plain disabled>朴素按钮</yu-button>
    <yu-button type="primary" plain disabled>主要按钮</yu-button>
    <yu-button type="success" plain disabled>成功按钮</yu-button>
    <yu-button type="warning" plain disabled>警告按钮</yu-button>
    <yu-button type="danger" plain disabled>危险按钮</yu-button>
    <yu-button type="info" plain disabled>信息按钮</yu-button>

    <div class="sub-title">加载中</div>
    <yu-button loading type="primary">按钮</yu-button>

    <div class="sub-title">不同尺寸</div>
    <yu-button type="primary">正常按钮</yu-button>
    <yu-button type="primary" size="medium">中等按钮</yu-button>
    <yu-button type="primary" size="small">小型按钮</yu-button>
    <yu-button type="primary" size="mini">超小按钮</yu-button>

    <div class="sub-title">圆形按钮</div>
    <yu-button shape="circle" icon="icon-user"/>
    <yu-button shape="circle" icon="icon-user" size="medium"/>
    <yu-button shape="circle" icon="icon-user" size="small"/>
    <yu-button shape="circle" icon="icon-user" size="mini"/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button';
import YuButtons from '../components/buttons';

export default {
  methods: {},
  components: {
    YuButton,
    YuButtons,
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
