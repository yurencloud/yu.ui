<template>
  <transition :name="disableTransitions ? '' : 'fade'">
    <div class="yu-tag"
         :class="[type,size,{hit:!hit}]"
         v-if="isShow"
         :style="{backgroundColor:color}">
      <slot/>
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
    size: String,
    hit: Boolean,
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
      this.$emit('close', event);
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-tag{
     padding:0 7px;
    border: $primary;
    background-color: lighten($primary,33);
    display: inline-block;
    height: 32px;
    line-height: 30px;
    font-size: $tiny;
    color: $primary;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid lighten($primary,20);
    white-space: nowrap;
    margin-right: 10px;
    margin-bottom: 10px;
    i{
      font-size: $normal;
      margin-left: 3px;
      cursor: pointer;
    }
  }
  /*不同主题的*/
  .yu-tag.info{
    border: $info;
    background-color: lighten($info,35);
    color: $info;
    border: 1px solid lighten($info,20);
  }
  .yu-tag.success{
    border: $success;
    background-color: lighten($success,40);
    color: $success;
    border: 1px solid lighten($success,30);
  }
  .yu-tag.warning{
    border: $warning;
    background-color: lighten($warning,40);
    color: $warning;
    border: 1px solid lighten($warning,30);
  }
  .yu-tag.error{
    border: $danger;
    background-color: lighten($danger,27);
    color: $danger;
    border: 1px solid lighten($danger,20);
  }
  /*不同尺寸的*/
  .yu-tag.medium{
    height: 28px;
    line-height: 26px;
  }
  .yu-tag.small{
    height: 24px;
    line-height: 22px;
  }
  .yu-tag.mini{
    height: 20px;
    line-height: 18px;
  }
  /*边框*/
  .yu-tag.hit{
    border: none;
  }
  /*过渡*/
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .2s linear;
  }
</style>
