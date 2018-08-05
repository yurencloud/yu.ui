<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title">基础用法</div>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="small" show-close/>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="normal" show-close/>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="large" show-close/>
    <yu-dialog content="点击打开弹框" title="提示" inner="这是一条提示信息" lock-scroll size="full" show-close/>


    <div class="sub-title">包含表格的对话框</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" title="提示">
      <div>hello</div>
    </yu-dialog>


    <div class="sub-title">带有表单的对话框</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" showConfirm title="提示">
      <yu-form>
        <yu-field label="活动动物" >
          <yu-select name="animal" placeholder="请选择动物" overflow multi>
            <yu-option label="猫" value="1"/>
            <yu-option label="狗" value="2" disabled/>
            <yu-option label="狗" value="3"/>
            <yu-option label="狗" value="4"/>
            <yu-option label="狗" value="5"/>
          </yu-select>
        </yu-field>
        <yu-field label="选择日期"  inline >
          <yu-date-picker name="date"/>
        </yu-field>
      </yu-form>
    </yu-dialog>


    <div class="sub-title">居中的对话框</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" showConfirm showClose center title="提示" inner="这是一条提示信息"/>
    <div class="sub-title">对话框出现时锁屏</div>
    <div class="sub-title">居中显示</div>
    <!--<yu-dialog content="<h1>点击打开弹框</h1>"-->
    <!--showCancle-->
    <!--center-->
    <!--title="提示"-->
    <!--lockScroll-->
    <!--inner="这是一条提示信息"/>-->
    <!--<pre v-highlightjs="code5"><code class="html" ></code></pre>-->


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuDialog from '../components/dialog'

export default {
  methods: {},
  components: {
    YuDialog,
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
