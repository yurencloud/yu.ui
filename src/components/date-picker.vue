<template>
  <div class="yu-date-picker">
    <yu-input ref="input"
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
              :size="size"
              :value="value"
              :placeholder="placeholder"/>
    <!--选择日期-->
    <transition name="zoom-in-top">
      <div v-show="visible && active==='day'" class="container">
        <div class="head">
          <a class="left"><i class="iconfont icon-angle-double-left" @click="subtractYear"></i></a>
          <a class="left"><i class="iconfont icon-angle-left" @click="subtractMonth"></i></a>
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
              <td v-bind:key="day.value"
                  :class="[day.className,{active: day.active},{disabled: day.disabled}]"
                  v-for="day in item"
                  @click="selectDay(day)">
                <div>{{day.label}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>


    <!--选择月份-->
    <transition name="zoom-in-top">
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
              <td v-bind:key="month.value"
                  :data-value="month.value"
                  :class="[month.className, {active:month.active}, {disabled: month.disabled}]"
                  v-for="month in item"
                  @click="selectMonth(month)">
                <div>{{month.label}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
    <!--选择年份-->
    <transition name="zoom-in-top">
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
              <td v-bind:key="year.value"
                  :data-value="year.value"
                  :class="[year.className, {active:year.active}, {disabled: year.disabled}]"
                  v-for="year in item"
                  @click="selectYear(year)">
                <div>{{year.label}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import YuInput from './input'

export default {
  name: 'YuDatePicker',
  data() {
    return {
      sixty: [],
      days: [],
      months: [],
      years: [],
      year: 0,
      month: 0,
      currentValue: '',
      visible: false,
      placeholder: '',
      yearStart: 0,
      active: this.type,
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
    disabled: Boolean,
    width: String,
    size: String,
    name: {
      type: String,
      default: 'date',
    },
    type: {
      type: String,
      default: 'day',
    },
    minDate: String,
    maxDate: String,
  },
  methods: {
    handleClear() {
      this.currentValue = ''
      this.$emit('clear')
      if (this.$parent.isField) {
        this.$parent.handleEvent('clear', { name: this.name, value: '' })
      }
    },
    handleBlur(event) {
      this.$emit('blur', event)
      if (this.$parent.isField) {
        this.$parent.handleEvent('blur', { name: this.name, value: this.value })
      }
    },
    handleChange(value, name) {
      this.$emit('change', value, name)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value: this.value })
      }
    },
    handleClick() {
      this.visible = !this.visible
    },
    getDateStr(date) {
      const year = date.getFullYear()
      let month = date.getMonth() + 1 // 月从0开始计数
      let day = date.getDate()
      month = (month > 9) ? (`${month}`) : (`0${month}`)
      day = (day > 9) ? (`${day}`) : (`0${day}`)
      return `${year}-${month}-${day}`
    },
    addMonth() {
      this.month++
      this.getByActive()
    },
    addYear() {
      let num = 1
      if (this.active === 'year') num = 10
      this.year = parseInt(this.year, 0) + num
      this.getByActive()
    },
    subtractMonth() {
      this.month--
      this.getByActive()
    },
    subtractYear() {
      let num = 1
      if (this.active === 'year') num = 10
      this.year = parseInt(this.year, 0) - num
      this.getByActive()
    },
    // 设置最大日期和最小值日期
    limitDate(item, thisDay) {
      if (this.minDate) {
        item.disabled = (thisDay.getTime() < new Date(this.minDate).getTime())
      }
      if (this.maxDate) {
        item.disabled = (thisDay.getTime() > new Date(this.maxDate).getTime())
      }
      return item
    },
    getDays() {
      const tds = []
      for (let i = 0; i < 42; i++) {
        const thisDay = new Date(this.year, this.month - 1, i + 1 - this.firstDay.getDay())
        const thisDayStr = this.getDateStr(thisDay)
        tds[i] = { label: thisDay.getDate(), value: thisDayStr }
        tds[i] = this.limitDate(tds[i], thisDay)
        if (thisDayStr === this.getDateStr(this.date)) { // 当前天
          tds[i].className = 'currentDay'
        } else if (thisDayStr.substr(0, 7) === this.getDateStr(this.firstDay).substr(0, 7)) {
          tds[i].className = 'currentMonth' // 当前月
        } else { // 其他月
          tds[i].className = 'otherMonth'
        }
      }
      const group = []
      for (let i = 1; i < 8; i++) {
        group[i] = tds.slice(7 * (i - 1), 7 * i)
      }
      this.days = group
      this.currentValue = ''
    },
    getMonths() {
      const tds = []
      const monthArray = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      for (let i = 0; i <= 11; i++) {
        const thisDay = new Date(this.year, this.month - 1, i + 1 - this.firstDay.getDay())
        const thisDayStr = this.getDateStr(thisDay)
        const value = `${this.year}-${i < 9 ? `0${(i + 1).toString()}` : (i + 1).toString()}`
        tds[i] = { label: monthArray[i], value }
        if (thisDayStr === this.getDateStr(this.date).substr(0, 7)) { // 当前天
          tds[i].className = 'currentMonth'
        }
      }
      const group = []
      for (let i = 1; i < 5; i++) {
        group[i] = tds.slice(4 * (i - 1), 4 * i)
      }
      this.months = group
      this.currentValue = ''
    },
    getYears() {
      const tds = []
      const year = this.year
      const start = year - (year % 10)
      this.yearStart = start
      for (let i = 0; i <= 10; i++) {
        const _year = start + i
        // 设置最大日期和最小值日期
        tds[i] = { label: _year, value: _year }
        if (_year === new Date().getFullYear()) { // 当前天
          tds[i].className = 'currentYear'
        }
      }
      const group = []
      for (let i = 1; i < 5; i++) {
        group[i] = tds.slice(4 * (i - 1), 4 * i)
      }
      this.years = group
      this.currentValue = ''
    },
    selectDay(day) {
      if (day.disabled) {
        return
      }
      // 当日期是其他月份的，不允许选择
      if (day.className.indexOf('otherMonth') > -1) return

      // 刷新日期
      this.days.forEach((item) => {
        item.forEach((i) => {
          i.active = false
        })
      })
      day.active = true
      this.currentValue = day.value
      this.visible = false
      this.$emit('blur')
    },
    selectMonth(month) {
      if (month.disabled) {
        return
      }
      // 刷新月份
      this.months.forEach((item) => {
        item.forEach((i) => {
          i.active = false
        })
      })
      month.active = true
      this.currentValue = month.value
      if (this.type !== 'month') {
        this.month = parseInt(this.currentValue.substr(5, 2), 0)
        this.active = 'day'
        this.getByActive()
      } else {
        this.visible = false
      }
      this.$emit('blur')
    },
    selectYear(year) {
      if (year.disabled) {
        return
      }
      // 刷新年份
      this.years.forEach((item) => {
        item.forEach((i) => {
          i.active = false
        })
      })
      year.active = true
      this.currentValue = year.value.toString()
      if (this.type !== 'year') {
        this.year = this.currentValue
        this.active = 'month'
        this.getByActive()
      } else {
        this.visible = false
      }
      this.$emit('blur')
    },
    getByActive() {
      if (this.active === 'day') {
        this.placeholder = '请选择日期'
        this.getDays()
      }
      if (this.active === 'month') {
        this.placeholder = '请选择月份'
        this.getMonths()
      }
      if (this.active === 'year') {
        this.placeholder = '请选择年份'
        this.getYears()
      }
    },
    activeYear() {
      this.getYears()
      this.active = 'year'
    },
    activeMonth() {
      this.getMonths()
      this.active = 'month'
    },
  },
  computed: {
    firstDay() {
      return new Date(this.year, this.month - 1, 1)
    },
  },
  mounted() {
    this.date = new Date()
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth() + 1
    this.getByActive()
  },
  watch: {
    currentValue(value) {
      this.$emit('input', value)
      if (this.$parent.isField) {
        this.$parent.handleEvent('change', { name: this.name, value })
      }
    },
  },
  components: {
    YuInput,
  },
}
</script>
