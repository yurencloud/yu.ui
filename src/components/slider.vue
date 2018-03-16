<template>
  <div class="yu-slider"
       :class="[{disabled:disabled}]"
  >
    <div style="margin-bottom: 20px">{{value}}</div>
    <div class="bottom-bar" @click="handleBarClick($event)" :style="{width:width+'px'}">
      <div class="top-bar" :style="{width: move+'%'}">
        <span class="point"
              v-if="point"
              v-bind:key="item"
              v-for="item in range"
              :style="{left:item+'%'}"
              @click="handlePointClick(item)"
        ></span>
        <span
          ref="circle"
          @mousedown="handleMousedown($event)"
          class="circle"
          :style="{left: move+'%'}"
          :class="{hover:press}"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import YuToolTip from './tooltip';

export default {
  name: 'YuSlider',
  data() {
    return {
      // 向左移动百分比
      move: this.defaultValue ? this.defaultValue / this.total * 100 : 0,
      press: false,
      offset: null,
    };
  },
  props: {
    disabled: Boolean,
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
    },
    total: {
      type: [Number, String],
      default: 100,
    },
    width: {
      type: [Number, String],
      default: 400,
    },
    defaultValue: {
      type: [Number, String],
    },
    point: Boolean,
  },
  methods: {
    handleMousedown($event) {
      if (this.disabled) return;
      this.press = true;
      this.setOffset($event, 'circle');
      window.addEventListener('mouseup', this.handleMouseup)
      window.addEventListener('mousemove', this.handleMousemove);
    },
    handleMousemove($event) {
      if (this.press) {
        let move = Math.ceil(($event.clientX - this.offset) / this.width * 100);
        if (this.step) {
          if (this.range.indexOf(move) > -1) {
            if (move) { if (move < this.min) move = this.min }
            if (move > this.max) move = this.max
            this.move = move;
          }
        } else {
          if (move) { if (move < this.min) move = this.min }
          if (move > this.max) move = this.max
          this.move = move;
        }
      }
    },
    handleMouseup() {
      this.press = false;
      window.removeEventListener('mousemove', this.handleMousemove);
      window.removeEventListener('mouseup', this.handleMouseup);
    },
    handlePointClick(item) {
      if (this.press) return;
      this.move = item;
    },
    handleBarClick($event) {
      if (this.disabled) return;
      if (this.point) return;
      this.setOffset($event, 'bar');
      this.move = Math.ceil(($event.clientX - this.offset) / this.width * 100);
    },
    setOffset($event, type) {
      if (this.offset) return;
      if (type === 'bar') this.offset = $event.currentTarget.offsetLeft;
      if (type === 'circle') this.offset = $event.pageX - (this.defaultValue ? this.defaultValue / this.total  * this.width  : 0);
    },
  },
  computed: {
    value() {
      return Math.floor(this.total * this.move / 100);
    },
    range() {
      const range = [];
      if (!this.step) return range;
      const length = Math.ceil(this.total / this.step);
      for (let i = 0; i < length + 1; i++) {
        range[i] = i * this.step;
      }
      return range;
    },
  },
  components: {
    YuToolTip,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-slider {
    margin-right: 12px;
    margin-bottom: 20px;
    &.disabled{
      .bottom-bar{
        .top-bar{
          background-color: lighten($info,20);
          .circle{
            border-color: lighten($info,20);
            &.hover{
              width: 16px;
              height: 16px;
              top: -6px;
            }
            &:hover{
              width: 16px;
              height: 16px;
              top: -6px;
            }
          }
        }
      }
    }
    .bottom-bar {
      position: relative;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background-color: $border;
      .top-bar {
        height: 6px;
        border-radius: 3px;
        background-color: $primary;
        .circle {
          transform: translateX(-8px);
          position: absolute;
          top: -6px;
          line-height: 16px;
          vertical-align: middle;
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #fff;
          border: 2px solid $primary;
          border-radius: 16px;
          &.hover {
            width: 20px;
            height: 20px;
            top: -8px;
          }
          &:hover {
            width: 20px;
            height: 20px;
            top: -8px;
          }
        }
        .point {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 4px;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
