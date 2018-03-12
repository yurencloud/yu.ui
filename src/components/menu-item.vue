<template>
<li class="yu-menu-item"
    @click="active"
    role="menuitem"
    :style="[paddingStyle]"
    :class="{'active':isactive}"
    @mouseover="over"
    @mouseleave="leave">
    <slot></slot>
  <i class="iconfont" :class="{'icon-angle-up':icon}"></i>
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
    icon: {
      type: Boolean,
      default: false,
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
        this.$children[0].$el.style.height = 'auto';
        this.$el.classList.add('switch');
      }
    },
    leave() {
      if (this.$children.length !== 0) {
        this.$children[0].$el.style.height = '0';
        this.$el.classList.remove('switch');
      }
    },
  },
  beforeMount() {

  },
  created() {

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
    backgroundColor() {
      return { backgroundColor: this.rootMenu.backgroundColor }
    },
    color() {
      return{
        //todo
        // border-bottom: 2px solid this.rootMenu.activeColor,
      // color: this.rootMenu.textcolor;
      }
    },
  },
  mounted() {
    if (this.index === '1') {
      this.isactive = true;
    }
    console.log(this.rootMenu);
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
  min-width: 120px;
  color:$light-text;
  &:hover{
    color:$dark-text;
  }
  i{
    float: right;
    transition: all .2s linear;
  }
}
.switch{
  i{
    transform: rotate(-180deg);
  }
}
.active{
  border-bottom: 2px solid #409EFF;
  color: $dark-text;
}
</style>
