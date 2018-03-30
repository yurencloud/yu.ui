<template>
 <div class="yu-message-box">
   <!--弹出框-->
    <div class="message-dialog"
         v-show="isShow"
    >
      <div class="dialog-box"
           @click="handleClick"
      >
        <div class="message-title">{{title}} <i class="iconfont icon-close" id="message-icon"></i></div>
        <!--文字-->
        <div class="message-text" v-if="!isInput">
          <i :class="['iconfont',warming]"
             v-if="isWarming"
          ></i>
          <div>{{message}}</div>
        </div>
        <!--input框-->
        <div class="message-input" v-else>
          <div class="input-title">{{message}}</div>
          <input type="text" class="input">
          <!--验证错误-->
          <div class="verification-result"
                v-if="!result"
                ref="input">
            {{inputErrorMessage}}
          </div>
        </div>
        <div class="message-btn">
          <!--确认和取消按钮-->
          <div class="message-cancle">
            <yu-button size="small"
                       v-if="showCancelButton"
            >
              {{cancelButtonText}}
            </yu-button>
          </div>
          <div class="message-confirm">
            <yu-button
              type="primary"
              size="small"
              v-if="showConfirmButton"
            >
              {{confirmButtonText}}
            </yu-button>
          </div>
        </div>
      </div>
    </div>
   <!--消息提示-->
    <div class="message-popover"
         v-if="messagePopver"
         :class="[messagePopver.messagePopverType,{active:isActive},]"
    >
      <i :class="['iconfont',typeItems[messagePopver.messagePopverType] ? typeItems[messagePopver.messagePopverType].icon : '',]"></i>
      <span>{{messagePopver.messagePopverText || ''}}</span>
    </div>
   <div class="message-trigger" @click="onclick">
     <slot/>
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
      isShow: false,
      messageShow: false,
      typeItems: {
        info: {
          icon: 'icon-information',
          color: '#909399',
        },
        success: {
          icon: 'icon-check-circle',
          color: '#67C23A',
        },
      },
      messagePopver: {},
      icon: String,
      isActive: false,
      warming: 'icon-warning-circle',
      result: true,
      value: String,
    }
  },
  props: {
    confirmButtonText: String,
    showConfirmButton: Boolean,
    cancelButtonText: String,
    showCancelButton: Boolean,
    message: String,
    title: String,
    event: null,
    isWarming: Boolean,
    isInput: Boolean,
    inputErrorMessage: String,
    inputPattern: null,
  },
  methods: {
    onclick() {
      this.isShow = !this.isShow;
    },
    handleClick(event) {
      if (event.target.parentNode.className === 'message-confirm') {
        this.event ? this.messagePopver = this.event.confirm() : '';
        this.change();
        if (this.isInput) {
          this.value = document.querySelector('.yu-message-box input').value;
          this.result = this.inputPattern.test(this.value);
          //  todo  存在bug
          this.result ? this.change() : '';
        }
        this.$emit('click', event)
      } else if (event.target.parentNode.className === 'message-cancle' || event.target.id === 'message-icon') {
        this.event ? this.messagePopver = this.event.cancle() : '';
        this.change();
      }
    },
    change() {
      this.isShow = !this.isShow;
      this.isActive = !this.isActive;
      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 2000);
    },
  },
  mounted() {
    console.log(this);
  },

}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-message-box{
    display: inline-block;
    .message-dialog{
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: all .3s linear;
      background-color: rgba(0,0,0,.3);
      .dialog-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        box-sizing: border-box;
        padding: 10px 20px;
        border-radius: 5px;
        width: 420px;
        overflow: hidden;
        border: 1px solid $light-border;
        .message-title{
          font-size: $huge;
          position: relative;
          i{
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            color: $light-text;
            font-size: $huge;
          }
        }
        .message-text{
          margin: 10px 0;
          vertical-align: center;
          position: relative;
          i{
            font-size: 24px;
            color: $warming;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          div{
            display: inline-block;
            margin-left: 35px;
          }
        }
        .message-input{
          input{
            width: 100%;
            outline: none;
            border: 1px solid $dark-border;
            margin: 10px 0;
            height: 40px;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 0 20px;
            &:focus{
              border: 1px solid $primary;
            }
          }
          .input-title{
            margin-top: 10px;
            font-size: $normal;
            color: $light-text;
          }
          .verification-result{
            font-size: $normal;
            color: $danger;
          }
        }
        .message-btn{
          float: right;
        }
        .message-cancle{
          display: inline-block;
        }
        .message-confirm{
          display: inline-block;
        }
      }
    }
    .message-popover{
      padding: 10px 20px;
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
      font-size: $normal;
      i{
        font-size: $big;
      }
    }
    .message-popover.active{
      top: 0;
    }
    .message-popover.success{
      background-color: lighten($success,35);
      color: $success;
    }
    .message-popover.info{
      background-color: lighten($info,35);
      color: $info;
    }
    .message-trigger{
      cursor: pointer;
      color: $primary;
    }
  }
</style>
