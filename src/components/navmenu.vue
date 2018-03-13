<template>
      <ul class="yu-navmenu" :class="{'horizontal':horizontal,'vertical':vertical}" :style="{backgroundColor: backgroundColor,width:width+'px'}">
        <slot></slot>
      </ul>
</template>

<script>
export default {
  name: 'YuNavMenu',
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 200,
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    textColor: {
      type: String,
      default: '#909399',
    },
    activeColor: {
      type: String,
      default: '#409EFF',
    },
  },
  data() {
    return {
      isVertical: false,
      activeIndex: this.defaultActive,
      items: {},
    };
  },
  provide() {
    return {
      rootMenu: this,
    }
  },
  components: {
  },
  methods: {
  },
  beforeMount() {
  },
}
</script>

<style lang="scss" scoped type="text/scss">
@import "../assets/css/varible";
@import "../assets/css/function";
  /*水平方向*/
.yu-navmenu.horizontal{
  border-bottom: 1px solid $border;
  box-sizing: border-box;
  li{
    position: relative;
    color:$light-text;
    font-size:$large ;
    width: 10%;
    &:hover ul{
      height: auto;
      max-height: 250px;
    }
   ul{
     height: 0;
     max-height: 0;
     overflow: hidden;
     position: absolute;
     padding: 0;
     margin-top: 45px;
     box-shadow: $box-shadow;
     display: inline-block;
     left: 0;
     border-bottom: none;
     transition: all .5s linear;
     li{
       border-bottom: none;
       text-align: left;
       display: inline-block;
       width: 200px;
       padding: 10px;
       color: $light-text;
       font-size: $small;
     }
   }
  }
}

  /*垂直方向*/
.yu-navmenu.vertical{
  border-right: 1px solid $dark-border;
  box-sizing: border-box;
  padding-bottom: 100px;
  padding-left: 0;
 li{
   width: 100%;
   text-align: left;
   position: relative;
   margin-left: 0;
   span{
     margin-left: 5px;
   }
   i{
     font-size: $huge;
   }
   &:hover ul{
     height: auto;
     max-height: 300px;
   }
   ul{
     height: 0;
     width: 100%;
     overflow: hidden;
     border-right: 1px solid $dark-border;
     transition: all .5s linear;
     max-height: 0;
     margin-left: -10px;
     margin-top: 20px;
     margin-bottom: -20px;
     padding-left: 0;
     box-sizing: border-box;
     li{
       text-align: left;
       color: $light-text;
       padding: 10px 30px;
       font-size: $small;
       box-sizing: border-box;
     }
   }
 }
}
</style>
