<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">slider滑块</div>
    <div class="sub-title">普通用法</div>
    <yu-slider v-model="value1"/>

    <div class="sub-title">显示计量单位，元，%等</div>
    <yu-slider value-unit="元" v-model="value2"/>

    <div class="sub-title">定义初始值</div>
    <yu-slider :defaultValue=50  v-model="value3"/>

    <div class="sub-title">禁用</div>
    <yu-slider :defaultValue=50 disabled v-model="value4"/>

    <div class="sub-title">步长</div>
    <yu-slider :defaultValue=50 :step=10 v-model="value5"/>

    <div class="sub-title">步长显示锚点</div>
    <yu-slider :defaultValue=50 :step=10 point v-model="value6"/>

    <div class="sub-title">修改总量(可为任意整数)</div>
    <yu-slider :defaultValue=500  :total=1000 v-model="value7"/>

    <div class="sub-title">修改长度</div>
    <yu-slider :width="800" v-model="value8"/>
    <yu-slider :width="80" v-model="value9"/>

    <div class="sub-title">最大值最小值</div>
    <yu-slider :min=50 :max=80 :default-value="50" v-model="value10"/>

    <div class="sub-title">v-model</div>
    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>
    <div>{{value6}}</div>
    <div>{{value7}}</div>
    <div>{{value8}}</div>
    <div>{{value9}}</div>
    <div>{{value10}}</div>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSlider from '../components/slider'

export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 50,
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: 0,
      value10: 0,
    }
  },
  methods: {
  },
  components: {
    YuSlider,
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
