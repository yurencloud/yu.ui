<template>
  <div class="yu-time-picker">
    <yu-input v-if="type==='simple'" prefix="icon-clock" :options="options" overflow clearable/>
    <yu-scroll-select v-if="type==='scroll'" :options="cascader" />
  </div>
</template>

<script>
import YuInput from './input';
import YuScrollSelect from './scroll-select';

export default {
  name: 'YuTimePicker',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'simple',
    },
    optionParam: {
      type: Object,
      default() {
        return {
          start: '00:00',
          step: '00:30',
          end: '24:00',
        }
      },
    },
    selectParam: {
      type: Object,
      default() {
        return {
          start: '00:00:00',
          end: '24:00:00',
        }
      },
    },
  },
  methods: {
    getMinute(time) {
      const arr = time.split(':');
      return (parseInt(arr[0], 0) * 60) + parseInt(arr[1], 0);
    },
  },
  created() {
  },
  computed: {
    options() {
      // 全部以分钟计算
      const startMinute = this.getMinute(this.optionParam.start)
      const stepMinute = this.getMinute(this.optionParam.step)
      const endMinute = this.getMinute(this.optionParam.end)
      const options = [];
      let i = startMinute;
      while (i < endMinute) {
        let hours = Math.floor(i / 60);
        hours < 10 ? hours = `0${hours}` : hours = hours.toString();
        let minutes = i % 60;
        minutes < 10 ? minutes = `0${minutes}` : minutes = minutes.toString();
        const result = `${hours}:${minutes}`;
        options.push({ value: result, label: result })
        i += stepMinute;
      }
      return options;
    },
    cascader() {
      const start = this.selectParam.start.split(':')
      const end = this.selectParam.end.split(':')
      start.map(item => parseInt(item, 0))
      end.map(item => parseInt(item, 0))
      let cascader = [];
      // 造小时
      for(let i = 0;i<24;i++){

      }
    },
  },
  components: {
    YuInput,
    YuScrollSelect,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";


</style>
