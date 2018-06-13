<template>
  <div>
    <label class="yu-checkbox selectAll"
           v-show="showControl"
           @click="selectAllClick"
           :class="[{checked:isChecked}]">
    <span class="checkbox">
    </span>
      <span>全选</span>
    </label>

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
    }
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
    name: String,
    isCheckboxs: {
      type: Boolean,
      default: true,
    },
    showControl: {
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
      const the = this
      // 重置
      this.value = []
      this.isChecked = !this.isChecked
      this.$children.forEach((item, index) => {
        item.isChecked = this.isChecked
        if (index > 0) {
          if (this.isChecked) {
            the.value.push(item.value)
          } else {
            the.value.splice(the.value.indexOf(item.value), 1)
          }
        }
      })

      // 提交至表单
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value.toString() })
      }

      this.$emit('change', this.value)
    },
    handleChange(value, isChecked) {
      const values = this.value.slice(0)
      if (isChecked) {
        values.push(value)
      } else {
        values.splice(values.indexOf(value), 1)
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value.toString() })
      }
      this.$emit('change', values)
    },
  },
  watch: {
    value() {
      // 同步子checkbox
      this.$children.forEach((item) => {
        item.syncChecked()
      })
    },
  },
}

</script>
<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-checkbox.selectAll {
    font-size: $normal;
    color: $text;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 12px;
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
  }

  .selectAll {
    display: block;
  }
</style>
