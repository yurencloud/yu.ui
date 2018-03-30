<template>
  <form class="yu-form" :class="{inline:inline}">
    <slot/>
  </form>
</template>

<script>
export default {
  name: 'YuForm',
  props: {
    inline: Boolean,
    rules: Object,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-form {
    width: 460px;
    &.inline {
      width: 100%;
      .yu-field {
        vertical-align: top;
        display: inline-block;
        label{
          width: auto;
        }
        .field{
          width: auto;
        }
      }
    }
  }

</style>
