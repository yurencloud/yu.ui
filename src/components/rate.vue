<template>
  <div class="yu-rate" @mouseout="handleMouseout" @click="handleClick($event)" >
    <i data-value="1" class="iconfont" :class="[value>=1?'icon-star':'icon-star-o']" @mouseover="changeValue(1)"></i>
    <i data-value="2" class="iconfont" :class="[value>=2?'icon-star':'icon-star-o']" @mouseover="changeValue(2)"></i>
    <i data-value="3" class="iconfont" :class="[value>=3?'icon-star':'icon-star-o']" @mouseover="changeValue(3)"></i>
    <i data-value="4" class="iconfont" :class="[value>=4?'icon-star':'icon-star-o']" @mouseover="changeValue(4)"></i>
    <i data-value="5" class="iconfont" :class="[value==5?'icon-star':'icon-star-o']" @mouseover="changeValue(5)"></i>
    <span v-if="labeled">{{label[value]}}</span>
  </div>
</template>

<script>
export default {
  name: 'YuRate',
  data() {
    return {
      value: 0,
      selectValue: 0,
    };
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    vertical: Boolean,
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'default',
    },
    labeled: Boolean,
    label: {
      type: Array,
      default: () => {return ['', '极差', '失望', '一般', '满意', '惊喜']},
    },
  },
  methods: {
    handleClick($event) {
      const value = $event.target.getAttribute('data-value');
      this.selectValue = value;
      this.value = value;
    },
    handleMouseout() {
      this.value = this.selectValue;
    },
    changeValue(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-rate {
    height: 30px;
    font-size: 0;
    i{
      transition: all .4s;
      display: inline-block;
      width: 30px;
      height: 20px;
      box-sizing: border-box;
      font-size: 20px;
      color: $lighter-text;
    }
    .icon-star{
      color: #f8c422;
      transform: scale(1.1);
    }
    &:hover{
      cursor: pointer;
    }
    span{
      font-size: 14px;
      color: $text;
      display: inline-block;
    }
  }


</style>
