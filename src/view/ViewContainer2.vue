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
  </div>
</template>

<script>
  import 'whatwg-fetch';
  import YuButton from '../components/button';
  import YuSteps from '../components/steps';
  import YuStep from '../components/step';
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
</style>
