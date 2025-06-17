<template>
  <div class="flex items-center justify-between w-full pt-11">
    <Button :variant="previousButtonVariant" @btn-click="previousFlashcard">{{
      $t('flashcard.previous')
    }}</Button>
    <Flashcard v-if="!isLoading" :flashcard="flashcards[flashcardIndex]" />
    <div
      v-else
      class="bg-white min-h-[50vh] shadow-md rounded-lg p-4 mb-4 w-md m-auto flex flex-col items-center justify-center animate-pulse text-center text-gray-500"
    >
      {{ $t('flashcard.loading') }}
    </div>
    <Button :variant="nextButtonVariant" @btn-click="nextFlashcard">{{
      $t('flashcard.next')
    }}</Button>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
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

const previousButtonVariant = computed(() =>
  flashcardIndex.value == 0 ? 'disabled' : 'primary'
);

const nextButtonVariant = computed(() => {
  if (isLoading.value) return 'loading';
  if (flashcardIndex.value < flashcards.value.length - 1) return 'primary';
  return isNextPageAvailable.value ? 'primary' : 'disabled';
});

onMounted(() => {
  fetchFlashcards();
});
</script>
