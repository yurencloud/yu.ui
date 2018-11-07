<template>
<div class="yu-popover">
  <!--popover-->
  <div class="popover-content"
       v-show="showContent"
       :style="{left:left,top:top}">
    <div class="content">
      <div class="popover-title">{{title}}</div>
      <slot>{{content}}</slot>
    </div>
  </div>
  <!--三角形-->
  <div class="tangle" :class="[position,]"  v-show="showContent">
  </div>
  <!--触发按钮-->
  <div class="popover-trigger" @click="change">
    <slot name="trigger" />
  </div>
</div>
</template>

<script>
export default {
  name: 'YuPopover',
  props: {
    title: String,
    content: String,
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
      },
    },
    left: String,
    top: String,
    delay: {
      type: Number,
      default: 3,
    },
    isDisappear: Boolean,
    position: {
      type: String,
      default: 'top',
    },
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    change() {
      this.showContent = !this.showContent
      if (this.isDisappear) {
        setTimeout(() => {
          this.showContent = !this.showContent
        }, this.delay * 1000)
      }
    },
  },
}
</script>
