<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">表单</div>
    <div class="sub-title">典型表单</div>
    <yu-form>
      <yu-field label="活动名称">
        <yu-input name="activity" v-model="form1.activity"/>
      </yu-field>
      <yu-field label="活动动物">
        <yu-select placeholder="请选择动物" overflow name="animal" v-model="form1.animal">
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
      <br>
      <yu-field label="即时配送">
        <yu-switch label="确认" name="confirm" v-model="form1.confirm"/>
      </yu-field>
      <yu-field label="活动性质">
        <yu-checkboxs name="fruit" v-model="form1.fruit">
          <yu-checkbox label="1">苹果</yu-checkbox>
          <yu-checkbox label="2">西瓜</yu-checkbox>
          <yu-checkbox label="3">桃子</yu-checkbox>
        </yu-checkboxs>
      </yu-field>
      <yu-field label="特殊资源">
        <yu-radios name="fruit2" v-model="form1.fruit2">
          <yu-radio label="1">苹果</yu-radio>
          <yu-radio label="2">香蕉</yu-radio>
          <yu-radio label="3">桃子</yu-radio>
        </yu-radios>
      </yu-field>
      <yu-field label="活动形式">
        <yu-input type="textarea" name="type" v-model="form1.type"/>
      </yu-field>
      <yu-field>
        <yu-button type="primary">提交</yu-button>
        <yu-button>重置</yu-button>
      </yu-field>
    </yu-form>

    <div class="sub-title">行内表单</div>
    <yu-form inline>
      <yu-field label="活动名称">
        <yu-input/>
      </yu-field>
      <yu-field label="活动动物">
        <yu-select placeholder="请选择动物" overflow>
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
      <yu-field>
        <yu-button type="primary">提交</yu-button>
        <yu-button>重置</yu-button>
      </yu-field>
    </yu-form>


    <div class="sub-title">label对齐方式</div>
    <yu-form>
      <yu-field label="顶对齐" align="top">
        <yu-input/>
      </yu-field>
      <yu-field label="左对齐" align="left">
        <yu-input/>
      </yu-field>
      <yu-field label="右对齐" align="right">
        <yu-input/>
      </yu-field>
    </yu-form>

    <div class="sub-title">无label</div>
    <yu-form>
      <yu-field>
        <yu-input/>
      </yu-field>
      <yu-field>
        <yu-input/>
      </yu-field>
    </yu-form>

    <div class="sub-title">表单验证</div>
    <yu-form :rules="rules" width="600px" v-model="form2">
      <yu-field label="活动名称">
        <yu-input name="activity1" v-model="form2.activity1"/>
      </yu-field>
      <yu-field label="活动名称2">
        <yu-input name="activeName2" v-model="form2.activity2" clearable/>
      </yu-field>
      <yu-field label="活动名称3">
        <yu-input name="activeName3" v-model="form2.activity3"/>
      </yu-field>
      <yu-field label="活动动物">
        <yu-select name="animal" placeholder="请选择动物" overflow v-model="form2.animal1">
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
      <yu-field label="活动动物">
        <yu-select name="animal" placeholder="请选择动物" overflow multi v-model="form2.animal2">
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
      <yu-field label="选择日期" inline>
        <yu-date-picker name="date" v-model="form2.date1"/>
      </yu-field>
      <yu-field no-label inline>
        <yu-time-picker name="time" v-model="form2.date2"/>
      </yu-field>
      <yu-field label="即时配送">
        <yu-switch name="confirm" label="确认" v-model="form2.confirm"/>
      </yu-field>
      <yu-field label="活动性质">
        <yu-checkboxs name="fruit" select-all>
          <yu-checkbox label="1">苹果</yu-checkbox>
          <yu-checkbox label="2">西瓜</yu-checkbox>
          <yu-checkbox label="3">桃子</yu-checkbox>
        </yu-checkboxs>
      </yu-field>
      <yu-field label="特殊资源">
        <yu-radios name="fruit2" v-model="form2.fruit2">
          <yu-radio label="1">苹果</yu-radio>
          <yu-radio label="2">香蕉</yu-radio>
          <yu-radio label="3">桃子</yu-radio>
        </yu-radios>
      </yu-field>
      <yu-field label="活动形式">
        <yu-input name="type" type="textarea" v-model="form2.type"/>
      </yu-field>
      <yu-field label="等级">
        <yu-rate name="rate" v-model="form2.rate"/>
      </yu-field>
      <yu-field label="上传文件">
        <yu-upload url="/api/upload" type="image"/>
      </yu-field>
      <yu-field label="滚动列表">
        <yu-scroll-select name="list" :options="cascader" placeholder="请选择"/>
      </yu-field>
      <yu-field label="范围选择">
        <yu-slider name="range"/>
      </yu-field>
      <!--<yu-field label="级联选择">-->
      <!--<yu-cascader name="cascader" :cascader="cascader"/>-->
      <!--</yu-field>-->
      <yu-field label="计数器">
        <yu-counter name="counter" v-model="form2.counter"/>
      </yu-field>

      <yu-button type="primary">提交</yu-button>
      <yu-button>重置</yu-button>

    </yu-form>

    <div class="sub-title">表单提交</div>
    <yu-form :rules="rules" action="/api/fruits" width="600px" method="POST" @success="success">
      <yu-field label="水果id">
        <yu-input name="id"/>
      </yu-field>

      <yu-field label="水果名称">
        <yu-input name="fruit"/>
      </yu-field>

      <yu-button type="primary" submit>提交</yu-button>
      <yu-button>重置</yu-button>

    </yu-form>

    <div class="sub-title">自定义验证器</div>
    <yu-form :rules="rules2" width="600px" method="POST" v-model="form3" ref="form3">
      <yu-field label="水果id" prop="id">
        <yu-input name="id" v-model="form3.id"/>
      </yu-field>

      <yu-field label="水果名称" prop="fruit">
        <yu-input name="fruit" v-model="form3.fruit"/>
      </yu-field>

      <yu-button type="primary" @click="submitForm3()">提交</yu-button>
      <yu-button>重置</yu-button>
    </yu-form>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import 'whatwg-fetch'
