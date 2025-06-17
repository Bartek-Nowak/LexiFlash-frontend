import { createRouter, createWebHistory } from 'vue-router';

import { HomeView, DeckManage, DeckView, SettingsView } from '@/views';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/deck-manage', name: 'deck-manage', component: DeckManage },
  { path: '/deck', name: 'deck', component: DeckView },
  { path: '/settings', name: 'settings', component: SettingsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
