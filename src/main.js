import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import 'lib-flexible/flexible'
//请求
import http from "@/http"

Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
