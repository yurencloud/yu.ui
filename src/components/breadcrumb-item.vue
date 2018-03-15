<template>
  <span class="yu-breadcrumb-item" @click="go">
    <span class="item-inner" ref="link" role="link" :class="{last:!next}">
      <slot/>
    </span>
    <span v-if="next" class="point">
      <i class="iconfont" v-if="len > 1" :class="[separator]"></i>
    <span v-else >{{separator}}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'YuBreadcrumbItem',
  inject: ['rootBreadcrumb'],
  props: {
    to: {},
  },
  data() {
    return {
      separator: '',
      len: Number,
      next: '',
    }
  },
  methods: {
    go() {
      const self = this;
      if (this.to) {
        self.$router.history.replace(this.to);
      }
    },
  },
  mounted() {
    this.separator = this.rootBreadcrumb.separator;
    this.len = this.separator.length;
    this.next = Boolean(this.$el.nextElementSibling);
  },
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-breadcrumb-item{
    display: inline-block;
   font-size: $large;
    font-weight: 800;
    .point{
      color: $light-text;
      font-weight: 500;
    }
  }
  .last{
    font-weight: 500;
  }
</style>
