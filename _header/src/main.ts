import { createApp } from 'vue'
import Header from './Header.vue'

createApp(Header, {
  title: 'My Header App',
  showNav: true
})
.mount('#app')
