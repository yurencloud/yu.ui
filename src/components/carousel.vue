<template>
    <div class="yu-carousel" :style="{width:width,height:height}">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'YuCarousel',
  props: {
    width: {
      type: String,
      default: '500px',
    },
    height: {
      type: String,
      default: '300px',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 1000,
    },
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped type="text/scss">
  *{
    margin: 0;
    padding: 0;
  }
  #main img{
    width:300px;
    height: 400px;
    position: absolute;
  }
  #main img:nth-child(1){
    transform: translateZ(500px);
  }
  #main img:nth-child(2){
    transform: rotateY(40deg) translateZ(500px);
  }
  #main img:nth-child(3){
    transform: rotateY(80deg) translatez(500px);
  }
  #main img:nth-child(4){
    transform: rotateY(120deg) translatez(500px);
  }
  #main img:nth-child(5){
    transform: rotateY(160deg) translatez(500px);
  }
  #main img:nth-child(6){
    transform: rotateY(200deg) translatez(500px);
  }
  #main img:nth-child(7){
    transform: rotateY(240deg) translatez(500px);
  }
  #main img:nth-child(8){
    transform: rotateY(280deg) translatez(500px);
  }
  #main img:nth-child(9){
    transform: rotateY(320deg) translatez(500px);
  }
  #main{
    margin: 100px auto;
    width: 300px;
    height: 400px;
    transform-style: preserve-3d;
    transform: rotateX(-10deg);
    animation-name: animate;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: relative;
  }
  @keyframes animate {
    0%{
      transform: rotateX(-10deg) rotateY(0deg) ;
    }
    100%{
      transform: rotateX(-10deg) rotateY(360deg) ;
    }
  }
</style>
