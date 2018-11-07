<template>
  <table class="yu-table" :class="[{celled: celled,}]" :style="{width:width}">
    <!--thead-->
    <thead v-if="thead">
    <tr>
      <th v-bind:key="i" v-for="(item, i) in thead" :style="{width: columnWidth ? columnWidth[i] : 'auto'}">
        <div class="cell">{{item}}</div>
      </th>
      <th v-if="fixedHead" width="20px"></th>
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
      <td v-if="fixedFoot" width="20px"></td>
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

