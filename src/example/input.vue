<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">输入框</div>
    <div class="sub-title">基础用法</div>
    <yu-input placeholder="请输入用户名" @change="inputChange" v-model="value1"/>

    <div class="sub-title">禁用状态</div>
    <yu-input placeholder="请输入用户名" disabled v-model="value2"/>

    <div class="sub-title">可清空</div>
    <yu-input placeholder="请输入用户名" clearable v-model="value3"/>

    <div class="sub-title">图标</div>
    <yu-input placeholder="请输入用户名" prefix="icon-user" v-model="value4"/>
    <yu-input placeholder="请输入用户名" prefix="icon-user" size="small" v-model="value4"/>
    <yu-input placeholder="请输入用户名" suffix="icon-user" v-model="value4"/>
    <yu-input placeholder="请输入用户名" suffix="icon-user" size="small" v-model="value4"/>

    <div class="sub-title">长文本输入</div>
    <yu-input placeholder="请输入用户名" type="textarea" v-model="value5"/>

    <div class="sub-title">组合</div>
    <yu-input placeholder="请输入用户名" v-model="value6">
      <yu-button class="append" slot="append">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" v-model="value6">
      <yu-button type="primary" class="append" slot="append">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" v-model="value6">
      <yu-button type="danger" class="append" slot="append">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" size="small" v-model="value6">
      <yu-button class="append" slot="append" size="small">.com</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" v-model="value6">
      <yu-button class="prepend" slot="prepend">https://</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" size="small" v-model="value6">
      <yu-button class="prepend" slot="prepend" size="small">https://</yu-button>
    </yu-input>
    <yu-input placeholder="请输入用户名" v-model="value6">
      <yu-select class="append" slot="append" width="100px" v-model="value11">
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-input>
    <yu-input placeholder="请输入用户名" v-model="value6">
      <yu-select class="prepend" slot="prepend" width="100px" v-model="value12">
        <yu-option label="猫" value="1"/>
        <yu-option label="狗" value="2"/>
      </yu-select>
    </yu-input>

    <div class="sub-title">不同尺寸</div>
    <yu-input placeholder="请输入用户名" @change="inputChange" prefix="icon-user" v-model="value7"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="medium" prefix="icon-user" v-model="value7"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="small" prefix="icon-user" v-model="value7"/>
    <yu-input placeholder="请输入用户名" @change="inputChange" size="mini" prefix="icon-user" v-model="value7"/>

    <div class="sub-title">控制长度</div>
    <yu-input placeholder="请输入用户名" @change="inputChange" width="50%" v-model="value8"/>

    <div class="sub-title">输入提示(远程搜索)</div>
    <yu-input
      overflow
      remote
      @fetch="handleFetch"
      placeholder="请输入搜索内容"
      :options="options"
      v-model="value9"
    >
    </yu-input>

    <div class="sub-title">输入提示(本地搜索)</div>
    <yu-input
      overflow
      @fetch="handleFetch"
      placeholder="请输入搜索内容"
      :options="locals"
      v-model="value10"
    >
    </yu-input>

    <div class="sub-title">v-model</div>
    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>
    <div>{{value6}}</div>
    <div>{{value7}}</div>
    <div>{{value8}}</div>
    <div>{{value9}}</div>
    <div>{{value10}}</div>
    <div>{{value11}}</div>
    <div>{{value12}}</div>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button'
import YuInput from '../components/input'
import YuSelect from '../components/select'
import YuOption from '../components/option'

export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
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
    changeValue() {
      this.value3 = '改变'
    },
    inputChange(value) {
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
  },
  components: {
    YuButton,
    YuInput,
    YuSelect,
    YuOption,
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
