<template>
 <div class="yu-drop-down"
      @click="command($event)">
   <!--触发下拉框的部分-->
   <div class="trigger" >
     <slot/>
   </div>
   <div class="list">
     <slot name="list"/>
   </div>
 </div>
</template>

<script>
export default {
  name: 'YuDropDown',
  data() {
    return {
      visible: false,
    }
  },
  provide() {
    return {
      rootDrop: this,
    }
  },
  methods: {
    command(event) {
      this.visible = !this.visible;
      const target = event.target;
      if (target.tagName === 'LI' && (target.className.indexOf('disabled') === -1)) {
        const comm = target.getAttribute('command');
        this.$emit('command', comm);
        this.visibleChange();
      }
    },
    visibleChange() {
      this.$emit('visibleChange', this.visible);
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-drop-down{
  display: inline-block;
  .list{
    position: relative;
  }
}
</style>
