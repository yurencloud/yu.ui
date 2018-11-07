<template>
  <label class="yu-radio"
         @click.prevent="handleClick"
         :class="[
           {checked:isChecked},
           {disabled:disabled},
           {vertical:vertical}
         ]">
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
      vertical: false,
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
    name: String,
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      let isChecked = !this.checked

      // 如果是单选组，则重置全部
      if (this.$parent.isRadios) {
        this.$parent.$children.forEach((item) => {
          item.checkedStatus = false
        })
        this.checkedStatus = !this.checkedStatus
        isChecked = this.checkedStatus
      }

      if (this.$parent.isRadios) {
        this.$parent.handleChange(this.value, isChecked)
      }

      this.$emit('change', this.label, isChecked, this.name)
      this.$emit('input', isChecked)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: isChecked })
      }
    },
  },
  computed: {
    isChecked() {
      if (this.$parent.isRadios) {
        return this.checkedStatus
      }
      return this.checked
    },
  },
}
</script>
