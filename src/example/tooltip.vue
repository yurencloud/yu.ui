<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <yu-tooltip content="提示消息内容" show-arrow>
      <yu-button size="small" >上边</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow >
      <yu-button size="mini" >上边</yu-button>
    </yu-tooltip>
    <div class="sub-title" >方位变化(dark)</div>

    <yu-tooltip content="提示消息内容" show-arrow  placement="top">
      <yu-button>上左</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow placement="top-right">
      <yu-button>上右</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow  placement="bottom">
      <yu-button>下面</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow placement="bottom-left">
      <yu-button>下左</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow placement="bottom-right">
      <yu-button>下右</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容"  show-arrow placement="right">
      <yu-button>右侧</yu-button>
    </yu-tooltip>

    <div class="sub-title">方位变化(light)</div>
    <yu-tooltip content="提示消息内容" show-arrow effect="light" placement="top">
      <yu-button >上左</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow effect="light" placement="top-right">
      <yu-button >上右</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow effect="light" placement="bottom">
      <yu-button>下面</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow effect="light" placement="bottom-left">
      <yu-button>下左</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" show-arrow effect="light" placement="bottom-right">
      <yu-button>下右</yu-button>
    </yu-tooltip>
    <yu-tooltip content="提示消息内容" effect="light"  show-arrow placement="right">
      <yu-button>右侧</yu-button>
    </yu-tooltip>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTooltip from '../components/tooltip'
import YuButton from '../components/button'

export default {
  methods: {},
  components: {
    YuTooltip,
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
