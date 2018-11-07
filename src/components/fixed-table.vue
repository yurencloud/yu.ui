<template>
  <div class="yu-fixed-table">
    <div>
      <yu-table :thead="thead" :column-width="columnWidth" :width="width" :celled="celled" fixedHead @click="handleClick">
        <slot name="thead"/>
      </yu-table>
      <div class="fixed-box" style="" :style="{height: height, width:width}">
        <yu-table :tbody="tbody" :column-width="columnWidth"  :stripe="stripe" :celled="celled" :status="status" @click="handleClick">
          <slot name="tbody" />
        </yu-table>
      </div>
      <yu-table :tfoot="tfoot" :column-width="columnWidth" :width="width" :celled="celled" fixedFoot @click="handleClick">
        <slot name="tfoot" />
      </yu-table>
    </div>
  </div>
</template>

<script>
import YuTable from './table'

export default {
  name: 'YuFixedTable',
  data() {
    return {}
  },
  props: {
    height: {
      type: String,
      default: '300px',
    },
    fixedHead: Boolean,
    fixedFoot: Boolean,
    thead: Array,
    tbody: Array,
    tfoot: Array,
    stripe: Boolean,
    celled: Boolean,
    width: String,
    columnWidth: Array, // ['200px','20%']
    status: {
      type: Object,
      default() {
        return {}
      },
    }, // { 1: 'success', 23: 'danger'}
  },
  methods: {
    // 传递click事件
    handleClick(key, value, data) {
      this.$emit('click', key, value, data)
    },
  },
  components: {
    YuTable,
  },
}
</script>
