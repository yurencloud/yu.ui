<template>
  <div class="yu-tabs"
       :style="{width:width,}"
       :class="[type,tabPosition]">
    <ul class="tabs-nav"
        @click="active"
    >
     <slot name="nav"/>
      <i class="iconfont icon-add-circle-o"
        v-if="addable"
        @click="addItem"
         id="icon"></i>
      <i class="line-left" ref="line"></i>
    </ul>
    <div class="tabs-item clearfix" ref="tabitem">
      <slot name="item"/>
    </div>
  </div>
</template>

<script>
import YuTabsItem from './tabs-item'
import YuTabsNav from './tabs-nav'

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
    tabPosition: String,
    tabItemHeight: String,
  },
  methods: {
    active(e) {
      let len = e.target.parentNode.children.length
      if (this.addable) {
        len = e.target.parentNode.children.length - 1
      }
      for (let i = 0; i < len - 1; i++) {
        e.target.parentNode.children[i].index = i
        e.target.parentNode.children[i].classList.remove('active')
        this.$refs.tabitem.children[i].classList.remove('active')
      }
      const line = this.$refs.line
      if (this.tabPosition === 'left' || this.tabPosition === 'right') {
        line.style.top = `${e.target.index * 40}px`
      } else if (this.tabPosition === 'bottom' || !this.tabPosition) {
        line.style.left = `${e.target.index * 100}px`
      }
      this.$refs.tabitem.children[e.target.index].classList.add('active')
      if (this.tabPosition) {
        setTimeout(() => {
          e.target.classList.add('active')
        }, 300)
      } else {
        e.target.classList.add('active')
      }
      this.$nextTick(() => {
        console.log(document.getElementsByClassName('tabs-nav')[0].children[0].style)
      })
      this.$emit('click', e)
    },
    addItem(e) {
      e.stopPropagation()
    //  todo  添加 New tabs
    },
  },
  mounted() {
    this.$children[0].$el.classList.add('active')
    this.$children[this.$children.length / 2].$el.classList.add('active')
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
    position: relative;
    i{
      display: inline-block;
      float: right;
      margin: 10px 20px;
      font-size: $huge;
    }
    .line-left{
      display: block;
      height: 3px;
      width: 100px;
      background-color: $primary;
      position: absolute;
      transition: all .3s linear;
      bottom: 0;
      margin: 0;
    }
    li{
      border-bottom: 3px solid #fff;
    }
    li.active{
      border-bottom: 3px solid $primary;
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
      color: $primary;
    }
    li{
      border-bottom: none;
    }
    .line-left{
      display: none;
    }
  }
}
  /*border-card */
  .yu-tabs.border-card{
    box-shadow: $box-shadow;
    .tabs-nav{
      height: 43px;
      background-color: lighten($info,35);
      border: 1px solid $dark-border;
      border-left: none;
      border-right: none;
      li{
        border-bottom: none;
      }
      .line-left{
        display: none;
      }
      li.active{
        background-color:#fff;
        border-bottom: 2px solid #fff;
        border-left: 1px solid $dark-border;
        border-right: 1px solid $dark-border;
        color: $primary;
        &:first-child{
          border-left: none;
        }
      }
    }
  }
  /*不同方位的tab栏*/
  /*bottom*/
  .yu-tabs.bottom{
    display: flex;
    flex-direction: column-reverse;
    .tabs-nav{
      margin: 0;
      position: relative;
      .line-left{
        display: block;
        height: 3px;
        width: 100px;
        background-color: $primary;
        position: absolute;
        transition: all .3s linear;
        left: 0;
        bottom: 0;
        margin: 0;
      }
      li{
        border-bottom: 3px solid #fff;
      }
      li.active{
        border-bottom: 3px solid $primary;
      }
    }
  }
.yu-tabs.bottom.border-card{
  .tabs-nav{
    background-color: lighten($background,15);
    border: 1px solid $dark-border;
    border-left: none;
    border-right: none;
    li{
      margin-top: -1px;
    }
    li.active{
      background-color:#fff;
      border-bottom: 2px solid #fff;
      border-left: 1px solid $dark-border;
      border-right: 1px solid $dark-border;
      color: #409EFF;
      &:first-child{
        border-left: none;
      }
    }
  }
}
  /*left*/
  .yu-tabs.left{
    display: flex;
    .tabs-nav{
      max-width: 150px;
      border: none;
      text-align: center;
      position: relative;
      .line-left{
        display: block;
        height: 40px;
        width: 3px;
        background-color: $primary;
        position: absolute;
        transition: all .3s linear;
        right: 0;
        top: 0;
        margin: 0;
      }
      li{
        display: block;
        border-bottom: none;
        border-right: 2px solid $light-border;
      }
      li.active{
        color: $primary;
      }
    }
    .tabs-item{
      width: calc(100% - 150px);
      .yu-tabs-item{
        width: 100%;
        color: $dark-text;
      }
    }
  }
  /*right*/
  .yu-tabs.right{
    display: flex;
    flex-direction: row-reverse;
    .tabs-nav{
      max-width: 150px;
      border: none;
      text-align: center;
      position: relative;
      .line-left{
        display: block;
        height: 40px;
        width: 3px;
        background-color: $primary;
        position: absolute;
        transition: all .3s linear;
        left: 0;
        top: 0;
        margin: 0;
      }
      li{
        display: block;
        border-bottom: none;
        border-left: 2px solid $light-border;
      }
      li.active{
        color: $primary;
      }
    }
    .tabs-item {
      width: calc(100% - 150px);
      .yu-tabs-item {
        width: 100%;
        color: $dark-text;
      }
    }
  }
</style>
