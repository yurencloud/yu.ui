<template>
  <div class="yu-selected" v-if="visible">
      <slot/>
      <i class="iconfont icon-close-circle" @click="handleClick"></i>
      <slot name="selected"/>
  </div>
</template>

<script>
export default {
  name: 'YuSelected',
  data() {
    return {
      visible: true,
    };
  },
  props: {
    label: {
      type: String,
    },
    value: {
      type: [Number, String],
    },
  },

  methods: {
    handleClick() {
      console.log(this);
      this.$parent.$emit('cancelSelect', { value: this.value });
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-selected {
    font-size: $tiny;
    display: inline-block;
    background: darken($background,1);
    border-radius: 4px;
    height: 18px;
    padding: 4px 8px;
    color:$light-text;
    line-height: 18px;
    margin-right: 8px;
    i{
      font-size: $normal;
      padding-left: 4px;
    }
    i:hover{
      cursor: pointer;
      color:$text;
    }
  }


</style>
