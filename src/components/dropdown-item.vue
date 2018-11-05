<template>
  <li class="yu-dropdown-item"
      :class="[{disabled:disabled},{divided:divided}]"
      :command="command">
    <slot/>
  </li>
</template>

<script>
export default {
  name: 'YuDropdownItem',
  props: {
    disabled: Boolean,
    divided: Boolean,
    command: String,
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-dropdown-item {
    list-style: none;
    padding: 0 14px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: $normal;
    &:hover {
      background-color: lighten($primary, 36);
      color: $primary;
    }
  }

  .yu-dropdown-item.disabled {
    color: $lighter-text;
    cursor: not-allowed;
    background-color: #fff;
  }

  .yu-dropdown-item.divided {
    border-top: 1px solid lighten($info, 30);
  }
</style>
