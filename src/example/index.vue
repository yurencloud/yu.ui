<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <a href="/#/button">button</a>
    <a href="/#/radio">radio</a>
    <a href="/#/checkbox">checkbox</a>
    <a href="/#/input">input</a>
    <a href="/#/counter">counter</a>
    <a href="/#/select">select</a>
    <a href="/#/cascader">cascader</a>
    <a href="/#/switch">switch</a>
    <a href="/#/slider">slider</a>
    <a href="/#/time-picker">time-picker</a>
    <a href="/#/date-picker">date-picker</a>
    <a href="/#/upload">upload</a>
    <a href="/#/rate">rate</a>
    <a href="/#/form">form</a>
    <a href="/#/table">table</a>
    <a href="/#/tag">tag</a>
    <a href="/#/message">message</a>
    <a href="/#/progress">progress</a>
    <a href="/#/pagination">pagination</a>
    <a href="/#/badge">badge</a>
    <a href="/#/alert">alert</a>
    <a href="/#/notification">notification</a>
    <a href="/#/message-box">message-box</a>
    <a href="/#/loading">loading</a>
    <a href="/#/scroll-select">scroll-select</a>
    <a href="/#/breadcrumb">breadcrumb</a>
    <a href="/#/steps">steps</a>
    <a href="/#/dialog">dialog</a>
    <a href="/#/tooltip">tooltip</a>
    <a href="/#/popover">popover</a>
    <a href="/#/card">card</a>
    <a href="/#/collapse">collapse</a>

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
  a{
    display: block;
  }
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
