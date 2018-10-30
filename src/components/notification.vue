<template>
  <transition name="fade">
  <div class="yu-notification">
    <div class="notification" ref="notification"
         :class="[{active:visible},position]"
         :style="{top:offset}">
      <div class="notification-icon">
        <i
          class="iconfont"
          :style="[{color:color}]"
          :class="[iconClass,icon,]"
        ></i>
      </div>
      <div class="notification-content">
        <div class="notification-title">
          {{title}}
          <i class="iconfont icon-close"
             @click="close"
             v-if="showClose">
          </i></div>
        <div class="notification-content">
          {{content}}
        </div>
      </div>
    </div>
    <div class="notification-btn"
         @click="onclick">
      <slot/>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'YuNotification',
  props: {},
  data() {
    return {
      title: '',
      content: '',
      duration: 3000,
      offset: '',
      position: 'top-right',
      showClose: {
        type: Boolean,
        default: true,
      },
      type: '',
      iconClass: '',
      visible: false,
      icons: {
        error: {
          icon: 'icon-close-circle',
          color: '#F56C6C',
        },
        info: {
          icon: 'icon-information',
          color: '#909399',
        },
        warning: {
          icon: 'icon-warning-circle',
          color: '#E6A23C',
        },
        success: {
          icon: 'icon-check-circle',
          color: '#67C23A',
        },
      },
      isIconClass: {
        type: Boolean,
        default: true,
      },
      icon: String,
      color: String,
      closed: false,
    }
  },
  methods: {
    close() {
      this.visible = false
      this.closed = true
      this.$emit('close', event)
    },
    onclick() {
      this.visible = true
      if (this.duration) {
        setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
  },
  watch: {
    closed(closed) {
      if (closed) {
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    },
    type(type) {
      if (type) {
        this.icon = this.icons[this.type].icon
        this.color = this.icons[this.type].color
        this.iconClass = ''
      } else {
        this.icon = ''
        this.color = '#409EFF'
      }
    },
  },
  mounted() {
    this.startTimer()
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  @import "../assets/css/animation";

  @include fade();

  .yu-notification {
    display: inline-block;
    font-family: $font-family;
    .notification {
      position: fixed;
      z-index: 9999;
      width: 330px;
      background-color: #fff;
      box-sizing: border-box;
      right: -400px;
      padding: 10px 20px;
      box-shadow: $box-shadow;
      margin-top: 20px;
      margin-right: 20px;
      transition: all 0.3s linear;
      .notification-content {
        display: inline-block;
      }
      .notification-title {
        font-size: $large;
        font-weight: 800;
        margin-bottom: 10px;
        i {
          position: absolute;
          cursor: pointer;
          right: 20px;
          top: 10px;
        }
      }
      .notification-content {
        margin-bottom: 10px;
        font-size: $normal;
        color: $text;
      }
      .notification-icon {
        display: inline-block;
        padding-right: 10px;
        position: relative;
        top: -25px;
        left: 0;
        i {
          font-size: 24px;
          color: $info;
        }
      }
    }
    .notification-btn {
      display: inline-block;
    }
    .notification.top-right {
      top: 0;
    }
    .notification.active {
      right: 0;
    }
    .notification.top-left {
      left: -400px;
      margin-left: 20px;
      margin-right: 0;
      top: 0;
    }
    .notification.top-left.active {
      left: 0;
    }
    .notification.bottom-right {
      bottom: 0;
      margin-bottom: 20px;
      margin-top: 0;
      right: -400px;
    }
    .notification.bottom-right.active {
      right: 0;
    }
    .notification.bottom-left {
      bottom: 0;
      margin-bottom: 20px;
      margin-top: 0;
      left: -400px;
      margin-right: 0;
      margin-left: 20px;
    }
    .notification.bottom-left.active {
      left: 0;
    }
  }
</style>
