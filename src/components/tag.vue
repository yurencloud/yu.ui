<template>
  <transition :name="disableTransitions ? '' : 'fade'">
    <div class="yu-tag"
         :class="[type,size,{clearBorder:clearBorder}]"
         v-if="visible"
         :style="{backgroundColor:color}">
      <span>
      <slot/>
      </span>
      <i class="iconfont"
         v-if="closable"
         :class="[{'icon-close':closable,'icon-close-circle':!closeIcon}]"
         @click.stop="handleClose"
         @mouseover="toggle"
         @mouseleave="toggle"
      ></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'YuTag',
  props: {
    type: String,
    closable: Boolean,
    size: {
      type: String,
      default: 'middle',
    },
    clearBorder: Boolean,
    disableTransitions: Boolean,
    color: String,
  },
  data() {
    return {
      visible: true,
      closeIcon: true,
    }
  },
  methods: {
    toggle() {
      this.closeIcon = !this.closeIcon
    },
    handleClose(event) {
      this.visible = !this.visible
      this.$emit('close', event)
    },
  },
}
</script>
