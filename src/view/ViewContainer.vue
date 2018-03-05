<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>

    <div class="title">按钮</div>

    <div class="sub-title">基础用法</div>
    <yu-button>默认按钮</yu-button>
    <yu-button type="primary">主要按钮</yu-button>
    <yu-button type="success">成功按钮</yu-button>
    <yu-button type="warming">警告按钮</yu-button>
    <yu-button type="danger">危险按钮</yu-button>
    <yu-button type="info">信息按钮</yu-button>
    <br/>
    <yu-button plain>朴素按钮</yu-button>
    <yu-button type="primary" plain>主要按钮</yu-button>
    <yu-button type="success" plain>成功按钮</yu-button>
    <yu-button type="warming" plain>警告按钮</yu-button>
    <yu-button type="danger" plain>危险按钮</yu-button>
    <yu-button type="info" plain>信息按钮</yu-button>

    <div class="sub-title">图标按钮</div>
    <yu-button icon="icon-edit" type="primary"/>
    <yu-button icon="icon-accessory" type="primary"/>
    <yu-button icon="icon-trash" type="primary"/>
    <yu-button icon="icon-search-o" type="primary">搜索</yu-button>
    <yu-button icon="icon-upload" type="primary">上传</yu-button>

    <div class="sub-title">按钮组</div>
    <yu-buttons>
      <yu-button type="primary">
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button><yu-button type="primary">
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-buttons>
    <yu-buttons >
      <yu-button icon="icon-edit" type="primary"/>
      <yu-button icon="icon-accessory" type="primary"/>
      <yu-button icon="icon-trash" type="primary"/>
    </yu-buttons>

    <div class="sub-title">禁用状态</div>
    <yu-button disabled>默认按钮</yu-button>
    <yu-button type="primary" disabled>主要按钮</yu-button>
    <yu-button type="success" disabled>成功按钮</yu-button>
    <yu-button type="warming" disabled>警告按钮</yu-button>
    <yu-button type="danger" disabled>危险按钮</yu-button>
    <yu-button type="info" disabled>信息按钮</yu-button>
    <br/>
    <yu-button plain disabled>朴素按钮</yu-button>
    <yu-button type="primary" plain disabled>主要按钮</yu-button>
    <yu-button type="success" plain disabled>成功按钮</yu-button>
    <yu-button type="warming" plain disabled>警告按钮</yu-button>
    <yu-button type="danger" plain disabled>危险按钮</yu-button>
    <yu-button type="info" plain disabled>信息按钮</yu-button>

    <div class="sub-title">加载中</div>
    <yu-button loading type="primary">按钮</yu-button>

    <div class="sub-title">不同尺寸</div>
    <yu-button type="primary">正常按钮</yu-button>
    <yu-button type="primary" size="medium">中等按钮</yu-button>
    <yu-button type="primary" size="small">小型按钮</yu-button>
    <yu-button type="primary" size="mini">超小按钮</yu-button>

    <div class="sub-title">圆形按钮</div>
    <yu-button shape="circle" icon="icon-user"/>
    <yu-button shape="circle" icon="icon-user" size="medium"/>
    <yu-button shape="circle" icon="icon-user" size="small"/>
    <yu-button shape="circle" icon="icon-user" size="mini"/>

    <div class="title">单选框</div>

    <div class="sub-title">基础选项</div>
    <yu-radios>
      <yu-radio @change="radioChange" checked label="1">苹果</yu-radio>
      <yu-radio @change="radioChange" label="2">香蕉</yu-radio>
      <yu-radio @change="radioChange" label="3">桃子</yu-radio>
    </yu-radios>
    <div class="sub-title">禁用选项</div>
    <yu-radio disabled>桔子</yu-radio>

    <div class="sub-title">可以多选</div>
    <yu-radio>手机</yu-radio>
    <yu-radio>电脑</yu-radio>


    <div class="sub-title">按钮组单选</div>
    <yu-buttons >
      <yu-button type="primary">北京</yu-button>
      <yu-button>上海</yu-button>
      <yu-button>杭州</yu-button>
    </yu-buttons>
    <yu-buttons >
      <yu-button type="primary" size="small">北京</yu-button>
      <yu-button size="small">上海</yu-button>
      <yu-button size="small">杭州</yu-button>
    </yu-buttons>

    <div class="title">多选框</div>

    <div class="sub-title">基础选项</div>
    <yu-checkbox @change="radioChange" checked label="1">苹果</yu-checkbox>

    <div class="title">输入框</div>
    <yu-input placeholder="请输入用户名" @change="inputChange"/>
    <yu-input placeholder="请输入用户名" disabled/>
    <yu-input placeholder="请输入用户名" clearable/>
    <yu-input placeholder="请输入用户名" prefix="icon-user"/>
    <yu-input placeholder="请输入用户名" suffix="icon-user"/>
    <yu-input placeholder="请输入用户名" type="textarea"/>
    <yu-input placeholder="请输入用户名">
      <template slot="append">.com</template>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <template slot="prepend">https://</template>
    </yu-input>
    <div class="title">下拉选择</div>
    <yu-select text="动物">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
    </yu-select>
    <yu-select text="动物" overflow>
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
    </yu-select>
    <div class="title">计数器</div>
    <yu-counter/>
    <yu-counter disabled/>
    <yu-counter :step=5 />

    <!--dialog   start-->
    <yu-dialog tag='点击我查看弹出框'
               title="提示222"
               content="这是一条测试提示信息"
               type="form"
               inner-content="这是一条测试信息"
               :iscontent='false'>
      <yu-input placeholder="请输入用户名">
        <template slot="prepend">https://</template>
      </yu-input>
      <yu-select text="动物" overflow>
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-dialog>
    <!--dialog   end-->
    <div style="margin-bottom: 20px"></div>
    <!--tootip  start-->
    <yu-tooltip content="这是提示信息" btn="top"
                position="top">
    </yu-tooltip>
    <yu-tooltip content="这是提示信息" btn="bottom"
                position="bottom">
    </yu-tooltip>
    <yu-tooltip content="这是提示信息" btn="left"
                position="left">
    </yu-tooltip>
    <yu-tooltip content="这是提示信息" btn="right"
                position="right">
    </yu-tooltip>
    <!--tooltip end-->
    <!--card  start-->
    <yu-card title="卡片名称" operation="添加">
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </yu-card>
    <!--card   end-->
    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import YuButton from '../components/button';
import YuButtons from '../components/buttons';
import YuInput from '../components/input';
import YuOption from '../components/option';
import YuRadio from '../components/radio';
import YuRadios from '../components/radios';
import YuSelect from '../components/select';
import YuCounter from '../components/counter';
import YuCheckbox from '../components/checkbox';
import YuDialog from '../components/dialog';
import YuTooltip from '../components/tooltip';
import YuCard from '../components/card';


export default {
  name: 'ViewContainer',
  methods: {
    radioChange(value) {
      console.log(value);
    },
    inputChange(value) {
      console.log(value);
    },
  },
  components: {
    YuTooltip,
    YuDialog,
    YuButton,
    YuButtons,
    YuInput,
    YuOption,
    YuRadio,
    YuRadios,
    YuSelect,
    YuCounter,
    YuCheckbox,
    YuCard,
  },
};
</script>

<style lang="scss" type="text/scss">
@import "../assets/css/varible";
.title {
  color: $text;
  border-bottom: 1px solid $border;
  padding: 14px 0;
  margin: 20px 0;
}
.sub-title {
  color: $text;
  padding: 0 8px;
  margin: 20px 0;
  border-left: 4px solid $primary;
}
</style>
