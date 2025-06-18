<template>
  <header class="text-white p-4">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-lg font-bold"
        >
          J
        </div>
        <div>
          <h3 class="text-lg font-semibold">Hi, Jan!</h3>
        </div>
      </div>
      <button
        class="p-2 rounded hover:bg-slate-600 transition-colors"
        title="Settings"
      >
        <i class="ion-ios-gear text-xl"></i>
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 text-center text-sm">
      <div>
        <p class="text-slate-300">Days streak</p>
        <p class="text-white text-lg font-bold">{{ daysStreak }}</p>
      </div>
      <div>
        <p class="text-slate-300">Created decks</p>
        <p class="text-white text-lg font-bold">{{ createdDecks }}</p>
      </div>
      <div>
        <p class="text-slate-300">Cards studied</p>
        <p class="text-white text-lg font-bold">{{ cardsStudied }}</p>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const daysStreak = ref(0);
const createdDecks = ref(0);
const cardsStudied = ref(0);
</script>
