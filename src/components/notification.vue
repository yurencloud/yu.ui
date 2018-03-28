<template>
  <div class="yu-notification" @click="handleClick">
    <div class="notification" ref="notification"
         :class="[{active:isActive},position]"
         :style="{top:offset}">
      <div class="notification-icon">
        <i
           class="iconfont"
           :style="[{color:color}]"
           :class="[iconClass,icon,]"
        ></i>
      </div>
      <div>
        <div class="notification-title">
          {{title}}
          <i class="iconfont icon-close"
             @click="onclose"
             v-if="showClose">
          </i></div>
        <div class="notification-content">
          {{content}}
        </div>
      </div>
    </div>
    <div class="notification-btn"
         @click="onclick"><slot/></div>
  </div>
</template>

<script>
export default {
  name: "YuNotification",
  props: {
    title: String,
    content: String,
    duration: Number,
    offset: String,
    position: String,
    showClose: {
      type: Boolean,
      default: true
    },
    type: String,
    iconClass: String
  },
  data() {
    return {
      isActive: false,
      typeItem: {
        error: {
          icon: "icon-close-circle",
          color: "#F56C6C"
        },
        info: {
          icon: "icon-information",
          color: "#409EFF"
        },
        warming: {
          icon: "icon-warning-circle",
          color: "#E6A23C"
        },
        success: {
          icon: "icon-check-circle",
          color: "#67C23A"
        }
      },
      isIconClass: true,
      icon: String,
      color: String
    };
  },
  methods: {
    onclose() {
      this.isActive = false;
    },
    onclick() {
      this.isActive = true;
      if (this.duration) {
        setTimeout(() => {
          this.isActive = false;
        }, this.duration * 1000);
      }
    },
    handleClick(event) {
      this.$emit("click", event);
    }
  },
  mounted() {
    if (this.type) {
      this.icon = this.typeItem[this.type].icon;
      this.color = this.typeItem[this.type].color;
      this.iconClass = "";
    } else {
      this.icon = "";
      this.color = "#409EFF";
    }
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
@import "../assets/css/varible";
@import "../assets/css/function";
.yu-notification {
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
    display: flex;
    .notification-icon {
      padding-right: 10px;
      i {
        font-size: 30px;
      }
    }
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
