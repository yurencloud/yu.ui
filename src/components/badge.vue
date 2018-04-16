<template>
<div class="yu-badge">
  <div style="display: inline-block" v-if="!hidden">
    <div class="badge" v-if="!isDot">
      {{value}} <span v-if="addShow.default">+</span>
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
      addShow: {
        type: Boolean,
        default: false,
      },
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
      this.$emit('click', event);
    },
  },
  mounted() {
    if (Number(this.value)) {
      if (this.max < Number(this.value)) {
        this.value = this.max;
        this.addShow.default = true;
      }
    }
  },
  computed: {
    change() {
      if (Number(this.value)) {
        if (this.max < Number(this.value)) {
          this.value = this.max;
          this.addShow.default = true;
        }
      }
    },
  },
}
</script>

<style scoped type="text/scss" lang="scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-badge{
  position: relative;
  display: inline-block;
  .badge{
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    padding: 0 7px;
    text-align: center;
    background-color:$danger;
    display: inline-block;
    color: #fff;
    font-size: $tiny;
    position: absolute;
    right: -3px;
    top: -7px;
  }
  .slot{
    display: inline-block;
    padding: 5px;
  }
  .yu-button{
    margin: 0;
  }
  .dot{
    background-color: $danger;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    right: 3px;
    top: 0px;
  }
}
</style>