import YuButton from '../components/button'
import YuButtons from '../components/buttons'
import YuInput from '../components/input'
import YuOption from '../components/option'
import YuRadio from '../components/radio'
import YuRadios from '../components/radios'
import YuSelect from '../components/select'
import YuCounter from '../components/counter'
import YuCheckbox from '../components/checkbox'
import YuDialog from '../components/dialog'
import YuTooltip from '../components/tooltip'
import YuCollapseItem from '../components/collapse-item'
import YuCollapse from '../components/collapse'
import YuMenuItem from '../components/menu-item'
import YuCheckboxs from '../components/checkboxs'
import YuLoading from '../components/loading'
import YuCounterSide from '../components/counter-side'
import YuCascader from '../components/cascader'
import YuSwitch from '../components/switch'
import YuDropDown from '../components/dropdown'
import YuDropdownMenu from '../components/dropdown-menu'
import YuDropdownItem from '../components/dropdown-item'
import YuBreadcrumb from '../components/breadcrumb'
import YuBreadcrumbItem from '../components/breadcrumb-item'
import YuSlider from '../components/slider'
import YuTimePicker from '../components/time-picker'
import YuScrollSelect from '../components/scroll-select'
import YuDatePicker from '../components/date-picker'
import YuUpload from '../components/upload'
import YuRate from '../components/rate'
import YuForm from '../components/form'
import YuField from '../components/field'

