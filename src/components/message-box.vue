<template>
  <div class="yu-message-box" v-show="visible">
    <!--弹出框-->
    <div class="message-dialog"
         :class='[{center:center},customClass]'
    >
        <div class="dialog-box" v-show="visible">
          <div class="message-title">{{title}} <i class="iconfont icon-close" @click="cancelEvent" v-if="showClose"
                                                  id="message-icon"></i></div>
          <!--文字-->
          <div class="message-text" >
            <i :class="['iconfont',typeItems[type].icon]"
               v-if="type"
               :style="{color:typeItems[type].color}"
            ></i>
            <div :class="{margin:type}">{{message}}</div>
          </div>
          <!--input框-->
          <div class="message-input" v-if="isInput">
            <yu-input :type="inputOptions.type"
                      :placeholder="inputOptions.placeholder"
                      :disabled="inputOptions.disabled"
                      :readonly="inputOptions.readonly"
                      v-model="value"
                      :name="name"
                      :autofocus="inputOptions.autofocus"
                      @click="inputOptions.handleClick"
                      @blur="inputOptions.handleBlur"
                      @focus="inputOptions.handleFocus"
                      @change="inputOptions.handleChange"
                      @keyup="inputOptions.handleKeyup"
                      :width="inputOptions.width"
                      :cols="inputOptions.cols"
                      :rows="inputOptions.rows"
                      :size="inputOptions.size"
                      :remote="inputOptions.remote"
                      :options="inputOptions.options"
                      :class="[{prefix:inputOptions.prefix},{suffix:inputOptions.suffix}]"
                      :style="{width:inputOptions.width}"

            />
            <!--验证错误-->
            <div class="verification-result"
                 v-if="!validateResult"
                 ref="input">
              {{inputErrorMessage}}
            </div>
          </div>
          <div class="message-btn">
            <!--确认和取消按钮-->
            <div class="message-cancel"
                 :class="[cancelButtonClass,]"
                 @click="cancelEvent">
              <yu-button size="medium" v-if="showCancelButton">{{cancelButtonText}}</yu-button>
            </div>
            <div class="message-confirm"
                 :class="[confirmButtonClass,]"
                 @click="confirmEvent">
              <yu-button type="primary" size="medium" v-if="showConfirmButton">{{confirmButtonText}}</yu-button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button'
import YuInput from './input'

export default {
  name: 'YuMessageBox',
  components: {
    YuButton,
    YuInput,
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
      value: '',
      name: '',
      validateResult: true,
      confirmButtonText: '确认',
      showConfirmButton: true,
      cancelButtonText: '取消',
      showCancelButton: false,
      message: '',
      title: '',
      isInput: false,
      inputErrorMessage: '',
      inputPattern: null,
      inputOptions: {
        value: '',
        type: 'input',
        placeholder: '请输入',
        autofocus: true,
        width: '100%',
        handleClick: () => {},
        handleBlur: () => {},
        handleFocus: () => {},
        handleChange: (value, name) => {
          this.value = value
          this.name = name
        },
        handleKeyup: () => {},
      },
      center: false,
      showClose: true,
      lockScroll: true,
      inputValue: '',
      cancelButtonClass: '',
      confirmButtonClass: '',
      type: '',
      customClass: '',
      confirm: null,
      cancel: null,
    }
  },
  methods: {
    confirmEvent() {
      // 如果是prompt，又有验证规则，则确认时就验证
      const the = this
      if (this.isInput) {
        if (this.inputPattern != null) {
          this.validateResult = this.inputPattern.test(the.value)
          if (!this.validateResult) {
            return
          }
        }
      }

      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      if (this.confirm != null) {
        this.confirm(this.value)
      }
    },
    cancelEvent() {
      this.visible = false
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      if (this.cancel != null) {
        this.cancel()
      }
    },
    close() {
      this.visible = false
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
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
            &:hover{
              color: $primary;
            }
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
          margin-bottom: 40px;
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
        .message-cancel {
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

