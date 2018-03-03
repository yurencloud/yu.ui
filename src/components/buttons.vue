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

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-buttons {
    .yu-button{
      border-radius: 0;
      border-right:1px solid #fff;
    }
    .yu-button:first-child{
      border-radius: 4px 0 0 4px;
    }
    .yu-button:last-child{
      border-radius: 0 4px 4px 0;
    }
  }

</style>
