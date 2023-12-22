import '../scss/main.scss'
import '../scss/_base.scss'
import '../scss/_components.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


// createApp(App).mount('#app');
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
