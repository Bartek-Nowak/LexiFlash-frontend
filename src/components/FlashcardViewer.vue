<template>
  <div class="flex items-center justify-between w-full">
    <Flashcard v-if="!isLoading" :flashcard="flashcards[flashcardIndex]" />
  </div>
</template>
<script setup lang="ts">
import type { FlashcardType } from '@/types';
import { Flashcard } from '@/components';

defineProps<{
  flashcards: FlashcardType[];
  isLoading: boolean;
  flashcardIndex: number;
}>();
</script>
