<template>
  <div>
    <ul>
      <li v-for="card in flashcards" :key="card.id">
        <Flashcard :front="card.front" />
      </li>
    </ul>
    <button @click="page > 1 && (page--, fetchFlashcards())">Poprzednia</button>
    <button @click="(page++, fetchFlashcards())">Następna</button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Flashcard } from '@/components';
import type { FlashcardType } from '@/types';

const flashcards = ref<FlashcardType[]>([]);
const page = ref(1);
const limit = 5;

async function fetchFlashcards() {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(
      `${apiUrl}/flashcards?_limit=${limit}&_page=${page.value}`
    );
    flashcards.value = response.data;
  } catch (error) {
    console.error('Błąd pobierania fiszek:', error);
  }
}

onMounted(() => {
  fetchFlashcards();
});
</script>
