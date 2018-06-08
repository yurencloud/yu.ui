<template>
  <div class="yu-rate" @mouseout="handleMouseout" @click="handleClick($event)" >
    <i data-value="1" class="iconfont" :class="[value>=1?'icon-star':'icon-star-o']" @mouseover="changeValue(1)"></i>
    <i data-value="2" class="iconfont" :class="[value>=2?'icon-star':'icon-star-o']" @mouseover="changeValue(2)"></i>
    <i data-value="3" class="iconfont" :class="[value>=3?'icon-star':'icon-star-o']" @mouseover="changeValue(3)"></i>
    <i data-value="4" class="iconfont" :class="[value>=4?'icon-star':'icon-star-o']" @mouseover="changeValue(4)"></i>
    <i data-value="5" class="iconfont" :class="[value==5?'icon-star':'icon-star-o']" @mouseover="changeValue(5)"></i>
    <span v-if="labeled">{{label[value-1]}}</span>
    <input type="text" :name="name" :value="value" style="display: none">
  </div>
</template>

<script>
export default {
  name: 'YuRate',
  data() {
    return {
      value: this.defaultValue || 0,
      selectValue: 0,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    readOnly: Boolean,
    name: String,
    labeled: Boolean,
    label: {
      type: Array,
      default: () => ['极差', '失望', '一般', '满意', '惊喜'],
    },
  },
  methods: {
    handleClick($event) {
      if (this.readOnly) return;
      const value = $event.target.getAttribute('data-value');
      this.selectValue = value;
      this.value = value;
    },
    handleMouseout() {
      if (this.readOnly) return;
      this.value = this.selectValue;
    },
    changeValue(value) {
      if (this.readOnly) return;
      this.value = value;

      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-rate {
    padding: 5px 0;
    height: 30px;
    font-size: 0;
    line-height: 30px;
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
