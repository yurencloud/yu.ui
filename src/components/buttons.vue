<template>
  <div class="yu-buttons" >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuButtons',
  props: ['type', 'size', 'icon', 'disabled', 'shape'],
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-buttons {
    .button{
      border-radius: 0;
      margin-right: -1px;
    }
    .button:first-child{
      border-radius: 4px 0 0 4px;
    }
    .button:last-child{
      border-radius: 0 4px 4px 0;
    }

  }

</style>
