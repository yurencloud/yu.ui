<template>
  <div class="yu-pagination">
    <ul class="pagination">
      <li @click="reduce"
           :class="{disable:leftDisable}">
        <i class="iconfont icon-angle-left"></i>
      </li>
      <li v-for="n in num"
          v-bind:key="n"
          :index="n-1"
          :class="[{active:(n === currentNum),}]"
      @click="handleClick(n)">
        {{n}}
      </li>
      <li @click="add"
          :class="{disable:!rightDisable}">
        <i class="iconfont icon-angle-right"></i>
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
    }
  },
  methods: {
    handleClick(n, event) {
      if (!this.disabled) {
        this.$emit('click', event);
        this.currentNum = n;
      }
    },
    add() {
      if (this.rightDisable) {
        // todo 左右箭头颜色变化未完成
        this.currentNum < this.num ? this.currentNum += 1 : this.rightDisable = false;
        console.log(this.currentNum)
      } else {
        return false;
      }
    },
    reduce() {
      if (this.leftDisable) {
        this.currentNum > 1 ? this.currentNum -= 1 : this.leftDisable = false;
        console.log(this.currentNum)
      } else {
        return false;
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
        i{
          color: $primary;
        }
      }
    }
  }

</style>
