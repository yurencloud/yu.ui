<template>
  <div class="yu-pagination" :class="[{small:small,background:background}]">
    <ul class="pagination"  @click="handleClick()">
      <li  class="pagination-reduce"
           :class="{disable:leftDisable}">
        <i class="iconfont icon-angle-left left" v-if="!prevText"></i>
       {{prevText}}
      </li>
      <li class="pagination-left"
          v-if="count"
          @mouseover="leftchange"
          @mouseleave="leftchange">
        <i class="iconfont"
           :class="{'icon-bar-h':leftIcon,'icon-angle-double-left':!leftIcon}"></i>
      </li>
      <li v-for="n in num"
          v-bind:key="n"
          :index="n"
          v-if="n <= 5"
          :class="[{active:((n + more) === currentNum),}]">
        <!--todo   数值变化问题-->
        {{n + more}}
      </li>
      <li class="pagination-right"
          @mouseover="change"
          @mouseleave="change"
      >
        <i class="iconfont"
           :class="{'icon-bar-h':iconChange,'icon-angle-double-right':!iconChange}"></i>
      </li>
      <li>{{num}}</li>
      <li class="pagination-add"
          :class="{disable:!rightDisable}">
        <i class="iconfont icon-angle-right right" v-if="!nextText"></i>
       {{nextText}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YuPagination',
  props: {
    total: Number,
    pageSize: Number,
    small: Boolean,
    prevText: String,
    nextText: String,
    background: Boolean,
  },
  data() {
    return {
      num: Number,
      currentNum: 1,
      rightDisable: {
        type: Boolean,
        default: true,
      },
      leftDisable: {
        type: Boolean,
        default: true,
      },
      iconChange: Boolean,
      more: 0,
      count: 0,
      leftIcon: Boolean,
    }
  },
  methods: {
    handleClick(e) {
      e = event || e;
      const  target = e.target;
      if (target.tagName === 'UL') {
        return false;
      }
      if (!this.disabled) {
        if (target.tagName === 'LI') {
          if (target.classList.contains('pagination-reduce')) {
            this.reduce();
          } else if (target.classList.contains('pagination-add')) {
            this.add();
          } else if (target.classList.contains('pagination-right')) {
            this.left();
          } else if (target.classList.contains('pagination-left')) {
            this.right();
          } else {
            this.currentNum = Number(target.innerText);
            this.rightDisable = true;
            this.leftDisable = false;
            this.currentNum === this.num ? this.rightDisable = false : '';
            this.currentNum === 1 ? this.leftDisable = true : '';
          }
        }
        this.$emit('click', this.currentNum);
      }
    },
    add() {
      if (this.rightDisable) {
        this.leftDisable = false;
        if(this.currentNum < this.num) {
          this.currentNum += 1;
          if(this.currentNum > 5) {
            this.more += 1;
          }
          if(this.currentNum === this.num) {
            this.rightDisable = false;
          }
        }
      } else {
        return false;
      }
    },
    reduce() {
      if (!this.leftDisable) {
        this.rightDisable = true;
        if (this.currentNum > 1) {
          this.currentNum -= 1;
          if (this.currentNum < 2){
            this.more -= 1;
          }
          if(this.currentNum === 1) {
            this.leftDisable = true;
          }
        }
      } else {
        return false;
      }
    },
    change(e) {
      e.stopPropagation()
      this.iconChange = !this.iconChange;
    },
    leftchange(){
      this.leftIcon = !this.leftIcon;
    },
    left() {
      this.count += 1;
      this.more = 5 * this.count
      this.currentNum = this.currentNum + 5
    },
    right() {
      if (this.count) {
        this.count -= 1;
        this.more = 5 * this.count;
        this.currentNum = this.currentNum - 5;
      }
    },
  },
  mounted() {
    this.num = this.total / this.pageSize;
  },
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-pagination{
    .pagination{
      display: inline-block;
      li{
        float: left;
        list-style: none;
        padding: 5px;
        color: $dark-text;
        cursor: pointer;
        font-weight: 700;
        i{
          color: $dark-text;
        }
        &:hover{
          color: $primary;
        }
      }
      li.active{
        color: $primary;
      }
      li.disable{
        cursor:not-allowed;
        i{
          color: lighten( $info,30);
        }
      }
    }
  }
  /*小型的分页*/
  .yu-pagination.small{
    .pagination{
      li{
       font-size: $tiny;
        i{
          color: $dark-text;
          font-size: $tiny;
        }
        &:hover{
          color: $primary;
        }
        padding-top: 7px;
        &:first-child,&:last-child{
          padding: 5px;
        }
      }
      li.active{
        color: $primary;
      }
      li.disable{
        color: lighten( $info,30);
        cursor:not-allowed;
        i{
          color:lighten( $info,30);
        }
      }
    }
  }
  /*带有背景的分页*/
  .yu-pagination.background{
    .pagination{
      li{
        background-color:lighten( $info,35);
        margin-right: 10px;
        padding: 4px 8px;
        border-radius: 3px;
        color: $dark-text;
        font-weight: normal;
        i{
          color: $dark-text;
        }
        &:hover{
          color: #fff;
          background-color: $primary;
          i{
            color: #fff;
          }
        }
        &:first-child,&:last-child{
          padding: 4px;
        }
      }
      li.active{
        color: #fff;
        background-color: $primary;
      }
      li.disable{
        background-color: lighten( $info,40);
        color: lighten( $info,30);
        cursor:not-allowed;
        i{
          color: $info;
        }
      }
    }
  }

</style>
