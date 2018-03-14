<template>
  <div class="yu-drop-down" @mouseover="mouse"
                            @mouseout="mouse"
                            @click="toggle">
      <div class="dropdown-title" :class="{trans:isShow}">
        <slot name="title"/>
      </div>
     <div class="options" :class="[{transition:isShow}]">
       <slot name="menu"/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'YuDropDown',
  props: {
    trigger: String,
  },
  data() {
    return {
      isShow: false,
    }
  },
  provide() {
    return {
      rootDrop: this,
    }
  },
  methods: {
    mouse() {
      if (this.trigger === 'click') { return; }
      this.isShow = !this.isShow;
    },
    toggle(e) {
      e.stopImmediatePropagation();
      if (this.trigger === 'hover') { return; }
      this.isShow = !this.isShow;
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-drop-down{
  width: auto;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  .transition{
   ul{
     max-height: 400px;
   }
  }
  .dropdown-title{
    i{
      position: absolute;
      top: 8px;
      right: 10px;
      transition: all 0.3s linear;
    }
  }
  .trans{
      i{
        transform: rotate(-180deg);
      }
  }
}
</style>
