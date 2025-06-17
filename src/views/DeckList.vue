<template>
  <ul>
    <li v-for="deck in deckStore.decks" :key="deck.id">
      {{ deck.name }}
      <Button variant="primary" @btn-click="goToDeck(deck.id)">Otwórz</Button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDeckStore } from '@/stores/deck';
import { Button } from '@/components';

const router = useRouter();
const deckStore = useDeckStore();

onMounted(() => {
  deckStore.fetchDecks();
});

const goToDeck = (id: string) => {
  router.push({ name: 'deck', params: { id } });
};
</script>
