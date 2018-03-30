<template>
  <div class="yu-field" :class="{error:error}" >
    <label :class="[align]">{{label}}</label>
    <div class="field">
      <slot/>
      <div v-if="error" class="errorMessage">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuField',
  data() {
    return {
      // {name:age,value:23}
      value: {},
      error: false,
      message: '',
      trigger: 'submit',
      isField: true, // 提供子组件判断父组件是field使用
    }
  },
  props: {
    label: String,
    validate: Boolean,
    default: '',
    align: {
      type: String,
      default: 'left',
    },
    addLineHeight: Boolean,
    defaultMessage: {
      type: Object,
      default: () => ({
        required: '$name必填选项',
        min: '$name最小为$value个字符',
        max: '$name最大为$value个字符',
        maxNumber: '$name不得大于$value',
        minNumber: '$name不得小于$value',
        email: '邮箱格式不正确',
      }),
    },
  },
  methods: {
    setValue(name, value) {
      // 如果这个field需要验证
      const valueObj = { name, value };
      if (!this.error) this.value = valueObj;
    },
    handleChange() {
      if (this.validate) {
        this.trigger = 'change';
        this.validateByRules(this.$parent.rules, this.value);
      }
    },
    handleBlur(value) {
      this.value = value;
      if (this.validate) {
        this.trigger = 'blur';
        this.validateByRules(this.$parent.rules, value);
      }
    },
    handleSubmit() {
      if (this.validate) {
        this.trigger = 'submit';
        this.validateByRules(this.$parent.rules, this.value);
      }
    },
    validateByRules(rules, value) {
      const validates = rules[value.name];
      if (!validates) return;
      validates.forEach((item) => {
        // name: [
        //   { prop: 'required', value: true, message: '必填选项', trigger: 'blur', name: '字段的中文名或英文名(这个值默认为'')' },
        //   { prop: 'min', value: 3, message: '最小为3个字符'}
        //   { prop: 'max', value: 3, message: '最大为5个字符'}
        //   { prop: 'maxNumber', value: 3, message: '不得大于3'}
        //   { prop: 'minNumber', value: 3, message: '不得小于3'}
        // ],
        if (item.trigger &&　this.trigger !== item.trigger) return;

        switch (item.prop) {
          case 'required':// 默认false,
            if (item.value && (!value.name || value.value.trim().length === 0)) this.setError(item);
            break;
          case 'max':
            if (item.value < value.value.length) this.setError(item);
            break;
          case 'min':
            if (item.value > value.value.length) this.setError(item);
            break;
          case 'maxNumber':
            if (item.value < value.value) this.setError(item);
            break;
          case 'minNumber':
            if (item.value > value.value) this.setError(item);
            break;
          case 'email':
            if (value.value.match(/^(.+)@(.+)$/)) this.setError(item);
            break;
          case 'url':
            const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
            if (value.value.match(reg)) this.setError(item);
            break;
          case 'integer':
            if (parseInt(value.value, 0) !== value.value) this.setError(item);
            break;
          case 'number':
            if (isNaN(value.value)) this.setError(item);
            break;
          default:
            break;
        }
      })
    },
    setError(item) {
      this.error = true;
      this.message = item.message || this.getMessage(item);
    },
    getMessage(item) {
      let message = this.defaultMessage[item.prop];
      message = message.replace('$name', item.name).replace('$value', item.value);
      return message;
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-field {
    color: $text;
    font-size: 0;
    margin-bottom: 14px;
    label{
      font-size: 16px;
      width: 90px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      padding-right: 12px;
    }
    label.top{
      display: block;
      margin-bottom: 12px;
    }
    label.left{
      display: inline-block;
      text-align: left;
    }
    label.right{
      display: inline-block;
      text-align: right;
    }
    .field{
      vertical-align: top;
      display: inline-block;
      box-sizing: border-box;
      width: 370px;
      position: relative;
      .yu-input{
        input{
          width: 100%;
        }
        textarea{
          width: 90%;
        }
      }
      .yu-switch{
        margin-top: 10px;
      }
    }

    &.error{
      .field {
        .yu-input {
          input {
            border: 1px solid $danger;
          }
          textarea {
            border: 1px solid $danger;
          }
        }
        .errorMessage{
          position: absolute;
          bottom: -8px;
          left: 0;
          font-size: 14px;
          color: $danger;
        }
      }
    }

  }

</style>
