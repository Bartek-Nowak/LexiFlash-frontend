import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import i18n from './i18n';
import { loadLocaleMessages } from '@/utils/useLocaleLoader.ts';

(async () => {
  await loadLocaleMessages('pl');

  const app = createApp(App);
  app.use(i18n);
  app.use(createPinia());
  app.mount('#app');
})();
