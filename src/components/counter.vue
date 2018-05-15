<template>
  <div class="yu-counter">
    <yu-button
      :size="size"
      class="counter sub"
      @click="handleSubtract"
      :disabled="disabled || disabledSubtract"
    >-</yu-button>
    <yu-input
      :size="size"
      ref='input'
      :name="name"
      :defaultValue='value+valueUnit'
      :disabled="disabled"
      class="counter"
      @change="handleChange"
      @blur="handleBlur"
      :width="width"
    />
    <yu-button
      :size="size"
      @click="handleAdd"
      class="counter add"
      :disabled="disabled || disabledAdd"
    >+</yu-button>
  </div>
</template>

<script>
import YuInput from '../components/input';
import YuButton from '../components/button';

export default {
  name: 'YuCounter',
  data() {
    return {
      value: this.min || this.step,
      disabledAdd: false,
      disabledSubtract: this.min !== null || false,
    };
  },
  props: {
    name: String,
    size: String,
    width: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1, // 必须大于0
    },
    max: {
      type: Number,
      default: null,
    }, // 包含
    min: {
      type: Number,
      default: null,
    }, // 包含
    valueUnit: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleSubtract() {
      this.value -= this.step;
      this.$refs.input.changeValue(this.value + this.valueUnit);
    },
    handleAdd() {
      this.value += this.step;
      this.$refs.input.changeValue(this.value + this.valueUnit);
    },
    handleChange(value, name) {
      this.value = parseInt(value, 0);
      this.$emit('change', value, name);
    },
    handleBlur(event) {
      if (this.$parent.isField) {
        this.$parent.handleBlur({ name: this.name, value: this.value });
      }
      this.$emit('blur', event)
    },
  },
  watch: {
    value() {
      if (this.max !== null) {
        if (this.value >= this.max) {
          this.value = this.max;
          this.$refs.input.changeValue(this.value + this.valueUnit);
          this.disabledAdd = true;
          return;
        }
        this.disabledAdd = false;
      }
      if (this.min !== null) {
        if (this.value <= this.min) {
          this.value = this.min;
          this.$refs.input.changeValue(this.value + this.valueUnit);
          this.disabledSubtract = true;
        } else {
          this.disabledSubtract = false;
        }
      }
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
  components: {
    YuInput,
    YuButton,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-counter {
    display: inline-block;
    font-size: 0;
    .yu-input.counter {
      display: inline-block;
      box-sizing: border-box;
      margin-right: 0;
      input {
        width: 80px;
        border-radius: 0;
        text-align: center;
      }
    }
    .yu-button.counter {
      vertical-align: top;
      background: $background;
      margin-right: 0;
      width: 50px;
    }
    .yu-button.sub{
      border-radius: 4px 0 0 4px;
    }
    .yu-button.add{
      border-radius: 0 4px 4px 0;
    }
  }

</style>
