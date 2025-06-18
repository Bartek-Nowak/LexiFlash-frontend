<template>
  <ul>
    <!-- <li v-for="deck in deckStore.decks" :key="deck.id">
      {{ deck.name }}
      <Button variant="primary" @btn-click="goToDeck(deck.id)">Otwórz</Button>
    </li> -->
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from '@/components';

const router = useRouter();

const goToDeck = (id: string) => {
  router.push({ name: 'deck', params: { id } });
};
</script>
