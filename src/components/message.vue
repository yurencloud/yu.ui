<template>
  <div class="yu-message" :class="[customClass,]">
   <div class="message" :class="[type,{show:isShow.default},{center:center}]">
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

    <div class="message-btn" @click="click">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuMessage',
  props: {
    message: String,
    iconClass: String,
    type: {
      type: String,
      default: 'info',
    },
    duration: {
      type: Number,
      default: 3,
    },
    customClass: String,
    dangerouslyUseHTMLString: Boolean,
    center: Boolean,
    showClose: Boolean,
  },
  data() {
    return {
      icons: {
        success: 'icon-check-circle',
        info: 'icon-information',
        warming: 'icon-warning-circle',
        error: 'icon-close-circle',
      },
      isShow: {
        type: Boolean,
        default: false,
      },
    }
  },
  computed: {
    change() {
      this.iconClass ? this.type = '' : '';
      if (this.dangerouslyUseHTMLString) {
        this.$refs.content.innerHTML = this.message
      }
    },
  },
  methods: {
    click() {
      this.isShow.default = !this.isShow.default;
      if (this.duration !== 0) {
        setTimeout(() => {
          this.isShow.default = false;
        }, this.duration * 1000)
      }
    },
    close(event) {
      this.isShow.default = !this.isShow.default;
      this.$emit('click', event);
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-message{
   height: 30px;
    .message{
      padding: 15px 20px;
      min-width: 330px;
      border-radius: 5px;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: -200px;
      margin-top: 20px;
      z-index: 999;
      transition: all 0.3s linear;
      box-sizing: border-box;
      .icon{
        font-size: $huge;
        margin-right: 5px;
      }
      .content{
        display: inline-block;
      }
      .close{
        float: right;
        cursor: pointer;
      }
      /*默认样式*/
      background-color: lighten($info,35);
      color: $info;
      border: 1px solid lighten($info,30);
    }
    .message-btn{
      display: inline-block;
    }
  }
  .message.show{
    top: 0;
  }
  /*成功*/
  .message.success{
    background-color: lighten($success, 40);
    color: $success;
    border: 1px solid $success;
  }
  // 警告
  .message.warming {
    background-color: lighten($warming, 35);
    color: $warming;
    border: 1px solid lighten($warming,30);
  }
  // 错误
  .message.error {
    background-color: lighten( $danger,  25);
    color: $danger;
    border: 1px solid lighten($danger,30);
  }
  // 信息
  .message.info {
    background-color: lighten($info,35);
    color: $info;
    border: 1px solid lighten($info,35);
  }
  .message.center{
    text-align: center;
  }
</style>
