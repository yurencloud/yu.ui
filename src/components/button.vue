<template>
  <button
    @click="handleClick"
    class="yu-button"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
              type,
              size,
              {disabled:disabled},
              shape,
              {plain:plain},
              {loading:loading}
            ]" >
    <i v-if="icon" class="iconfont" v-bind:class="[icon]"></i>
    <i v-if="loading" class="iconfont icon-loading loading"></i>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'YuButton',
  props: {
    icon: String,
    disabled: Boolean,
    shape: String,
    loading: Boolean,
    autofocus: Boolean,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    nativeType: { // 原生属性button / submit / reset
      type: String,
      default: 'button',
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    },
  },
}
</script>
