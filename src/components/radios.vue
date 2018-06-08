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
    event: 'input'
  },
  props: {
    value: String,
    isRadios: {
      type: Boolean,
      default: true,
    },
    name: String,
  },
  methods: {
    handleChange(value, isChecked) {
      this.$emit('input', isChecked ? value : '')
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: isChecked ? value : '' });
      }
    },
  },
  watch: {
    value(value){
      for(let i = 0; i< this.$children.length; i++){
          this.$children[i].checkedStatus = this.$children[i].value === value;
      }
    }
  }
};
</script>
