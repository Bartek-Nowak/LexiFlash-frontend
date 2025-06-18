<template>
  <DefaultLayout>
    <template #sidebar>
      <Timer :seconds="100" class="mt-auto w-full" />
    </template>
    <PackCard
      :header="flashcardStore.currentCategory?.name"
      :description="flashcardStore.currentCategory?.description"
    />
    <div class="flex flex-col items-center justify-center">
      <div class="flex w-full items-center pt-5 px-5 gap-4">
        <ProgressBar class="flex-grow" :progress="progress" />
        <ErrorCount :errors="errors" />
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
        <div class="flex gap-2">
          <input
            id="answer"
            v-model="answer"
            type="text"
            class="border bg-white border-gray-300 rounded px-4"
            :placeholder="$t('flashcard.answerPlaceholder')"
          />
          <Button
            :variant="checkButtonVariant"
            ref="InputRef"
            @btn-click="checkAnswer"
            >Check ✔️</Button
          >
        </div>
        <FlashcardViewer
          v-if="
            !flashcardStore.isLoading && flashcardStore.flashcards.length > 0
          "
          :flashcards="flashcardStore.flashcards"
          :is-loading="flashcardStore.isLoading"
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
  </DefaultLayout>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useFlashcardStore } from '@/stores';
import { DefaultLayout } from '@/layout';
import {
  Button,
  ErrorCount,
  FlashcardViewer,
  PackCard,
  ProgressBar,
  Timer,
} from '@/components';

const errors = ref(0);
const progress = ref(0);
const flashcardStore = useFlashcardStore();
const flashcardIndex = ref(0);
const answer = ref('');

const checkAnswer = () => {
  const currentFlashcard = flashcardStore.flashcards[flashcardIndex.value];
  if (
    currentFlashcard &&
    answer.value.trim().toLowerCase() ===
      currentFlashcard.answer.text.toLowerCase()
  ) {
    flashcardIndex.value++;
    answer.value = '';
    progress.value =
      (flashcardIndex.value / flashcardStore.flashcards.length) * 100;
  } else {
    errors.value++;
  }
};

const checkButtonVariant = computed(() => {
  return flashcardStore.isLoading || answer.value.trim() === ''
    ? 'disabled'
    : 'primary';
});

onMounted(() => {
  // flashcardsStore.fetchFlashcards('1');
});
</script>
