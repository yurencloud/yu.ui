<template>
  <div>
    <yu-checkbox :name="name"
                 v-show="selectAll"
                 class="selectAll"
                 ignore
                 :class="[{isChecked:isChecked}]"
                 @click="selectAllClick"
    >全选</yu-checkbox>
    <slot/>
  </div>
</template>

<script>
import YuCheckbox from './checkbox'

export default {
  name: 'YuCheckboxs',
  data() {
    return {
      isChecked: false,
      value: [],
    }
  },
  props: {
    name: String,
    isCheckboxs: {
      type: Boolean,
      default: true,
    },
    selectAll: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    YuCheckbox,
  },
  methods: {
    // 负责全选
    selectAllClick() {
      const the = this;
      // 重置
      this.value = [];
      this.isChecked = !this.isChecked;
      this.$children.forEach((item, index) => {
        item.isChecked = this.isChecked;
        if (index > 0) {
          if (this.isChecked) {
            the.value.push(item.value);
          } else {
            the.value.splice(the.value.indexOf(item.value), 1);
          }
        }
      });
      // 提交至表单
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value.toString() });
      }
    },
    handleChange(value, isChecked) {
      if (isChecked) {
        this.value.push(value);
      } else {
        this.value.splice(this.value.indexOf(value), 1);
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value.toString() });
      }
    },
  },
  mounted() {
    this.$children.forEach((item, index) => {
      if (index > 0 && item.isChecked) {
        this.value.push(item.value);
      }
    });
  },
};
</script>
<style lang="scss" scoped type="text/scss">
  .selectAll {
    display: block;
  }
</style>
