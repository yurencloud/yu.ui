<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">表格</div>
    <div class="sub-title">普通用法</div>
    <yu-table :data="tabItem"/>

    <div class="sub-title">规定表格单元宽度</div>
    <yu-table :widths="width1"  :data="tabItem"/>

    <div class="sub-title" style="margin-top: 100px">带有斑马纹</div>
    <yu-table :data="tabItem" stripe/>
    <div class="sub-title" style="margin-top: 100px">带边框的表格</div>
    <yu-table :data="tabItem" border />
    <div class="sub-title"  style="margin-top: 100px">带状态的表格</div>
    <yu-table  :data="tabItem" border :widths="width1" status/>
    <div class="sub-title"  style="margin-top: 100px">固定表头</div>
    <yu-table :data="tabItem" :widths="width1"  border height="300px"/>
    <div class="sub-title"  style="margin-top: 100px;">固定列</div>
    <yu-table  :data="Item" border width="800px"/>
    <div class="sub-title" style="margin-top: 100px;">单选</div>
    <yu-table  :data="Items"/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTable from '../components/table';

export default {
  data() {
    return {
      width: {
        date: '200px',
        age: '180px',
        name: '180px',
        money: '180px',
        a: '180px',
        b: '180px',
        c: '180px',
        address: '460px',
        operation: '100px',
      },
      width1: {
        date: '200px',
        name: '180px',
        address: '460px',
      },
      tabItem: [
        {
          date: '日期',
          name: '姓名',
          address: '地址',
        },
        {
          date: '2016-05-03',
          name: '王小虎22222',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎哈哈哈哈哈哈',
          address: '上海市普陀区金沙江路 1518 弄',
          type: 'warning',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          type: 'success',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          type: 'info',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          type: 'danger',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      Item: [
        {
          date: '日期',
          name: '姓名',
          age: '年龄',
          money: '金额',
          a: '出售',
          b: '哈哈',
          c: '嘎嘎',
          address: '地址',
          operation: '操作',
        },
        {
          date: '2018-08-16',
          name: '王小虎',
          age: '20',
          money: '20',
          a: '56',
          b: '36',
          c: '99',
          address: '上海市浦东新区999号',
          operation: {
            operation1: '删除',
            operation2: '编辑',
          },
        },
        {
          date: '2018-08-16',
          name: '王小虎',
          age: '20',
          money: '20',
          a: '56',
          b: '36',
          c: '99',
          address: '上海市浦东新区999号',
          operation: {
            operation1: '删除',
            operation2: '编辑',
          },
        },
        {
          date: '2018-08-16',
          name: '王小虎',
          age: '20',
          money: '20',
          a: '56',
          b: '36',
          c: '99',
          address: '上海市浦东新区999号',
          operation: {
            operation1: '删除',
            operation2: '编辑',
          },
        },
      ],
      Items: [
        {
          date: '日期',
          name: '姓名',
          address: '地址',
        },
        {
          date: '2016-05-03',
          name: '王小虎22222',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  methods: {},
  components: {
    YuTable,
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
