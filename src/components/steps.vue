<template>
  <div class="yu-steps"
       :class="[{simple: simple}]"
       :style="{width:width,height:height}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuSteps',
  props: {
    active: Number,
    type: String,
    width: String,
    height: String,
    simple: Boolean,
  },
  provide() {
    return {
      rootSteps: this,
    }
  },
  methods: {
  },
  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
      const children = this.$children;
      children[oldVal].iconSuccess = true;
      const before = oldVal - 1;
      if (before === -1) {
        children[newVal].conduct = true;
        return;
      }
      children[before].lineSuccess = true;
      if (newVal === 0) return;
      children[newVal].conduct = true;
    },
  },
  mounted() {
    if (this.active > 0) {
      this.$children[this.active].conduct = true;
      //  todo  只循环啦一次????????
      for (let i = 1; i <= this.active; i += 1) {
        const num = i - 1;
        this.$children[num].iconSuccess = true;
        if (this.active > 1) {
          this.$children[i - 2].lineSuccess = true;
        }
      }
    }
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-steps{
    display:flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  /*TODO-----简洁风格*/
.yu-steps.simple{
  .yu-step{
    background-color: pink;
    display: inline-block;
   .head{
     margin-bottom: 5px;
   }
  }
}
</style>
