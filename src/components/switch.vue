<template>
  <div class="yu-switch" @click="handleClick" :class="[{disabled:disabled}]">
     <input type="checkbox" :disabled="disabled" :name="name" v-model="checked" :value="value">
     <span v-if="!after">{{checked?activeLabel||label:inactiveLabel||label}}</span>
     <span class="switch" v-if="visible" :class="[{on:checked},type,{disabled:disabled}]">
      <span class="circle"></span>
    </span>
    <span v-if="after">{{checked?activeLabel||label:inactiveLabel||label}}</span>
  </div>

</template>

<script>
export default {
  name: 'YuSwitch',
  data() {
    return {
      visible: true,
      value: this.checked ? this.activeValue : this.inactiveValue,
      checked: this.on || false,
    };
  },
  props: {
    activeValue: {
      type: [Number, String, Boolean],
      default: true,
    },
    inactiveValue: {
      type: [Number, String, Boolean],
      default: false,
    },
    on: {
      type: Boolean,
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
      if (this.disabled) return;
      this.checked = !this.checked;
      this.value = this.checked ? this.activeValue : this.inactiveValue;
      this.$emit('click', this.value)
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
};
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
        vertical-align: middle;
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
    }
  }
</style>
