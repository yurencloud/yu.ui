<template>
  <div class="option" :class="[{active:active},{hide:hide},{disabled:disabled}]" @mousedown.prevent="handleClick" :value="value">
    {{$slots.default?'':label}}
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuOption',
  data() {
    return {
      active: false,
      hide: false,
    }
  },
  props: {
    label: String,
    disabled: Boolean,
    value: {
      type: [Number, String],
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return
      }
      if (this.$parent.multi) {
        this.hide = true
      }
      this.$parent.$emit('handleSelect', { label: this.label, value: this.value })
      this.$parent.$children.forEach((item) => {
        item.active = false
      })
      this.active = true
    },
  },
}
</script>
