<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSwitch from '../components/switch'

export default {
  methods: {},
  components: {
    YuSwitch,
  },
}
</script>
<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .title {
    color: $text;
    padding: 14px 0;
    margin: 20px 0;
    border-bottom: 1px solid $border;
  }

  .sub-title {
    color: $text;
    padding: 0 8px;
    margin: 20px 0;
    border-left: 4px solid $primary;
  }
</style>
