<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title">基础用法</div>
    <yu-button @click="visible1=true">点击</yu-button>
    <yu-button @click="visible2=true">点击</yu-button>
    <yu-button @click="visible3=true">点击</yu-button>
    <yu-button @click="visible4=true">点击</yu-button>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="small" show-close v-model="visible1"/>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="normal" show-close v-model="visible2"/>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="large" show-close v-model="visible3"/>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="full" show-close v-model="visible4"/>


    <div class="sub-title">包含表格的对话框</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" title="提示" v-model="visible5">
      <div>hello</div>
    </yu-dialog>


    <div class="sub-title">带有表单的对话框</div>
    <!--<yu-dialog content="<h1>点击打开弹框</h1>" showConfirm title="提示">-->
      <!--<yu-form>-->
        <!--<yu-field label="活动动物" >-->
          <!--<yu-select name="animal" placeholder="请选择动物" overflow multi>-->
            <!--<yu-option label="猫" value="1"/>-->
            <!--<yu-option label="狗" value="2" disabled/>-->
            <!--<yu-option label="狗" value="3"/>-->
            <!--<yu-option label="狗" value="4"/>-->
            <!--<yu-option label="狗" value="5"/>-->
          <!--</yu-select>-->
        <!--</yu-field>-->
        <!--<yu-field label="选择日期"  inline >-->
          <!--<yu-date-picker name="date"/>-->
        <!--</yu-field>-->
      <!--</yu-form>-->
    <!--</yu-dialog>-->


    <div class="sub-title">居中的对话框</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" showConfirm showClose center title="提示" inner="这是一条提示信息" v-model="visible6"/>
    <div class="sub-title">对话框出现时锁屏</div>
    <div class="sub-title">居中显示</div>
    <yu-dialog content="<h1>点击打开弹框</h1>"
    showCancle
    center
    title="提示"
    lockScroll
    inner="这是一条提示信息"
    v-model="visible7"
    />

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuDialog from '../components/dialog'
import YuButton from '../components/button'

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
    }
  },
  methods: {},
  components: {
    YuDialog,
    YuButton,
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
