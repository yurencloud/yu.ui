<template>
  <div class="option" :class="[{active:active},{hide:hide}]" @mousedown.prevent="handleClick" :value="value">{{label}}</div>
</template>

<script>
export default {
  name: 'YuOption',
  data() {
    return {
      active: false,
      hide: false,
    };
  },
  props: {
    label: {
      type: String,
    },
    value: {
      type: [Number, String],
    },
  },
  methods: {
    handleClick() {
      this.$parent.$emit('handleSelect', { label: this.label, value: this.value });
      this.$parent.$children.forEach((item) => {
        item.active = false;
      })
      this.active = true;
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-select>.options>.option{
    font-size: $normal;
    padding:4px 8px;
    &:hover{
      background-color: $background;
    }
    &.active{
      background-color: $background;
      font-weight: bold;
      color: $primary;
    }
    &.hide{
      display: none;
    }
  }

</style>
