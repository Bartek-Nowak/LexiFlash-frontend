<template>
  <div class="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 class="text-xl font-semibold mb-2">{{ flashcard.question.text }}</h2>
    <p class="text-gray-700">{{ flashcard.answer.text }}</p>
  </div>
</template>

<script setup lang="ts">
import type { FlashcardType } from '@/types';

defineProps<{
  flashcard: FlashcardType;
}>();
</script>
