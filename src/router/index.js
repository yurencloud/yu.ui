import Vue from 'vue'
import Router from 'vue-router'
import Button from '../example/button'
import Radio from '../example/radio'
import Checkbox from '../example/checkbox'
import Input from '../example/input'
import Counter from '../example/counter'
import Select from '../example/select'
import Switch from '../example/switch'
import Cascader from '../example/cascader'
import Slider from '../example/slider'
import TimePicker from '../example/time-picker'
import DatePicker from '../example/date-picker'
import Upload from '../example/upload'
import Rate from '../example/rate'
import Form from '../example/form'
import Table from '../example/table'
import Tag from '../example/tag'
import Message from '../example/message'
import Progress from '../example/progress'
import Pagination from '../example/pagination'
import Badge from '../example/badge'
import Alert from '../example/alert'
import Notification from '../example/notification'
import Loading from '../example/loading'
import MessageBox from '../example/message-box'
import ScrollSelect from '../example/scroll-select'
import Breadcrumb from '../example/breadcrumb'
import Steps from '../example/steps'
import Dialog from '../example/dialog'
import Tooltip from '../example/tooltip'
import Popover from '../example/popover'
import Card from '../example/card'
import Carousel from '../example/carousel'
import Collapse from '../example/collapse'
import MessageUtil from '../components/message.util'
import NotificationUtil from '../components/notification.util'
import AlertUtil from '../components/alert.util'
import ConfirmUtil from '../components/confirm.util'
import PromptUtil from '../components/prompt.util'

Vue.use(Router)
// 额外工具
Vue.prototype.$message = MessageUtil
Vue.prototype.$notify = NotificationUtil
Vue.prototype.$notify = NotificationUtil
Vue.prototype.$alert = AlertUtil
Vue.prototype.$confirm = ConfirmUtil
Vue.prototype.$prompt = PromptUtil

export default new Router({
  routes: [
    {
      path: '/',
      component: Button,
    },
    {
      path: '/button',
      component: Button,
    },
    {
      path: '/radio',
      component: Radio,
    },
    {
      path: '/checkbox',
      component: Checkbox,
    },
    {
      path: '/input',
      component: Input,
    },
    {
      path: '/counter',
      component: Counter,
    },
    {
      path: '/select',
      component: Select,
    },
    {
      path: '/cascader',
      component: Cascader,
    },
    {
      path: '/switch',
      component: Switch,
    },
    {
      path: '/slider',
      component: Slider,
    },
    {
      path: '/time-picker',
      component: TimePicker,
    },
    {
      path: '/date-picker',
      component: DatePicker,
    },
    {
      path: '/upload',
      component: Upload,
    },
    {
      path: '/rate',
      component: Rate,
    },
    {
      path: '/form',
      component: Form,
    },
    {
      path: '/table',
      component: Table,
    },
    {
      path: '/tag',
      component: Tag,
    },
    {
      path: '/message',
      component: Message,
    },
    {
      path: '/progress',
      component: Progress,
    },
    {
      path: '/pagination',
      component: Pagination,
    },
    {
      path: '/badge',
      component: Badge,
    },
    {
      path: '/alert',
      component: Alert,
    },
    {
      path: '/notification',
      component: Notification,
    },
    {
      path: '/loading',
      component: Loading,
    },
    {
      path: '/message-box',
      component: MessageBox,
    },
    {
      path: '/scroll-select',
      component: ScrollSelect,
    },
    {
      path: '/breadcrumb',
      component: Breadcrumb,
    },
    {
      path: '/steps',
      component: Steps,
    },
    {
      path: '/dialog',
      component: Dialog,
    },
    {
      path: '/tooltip',
      component: Tooltip,
    },
    {
      path: '/popover',
      component: Popover,
    },
    {
      path: '/card',
      component: Card,
    },
    {
      path: '/carousel',
      component: Carousel,
    },
    {
      path: '/collapse',
      component: Collapse,
    },
  ],
})
