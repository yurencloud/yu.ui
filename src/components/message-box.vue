<template>
  <div class="yu-message-box" v-show="visible">
    <!--弹出框-->
    <div class="message-dialog"
         :class='[{center:center},customClass]'
    >
        <div class="dialog-box" v-show="visible">
          <div class="message-title">{{title}} <i class="iconfont icon-close" @click="cancel" v-if="showClose"
                                                  id="message-icon"></i></div>
          <!--文字-->
          <div class="message-text" v-if="!isInput">
            <i :class="['iconfont',typeItems[type].icon]"
               v-if="type"
               :style="{color:typeItems[type].color}"
            ></i>
            <div :class="{margin:type}">{{message}}</div>
          </div>
          <!--input框-->
          <div class="message-input" v-else>
            <div class="input-title">{{message}}</div>
            <input :type="inputType ? inputType : 'text'" class="input" :placeholder="inputValue? inputValue :''">
            <!--验证错误-->
            <div class="verification-result"
                 v-if="!result"
                 ref="input">
              {{inputErrorMessage}}
            </div>
          </div>
          <div class="message-btn">
            <!--确认和取消按钮-->
            <div class="message-cancle"
                 :class="[cancelButtonClass,]"
                 @click="cancel">
              <yu-button size="medium"
                         v-if="showCancelButton"
              >
                {{cancelButtonText}}
              </yu-button>
            </div>
            <div class="message-confirm"
                 :class="[confirmButtonClass,]"
                 @click="confirm">
              <yu-button
                type="primary"
                size="medium"
                v-if="showConfirmButton"
              >
                {{confirmButtonText}}
              </yu-button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button';

export default {
  name: 'YuMessageBox',
  components: {
    YuButton,
  },
  data() {
    return {
      visible: false,
      isActive: false,
      messageShow: false,
      typeItems: {
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
      icon: '',
      result: true,
      value: '',
      confirmButtonText: '确认',
      showConfirmButton: true,
      cancelButtonText: '取消',
      showCancelButton: false,
      message: '',
      title: '',
      isInput: false,
      inputErrorMessage: '',
      inputPattern: null,
      center: false,
      showClose: true,
      lockScroll: true,
      inputValue: '',
      cancelButtonClass: '',
      confirmButtonClass: '',
      inputType: 'text',
      type: '',
      customClass: '',
    }
  },
  methods: {
    onclick() {
      this.visible = !this.visible;
      if (this.lockScroll) {
        document.querySelector('body').classList.add('lock-scroll');
      }
    },
    confirm(event) {
      this.$emit('confirm', event);
    },
    cancel(event) {
      this.visible = false;
      this.$emit('cancel', event);
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  @import "../assets/css/animation";

  @include fadeIn();
  @include zoomInTop();
  .yu-message-box {
    display: inline-block;
    font-family: $font-family;
    .message-dialog {
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: all 3s;
      background-color: rgba(0, 0, 0, .3);
      .dialog-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        box-sizing: border-box;
        padding: 12px 20px;
        border-radius: 5px;
        width: 420px;
        overflow: hidden;
        border: 1px solid $light-border;
        .message-title {
          font-size: $huge;
          position: relative;
          height: 26px;
          i {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            color: $light-text;
            font-size: $huge;
          }
        }
        .message-text {
          margin: 15px 0;
          vertical-align: center;
          position: relative;
          font-size: 18px;
          i {
            font-size: 24px;
            color: $warning;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          div {
            display: inline-block;
            &.margin {
              margin-left: 35px;
            }
          }
        }
        .message-input {
          input {
            width: 100%;
            outline: none;
            border: 1px solid $dark-border;
            margin: 10px 0;
            height: 40px;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 0 20px;
            &:focus {
              border: 1px solid $primary;
            }
          }
          .input-title {
            margin-top: 10px;
            font-size: $normal;
            color: $light-text;
          }
          .verification-result {
            font-size: $normal;
            color: $danger;
          }
        }
        .message-btn {
          text-align: right;
        }
        .message-cancle {
          display: inline-block;
        }
        .message-confirm {
          display: inline-block;
        }
      }
    }
    .message-trigger {
      cursor: pointer;
      color: $primary;
    }
    .message-dialog.center {
      text-align: center;
      .message-btn {
        display: inline-block;
      }
    }
  }
</style>
<style>
  .lock-scroll {
    height: 100%;
    overflow: hidden;
  }
</style>

