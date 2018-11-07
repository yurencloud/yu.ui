<template>
  <div class="yu-cascader">
    <yu-input
      :placeholder="placeholder"
      readonly
      :name="name"
      suffix="icon-angle-down"
      @click="handleClick"
      :size="size"
      :width="width"
      :value="valueText"
      :disabled="disabled"
    />
    <transition name="zoom-in-top">
      <div v-if="cascader" class="options" v-show="visible">
        <div class="cascader first">
          <div class="option"
               :key="item.value"
               :value="item.value"
               v-for="(item, index) in cascader"
               :class="[{disabled:item.disabled},{active:index === firstActive}]"
               @click="firstClick(item, index)"
               @mouseover="hover&&item.children?firstClick(item, index):''"
          >
            {{item.label}}
            <i v-if="item.children" class="iconfont icon-angle-right"></i>
          </div>
        </div>
        <div class="cascader second" v-if="secondActive>-2">
          <yu-loading :loading="secondCascader.length===0 && remote">加载中...</yu-loading>
          <div class="option"
               :key="item.value"
               :value="item.value"
               :class="[{disabled:item.disabled}, {active:index === secondActive}]"
               v-for="(item, index) in secondCascader"
               @click="secondClick(item, index)"
               @mouseover="hover&&item.children?secondClick(item, index):''"
          >
            {{item.label}}
            <i v-if="item.children" class="iconfont icon-angle-right"></i>
          </div>
        </div>
        <div class="cascader third" v-if="thirdActive>-2">
          <yu-loading :loading="thirdCascader.length===0 && remote">加载中...</yu-loading>
          <div class="option"
               :key="item.value"
               :value="item.value"
               :class="[{disabled:item.disabled}, {active:index === thirdActive}]"
               v-for="(item, index) in thirdCascader"
               @click="thirdClick(item, index)"
          >
            {{item.label}}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable guard-for-in,guard-for-in */

import YuInput from './input'
import YuLoading from './loading'

export default {
  name: 'YuCascader',
  data() {
    return {
      visible: false,
      firstActive: -2, // -2 代表不显示，-1代表显示但无选中项
      secondActive: -2,
      thirdActive: -2,
      secondCascader: [],
      thirdCascader: [],
      valueObject: {},
      valueText: this.defaultValueText,
    }
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: Array,
    defaultValueText: {
      type: String,
      default: '',
    },
    cascader: Array,
    hover: Boolean,
    short: Boolean,
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
      this.visible = !this.visible
    },
    firstClick(item, index) {
      if (item.disabled) return
      this.firstActive = index
      this.thirdActive = -2
      this.valueObject.first = item
      if (item.children) {
        if (this.remote) {
          this.$emit('fetch', item)
        } else {
          this.secondCascader = item.children
        }
        this.secondActive = -1
      } else {
        delete this.valueObject.second
        delete this.valueObject.third
        this.changeValue()
      }
      if (this.changeOnSelect) {
        this.changeValue()
      }
    },
    secondClick(item, index) {
      if (item.disabled) return
      this.secondActive = index
      this.valueObject.second = item
      if (item.children) {
        if (this.remote) {
          this.$emit('fetch', item)
        } else {
          this.thirdCascader = item.children
        }
        this.thirdActive = -1
      } else {
        delete this.valueObject.third
        this.changeValue()
      }
      if (this.changeOnSelect) {
        this.changeValue()
      }
    },
    thirdClick(item, index) {
      if (item.disabled) return
      this.thirdActive = index
      this.valueObject.third = item
      this.changeValue()
    },
    changeValue() {
      const value = this.valueObject
      const valueArray = []

      let text = ''
      if (this.short) {
        const temp = value.third || value.second || value.first
        text = temp.label
      } else {
        text = value.first.label + (value.second ? `/${value.second.label}` : '') + (value.third ? `/${value.third.label}` : '')
      }
      this.valueText = text
      if (!this.changeOnSelect) {
        this.visible = false
      }

      for (const key in value) {
        valueArray.push(value[key].value)
      }

      this.$emit('change', valueArray)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.value })
      }
    },
    syncValue(value) {
      if (this.remote) return
      const len = value.length
      switch (len) {
        case 1:
          // 激活节点一
          for (let i = 0; i < this.cascader.length; i++) {
            if (this.cascader[i].value === value[0]) {
              this.valueObject.first = this.cascader[i]
              this.secondCascader = this.cascader[i].children
              this.firstActive = i
              this.secondActive = -1
              this.thirdActive = -2
              break
            }
          }
          this.changeValue()
          break
        case 2:
          // 激活节点一
          for (let i = 0; i < this.cascader.length; i++) {
            if (this.cascader[i].value === value[0]) {
              this.valueObject.first = this.cascader[i]
              this.secondCascader = this.cascader[i].children
              this.firstActive = i
              this.secondActive = -1
              this.thirdActive = -2
              // 激活节点二
              const children = this.secondCascader
              for (let j = 0; j < children.length; j++) {
                if (children[j].value === value[1]) {
                  this.valueObject.second = children[j]
                  this.thirdCascader = children[j].children
                  this.secondActive = j
                  this.thirdActive = -1
                  break
                }
              }
              break
            }
          }
          this.changeValue()
          break
        case 3:
          // 激活节点一
          for (let i = 0; i < this.cascader.length; i++) {
            if (this.cascader[i].value === value[0]) {
              this.valueObject.first = this.cascader[i]
              this.secondCascader = this.cascader[i].children
              this.firstActive = i
              this.secondActive = -1
              this.thirdActive = -2
              // 激活节点二
              const children = this.secondCascader
              for (let j = 0; j < children.length; j++) {
                if (children[j].value === value[1]) {
                  this.valueObject.second = children[j]
                  this.thirdCascader = children[j].children
                  this.secondActive = j
                  this.thirdActive = -1
                  // 激活节点三
                  const children2 = this.thirdCascader
                  for (let k = 0; k < children2.length; k++) {
                    if (children2[k].value === value[2]) {
                      this.valueObject.third = children2[k]
                      this.thirdActive = k
                      break
                    }
                  }
                  break
                }
              }
              break
            }
          }
          this.changeValue()
          break
        default:
          break
      }
    },
  },
  mounted() {
    if (this.cascader.length !== 0) {
      this.syncValue(this.value)
    }
  },
  watch: {
    cascader() {
      this.syncValue(this.value)
    },
  },
  created() {
    if (this.$parent.isField) {
      this.$parent.fixCascader = true
    }

    if (process.browser) {
      const body = document.body
      body.addEventListener('click', (e) => {
        if (e.currentTarget.tagName === 'BODY'
            && e.target.tagName !== 'INPUT'
            && e.target.className.indexOf('option') === -1
        ) {
          this.visible = false
        }
      }, false)
    }
  },

}
</script>
