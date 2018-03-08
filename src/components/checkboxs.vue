<template>
  <div>
    <yu-checkbox class="selectAll" :class="[{isChecked:isChecked}]" @click="handleClick">全选</yu-checkbox>
    <slot/>
  </div>
</template>

<script>
import YuCheckbox from './checkbox';

export default {
  name: 'YuCheckboxs',
  data() {
    return {
      isChecked: false,
    }
  },
  components: {
    YuCheckbox,
  },
  methods: {
    handleClick() {
      this.isChecked = !this.isChecked
      this.$children.forEach((item) => {
        item.isChecked = this.isChecked;
      })
    },
  },
};
</script>
<style lang="scss" scoped type="text/scss">
  .selectAll {
    display: block;
  }
</style>
