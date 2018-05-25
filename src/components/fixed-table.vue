<template>
  <div class="yu-fixed-table">
    <div v-if="fixedHead">
      <yu-table :thead="thead" :column-width="columnWidth" :width="width" :stripe="stripe" :celled="celled" fixedHead/>
      <div class="fixed-box" style="" :style="{height: height, width:width}">
        <yu-table :tbody="tbody" :column-width="columnWidth"  :stripe="stripe" :celled="celled" :status="status"/>
      </div>
    </div>
  </div>
</template>

<script>
import YuTable from './table';

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
  components: {
    YuTable,
  },
}
</script>

<style lang="scss" type="text/scss" >
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-fixed-table {
    .fixed-box {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 900px;
      border-bottom: 1px solid $border;
    }
    .yu-table{
      tbody{
        tr:last-child{
          td{
          border-bottom: none;
          }
        }
      }
    }
  }
</style>
