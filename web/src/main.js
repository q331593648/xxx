import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/style/element-variables.scss'
import '@/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small' // 默认样式的大小
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
