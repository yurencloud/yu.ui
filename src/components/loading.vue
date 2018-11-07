<template>
  <div v-if="loading" class="yu-loading" :class="[align,size,{inline:inline}]">
    <i class="iconfont icon-loading loading" ></i>
    <div class="loading-text"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'YuLoading',
  props: {
    size: String,
    align: String,
    inline: Boolean,
    loading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
