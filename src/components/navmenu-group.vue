<template>
  <li class="Yu-navmenu-item" @click='groupClick'>
      <slot name="item"/>
    <ul class="yu-navmenu-group">
      <slot/>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'YuNavMenuGroup',
  methods: {
    groupClick() {
      const len = this.$parent.$children.length;
      console.log(len);
      for (let i = 0; i < len; i++) {
        this.$parent.$children[i].$el.classList.remove('active')
      }
      this.$el.classList.add('active');
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-navmenu-group{
  padding-left: 0;
  .Yu-navmenu-item{
    height: 40px;
    line-height: 40px;
    width: 100%;
    &:hover{
      color: $dark-text;
      background-color: $primary;
    }
  }
}
</style>
