<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <yu-breadcrumb separator="/">
      <yu-breadcrumb-item :to="{ path: '/' }">首页</yu-breadcrumb-item>
      <yu-breadcrumb-item :to="{ path: '/manager' }">活动管理</yu-breadcrumb-item>
      <yu-breadcrumb-item :to="{ path: '/project' }">活动项目</yu-breadcrumb-item>
      <yu-breadcrumb-item :to="{ path: '/task' }">项目任务</yu-breadcrumb-item>
      <yu-breadcrumb-item :to="{ path: '/detail' }">任务详情</yu-breadcrumb-item>
    </yu-breadcrumb>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuBreadcrumb from '../components/breadcrumb'
import YuBreadcrumbItem from '../components/breadcrumb-item'

export default {
  methods: {},
  components: {
    YuBreadcrumb,
    YuBreadcrumbItem,
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
