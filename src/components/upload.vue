<template>
  <div class="yu-upload" >
    <input class="input"
           type="file"
           ref="input"
           :name="name"
           @change="handleChange($event)"
           :multiple="multiple"
           :accept="accept"
    >
    <yu-button v-if="type==='button'" @click="handleClick"><slot/></yu-button>
    <slot v-if="type==='defined'"/>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from './button';

const event = require('yu.event');

export default {
  name: 'YuUpload',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    name: {
      type: String,
      default: 'file',
    },
    multiple: Boolean,
    accept: String,
    url: String,
  },
  components: {
    YuButton,
  },
  methods: {
    handleChange($event) {
      const formData = new FormData();

      if (this.multiple) {
        const files = $event.target.files;
        for (let i = 0; i < files.length; i++) {
          formData.append(`${this.name}[]`, files[i]);
        }
      } else {
        formData.append(this.name, $event.target.files[0]);
      }
      fetch(this.url, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          response.text().then((data) => {
            data = JSON.parse(data);
            console.log(data);
          });
        }, (error) => {
          console.log(error.message);
        })
    },
    handleClick() {
      this.$refs.input.click();
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-upload {
    color: $text;
    .input{
      display: none;
    }
  }

</style>
