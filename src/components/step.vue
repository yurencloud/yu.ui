<template>
  <div class="yu-step"
       :class="[{simple: rootSteps.simple},{center:rootSteps.center}]">
    <!--icon && line-->
    <div class="head">
      <div class="icon status"
           v-if="!icon"
           :class="[{'success-icon':iconSuccess},{conduct:conduct},status]">
        <i   class="iconfont"  :class="{'icon-check':iconSuccess,}"
             v-if="iconSuccess"></i>
        <span v-else class="step"></span>
      </div>
      <div class="have-icon"
           :class="[{'have-icon-success':iconSuccess,},{'have-icon-conduct':conduct},`have-${status}`]"
           v-else>
        <i class="iconfont" :class="[icon]"></i>
      </div>
      <div class="line"
           v-if="lastLine"
           :class="{'line-success':lineSuccess}">
      </div>
    </div>
    <!--title   &&  description-->
    <div class="main">
      <div class="main-title"
           :class="[{'conduct-text':conduct,'success-text':iconSuccess},status]">{{title}}</div>
      <div class="description" v-if="description">{{description}}</div>
    </div>
    <div class="arrow" v-if="rootSteps.simple">
      <i class="iconfont icon-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuStep',
  data() {
    return {
      formerly: true,
      lastLine: true,
      iconSuccess: false,
      lineSuccess: false,
      conduct: false,
    }
  },
  inject: ['rootSteps'],
  props: {
    title: String,
    description: String,
    icon: String,
    status: String,
  },
  mounted() {
    this.$el.nextElementSibling ? this.lastLine = true : this.lastLine = false
    this.conduct = !this.$el.previousElementSibling
    if (this.rootSteps.simple) {
      this.lastLine = false
    }
  },
}
</script>
