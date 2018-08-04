<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">步骤条</div>
    <div class="sub-title">基础用法</div>
    <yu-steps :active="active2">
      <yu-step title="步骤一"/>
      <yu-step title="步骤二"/>
      <yu-step title="步骤三"/>
    </yu-steps>
    <yu-button @click="base">下一步</yu-button>
    <pre v-highlightjs="code1"><code class="html" ></code></pre>
    <div class="sub-title">有描述的步骤条</div>
    <yu-steps :active="active1">
      <yu-step title="步骤一" description="峨眉高出西极天，罗浮直与南溟连。"/>
      <yu-step title="步骤二" description="名公绎思挥彩笔，驱山走海置眼前。"/>
      <yu-step title="步骤三" description="满堂空翠如可扫，赤城霞气苍梧烟。"/>
      <yu-step title="步骤四" description="洞庭潇湘意渺绵，三江七泽情洄沿。"/>
      <yu-step title="步骤五" description="惊涛汹涌向何处，孤舟一去迷归年。"/>
    </yu-steps>
    <yu-button @click="next">下一步</yu-button>
    <pre v-highlightjs="code2"><code class="html" ></code></pre>
    <div class="sub-title">带有状态的步骤条</div>
    <yu-steps :active="2">
      <yu-step title="完成"/>
      <yu-step title="进行中"/>
      <yu-step title="步骤三"/>
    </yu-steps>
    <pre v-highlightjs="code3"><code class="html" ></code></pre>
    <div class="sub-title">带图标的步骤条</div>
    <yu-steps :active="2" >
      <yu-step icon="icon-edit" title="编辑"/>
      <yu-step icon="icon-upload" title="上传"/>
      <yu-step icon="icon-check-" title="完成"/>
    </yu-steps>
    <pre v-highlightjs="code4"><code class="html" ></code></pre>
    <div class="sub-title">居中的步骤条</div>
    <yu-steps center>
      <yu-step title="步骤一" description="征帆不动亦不旋，飘如随风落天边。"/>
      <yu-step title="步骤二" description="心摇目断兴难尽，几时可到三山巅。"/>
      <yu-step title="步骤三" description="西峰峥嵘喷流泉，横石蹙水波潺湲。"/>
      <yu-step title="步骤四" description="东崖合沓蔽轻雾，深林杂树空芊绵。"/>
      <yu-step title="步骤五" description="此中冥昧失昼夜，隐几寂听无鸣蝉。"/>
    </yu-steps>
    <pre v-highlightjs="code5"><code class="html" ></code></pre>
    <div class="sub-title">简洁风格的步骤条</div>
    <div style="width: 500px">
      <yu-steps simple>
        <yu-step icon="icon-edit" title="编辑" status="success"/>
        <yu-step icon="icon-upload" title="上传" status="success"/>
        <yu-step icon="icon-check-" title="完成" status="error"/>
      </yu-steps>
    </div>
    <pre v-highlightjs="code6"><code class="html" ></code></pre>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSteps from '../components/steps'
import YuStep from '../components/step'

export default {
  methods: {},
  components: {
    YuSteps,
    YuStep,
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
