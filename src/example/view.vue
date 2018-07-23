<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>

    <div class="title">按钮</div>

    <div class="sub-title">基础用法</div>
    <yu-button>默认按钮</yu-button>
    <yu-button type="primary">主要按钮</yu-button>
    <yu-button type="success">成功按钮</yu-button>
    <yu-button type="warning">警告按钮</yu-button>
    <yu-button type="danger">危险按钮</yu-button>
    <yu-button type="info">信息按钮</yu-button>
    <br/>
    <yu-button plain>朴素按钮</yu-button>
    <yu-button type="primary" plain>主要按钮</yu-button>
    <yu-button type="success" plain>成功按钮</yu-button>
    <yu-button type="warning" plain>警告按钮</yu-button>
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
      </yu-button>
      <yu-button type="primary">
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-buttons>
    <yu-buttons>
      <yu-button icon="icon-edit" type="primary"/>
      <yu-button icon="icon-accessory" type="primary"/>
      <yu-button icon="icon-trash" type="primary"/>
    </yu-buttons>

    <div class="sub-title">禁用状态</div>
    <yu-button disabled>默认按钮</yu-button>
    <yu-button type="primary" disabled>主要按钮</yu-button>
    <yu-button type="success" disabled>成功按钮</yu-button>
    <yu-button type="warning" disabled>警告按钮</yu-button>
    <yu-button type="danger" disabled>危险按钮</yu-button>
    <yu-button type="info" disabled>信息按钮</yu-button>
    <br/>
    <yu-button plain disabled>朴素按钮</yu-button>
    <yu-button type="primary" plain disabled>主要按钮</yu-button>
    <yu-button type="success" plain disabled>成功按钮</yu-button>
    <yu-button type="warning" plain disabled>警告按钮</yu-button>
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
    <yu-radio checked disabled>桔子</yu-radio>
    <yu-radio disabled>桔子</yu-radio>
    <div class="sub-title">垂直方向</div>
    <yu-radios>
      <yu-radio @change="radioChange" vertical checked label="1">苹果</yu-radio>
      <yu-radio @change="radioChange" vertical label="2">香蕉</yu-radio>
      <yu-radio @change="radioChange" vertical label="3">桃子</yu-radio>
    </yu-radios>

    <div class="sub-title">可以多选</div>
    <yu-radio>手机</yu-radio>
    <yu-radio>电脑</yu-radio>


    <div class="sub-title">按钮组单选</div>
    <yu-buttons>
      <yu-button type="primary">北京</yu-button>
      <yu-button>上海</yu-button>
      <yu-button>杭州</yu-button>
    </yu-buttons>
    <yu-buttons>
      <yu-button type="primary" size="small">北京</yu-button>
      <yu-button size="small">上海</yu-button>
      <yu-button size="small">杭州</yu-button>
    </yu-buttons>

    <div class="title">多选框</div>

    <div class="sub-title">基础选项</div>
    <yu-checkboxs>
      <yu-checkbox @change="checkboxChange" checked label="1">苹果</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="2">西瓜</yu-checkbox>
      <yu-checkbox @change="checkboxChange" label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="sub-title">禁用状态</div>
    <yu-checkbox @change="checkboxChange" checked label="1" disabled>苹果</yu-checkbox>
    <yu-checkbox @change="checkboxChange" label="2" disabled>香蕉</yu-checkbox>

    <div class="sub-title">垂直方向</div>
    <yu-checkboxs>
      <yu-checkbox @change="checkboxChange" vertical checked label="1">苹果</yu-checkbox>
      <yu-checkbox @change="checkboxChange" vertical label="2">西瓜</yu-checkbox>
      <yu-checkbox @change="checkboxChange" vertical label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="title">输入框</div>
    <div class="sub-title">基础用法</div>
    <yu-input placeholder="请输入用户名" @change="inputChange"/>
    <div class="sub-title">禁用状态</div>
    <yu-input placeholder="请输入用户名" disabled/>
    <div class="sub-title">可清空</div>
    <yu-input placeholder="请输入用户名" clearable/>
    <div class="sub-title">图标</div>
    <yu-input placeholder="请输入用户名" prefix="icon-user"/>
    <yu-input placeholder="请输入用户名" prefix="icon-user" size="small"/>
    <yu-input placeholder="请输入用户名" suffix="icon-user"/>
    <yu-input placeholder="请输入用户名" suffix="icon-user" size="small"/>
    <div class="sub-title">长文本输入</div>
    <yu-input placeholder="请输入用户名" type="textarea"/>
    <div class="sub-title">组合</div>
    <yu-input placeholder="请输入用户名">
      <yu-button class="append" slot="append">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <yu-button type="primary" class="append" slot="append">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <yu-button type="danger" class="append" slot="append">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" size="small">
      <yu-button class="append" slot="append" size="small">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <yu-button class="prepend" slot="prepend">https://</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" size="small">
      <yu-button class="prepend" slot="prepend" size="small">https://</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <yu-select class="append" slot="append">
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <yu-select class="prepend" slot="prepend">
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-input>

    <div class="sub-title">不同尺寸</div>
    <yu-input placeholder="请输入用户名" @change="inputChange"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="medium"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="small"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="mini"/>
    <div class="sub-title">控制长度</div>
    <yu-input placeholder="请输入用户名" @change="inputChange" width="50%"/>
    <div class="sub-title">输入提示(本地搜索)</div>
    <yu-input
      overflow
      @fetch="handleFetch"
      placeholder="请输入搜索内容"
      :options="locals"
    >
    </yu-input>
    <div class="sub-title">输入提示(远程搜索)</div>
    <yu-input
      overflow
      remote
      @fetch="handleFetch"
      placeholder="请输入搜索内容"
      :options="options"
    >
    </yu-input>

    <div class="title">计数器</div>
    <div class="sub-title">基础用法</div>
    <yu-counter/>
    <div class="sub-title">禁用状态</div>
    <yu-counter disabled/>
    <div class="sub-title">步数间隔</div>
    <yu-counter :step="5" />
    <div class="sub-title">尺寸大小</div>
    <yu-counter :step="5" size="medium "/>
    <yu-counter :step="5" size="small"/>
    <yu-counter :step="5" size="mini"/>

    <div class="sub-title">单边控制样式</div>
    <yu-counter-side :step=5 size="medium "/>

    <div class="title">下拉选择</div>
    <div class="sub-title">基础用法</div>
    <yu-select placeholder="请选择动物">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
    </yu-select>

    <div class="sub-title">多选项滚动</div>
    <yu-select placeholder="请选择动物" overflow>
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
    </yu-select>

    <div class="sub-title">有禁用选项</div>
    <yu-select placeholder="请选择动物" overflow>
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
    </yu-select>

    <div class="sub-title">禁用状态</div>
    <yu-select placeholder="请选择动物" overflow disabled>
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="狗" value="2"/>
    </yu-select>

    <div class="sub-title">显示选项</div>
    <yu-select placeholder="请选择动物" overflow multi showSelects>
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
      <yu-option label="狗" value="3"/>
      <yu-option label="狗" value="4"/>
      <yu-option label="狗" value="5"/>
    </yu-select>

    <div class="sub-title">自定义选项</div>
    <yu-select placeholder="请选择动物" overflow>
      <yu-option label="猫" value="1">
        <span>猫猫</span>
        <span style="float: right;color:#ccc;">可爱的动物</span>
      </yu-option>
      <yu-option label="猫" value="2">
        <span>狗狗</span>
        <span style="float: right;color:#ccc;">凶狠的动物</span>
      </yu-option>
    </yu-select>
    <yu-select placeholder="请选择动物" overflow>
      <yu-option label="猫" value="1">
        <div>猫猫</div>
        <div style="color:#ccc">可爱的动物</div>
      </yu-option>
      <yu-option label="猫" value="2">
        <div>狗狗</div>
        <div style="color:#ccc">凶狠的动物</div>
      </yu-option>
    </yu-select>

    <div class="title">级联选择</div>
    <div class="sub-title">普通用法</div>
    <yu-cascader :cascader="cascader"/>

    <div class="sub-title">hover触发</div>
    <yu-cascader :cascader="cascader" hover/>

    <div class="sub-title">有禁用选项</div>
    <yu-cascader :cascader="cascader"/>

    <div class="sub-title">结果仅显示最后一项</div>
    <yu-cascader :cascader="cascader" short/>

    <div class="sub-title">默认值</div>
    <yu-cascader :cascader="cascader" :defaultValue="defaultValue"/>

    <div class="sub-title">选择即改变</div>
    <yu-cascader :cascader="cascader" changeOnSelect/>

    <div class="sub-title">动态加载</div>
    <yu-cascader ref="cascader" :cascader="fetchCascader" @fetch="cascaderFetch" remote/>

    <div class="title">Switch开关</div>
    <div class="sub-title">普通用法</div>
    <yu-switch on/>
    <yu-switch/>

    <div class="sub-title">其他颜色(开有多种颜色，关只有一种颜色)</div>
    <yu-switch on type="danger"/>
    <yu-switch on type="success"/>
    <yu-switch on type="info"/>
    <yu-switch on type="warning"/>

    <div class="sub-title">标签文字</div>
    <yu-switch on label="关灯"/>
    <yu-switch on after label="关灯">></yu-switch>

    <div class="sub-title">标签文字</div>
    <yu-switch disabled label="关灯"/>
    <yu-switch on after label="关灯" disabled>></yu-switch>


    <div class="title">slider滑块</div>
    <div class="sub-title">普通用法</div>
    <yu-slider/>

    <div class="sub-title">定义初始值</div>
    <yu-slider defaultValue=50 />

    <div class="sub-title">禁用</div>
    <yu-slider defaultValue=50 disabled/>

    <div class="sub-title">步长</div>
    <yu-slider defaultValue=50 step=10 />

    <div class="sub-title">步长显示锚点</div>
    <yu-slider defaultValue=50 step=10 point />

    <div class="sub-title">修改总量(可为任意整数)</div>
    <yu-slider defaultValue=500  total=1000 />

    <div class="sub-title">修改长度</div>
    <yu-slider width="800" />
    <yu-slider width="80" />

    <div class="sub-title">最大值最小值</div>
    <yu-slider min=50 max=80 default-value="50"/>


    <div class="title">时间选择器</div>
    <div class="sub-title">普通用法</div>
    <yu-time-picker/>

    <div class="sub-title">设置时间段和步长</div>
    <yu-time-picker :optionParam="time"/>

    <div class="sub-title">滚动时间列表选择</div>
    <yu-time-picker type="scroll" :selectParam="selectParam"/>

    <div class="title">滚动列表选择</div>
    <div class="sub-title">普通用法</div>
    <yu-scroll-select :options="cascader" placeholder="请选择"/>

    <div class="sub-title">远程加载</div>
    <div>同滚动时间列表选择</div>

    <div class="title">日期选择器</div>
    <div class="sub-title">普通用法</div>
    <yu-date-picker/>

    <div class="sub-title">获取月份</div>
    <yu-date-picker type="month"/>

    <div class="sub-title">获取年份</div>
    <yu-date-picker type="year"/>

    <div class="title">上传文件</div>
    <div class="sub-title">普通用法 上传单文件</div>
    <yu-upload url="/api/upload">点击上传单文件</yu-upload>

    <div class="sub-title">普通用法 上传多文件</div>
    <yu-upload url="/api/uploads" multiple="multiple">点击上传多文件</yu-upload>

    <div class="sub-title">显示上传列表和状态</div>
    <yu-upload url="/api/uploads" multiple="multiple" list>点击上传多文件</yu-upload>
    <yu-upload url="/api/upload" list>点击上传单文件</yu-upload>

    <div class="sub-title">显示多种文件图标</div>
    <div style="margin-bottom: 20px;">
      <i class="iconfont icon-f-file"></i>
      <i class="iconfont icon-f-word"></i>
      <i class="iconfont icon-f-pdf"></i>
      <i class="iconfont icon-f-excel"></i>
      <i class="iconfont icon-f-image"></i>
      <i class="iconfont icon-f-archive"></i>
      <i class="iconfont icon-f-powerpoint"></i>
      <i class="iconfont icon-f-audio"></i>
    </div>
    <yu-upload url="/api/uploads" multiple="multiple" list multiIcon>点击上传多文件</yu-upload>

    <div class="sub-title">上传图片并显示图片</div>
    <yu-upload url="/api/upload" type="image" />

    <div class="sub-title">限制上传文件大小</div>
    <yu-upload url="/api/upload" :maxSize="1024" >点击上传</yu-upload>

    <div class="sub-title">上传图片显示缩略图</div>
    <yu-upload url="/api/uploads" multiple previewList list >点击上传</yu-upload>

    <div class="sub-title">自定义触发按钮</div>
    <yu-upload url="/api/uploads" type="defined" >
      <yu-button shape="circle" icon="icon-upload" type="danger" />
    </yu-upload>

    <div class="title">等级</div>
    <div class="sub-title">普通用法</div>
    <yu-rate/>

    <div class="sub-title">显示label</div>
    <yu-rate labeled/>

    <div class="sub-title">自定义label</div>
    <yu-rate :label="label2" labeled/>

    <div class="sub-title">设置默认值，并只读</div>
    <yu-rate readOnly :defaultValue="3"/>

    <div class="title">表单</div>
    <div class="sub-title">典型表单</div>
    <yu-form>
      <yu-field label="活动名称">
        <yu-input/>
      </yu-field>
      <yu-field label="活动动物">
        <yu-select placeholder="请选择动物" overflow>
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
      <br>
      <yu-field label="即时配送">
        <yu-switch label="确认"/>
      </yu-field>
      <yu-field label="活动性质">
          <yu-checkbox @change="checkboxChange" checked label="1">苹果</yu-checkbox>
          <yu-checkbox @change="checkboxChange" label="2">西瓜</yu-checkbox>
          <yu-checkbox @change="checkboxChange" label="3">桃子</yu-checkbox>
      </yu-field>
      <yu-field label="特殊资源">
        <yu-radios>
          <yu-radio @change="radioChange" checked label="1">苹果</yu-radio>
          <yu-radio @change="radioChange" label="2">香蕉</yu-radio>
          <yu-radio @change="radioChange" label="3">桃子</yu-radio>
        </yu-radios>
      </yu-field>
      <yu-field label="活动形式">
        <yu-input type="textarea" />
      </yu-field>
      <yu-field>
        <yu-button type="primary">提交</yu-button>
        <yu-button>重置</yu-button>
      </yu-field>
    </yu-form>

    <div class="sub-title">行内表单</div>
    <yu-form inline>
      <yu-field label="活动名称">
        <yu-input/>
      </yu-field>
      <yu-field label="活动动物">
        <yu-select placeholder="请选择动物" overflow>
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
      <yu-field>
        <yu-button type="primary">提交</yu-button>
        <yu-button>重置</yu-button>
      </yu-field>
    </yu-form>


    <div class="sub-title">label对齐方式</div>
    <yu-form>
      <yu-field label="顶对齐" align="top">
        <yu-input/>
      </yu-field>
      <yu-field label="左对齐" align="left">
        <yu-input/>
      </yu-field>
      <yu-field label="右对齐" align="right">
        <yu-input/>
      </yu-field>
    </yu-form>

    <div class="sub-title">表单验证</div>
    <div class="message">提醒：如果想要其中某个字段有多个input并排，需要增大form的width，然后使用inline属性</div>
    <yu-form :rules="rules" width="600px">
      <yu-field label="活动名称" >
        <yu-input name="activeName"/>
      </yu-field>
      <yu-field label="活动名称2" >
        <yu-input name="activeName2"/>
      </yu-field>
      <yu-field label="活动名称3" >
        <yu-input name="activeName3"/>
      </yu-field>
      <yu-field label="活动动物" >
        <yu-select name="animal" placeholder="请选择动物" overflow>
          <yu-option label="猫" value="1"/>
          <yu-option label="狗" value="2" disabled/>
          <yu-option label="狗" value="3"/>
          <yu-option label="狗" value="4"/>
          <yu-option label="狗" value="5"/>
        </yu-select>
      </yu-field>
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
      <yu-field  no-label inline>
        <yu-time-picker name="time"/>
      </yu-field>
      <yu-field label="即时配送" >
        <yu-switch name="confirm" label="确认"/>
      </yu-field>
      <yu-field label="活动性质" >
        <yu-checkboxs name="fruit" select-all>
        <yu-checkbox  checked label="1">苹果</yu-checkbox>
        <yu-checkbox   label="2">西瓜</yu-checkbox>
        <yu-checkbox  label="3">桃子</yu-checkbox>
        </yu-checkboxs>
      </yu-field>
      <yu-field label="特殊资源" >
        <yu-radios name="fruit2">
          <yu-radio checked label="1">苹果</yu-radio>
          <yu-radio label="2">香蕉</yu-radio>
          <yu-radio label="3">桃子</yu-radio>
        </yu-radios>
      </yu-field>
      <yu-field label="活动形式" >
        <yu-input name="xin" type="textarea" />
      </yu-field>
      <yu-field label="等级" >
        <yu-rate name="rate"/>
      </yu-field>
      <yu-field label="上传文件" >
        <yu-upload url="/api/upload" type="image" />
      </yu-field>
      <yu-field label="滚动列表" >
        <yu-scroll-select name="list" :options="cascader" placeholder="请选择"/>
      </yu-field>
      <yu-field label="范围选择" >
        <yu-slider name="range"/>
      </yu-field>
      <yu-field label="级联选择" >
        <yu-cascader name="cascader" :cascader="cascader"/>
      </yu-field>
      <yu-field label="计数器" >
        <yu-counter name="counter"/>
      </yu-field>

        <yu-button type="primary">提交</yu-button>
        <yu-button>重置</yu-button>

    </yu-form>

    <div class="sub-title">表单提交</div>
    <yu-form :rules="rules" action="/api/fruits" width="600px" method="POST" @success="success">
      <yu-field label="水果id" >
        <yu-input name="id"/>
      </yu-field>

      <yu-field label="水果名称" >
        <yu-input name="fruit"/>
      </yu-field>

      <yu-button type="primary" submit>提交</yu-button>
      <yu-button>重置</yu-button>

    </yu-form>


    <!--<div class="title">加载动画</div>-->
    <!--<div class="sub-title">普通使用</div>-->
    <!--<yu-loading />-->
    <!--<div class="sub-title">添加提示语</div>-->
    <!--<yu-loading >加载中...</yu-loading>-->
    <!--<div class="sub-title">变换大小</div>-->
    <!--<yu-loading size="large" >加载中...</yu-loading>-->
    <!--<yu-loading size="big" >加载中...</yu-loading>-->
    <!--<div class="sub-title" >同行</div>-->
    <!--<yu-loading inline >加载中...</yu-loading>-->
    <!--<yu-loading inline size="large" >加载中...</yu-loading>-->
    <!--<yu-loading inline size="big" >加载中...</yu-loading>-->
    <!--<div class="sub-title">左右</div>-->
    <!--<yu-loading align="left" >加载中...</yu-loading>-->
    <!--<yu-loading align="center" >加载中...</yu-loading>-->
    <!--<yu-loading align="right" >加载中...</yu-loading>-->

    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch'
