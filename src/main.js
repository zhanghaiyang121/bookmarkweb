import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
Vue.prototype.$Ipconfig="http://localhost:80"
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
