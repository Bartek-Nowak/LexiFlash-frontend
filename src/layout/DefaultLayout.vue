<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <div class="bg-slate-600 p-1 w-1/4 flex flex-col">
      <i class="fa-solid fa-gear fa-2x text-white self-end p-2"></i>
      <Greeting />
      <slot name="sidebar">
        <ItemList
          shape="classic"
          :header="$t('yourCategories')"
          :items="flashcardStore.categories"
          class="text-white"
          @item-selected="(item) => flashcardStore.setCurrentCategory(item)"
          @icon-clicked="() => console.log('Add category clicked')"
        />
      </slot>
    </div>
    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <main class="flex-1">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFlashcardStore } from '@/stores';
import { Greeting, ItemList } from '@/components';

const flashcardStore = useFlashcardStore();

onMounted(async () => {
  await flashcardStore.fetchCategories();
});
</script>
