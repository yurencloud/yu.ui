<template>
  <div class="yu-upload">
    <input class="input"
           type="file"
           ref="input"
           :name="name"
           @change="handleChange($event)"
           :multiple="multiple"
           :accept="accept"
    >
    <yu-button
      type="primary"
      v-if="type==='button'"
      @click="handleClick">
      <slot/>
    </yu-button>
    <div ref="image"
         v-if="type==='image'"
         class="imageUpload"
         @click="handleClick">
      <i class="iconfont icon-add" v-show="visible"></i>
      <img v-if="preview" :src="preview" alt="preview">
    </div>
    <div v-if="type==='defined'"
         class="defined"
         @click="handleClick">
      <slot/>
    </div>
    <ul v-if="list &&　files.length>0">
      <li :class="{previewList:previewList}" v-for="item in files">
        <i v-if="!multiIcon && !previewList" class="iconfont icon-f-file"></i>
        <i v-if="multiIcon && !previewList" class="iconfont" :class="[item.className]"></i>
        <div v-if="previewList" class="imageContainer">
          <img :src="item.url" alt="">
        </div>
        <span class="fileName">{{item.name}}</span>
        <i class="iconfont icon-close-circle close" @click="handleClose(item)"></i>
        <span class="status">{{status}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import 'whatwg-fetch'
import YuButton from './button'
import YuMessage from './message'

export default {
  name: 'YuUpload',
  data() {
    return {
      files: [],
      status: '正在上传...',
      visible: true,
      preview: null,
    }
  },
  props: {
    list: Boolean,
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
    multiIcon: Boolean,
    maxSize: Number,
    previewList: Boolean,
    headers: Object, // 头部
    data: Object, // 额外参数
    max: Number, // 文件最大同时上传数量
  },
  components: {
    YuButton,
    YuMessage,
  },
  methods: {
    // 让父级去处理删除事件
    handleClose(item) {
      this.$emit('close', item)
    },
    handleChange($event) {
      const the = this
      const formData = new FormData()
      this.files = $event.target.files

      // 最大上传数量
      if (this.max && this.files.length() > this.max) {
        return
      }

      // 添加icon的class
      if (this.multiIcon) {
        for (let i = 0; i < this.files.length; i++) {
          const suffix = this.files[i].name.substr(this.files[i].name.lastIndexOf('.'))
          this.files[i].className = this.getFileIcon(suffix)
        }
      }

      if (this.multiple) {
        const files = $event.target.files
        for (let i = 0; i < files.length; i++) {
          formData.append(`${this.name}[]`, files[i])
        }
      } else {
        formData.append(this.name, $event.target.files[0])
      }

      // 额外参数
      if (this.data) {
        const data = this.data
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key])
        })
      }

      if (this.previewList) {
        for (let i = 0; i < this.files.length; i++) {
          this.files[i].url = this.getObjectURL(this.files[i])
        }
      }

      if (this.maxSize) {
        let size = 0
        for (let i = 0; i < this.files.length; i++) {
          size += parseInt(this.files[i].size, 0)
        }
        if (size > this.maxSize) {
          this.$alert(`文件最大支持${parseInt(this.maxSize / 1024, 2)}KB`)
          return
        }
      }

      if (this.type === 'image') {
        this.visible = false
        this.preview = this.getObjectURL(this.files[0])
      }

      // 如果未定义url, 则由用户通过upload回调上传
      if (this.url) {
        fetch(this.url, {
          method: 'POST',
          body: formData,
          headers: this.headers,
        })
          .then((response) => {
            response.text().then((data) => {
              data = JSON.parse(data)
              // 返回对象data中要有status属性表明上传成功或失败
              if (parseInt(data.status, 0) === 1) {
                the.status = '上传成功.'
                the.$emit('success', data)
              } else {
                the.status = '上传失败!'
                the.$emit('error', data)
              }
            })
          }, (error) => {
            the.$emit('error', error)
          })
      } else {
        this.$emit('upload', this.files, formData)
      }
    },
    handleClick() {
      this.$refs.input.click()
    },
    getObjectURL(file) {
      let url = null
      if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    },
    getFileIcon(suffix) {
      let className
      switch (suffix) {
        case '.doc':
        case '.docx':
          className = 'icon-f-word blue'
          break
        case '.pdf':
          className = 'icon-f-pdf red'
          break
        case '.txt':
          className = 'icon-f-text'
          break
        case '.xls':
        case '.xlsx':
          className = 'icon-f-excel green'
          break
        case '.ppt':
        case '.pptx':
          className = 'icon-f-powerpoint orange'
          break
        case '.zip':
        case '.rar':
        case '.tar':
          className = 'icon-f-archive violet'
          break
        case '.mp3':
        case '.wav':
          className = 'icon-f-audio purple'
          break
        case '.jpg':
        case '.png':
        case '.jpeg':
        case '.bmp':
        case '.gif':
        case '.svg':
          className = 'icon-f-image teal'
          break
        default:
          className = 'icon-f-file'
          break
      }
      return className
    },
  },
}
</script>
