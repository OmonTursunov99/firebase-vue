import { createApp } from 'vue';
import App from './App.vue';
console.log('App started');

import firebaseMessaging from './firebase'

const app = createApp(App)

app.config.globalProperties.$messaging = firebaseMessaging

app.mount('#app');
