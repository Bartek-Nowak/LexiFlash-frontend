<template>
  <div class="flex flex-col h-full w-full justify-between items-center">
    <div class="flex-grow flex items-center justify-center w-full">
      <Flashcard
        v-if="flashcardStore.flashcards.length"
        :flashcard="flashcardStore.flashcards[flashcardIndex]"
      />
    </div>
    <div class="flex justify-center gap-2 mb-4">
      <Button
        v-if="flashcardStore.flashcards.length"
        @click="previousFlashcard"
        :disabled="flashcardIndex === 0"
        theme="secondary"
        shape="rounded"
      >
        Previous
      </Button>

      <Button
        v-if="flashcardStore.flashcards.length"
        @click="nextFlashcard"
        theme="success"
        shape="rounded"
      >
        Next
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { Button, Flashcard } from '@/components';
import { useFlashcardStore } from '@/stores';

const flashcardStore = useFlashcardStore();

const flashcardIndex = ref(0);

watch(
  () => flashcardStore.currentDeck,
  async () => await flashcardStore.fetchFlashcards()
);

const nextFlashcard = () => {
  if (flashcardStore.flashcards.length > 0) {
    flashcardIndex.value =
      (flashcardIndex.value + 1) % flashcardStore.flashcards.length;
  }
};

const previousFlashcard = () => {
  if (flashcardStore.flashcards.length > 0) {
    flashcardIndex.value =
      (flashcardIndex.value - 1 + flashcardStore.flashcards.length) %
      flashcardStore.flashcards.length;
  }
};

onMounted(async () => await flashcardStore.fetchFlashcards());
</script>
