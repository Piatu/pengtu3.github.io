import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueRouter from 'vue-router'  

import router from '@/router'
console.log('111',router);

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
