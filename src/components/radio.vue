<template>
  <label class="yu-radio" @click.prevent="handleClick" :class="[{checked:isChecked},{disabled:disabled},{vertical:vertical}]">
  <span class="radio">
    <input type="radio" :name="name" :value="value" :checked="checked">
  </span>
    <span><slot/></span>
  </label>

</template>

<script>
export default {
  name: 'YuRadio',
  data() {
    return {
      value: this.label,
      checkedStatus: this.checked,
    };
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
      // 如果禁用，直接返回
      if (this.disabled) return;
      // 如果是单选组，则重置全部
      // 开关当前单选
      let isChecked = !this.checked;

      if (this.$parent.isRadios) {
        this.$parent.$children.forEach((item)=>{
          item.checkedStatus = false;
        });
        this.checkedStatus = !this.checkedStatus;
        isChecked = this.checkedStatus
      }

      this.$emit('change', this.label, isChecked, this.name);
      this.$emit('input', isChecked);

      if (this.$parent.isRadios) {
        this.$parent.handleChange(this.value, isChecked);
      }

      if (this.$parent.isField) {
        this.$parent.handleChange(this.name, isChecked ? this.value : '');
      }
    },
  },
  computed:{
    isChecked(){
      if(this.$parent.isRadios){
        return this.checkedStatus
      }
      return this.checked
    }
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-radio {
    font-size: $normal;
    color: $text;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 12px;
    input {
      display: none;
    }
    .radio {
      transition: border .2s;
      margin-right: 6px;
      margin-bottom: -1px;
      display: inline-block;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      border: 1px solid $dark-border;
      border-radius: 50%;
      background-color: #fff;
      &:hover {
        border: 1px solid $primary;
      }
    }
    &.vertical{
      display: block!important;
    }
    &.checked {
      .radio {
        width: 16px;
        height: 16px;
        border: 5px solid $primary;
        & + span {
          color: $primary;
        }
      }
    }

    &.checked.disabled {
      .radio {
        width: 16px;
        height: 16px;
        border: 5px solid $lighter-text;
        & + span {
          color: $lighter-text;
        }
      }
    }

    &.disabled {
      color: $lighter-text;
      .radio:hover {
        border: 1px solid $dark-border;
      }
    }

  }

</style>
