<template>
<li class="yu-menu-item"
    @click="active"
    role="menuitem"
    :style="[paddingStyle,backgroundClolr,textColor]"
    :class="{'active':isactive}"
    @mouseover="over"
    @mouseleave="leave">
    <slot></slot>
  <i class="iconfont" :class="{'icon-angle-up':icon}"></i>
  <span></span>
</li>
</template>

<script>
import Emitter from '../utils/emitter';

export default {
  name: 'YuMenuItem',
  mixins: [Emitter],
  inject: ['rootMenu'],
  props: {
    index: {
      type: String,
      default: '1',
      required: true,
    },
  },
  data() {
    return {
      isactive: false,
    }
  },
  methods: {
    active() {
      this.$parent.$children.forEach((item) => {
        item.isactive = false;
      });
      this.isactive = true;
      if (this.$children.length !== 0) {
        this.isactive = false;
      }
    },
    over() {
      if (this.$children.length !== 0) {
        console.log(this.$children[0].$el.style.height = 'auto');
      }
    },
    leave() {
      this.isactive = false;
      if (this.$children.length !== 0) {
        console.log(this.$children[0].$el.style.height = '0');
      }
    },
  },
  beforeMount() {

  },
  created() {
    // console.log(this.rootMenu);
  },
  computed: {
    indexPath() {
      const path = [this.index];
      let parent = this.$parent;
      while (parent.$options.componentName !== 'YuNavMenu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ['YuNavMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle() {
      if (this.rootMenu.mode !== 'vertical') return {};

      let padding = 20;
      let parent = this.$parent;

      if (this.rootMenu.collapse) {
        padding = 20;
      } else {
        while (parent && parent.$options.componentName !== 'YuNavMenu') {
          if (parent.$options.componentName === 'ElSubmenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
      }
      return { paddingLeft: padding + 'px' };
    },
    backgroundClolr() {
      return { backgroundColor: this.rootMenu.backgroundClolr }
    },
    textColor() {
      return { color: this.rootMenu.textColor };
    },
    icon() {
      // todo
      console.log(this);
      return this.$children.length === 1;
    },
  },
  mounted() {
    if (this.index === '1') {
      this.isactive = true;
    }
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-menu-item{
  list-style: none;
  display: inline-block;
  width: 10%;
  box-sizing: border-box;
  padding: 10px 10px;
  text-align: center;
  cursor: pointer;
  min-width: 100px;
}
.active{
 span{
   display: inline-block;
   position: absolute;
   width: 100%;
   height: 3px;
   bottom: -2px;
   left: 0;
   background-color: #409EFF;
 }
}
</style>
