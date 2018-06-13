<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">Switch开关</div>
    <div class="sub-title">普通用法</div>
    <yu-switch on/>
    <yu-switch v-model="value1"/>

    <div class="sub-title">其他颜色(开有多种颜色，关只有一种颜色)</div>
    <yu-switch on type="danger"/>
    <yu-switch on type="success"/>
    <yu-switch on type="info"/>
    <yu-switch on type="warning"/>

    <div class="sub-title">标签文字</div>
    <yu-switch on label="关灯"/>
    <yu-switch on after label="关灯">></yu-switch>

    <div class="sub-title">标签文字</div>
    <yu-switch disabled label="关灯"/>
    <yu-switch on after label="关灯" disabled>></yu-switch>

    <div class="sub-title">激活和非激活时的文字</div>
    <yu-switch on activeLabel="开灯" inactiveLabel="关灯"/>
    <yu-switch inactiveLabel="关灯" activeLabel="开灯">></yu-switch>

    {{value1}}

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSwitch from '../components/switch'

export default {
  data() {
    return {
      value1: true,
    }
  },
  methods: {},
  components: {
    YuSwitch,
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
