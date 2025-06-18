<template>
  <div class="flex items-center justify-between w-full pt-11">
    <!-- <FlashcardViewer
      v-if="!flashcardsStore.isLoading && flashcardsStore.flashcards.length > 0"
      :flashcards="flashcardsStore.flashcards"
      :is-loading="flashcardsStore.isLoading"
      :flashcard-index="0"
    /> -->
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
// import { useFlashcardStore } from '@/stores';
// import { FlashcardViewer } from '@/components';
import { useRoute } from 'vue-router';

const route = useRoute();
// const deckId = route.params.id as string;
// const flashcardsStore = useFlashcardStore();

onMounted(() => {
  // flashcardsStore.fetchFlashcards(deckId);
});
</script>
