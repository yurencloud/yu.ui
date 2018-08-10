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
    closeable: Boolean,
  },
  mounted() {

  },
  methods: {
    close() {
      if (!this.closeable) {
        this.visible = !this.visible
        this.$emit('close', event)
      }
    },
  },
}
</script>

<style scoped lang="scss" type="text/scss">
@import "../assets/css/varible";
@import "../assets/css/function";
.yu-alert {
  padding: 8px 16px;
  border-radius: 5px;
  width: 100%;
  font-size: $normal;
  margin-bottom:20px ;
  position: relative;
  box-sizing: border-box;
  i {
    margin-right: 3px;
    font-size: $large;
  }
  .alert-close {
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
  }
  .alert-text {
    display: inline-block;
  }
}
/*成功*/
.yu-alert.success {
  background-color: lighten($success, 45);
  color: $success;
}
// 警告
.yu-alert.warning {
  background-color: lighten($warning, 40);
  color: $warning;
}
// 错误
.yu-alert.error {
  background-color: lighten( $danger,  27);
  color: $danger;
}
// 信息
.yu-alert.info {
  background-color: lighten($info,37);
  color: $info;
}
// 居中
.center {
  text-align: center;
}
// 辅助性文字
.yu-alert.description {
  .icon {
    font-size: 30px;
    vertical-align: middle;
  }
  .alert-text {
    vertical-align: middle;
    .alert-title {
      font-size: $normal;
      font-weight: bold;
    }
    .alert-auxiliary {
      padding-top: 6px;
      font-size: $small;
    }
  }
}
</style>
