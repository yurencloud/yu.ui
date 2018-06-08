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
    <yu-counter disabled v-model="value5"/>
    <div class="sub-title">步数间隔</div>
    <yu-counter :step="0.1" v-model="value5"/>
    <div class="sub-title">尺寸大小</div>
    <yu-counter :step="5" size="medium " v-model="value5"/>
    <yu-counter :step="5" size="small" v-model="value5"/>
    <yu-counter :step="5" size="mini" v-model="value5"/>

    <div class="sub-title">单边控制样式</div>
    <yu-counter-side :step=5 size="medium " v-model="value5"/>

    <div class="sub-title">最大值，最小值</div>
    <yu-counter-side :max="5" :step="3" v-model="value5"/>
    <yu-counter-side :min="10" v-model="value5"/>

    <div class="sub-title">v-model</div>
    <yu-counter v-model="value1"/>
    <yu-button @click="value1=10">点击</yu-button>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuCounter from '../components/counter';
import YuCounterSide from '../components/counter-side';
import YuButton from '../components/button';

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
      value11: 0,
    }
  },
  methods: {},
  components: {
    YuCounter,
    YuCounterSide,
    YuButton,
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
