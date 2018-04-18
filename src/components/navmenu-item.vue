<template>
   <li class="Yu-navmenu-item" @click="active" :class="{}">
     <slot/>
   </li>
</template>

<script>
export default {
  name: 'YuNavMenuItem',
  props: {
    disabled: Boolean,
    index: String,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    active() {
      // console.log(this.$parent.$children.length);
      const len = this.$parent.$children.length;
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
.Yu-navmenu-item{
  list-style: none;
  float: left;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  color: $light-text;
  font-size: $normal;
  box-sizing: border-box;
  &:hover{
    color: $primary;
    border-bottom: 1px solid $primary;
  }
  &.active{
    color: $primary;
    border-bottom: 1px solid $primary;
  }
}
</style>
