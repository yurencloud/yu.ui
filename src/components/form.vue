<template>
  <form class="yu-form"
        :class="{inline:inline}"
        :style="{width:width}"
        :action="action"
        :method="method"
        :enctype="enctype"
        ref="form"
  >
    <slot/>
  </form>
</template>

<script>
import 'whatwg-fetch';

export default {
  name: 'YuForm',
  data() {
    return {
      values: {},
    }
  },
  props: {
    inline: Boolean,
    rules: Object,
    width: String,
    action: String,
    method: {
      type: String,
      default: 'GET',
    },
    native: Boolean,
    enctype: String,
  },
  methods: {
    setValues(value) {
      this.values[value.name] = value.value;
    },
    getValue(name) {
      return this.values[name];
    },
    getValues() {
      return this.values;
    },
    hasValue(name) {
      return this.values.hasOwnProperty(name) && this.getValue(name).trim().length > 0;
    },
    submit() {
      const the = this;
      let error = false;
      this.$children.forEach((item)=>{
        if(item.isField){
          item.handleSubmit();
        }
        if(item.error) error = true;
      })
      // 发送原生表单
      if (this.native) {
        fetch(this.action, {
          method: 'POST',
          body: new FormData(the.$refs.form),
        })
        return;
      }

      // 发送get
      if (this.method.toUpperCase() === 'GET') {
        let query = '';
        for (key in this.values) {
          if (this.values.hasOwnProperty(key)) {
            query += `${key}&${this.value[key]}`;
          }
        }
        const question = this.action.indexOf('?') ? '' : '?';
        fetch(this.action + question + query, {
          method: 'GET',
        })
          .then((response) => {
            response.text().then((data) => {
              the.$emit('success', data);
            });
          }, (error) => {
            the.$emit('error', error);
            console.log(error.message);
          });
      }

      if (this.method.toUpperCase() === 'POST') {
        fetch(this.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.values),
        })
          .then((response) => {
            response.text().then((data) => {
              the.$emit('success', data);
            });
          }, (error) => {
            the.$emit('error', error);
            console.log(error.message);
          });
      }
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-form {
    width: 460px;
    &.inline {
      width: 100%;
      .yu-field {
        vertical-align: top;
        display: inline-block;
        label{
          width: auto;
        }
        .field{
          width: auto;
        }
      }
    }
  }

</style>
