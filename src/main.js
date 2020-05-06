// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import preview from 'vue-photo-preview' // 图片预览组件
import 'vue-photo-preview/dist/skin.css' // 图片预览组件

import '@/icons' // icon
// import './router/index' // permission control

// import '@/styles/index.scss' // global css
import '@/assets/icons/iconfont.css' // 阿里图标库

import App from './App'
import router from './router/routers'

Vue.use(ElementUI, { locale })
Vue.use(preview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
