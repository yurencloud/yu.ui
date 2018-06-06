<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>

    <div class="sub-title" style="margin-top: 100px">警告</div>
    <yu-alert title="成功提示的文案" type="success"/>
    <yu-alert title="信息提示的文本" type="info"/>
    <yu-alert title='警告提示的文本' type='warning'/>
    <yu-alert title="错误提示的文本" type='error' />
    <div class="sub-title" style="margin-top: 100px">警告---带有icon</div>
    <yu-alert title="成功提示的文案" type="success" show-icon/>
    <yu-alert title="成功提示的文案" type="error" show-icon/>
    <yu-alert title="成功提示的文案" type="info" show-icon/>
    <yu-alert title="成功提示的文案" type="warning" show-icon/>
    <div class="sub-title" style="margin-top: 100px">警告---居中</div>
    <yu-alert title="成功提示的文案" type="success" show-icon center/>
    <yu-alert title="成功提示的文案" type="error" show-icon center/>
    <yu-alert title="成功提示的文案" type="info" show-icon center/>
    <yu-alert title="成功提示的文案" type="warning" show-icon center/>
    <div class="sub-title" style="margin-top: 100px">警告---带有辅助性文字</div>
    <yu-alert title="成功提示的文案" type="success" description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈' />
    <yu-alert title="成功提示的文案" type="error" description='哈哈哈哈哈哈哈啊,这是辅助性文字'/>
    <yu-alert title="成功提示的文案" type="info" description='啦啦啦啦啦啦啦,这是辅助性文字'/>
    <yu-alert title="成功提示的文案" type="warning" description='尕尕尜尜过过,这是辅助性文字'/>
    <div class="sub-title" style="margin-top: 100px">警告---带有辅助性文字和icon</div>
    <yu-alert title="成功提示的文案" type="success" show-icon description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈' />
    <yu-alert title="成功提示的文案" type="error" show-icon description='哈哈哈哈哈哈哈啊,这是辅助性文字'/>
    <yu-alert title="成功提示的文案" type="info" show-icon description='啦啦啦啦啦啦啦,这是辅助性文字'/>
    <yu-alert title="成功提示的文案" type="warning" show-icon description='尕尕尜尜过过,这是辅助性文字'/>
    <div class="sub-title" style="margin-top: 100px">警告---关闭按钮为自定义文本</div>
    <yu-alert title="成功提示的文案" type="success" show-icon description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈'  close-text="知道了"/>
    <yu-alert title="成功提示的文案" type="error" show-icon description='哈哈哈哈哈哈哈啊,这是辅助性文字'/>
    <yu-alert title="成功提示的文案哈哈哈哈哈哈" type="info" show-icon description='啦啦啦啦啦啦啦,这是辅助性文字' closable/>
    <yu-alert title="成功提示的文案" type="warning" show-icon description='尕尕尜尜过过,这是辅助性文字' @close="alerts"/>
    <div class="sub-title" style="margin-top: 100px">警告---不能关闭的警告框</div>
    <yu-alert title="成功提示的文案哈哈哈哈哈哈" type="info" show-icon description='啦啦啦啦啦啦啦,这是辅助性文字' closeable/>
    <yu-alert title="成功提示的文案" type="success" show-icon description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈'  closeable close-text="知道了"/>
    <yu-alert title="成功提示的文案" type="error" show-icon description='哈哈哈哈哈哈哈啊,这是辅助性文字' closeable/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuAlert from '../components/alert';

export default {
  methods: {
    alerts() {
      console.log('hello')
    },
  },
  components: {
    YuAlert,
  },
};
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
