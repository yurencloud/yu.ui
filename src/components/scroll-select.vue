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
      :value="value"
    />
    <transition name="zoom-in-top">
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
    </transition>
  </div>
</template>

<script>
import YuInput from './input'

export default {
  name: 'YuScrollSelect',
  data() {
    return {
      visible: false,
      currentValue: '',
      label: '',
      selects: [],
      firstActive: 0,
      secondActive: 0,
      secondOptions: this.options[0].children ? this.options[0].children : null,
      thirdOptions: this.options[0].children && this.options[0].children[0].children ? this.options[0].children[0].children : null,
      thirdActive: 0,
      fix: false,
      scrollTop: 0,
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
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
      this.$emit('input', '')
      if (this.$parent.isField) {
        this.$parent.handleEvent('clear', { name: this.name, value: '' })
      }
    },
    handleMouseover() {
      if (process.browser) {
        this.scrollTop = document.getElementsByTagName('html')[0].scrollTop
        document.addEventListener('scroll', this.stopScroll)
      }
    },
    handleMouseleave() {
      if (process.browser) {
        document.removeEventListener('scroll', this.stopScroll)
      }
    },
    stopScroll(e) {
      e.target.scrollingElement.scrollTop = this.scrollTop
    },
    firstScroll($event) {
      if (this.fix) return
      this.fix = true
      setTimeout(() => {
        this.firstActive = parseInt($event.target.scrollTop / 40, 0)
        $event.target.scrollTop = this.firstActive * 40
        const second = this.options[this.firstActive]

        if (second.disabled) {
          this.fix = false
        } else {
          this.fix = false
          if (this.remote) {
            this.$emit('firstFetch', second)
            return
          }
          this.secondOptions = second.children
        }
      }, 800)
    },
    firstClick(index, $event) {
      this.firstActive = index
      $event.target.parentNode.parentNode.scrollTop = index * 40
    },
    secondScroll($event) {
      if (this.fix) return
      this.fix = true
      setTimeout(() => {
        this.secondActive = parseInt($event.target.scrollTop / 40, 0)
        $event.target.scrollTop = this.secondActive * 40
        const third = this.secondOptions[this.secondActive]
        if (third.disabled) {
          this.fix = false
        } else {
          this.fix = false
          if (this.remote) {
            this.$emit('secondFetch', third)
            return
          }
          this.thirdOptions = third.children
        }
      }, 800)
    },
    secondClick(index, $event) {
      this.secondActive = index
      $event.target.parentNode.parentNode.scrollTop = index * 40
    },
    thirdScroll($event) {
      if (this.fix) return
      const the = this
      this.fix = true
      setTimeout(() => {
        this.thirdActive = parseInt($event.target.scrollTop / 40, 0)
        $event.target.scrollTop = this.thirdActive * 40
        the.fix = false
      }, 800)
    },
    thirdClick(index, $event) {
      this.thirdActive = index
      $event.target.parentNode.parentNode.scrollTop = index * 40
    },
    handleClick() {
      this.visible = !this.visible
    },
    handleSelect(option) {
      if (this.multi) {
        this.selects.push(option)
      }
      this.$refs.input.value = option.label
      this.$refs.input.$el.children[0].blur()
      this.$emit('input', option.value)
      this.label = option.label
      this.visible = false
    },
    cancelSelect(option) {
      this.selects.splice(this.selects.findIndex(item => item.value === option.value), 1)
      this.$children.forEach((item) => {
        if (item.value === option.value) {
          item.hide = false
        }
      })
    },
    handleCancel() {
      this.visible = false
    },
    handleConfirm() {
      const first = this.options[this.firstActive]
      const second = this.secondOptions ? this.secondOptions[this.secondActive] : {}
      const third = this.thirdOptions ? this.thirdOptions[this.thirdActive] : {}
      if (first.disabled || second.disabled || third.disabled) {
        this.$alert('不可以选择无效选项')
        return
      }
      let value = first.label
      if (second.label) {
        value += (this.split + second.label)
      }
      if (third.label) {
        value += (this.split + third.label)
      }
      this.$emit('input', value)
      this.visible = false
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
  },
  components: {
    YuInput,
  },

}
</script>
