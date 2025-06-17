<template>
  <div>
    <Flashcard v-if="!isLoading" :flashcard="flashcards[flashcardIndex]" />
    <Button variant="primary" @btn-click="previousFlashcard">{{
      $t('previous')
    }}</Button>
    <Button variant="secondary" @btn-click="nextFlashcard">{{
      $t('next')
    }}</Button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Flashcard, Button } from '@/components';
import type { FlashcardType } from '@/types';

const flashcards = ref<FlashcardType[]>([]);
const page = ref(1);
const limit = 5;
const isLoading = ref(true);
const flashcardIndex = ref(0);
const isNextPageAvailable = ref(true);

async function fetchFlashcards() {
  if (!isNextPageAvailable.value) {
    isLoading.value = false;
    return;
  }
  try {
    isLoading.value = true;

    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(
      `${apiUrl}/flashcards?_page=${page.value}&_per_page=${limit}`
    );
    console.log('Pobrane fiszki:', ...flashcards.value, ...response.data.data);
    if (!response.data.next) {
      isNextPageAvailable.value = false;
    }
    flashcards.value = [...flashcards.value, ...response.data.data];
  } catch (error) {
    console.error('Błąd pobierania fiszek:', error);
  } finally {
    isLoading.value = false;
  }
}

const nextFlashcard = () => {
  if (flashcardIndex.value < flashcards.value.length - 1) {
    flashcardIndex.value++;
  } else {
    page.value++;
    fetchFlashcards().then(() => {
      if (flashcardIndex.value < flashcards.value.length - 1) {
        flashcardIndex.value++;
      }
    });
  }
};

const previousFlashcard = () => {
  if (flashcardIndex.value > 0) {
    flashcardIndex.value--;
  }
};

onMounted(() => {
  fetchFlashcards();
});
</script>
