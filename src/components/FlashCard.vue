<template>
  <div
    class="bg-white min-h-[50vh] shadow-md rounded-lg p-4 mb-4 w-md m-auto flex flex-col items-center justify-center gap-4"
  >
    <h2 class="text-xl font-semibold mb-2 select-none">
      {{ flashcard.question.text }}
    </h2>
    <img
      class="select-none"
      :src="flashcard.question.image?.url"
      :alt="flashcard.question.image?.altText"
      draggable="false"
    />
    <p v-if="showAnswer" class="text-gray-700 select-none">
      {{ flashcard.answer.text }}
    </p>
    <Button variant="primary" @click="toggleAnswer">
      {{ showAnswer ? $t('flashcard.hideAnswer') : $t('flashcard.showAnswer') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FlashcardType } from '@/types';
import { Button } from '@/components';

const props = defineProps<{
  flashcard: FlashcardType;
}>();

const showAnswer = ref(false);

const toggleAnswer = () => {
  showAnswer.value = !showAnswer.value;
};

watch(
  () => props.flashcard.question.text,
  () => {
    showAnswer.value = false;
  }
);
</script>
