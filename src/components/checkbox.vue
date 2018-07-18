<template>
  <label class="yu-checkbox"
         @click.prevent="handleClick"
         :class="[
                    {checked:isChecked},
                    {disabled:disabled},
                    {vertical:vertical}
                 ]"
  >
    <span class="checkbox">
      <input type="checkbox"
             :checked="checked"
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
      checkedStatus: this.checked,
    }
  },
  model: {
    prop: 'checked',
    event: 'input',
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
      if (this.disabled) return
      this.$emit('change', this.value, this.name, !this.checked)
      this.$emit('click')
      if (this.$parent.isCheckboxs) {
        this.checkedStatus = !this.checkedStatus
        this.$emit('input', this.checkedStatus)
        this.$parent.handleChange(this.value, this.checkedStatus)
        return
      }
      this.$emit('input', !this.checked)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.checked })
      }
    },
    syncChecked() {
      this.checkedStatus = (this.$parent.value.indexOf(this.label) > -1)
    },
  },
  computed: {
    isChecked() {
      if (this.$parent.isCheckboxs) {
        return this.checkedStatus
      }
      return this.checked
    },
  },
  mounted() {
    if (this.$parent.isCheckboxs) {
      this.checkedStatus = (this.$parent.value.indexOf(this.label) > -1)
    }
  },
}
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
      transition: background-color .4s;
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
