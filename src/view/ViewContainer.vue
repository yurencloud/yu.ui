<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>

    <!--<div class="title">按钮</div>-->

    <!--<div class="sub-title">基础用法</div>-->
    <!--<yu-button>默认按钮</yu-button>-->
    <!--<yu-button type="primary">主要按钮</yu-button>-->
    <!--<yu-button type="success">成功按钮</yu-button>-->
    <!--<yu-button type="warming">警告按钮</yu-button>-->
    <!--<yu-button type="danger">危险按钮</yu-button>-->
    <!--<yu-button type="info">信息按钮</yu-button>-->
    <!--<br/>-->
    <!--<yu-button plain>朴素按钮</yu-button>-->
    <!--<yu-button type="primary" plain>主要按钮</yu-button>-->
    <!--<yu-button type="success" plain>成功按钮</yu-button>-->
    <!--<yu-button type="warming" plain>警告按钮</yu-button>-->
    <!--<yu-button type="danger" plain>危险按钮</yu-button>-->
    <!--<yu-button type="info" plain>信息按钮</yu-button>-->

    <!--<div class="sub-title">图标按钮</div>-->
    <!--<yu-button icon="icon-edit" type="primary"/>-->
    <!--<yu-button icon="icon-accessory" type="primary"/>-->
    <!--<yu-button icon="icon-trash" type="primary"/>-->
    <!--<yu-button icon="icon-search-o" type="primary">搜索</yu-button>-->
    <!--<yu-button icon="icon-upload" type="primary">上传</yu-button>-->

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
    <yu-tool-tip content="这是提示信息" btn="top"
                position="top">
    </yu-tool-tip>
    <yu-tool-tip content="这是提示信息" btn="bottom"
                position="bottom">
    </yu-tool-tip>
    <yu-tool-tip content="这是提示信息" btn="left"
                position="left">
    </yu-tool-tip>
    <yu-tool-tip content="这是提示信息" btn="right"
                position="right">
    </yu-tool-tip>
    <!--tooltip end-->
    <!--card  start-->
    <yu-card :width="400" :height="250" title="哈哈哈哈哈哈" operation="添加">
      <div v-for="o in 3" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </yu-card>

    <div style="width: 10px;height: 20px"></div>
    <yu-card :width="200" :bottom="true">
      <!--图片固定高是===>250px-->
      <img class="image" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=38091454,993565664&fm=200&gp=0.jpg" alt="">
    </yu-card>
    <!--card   end-->
    <div style="width: 10px;height: 20px"></div>
    <!--carousel   start-->
    <!--<yu-carousel :width="1000" :height="500" :autoplay="true">-->

       <!--<div id="main">-->
         <!--<img src="../static/img/1.jpg" />-->
         <!--<img src="../static/img/2.jpg" />-->
         <!--<img src="../static/img/3.jpg" />-->
         <!--<img src="../static/img/4.jpg" />-->
         <!--<img src="../static/img/5.jpg" />-->
         <!--<img src="../static/img/6.jpg" />-->
         <!--<img src="../static/img/7.jpg" />-->
         <!--<img src="../static/img/8.jpg" />-->
         <!--<img src="../static/img/9.jpg" />-->
       <!--</div>-->

      <!--<div class="navigation">-->
        <!--<span></span>-->
        <!--<span></span>-->
        <!--<span></span>-->
        <!--<span></span>-->
        <!--<span></span>-->
      <!--</div>-->
    <!--</yu-carousel>-->
    <!--carousel   end-->
    <div style="width: 10px;height: 20px"></div>
    <div class="sub-title">collapse-item</div>
    <yu-collapse-item index="1" title="蜀山行" name="1">
      <div>人生几何春已夏</div>
      <div>空山新雨后,天气晚来秋</div>
      <div>欲把西湖比西子,淡妆浓抹总相宜</div>
    </yu-collapse-item>
    <yu-collapse-item title="蜀山行" name="1" :accordion="false">
      <div>劝君更尽一杯酒,西出阳关无故人</div>
      <div>空山新雨后,天气晚来秋</div>
      <div>欲把西湖比西子,淡妆浓抹总相宜</div>
    </yu-collapse-item >
    <div style="width: 10px;height: 20px"></div>
    <!--yu-collaapse  -->
    <div style="width: 10px;height: 20px"></div>
    <div class="sub-title">collapse</div>
    <yu-collapse :width="500">
      <yu-collapse-item title="蜀山行" name="1">
        <div>人生几何春已夏</div>
        <div>空山新雨后,天气晚来秋</div>
        <div>欲把西湖比西子,淡妆浓抹总相宜</div>
        <div>不见高堂明镜悲白发，朝如青丝暮成雪</div>
      </yu-collapse-item>
      <yu-collapse-item title="蜀山行" name="2">
        <div>劝君更尽一杯酒,西出阳关无故人</div>
      </yu-collapse-item>
    </yu-collapse>
    <!--NavMenu    start-->
    <div class="sub-title">NavMenu</div>
    <yu-nav-menu :horizontal="true" :default-active="activeIndex" text-color="#00" background-color="#666">
      <yu-menu-item index="1">管理中心</yu-menu-item>
      <yu-menu-item index="2">
        我的控制台
        <yu-nav-menu index="2-1">
          <yu-menu-item index="2-1-1">项目一</yu-menu-item>
          <yu-menu-item index="2-2-1">项目一</yu-menu-item>
          <yu-menu-item index="2-3-1">项目一</yu-menu-item>
          <yu-menu-item index="2-4-1">
            项目一
          </yu-menu-item>
        </yu-nav-menu>
      </yu-menu-item>
      <yu-menu-item index="3">消息中心</yu-menu-item>
      <yu-menu-item index="4">订单管理</yu-menu-item>
    </yu-nav-menu>
    <!--NavMenu  end-->
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
import YuToolTip from '../components/tooltip';
import YuCard from '../components/card';
import YuCarousel from '../components/carousel';
import YuCollapseItem from '../components/collapse-item';
import YuCollapse from '../components/collapse';
import YuMenuItem from '../components/menu-item';
import YuNavMenu from '../components/navmenu';

export default {
  name: 'ViewContainer',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    radioChange(value) {
      console.log(value);
    },
    inputChange(value) {
      console.log(value);
    },
  },
  components: {
    YuToolTip,
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
    YuCarousel,
    YuCollapseItem,
    YuCollapse,
    YuMenuItem,
    YuNavMenu,
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
