<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <div class="bg-slate-600 p-1 w-1/4 divide-y flex flex-col">
      <Greeting />
      <slot name="sidebar">
        <ItemList
          shape="classic"
          :header="$t('yourCategories')"
          :items="flashcardStore.categories"
          class="text-white"
          @item-selected="(item) => flashcardStore.setCurrentCategory(item)"
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
