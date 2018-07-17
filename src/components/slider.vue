<template>
  <div class="yu-slider"
       :class="[{disabled:disabled}]"
  >
    <div class="bottom-bar"
         @click="handleBarClick($event)"
         :style="{width:width+'px'}">
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
        >
            <span v-if="tooltip" class="tooltip">
              <span>{{value}}</span>{{valueUnit}}
              <span class="tooltip-angle"></span>
            </span>
          </span>
      </div>
    </div>
    <input type="text" :name="name" v-model="value" style="display: none;">
  </div>
</template>

<script>

export default {
  name: 'YuSlider',
  data() {
    return {
      // 向左移动百分比
      move: this.value ? this.value / this.total * 100 : 0,
      press: false,
      offset: null,
    }
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
    },
    total: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 400,
    },
    point: Boolean,
    name: String,
    tooltip: {
      type: Boolean,
      default: true,
    },
    valueUnit: {
      type: String,
      default: '',
    }, // value的单位，可以是%，元，$等
  },
  methods: {
    handleMousedown($event) {
      if (this.disabled) return
      this.press = true
      this.setOffset($event, 'circle')
      window.addEventListener('mouseup', this.handleMouseup)
      window.addEventListener('mousemove', this.handleMousemove)
    },
    handleMousemove($event) {
      if (this.press) {
        let move = Math.ceil(($event.clientX - this.offset) / this.width * 100)
        if (this.step) {
          if (this.range.indexOf(move) > -1) {
            if (move) {
              if (move < this.min) move = this.min
            }
            if (move > this.max) move = this.max
            this.move = move
          }
        } else {
          if (move) {
            if (move < this.min) move = this.min
          }
          if (move > this.max) move = this.max
          this.move = move
        }
      }
    },
    handleMouseup() {
      this.press = false
      window.removeEventListener('mousemove', this.handleMousemove)
      window.removeEventListener('mouseup', this.handleMouseup)
    },
    handlePointClick(item) {
      if (this.press) return
      this.move = item
    },
    handleBarClick($event) {
      if (this.disabled) return
      if (this.point) return
      this.setOffset($event, 'bar')
      this.move = Math.ceil(($event.clientX - this.offset) / this.width * 100)
    },
    setOffset($event, type) {
      if (this.offset) return
      if (type === 'bar') this.offset = $event.currentTarget.offsetLeft
      if (type === 'circle') this.offset = $event.pageX - (this.value ? this.value / this.total * this.width : 0)
    },
  },
  computed: {
    range() {
      const range = []
      if (!this.step) return range
      const length = Math.ceil(this.total / this.step)
      for (let i = 0; i < length + 1; i++) {
        range[i] = i * this.step
      }
      return range
    },
  },
  watch: {
    move(move) {
      const value = Math.floor(this.total * move / 100)
      this.$emit('input', value)
    },
    // TODO::这里可能会有循环bug
    value(value) {
      this.move = value / this.total * 100
    },
  },
  mounted() {
    if (this.value !== 0) {
      this.move = this.value / this.total * 100
    }

    if (this.min !== 0) {
      this.move = this.min / this.total * 100
    }
  },
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-slider {
    margin-right: 12px;
    margin-bottom: 20px;
    &.disabled {
      .bottom-bar {
        .top-bar {
          background-color: lighten($info, 20);
          .circle {
            border-color: lighten($info, 20);
            &.hover {
              width: 16px;
              height: 16px;
              top: -6px;
            }
            &:hover {
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
          .tooltip {
            position: absolute;
            top: -36px;
            height: 20px;
            padding: 2px 7px;
            line-height: 20px;
            background: #373737;
            border-radius: 4px;
            color: #fff;
            font-size: $normal;
            margin-left: -8px;
            text-align: center;
            min-width: 20px;
            display: none;
            .tooltip-angle{
              display: inline-block;
              height: 8px;
              width: 8px;
              background-color: #373737;
              position: absolute;
              bottom: -4px;
              left: 14px;
              transform: rotate(45deg);
            }
          }
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
            .tooltip {
              display: inline-block;
            }
          }
          &:hover {
            width: 20px;
            height: 20px;
            top: -8px;
            .tooltip {
              display: inline-block;
            }
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
