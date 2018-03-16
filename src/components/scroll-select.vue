<template>
  <div class="yu-scroll-select">
    <yu-input
      readonly
      ref='input'
      @click="handleClick"
      @blur="handleBlur"
      suffix="icon-angle-down"
      :placeholder="text"
      :disabled="disabled"
    />
    <div class="scrolls" :class="[{overflow:overflow}]">
      <div class="line"></div>
      <div class="scrollList" @scroll="firstScroll($event)">
        <ul>
          <li></li>
          <li></li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="scrollList" @scroll="secondScroll($event)">
        <ul>
          <li></li>
          <li></li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="scrollList" @scroll="thirdScroll($event)">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import YuInput from './input';
import YuSelected from './selected';

export default {
  name: 'YuSelect',
  data() {
    return {
      visible: false,
      value: '',
      label: '',
      selects: [],
      firstActive: 0,
      secondActive: 0,
      thirdActive: 0,
      fix: false,
    };
  },
  props: {
    overflow: Boolean,
    text: String,
    disabled: Boolean,
    multi: Boolean,
    options: Array,
  },

  methods: {
    firstScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.firstActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.firstActive * 40;
        the.fix = false;
      }, 400)
    },
    secondScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.secondActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.secondActive * 40;
        the.fix = false;
      }, 400)
    },
    thirdScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.thirdActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.thirdActive * 40;
        the.fix = false;
      }, 400)
    },
    handleClick() {},
    handleSelect(option) {
      if (this.multi) {
        this.selects.push(option);
      }
      this.$refs.input.value = option.label;
      this.$refs.input.$el.children[0].blur();
      this.value = option.value;
      this.label = option.label;
      this.visible = false;
    },
    handleBlur() {
      this.visible = false;
    },
    cancelSelect(option) {
      this.selects.splice(this.selects.findIndex(item => item.value === option.value), 1)
      this.$children.forEach((item) => {
        if (item.value === option.value) {
          item.hide = false;
        }
      })
    },
  },

  components: {
    YuInput,
    YuSelected,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/animation";

  .yu-scroll-select {
    position: relative;
    margin: auto 8px 12px auto;
    .line{
      position: absolute;
      top:80px;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
      height: 40px;
      width: 92%;
      left: 4%
    }
    .scrolls {
      background-color: #fff;
      position: absolute;
      top: 40px;
      z-index: 1000;
      min-width: 175px;
      border: 1px solid $border;
      margin-top: 8px;
      border-radius: 4px;
      color: $text;
      box-shadow: $box-shadow;
      font-size: 0;
      .scrollList {
        box-sizing: border-box;
        display: inline-block;
        max-height: 200px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 4px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          background-color: $border;
        }
        width: 33.3%;
        ul {
          display: block;
          margin: 0 auto;
          padding: 0;
          li {
            font-size: $normal;
            text-align: center;
            display: block;
            margin: 0 auto;
            list-style: none;
            height: $normal-height;
            line-height: $normal-height;
            &:hover{
              background-color: $background;
              line-height: $normal-height;
            }
          }
        }
      }
    }
  }


</style>
