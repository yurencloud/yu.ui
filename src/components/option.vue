<template>
  <div class="option" @mousedown.prevent="handleClick" :value="value">{{label}}</div>
</template>

<script>
import emitter from '../utils/emitter';

export default {
  name: 'YuOption',
  data() {
    return {};
  },
  mixins: [emitter],
  props: {
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.dispatch('YuSelect', 'handleSelect', { label: this.label, value: this.value });
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-select>.options>.option{
    font-size: $normal;
    padding:0 8px;
    &:hover{
      background-color: $background;
    }
  }

</style>
