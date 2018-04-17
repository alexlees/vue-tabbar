<template>
  <nav :class="$style.tabbar" ref="tabbar">
    <slot/>
  </nav>
</template>

<script>
import { bus } from './util'
const NAME = 'tabbar'
export default {
  props: {
    initIndex: {
      type: Number,
      default: 0
    }
  },
  name: NAME,
  data () {
    return {
      current: 0
    }
  },
  methods: {

  },
  created () {
    console.log('created')
    bus.$on('change', (index) => {
      this.current = index
      this.$emit('change', index)
    })
    this.$nextTick(() => {
      bus.$emit('initIndex', this.initIndex)
    })
  },
  beforeDestroy () {
    // this.cancelTouch()
  },
  watch: {
    current (newCurrent, oldCurrent) {
      console.log('watch current')
      bus.$emit('initIndex', newCurrent)
      this.$emit('change', newCurrent)
      this.$emit('direction', newCurrent - oldCurrent)
    }
  }
}
</script>

<style module>
.tabbar{
  overflow: visible;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  min-height: 50px;
  text-align: center;
  z-index: 99;
  box-shadow: 0px 0 20px 0px #aaaaaa;
}
</style>
