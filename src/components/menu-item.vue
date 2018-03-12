<template>
<li class="yu-menu-item"
    @click="active"
    role="menuitem"
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
        item.$el.style.color = this.rootMenu.textColor;
        item.$el.style.borderBottom = 'none';
      });
      if (!this.rootMenu.$el.classList.contains('vertical')) {
        this.$el.style.color = this.rootMenu.activeColor;
        this.$el.style.borderBottom = `2px solid ${this.rootMenu.activeColor}`;
        if (this.$children.length !== 0) {
          this.$children[0].$children.forEach((item) => {
            item.$el.style.color = this.rootMenu.textColor;
          })
        }
      } else {
        this.$el.style.color = this.rootMenu.activeColor;
        this.$el.style.borderBottom = 'none';
      }
      // todo
      if (this.index.length > 3) {
        this.$el.style.borderBottom = 'none';
        this.$el.style.color = this.rootMenu.textColor;
      }
    },
    over() {
      if (this.$children.length !== 0) {
        this.$children[0].$el.style.height = 'auto';
        this.$el.classList.add('switch');
        if (this.rootMenu.$el.classList.contains('vertical')) {
          this.$parent.$el.style.padding = 0;
        }
      }
    },
    leave() {
      if (this.$children.length !== 0) {
        this.$children[0].$el.style.height = '0';
        this.$el.classList.remove('switch');
        if (this.rootMenu.$el.classList.contains('vertical')) {
          this.$parent.$el.style.paddingBottom = '250px';
        }
      }
    },
  },
  mounted() {
    if (this.$children.length !== 0) {
      this.$children[0].$children.forEach((item) => {
        item.$el.style.color = this.rootMenu.textColor;
      })
    }
    if (!this.rootMenu.$el.classList.contains('vertical')) {
      this.$el.style.color = this.rootMenu.textColor;
      if (this.index === '1') {
        this.isactive = true;
        this.$el.style.color = this.rootMenu.activeColor;
        this.$el.style.borderBottom = `2px solid ${this.rootMenu.activeColor}`;
      }
    } else {
      this.$parent.$children.forEach((item) => {
        if (item.index === '1') {
          this.$el.style.color = this.rootMenu.activeColor;
        } else {
          item.$el.style.color = this.rootMenu.textColor;
        }
      });
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
  box-sizing: border-box;
  padding: 20px 10px;
  text-align: center;
  cursor: pointer;
  min-width: 130px;
  color: $light-text;
  position: relative;
  &:hover{
    color:$dark-text;
  }
  .icon-angle-up{
    position: absolute;
    right: 5px;
    top: 23px;
    transition: all .2s linear;
  }
}
.switch{
  i{
    transform: rotate(-180deg);
  }
}

</style>
