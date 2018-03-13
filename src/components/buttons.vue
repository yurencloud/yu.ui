<template>
  <div class="yu-buttons" >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuButtons',
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-buttons {
    font-size: 0;
    .yu-button{
      border-radius: 0;
      margin-right: -1px;
    }
    .yu-button:first-child{
      border-radius: 4px 0 0 4px;
    }
    .yu-button:last-child{
      border-radius: 0 4px 4px 0;
    }
  }

</style>
