<template>
  <div class="yu-alert"
       :class="[type,]">
    <i class="iconfont"></i>
    <div>
      <div class="alert-title">
       {{title}}
      </div>
      <div class="alert-auxiliary"></div>
    </div>
    <div class="alert-close">
      <i class="iconfont"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuAlert',
  data() {
    return {
    }
  },
  props: {
    title: String,
    type: String,
  },
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-alert{
   padding:5px 20px;
    border-radius: 5px;
    width: 100%;
    font-size: $normal;
  }
  /*成功*/
  .yu-alert.success{
    background-color:lighten($success,35);
    /*todo*/
  }
</style>
