<template>
  <div class="yu-fields">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuFields',
  props: {
    isFields: {
      type: Boolean,
      default: true,
    },
    field: Number,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-fields {
    display: inline-block;
    width: 50%;
    .yu-field{
      display: inline-block;
      width: 25%;
      .field{
        width: 20%;
      }
    }
  }

</style>
