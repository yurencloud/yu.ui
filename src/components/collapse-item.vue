<template>
  <div class="yu-collapse-item">
    <div class="content" :class="{active:visible}">
      <div class="top" @click="toggle">
        <span v-if="!$slots.title">{{title}}</span>
        <slot v-else name="title"/>
        <i class="iconfont icon-angle-down"></i>
      </div>
      <div class="bottom" :style="{height}" ref="bottom">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YuCollapseItem',
  data() {
    return {
      visible: false,
      height: 0,
    }
  },
  props: {
    title: String,
  },
  methods: {
    toggle() {
      this.visible = !this.visible
      if (this.$parent.accordion) {
        const temp = this.visible
        this.$parent.$children.forEach((item) => {
          item.visible = false
        })
        this.visible = temp
      }
    },
  },
  watch: {
    visible(visible) {
      if (visible) {
        this.height = `${this.$refs.bottom.scrollHeight}px`
      } else {
        this.height = 0
      }
    },
  },
}
</script>
