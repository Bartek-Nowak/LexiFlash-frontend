import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import i18n from './plugins/i18n';
import { loadLocaleMessages } from '@/composables';

(async () => {
  await loadLocaleMessages('pl');

  const app = createApp(App);
  app.use(i18n);
  app.use(createPinia());
  app.mount('#app');
})();
