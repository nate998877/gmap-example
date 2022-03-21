import Vue from 'vue'
import App from './App.vue'
import GmapVue from 'gmap-vue'

Vue.config.productionTip = false

Vue.use(GmapVue, {
  load: {
      key: "ADDKEYHERE",
      libraries: "places"
  },
  installComponents: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')

