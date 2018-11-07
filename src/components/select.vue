<template>
  <div class="yu-select">
    <yu-input
      readonly
      ref='input'
      @click="handleClick"
      @blur="handleBlur"
      suffix="icon-angle-down"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      clearable
      :width="width"
      :size="size"
      @clear="clear"
     :value="label"
    />
    <transition name="zoom-in-top">
      <div class="options" :class="[{overflow:overflow},size]" v-show="visible">
        <slot/>
      </div>
      <!--选中选项显示-->
    </transition>
      <div class="selected" v-if="showSelects && selects.length>0">
        <yu-tag closable
                v-for="item in selects"
                v-bind:key="item.value"
                :value="item.value"
                :type="tagType"
                @close="handleCloseTag(item)">
          {{item.label}}
        </yu-tag>
      </div>
  </div>
</template>

<script>
import YuInput from './input'
import YuTag from './tag'
import { isEmpty } from '../utils/util'

export default {
  name: 'YuSelect',
  data() {
    return {
      visible: false,
      label: '',
      selects: [],
    }
  },
  model: {
    prop: 'value',
    event: 'selected',
  },
  props: {
    value: [Array, String, Number],
    overflow: Boolean,
    placeholder: {
      type: String,
      default: '请选择',
    },
    disabled: Boolean,
    multi: Boolean,
    options: Array,
    name: String,
    showSelects: Boolean,
    width: String,
    size: String,
    tagType: String,
  },
  created() {
    this.$on('handleSelect', this.handleSelect)
    this.$on('cancelSelect', this.cancelSelect)
  },

  methods: {
    clear() {
      this.$emit('selected', null)
      this.label = ''
      this.selects = []

      this.$children.forEach((item) => {
        item.hide = false
      })
      this.$emit('clear')
      if (this.$parent.isField) {
        this.$parent.handleEvent('clear', { name: this.name, value: null })
      }
    },
    handleClick(event) {
      this.visible = !this.visible
      if (!this.visible) event.target.blur()
    },
    handleSelect(option) {
      if (this.multi) {
        if (this.value != null) {
          const value = this.value.splice(0)
          value.push(option.value)
          this.$emit('selected', value)
        } else {
          const value = []
          value.push(option.value)
          this.$emit('selected', value)
        }
      } else {
        this.$emit('selected', option.value)
      }
      this.$refs.input.$el.children[0].blur()
      this.visible = false
      if (this.$parent.isField) {
        this.$parent.handleEvent('selected', { name: this.name, value: this.value })
      }
    },
    handleBlur(event) {
      this.visible = false
      this.$emit('blur', event)
    },
    cancelSelect(option) {
      const labels = []
      const values = []
      this.selects.splice(this.selects.findIndex(item => item.value === option.value), 1)
      this.selects.forEach((item) => {
        values.push(item.value)
        labels.push(item.label)
      })
      this.$refs.input.$el.children[0].blur()
      this.label = labels.toString()
      this.$children.forEach((item) => {
        if (item.value === option.value) {
          item.hide = false
        }
      })
      this.$emit('selected', values)
    },
    handleCloseTag(item) {
      this.cancelSelect({ value: item.value })
    },
  },
  mounted() {
    if (!isEmpty(this.value)) {
      for (let i = 0; i < this.$slots.default.length; i++) {
        const item = this.$slots.default[i].componentOptions.propsData
        if (item.value === this.value) {
          this.label = item.label
          break
        }
      }
    }
  },
  watch: {
    value(value) {
      const the = this
      if (this.multi) {
        const selects = []
        const label = []
        if (this.value != null) {
          this.$children.forEach((item) => {
            if (the.value.indexOf(item.value) > -1) {
              selects.push({
                value: item.value,
                label: item.label,
              })
              label.push(item.label)
            }
          })
        }
        this.selects = selects
        this.label = label.toString()
      } else {
        for (let i = 0; i < this.$children.length; i++) {
          if (value === this.$children[i].value) {
            this.label = this.$children[i].label
            break
          }
        }
      }
    },
  },
  components: {
    YuInput,
    YuTag,
  },
}
</script>

