<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>

    <div class="title">分页</div>

    <div class="sub-title">简单用法</div>
    <yu-pagination @change="showPage" :total="50"/>

    <div class="sub-title">多页效果</div>
    <yu-pagination @change="showPage" :total="100"/>

    <div class="sub-title">带背景色</div>
    <yu-pagination @change="showPage" :total="100" background/>

    <div class="sub-title">显示总页数</div>
    <yu-pagination @change="showPage" :total="100" background show-total/>

    <div class="sub-title">可调整每页条数</div>
    <yu-pagination @change="showPage" :total="100" background change-size :show-size="size"/>

    <div class="sub-title">直接前往</div>
    <yu-pagination @change="showPage" :total="100" background go-to/>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuPagination from '../components/pagination'

export default {
  data() {
    return {
      current: 1,
      currentpage: 1,
      size: [
        { label: '10条每页',
          value: 10,
        },
        { label: '20条每页',
          value: 20,
        },
        { label: '30条每页',
          value: 30,
        },
        { label: '40条每页',
          value: 40,
        },
      ],
    }
  },
  methods: {
    showPage(page) {
      console.log(page)
    },
  },
  components: {
    YuPagination,
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
