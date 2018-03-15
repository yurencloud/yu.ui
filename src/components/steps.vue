<template>
  <div class="yu-steps"
       :class="{column:isColumn}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuSteps',
  props: {
    active: Number,
    isColumn: String,
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
  .yu-steps.column{
  }
</style>
