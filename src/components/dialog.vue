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

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-dialog {
    .dialog-content {
      display: inline-block;
      cursor: pointer;
    }
    .dialog {
      width: 100%;
      height: 100%;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.4);
      top: 0;
      left: 0;
      z-index: 99999;
      .dialog-inner {
        position: absolute;
        transform: translate(-50%, -50%);
        &.small {
          width: 15%;
          top: 50%;
          left: 50%;
        }
        &.normal {
          width: 30%;
          top: 50%;
          left: 50%;
        }
        &.large {
          width: 50%;
          top: 50%;
          left: 50%;
        }
        &.full {
          width: 100%;
          top: 0;
          left: 50%;
          height: 100%;
          margin: 0;
          box-sizing: border-box;
          transform: translate(-50%, 0);
        }
        padding: 20px;
        background-color: #fff;
        opacity: 1;

        .inner {
          .dialog-title {
            margin-bottom: 10px;
            font-size: $huge;
            color: $text;
            font-weight: bold;
            i {
              float: right;
              cursor: pointer;
              transition: color .4s;
              &:hover{
                color: $primary;
              }
            }
          }
          .inner-content {
            color: $text;
            margin: 20px 0;
          }
        }
        .dialog-btn {
          float: right;
        }

      }
    }
  }

  /*居中显示*/
  .yu-dialog {
    .dialog.center {
      .dialog-inner {
        .inner {
          .dialog-title {
            text-align: center;
          }
        }
        .dialog-btn {
          float: none;
          text-align: center;
        }
        .inner-content {
          text-align: center;
        }
        .inner-other {
          text-align: center;
        }
      }
    }
  }
</style>
<style>
  body.lock {
    height: 100%;
    overflow: hidden;
  }
</style>
