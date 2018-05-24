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
import Message from '../components/message.util';

Vue.use(Router)
// 额外工具
Vue.prototype.$message = Message;

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
  ],
})
