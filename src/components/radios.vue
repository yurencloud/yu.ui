<template>
  <div class="yu-radios">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuRadios',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
    isRadios: {
      type: Boolean,
      default: true,
    },
    name: String,
    vertical: Boolean,
  },
  methods: {
    handleChange(value, isChecked) {
      this.$emit('input', isChecked ? value : '')
    },
  },
  watch: {
    value(value) {
      for (let i = 0; i < this.$children.length; i++) {
        this.$children[i].checkedStatus = this.$children[i].value === value
      }
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
  },
  mounted() {
    if (this.vertical) {
      for (let i = 0; i < this.$children.length; i++) {
        this.$children[i].vertical = true
      }
    }
  },
}
</script>
