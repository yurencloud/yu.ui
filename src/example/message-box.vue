<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="sub-title">普通 $alert 用法</div>
    <yu-button @click="click1">点击</yu-button>

    <div class="sub-title">不同类型的 $alert</div>
    <yu-button @click="click2">点击</yu-button>

    <div class="sub-title">确认事件和取消事件 $alert</div>
    <yu-button @click="click3">点击</yu-button>

    <div class="sub-title">普通 $confirm 用法</div>
    <div>其他和 $alert相同, 就多了个cancel按钮</div>
    <yu-button @click="click4">点击</yu-button>

    <div class="sub-title">普通 $prompt 用法</div>
    <div>其他和 $alert相同, 就多了个yu-input组件</div>
    <yu-button @click="click5">点击</yu-button>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuMessageBox from '../components/message-box';
import YuButton from '../components/button';

export default {
  data() {
    return {
    }
  },
  methods: {
    click1() {
      this.$alert('您输入得邮箱地址', '标题')
    },
    click2() {
      this.$alert.success('您输入得邮箱地址', '标题')
    },
    click3() {
      this.$alert('信息', '标题', {
        confirm: () => {
          this.$message('确认')
        },
        cancel: () => {
          this.$message('取消')
        },
      })
    },
    click4() {
      this.$confirm('信息', '标题', {
        confirm: () => {
          this.$message('确认')
        },
        cancel: () => {
          this.$message('取消')
        },
      })
    },
    click5() {
      this.$prompt('信息', '标题', {
        inputPattern: /^-?\d+$/,
        inputErrorMessage: '请以数字开头',

        confirm: (value) => {
          this.$message(value)
        },
        cancel: () => {
          this.$message('取消')
        },
      })
    },
  },
  components: {
    YuMessageBox,
    YuButton,
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
