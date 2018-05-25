<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">表格</div>
    <div class="sub-title">普通用法</div>
    <yu-table :tbody="tbody1" :thead="thead1"/>

    <div class="sub-title">条纹</div>
    <yu-table :tbody="tbody1" :thead="thead1" stripe/>

    <div class="sub-title">条纹</div>
    <yu-table :tbody="tbody1" :thead="thead1" celled/>

    <div class="sub-title">不同状态</div>
    <yu-table :tbody="tbody1" :thead="thead1" :status="status"/>

    <div class="sub-title">定义每列宽</div>
    <yu-table :tbody="tbody1" :columnWidth="columnWidth"  />


    <div class="sub-title">固定表头</div>
    <yu-fixed-table :thead="thead2" :tbody="tbody2" :columnWidth="columnWidth" fixedHead width="900px" celled/>

    <!--<div class="sub-title">规定表格单元宽度</div>-->
    <!--<yu-table :widths="width1"  :data="tabItem"/>-->

    <!--<div class="sub-title" style="margin-top: 100px">带有斑马纹</div>-->
    <!--<yu-table :data="tabItem" stripe/>-->
    <!--<div class="sub-title" style="margin-top: 100px">带边框的表格</div>-->
    <!--<yu-table :data="tabItem" border />-->
    <!--<div class="sub-title"  style="margin-top: 100px">带状态的表格</div>-->
    <!--<yu-table  :data="tabItem" border :widths="width1" status/>-->
    <!--<div class="sub-title"  style="margin-top: 100px">固定表头</div>-->
    <!--<yu-table :data="tabItem" :widths="width1"  border height="300px"/>-->
    <!--<div class="sub-title"  style="margin-top: 100px;">固定列</div>-->
    <!--<yu-table  :data="Item" border width="800px"/>-->
    <!--<div class="sub-title" style="margin-top: 100px;">单选</div>-->
    <!--<yu-table  :data="Items"/>-->

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTable from '../components/table';
import YuFixedTable from '../components/fixed-table';

export default {
  data() {
    return {
      status: { // 可以通过对tbody对象遍历，比如 code = 200 , 得到 这个status
        1: 'success',
        2: 'danger',
        3: 'warning',
        0: 'primary',
      },
      thead1: ['日期', '姓名', '地址'],
      thead2: ['日期', '姓名', '地址'],
      columnWidth: ['200px', '300px', '400px'],
      tbody1: [
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
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tbody2: [
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
    YuFixedTable,
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
