<template>
<li class="yu-carousel-item">
  <img :src="src" alt="">
</li>
</template>

<script>
export default {
  name: 'YuCarouselItem',
  props: {
    src: String,
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-carousel-item{
  width: 100%;
  height: 100%;
   img{
     width: 100%;
     height: 100%;
   }
}
</style>
