<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex w-full items-center pt-5 px-5 gap-4">
      <ProgressBar class="flex-grow" :progress="progress" />
      <ErrorCount :errors="errors" />
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex gap-2">
        <input
          id="answer"
          v-model="answer"
          type="text"
          class="border bg-white border-gray-300 rounded px-4"
          :placeholder="$t('flashcard.answerPlaceholder')"
        />
        <Button variant="primary" ref="InputRef" @btn-click="checkAnswer"
          >Check ✔️</Button
        >
      </div>
      <FlashcardViewer
        v-if="
          !flashcardsStore.isLoading && flashcardsStore.flashcards.length > 0
        "
        :flashcards="flashcardsStore.flashcards"
        :is-loading="flashcardsStore.isLoading"
        :flashcard-index="flashcardIndex"
      />
      <div
        v-else
        class="bg-white min-h-[50vh] shadow-md rounded-lg w-md flex flex-col items-center justify-center animate-pulse text-center text-gray-500"
      >
        {{ $t('flashcard.loading') }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFlashcardsStore } from '@/stores';
import { Button, ErrorCount, FlashcardViewer, ProgressBar } from '@/components';

const errors = ref(0);
const progress = ref(0);
const flashcardsStore = useFlashcardsStore();
const flashcardIndex = ref(0);
const answer = ref('');

const checkAnswer = () => {
  const currentFlashcard = flashcardsStore.flashcards[flashcardIndex.value];
  if (
    currentFlashcard &&
    answer.value.trim().toLowerCase() ===
      currentFlashcard.answer.text.toLowerCase()
  ) {
    flashcardIndex.value++;
    answer.value = '';
    progress.value =
      (flashcardIndex.value / flashcardsStore.flashcards.length) * 100;
  } else {
    errors.value++;
  }
};

onMounted(() => {
  flashcardsStore.fetchFlashcards('1');
});
</script>
