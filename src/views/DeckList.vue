<template>
  <ul>
    <li v-for="deck in decks" :key="deck.id">
      {{ deck.name }}
      <Button variant="primary" @btn-click="goToDeck(deck.id)">Otwórz</Button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { Button } from '@/components';
import type { DeckType } from '@/types';

const decks = ref<DeckType[]>([]);
const router = useRouter();

onMounted(async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/decks`);
  decks.value = res.data;
});

const goToDeck = (id: string) => {
  router.push({ name: 'deck', params: { id } });
};
</script>
