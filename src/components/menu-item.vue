<template>
<li class="yu-menu-item"
    @click="active"
    role="menuitem"
    @mouseover="over"
    @mouseleave="leave">
    <slot/>
  <i class="iconfont" :class="{'icon-angle-up':icon}"></i>
</li>
</template>

<script>

export default {
  name: 'YuMenuItem',
  inject: ['rootMenu'],
  props: {
    index: {
      type: String,
      default: '1',
      required: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getColorChannels(color) {
      color = color.replace('#', '')
      if (/^[0-9a-fA-F]{3}$/.test(color)) {
        color = color.split('')
        for (let i = 2; i >= 0; i -= 1) {
          color.splice(i, 0, color[i])
        }
        color = color.join('')
      }
      if (/^[0-9a-fA-F]{6}$/.test(color)) {
        return {
          red: parseInt(color.slice(0, 2), 16),
          green: parseInt(color.slice(2, 4), 16),
          blue: parseInt(color.slice(4, 6), 16),
        }
      }
      return {
        red: 255,
        green: 255,
        blue: 255,
      }
    },
    mixColor(color, percent) {
      let { red, green, blue } = this.getColorChannels(color)
      if (percent > 0) { // shade given color
        red *= 1 - percent
        green *= 1 - percent
        blue *= 1 - percent
      } else { // tint given color
        red += (255 - red) * percent
        green += (255 - green) * percent
        blue += (255 - blue) * percent
      }
      return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
    },
    active(e) {
      e.stopPropagation()
      this.$parent.$children.forEach((item) => {
        const el = item.$el
        el.style.color = this.rootMenu.textColor
        el.style.borderBottom = 'none'
      })
      if (!this.rootMenu.$el.classList.contains('vertical')) {
        this.$el.style.color = this.rootMenu.activeColor
        this.$el.style.borderBottom = `2px solid ${this.rootMenu.activeColor}`
        if (this.$children.length !== 0) {
          this.$children[0].$children.forEach((item) => {
            item.$el.style.color = this.rootMenu.textColor
          })
        }
      } else {
        this.$el.style.color = this.rootMenu.activeColor
        this.$el.style.borderBottom = 'none'
      }
      if (this.index.length > 3) {
        this.$el.style.borderBottom = 'none'
        this.$el.style.color = this.rootMenu.$parent.$parent.activeColor
      }
    },
    over() {
      if (this.$children.length !== 0) {
        this.$el.classList.add('switch')
        if (this.rootMenu.$el.classList.contains('vertical')) {
          this.$parent.$el.style.paddingBottom = 0
        }
      }
      // 当鼠标进入的时候改变垂直展示时鼠标所在项的背景的颜色
      if (this.rootMenu.$el.classList.contains('vertical') || this.index.length > 3) {
        this.$el.style.backgroundColor = this.mixColor(this.rootMenu.backgroundColor, 0.1)
      } else if (this.rootMenu.$el.classList.contains('horizontal') || this.index.length > 3) {
        this.$el.style.backgroundColor = this.mixColor(this.rootMenu.backgroundColor, 0.1)
        if (this.rootMenu.backgroundColor === 'white') {
          this.$el.style.backgroundColor = this.rootMenu.backgroundColor
          this.$el.style.color = this.mixColor(this.rootMenu.textColor, 0.5)
        }
      }
    },
    leave() {
      const root = this.rootMenu
      if (this.$children.length !== 0) {
        this.$el.classList.remove('switch')
        if (root.$el.classList.contains('vertical')) {
          this.$parent.$el.style.paddingBottom = '250px'
        }
      }
      // 当鼠标离开的时候恢复垂直展示时鼠标所在项的背景的颜色
      if (root.$el.classList.contains('vertical') || this.index.length > 3) {
        this.$el.style.backgroundColor = root.backgroundColor
      } else if (root.$el.classList.contains('horizontal') || this.index.length > 3) {
        this.$el.style.backgroundColor = root.backgroundColor
        if (root.backgroundColor === 'white') {
          this.$el.style.color = this.rootMenu.textColor
        }
      }
    },
  },
  mounted() {
    if (this.$children.length !== 0) {
      this.$children[0].$children.forEach((item) => {
        item.$el.style.color = this.rootMenu.textColor
      })
    }
    if (!this.rootMenu.$el.classList.contains('vertical')) {
      this.$el.style.color = this.rootMenu.textColor
      if (this.index === '1') {
        this.$el.style.color = this.rootMenu.activeColor
        this.$el.style.borderBottom = `2px solid ${this.rootMenu.activeColor}`
      }
    } else {
      this.$parent.$children.forEach((item) => {
        if (item.index === '1') {
          this.$el.style.color = this.rootMenu.activeColor
        } else {
          item.$el.style.color = this.rootMenu.textColor
        }
      })
    }
  },
}
</script>
