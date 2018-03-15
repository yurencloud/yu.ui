<template>
  <div class="yu-breadcrumb">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuBreadcrumb',
  provide() {
    return {
      rootBreadcrumb: this,
    }
  },
  props: {
    separator: String,
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-breadcrumb{
  .yu-breadcrumb-item{
    &:last-child{
      span{
        font-weight: 500;
      }
    }
  }
}
</style>
