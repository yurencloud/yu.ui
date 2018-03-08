<template>
  <div class="yu-input" :class="[{disabled:disabled},size]">
  <span class="prefix icon" v-if="prefix">
    <i class="iconfont" :class="[prefix]"></i>
  </span>
    <slot v-if="$slots.prepend" class="prepend" name="prepend"/>
    <input
      v-if="type==='input'"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="value"
      :readonly="readonly"
      :name="name"
      @click="handleClick"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyup"
      :class="[{prefix:prefix},{suffix:suffix},{append:$slots.append},{prepend:$slots.prepend}]"
      :style="{width:width}">

    <span class="suffix icon" v-if="suffix">
    <i class="iconfont" :class="[suffix]"></i>
  </span>

    <span class="clearable" v-if="clearable && value" @click="clear">
    <i class="iconfont icon-close-circle "></i>
  </span>
    <textarea
      v-if="type==='textarea'"
      name=""
      id=""
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
    ></textarea>
    <slot v-if="$slots.append" class="append" name="append"/>
    <yu-options v-if="options" v-show="search" :options="optionsFilter.length?optionsFilter:options"/>
  </div>
</template>

<script>
import YuButton from './button';
import YuOptions from './options';

export default {
  name: 'YuInput',
  data() {
    return {
      value: this.defaultValue ? this.defaultValue : '',
      search: false,
      optionsFilter: [],
      activeNumber: 0,
    };
  },
  props: {
    defaultValue: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'input',
    },
    cols: {
      type: Number,
      default: 30,
    },
    rows: {
      type: Number,
      default: 4,
    },
    size: {
      type: String,
    },
    width: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
  methods: {
    clear() {
      this.value = '';
    },
    handleClick(event) {
      this.$emit('click', event);
    },
    handleBlur(event) {
      if (this.options) {
        this.search = false;
      }
      this.$emit('blur', event);
    },
    handleFocus(event) {
      if (this.options) {
        this.search = true;
      }
      this.$emit('focus', event);
    },
    handleChange() {
      this.$emit('change', this.value);
    },
    changeValue(value) {
      this.value = value;
    },
    // TODO::下次再做
    handleKeyup(event) {
      const len = this.options.length;
      // Down键事件
      if (event.keyCode === 40) {
        // 划到最后一项的时候
        if (this.activeNumber >= len - 1) {
          console.log('到底了');
          return;
        }

        this.activeNumber += 1;
      }

      // Up键事件
      if (event.keyCode === 38) {
        if (this.activeNo <= 0) {
          console.log('到顶了');
          return;
        }

        this.activeNumber -= 1;
      }

      // 按Enter键
      // if (event.keyCode === 13) {
      //
      // }

      if (!this.value) {
        this.search = false;
        return;
      }

      if (event.keyCode !== 38 && event.keyCode !== 40 && event.keyCode !== 13) {
        this.search = true;
        this.getHintsList();
      }
    },
  },
  components: {
    YuButton,
    YuOptions,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-input {
    position:relative;
    display: block;
    margin-right: 8px;
    margin-bottom: 12px;
    font-size: 0;
    @include generalAllSizeInput();
    input {
      width: 175px;
      height: $normal-height;
      padding: 0 14px;
      outline: none;
      font-size: $normal;
      color: $text;
      font-family: $font-family;
      box-sizing: border-box;

      &::placeholder {
        color: $dark-border;
        font-weight: lighter;
      }
      border: 1px solid $border;
      border-radius: 4px;
      &:hover {
        border: 1px solid $lighter-text;
      }
      &:focus {
        border: 1px solid $primary;
      }
      transition: all ease .4s;
      &.prefix {
        padding-left: 30px;
      }
      &.suffix {
        padding-right: 30px;
      }
    }
    &.disabled {
      input {
        color: $lighter-text;
        background-color: $background;
        &:hover {
          border: 1px solid $border;
        }
        &:focus {
          border: 1px solid $border;
        }
      }
    }

    span.clearable {
      position: relative;
      i {
        font-size: $small;
        color: $light-text;
        position: absolute;
        left: -25px;
        top: 4px;
      }
    }

    span.prefix {
      position: relative;
      color: $lighter-text;
      line-height: $normal-height;
      i {
        position: absolute;
        left: 10px;
      }
    }

    span.suffix {
      position: relative;
      color: $lighter-text;
      line-height: $normal-height;
      i {
        position: absolute;
        left: -26px;
      }
    }

    textarea {
      padding: 8px 12px;
      border-color: $border;
      border-radius: 4px;
      font-size: $normal;
      outline: none;
      &:hover {
        border: 1px solid $lighter-text;
      }
      &:focus {
        border: 1px solid $primary;
      }
      transition: all ease .4s;
      &::placeholder {
        color: $dark-border;
        font-weight: lighter;
      }
    }

    input.append {
      border-radius: 4px 0 0 4px;
      margin-right: -1px;
    }

    input.prepend {
      border-radius: 0 4px 4px 0;
      margin-left: -1px;
    }

  }

</style>
