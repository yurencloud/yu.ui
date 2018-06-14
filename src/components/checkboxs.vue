<template>
  <div>
    <label class="yu-checkbox selectAll"
           v-show="showControl"
           @click="selectAllClick"
           :class="[controlStatus]">
    <span class="checkbox">
    </span>
      <span>{{controlLabel}}</span>
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
      controlStatus: 'none', // none 未选择，part 部分选择， all 全部选择
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
    controlLabel: {
      type: String,
      default: '全选',
    },
  },
  components: {
    YuCheckbox,
  },
  methods: {
    // 负责全选
    selectAllClick() {
      const the = this
      const value = []
      const isChecked = this.controlStatus === 'none'
      this.$children.forEach((item) => {
        item.checkedStatus = isChecked
        if (isChecked) {
          value.push(item.value)
        } else {
          value.splice(the.value.indexOf(item.value), 1)
        }
      })
      this.$emit('change', value)
    },
    handleChange(value, isChecked) {
      const values = this.value.slice(0)
      if (isChecked) {
        values.push(value)
      } else {
        values.splice(values.indexOf(value), 1)
      }
      this.$emit('change', values)
    },
  },
  watch: {
    value(value) {
      // 同步子checkbox
      this.$children.forEach((item) => {
        item.syncChecked()
      })

      if (value.length > 0) {
        if (this.value.length === this.$children.length) {
          this.controlStatus = 'all'
        } else {
          this.controlStatus = 'part'
        }
      } else {
        this.controlStatus = 'none'
      }

      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value.toString() })
      }
    },
    mounted() {
      if (this.value.length > 0) {
        if (this.value.length === this.$children.length) {
          this.controlStatus = 'all'
        } else {
          this.controlStatus = 'part'
        }
      }
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
    &.vertical {
      display: block !important;
    }
    &.part {
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
          border-left-width: 0;
          width: 10px;
          height: 5px;
          -webkit-transform: rotate(180deg);
          position: absolute;
          top: 6px;
          left: 1px;
        }
      }
    }
    &.all {
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
