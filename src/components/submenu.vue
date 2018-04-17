<template>
  <li class="Yu-navmenu-item" @click="change" :class="{active:isActive}">
    <slot name="title"/><i class="iconfont icon-angle-bottom"></i>
    <ul class="yu-submenu" v-show="isShow">
      <slot/>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'YuSubMenu',
  data() {
    return {
      offset: 0,
      isShow: false,
      isActive: false,
    }
  },
  methods: {
    change() {
      const len = this.$parent.$children.length;
      for (let i = 0; i < len; i++) {
        this.$parent.$children[i].$el.classList.remove('active');
      }
      //  todo  兄弟元素的子元素
      // 存在问题
      const childLen = this.$children.length;
      for (let i = 0; i < childLen; i++) {
        const lens = this.$children[i].$children.length;
        for (let j = 0; j < lens; j++) {
          this.$children[i].$children[j].$el.classList.remove('active');
        }
      }
      this.$el.classList.add('active');
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    this.offset = this.$refs.ul.children.length - 1;
  },
  computed: {
  },
}
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .Yu-navmenu-item{
    list-style: none;
    position:relative;
    float: left;
    padding: 0 20px;
    height: 60px;
    box-sizing: border-box;
    line-height: 60px;
    color: $light-text;
    font-size: $normal;
    &:hover{
      color: $primary;
      border-bottom: 1px solid $primary;
    }
    .yu-submenu{
      position: absolute;
      left: 0;
      padding-left: 0;
      background-color: #fff;
      top: calc(100% + 5px);
      width: 180px;
      box-shadow: $box-shadow;
      .Yu-navmenu-item{
        float: none;
        height: 40px;
        line-height: 40px;
        width: 100%;
        padding-right: 0;
        padding-left: 0;
        text-indent:10px;
        &:hover{
          color: $dark-text;
          background-color: $primary;
        }
      }
    }
  }
  .Yu-navmenu-item.active{
    color: $primary;
    border-bottom: 1px solid $primary;
  }
</style>
