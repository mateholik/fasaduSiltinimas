import Vue from 'vue'
import App from './App.vue'
import './assets/style.scss'
import './index.css'
Vue.config.productionTip = false

new Vue({
  data: {
    phone: '123-456-7890',
    email: 'example@example.com',
    facebook: '',
    hours_one: 'I-IV: 08:00 - 20:00',
    hours_two: 'V: 08:00 - 20:00',
    menuList: [
      {
        id: 'apieMus',
        name: 'Apie mus',
      },
      {
        id: 'paslaugos',
        name: 'Paslaugos',
      },
      {
        id: 'galerija',
        name: 'Galerija',
      },
      {
        id: 'fasadoSiltinimas',
        name: 'Fasado šiltinimas',
      },
      {
        id: 'kontaktai',
        name: 'Kontaktai',
      },
    ],
  },
  render: (h) => h(App),
}).$mount('#app')
