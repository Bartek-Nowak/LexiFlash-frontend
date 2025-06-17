import { createRouter, createWebHistory } from 'vue-router';

import {
  HomeView,
  DeckManage,
  DeckView,
  SettingsView,
  DeckList,
} from '@/views';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/deck-list', name: 'deck-list', component: DeckList },
  { path: '/deck-manage', name: 'deck-manage', component: DeckManage },
  { path: '/deck/:id', name: 'deck', component: DeckView, props: true },
  { path: '/settings', name: 'settings', component: SettingsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
