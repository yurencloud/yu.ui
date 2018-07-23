import Vue from 'vue'
import Main from './message-box'

const MessageBoxConstructor = Vue.extend(Main)

let instance
const instances = []
let seed = 1


const hasOwnProperty = Object.prototype.hasOwnProperty

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions')
}

// 第一个参数可以是字符串或者对象，第二个参数必定是标题
const Prompt = (message, title, options) => {
  options = options || {}
  options.message = message

  if (title != null) {
    options.title = title
  }

  const id = `prompt_${seed++}`

  instance = new MessageBoxConstructor({
    data: options,
  })
  instance.id = id
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message]
    instance.message = null
  }
  instance.vm = instance.$mount()
  if (process.browser) {
    document.body.appendChild(instance.vm.$el)
  }
  instance.vm.visible = true
  instance.vm.showCancelButton = true
  instance.vm.isInput = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
};

['success', 'warning', 'info', 'danger', 'primary'].forEach((type) => {
  Prompt[type] = (message, title, options) => {
    options = options || {}
    options.message = message

    if (title != null) {
      options.title = title
    }

    options.type = type
    return Prompt(message, title, options)
  }
})

Prompt.close = (id) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (`prompt_${id}` === instances[i].id) {
      instances[i].close()
      instances.splice(i, 1)
      break
    }
  }
}

Prompt.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Prompt
