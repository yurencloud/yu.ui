<template>
  <div class="yu-slider"
       :class="[{disabled:disabled}]"
  >
    <div></div>
    <div class="bottom-bar" :style="{width:width+(percent?'%':'px')}">
      <div class="top-bar" :style="{width: move+'px'}">
        <span
          id="aa"
          ref="aa"
          @mousedown="handleMousedown($event)"
          class="circle"
          :style="{left: move-4+'px'}"
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
      move: 0,
      press: false,
      startX: 0,
      offset: null,
      minWidth: 0,
      maxWidth: 0,
    };
  },
  props: {
    disabled: Boolean,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    width: {
      type: Number,
      default: 400,
    },
    percent: Boolean,
  },
  methods: {
    handleMousedown($event) {
      this.press = true;
      if (!this.offset) this.offset = $event.pageX;
      window.addEventListener('mouseup', this.handleMouseup)
      window.addEventListener('mousemove', this.handleMousemove);
    },
    handleMousemove($event) {
      if (this.press) {
        let move = $event.clientX - this.offset;
        if (move < this.minWidth) {
          move = this.minWidth;
        }
        if (move > this.maxWidth) {
          move = this.maxWidth
        }
        this.move = move;
      }
    },
    handleMouseup() {
      this.press = false;
      window.removeEventListener('mousemove', this.handleMousemove);
      window.removeEventListener('mouseup', this.handleMouseup);
    },
  },
  mounted() {
    this.minWidth = (this.min / 100) * this.width;
    this.maxWidth = (this.max / 100) * this.width;
  },
  components: {
    YuToolTip,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-slider {
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
          &:hover {
            width: 20px;
            height: 20px;
            top: -8px;
          }
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
