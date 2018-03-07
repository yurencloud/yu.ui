<template>
  <div class="yu-collapse-item">
    <div class="warp">
      <div class="inner">
        <i class="iconfont icon-angle-down"
            :class="{'is-active':isActive}"></i>
        <slot name="title">{{title}}</slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'YuCollapseItem',
  data() {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block',
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
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
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped type="text/scss">

</style>
