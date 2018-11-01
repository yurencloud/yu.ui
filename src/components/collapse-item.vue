<template>
  <div class="yu-collapse-item">
    <div class="content" :class="{active:visible}">
      <div class="top" @click="toggle">
        <span>{{title}}</span>
        <i class="iconfont icon-angle-down"></i>
      </div>
      <div class="bottom" :style="{height: visible ? height : 0 }" ref="bottom">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YuCollapseItem',
  data() {
    return {
      visible: false,
      height: 0,
    }
  },
  props: {
    title: String,
    // TODO::添加padding
    // padding: Boolean,
    accordion: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible
      if (this.accordion) {
        const temp = this.visible
        this.$parent.$children.forEach((item) => {
          item.visible = false
        })
        this.visible = temp
      }
    },
  },
  mounted() {
    this.height = `${this.$refs.bottom.scrollHeight}px`
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-collapse-item {
    width: 100%;
    margin: 0;
    font-size: $normal;
    .content {
      width: 100%;
      border-bottom: 1px solid $border;
      overflow: hidden;
      box-sizing: border-box;
      display: inline-block;
      .top {
        height: 50px;
        cursor: pointer;
        line-height: 50px;
      }
      .bottom {
        height: 0;
        overflow: hidden;
        transition: 0.3s height ease-in-out;
      }
      i {
        float: right;
        cursor: pointer;
        transition: all .2s ease;
      }
      &.active {
        i {
          transform: rotate(-180deg);
        }
      }
    }
  }
</style>
