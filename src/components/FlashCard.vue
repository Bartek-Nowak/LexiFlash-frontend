<template>
  <div
    class="bg-white shadow-md rounded-lg p-4 mb-4 w-md m-auto flex flex-col items-center justify-center"
  >
    <h2 class="text-xl font-semibold mb-2">{{ flashcard.question.text }}</h2>
    <p v-if="showAnswer" class="text-gray-700">{{ flashcard.answer.text }}</p>
    <Button variant="primary" @click="toggleAnswer">
      {{ showAnswer ? $t('flashcard.hideAnswer') : $t('flashcard.showAnswer') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FlashcardType } from '@/types';
import { Button } from '@/components';

defineProps<{
  flashcard: FlashcardType;
}>();

const showAnswer = ref(false);

const toggleAnswer = () => {
  showAnswer.value = !showAnswer.value;
};
</script>
