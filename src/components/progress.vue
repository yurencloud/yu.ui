<template>
  <div class="yu-progress" :class="type">
    <div class="line-warp" v-if="type==='line'" :class="{'inside':textInside}">
      <div class="line-progress"
           :style="[{
           height:strokeHeight,
           background:bgcolor,
           width:`${percentage}%`,
           lineHeight:strokeHeight,
           }]"
      >
        <span v-if="textInside && showText" style="color:#fff">{{`${percentage}%`}}</span>
      </div>
    </div>
    <div class="circle-warp" v-else>
      <div class="text-warp">
        <div class="progress-text">
          <span v-if="!(percentage===100) && !status">{{`${percentage}%`}}</span>
          <span v-else>
            <i class="iconfont"
               :class="[
               {'icon-check':status==='success' || percentage===100},
               {'icon-close':status==='exception'}]"
               :style="{color:bgcolor}"></i>
          </span>

        </div>
      </div>
      <svg height="110" width="110">
        <circle cx="55" cy="55" r="52" fill="none" stroke="#e0e1e2" stroke-width="5" stroke-linecap="round"></circle>
        <circle class="demo2" id="bar" ref="bar" cx="55" cy="55" r="52" fill="none" :stroke="bgcolor"
                stroke-width="5"></circle>
      </svg>
    </div>
    <div class="progress-text" v-if="!textInside && type==='line' && showText">
      <span v-if="!(percentage===100)">{{`${percentage}%`}}</span>
      <span v-else><i class="iconfont icon-check-circle"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuProgress',
  props: {
    type: {
      type: String,
      default: 'line',
    },
    strokeHeight: {
      type: String,
      default: '6px',
    },
    color: {
      type: String,
      default: '#409EFF',
    },
    percentage: [Number, String],
    status: String,
    textInside: Boolean,
    showText: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      statusMap: {
        success: '#67C23A',
        exception: '#F56C6C',
      },
      bgc: String,
    }
  },
  model: {
    prop: 'percentage',
    event: 'input',
  },
  mounted() {
    if (this.type === 'circle') {
      this.$nextTick(() => {
        const demo2 = this.$refs.bar
        const circleLength = Math.floor(2 * Math.PI * demo2.getAttribute('r'))
        demo2.setAttribute('stroke-dasharray', `${circleLength * (this.percentage / 100)},10000`)
      })
    }
  },
  computed: {
    bgcolor() {
      if (this.status) {
        this.bgc = this.statusMap[this.status]
      } else if (this.percentage === 100) {
        this.bgc = '#67C23A'
      } else {
        this.bgc = this.color
      }
      return this.bgc
    },
  },
}
</script>
