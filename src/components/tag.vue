<template>
  <transition :name="disableTransitions ? '' : 'fade'">
    <div class="yu-tag"
         :class="[type,size,{clearBorder:clearBorder}]"
         v-if="visible"
         :style="{backgroundColor:color}">
      <span>
      <slot/>
      </span>
      <i class="iconfont"
         v-if="closable"
         :class="[{'icon-close':closable,'icon-close-circle':!closeIcon}]"
         @click.stop="handleClose"
         @mouseover="toggle"
         @mouseleave="toggle"
      ></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'YuTag',
  props: {
    type: String,
    closable: Boolean,
    size: {
      type: String,
      default: 'middle',
    },
    clearBorder: Boolean,
    disableTransitions: Boolean,
    color: String,
  },
  data() {
    return {
      visible: true,
      closeIcon: true,
    }
  },
  methods: {
    toggle() {
      this.closeIcon = !this.closeIcon;
    },
    handleClose(event) {
      this.visible = !this.visible;
      this.$emit('close', event);
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  @import "../assets/css/animation";

  @include fade()
  .yu-tag {
    padding: 0 8px;
    border: $primary;
    background-color: lighten($primary, 33);
    display: inline-block;
    height: 32px;
    line-height: 32px;
    font-size: $normal;
    color: $primary;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid lighten($primary, 20);
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 12px;
    i {
      font-size: $normal;
      margin-left: 3px;
      cursor: pointer;
    }
  }

  /*不同主题的*/
  @include generalAllColorTag()

  /*不同尺寸的*/
  @include generalAllSizeTag()

  /*边框*/
  .yu-tag.clearBorder {
    border: none;
  }
</style>
