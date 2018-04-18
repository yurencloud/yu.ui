<template>
  <label class="yu-checkbox"
         @click.prevent="handleClick"
         :class="[{checked:isChecked},{disabled:disabled},{vertical:vertical}]">
    <span class="checkbox">
      <input type="checkbox"
             ref="input"
             :name="name"
             :value="value">
    </span>
    <span><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'YuCheckbox',
  data() {
    return {
      value: this.label,
      isChecked: this.checked,
    };
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    label: String,
    vertical: Boolean,
    name: String,
  },
  methods: {
    handleClick() {
      // 如果禁用，直接返回
      if (this.disabled) return;
      this.isChecked = !this.isChecked;
      this.$emit('change', this.value, this.name, this.isChecked);
      this.$emit('click');
      if (this.$parent.isCheckboxs) {
        if (this.value === undefined) return;
        this.$parent.handleChange(this.value, this.isChecked);
        return;
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ value: this.isChecked ? this.value : '' });
      }
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
      margin-bottom: -2px;
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
    &.vertical{
      display: block!important;
    }
    &.checked{
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

    &.checked.disabled{
      .checkbox {
        position: relative;
        border: 1px solid $lighter-text;
        border-radius: 2px;
        background-color: $lighter-text;
        & + span {
          color: $lighter-text;
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
