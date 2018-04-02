<template>
<div class="yu-badge">
  <div class="badge">
    <!--todo   数字以外的内容-->
    {{value}} <span v-if="addShow">+</span>
  </div>
  <slot/>
</div>
</template>

<script>
export default {
  name: 'YuBadge',
  data() {
    return {
      addShow: false,
    }
  },
  props: {
    value: Number,
    max: Number,
  },
  mounted() {
    if (this.max < this.value) {
      this.value = this.max;
      this.addShow = true;
    }
  },
}
</script>

<style scoped type="text/scss" lang="scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-badge{
  position: relative;
  display: inline-block;
  .badge{
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    padding: 0 5px;
    text-align: center;
    background-color:$danger;
    display: inline-block;
    color: #fff;
    font-size: $tiny;
    position: absolute;
    right: -3px;
    top: -10px;
  }
}
</style>
