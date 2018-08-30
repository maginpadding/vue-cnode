// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import Element from 'element-ui';
import { Button } from 'element-ui';
// Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(Button);
import 'element-ui/lib/theme-chalk/index.css';
// 引入重置样式文件->已压缩
import '../static/css/normalize.css';
//更改默认行高
// import InitScreenH from './directive/InitScreenH'
// Vue.use(InitScreenH);

Vue.use(Element)

// 引用API文件
import api from './api/API.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
// 
// 引用工具类

// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
