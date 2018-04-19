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
.yu-dropdown-item{
 list-style: none;
  padding: 5px 20px;
  text-align: center;
  cursor: pointer;
  font-size: $normal;
  &:hover{
    background-color: lighten($primary,30);
    color: $primary;
  }
}
  .yu-dropdown-item.disabled{
    background-color: lighten($info,38);
    color: $info;
    cursor:not-allowed;
  }
  .yu-dropdown-item.divided{
    border-top: 1px solid lighten($info,30);
  }
</style>
