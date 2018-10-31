<template>
  <div class="yu-field" :class="[{error:error},{inline:inline}]">
    <label v-if="label" :class="[align,{noLabel:noLabel}]">
      {{label}}
    </label>
    <div class="field"
         :class="{cascader: fixCascader}"
         :style="{width:fieldWidth}"
    >
      <slot/>
      <span v-if="error" class="errorMessage">
        {{messages}}
      </span>
    </div>
  </div>
</template>

<script>
const validation = require('yu.validation')


export default {
  name: 'YuField',
  data() {
    return {
      value: {},
      error: false,
      messages: '',
      trigger: 'submit',
      isField: true, // 提供子组件判断父组件是field使用
      fixCascader: false,
    }
  },
  props: {
    prop: String,
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
    handleEvent(eventName, value) {
      this.value = value
      if (this.$parent.rules) {
        this.trigger = eventName
        this.validateByRules(this.$parent.rules, this.value)
      }
    },
    validateByRules(rules, value) {
      // TODO::错误消息处理待处理
      const the = this
      const validates = rules[value.name]
      if (!validates) return
      // 若出现错误，则立即停止继续验证
      for (let i = 0; i < validates.length; i++) {
        const item = validates[i]
        // name: [
        //   { prop: 'required', value: true, message: '必填选项', trigger: 'blur', name: '字段的中文名或英文名(这个值默认为'')', other: '另一字段的中文名称' },
        // ],
        if (!item.trigger) {
          item.trigger = 'submit'
        }
        // 若触发事件和rules中的触发事件不一样，并且已经有错误，则路过，防止被不同事件消除错误
        // 若一样，或者没有错误，则继续执行验证
        if (this.trigger !== item.trigger) return
        let result
        const notEmpty = (value.name && value.value.toString().trim().length !== 0)
        let error = false

        // 判断是否有自定义的验证函数
        if (item.validator) {
          const message = item.validator(value.value)
          if (message && message.length > 0) {
            this.messages = message
            this.error = true
            return
          }
          this.error = false
        } else {
          switch (item.prop) {
            case 'required':
              error = !notEmpty
              break
            case 'max':
              error = (notEmpty && item.value < value.value.length)
              break
            case 'min':
              error = (notEmpty && item.value > value.value.length)
              break
            case 'maxNumber':
              error = (notEmpty && item.value < value.value)
              break
            case 'minNumber':
              error = (notEmpty && item.value > value.value)
              break
            case 'email':
              error = (notEmpty && !validation.isEmail(value.value))
              break
            case 'url':
              error = (notEmpty && !validation.isUrl(value.value))
              break
            case 'integer':
              error = (notEmpty && !validation.isInteger(value.value))
              break
            case 'number':
              error = (notEmpty && !validation.isNumber(value.value))
              break
            case 'contain':
              error = (notEmpty && value.value.indexOf(item.value) === -1)
              break
            case 'notContain':
              error = (notEmpty && value.value.indexOf(item.value) > -1)
              break
            // 要和已经存在的字段的值相同,每次只能match一个，但可以添加多个match验证
            case 'match':
              error = (notEmpty && the.$parent.getValue(item.value) !== value.value)
              break
            case 'derror =ferent':
              error = (notEmpty && the.$parent.getValue(item.value) === value.value)
              break
            case 'chinese':
              error = (notEmpty && !validation.isChinese(value.value))
              break
            case 'idNumber':
              error = (notEmpty && !validation.isIdNumber(value.value))
              break
            case 'password':
              error = (notEmpty && !validation.isPassword(value.value))
              break
            case 'mobile':
              error = (notEmpty && !validation.isMobile(value.value))
              break
            case 'telephone':
              error = (notEmpty && !validation.isTelephone(value.value))
              break
            case 'domain':
              error = (notEmpty && !validation.isDomain(value.value))
              break
            case 'username':
              error = (notEmpty && !validation.isUsername(value.value))
              break
            case 'ip':
              error = (notEmpty && !validation.isIp(value.value))
              break
            // 判断接受，比如同意
            case 'accepted':
              error = (notEmpty && value.value !== 'on' && value.value !== true && value.value !== 1)
              break
            // 数字区间 [low, high],含边界
            case 'between':
              error = (notEmpty && (item.value[0] > value.value || item.value[1] < value.value))
              break
            // 值在数组中 [1,2,3] ['a','b','c']
            case 'in':
              error = (notEmpty && item.value.indexOf(value.value) === -1)
              break
            // 值不在数组中 [1,2,3] ['a','b','c']
            case 'notIn':
              error = (notEmpty && item.value.indexOf(value.value) !== -1)
              break
            // 自定义正则 验证
            case 'regex':
              error = (notEmpty && !item.value.test(value.value))
              break
            // 如果指定1个字段有值，那么该字段也必须有
            case 'requiredIf':
              error = (the.$parent.hasValue(item.value) && !notEmpty)
              break
            // 如果指定1个字段没值，那么该字段也必须有
            case 'requiredWithout':
              error = (!the.$parent.hasValue(item.value) && !notEmpty)
              break
            // 如果指定多个字段其中一个有值['name','age']，那么该字段也必须有
            case 'requiredWith':
              result = false
              item.value.forEach((i) => {
                if (the.$parent.hasValue(i)) {
                  result = true
                }
              })
              error = (result && !notEmpty)
              break
            // 如果指定多个字段全部有值['name','age']，那么该字段也必须有
            case 'requiredWithAll':
              result = true
              item.value.forEach((i) => {
                if (!the.$parent.hasValue(i)) {
                  result = false
                }
              })
              error = (result && !notEmpty)
              break
            // 如果指定多个字段全部没有值['name','age']，那么该字段也必须有
            case 'requiredWithoutAll':
              result = true
              item.value.forEach((i) => {
                if (the.$parent.hasValue(i)) {
                  result = false
                }
              })
              error = (result && !notEmpty)
              break
            default:
              break
          }

          if (error) {
            this.setError(item)
            return
          }
          this.error = false
        }
      }
    },
    setError(item) {
      this.error = true
      this.messages = item.message || this.getMessage(item)
    },
    getMessage(item) {
      let message = this.defaultMessage[item.prop]
      message = message.replace('$name', item.name || '').replace('$value', item.value ? item.value.toString() : '').replace('$other', item.other)
      return message
    },
  },
}
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
        text-align: left;
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
      }
    }

  }

</style>
