// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Bus from '@u/bus'
// import store from './store'
// import Axios from 'axios'
// el css
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/globel.scss'
// element-ui css重置修饰类
import './style/el-reset.css'
// 字体
import 'font-awesome/css/font-awesome.css'
// 模拟进度条
import 'nprogress/nprogress.css'
// Vue.use(ElementUI);

Vue.prototype.$showLoading = function(){
	Bus.$emit('showLoading');
}
Vue.prototype.$hideLoading = function(){
	Bus.$emit('hideLoading');
}
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
