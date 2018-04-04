<template>
  <div class="yu-table"
       :class="[{stripe:stripe,border:border,status:status,'fix-heade':height},]"
        :style="[{height:height}]">
    <table>
      <tr class="yu-tr"
          v-for="(item,index) in data"
          :class="['tr-'+index,item.type,]"
          v-bind:key="index">
        <td class="yu-td" v-for="(value,ind) in item"
            v-bind:key="ind"
            :style="[{width:widths[ind]}]"
            v-if="!(ind === 'type')"
        >
          <div>{{value}}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'YuTable',
  data() {
    return {
    }
  },
  props: {
    widths: {},
    data: {},
    stripe: Boolean,
    border: Boolean,
    status: Boolean,
    height: String,
  },
  mounted() {
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-table{
    display: inline-block;
    overflow: auto;
    table{
      border-collapse:collapse;
      tr{
        &:first-child{
          td{
            div{
              font-weight: 800;
              color: lighten($info,5);
            }
          }
        }
        &:hover:not(.tr-0){
          background-color: lighten($info,39);
        }
        td{
          padding: 12px 0;
          border-bottom: 1px solid lighten($info,30);
          box-sizing: border-box;
          div{
            display: inline-block;
            padding-left: 10px;
            color: darken($info,15);
            font-size: $normal;
          }
        }
      }
    }
  }
  /*有斑马纹*/
  .stripe.yu-table{
    table{
      tr{
        &:nth-child(2n+1):not(.tr-0){
          background-color: lighten($info,39);
        }
      }
    }
  }
  .border.yu-table{
    table{
      border: 1px solid lighten($info,30);
      tr{
        td{
          border-right: 1px solid lighten($info,30);
        }
      }
    }
  }
  /*不同状态的tr*/
  .status.yu-table{
    table{
      tr.warming{
        background-color: lighten($warming,40);
        &:hover:not(.tr-0){
          background-color: lighten($info,39);
        }
      }
    }
  }
  .status.yu-table{
    table{
      tr.success{
        background-color: lighten($success,45);
        &:hover:not(.tr-0){
          background-color: lighten($info,39);
        }
      }
    }
  }
  .status.yu-table{
    table{
      tr.danger{
        background-color: lighten($danger,27);
        &:hover:not(.tr-0){
          background-color: lighten($info,39);
        }
      }
    }
  }
  .status.yu-table{
    table{
      tr.info{
        background-color: lighten($info,37);
        &:hover:not(.tr-0){
          background-color: lighten($info,39);
        }
      }
    }
  }
  /*表头固定*/
  .yu-table.fix-heade{
    position: relative;
    table{
      tr{
        /*todo*/
      }
    }
  }

</style>
