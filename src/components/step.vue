<template>
  <div class="yu-step">
    <!--icon && line-->
    <div class="head">
      <div class="icon status"
           v-if="!icon"
           :class="[{'success-icon':iconSuccess},{conduct:conduct},status]">
        <i   class="iconfont icon-angle-right"  :class="{'icon-check':iconSuccess,}"></i>
      </div>
      <div class="have-icon"
           :class="[{'have-icon-success':iconSuccess,},{'have-icon-conduct':conduct},`have-${status}`]"
           v-else>
        <i class="iconfont" :class="[icon]"></i>
      </div>
      <div class="line"
           v-if="lastLine"
           :class="{'line-success':lineSuccess}">
      </div>
    </div>
    <!--title   &&  description-->
    <div class="main">
      <!-- todo 标题的粗细没有改变-->
      <div class="main-title"
           :class="[{'conduct-text':conduct,'success-text':iconSuccess},status]">{{title}}</div>
      <div class="description" v-if="description">{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuStep',
  data() {
    return {
      formerly: true,
      lastLine: true,
      iconSuccess: false,
      lineSuccess: false,
      conduct: false,
    }
  },
  props: {
    title: String,
    description: String,
    icon: String,
    status: String,
  },
  mounted() {
    this.lastLine = this.$el.nextElementSibling;
    this.conduct = !this.$el.previousElementSibling;
  },
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-step {
    display: inline-block;
    width: calc(100% / 3);
    overflow: hidden;
    .head {
      margin-bottom: 20px;
      .icon{
        display: inline-block;
        padding: 5px;
        width: 30px;
        height: 30px;
        box-sizing: border-box;
        color: $light-text;
        border-radius: 50%;
        border: 2px solid $light-text;
      }
      .have-icon{
       i{
         font-size: 30px;
       }
      }
      .success{
        font-weight: 800;
        color: $success;
        i{
          color: $success;
        }
      }
      .error{
        i{
          color: $danger;
        }
      }
      .wait{
        i{
          color: $warming;
        }
      }
      .finish{
        i{
          color: $primary;
        }
      }
      .have-success{
        i{
          color: $success;
        }
      }
      .have-error{
        i{
          color: $danger;
        }
      }
      .have-wait{
        i{
          color: $warming;
        }
      }
      .have-finish{
        i{
          color: $primary;
        }
      }
      .have-icon-conduct{
        color: #000;
      }
      .conduct {
        color: #000;
        border: 2px solid #000;
      }
        .line {
          height: 2px;
          min-width: 100px;
          background-color: $light-text;
          margin-left: 30px;
          margin-top: -15px;
          vertical-align: middle;
        }
        .success-icon {
          color: $success;
          border: 2px solid $success;
        }
      .have-icon-success{
        color: $success;
      }
        .line-success {
          background-color: $success;
        }
      }
      &:last-child {
        .head {
          margin-bottom: 5px;
        }
      }
    .main{
      .conduct-text{
        color: #000;
        font-weight: 800;
      }
      .success-text{
        color: $success;
        font-weight: 600;
      }
    }
    }
</style>
