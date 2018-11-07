<template>
  <div class="yu-dialog">
    <div class="dialog" :class="{'center':center}" v-show="visible">
        <div class="dialog-inner" :class="[size]" v-show="visible">
          <div class="inner">
            <div class="dialog-title">{{title}}<i class="iconfont icon-close" v-if="showClose" @click="handleClose($event)"></i></div>
            <div class="inner-content" v-if="content">{{content}}</div>
            <div class="inner-other" v-else>
              <slot/>
            </div>
          </div>
          <div class="dialog-btn">
            <yu-button v-if="showCancel" @click="handleClose($event)">{{closeText}}</yu-button>
            <yu-button type="primary" v-if="showConfirm" @click="handleConfirm($event)">{{confirmText}}
            </yu-button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button'

export default {
  name: 'YuDialog',
  model: {
    prop: 'visible',
    model: 'input',
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    lockScroll: Boolean,
    content: String,
    title: String,
    showClose: {
      type: Boolean,
      default: true,
    },
    showCancel: Boolean,
    showConfirm: Boolean,
    closeText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确认',
    },
    center: Boolean,
    size: {
      type: String,
      default: 'normal', // small, normal, large, full
    },
  },
  methods: {
    handleClose(event) {
      this.$emit('close', event)
      this.$emit('input', !this.visible)
    },
    handleConfirm(event) {
      this.$emit('confirm', event)
      this.$emit('input', !this.visible)
    },
  },
  watch: {
    visible(visible) {
      if (process.browser) {
        if (visible && this.lockScroll) {
          document.body.classList.add('lock')
        } else {
          document.body.classList.remove('lock')
        }
      }
    },
  },
  components: {
    YuButton,
  },
}
</script>
