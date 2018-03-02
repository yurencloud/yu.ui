<template>
  <div class="yu-input" :class="[{disabled:disabled},{append:$slots.append},{prepend:$slots.prepend}]">
  <span class="prefix icon" v-if="prefix">
    <i class="iconfont" :class="[prefix]"></i>
  </span>
    <button v-if="$slots.prepend" class="prepend">
      <slot name="prepend"/>
    </button>
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
      :class="[{prefix:prefix},{suffix:suffix}]">

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
    <button v-if="$slots.append" class="append">
      <slot name="append"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'YuInput',
  data() {
    return {
      value: this.defaultValue ? this.defaultValue : '',
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
  },
  methods: {
    clear() {
      this.value = '';
    },
    handleClick(event) {
      this.$emit('click', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleChange() {
      this.$emit('change', this.value);
    },
    changeValue(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-input {
    margin: auto 8px 12px auto;
    input {
      width: 175px;
      padding: 8px 12px;
      outline: none;
      font-size: $normal;
      color:$text;
      font-family: $font-family;
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
      i {
        font-size: $small;
        color: $lighter-text;
        position: absolute;
        left: 10px;
        top: 4px;
      }
    }

    span.suffix {
      position: relative;
      i {
        font-size: $small;
        color: $lighter-text;
        position: absolute;
        left: -25px;
        top: 4px;
      }
    }

    textarea{
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

    &.append{
      input{
        border-radius: 4px 0 0 4px;
        margin-right: 0;
      }
      .append{
        font-size: $normal;
        padding: 0 8px;
        margin-left: -5px;
        color:$light-text;
        background-color: $background;
        line-height: 33px;
        display: inline-block;
        border:1px solid $border;
        border-left: none;
        border-radius: 0 4px 4px 0;
        outline: none;
      }
    }

    &.prepend{
      input{
        border-radius: 0 4px 4px 0;
        margin-right: 0;
      }
      .prepend{
        font-size: $normal;
        padding: 0 8px;
        color:$light-text;
        margin-right: -5px;
        background-color: $background;
        line-height: 33px;
        display: inline-block;
        border:1px solid $border;
        border-right: none;
        border-radius: 4px 0 0 4px;
        outline: none;
      }
    }

  }

</style>
