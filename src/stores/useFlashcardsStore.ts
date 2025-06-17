import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type { FlashcardType } from '@/types';

export const useFlashcardsStore = defineStore('flashcards', () => {
  const flashcards = ref<FlashcardType[]>([]);
  const page = ref(1);
  const limit = 5;
  const isLoading = ref(false);
  const flashcardIndex = ref(0);
  const isNextPageAvailable = ref(true);

  async function fetchFlashcards(deckId: string) {
    if (!isNextPageAvailable.value) {
      isLoading.value = false;
      return;
    }
    try {
      isLoading.value = true;

      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `${apiUrl}/flashcards?deckId=${deckId}&_page=${page.value}&_per_page=${limit}`
      );

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

  return {
    flashcards,
    isLoading,
    flashcardIndex,
    fetchFlashcards,
    isNextPageAvailable,
  };
});
