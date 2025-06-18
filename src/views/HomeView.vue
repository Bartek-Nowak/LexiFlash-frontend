<template>
  <DefaultLayout>
    <PackCard
      :header="flashcardStore.currentCategory?.name"
      :description="flashcardStore.currentCategory?.description"
      show-butoons
      show-stats
    />
    <ItemList
      v-if="flashcardStore?.decks?.length"
      shape="bordered"
      :items="flashcardStore.decks"
      @item-selected="selectDeck"
    />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { DefaultLayout } from '@/layout';
import { ItemList, PackCard } from '@/components';
import { useFlashcardStore } from '@/stores';
import { useRouter } from 'vue-router';

const router = useRouter();
const flashcardStore = useFlashcardStore();

watch(
  () => flashcardStore.currentCategory,
  async (newCategory) => {
    if (newCategory) {
      await flashcardStore.fetchDeck();
    }
  },
  { immediate: true }
);

const selectDeck = (deck: any) => {
  flashcardStore.setCurrentDeck(deck);
  router.push(`/deck/${deck.id}`);
};

onMounted(async () => {
  await flashcardStore.fetchDeck();
});
</script>
