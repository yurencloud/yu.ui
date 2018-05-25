<template>
  <table class="yu-table" :class="[{celled: celled,}]" :style="{width:width}">
    <thead v-if="thead">
      <tr>
        <th v-bind:key="i" v-for="(item, i) in thead" :style="{width: columnWidth ? columnWidth[i] : 'auto'}">
          <div class="cell">{{item}}</div>
        </th>
        <th v-if="fixedHead" width="20px"></th>
      </tr>
    </thead>
    <tbody v-if="tbody" :class="[{stripe:stripe}]">
      <tr v-bind:key="i" v-for="(data, i) in tbody" :class="[status[i]]">
        <td v-bind:key="index" v-for="(value, key, index) in data" :style="{width: columnWidth ? columnWidth[index] : 'auto'}">
          <div class="cell">{{value}}</div>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="tfoot">
      <tr>
        <td></td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'YuTable',
  data() {
    return {}
  },
  props: {
    thead: Array,
    tbody: Array,
    tfoot: Array,
    stripe: Boolean,
    celled: Boolean,
    fixedHead: Boolean,
    width: String,
    columnWidth: Array, // ['200px','20%']
    status: {
      type: Object,
      default() {
        return {}
      },
    }, // { 1: 'success', 23: 'danger'}
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-table {
    border-collapse: collapse;
    thead {
      tr {
        th {
          color: $dark-text;
          box-sizing: border-box;
          padding: 14px 0;
          border-bottom: 1px solid $border;
          .cell {
            padding: 0 8px;
            text-align: left;
          }
        }
      }
    }
    tbody {
      // 条纹
      &.stripe {
        tr:nth-child(2n) {
          background-color: $trBackground;
          &:hover {
            background-color: $background;
          }
        }
      }

      tr {
        td {
          color: $text;
          box-sizing: border-box;
          padding: 14px 0;
          border-bottom: 1px solid $border;
          .cell {
            padding: 0 8px;
          }
        }
        transition: background-color .4s;
        &.primary {
          background-color: lighten($primary, 35);
        }
        &.success {
          background-color: lighten($success, 47);
        }
        &.danger {
          background-color: lighten($danger, 27);
        }
        &.warning {
          background-color: lighten($warning, 42);
        }
        &.info {
          background-color: lighten($info, 38);
        }
        &:hover {
          background-color: $background;
        }
      }
    }

    &.celled {
      td, th {
        border-right: 1px solid $border;
      }
      border: 1px solid $border;
    }
  }
</style>
