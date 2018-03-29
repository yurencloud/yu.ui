<template>
  <div class="yu-field" >
    <label :class="[align]">{{label}}</label>
    <div class="field">
      <slot/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuButtons',
  data() {
    return {
      // {name:age,value:23}
      value: {},
      error: false,
      message: '',
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
  },
  methods: {
    setValue(name, value) {
      // 如果这个field需要验证
      if (this.validate) {
        const rules = this.$parent.rules;
      }
      this.value = { name, value };
    },
    validateByRules(rules, value) {
      const validates = rules[value.name];
      validates.forEach((item) => {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        // TODO:: 待继续
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            switch (key) {
              case 'require':// 默认false,
                if (item.require) {
                  if (!value.name) this.setError(item);
                }
                break;
              case 'max':// 默认false,
                if (item.max < value.value) this.setError(item);
                break;
              default:
                break;
            }
          }
        }
      })
    },
    setError(item) {
      this.error = true;
      this.message = message;
    },
  },
  mounted() {
    if (this.label.length > 4) {
      this.addLineHeight = true;
    }
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-field {
    color: $text;
    font-size: 0;
    margin-bottom: 12px;
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

  }

</style>
