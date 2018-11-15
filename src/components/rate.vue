<template>
  <div class="yu-rate" @mouseout="handleMouseout"  >
    <i v-for="item in options"
       :data-value="item.value"
       v-bind:key="item.value"
       class="iconfont"
       :class="[item.status?item.activeIcon:item.inactiveIcon]"
       @mouseover="handleMouseover(item.value)"
       @click="handleClick(item.value)"
    ></i>
    <span v-if="labeled">{{label[value-1]}}</span>
    <input type="text" :name="name" :value="value" style="display: none">
  </div>
</template>

<script>
export default {
  name: 'YuRate',
  data() {
    return {
      currentValue: 0,
      isMouseover: false,
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    options: {
      type: Array,
      default() {
        return [
          { value: 1, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false },
          { value: 2, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false },
          { value: 3, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false },
          { value: 4, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false },
          { value: 5, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false },
        ]
      },
    },
    readOnly: Boolean,
    name: String,
    labeled: Boolean,
    label: {
      type: Array,
      default: () => ['极差', '失望', '一般', '满意', '惊喜'],
    },
  },
  methods: {
    handleClick(value) {
      if (this.readOnly) return
      this.$emit('input', value)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
    handleMouseout() {
      if (this.readOnly) return
      this.currentValue = 0
      this.isMouseover = false
    },
    handleMouseover(value) {
      if (this.readOnly) return
      this.isMouseover = true
      this.currentValue = value
    },
  },
  watch: {
    value(value) {
      this.options.map((item, index) => {
        item.status = index < value
      })
    },
    currentValue(value) {
      if (this.isMouseover) {
        this.options.map((item, index) => {
          item.status = index < value
        })
      } else {
        this.options.map((item, index) => {
          item.status = index < this.value
        })
      }
    },
  },
  mounted() {
    if (this.value !== 0) {
      this.currentValue = this.value
    }
  },
}
</script>
