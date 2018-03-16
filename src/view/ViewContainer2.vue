<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI---2</h2>
    <div class="sub-title">步骤条----基础用法</div>
    <yu-steps :active="active2">
      <yu-step title="步骤一"/>
      <yu-step title="步骤二"/>
      <yu-step title="步骤三"/>
    </yu-steps>
    <yu-button @click="base">下一步</yu-button>
    <div class="sub-title">步骤条----有描述</div>
    <yu-steps :active="active1">
      <yu-step title="步骤一" description="这是步骤条中的第一步,哈哈哈哈"/>
      <yu-step title="步骤二" description="这是步骤条中的第二步,哈哈哈哈"/>
      <yu-step title="步骤三" description="这是步骤条中的第三步,哈哈哈哈"/>
      <yu-step title="步骤四" description="这是步骤条中的第三步,哈哈哈哈"/>
      <yu-step title="步骤五" description="这是步骤条中的第三步,哈哈哈哈"/>
    </yu-steps>
    <yu-button @click="next">下一步</yu-button>
<div style="height: 20px;width: 100%"></div>
    <div class="sub-title">步骤条---无描述,带有状态</div>
    <yu-steps :active="1">
      <yu-step title="完成"/>
      <yu-step title="进行中"/>
      <yu-step title="步骤三"/>
    </yu-steps>
    <!--<div class="sub-title">步骤条-&#45;&#45;有图标</div>-->
    <yu-steps :active="1" is-column="column">
      <yu-step icon="icon-edit" title="编辑"/>
      <yu-step icon="icon-upload" title="上传"/>
      <yu-step icon="icon-check-" title="完成" status="success"/>
    </yu-steps>
    <div class="sub-title" style="margin-top: 50px">文字提示框---按钮大小变化</div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="TOP 这是位于顶部的" placement="top">
       <yu-button size="small" type="primary">上边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="TOP 这是位于顶部的" placement="top">
        <yu-button size="mini" type="success">上边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="TOP 这是位于顶部的" placement="top">
        <yu-button type="warming">上边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="sub-title" style="margin-top: 100px">文字提示框---方位变化</div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="TOP 这是位于顶部的" placement="top-left">
        <yu-button type="warming">上左</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="TOP 这是位于顶部的" placement="top-right">
        <yu-button type="warming">上右</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="35" placement="top">
        <span style="width: 20px;height:20px;display: inline-block;background-color:pink;box-sizing: border-box;border-radius: 50%"></span>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈" placement="left">
        <yu-button type="warming">左侧</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈" placement="left">
        <yu-button type="warming" size="mini">左侧</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈" placement="right">
        <yu-button type="warming">右侧</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈" placement="right">
        <yu-button type="warming" size="small">右侧</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈" placement="bottom">
        <yu-button type="warming" size="small">下边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈" placement="bottom">
        <yu-button type="warming" >da下边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈哈哈哈哈哈" placement="bottom-left">
        <yu-button type="warming" >da下边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="哈哈哈哈哈哈哈哈哈哈哈" placement="bottom-right">
        <yu-button type="warming" >da下边</yu-button>
      </yu-tool-tip>
    </div>
    <div style="height: 200px;width: 30px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';
import YuSteps from '../components/steps';
import YuStep from '../components/step';
import YuToolTip from '../components/tooltip';

export default {
  name: 'ViewContainer',
  data() {
    return {
      active1: 0,
      active2: 0,
    }
  },
  methods: {
    next() {
      this.active1 += 1;
      if (this.active1 >= 5) this.active1 = 0;
    },
    base() {
      this.active2 += 1;
      if (this.active2 >= 3) this.active2 = 0;
    },
  },
  components: {
    YuButton,
    YuSteps,
    YuStep,
    YuToolTip,
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
  .dropdown-list{
    .list-content{
      display: inline-block;
      float: left;
      margin-right: 50px;
    }
  }
  .box{
    float: left;
  }
</style>
