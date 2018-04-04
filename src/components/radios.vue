<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuRadios',
  data() {
    return {
      value: '',
    }
  },
  props: {
    isRadios: {
      type: Boolean,
      default: true,
    },
    name: String,
  },
  methods: {
    handleChange(value, isChecked) {
      if (isChecked) {
        this.value = value;
      } else {
        this.value = '';
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
};
</script>
