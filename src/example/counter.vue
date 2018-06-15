<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">计数器</div>
    <div class="sub-title">基础用法</div>
    <yu-counter v-model="value1"/>
    <div class="sub-title">最大值，最小值</div>
    <yu-counter :max="5" :step="3" v-model="value2"/>
    <yu-counter :min="10" v-model="value3"/>

    <div class="sub-title">禁用状态</div>
    <yu-counter disabled v-model="value4"/>
    <div class="sub-title">步数间隔(任意精度和浮点数计算)</div>
    <yu-counter :step="0.1" v-model="value5"/>
    <div class="sub-title">尺寸大小</div>
    <yu-counter :step="5" size="medium " v-model="value6"/>
    <yu-counter :step="5" size="small" v-model="value6"/>
    <yu-counter :step="5" size="mini" v-model="value6"/>

    <div class="sub-title">单边控制样式</div>
    <yu-counter-side :step=5 size="medium " v-model="value7"/>

    <div class="sub-title">最大值，最小值</div>
    <yu-counter-side :max="5" :step="3" v-model="value8"/>
    <yu-counter-side :min="10" v-model="value9"/>

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
import YuCounter from '../components/counter'
import YuCounterSide from '../components/counter-side'
import YuButton from '../components/button'

export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 10,
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: 0,
      value10: 0,
    }
  },
  methods: {},
  components: {
    YuCounter,
    YuCounterSide,
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
