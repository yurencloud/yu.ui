<template>
  <div class="yu-select">
    <yu-input
      readonly
      ref='input'
      @click="handleClick"
      @blur="handleBlur"
      suffix="icon-angle-down"
      :placeholder="text"
      :disabled="disabled"
    />
    <div class="options" :class="[{overflow:overflow}]" v-show="visible">
      <slot/>
    </div>
    <!--选中选项显示-->
    <div class="selected" v-if="selects.length>0">
      <yu-selected v-for="item in selects" v-bind:key="item.value" :value="item.value">{{item.label}}</yu-selected>
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
    };
  },
  props: {
    overflow: {
      type: Boolean,
    },
    text: {
      type: String,
    },
    disabled: Boolean,
    multi: Boolean,
    options: {
      type: Array,
    },
  },
  created() {
    this.$on('handleSelect', this.handleSelect);
    this.$on('cancelSelect', this.cancelSelect)
  },

  methods: {
    handleClick(event) {
      this.visible = !this.visible;
      if (!this.visible) event.target.blur();
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

  .yu-select {
    position: relative;
    margin: auto 8px 12px auto;
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
    }
    input {
      & + span.suffix > i {
        transition: all ease .4s;
      }
      &:hover {
        cursor: pointer;
      }
      &:focus {
        border: 1px solid $primary;
        & + span.suffix > i.icon-angle-down {
          transform: rotate(-180deg);
        }
      }
      transition: all ease .4s;
    }

    &.prepend {
      display: inline-block;
      vertical-align: top;
      margin: 0;
      input {
        border-radius: 4px 0 0 4px;
      }
      &>.yu-input{
        margin: 0;
      }
    }

    &.append {
      display: inline-block;
      vertical-align: top;
      input {
        border-radius: 0 4px 4px 0;
      }
      &>.yu-input{
        margin: 0;
      }
    }

    .selected{
      margin-top: 12px;
    }

  }


</style>
