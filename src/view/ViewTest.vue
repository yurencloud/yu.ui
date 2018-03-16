<template>
  <div id="container" style="margin: 30px">
    <h1>这是测试页面</h1>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';

export default {
  name: 'ViewContainer',
  methods: {},
  components: {
    YuButton,
  },
};
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

  .dropdown-list {
    .list-content {
      display: inline-block;
      float: left;
      margin-right: 50px;
    }
  }
</style>
