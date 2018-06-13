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

    <div class="sub-title">可点击</div>
    <yu-table :tbody="tbody1" :thead="thead1" :clickable="clickable" width="100%"/>

    <div class="sub-title">添加操作项</div>
    <yu-table :tbody="tbody3" :thead="thead3" :clickable="clickable2" width="100%"/>

    <div class="sub-title">自定义插入组件</div>
    <yu-table celled width="100%">
      <tbody slot="tbody">
        <tr>
          <td><div class="cell">1</div></td>
          <td><div class="cell">我是标题</div></td>
          <td><div class="cell">我是内容</div></td>
          <td><div class="cell"><yu-button size="mini" style="margin: 0">确认</yu-button></div></td>
        </tr>
        <tr>
          <td><div class="cell">1</div></td>
          <td><div class="cell">我是标题</div></td>
          <td><div class="cell">我是内容</div></td>
          <td><div class="cell"><yu-button size="mini" type="primary" style="margin: 0">确认</yu-button></div></td>
        </tr>
      </tbody>
    </yu-table>

    <div class="sub-title">自定义底部</div>
    <yu-table :tbody="tbody1" :thead="thead1" :tfoot="tfoot1" width="100%"/>

    <div class="sub-title">固定底部</div>
    <yu-fixed-table :tfoot="tfoot1" :tbody="tbody2" :columnWidth="columnWidth" fixedHead width="900px" celled/>

    <div class="sub-title">排序</div>
    <yu-table :tbody="tbody1">
      <thead slot="thead">
        <tr>
          <th><div class="cell" @click="sortByTime">时间 <i class="iconfont icon-rank"></i></div></th>
          <th><div class="cell">姓名</div></th>
          <th><div class="cell">地址</div></th>
        </tr>
      </thead>
    </yu-table>

    <div class="sub-title">调整属性显示顺序</div>
    <yu-table :tbody="tbody1" :thead="thead1" :order="order"/>

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
import YuTable from '../components/table'
import YuButton from '../components/button'
import YuFixedTable from '../components/fixed-table'

export default {
  data() {
    return {
      status: { // 可以通过对tbody对象遍历，比如 code = 200 , 得到 这个status
        1: 'success',
        2: 'danger',
        3: 'warning',
        0: 'primary',
      },
      order: ['name', 'date', 'address'],
      clickable: ['name'],
      clickable2: ['name', 'deleted', 'update'],
      thead1: ['日期', '姓名', '地址'],
      thead2: ['日期', '姓名', '地址'],
      thead3: ['日期', '姓名', '地址', '删除', '修改'],
      tfoot1: ['总数', '1000', '1000.00元'],
      columnWidth: ['200px', '300px', '400px'],
      tbody1: [
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tbody11: [
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
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-04',
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
      sorted: 1,
    }
  },
  methods: {
    sortByTime() {
      this.tbody1.sort(this.compare)
      this.sorted *= -1
    },
    compare(obj1, obj2) {
      const val1 = obj1.date
      const val2 = obj2.date
      if (val1 < val2) {
        return -1 * this.sorted
      } else if (val1 > val2) {
        return this.sorted
      }
      return 0
    },
  },
  computed: {
    tbody3() {
      this.tbody11.forEach((item) => {
        item.deleted = '删除'
        item.update = '修改'
      })
      return this.tbody11
    },
  },
  components: {
    YuTable,
    YuFixedTable,
    YuButton,
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
