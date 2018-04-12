<template>
  <div class="yu-table"
       :class="[{stripe:stripe,border:border,status:status,'fix-heade':height,'fix-column':width,},]"
       :style="[{height:height,width:width,}]"
        >
    <table :style="[{height:height,width:width}]" border="0" cellspacing="0" cellpadding="0">
      <tr class="yu-tr"
          v-for="(item,index) in data"
          :class="['tr-'+index,item.type,]"
          v-bind:key="index">
        <td class="yu-td" v-for="(value,ind) in item"
            v-bind:key="ind"
            v-if="!(ind === 'type')"
        >
          <div :style="[{width:widths? widths[ind] :''}]" v-if="(typeof value) === 'string'">{{value}}</div>
          <div v-else :style="[{width:widths? widths[ind] :''}]">
            <span v-for="v in value" >{{v}}</span>
          </div>
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
    widths: {
    },
    data: {},
    stripe: Boolean,
    border: Boolean,
    status: Boolean,
    height: String,
    width: String,
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-table{
    display: inline-block;
    border-left: none;
    table{
      border-collapse:collapse;
      overflow: auto;
      tr{
        &:first-child{
          td{
            box-sizing: border-box;
            div{
              font-weight: 800;
              color: lighten($info,5);
              box-sizing: border-box;
            }
          }
          background-color: #fff;
        }
        &:hover:not(.tr-0){
          background-color: lighten($info,39);
        }
        td{
          padding: 12px;
          border-bottom: 1px solid lighten($info,30);
          box-sizing: border-box;
          div{
            display: inline-block;
            padding-left: 10px;
            color: darken($info,15);
            font-size: $normal;
            span{
              margin-left: 10px;
            }
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
  /*有边框*/
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
      overflow: auto;
      display: block;
      padding-top: 40px;
      tr{
        &:first-child{
          position: absolute;
          top:1px;
        }
        div{
          box-sizing: border-box;
        }
        td{
          width: 240px;
        }
      }
    }
  }
  .yu-table.fix-column{
    position: relative;
    table{
      overflow: auto;
      display: block;
      box-sizing: border-box;
      border-top: none;
      padding-left: 175px;
      tr{
        td{
          background-color: #fff;
          div{
            width: 150px;
            box-sizing: border-box;
          }
          &:first-child{
            position: absolute;
            left: 0;
            border-left: 1px solid lighten($info,30);
            border-bottom: none;
            border-top: 1px solid lighten($info,30);
          }
        }
        &:first-child{
        border-top:1px solid lighten($info,30) ;
      }
      }
    }

  }
</style>
