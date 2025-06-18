import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type { FlashcardType } from '@/types';

interface CategoryType {
  id: string;
  name: string;
  description: string;
}

interface DeckType {
  id: string;
  categoryId: string;
  name: string;
}

interface DecksType {
  [key: string]: DeckType[];
}

export const useFlashcardStore = defineStore('flashcard', () => {
  const categories = ref<CategoryType[]>([]);
  const decks = ref<DeckType[]>([]);
  const page = ref(1);
  const limit = 15;
  const isLoading = ref(false);
  const flashcardIndex = ref(0);
  const isNextPageAvailable = ref(true);
  const currentCategory = ref<CategoryType>();
  const currentDeck = ref<DeckType>();
  const flashcards = ref<FlashcardType[]>([]);

  const fetchFlashcards = async () => {
    try {
      isLoading.value = true;

      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `${apiUrl}/flashcards?deckId=${currentDeck.value?.id}&_page=${page.value}&_per_page=${limit}`
      );

      if (!response.data.next) {
        isNextPageAvailable.value = false;
      }

      flashcards.value = response.data.data;
    } catch (error) {
      console.error('Error flashcards: ', error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchCategories = async () => {
    if (categories.value.length !== 0) return;
    isLoading.value = true;
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      categories.value = res.data;
      currentCategory.value = categories.value[0];
    } finally {
      isLoading.value = false;
    }
  };

  const fetchDeck = async () => {
    if (categories.value.length === 0) {
      await fetchCategories();
    }
    isLoading.value = true;
    try {
      if (!currentCategory.value) {
        throw new Error('Current category is undefined');
      }
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/decks?categoryId=${currentCategory.value.id}`
      );
      decks.value = res.data;
      currentDeck.value = decks.value[0];
    } finally {
      isLoading.value = false;
    }
  };

  const setCurrentCategory = (category: CategoryType) => {
    return (currentCategory.value = category);
  };

  const setCurrentDeck = (deck: DeckType) => {
    return (currentDeck.value = deck);
  };

  return {
    isNextPageAvailable,
    isLoading,
    flashcards,
    flashcardIndex,
    fetchFlashcards,
    categories,
    currentCategory,
    setCurrentCategory,
    fetchCategories,
    decks,
    fetchDeck,
    setCurrentDeck,
    currentDeck,
  };
});
