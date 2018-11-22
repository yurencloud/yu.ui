<template>
  <div class="yu-alert"
       :class="[type,{center:center},{description:description}]"
       v-show="visible">
       <!-- icon -->
    <i class="icon iconfont"
       v-if='showIcon'
       :class="[icons[type],]"></i>
    <div class="alert-text">
      <!-- 标题 -->
      <div class="alert-title">
       {{title}}
      </div>
      <!-- 辅助文本 -->
      <div class="alert-auxiliary">{{description}}</div>
    </div>
    <!-- 关闭图标或文字 -->
    <div class="alert-close" @click="close">
      {{closeText}}
      <i class="iconfont icon-close" v-if="!closeText"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      icons: {
        success: 'icon-check-circle',
        info: 'icon-information',
        warning: 'icon-warning-circle',
        error: 'icon-close-circle',
      },
      visible: true,
    }
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'info',
    },
    showIcon: Boolean,
    center: Boolean,
    description: String,
    closeText: String,
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      if (this.closeable) {
        this.visible = !this.visible
        this.$emit('close', event)
      }
    },
  },
}
</script>
