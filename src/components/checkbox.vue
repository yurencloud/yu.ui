<template>
  <label class="yu-checkbox" @click.prevent="handleClick" :class="[{checked:isChecked},{disabled:disabled}]">
    <span class="checkbox">
      <input type="checkbox" :name="name" :value="isChecked?label:''">
    </span>
    <span><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'YuCheckbox',
  data() {
    return {
      isChecked: this.checked,
    };
  },
  props: {
    name: {
      type: String,
    },
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
      const label = this.label;
      // 如果禁用，直接返回
      if (this.disabled) return;
      this.isChecked = !this.isChecked;
      console.log(this.$parent.$options._componentTag);
      if (this.$parent.$options._componentTag === 'YuCheckboxs') {
        if (this.isChecked) {
          this.$parent.value.push(label)
        } else {
          this.$parent.value.splice(this.$parent.value.indexOf(label), 1)
        }
      }

      this.$emit('change', this.isChecked ? label : '');
      // 开关当前单选
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-checkbox {
    font-size: $normal;
    color: $text;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 12px;
    input {
      display: none;
    }
    .checkbox {
      margin-right: 6px;
      margin-bottom: -1px;
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid $dark-border;
      border-radius: 2px;
      background-color: #fff;
      &:hover {
        border: 1px solid $primary;
      }
    }
    &.checked {
      .checkbox {
        position: relative;
        border: 1px solid $primary;
        border-radius: 2px;
        background-color: $primary;
        & + span {
          color: $primary;
        }
        &:after {
          content: '\00a0';
          display: inline-block;
          border: 2px solid #fff;
          border-top-width: 0;
          border-right-width: 0;
          width: 10px;
          height: 4px;
          -webkit-transform: rotate(-50deg);
          position: absolute;
          top: 3px;
          left: 1px;
        }
      }

    }

    &.disabled {
      color: $lighter-text;
      .checkbox:hover {
        border: 1px solid $dark-border;
      }
    }

  }


</style>
