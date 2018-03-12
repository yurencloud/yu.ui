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
    defaultActive: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    textColor: {
      type: String,
      default: '#000',
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
   ul{
     height: 0;
     overflow: hidden;
     position: absolute;
     padding: 0;
     margin-top: 22px;
     box-shadow: $box-shadow;
     display: inline-block;
     left: 0;
     border-bottom: none;
     li{
       border-bottom: none;
       text-align: left;
       display: inline-block;
       width: 200px;
       padding: 5px 10px;
       color: $light-text;
       font-size: $small;
       &:hover{
         color: #409EFF;
       }
     }
   }
  }

}
  /*垂直方向*/
.yu-navmenu.vertical{
  border-right: 1px solid $dark-border;
  box-sizing: border-box;
  padding-bottom: 250px;
 li{
   width: 100%;
   text-align: left;
   position: relative;
   overflow: hidden;
   span{
     margin-left: 10px;
   }
   ul{
     height: 0;
     width: 100%;
     overflow: hidden;
     border-right: 1px solid $dark-border;
     -webkit-transition: all 0.2s linear;
     -moz-transition: all 0.2s linear;
     -ms-transition: all 0.2s linear;
     -o-transition: all 0.2s linear;
     transition: all 0.2s linear;
   }
 }
}
</style>
