import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import i18n from './plugins/i18n';
import router from './router';
import ECharts from 'vue-echarts';
import * as echarts from 'echarts';
import { loadLocaleMessages } from '@/composables';

(async () => {
  await loadLocaleMessages('pl');

  const app = createApp(App);
  app.component('VChart', ECharts);
  app.provide('echarts', echarts);
  app.use(i18n);
  app.use(router);
  app.use(createPinia());
  app.mount('#app');
})();
