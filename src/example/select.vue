<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="title">下拉选择</div>
    <div class="sub-title">基础用法</div>
    <yu-select placeholder="请选择动物" v-model="value1">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
    </yu-select>

    <div class="sub-title">多选项滚动</div>
    <yu-select placeholder="请选择动物" overflow v-model="value2">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2"/>
      <yu-option label="猪" value="3"/>
    </yu-select>

    <div class="sub-title">有禁用选项</div>
    <yu-select placeholder="请选择动物" overflow v-model="value3">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
      <yu-option label="猪" value="3"/>
    </yu-select>

    <div class="sub-title">禁用状态</div>
    <yu-select placeholder="请选择动物" overflow disabled v-model="value4">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
    </yu-select>

    <div class="sub-title">多选</div>
    <yu-select placeholder="请选择动物" overflow multi v-model="value5">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
      <yu-option label="猪" value="3"/>
      <yu-option label="虎" value="4"/>
      <yu-option label="兔" value="5"/>
    </yu-select>

    <div class="sub-title">显示多选选项</div>
    <yu-select placeholder="请选择动物" overflow multi showSelects v-model="value6">
      <yu-option label="猫" value="1"/>
      <yu-option label="狗" value="2" disabled/>
      <yu-option label="猪" value="3"/>
      <yu-option label="虎" value="4"/>
      <yu-option label="兔" value="5"/>
    </yu-select>


    <div class="sub-title">自定义选项</div>
    <div style="margin-bottom: 20px">通过自定义选项，可以对选项进行分组，显示分组标题，显示分割线等</div>
    <yu-select placeholder="请选择动物" overflow v-model="value7">
      <yu-option disabled>
        <span>人分类</span>
      </yu-option>
      <yu-option label="美女" value="1">
        <span>美女</span>
        <span style="float: right;color:#ccc;">可爱的动物</span>
      </yu-option>
      <yu-option label="帅哥" value="2">
        <span>帅哥</span>
        <span style="float: right;color:#ccc;">凶狠的动物</span>
      </yu-option>
      <yu-option disabled>
        <div style="border-bottom: 1px solid gray"></div>
      </yu-option>
      <yu-option disabled>
        <span>动物分类</span>
      </yu-option>
      <yu-option label="猫" value="3">
        <span>猫猫</span>
        <span style="float: right;color:#ccc;">可爱的动物</span>
      </yu-option>
      <yu-option label="猫" value="4">
        <span>狗狗</span>
        <span style="float: right;color:#ccc;">凶狠的动物</span>
      </yu-option>
    </yu-select>
    <yu-select placeholder="请选择动物" overflow v-model="value8">
      <yu-option label="猫" value="1">
        <div>猫猫</div>
        <div style="color:#ccc">可爱的动物</div>
      </yu-option>
      <yu-option label="猫" value="2">
        <div>狗狗</div>
        <div style="color:#ccc">凶狠的动物</div>
      </yu-option>
    </yu-select>

    <div class="sub-title">v-model</div>
    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>
    <div>{{value6}}</div>
    <div>{{value7}}</div>
    <div>{{value8}}</div>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuSelect from '../components/select'
import YuOption from '../components/option'
import YuButton from '../components/button'

export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: [],
      value6: [],
      value7: [],
      value8: [],
    }
  },
  methods: {
    onClick() {
      this.value = '1'
    },
  },

  components: {
    YuSelect,
    YuOption,
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
