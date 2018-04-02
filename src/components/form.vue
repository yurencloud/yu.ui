<template>
  <form class="yu-form" :class="{inline:inline}" :style="{width:width}">
    <slot/>
  </form>
</template>

<script>
export default {
  name: 'YuForm',
  data() {
    return {
      values: {},
    }
  },
  props: {
    inline: Boolean,
    rules: Object,
    width: String,
  },
  methods: {
    setValues(value) {
      this.values[value.name] = value.value;
    },
    getValue(name) {
      return this.values[name];
    },
    getValues() {
      return this.values;
    },
    hasValue(name) {
      return this.values.hasOwnProperty(name) && this.getValue(name).trim().length > 0;
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-form {
    width: 460px;
    &.inline {
      width: 100%;
      .yu-field {
        vertical-align: top;
        display: inline-block;
        label{
          width: auto;
        }
        .field{
          width: auto;
        }
      }
    }
  }

</style>
