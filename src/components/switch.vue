<template>
  <div class="yu-switch"
       @click="handleClick"
       :class="[{disabled:disabled}]">
     <input type="checkbox"
            :disabled="disabled"
            :name="name"
            :value="value">
     <span v-if="!after">
       {{isChecked?(activeLabel||label):(inactiveLabel||label)}}
     </span>
     <span class="switch"
           :class="[{on:isChecked},type,{disabled:disabled}]">
      <span class="circle"></span>
    </span>
    <span v-if="after">
      {{isChecked?(activeLabel||label):(inactiveLabel||label)}}
    </span>
  </div>

</template>

<script>
export default {
  name: 'YuSwitch',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: [Number, String, Boolean],
    activeValue: {
      type: [Number, String, Boolean],
      default: true,
    },
    inactiveValue: {
      type: [Number, String, Boolean],
      default: false,
    },
    label: String,
    activeLabel: String,
    inactiveLabel: String,
    type: {
      type: String,
      default: 'primary',
    },
    after: Boolean,
    name: String,
    disabled: Boolean,
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      const value = !this.isChecked ? this.activeValue : this.inactiveValue
      this.$emit('click', value)
      this.$emit('input', value)
    },
  },
  computed: {
    isChecked() {
      return this.value === this.activeValue
    },
  },
  watch: {
    value(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-switch {
    font-size: 0;
    color:$text;
    input{
      display: none;
    }
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 12px;
    span{
      font-size: $normal;
    }
    span:nth-child(1){
      margin-right: 8px;
    }
    span:nth-child(3){
      margin-left: 8px;
    }
    .switch {
      font-size: $normal;
      display: inline-block;
      width: 40px;
      height: 20px;
      background: $dark-border;
      border-radius: 10px;
      padding: 1px 2px;
      box-sizing: border-box;

      .circle {
        margin-top: 1px;
        box-sizing: border-box;
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 8px;
        transition: all .4s ease;
        transform: translateX(0px);
      }
      transition: background-color .4s ease;
      &.on {
        .circle{
          transition: all .4s ease;
          transform: translateX(20px);
        }
        @include generalAllColorSwitch();
      }
    }
    &.disabled{
      color:lighten($text,25);
      cursor: not-allowed;
    }
  }
</style>
