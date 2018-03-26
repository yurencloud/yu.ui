<template>
  <div class="yu-tabs"
       :style="{width:width,}"
       :class="[type,]">
    <ul class="tabs-nav"
        @click="active">
     <slot name="nav"/>
      <i class="iconfont icon-add-circle-o"
        v-if="addable"
        @click="addItem"
        id="icon"/>
    </ul>
    <div class="tabs-item clearfix" >
      <slot name="item"/>
    </div>
  </div>
</template>

<script>
import YuTabsItem from './tabs-item';
import YuTabsNav from './tabs-nav';
export default {
  name: 'YuTabs',
  provide() {
    return {
      rootTabs: this,
    }
  },
  data() {
    return {
      allComponents: [],
    }
  },
  components: {
    YuTabsItem,
    YuTabsNav,
  },
  props: {
    width: String,
    type: String,
    addable: false,
    closeable: false,
  },
  methods: {
    active(e) {
      let len = e.target.parentNode.children.length;
      if (this.addable) {
        len = e.target.parentNode.children.length - 1
      }
      for (let i = 0; i < len; i++) {
        e.target.parentNode.children[i].index = i;
        e.target.parentNode.children[i].classList.remove('active');
        document.getElementsByClassName('tabs-item')[0].children[i].classList.remove('active');
      }
      e.target.classList.add('active');
      document.getElementsByClassName('tabs-item')[0].children[e.target.index].classList.add('active');
    },
    addItem(e) {
      e.stopPropagation();
    //  todo  添加 New tabs
    },
  },
  mounted() {
    this.$children[0].$el.classList.add('active');
    this.$children[this.$children.length / 2].$el.classList.add('active');
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
.yu-tabs{
  .tabs-nav{
    padding: 0;
    width: 100%;
    border-bottom:1px solid #ddd;
    box-sizing: border-box;
    i{
      display: inline-block;
      float: right;
      margin: 10px 20px;
      font-size: $huge;
    }
  }
  .tabs-item{
    position: relative;
    padding: 10px 20px;
  }
}

.clearfix:after{
  content:'';
  clear:both;
  overflow:hidden;
  height:0;
  display: block;
  *zoom:1;
}
  /*card 卡片风格*/
.yu-tabs.card{
  .tabs-nav{
    height: 43px;
    border-left: none;
    border-right: none;
    li{
      background-color: #fff;
      border-right: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      &:first-child{
        border-left: 1px solid #ddd;
        border-top-left-radius: 3px;
      }
      &:last-child{
        border-top-right-radius: 3px;
      }
    }
    li.active{
      border-bottom: 1px solid #fff;
      color: #409EFF;
    }
  }
}
  /*border-card */
  .yu-tabs.border-card{
    box-shadow: $box-shadow;
    .tabs-nav{
      height: 43px;
      background-color: $background;
      border: 1px solid $border;
      border-left: none;
      border-right: none;
      li{
      }
      li.active{
        background-color:#fff;
        border-bottom: 2px solid #fff;
        border-left: 1px solid $border;
        border-right: 1px solid $border;
        color: #409EFF;
        &:first-child{
          border-left: none;
        }
      }
    }
  }
</style>
