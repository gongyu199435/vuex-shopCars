import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入饿了么Ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入全局初始化样式
import './assets/base.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')