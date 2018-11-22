<template>
  <div class="yu-tabs"
       :style="{width:width,}"
       :class="[type,tabPosition]">
    <ul class="tabs-nav"
        @click="active"
    >
      <slot name="nav"/>
      <i class="iconfont icon-add-circle-o"
         v-if="addable"
         @click="addItem"
         id="icon"></i>
      <i class="line" ref="line"></i>
    </ul>
    <div class="tabs-item clearfix" ref="tabitem">
      <slot name="item"/>
    </div>
  </div>
</template>

<script>
import YuTabsItem from './tabs-item'
import YuTabsNav from './tabs-nav'

export default {
  name: 'YuTabs',
  provide() {
    return {
      rootTabs: this,
    }
  },
  data() {
    return {
      allComponents: [],
    }
  },
  components: {
    YuTabsItem,
    YuTabsNav,
  },
  props: {
    width: String,
    type: {
      type: String,
      default: 'default',
    },
    addable: false,
    closeable: false,
    tabPosition: {
      type: String,
      default: 'top',
    },
    tabItemHeight: String,
  },
  methods: {
    active(e) {
      let len = e.target.parentNode.children.length
      if (this.addable) {
        len = e.target.parentNode.children.length - 1
      }
      for (let i = 0; i < len - 1; i++) {
        e.target.parentNode.children[i].index = i
        e.target.parentNode.children[i].classList.remove('active')
        this.$refs.tabitem.children[i].classList.remove('active')
      }
      const line = this.$refs.line
      const currentIndex = e.target.index
      if (this.tabPosition === 'left' || this.tabPosition === 'right') {
        line.style.top = `${currentIndex * 40}px`
      } else if (this.tabPosition === 'bottom' || this.tabPosition === 'top') {
        line.style.left = `${e.target.offsetLeft}px`
      }
      this.$refs.tabitem.children[currentIndex].classList.add('active')
      if (this.type === 'default') {
        setTimeout(() => {
          e.target.classList.add('active')
        }, 300)
      } else {
        e.target.classList.add('active')
      }
      this.$emit('click', e)
    },
    addItem(e) {
      e.stopPropagation()
    },
  },
  mounted() {
    this.$children[0].$el.classList.add('active')
    this.$children[this.$children.length / 2].$el.classList.add('active')
  },
}
</script>
