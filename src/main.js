import { createApp } from 'vue';
import App from './App.vue';
import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';
import DefaultPage from './pages/DefaultPage.vue';
import TablePage from './pages/TablePage.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

const routes = [
  { path: '/', component: DefaultPage, name: 'home' },
  { path: '/invoice', name: 'invoice', component: DefaultPage },
  { path: '/acts', name: 'acts', component: DefaultPage },
  { path: '/domains', name: 'domains', component: DefaultPage },
  { path: '/hosting', name: 'hosting', component: DefaultPage },
  { path: '/cloud', name: 'cloud', component: DefaultPage },
  { path: '/support', name: 'support', component: DefaultPage },
  { path: '/partners', name: 'partners', component: TablePage },
];

const router = createRouter({ history: createWebHashHistory(), routes });

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');
