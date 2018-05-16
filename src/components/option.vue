<template>
  <div class="option" :class="[{active:active},{hide:hide},{disabled:disabled}]" @mousedown.prevent="handleClick" :value="value">
    {{$slots.default?'':label}}
    <slot/>
  </div>
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
    label: String,
    disabled: Boolean,
    value: {
      type: [Number, String],
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      if (this.$parent.multi) {
        this.hide = true;
      }
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
    padding:8px 8px;
    &:hover:not(.disabled){
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
    &.disabled{
      color:$lighter-text;
      cursor: not-allowed;
    }
  }

</style>
