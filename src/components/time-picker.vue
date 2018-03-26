<template>
  <div class="yu-time-picker">
    <yu-input v-if="type==='simple'" prefix="icon-clock" :options="options" overflow clearable/>
    <yu-scroll-select
      :split="':'"
      ref="scroll"
      v-if="type==='scroll'"
      remote
      :options="cascader"
      @firstFetch="firstFetch"
      @secondFetch="secondFetch"
    />
  </div>
</template>

<script>
import YuInput from './input';
import YuScrollSelect from './scroll-select';

export default {
  name: 'YuTimePicker',
  data() {
    return {
      sixty: [],
    }
  },
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
    firstFetch() {
      this.$refs.scroll.secondCascader = this.sixty;
    },
    secondFetch() {
      this.$refs.scroll.thirdCascader = this.sixty;
    },
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
      const cascader = [];
      // 造小时
      for (let i = 0; i < 24; i++) {
        let time = '';
        i < 10 ? time = `0${i}` : time = i.toString();
        cascader.push({ value: time, label: time })
      }
      cascader[0].children = this.sixty;
      cascader[0].children[0].children = this.sixty;
      return cascader;
    },
  },
  created() {
    const sixty = [];
    // 造分钟和秒
    for (let i = 0; i < 60; i++) {
      let time = '';
      i < 10 ? time = `0${i}` : time = i.toString();
      sixty.push({ value: time, label: time })
    }
    this.sixty = sixty;
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
