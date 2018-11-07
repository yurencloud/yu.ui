<template>
  <div class="yu-badge">
    <div style="display: inline-block" v-if="!hidden">
      <div class="badge" v-if="!isDot">
        {{valueData}} <span v-if="addShow.default">+</span>
      </div>
      <div class="dot" v-else>
      </div>
    </div>
    <div class="slot" @click="handleClick">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuBadge',
  data() {
    return {
      addShow: false,
      valueData: this.value || '',
    }
  },
  props: {
    value: String,
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
  mounted() {
    if (Number(this.value)) {
      if (this.max < Number(this.value)) {
        this.valueData = this.max
        this.addShow = true
      }
    }
  },
  watch: {
    valueData(valueData) {
      if (Number(valueData)) {
        if (this.max < Number(valueData)) {
          this.addShow = true
          this.valueData = this.max
        }
      }
    },
  },
}
</script>
