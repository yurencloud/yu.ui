<template>
  <div class="yu-dialog">
    <div class="dialog-content" ref="content" @click="change"></div>
    <div class="dialog" :class="{'center':center}" v-if="visible">
      <div class="dialog-inner" :class="[size]">
        <div class="inner">
          <div class="dialog-title">{{title}}<i class="iconfont icon-close" @click="change"></i></div>
          <div class="inner-content" v-if="inner">{{inner}}</div>
          <div class="inner-other" v-else><slot/></div>
        </div>
        <div class="dialog-btn">
          <yu-button size="medium" v-if="showClose" @click="close($event)">{{closeText}}</yu-button>
          <yu-button type="primary" size="medium" v-if="showConfirm" @click="confirm($event)">{{confirmText}}</yu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button'

export default {
  name: 'YuDialog',
  data() {
    return {
      visible: false,
    }
  },
  props: {
    lockScroll: Boolean,
    content: String,
    title: String,
    inner: String,
    showClose: Boolean,
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
    change() {
      this.visible = !this.visible
      const classList = document.getElementsByTagName('body')[0].classList
      if (process.browser) {
        if (this.visible && this.lockScroll) {
          classList.add('lock')
        } else {
          classList.remove('lock')
        }
      }
    },
    close(event) {
      this.change()
      this.$emit('close', event)
    },
    confirm(event) {
      this.change()
      this.$emit('confirm', event)
    },
  },
  mounted() {
    this.$refs.content.innerHTML = this.content
  },
  components: {
    YuButton,
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-dialog{
    .dialog-content{
      display: inline-block;
      cursor: pointer;
    }
    .dialog{
      width: 100%;
      height: 100%;
      position: fixed;
      background-color:rgba(0,0,0,0.4);
      top: 0;
      left: 0;
      z-index: 99999;
      .dialog-inner{
        position: absolute;
        transform: translate(-50%,-50%);
        &.small{
          width: 15%;
          top: 50%;
          left: 50%;
        }
        &.normal{
          width: 30%;
          top: 50%;
          left: 50%;
        }
        &.large{
          width: 50%;
          top: 50%;
          left: 50%;
        }
        &.full{
          width: 100%;
          top: 0;
          left: 50%;
          margin: 0;
          box-sizing: border-box;
          transform: translate(-50%,0);
        }
        padding: 20px;
        background-color: #fff;
        opacity: 1;

        .inner{
          .dialog-title{
            margin-bottom: 10px;
            font-size: $huge;
            i{
              float: right;
            }
          }
          .inner-content{
            margin: 20px 0;
          }
        }
        .dialog-btn{
          float: right;
        }


      }
    }
  }
/*居中显示*/
  .yu-dialog{
    .dialog.center{
      .dialog-inner{
        .inner{
          .dialog-title{
            text-align: center;
          }
        }
        .dialog-btn{
          float: none;
          text-align: center;
        }
      }
    }
  }
</style>
<style>
  body.lock{
    height: 100%;
    overflow: hidden;
  }
</style>
