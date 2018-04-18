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
    />
    <div class="options" :class="[{overflow:overflow}]" v-show="visible">
      <slot/>
    </div>
    <!--选中选项显示-->
    <div class="selected" v-if="showSelects && selects.length>0">
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
    overflow: Boolean,
    placeholder: String,
    disabled: Boolean,
    multi: Boolean,
    options: Array,
    name: String,
    showSelects: Boolean,
    width: String,
    size: String,
  },
  created() {
    this.$on('handleSelect', this.handleSelect);
    this.$on('cancelSelect', this.cancelSelect)
  },

  methods: {
    clear() {
      this.value = '';
      this.label = '';
      this.selects = [];

      this.$children.forEach((item) => {
        item.hide = false;
      });
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: '' });
      }
    },
    handleClick(event) {
      this.visible = !this.visible;
      if (!this.visible) event.target.blur();
    },
    handleSelect(option) {
      const labels = [];
      const values = [];
      if (this.multi) {
        this.selects.push(option);
        this.selects.forEach((item) => {
          values.push(item.value);
          labels.push(item.label);
        })
      }
      this.$refs.input.value = this.multi ? labels.toString() : option.label;
      this.$refs.input.$el.children[0].blur();
      this.value = option.value;
      this.label = option.label;
      this.visible = false;
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.multi ? values.toString() : this.value });
      }
      this.$emit('selected', this.value);
    },
    handleBlur(event) {
      this.visible = false;
      if (this.$parent.isField) {
        const values = [];
        this.selects.forEach((item) => {
          values.push(item.value);
        })
        this.$parent.handleBlur({ name: this.name, value: this.multi ? values.toString() : this.value });
      }
      this.$emit('blur', event);
    },
    cancelSelect(option) {
      const labels = [];
      const values = [];
      this.selects.splice(this.selects.findIndex(item => item.value === option.value), 1);
      this.selects.forEach((item) => {
        values.push(item.value);
        labels.push(item.label);
      })
      this.$refs.input.value = labels.toString();
      this.$refs.input.$el.children[0].blur();
      this.$children.forEach((item) => {
        if (item.value === option.value) {
          item.hide = false;
        }
      })
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: values.toString() });
      }
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
  @import "../assets/css/animation";

  .yu-select {
    position: relative;
    .options {
      background-color: #fff;
      position: absolute;
      top: 40px;
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
    @include angleAnimation();

    &.prepend {
      display: inline-block;
      vertical-align: top;
      margin: 0;
      input {
        border-radius: 4px 0 0 4px;
      }
      & > .yu-input {
        margin: 0;
      }
    }

    &.append {
      display: inline-block;
      vertical-align: top;
      input {
        border-radius: 0 4px 4px 0;
      }
      & > .yu-input {
        margin: 0;
      }
    }

    .selected {
      margin-top: 12px;
    }

  }


</style>
