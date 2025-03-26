import Vue from 'vue'
import App from './App.vue'

// import vElement from '../packages/index'
import vElement from '../lib/mylibs.common'

console.log(vElement)
Vue.use(vElement)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
