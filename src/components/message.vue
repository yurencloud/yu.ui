<template>
  <transition name="fade-in">
    <div v-show="visible" class="yu-message"
         :class="[type,{center:center}, customClass]">
      <i class="icon iconfont"
         :class="[iconClass,]"
         v-if="iconClass"></i>
      <i v-else
         :class="['icon','iconfont',icons[type]]"></i>
      <div class="content" ref="content">
        {{message}}
      </div>
      <i class="close iconfont icon-close"
         v-if="showClose"
         @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'YuMessage',
  props: {},
  data() {
    return {
      visible: false,
      message: '',
      iconClass: '',
      customClass: '',
      dangerouslyUseHTMLString: false,
      center: false,
      showClose: false,
      timer: null,
      closed: false,
      type: 'info',
      duration: 3000,
      icons: {
        success: 'icon-check-circle',
        info: 'icon-information',
        warning: 'icon-warning-circle',
        danger: 'icon-close-circle',
        primary: 'icon-information',
      },
    }
  },
  watch: {
    closed(closed) {
      if (closed) {
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    },
  },
  mounted() {
    if (this.dangerouslyUseHTMLString) {
      this.$refs.content.innerHTML = this.message
    }
    this.startTimer();
  },
  methods: {
    close() {
      this.visible = false;
      this.closed = true;
      this.$emit('close', event);
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/animation";
  @import "../assets/css/function";

  @include fadeIn();
  .yu-message {
    font-family: $font-family;
    padding: 10px 20px;
    width: 300px;
    border-radius: 5px;

    position: fixed;
    left: calc(50% - 150px);
    top: 20px;
    z-index: 999;
    box-sizing: border-box;

    .icon {
      font-size: $huge;
      margin-right: 5px;
    }
    .content {
      display: inline-block;
    }
    .close {
      float: right;
      cursor: pointer;
    }
    /*默认样式*/
    background-color: lighten($info, 35);
    color: $info;
    border: 1px solid lighten($info, 30);

    @include generalAllColorMessage();

    &.center {
      text-align: center;
    }
  }
</style>
