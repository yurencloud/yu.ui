<template>
    <div class="yu-dropdown-menu"
         v-if="rootDrop.visible"
         @mouseover="handleMouseover"
         @mouseout="handleMouseout"
    >
      <div class="dropdown-angle"></div>
      <ul class="menu-ul">
        <slot/>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'YuDropdownMenu',
  inject: ['rootDrop'],
  methods: {
    handleMouseover() {
      if (this.$parent.trigger === 'hover') {
        clearTimeout(this.$parent.timer)
      }
    },
    handleMouseout() {
      if (this.$parent.trigger === 'hover') {
        clearTimeout(this.$parent.timer)
        this.$parent.visible = false
      }
    },
  },
}
</script>
