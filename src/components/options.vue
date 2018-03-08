<template>
  <div class="yu-options" :class="[{overflow:overflow}]">
    <yu-option v-for="option in options"
               :key="option.value||option.content"
               :label="option.label"
               :value="option.value||option.content"
    />
  </div>
</template>

<script>
import YuOption from './option';

export default {
  name: 'YuOptions',
  props: {
    overflow: Boolean,
    options: Array,
  },
  components: {
    YuOption,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-options {
    background-color: #fff;
    position: absolute;
    top: 35px;
    z-index: 1000;
    min-width: 175px;
    border: 1px solid $border;
    padding: 8px 0;
    margin-top: 8px;
    border-radius: 4px;
    color: $text;
    box-shadow: $box-shadow;
    &.overflow {
      overflow: auto;
      max-height: 150px;
      &::-webkit-scrollbar {
        width: 4px
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: $border;
      }
    }
    .option {
      font-size: $normal;
      padding: 4px 8px;
      &:hover {
        background-color: $background;
      }
      &.active {
        font-weight: bold;
        color: $primary;
      }
    }
  }


</style>
