<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
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
      <yu-select class="append" slot="append" width="100px">
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-input>
    <yu-input placeholder="请输入用户名">
      <yu-select class="prepend" slot="prepend" width="100px">
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-input>

    <div class="sub-title">不同尺寸</div>
    <yu-input placeholder="请输入用户名" @change="inputChange" prefix="icon-user"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="medium" prefix="icon-user"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="small" prefix="icon-user"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="mini" prefix="icon-user"/>
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

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button';
import YuInput from '../components/input';
import YuSelect from '../components/select';
import YuOption from '../components/option';

export default {
  data() {
    return {
      locals: [
        { value: 1, label: '电视' },
        { value: 2, label: '电脑' },
        { value: 3, label: '冰箱' },
        { value: 4, label: '洗衣机' },
        { value: 5, label: '电饭煲' },
      ],
      options: [],
    }
  },
  methods: {
    inputChange(value) {
      console.log(value)
    },
    handleFetch(value) {
      const the = this;
      fetch(`/api/restaurants/${value}`)
        .then((response) => {
          response.text().then((data) => {
            data = JSON.parse(data);
            the.options = [];
            const temp = [];
            data.forEach((item) => {
              temp.push({ value: item.id, label: item.value })
            });
            the.options = temp;
          });
        }, (error) => {
          console.log(error.message);
        })
    },
  },
  components: {
    YuButton,
    YuInput,
    YuSelect,
    YuOption,
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
