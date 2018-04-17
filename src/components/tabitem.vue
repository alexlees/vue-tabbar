<template>
  <router-link :to="to" :class="$style.tabitem" :exact-active-class="active" @click.native="clickE" ref="tabitem">
    <slot name="icon"/>
    <slot/>
  </router-link>
</template>

<script>
import initNum, { bus } from './util'
const NAME = 'tabitem'
export default {
  props: {
    to: {
      type: String,
      default: '/'
    },
    active: {
      type: String,
      default: 'router-link-exact-active'
    }
  },
  data () {
    return {
      index: 0
    }
  },
  name: NAME,
  methods: {
    clickE (e) {
      bus.$emit('change', this.index)
    },
    checkClassName () {
      this.$nextTick(() => {
        // eslint-disable-next-line
        let reg = new RegExp(this.active)
        if (this.$el.className.match(reg)) {
          this.clickE()
        }
      })
    }
  },
  created () {
    this.index = initNum()
    // this.checkClassName()
    bus.$on('initIndex', (index) => {
      console.log(index)
      if (this.index === index) {
        this.$router.push(this.to)
        this.clickE()
      }
    })
  }
}
</script>

<style module>
.tabitem{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  text-decoration: none;
  color: inherit;
}
</style>
<style>
.router-link-exact-active{
  color: #e4393c;
}
</style>
