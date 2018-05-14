<template>
  <div class="yu-cascader">
    <yu-input
      ref="input"
      :placeholder="placeholder"
      readonly
      :name="name"
      suffix="icon-angle-down"
      @click="handleClick"
      v-model="value"
      :size="size"
      :width="width"
      :disabled="disabled"
    />
    <transition name="fade">
    <div v-if="cascader" class="options" v-show="visible">
      <div class="cascader first">
        <div class="option"
             :key="item.value"
             :value="item.value"
             v-for="item in cascader"
             :class="[{disabled:item.disabled},{active:item.acitve}]"
             @click="firstClick(item, $event)"
             @mouseover="hover&&item.children?firstClick(item, $event):''"
        >
          {{item.label}}
          <i v-if="item.children" class="iconfont icon-angle-right"></i>
        </div>
      </div>
      <div class="cascader second" v-if="secondActive">
        <yu-loading :loading="secondCascader.length===0 && remote">加载中...</yu-loading>
        <div class="option"
             :key="item.value"
             :value="item.value"
             :class="[{active:item.acitve}]"
             v-for="item in secondCascader"
             @click="secondClick(item, $event)"
             @mouseover="hover&&item.children?secondClick(item, $event):''"
        >
          {{item.label}}
          <i v-if="item.children" class="iconfont icon-angle-right"></i>
        </div>
      </div>
      <div class="cascader third" v-if="thirdActive">
        <yu-loading :loading="thirdCascader.length===0 && remote">加载中...</yu-loading>
        <div class="option"
             :key="item.value"
             :value="item.value"
             :class="[{active:item.acitve}]"
             v-for="item in thirdCascader"
             @click="thirdClick(item, $event)"
        >
          {{item.label}}
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import YuInput from './input';
import YuLoading from './loading';

export default {
  name: 'YuCascader',
  data() {
    return {
      visible: false,
      secondActive: false,
      thirdActive: false,
      secondCascader: [],
      thirdCascader: [],
      value: this.defaultValue || {},
    }
  },
  props: {
    cascader: Array,
    hover: Boolean,
    short: Boolean,
    defaultValue: Object, // 元素要有对应的active属性
    changeOnSelect: Boolean,
    remote: Boolean, // 远程加载数据
    name: String,
    width: String,
    size: String,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  components: {
    YuInput,
    YuLoading,
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
    },
    firstClick(item, $event) {
      if (item.disabled) return;
      this.thirdActive = false;
      this.activeOption($event);
      this.value.first = item;
      if (item.children) {
        if (this.remote) {
          this.secondCascader = []
          this.$emit('fetch', item);
        } else {
          this.secondCascader = item.children;
        }
        this.secondActive = true;
      } else {
        delete this.value.second;
        delete this.value.third;
        this.changeValue();
      }
      if (this.changeOnSelect) {
        this.changeValue();
      }
    },
    secondClick(item, $event) {
      if (item.disabled) return;
      this.activeOption($event);
      this.value.second = item;
      if (item.children) {
        if (this.remote) {
          this.thirdCascader = []
          this.$emit('fetch', item);
        } else {
          this.thirdCascader = item.children;
        }
        this.thirdActive = true;
      } else {
        delete this.value.third;
        this.changeValue();
      }
      if (this.changeOnSelect) {
        this.changeValue();
      }
    },
    thirdClick(item, $event) {
      if (item.disabled) return;
      this.activeOption($event);
      this.value.third = item;
      this.changeValue();
    },
    changeValue() {
      const value = this.value;

      let text = '';
      if (this.short) {
        const temp = value.third || value.second || value.first;
        text = temp.label;
      } else {
        text = value.first.label + (value.second ? `/${value.second.label}` : '') + (value.third ? `/${value.third.label}` : '');
      }
      this.$refs.input.changeValue(text);
      if (!this.changeOnSelect) {
        this.visible = false;
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: text });
      }
    },
    activeOption($event) {
      $event.target.parentNode.childNodes.forEach((i) => {
        if (i.classList) i.classList.remove('active');
      })
      $event.target.classList.add('active');
    },
  },
  mounted() {
    if (this.defaultValue) {
      this.$options.methods.changeValue.bind(this)()
    }
  },
  created() {
    const body = document.body;
    const the = this;
    if (this.$parent.isField) {
      this.$parent.fixCascader = true;
    }
    body.addEventListener('click', (e) => {
      if (e.currentTarget.tagName === 'BODY'
        && e.target.tagName !== 'INPUT'
        && e.target.className.indexOf('option') === -1
      ) {
        the.visible = false;
      }
    }, false);
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/animation";

  .yu-cascader{
    @include angleAnimation();
    position: relative;
    .fade-enter-active {
      transition: all .2s ease;
    }
    .fade-leave-active {
      transition: all .2s ease;
    }
    .fade-enter, .fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
      opacity: 0;
    }
    .options {
      background-color: #fff;
      position: absolute;
      top: 40px;
      z-index: 1000;
      border: 1px solid $border;
      margin-top: 8px;
      border-radius: 4px;
      color: $text;
      box-shadow: $box-shadow;
      font-size: 0;
      /*过渡*/
      /* 可以设置不同的进入和离开动画 */
      /* 设置持续时间和动画函数 */

      div.cascader{
        min-width: 160px;
        height: 200px;
        overflow-y:auto;
        display: inline-block;
        border-left: 1px solid $border;
        margin-right: -1px;
        &:first-child{
          border-left: none;
        }
        &::-webkit-scrollbar {
          width: 4px
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          background-color: $border;
        }
        &:last-child{
          padding-right: 1px;
        }
      }
      .option{
        font-size: $normal;
        padding:8px 8px;
        &:hover:not(.disabled){
          background-color: $background;
        }
        &.active{
          background-color: $background;
          font-weight: bold;
          color: $primary;
        }
        &.hide{
          display: none;
        }
        &.disabled{
          color:$lighter-text
        }
        i{
          float: right;
          color:$lighter-text;
        }
      }
      .yu-loading{
        padding-top: 8px;
      }
    }
  }

</style>
