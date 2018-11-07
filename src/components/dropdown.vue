<template>
  <div class="yu-dropdown"
       @click="command($event)"
       @mouseover="handleMouseover"
       @mouseout="handleMouseout"
  >
    <!--触发下拉框的部分-->
    <div class="trigger">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuDropdown',
  data() {
    return {
      visible: false,
      timer: null,
    }
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
  },
  provide() {
    return {
      rootDrop: this,
    }
  },
  methods: {
    handleMouseover() {
      if (this.trigger === 'hover') {
        clearTimeout(this.timer)
        this.visible = true
      }
    },
    handleMouseout() {
      if (this.trigger === 'hover') {
        this.timer = setTimeout(() => {
          this.visible = false
        }, 1000)
      }
    },
    command(event) {
      this.visible = !this.visible
      const target = event.target
      if (target.tagName === 'LI' && (target.className.indexOf('disabled') === -1)) {
        const comm = target.getAttribute('command')
        this.$emit('command', comm)
        this.visibleChange()
      }
    },
    visibleChange() {
      this.$emit('visibleChange', this.visible)
    },
  },
}
</script>
