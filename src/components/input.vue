<template>
  <div class="yu-input" :class="[{disabled:disabled},size]">
    <!--前置图标-->
    <span class="prefix icon" v-if="prefix">
      <i class="iconfont" :class="[prefix]"></i>
    </span>
    <!--前置组件-->
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

    <!--后置图标-->
    <span class="suffix icon" v-if="suffix">
      <i class="iconfont" :class="[suffix]"></i>
    </span>
    <!--清除图标-->
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
    <!--后置组件-->
    <slot v-if="$slots.append" class="append" name="append"/>

    <!--输入提示-->
    <div v-if="options" v-show="search" class="options" :class="[{overflow:overflow}]">
      <yu-loading :loading="loading && remote"/>
      <yu-option ref="option"
                 v-for="option in options"
                 :key="option.value"
                 :label="option.label"
                 :value="option.value"
      />
    </div>


  </div>
</template>

<script>
import YuButton from './button';
import YuOption from './option';
import YuLoading from './loading';

export default {
  name: 'YuInput',
  data() {
    return {
      value: this.defaultValue ? this.defaultValue : '',
      search: false,
      optionsFilter: [],
      activeNumber: -1,
      hover: false,
      select: '',
      loading: false,
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
    overflow: Boolean,
    remote: Boolean,
  },
  created() {
    this.$on('handleSelect', this.handleSelect)
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
      if (this.remote) {
        this.loading = true;
        this.$emit('fetch', this.value);
      }
      this.$emit('focus', event);
    },
    handleChange() {
      this.$emit('change', this.value);
    },
    changeValue(value) {
      this.value = value;
    },

    handleKeyup(event) {
      if (!this.options) {
        return;
      }
      const len = this.options.length;
      // Down键事件
      if (event.keyCode === 40 && this.activeNumber < len - 1) {
        this.activeNumber += 1;
      }

      // Up键事件
      if (event.keyCode === 38 && this.activeNumber > 0) {
        this.activeNumber -= 1;
      }

      // 按Enter键
      if (event.keyCode === 13) {
        if (this.activeNumber >= 0 && this.activeNumber < len) {
          const select = this.$refs.option[this.activeNumber];
          this.value = select.label;
          this.select = select.value;
          this.search = false;
        }
      }

      if (!this.remote && event.keyCode !== 38 && event.keyCode !== 40 && event.keyCode !== 13) {
        // 判断是不是远程获取输入提示选项
        if (this.value.trim().length !== 0) {
          this.$refs.option.forEach((item) => {
            item.hide = item.label.indexOf(this.value) <= -1;
          })
        } else {
          this.value = '';
          this.select = '';
          this.$refs.option.forEach((item) => {
            item.hide = false;
            item.active = false;
          })
        }
        this.loading = false;
      }
      if (this.activeNumber >= 0) {
        this.$refs.option.forEach((item) => {
          item.active = false
        });
        this.$refs.option[this.activeNumber].active = true;
      }
    },
    handleSelect({ label, value }) {
      this.value = label;
      this.select = value;
      this.search = false;
    },
  },
  watch: {
    options(value) {
      this.loading = false
    },
    value(value) {
      console.log(1);
      this.loading = true;
      if (this.remote) {
        this.$emit('fetch', value);
      }
    },
  },
  components: {
    YuButton,
    YuOption,
    YuLoading,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-input {
    position: relative;
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
    }

    input.prepend {
      border-radius: 0 4px 4px 0;
    }

    .options {
      background-color: #fff;
      position: absolute;
      top: 35px;
      z-index: 1000;
      min-width: 175px;
      border: 1px solid $border;
      padding: 8px 0;
      margin-top: 8px;
      border-radius: 4px;
      color: $text;
      box-shadow: $box-shadow;
      &.overflow {
        overflow: auto;
        max-height: 150px;
        &::-webkit-scrollbar {
          width: 4px
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          background-color: $border;
        }
      }
      .option {
        font-size: $normal;
        padding: 4px 8px;
        &:hover {
          background-color: $background;
        }
        &.active {
          background-color: $background;
          font-weight: bold;
          color: $primary;
        }
        &.hide {
          display: none;
        }
      }
    }

  }

</style>
