<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title">基础用法</div>
    <yu-button @click="visible1=true">点击</yu-button>
    <yu-dialog title="提示" content="这是一条提示信息" v-model="visible1"/>


    <div class="sub-title">不同尺寸</div>
    <yu-button @click="visible2=true">小</yu-button>
    <yu-button @click="visible3=true">中</yu-button>
    <yu-button @click="visible4=true">大</yu-button>
    <yu-button @click="visible5=true">全屏</yu-button>
    <yu-dialog title="提示" content="这是一条提示信息" size="small" v-model="visible2"/>
    <yu-dialog title="提示" content="这是一条提示信息" size="normal" v-model="visible3"/>
    <yu-dialog title="提示" content="这是一条提示信息" size="large" v-model="visible4"/>
    <yu-dialog title="提示" content="这是一条提示信息" size="full" v-model="visible5"/>


    <div class="sub-title">带有表单的对话框</div>
    <yu-button @click="visible7=true">点击</yu-button>
    <yu-dialog title="提示" v-model="visible7">
      <yu-form>
        <yu-field label="水果id">
          <yu-input name="id"/>
        </yu-field>
        <yu-field label="水果名称">
          <yu-input name="fruit"/>
        </yu-field>
        <yu-button type="primary">提交</yu-button>
        <yu-button>重置</yu-button>
      </yu-form>
    </yu-dialog>

    <div class="sub-title">显示关闭、取消、确认</div>
    <yu-button @click="visible8=true">点击</yu-button>
    <yu-button @click="visible9=true">点击</yu-button>
    <yu-button @click="visible10=true">点击</yu-button>
    <yu-dialog showClose title="提示" content="这是一条提示信息" v-model="visible8"/>
    <yu-dialog showCancel title="提示" content="这是一条提示信息" v-model="visible9"/>
    <yu-dialog showConfirm title="提示" content="这是一条提示信息" v-model="visible10"/>

    <div class="sub-title">居中显示</div>
    <yu-button @click="visible11=true">点击</yu-button>
    <yu-dialog showCancle center title="提示" content="这是一条提示信息" v-model="visible11"/>

    <div class="sub-title">对话框出现时锁屏</div>
    <yu-button @click="visible12=true">点击</yu-button>
    <yu-dialog showCancle lockScroll title="提示" content="这是一条提示信息" v-model="visible12"/>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuDialog from '../components/dialog'
import YuButton from '../components/button'
import YuForm from '../components/form'
import YuField from '../components/field'
import YuInput from '../components/input'

export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      visible10: false,
      visible11: false,
      visible12: false,
    }
  },
  methods: {},
  components: {
    YuDialog,
    YuButton,
    YuForm,
    YuField,
    YuInput,
  },
}
</script>
<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .title {
    color: $text;
    padding: 14px 0;
    margin: 20px 0;
    border-bottom: 1px solid $border;
  }

  .sub-title {
    color: $text;
    padding: 0 8px;
    margin: 20px 0;
    border-left: 4px solid $primary;
  }
</style>
