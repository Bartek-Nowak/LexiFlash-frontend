<template>
  <DefaultLayout>
    <template #sidebar>
      <ItemList
        shape="classic"
        class="text-white"
        :header="flashcardStore.currentCategory?.name"
        :items="flashcardStore.decks"
        @item-selected="selectDeck"
      />
    </template>

    <FlashcardViewer v-if="flashcardStore.currentDeck" />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { DefaultLayout } from '@/layout';
import { ItemList, FlashcardViewer } from '@/components';
import { useFlashcardStore } from '@/stores';

const flashcardStore = useFlashcardStore();

const selectDeck = (deck: any) => {
  flashcardStore.setCurrentDeck(deck);
};

onMounted(async () => {
  await flashcardStore.fetchDeck();
  console.log('Mounted DeckView', flashcardStore.currentCategory);
});
</script>
