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
    <div class="container"
         @mouseover="handleMouseover"
         @mouseleave="handleMouseleave"
    >
      <div class="scrolls" :class="[{overflow:overflow}]">
        <div class="line"></div>
        <div class="scrollList" @scroll="firstScroll($event)">
          <ul>
            <li
              v-for="(item, index) in options"
              v-bind:key="item.value"
              :class="{active:index === firstActive}"
              @click="firstClick(index, $event)"
            >{{item.label}}</li>
          </ul>
        </div>
        <div class="scrollList" @scroll="secondScroll($event)">
          <ul>
            <li
              v-for="(item, index) in secondOptions"
              v-bind:key="item.value"
              :class="{active:index === secondActive}"
              @click="secondClick(index, $event)"
            >{{item.label}}</li>
          </ul>
        </div>
        <div class="scrollList" @scroll="thirdScroll($event)">
          <ul>
              <li
                v-for="(item, index) in thirdOptions"
                v-bind:key="item.value"
                :class="{active:index === thirdActive}"
                @click="thirdClick(index, $event)"
              >{{item.label}}</li>
          </ul>
        </div>
        <div class="button">
          <span>取消</span>
          <span class="confirm">确认</span>
        </div>
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
      secondOptions: this.options[0].children ? this.options[0].children : null,
      thirdOptions: this.options[0].children && this.options[0].children[0].children ? this.options[0].children[0].children : null,
      thirdActive: 0,
      fix: false,
      scrollTop: 0,
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
    handleMouseover() {
      this.scrollTop = document.getElementsByTagName('html')[0].scrollTop;
      document.addEventListener('scroll', this.stopScroll)
    },
    handleMouseleave() {
      document.removeEventListener('scroll', this.stopScroll);
    },
    stopScroll(e) {
      e.target.scrollingElement.scrollTop = this.scrollTop;
    },
    firstScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.firstActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.firstActive * 40;
        this.secondOptions = this.options[this.firstActive].children;
        the.fix = false;
      }, 400)
    },
    firstClick(index, $event) {
      this.firstActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
    },
    secondScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.secondActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.secondActive * 40;
        this.thirdOptions = this.options[this.firstActive].children[this.secondActive].children;
        the.fix = false;
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
      }, 400)
    },
    thirdClick(index, $event) {
      this.thirdActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
    },
    handleClick() {
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
      position: absolute;
      top: 40px;
      width: 200px;
      box-shadow: $box-shadow;
      border-radius: 4px;
      margin-top: 8px;
      border: 1px solid $border;
      background-color: #fff;
      .scrolls {
        z-index: 1000;
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
              &:hover {
                background-color: $background;
                line-height: $normal-height;
              }
              &.active{
                font-weight: bold;
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
