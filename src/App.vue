<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import "./assets/yu.ui";
  #app {
    font-family: $font-family;
  }
</style>
