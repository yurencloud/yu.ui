<template>
    <div class="yu-carousel" ref="carousel"
         :class="[type]"
         :style="{width:width,height:height}">
      <ul class="yu-img-warp">
        <slot/>
        <yu-carousel-item :src="lastSrc" v-if="!type"/>
      </ul>
      <ol v-if="!type">
        <li v-for="(value,index) in items"></li>
      </ol>
      <div class="carousel-arrow">
        <a  ref="left" href="javascript:;" class="left_arrow"><i class="iconfont icon-angle-left"></i></a>
        <a  ref="right"  href="javascript:;" class="right_arrow"><i class="iconfont icon-angle-right"></i></a>
      </div>
    </div>
</template>
<script>
import YuCarouselItem from './carousel-item';

export default {
  name: 'YuCarousel',
  components: {
    YuCarouselItem,
  },
  props: {
    width: String,
    height: String,
    autoplay: false,
    interval: Number,
    type: String,
    position: [],
  },
  data() {
    return {
      items: 0,
      lastSrc: String,
    }
  },
  methods: {
  },
  mounted() {
    //  动画函数
    function animate(element, target, num) {
      num = num || 10;
      clearInterval(element.timer);
      element.timer = setInterval( () => {
        let leader = element.offsetLeft;
        let step = target > leader ? num : -num;
        if (Math.abs(target - leader) >= Math.abs(step)) {
          leader += step;
          element.style.left = leader + "px";
        } else {
          clearInterval(element.timer);
          element.style.left = target + "px";
        }
      }, 15);
    }
    function animate1(element, obj, fn){
      clearInterval(element.timer);
      element.timer = setInterval(() => {
        let flag = true;
        for(let k in obj) {
          let style = k;
          let target = obj[k];
          if (k === 'opacity') {
            let leader = getStyle(element, style);
            leader = parseFloat(leader) || 0;
            leader *= 1000;
            target *= 1000;
            let step = (target - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader += step;
            element.style[style] = leader / 1000;
            if (leader !== target) {
              flag = false;
            }
          } else if (k === 'zIndex') {
            element.style.zIndex = target;
          } else {
            let leader = getStyle(element, style);
            leader = parseInt(leader) || 0;
            let step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader += step;
            element.style[style] = `${leader}px`;
            if (leader !== target) {
              flag = false;
            }
          }
        }
        if (flag) {
          clearInterval(element.timer);
          fn && fn();
        }
      }, 15);
    }
    function getStyle(element, style) {
      if ('getComputedStyle' in window) {
        return window.getComputedStyle(element, null)[style];
      } else {
        return element.currentStyle[style];
      }
    }
    let lines = null;
    const carousel = this.$refs.carousel;
    const ul = carousel.children[0];
    const leftArrow = this.$refs.left;
    const rightArrow = this.$refs.right;
    const imgs = ul.children;
    const imgWidth = carousel.offsetWidth;
    let lock = true;
    const arr = this.position;
    let count = 0;
    let timer = null;
    this.$nextTick(() => {
      lines = document.querySelector('ol').children;
      lines[0].className = 'now';
      // 小圆点
      for (let i = 0; i < lines.length; i++) {
        lines[i].index = i;
        lines[i].onclick = function() {
          for (let j = 0; j < lines.length; j++) {
            lines[j].className = '';
          }
          lines[this.index].className = 'now';
          animate(ul, -this.index * imgWidth, 50);
        }
      }
    });
    this.lastSrc = this.$children[0].src;
    this.items = this.$children.length - 1;
    document.querySelectorAll('.yu-img-warp')[0].style.width = `${this.$children.length}00%`;
    const list = document.querySelectorAll('.yu-img-warp li');
    for (let i = 0; i < list.length; i++ ) {
      list[i].style.width = `${(1 / this.$children.length) * 100}%`;
    }
    //  轮播图
    if (this.type) {
      for (let i = 0; i < imgs.length; i++) {
        animate1(imgs[i], arr[i]);
      }
    }
    rightArrow.addEventListener('click', () => {
      //  普通轮播图
      if (this.type) {
        if (lock) {
          lock = false;
          arr.unshift(arr.pop());
          for (let i = 0; i < imgs.length; i ++) {
            animate1(imgs[i], arr[i], () => {
              lock = true;
            })
          }
        }
      } else {
        if ( count >= imgs.length - 1 ) {
          ul.style.left = 0;
          count = 0
        }
        count += 1;
        animate(ul, -count * imgWidth, 50);
        for (let i = 0; i < lines.length; i++) {
          lines[i].className = '';
        }
        if (count >= imgs.length - 1) {
          lines[0].className = 'now';
        } else {
          lines[count].className = 'now';
        }
      }
    });
    //  左箭头
    leftArrow.addEventListener('click', () => {
      if (this.type) {
        if (lock) {
          lock = false;
          arr.push(arr.shift());
          for (let i = 0; i < imgs.length; i++) {
            animate1(imgs[i], arr[i] , () => {
              lock = true;
            })
          }
        }
      } else {
        //  普通轮播图
        if (count <= 0) {
          count = imgs.length - 1;
          ul.style.left = `${-count * imgWidth}px`;
        }
        count -= 1;
        animate(ul, -count * imgWidth, 50);

        for (let i = 0; i < lines.length; i++){
          lines[i].className = '';
        }
        lines[count].className = 'now';
      }
    });
    //  line

    //  自动播放
    let that = this;
    function auto() {
      timer = setInterval(() => {
        rightArrow.click();
      }, that.interval);
    }
    if (this.autoplay) {
      auto();
      carousel.onmouseover = () => {
        clearInterval(timer);
      };
      carousel.onmouseout = () => {
        clearInterval(timer);
        auto();
      }
    }
  },
}
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-carousel{
    overflow: hidden;
    position: relative;
    .yu-img-warp{
      height: 100%;
      position: absolute;
      padding: 0;
      margin: 0;
      li{
        list-style: none;
        float: left;
      }
    }
    ol{
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      li{
        list-style: none;
        float: left;
        margin-top: 4px;
        margin-left: 10px;
        cursor: pointer;
        height: 3px;
        width: 30px;
        background-color: $background;
      }
      li.now{
        background-color: $info;
      }
    }
    .carousel-arrow{
      a{
        width: 30px;
        position: absolute;
        height: 30px;
        display: inline-block;
        background-color:$background ;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        text-decoration: none;
        color: #fff;
        top: 50%;
        transform: translateY(-50%);
        transition: all .3s linear;
        opacity: 0;
        z-index: 999;
        i{
          font-size: $huge;
        }
      }
      .left_arrow{
        left: -30px;
        &:hover{
          background-color:$info ;
        }
      }
      .right_arrow{
        right: -30px;
        &:hover{
          background-color:$info ;
        }
      }
    }
    &:hover{
      .left_arrow{
        left: 10px;
        opacity: .7;
      }
      .right_arrow{
        right: 10px;
        opacity: .7;
      }
    }
  }
  /*旋转木马效果*/
  blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}
  body,button,input,select,textarea{font:12px/1.5 "Microsoft YaHei", "微软雅黑", SimSun, "宋体", sans-serif;color: #666;}
  ol,ul{list-style:none}
  a{text-decoration:none}
  fieldset,img{border:0;vertical-align:top;}
  a,input,button,select,textarea{outline:none;}
  a,button{cursor:pointer;}
  .yu-carousel.card{
    margin:100px auto;
    position: relative;
    .yu-img-warp{
      height: 100%;
      li{
        position: absolute;
        left: 200px;
        top: 0;
      }
    }
  }

</style>
