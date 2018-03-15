<template>
  <div class="yu-collapse-item" @click="toggle">
    <div class="content">
          <div class="top">
            <span>{{title}}</span>
            <i class="iconfont icon-angle-down" :class="{rotate:isActive}"></i>
          </div>
        <div class="bottom" :class="{show:!isActive,trans:accordion}">
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
      isActive: true,
    }
  },
  props: {
    title: String,
    accordion: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggle(index) {
      this.isActive = !this.isActive;
      console.log(index);
    },
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-collapse-item{
    width: 100%;
    margin: 0;
    .content{
      padding: 10px;
      width: 100%;
      border-bottom: 1px solid $border;
      overflow: hidden;
      animation: all 2s linear;
      box-sizing: border-box;
      display: inline-block;
      .top{
        cursor: pointer;
      }
      .bottom{
        max-height: 0;
        overflow: hidden;
        padding-top: 5px;
        div{
          padding-bottom: 5px;
        }
      }
      .bottom.show{
        max-height:80px;
      }
      .bottom.trans{
        transition: all 0.2s linear;
      }
      i{
        float: right;
        cursor: pointer;
        transition: all .2s linear;
      }
      i.rotate{
        transform: rotate(-180deg);
      }
    }

  }
</style>
