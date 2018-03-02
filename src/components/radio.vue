<template>
  <label class="yu-radio" @click.prevent="handleClick" :class="[{checked:isChecked},{disabled:disabled}]">
  <span class="radio">
    <input type="radio" :value="label">
  </span>
    <span><slot/></span>
  </label>

</template>

<script>
export default {
  name: 'YuRadio',
  data() {
    return {
      isChecked: this.checked,
    };
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    checked: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      // 如果禁用，直接返回
      if (this.disabled) return;
      // 如果是单选组，则重置全部
      if (this.$parent.$options._componentTag === 'yu-radios') {
        this.$parent.$children.forEach((item) => {
          item.isChecked = false;
        });
        if (!this.isChecked) {
          this.$emit('change', this.label);
        } else {
          this.$emit('change', '');
        }
      }
      // 开关当前单选
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-radio{
    font-size: $normal;
    color:$text;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 12px;
    input{
      display: none;
    }
    .radio{
      margin-right: 6px;
      margin-bottom: -1px;
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid $dark-border;
      border-radius: 50%;
      background-color: #fff;
      &:hover{
        border: 1px solid $primary;
      }
    }
    &.checked{
      .radio{
        width: 6px;
        height: 6px;
        border: 5px solid $primary;
        &+span{
          color:$primary;
        }
      }
    }

    &.disabled{
      color:$lighter-text;
      .radio:hover{
        border: 1px solid $dark-border;
      }
    }

  }

</style>
