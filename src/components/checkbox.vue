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
