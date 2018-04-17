<template>
  <div id="app">
    <tabbar @change="change" @direction="directionChange">
      <tabitem to="/">
        <i class="iconfont icon-home_light" slot="icon"></i>
        <span>home</span>
      </tabitem>
      <tabitem to="/find">
        <i class="iconfont icon-community_light" slot="icon"></i>
        <span>finde</span>
      </tabitem>
      <tabitem to="/me">
        <i class="iconfont icon-cart_light" slot="icon"></i>
        <span>me</span>
      </tabitem>
      <tabitem to="/x">
        <i class="iconfont icon-my_light" slot="icon"></i>
        <span>x</span>
      </tabitem>
    </tabbar>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import tabbar from './components/tabbar'
import tabitem from './components/tabitem'
export default {
  name: 'App',
  data () {
    return {
      direction: 0,
      current: 0
    }
  },
  components: {
    tabbar,
    tabitem
  },
  methods: {
    change (current) {
      this.current = current
    },
    directionChange (direction) {
      this.direction = direction
    }
  },
  computed: {
    transitionName () {
      return this.direction > 0 ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
@import url('../static/font/iconfont.css');
*{
  margin: 0;
  padding: 0;
}
#app{
  overflow: hidden;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-leave-active {
  transition: all .8s ease-in-out;
}
.slide-right-enter, .slide-right-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100vw);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .8s ease-in-out;
}
.slide-left-enter, .slide-left-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}
</style>
