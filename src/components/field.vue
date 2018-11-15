<template>
  <div class="yu-field" :class="[{error:error},{inline:inline},{flex:align === 'left' || align === 'right'}]">
    <label v-if="label" :class="[align,{noLabel:noLabel}]" :style="{width: labelWidth}">
      {{label}}
    </label>
    <div class="field"
         :class="{cascader: fixCascader}"
         :style="{width:fieldWidth}"
    >
      <slot/>
      <div v-if="error" class="errorMessage">
        {{error.message}}
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '../utils/util'

const validation = require('yu.validation')

export default {
  name: 'YuField',
  data() {
    return {
      value: {},
      error: null,
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
    labelWidth: {
      type: String,
      default: '100px',
    },
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
    handleEvent(eventName, value) {
      this.value = value
      if (this.$parent.rules) {
        // 如果已经有错误，并且触发事件和原有的错误不一样，说明还没把原有的错误消除，则跳过
        if (this.error && this.error.trigger !== eventName) return

        if (!this.$parent.rules[value.name]) return

        this.trigger = eventName

        this.validateByRules(this.$parent.rules[value.name], this.value)
      }
    },
    validateByRules(validates, value) {
      const the = this

      for (let i = 0; i < validates.length; i++) {
        const validate = validates[i]

        // 若未提供trigger，则默认blur
        if (!validate.trigger) {
          validate.trigger = 'blur'
        }

        if (this.trigger !== validate.trigger) continue

        // 一旦有错误，除非错误被解决，不然一直显示这个错误，不进行其他验证
        if (this.error && this.error.index !== i) continue

        let result

        // value的可能值应该是 字符串、数组、数字、布尔值
        const notEmpty = (value.name && !isEmpty(value.value))

        // 判断是否有自定义的验证函数

        if (validate.validator) {
          const message = validate.validator(value.value)
          if (message && message.length > 0) {
            // 按这个格式来创建错误message
            this.error = { index: i, message, trigger: validate.trigger }
          } else {
            this.error = null
          }
        } else {
          let error = false
          switch (validate.prop) {
            case 'required':
              error = !notEmpty
              break
            case 'max':
              error = (notEmpty && validate.value < value.value.length)
              break
            case 'min':
              error = (notEmpty && validate.value > value.value.length)
              break
            case 'maxNumber':
              error = (notEmpty && validate.value < value.value)
              break
            case 'minNumber':
              error = (notEmpty && validate.value > value.value)
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
              error = (notEmpty && value.value.indexOf(validate.value) === -1)
              break
            case 'notContain':
              error = (notEmpty && value.value.indexOf(validate.value) > -1)
              break
            // 要和已经存在的字段的值相同,每次只能match一个，但可以添加多个match验证
            case 'match':
              error = (notEmpty && the.$parent.getValue(validate.value) !== value.value)
              break
            case 'different':
              error = (notEmpty && the.$parent.getValue(validate.value) === value.value)
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
              error = (notEmpty && (validate.value[0] > value.value || validate.value[1] < value.value))
              break
            // 值在数组中 [1,2,3] ['a','b','c']
            case 'in':
              error = (notEmpty && validate.value.indexOf(value.value) === -1)
              break
            // 值不在数组中 [1,2,3] ['a','b','c']
            case 'notIn':
              error = (notEmpty && validate.value.indexOf(value.value) !== -1)
              break
            // 自定义正则 验证
            case 'regex':
              error = (notEmpty && !validate.value.test(value.value))
              break
            // 如果指定1个字段有值，那么该字段也必须有
            case 'requiredIf':
              error = (the.$parent.hasValue(validate.value) && !notEmpty)
              break
            // 如果指定1个字段没值，那么该字段也必须有
            case 'requiredWithout':
              error = (!the.$parent.hasValue(validate.value) && !notEmpty)
              break
            // 如果指定多个字段其中一个有值['name','age']，那么该字段也必须有
            case 'requiredWith':
              result = false
              validate.value.forEach((i) => {
                if (the.$parent.hasValue(i)) {
                  result = true
                }
              })
              error = (result && !notEmpty)
              break
            // 如果指定多个字段全部有值['name','age']，那么该字段也必须有
            case 'requiredWithAll':
              result = true
              validate.value.forEach((i) => {
                if (!the.$parent.hasValue(i)) {
                  result = false
                }
              })
              error = (result && !notEmpty)
              break
            // 如果指定多个字段全部没有值['name','age']，那么该字段也必须有
            case 'requiredWithoutAll':
              result = true
              validate.value.forEach((i) => {
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
            this.setError(validate, i)
          } else {
            this.error = null
          }
        }
      }
    },
    setError(item, i) {
      this.error = { index: i, message: item.message || this.getMessage(item), trigger: item.trigger }
    },
    getMessage(item) {
      let message = this.defaultMessage[item.prop]
      message = message.replace('$name', item.name || '').replace('$value', item.value ? item.value.toString() : '').replace('$other', item.other)
      return message
    },
    clearError() {
      this.error = null
    },
  },
}
</script>
