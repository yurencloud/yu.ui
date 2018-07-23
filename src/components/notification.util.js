import Vue from 'vue'
import Main from './notification'

const NotificationConstructor = Vue.extend(Main)

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

const Notification = (options) => {
  if (typeof options !== 'object') {
    console.error('options must be an object')
    return
  }
  options = options || {}

  const id = `notification_${seed++}`

  instance = new NotificationConstructor({
    data: options,
  })
  instance.id = id

  instance.vm = instance.$mount()
  if (process.browser) {
    document.body.appendChild(instance.vm.$el)
  }
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
};

['success', 'warning', 'info', 'danger', 'primary'].forEach((type) => {
  Notification[type] = (options) => {
    options.type = type
    return Notification(options)
  }
})

Notification.close = (id) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (`notification_${id}` === instances[i].id) {
      instances[i].close()
      instances.splice(i, 1)
      break
    }
  }
}

Notification.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Notification
