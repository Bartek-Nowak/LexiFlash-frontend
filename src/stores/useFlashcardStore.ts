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
  const decks = ref<DecksType>({});
  const flashcards = ref<FlashcardType[]>([]);
  const page = ref(1);
  const limit = 5;
  const isLoading = ref(false);
  const flashcardIndex = ref(0);
  const isNextPageAvailable = ref(true);
  const currentCategory = ref<CategoryType>();

  const fetchFlashcards = async (deck: DeckType) => {
    if (!isNextPageAvailable.value) {
      isLoading.value = false;
      return;
    }
    try {
      isLoading.value = true;

      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `${apiUrl}/flashcards?deckId=${deck.id}&_page=${page.value}&_per_page=${limit}`
      );

      if (!response.data.next) {
        isNextPageAvailable.value = false;
      }

      flashcards.value = [...flashcards.value, ...response.data.data];
    } catch (error) {
      console.error('Error flashcards: ', error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchCategories = async () => {
    if (categories.value.length === 0) {
      isLoading.value = true;
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );
        categories.value = res.data;
        currentCategory.value = categories.value[0];
      } finally {
        isLoading.value = false;
      }
    }
  };

  const fetchDeck = async (category: CategoryType) => {
    isLoading.value = true;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/decks?categoryId=${category.id}`
      );
      decks.value[category.name] = res.data;
      console.log('Fetched decks:', decks.value);
    } finally {
      isLoading.value = false;
    }
  };

  const setCurrentCategory = (category: CategoryType) => {
    console.log('Setting current category:', category);
    return (currentCategory.value = category);
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
  };
});
