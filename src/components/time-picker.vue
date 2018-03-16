<template>
  <div class="yu-time-picker">
    <yu-input prefix="icon-clock" :options="options" overflow clearable/>
  </div>
</template>

<script>
import YuInput from './input';

export default {
  name: 'YuTimePicker',
  props: {
    disabled: Boolean,
    param: {
      type: Object,
      default() {
        return {
          start: '00:00',
          step: '00:30',
          end: '24:00',
        }
      },
    },
  },
  methods: {
    getMinute(time) {
      const arr = time.split(':');
      return parseInt(arr[0], 0) * 60 + parseInt(arr[1], 0);
    },
  },
  created() {
    console.log(this.getMinute(this.param.end));
    console.log(this.getMinute(this.param.step));
    console.log(this.getMinute(this.param.start));
  },
  computed: {
    options() {
      // 全部以分钟计算
      const startMinute = this.getMinute(this.param.start)
      const stepMinute = this.getMinute(this.param.step)
      const endMinute = this.getMinute(this.param.end)
      const options = [];
      let i = startMinute;
      console.log(endMinute);
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
  },
  components: {
    YuInput,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";


</style>
