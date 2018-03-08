<template>
  <div class="yu-collapse-item">
    <div class="content">
          <div class="top">
            <span>{{title}}</span>
            <i class="iconfont"
               :class="{'icon-angle-down':!isActive,'icon-angle-up':isActive}" @click="toggle"></i>
          </div>
        <div class="bottom" :class="{'show':!isActive,'trans':accordion}" >
          <slot></slot>
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
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      },
    },
    accordion: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-collapse-item{
    width: 100%;
    .content{
      padding: 10px;
      border-bottom: 1px solid $border;
      overflow: hidden;
      -webkit-animation: all 2s linear;
      -o-animation: all 2s linear;
      animation: all 2s linear;
      box-sizing: border-box;
      &:first-child{
        border-top: 1px solid $border;
      }
      .top{
        margin-bottom: 10px;
      }
      .bottom{
        height: 0;
        overflow: hidden;
      }
      .bottom.show{
        height: 80px;
      }
      .bottom.trans{
        -webkit-transition: all 0.5s linear;
        -moz-transition: all 0.5s linear;
        -ms-transition: all 0.5s linear;
        -o-transition: all 0.5s linear;
        transition: all 0.5s linear;
      }
      i{
        float: right;
        cursor: pointer;
      }
      div{
        padding: 5px 0;
      }
    }

  }
</style>
