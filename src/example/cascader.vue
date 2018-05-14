<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">级联选择</div>
    <div class="sub-title">普通用法</div>
    <yu-cascader :cascader="cascader"/>

    <div class="sub-title">hover触发</div>
    <yu-cascader :cascader="cascader" hover/>

    <div class="sub-title">有禁用选项</div>
    <yu-cascader :cascader="cascader"/>

    <div class="sub-title">结果仅显示最后一项</div>
    <yu-cascader :cascader="cascader" short/>

    <div class="sub-title">默认值</div>
    <yu-cascader :cascader="cascader" :defaultValue="defaultValue"/>

    <div class="sub-title">选择即改变</div>
    <yu-cascader :cascader="cascader" changeOnSelect/>

    <div class="sub-title">动态加载</div>
    <yu-cascader ref="cascader" :cascader="fetchCascader" @fetch="cascaderFetch" remote/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuCascader from '../components/cascader';

export default {
  data() {
    return {
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
    }
  },
  methods: {
    cascaderFetch(item) {
      const the = this;
      const query = {};
      if (item.pid === 0) {
        query.pid = item.id
        fetch('/api/fetch/cascader', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        })
          .then((response) => {
            response.text().then((data) => {
              data = JSON.parse(data);
              const temp = [];
              data.forEach((i) => {
                temp.push({ value: i.id, label: i.name, ...i })
              })
              the.$refs.cascader.secondCascader = temp;
            });
          }, (error) => {
            console.log(error.message);
          })
      } else {
        query.pid = item.id
        query.gid = item.pid
        fetch('/api/fetch/cascader', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        })
          .then((response) => {
            response.text().then((data) => {
              data = JSON.parse(data);
              const temp = [];
              data.forEach((i) => {
                temp.push({ value: i.id, label: i.name, ...i })
              })
              the.$refs.cascader.thirdCascader = temp;
            });
          }, (error) => {
            console.log(error.message);
          })
      }
    },
  },
  components: {
    YuCascader,
  },
  mounted() {
    const the = this;
    fetch('/api/fetch/cascader', {
      method: 'POST',
    })
      .then((response) => {
        response.text().then((data) => {
          data = JSON.parse(data);
          the.fetchCascader = [];
          const temp = [];
          data.forEach((item) => {
            temp.push({ value: item.id, label: item.name, ...item })
          })
          the.fetchCascader = temp;
        });
      }, (error) => {
        console.log(error.message);
      });
  },
};
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
