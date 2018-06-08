<template>
  <div class="yu-rate" @mouseout="handleMouseout"  >
    <i v-for="item in options"
       :data-value="item.value"
       v-bind:key="item.value"
       class="iconfont"
       :class="[item.status?item.activeIcon:item.inactiveIcon]"
       @mouseover="handleMouseover(item.value)"
       @click="handleClick(item.value)"
    ></i>
    <span v-if="labeled">{{label[value-1]}}</span>
    <input type="text" :name="name" :value="value" style="display: none">
  </div>
</template>

<script>
export default {
  name: 'YuRate',
  data() {
    return {
      currentValue: 0,
      isMouseover: false,
    };
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    options: {
      type: Array,
      default(){
        return [
          {value: 1, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false},
          {value: 2, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false},
          {value: 3, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false},
          {value: 4, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false},
          {value: 5, activeIcon: 'icon-star', inactiveIcon: 'icon-star-o', status: false},
        ]
      }
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
    handleClick(value) {
      if (this.readOnly) return;
      this.$emit('input', value)
    },
    handleMouseout() {
      if (this.readOnly) return;
      this.currentValue = 0;
      this.isMouseover = false;
    },
    handleMouseover(value) {
      if (this.readOnly) return;
      this.isMouseover = true;
      this.currentValue = value;
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
  watch: {
    value(value){
      this.options.map((item,index)=>{
         item.status = index < value ;
      })
    },
    currentValue(value){
      if(this.isMouseover){
        this.options.map((item,index)=>{
          item.status = index < value ;
        })
      }else{
        this.options.map((item,index)=>{
          item.status = index < this.value ;
        })
      }
    }
  }
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
