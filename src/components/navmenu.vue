<template>
      <ul class="yu-navmenu" :class="{'horizontal':horizontal,'vertical':isVertical}">
        <slot></slot>
      </ul>
</template>

<script>
export default {
  name: 'YuNavMenu',
  props: {
    horizontal: {
      type: Boolean,
      default: true,
    },
    defaultActive: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
  data() {
    return {
      isVertical: false,
      activeIndex: this.defaultActive,
      items: {},
    };
  },
  provide() {
    return {
      rootMenu: this,
    }
  },
  components: {
  },
  methods: {
    updateDefaultIndex() {

    },
  },
  beforeMount() {
  },
}
</script>

<style lang="scss" scoped type="text/scss">
@import "../assets/css/varible";
@import "../assets/css/function";
  /*水平方向*/
.yu-navmenu.horizontal{
  border-bottom: 1px solid $border;
  box-sizing: border-box;
  li{
    position: relative;
   ul{
     height: 0;
     overflow: hidden;
     position: absolute;
     padding: 0;
     border-bottom: none;
     max-width: 100px;
     width: 100%;
     li{
       width: 100%;
       max-width: 100px;
     }
   }
  }

}
  /*垂直方向*/
.yu-navmenu.isVertical{
}
</style>
