<template>
  <div class="yu-steps"
       :style="{width:width}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuSteps',
  props: {
    active: Number,
    width: String,
    simple: Boolean,
    center: Boolean,
  },
  provide() {
    return {
      rootSteps: this,
    }
  },
  methods: {
  },
  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal)
      const children = this.$children
      children[oldVal].iconSuccess = true
      const before = oldVal - 1
      if (before === -1) {
        children[newVal].conduct = true
        return
      }
      children[before].lineSuccess = true
      if (newVal === 0) return
      children[newVal].conduct = true
    },
  },
  mounted() {
    if (this.active > 0) {
      this.$children[this.active].conduct = true
      for (let i = 0; i < this.active; i++) {
        this.$children[i].iconSuccess = true
        if (i >= 1 && this.active > 1) {
          this.$children[i - 1].lineSuccess = true
        }
      }
    }
    for (let i = 0; i < this.$children.length; i++) {
      const childre = this.$children[i].$el.children[0].children[0]
      if (!childre.classList.contains('have-icon')) {
        childre.children[0].innerText = i + 1
      }
    }
  },
}
</script>