import YuButton from '../components/button'
import YuButtons from '../components/buttons'
import YuInput from '../components/input'
import YuOption from '../components/option'
import YuRadio from '../components/radio'
import YuRadios from '../components/radios'
import YuSelect from '../components/select'
import YuCounter from '../components/counter'
import YuCheckbox from '../components/checkbox'
import YuDialog from '../components/dialog'
import YuToolTip from '../components/tooltip'
import YuCollapseItem from '../components/collapse-item'
import YuCollapse from '../components/collapse'
import YuMenuItem from '../components/menu-item'
import YuCheckboxs from '../components/checkboxs'
import YuLoading from '../components/loading'
import YuCounterSide from '../components/counter-side'
import YuCascader from '../components/cascader'
import YuSwitch from '../components/switch'
import YuDropDown from '../components/dropdown'
import YuDropdownMenu from '../components/dropdown-menu'
import YuDropdownItem from '../components/dropdown-item'
import YuBreadcrumb from '../components/breadcrumb'
import YuBreadcrumbItem from '../components/breadcrumb-item'
import YuSlider from '../components/slider'
import YuTimePicker from '../components/time-picker'
import YuScrollSelect from '../components/scroll-select'
import YuDatePicker from '../components/date-picker'
import YuUpload from '../components/upload'
import YuRate from '../components/rate'
import YuForm from '../components/form'
import YuField from '../components/field'
// import {YuButton} from '../index';

