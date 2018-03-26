<template>
  <div class="yu-date-picker">
    <yu-input  ref="input" :name="name" prefix="icon-calender" overflow clearable @click="handleClick" :placeholder="placeholder"/>
    <!--选择日期-->
    <div v-if="type==='day'" v-show="visible" class="container">
      <div class="head">
        <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYear"></i></a>
        <a class="left"><i class="iconfont icon-angle-left"  @click="subtractMonth"></i></a>
        <div>
          <span>{{year}}年</span>
          <span>{{month}}月</span>
        </div>
        <a class="right"><i class="iconfont icon-angle-double-right" @click="addYear"></i></a>
        <a class="right"><i class="iconfont icon-angle-right" @click="addMonth"></i></a>
      </div>
      <div class="content">
        <table class="date">
          <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
          </thead>
          <tbody>
          <tr v-bind:key="index" v-for="(item,index) in days" @click="selectDay($event)">
            <td v-bind:key="day.value" :data-value="day.value" :class="[day.className]" v-for="day in item">
              <div>{{day.label}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--选择月份-->
    <div v-if="type==='month'" v-show="visible" class="container">
      <div class="head">
        <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYear"></i></a>
        <div>
          <span>{{year}}年</span>
        </div>
        <a class="right"><i class="iconfont icon-angle-double-right" @click="addYear"></i></a>
      </div>
      <div class="content">
        <table class="date month">
          <thead>
          <tr>
          </tr>
          </thead>
          <tbody>
          <tr v-bind:key="index" v-for="(item,index) in months" @click="selectMonth($event)">
            <td v-bind:key="month.value" :data-value="month.value" :class="[month.className]" v-for="month in item">
              <div>{{month.label}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--选择年份-->
    <div v-if="type==='year'" v-show="visible" class="container">
      <div class="head">
        <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYears"></i></a>
        <div>
          <span>{{yearStart}}年~{{yearStart+10}}年</span>
        </div>
        <a class="right"><i class="iconfont icon-angle-double-right" @click="addYears"></i></a>
      </div>
      <div class="content">
        <table class="date month">
          <thead>
          <tr>
          </tr>
          </thead>
          <tbody>
          <tr v-bind:key="index" v-for="(item,index) in years" @click="selectMonth($event)">
            <td v-bind:key="year.value" :data-value="year.value" :class="[year.className]" v-for="year in item">
              <div>{{year.label}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import YuInput from './input';

export default {
  name: 'YuTimePicker',
  data() {
    return {
      sixty: [],
      days: [],
      months: [],
      years: [],
      year: 0,
      month: 0,
      value: null,
      visible: false,
      placeholder: '',
      yearStart: 0,
    }
  },
  props: {
    disabled: Boolean,
    name: {
      type: String,
      default: 'date',
    },
    type: {
      type: String,
      default: 'day',
    },
    optionParam: {
      type: Object,
      default() {
        return {
          start: '00:00',
          step: '00:30',
          end: '24:00',
        }
      },
    },
    selectParam: {
      type: Object,
      default() {
        return {
          start: '00:00:00',
          end: '24:00:00',
        }
      },
    },
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    getMinute(time) {
      const arr = time.split(':');
      return (parseInt(arr[0], 0) * 60) + parseInt(arr[1], 0);
    },
    firstFetch() {
      this.$refs.scroll.secondCascader = this.sixty;
    },
    secondFetch() {
      this.$refs.scroll.thirdCascader = this.sixty;
    },
    getDateStr(date) {
      const year = date.getFullYear();
      let month = date.getMonth() + 1; // 月从0开始计数
      let day = date.getDate();
      month = (month > 9) ? (`${month}`) : (`0${month}`);
      day = (day > 9) ? (`${day}`) : (`0${day}`);
      return year + month + day;
    },
    addMonth() {
      this.month++;
      this.getByType();
    },
    addYear() {
      this.year++;
      this.getByType();
    },
    addYears() {
      this.year = this.year + 10;
      this.getByType();
    },
    subtractMonth() {
      this.month--;
      this.getByType();
    },
    subtractYears() {
      this.year = this.year - 10;
      this.getByType();
    },
    subtractYear() {
      this.year--;
      this.getByType();
    },
    getDays() {
      const tds = [];
      for (let i = 0; i < 42; i++) {
        const thisDay = new Date(this.year, this.month - 1, i + 1 - this.firstDay.getDay());
        const thisDayStr = this.getDateStr(thisDay);
        tds[i] = { label: thisDay.getDate(), value: thisDayStr };
        if (thisDayStr === this.getDateStr(this.date)) { // 当前天
          tds[i].className = 'currentDay';
        } else if (thisDayStr.substr(0, 6) === this.getDateStr(this.firstDay).substr(0, 6)) {
          tds[i].className = 'currentMonth'; // 当前月
        } else { // 其他月
          tds[i].className = 'otherMonth';
        }
      }
      const group = [];
      for (let i = 1; i < 8; i++) {
        group[i] = tds.slice(7 * (i - 1), 7 * i);
      }
      this.days = group;
      this.$refs.input.changeValue('');
      this.value = null;
    },
    getMonths() {
      const tds = [];
      const monthArray = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      for (let i = 0; i <= 11; i++) {
        const thisDay = new Date(this.year, this.month - 1, i + 1 - this.firstDay.getDay());
        const thisDayStr = this.getDateStr(thisDay);
        const value = this.year + (i < 10 ? `0${(i + 1).toString()}` : (i + 1).toString());
        tds[i] = { label: monthArray[i], value };
        if (thisDayStr === this.getDateStr(this.date).substr(0, 6)) { // 当前天
          tds[i].className = 'currentMonth';
        }
      }
      const group = [];
      for (let i = 1; i < 5; i++) {
        group[i] = tds.slice(4 * (i - 1), 4 * i);
      }
      this.months = group;
      this.$refs.input.changeValue('');
      this.value = null;
    },
    getYears() {
      const tds = [];
      const year = this.year;
      const start = year - (year % 10);
      this.yearStart = start;
      for (let i = 0; i <= 10; i++) {
        tds[i] = { label: start + i, value: start + i };
        if (start + i === new Date().getFullYear()) { // 当前天
          tds[i].className = 'currentYear';
        }
      }
      const group = [];
      for (let i = 1; i < 5; i++) {
        group[i] = tds.slice(4 * (i - 1), 4 * i);
      }
      this.years = group;
      this.$refs.input.changeValue('');
      this.value = null;
    },
    selectDay($event) {
      // 刷新日期
      if (this.value) {
        document.querySelector('.date tr td.active').classList.remove('active');
      }
      // 添加选中日期
      let node;
      if ($event.target.parentNode.nodeName === 'TR') {
        node = $event.target;
      } else {
        node = $event.target.parentNode;
      }
      node.classList.add('active');
      this.value = node.getAttribute('data-value');
      this.visible = false;
      this.$refs.input.changeValue(this.value);
    },
    selectMonth($event) {
      // 刷新日期
      if (this.value) {
        document.querySelector('.date.month tr td.active').classList.remove('active');
      }
      // 添加选中日期
      let node;
      if ($event.target.parentNode.nodeName === 'TR') {
        node = $event.target;
      } else {
        node = $event.target.parentNode;
      }
      node.classList.add('active');
      this.value = node.getAttribute('data-value');
      this.visible = false;
      this.$refs.input.changeValue(this.value);
    },
    getByType() {
      if (this.type === 'day') {
        this.placeholder = '请选择日期';
        this.getDays();
      }
      if (this.type === 'month') {
        this.placeholder = '请选择月份';
        this.getMonths();
      }
      if (this.type === 'year') {
        this.placeholder = '请选择年份';
        this.getYears();
      }
    },
  },
  computed: {
    firstDay() {
      return new Date(this.year, this.month - 1, 1);
    },
  },
  mounted() {
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;
    this.getByType();
  },
  components: {
    YuInput,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  .yu-date-picker{
    position: relative;
    .container {
      width: 330px;
      .head{
        text-align: center;
        a{
          display: inline-block;
          padding: 8px;
          &:hover{
            color:$primary;
            cursor: pointer;
          }
        }
        div{
          display: inline-block;
          padding: 8px;
          span:hover{
            color:$primary;
            cursor: pointer;
          }
        }
        .left{
          float:left;
        }
        .right{
          float:right;
        }
      }
      background-color: #fff;
      position: absolute;
      top: 35px;
      z-index: 1000;
      min-width: 175px;
      border: 1px solid $border;
      padding: 12px;
      margin-top: 8px;
      border-radius: 4px;
      color: $text;
      box-shadow: $box-shadow;
      table.date{
        margin: 0 auto;
        thead{
          tr{
            th{
              border-bottom: 1px solid $border;
              font-size: 14px;
              width: 42px;
              height: 40px;
              font-weight: normal;
              color: $text;
            }
          }
        }
        tbody{
          tr td{
            text-align: center;
            font-size: 14px;
            width: 42px;
            height: 40px;
            font-weight: normal;
            color: $text;
            &:hover{
              color: $primary;
              cursor: pointer;
            }
            &.otherMonth{
              color: $lighter-text;
            }
            &.currentDay{
              color: $primary;
              font-weight: bold;
            }
            &.active{
              div{
                display: inline-block;
                text-align: center;
                line-height: 24px;
                width: 24px;
                height: 24px;
                background-color: $primary;
                border-radius: 12px;
                color:#fff;
              }
            }
          }
        }
        &.month{
          tr td{
            width: 80px;
            height: 60px;
            &.active{
            div{
              width: 80px;
              height: 60px;
              border-radius: 0;
              background-color: #fff;
              line-height: 60px;
              font-weight: bold;
              color: $primary;
            }
          }
        }
      }

    }
    }
  }
</style>
