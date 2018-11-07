<template>
  <div class="yu-pagination"
       :class="{background:background}">
    <div class="yu-head" id="pagination-head">
      <span style="margin-right: 10px" v-if="showTotal">总共{{total}}条数据</span>
      <yu-select
        size="small"
        overflow
        width="100px"
        v-model="limit"
        v-if="changeSize">
        <yu-option
          v-bind:key="index"
          v-for="(item,index) in showSize"
          :label="item.label"
          :value="item.value"/>
      </yu-select>
    </div>
    <ul class="yu-paging">
      <!-- prev -->
      <li
        :class="['paging-item', 'paging-item--prev', {'paging-item--disabled' : index === 1}]"
        @click="prev">
        <i class="iconfont icon-angle-left" v-if="!prevText"></i>
        <span> {{prevText}}</span>
      </li>
      <li
        :class="['paging-item', 'paging-item--first', {'paging-item--disabled' : index === 1}]"
        @click="first"
        v-if="showPrevMore">1
      </li>

      <li
        :class="['paging-item', 'paging-item--more']"
        v-if="showPrevMore"
        @click="prevMore"
        @mouseenter="revToggle"
        @mouseleave="revToggle"
      >
        <span v-if="prevChange">...</span>
        <i class="iconfont icon-angle-double-left"
           v-else
        ></i>
      </li>
      <li
        :class="['paging-item', {'paging-item--current' : index === pager}]"
        v-for="pager in pagers"
        @click="go(pager)">
        {{ pager }}
      </li>
      <li
        :class="['paging-item', 'paging-item--more']"
        v-if="shownextMore"
        @mouseenter="nextToggle"
        @mouseleave="nextToggle"
        @click="nextMore"
      >
        <span v-if="nextChange">...</span>
        <i class="iconfont icon-angle-double-right" v-else></i>
      </li>
      <!--last-->
      <li :class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pages}]"
          @click="last"
          v-if="shownextMore">
        {{pages}}
      </li>
      <!-- next -->
      <li
        :class="['paging-item', 'paging-item--next', {'paging-item--disabled' : index === pages}]"
        @click="next">
        <span v-if="nextText"> {{nextText}}</span>
        <i class="iconfont icon-angle-right" v-else></i>
      </li>
    </ul>
    <div class="pagination-go" v-if="goTo">
      前往<input type="text" :value="index" @keyup.enter="goto()" >页
    </div>
  </div>
</template>

<script>

import YuSelect from './select'
import YuOption from './option'

export default {
  name: 'YuPagination',
  props: {
    //  页面中可见的页码数
    perPages: {
      type: Number,
      default: 7,
    },
    //  当前页码
    pageIndex: {
      type: Number,
      default: 1,
    },
    //  每页显示的条数
    pageSize: {
      type: Number,
      default: 10,
    },
    //  总记录条数
    total: {
      type: Number,
      default: 0,
    },
    prevText: String,
    nextText: String,
    background: Boolean,
    showTotal: Boolean,
    goTo: Boolean,
    changeSize: Boolean,
    showSize: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      index: this.pageIndex,
      size: this.total || 1,
      limit: this.pageSize,
      showPrevMore: false,
      showNextMore: false,
      prevChange: true,
      nextChange: true,
      lastDisable: true,
      firstDisable: true,
    }
  },
  components: {
    YuSelect,
    YuOption,
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.go(this.index - 1)
      }
    },
    next() {
      if (this.index < this.total / this.pageSize) {
        this.go(this.index + 1)
      }
    },
    first() {
      if (this.index !== 1) {
        this.go(1)
      }
    },
    last() {
      if (this.index !== this.pages) {
        this.go(this.pages)
      }
    },
    nextMore() {
      if (this.index < this.total / this.pageSize) {
        this.go(this.index + 5)
      }
    },
    prevMore() {
      if (this.index > 1) {
        this.go(this.index - 5)
      }
    },
    go(page) {
      if (this.index !== page) {
        this.index = page
      }
    },
    revToggle() {
      this.prevChange = !this.prevChange
    },
    nextToggle() {
      this.nextChange = !this.nextChange
    },
    goto() {
      if (process.browser) {
        this.index = Number(document.querySelector('.pagination-go input').value)
      }
    },
  },
  computed: {
    pages() {
      if (!this.limit) {
        return 10
      }
      return Math.ceil(this.size / this.limit)
    },
    //  计算页码
    pagers() {
      if (this.index > this.pages) {
        this.index = 1
      }
      const arr = []
      const perPages = this.perPages
      const pageCount = this.pages
      const current = this.index
      //  偏移
      const _deviation = (perPages - 1) / 2
      const deviation = {
        // 开始值
        start: current - _deviation,
        //  结束值
        end: current + _deviation,
      }
      //  开始值小于1 时
      if (deviation.start < 1) {
        deviation.end += (1 - deviation.start)
        deviation.start = 1
      }
      //  结束值大于总页数时
      if (deviation.end > pageCount) {
        deviation.start -= (deviation.end - pageCount)
        deviation.end = pageCount
      }
      if (deviation.start < 1) deviation.start = 1
      this.showPrevMore = (deviation.start > 1)
      this.shownextMore = (deviation.end < pageCount)
      for (let i = deviation.start; i <= deviation.end; i++) {
        arr.push(i)
      }
      this.$emit('change', this.index)
      return arr
    },
  },
  watch: {
    pageIndex(val) {
      this.index = val || 1
    },
    pageSize(val) {
      this.limit = val || 10
    },
    total(val) {
      this.size = val || 1
    },
    limit(val) {
      this.$emit('sizeChange', val)
    },
  },
}
</script>
