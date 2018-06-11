<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">时间选择器</div>
    <div class="sub-title">普通用法</div>
    <yu-time-picker v-model="value1"/>

    <div class="sub-title">设置时间段和步长</div>
    <yu-time-picker :optionParam="time"/>

    <div class="sub-title">设置时间最大值和最小值</div>
    <yu-time-picker :optionParam="time2"/>

    <div class="sub-title">滚动时间列表选择</div>
    <yu-time-picker type="scroll" :selectParam="selectParam"/>

    <div class="sub-title">远程加载</div>
    <div>同滚动时间列表选择</div>

    {{value1}}

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTimePicker from '../components/time-picker';
import YuScrollSelect from '../components/scroll-select';

export default {
  data() {
    return {
      time: {
        start: '09:00',
        step: '00:15',
        end: '18:00',
      },
      time2: {
        start: '09:00',
        step: '00:15',
        end: '18:00',
        maxTime: '14:00',
        minTime: '10:00',
      },
      selectParam: {
        start: '09:00:00',
        end: '18:00:00',
      },
      value1: '',
    }
  },
  methods: {},
  components: {
    YuTimePicker,
    YuScrollSelect,
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
