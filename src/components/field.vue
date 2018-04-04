<template>
  <div class="yu-field" :class="[{error:error},{inline:inline}]">
    <label :class="[align,{noLabel:noLabel}]">{{label}}</label>
    <div class="field" :class="{cascader: fixCascader}" :style="{width:fieldWidth}">
      <slot/>
      <span v-if="!list&&error" class="errorMessage">{{messages[0]}}</span>
      <div v-if="list&&error" class="errorMessages">
        <p v-bind:key="index" v-for="(index, item) in messages">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const validation = require('yu.validation');


export default {
  name: 'YuField',
  data() {
    return {
      // {name:age,value:23}
      value: {},
      error: false,
      messages: [],
      trigger: 'submit',
      isField: true, // 提供子组件判断父组件是field使用
      fixCascader: false,
    }
  },
  props: {
    label: String,
    inline: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    noLabel: Boolean,
    list: Boolean,
    fieldWidth: String,
    defaultMessage: {
      type: Object,
      default: () => ({
        required: '$name为必填选项',
        min: '$name最小为$value个字符',
        max: '$name最大为$value个字符',
        maxNumber: '$name不得大于$value',
        minNumber: '$name不得小于$value',
        email: '$name邮箱格式不正确',
        url: '$nameURL网址不正确',
        integer: '$name必须是整数',
        number: '$name必须是数字',
        contain: '$name必须包含"$value"',
        notContain: '$name不得包含"$value"',
        match: '$name的值必须和$other相同',
        different: '$name的值必须和$other不同',
        chinese: '$name必须为中文',
        idNumber: '$name身份证不正确',
        password: '$name密码格式不符合要求',
        mobile: '$name手机号格式不正确',
        telephone: '$name电话号码格式不正确',
        domain: '$name域名格式不正确',
        username: '$name用户名格式不正确',
        ip: '$nameIP地址不正确',
        accepted: '$name必须选择',
        between: '$name必须在$value之间',
        in: '$name必须为[$value]之一',
        notIn: '$name不可以是[$value]之一',
        regex: '$name必须符合规则',
        requiredIf: '当填写了$other，则$name为必填选项',
        requiredWithout: '当未填写$other，则$name为必填选项',
        requiredWith: '当填写了$other其中一项，则$name为必填选项',
        requiredWithAll: '当填写了$other中所有选项，则$name为必填选项',
        requiredWithoutAll: '当未填写$other中所有选项，则$name为必填选项',
      }),
    },
  },
  methods: {
    handleChange(value) {
      this.value = value;
      this.$parent.setValues(value);
      this.trigger = 'change';
      this.validateByRules(this.$parent.rules, value);
    },
    handleBlur(value) {
      this.value = value;
      this.$parent.setValues(value);
      this.trigger = 'blur';
      this.validateByRules(this.$parent.rules, value);
    },
    validateByRules(rules, value) {
      const the = this;
      const validates = rules[value.name];
      if (!validates) return;
      // 初始化错误信息
      this.error = false;
      this.messages = [];
      validates.forEach((item) => {
        // name: [
        //   { prop: 'required', value: true, message: '必填选项', trigger: 'blur', name: '字段的中文名或英文名(这个值默认为'')', other: '另一字段的中文名称' },
        // ],
        if (item.trigger && this.trigger !== item.trigger) return;
        let result;
        const notEmpty = (value.name && value.value.toString().trim().length !== 0)
        switch (item.prop) {
          case 'required':
            if (!notEmpty) this.setError(item);
            break;
          case 'max':
            if (notEmpty && item.value < value.value.length) this.setError(item);
            break;
          case 'min':
            if (notEmpty && item.value > value.value.length) this.setError(item);
            break;
          case 'maxNumber':
            if (notEmpty && item.value < value.value) this.setError(item);
            break;
          case 'minNumber':
            if (notEmpty && item.value > value.value) this.setError(item);
            break;
          case 'email':
            if (notEmpty && !validation.isEmail(value.value)) this.setError(item);
            break;
          case 'url':
            if (notEmpty && !validation.isUrl(value.value)) this.setError(item);
            break;
          case 'integer':
            if (notEmpty && !validation.isInteger(value.value)) this.setError(item);
            break;
          case 'number':
            if (notEmpty && !validation.isNumber(value.value)) this.setError(item);
            break;
          case 'contain':
            if (notEmpty && value.value.indexOf(item.value) === -1) this.setError(item);
            break;
          case 'notContain':
            if (notEmpty && value.value.indexOf(item.value) > -1) this.setError(item);
            break;
            // 要和已经存在的字段的值相同,每次只能match一个，但可以添加多个match验证
          case 'match':
            if (notEmpty && the.$parent.getValue(item.value) !== value.value) this.setError(item);
            break;
          case 'different':
            if (notEmpty && the.$parent.getValue(item.value) === value.value) this.setError(item);
            break;
          case 'chinese':
            if (notEmpty && !validation.isChinese(value.value)) this.setError(item);
            break;
          case 'idNumber':
            if (notEmpty && !validation.isIdNumber(value.value)) this.setError(item);
            break;
          case 'password':
            if (notEmpty && !validation.isPassword(value.value)) this.setError(item);
            break;
          case 'mobile':
            if (notEmpty && !validation.isMobile(value.value)) this.setError(item);
            break;
          case 'telephone':
            if (notEmpty && !validation.isTelephone(value.value)) this.setError(item);
            break;
          case 'domain':
            if (notEmpty && !validation.isDomain(value.value)) this.setError(item);
            break;
          case 'username':
            if (notEmpty && !validation.isUsername(value.value)) this.setError(item);
            break;
          case 'ip':
            if (notEmpty && !validation.isIp(value.value)) this.setError(item);
            break;
            // 判断接受，比如同意
          case 'accepted':
            if (notEmpty && value.value !== 'on' && value.value !== true && value.value !== 1) this.setError(item);
            break;
            // 数字区间 [low, high],含边界
          case 'between':
            if (notEmpty && (item.value[0] > value.value || item.value[1] < value.value)) this.setError(item);
            break;
            // 值在数组中 [1,2,3] ['a','b','c']
          case 'in':
            if (notEmpty && item.value.indexOf(value.value) === -1) this.setError(item);
            break;
            // 值不在数组中 [1,2,3] ['a','b','c']
          case 'notIn':
            if (notEmpty && item.value.indexOf(value.value) !== -1) this.setError(item);
            break;
            // 自定义正则 验证
          case 'regex':
            if (notEmpty && !item.value.test(value.value)) this.setError(item);
            break;
            // 如果指定1个字段有值，那么该字段也必须有
          case 'requiredIf':
            if (the.$parent.hasValue(item.value) && !notEmpty) this.setError(item);
            break;
            // 如果指定1个字段没值，那么该字段也必须有
          case 'requiredWithout':
            if (!the.$parent.hasValue(item.value) && !notEmpty) this.setError(item);
            break;
            // 如果指定多个字段其中一个有值['name','age']，那么该字段也必须有
          case 'requiredWith':
            result = false;
            item.value.forEach((i) => {
              if (the.$parent.hasValue(i)) {
                result = true;
              }
            });
            if (result && !notEmpty) this.setError(item);
            break;
            // 如果指定多个字段全部有值['name','age']，那么该字段也必须有
          case 'requiredWithAll':
            result = true;
            item.value.forEach((i) => {
              if (!the.$parent.hasValue(i)) {
                result = false;
              }
            });
            if (result && !notEmpty) this.setError(item);
            break;
            // 如果指定多个字段全部没有值['name','age']，那么该字段也必须有
          case 'requiredWithoutAll':
            result = true;
            item.value.forEach((i) => {
              if (the.$parent.hasValue(i)) {
                result = false;
              }
            });
            if (result && !notEmpty) this.setError(item);
            break;
          default:
            break;
        }
      })
    },
    setError(item) {
      this.error = true;
      this.messages.push(item.message || this.getMessage(item));
    },
    getMessage(item) {
      let message = this.defaultMessage[item.prop];
      message = message.replace('$name', item.name).replace('$value', item.value ? item.value.toString() : '').replace('$other', item.other);
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
    display: block;
    vertical-align: top;
    &.inline {
      display: inline-block;
      .field {
        width: auto;
        .yu-input {
          width: auto;
          textarea {
            width: auto;
          }
        }
      }
    }
    .noLabel {
      display: none !important;
    }
    label {
      font-size: 16px;
      width: 90px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      padding-right: 12px;
    }
    label.top {
      display: block;
      margin-bottom: 12px;
    }
    label.left {
      display: inline-block;
      text-align: left;
    }
    label.right {
      display: inline-block;
      text-align: right;
    }

    .field {
      vertical-align: top;
      display: inline-block;
      box-sizing: border-box;
      width: 80%;
      .yu-input {
        input{
          width: 100%;
        }
        textarea {
          width: 95%;
        }
      }
      .yu-switch {
        margin-top: 10px;
      }
      &.cascader {
        min-width: 500px;
      }
    }
    .three.field {
      min-width: 370px;
    }
    &.error {
      .field {
        .yu-input {
          input {
            border: 1px solid $danger;
          }
          textarea {
            border: 1px solid $danger;
          }
        }
        .errorMessage {
          /*float: left;*/
          font-size: 14px;
          color: $danger;
        }
        .errorMessages {
          font-size: 14px;
          color: $danger;
          p {
            margin: 2px;
          }
        }
      }
    }

  }

</style>
