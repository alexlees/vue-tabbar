import tabBar from './tabbar.vue'
import tabItem from './tabitem.vue'

const tab = {
  install (Vue) {
    Vue.component(tabBar.name, tabBar)
    Vue.component(tabItem.name, tabItem)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(tab.install)
}

export default tab

export {
  tabItem,
  tabBar
}