export default {
  data() {
    return {
      form1: {
        activity: '',
        animal: null,
        confirm: false,
        fruit: [],
        fruit2: '',
        type: '',
      },
      form2: {
        activity1: '',
        activity2: '',
        activity3: '',
        animal1: null,
        animal2: [],
        date1: '',
        date2: '',
        confirm: false,
        fruit: [],
        fruit2: '',
        type: '',
        rate: 0,
        counter: 0,
      },
      form3: {
        id: 0,
        fruit: '',
      },
      rules2: {
        id: [
          { prop: 'required' },
          {
            validator: (value) => {
              if (value !== null && value < 10) {
                return 'id不能小于10'
              }
            },
            trigger: 'blur',
          },
        ],
        fruit: [
          {
            validator: (value) => {
              if (value.length > 2) {
                return '水果不得大于2个字'
              }
            },
          },
        ],
      },
      rules: {
        activity1: [
          { prop: 'required', value: true, trigger: 'blur', name: '活动名称' },
          // { prop: 'min', value: 4, trigger: 'blur', name: '活动名称' },
          { prop: 'min', value: 7, trigger: 'blur', name: '活动名称' },
          // { prop: 'email', trigger: 'blur', name: '活动名称' },
          // { prop: 'minNumber', value: 4, trigger: 'blur', name: '活动名称' },
          // { prop: 'maxNumber', value: 6, trigger: 'blur', name: '活动名称' },
          // { prop: 'url', trigger: 'blur', name: '活动名称' },
          // { prop: 'integer', trigger: 'blur', name: '活动名称' },
          // { prop: 'number', trigger: 'blur', name: '活动名称' },
          // { prop: 'contain', value: 'abc', trigger: 'blur', name: '活动名称' },
          // { prop: 'notContain', value: 'abc', trigger: 'blur', name: '活动名称' },
          // { prop: 'chinese', trigger: 'blur', name: '活动名称' },
          // { prop: 'idNumber', trigger: 'blur', name: '活动名称' },
          // { prop: 'password', trigger: 'blur', name: '活动名称' },
          // { prop: 'mobile', trigger: 'blur', name: '活动名称' },
          // { prop: 'between', value: [1, 6], trigger: 'blur', name: '活动名称' },
          // { prop: 'notIn', value: ['1', '6'], trigger: 'blur', name: '活动名称' },
          // { prop: 'regex', value: /^-?\d+$/, trigger: 'blur', message: '正则整数', name: '活动名称' },
        ],
        activeName2: [
          // { prop: 'match', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'different', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredIf', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWithout', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWith', value: ['activeName'], trigger: 'blur', name: '活动名称2', other: '活动名称' },
        ],
        activeName3: [
          // { prop: 'match', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'different', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredIf', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWithout', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWith', value: ['activeName', 'activeName2'], trigger: 'blur', name: '活动名称3', other: '活动名称或活动名称2' },
          // { prop: 'requiredWithAll', value: ['activeName', 'activeName2'], trigger: 'blur', name: '活动名称3', other: '活动名称和活动名称2' },
          // { prop: 'requiredWithoutAll', value: ['activeName', 'activeName2'], trigger: 'blur', name: '活动名称3', other: '活动名称和活动名称2' },
        ],
        animal: [
          { prop: 'required', trigger: 'blur', name: '动物' },
        ],
        date: [
          { prop: 'required', trigger: 'blur', name: '日期' },
        ],
        time: [
          { prop: 'required', trigger: 'blur', name: '时间' },
        ],
        confirm: [
          { prop: 'accepted', trigger: 'change', name: '确认' },
        ],
        fruit: [
          { prop: 'required', trigger: 'change', name: '水果' },
        ],
        fruit2: [
          { prop: 'required', trigger: 'change', name: '水果2' },
        ],
        xin: [
          { prop: 'required', trigger: 'blur', name: '形式' },
        ],
        rate: [
          { prop: 'minNumber', value: 3, trigger: 'change', name: '形式' },
        ],
      },
      fetchScroll: [],
      time: {
        start: '09:00',
        step: '00:15',
        end: '18:00',
      },
      selectParam: {
        start: '09:00:00',
        end: '18:00:00',
      },
      fetchCascader: [],
      defaultValue: {
        first: {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{ value: 'yizhi', label: '一致' }, { value: 'fankui', label: '反馈' }, {
              value: 'xiaolv',
              label: '效率',
            }, { value: 'kekong', label: '可控' }],
          }, {
            value: 'daohang',
            label: '导航',
            children: [{ value: 'cexiangdaohang', label: '侧向导航' }, { value: 'dingbudaohang', label: '顶部导航' }],
          }],
        },
        second: {
          value: 'daohang',
          label: '导航',
          children: [{ value: 'cexiangdaohang', label: '侧向导航' }, { value: 'dingbudaohang', label: '顶部导航' }],
        },
        third: { value: 'dingbudaohang', label: '顶部导航' },
      },
      options: [],
      locals: [
        { value: 1, label: '电视' },
        { value: 2, label: '电脑' },
        { value: 3, label: '冰箱' },
        { value: 4, label: '洗衣机' },
        { value: 5, label: '电饭煲' },
      ],
      cascader: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致',
          }, {
            value: 'fankui',
            label: '反馈',
          }, {
            value: 'xiaolv',
            label: '效率',
          }, {
            value: 'kekong',
            label: '可控',
          }],
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航',
          }, {
            value: 'dingbudaohang',
            label: '顶部导航',
          }],
        }],
      }, {
        value: 'zujian',
        label: '组件',
        disabled: true,
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局',
          }, {
            value: 'color',
            label: 'Color 色彩',
          }, {
            value: 'typography',
            label: 'Typography 字体',
          }, {
            value: 'icon',
            label: 'Icon 图标',
          }, {
            value: 'button',
            label: 'Button 按钮',
          }],
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框',
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框',
          }, {
            value: 'input',
            label: 'Input 输入框',
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器',
          }, {
            value: 'select',
            label: 'Select 选择器',
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器',
          }, {
            value: 'switch',
            label: 'Switch 开关',
          }, {
            value: 'slider',
            label: 'Slider 滑块',
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器',
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器',
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器',
          }, {
            value: 'upload',
            label: 'Upload 上传',
          }, {
            value: 'rate',
            label: 'Rate 评分',
          }, {
            value: 'form',
            label: 'Form 表单',
          }],
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格',
          }, {
            value: 'tag',
            label: 'Tag 标签',
          }, {
            value: 'progress',
            label: 'Progress 进度条',
          }, {
            value: 'tree',
            label: 'Tree 树形控件',
          }, {
            value: 'pagination',
            label: 'Pagination 分页',
          }, {
            value: 'badge',
            label: 'Badge 标记',
          }],
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告',
          }, {
            value: 'loading',
            label: 'Loading 加载',
          }, {
            value: 'message',
            label: 'Message 消息提示',
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框',
          }, {
            value: 'notification',
            label: 'Notification 通知',
          }],
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'tabs',
            label: 'Tabs 标签页',
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑',
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单',
          }, {
            value: 'steps',
            label: 'Steps 步骤条',
          }],
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框',
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示',
          }, {
            value: 'popover',
            label: 'Popover 弹出框',
          }, {
            value: 'card',
            label: 'Card 卡片',
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯',
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板',
          }],
        }],
      }, {
        value: 'ziyuan',
        label: '资源',

        children: [{
          disabled: true,
          value: 'axure',
          label: 'Axure Components',
        }, {
          value: 'sketch',
          label: 'Sketch Templates',
        }, {
          value: 'jiaohu',
          label: '组件交互文档',
        }],
      }],
    }
  },
  methods: {
    success(data) {
      console.log('表单接收成功', data)
    },
    submitForm3() {
      const errors = this.$refs.form3.validate()
      if (errors) {
        console.log(errors)
      }
    },
  },
  components: {
    YuTooltip,
    YuDialog,
    YuButton,
    YuButtons,
    YuInput,
    YuOption,
    YuRadio,
    YuRadios,
    YuSelect,
    YuCounter,
    YuCheckbox,
    YuCollapseItem,
    YuCollapse,
    YuMenuItem,
    YuCheckboxs,
    YuLoading,
    YuCounterSide,
    YuCascader,
    YuSwitch,
    YuDropDown,
    YuDropdownMenu,
    YuDropdownItem,
    YuBreadcrumb,
    YuBreadcrumbItem,
    YuSlider,
    YuTimePicker,
    YuScrollSelect,
    YuDatePicker,
    YuUpload,
    YuRate,
    YuForm,
    YuField,
  },
}
</script>
<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .title {
    color: $text;
    padding: 14px 0;
    margin: 20px 0;
    border-bottom: 1px solid $border;
  }

  .sub-title {
    color: $text;
    padding: 0 8px;
    margin: 20px 0;
    border-left: 4px solid $primary;
  }
</style>
