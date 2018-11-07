<template>
  <span class="yu-breadcrumb-item" @click="go">
    <span class="item-inner" ref="link" role="link" :class="{last:!next}">
      <slot/>
    </span>
    <span v-if="next" class="point">
      <i class="iconfont" v-if="iconSeparator" :class="[iconSeparator]"></i>
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
      separator: '/',
      iconSeparator: null,
      next: '',
    }
  },
  methods: {
    go(event) {
      const self = this
      if (this.to) {
        self.$router.history.replace(this.to)
      }
      this.$emit('click', event)
    },
  },
  mounted() {
    this.separator = this.rootBreadcrumb.separator
    this.iconSeparator = this.rootBreadcrumb.iconSeparator
    this.next = Boolean(this.$el.nextElementSibling)
  },
}
</script>
