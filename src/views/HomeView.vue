<template>
  <DefaultLayout>
    <PackCard
      :header="flashcardStore.currentCategory?.name"
      :description="flashcardStore.currentCategory?.description"
    />
    <ItemList
      shape="bordered"
      :items="
        flashcardStore.currentCategory
          ? flashcardStore.decks[flashcardStore.currentCategory.name]
          : []
      "
    />
  </DefaultLayout>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { DefaultLayout } from '@/layout';
import { ItemList, PackCard } from '@/components';
import { useFlashcardStore } from '@/stores';

const flashcardStore = useFlashcardStore();

watch(
  () => flashcardStore.currentCategory,
  async (newCategory) => {
    if (newCategory) {
      await flashcardStore.fetchDeck(newCategory);
    }
  },
  { immediate: true }
);

onMounted(async () => {
  await flashcardStore.fetchCategories();
  if (flashcardStore.currentCategory) {
    await flashcardStore.fetchDeck(flashcardStore.currentCategory);
  }
});
</script>
