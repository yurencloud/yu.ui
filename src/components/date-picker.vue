<template>
  <div class="yu-date-picker">
    <yu-input  ref="input"
               :name="name"
               prefix="icon-calender"
               overflow
               clearable
               @click="handleClick"
               @blur="handleBlur"
               @change="handleChange"
               @clear="handleClear"
               :disabled="disabled"
               :width="width"
               :placeholder="placeholder"/>
    <!--选择日期-->
    <div v-show="visible && active==='day'" class="container">
      <div class="head">
        <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYear"></i></a>
        <a class="left"><i class="iconfont icon-angle-left"  @click="subtractMonth"></i></a>
        <div>
          <span @click="activeYear">{{year}}年</span>
          <span @click="activeMonth">{{month}}月</span>
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
          <tr v-bind:key="index" v-for="(item,index) in days">
            <td v-bind:key="day.value" :class="[day.className,{active: day.active}]" v-for="day in item" @click="selectDay(day)">
              <div>{{day.label}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--选择月份-->
    <div v-show="visible && active==='month'" class="container">
      <div class="head">
        <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYear"></i></a>
        <div>
          <span @click="activeYear">{{year}}年</span>
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
          <tr v-bind:key="index" v-for="(item,index) in months">
            <td v-bind:key="month.value" :data-value="month.value" :class="[month.className, {active:month.active}]" v-for="month in item" @click="selectMonth(month)">
              <div>{{month.label}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--选择年份-->
    <div v-show="visible && active==='year'" class="container">
      <div class="head">
        <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYear"></i></a>
        <div>
          <span>{{yearStart}}年~{{yearStart+10}}年</span>
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
          <tr v-bind:key="index" v-for="(item,index) in years">
            <td v-bind:key="year.value" :data-value="year.value" :class="[year.className, {active:year.active}]" v-for="year in item" @click="selectYear(year)">
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
      value: '',
      visible: false,
      placeholder: '',
      yearStart: 0,
      active: this.type,
    }
  },
  props: {
    disabled: Boolean,
    width: String,
    name: {
      type: String,
      default: 'date',
    },
    type: {
      type: String,
      default: 'day',
    },
  },
  methods: {
    handleClear() {
      this.value = '';
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
    handleBlur(event) {
      if (this.$parent.isField) {
        this.$parent.handleBlur({ name: this.name, value: this.value });
      }
      this.$emit('blur', event);
    },
    handleChange(value, name) {
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
      this.$emit('change', value, name);
    },
    handleClick() {
      this.visible = !this.visible;
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
      this.getByActive();
    },
    addYear() {
      let num = 1;
      if (this.active === 'year') num = 10;
      this.year = parseInt(this.year, 0) + num;
      this.getByActive();
    },
    subtractMonth() {
      this.month--;
      this.getByActive();
    },
    subtractYear() {
      let num = 1;
      if (this.active === 'year') num = 10;
      this.year = parseInt(this.year, 0) - num;
      this.getByActive();
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
      this.value = '';
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
      this.value = '';
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
      this.value = '';
    },
    selectDay(day) {
      // 当日期是其他月份的，不允许选择
      if (day.className.indexOf('otherMonth') > -1) return;

      // 刷新日期
      this.days.forEach((item) => {
        item.forEach((i) => {
          i.active = false;
        })
      });
      day.active = true;
      this.value = day.value;
      this.visible = false;
      this.$refs.input.changeValue(this.value);
      if (this.$parent.isField) {
        this.$parent.handleBlur({ name: this.name, value: this.value });
      }
    },
    selectMonth(month) {
      // 刷新月份
      this.months.forEach((item) => {
        item.forEach((i) => {
          i.active = false;
        })
      });
      month.active = true;
      this.value = month.value;
      if (this.type !== 'month') {
        this.month = parseInt(this.value.substr(4, 2), 0);
        this.active = 'day';
        this.getByActive();
      } else {
        this.visible = false;
        this.$refs.input.changeValue(this.value);
      }
      if (this.$parent.isField) {
        this.$parent.handleBlur({ name: this.name, value: this.value });
      }
    },
    selectYear(year) {
      // 刷新年份
      this.years.forEach((item) => {
        item.forEach((i) => {
          i.active = false;
        })
      });
      year.active = true;
      this.value = year.value;
      if (this.type !== 'year') {
        this.year = this.value;
        this.active = 'month';
        this.getByActive();
      } else {
        this.visible = false;
        this.$refs.input.changeValue(this.value);
      }
      if (this.$parent.isField) {
        this.$parent.handleBlur({ name: this.name, value: this.value });
      }
    },
    getByActive() {
      if (this.active === 'day') {
        this.placeholder = '请选择日期';
        this.getDays();
      }
      if (this.active === 'month') {
        this.placeholder = '请选择月份';
        this.getMonths();
      }
      if (this.active === 'year') {
        this.placeholder = '请选择年份';
        this.getYears();
      }
    },
    activeYear() {
      this.getYears();
      this.active = 'year';
    },
    activeMonth() {
      this.getMonths();
      this.active = 'month';
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
    this.getByActive();
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
          font-size: $normal;
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
        width: 100%;
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
            &:hover:not(.otherMonth){
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
