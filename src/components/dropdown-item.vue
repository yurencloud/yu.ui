<template>
    <li class="yu-dropdown-item" @click="handleClick" :class="[{disabled:disabled},]">
      <slot/>
    </li>
</template>

<script>
export default {
  name: 'YuDropdownItem',
  props: {
    disabled: Boolean,
    command: String,
  },
  methods: {
    handleClick() {
      if (!this.disabled && this.command) {
        console.log((`click on item ${this.command}`));
        this.$emit('click', this.command);
      }
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-dropdown-item{
  list-style: none;
  padding: 10px 20px 10px 15px;
  font-size: $normal;
  &:hover:not(.disabled){
    background-color: $background;
    color: lighten($primary,0.5);
  }
}
  .yu-dropdown-item.disabled{
    color: $light-text;
  }
</style>
