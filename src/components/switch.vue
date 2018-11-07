<template>
  <div class="yu-switch"
       @click="handleClick"
       :class="[{disabled:disabled}]">
     <input type="checkbox"
            :disabled="disabled"
            :name="name"
            :value="value">
     <span v-if="!after">
       {{isChecked?(activeLabel||label):(inactiveLabel||label)}}
     </span>
     <span class="switch"
           :class="[{on:isChecked},type,{disabled:disabled}]">
      <span class="circle"></span>
    </span>
    <span v-if="after">
      {{isChecked?(activeLabel||label):(inactiveLabel||label)}}
    </span>
  </div>

</template>

<script>
export default {
  name: 'YuSwitch',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: [Number, String, Boolean],
    activeValue: {
      type: [Number, String, Boolean],
      default: true,
    },
    inactiveValue: {
      type: [Number, String, Boolean],
      default: false,
    },
    label: String,
    activeLabel: String,
    inactiveLabel: String,
    type: {
      type: String,
      default: 'primary',
    },
    after: Boolean,
    name: String,
    disabled: Boolean,
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      const value = !this.isChecked ? this.activeValue : this.inactiveValue
      this.$emit('click', value)
      this.$emit('input', value)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
  },
  computed: {
    isChecked() {
      return this.value === this.activeValue
    },
  },
  watch: {
    value(value) {
      this.$emit('input', value)
    },
  },
}
</script>
