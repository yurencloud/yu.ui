<template>
<div class="yu-tooltip" :class="[placement]">
    <div class="tooltip" v-show="visible" :class="[effect,]">
      {{content}}
    </div>
    <div class="text" @mouseover="over" @mouseout="over">
      <div class="arrow angle" v-if="isLight" v-show="visible"></div>
      <div class="arrow iconfont" v-else v-show="visible"></div>
      <slot/>
    </div>
</div>
</template>

<script>
import YuButton from './button'

export default {
  name: 'YuTooltip',
  data() {
    return {
      display: false,
      top: true,
      visible: false,
      isLight: false,
    }
  },
  props: {
    content: String,
    placement: String,
    showArrow: false,
    effect: {
      type: String,
      default: 'dark',
    },
  },
  components: {
    YuButton,
  },
  methods: {
    over() {
      this.visible = !this.visible
    },
  },
  beforeMount() {
    if (this.effect === 'light') {
      this.isLight = true
      this.top = false
    }
  },
}
</script>