export default {
  name: 'ViewContainer',
  data() {
    return {
      rules: {
        activeName: [
          // { prop: 'required', value: true, trigger: 'blur', name: '活动名称' },
          // { prop: 'min', value: 4, trigger: 'blur', name: '活动名称' },
          { prop: 'min', value: 7, trigger: 'blur', name: '活动名称' },
          // { prop: 'email', trigger: 'blur', name: '活动名称' },
          // { prop: 'minNumber', value: 4, trigger: 'blur', name: '活动名称' },
          // { prop: 'maxNumber', value: 6, trigger: 'blur', name: '活动名称' },
          // { prop: 'url', trigger: 'blur', name: '活动名称' },
          // { prop: 'integer', trigger: 'blur', name: '活动名称' },
          // { prop: 'number', trigger: 'blur', name: '活动名称' },
          // { prop: 'contain', value: 'abc', trigger: 'blur', name: '活动名称' },
          // { prop: 'notContain', value: 'abc', trigger: 'blur', name: '活动名称' },
          // { prop: 'chinese', trigger: 'blur', name: '活动名称' },
          // { prop: 'idNumber', trigger: 'blur', name: '活动名称' },
          // { prop: 'password', trigger: 'blur', name: '活动名称' },
          // { prop: 'mobile', trigger: 'blur', name: '活动名称' },
          // { prop: 'between', value: [1, 6], trigger: 'blur', name: '活动名称' },
          // { prop: 'notIn', value: ['1', '6'], trigger: 'blur', name: '活动名称' },
          // { prop: 'regex', value: /^-?\d+$/, trigger: 'blur', message: '正则整数', name: '活动名称' },
        ],
        activeName2: [
          // { prop: 'match', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'different', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredIf', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWithout', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWith', value: ['activeName'], trigger: 'blur', name: '活动名称2', other: '活动名称' },
        ],
        activeName3: [
          // { prop: 'match', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'different', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredIf', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWithout', value: 'activeName', trigger: 'blur', name: '活动名称2', other: '活动名称' },
          // { prop: 'requiredWith', value: ['activeName', 'activeName2'], trigger: 'blur', name: '活动名称3', other: '活动名称或活动名称2' },
          // { prop: 'requiredWithAll', value: ['activeName', 'activeName2'], trigger: 'blur', name: '活动名称3', other: '活动名称和活动名称2' },
          // { prop: 'requiredWithoutAll', value: ['activeName', 'activeName2'], trigger: 'blur', name: '活动名称3', other: '活动名称和活动名称2' },
        ],
        animal: [
          { prop: 'required', trigger: 'blur', name: '动物' },
        ],
        date: [
          { prop: 'required', trigger: 'blur', name: '日期' },
        ],
        time: [
          { prop: 'required', trigger: 'blur', name: '时间' },
        ],
        confirm: [
          { prop: 'accepted', trigger: 'change', name: '确认' },
        ],
        fruit: [
          { prop: 'required', trigger: 'change', name: '水果' },
        ],
        fruit2: [
          { prop: 'required', trigger: 'change', name: '水果2' },
        ],
        xin: [
          { prop: 'required', trigger: 'blur', name: '形式' },
        ],
        rate: [
          { prop: 'minNumber', value: 3, trigger: 'change', name: '形式' },
        ],
      },
      label2: ['极差2', '失望2', '一般2', '满意2', '惊喜2'],
      fetchScroll: [],
      time: {
        start: '09:00',
        step: '00:15',
        end: '18:00',
      },
      selectParam: {
        start: '09:00:00',
        end: '18:00:00',
      },
      fetchCascader: [],
      defaultValue: {
        first: {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{ value: 'yizhi', label: '一致' }, { value: 'fankui', label: '反馈' }, {
              value: 'xiaolv',
              label: '效率',
            }, { value: 'kekong', label: '可控' }],
          }, {
            value: 'daohang',
            label: '导航',
            children: [{ value: 'cexiangdaohang', label: '侧向导航' }, { value: 'dingbudaohang', label: '顶部导航' }],
          }],
        },
        second: {
          value: 'daohang',
          label: '导航',
          children: [{ value: 'cexiangdaohang', label: '侧向导航' }, { value: 'dingbudaohang', label: '顶部导航' }],
        },
        third: { value: 'dingbudaohang', label: '顶部导航' },
      },
      options: [],
      locals: [
        { value: 1, label: '电视' },
        { value: 2, label: '电脑' },
        { value: 3, label: '冰箱' },
        { value: 4, label: '洗衣机' },
        { value: 5, label: '电饭煲' },
      ],
      cascader: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致',
          }, {
            value: 'fankui',
            label: '反馈',
          }, {
            value: 'xiaolv',
            label: '效率',
          }, {
            value: 'kekong',
            label: '可控',
          }],
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航',
          }, {
            value: 'dingbudaohang',
            label: '顶部导航',
          }],
        }],
      }, {
        value: 'zujian',
        label: '组件',
        disabled: true,
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局',
          }, {
            value: 'color',
            label: 'Color 色彩',
          }, {
            value: 'typography',
            label: 'Typography 字体',
          }, {
            value: 'icon',
            label: 'Icon 图标',
          }, {
            value: 'button',
            label: 'Button 按钮',
          }],
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框',
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框',
          }, {
            value: 'input',
            label: 'Input 输入框',
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器',
          }, {
            value: 'select',
            label: 'Select 选择器',
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器',
          }, {
            value: 'switch',
            label: 'Switch 开关',
          }, {
            value: 'slider',
            label: 'Slider 滑块',
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器',
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器',
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器',
          }, {
            value: 'upload',
            label: 'Upload 上传',
          }, {
            value: 'rate',
            label: 'Rate 评分',
          }, {
            value: 'form',
            label: 'Form 表单',
          }],
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格',
          }, {
            value: 'tag',
            label: 'Tag 标签',
          }, {
            value: 'progress',
            label: 'Progress 进度条',
          }, {
            value: 'tree',
            label: 'Tree 树形控件',
          }, {
            value: 'pagination',
            label: 'Pagination 分页',
          }, {
            value: 'badge',
            label: 'Badge 标记',
          }],
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告',
          }, {
            value: 'loading',
            label: 'Loading 加载',
          }, {
            value: 'message',
            label: 'Message 消息提示',
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框',
          }, {
            value: 'notification',
            label: 'Notification 通知',
          }],
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'tabs',
            label: 'Tabs 标签页',
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑',
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单',
          }, {
            value: 'steps',
            label: 'Steps 步骤条',
          }],
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框',
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示',
          }, {
            value: 'popover',
            label: 'Popover 弹出框',
          }, {
            value: 'card',
            label: 'Card 卡片',
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯',
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板',
          }],
        }],
      }, {
        value: 'ziyuan',
        label: '资源',

        children: [{
          disabled: true,
          value: 'axure',
          label: 'Axure Components',
        }, {
          value: 'sketch',
          label: 'Sketch Templates',
        }, {
          value: 'jiaohu',
          label: '组件交互文档',
        }],
      }],
    }
  },
  methods: {
    radioChange(value) {
      console.log(value)
    },
    inputChange(value) {
      console.log(value)
    },
    checkboxChange(value) {
      console.log(value)
    },
    handleFetch(value) {
      const the = this
      fetch(`/api/restaurants/${value}`)
        .then((response) => {
          response.text().then((data) => {
            data = JSON.parse(data)
            the.options = []
            const temp = []
            data.forEach((item) => {
              temp.push({ value: item.id, label: item.value })
            })
            the.options = temp
          })
        }, (error) => {
          console.log(error.message)
        })
    },
    cascaderFetch(item) {
      const the = this
      const query = {}
      if (item.pid === 0) {
        query.pid = item.id
        fetch('/api/fetch/cascader', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        })
          .then((response) => {
            response.text().then((data) => {
              data = JSON.parse(data)
              const temp = []
              data.forEach((i) => {
                temp.push({ value: i.id, label: i.name, ...i })
              })
              the.$refs.cascader.secondCascader = temp
            })
          }, (error) => {
            console.log(error.message)
          })
      } else {
        query.pid = item.id
        query.gid = item.pid
        fetch('/api/fetch/cascader', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        })
          .then((response) => {
            response.text().then((data) => {
              data = JSON.parse(data)
              const temp = []
              data.forEach((i) => {
                temp.push({ value: i.id, label: i.name, ...i })
              })
              the.$refs.cascader.thirdCascader = temp
            })
          }, (error) => {
            console.log(error.message)
          })
      }
    },
    success(data) {
      console.log('表单接收成功', data)
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
    YuCollapseItem,
    YuCollapse,
    YuMenuItem,
    YuCheckboxs,
    YuLoading,
    YuCounterSide,
    YuCascader,
    YuSwitch,
    YuDropDown,
    YuDropdownMenu,
    YuDropdownItem,
    YuBreadcrumb,
    YuBreadcrumbItem,
    YuSlider,
    YuTimePicker,
    YuScrollSelect,
    YuDatePicker,
    YuUpload,
    YuRate,
    YuForm,
    YuField,
  },
  mounted() {
    const the = this
    fetch('/api/fetch/cascader', {
      method: 'POST',
    })
      .then((response) => {
        response.text().then((data) => {
          data = JSON.parse(data)
          the.fetchCascader = []
          const temp = []
          data.forEach((item) => {
            temp.push({ value: item.id, label: item.name, ...item })
          })
          the.fetchCascader = temp
        })
      }, (error) => {
        console.log(error.message)
      })
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

  .dropdown-list {
    .list-content {
      display: inline-block;
      float: left;
      margin-right: 50px;
    }
  }

  .my-description {
    float: right;
    color: $lighter-text;
  }

  .message {
    width: 100%;
    height: 40px;
    background: $success;
    line-height: 40px;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    margin: 20px 0;
  }
</style>
