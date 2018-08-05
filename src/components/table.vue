<template>
  <table class="yu-table" :class="[{celled: celled,}]" :style="{width:width}">
    <!--thead-->
    <thead v-if="thead">
    <tr>
      <th v-bind:key="i" v-for="(item, i) in thead" :style="{width: columnWidth ? columnWidth[i] : 'auto'}">
        <div class="cell">{{item}}</div>
      </th>
      <th v-if="fixedHead" width="14px"></th>
    </tr>
    </thead>
    <slot name="thead"/>
    <!--tbody-->
    <tbody v-if="tbody" :class="[{stripe:stripe}]">
    <tr v-bind:key="i" v-for="(data, i) in tbody" :class="[status[i]]">
      <td v-bind:key="index" v-for="(value, key, index) in data"
          :style="{width: columnWidth ? columnWidth[index] : 'auto'}">
        <!--默认排序-->
        <div v-if="!order" class="cell">
          <a v-if="clickable.indexOf(key)>-1" @click="handleClick(key, value, data)">{{value}}</a>
          {{clickable.indexOf(key)>-1?'':value}}
        </div>
        <!--自定义排序-->
        <div v-if="order" class="cell">
          <a v-if="clickable.indexOf(order[index])>-1" @click="handleClick(order[index], data[order[index]], data)">{{data[order[index]]}}</a>
          {{clickable.indexOf(order[index])>-1?'':data[order[index]]}}
        </div>
      </td>
    </tr>
    </tbody>
    <slot name="tbody" :class="[{stripe:stripe}]"/>

    <!--tfoot-->
    <tfoot v-if="tfoot">
    <tr>
      <td v-bind:key="i" v-for="(item, i) in tfoot" :style="{width: columnWidth ? columnWidth[i] : 'auto'}">
        <div class="cell">{{item}}</div>
      </td>
      <td v-if="fixedFoot" width="14px"></td>
    </tr>
    </tfoot>
    <slot name="tfoot"/>
  </table>
</template>

<script>
export default {
  name: 'YuTable',
  data() {
    return {}
  },
  methods: {
    handleClick(key, value, data) {
      this.$emit('click', key, value, data)
    },
  },
  props: {
    thead: Array,
    tbody: Array,
    tfoot: Array,
    stripe: Boolean,
    celled: Boolean,
    fixedHead: Boolean,
    fixedFoot: Boolean,
    order: Array, // 自定义排序
    width: {
      type: String,
      default: '100%',
    },
    clickable: {
      type: Array,
      default() {
        return []
      },
    },
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
          color: $text;
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

    tfoot {
      tr {
        td {
          color: $text;
          box-sizing: border-box;
          padding: 14px 0;
          border-bottom: 1px solid $border;
          .cell {
            padding: 0 8px;
            text-align: left;
          }
        }
        background-color: $background;
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
          a{
            color: $primary;
            cursor: pointer;
            &:hover{
              color: lighten($primary,10);
            }
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
