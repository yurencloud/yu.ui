<template>
  <div class="yu-alert"
       :class="[type,{center:center},{description:description}]">
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
    <div class="alert-close">
      <i class="iconfont icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "YuAlert",
  data() {
    return {
      icons: {
        success: "icon-check-circle",
        info: "icon-information",
        warming: "icon-warning-circle",
        error: "icon-close-circle"
      }
    };
  },
  props: {
    title: String,
    type: String,
    showIcon: Boolean,
    center: Boolean,
    description: String
  },
  mounted() {
    console.log(this.showIcon);
  }
};
</script>

<style scoped lang="scss" type="text/scss">
@import "../assets/css/varible";
@import "../assets/css/function";
.yu-alert {
  padding: 5px 20px;
  border-radius: 5px;
  width: 100%;
  font-size: $normal;
  margin-bottom: 10px;
  position: relative;
  i {
    margin-right: 3px;
    font-size: $large;
  }
  .alert-close {
    position: absolute;
    right: 10px;
    top: 6px;
  }
  .alert-text {
    display: inline-block;
  }
}
/*成功*/
.yu-alert.success {
  background-color: lighten($success, 40);
  color: $success;
}
// 警告
.yu-alert.warming {
  background-color: lighten($color: $warming, $amount: 35);
  color: $warming;
}
// 错误
.yu-alert.error {
  background-color: lighten($color: $danger, $amount: 25);
  color: $danger;
}
// 信息
.yu-alert.info {
  background-color: lighten($color: $info, $amount: 35);
  color: $info;
}
// 居中
.center {
  text-align: center;
}
// 辅助性文字
.yu-alert.description {
  .icon {
    font-size: 26px;
  }
  .alert-text {
    .alert-title {
      font-size: $normal;
    }
    .alert-auxiliary {
      font-size: $small;
    }
  }
}
</style>
