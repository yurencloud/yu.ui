<template>
  <div class="yu-tag"
       :class="[type,]"
       @click="close"
       v-if="isShow">
    <slot/>
    <i class="iconfont"
       v-if="closable"
       :class="[{'icon-close':closable,'close-circle':!closeIcon}]"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'YuTag',
  props: {
    type: String,
    closable: Boolean,
  },
  data() {
    return {
      isShow: true,
      closeIcon: true,
    }
  },
  methods: {
    close() {
      this.isShow = !this.isShow;
    },
    toggle() {
      this.closeIcon = !this.closeIcon;
    },
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-tag{
     padding:0 10px;
    border: $primary;
    background-color: lighten($primary,33);
    display: inline-block;
    height: 32px;
    line-height: 30px;
    font-size: $tiny;
    color: $primary;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid lighten($primary,20);
    white-space: nowrap;
    margin-right: 10px;
    margin-bottom: 10px;
    i{
      font-size: $small;
      margin-left: 3px;
    }
  }
  .yu-tag.info{
    border: $info;
    background-color: lighten($info,35);
    color: $info;
    border: 1px solid lighten($info,20);
  }
  .yu-tag.success{
    border: $success;
    background-color: lighten($success,40);
    color: $success;
    border: 1px solid lighten($success,30);
  }
  .yu-tag.warming{
    border: $warming;
    background-color: lighten($warming,40);
    color: $warming;
    border: 1px solid lighten($warming,30);
  }
  .yu-tag.error{
    border: $danger;
    background-color: lighten($danger,27);
    color: $danger;
    border: 1px solid lighten($danger,20);
  }

</style>
