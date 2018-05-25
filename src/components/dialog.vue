<template>
  <div class="yu-dialog">
    <div class="dialog-content" ref="content" @click="change"></div>
    <div class="dialog" :class="{'center':center}" v-if="isShow">
      <div class="dialog-inner">
        <div class="inner">
          <div class="dialog-title">{{title}}<i class="iconfont icon-close" @click="change"></i></div>
          <div class="inner-content" v-if="inner">{{inner}}</div>
          <div class="inner-other" v-else><slot/></div>
        </div>
        <div class="dialog-btn">
          <yu-button size="medium" v-if="showCancle" @click="close($event)">{{cancleText}}</yu-button>
          <yu-button type="primary" size="medium" v-if="showConfirm" @click="confirm($event)">{{confirmText}}</yu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YuButton from './button';

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
    showCancle: Boolean,
    showConfirm: Boolean,
    cancleText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确认',
    },
    center: Boolean,
  },
  methods: {
    change() {
      this.visible = !this.visible;
      this.lockScroll = this.visible;
      if (this.lockScroll) {
        document.getElementsByTagName('body')[0].classList.add('lock');
      } else if (!this.lockScroll) {
        document.getElementsByTagName('body')[0].classList.remove('lock');
      }
    },
    close(event) {
      this.change();
      this.$emit('cancle', event)
    },
    confirm(event) {
      this.change();
      this.$emit('confirm', event)
    },
  },
  mounted() {
    this.$refs.content.innerHTML = this.content;
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
        width: 30%;
        padding: 20px;
        background-color: #fff;
        opacity: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
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
