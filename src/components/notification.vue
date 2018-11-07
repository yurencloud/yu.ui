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
