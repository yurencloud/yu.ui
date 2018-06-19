<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">Switch开关</div>
    <div class="sub-title">普通用法</div>
    <yu-switch on v-model="value1"/>
    <yu-switch v-model="value1"/>

    <div class="sub-title">其他颜色(开有多种颜色，关只有一种颜色)</div>
    <yu-switch on type="danger" v-model="value2"/>
    <yu-switch on type="success" v-model="value2"/>
    <yu-switch on type="info" v-model="value2"/>
    <yu-switch on type="warning" v-model="value2"/>

    <div class="sub-title">标签文字</div>
    <yu-switch on label="关灯" v-model="value3"/>
    <yu-switch on after label="关灯" v-model="value3"/>

    <div class="sub-title">标签文字</div>
    <yu-switch disabled label="关灯" v-model="value4" />
    <yu-switch on after label="关灯" disabled v-model="value4" />

    <div class="sub-title">激活和非激活时的文字</div>
    <yu-switch on activeLabel="开灯" inactiveLabel="关灯" v-model="value5"/>
    <yu-switch inactiveLabel="关灯" activeLabel="开灯" v-model="value6" />

    <div class="sub-title">激活和非激活时的值</div>
    <yu-switch on activeLabel="开灯" inactiveLabel="关灯" v-model="value7" inactive-value="off" active-value="on"/>
    <yu-switch inactiveLabel="关灯" activeLabel="开灯" v-model="value8"  inactive-value="off" active-value="on"/>

    <div class="sub-title">v-model</div>
    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>
    <div>{{value6}}</div>
    <div>{{value7}}</div>
    <div>{{value8}}</div>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSwitch from '../components/switch'

export default {
  data() {
    return {
      value1: false,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: false,
      value7: 'on',
      value8: 'off',
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
