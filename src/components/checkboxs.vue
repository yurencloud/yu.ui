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
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.value })
      }
    },
    handleChange(value, isChecked) {
      const values = this.value.slice(0)
      if (isChecked) {
        values.push(value)
      } else {
        values.splice(values.indexOf(value), 1)
      }
      this.$emit('change', values)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.value })
      }
    },
  },
  watch: {
    value(value) {
      // 同步子checkbox
      this.$children.forEach((item) => {
        item.syncChecked()
      })

      if (value.length > 0) {
        this.controlStatus = this.value.length === this.$children.length ? 'all' : 'part'
      } else {
        this.controlStatus = 'none'
      }
    },
    mounted() {
      if (this.value.length > 0) {
        this.controlStatus = this.value.length === this.$children.length ? 'all' : 'part'
      }
    },
  },
}
</script>
