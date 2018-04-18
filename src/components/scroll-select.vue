<template>
  <div class="yu-scroll-select">
    <yu-input
      readonly
      ref='input'
      @click="handleClick"
      suffix="icon-angle-down"
      :disabled="disabled"
      clearable
      :prefix="prefix"
      :placeholder="placeholder"
      :name="name"
      @clear="handleClear"
      :width="width"
      :size="size"
    />
    <div class="container"
         @mouseover="handleMouseover"
         @mouseleave="handleMouseleave"
         v-show="visible"
    >
      <div class="scrolls">
        <div class="line"></div>
        <div class="scrollList" @scroll="firstScroll($event)">
          <ul>
            <li
              v-for="(item, index) in options"
              v-bind:key="item.value"
              :class="{active:index === firstActive,disabled:item.disabled}"
              @click="firstClick(index, $event)"
            >{{item.label}}</li>
          </ul>
        </div>
        <div class="scrollList" @scroll="secondScroll($event)">
          <ul>
            <li
              v-for="(item, index) in secondOptions"
              v-bind:key="item.value"
              :class="{active:index === secondActive,disabled:item.disabled}"
              @click="secondClick(index, $event)"
            >{{item.label}}</li>
          </ul>
        </div>
        <div class="scrollList" @scroll="thirdScroll($event)">
          <ul>
              <li
                v-for="(item, index) in thirdOptions"
                v-bind:key="item.value"
                :class="{active:index === thirdActive,disabled:item.disabled}"
                @click="thirdClick(index, $event)"
              >{{item.label}}</li>
          </ul>
        </div>
        <div class="button">
          <span @click="handleCancel">取消</span>
          <span @click="handleConfirm" class="confirm">确认</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import YuInput from './input';

export default {
  name: 'YuScrollSelect',
  data() {
    return {
      visible: false,
      value: '',
      label: '',
      selects: [],
      firstActive: 0,
      secondActive: 0,
      secondOptions: this.options[0].children ? this.options[0].children : null,
      thirdOptions: this.options[0].children && this.options[0].children[0].children ? this.options[0].children[0].children : null,
      thirdActive: 0,
      fix: false,
      scrollTop: 0,
    };
  },
  props: {
    remote: Boolean,
    disabled: Boolean,
    options: Array,
    prefix: String,
    placeholder: String,
    name: String,
    width: String,
    size: String,
    split: {
      type: String,
      default: '/',
    },
  },

  methods: {
    handleClear() {
      this.value = '';
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: '' });
      }
    },
    handleMouseover() {
      this.scrollTop = document.getElementsByTagName('html')[0].scrollTop;
      document.addEventListener('scroll', this.stopScroll);
    },
    handleMouseleave() {
      document.removeEventListener('scroll', this.stopScroll);
    },
    stopScroll(e) {
      e.target.scrollingElement.scrollTop = this.scrollTop;
    },
    firstScroll($event) {
      if (this.fix) return;
      this.fix = true;
      setTimeout(() => {
        this.firstActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.firstActive * 40;
        const second = this.options[this.firstActive];

        if (second.disabled) {
          this.fix = false;
        } else {
          this.fix = false;
          if (this.remote) {
            this.$emit('firstFetch', second);
            return;
          }
          this.secondOptions = second.children;
        }
      }, 400);
    },
    firstClick(index, $event) {
      this.firstActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
    },
    secondScroll($event) {
      if (this.fix) return;
      this.fix = true;
      setTimeout(() => {
        this.secondActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.secondActive * 40;
        const third = this.secondOptions[this.secondActive];
        if (third.disabled) {
          this.fix = false;
        } else {
          this.fix = false;
          if (this.remote) {
            this.$emit('secondFetch', third);
            return;
          }
          this.thirdOptions = third.children;
        }
      }, 400)
    },
    secondClick(index, $event) {
      this.secondActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
    },
    thirdScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.thirdActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.thirdActive * 40;
        the.fix = false;
      }, 400);
    },
    thirdClick(index, $event) {
      this.thirdActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
    },
    handleClick() {
      this.visible = !this.visible;
    },
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
    cancelSelect(option) {
      this.selects.splice(this.selects.findIndex(item => item.value === option.value), 1)
      this.$children.forEach((item) => {
        if (item.value === option.value) {
          item.hide = false;
        }
      });
    },
    handleCancel() {
      this.visible = false;
    },
    handleConfirm() {
      const first = this.options[this.firstActive];
      const second = this.secondOptions ? this.secondOptions[this.secondActive] : {};
      const third = this.thirdOptions ? this.thirdOptions[this.thirdActive] : {};
      if (first.disabled || second.disabled || third.disabled) {
        alert('不可以选择无效选项');
        return;
      }
      let value = first.label;
      if (second.label) {
        value += (this.split + second.label);
      }
      if (third.label) {
        value += (this.split + third.label);
      }
      this.value = value;
      this.visible = false;
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
  watch: {
    value(value) {
      this.$refs.input.changeValue(value);
    },
  },
  components: {
    YuInput,
  },

};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/animation";

  .yu-scroll-select {
    position: relative;
    .line {
      position: absolute;
      top: 80px;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
      height: 40px;
      width: 92%;
      left: 4%
    }
    .container {
      z-index: 10000;
      position: absolute;
      top: 40px;
      width: 200px;
      box-shadow: $box-shadow;
      border-radius: 4px;
      margin-top: 8px;
      border: 1px solid $border;
      background-color: #fff;
      .scrolls {
        color: $text;
        font-size: 0;
        .scrollList {
          white-space: nowrap;
          font-size: 0;
          box-sizing: border-box;
          display: inline-block;
          max-height: 200px;
          overflow-y: overlay;
          overflow-x: hidden;
          &::-webkit-scrollbar {
            width: 0;
          }
          &:hover {
            &::-webkit-scrollbar {
              width: 4px;
            }
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background-color: $border;
          }
          width: 33.3%;
          ul {
            display: block;
            margin: 80px auto;
            padding: 0;
            li {
              font-size: $normal;
              text-align: center;
              display: block;
              margin: 0 auto;
              list-style: none;
              height: $normal-height;
              line-height: $normal-height;
              &:hover:not(.disabled) {
                background-color: $background;
                line-height: $normal-height;
              }
              &.active:not(.disabled){
                font-weight: bold;
              }
              &.disabled{
                color: $lighter-text;
                cursor: not-allowed;
              }
            }
          }
        }
        .button {
          box-sizing: border-box;
          border-top: 1px solid $border;
          width: 100%;
          height: $normal-height;
          line-height: $normal-height;
          text-align: right;
          span {
            margin-right: 20px;
            color: $text;
            font-size: $small;
            &.confirm {
              color: $primary;
              font-weight: bold;
            }
          }
          background-color: #fff;
          font-size: 16px;
          border-radius: 4px;
        }
      }

    }
  }


</style>
